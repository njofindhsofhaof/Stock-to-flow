window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-07-24 23:31:37",
  "sections": {
    "Index": {
      "risk": "Neutral",
      "leader": "SP500",
      "watch": 0
    },
    "Commodity": {
      "risk": "Neutral",
      "leader": "CL",
      "watch": 1
    },
    "Crypto": {
      "risk": "Strong ON",
      "leader": "COIN",
      "watch": 0
    },
    "ETF": {
      "risk": "Risk On",
      "leader": "XLE",
      "watch": 1
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
    "price": 7411.98,
    "change": 0.05,
    "mom": 35.6,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.9,
    "flow": 58,
    "perf": {
      "w1": -0.61,
      "m1": 0.74,
      "m3": 3.83
    },
    "returns": [
      0.05,
      -1.29,
      -0.61,
      -2.16,
      0.74,
      3.83
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
      32.1,
      40.1,
      44.9,
      48.2,
      51.4,
      55.5
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 51947.25,
    "change": 0.46,
    "mom": 38.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.3,
    "flow": 84,
    "perf": {
      "w1": -0.38,
      "m1": 0.05,
      "m3": 5.71
    },
    "returns": [
      0.46,
      -0.53,
      -0.38,
      -1.31,
      0.05,
      5.71
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
      41.3,
      44.7,
      49.3,
      52.3,
      53.4,
      49.1
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
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
    "rsi": 44.6,
    "flow": 92,
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
      92,
      89,
      95,
      107,
      124,
      88
    ],
    "rsiStack": [
      53.6,
      45.6,
      44.6,
      45.7,
      48.1,
      52.7
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
      49.0,
      51.7,
      55.3
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 371.9,
    "change": 0.1,
    "mom": 55.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 44.8,
    "flow": 60,
    "perf": {
      "w1": 0.95,
      "m1": 0.66,
      "m3": -11.85
    },
    "returns": [
      0.1,
      -0.78,
      0.95,
      -1.36,
      0.66,
      -11.85
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
      48.1,
      46.8,
      44.8,
      43.6,
      44.5,
      51.8
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 52.59,
    "change": 1.02,
    "mom": 55.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.8,
    "flow": 75,
    "perf": {
      "w1": 3.56,
      "m1": 0.44,
      "m3": -20.56
    },
    "returns": [
      1.02,
      -0.92,
      3.56,
      -2.52,
      0.44,
      -20.56
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
      50.5,
      45.9,
      42.8,
      41.8,
      43.3,
      50.3
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 39.89,
    "change": -3.01,
    "mom": 53.0,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.7,
    "flow": 96,
    "perf": {
      "w1": 3.0,
      "m1": -9.18,
      "m3": -26.44
    },
    "returns": [
      -3.01,
      -0.89,
      3.0,
      -7.17,
      -9.18,
      -26.44
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
      40.8,
      39.3,
      38.7,
      39.7,
      43.1,
      52.9
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 90.47,
    "change": -1.87,
    "mom": 66.1,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 66.8,
    "flow": 131,
    "perf": {
      "w1": 9.67,
      "m1": 25.79,
      "m3": -9.47
    },
    "returns": [
      -1.87,
      6.55,
      9.67,
      26.69,
      25.79,
      -9.47
    ],
    "volumes": [
      143,
      125,
      40,
      100,
      96,
      94
    ],
    "rsiStack": [
      80.5,
      75.6,
      66.8,
      60.1,
      55.8,
      55.9
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 125.07,
    "change": -1.29,
    "mom": 56.4,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 64.5,
    "flow": 48,
    "perf": {
      "w1": 3.01,
      "m1": 18.56,
      "m3": 2.26
    },
    "returns": [
      -1.29,
      1.72,
      3.01,
      6.97,
      18.56,
      2.26
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
      65.0,
      67.6,
      64.5,
      60.6,
      57.0,
      55.0
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 34.22,
    "change": -0.67,
    "mom": 49.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.7,
    "flow": 67,
    "perf": {
      "w1": 0.06,
      "m1": 0.85,
      "m3": -8.82
    },
    "returns": [
      -0.67,
      -0.35,
      0.06,
      -1.67,
      0.85,
      -8.82
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
      42.4,
      45.7,
      45.7,
      45.6,
      46.9,
      51.0
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 22.3,
    "change": 0.09,
    "mom": 53.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.6,
    "flow": 81,
    "perf": {
      "w1": 0.77,
      "m1": 2.62,
      "m3": -3.84
    },
    "returns": [
      0.09,
      1.5,
      0.77,
      3.67,
      2.62,
      -3.84
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
      50.8,
      52.4,
      51.6,
      50.4,
      49.0,
      48.4
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 68.1,
    "change": -0.64,
    "mom": 57.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.8,
    "flow": 60,
    "perf": {
      "w1": 1.22,
      "m1": 11.71,
      "m3": -6.6
    },
    "returns": [
      -0.64,
      1.89,
      1.22,
      4.08,
      11.71,
      -6.6
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
      60.8,
      60.1,
      56.8,
      53.6,
      50.9,
      49.6
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 64113.32,
    "change": -1.43,
    "mom": 48.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.7,
    "flow": 100,
    "perf": {
      "w1": -0.89,
      "m1": 1.62,
      "m3": -17.04
    },
    "returns": [
      -1.43,
      -3.6,
      -0.89,
      -1.3,
      1.62,
      -17.04
    ],
    "volumes": [
      96,
      113,
      56,
      99,
      105,
      65
    ],
    "rsiStack": [
      38.6,
      47.9,
      49.7,
      48.8,
      47.0,
      43.3
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 158.29,
    "change": -1.78,
    "mom": 50.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.8,
    "flow": 73,
    "perf": {
      "w1": 0.74,
      "m1": 11.07,
      "m3": -18.45
    },
    "returns": [
      -1.78,
      -9.99,
      0.74,
      -0.49,
      11.07,
      -18.45
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
      41.4,
      45.9,
      46.8,
      46.7,
      46.3,
      45.0
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 62.36,
    "change": 0.29,
    "mom": 52.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.2,
    "flow": 52,
    "perf": {
      "w1": 3.14,
      "m1": -9.37,
      "m3": -33.91
    },
    "returns": [
      0.29,
      -12.27,
      3.14,
      -5.72,
      -9.37,
      -33.91
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
      41.7,
      42.3,
      41.2,
      41.0,
      42.0,
      43.4
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 91.67,
    "change": -2.09,
    "mom": 50.4,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "NEUTRAL",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.1,
    "flow": 59,
    "perf": {
      "w1": -3.35,
      "m1": 7.43,
      "m3": -44.68
    },
    "returns": [
      -2.09,
      -10.08,
      -3.35,
      -3.14,
      7.43,
      -44.68
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
      33.4,
      38.9,
      39.1,
      39.3,
      40.6,
      43.1
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 59.62,
    "change": 0.4,
    "mom": 65.5,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 69.4,
    "flow": 114,
    "perf": {
      "w1": 3.36,
      "m1": 10.22,
      "m3": 3.31
    },
    "returns": [
      0.4,
      1.91,
      3.36,
      8.24,
      10.22,
      3.31
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
      90.4,
      79.0,
      69.4,
      63.1,
      58.8,
      58.4
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 175.88,
    "change": -1.44,
    "mom": 38.8,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.3,
    "flow": 83,
    "perf": {
      "w1": 0.17,
      "m1": -4.71,
      "m3": 11.42
    },
    "returns": [
      -1.44,
      -2.71,
      0.17,
      -5.33,
      -4.71,
      11.42
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
      33.8,
      39.6,
      43.3,
      46.4,
      49.9,
      54.8
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 46.29,
    "change": 0.22,
    "mom": 64.0,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.0,
    "flow": 88,
    "perf": {
      "w1": 2.48,
      "m1": 0.96,
      "m3": 0.09
    },
    "returns": [
      0.22,
      3.05,
      2.48,
      1.94,
      0.96,
      0.09
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
      74.1,
      64.5,
      60.0,
      57.4,
      56.0,
      59.1
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 162.57,
    "change": 0.7,
    "mom": 53.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.9,
    "flow": 74,
    "perf": {
      "w1": 0.92,
      "m1": 4.46,
      "m3": 13.02
    },
    "returns": [
      0.7,
      1.45,
      0.92,
      1.08,
      4.46,
      13.02
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
      65.4,
      60.6,
      59.9,
      59.4,
      57.0,
      48.6
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 106.3,
    "change": 0.87,
    "mom": 37.7,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 37.1,
    "flow": 88,
    "perf": {
      "w1": -3.93,
      "m1": 0.68,
      "m3": -8.16
    },
    "returns": [
      0.87,
      -3.39,
      -3.93,
      -4.78,
      0.68,
      -8.16
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
      26.2,
      33.2,
      37.1,
      39.0,
      40.3,
      39.2
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 56.31,
    "change": 0.86,
    "mom": 50.2,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.4,
    "flow": 89,
    "perf": {
      "w1": 0.09,
      "m1": 5.35,
      "m3": 8.6
    },
    "returns": [
      0.86,
      0.36,
      0.09,
      1.08,
      5.35,
      8.6
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
      61.2,
      62.4,
      63.4,
      63.1,
      60.8,
      54.0
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 45.95,
    "change": 2.22,
    "mom": 66.8,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.7,
    "flow": 98,
    "perf": {
      "w1": 1.17,
      "m1": 3.05,
      "m3": 4.65
    },
    "returns": [
      2.22,
      1.66,
      1.17,
      3.37,
      3.05,
      4.65
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
      77.0,
      67.9,
      62.7,
      59.9,
      58.0,
      57.1
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 182.66,
    "change": 0.4,
    "mom": 61.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 57.7,
    "flow": 83,
    "perf": {
      "w1": 1.81,
      "m1": -0.79,
      "m3": 6.83
    },
    "returns": [
      0.4,
      2.24,
      1.81,
      0.41,
      -0.79,
      6.83
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
      72.9,
      61.0,
      57.7,
      56.6,
      56.1,
      56.8
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 51.26,
    "change": 1.93,
    "mom": 60.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.1,
    "flow": 111,
    "perf": {
      "w1": 1.44,
      "m1": -1.12,
      "m3": -0.27
    },
    "returns": [
      1.93,
      2.32,
      1.44,
      0.73,
      -1.12,
      -0.27
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
      63.9,
      56.4,
      53.1,
      51.7,
      51.0,
      50.3
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 109.41,
    "change": 0.6,
    "mom": 30.2,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 33.0,
    "flow": 94,
    "perf": {
      "w1": -5.22,
      "m1": -3.48,
      "m3": -6.5
    },
    "returns": [
      0.6,
      -4.75,
      -5.22,
      -6.68,
      -3.48,
      -6.5
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
      18.9,
      26.7,
      33.0,
      37.2,
      41.1,
      45.0
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 84.13,
    "change": 1.11,
    "mom": 47.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.8,
    "flow": 90,
    "perf": {
      "w1": -1.24,
      "m1": 0.23,
      "m3": 1.26
    },
    "returns": [
      1.11,
      0.08,
      -1.24,
      0.01,
      0.23,
      1.26
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
      49.3,
      49.5,
      49.8,
      50.1,
      50.6,
      52.4
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 527.01,
    "change": -4.4,
    "mom": 38.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.8,
    "flow": 108,
    "perf": {
      "w1": 1.0,
      "m1": -15.71,
      "m3": 20.13
    },
    "returns": [
      -4.4,
      -4.65,
      1.0,
      -9.35,
      -15.71,
      20.13
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
      33.7,
      39.0,
      42.8,
      45.8,
      49.1,
      53.7
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 28.24,
    "change": 0.0,
    "mom": 57.9,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 66.8,
    "flow": 58,
    "perf": {
      "w1": 1.44,
      "m1": 4.9,
      "m3": 1.0
    },
    "returns": [
      0.0,
      0.32,
      1.44,
      1.69,
      4.9,
      1.0
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
      75.5,
      71.2,
      66.8,
      63.1,
      60.2,
      59.7
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 46.1,
    "change": 1.21,
    "mom": 66.6,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 67.7,
    "flow": 44,
    "perf": {
      "w1": 2.6,
      "m1": 4.89,
      "m3": 2.74
    },
    "returns": [
      1.21,
      2.86,
      2.6,
      4.75,
      4.89,
      2.74
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
      81.9,
      74.3,
      67.7,
      62.8,
      59.0,
      59.2
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 45.18,
    "change": 0.85,
    "mom": 46.9,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.9,
    "flow": 1295,
    "perf": {
      "w1": 0.14,
      "m1": -0.46,
      "m3": 9.91
    },
    "returns": [
      0.85,
      0.06,
      0.14,
      -0.48,
      -0.46,
      9.91
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
      53.0,
      52.1,
      52.9,
      53.9,
      55.2,
      57.8
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.59,
    "change": 0.68,
    "mom": 59.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.0,
    "flow": 41,
    "perf": {
      "w1": 0.88,
      "m1": 2.74,
      "m3": 0.33
    },
    "returns": [
      0.68,
      1.12,
      0.88,
      1.75,
      2.74,
      0.33
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
      65.1,
      61.9,
      59.0,
      56.5,
      54.5,
      55.1
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 103.25,
    "change": 0.04,
    "mom": 41.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.2,
    "flow": 92,
    "perf": {
      "w1": -2.12,
      "m1": 0.09,
      "m3": 6.14
    },
    "returns": [
      0.04,
      -1.15,
      -2.12,
      -2.6,
      0.09,
      6.14
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
      34.0,
      44.0,
      48.2,
      50.0,
      50.9,
      49.8
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 83.15,
    "change": 0.73,
    "mom": 58.2,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 65.7,
    "flow": 49,
    "perf": {
      "w1": 0.75,
      "m1": 4.87,
      "m3": 1.34
    },
    "returns": [
      0.73,
      1.22,
      0.75,
      2.69,
      4.87,
      1.34
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
      70.0,
      69.1,
      65.7,
      61.8,
      58.8,
      61.2
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 14.37,
    "change": 1.55,
    "mom": 52.7,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 54.6,
    "flow": 145,
    "perf": {
      "w1": 0.98,
      "m1": 1.84,
      "m3": 15.89
    },
    "returns": [
      1.55,
      0.7,
      0.98,
      2.64,
      1.84,
      15.89
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
      61.8,
      57.8,
      54.6,
      53.6,
      54.4,
      59.4
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 82.64,
    "change": 2.44,
    "mom": 65.8,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 61.5,
    "flow": 76,
    "perf": {
      "w1": 8.64,
      "m1": 5.23,
      "m3": 4.67
    },
    "returns": [
      2.44,
      3.92,
      8.64,
      6.15,
      5.23,
      4.67
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
      73.5,
      66.9,
      61.5,
      58.5,
      59.0,
      68.8
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 25.75,
    "change": 0.08,
    "mom": 56.0,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 66.6,
    "flow": 18,
    "perf": {
      "w1": 1.34,
      "m1": 8.15,
      "m3": 2.3
    },
    "returns": [
      0.08,
      0.9,
      1.34,
      3.71,
      8.15,
      2.3
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
      68.2,
      69.5,
      66.6,
      63.1,
      60.0,
      59.5
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 24.54,
    "change": -1.88,
    "mom": 49.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.5,
    "flow": 54,
    "perf": {
      "w1": -2.04,
      "m1": 3.68,
      "m3": -7.33
    },
    "returns": [
      -1.88,
      -1.6,
      -2.04,
      1.53,
      3.68,
      -7.33
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
      40.9,
      46.4,
      46.5,
      46.1,
      47.2,
      54.7
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.6,
    "change": 0.42,
    "mom": 54.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.0,
    "flow": 48,
    "perf": {
      "w1": -1.13,
      "m1": 0.0,
      "m3": -16.81
    },
    "returns": [
      0.42,
      -1.13,
      -1.13,
      0.0,
      0.0,
      -16.81
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
      44.0,
      45.2,
      44.0,
      42.7,
      41.9,
      42.6
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.52,
    "change": -0.53,
    "mom": 46.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.2,
    "flow": 57,
    "perf": {
      "w1": -2.63,
      "m1": 0.29,
      "m3": -15.26
    },
    "returns": [
      -0.53,
      -3.45,
      -2.63,
      -0.41,
      0.29,
      -15.26
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
      34.0,
      40.2,
      41.2,
      41.1,
      42.4,
      48.9
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 213.15,
    "change": -9.87,
    "mom": 41.5,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.7,
    "flow": 72,
    "perf": {
      "w1": 5.17,
      "m1": -20.48,
      "m3": 28.47
    },
    "returns": [
      -9.87,
      -4.79,
      5.17,
      -17.32,
      -20.48,
      28.47
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
      37.3,
      40.6,
      43.7,
      46.4,
      49.1,
      51.9
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 194.23,
    "change": -7.21,
    "mom": 42.2,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.1,
    "flow": 72,
    "perf": {
      "w1": 2.94,
      "m1": -30.94,
      "m3": 26.76
    },
    "returns": [
      -7.21,
      -6.6,
      2.94,
      -17.63,
      -30.94,
      26.76
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
      31.6,
      34.8,
      39.1,
      42.8,
      46.7,
      50.6
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 68.1,
    "chg": -0.64,
    "chgW": 1.22,
    "chgM": 11.71,
    "chgYTD": 10.34,
    "marketCap": "$32.7B",
    "pe": "13.9x",
    "evEbitda": "8.2x",
    "de": "0.6x",
    "drawdown": "-20.2%"
  },
  "MOS": {
    "price": 22.3,
    "chg": 0.09,
    "chgW": 0.77,
    "chgM": 2.62,
    "chgYTD": -7.43,
    "marketCap": "$7.1B",
    "pe": "159.3x",
    "evEbitda": "6.4x",
    "de": "0.5x",
    "drawdown": "-40.3%"
  },
  "CF": {
    "price": 125.07,
    "chg": -1.29,
    "chgW": 3.01,
    "chgM": 18.56,
    "chgYTD": 61.71,
    "marketCap": "$19.2B",
    "pe": "11.3x",
    "evEbitda": "6.9x",
    "de": "0.4x",
    "drawdown": "-11.9%"
  },
  "ICL": {
    "price": 5.28,
    "chg": -0.38,
    "chgW": 4.55,
    "chgM": 6.02,
    "chgYTD": -7.53,
    "marketCap": "$6.8B",
    "pe": "25.1x",
    "evEbitda": "7.6x",
    "de": "0.5x",
    "drawdown": "-24.2%"
  },
  "FMC": {
    "price": 11.3,
    "chg": -3.34,
    "chgW": 0.8,
    "chgM": -0.18,
    "chgYTD": -18.53,
    "marketCap": "$1.4B",
    "pe": "5.6x",
    "evEbitda": "17.2x",
    "de": "2.5x",
    "drawdown": "-73.9%"
  },
  "CTVA": {
    "price": 89.25,
    "chg": 0.53,
    "chgW": 2.23,
    "chgM": 9.35,
    "chgYTD": 33.15,
    "marketCap": "$59.7B",
    "pe": "48.2x",
    "evEbitda": "14.8x",
    "de": "0.1x",
    "drawdown": "-0.2%"
  },
  "ADM": {
    "price": 85.92,
    "chg": -0.5,
    "chgW": 0.02,
    "chgM": 12.26,
    "chgYTD": 49.45,
    "marketCap": "$41.4B",
    "pe": "38.4x",
    "evEbitda": "20.5x",
    "de": "0.5x",
    "drawdown": "-2.9%"
  },
  "BG": {
    "price": 121.53,
    "chg": -0.63,
    "chgW": 2.0,
    "chgM": 8.95,
    "chgYTD": 36.43,
    "marketCap": "$23.6B",
    "pe": "32.0x",
    "evEbitda": "17.8x",
    "de": "0.9x",
    "drawdown": "-9.9%"
  },
  "INGR": {
    "price": 101.12,
    "chg": 0.87,
    "chgW": -1.4,
    "chgM": 4.44,
    "chgYTD": -8.29,
    "marketCap": "$6.4B",
    "pe": "9.7x",
    "evEbitda": "6.1x",
    "de": "0.4x",
    "drawdown": "-25.0%"
  },
  "FPI": {
    "price": 9.6,
    "chg": 0.42,
    "chgW": -1.13,
    "chgM": 0.0,
    "chgYTD": -0.93,
    "marketCap": "$426M",
    "pe": "16.3x",
    "evEbitda": "24.1x",
    "de": "0.5x",
    "drawdown": "-27.4%"
  },
  "LAND": {
    "price": 8.52,
    "chg": -0.53,
    "chgW": -2.63,
    "chgM": 0.29,
    "chgYTD": -6.89,
    "marketCap": "$368M",
    "pe": "-17.9x",
    "evEbitda": "12.4x",
    "de": "0.7x",
    "drawdown": "-34.5%"
  },
  "DE": {
    "price": 628.16,
    "chg": 2.97,
    "chgW": 5.18,
    "chgM": -0.41,
    "chgYTD": 34.92,
    "marketCap": "$169.6B",
    "pe": "35.6x",
    "evEbitda": "24.3x",
    "de": "3.8x",
    "drawdown": "-6.8%"
  },
  "AGCO": {
    "price": 121.21,
    "chg": 3.36,
    "chgW": 5.1,
    "chgM": 1.98,
    "chgYTD": 16.19,
    "marketCap": "$8.8B",
    "pe": "11.7x",
    "evEbitda": "10.7x",
    "de": "0.6x",
    "drawdown": "-15.7%"
  },
  "CNH": {
    "price": 11.15,
    "chg": 4.99,
    "chgW": 4.79,
    "chgM": 2.01,
    "chgYTD": 20.93,
    "marketCap": "$13.8B",
    "pe": "34.8x",
    "evEbitda": "35.9x",
    "de": "3.3x",
    "drawdown": "-16.4%"
  },
  "XYL": {
    "price": 119.75,
    "chg": 2.46,
    "chgW": -2.47,
    "chgM": 2.35,
    "chgYTD": -12.06,
    "marketCap": "$28.5B",
    "pe": "29.8x",
    "evEbitda": "15.3x",
    "de": "0.2x",
    "drawdown": "-22.4%"
  },
  "VMI": {
    "price": 486.16,
    "chg": -0.5,
    "chgW": -8.56,
    "chgM": -16.69,
    "chgYTD": 20.84,
    "marketCap": "$9.4B",
    "pe": "27.0x",
    "evEbitda": "15.1x",
    "de": "0.5x",
    "drawdown": "-17.0%"
  },
  "LNN": {
    "price": 113.96,
    "chg": 0.47,
    "chgW": -1.37,
    "chgM": -8.74,
    "chgYTD": -3.32,
    "marketCap": "$1.2B",
    "pe": "21.9x",
    "evEbitda": "13.5x",
    "de": "0.3x",
    "drawdown": "-23.0%"
  },
  "MWA": {
    "price": 25.03,
    "chg": 0.6,
    "chgW": -1.69,
    "chgM": -7.23,
    "chgYTD": 5.08,
    "marketCap": "$3.9B",
    "pe": "19.0x",
    "evEbitda": "11.6x",
    "de": "0.4x",
    "drawdown": "-19.3%"
  },
  "WTS": {
    "price": 344.45,
    "chg": 0.23,
    "chgW": -0.57,
    "chgM": -8.17,
    "chgYTD": 24.79,
    "marketCap": "$11.5B",
    "pe": "31.5x",
    "evEbitda": "20.4x",
    "de": "0.1x",
    "drawdown": "-12.7%"
  },
  "TSN": {
    "price": 57.45,
    "chg": 1.23,
    "chgW": -0.55,
    "chgM": -0.61,
    "chgYTD": -2.0,
    "marketCap": "$20.2B",
    "pe": "45.2x",
    "evEbitda": "10.3x",
    "de": "0.4x",
    "drawdown": "-17.3%"
  },
  "PPC": {
    "price": 28.68,
    "chg": 2.72,
    "chgW": -1.48,
    "chgM": 7.13,
    "chgYTD": -26.44,
    "marketCap": "$6.8B",
    "pe": "7.7x",
    "evEbitda": "4.7x",
    "de": "0.9x",
    "drawdown": "-43.3%"
  },
  "HRL": {
    "price": 25.31,
    "chg": 1.16,
    "chgW": -0.32,
    "chgM": -2.73,
    "chgYTD": 6.79,
    "marketCap": "$13.9B",
    "pe": "29.8x",
    "evEbitda": "10.7x",
    "de": "0.0x",
    "drawdown": "-13.8%"
  },
  "CAG": {
    "price": 14.77,
    "chg": 2.78,
    "chgW": 3.43,
    "chgM": 7.18,
    "chgYTD": -14.67,
    "marketCap": "$7.1B",
    "pe": "9.4x",
    "evEbitda": "8.1x",
    "de": "1.2x",
    "drawdown": "-27.3%"
  },
  "CALM": {
    "price": 90.32,
    "chg": 2.47,
    "chgW": 2.0,
    "chgM": 15.44,
    "chgYTD": 13.51,
    "marketCap": "$4.3B",
    "pe": "6.3x",
    "evEbitda": "6.9x",
    "de": "–",
    "drawdown": "-23.1%"
  },
  "DBA": {
    "price": 28.24,
    "chg": 0.0,
    "chgW": 1.44,
    "chgM": 4.9,
    "chgYTD": 10.66,
    "marketCap": "–",
    "pe": "11.9x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-2.1%"
  },
  "MOO": {
    "price": 83.15,
    "chg": 0.73,
    "chgW": 0.75,
    "chgM": 4.87,
    "chgYTD": 14.23,
    "marketCap": "–",
    "pe": "18.8x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-3.9%"
  },
  "VEGI": {
    "price": 46.1,
    "chg": 1.21,
    "chgW": 2.6,
    "chgM": 4.89,
    "chgYTD": 19.52,
    "marketCap": "–",
    "pe": "21.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-2.5%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "51.2x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
