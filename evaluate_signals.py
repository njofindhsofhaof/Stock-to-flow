#!/usr/bin/env python3
"""
evaluate_signals.py
-------------------
Đối chiếu signal với giá sau ~5 phiên giao dịch (~1 tuần).

Cách dùng:
    python3 evaluate_signals.py               # lấy data từ GitHub
    python3 evaluate_signals.py --local       # dùng market_history.json local
    python3 evaluate_signals.py --min-days 3  # cho phép đánh giá từ 3 ngày trở lên

Output (lưu trong ~/Project/Stock2Flow_Automation/):
    signal_eval.csv   — chi tiết từng signal
    signal_eval.md    — báo cáo tóm tắt
"""

from __future__ import annotations

import argparse
import csv
import json
import urllib.request
from datetime import datetime, timedelta
from pathlib import Path

GITHUB_URL = (
    "https://raw.githubusercontent.com/"
    "njofindhsofhaof/Stock-to-flow/main/market_history.json"
)

OUTPUT_DIR = Path.home() / "Project" / "Stock2Flow_Automation"

# Số ngày tối thiểu / tối đa để ghép cặp snapshot (tính theo calendar days)
MIN_DAYS = 5
MAX_DAYS = 10

# Ngưỡng đánh giá đúng/sai
FLAT_THRESHOLD = 2.0  # ±2% → HOLD/REDUCE xem là đúng

SIGNAL_DIRECTION = {
    "BUY":    "up",
    "WATCH":  "up",
    "HOLD":   "flat",
    "REDUCE": "down",
    "SELL":   "down",
    "AVOID":  "down",
}


def fetch_history(local: bool) -> dict:
    if local:
        path = Path(__file__).parent / "market_history.json"
        return json.loads(path.read_text())
    with urllib.request.urlopen(GITHUB_URL) as r:
        return json.loads(r.read().decode())


def parse_date(s: str) -> datetime:
    return datetime.strptime(s[:10], "%Y-%m-%d")


def is_correct(signal: str, ret: float) -> bool:
    direction = SIGNAL_DIRECTION.get(signal, "flat")
    if direction == "up":
        return ret > 0
    if direction == "down":
        return ret < 0
    # flat
    return abs(ret) <= FLAT_THRESHOLD


