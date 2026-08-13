window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-08-13 23:11:27",
  "sections": {
    "Index": {
      "risk": "Strong OFF",
      "leader": "SP500",
      "watch": 0
    },
    "Commodity": {
      "risk": "Strong ON",
      "leader": "URA",
      "watch": 1
    },
    "Crypto": {
      "risk": "Strong ON",
      "leader": "CRCL",
      "watch": 1
    },
    "ETF": {
      "risk": "Risk On",
      "leader": "XLK",
      "watch": 1
    },
    "Stock": {
      "risk": "Neutral",
      "leader": "CRDO",
      "watch": 0
    }
  }
};
window.marketData = [
  {
    "symbol": "SP500",
    "dataSymbol": "^GSPC",
    "section": "Index",
    "name": "US Index",
    "category": "Broad",
    "price": 7798.99,
    "change": 0.65,
    "mom": 63.1,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 67.4,
    "flow": 53,
    "perf": {
      "w1": 1.15,
      "m1": 3.52,
      "m3": 5.35
    },
    "returns": [
      0.65,
      0.59,
      1.15,
      4.86,
      3.52,
      5.35
    ],
    "volumes": [
      87,
      92,
      102,
      115,
      110,
      94
    ],
    "rsiStack": [
      79.1,
      72.4,
      67.4,
      64.2,
      62.2,
      62.8
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 53839.99,
    "change": 0.13,
    "mom": 50.6,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.0,
    "flow": 86,
    "perf": {
      "w1": -0.08,
      "m1": 2.45,
      "m3": 8.36
    },
    "returns": [
      0.13,
      -0.25,
      -0.08,
      3.13,
      2.45,
      8.36
    ],
    "volumes": [
      83,
      82,
      83,
      116,
      131,
      91
    ],
    "rsiStack": [
      60.3,
      61.5,
      61.0,
      60.6,
      60.3,
      60.5
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 6579.04,
    "change": 3.68,
    "mom": 61.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.7,
    "flow": 102,
    "perf": {
      "w1": -0.29,
      "m1": -4.05,
      "m3": -12.2
    },
    "returns": [
      3.68,
      5.12,
      -0.29,
      16.17,
      -4.05,
      -12.2
    ],
    "volumes": [
      92,
      79,
      84,
      65,
      105,
      107
    ],
    "rsiStack": [
      61.8,
      51.5,
      47.7,
      46.7,
      47.6,
      51.6
    ]
  },
  {
    "symbol": "NI225",
    "dataSymbol": "^N225",
    "section": "Index",
    "name": "Japan Index",
    "category": "Broad",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.8,
    "flow": 0,
    "perf": {
      "w1": 0,
      "m1": 0,
      "m3": 0
    },
    "returns": [
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "volumes": [
      94,
      114,
      116,
      119,
      162,
      106
    ],
    "rsiStack": [
      73.9,
      61.4,
      55.8,
      53.9,
      53.4,
      53.2
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 398.96,
    "change": -1.47,
    "mom": 60.7,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 61.6,
    "flow": 106,
    "perf": {
      "w1": 2.38,
      "m1": 9.32,
      "m3": -4.65
    },
    "returns": [
      -1.47,
      -0.89,
      2.38,
      5.78,
      9.32,
      -4.65
    ],
    "volumes": [
      131,
      143,
      154,
      89,
      93,
      123
    ],
    "rsiStack": [
      63.4,
      65.3,
      61.6,
      57.7,
      54.7,
      57.5
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 58.16,
    "change": -1.52,
    "mom": 62.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 58.8,
    "flow": 75,
    "perf": {
      "w1": 4.14,
      "m1": 15.42,
      "m3": -16.84
    },
    "returns": [
      -1.52,
      -2.1,
      4.14,
      8.71,
      15.42,
      -16.84
    ],
    "volumes": [
      121,
      143,
      92,
      97,
      110,
      99
    ],
    "rsiStack": [
      63.6,
      63.7,
      58.8,
      54.5,
      52.6,
      58.2
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 45.25,
    "change": 0.11,
    "mom": 67.6,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.0,
    "flow": 72,
    "perf": {
      "w1": 4.75,
      "m1": 15.7,
      "m3": -7.05
    },
    "returns": [
      0.11,
      1.96,
      4.75,
      13.92,
      15.7,
      -7.05
    ],
    "volumes": [
      51,
      94,
      73,
      193,
      98,
      139
    ],
    "rsiStack": [
      78.3,
      68.8,
      61.0,
      55.8,
      52.8,
      55.3
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 81.06,
    "change": -2.65,
    "mom": 52.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.3,
    "flow": 0,
    "perf": {
      "w1": 4.88,
      "m1": 2.67,
      "m3": -25.4
    },
    "returns": [
      -2.65,
      -1.3,
      4.88,
      -3.03,
      2.67,
      -25.4
    ],
    "volumes": [
      101,
      96,
      86,
      123,
      83,
      79
    ],
    "rsiStack": [
      49.6,
      50.4,
      50.3,
      49.7,
      48.9,
      48.4
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 117.05,
    "change": -2.47,
    "mom": 45.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 47.4,
    "flow": 72,
    "perf": {
      "w1": 0.27,
      "m1": -1.36,
      "m3": -6.52
    },
    "returns": [
      -2.47,
      -3.65,
      0.27,
      -6.93,
      -1.36,
      -6.52
    ],
    "volumes": [
      131,
      123,
      145,
      92,
      68,
      78
    ],
    "rsiStack": [
      42.4,
      45.0,
      47.4,
      48.9,
      50.3,
      53.8
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 35.98,
    "change": -1.26,
    "mom": 57.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.5,
    "flow": 59,
    "perf": {
      "w1": 3.04,
      "m1": 5.17,
      "m3": -12.65
    },
    "returns": [
      -1.26,
      -4.69,
      3.04,
      1.87,
      5.17,
      -12.65
    ],
    "volumes": [
      97,
      156,
      108,
      142,
      75,
      49
    ],
    "rsiStack": [
      54.1,
      55.8,
      54.5,
      52.6,
      51.2,
      52.2
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 21.78,
    "change": -3.63,
    "mom": 35.8,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.0,
    "flow": 90,
    "perf": {
      "w1": -7.16,
      "m1": -3.33,
      "m3": 1.73
    },
    "returns": [
      -3.63,
      -7.2,
      -7.16,
      -4.35,
      -3.33,
      1.73
    ],
    "volumes": [
      81,
      79,
      107,
      93,
      79,
      63
    ],
    "rsiStack": [
      27.9,
      39.0,
      44.0,
      46.1,
      47.4,
      49.7
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 67.47,
    "change": 0.43,
    "mom": 51.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 51.5,
    "flow": 68,
    "perf": {
      "w1": 0.82,
      "m1": -1.26,
      "m3": -5.72
    },
    "returns": [
      0.43,
      4.73,
      0.82,
      -4.42,
      -1.26,
      -5.72
    ],
    "volumes": [
      156,
      133,
      164,
      108,
      96,
      55
    ],
    "rsiStack": [
      55.4,
      52.0,
      51.5,
      50.9,
      50.1,
      50.7
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 63424.63,
    "change": 0.04,
    "mom": 40.4,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.6,
    "flow": 92,
    "perf": {
      "w1": -2.28,
      "m1": -1.05,
      "m3": -3.48
    },
    "returns": [
      0.04,
      -0.76,
      -2.28,
      -0.06,
      -1.05,
      -3.48
    ],
    "volumes": [
      109,
      103,
      54,
      82,
      111,
      100
    ],
    "rsiStack": [
      31.5,
      41.6,
      45.6,
      46.7,
      46.8,
      48.1
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 153.9,
    "change": 3.26,
    "mom": 57.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.2,
    "flow": 94,
    "perf": {
      "w1": 5.84,
      "m1": -4.11,
      "m3": -18.76
    },
    "returns": [
      3.26,
      3.51,
      5.84,
      -5.92,
      -4.11,
      -18.76
    ],
    "volumes": [
      77,
      78,
      76,
      97,
      118,
      82
    ],
    "rsiStack": [
      57.7,
      50.2,
      48.2,
      47.4,
      46.8,
      45.9
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 75.38,
    "change": 5.75,
    "mom": 77.5,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.4,
    "flow": 92,
    "perf": {
      "w1": 19.12,
      "m1": 24.31,
      "m3": -32.33
    },
    "returns": [
      5.75,
      12.42,
      19.12,
      17.34,
      24.31,
      -32.33
    ],
    "volumes": [
      75,
      67,
      93,
      101,
      66,
      66
    ],
    "rsiStack": [
      88.0,
      72.3,
      61.4,
      54.8,
      50.9,
      50.9
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 97.1,
    "change": 2.39,
    "mom": 57.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.8,
    "flow": 114,
    "perf": {
      "w1": 0.26,
      "m1": 3.26,
      "m3": -41.73
    },
    "returns": [
      2.39,
      -0.24,
      0.26,
      -0.65,
      3.26,
      -41.73
    ],
    "volumes": [
      76,
      87,
      68,
      100,
      80,
      43
    ],
    "rsiStack": [
      52.5,
      50.5,
      47.8,
      45.5,
      43.9,
      41.6
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 61.06,
    "change": 0.05,
    "mom": 60.0,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 64.5,
    "flow": 70,
    "perf": {
      "w1": 4.99,
      "m1": 7.09,
      "m3": 0.79
    },
    "returns": [
      0.05,
      1.46,
      4.99,
      3.56,
      7.09,
      0.79
    ],
    "volumes": [
      79,
      114,
      84,
      125,
      75,
      86
    ],
    "rsiStack": [
      73.7,
      67.8,
      64.5,
      61.8,
      59.6,
      61.4
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 190.77,
    "change": 1.01,
    "mom": 63.1,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.6,
    "flow": 56,
    "perf": {
      "w1": 2.94,
      "m1": 7.46,
      "m3": 9.41
    },
    "returns": [
      1.01,
      2.39,
      2.94,
      8.56,
      7.46,
      9.41
    ],
    "volumes": [
      67,
      73,
      74,
      146,
      161,
      80
    ],
    "rsiStack": [
      77.4,
      67.7,
      61.6,
      58.6,
      57.4,
      58.8
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 44.04,
    "change": 0.46,
    "mom": 54.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.4,
    "flow": 84,
    "perf": {
      "w1": 1.52,
      "m1": -3.14,
      "m3": 0.23
    },
    "returns": [
      0.46,
      2.11,
      1.52,
      -1.39,
      -3.14,
      0.23
    ],
    "volumes": [
      79,
      126,
      139,
      145,
      131,
      78
    ],
    "rsiStack": [
      54.7,
      45.6,
      44.4,
      44.8,
      44.3,
      38.9
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 168.38,
    "change": -0.04,
    "mom": 58.7,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 65.8,
    "flow": 71,
    "perf": {
      "w1": 2.39,
      "m1": 4.07,
      "m3": 15.55
    },
    "returns": [
      -0.04,
      -0.04,
      2.39,
      2.97,
      4.07,
      15.55
    ],
    "volumes": [
      76,
      71,
      95,
      157,
      125,
      105
    ],
    "rsiStack": [
      76.7,
      69.4,
      65.8,
      63.8,
      62.0,
      60.3
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 112.55,
    "change": 2.07,
    "mom": 60.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.7,
    "flow": 89,
    "perf": {
      "w1": 1.52,
      "m1": -0.73,
      "m3": -3.04
    },
    "returns": [
      2.07,
      1.17,
      1.52,
      2.78,
      -0.73,
      -3.04
    ],
    "volumes": [
      92,
      52,
      91,
      120,
      103,
      81
    ],
    "rsiStack": [
      64.9,
      59.9,
      56.7,
      54.4,
      52.4,
      51.4
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 58.26,
    "change": 0.59,
    "mom": 58.0,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 68.8,
    "flow": 77,
    "perf": {
      "w1": 0.78,
      "m1": 2.66,
      "m3": 12.6
    },
    "returns": [
      0.59,
      0.78,
      0.78,
      2.21,
      2.66,
      12.6
    ],
    "volumes": [
      61,
      79,
      83,
      93,
      97,
      79
    ],
    "rsiStack": [
      77.3,
      71.1,
      68.8,
      67.4,
      66.0,
      66.3
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 45.12,
    "change": 1.42,
    "mom": 50.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.8,
    "flow": 109,
    "perf": {
      "w1": -0.18,
      "m1": 1.26,
      "m3": 4.37
    },
    "returns": [
      1.42,
      0.31,
      -0.18,
      -1.83,
      1.26,
      4.37
    ],
    "volumes": [
      94,
      78,
      125,
      162,
      130,
      84
    ],
    "rsiStack": [
      56.7,
      52.1,
      51.8,
      51.9,
      50.9,
      44.9
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 185.79,
    "change": -0.05,
    "mom": 56.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.4,
    "flow": 76,
    "perf": {
      "w1": 0.56,
      "m1": 3.13,
      "m3": 8.81
    },
    "returns": [
      -0.05,
      0.64,
      0.56,
      4.15,
      3.13,
      8.81
    ],
    "volumes": [
      63,
      51,
      82,
      154,
      113,
      84
    ],
    "rsiStack": [
      64.9,
      61.7,
      59.4,
      58.0,
      56.8,
      55.4
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 52.31,
    "change": -0.51,
    "mom": 47.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.1,
    "flow": 88,
    "perf": {
      "w1": 0.27,
      "m1": 2.79,
      "m3": 4.16
    },
    "returns": [
      -0.51,
      -1.64,
      0.27,
      1.3,
      2.79,
      4.16
    ],
    "volumes": [
      86,
      105,
      82,
      152,
      99,
      63
    ],
    "rsiStack": [
      47.6,
      53.5,
      54.1,
      53.8,
      53.4,
      54.6
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 118.45,
    "change": 0.48,
    "mom": 55.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.5,
    "flow": 61,
    "perf": {
      "w1": 0.3,
      "m1": 0.95,
      "m3": 1.83
    },
    "returns": [
      0.48,
      -1.02,
      0.3,
      5.39,
      0.95,
      1.83
    ],
    "volumes": [
      60,
      57,
      60,
      122,
      96,
      71
    ],
    "rsiStack": [
      56.6,
      58.5,
      56.5,
      54.8,
      53.8,
      55.5
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 86.0,
    "change": 1.08,
    "mom": 61.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.5,
    "flow": 92,
    "perf": {
      "w1": 1.05,
      "m1": 0.22,
      "m3": 0.12
    },
    "returns": [
      1.08,
      1.24,
      1.05,
      0.62,
      0.22,
      0.12
    ],
    "volumes": [
      60,
      64,
      75,
      117,
      142,
      104
    ],
    "rsiStack": [
      69.5,
      59.8,
      56.5,
      54.8,
      53.3,
      51.0
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 550.74,
    "change": 0.76,
    "mom": 59.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.1,
    "flow": 56,
    "perf": {
      "w1": 3.42,
      "m1": 3.82,
      "m3": 11.07
    },
    "returns": [
      0.76,
      4.03,
      3.42,
      9.16,
      3.82,
      11.07
    ],
    "volumes": [
      73,
      82,
      71,
      102,
      161,
      104
    ],
    "rsiStack": [
      67.7,
      57.8,
      53.1,
      51.8,
      52.0,
      54.0
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 27.62,
    "change": -0.79,
    "mom": 50.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.0,
    "flow": 65,
    "perf": {
      "w1": 0.69,
      "m1": 0.11,
      "m3": -2.06
    },
    "returns": [
      -0.79,
      -0.72,
      0.69,
      0.51,
      0.11,
      -2.06
    ],
    "volumes": [
      94,
      45,
      53,
      91,
      148,
      59
    ],
    "rsiStack": [
      46.3,
      48.3,
      50.0,
      51.0,
      52.2,
      55.4
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 44.56,
    "change": -0.63,
    "mom": 47.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.5,
    "flow": 30,
    "perf": {
      "w1": 0.22,
      "m1": 0.18,
      "m3": -1.05
    },
    "returns": [
      -0.63,
      0.18,
      0.22,
      -2.24,
      0.18,
      -1.05
    ],
    "volumes": [
      26,
      27,
      67,
      46,
      63,
      56
    ],
    "rsiStack": [
      44.5,
      46.6,
      48.5,
      49.3,
      49.2,
      47.5
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 45.2,
    "change": 0.87,
    "mom": 50.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.6,
    "flow": 24,
    "perf": {
      "w1": -0.7,
      "m1": 0.75,
      "m3": 9.54
    },
    "returns": [
      0.87,
      0.27,
      -0.7,
      1.46,
      0.75,
      9.54
    ],
    "volumes": [
      14,
      16,
      19,
      36,
      16,
      40
    ],
    "rsiStack": [
      56.9,
      53.3,
      52.6,
      53.0,
      53.9,
      55.9
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 28.98,
    "change": -1.11,
    "mom": 37.8,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.6,
    "flow": 146,
    "perf": {
      "w1": -1.28,
      "m1": -0.81,
      "m3": -2.38
    },
    "returns": [
      -1.11,
      -1.58,
      -1.28,
      -2.51,
      -0.81,
      -2.38
    ],
    "volumes": [
      87,
      8,
      86,
      18,
      31,
      28
    ],
    "rsiStack": [
      26.0,
      37.9,
      43.6,
      46.0,
      46.3,
      41.8
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 108.55,
    "change": 0.06,
    "mom": 61.0,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.0,
    "flow": 66,
    "perf": {
      "w1": 3.22,
      "m1": 0.17,
      "m3": 1.83
    },
    "returns": [
      0.06,
      3.73,
      3.22,
      2.55,
      0.17,
      1.83
    ],
    "volumes": [
      50,
      62,
      76,
      120,
      313,
      87
    ],
    "rsiStack": [
      75.0,
      66.6,
      62.0,
      59.5,
      57.7,
      57.2
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 80.96,
    "change": -0.3,
    "mom": 41.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.7,
    "flow": 87,
    "perf": {
      "w1": -0.64,
      "m1": -1.44,
      "m3": -0.8
    },
    "returns": [
      -0.3,
      -0.69,
      -0.64,
      -3.07,
      -1.44,
      -0.8
    ],
    "volumes": [
      101,
      68,
      79,
      190,
      192,
      56
    ],
    "rsiStack": [
      33.9,
      41.1,
      45.7,
      47.9,
      47.9,
      44.1
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 13.89,
    "change": 0.43,
    "mom": 44.0,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.2,
    "flow": 42,
    "perf": {
      "w1": 0.73,
      "m1": -2.11,
      "m3": 6.6
    },
    "returns": [
      0.43,
      -0.79,
      0.73,
      -6.53,
      -2.11,
      6.6
    ],
    "volumes": [
      72,
      72,
      107,
      98,
      110,
      63
    ],
    "rsiStack": [
      35.2,
      40.4,
      44.2,
      46.6,
      47.8,
      45.3
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 86.39,
    "change": -0.43,
    "mom": 42.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.9,
    "flow": 50,
    "perf": {
      "w1": -0.63,
      "m1": 11.16,
      "m3": 18.18
    },
    "returns": [
      -0.43,
      -1.78,
      -0.63,
      -2.27,
      11.16,
      18.18
    ],
    "volumes": [
      67,
      47,
      74,
      74,
      83,
      68
    ],
    "rsiStack": [
      40.6,
      51.2,
      54.9,
      56.0,
      56.9,
      61.3
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 25.78,
    "change": -0.27,
    "mom": 60.7,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 62.0,
    "flow": 69,
    "perf": {
      "w1": 2.91,
      "m1": 2.96,
      "m3": 0.55
    },
    "returns": [
      -0.27,
      1.22,
      2.91,
      3.37,
      2.96,
      0.55
    ],
    "volumes": [
      123,
      186,
      50,
      21,
      150,
      42
    ],
    "rsiStack": [
      72.7,
      65.4,
      62.0,
      59.9,
      58.3,
      59.6
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 26.8,
    "change": 1.86,
    "mom": 59.8,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 65.0,
    "flow": 74,
    "perf": {
      "w1": 2.29,
      "m1": 6.6,
      "m3": 5.8
    },
    "returns": [
      1.86,
      -0.92,
      2.29,
      7.59,
      6.6,
      5.8
    ],
    "volumes": [
      79,
      118,
      125,
      158,
      113,
      95
    ],
    "rsiStack": [
      68.1,
      67.9,
      65.0,
      61.6,
      57.7,
      54.0
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.75,
    "change": 0.21,
    "mom": 54.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.4,
    "flow": 69,
    "perf": {
      "w1": -1.32,
      "m1": 1.77,
      "m3": -4.04
    },
    "returns": [
      0.21,
      -1.52,
      -1.32,
      2.42,
      1.77,
      -4.04
    ],
    "volumes": [
      73,
      138,
      121,
      137,
      106,
      83
    ],
    "rsiStack": [
      52.2,
      53.3,
      51.4,
      48.7,
      44.5,
      36.5
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.29,
    "change": 1.22,
    "mom": 58.0,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 43.6,
    "flow": 124,
    "perf": {
      "w1": 1.1,
      "m1": -4.27,
      "m3": -11.81
    },
    "returns": [
      1.22,
      -0.6,
      1.1,
      -1.89,
      -4.27,
      -11.81
    ],
    "volumes": [
      150,
      83,
      125,
      127,
      72,
      61
    ],
    "rsiStack": [
      53.5,
      46.5,
      43.6,
      41.7,
      38.4,
      30.2
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 265.99,
    "change": -0.81,
    "mom": 63.9,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.1,
    "flow": 81,
    "perf": {
      "w1": 15.43,
      "m1": 27.9,
      "m3": 70.21
    },
    "returns": [
      -0.81,
      10.86,
      15.43,
      32.28,
      27.9,
      70.21
    ],
    "volumes": [
      97,
      78,
      65,
      118,
      112,
      88
    ],
    "rsiStack": [
      73.4,
      65.3,
      60.1,
      57.4,
      56.2,
      56.7
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 222.18,
    "change": 2.35,
    "mom": 56.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.7,
    "flow": 82,
    "perf": {
      "w1": 5.53,
      "m1": 17.99,
      "m3": 31.52
    },
    "returns": [
      2.35,
      6.53,
      5.53,
      21.21,
      17.99,
      31.52
    ],
    "volumes": [
      107,
      88,
      71,
      139,
      118,
      79
    ],
    "rsiStack": [
      68.9,
      59.3,
      53.7,
      51.8,
      51.7,
      52.9
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 67.47,
    "chg": 0.43,
    "chgW": 0.82,
    "chgM": -1.26,
    "chgYTD": 9.32,
    "marketCap": "$32.2B",
    "pe": "13.7x",
    "evEbitda": "7.8x",
    "de": "0.5x",
    "drawdown": "-21.0%"
  },
  "MOS": {
    "price": 21.78,
    "chg": -3.63,
    "chgW": -7.16,
    "chgM": -3.33,
    "chgYTD": -9.59,
    "marketCap": "$6.9B",
    "pe": "12.9x",
    "evEbitda": "7.6x",
    "de": "0.5x",
    "drawdown": "-41.1%"
  },
  "CF": {
    "price": 117.05,
    "chg": -2.47,
    "chgW": 0.27,
    "chgM": -1.36,
    "chgYTD": 51.34,
    "marketCap": "$17.7B",
    "pe": "8.7x",
    "evEbitda": "5.8x",
    "de": "0.4x",
    "drawdown": "-17.5%"
  },
  "ICL": {
    "price": 5.39,
    "chg": -1.46,
    "chgW": 3.06,
    "chgM": 5.69,
    "chgYTD": -5.6,
    "marketCap": "$7.0B",
    "pe": "22.5x",
    "evEbitda": "7.3x",
    "de": "0.5x",
    "drawdown": "-22.7%"
  },
  "FMC": {
    "price": 10.16,
    "chg": -0.78,
    "chgW": -3.7,
    "chgM": -11.19,
    "chgYTD": -26.75,
    "marketCap": "$1.3B",
    "pe": "6.2x",
    "evEbitda": "19.4x",
    "de": "2.7x",
    "drawdown": "-75.1%"
  },
  "CTVA": {
    "price": 75.79,
    "chg": 0.34,
    "chgW": -3.66,
    "chgM": -10.25,
    "chgYTD": 13.07,
    "marketCap": "$50.6B",
    "pe": "45.9x",
    "evEbitda": "12.4x",
    "de": "0.2x",
    "drawdown": "-16.7%"
  },
  "ADM": {
    "price": 80.15,
    "chg": 0.53,
    "chgW": 3.41,
    "chgM": -3.43,
    "chgYTD": 39.42,
    "marketCap": "$38.6B",
    "pe": "21.9x",
    "evEbitda": "15.7x",
    "de": "0.4x",
    "drawdown": "-9.4%"
  },
  "BG": {
    "price": 112.73,
    "chg": 0.88,
    "chgW": 3.42,
    "chgM": -2.68,
    "chgYTD": 26.55,
    "marketCap": "$21.7B",
    "pe": "24.3x",
    "evEbitda": "12.5x",
    "de": "1.0x",
    "drawdown": "-16.4%"
  },
  "INGR": {
    "price": 105.1,
    "chg": 1.3,
    "chgW": 2.11,
    "chgM": 2.8,
    "chgYTD": -4.68,
    "marketCap": "$6.6B",
    "pe": "11.4x",
    "evEbitda": "6.4x",
    "de": "0.4x",
    "drawdown": "-19.5%"
  },
  "FPI": {
    "price": 9.75,
    "chg": 0.21,
    "chgW": -1.32,
    "chgM": 1.77,
    "chgYTD": 0.62,
    "marketCap": "$428M",
    "pe": "19.1x",
    "evEbitda": "23.8x",
    "de": "0.5x",
    "drawdown": "-26.3%"
  },
  "LAND": {
    "price": 8.29,
    "chg": 1.22,
    "chgW": 1.1,
    "chgM": -4.27,
    "chgYTD": -9.4,
    "marketCap": "$358M",
    "pe": "-19.9x",
    "evEbitda": "12.2x",
    "de": "0.7x",
    "drawdown": "-36.2%"
  },
  "DE": {
    "price": 612.38,
    "chg": -1.19,
    "chgW": -0.4,
    "chgM": 2.24,
    "chgYTD": 31.53,
    "marketCap": "$165.4B",
    "pe": "34.7x",
    "evEbitda": "24.0x",
    "de": "3.8x",
    "drawdown": "-9.2%"
  },
  "AGCO": {
    "price": 99.45,
    "chg": -2.07,
    "chgW": -2.15,
    "chgM": -13.78,
    "chgYTD": -4.67,
    "marketCap": "$7.0B",
    "pe": "13.8x",
    "evEbitda": "9.6x",
    "de": "0.7x",
    "drawdown": "-30.8%"
  },
  "CNH": {
    "price": 10.39,
    "chg": -3.17,
    "chgW": -3.71,
    "chgM": -1.7,
    "chgYTD": 12.69,
    "marketCap": "$16.7B",
    "pe": "41.6x",
    "evEbitda": "36.1x",
    "de": "3.4x",
    "drawdown": "-21.9%"
  },
  "XYL": {
    "price": 120.32,
    "chg": -1.32,
    "chgW": -0.36,
    "chgM": -3.97,
    "chgYTD": -11.65,
    "marketCap": "$28.1B",
    "pe": "28.7x",
    "evEbitda": "15.4x",
    "de": "0.3x",
    "drawdown": "-22.0%"
  },
  "VMI": {
    "price": 492.2,
    "chg": -0.14,
    "chgW": 0.06,
    "chgM": -8.59,
    "chgYTD": 22.34,
    "marketCap": "$9.6B",
    "pe": "19.2x",
    "evEbitda": "15.1x",
    "de": "0.5x",
    "drawdown": "-16.0%"
  },
  "LNN": {
    "price": 114.59,
    "chg": -0.97,
    "chgW": -0.05,
    "chgM": -3.1,
    "chgYTD": -2.78,
    "marketCap": "$1.2B",
    "pe": "22.0x",
    "evEbitda": "13.8x",
    "de": "0.3x",
    "drawdown": "-22.6%"
  },
  "MWA": {
    "price": 25.51,
    "chg": -2.52,
    "chgW": -5.83,
    "chgM": -1.66,
    "chgYTD": 7.09,
    "marketCap": "$4.0B",
    "pe": "18.0x",
    "evEbitda": "11.3x",
    "de": "0.4x",
    "drawdown": "-17.7%"
  },
  "WTS": {
    "price": 383.05,
    "chg": -0.86,
    "chgW": 1.57,
    "chgM": 8.39,
    "chgYTD": 38.78,
    "marketCap": "$12.8B",
    "pe": "33.5x",
    "evEbitda": "22.0x",
    "de": "0.1x",
    "drawdown": "-2.9%"
  },
  "TSN": {
    "price": 56.39,
    "chg": 1.04,
    "chgW": -3.67,
    "chgM": -2.49,
    "chgYTD": -3.8,
    "marketCap": "$19.8B",
    "pe": "34.8x",
    "evEbitda": "9.8x",
    "de": "0.4x",
    "drawdown": "-18.8%"
  },
  "PPC": {
    "price": 27.6,
    "chg": 2.76,
    "chgW": 0.18,
    "chgM": -4.86,
    "chgYTD": -29.21,
    "marketCap": "$6.6B",
    "pe": "12.1x",
    "evEbitda": "5.2x",
    "de": "0.8x",
    "drawdown": "-44.2%"
  },
  "HRL": {
    "price": 24.44,
    "chg": 0.21,
    "chgW": -2.59,
    "chgM": -4.94,
    "chgYTD": 3.12,
    "marketCap": "$13.4B",
    "pe": "28.8x",
    "evEbitda": "10.5x",
    "de": "0.0x",
    "drawdown": "-16.7%"
  },
  "CAG": {
    "price": 15.39,
    "chg": 2.87,
    "chgW": 3.64,
    "chgM": 6.36,
    "chgYTD": -11.09,
    "marketCap": "$7.4B",
    "pe": "9.9x",
    "evEbitda": "8.3x",
    "de": "1.2x",
    "drawdown": "-24.3%"
  },
  "CALM": {
    "price": 82.59,
    "chg": 0.46,
    "chgW": -2.66,
    "chgM": -6.45,
    "chgYTD": 3.8,
    "marketCap": "$3.9B",
    "pe": "12.5x",
    "evEbitda": "6.3x",
    "de": "–",
    "drawdown": "-29.7%"
  },
  "DBA": {
    "price": 27.62,
    "chg": -0.79,
    "chgW": 0.69,
    "chgM": 0.11,
    "chgYTD": 8.23,
    "marketCap": "–",
    "pe": "11.7x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-4.2%"
  },
  "MOO": {
    "price": 80.96,
    "chg": -0.3,
    "chgW": -0.64,
    "chgM": -1.44,
    "chgYTD": 11.22,
    "marketCap": "–",
    "pe": "18.5x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-6.5%"
  },
  "VEGI": {
    "price": 44.56,
    "chg": -0.63,
    "chgW": 0.22,
    "chgM": 0.18,
    "chgYTD": 15.53,
    "marketCap": "–",
    "pe": "21.0x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-5.7%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "53.3x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
