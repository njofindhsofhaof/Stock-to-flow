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


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--local", action="store_true", help="Dùng file local thay vì GitHub")
    parser.add_argument("--min-days", type=int, default=MIN_DAYS, help="Số ngày tối thiểu giữa 2 snapshot")
    args = parser.parse_args()
    main(local=args.local, min_days=args.min_days)
