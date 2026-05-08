from __future__ import annotations

from datetime import datetime
import json
from pathlib import Path

import numpy as np
import pandas as pd
import yfinance as yf

try:
    import pandas_ta as ta
except Exception:
    ta = None


ASSETS = [
    {"symbol": "SP500", "data_symbol": "^GSPC", "name": "S&P 500", "category": "Broad", "section": "Index"},
    {"symbol": "GLD", "data_symbol": "GLD", "name": "Gold", "category": "Commodity", "section": "Index"},
    {"symbol": "SLV", "data_symbol": "SLV", "name": "Silver", "category": "Commodity", "section": "Index"},
    {"symbol": "URA", "data_symbol": "URA", "name": "Uranium", "category": "Commodity", "section": "Index"},
    {"symbol": "CL", "data_symbol": "CL=F", "name": "Crude Oil", "category": "Commodity", "section": "Index"},
    {"symbol": "XLE", "data_symbol": "XLE", "name": "Energy", "category": "Energy", "section": "ETF"},
    {"symbol": "XLK", "data_symbol": "XLK", "name": "Technology", "category": "Tech", "section": "ETF"},
    {"symbol": "XLU", "data_symbol": "XLU", "name": "Utilities", "category": "Defensive", "section": "ETF"},
    {"symbol": "XLV", "data_symbol": "XLV", "name": "Health Care", "category": "Health", "section": "ETF"},
    {"symbol": "XLC", "data_symbol": "XLC", "name": "Communication Services", "category": "Comm", "section": "ETF"},
    {"symbol": "XLF", "data_symbol": "XLF", "name": "Financials", "category": "Financial", "section": "ETF"},
    {"symbol": "XLRE", "data_symbol": "XLRE", "name": "Real Estate", "category": "Real Estate", "section": "ETF"},
    {"symbol": "XLI", "data_symbol": "XLI", "name": "Industrials", "category": "Industrial", "section": "ETF"},
    {"symbol": "XLB", "data_symbol": "XLB", "name": "Materials", "category": "Materials", "section": "ETF"},
    {"symbol": "XLY", "data_symbol": "XLY", "name": "Consumer Discretionary", "category": "Consumer", "section": "ETF"},
    {"symbol": "XLP", "data_symbol": "XLP", "name": "Consumer Staples", "category": "Defensive", "section": "ETF"},
    {"symbol": "SOX", "data_symbol": "SOXX", "name": "Semiconductors", "category": "Semis", "section": "ETF"},
    {"symbol": "AVGO", "data_symbol": "AVGO", "name": "AVGO", "category": "Semis", "section": "Stock"},
    {"symbol": "SMTC", "data_symbol": "SMTC", "name": "SMTC", "category": "Semis", "section": "Stock"},
    {"symbol": "CRDO", "data_symbol": "CRDO", "name": "CRDO", "category": "Semis", "section": "Stock"},
    {"symbol": "ALAB", "data_symbol": "ALAB", "name": "ALAB", "category": "Semis", "section": "Stock"},
    {"symbol": "GFS", "data_symbol": "GFS", "name": "GFS", "category": "Semis", "section": "Stock"},
    {"symbol": "QUBT", "data_symbol": "QUBT", "name": "QUBT", "category": "Semis", "section": "Stock"},
    {"symbol": "COHU", "data_symbol": "COHU", "name": "COHU", "category": "Semis", "section": "Stock"},
    {"symbol": "LWLG", "data_symbol": "LWLG", "name": "LWLG", "category": "Semis", "section": "Stock"},
    {"symbol": "POET", "data_symbol": "POET", "name": "POET", "category": "Semis", "section": "Stock"},
    {"symbol": "VMI", "data_symbol": "VMI", "name": "VMI", "category": "Industrial", "section": "Stock"},
    {"symbol": "ETN", "data_symbol": "ETN", "name": "ETN", "category": "Industrial", "section": "Stock"},
    {"symbol": "UNP", "data_symbol": "UNP", "name": "UNP", "category": "Industrial", "section": "Stock"},
    {"symbol": "JBHT", "data_symbol": "JBHT", "name": "JBHT", "category": "Industrial", "section": "Stock"},
    {"symbol": "ODFL", "data_symbol": "ODFL", "name": "ODFL", "category": "Industrial", "section": "Stock"},
    {"symbol": "AGCO", "data_symbol": "AGCO", "name": "AGCO", "category": "Industrial", "section": "Stock"},
    {"symbol": "CSTM", "data_symbol": "CSTM", "name": "CSTM", "category": "Materials", "section": "Stock"},
    {"symbol": "KMT", "data_symbol": "KMT", "name": "KMT", "category": "Materials", "section": "Stock"},
    {"symbol": "OXY", "data_symbol": "OXY", "name": "OXY", "category": "Energy", "section": "Stock"},
    {"symbol": "CIEN", "data_symbol": "CIEN", "name": "CIEN", "category": "Comm", "section": "Stock"},
    {"symbol": "ALMU", "data_symbol": "ALMU", "name": "ALMU", "category": "Tech Bio", "section": "Stock"},
    {"symbol": "MRVL", "data_symbol": "MRVL", "name": "MRVL", "category": "Tech", "section": "Stock"},
]


