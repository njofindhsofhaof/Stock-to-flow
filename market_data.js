window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-08-03 23:35:08",
  "sections": {
    "Index": {
      "risk": "Risk Off",
      "leader": "SP500",
      "watch": 1
    },
    "Commodity": {
      "risk": "Risk On",
      "leader": "CL",
      "watch": 1
    },
    "Crypto": {
      "risk": "Risk Off",
      "leader": "BTC",
      "watch": 0
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "XLE",
      "watch": 5
    },
    "Stock": {
      "risk": "Neutral",
      "leader": "GM",
      "watch": 4
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
    "price": 7600.5,
    "change": 1.48,
    "mom": 61.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.7,
    "flow": 64,
    "perf": {
      "w1": 2.53,
      "m1": 0.84,
      "m3": 3.2
    },
    "returns": [
      1.48,
      3.89,
      2.53,
      2.11,
      0.84,
      3.2
    ],
    "volumes": [
      106,
      114,
      98,
      103,
      94,
      84
    ],
    "rsiStack": [
      73.2,
      64.1,
      59.7,
      57.7,
      55.6,
      49.2
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 53178.41,
    "change": 1.32,
    "mom": 58.7,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 2)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 2,
    "rsi": 60.5,
    "flow": 122,
    "perf": {
      "w1": 1.85,
      "m1": 0.23,
      "m3": 6.55
    },
    "returns": [
      1.32,
      3.07,
      1.85,
      2.58,
      0.23,
      6.55
    ],
    "volumes": [
      143,
      111,
      100,
      93,
      72,
      78
    ],
    "rsiStack": [
      68.9,
      62.8,
      60.5,
      59.5,
      57.4,
      49.9
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 6595.45,
    "change": 17.91,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.2,
    "flow": 102,
    "perf": {
      "w1": -1.42,
      "m1": -13.76,
      "m3": -4.92
    },
    "returns": [
      17.91,
      9.49,
      -1.42,
      -3.3,
      -13.76,
      -4.92
    ],
    "volumes": [
      88,
      76,
      92,
      86,
      95,
      110
    ],
    "rsiStack": [
      56.0,
      47.7,
      45.2,
      45.1,
      46.5,
      49.8
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
    "rsi": 45.3,
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
      136,
      162,
      102,
      86,
      123,
      96
    ],
    "rsiStack": [
      52.5,
      45.8,
      45.3,
      46.6,
      48.5,
      49.2
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 371.71,
    "change": 0.05,
    "mom": 54.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.9,
    "flow": 77,
    "perf": {
      "w1": -0.78,
      "m1": -2.73,
      "m3": -13.75
    },
    "returns": [
      0.05,
      0.17,
      -0.78,
      1.12,
      -2.73,
      -13.75
    ],
    "volumes": [
      105,
      181,
      59,
      149,
      57,
      45
    ],
    "rsiStack": [
      47.1,
      47.4,
      45.9,
      44.3,
      41.8,
      35.3
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 52.46,
    "change": 0.19,
    "mom": 55.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.3,
    "flow": 82,
    "perf": {
      "w1": -0.89,
      "m1": -6.51,
      "m3": -25.2
    },
    "returns": [
      0.19,
      1.33,
      -0.89,
      2.9,
      -6.51,
      -25.2
    ],
    "volumes": [
      80,
      138,
      89,
      88,
      72,
      57
    ],
    "rsiStack": [
      49.4,
      47.1,
      44.3,
      42.1,
      37.0,
      24.6
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 40.81,
    "change": 4.45,
    "mom": 65.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 47.6,
    "flow": 89,
    "perf": {
      "w1": 1.22,
      "m1": -7.0,
      "m3": -29.95
    },
    "returns": [
      4.45,
      8.77,
      1.22,
      5.53,
      -7.0,
      -29.95
    ],
    "volumes": [
      124,
      114,
      103,
      105,
      79,
      43
    ],
    "rsiStack": [
      60.3,
      52.3,
      47.6,
      45.1,
      42.4,
      35.6
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 79.92,
    "change": -5.61,
    "mom": 47.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.7,
    "flow": 1,
    "perf": {
      "w1": -3.26,
      "m1": 16.59,
      "m3": -15.94
    },
    "returns": [
      -5.61,
      -5.38,
      -3.26,
      -3.98,
      16.59,
      -15.94
    ],
    "volumes": [
      82,
      116,
      133,
      159,
      42,
      102
    ],
    "rsiStack": [
      38.0,
      45.5,
      47.7,
      47.9,
      48.4,
      51.7
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 118.3,
    "change": -5.5,
    "mom": 42.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.1,
    "flow": 74,
    "perf": {
      "w1": -1.24,
      "m1": 4.51,
      "m3": -1.22
    },
    "returns": [
      -5.5,
      -7.11,
      -1.24,
      -4.26,
      4.51,
      -1.22
    ],
    "volumes": [
      101,
      76,
      103,
      72,
      106,
      107
    ],
    "rsiStack": [
      32.1,
      43.2,
      48.1,
      49.8,
      49.6,
      45.9
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 33.29,
    "change": -1.97,
    "mom": 43.5,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.1,
    "flow": 106,
    "perf": {
      "w1": -2.92,
      "m1": -2.58,
      "m3": -11.63
    },
    "returns": [
      -1.97,
      -6.12,
      -2.92,
      -1.97,
      -2.58,
      -11.63
    ],
    "volumes": [
      89,
      110,
      94,
      73,
      45,
      46
    ],
    "rsiStack": [
      25.6,
      35.7,
      40.1,
      42.0,
      41.7,
      35.6
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 21.81,
    "change": -1.4,
    "mom": 42.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 46.4,
    "flow": 89,
    "perf": {
      "w1": -2.37,
      "m1": 2.97,
      "m3": -7.43
    },
    "returns": [
      -1.4,
      -3.58,
      -2.37,
      -2.68,
      2.97,
      -7.43
    ],
    "volumes": [
      153,
      93,
      88,
      75,
      61,
      71
    ],
    "rsiStack": [
      33.9,
      43.1,
      46.4,
      47.0,
      45.5,
      39.1
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 65.96,
    "change": -4.5,
    "mom": 43.4,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.0,
    "flow": 102,
    "perf": {
      "w1": -2.14,
      "m1": 2.2,
      "m3": -10.64
    },
    "returns": [
      -4.5,
      -6.56,
      -2.14,
      -1.05,
      2.2,
      -10.64
    ],
    "volumes": [
      94,
      96,
      88,
      67,
      102,
      87
    ],
    "rsiStack": [
      29.0,
      40.4,
      45.0,
      46.2,
      44.5,
      36.4
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 63460.0,
    "change": -0.03,
    "mom": 48.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.4,
    "flow": 111,
    "perf": {
      "w1": -0.7,
      "m1": -2.3,
      "m3": -0.54
    },
    "returns": [
      -0.03,
      1.03,
      -0.7,
      -1.0,
      -2.3,
      -0.54
    ],
    "volumes": [
      67,
      122,
      118,
      108,
      100,
      105
    ],
    "rsiStack": [
      44.8,
      45.9,
      47.4,
      47.4,
      46.5,
      43.1
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 146.5,
    "change": 0.16,
    "mom": 37.3,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 40.5,
    "flow": 122,
    "perf": {
      "w1": -12.53,
      "m1": -13.25,
      "m3": -26.0
    },
    "returns": [
      0.16,
      -8.49,
      -12.53,
      -8.68,
      -13.25,
      -26.0
    ],
    "volumes": [
      287,
      99,
      97,
      76,
      77,
      74
    ],
    "rsiStack": [
      28.3,
      36.6,
      40.5,
      42.1,
      41.5,
      34.1
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 60.35,
    "change": -3.61,
    "mom": 47.5,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.9,
    "flow": 128,
    "perf": {
      "w1": -8.1,
      "m1": -12.09,
      "m3": -50.45
    },
    "returns": [
      -3.61,
      -1.65,
      -8.1,
      -7.79,
      -12.09,
      -50.45
    ],
    "volumes": [
      112,
      58,
      58,
      68,
      94,
      91
    ],
    "rsiStack": [
      36.6,
      40.6,
      40.9,
      40.9,
      41.3,
      39.9
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 94.86,
    "change": 1.69,
    "mom": 54.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 44.6,
    "flow": 89,
    "perf": {
      "w1": -3.84,
      "m1": -5.86,
      "m3": -49.22
    },
    "returns": [
      1.69,
      1.64,
      -3.84,
      -3.03,
      -5.86,
      -49.22
    ],
    "volumes": [
      128,
      80,
      86,
      73,
      64,
      94
    ],
    "rsiStack": [
      47.9,
      46.9,
      44.6,
      42.8,
      39.9,
      31.2
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 58.79,
    "change": -1.28,
    "mom": 50.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.0,
    "flow": 84,
    "perf": {
      "w1": 0.74,
      "m1": 10.65,
      "m3": 3.14
    },
    "returns": [
      -1.28,
      0.24,
      0.74,
      1.47,
      10.65,
      3.14
    ],
    "volumes": [
      77,
      110,
      110,
      121,
      88,
      73
    ],
    "rsiStack": [
      53.1,
      58.0,
      58.0,
      56.4,
      53.9,
      49.3
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 178.04,
    "change": 1.53,
    "mom": 53.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.6,
    "flow": 100,
    "perf": {
      "w1": 2.15,
      "m1": -3.01,
      "m3": 4.71
    },
    "returns": [
      1.53,
      6.89,
      2.15,
      1.33,
      -3.01,
      4.71
    ],
    "volumes": [
      100,
      157,
      93,
      75,
      73,
      61
    ],
    "rsiStack": [
      59.6,
      51.8,
      49.6,
      49.6,
      50.4,
      49.2
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 44.36,
    "change": 0.02,
    "mom": 35.8,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Reflex Setup",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.5,
    "flow": 136,
    "perf": {
      "w1": -2.89,
      "m1": -2.08,
      "m3": -2.95
    },
    "returns": [
      0.02,
      -1.22,
      -2.89,
      -1.29,
      -2.08,
      -2.95
    ],
    "volumes": [
      117,
      130,
      92,
      75,
      93,
      91
    ],
    "rsiStack": [
      22.5,
      34.2,
      40.5,
      43.7,
      46.0,
      48.0
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 162.24,
    "change": -0.19,
    "mom": 40.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.2,
    "flow": 114,
    "perf": {
      "w1": -0.71,
      "m1": 0.17,
      "m3": 11.58
    },
    "returns": [
      -0.19,
      -2.41,
      -0.71,
      1.88,
      0.17,
      11.58
    ],
    "volumes": [
      99,
      118,
      82,
      62,
      60,
      135
    ],
    "rsiStack": [
      43.5,
      51.0,
      54.2,
      55.6,
      55.5,
      51.7
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 111.34,
    "change": 2.86,
    "mom": 62.5,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.6,
    "flow": 120,
    "perf": {
      "w1": 3.42,
      "m1": 1.03,
      "m3": -5.12
    },
    "returns": [
      2.86,
      1.67,
      3.42,
      0.49,
      1.03,
      -5.12
    ],
    "volumes": [
      77,
      103,
      97,
      180,
      56,
      111
    ],
    "rsiStack": [
      65.3,
      58.2,
      54.6,
      52.3,
      50.0,
      46.7
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 57.38,
    "change": 0.77,
    "mom": 54.1,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 65.2,
    "flow": 91,
    "perf": {
      "w1": 0.88,
      "m1": 2.21,
      "m3": 10.69
    },
    "returns": [
      0.77,
      1.24,
      0.88,
      2.39,
      2.21,
      10.69
    ],
    "volumes": [
      97,
      140,
      88,
      72,
      111,
      86
    ],
    "rsiStack": [
      67.1,
      65.5,
      65.2,
      64.5,
      61.6,
      52.3
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 45.18,
    "change": 0.24,
    "mom": 41.5,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 51.5,
    "flow": 159,
    "perf": {
      "w1": -1.27,
      "m1": 2.01,
      "m3": 0.98
    },
    "returns": [
      0.24,
      -1.7,
      -1.27,
      -0.11,
      2.01,
      0.98
    ],
    "volumes": [
      142,
      130,
      89,
      97,
      66,
      121
    ],
    "rsiStack": [
      41.8,
      49.0,
      51.5,
      52.4,
      52.6,
      50.5
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 183.16,
    "change": 1.85,
    "mom": 57.8,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.7,
    "flow": 130,
    "perf": {
      "w1": -0.02,
      "m1": -1.29,
      "m3": 3.56
    },
    "returns": [
      1.85,
      3.68,
      -0.02,
      2.83,
      -1.29,
      3.56
    ],
    "volumes": [
      110,
      145,
      95,
      126,
      86,
      81
    ],
    "rsiStack": [
      65.0,
      59.0,
      56.7,
      55.7,
      54.7,
      51.8
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 51.01,
    "change": 1.15,
    "mom": 50.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 49.7,
    "flow": 108,
    "perf": {
      "w1": -0.74,
      "m1": -1.87,
      "m3": -2.67
    },
    "returns": [
      1.15,
      -1.41,
      -0.74,
      1.96,
      -1.87,
      -2.67
    ],
    "volumes": [
      162,
      123,
      80,
      101,
      98,
      165
    ],
    "rsiStack": [
      47.8,
      49.5,
      49.7,
      49.5,
      47.7,
      39.7
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 118.21,
    "change": 1.83,
    "mom": 70.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 59.0,
    "flow": 117,
    "perf": {
      "w1": 6.65,
      "m1": 0.17,
      "m3": -1.38
    },
    "returns": [
      1.83,
      5.91,
      6.65,
      3.14,
      0.17,
      -1.38
    ],
    "volumes": [
      155,
      89,
      81,
      147,
      91,
      111
    ],
    "rsiStack": [
      77.5,
      65.2,
      59.0,
      55.5,
      51.9,
      43.9
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 84.86,
    "change": -0.22,
    "mom": 44.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.5,
    "flow": 103,
    "perf": {
      "w1": -0.59,
      "m1": 0.9,
      "m3": 0.74
    },
    "returns": [
      -0.22,
      -2.86,
      -0.59,
      0.0,
      0.9,
      0.74
    ],
    "volumes": [
      100,
      130,
      114,
      96,
      75,
      104
    ],
    "rsiStack": [
      43.9,
      49.1,
      50.5,
      50.9,
      50.9,
      50.1
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 507.68,
    "change": 0.55,
    "mom": 46.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Confirmed Accumulation",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 3,
    "rsi": 43.3,
    "flow": 94,
    "perf": {
      "w1": -1.66,
      "m1": -12.7,
      "m3": 0.16
    },
    "returns": [
      0.55,
      9.18,
      -1.66,
      -3.14,
      -12.7,
      0.16
    ],
    "volumes": [
      122,
      180,
      137,
      68,
      64,
      69
    ],
    "rsiStack": [
      46.6,
      42.6,
      43.3,
      45.1,
      47.7,
      50.6
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 27.79,
    "change": 1.02,
    "mom": 51.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.2,
    "flow": 57,
    "perf": {
      "w1": 0.62,
      "m1": 0.91,
      "m3": -0.96
    },
    "returns": [
      1.02,
      1.09,
      0.62,
      -0.82,
      0.91,
      -0.96
    ],
    "volumes": [
      48,
      72,
      125,
      65,
      66,
      105
    ],
    "rsiStack": [
      54.3,
      53.4,
      54.2,
      54.3,
      54.2,
      55.5
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 44.17,
    "change": -0.02,
    "mom": 38.2,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.4,
    "flow": 46,
    "perf": {
      "w1": -3.18,
      "m1": -1.74,
      "m3": -4.29
    },
    "returns": [
      -0.02,
      -3.09,
      -3.18,
      -1.16,
      -1.74,
      -4.29
    ],
    "volumes": [
      42,
      63,
      150,
      371,
      101,
      78
    ],
    "rsiStack": [
      28.1,
      39.2,
      44.4,
      46.5,
      46.4,
      41.1
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 44.85,
    "change": 1.39,
    "mom": 47.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.4,
    "flow": 36,
    "perf": {
      "w1": -0.87,
      "m1": -1.54,
      "m3": 7.67
    },
    "returns": [
      1.39,
      0.68,
      -0.87,
      0.7,
      -1.54,
      7.67
    ],
    "volumes": [
      10,
      16,
      17,
      61,
      23,
      51
    ],
    "rsiStack": [
      51.9,
      49.5,
      50.4,
      51.6,
      52.2,
      49.4
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.05,
    "change": -0.19,
    "mom": 41.8,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.3,
    "flow": 203,
    "perf": {
      "w1": -1.74,
      "m1": -1.77,
      "m3": -4.07
    },
    "returns": [
      -0.19,
      -1.8,
      -1.74,
      -0.05,
      -1.77,
      -4.07
    ],
    "volumes": [
      32,
      86,
      521,
      65,
      25,
      84
    ],
    "rsiStack": [
      32.2,
      41.9,
      46.3,
      47.7,
      46.9,
      40.5
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 103.37,
    "change": -1.79,
    "mom": 45.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral (Day 2)",
    "signal": "REDUCE",
    "dist_streak": 2,
    "acc_streak": 0,
    "rsi": 48.0,
    "flow": 114,
    "perf": {
      "w1": -0.27,
      "m1": 1.23,
      "m3": -2.88
    },
    "returns": [
      -1.79,
      -0.74,
      -0.27,
      -1.37,
      1.23,
      -2.88
    ],
    "volumes": [
      161,
      188,
      86,
      100,
      88,
      92
    ],
    "rsiStack": [
      39.1,
      44.8,
      48.0,
      49.6,
      50.3,
      48.4
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 80.98,
    "change": -0.91,
    "mom": 38.0,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Neutral (Day 2)",
    "signal": "REDUCE",
    "dist_streak": 2,
    "acc_streak": 0,
    "rsi": 45.7,
    "flow": 126,
    "perf": {
      "w1": -2.43,
      "m1": -0.56,
      "m3": -3.86
    },
    "returns": [
      -0.91,
      -2.89,
      -2.43,
      -1.26,
      -0.56,
      -3.86
    ],
    "volumes": [
      174,
      128,
      126,
      101,
      64,
      67
    ],
    "rsiStack": [
      25.8,
      39.1,
      45.7,
      48.2,
      47.8,
      42.3
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 14.43,
    "change": -1.7,
    "mom": 45.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.2,
    "flow": 62,
    "perf": {
      "w1": -1.7,
      "m1": 4.34,
      "m3": 18.57
    },
    "returns": [
      -1.7,
      -5.56,
      -1.7,
      3.15,
      4.34,
      18.57
    ],
    "volumes": [
      102,
      182,
      116,
      131,
      80,
      101
    ],
    "rsiStack": [
      41.5,
      49.3,
      51.2,
      51.8,
      52.0,
      50.6
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 87.68,
    "change": -1.33,
    "mom": 58.0,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 64.3,
    "flow": 66,
    "perf": {
      "w1": 0.74,
      "m1": 12.63,
      "m3": 11.41
    },
    "returns": [
      -1.33,
      -1.92,
      0.74,
      15.67,
      12.63,
      11.41
    ],
    "volumes": [
      89,
      106,
      137,
      127,
      123,
      100
    ],
    "rsiStack": [
      62.4,
      66.0,
      64.3,
      61.7,
      57.2,
      46.7
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 25.12,
    "change": 1.62,
    "mom": 49.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 52.9,
    "flow": 116,
    "perf": {
      "w1": -0.04,
      "m1": 1.62,
      "m3": 0.48
    },
    "returns": [
      1.62,
      0.64,
      -0.04,
      -1.45,
      1.62,
      0.48
    ],
    "volumes": [
      175,
      32,
      113,
      56,
      103,
      158
    ],
    "rsiStack": [
      49.8,
      51.2,
      52.9,
      53.3,
      53.7,
      56.3
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 25.03,
    "change": 0.08,
    "mom": 56.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.6,
    "flow": 105,
    "perf": {
      "w1": 1.46,
      "m1": 5.52,
      "m3": -5.65
    },
    "returns": [
      0.08,
      -0.48,
      1.46,
      1.13,
      5.52,
      -5.65
    ],
    "volumes": [
      114,
      76,
      93,
      70,
      78,
      114
    ],
    "rsiStack": [
      55.9,
      54.8,
      52.6,
      50.4,
      47.9,
      43.2
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.57,
    "change": 2.35,
    "mom": 59.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 46.4,
    "flow": 114,
    "perf": {
      "w1": -0.52,
      "m1": 0.53,
      "m3": -10.39
    },
    "returns": [
      2.35,
      0.53,
      -0.52,
      -0.62,
      0.53,
      -10.39
    ],
    "volumes": [
      132,
      106,
      80,
      64,
      80,
      95
    ],
    "rsiStack": [
      55.0,
      49.2,
      46.4,
      44.4,
      42.9,
      42.6
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.06,
    "change": -0.62,
    "mom": 30.1,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Neutral (Day 2)",
    "signal": "REDUCE",
    "dist_streak": 2,
    "acc_streak": 0,
    "rsi": 27.9,
    "flow": 127,
    "perf": {
      "w1": -5.18,
      "m1": -5.73,
      "m3": -17.67
    },
    "returns": [
      -0.62,
      -4.62,
      -5.18,
      -7.36,
      -5.73,
      -17.67
    ],
    "volumes": [
      167,
      72,
      82,
      105,
      72,
      73
    ],
    "rsiStack": [
      9.7,
      21.2,
      27.9,
      31.7,
      34.9,
      39.3
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 218.35,
    "change": 5.49,
    "mom": 52.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.8,
    "flow": 78,
    "perf": {
      "w1": 4.91,
      "m1": -17.77,
      "m3": 10.12
    },
    "returns": [
      5.49,
      23.05,
      4.91,
      2.96,
      -17.77,
      10.12
    ],
    "volumes": [
      106,
      112,
      77,
      55,
      58,
      67
    ],
    "rsiStack": [
      59.0,
      50.8,
      48.8,
      49.1,
      50.4,
      52.4
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 193.77,
    "change": 3.31,
    "mom": 50.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.9,
    "flow": 84,
    "perf": {
      "w1": 2.43,
      "m1": -22.26,
      "m3": 12.56
    },
    "returns": [
      3.31,
      18.59,
      2.43,
      -0.6,
      -22.26,
      12.56
    ],
    "volumes": [
      108,
      101,
      82,
      58,
      78,
      42
    ],
    "rsiStack": [
      54.9,
      45.6,
      43.9,
      45.1,
      47.5,
      50.5
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 65.96,
    "chg": -4.5,
    "chgW": -2.14,
    "chgM": 2.2,
    "chgYTD": 6.87,
    "marketCap": "$31.7B",
    "pe": "13.4x",
    "evEbitda": "8.3x",
    "de": "0.6x",
    "drawdown": "-22.7%"
  },
  "MOS": {
    "price": 21.81,
    "chg": -1.4,
    "chgW": -2.37,
    "chgM": 2.97,
    "chgYTD": -9.46,
    "marketCap": "$6.9B",
    "pe": "155.8x",
    "evEbitda": "6.4x",
    "de": "0.5x",
    "drawdown": "-41.0%"
  },
  "CF": {
    "price": 118.3,
    "chg": -5.5,
    "chgW": -1.24,
    "chgM": 4.51,
    "chgYTD": 52.96,
    "marketCap": "$18.2B",
    "pe": "10.7x",
    "evEbitda": "6.9x",
    "de": "0.4x",
    "drawdown": "-16.7%"
  },
  "ICL": {
    "price": 5.08,
    "chg": 0.4,
    "chgW": -1.36,
    "chgM": 0.59,
    "chgYTD": -11.03,
    "marketCap": "–",
    "pe": "24.2x",
    "evEbitda": "7.4x",
    "de": "0.5x",
    "drawdown": "-27.1%"
  },
  "FMC": {
    "price": 10.36,
    "chg": -3.27,
    "chgW": -6.83,
    "chgM": -8.96,
    "chgYTD": -25.31,
    "marketCap": "$1.3B",
    "pe": "6.4x",
    "evEbitda": "19.6x",
    "de": "2.7x",
    "drawdown": "-74.6%"
  },
  "CTVA": {
    "price": 76.04,
    "chg": -3.39,
    "chgW": -13.18,
    "chgM": -11.98,
    "chgYTD": 13.44,
    "marketCap": "$50.9B",
    "pe": "46.1x",
    "evEbitda": "12.9x",
    "de": "0.2x",
    "drawdown": "-16.4%"
  },
  "ADM": {
    "price": 78.06,
    "chg": -1.53,
    "chgW": -6.17,
    "chgM": 0.17,
    "chgYTD": 35.78,
    "marketCap": "–",
    "pe": "34.8x",
    "evEbitda": "19.1x",
    "de": "0.5x",
    "drawdown": "-11.8%"
  },
  "BG": {
    "price": 105.4,
    "chg": -0.78,
    "chgW": -10.3,
    "chgM": -3.11,
    "chgYTD": 18.32,
    "marketCap": "$20.2B",
    "pe": "22.7x",
    "evEbitda": "12.2x",
    "de": "1.0x",
    "drawdown": "-21.9%"
  },
  "INGR": {
    "price": 100.42,
    "chg": 0.97,
    "chgW": -1.02,
    "chgM": 1.14,
    "chgYTD": -8.92,
    "marketCap": "$6.3B",
    "pe": "9.7x",
    "evEbitda": "6.0x",
    "de": "0.4x",
    "drawdown": "-23.0%"
  },
  "FPI": {
    "price": 9.57,
    "chg": 2.35,
    "chgW": -0.52,
    "chgM": 0.53,
    "chgYTD": -1.24,
    "marketCap": "$420M",
    "pe": "18.8x",
    "evEbitda": "23.2x",
    "de": "0.5x",
    "drawdown": "-27.6%"
  },
  "LAND": {
    "price": 8.06,
    "chg": -0.62,
    "chgW": -5.18,
    "chgM": -5.73,
    "chgYTD": -11.91,
    "marketCap": "$348M",
    "pe": "-16.9x",
    "evEbitda": "12.1x",
    "de": "0.7x",
    "drawdown": "-38.0%"
  },
  "DE": {
    "price": 605.06,
    "chg": 2.09,
    "chgW": -3.19,
    "chgM": -4.75,
    "chgYTD": 29.96,
    "marketCap": "$163.3B",
    "pe": "34.3x",
    "evEbitda": "23.2x",
    "de": "3.8x",
    "drawdown": "-10.3%"
  },
  "AGCO": {
    "price": 103.92,
    "chg": 1.72,
    "chgW": -13.57,
    "chgM": -12.17,
    "chgYTD": -0.38,
    "marketCap": "$7.3B",
    "pe": "14.4x",
    "evEbitda": "9.7x",
    "de": "0.7x",
    "drawdown": "-27.7%"
  },
  "CNH": {
    "price": 10.8,
    "chg": 5.37,
    "chgW": -2.53,
    "chgM": -0.64,
    "chgYTD": 17.14,
    "marketCap": "$13.4B",
    "pe": "33.8x",
    "evEbitda": "34.9x",
    "de": "3.3x",
    "drawdown": "-18.9%"
  },
  "XYL": {
    "price": 119.08,
    "chg": 1.8,
    "chgW": -0.9,
    "chgM": -0.28,
    "chgYTD": -12.56,
    "marketCap": "$27.8B",
    "pe": "28.4x",
    "evEbitda": "14.8x",
    "de": "0.3x",
    "drawdown": "-22.8%"
  },
  "VMI": {
    "price": 488.59,
    "chg": 1.43,
    "chgW": -1.26,
    "chgM": -13.38,
    "chgYTD": 21.44,
    "marketCap": "$9.4B",
    "pe": "19.1x",
    "evEbitda": "14.8x",
    "de": "0.5x",
    "drawdown": "-16.6%"
  },
  "LNN": {
    "price": 113.19,
    "chg": 2.14,
    "chgW": -1.23,
    "chgM": -3.76,
    "chgYTD": -3.97,
    "marketCap": "$1.2B",
    "pe": "21.7x",
    "evEbitda": "13.2x",
    "de": "0.3x",
    "drawdown": "-23.5%"
  },
  "MWA": {
    "price": 25.79,
    "chg": 2.18,
    "chgW": 2.5,
    "chgM": 1.74,
    "chgYTD": 8.27,
    "marketCap": "–",
    "pe": "19.5x",
    "evEbitda": "11.7x",
    "de": "0.4x",
    "drawdown": "-16.8%"
  },
  "WTS": {
    "price": 350.52,
    "chg": 1.37,
    "chgW": 1.39,
    "chgM": -5.15,
    "chgYTD": 26.99,
    "marketCap": "$11.7B",
    "pe": "32.1x",
    "evEbitda": "20.5x",
    "de": "0.1x",
    "drawdown": "-11.2%"
  },
  "TSN": {
    "price": 59.61,
    "chg": 2.85,
    "chgW": -1.81,
    "chgM": 1.46,
    "chgYTD": 1.69,
    "marketCap": "–",
    "pe": "46.9x",
    "evEbitda": "10.4x",
    "de": "0.4x",
    "drawdown": "-14.2%"
  },
  "PPC": {
    "price": 27.92,
    "chg": 2.05,
    "chgW": -4.35,
    "chgM": -2.55,
    "chgYTD": -28.39,
    "marketCap": "$6.6B",
    "pe": "12.2x",
    "evEbitda": "5.2x",
    "de": "0.8x",
    "drawdown": "-44.8%"
  },
  "HRL": {
    "price": 25.23,
    "chg": 0.88,
    "chgW": -3.15,
    "chgM": 3.91,
    "chgYTD": 6.46,
    "marketCap": "–",
    "pe": "29.7x",
    "evEbitda": "10.7x",
    "de": "0.0x",
    "drawdown": "-14.0%"
  },
  "CAG": {
    "price": 14.91,
    "chg": 2.76,
    "chgW": -2.17,
    "chgM": 8.12,
    "chgYTD": -13.86,
    "marketCap": "–",
    "pe": "9.6x",
    "evEbitda": "8.2x",
    "de": "1.2x",
    "drawdown": "-26.6%"
  },
  "CALM": {
    "price": 87.06,
    "chg": -0.82,
    "chgW": -1.87,
    "chgM": 2.2,
    "chgYTD": 9.41,
    "marketCap": "$4.1B",
    "pe": "13.1x",
    "evEbitda": "6.8x",
    "de": "–",
    "drawdown": "-25.9%"
  },
  "DBA": {
    "price": 27.79,
    "chg": 1.02,
    "chgW": 0.62,
    "chgM": 0.91,
    "chgYTD": 8.89,
    "marketCap": "–",
    "pe": "11.7x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-3.6%"
  },
  "MOO": {
    "price": 80.98,
    "chg": -0.91,
    "chgW": -2.43,
    "chgM": -0.56,
    "chgYTD": 11.25,
    "marketCap": "–",
    "pe": "–",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-6.4%"
  },
  "VEGI": {
    "price": 44.17,
    "chg": -0.02,
    "chgW": -3.18,
    "chgM": -1.74,
    "chgYTD": 14.52,
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
    "pe": "56.0x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