def main(local: bool, min_days: int) -> None:
    print("Fetching market_history.json...")
    history = fetch_history(local)
    snapshots = history.get("snapshots", [])

    if len(snapshots) < 2:
        print("Chưa đủ snapshots để đánh giá (cần ít nhất 2).")
        return

    # Sắp xếp theo ngày
    snapshots.sort(key=lambda s: s["date"])

    # Build index: date_str → rows dict (symbol → row)
    index: dict[str, dict[str, dict]] = {}
    for snap in snapshots:
        rows_by_symbol = {r["symbol"]: r for r in snap.get("rows", [])}
        index[snap["date"]] = rows_by_symbol

    dates = list(index.keys())

    # Ghép cặp (D_entry, D_exit) trong khoảng min_days..MAX_DAYS calendar days
    pairs: list[tuple[str, str]] = []
    for i, d_entry in enumerate(dates):
        dt_entry = parse_date(d_entry)
        for d_exit in dates[i + 1 :]:
            dt_exit = parse_date(d_exit)
            gap = (dt_exit - dt_entry).days
            if min_days <= gap <= MAX_DAYS:
                pairs.append((d_entry, d_exit))
                break  # lấy snapshot gần nhất trong khoảng

    if not pairs:
        print(
            f"Chưa có cặp snapshot nào cách nhau {min_days}–{MAX_DAYS} ngày.\n"
            f"Snapshots hiện có: {dates}\n"
            "Cần đợi thêm data (~2 tuần giao dịch)."
        )
        return

    # Tính kết quả
    records = []
    for d_entry, d_exit in pairs:
        entry_rows = index[d_entry]
        exit_rows  = index[d_exit]
        gap_days   = (parse_date(d_exit) - parse_date(d_entry)).days

        for symbol, row in entry_rows.items():
            if symbol not in exit_rows:
                continue
            signal = row.get("signal", "")
            if signal not in SIGNAL_DIRECTION:
                continue

            p_entry = row.get("price", 0)
            p_exit  = exit_rows[symbol].get("price", 0)
            if not p_entry or not p_exit:
                continue

            ret = (p_exit - p_entry) / p_entry * 100
            correct = is_correct(signal, ret)

            records.append({
                "date_signal": d_entry,
                "date_eval":   d_exit,
                "gap_days":    gap_days,
                "symbol":      symbol,
                "section":     row.get("section", ""),
                "category":    row.get("category", ""),
                "signal":      signal,
                "phase":       row.get("phase", ""),
                "rotation":    row.get("rotation", ""),
                "price_entry": round(p_entry, 2),
                "price_exit":  round(p_exit, 2),
                "return_pct":  round(ret, 2),
                "direction":   SIGNAL_DIRECTION[signal],
                "result":      "UP" if ret > FLAT_THRESHOLD else "DOWN" if ret < -FLAT_THRESHOLD else "FLAT",
                "correct":     "Y" if correct else "N",
            })

    if not records:
        print("Không có đủ dữ liệu để đánh giá.")
        return

    # Ghi CSV
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    csv_path = OUTPUT_DIR / "signal_eval.csv"
    fieldnames = list(records[0].keys())
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(records)
    print(f"Đã ghi {len(records)} dòng → {csv_path}")

    # Thống kê
    from collections import defaultdict

    by_signal: dict[str, list] = defaultdict(list)
    by_section: dict[str, list] = defaultdict(list)
    for r in records:
        by_signal[r["signal"]].append(r["correct"] == "Y")
        by_section[r["section"]].append(r["correct"] == "Y")

    lines = ["# Signal Evaluation Report\n"]
    lines.append(f"- Snapshots đánh giá: {[p[0] + ' → ' + p[1] for p in pairs]}")
    lines.append(f"- Tổng signal: {len(records)}")
    lines.append(f"- Ngưỡng HOLD/REDUCE: ±{FLAT_THRESHOLD}%\n")

    lines.append("## Accuracy theo Signal\n")
    lines.append(f"{'Signal':<8} {'Đúng':>5} {'Tổng':>5} {'%':>6}")
    lines.append("-" * 28)
    signal_order = ["BUY", "WATCH", "HOLD", "REDUCE", "SELL", "AVOID"]
    for sig in signal_order:
        if sig not in by_signal:
            continue
        lst = by_signal[sig]
        pct = sum(lst) / len(lst) * 100
        lines.append(f"{sig:<8} {sum(lst):>5} {len(lst):>5} {pct:>5.0f}%")

    lines.append("\n## Accuracy theo Section\n")
    lines.append(f"{'Section':<10} {'Đúng':>5} {'Tổng':>5} {'%':>6}")
    lines.append("-" * 28)
    for sec in ["Index", "ETF", "Stock", "Crypto"]:
        if sec not in by_section:
            continue
        lst = by_section[sec]
        pct = sum(lst) / len(lst) * 100
        lines.append(f"{sec:<10} {sum(lst):>5} {len(lst):>5} {pct:>5.0f}%")

    total = [r["correct"] == "Y" for r in records]
    lines.append(f"\n**Overall accuracy: {sum(total)}/{len(total)} = {sum(total)/len(total)*100:.0f}%**")

    # Chi tiết sai
    wrong = [r for r in records if r["correct"] == "N"]
    if wrong:
        lines.append("\n## Signal Sai\n")
        lines.append(f"{'Date':<12} {'Symbol':<6} {'Signal':<7} {'Entry':>8} {'Exit':>8} {'Ret%':>7}")
        lines.append("-" * 52)
        for r in sorted(wrong, key=lambda x: x["return_pct"]):
            lines.append(
                f"{r['date_signal']:<12} {r['symbol']:<6} {r['signal']:<7} "
                f"{r['price_entry']:>8.2f} {r['price_exit']:>8.2f} {r['return_pct']:>+7.2f}%"
            )

    report = "\n".join(lines)
    md_path = OUTPUT_DIR / "signal_eval.md"
    md_path.write_text(report, encoding="utf-8")
    print(f"Báo cáo → {md_path}\n")
    print(report)

    # Xuất HTML
    total_correct = sum(total)
    total_count = len(total)
    overall_pct = total_correct / total_count * 100 if total_count else 0

    signal_colors = {
        "BUY": "#24a148", "WATCH": "#7c3aed", "HOLD": "#d6a21f",
        "REDUCE": "#e8824a", "SELL": "#ef6f7a", "AVOID": "#b74b54",
    }

    def sig_badge(sig):
        c = signal_colors.get(sig, "#666")
        return f'<span style="background:{c};color:#fff;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:700">{sig}</span>'

    def ret_cell(val):
        color = "#4ade80" if val > 0 else "#f87171" if val < 0 else "#9ca3af"
        return f'<span style="color:{color};font-weight:600">{val:+.2f}%</span>'

    def correct_badge(c):
        if c == "Y":
            return '<span style="color:#4ade80;font-weight:700">✓</span>'
        return '<span style="color:#f87171;font-weight:700">✗</span>'

    def pct_bar(pct):
        color = "#4ade80" if pct >= 70 else "#facc15" if pct >= 50 else "#f87171"
        return (
            f'<div style="display:flex;align-items:center;gap:8px">'
            f'<div style="flex:1;background:#1e2530;border-radius:4px;height:8px">'
            f'<div style="width:{pct:.0f}%;background:{color};height:8px;border-radius:4px"></div></div>'
            f'<span style="color:{color};font-weight:700;width:36px;text-align:right">{pct:.0f}%</span></div>'
        )

    # Summary rows
    sig_rows = ""
    for sig in ["BUY", "WATCH", "HOLD", "REDUCE", "SELL", "AVOID"]:
        if sig not in by_signal:
            continue
        lst = by_signal[sig]
        pct = sum(lst) / len(lst) * 100
        sig_rows += f"<tr><td>{sig_badge(sig)}</td><td>{sum(lst)}</td><td>{len(lst)}</td><td>{pct_bar(pct)}</td></tr>"

    sec_rows = ""
    for sec in ["Index", "Commodity", "ETF", "Stock", "Crypto"]:
        if sec not in by_section:
            continue
        lst = by_section[sec]
        pct = sum(lst) / len(lst) * 100
        sec_rows += f"<tr><td>{sec}</td><td>{sum(lst)}</td><td>{len(lst)}</td><td>{pct_bar(pct)}</td></tr>"

    # Detail rows — all records sorted by date then symbol
    detail_rows = ""
    for r in sorted(records, key=lambda x: (x["date_signal"], x["section"], x["symbol"])):
        ret = r["return_pct"]
        detail_rows += (
            f"<tr class='{'wrong' if r['correct']=='N' else ''}'>"
            f"<td>{r['date_signal']}</td>"
            f"<td>{r['date_eval']}</td>"
            f"<td><strong>{r['symbol']}</strong></td>"
            f"<td>{r['section']}</td>"
            f"<td>{r['category']}</td>"
            f"<td>{sig_badge(r['signal'])}</td>"
            f"<td>{r['phase']}</td>"
            f"<td style='font-size:11px'>{r['rotation']}</td>"
            f"<td class='mono'>{r['price_entry']:.2f}</td>"
            f"<td class='mono'>{r['price_exit']:.2f}</td>"
            f"<td class='mono'>{ret_cell(ret)}</td>"
            f"<td>{correct_badge(r['correct'])}</td>"
            f"</tr>"
        )

    pairs_str = ", ".join(f"{a} → {b}" for a, b in pairs)
    html = f"""<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Signal Evaluation Report</title>
<style>
  *{{box-sizing:border-box;margin:0;padding:0}}
  body{{background:#0d1117;color:#e6edf3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:13px;padding:24px}}
  h1{{font-size:20px;font-weight:700;margin-bottom:4px}}
  h2{{font-size:14px;font-weight:600;color:#858d9b;text-transform:uppercase;letter-spacing:.08em;margin:24px 0 10px}}
  .meta{{color:#858d9b;font-size:12px;margin-bottom:24px}}
  .cards{{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:24px}}
  .card{{background:#12171e;border:1px solid #1e2530;border-radius:8px;padding:16px}}
  .card .val{{font-size:28px;font-weight:700;margin-bottom:2px}}
  .card .lbl{{color:#858d9b;font-size:11px;text-transform:uppercase}}
  .grid2{{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px}}
  table{{width:100%;border-collapse:collapse}}
  th{{text-align:left;padding:8px 10px;color:#858d9b;font-size:11px;font-weight:700;text-transform:uppercase;border-bottom:1px solid #1e2530}}
  td{{padding:8px 10px;border-bottom:1px solid #1a1f28;vertical-align:middle}}
  tr.wrong td{{background:#1a0f0f}}
  tr:hover td{{background:#161b22}}
  .mono{{font-variant-numeric:tabular-nums;font-family:monospace}}
  .panel{{background:#12171e;border:1px solid #1e2530;border-radius:8px;padding:16px;overflow-x:auto}}
  .overall{{font-size:18px;font-weight:700}}
  .green{{color:#4ade80}}.yellow{{color:#facc15}}.red{{color:#f87171}}
</style>
</head>
<body>
<h1>Signal Evaluation Report</h1>
<p class="meta">Snapshots: {pairs_str} &nbsp;|&nbsp; Ngưỡng HOLD/REDUCE: ±{FLAT_THRESHOLD}% &nbsp;|&nbsp; Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}</p>

<div class="cards">
  <div class="card">
    <div class="val {'green' if overall_pct>=70 else 'yellow' if overall_pct>=50 else 'red'}">{overall_pct:.0f}%</div>
    <div class="lbl">Overall Accuracy</div>
  </div>
  <div class="card">
    <div class="val">{total_correct}/{total_count}</div>
    <div class="lbl">Signal đúng / tổng</div>
  </div>
  <div class="card">
    <div class="val">{len(pairs)}</div>
    <div class="lbl">Cặp snapshot đánh giá</div>
  </div>
</div>

<div class="grid2">
  <div class="panel">
    <h2>Accuracy theo Signal</h2>
    <table>
      <thead><tr><th>Signal</th><th>Đúng</th><th>Tổng</th><th>Accuracy</th></tr></thead>
      <tbody>{sig_rows}</tbody>
    </table>
  </div>
  <div class="panel">
    <h2>Accuracy theo Section</h2>
    <table>
      <thead><tr><th>Section</th><th>Đúng</th><th>Tổng</th><th>Accuracy</th></tr></thead>
      <tbody>{sec_rows}</tbody>
    </table>
  </div>
</div>

<div class="panel">
  <h2>Chi tiết tất cả Signal</h2>
  <table>
    <thead><tr>
      <th>Date</th><th>Eval</th><th>Symbol</th><th>Section</th><th>Cat</th>
      <th>Signal</th><th>Phase</th><th>Rotation</th>
      <th>Entry</th><th>Exit</th><th>Return</th><th>OK</th>
    </tr></thead>
    <tbody>{detail_rows}</tbody>
  </table>
</div>
</body>
</html>"""

    html_path = OUTPUT_DIR / "signal_eval.html"
    html_path.write_text(html, encoding="utf-8")
    print(f"HTML → {html_path}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--local", action="store_true", help="Dùng file local thay vì GitHub")
    parser.add_argument("--min-days", type=int, default=MIN_DAYS, help="Số ngày tối thiểu giữa 2 snapshot")
    args = parser.parse_args()
    main(local=args.local, min_days=args.min_days)
