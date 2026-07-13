window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-07-13 23:25:45",
  "sections": {
    "Index": {
      "risk": "Neutral",
      "leader": "DJI",
      "watch": 0
    },
    "Commodity": {
      "risk": "Risk On",
      "leader": "CF",
      "watch": 1
    },
    "Crypto": {
      "risk": "Neutral",
      "leader": "BTC",
      "watch": 0
    },
    "ETF": {
      "risk": "Risk Off",
      "leader": "XLF",
      "watch": 2
    },
    "Stock": {
      "risk": "Risk Off",
      "leader": "TAGS",
      "watch": 1
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
    "price": 7515.34,
    "change": -0.79,
    "mom": 45.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.5,
    "flow": 48,
    "perf": {
      "w1": -0.29,
      "m1": 1.64,
      "m3": 7.01
    },
    "returns": [
      -0.79,
      0.44,
      -0.29,
      2.19,
      1.64,
      7.01
    ],
    "volumes": [
      69,
      86,
      84,
      97,
      149,
      100
    ],
    "rsiStack": [
      52.2,
      54.2,
      54.5,
      55.2,
      56.2,
      57.8
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 52498.64,
    "change": -0.26,
    "mom": 39.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.7,
    "flow": 71,
    "perf": {
      "w1": -1.05,
      "m1": 3.24,
      "m3": 8.33
    },
    "returns": [
      -0.26,
      0.29,
      -1.05,
      1.2,
      3.24,
      8.33
    ],
    "volumes": [
      71,
      77,
      78,
      103,
      211,
      94
    ],
    "rsiStack": [
      50.9,
      57.6,
      59.7,
      60.3,
      60.4,
      61.8
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 7475.94,
    "change": 2.52,
    "mom": 35.4,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 42.5,
    "flow": 97,
    "perf": {
      "w1": -7.57,
      "m1": -7.97,
      "m3": 28.7
    },
    "returns": [
      2.52,
      -2.36,
      -7.57,
      -11.12,
      -7.97,
      28.7
    ],
    "volumes": [
      124,
      112,
      101,
      103,
      102,
      86
    ],
    "rsiStack": [
      36.7,
      38.8,
      42.5,
      45.7,
      49.1,
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
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.6,
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
      96,
      103,
      83,
      103,
      110,
      95
    ],
    "rsiStack": [
      48.8,
      49.1,
      51.6,
      53.8,
      56.0,
      59.6
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 367.13,
    "change": -2.62,
    "mom": 44.0,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.8,
    "flow": 88,
    "perf": {
      "w1": -3.93,
      "m1": -4.97,
      "m3": -16.65
    },
    "returns": [
      -2.62,
      -1.95,
      -3.93,
      -1.74,
      -4.97,
      -16.65
    ],
    "volumes": [
      71,
      92,
      45,
      105,
      66,
      177
    ],
    "rsiStack": [
      30.1,
      35.5,
      36.8,
      37.6,
      38.8,
      39.7
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 52.16,
    "change": -3.32,
    "mom": 46.5,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.3,
    "flow": 83,
    "perf": {
      "w1": -7.04,
      "m1": -14.24,
      "m3": -27.39
    },
    "returns": [
      -3.32,
      -1.27,
      -7.04,
      -2.1,
      -14.24,
      -27.39
    ],
    "volumes": [
      57,
      89,
      57,
      68,
      65,
      138
    ],
    "rsiStack": [
      31.9,
      34.3,
      35.3,
      36.9,
      38.7,
      39.1
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 40.72,
    "change": -5.24,
    "mom": 41.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 34.2,
    "flow": 89,
    "perf": {
      "w1": -7.2,
      "m1": -9.17,
      "m3": -25.75
    },
    "returns": [
      -5.24,
      -2.26,
      -7.2,
      -6.58,
      -9.17,
      -25.75
    ],
    "volumes": [
      68,
      66,
      43,
      95,
      53,
      112
    ],
    "rsiStack": [
      26.6,
      30.6,
      34.2,
      37.0,
      40.1,
      43.4
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 78.88,
    "change": 10.46,
    "mom": 71.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.4,
    "flow": 3,
    "perf": {
      "w1": 15.07,
      "m1": -10.07,
      "m3": -13.59
    },
    "returns": [
      10.46,
      7.29,
      15.07,
      13.94,
      -10.07,
      -13.59
    ],
    "volumes": [
      114,
      190,
      102,
      87,
      103,
      123
    ],
    "rsiStack": [
      78.1,
      62.3,
      52.4,
      48.3,
      47.5,
      49.8
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 120.92,
    "change": 3.42,
    "mom": 69.3,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 65.3,
    "flow": 86,
    "perf": {
      "w1": 6.82,
      "m1": 13.48,
      "m3": 0.09
    },
    "returns": [
      3.42,
      3.33,
      6.82,
      14.4,
      13.48,
      0.09
    ],
    "volumes": [
      39,
      131,
      107,
      89,
      93,
      114
    ],
    "rsiStack": [
      81.8,
      74.1,
      65.3,
      59.4,
      55.8,
      56.3
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 35.63,
    "change": 2.39,
    "mom": 61.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.5,
    "flow": 110,
    "perf": {
      "w1": 4.27,
      "m1": 3.7,
      "m3": -4.91
    },
    "returns": [
      2.39,
      2.39,
      4.27,
      3.01,
      3.7,
      -4.91
    ],
    "volumes": [
      60,
      85,
      46,
      158,
      166,
      72
    ],
    "rsiStack": [
      70.3,
      59.1,
      52.5,
      49.6,
      48.9,
      50.7
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 22.31,
    "change": 3.72,
    "mom": 64.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.0,
    "flow": 84,
    "perf": {
      "w1": 5.34,
      "m1": 5.78,
      "m3": -5.98
    },
    "returns": [
      3.72,
      8.04,
      5.34,
      -0.31,
      5.78,
      -5.98
    ],
    "volumes": [
      64,
      74,
      71,
      98,
      95,
      150
    ],
    "rsiStack": [
      72.1,
      59.4,
      54.0,
      51.1,
      48.7,
      46.8
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 67.6,
    "change": 3.32,
    "mom": 69.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.6,
    "flow": 57,
    "perf": {
      "w1": 4.74,
      "m1": 3.11,
      "m3": -7.84
    },
    "returns": [
      3.32,
      1.26,
      4.74,
      10.86,
      3.11,
      -7.84
    ],
    "volumes": [
      48,
      98,
      87,
      73,
      82,
      186
    ],
    "rsiStack": [
      72.1,
      64.3,
      57.6,
      53.2,
      51.3,
      54.9
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 63228.4,
    "change": -0.83,
    "mom": 56.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.7,
    "flow": 70,
    "perf": {
      "w1": 1.56,
      "m1": 0.89,
      "m3": -21.99
    },
    "returns": [
      -0.83,
      -1.4,
      1.56,
      1.09,
      0.89,
      -21.99
    ],
    "volumes": [
      67,
      94,
      96,
      128,
      91,
      94
    ],
    "rsiStack": [
      50.3,
      52.6,
      49.7,
      46.9,
      45.3,
      46.7
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 157.37,
    "change": -1.07,
    "mom": 49.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.6,
    "flow": 69,
    "perf": {
      "w1": -6.81,
      "m1": -1.91,
      "m3": -19.67
    },
    "returns": [
      -1.07,
      -1.25,
      -6.81,
      5.57,
      -1.91,
      -19.67
    ],
    "volumes": [
      79,
      59,
      74,
      135,
      117,
      74
    ],
    "rsiStack": [
      43.9,
      46.3,
      45.6,
      45.0,
      43.3,
      36.1
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 63.0,
    "change": -4.75,
    "mom": 45.4,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 36.4,
    "flow": 86,
    "perf": {
      "w1": -8.23,
      "m1": -23.76,
      "m3": -40.3
    },
    "returns": [
      -4.75,
      -1.67,
      -8.23,
      -14.37,
      -23.76,
      -40.3
    ],
    "volumes": [
      252,
      64,
      91,
      173,
      108,
      64
    ],
    "rsiStack": [
      37.5,
      36.3,
      36.4,
      37.7,
      39.1,
      36.8
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 92.1,
    "change": -2.68,
    "mom": 51.5,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.4,
    "flow": 46,
    "perf": {
      "w1": -8.6,
      "m1": -23.35,
      "m3": -35.84
    },
    "returns": [
      -2.68,
      -1.89,
      -8.6,
      11.89,
      -23.35,
      -35.84
    ],
    "volumes": [
      59,
      64,
      94,
      122,
      176,
      95
    ],
    "rsiStack": [
      36.8,
      37.0,
      36.4,
      37.1,
      38.1,
      36.1
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 56.74,
    "change": 3.01,
    "mom": 67.7,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.7,
    "flow": 124,
    "perf": {
      "w1": 6.79,
      "m1": -0.67,
      "m3": 1.76
    },
    "returns": [
      3.01,
      2.05,
      6.79,
      5.39,
      -0.67,
      1.76
    ],
    "volumes": [
      69,
      113,
      73,
      97,
      53,
      106
    ],
    "rsiStack": [
      77.7,
      65.6,
      57.7,
      53.8,
      51.3,
      48.9
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 181.28,
    "change": -2.42,
    "mom": 40.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.9,
    "flow": 74,
    "perf": {
      "w1": -1.25,
      "m1": -1.05,
      "m3": 20.61
    },
    "returns": [
      -2.42,
      -0.07,
      -1.25,
      0.09,
      -1.05,
      20.61
    ],
    "volumes": [
      51,
      76,
      61,
      67,
      87,
      118
    ],
    "rsiStack": [
      41.8,
      45.3,
      47.9,
      50.3,
      52.9,
      55.8
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 45.72,
    "change": 0.68,
    "mom": 54.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.3,
    "flow": 77,
    "perf": {
      "w1": 0.93,
      "m1": 3.79,
      "m3": -0.65
    },
    "returns": [
      0.68,
      0.79,
      0.93,
      -1.04,
      3.79,
      -0.65
    ],
    "volumes": [
      69,
      72,
      91,
      141,
      90,
      92
    ],
    "rsiStack": [
      59.4,
      56.7,
      55.3,
      54.0,
      53.5,
      56.6
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 161.41,
    "change": 0.35,
    "mom": 46.1,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.2,
    "flow": 63,
    "perf": {
      "w1": -0.34,
      "m1": 4.75,
      "m3": 9.23
    },
    "returns": [
      0.35,
      -0.55,
      -0.34,
      0.67,
      4.75,
      9.23
    ],
    "volumes": [
      85,
      81,
      135,
      87,
      141,
      97
    ],
    "rsiStack": [
      54.0,
      59.7,
      61.2,
      60.9,
      58.9,
      53.7
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 111.59,
    "change": -0.04,
    "mom": 63.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.1,
    "flow": 74,
    "perf": {
      "w1": 1.25,
      "m1": -0.47,
      "m3": -4.92
    },
    "returns": [
      -0.04,
      1.95,
      1.25,
      5.1,
      -0.47,
      -4.92
    ],
    "volumes": [
      82,
      70,
      111,
      186,
      127,
      106
    ],
    "rsiStack": [
      68.6,
      60.0,
      54.1,
      50.9,
      48.5,
      45.8
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 56.07,
    "change": 0.65,
    "mom": 56.9,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 67.9,
    "flow": 95,
    "perf": {
      "w1": -0.12,
      "m1": 6.56,
      "m3": 7.48
    },
    "returns": [
      0.65,
      2.0,
      -0.12,
      4.67,
      6.56,
      7.48
    ],
    "volumes": [
      68,
      114,
      86,
      124,
      70,
      111
    ],
    "rsiStack": [
      70.2,
      69.2,
      67.9,
      66.1,
      63.6,
      61.6
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 44.7,
    "change": 0.56,
    "mom": 51.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.7,
    "flow": 77,
    "perf": {
      "w1": 0.93,
      "m1": -0.49,
      "m3": 2.97
    },
    "returns": [
      0.56,
      1.25,
      0.93,
      -1.19,
      -0.49,
      2.97
    ],
    "volumes": [
      65,
      69,
      121,
      141,
      97,
      112
    ],
    "rsiStack": [
      57.5,
      53.6,
      52.7,
      52.7,
      53.6,
      56.9
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 180.37,
    "change": -0.85,
    "mom": 35.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.3,
    "flow": 72,
    "perf": {
      "w1": -2.8,
      "m1": 2.98,
      "m3": 5.37
    },
    "returns": [
      -0.85,
      -0.03,
      -2.8,
      -0.46,
      2.98,
      5.37
    ],
    "volumes": [
      69,
      88,
      81,
      97,
      105,
      133
    ],
    "rsiStack": [
      39.3,
      47.5,
      51.3,
      52.9,
      54.3,
      57.3
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 50.58,
    "change": -0.61,
    "mom": 42.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.8,
    "flow": 76,
    "perf": {
      "w1": -2.69,
      "m1": -1.25,
      "m3": -1.56
    },
    "returns": [
      -0.61,
      0.84,
      -2.69,
      -1.98,
      -1.25,
      -1.56
    ],
    "volumes": [
      62,
      108,
      165,
      121,
      72,
      101
    ],
    "rsiStack": [
      41.4,
      43.9,
      45.8,
      47.1,
      48.6,
      51.2
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 116.04,
    "change": -1.02,
    "mom": 46.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.1,
    "flow": 70,
    "perf": {
      "w1": -1.67,
      "m1": -0.22,
      "m3": -1.81
    },
    "returns": [
      -1.02,
      0.64,
      -1.67,
      1.46,
      -0.22,
      -1.81
    ],
    "volumes": [
      69,
      173,
      111,
      128,
      115,
      108
    ],
    "rsiStack": [
      43.8,
      47.2,
      48.1,
      48.7,
      49.4,
      50.8
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 84.59,
    "change": 0.56,
    "mom": 51.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.5,
    "flow": 69,
    "perf": {
      "w1": 0.58,
      "m1": -0.8,
      "m3": 4.35
    },
    "returns": [
      0.56,
      0.24,
      0.58,
      -0.14,
      -0.8,
      4.35
    ],
    "volumes": [
      68,
      87,
      104,
      97,
      86,
      143
    ],
    "rsiStack": [
      56.6,
      53.7,
      52.5,
      52.0,
      51.7,
      52.1
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 553.61,
    "change": -4.77,
    "mom": 34.6,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.7,
    "flow": 81,
    "perf": {
      "w1": -4.8,
      "m1": -5.68,
      "m3": 37.76
    },
    "returns": [
      -4.77,
      -1.5,
      -4.8,
      -6.16,
      -5.68,
      37.76
    ],
    "volumes": [
      57,
      63,
      69,
      83,
      95,
      113
    ],
    "rsiStack": [
      35.7,
      41.7,
      45.7,
      48.6,
      51.7,
      55.3
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 27.72,
    "change": -0.18,
    "mom": 60.0,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 64.1,
    "flow": 105,
    "perf": {
      "w1": 0.65,
      "m1": 5.4,
      "m3": 2.02
    },
    "returns": [
      -0.18,
      0.36,
      0.65,
      3.43,
      5.4,
      2.02
    ],
    "volumes": [
      133,
      64,
      105,
      40,
      46,
      73
    ],
    "rsiStack": [
      77.4,
      70.8,
      64.1,
      59.7,
      57.2,
      57.7
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 44.15,
    "change": 0.32,
    "mom": 54.2,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.7,
    "flow": 177,
    "perf": {
      "w1": -1.78,
      "m1": 1.87,
      "m3": -2.3
    },
    "returns": [
      0.32,
      0.18,
      -1.78,
      0.98,
      1.87,
      -2.3
    ],
    "volumes": [
      52,
      25,
      78,
      42,
      28,
      81
    ],
    "rsiStack": [
      54.8,
      53.6,
      51.7,
      50.5,
      50.8,
      56.4
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 44.96,
    "change": -0.97,
    "mom": 40.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.7,
    "flow": 24,
    "perf": {
      "w1": -1.31,
      "m1": 0.04,
      "m3": 12.12
    },
    "returns": [
      -0.97,
      1.01,
      -1.31,
      -0.6,
      0.04,
      12.12
    ],
    "volumes": [
      75,
      39,
      51,
      87,
      1146,
      535
    ],
    "rsiStack": [
      46.0,
      49.9,
      52.7,
      54.4,
      56.1,
      59.6
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.19,
    "change": 0.37,
    "mom": 56.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 54.8,
    "flow": 99,
    "perf": {
      "w1": -1.29,
      "m1": 2.81,
      "m3": -3.0
    },
    "returns": [
      0.37,
      -0.0,
      -1.29,
      1.28,
      2.81,
      -3.0
    ],
    "volumes": [
      228,
      12,
      84,
      2,
      19,
      27
    ],
    "rsiStack": [
      58.2,
      57.4,
      54.8,
      52.8,
      51.8,
      54.0
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 107.34,
    "change": 1.25,
    "mom": 58.4,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.6,
    "flow": 86,
    "perf": {
      "w1": 5.12,
      "m1": 4.95,
      "m3": 9.15
    },
    "returns": [
      1.25,
      3.34,
      5.12,
      2.62,
      4.95,
      9.15
    ],
    "volumes": [
      62,
      89,
      92,
      92,
      207,
      128
    ],
    "rsiStack": [
      74.9,
      68.0,
      63.6,
      60.8,
      59.4,
      62.4
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 81.48,
    "change": 0.63,
    "mom": 63.4,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.9,
    "flow": 86,
    "perf": {
      "w1": 0.05,
      "m1": 4.56,
      "m3": -2.71
    },
    "returns": [
      0.63,
      0.75,
      0.05,
      2.85,
      4.56,
      -2.71
    ],
    "volumes": [
      100,
      93,
      67,
      44,
      89,
      45
    ],
    "rsiStack": [
      72.8,
      67.7,
      61.9,
      57.4,
      54.5,
      56.5
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 13.85,
    "change": -1.07,
    "mom": 49.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.7,
    "flow": 89,
    "perf": {
      "w1": 0.14,
      "m1": -5.85,
      "m3": 8.97
    },
    "returns": [
      -1.07,
      2.59,
      0.14,
      -1.98,
      -5.85,
      8.97
    ],
    "volumes": [
      90,
      83,
      101,
      82,
      95,
      60
    ],
    "rsiStack": [
      53.3,
      47.9,
      47.7,
      48.9,
      50.1,
      50.3
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 76.72,
    "change": -1.45,
    "mom": 47.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.5,
    "flow": 40,
    "perf": {
      "w1": -1.45,
      "m1": -5.11,
      "m3": -1.36
    },
    "returns": [
      -1.45,
      0.63,
      -1.45,
      -1.77,
      -5.11,
      -1.36
    ],
    "volumes": [
      58,
      59,
      100,
      84,
      130,
      73
    ],
    "rsiStack": [
      45.1,
      43.5,
      44.5,
      45.9,
      47.1,
      47.0
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 24.86,
    "change": 0.12,
    "mom": 61.0,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.6,
    "flow": 111,
    "perf": {
      "w1": 0.57,
      "m1": 4.98,
      "m3": 3.24
    },
    "returns": [
      0.12,
      1.35,
      0.57,
      4.28,
      4.98,
      3.24
    ],
    "volumes": [
      41,
      71,
      158,
      93,
      22,
      91
    ],
    "rsiStack": [
      76.6,
      68.6,
      61.6,
      57.3,
      54.5,
      52.9
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 24.48,
    "change": 1.28,
    "mom": 65.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.1,
    "flow": 83,
    "perf": {
      "w1": 3.2,
      "m1": -6.46,
      "m3": -9.97
    },
    "returns": [
      1.28,
      1.79,
      3.2,
      0.78,
      -6.46,
      -9.97
    ],
    "volumes": [
      54,
      74,
      114,
      101,
      128,
      135
    ],
    "rsiStack": [
      61.0,
      50.3,
      46.1,
      44.6,
      45.1,
      50.1
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.6,
    "change": 0.0,
    "mom": 56.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.8,
    "flow": 84,
    "perf": {
      "w1": 0.84,
      "m1": -2.93,
      "m3": -16.74
    },
    "returns": [
      0.0,
      0.1,
      0.84,
      -3.13,
      -2.93,
      -16.74
    ],
    "volumes": [
      92,
      88,
      95,
      70,
      276,
      114
    ],
    "rsiStack": [
      47.7,
      43.1,
      40.8,
      39.8,
      39.9,
      41.8
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.6,
    "change": 0.47,
    "mom": 66.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.8,
    "flow": 74,
    "perf": {
      "w1": 0.58,
      "m1": -4.44,
      "m3": -17.23
    },
    "returns": [
      0.47,
      1.3,
      0.58,
      -0.12,
      -4.44,
      -17.23
    ],
    "volumes": [
      56,
      99,
      73,
      98,
      282,
      127
    ],
    "rsiStack": [
      54.2,
      44.6,
      40.8,
      39.8,
      42.1,
      51.8
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 236.88,
    "change": -8.11,
    "mom": 38.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.6,
    "flow": 71,
    "perf": {
      "w1": -10.8,
      "m1": -10.53,
      "m3": 40.71
    },
    "returns": [
      -8.11,
      -8.43,
      -10.8,
      -0.47,
      -10.53,
      40.71
    ],
    "volumes": [
      41,
      54,
      67,
      70,
      327,
      137
    ],
    "rsiStack": [
      36.0,
      43.5,
      47.6,
      50.1,
      51.8,
      50.6
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 217.53,
    "change": -7.75,
    "mom": 33.5,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.1,
    "flow": 52,
    "perf": {
      "w1": -12.73,
      "m1": -22.51,
      "m3": 61.61
    },
    "returns": [
      -7.75,
      -6.12,
      -12.73,
      -18.46,
      -22.51,
      61.61
    ],
    "volumes": [
      30,
      46,
      42,
      50,
      58,
      105
    ],
    "rsiStack": [
      25.6,
      34.6,
      41.1,
      45.5,
      49.3,
      52.3
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 67.6,
    "chg": 3.32,
    "chgW": 4.74,
    "chgM": 3.11,
    "chgYTD": 9.53,
    "marketCap": "$32.4B",
    "pe": "13.8x",
    "evEbitda": "8.0x",
    "de": "0.6x",
    "drawdown": "-20.8%"
  },
  "MOS": {
    "price": 22.31,
    "chg": 3.72,
    "chgW": 5.34,
    "chgM": 5.78,
    "chgYTD": -7.39,
    "marketCap": "$7.1B",
    "pe": "159.4x",
    "evEbitda": "6.4x",
    "de": "0.5x",
    "drawdown": "-40.6%"
  },
  "CF": {
    "price": 120.92,
    "chg": 3.42,
    "chgW": 6.82,
    "chgM": 13.48,
    "chgYTD": 56.35,
    "marketCap": "$18.6B",
    "pe": "10.9x",
    "evEbitda": "6.5x",
    "de": "0.4x",
    "drawdown": "-14.8%"
  },
  "ICL": {
    "price": 4.93,
    "chg": 1.65,
    "chgW": -2.38,
    "chgM": -13.05,
    "chgYTD": -13.66,
    "marketCap": "$6.4B",
    "pe": "23.5x",
    "evEbitda": "7.1x",
    "de": "0.5x",
    "drawdown": "-30.4%"
  },
  "FMC": {
    "price": 10.91,
    "chg": 0.0,
    "chgW": -4.13,
    "chgM": -3.19,
    "chgYTD": -21.34,
    "marketCap": "$1.4B",
    "pe": "5.2x",
    "evEbitda": "17.0x",
    "de": "2.5x",
    "drawdown": "-75.2%"
  },
  "CTVA": {
    "price": 86.07,
    "chg": 0.46,
    "chgW": -0.37,
    "chgM": 14.97,
    "chgYTD": 28.41,
    "marketCap": "$57.6B",
    "pe": "46.5x",
    "evEbitda": "14.2x",
    "de": "0.1x",
    "drawdown": "-1.8%"
  },
  "ADM": {
    "price": 82.04,
    "chg": 2.03,
    "chgW": 5.27,
    "chgM": 3.98,
    "chgYTD": 42.7,
    "marketCap": "$39.5B",
    "pe": "36.6x",
    "evEbitda": "19.3x",
    "de": "0.5x",
    "drawdown": "-3.9%"
  },
  "BG": {
    "price": 117.4,
    "chg": 2.69,
    "chgW": 7.92,
    "chgM": -6.29,
    "chgYTD": 31.79,
    "marketCap": "$22.8B",
    "pe": "30.9x",
    "evEbitda": "17.2x",
    "de": "0.9x",
    "drawdown": "-13.0%"
  },
  "INGR": {
    "price": 99.34,
    "chg": 0.6,
    "chgW": 0.05,
    "chgM": -1.55,
    "chgYTD": -9.9,
    "marketCap": "$6.3B",
    "pe": "9.6x",
    "evEbitda": "6.0x",
    "de": "0.4x",
    "drawdown": "-27.6%"
  },
  "FPI": {
    "price": 9.6,
    "chg": 0.0,
    "chgW": 0.84,
    "chgM": -2.93,
    "chgYTD": -0.93,
    "marketCap": "$426M",
    "pe": "16.3x",
    "evEbitda": "24.1x",
    "de": "0.5x",
    "drawdown": "-27.4%"
  },
  "LAND": {
    "price": 8.6,
    "chg": 0.47,
    "chgW": 0.58,
    "chgM": -4.44,
    "chgYTD": -6.01,
    "marketCap": "$371M",
    "pe": "-18.0x",
    "evEbitda": "12.4x",
    "de": "0.7x",
    "drawdown": "-33.8%"
  },
  "DE": {
    "price": 585.64,
    "chg": -0.21,
    "chgW": -7.81,
    "chgM": 2.99,
    "chgYTD": 25.79,
    "marketCap": "$158.2B",
    "pe": "33.2x",
    "evEbitda": "23.0x",
    "de": "3.8x",
    "drawdown": "-13.1%"
  },
  "AGCO": {
    "price": 114.08,
    "chg": -0.21,
    "chgW": -3.58,
    "chgM": 2.75,
    "chgYTD": 9.36,
    "marketCap": "$8.3B",
    "pe": "11.0x",
    "evEbitda": "10.3x",
    "de": "0.6x",
    "drawdown": "-20.7%"
  },
  "CNH": {
    "price": 10.42,
    "chg": -0.29,
    "chgW": -4.14,
    "chgM": 0.58,
    "chgYTD": 13.02,
    "marketCap": "$12.9B",
    "pe": "32.6x",
    "evEbitda": "35.1x",
    "de": "3.3x",
    "drawdown": "-22.7%"
  },
  "XYL": {
    "price": 121.21,
    "chg": -0.01,
    "chgW": 1.5,
    "chgM": 11.15,
    "chgYTD": -10.99,
    "marketCap": "$28.8B",
    "pe": "30.2x",
    "evEbitda": "15.9x",
    "de": "0.2x",
    "drawdown": "-21.4%"
  },
  "VMI": {
    "price": 539.79,
    "chg": -1.29,
    "chgW": -4.3,
    "chgM": 2.12,
    "chgYTD": 34.17,
    "marketCap": "$10.5B",
    "pe": "30.0x",
    "evEbitda": "17.8x",
    "de": "0.5x",
    "drawdown": "-7.8%"
  },
  "LNN": {
    "price": 114.93,
    "chg": 0.98,
    "chgW": -2.28,
    "chgM": 0.22,
    "chgYTD": -2.49,
    "marketCap": "$1.2B",
    "pe": "22.1x",
    "evEbitda": "13.5x",
    "de": "0.3x",
    "drawdown": "-22.3%"
  },
  "MWA": {
    "price": 24.6,
    "chg": -1.28,
    "chgW": -2.96,
    "chgM": -3.98,
    "chgYTD": 3.27,
    "marketCap": "$3.8B",
    "pe": "18.6x",
    "evEbitda": "11.4x",
    "de": "0.4x",
    "drawdown": "-20.6%"
  },
  "WTS": {
    "price": 346.82,
    "chg": -1.57,
    "chgW": -6.15,
    "chgM": 8.08,
    "chgYTD": 25.65,
    "marketCap": "$11.6B",
    "pe": "31.8x",
    "evEbitda": "20.6x",
    "de": "0.1x",
    "drawdown": "-12.1%"
  },
  "TSN": {
    "price": 57.92,
    "chg": 0.16,
    "chgW": -1.41,
    "chgM": 4.1,
    "chgYTD": -1.19,
    "marketCap": "$20.4B",
    "pe": "45.6x",
    "evEbitda": "10.3x",
    "de": "0.4x",
    "drawdown": "-16.6%"
  },
  "PPC": {
    "price": 28.51,
    "chg": 0.92,
    "chgW": -0.49,
    "chgM": -3.88,
    "chgYTD": -26.88,
    "marketCap": "$6.8B",
    "pe": "7.6x",
    "evEbitda": "4.7x",
    "de": "0.9x",
    "drawdown": "-43.6%"
  },
  "HRL": {
    "price": 24.46,
    "chg": -1.09,
    "chgW": 0.74,
    "chgM": 0.08,
    "chgYTD": 3.21,
    "marketCap": "$13.5B",
    "pe": "28.8x",
    "evEbitda": "10.5x",
    "de": "0.0x",
    "drawdown": "-19.2%"
  },
  "CAG": {
    "price": 14.33,
    "chg": 3.62,
    "chgW": 3.92,
    "chgM": 6.54,
    "chgYTD": -17.22,
    "marketCap": "$6.9B",
    "pe": "9.1x",
    "evEbitda": "8.2x",
    "de": "0.9x",
    "drawdown": "-29.5%"
  },
  "CALM": {
    "price": 83.41,
    "chg": -5.58,
    "chgW": -2.09,
    "chgM": 4.43,
    "chgYTD": 4.83,
    "marketCap": "$4.0B",
    "pe": "5.8x",
    "evEbitda": "3.1x",
    "de": "–",
    "drawdown": "-34.0%"
  },
  "DBA": {
    "price": 27.72,
    "chg": -0.18,
    "chgW": 0.65,
    "chgM": 5.4,
    "chgYTD": 8.62,
    "marketCap": "–",
    "pe": "11.7x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-3.9%"
  },
  "MOO": {
    "price": 81.48,
    "chg": 0.63,
    "chgW": 0.05,
    "chgM": 4.56,
    "chgYTD": 11.94,
    "marketCap": "–",
    "pe": "18.4x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-5.9%"
  },
  "VEGI": {
    "price": 44.15,
    "chg": 0.32,
    "chgW": -1.78,
    "chgM": 1.87,
    "chgYTD": 14.47,
    "marketCap": "–",
    "pe": "20.7x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-6.6%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "55.3x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