def flatten_columns(df: pd.DataFrame) -> pd.DataFrame:
    if isinstance(df.columns, pd.MultiIndex):
        df.columns = df.columns.get_level_values(0)
    return df


def rsi_fallback(close: pd.Series, length: int = 14) -> pd.Series:
    delta = close.diff()
    gain = delta.clip(lower=0)
    loss = -delta.clip(upper=0)
    avg_gain = gain.ewm(alpha=1 / length, min_periods=length, adjust=False).mean()
    avg_loss = loss.ewm(alpha=1 / length, min_periods=length, adjust=False).mean()
    rs = avg_gain / avg_loss
    return 100 - (100 / (1 + rs))


def calc_rsi(close: pd.Series, length: int) -> pd.Series:
    if ta is not None:
        return ta.rsi(close, length=length)
    return rsi_fallback(close, length)


def download(ticker: str, period: str = "6mo") -> pd.DataFrame | None:
    df = yf.download(ticker, period=period, interval="1d", progress=False, auto_adjust=False)
    if df.empty:
        return None
    return flatten_columns(df)


def calculate_rotation_signals(df: pd.DataFrame, spy_df: pd.DataFrame | None = None) -> pd.DataFrame:
    df = flatten_columns(df.copy())

    for n in [1, 3, 5, 10, 20, 60]:
        df[f"R{n}"] = df["Close"].pct_change(n) * 100

    for i, length in enumerate([5, 9, 14, 20, 30, 50], 1):
        df[f"RSI{i}"] = calc_rsi(df["Close"], length)
    df["RSI"] = df["RSI3"]

    df["AvgVol20"] = df["Volume"].rolling(20).mean()
    for i, n in enumerate([1, 3, 5, 7, 10, 20], 1):
        df[f"V{i}"] = (df["Volume"].shift(n) / df["AvgVol20"].shift(n)) * 100
    df["V_current"] = (df["Volume"] / df["AvgVol20"]) * 100

    df["MOM_raw"] = (
        (df["R5"] + df["R10"]) / 2
        + (df["RSI3"] - 50) / 5
        + (df["RSI1"] - df["RSI3"]) / 3
    )
    mom_mean = df["MOM_raw"].rolling(60).mean()
    mom_std = df["MOM_raw"].rolling(60).std().replace(0, np.nan)
    df["MOM"] = 50 + (df["MOM_raw"] - mom_mean) / mom_std * 10
    df["MOM"] = df["MOM"].clip(0, 100).fillna(50)
    df["MOM_raw_5"] = df["MOM_raw"].shift(5)

    if spy_df is not None and not spy_df.empty:
        spy = flatten_columns(spy_df.copy())
        spy_aligned = spy[["Close"]].reindex(df.index, method="ffill")
        df["Rel_Close"] = df["Close"] / spy_aligned["Close"]
        df["Rel_Strength"] = df["Rel_Close"].pct_change(20) * 100
    else:
        df["Rel_Strength"] = 0

    def determine_phase(row: pd.Series) -> str:
        rsi = row["RSI"]
        mom = row["MOM"]
        rel = row["Rel_Strength"]
        if rsi < 40 or (rsi < 45 and mom < 35) or row["RSI1"] < 30:
            return "Bottoming"
        if (rsi < 55 and mom > 45) or (45 < rsi < 60 and rel > -5):
            return "Early"
        if 55 <= rsi < 75 and mom > 55:
            return "Mature"
        if rsi >= 75 or (rsi >= 70 and mom > 80):
            return "Exhaustion"
        return "Mature" if rsi > 50 else "Bottoming"

    df["MAX"] = df.apply(determine_phase, axis=1)

    def determine_rotation(row: pd.Series) -> str:
        v = row["V_current"]
        if v > 120 and row["RSI1"] < 35 and row["R1"] > 0:
            return "Reflex Setup"
        if v > 110 and row["R5"] > 0 and row["MAX"] in ["Early", "Mature"]:
            return "Accumulation"
        if (v > 110 and row["R5"] < 0) or (v > 130 and row["R1"] < 0):
            return "Distribution"
        if 80 <= v <= 110 and row["R10"] > 2 and row["R5"] > 1:
            return "Accumulation (Quiet)"
        if 80 <= v <= 110 and row["R10"] < -2 and row["R5"] < 0:
            return "Distribution (Quiet)"
        if row["MOM_raw"] < row["MOM_raw_5"] and row["RSI"] > 60:
            return "Fading"
        if row["R20"] > 5:
            return "Trending up"
        return "Neutral"

    df["ROTATION"] = df.apply(determine_rotation, axis=1)
    return df


