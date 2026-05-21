window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-05-21 23:35:09",
  "sections": {
    "Index": {
      "risk": "Risk On",
      "leader": "KOSPI",
      "watch": 1
    },
    "Commodity": {
      "risk": "Risk On",
      "leader": "IPI",
      "watch": 0
    },
    "Crypto": {
      "risk": "Risk On",
      "leader": "CRCL",
      "watch": 0
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "SOX",
      "watch": 2
    },
    "Stock": {
      "risk": "Neutral",
      "leader": "MRVL",
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
    "price": 7445.72,
    "change": 0.17,
    "mom": 49.1,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 66.7,
    "flow": 56,
    "perf": {
      "w1": -0.74,
      "m1": 4.75,
      "m3": 7.19
    },
    "returns": [
      0.17,
      0.58,
      -0.74,
      1.48,
      4.75,
      7.19
    ],
    "volumes": [
      99,
      102,
      98,
      105,
      120,
      104
    ],
    "rsiStack": [
      62.7,
      65.4,
      66.7,
      66.0,
      64.5,
      65.3
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 50285.66,
    "change": 0.55,
    "mom": 56.2,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.3,
    "flow": 112,
    "perf": {
      "w1": 0.44,
      "m1": 1.98,
      "m3": 1.62
    },
    "returns": [
      0.55,
      1.21,
      0.44,
      1.39,
      1.98,
      1.62
    ],
    "volumes": [
      102,
      93,
      102,
      101,
      98,
      92
    ],
    "rsiStack": [
      68.2,
      64.0,
      62.3,
      60.7,
      59.7,
      63.5
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 7208.95,
    "change": -0.86,
    "mom": 35.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.5,
    "flow": 62,
    "perf": {
      "w1": -8.1,
      "m1": 15.92,
      "m3": 24.11
    },
    "returns": [
      -0.86,
      -3.79,
      -8.1,
      -2.38,
      15.92,
      24.11
    ],
    "volumes": [
      66,
      106,
      88,
      86,
      110,
      71
    ],
    "rsiStack": [
      35.9,
      50.1,
      56.5,
      59.1,
      60.2,
      60.6
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
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.6,
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
      105,
      98,
      125,
      116,
      150,
      94
    ],
    "rsiStack": [
      26.3,
      43.0,
      50.6,
      53.5,
      55.0,
      55.9
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 416.99,
    "change": -0.1,
    "mom": 46.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.1,
    "flow": 77,
    "perf": {
      "w1": -2.39,
      "m1": -3.26,
      "m3": -11.92
    },
    "returns": [
      -0.1,
      -0.34,
      -2.39,
      -3.4,
      -3.26,
      -11.92
    ],
    "volumes": [
      99,
      90,
      63,
      101,
      101,
      54
    ],
    "rsiStack": [
      38.5,
      40.1,
      42.1,
      43.7,
      45.5,
      47.6
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 69.45,
    "change": 1.05,
    "mom": 44.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.0,
    "flow": 71,
    "perf": {
      "w1": -8.03,
      "m1": 1.56,
      "m3": -13.23
    },
    "returns": [
      1.05,
      -0.7,
      -8.03,
      -3.0,
      1.56,
      -13.23
    ],
    "volumes": [
      93,
      95,
      116,
      136,
      150,
      72
    ],
    "rsiStack": [
      43.3,
      46.3,
      48.0,
      48.7,
      49.3,
      50.3
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 48.86,
    "change": 1.71,
    "mom": 38.6,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.0,
    "flow": 87,
    "perf": {
      "w1": -6.93,
      "m1": -13.48,
      "m3": -11.47
    },
    "returns": [
      1.71,
      0.37,
      -6.93,
      -13.15,
      -13.48,
      -11.47
    ],
    "volumes": [
      76,
      95,
      77,
      136,
      135,
      153
    ],
    "rsiStack": [
      35.2,
      37.3,
      41.0,
      43.7,
      46.4,
      50.1
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 97.74,
    "change": -0.53,
    "mom": 41.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.0,
    "flow": 1,
    "perf": {
      "w1": -3.39,
      "m1": 1.97,
      "m3": 49.4
    },
    "returns": [
      -0.53,
      -10.05,
      -3.39,
      3.09,
      1.97,
      49.4
    ],
    "volumes": [
      78,
      43,
      63,
      83,
      134,
      113
    ],
    "rsiStack": [
      35.0,
      44.0,
      48.0,
      50.3,
      52.6,
      55.2
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 121.69,
    "change": -1.31,
    "mom": 44.0,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 48.1,
    "flow": 77,
    "perf": {
      "w1": -1.04,
      "m1": -3.11,
      "m3": 26.58
    },
    "returns": [
      -1.31,
      -2.82,
      -1.04,
      2.54,
      -3.11,
      26.58
    ],
    "volumes": [
      141,
      101,
      70,
      110,
      161,
      83
    ],
    "rsiStack": [
      40.2,
      45.9,
      48.1,
      49.7,
      51.5,
      53.5
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 40.34,
    "change": 0.1,
    "mom": 44.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.7,
    "flow": 46,
    "perf": {
      "w1": -5.37,
      "m1": 7.83,
      "m3": 18.65
    },
    "returns": [
      0.1,
      -2.06,
      -5.37,
      4.48,
      7.83,
      18.65
    ],
    "volumes": [
      79,
      77,
      99,
      183,
      155,
      51
    ],
    "rsiStack": [
      39.3,
      47.4,
      49.7,
      50.7,
      51.9,
      54.0
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 21.94,
    "change": 0.37,
    "mom": 52.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.4,
    "flow": 64,
    "perf": {
      "w1": -3.26,
      "m1": -9.64,
      "m3": -18.68
    },
    "returns": [
      0.37,
      2.48,
      -3.26,
      -4.23,
      -9.64,
      -18.68
    ],
    "volumes": [
      91,
      103,
      87,
      127,
      83,
      72
    ],
    "rsiStack": [
      45.7,
      40.3,
      39.4,
      40.3,
      42.9,
      49.0
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 70.24,
    "change": 0.19,
    "mom": 46.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.1,
    "flow": 85,
    "perf": {
      "w1": -0.99,
      "m1": -2.7,
      "m3": -3.16
    },
    "returns": [
      0.19,
      -1.93,
      -0.99,
      2.72,
      -2.7,
      -3.16
    ],
    "volumes": [
      96,
      73,
      64,
      106,
      229,
      54
    ],
    "rsiStack": [
      35.3,
      40.6,
      43.1,
      45.0,
      47.5,
      51.7
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 77606.62,
    "change": 0.19,
    "mom": 40.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.9,
    "flow": 85,
    "perf": {
      "w1": -0.67,
      "m1": -0.73,
      "m3": 14.39
    },
    "returns": [
      0.19,
      0.85,
      -0.67,
      -5.04,
      -0.73,
      14.39
    ],
    "volumes": [
      82,
      124,
      77,
      135,
      98,
      106
    ],
    "rsiStack": [
      41.0,
      43.5,
      47.9,
      50.7,
      51.9,
      50.7
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 193.56,
    "change": 1.19,
    "mom": 43.3,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.8,
    "flow": 58,
    "perf": {
      "w1": -8.7,
      "m1": -2.21,
      "m3": 5.23
    },
    "returns": [
      1.19,
      2.17,
      -8.7,
      0.31,
      -2.21,
      5.23
    ],
    "volumes": [
      73,
      100,
      159,
      92,
      93,
      84
    ],
    "rsiStack": [
      44.3,
      47.0,
      48.8,
      49.6,
      49.3,
      47.4
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 114.88,
    "change": 2.92,
    "mom": 44.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.2,
    "flow": 62,
    "perf": {
      "w1": -7.27,
      "m1": 14.87,
      "m3": 38.18
    },
    "returns": [
      2.92,
      3.13,
      -7.27,
      1.44,
      14.87,
      38.18
    ],
    "volumes": [
      41,
      72,
      137,
      183,
      161,
      60
    ],
    "rsiStack": [
      50.0,
      52.1,
      53.2,
      53.7,
      53.6,
      51.6
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 164.85,
    "change": -0.58,
    "mom": 36.1,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.5,
    "flow": 70,
    "perf": {
      "w1": -11.83,
      "m1": -4.42,
      "m3": 21.53
    },
    "returns": [
      -0.58,
      -1.07,
      -11.83,
      -8.34,
      -4.42,
      21.53
    ],
    "volumes": [
      64,
      113,
      84,
      77,
      84,
      98
    ],
    "rsiStack": [
      31.9,
      41.8,
      47.5,
      50.2,
      50.6,
      46.3
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 59.13,
    "change": -1.12,
    "mom": 50.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation",
    "signal": "WATCH",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 53.9,
    "flow": 115,
    "perf": {
      "w1": 1.83,
      "m1": 3.77,
      "m3": 7.76
    },
    "returns": [
      -1.12,
      -2.39,
      1.83,
      5.68,
      3.77,
      7.76
    ],
    "volumes": [
      166,
      113,
      60,
      91,
      124,
      64
    ],
    "rsiStack": [
      49.5,
      53.5,
      53.9,
      54.0,
      54.5,
      54.3
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 178.6,
    "change": 0.82,
    "mom": 49.5,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 71.2,
    "flow": 94,
    "perf": {
      "w1": -0.5,
      "m1": 14.6,
      "m3": 24.89
    },
    "returns": [
      0.82,
      2.43,
      -0.5,
      5.25,
      14.6,
      24.89
    ],
    "volumes": [
      109,
      166,
      106,
      147,
      106,
      98
    ],
    "rsiStack": [
      68.3,
      70.1,
      71.2,
      70.7,
      68.7,
      66.0
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 45.0,
    "change": 1.1,
    "mom": 57.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.1,
    "flow": 86,
    "perf": {
      "w1": 0.22,
      "m1": -2.36,
      "m3": -4.98
    },
    "returns": [
      1.1,
      2.41,
      0.22,
      -0.27,
      -2.36,
      -4.98
    ],
    "volumes": [
      84,
      150,
      92,
      139,
      119,
      108
    ],
    "rsiStack": [
      59.1,
      49.5,
      47.1,
      47.0,
      47.5,
      47.1
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 148.15,
    "change": 0.69,
    "mom": 65.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.3,
    "flow": 69,
    "perf": {
      "w1": 1.04,
      "m1": 1.31,
      "m3": -6.13
    },
    "returns": [
      0.69,
      1.67,
      1.04,
      2.37,
      1.31,
      -6.13
    ],
    "volumes": [
      108,
      84,
      83,
      133,
      91,
      78
    ],
    "rsiStack": [
      72.4,
      63.3,
      57.3,
      53.7,
      52.9,
      60.2
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 116.1,
    "change": 0.0,
    "mom": 46.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.0,
    "flow": 98,
    "perf": {
      "w1": -0.86,
      "m1": -1.1,
      "m3": -0.34
    },
    "returns": [
      0.0,
      -0.75,
      -0.86,
      -1.09,
      -1.1,
      -0.34
    ],
    "volumes": [
      106,
      109,
      78,
      116,
      95,
      64
    ],
    "rsiStack": [
      45.5,
      48.2,
      50.0,
      50.9,
      52.2,
      57.5
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 51.73,
    "change": 0.14,
    "mom": 54.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 53.6,
    "flow": 89,
    "perf": {
      "w1": 0.86,
      "m1": -0.14,
      "m3": -0.27
    },
    "returns": [
      0.14,
      -0.02,
      0.86,
      0.35,
      -0.14,
      -0.27
    ],
    "volumes": [
      124,
      99,
      110,
      133,
      111,
      106
    ],
    "rsiStack": [
      58.3,
      54.5,
      53.6,
      52.9,
      52.9,
      57.2
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 44.5,
    "change": 0.16,
    "mom": 54.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.1,
    "flow": 67,
    "perf": {
      "w1": 1.34,
      "m1": 1.23,
      "m3": 2.44
    },
    "returns": [
      0.16,
      1.71,
      1.34,
      0.23,
      1.23,
      2.44
    ],
    "volumes": [
      73,
      113,
      91,
      99,
      135,
      64
    ],
    "rsiStack": [
      64.1,
      58.9,
      58.1,
      57.7,
      57.8,
      60.4
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 170.53,
    "change": -0.12,
    "mom": 45.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 47.4,
    "flow": 102,
    "perf": {
      "w1": -2.28,
      "m1": -2.03,
      "m3": -2.89
    },
    "returns": [
      -0.12,
      -0.13,
      -2.28,
      -1.99,
      -2.03,
      -2.89
    ],
    "volumes": [
      125,
      103,
      88,
      84,
      122,
      133
    ],
    "rsiStack": [
      41.2,
      44.6,
      47.4,
      49.2,
      51.4,
      56.6
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 50.02,
    "change": 0.6,
    "mom": 46.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 42.8,
    "flow": 95,
    "perf": {
      "w1": -3.19,
      "m1": -3.45,
      "m3": -5.73
    },
    "returns": [
      0.6,
      -0.4,
      -3.19,
      -2.68,
      -3.45,
      -5.73
    ],
    "volumes": [
      190,
      105,
      107,
      109,
      124,
      112
    ],
    "rsiStack": [
      40.1,
      40.3,
      42.8,
      45.2,
      48.7,
      56.1
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 118.7,
    "change": 0.64,
    "mom": 52.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 55.3,
    "flow": 83,
    "perf": {
      "w1": 0.03,
      "m1": 0.82,
      "m3": 1.38
    },
    "returns": [
      0.64,
      2.05,
      0.03,
      -0.98,
      0.82,
      1.38
    ],
    "volumes": [
      148,
      128,
      79,
      86,
      102,
      85
    ],
    "rsiStack": [
      60.5,
      56.0,
      55.3,
      54.9,
      55.3,
      60.7
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 84.66,
    "change": -1.01,
    "mom": 48.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.7,
    "flow": 109,
    "perf": {
      "w1": -0.38,
      "m1": 1.41,
      "m3": -4.89
    },
    "returns": [
      -1.01,
      -1.44,
      -0.38,
      0.81,
      1.41,
      -4.89
    ],
    "volumes": [
      119,
      103,
      59,
      139,
      89,
      87
    ],
    "rsiStack": [
      43.8,
      51.9,
      53.7,
      53.6,
      54.3,
      59.8
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 524.71,
    "change": 0.85,
    "mom": 48.3,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 66.6,
    "flow": 78,
    "perf": {
      "w1": -1.0,
      "m1": 18.98,
      "m3": 42.58
    },
    "returns": [
      0.85,
      5.82,
      -1.0,
      6.57,
      18.98,
      42.58
    ],
    "volumes": [
      111,
      126,
      70,
      200,
      150,
      156
    ],
    "rsiStack": [
      64.7,
      65.0,
      66.6,
      67.2,
      67.1,
      66.5
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 27.61,
    "change": -1.29,
    "mom": 30.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.2,
    "flow": 87,
    "perf": {
      "w1": -2.27,
      "m1": 0.77,
      "m3": 5.7
    },
    "returns": [
      -1.29,
      -2.09,
      -2.27,
      -0.68,
      0.77,
      5.7
    ],
    "volumes": [
      60,
      93,
      67,
      104,
      172,
      96
    ],
    "rsiStack": [
      31.4,
      40.7,
      46.2,
      49.7,
      53.2,
      58.8
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 43.89,
    "change": -1.3,
    "mom": 32.2,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.1,
    "flow": 146,
    "perf": {
      "w1": -3.56,
      "m1": -3.6,
      "m3": -4.73
    },
    "returns": [
      -1.3,
      -2.55,
      -3.56,
      -2.96,
      -3.6,
      -4.73
    ],
    "volumes": [
      55,
      44,
      72,
      75,
      97,
      135
    ],
    "rsiStack": [
      14.6,
      27.4,
      35.1,
      40.3,
      46.1,
      55.3
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 42.04,
    "change": 0.8,
    "mom": 54.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.3,
    "flow": 20,
    "perf": {
      "w1": -0.39,
      "m1": 0.99,
      "m3": -1.62
    },
    "returns": [
      0.8,
      2.56,
      -0.39,
      1.4,
      0.99,
      -1.62
    ],
    "volumes": [
      18,
      8,
      26,
      4,
      85,
      27
    ],
    "rsiStack": [
      62.8,
      58.6,
      57.3,
      56.4,
      56.1,
      59.7
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.15,
    "change": -0.79,
    "mom": 36.6,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.3,
    "flow": 38,
    "perf": {
      "w1": -3.13,
      "m1": -2.38,
      "m3": -3.22
    },
    "returns": [
      -0.79,
      -1.82,
      -3.13,
      -2.09,
      -2.38,
      -3.22
    ],
    "volumes": [
      8,
      68,
      138,
      132,
      33,
      55
    ],
    "rsiStack": [
      17.0,
      30.7,
      38.3,
      43.0,
      48.1,
      56.3
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 104.13,
    "change": -2.23,
    "mom": 37.2,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.3,
    "flow": 103,
    "perf": {
      "w1": -2.13,
      "m1": 4.61,
      "m3": 6.33
    },
    "returns": [
      -2.23,
      -2.32,
      -2.13,
      -0.12,
      4.61,
      6.33
    ],
    "volumes": [
      84,
      84,
      126,
      85,
      123,
      67
    ],
    "rsiStack": [
      28.3,
      46.2,
      53.3,
      55.8,
      57.8,
      63.5
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 80.46,
    "change": -0.73,
    "mom": 41.3,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.7,
    "flow": 66,
    "perf": {
      "w1": -1.84,
      "m1": -3.21,
      "m3": -5.34
    },
    "returns": [
      -0.73,
      -1.41,
      -1.84,
      -1.41,
      -3.21,
      -5.34
    ],
    "volumes": [
      43,
      87,
      69,
      33,
      162,
      47
    ],
    "rsiStack": [
      24.6,
      32.0,
      36.7,
      40.6,
      45.9,
      55.3
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 13.67,
    "change": 3.4,
    "mom": 57.0,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.7,
    "flow": 99,
    "perf": {
      "w1": -5.59,
      "m1": 9.54,
      "m3": -5.27
    },
    "returns": [
      3.4,
      4.91,
      -5.59,
      12.23,
      9.54,
      -5.27
    ],
    "volumes": [
      65,
      109,
      319,
      100,
      94,
      87
    ],
    "rsiStack": [
      65.3,
      62.6,
      60.7,
      58.8,
      57.0,
      57.5
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 77.21,
    "change": 1.41,
    "mom": 55.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.1,
    "flow": 85,
    "perf": {
      "w1": -0.69,
      "m1": -1.67,
      "m3": -6.33
    },
    "returns": [
      1.41,
      5.62,
      -0.69,
      -1.53,
      -1.67,
      -6.33
    ],
    "volumes": [
      110,
      81,
      117,
      79,
      102,
      81
    ],
    "rsiStack": [
      60.6,
      54.2,
      52.1,
      51.2,
      51.5,
      56.0
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 25.38,
    "change": -0.57,
    "mom": 45.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.0,
    "flow": 40,
    "perf": {
      "w1": -0.73,
      "m1": 3.82,
      "m3": 7.51
    },
    "returns": [
      -0.57,
      -1.0,
      -0.73,
      2.4,
      3.82,
      7.51
    ],
    "volumes": [
      92,
      38,
      105,
      132,
      115,
      21
    ],
    "rsiStack": [
      45.5,
      50.8,
      53.0,
      54.1,
      55.2,
      57.2
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 25.95,
    "change": 0.62,
    "mom": 58.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.9,
    "flow": 43,
    "perf": {
      "w1": 0.78,
      "m1": -2.7,
      "m3": -4.21
    },
    "returns": [
      0.62,
      2.45,
      0.78,
      -2.0,
      -2.7,
      -4.21
    ],
    "volumes": [
      92,
      89,
      65,
      73,
      134,
      117
    ],
    "rsiStack": [
      59.0,
      47.8,
      44.9,
      45.1,
      47.8,
      55.5
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 10.47,
    "change": 0.38,
    "mom": 55.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.5,
    "flow": 57,
    "perf": {
      "w1": 1.16,
      "m1": -9.74,
      "m3": -19.21
    },
    "returns": [
      0.38,
      0.77,
      1.16,
      -1.04,
      -9.74,
      -19.21
    ],
    "volumes": [
      100,
      95,
      102,
      90,
      111,
      45
    ],
    "rsiStack": [
      54.2,
      44.0,
      40.5,
      40.5,
      42.9,
      48.3
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 9.53,
    "change": 0.95,
    "mom": 55.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.0,
    "flow": 86,
    "perf": {
      "w1": 0.95,
      "m1": -4.99,
      "m3": -23.76
    },
    "returns": [
      0.95,
      -1.35,
      0.95,
      -2.26,
      -4.99,
      -23.76
    ],
    "volumes": [
      99,
      88,
      115,
      179,
      66,
      78
    ],
    "rsiStack": [
      50.3,
      44.5,
      42.0,
      41.7,
      43.6,
      48.5
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 193.39,
    "change": 5.69,
    "mom": 49.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Confirmed Accumulation",
    "signal": "STRONG BUY",
    "dist_streak": 0,
    "acc_streak": 3,
    "rsi": 57.8,
    "flow": 111,
    "perf": {
      "w1": 4.8,
      "m1": 4.23,
      "m3": 56.64
    },
    "returns": [
      5.69,
      23.75,
      4.8,
      2.71,
      4.23,
      56.64
    ],
    "volumes": [
      124,
      141,
      81,
      95,
      74,
      79
    ],
    "rsiStack": [
      62.4,
      57.9,
      57.8,
      58.0,
      57.9,
      58.1
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 190.69,
    "change": 2.08,
    "mom": 51.2,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 69.1,
    "flow": 87,
    "perf": {
      "w1": 4.44,
      "m1": 15.18,
      "m3": 135.65
    },
    "returns": [
      2.08,
      12.88,
      4.44,
      19.17,
      15.18,
      135.65
    ],
    "volumes": [
      118,
      96,
      124,
      84,
      86,
      123
    ],
    "rsiStack": [
      72.6,
      69.2,
      69.1,
      69.3,
      69.2,
      67.9
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 70.24,
    "chg": 0.19,
    "chgW": -0.99,
    "chgM": -2.7,
    "chgYTD": 13.8,
    "marketCap": "$33.7B",
    "pe": "14.3x",
    "evEbitda": "8.4x",
    "de": "0.6x",
    "drawdown": "-17.7%"
  },
  "MOS": {
    "price": 21.94,
    "chg": 0.37,
    "chgW": -3.26,
    "chgM": -9.64,
    "chgYTD": -8.92,
    "marketCap": "$7.0B",
    "pe": "156.7x",
    "evEbitda": "6.3x",
    "de": "0.5x",
    "drawdown": "-42.6%"
  },
  "CF": {
    "price": 121.69,
    "chg": -1.31,
    "chgW": -1.04,
    "chgM": -3.11,
    "chgYTD": 57.34,
    "marketCap": "$18.7B",
    "pe": "11.0x",
    "evEbitda": "6.8x",
    "de": "0.4x",
    "drawdown": "-14.3%"
  },
  "ICL": {
    "price": 6.47,
    "chg": 0.47,
    "chgW": -1.52,
    "chgM": 24.18,
    "chgYTD": 13.31,
    "marketCap": "$8.4B",
    "pe": "30.8x",
    "evEbitda": "8.8x",
    "de": "0.5x",
    "drawdown": "-12.0%"
  },
  "FMC": {
    "price": 13.01,
    "chg": 2.52,
    "chgW": -4.06,
    "chgM": -9.97,
    "chgYTD": -6.2,
    "marketCap": "$1.6B",
    "pe": "5.9x",
    "evEbitda": "17.7x",
    "de": "2.5x",
    "drawdown": "-70.9%"
  },
  "CTVA": {
    "price": 79.04,
    "chg": 0.3,
    "chgW": -5.11,
    "chgM": -0.74,
    "chgYTD": 17.92,
    "marketCap": "$52.9B",
    "pe": "42.7x",
    "evEbitda": "13.1x",
    "de": "0.1x",
    "drawdown": "-7.7%"
  },
  "ADM": {
    "price": 77.12,
    "chg": -0.55,
    "chgW": -5.27,
    "chgM": 10.12,
    "chgYTD": 34.15,
    "marketCap": "$37.2B",
    "pe": "34.4x",
    "evEbitda": "18.8x",
    "de": "0.5x",
    "drawdown": "-7.2%"
  },
  "BG": {
    "price": 120.46,
    "chg": 0.43,
    "chgW": -2.19,
    "chgM": -4.71,
    "chgYTD": 35.23,
    "marketCap": "$23.4B",
    "pe": "31.7x",
    "evEbitda": "17.6x",
    "de": "0.9x",
    "drawdown": "-10.1%"
  },
  "INGR": {
    "price": 102.15,
    "chg": 1.44,
    "chgW": -0.1,
    "chgM": -9.51,
    "chgYTD": -7.36,
    "marketCap": "$6.4B",
    "pe": "9.8x",
    "evEbitda": "6.2x",
    "de": "0.4x",
    "drawdown": "-27.3%"
  },
  "FPI": {
    "price": 10.47,
    "chg": 0.38,
    "chgW": 1.16,
    "chgM": -9.74,
    "chgYTD": 8.05,
    "marketCap": "$465M",
    "pe": "17.7x",
    "evEbitda": "25.6x",
    "de": "0.5x",
    "drawdown": "-20.8%"
  },
  "LAND": {
    "price": 9.53,
    "chg": 0.95,
    "chgW": 0.95,
    "chgM": -4.99,
    "chgYTD": 4.15,
    "marketCap": "$411M",
    "pe": "-20.0x",
    "evEbitda": "12.9x",
    "de": "0.7x",
    "drawdown": "-26.7%"
  },
  "DE": {
    "price": 531.35,
    "chg": -5.19,
    "chgW": -7.53,
    "chgM": -10.24,
    "chgYTD": 14.13,
    "marketCap": "$143.5B",
    "pe": "30.0x",
    "evEbitda": "22.2x",
    "de": "3.8x",
    "drawdown": "-21.2%"
  },
  "AGCO": {
    "price": 112.09,
    "chg": -2.34,
    "chgW": -4.47,
    "chgM": -6.23,
    "chgYTD": 7.45,
    "marketCap": "$8.1B",
    "pe": "10.8x",
    "evEbitda": "10.3x",
    "de": "0.6x",
    "drawdown": "-22.0%"
  },
  "CNH": {
    "price": 10.15,
    "chg": -2.96,
    "chgW": -4.87,
    "chgM": -3.33,
    "chgYTD": 10.09,
    "marketCap": "$12.6B",
    "pe": "31.7x",
    "evEbitda": "35.1x",
    "de": "3.3x",
    "drawdown": "-28.9%"
  },
  "XYL": {
    "price": 108.7,
    "chg": 0.44,
    "chgW": -0.68,
    "chgM": -10.67,
    "chgYTD": -20.18,
    "marketCap": "$25.8B",
    "pe": "27.1x",
    "evEbitda": "14.2x",
    "de": "0.2x",
    "drawdown": "-29.5%"
  },
  "VMI": {
    "price": 506.1,
    "chg": 0.54,
    "chgW": -1.84,
    "chgM": 2.36,
    "chgYTD": 25.8,
    "marketCap": "$9.8B",
    "pe": "28.2x",
    "evEbitda": "16.5x",
    "de": "0.5x",
    "drawdown": "-4.2%"
  },
  "LNN": {
    "price": 109.18,
    "chg": 0.65,
    "chgW": 2.55,
    "chgM": -1.22,
    "chgYTD": -7.37,
    "marketCap": "$1.1B",
    "pe": "20.0x",
    "evEbitda": "12.2x",
    "de": "0.3x",
    "drawdown": "-27.7%"
  },
  "MWA": {
    "price": 25.12,
    "chg": -1.22,
    "chgW": -2.86,
    "chgM": -10.57,
    "chgYTD": 5.46,
    "marketCap": "$3.9B",
    "pe": "19.0x",
    "evEbitda": "11.7x",
    "de": "0.4x",
    "drawdown": "-19.0%"
  },
  "WTS": {
    "price": 300.51,
    "chg": 0.45,
    "chgW": -0.29,
    "chgM": -0.95,
    "chgYTD": 8.87,
    "marketCap": "$10.0B",
    "pe": "27.5x",
    "evEbitda": "17.8x",
    "de": "0.1x",
    "drawdown": "-12.9%"
  },
  "TSN": {
    "price": 66.47,
    "chg": -0.08,
    "chgW": -0.29,
    "chgM": 1.9,
    "chgYTD": 13.39,
    "marketCap": "$23.4B",
    "pe": "52.3x",
    "evEbitda": "11.5x",
    "de": "0.4x",
    "drawdown": "-4.3%"
  },
  "PPC": {
    "price": 29.0,
    "chg": 1.22,
    "chgW": 4.13,
    "chgM": -13.97,
    "chgYTD": -25.62,
    "marketCap": "$6.9B",
    "pe": "7.8x",
    "evEbitda": "4.7x",
    "de": "0.9x",
    "drawdown": "-43.1%"
  },
  "HRL": {
    "price": 21.08,
    "chg": 1.54,
    "chgW": 5.4,
    "chgM": -3.13,
    "chgYTD": -11.05,
    "marketCap": "$11.6B",
    "pe": "23.7x",
    "evEbitda": "9.3x",
    "de": "0.0x",
    "drawdown": "-33.8%"
  },
  "CAG": {
    "price": 13.38,
    "chg": -2.76,
    "chgW": -2.12,
    "chgM": -7.15,
    "chgYTD": -22.7,
    "marketCap": "$6.4B",
    "pe": "8.0x",
    "evEbitda": "7.9x",
    "de": "0.9x",
    "drawdown": "-42.1%"
  },
  "CALM": {
    "price": 76.92,
    "chg": -1.71,
    "chgW": -1.4,
    "chgM": 0.97,
    "chgYTD": -3.33,
    "marketCap": "$3.6B",
    "pe": "5.4x",
    "evEbitda": "2.6x",
    "de": "–",
    "drawdown": "-39.1%"
  },
  "DBA": {
    "price": 27.61,
    "chg": -1.29,
    "chgW": -2.27,
    "chgM": 0.77,
    "chgYTD": 8.19,
    "marketCap": "–",
    "pe": "11.7x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-4.3%"
  },
  "MOO": {
    "price": 80.46,
    "chg": -0.73,
    "chgW": -1.84,
    "chgM": -3.21,
    "chgYTD": 10.54,
    "marketCap": "–",
    "pe": "19.3x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-7.0%"
  },
  "VEGI": {
    "price": 43.89,
    "chg": -1.3,
    "chgW": -3.56,
    "chgM": -3.6,
    "chgYTD": 13.79,
    "marketCap": "–",
    "pe": "20.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-7.2%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "36.5x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
