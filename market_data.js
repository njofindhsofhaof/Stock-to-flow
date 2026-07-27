window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-07-27 23:33:39",
  "sections": {
    "Index": {
      "risk": "Neutral",
      "leader": "SP500",
      "watch": 0
    },
    "Commodity": {
      "risk": "Strong ON",
      "leader": "CL",
      "watch": 0
    },
    "Crypto": {
      "risk": "Strong ON",
      "leader": "COIN",
      "watch": 1
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "XLE",
      "watch": 4
    },
    "Stock": {
      "risk": "Neutral",
      "leader": "GM",
      "watch": 5
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
    "price": 7413.18,
    "change": 0.07,
    "mom": 35.9,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.0,
    "flow": 59,
    "perf": {
      "w1": -0.6,
      "m1": 0.76,
      "m3": 3.84
    },
    "returns": [
      0.07,
      -1.28,
      -0.6,
      -2.14,
      0.76,
      3.84
    ],
    "volumes": [
      103,
      95,
      93,
      92,
      69,
      94
    ],
    "rsiStack": [
      32.5,
      40.3,
      45.0,
      48.1,
      50.8,
      52.1
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 52210.08,
    "change": 0.96,
    "mom": 44.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.8,
    "flow": 92,
    "perf": {
      "w1": 0.12,
      "m1": 0.56,
      "m3": 6.24
    },
    "returns": [
      0.96,
      -0.03,
      0.12,
      -0.81,
      0.56,
      6.24
    ],
    "volumes": [
      93,
      74,
      95,
      88,
      71,
      111
    ],
    "rsiStack": [
      51.1,
      50.5,
      52.8,
      54.7,
      56.2,
      57.0
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 7096.89,
    "change": 4.4,
    "mom": 47.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.6,
    "flow": 92,
    "perf": {
      "w1": -2.57,
      "m1": -16.22,
      "m3": 9.59
    },
    "returns": [
      4.4,
      8.91,
      -2.57,
      -2.07,
      -16.22,
      9.59
    ],
    "volumes": [
      86,
      79,
      88,
      102,
      108,
      80
    ],
    "rsiStack": [
      53.6,
      45.6,
      44.6,
      45.7,
      48.0,
      51.8
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
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.7,
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
      86,
      103,
      93,
      106,
      84,
      87
    ],
    "rsiStack": [
      45.9,
      44.9,
      46.7,
      48.9,
      51.3,
      53.5
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 374.63,
    "change": 0.84,
    "mom": 59.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 2)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 2,
    "rsi": 47.0,
    "flow": 55,
    "perf": {
      "w1": 1.69,
      "m1": 1.4,
      "m3": -11.21
    },
    "returns": [
      0.84,
      -0.05,
      1.69,
      -0.63,
      1.4,
      -11.21
    ],
    "volumes": [
      149,
      90,
      92,
      106,
      71,
      106
    ],
    "rsiStack": [
      54.2,
      50.3,
      47.0,
      44.9,
      43.7,
      44.0
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 52.93,
    "change": 1.67,
    "mom": 57.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.9,
    "flow": 87,
    "perf": {
      "w1": 4.23,
      "m1": 1.09,
      "m3": -20.05
    },
    "returns": [
      1.67,
      -0.28,
      4.23,
      -1.89,
      1.09,
      -20.05
    ],
    "volumes": [
      88,
      72,
      83,
      84,
      57,
      103
    ],
    "rsiStack": [
      53.4,
      47.6,
      43.9,
      42.3,
      41.7,
      41.6
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 40.32,
    "change": -1.97,
    "mom": 55.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.0,
    "flow": 96,
    "perf": {
      "w1": 4.11,
      "m1": -8.2,
      "m3": -25.65
    },
    "returns": [
      -1.97,
      0.17,
      4.11,
      -6.17,
      -8.2,
      -25.65
    ],
    "volumes": [
      105,
      148,
      91,
      105,
      68,
      68
    ],
    "rsiStack": [
      45.5,
      41.6,
      40.0,
      40.0,
      39.7,
      35.4
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 82.05,
    "change": -8.13,
    "mom": 50.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up (Day 2)",
    "signal": "WATCH",
    "dist_streak": 2,
    "acc_streak": 0,
    "rsi": 51.4,
    "flow": 1,
    "perf": {
      "w1": -1.42,
      "m1": 18.52,
      "m3": -23.23
    },
    "returns": [
      -8.13,
      -5.51,
      -1.42,
      5.0,
      18.52,
      -23.23
    ],
    "volumes": [
      153,
      146,
      42,
      79,
      143,
      103
    ],
    "rsiStack": [
      42.8,
      51.0,
      51.4,
      50.1,
      49.4,
      50.9
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 119.78,
    "change": -5.47,
    "mom": 47.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.3,
    "flow": 75,
    "perf": {
      "w1": -1.35,
      "m1": 13.55,
      "m3": -2.07
    },
    "returns": [
      -5.47,
      -2.59,
      -1.35,
      2.45,
      13.55,
      -2.07
    ],
    "volumes": [
      72,
      91,
      111,
      84,
      39,
      105
    ],
    "rsiStack": [
      41.8,
      52.0,
      54.3,
      53.9,
      53.1,
      53.8
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 34.29,
    "change": -0.46,
    "mom": 49.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.1,
    "flow": 74,
    "perf": {
      "w1": 0.26,
      "m1": 1.06,
      "m3": -8.63
    },
    "returns": [
      -0.46,
      -0.15,
      0.26,
      -1.47,
      1.06,
      -8.63
    ],
    "volumes": [
      73,
      65,
      55,
      62,
      60,
      60
    ],
    "rsiStack": [
      44.1,
      46.5,
      46.1,
      45.8,
      46.5,
      48.8
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 22.34,
    "change": 0.27,
    "mom": 54.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.9,
    "flow": 74,
    "perf": {
      "w1": 0.95,
      "m1": 2.81,
      "m3": -3.67
    },
    "returns": [
      0.27,
      1.68,
      0.95,
      3.86,
      2.81,
      -3.67
    ],
    "volumes": [
      75,
      86,
      69,
      72,
      64,
      93
    ],
    "rsiStack": [
      51.8,
      52.9,
      51.9,
      50.6,
      48.8,
      46.7
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 67.4,
    "change": -1.66,
    "mom": 52.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.6,
    "flow": 80,
    "perf": {
      "w1": 0.18,
      "m1": 10.56,
      "m3": -7.56
    },
    "returns": [
      -1.66,
      0.84,
      0.18,
      3.01,
      10.56,
      -7.56
    ],
    "volumes": [
      67,
      72,
      56,
      55,
      48,
      53
    ],
    "rsiStack": [
      50.5,
      54.8,
      53.6,
      51.5,
      49.2,
      46.5
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 63796.48,
    "change": -2.36,
    "mom": 47.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.0,
    "flow": 107,
    "perf": {
      "w1": -3.49,
      "m1": 0.79,
      "m3": -13.25
    },
    "returns": [
      -2.36,
      -0.47,
      -3.49,
      -0.16,
      0.79,
      -13.25
    ],
    "volumes": [
      58,
      100,
      110,
      116,
      99,
      109
    ],
    "rsiStack": [
      38.4,
      45.5,
      48.0,
      47.9,
      46.9,
      46.2
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 167.49,
    "change": 3.93,
    "mom": 60.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.5,
    "flow": 93,
    "perf": {
      "w1": 6.6,
      "m1": 17.52,
      "m3": -13.71
    },
    "returns": [
      3.93,
      -4.75,
      6.6,
      5.29,
      17.52,
      -13.71
    ],
    "volumes": [
      76,
      179,
      85,
      98,
      79,
      88
    ],
    "rsiStack": [
      56.3,
      54.7,
      52.5,
      50.6,
      48.0,
      42.0
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 65.67,
    "change": 5.61,
    "mom": 57.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.1,
    "flow": 56,
    "perf": {
      "w1": 8.62,
      "m1": -4.56,
      "m3": -30.4
    },
    "returns": [
      5.61,
      -7.61,
      8.62,
      -0.71,
      -4.56,
      -30.4
    ],
    "volumes": [
      68,
      120,
      59,
      87,
      252,
      83
    ],
    "rsiStack": [
      52.0,
      48.3,
      45.1,
      43.5,
      42.8,
      40.4
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 98.65,
    "change": 5.36,
    "mom": 59.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.7,
    "flow": 78,
    "perf": {
      "w1": 4.01,
      "m1": 15.61,
      "m3": -40.47
    },
    "returns": [
      5.36,
      -3.24,
      4.01,
      4.24,
      15.61,
      -40.47
    ],
    "volumes": [
      73,
      80,
      50,
      54,
      59,
      184
    ],
    "rsiStack": [
      54.6,
      50.1,
      45.7,
      43.3,
      40.9,
      34.3
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 58.36,
    "change": -1.72,
    "mom": 54.2,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 60.4,
    "flow": 113,
    "perf": {
      "w1": 1.18,
      "m1": 7.89,
      "m3": 1.13
    },
    "returns": [
      -1.72,
      -0.24,
      1.18,
      5.95,
      7.89,
      1.13
    ],
    "volumes": [
      121,
      67,
      99,
      102,
      69,
      76
    ],
    "rsiStack": [
      59.3,
      63.4,
      60.4,
      57.4,
      55.3,
      56.4
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 174.3,
    "change": -2.33,
    "mom": 36.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.7,
    "flow": 88,
    "perf": {
      "w1": -0.73,
      "m1": -5.56,
      "m3": 10.42
    },
    "returns": [
      -2.33,
      -3.58,
      -0.73,
      -6.18,
      -5.56,
      10.42
    ],
    "volumes": [
      75,
      73,
      112,
      85,
      51,
      86
    ],
    "rsiStack": [
      29.8,
      37.1,
      41.7,
      45.1,
      47.9,
      47.8
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 45.68,
    "change": -1.1,
    "mom": 52.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.5,
    "flow": 90,
    "perf": {
      "w1": 1.13,
      "m1": -0.37,
      "m3": -1.23
    },
    "returns": [
      -1.1,
      1.69,
      1.13,
      0.59,
      -0.37,
      -1.23
    ],
    "volumes": [
      75,
      84,
      104,
      79,
      69,
      89
    ],
    "rsiStack": [
      53.8,
      53.9,
      53.5,
      52.8,
      52.1,
      51.6
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 163.4,
    "change": 1.21,
    "mom": 55.4,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.4,
    "flow": 76,
    "perf": {
      "w1": 1.43,
      "m1": 4.99,
      "m3": 13.6
    },
    "returns": [
      1.21,
      1.97,
      1.43,
      1.59,
      4.99,
      13.6
    ],
    "volumes": [
      62,
      61,
      82,
      98,
      85,
      82
    ],
    "rsiStack": [
      69.0,
      62.9,
      61.4,
      60.6,
      59.1,
      55.8
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 107.66,
    "change": 2.16,
    "mom": 44.5,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 2)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 2,
    "rsi": 42.1,
    "flow": 95,
    "perf": {
      "w1": -2.7,
      "m1": 1.97,
      "m3": -6.99
    },
    "returns": [
      2.16,
      -2.15,
      -2.7,
      -3.57,
      1.97,
      -6.99
    ],
    "volumes": [
      180,
      56,
      102,
      81,
      82,
      74
    ],
    "rsiStack": [
      38.5,
      40.6,
      42.1,
      43.1,
      46.0,
      56.7
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 56.88,
    "change": 1.88,
    "mom": 57.5,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 67.4,
    "flow": 85,
    "perf": {
      "w1": 1.1,
      "m1": 6.42,
      "m3": 9.7
    },
    "returns": [
      1.88,
      1.37,
      1.1,
      2.1,
      6.42,
      9.7
    ],
    "volumes": [
      72,
      77,
      124,
      140,
      68,
      82
    ],
    "rsiStack": [
      72.3,
      68.6,
      67.4,
      66.1,
      64.8,
      65.6
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 45.76,
    "change": 1.8,
    "mom": 64.8,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.2,
    "flow": 87,
    "perf": {
      "w1": 0.75,
      "m1": 2.62,
      "m3": 4.21
    },
    "returns": [
      1.8,
      1.24,
      0.75,
      2.95,
      2.62,
      4.21
    ],
    "volumes": [
      97,
      64,
      77,
      84,
      65,
      103
    ],
    "rsiStack": [
      74.3,
      65.8,
      61.2,
      58.9,
      58.2,
      61.8
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 183.2,
    "change": 0.69,
    "mom": 63.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 2)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 2,
    "rsi": 58.8,
    "flow": 92,
    "perf": {
      "w1": 2.11,
      "m1": -0.5,
      "m3": 7.15
    },
    "returns": [
      0.69,
      2.54,
      2.11,
      0.7,
      -0.5,
      7.15
    ],
    "volumes": [
      126,
      70,
      113,
      101,
      69,
      94
    ],
    "rsiStack": [
      75.3,
      62.8,
      58.8,
      57.5,
      57.1,
      59.6
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 51.39,
    "change": 2.19,
    "mom": 62.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.0,
    "flow": 81,
    "perf": {
      "w1": 1.7,
      "m1": -0.87,
      "m3": -0.02
    },
    "returns": [
      2.19,
      2.57,
      1.7,
      0.98,
      -0.87,
      -0.02
    ],
    "volumes": [
      101,
      80,
      79,
      108,
      62,
      75
    ],
    "rsiStack": [
      65.5,
      57.6,
      54.0,
      52.4,
      51.6,
      51.5
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 110.84,
    "change": 1.91,
    "mom": 37.4,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 2)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 2,
    "rsi": 37.8,
    "flow": 81,
    "perf": {
      "w1": -3.98,
      "m1": -2.21,
      "m3": -5.27
    },
    "returns": [
      1.91,
      -3.51,
      -3.98,
      -5.46,
      -2.21,
      -5.27
    ],
    "volumes": [
      147,
      77,
      119,
      106,
      69,
      93
    ],
    "rsiStack": [
      31.7,
      34.4,
      37.8,
      40.5,
      42.7,
      43.1
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 85.36,
    "change": 2.58,
    "mom": 55.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.7,
    "flow": 112,
    "perf": {
      "w1": 0.2,
      "m1": 1.69,
      "m3": 2.74
    },
    "returns": [
      2.58,
      1.55,
      0.2,
      1.47,
      1.69,
      2.74
    ],
    "volumes": [
      96,
      65,
      136,
      64,
      68,
      93
    ],
    "rsiStack": [
      60.8,
      56.6,
      54.7,
      53.6,
      52.6,
      50.9
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 516.23,
    "change": -6.35,
    "mom": 36.3,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.0,
    "flow": 134,
    "perf": {
      "w1": -1.07,
      "m1": -17.43,
      "m3": 17.67
    },
    "returns": [
      -6.35,
      -6.6,
      -1.07,
      -11.2,
      -17.43,
      17.67
    ],
    "volumes": [
      68,
      98,
      151,
      102,
      57,
      112
    ],
    "rsiStack": [
      29.4,
      36.4,
      41.0,
      44.4,
      47.8,
      51.0
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 27.62,
    "change": -2.2,
    "mom": 42.9,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.8,
    "flow": 125,
    "perf": {
      "w1": -0.79,
      "m1": 2.6,
      "m3": -1.22
    },
    "returns": [
      -2.2,
      -1.88,
      -0.79,
      -0.54,
      2.6,
      -1.22
    ],
    "volumes": [
      65,
      65,
      78,
      132,
      133,
      101
    ],
    "rsiStack": [
      35.9,
      47.9,
      51.8,
      52.7,
      52.9,
      52.9
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 45.62,
    "change": 0.15,
    "mom": 62.9,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 2)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 2,
    "rsi": 64.0,
    "flow": 151,
    "perf": {
      "w1": 1.54,
      "m1": 3.8,
      "m3": 1.67
    },
    "returns": [
      0.15,
      1.78,
      1.54,
      3.66,
      3.8,
      1.67
    ],
    "volumes": [
      371,
      100,
      110,
      56,
      52,
      29
    ],
    "rsiStack": [
      75.4,
      69.5,
      64.0,
      59.9,
      56.8,
      57.1
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 45.24,
    "change": 0.99,
    "mom": 47.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.4,
    "flow": 37,
    "perf": {
      "w1": 0.28,
      "m1": -0.32,
      "m3": 10.07
    },
    "returns": [
      0.99,
      0.2,
      0.28,
      -0.34,
      -0.32,
      10.07
    ],
    "volumes": [
      61,
      19,
      10,
      40,
      75,
      205
    ],
    "rsiStack": [
      54.4,
      52.9,
      53.4,
      54.2,
      55.3,
      57.1
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.56,
    "change": 0.59,
    "mom": 58.6,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.6,
    "flow": 505,
    "perf": {
      "w1": 0.8,
      "m1": 2.65,
      "m3": 0.25
    },
    "returns": [
      0.59,
      1.04,
      0.8,
      1.66,
      2.65,
      0.25
    ],
    "volumes": [
      65,
      17,
      115,
      90,
      228,
      3
    ],
    "rsiStack": [
      64.2,
      61.3,
      58.6,
      56.2,
      54.0,
      53.6
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 103.65,
    "change": 0.43,
    "mom": 43.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.4,
    "flow": 76,
    "perf": {
      "w1": -1.74,
      "m1": 0.47,
      "m3": 6.55
    },
    "returns": [
      0.43,
      -0.77,
      -1.74,
      -2.23,
      0.47,
      6.55
    ],
    "volumes": [
      100,
      85,
      106,
      66,
      62,
      88
    ],
    "rsiStack": [
      39.4,
      46.1,
      49.4,
      50.8,
      50.9,
      47.8
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 83.0,
    "change": 0.55,
    "mom": 57.4,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 65.0,
    "flow": 120,
    "perf": {
      "w1": 0.57,
      "m1": 4.68,
      "m3": 1.16
    },
    "returns": [
      0.55,
      1.03,
      0.57,
      2.51,
      4.68,
      1.16
    ],
    "volumes": [
      101,
      39,
      86,
      160,
      100,
      288
    ],
    "rsiStack": [
      68.2,
      68.1,
      65.0,
      61.2,
      57.7,
      57.3
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 14.68,
    "change": 3.75,
    "mom": 55.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 2)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 2,
    "rsi": 58.8,
    "flow": 110,
    "perf": {
      "w1": 3.16,
      "m1": 4.04,
      "m3": 18.39
    },
    "returns": [
      3.75,
      2.87,
      3.16,
      4.86,
      4.04,
      18.39
    ],
    "volumes": [
      131,
      99,
      86,
      108,
      90,
      95
    ],
    "rsiStack": [
      70.8,
      64.0,
      58.8,
      56.4,
      55.4,
      56.5
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 87.04,
    "change": 7.9,
    "mom": 73.7,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 2)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 2,
    "rsi": 68.9,
    "flow": 108,
    "perf": {
      "w1": 14.42,
      "m1": 10.84,
      "m3": 10.25
    },
    "returns": [
      7.9,
      9.46,
      14.42,
      11.8,
      10.84,
      10.25
    ],
    "volumes": [
      127,
      165,
      76,
      78,
      58,
      90
    ],
    "rsiStack": [
      82.7,
      75.4,
      68.9,
      64.3,
      60.8,
      60.3
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 25.12,
    "change": -2.35,
    "mom": 45.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.3,
    "flow": 112,
    "perf": {
      "w1": -1.12,
      "m1": 5.52,
      "m3": -0.18
    },
    "returns": [
      -2.35,
      -1.55,
      -1.12,
      1.19,
      5.52,
      -0.18
    ],
    "volumes": [
      56,
      84,
      117,
      139,
      41,
      49
    ],
    "rsiStack": [
      41.6,
      51.5,
      54.3,
      54.5,
      54.2,
      55.6
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 24.67,
    "change": -1.36,
    "mom": 51.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.1,
    "flow": 66,
    "perf": {
      "w1": -1.52,
      "m1": 4.22,
      "m3": -6.84
    },
    "returns": [
      -1.36,
      -1.08,
      -1.52,
      2.07,
      4.22,
      -6.84
    ],
    "volumes": [
      70,
      56,
      85,
      85,
      54,
      128
    ],
    "rsiStack": [
      45.3,
      49.0,
      48.1,
      47.1,
      46.9,
      50.2
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.62,
    "change": 0.63,
    "mom": 56.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.9,
    "flow": 62,
    "perf": {
      "w1": -0.93,
      "m1": 0.21,
      "m3": -16.64
    },
    "returns": [
      0.63,
      -0.93,
      -0.93,
      0.21,
      0.21,
      -16.64
    ],
    "volumes": [
      64,
      67,
      87,
      83,
      92,
      114
    ],
    "rsiStack": [
      46.5,
      46.5,
      44.9,
      43.8,
      46.0,
      58.0
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.5,
    "change": -0.82,
    "mom": 45.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.5,
    "flow": 72,
    "perf": {
      "w1": -2.91,
      "m1": 0.0,
      "m3": -15.51
    },
    "returns": [
      -0.82,
      -3.74,
      -2.91,
      -0.7,
      0.0,
      -15.51
    ],
    "volumes": [
      105,
      74,
      83,
      61,
      56,
      99
    ],
    "rsiStack": [
      32.4,
      39.1,
      40.5,
      41.2,
      46.1,
      62.0
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 208.14,
    "change": -11.99,
    "mom": 39.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.6,
    "flow": 61,
    "perf": {
      "w1": 2.69,
      "m1": -22.34,
      "m3": 25.45
    },
    "returns": [
      -11.99,
      -7.03,
      2.69,
      -19.26,
      -22.34,
      25.45
    ],
    "volumes": [
      55,
      55,
      91,
      61,
      41,
      81
    ],
    "rsiStack": [
      34.5,
      38.8,
      42.6,
      45.5,
      48.3,
      50.7
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 189.17,
    "change": -9.63,
    "mom": 40.7,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 37.9,
    "flow": 79,
    "perf": {
      "w1": 0.26,
      "m1": -32.74,
      "m3": 23.45
    },
    "returns": [
      -9.63,
      -9.04,
      0.26,
      -19.78,
      -32.74,
      23.45
    ],
    "volumes": [
      58,
      72,
      68,
      59,
      30,
      54
    ],
    "rsiStack": [
      28.4,
      33.1,
      37.9,
      41.9,
      45.8,
      48.6
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 67.4,
    "chg": -1.66,
    "chgW": 0.18,
    "chgM": 10.56,
    "chgYTD": 9.2,
    "marketCap": "$32.4B",
    "pe": "13.7x",
    "evEbitda": "8.2x",
    "de": "0.6x",
    "drawdown": "-21.0%"
  },
  "MOS": {
    "price": 22.34,
    "chg": 0.27,
    "chgW": 0.95,
    "chgM": 2.81,
    "chgYTD": -7.26,
    "marketCap": "$7.1B",
    "pe": "159.6x",
    "evEbitda": "6.4x",
    "de": "0.5x",
    "drawdown": "-39.8%"
  },
  "CF": {
    "price": 119.78,
    "chg": -5.47,
    "chgW": -1.35,
    "chgM": 13.55,
    "chgYTD": 54.87,
    "marketCap": "$18.4B",
    "pe": "10.8x",
    "evEbitda": "6.9x",
    "de": "0.4x",
    "drawdown": "-15.6%"
  },
  "ICL": {
    "price": 5.15,
    "chg": -2.83,
    "chgW": 1.98,
    "chgM": 3.41,
    "chgYTD": -9.81,
    "marketCap": "$6.6B",
    "pe": "24.5x",
    "evEbitda": "7.6x",
    "de": "0.5x",
    "drawdown": "-26.1%"
  },
  "FMC": {
    "price": 11.12,
    "chg": -4.88,
    "chgW": -0.8,
    "chgM": -1.77,
    "chgYTD": -19.83,
    "marketCap": "$1.4B",
    "pe": "5.5x",
    "evEbitda": "17.2x",
    "de": "2.5x",
    "drawdown": "-74.2%"
  },
  "CTVA": {
    "price": 87.58,
    "chg": -1.35,
    "chgW": 0.32,
    "chgM": 7.3,
    "chgYTD": 30.66,
    "marketCap": "$58.6B",
    "pe": "47.3x",
    "evEbitda": "14.8x",
    "de": "0.1x",
    "drawdown": "-2.0%"
  },
  "ADM": {
    "price": 83.19,
    "chg": -3.66,
    "chgW": -3.15,
    "chgM": 8.69,
    "chgYTD": 44.7,
    "marketCap": "$40.1B",
    "pe": "37.1x",
    "evEbitda": "20.4x",
    "de": "0.5x",
    "drawdown": "-6.0%"
  },
  "BG": {
    "price": 117.5,
    "chg": -3.92,
    "chgW": -1.38,
    "chgM": 5.33,
    "chgYTD": 31.9,
    "marketCap": "$22.8B",
    "pe": "30.9x",
    "evEbitda": "17.8x",
    "de": "0.9x",
    "drawdown": "-12.9%"
  },
  "INGR": {
    "price": 101.45,
    "chg": 1.2,
    "chgW": -1.08,
    "chgM": 4.78,
    "chgYTD": -7.99,
    "marketCap": "$6.4B",
    "pe": "9.8x",
    "evEbitda": "6.1x",
    "de": "0.4x",
    "drawdown": "-24.7%"
  },
  "FPI": {
    "price": 9.62,
    "chg": 0.63,
    "chgW": -0.93,
    "chgM": 0.21,
    "chgYTD": -0.72,
    "marketCap": "$427M",
    "pe": "16.3x",
    "evEbitda": "24.1x",
    "de": "0.5x",
    "drawdown": "-27.3%"
  },
  "LAND": {
    "price": 8.5,
    "chg": -0.82,
    "chgW": -2.91,
    "chgM": 0.0,
    "chgYTD": -7.1,
    "marketCap": "$367M",
    "pe": "-17.8x",
    "evEbitda": "12.4x",
    "de": "0.7x",
    "drawdown": "-34.6%"
  },
  "DE": {
    "price": 625.02,
    "chg": 2.46,
    "chgW": 4.65,
    "chgM": -0.91,
    "chgYTD": 34.25,
    "marketCap": "$168.8B",
    "pe": "35.4x",
    "evEbitda": "24.3x",
    "de": "3.8x",
    "drawdown": "-7.3%"
  },
  "AGCO": {
    "price": 120.24,
    "chg": 2.53,
    "chgW": 4.26,
    "chgM": 1.16,
    "chgYTD": 15.26,
    "marketCap": "$8.7B",
    "pe": "11.6x",
    "evEbitda": "10.7x",
    "de": "0.6x",
    "drawdown": "-16.4%"
  },
  "CNH": {
    "price": 11.08,
    "chg": 4.33,
    "chgW": 4.14,
    "chgM": 1.37,
    "chgYTD": 20.17,
    "marketCap": "$13.7B",
    "pe": "34.6x",
    "evEbitda": "35.9x",
    "de": "3.3x",
    "drawdown": "-16.8%"
  },
  "XYL": {
    "price": 120.16,
    "chg": 2.82,
    "chgW": -2.13,
    "chgM": 2.7,
    "chgYTD": -11.76,
    "marketCap": "$28.6B",
    "pe": "29.9x",
    "evEbitda": "15.7x",
    "de": "0.2x",
    "drawdown": "-22.1%"
  },
  "VMI": {
    "price": 494.81,
    "chg": 1.27,
    "chgW": -6.93,
    "chgM": -15.21,
    "chgYTD": 22.99,
    "marketCap": "$9.6B",
    "pe": "27.5x",
    "evEbitda": "15.0x",
    "de": "0.5x",
    "drawdown": "-15.5%"
  },
  "LNN": {
    "price": 114.6,
    "chg": 1.03,
    "chgW": -0.81,
    "chgM": -8.22,
    "chgYTD": -2.77,
    "marketCap": "$1.2B",
    "pe": "22.0x",
    "evEbitda": "13.6x",
    "de": "0.3x",
    "drawdown": "-22.6%"
  },
  "MWA": {
    "price": 25.16,
    "chg": 1.13,
    "chgW": -1.18,
    "chgM": -6.75,
    "chgYTD": 5.63,
    "marketCap": "$3.9B",
    "pe": "19.1x",
    "evEbitda": "11.6x",
    "de": "0.4x",
    "drawdown": "-18.8%"
  },
  "WTS": {
    "price": 345.7,
    "chg": 0.59,
    "chgW": -0.21,
    "chgM": -7.84,
    "chgYTD": 25.24,
    "marketCap": "$11.5B",
    "pe": "31.7x",
    "evEbitda": "20.5x",
    "de": "0.1x",
    "drawdown": "-12.4%"
  },
  "TSN": {
    "price": 60.71,
    "chg": 6.98,
    "chgW": 5.09,
    "chgM": 5.03,
    "chgYTD": 3.57,
    "marketCap": "$21.4B",
    "pe": "47.8x",
    "evEbitda": "10.3x",
    "de": "0.4x",
    "drawdown": "-12.6%"
  },
  "PPC": {
    "price": 29.19,
    "chg": 4.55,
    "chgW": 0.27,
    "chgM": 9.04,
    "chgYTD": -25.13,
    "marketCap": "$6.9B",
    "pe": "7.8x",
    "evEbitda": "4.7x",
    "de": "0.9x",
    "drawdown": "-42.3%"
  },
  "HRL": {
    "price": 26.05,
    "chg": 4.12,
    "chgW": 2.6,
    "chgM": 0.12,
    "chgYTD": 9.92,
    "marketCap": "$14.3B",
    "pe": "30.6x",
    "evEbitda": "10.9x",
    "de": "0.0x",
    "drawdown": "-11.2%"
  },
  "CAG": {
    "price": 15.24,
    "chg": 6.05,
    "chgW": 6.72,
    "chgM": 10.6,
    "chgYTD": -11.96,
    "marketCap": "$7.3B",
    "pe": "9.8x",
    "evEbitda": "8.4x",
    "de": "1.2x",
    "drawdown": "-25.0%"
  },
  "CALM": {
    "price": 88.72,
    "chg": 0.66,
    "chgW": 0.19,
    "chgM": 13.39,
    "chgYTD": 11.5,
    "marketCap": "$4.2B",
    "pe": "6.2x",
    "evEbitda": "7.1x",
    "de": "–",
    "drawdown": "-24.5%"
  },
  "DBA": {
    "price": 27.62,
    "chg": -2.2,
    "chgW": -0.79,
    "chgM": 2.6,
    "chgYTD": 8.23,
    "marketCap": "–",
    "pe": "11.7x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-4.2%"
  },
  "MOO": {
    "price": 83.0,
    "chg": 0.55,
    "chgW": 0.57,
    "chgM": 4.68,
    "chgYTD": 14.03,
    "marketCap": "–",
    "pe": "18.8x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-4.1%"
  },
  "VEGI": {
    "price": 45.62,
    "chg": 0.15,
    "chgW": 1.54,
    "chgM": 3.8,
    "chgYTD": 18.28,
    "marketCap": "–",
    "pe": "21.4x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-3.5%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "49.2x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