def safe_float(value: object, default: float = 0) -> float:
    if pd.isna(value):
        return default
    return float(value)


def determine_signal_v3(phase: str, rotation: str, mom: float) -> str:
    if phase == "Bottoming" and rotation in ["Distribution", "Distribution (Quiet)", "Fading"]:
        return "AVOID"
    if phase == "Exhaustion" and rotation in ["Accumulation (Quiet)", "Accumulation"]:
        return "SELL" if mom > 70 else "WATCH"
    if phase == "Exhaustion" and rotation in ["Trending up", "Neutral"]:
        return "WATCH"

    if phase == "Bottoming" and rotation == "Reflex Setup":
        return "BUY"
    if phase == "Bottoming" and rotation in ["Accumulation (Quiet)", "Accumulation"]:
        return "BUY"
    if phase == "Early" and rotation in ["Accumulation", "Accumulation (Quiet)", "Trending up"]:
        return "BUY"

    if phase == "Mature" and rotation in ["Accumulation", "Accumulation (Quiet)", "Trending up"]:
        return "HOLD"
    if phase == "Mature" and rotation == "Neutral":
        return "HOLD"
    if phase == "Early" and rotation == "Neutral":
        return "HOLD"
    if phase == "Mature" and rotation == "Reflex Setup":
        return "HOLD"

    if phase == "Mature" and rotation in ["Distribution", "Distribution (Quiet)", "Fading"]:
        return "SELL"
    if phase == "Early" and rotation in ["Distribution", "Distribution (Quiet)", "Fading"]:
        return "REDUCE"
    if phase == "Exhaustion" and rotation in ["Distribution", "Distribution (Quiet)", "Fading"]:
        return "SELL"

    if phase == "Bottoming" and rotation == "Neutral":
        return "WATCH"
    if phase == "Early" and rotation == "Reflex Setup":
        return "WATCH"
    if phase == "Neutral":
        return "NEUTRAL"

    return "NEUTRAL"


def calculate_risk_v3(section_rows: list) -> str:
    if not section_rows:
        return "Neutral"
    total = len(section_rows)
    score = 0.0
    for item in section_rows:
        phase = item.get("phase", "Neutral")
        rotation = item.get("rotation", "Neutral")
        if rotation in ["Accumulation", "Accumulation (Quiet)", "Trending up"]:
            if phase in ["Early", "Bottoming"]:
                score += 2
            elif phase == "Mature":
                score += 1
        elif rotation in ["Distribution", "Distribution (Quiet)", "Fading"]:
            if phase in ["Mature", "Exhaustion"]:
                score -= 2
            else:
                score -= 1
        if phase == "Exhaustion":
            score -= 1
        elif phase == "Mature" and rotation not in ["Accumulation", "Accumulation (Quiet)"]:
            score -= 0.5
    s = score / total
    if s >= 0.5:  return "Strong ON"
    if s >= 0.1:  return "Risk On"
    if s >= -0.3: return "Neutral"
    if s >= -0.8: return "Risk Off"
    return "Strong OFF"


def build_section_summaries(rows: list) -> dict:
    sections: dict = {}
    for row in rows:
        sec = row.get("section", "ETF")
        sections.setdefault(sec, []).append(row)
    result = {}
    for sec, items in sections.items():
        leader_row = max(items, key=lambda x: x.get("perf", {}).get("m1", 0))
        watch = sum(1 for x in items if x.get("perf", {}).get("m1", 0) > 0 and x.get("flow", 100) > 100)
        result[sec] = {
            "risk": calculate_risk_v3(items),
            "leader": leader_row["symbol"],
            "watch": watch,
        }
    return result


