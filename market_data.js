window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-08-17 22:49:45",
  "sections": {
    "Index": {
      "risk": "Neutral",
      "leader": "SP500",
      "watch": 0
    },
    "Commodity": {
      "risk": "Risk Off",
      "leader": "URA",
      "watch": 1
    },
    "Crypto": {
      "risk": "Strong ON",
      "leader": "CRCL",
      "watch": 1
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "XLK",
      "watch": 2
    },
    "Stock": {
      "risk": "Risk On",
      "leader": "CRDO",
      "watch": 2
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
    "price": 7745.06,
    "change": -0.52,
    "mom": 49.3,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.5,
    "flow": 50,
    "perf": {
      "w1": -0.1,
      "m1": 4.05,
      "m3": 4.2
    },
    "returns": [
      -0.52,
      -0.04,
      -0.1,
      1.9,
      4.05,
      4.2
    ],
    "volumes": [
      81,
      87,
      92,
      102,
      102,
      94
    ],
    "rsiStack": [
      56.4,
      62.1,
      61.5,
      60.3,
      59.0,
      56.5
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 53459.78,
    "change": -0.51,
    "mom": 36.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.5,
    "flow": 91,
    "perf": {
      "w1": -0.96,
      "m1": 3.13,
      "m3": 6.9
    },
    "returns": [
      -0.51,
      -0.58,
      -0.96,
      0.53,
      3.13,
      6.9
    ],
    "volumes": [
      67,
      83,
      82,
      83,
      121,
      72
    ],
    "rsiStack": [
      40.4,
      52.3,
      55.5,
      56.7,
      56.7,
      53.4
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 6977.94,
    "change": 2.42,
    "mom": 63.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.3,
    "flow": 95,
    "perf": {
      "w1": 11.49,
      "m1": 2.31,
      "m3": -4.04
    },
    "returns": [
      2.42,
      9.97,
      11.49,
      5.8,
      2.31,
      -4.04
    ],
    "volumes": [
      118,
      92,
      79,
      84,
      102,
      95
    ],
    "rsiStack": [
      75.5,
      60.2,
      53.3,
      50.6,
      50.1,
      52.5
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
    "rsi": 59.4,
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
      93,
      94,
      114,
      116,
      136,
      93
    ],
    "rsiStack": [
      80.6,
      66.4,
      59.4,
      56.5,
      55.7,
      57.3
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 405.49,
    "change": 1.0,
    "mom": 64.5,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 65.6,
    "flow": 114,
    "perf": {
      "w1": 0.73,
      "m1": 10.31,
      "m3": -2.85
    },
    "returns": [
      1.0,
      0.14,
      0.73,
      9.09,
      10.31,
      -2.85
    ],
    "volumes": [
      85,
      131,
      143,
      154,
      77,
      57
    ],
    "rsiStack": [
      73.9,
      70.9,
      65.6,
      60.5,
      55.5,
      52.0
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 59.57,
    "change": 1.86,
    "mom": 64.7,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.7,
    "flow": 83,
    "perf": {
      "w1": 0.27,
      "m1": 16.85,
      "m3": -13.33
    },
    "returns": [
      1.86,
      0.86,
      0.27,
      13.55,
      16.85,
      -13.33
    ],
    "volumes": [
      70,
      121,
      143,
      92,
      83,
      72
    ],
    "rsiStack": [
      74.1,
      69.3,
      62.7,
      57.1,
      52.8,
      51.9
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 45.25,
    "change": 0.71,
    "mom": 62.9,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.5,
    "flow": 62,
    "perf": {
      "w1": 1.96,
      "m1": 17.02,
      "m3": -5.81
    },
    "returns": [
      0.71,
      0.11,
      1.96,
      10.88,
      17.02,
      -5.81
    ],
    "volumes": [
      53,
      51,
      94,
      73,
      95,
      79
    ],
    "rsiStack": [
      73.2,
      67.2,
      60.5,
      55.6,
      52.2,
      52.7
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 85.12,
    "change": 3.3,
    "mom": 58.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.6,
    "flow": 0,
    "perf": {
      "w1": 3.64,
      "m1": 2.27,
      "m3": -13.37
    },
    "returns": [
      3.3,
      2.22,
      3.64,
      5.95,
      2.27,
      -13.37
    ],
    "volumes": [
      85,
      90,
      96,
      86,
      101,
      42
    ],
    "rsiStack": [
      69.1,
      60.4,
      56.6,
      54.1,
      52.8,
      55.4
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 117.78,
    "change": -0.44,
    "mom": 48.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.5,
    "flow": 69,
    "perf": {
      "w1": -3.05,
      "m1": -4.69,
      "m3": -4.48
    },
    "returns": [
      -0.44,
      -1.86,
      -3.05,
      -0.44,
      -4.69,
      -4.48
    ],
    "volumes": [
      56,
      131,
      123,
      145,
      95,
      106
    ],
    "rsiStack": [
      45.7,
      46.8,
      48.5,
      49.7,
      51.3,
      56.3
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 36.6,
    "change": -0.05,
    "mom": 59.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.4,
    "flow": 70,
    "perf": {
      "w1": -3.05,
      "m1": 7.77,
      "m3": -9.18
    },
    "returns": [
      -0.05,
      0.44,
      -3.05,
      9.94,
      7.77,
      -9.18
    ],
    "volumes": [
      98,
      97,
      156,
      108,
      122,
      45
    ],
    "rsiStack": [
      61.4,
      59.9,
      57.4,
      54.7,
      52.2,
      50.8
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 21.23,
    "change": -1.76,
    "mom": 33.9,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.2,
    "flow": 104,
    "perf": {
      "w1": -9.54,
      "m1": -5.27,
      "m3": -2.88
    },
    "returns": [
      -1.76,
      -6.06,
      -9.54,
      -2.66,
      -5.27,
      -2.88
    ],
    "volumes": [
      81,
      81,
      79,
      107,
      107,
      61
    ],
    "rsiStack": [
      21.2,
      33.7,
      40.2,
      43.5,
      46.2,
      51.5
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 68.29,
    "change": 0.07,
    "mom": 58.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.3,
    "flow": 57,
    "perf": {
      "w1": 6.01,
      "m1": 1.5,
      "m3": -4.61
    },
    "returns": [
      0.07,
      1.65,
      6.01,
      -1.13,
      1.5,
      -4.61
    ],
    "volumes": [
      71,
      156,
      133,
      164,
      94,
      56
    ],
    "rsiStack": [
      62.9,
      56.3,
      54.3,
      53.0,
      52.3,
      55.6
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 64251.33,
    "change": 2.28,
    "mom": 57.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.0,
    "flow": 108,
    "perf": {
      "w1": 1.34,
      "m1": 0.59,
      "m3": 2.15
    },
    "returns": [
      2.28,
      2.03,
      1.34,
      -0.97,
      0.59,
      2.15
    ],
    "volumes": [
      45,
      96,
      109,
      103,
      96,
      100
    ],
    "rsiStack": [
      66.6,
      56.5,
      53.0,
      51.1,
      49.0,
      46.2
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 150.55,
    "change": 1.4,
    "mom": 56.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.1,
    "flow": 74,
    "perf": {
      "w1": 1.26,
      "m1": -6.16,
      "m3": -21.3
    },
    "returns": [
      1.4,
      1.01,
      1.26,
      2.76,
      -6.16,
      -21.3
    ],
    "volumes": [
      93,
      77,
      78,
      76,
      124,
      77
    ],
    "rsiStack": [
      49.0,
      46.5,
      46.1,
      46.1,
      46.5,
      48.4
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 74.59,
    "change": 4.18,
    "mom": 70.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.7,
    "flow": 85,
    "perf": {
      "w1": 11.25,
      "m1": 13.96,
      "m3": -33.18
    },
    "returns": [
      4.18,
      4.64,
      11.25,
      23.6,
      13.96,
      -33.18
    ],
    "volumes": [
      74,
      75,
      67,
      93,
      129,
      94
    ],
    "rsiStack": [
      70.5,
      65.3,
      58.7,
      53.7,
      49.9,
      47.3
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 97.68,
    "change": 4.99,
    "mom": 59.2,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 49.2,
    "flow": 126,
    "perf": {
      "w1": 0.36,
      "m1": -0.14,
      "m3": -41.09
    },
    "returns": [
      4.99,
      3.01,
      0.36,
      2.97,
      -0.14,
      -41.09
    ],
    "volumes": [
      130,
      76,
      87,
      68,
      90,
      64
    ],
    "rsiStack": [
      55.9,
      52.3,
      49.2,
      46.8,
      46.1,
      49.5
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 62.58,
    "change": 1.08,
    "mom": 63.6,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 69.7,
    "flow": 85,
    "perf": {
      "w1": 3.99,
      "m1": 8.01,
      "m3": 4.65
    },
    "returns": [
      1.08,
      2.54,
      3.99,
      6.45,
      8.01,
      4.65
    ],
    "volumes": [
      82,
      79,
      114,
      84,
      86,
      88
    ],
    "rsiStack": [
      83.7,
      74.8,
      69.7,
      65.7,
      62.0,
      60.2
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 190.32,
    "change": 0.16,
    "mom": 59.6,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.6,
    "flow": 76,
    "perf": {
      "w1": 2.15,
      "m1": 8.31,
      "m3": 7.44
    },
    "returns": [
      0.16,
      0.77,
      2.15,
      6.9,
      8.31,
      7.44
    ],
    "volumes": [
      45,
      67,
      73,
      74,
      102,
      73
    ],
    "rsiStack": [
      72.5,
      65.8,
      60.6,
      57.9,
      56.5,
      55.4
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 44.18,
    "change": -0.29,
    "mom": 55.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.3,
    "flow": 81,
    "perf": {
      "w1": 2.43,
      "m1": -1.69,
      "m3": -0.74
    },
    "returns": [
      -0.29,
      0.78,
      2.43,
      -0.41,
      -1.69,
      -0.74
    ],
    "volumes": [
      85,
      79,
      126,
      139,
      143,
      93
    ],
    "rsiStack": [
      56.7,
      48.4,
      46.3,
      46.4,
      47.9,
      53.2
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 167.05,
    "change": -0.19,
    "mom": 45.4,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.7,
    "flow": 80,
    "perf": {
      "w1": -0.83,
      "m1": 4.9,
      "m3": 13.54
    },
    "returns": [
      -0.19,
      -0.83,
      -0.83,
      2.96,
      4.9,
      13.54
    ],
    "volumes": [
      56,
      76,
      71,
      95,
      116,
      60
    ],
    "rsiStack": [
      55.0,
      60.2,
      60.7,
      60.5,
      59.5,
      56.6
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 110.82,
    "change": -1.89,
    "mom": 51.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.7,
    "flow": 65,
    "perf": {
      "w1": -0.39,
      "m1": 0.15,
      "m3": -4.34
    },
    "returns": [
      -1.89,
      0.5,
      -0.39,
      2.38,
      0.15,
      -4.34
    ],
    "volumes": [
      51,
      92,
      52,
      91,
      77,
      102
    ],
    "rsiStack": [
      45.9,
      50.2,
      50.7,
      50.3,
      49.9,
      51.1
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 57.58,
    "change": -1.0,
    "mom": 32.6,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.2,
    "flow": 152,
    "perf": {
      "w1": -0.4,
      "m1": 2.75,
      "m3": 11.46
    },
    "returns": [
      -1.0,
      -0.59,
      -0.4,
      0.35,
      2.75,
      11.46
    ],
    "volumes": [
      96,
      61,
      79,
      83,
      92,
      111
    ],
    "rsiStack": [
      41.2,
      53.2,
      58.2,
      60.2,
      59.8,
      54.1
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 44.83,
    "change": -0.97,
    "mom": 45.1,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.0,
    "flow": 158,
    "perf": {
      "w1": -0.33,
      "m1": -1.3,
      "m3": 2.03
    },
    "returns": [
      -0.97,
      0.76,
      -0.33,
      -0.53,
      -1.3,
      2.03
    ],
    "volumes": [
      89,
      94,
      78,
      125,
      142,
      77
    ],
    "rsiStack": [
      44.4,
      46.1,
      48.0,
      49.4,
      50.4,
      49.5
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 186.32,
    "change": -0.1,
    "mom": 55.6,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.4,
    "flow": 88,
    "perf": {
      "w1": 0.93,
      "m1": 4.6,
      "m3": 9.13
    },
    "returns": [
      -0.1,
      0.24,
      0.93,
      1.73,
      4.6,
      9.13
    ],
    "volumes": [
      58,
      63,
      51,
      82,
      132,
      86
    ],
    "rsiStack": [
      67.1,
      63.1,
      60.4,
      58.8,
      57.9,
      59.0
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 52.24,
    "change": -0.57,
    "mom": 44.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.2,
    "flow": 64,
    "perf": {
      "w1": -1.77,
      "m1": 4.42,
      "m3": 5.07
    },
    "returns": [
      -0.57,
      -0.65,
      -1.77,
      2.41,
      4.42,
      5.07
    ],
    "volumes": [
      65,
      86,
      105,
      82,
      110,
      98
    ],
    "rsiStack": [
      45.2,
      51.9,
      53.2,
      53.1,
      52.3,
      50.0
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 116.75,
    "change": -1.23,
    "mom": 40.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.3,
    "flow": 98,
    "perf": {
      "w1": -2.44,
      "m1": 1.87,
      "m3": -1.01
    },
    "returns": [
      -1.23,
      -0.97,
      -2.44,
      -1.24,
      1.87,
      -1.01
    ],
    "volumes": [
      54,
      60,
      57,
      60,
      117,
      91
    ],
    "rsiStack": [
      36.2,
      47.8,
      50.3,
      50.6,
      50.1,
      47.7
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 84.68,
    "change": -1.64,
    "mom": 43.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.0,
    "flow": 101,
    "perf": {
      "w1": -0.32,
      "m1": -0.21,
      "m3": -0.98
    },
    "returns": [
      -1.64,
      -0.47,
      -0.32,
      -0.21,
      -0.21,
      -0.98
    ],
    "volumes": [
      68,
      60,
      64,
      75,
      111,
      75
    ],
    "rsiStack": [
      37.5,
      44.8,
      48.0,
      49.3,
      49.6,
      47.7
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 559.12,
    "change": 1.58,
    "mom": 61.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.3,
    "flow": 54,
    "perf": {
      "w1": 5.62,
      "m1": 6.67,
      "m3": 7.46
    },
    "returns": [
      1.58,
      2.29,
      5.62,
      10.13,
      6.67,
      7.46
    ],
    "volumes": [
      44,
      73,
      82,
      71,
      95,
      64
    ],
    "rsiStack": [
      73.9,
      61.3,
      55.3,
      53.1,
      52.6,
      52.9
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 28.14,
    "change": 1.33,
    "mom": 58.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.2,
    "flow": 118,
    "perf": {
      "w1": 1.15,
      "m1": 0.43,
      "m3": 0.61
    },
    "returns": [
      1.33,
      1.08,
      1.15,
      1.26,
      0.43,
      0.61
    ],
    "volumes": [
      63,
      94,
      45,
      53,
      57,
      66
    ],
    "rsiStack": [
      69.5,
      62.3,
      59.2,
      57.6,
      56.4,
      56.7
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 44.31,
    "change": -0.49,
    "mom": 44.3,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.8,
    "flow": 81,
    "perf": {
      "w1": -0.38,
      "m1": -1.38,
      "m3": -0.47
    },
    "returns": [
      -0.49,
      -1.18,
      -0.38,
      0.29,
      -1.38,
      -0.47
    ],
    "volumes": [
      55,
      26,
      27,
      67,
      42,
      110
    ],
    "rsiStack": [
      34.9,
      42.1,
      45.8,
      47.9,
      51.9,
      63.6
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 45.04,
    "change": -0.43,
    "mom": 47.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.9,
    "flow": 13,
    "perf": {
      "w1": -0.09,
      "m1": -0.18,
      "m3": 11.25
    },
    "returns": [
      -0.43,
      0.5,
      -0.09,
      1.8,
      -0.18,
      11.25
    ],
    "volumes": [
      37,
      14,
      16,
      19,
      10,
      10
    ],
    "rsiStack": [
      49.9,
      50.3,
      50.9,
      51.6,
      51.5,
      46.9
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 28.94,
    "change": -0.84,
    "mom": 41.8,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.6,
    "flow": 44,
    "perf": {
      "w1": -1.72,
      "m1": -0.4,
      "m3": -1.48
    },
    "returns": [
      -0.84,
      -1.25,
      -1.72,
      -0.37,
      -0.4,
      -1.48
    ],
    "volumes": [
      20,
      87,
      8,
      86,
      203,
      25
    ],
    "rsiStack": [
      32.1,
      39.2,
      43.6,
      46.1,
      48.6,
      54.6
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 107.92,
    "change": 0.21,
    "mom": 58.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.2,
    "flow": 75,
    "perf": {
      "w1": 3.12,
      "m1": 2.97,
      "m3": 1.33
    },
    "returns": [
      0.21,
      -0.53,
      3.12,
      4.4,
      2.97,
      1.33
    ],
    "volumes": [
      46,
      50,
      62,
      76,
      114,
      88
    ],
    "rsiStack": [
      64.3,
      61.6,
      59.2,
      57.6,
      56.4,
      55.5
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 81.19,
    "change": -0.22,
    "mom": 47.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 47.7,
    "flow": 68,
    "perf": {
      "w1": -0.4,
      "m1": -1.0,
      "m3": 0.17
    },
    "returns": [
      -0.22,
      -0.01,
      -0.4,
      0.26,
      -1.0,
      0.17
    ],
    "volumes": [
      130,
      101,
      68,
      79,
      127,
      64
    ],
    "rsiStack": [
      42.7,
      44.8,
      47.7,
      49.4,
      51.6,
      58.9
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 14.05,
    "change": -2.23,
    "mom": 48.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.7,
    "flow": 53,
    "perf": {
      "w1": 0.36,
      "m1": 0.43,
      "m3": 6.28
    },
    "returns": [
      -2.23,
      1.59,
      0.36,
      -2.63,
      0.43,
      6.28
    ],
    "volumes": [
      93,
      72,
      72,
      107,
      78,
      80
    ],
    "rsiStack": [
      47.1,
      46.8,
      47.7,
      48.7,
      49.6,
      49.5
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 84.37,
    "change": -2.77,
    "mom": 36.5,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "NEUTRAL",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.7,
    "flow": 70,
    "perf": {
      "w1": -4.08,
      "m1": 11.31,
      "m3": 10.81
    },
    "returns": [
      -2.77,
      -2.75,
      -4.08,
      -3.78,
      11.31,
      10.81
    ],
    "volumes": [
      50,
      67,
      47,
      74,
      66,
      123
    ],
    "rsiStack": [
      28.6,
      42.3,
      48.7,
      51.2,
      51.2,
      45.7
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 26.37,
    "change": 0.96,
    "mom": 64.7,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 69.2,
    "flow": 424,
    "perf": {
      "w1": 3.54,
      "m1": 3.45,
      "m3": 3.29
    },
    "returns": [
      0.96,
      2.01,
      3.54,
      4.98,
      3.45,
      3.29
    ],
    "volumes": [
      100,
      123,
      186,
      50,
      118,
      103
    ],
    "rsiStack": [
      85.6,
      75.2,
      69.2,
      65.3,
      62.1,
      61.6
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 26.87,
    "change": 0.3,
    "mom": 57.9,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 65.6,
    "flow": 62,
    "perf": {
      "w1": -0.67,
      "m1": 8.57,
      "m3": 4.19
    },
    "returns": [
      0.3,
      2.13,
      -0.67,
      7.35,
      8.57,
      4.19
    ],
    "volumes": [
      59,
      79,
      118,
      125,
      105,
      78
    ],
    "rsiStack": [
      69.7,
      68.7,
      65.6,
      61.9,
      56.5,
      46.6
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.78,
    "change": -1.41,
    "mom": 55.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.8,
    "flow": 81,
    "perf": {
      "w1": -1.21,
      "m1": 0.72,
      "m3": -4.02
    },
    "returns": [
      -1.41,
      0.51,
      -1.21,
      4.6,
      0.72,
      -4.02
    ],
    "volumes": [
      107,
      73,
      138,
      121,
      132,
      87
    ],
    "rsiStack": [
      50.7,
      52.9,
      51.8,
      49.9,
      49.0,
      53.9
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.24,
    "change": -0.84,
    "mom": 55.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.0,
    "flow": 108,
    "perf": {
      "w1": -1.2,
      "m1": -5.88,
      "m3": -12.71
    },
    "returns": [
      -0.84,
      0.61,
      -1.2,
      1.6,
      -5.88,
      -12.71
    ],
    "volumes": [
      97,
      150,
      83,
      125,
      167,
      83
    ],
    "rsiStack": [
      45.8,
      43.4,
      42.0,
      41.0,
      39.9,
      38.3
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 282.82,
    "change": 8.82,
    "mom": 63.6,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.3,
    "flow": 114,
    "perf": {
      "w1": 17.87,
      "m1": 33.36,
      "m3": 54.56
    },
    "returns": [
      8.82,
      5.47,
      17.87,
      29.53,
      33.36,
      54.56
    ],
    "volumes": [
      67,
      97,
      78,
      65,
      79,
      58
    ],
    "rsiStack": [
      77.3,
      69.2,
      63.3,
      60.0,
      58.0,
      57.7
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 234.33,
    "change": 5.54,
    "mom": 58.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.2,
    "flow": 97,
    "perf": {
      "w1": 12.36,
      "m1": 20.21,
      "m3": 25.44
    },
    "returns": [
      5.54,
      7.95,
      12.36,
      20.93,
      20.21,
      25.44
    ],
    "volumes": [
      66,
      107,
      88,
      71,
      86,
      78
    ],
    "rsiStack": [
      79.6,
      66.1,
      58.2,
      54.8,
      53.7,
      54.3
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 68.29,
    "chg": 0.07,
    "chgW": 6.01,
    "chgM": 1.5,
    "chgYTD": 10.64,
    "marketCap": "$32.6B",
    "pe": "13.8x",
    "evEbitda": "7.9x",
    "de": "0.5x",
    "drawdown": "-20.0%"
  },
  "MOS": {
    "price": 21.23,
    "chg": -1.76,
    "chgW": -9.54,
    "chgM": -5.27,
    "chgYTD": -11.87,
    "marketCap": "$6.7B",
    "pe": "12.6x",
    "evEbitda": "7.5x",
    "de": "0.5x",
    "drawdown": "-42.6%"
  },
  "CF": {
    "price": 117.78,
    "chg": -0.44,
    "chgW": -3.05,
    "chgM": -4.69,
    "chgYTD": 52.29,
    "marketCap": "$17.8B",
    "pe": "8.7x",
    "evEbitda": "5.7x",
    "de": "0.4x",
    "drawdown": "-17.0%"
  },
  "ICL": {
    "price": 5.46,
    "chg": -1.62,
    "chgW": 2.82,
    "chgM": 8.12,
    "chgYTD": -4.38,
    "marketCap": "$7.0B",
    "pe": "22.8x",
    "evEbitda": "7.3x",
    "de": "0.5x",
    "drawdown": "-21.7%"
  },
  "FMC": {
    "price": 10.18,
    "chg": 0.3,
    "chgW": -2.68,
    "chgM": -9.03,
    "chgYTD": -26.6,
    "marketCap": "$1.3B",
    "pe": "6.2x",
    "evEbitda": "19.4x",
    "de": "2.7x",
    "drawdown": "-75.1%"
  },
  "CTVA": {
    "price": 76.01,
    "chg": -0.87,
    "chgW": -1.07,
    "chgM": -12.93,
    "chgYTD": 13.4,
    "marketCap": "$50.7B",
    "pe": "46.1x",
    "evEbitda": "12.6x",
    "de": "0.2x",
    "drawdown": "-16.4%"
  },
  "ADM": {
    "price": 81.29,
    "chg": 1.04,
    "chgW": 0.99,
    "chgM": -5.11,
    "chgYTD": 41.4,
    "marketCap": "$39.2B",
    "pe": "22.2x",
    "evEbitda": "15.8x",
    "de": "0.4x",
    "drawdown": "-8.1%"
  },
  "BG": {
    "price": 114.91,
    "chg": 1.07,
    "chgW": 2.01,
    "chgM": -4.63,
    "chgYTD": 29.0,
    "marketCap": "$22.1B",
    "pe": "24.8x",
    "evEbitda": "12.7x",
    "de": "1.0x",
    "drawdown": "-14.8%"
  },
  "INGR": {
    "price": 103.59,
    "chg": -1.53,
    "chgW": 0.11,
    "chgM": 1.04,
    "chgYTD": -6.05,
    "marketCap": "$6.5B",
    "pe": "11.2x",
    "evEbitda": "6.5x",
    "de": "0.4x",
    "drawdown": "-20.6%"
  },
  "FPI": {
    "price": 9.78,
    "chg": -1.41,
    "chgW": -1.21,
    "chgM": 0.72,
    "chgYTD": 0.93,
    "marketCap": "$430M",
    "pe": "19.2x",
    "evEbitda": "24.1x",
    "de": "0.5x",
    "drawdown": "-26.0%"
  },
  "LAND": {
    "price": 8.24,
    "chg": -0.84,
    "chgW": -1.2,
    "chgM": -5.88,
    "chgYTD": -9.95,
    "marketCap": "$355M",
    "pe": "-19.8x",
    "evEbitda": "12.2x",
    "de": "0.7x",
    "drawdown": "-36.6%"
  },
  "DE": {
    "price": 599.92,
    "chg": -1.47,
    "chgW": -1.54,
    "chgM": 2.38,
    "chgYTD": 28.86,
    "marketCap": "$162.0B",
    "pe": "34.0x",
    "evEbitda": "23.7x",
    "de": "3.8x",
    "drawdown": "-11.0%"
  },
  "AGCO": {
    "price": 99.75,
    "chg": -1.56,
    "chgW": -1.11,
    "chgM": -11.2,
    "chgYTD": -4.38,
    "marketCap": "$7.0B",
    "pe": "13.8x",
    "evEbitda": "9.6x",
    "de": "0.7x",
    "drawdown": "-30.6%"
  },
  "CNH": {
    "price": 10.29,
    "chg": -1.44,
    "chgW": -5.68,
    "chgM": -3.29,
    "chgYTD": 11.61,
    "marketCap": "$16.5B",
    "pe": "41.2x",
    "evEbitda": "35.8x",
    "de": "3.4x",
    "drawdown": "-22.7%"
  },
  "XYL": {
    "price": 117.47,
    "chg": -1.85,
    "chgW": -3.07,
    "chgM": -2.61,
    "chgYTD": -13.74,
    "marketCap": "$27.4B",
    "pe": "28.0x",
    "evEbitda": "15.2x",
    "de": "0.3x",
    "drawdown": "-23.9%"
  },
  "VMI": {
    "price": 506.79,
    "chg": 2.33,
    "chgW": 2.96,
    "chgM": -3.63,
    "chgYTD": 25.97,
    "marketCap": "$9.8B",
    "pe": "19.8x",
    "evEbitda": "15.2x",
    "de": "0.5x",
    "drawdown": "-13.5%"
  },
  "LNN": {
    "price": 114.04,
    "chg": -0.9,
    "chgW": -1.02,
    "chgM": 1.04,
    "chgYTD": -3.25,
    "marketCap": "$1.2B",
    "pe": "21.9x",
    "evEbitda": "13.7x",
    "de": "0.3x",
    "drawdown": "-22.9%"
  },
  "MWA": {
    "price": 25.18,
    "chg": -1.41,
    "chgW": -3.45,
    "chgM": 0.48,
    "chgYTD": 5.71,
    "marketCap": "$3.9B",
    "pe": "17.7x",
    "evEbitda": "11.0x",
    "de": "0.4x",
    "drawdown": "-18.8%"
  },
  "WTS": {
    "price": 385.18,
    "chg": 0.2,
    "chgW": 0.28,
    "chgM": 13.12,
    "chgYTD": 39.55,
    "marketCap": "$12.9B",
    "pe": "33.6x",
    "evEbitda": "21.9x",
    "de": "0.1x",
    "drawdown": "-2.4%"
  },
  "TSN": {
    "price": 58.61,
    "chg": 0.76,
    "chgW": 2.54,
    "chgM": 1.05,
    "chgYTD": -0.02,
    "marketCap": "$20.6B",
    "pe": "36.2x",
    "evEbitda": "10.0x",
    "de": "0.4x",
    "drawdown": "-15.6%"
  },
  "PPC": {
    "price": 28.77,
    "chg": 3.12,
    "chgW": 8.53,
    "chgM": -1.34,
    "chgYTD": -26.21,
    "marketCap": "$6.9B",
    "pe": "12.6x",
    "evEbitda": "5.3x",
    "de": "0.8x",
    "drawdown": "-40.7%"
  },
  "HRL": {
    "price": 24.02,
    "chg": -2.12,
    "chgW": -2.75,
    "chgM": -4.98,
    "chgYTD": 1.35,
    "marketCap": "$13.2B",
    "pe": "28.3x",
    "evEbitda": "10.5x",
    "de": "0.0x",
    "drawdown": "-18.2%"
  },
  "CAG": {
    "price": 15.54,
    "chg": -0.51,
    "chgW": 5.21,
    "chgM": 6.15,
    "chgYTD": -10.23,
    "marketCap": "$7.4B",
    "pe": "10.0x",
    "evEbitda": "8.5x",
    "de": "1.2x",
    "drawdown": "-23.5%"
  },
  "CALM": {
    "price": 80.43,
    "chg": -0.81,
    "chgW": -1.88,
    "chgM": -9.03,
    "chgYTD": 1.08,
    "marketCap": "$3.8B",
    "pe": "12.1x",
    "evEbitda": "6.2x",
    "de": "–",
    "drawdown": "-31.5%"
  },
  "DBA": {
    "price": 28.14,
    "chg": 1.33,
    "chgW": 1.15,
    "chgM": 0.43,
    "chgYTD": 10.27,
    "marketCap": "–",
    "pe": "11.9x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-2.4%"
  },
  "MOO": {
    "price": 81.19,
    "chg": -0.22,
    "chgW": -0.4,
    "chgM": -1.0,
    "chgYTD": 11.54,
    "marketCap": "–",
    "pe": "18.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-6.2%"
  },
  "VEGI": {
    "price": 44.31,
    "chg": -0.49,
    "chgW": -0.38,
    "chgM": -1.38,
    "chgYTD": 14.88,
    "marketCap": "–",
    "pe": "20.8x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-6.3%"
  },
  "USAG": {},
  "COCO.L": {
    "price": 9.55,
    "chg": 3.37,
    "chgW": 1.39,
    "chgM": 7.02,
    "chgYTD": -8.7,
    "marketCap": "–",
    "pe": "55.8x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-34.8%"
  }
};