def main() -> None:
    root_dir = Path(__file__).parent
    spy = download("SPY")
    rows = []

    for asset in ASSETS:
        ticker = asset["data_symbol"]
        df = download(ticker)
        if df is None or len(df) < 65:
            continue

        analyzed = calculate_rotation_signals(df, spy)
        latest = analyzed.iloc[-1]
        phase = str(latest["MAX"])
        rotation = str(latest["ROTATION"])
        mom = round(safe_float(latest["MOM"]), 1)

        rows.append(
            {
                "symbol": asset["symbol"],
                "dataSymbol": asset["data_symbol"],
                "section": asset["section"],
                "name": asset["name"],
                "category": asset["category"],
                "price": round(safe_float(latest["Close"]), 2),
                "change": round(safe_float(df["Close"].pct_change().iloc[-1] * 100), 2),
                "mom": mom,
                "phase": phase,
                "volume": "Spike"
                if safe_float(latest["V_current"], 100) > 120
                else "Rising"
                if safe_float(latest["V1"], 100) > safe_float(latest["V6"], 100)
                else "Fading"
                if safe_float(latest["V1"], 100) < safe_float(latest["V6"], 100)
                else "Quiet",
                "rotation": rotation,
                "signal": determine_signal_v3(phase, rotation, mom),
                "rsi": round(safe_float(latest["RSI"], 50), 1),
                "flow": round(safe_float(latest["V_current"], 100)),
                "perf": {
                    "w1": round(safe_float(latest["R5"]), 2),
                    "m1": round(safe_float(latest["R20"]), 2),
                    "m3": round(safe_float(latest["R60"]), 2),
                },
                "returns": [
                    round(safe_float(latest["R1"]), 2),
                    round(safe_float(latest["R3"]), 2),
                    round(safe_float(latest["R5"]), 2),
                    round(safe_float(latest["R10"]), 2),
                    round(safe_float(latest["R20"]), 2),
                    round(safe_float(latest["R60"]), 2),
                ],
                "volumes": [
                    round(safe_float(latest["V1"], 100)),
                    round(safe_float(latest["V2"], 100)),
                    round(safe_float(latest["V3"], 100)),
                    round(safe_float(latest["V4"], 100)),
                    round(safe_float(latest["V5"], 100)),
                    round(safe_float(latest["V6"], 100)),
                ],
                "rsiStack": [
                    round(safe_float(latest["RSI1"], 50), 1),
                    round(safe_float(latest["RSI2"], 50), 1),
                    round(safe_float(latest["RSI3"], 50), 1),
                    round(safe_float(latest["RSI4"], 50), 1),
                    round(safe_float(latest["RSI5"], 50), 1),
                    round(safe_float(latest["RSI6"], 50), 1),
                ],
            }
        )

    if not rows:
        raise RuntimeError("No market data rows were downloaded; keeping the previous dashboard data.")

    sections = build_section_summaries(rows)
    updated_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    payload = {
        "source": "Yahoo Finance via yfinance (delayed daily data)",
        "updatedAt": updated_at,
        "sections": sections,
        "rows": rows,
    }

    history_path = root_dir / "market_history.json"
    if history_path.exists():
        history = json.loads(history_path.read_text(encoding="utf-8"))
    else:
        history = {
            "source": payload["source"],
            "snapshots": [],
        }

    snapshot_date = datetime.now().strftime("%Y-%m-%d")
    snapshot = {
        "date": snapshot_date,
        "updatedAt": updated_at,
        "sections": sections,
        "rows": rows,
    }
    snapshots = [item for item in history.get("snapshots", []) if item.get("date") != snapshot_date]
    snapshots.append(snapshot)
    snapshots.sort(key=lambda item: item.get("date", ""))
    history = {
        "source": payload["source"],
        "snapshots": snapshots,
    }
    history_path.write_text(json.dumps(history, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    js = (
        "window.marketDataMeta = "
        + json.dumps({k: payload[k] for k in ["source", "updatedAt", "sections"]}, ensure_ascii=False, indent=2)
        + ";\nwindow.marketData = "
        + json.dumps(rows, ensure_ascii=False, indent=2)
        + ";\n"
    )
    output_path = root_dir / "market_data.js"
    output_path.write_text(js, encoding="utf-8")
    print(f"Wrote market_data.js with {len(rows)} rows")
    print(f"Wrote market_history.json with {len(snapshots)} daily snapshots")


if __name__ == "__main__":
    main()
