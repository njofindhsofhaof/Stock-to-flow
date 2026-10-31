window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-10-31 01:43:52",
  "sections": {
    "Index": {
      "risk": "Neutral",
      "leader": "DJI",
      "watch": 1
    },
    "Commodity": {
      "risk": "Risk Off",
      "leader": "CL",
      "watch": 0
    },
    "Crypto": {
      "risk": "Strong OFF",
      "leader": "BTC",
      "watch": 0
    },
    "ETF": {
      "risk": "Risk On",
      "leader": "XLE",
      "watch": 7
    },
    "Stock": {
      "risk": "Risk On",
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
    "price": 7580.07,
    "change": -1.82,
    "mom": 36.4,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.1,
    "flow": 81,
    "perf": {
      "w1": -0.57,
      "m1": -1.85,
      "m3": -1.68
    },
    "returns": [
      -1.82,
      -1.85,
      -0.57,
      -1.04,
      -1.85,
      -1.68
    ],
    "volumes": [
      109,
      98,
      97,
      95,
      106,
      102
    ],
    "rsiStack": [
      27.8,
      35.5,
      40.1,
      43.3,
      46.7,
      51.0
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 51770.31,
    "change": -1.09,
    "mom": 38.4,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "WATCH",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 45.2,
    "flow": 155,
    "perf": {
      "w1": -0.85,
      "m1": 1.16,
      "m3": -3.92
    },
    "returns": [
      -1.09,
      -1.16,
      -0.85,
      -0.45,
      1.16,
      -3.92
    ],
    "volumes": [
      131,
      95,
      82,
      85,
      113,
      124
    ],
    "rsiStack": [
      28.8,
      41.1,
      45.2,
      46.5,
      47.4,
      47.1
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 5730.74,
    "change": -3.48,
    "mom": 52.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.7,
    "flow": 81,
    "perf": {
      "w1": 3.25,
      "m1": -16.19,
      "m3": -13.11
    },
    "returns": [
      -3.48,
      1.64,
      3.25,
      1.11,
      -16.19,
      -13.11
    ],
    "volumes": [
      105,
      70,
      88,
      78,
      104,
      100
    ],
    "rsiStack": [
      45.8,
      42.2,
      40.7,
      41.3,
      44.3,
      52.6
    ]
  },
  {
    "symbol": "NI225",
    "dataSymbol": "^N225",
    "section": "Index",
    "name": "Japan Index",
    "category": "Broad",
    "price": 63290.11,
    "change": -2.12,
    "mom": 46.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral (Day 2)",
    "signal": "REDUCE",
    "dist_streak": 2,
    "acc_streak": 0,
    "rsi": 41.8,
    "flow": 103,
    "perf": {
      "w1": 0.95,
      "m1": -8.22,
      "m3": -1.67
    },
    "returns": [
      -2.12,
      0.03,
      0.95,
      -3.11,
      -8.22,
      -1.67
    ],
    "volumes": [
      163,
      96,
      124,
      89,
      102,
      116
    ],
    "rsiStack": [
      40.6,
      40.3,
      41.8,
      43.5,
      45.6,
      48.7
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 355.78,
    "change": -3.47,
    "mom": 35.9,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 30.3,
    "flow": 194,
    "perf": {
      "w1": -2.95,
      "m1": -6.41,
      "m3": -8.7
    },
    "returns": [
      -3.47,
      -4.43,
      -2.95,
      -6.87,
      -6.41,
      -8.7
    ],
    "volumes": [
      114,
      69,
      122,
      90,
      117,
      106
    ],
    "rsiStack": [
      18.2,
      25.3,
      30.3,
      34.3,
      38.2,
      41.1
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 44.6,
    "change": -5.67,
    "mom": 32.0,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 23.9,
    "flow": 224,
    "perf": {
      "w1": -8.46,
      "m1": -18.52,
      "m3": -20.14
    },
    "returns": [
      -5.67,
      -9.28,
      -8.46,
      -13.41,
      -18.52,
      -20.14
    ],
    "volumes": [
      143,
      68,
      111,
      65,
      93,
      113
    ],
    "rsiStack": [
      9.8,
      17.5,
      23.9,
      29.3,
      35.6,
      45.0
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 33.73,
    "change": -5.57,
    "mom": 46.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 33.7,
    "flow": 109,
    "perf": {
      "w1": -1.11,
      "m1": -15.23,
      "m3": -21.92
    },
    "returns": [
      -5.57,
      -5.94,
      -1.11,
      -4.8,
      -15.23,
      -21.92
    ],
    "volumes": [
      97,
      132,
      75,
      72,
      121,
      68
    ],
    "rsiStack": [
      30.3,
      32.5,
      33.7,
      35.4,
      37.4,
      37.8
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 102.95,
    "change": 0.93,
    "mom": 48.1,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.0,
    "flow": 94,
    "perf": {
      "w1": -0.31,
      "m1": 13.0,
      "m3": 33.2
    },
    "returns": [
      0.93,
      3.05,
      -0.31,
      1.52,
      13.0,
      33.2
    ],
    "volumes": [
      109,
      101,
      119,
      117,
      38,
      107
    ],
    "rsiStack": [
      62.0,
      61.2,
      60.0,
      58.9,
      56.4,
      49.2
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 123.3,
    "change": 4.41,
    "mom": 57.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.7,
    "flow": 74,
    "perf": {
      "w1": 2.17,
      "m1": 7.21,
      "m3": 5.63
    },
    "returns": [
      4.41,
      2.29,
      2.17,
      2.03,
      7.21,
      5.63
    ],
    "volumes": [
      67,
      59,
      83,
      106,
      66,
      73
    ],
    "rsiStack": [
      70.8,
      63.6,
      57.7,
      54.3,
      51.8,
      48.4
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 31.58,
    "change": 1.74,
    "mom": 52.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.0,
    "flow": 85,
    "perf": {
      "w1": 1.12,
      "m1": -3.6,
      "m3": -9.56
    },
    "returns": [
      1.74,
      -0.41,
      1.12,
      -2.41,
      -3.6,
      -9.56
    ],
    "volumes": [
      93,
      67,
      82,
      104,
      84,
      76
    ],
    "rsiStack": [
      50.8,
      43.1,
      40.0,
      40.0,
      41.6,
      44.4
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 18.39,
    "change": 0.88,
    "mom": 55.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.1,
    "flow": 83,
    "perf": {
      "w1": 3.08,
      "m1": -12.72,
      "m3": -21.61
    },
    "returns": [
      0.88,
      -2.13,
      3.08,
      -2.28,
      -12.72,
      -21.61
    ],
    "volumes": [
      65,
      114,
      160,
      129,
      102,
      93
    ],
    "rsiStack": [
      52.9,
      42.6,
      38.1,
      37.7,
      39.2,
      41.0
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 69.42,
    "change": 1.37,
    "mom": 50.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.6,
    "flow": 60,
    "perf": {
      "w1": -0.46,
      "m1": -0.91,
      "m3": 3.98
    },
    "returns": [
      1.37,
      0.07,
      -0.46,
      -2.58,
      -0.91,
      3.98
    ],
    "volumes": [
      54,
      62,
      68,
      156,
      103,
      66
    ],
    "rsiStack": [
      54.3,
      48.9,
      46.6,
      46.4,
      46.8,
      45.3
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 77291.46,
    "change": -0.62,
    "mom": 33.9,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 34.6,
    "flow": 141,
    "perf": {
      "w1": -3.41,
      "m1": -6.78,
      "m3": -1.6
    },
    "returns": [
      -0.62,
      -4.35,
      -3.41,
      -6.81,
      -6.78,
      -1.6
    ],
    "volumes": [
      163,
      90,
      46,
      88,
      100,
      39
    ],
    "rsiStack": [
      20.4,
      28.2,
      34.6,
      39.9,
      45.4,
      51.8
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 143.54,
    "change": -10.62,
    "mom": 31.0,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 31.9,
    "flow": 254,
    "perf": {
      "w1": -12.72,
      "m1": -21.56,
      "m3": -1.29
    },
    "returns": [
      -10.62,
      -10.89,
      -12.72,
      -17.11,
      -21.56,
      -1.29
    ],
    "volumes": [
      108,
      75,
      84,
      86,
      110,
      133
    ],
    "rsiStack": [
      14.9,
      24.7,
      31.9,
      37.1,
      41.9,
      47.0
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 72.54,
    "change": -9.31,
    "mom": 32.5,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 37.0,
    "flow": 163,
    "perf": {
      "w1": -15.56,
      "m1": -10.72,
      "m3": 14.63
    },
    "returns": [
      -9.31,
      -11.08,
      -15.56,
      -11.77,
      -10.72,
      14.63
    ],
    "volumes": [
      70,
      73,
      87,
      133,
      105,
      103
    ],
    "rsiStack": [
      20.1,
      30.8,
      37.0,
      41.2,
      46.2,
      55.9
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 130.51,
    "change": -7.84,
    "mom": 36.9,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.1,
    "flow": 180,
    "perf": {
      "w1": -10.62,
      "m1": -18.44,
      "m3": 34.75
    },
    "returns": [
      -7.84,
      -7.7,
      -10.62,
      -4.62,
      -18.44,
      34.75
    ],
    "volumes": [
      72,
      57,
      96,
      118,
      153,
      121
    ],
    "rsiStack": [
      26.5,
      34.6,
      40.1,
      44.3,
      48.7,
      56.7
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 70.02,
    "change": 1.91,
    "mom": 52.8,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 67.6,
    "flow": 100,
    "perf": {
      "w1": 1.0,
      "m1": 11.46,
      "m3": 20.39
    },
    "returns": [
      1.91,
      2.65,
      1.0,
      2.61,
      11.46,
      20.39
    ],
    "volumes": [
      80,
      99,
      120,
      83,
      115,
      84
    ],
    "rsiStack": [
      72.8,
      69.7,
      67.6,
      65.7,
      62.8,
      56.0
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 179.51,
    "change": -4.89,
    "mom": 39.6,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.8,
    "flow": 209,
    "perf": {
      "w1": -2.03,
      "m1": -10.16,
      "m3": -3.14
    },
    "returns": [
      -4.89,
      -5.27,
      -2.03,
      -2.16,
      -10.16,
      -3.14
    ],
    "volumes": [
      87,
      87,
      84,
      114,
      186,
      122
    ],
    "rsiStack": [
      27.2,
      32.9,
      36.8,
      40.3,
      44.6,
      51.2
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 43.43,
    "change": 0.67,
    "mom": 60.9,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 65.1,
    "flow": 107,
    "perf": {
      "w1": 2.04,
      "m1": 9.04,
      "m3": 0.12
    },
    "returns": [
      0.67,
      1.35,
      2.04,
      2.89,
      9.04,
      0.12
    ],
    "volumes": [
      83,
      50,
      52,
      112,
      89,
      215
    ],
    "rsiStack": [
      75.0,
      70.1,
      65.1,
      60.3,
      55.0,
      48.0
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 184.87,
    "change": 0.45,
    "mom": 62.5,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 72.5,
    "flow": 200,
    "perf": {
      "w1": 3.12,
      "m1": 11.25,
      "m3": 12.42
    },
    "returns": [
      0.45,
      3.18,
      3.12,
      4.62,
      11.25,
      12.42
    ],
    "volumes": [
      172,
      90,
      89,
      100,
      101,
      88
    ],
    "rsiStack": [
      83.9,
      77.1,
      72.5,
      69.0,
      65.4,
      60.6
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 99.9,
    "change": -1.29,
    "mom": 25.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Day 2)",
    "signal": "AVOID",
    "dist_streak": 2,
    "acc_streak": 0,
    "rsi": 22.7,
    "flow": 120,
    "perf": {
      "w1": -5.32,
      "m1": -9.45,
      "m3": -10.15
    },
    "returns": [
      -1.29,
      -3.55,
      -5.32,
      -9.45,
      -9.45,
      -10.15
    ],
    "volumes": [
      158,
      113,
      83,
      144,
      100,
      94
    ],
    "rsiStack": [
      5.1,
      14.5,
      22.7,
      28.9,
      34.7,
      40.0
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 56.51,
    "change": -0.76,
    "mom": 56.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.2,
    "flow": 114,
    "perf": {
      "w1": 1.09,
      "m1": 5.65,
      "m3": -2.25
    },
    "returns": [
      -0.76,
      1.13,
      1.09,
      1.78,
      5.65,
      -2.25
    ],
    "volumes": [
      102,
      80,
      79,
      78,
      109,
      80
    ],
    "rsiStack": [
      60.9,
      61.0,
      58.2,
      55.6,
      53.5,
      51.0
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 43.17,
    "change": 0.26,
    "mom": 63.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.7,
    "flow": 109,
    "perf": {
      "w1": 1.41,
      "m1": 5.78,
      "m3": -3.66
    },
    "returns": [
      0.26,
      1.72,
      1.41,
      2.4,
      5.78,
      -3.66
    ],
    "volumes": [
      84,
      89,
      119,
      86,
      109,
      108
    ],
    "rsiStack": [
      70.0,
      64.6,
      59.7,
      55.6,
      51.9,
      48.7
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 167.4,
    "change": -1.6,
    "mom": 55.2,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.9,
    "flow": 141,
    "perf": {
      "w1": 1.69,
      "m1": -1.5,
      "m3": -9.4
    },
    "returns": [
      -1.6,
      -0.31,
      1.69,
      -0.21,
      -1.5,
      -9.4
    ],
    "volumes": [
      105,
      84,
      96,
      99,
      125,
      82
    ],
    "rsiStack": [
      46.2,
      47.0,
      45.9,
      44.8,
      43.7,
      40.9
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 52.74,
    "change": 0.4,
    "mom": 65.5,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 70.9,
    "flow": 103,
    "perf": {
      "w1": 2.79,
      "m1": 7.94,
      "m3": 1.09
    },
    "returns": [
      0.4,
      1.85,
      2.79,
      3.57,
      7.94,
      1.09
    ],
    "volumes": [
      138,
      103,
      73,
      69,
      107,
      120
    ],
    "rsiStack": [
      89.6,
      80.5,
      70.9,
      64.0,
      58.2,
      53.3
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 115.38,
    "change": -0.71,
    "mom": 55.5,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.6,
    "flow": 142,
    "perf": {
      "w1": 2.02,
      "m1": 4.85,
      "m3": -2.3
    },
    "returns": [
      -0.71,
      -0.06,
      2.02,
      2.6,
      4.85,
      -2.3
    ],
    "volumes": [
      91,
      83,
      90,
      92,
      233,
      128
    ],
    "rsiStack": [
      57.2,
      59.0,
      57.6,
      55.3,
      53.1,
      52.1
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 89.42,
    "change": 1.41,
    "mom": 57.3,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 65.3,
    "flow": 184,
    "perf": {
      "w1": 1.31,
      "m1": 11.04,
      "m3": 5.06
    },
    "returns": [
      1.41,
      2.6,
      1.31,
      2.05,
      11.04,
      5.06
    ],
    "volumes": [
      107,
      92,
      142,
      104,
      192,
      84
    ],
    "rsiStack": [
      70.0,
      67.4,
      65.3,
      62.8,
      59.7,
      56.1
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 471.51,
    "change": -8.24,
    "mom": 43.8,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.1,
    "flow": 197,
    "perf": {
      "w1": -1.4,
      "m1": -19.93,
      "m3": -11.46
    },
    "returns": [
      -8.24,
      -7.74,
      -1.4,
      -4.43,
      -19.93,
      -11.46
    ],
    "volumes": [
      73,
      100,
      103,
      108,
      195,
      99
    ],
    "rsiStack": [
      29.6,
      33.3,
      36.1,
      38.9,
      42.2,
      46.6
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 26.89,
    "change": -1.03,
    "mom": 32.9,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 22.5,
    "flow": 106,
    "perf": {
      "w1": -3.52,
      "m1": -4.68,
      "m3": -1.97
    },
    "returns": [
      -1.03,
      -1.86,
      -3.52,
      -4.75,
      -4.68,
      -1.97
    ],
    "volumes": [
      59,
      89,
      78,
      130,
      74,
      55
    ],
    "rsiStack": [
      7.7,
      14.2,
      22.5,
      29.7,
      37.0,
      44.3
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 45.14,
    "change": 1.23,
    "mom": 58.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.1,
    "flow": 92,
    "perf": {
      "w1": 0.62,
      "m1": -1.16,
      "m3": 1.74
    },
    "returns": [
      1.23,
      1.46,
      0.62,
      0.27,
      -1.16,
      1.74
    ],
    "volumes": [
      55,
      20,
      14,
      74,
      234,
      43
    ],
    "rsiStack": [
      66.5,
      53.9,
      49.1,
      47.8,
      47.6,
      45.6
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 42.86,
    "change": -0.26,
    "mom": 73.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.5,
    "flow": 2,
    "perf": {
      "w1": 4.49,
      "m1": 2.82,
      "m3": -4.35
    },
    "returns": [
      -0.26,
      0.61,
      4.49,
      4.16,
      2.82,
      -4.35
    ],
    "volumes": [
      1,
      4,
      2,
      16,
      1,
      13
    ],
    "rsiStack": [
      69.6,
      63.7,
      58.5,
      54.7,
      51.2,
      47.1
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 28.58,
    "change": 0.42,
    "mom": 59.4,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.6,
    "flow": 851,
    "perf": {
      "w1": 0.78,
      "m1": -0.69,
      "m3": -2.66
    },
    "returns": [
      0.42,
      0.95,
      0.78,
      -0.07,
      -0.69,
      -2.66
    ],
    "volumes": [
      77,
      86,
      126,
      10,
      255,
      17
    ],
    "rsiStack": [
      64.6,
      50.7,
      45.6,
      44.3,
      44.1,
      41.9
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 103.67,
    "change": -1.74,
    "mom": 58.3,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.4,
    "flow": 141,
    "perf": {
      "w1": 2.85,
      "m1": 9.46,
      "m3": -1.42
    },
    "returns": [
      -1.74,
      0.61,
      2.85,
      6.31,
      9.46,
      -1.42
    ],
    "volumes": [
      115,
      61,
      63,
      62,
      99,
      90
    ],
    "rsiStack": [
      64.8,
      66.9,
      63.4,
      59.5,
      56.0,
      54.5
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 81.98,
    "change": 1.56,
    "mom": 57.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 50.7,
    "flow": 103,
    "perf": {
      "w1": 0.36,
      "m1": 0.79,
      "m3": 0.61
    },
    "returns": [
      1.56,
      1.42,
      0.36,
      0.23,
      0.79,
      0.61
    ],
    "volumes": [
      141,
      104,
      31,
      64,
      37,
      56
    ],
    "rsiStack": [
      65.8,
      55.8,
      50.7,
      48.9,
      48.0,
      45.8
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 12.25,
    "change": -0.89,
    "mom": 66.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 49.0,
    "flow": 110,
    "perf": {
      "w1": 5.6,
      "m1": 1.24,
      "m3": -11.17
    },
    "returns": [
      -0.89,
      4.61,
      5.6,
      -1.45,
      1.24,
      -11.17
    ],
    "volumes": [
      171,
      108,
      110,
      110,
      120,
      101
    ],
    "rsiStack": [
      63.7,
      54.8,
      49.0,
      46.1,
      44.5,
      42.6
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 87.4,
    "change": 1.96,
    "mom": 76.1,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.5,
    "flow": 141,
    "perf": {
      "w1": 15.12,
      "m1": 11.66,
      "m3": 0.53
    },
    "returns": [
      1.96,
      8.52,
      15.12,
      4.1,
      11.66,
      0.53
    ],
    "volumes": [
      118,
      165,
      85,
      113,
      109,
      115
    ],
    "rsiStack": [
      81.6,
      69.5,
      62.5,
      58.4,
      55.1,
      50.8
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 25.71,
    "change": -0.19,
    "mom": 37.1,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 25.0,
    "flow": 71,
    "perf": {
      "w1": -2.72,
      "m1": -6.03,
      "m3": 2.63
    },
    "returns": [
      -0.19,
      -0.23,
      -2.72,
      -5.13,
      -6.03,
      2.63
    ],
    "volumes": [
      32,
      60,
      70,
      84,
      101,
      31
    ],
    "rsiStack": [
      10.7,
      16.7,
      25.0,
      32.6,
      40.8,
      51.0
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 30.52,
    "change": 1.9,
    "mom": 53.4,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 66.5,
    "flow": 153,
    "perf": {
      "w1": 1.63,
      "m1": 9.78,
      "m3": 16.49
    },
    "returns": [
      1.9,
      2.42,
      1.63,
      3.18,
      9.78,
      16.49
    ],
    "volumes": [
      117,
      87,
      99,
      74,
      94,
      108
    ],
    "rsiStack": [
      71.5,
      68.3,
      66.5,
      65.0,
      62.3,
      55.1
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 8.43,
    "change": -4.2,
    "mom": 19.4,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 22.5,
    "flow": 241,
    "perf": {
      "w1": -17.76,
      "m1": -25.0,
      "m3": -15.19
    },
    "returns": [
      -4.2,
      -18.31,
      -17.76,
      -18.55,
      -25.0,
      -15.19
    ],
    "volumes": [
      370,
      66,
      63,
      64,
      80,
      229
    ],
    "rsiStack": [
      10.5,
      17.0,
      22.5,
      27.2,
      32.1,
      36.1
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 7.41,
    "change": -5.12,
    "mom": 23.8,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution (Day 2)",
    "signal": "AVOID",
    "dist_streak": 2,
    "acc_streak": 0,
    "rsi": 19.0,
    "flow": 228,
    "perf": {
      "w1": -16.46,
      "m1": -22.49,
      "m3": -11.15
    },
    "returns": [
      -5.12,
      -16.18,
      -16.46,
      -20.15,
      -22.49,
      -11.15
    ],
    "volumes": [
      300,
      90,
      82,
      104,
      91,
      92
    ],
    "rsiStack": [
      7.4,
      13.2,
      19.0,
      24.6,
      31.6,
      42.9
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 150.99,
    "change": -8.65,
    "mom": 47.4,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.2,
    "flow": 147,
    "perf": {
      "w1": 2.51,
      "m1": -30.94,
      "m3": -34.47
    },
    "returns": [
      -8.65,
      -9.82,
      2.51,
      -11.03,
      -30.94,
      -34.47
    ],
    "volumes": [
      84,
      93,
      147,
      87,
      74,
      121
    ],
    "rsiStack": [
      33.1,
      35.8,
      38.2,
      40.3,
      43.2,
      49.2
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 196.4,
    "change": -10.05,
    "mom": 32.8,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 34.0,
    "flow": 187,
    "perf": {
      "w1": -14.05,
      "m1": -27.87,
      "m3": -6.72
    },
    "returns": [
      -10.05,
      -19.37,
      -14.05,
      -13.8,
      -27.87,
      -6.72
    ],
    "volumes": [
      194,
      76,
      64,
      73,
      107,
      90
    ],
    "rsiStack": [
      23.0,
      29.0,
      34.0,
      38.1,
      42.3,
      45.9
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 69.42,
    "chg": 1.37,
    "chgW": -0.46,
    "chgM": -0.91,
    "chgYTD": 12.48,
    "marketCap": "$33.1B",
    "pe": "14.1x",
    "evEbitda": "8.0x",
    "de": "0.5x",
    "drawdown": "-18.7%"
  },
  "MOS": {
    "price": 18.39,
    "chg": 0.88,
    "chgW": 3.08,
    "chgM": -12.72,
    "chgYTD": -23.66,
    "marketCap": "$5.8B",
    "pe": "12.4x",
    "evEbitda": "6.9x",
    "de": "0.5x",
    "drawdown": "-43.0%"
  },
  "CF": {
    "price": 123.3,
    "chg": 4.41,
    "chgW": 2.17,
    "chgM": 7.21,
    "chgYTD": 59.43,
    "marketCap": "$18.7B",
    "pe": "9.1x",
    "evEbitda": "5.9x",
    "de": "0.4x",
    "drawdown": "-13.1%"
  },
  "ICL": {
    "price": 4.58,
    "chg": -0.22,
    "chgW": -3.98,
    "chgM": -9.13,
    "chgYTD": -19.79,
    "marketCap": "–",
    "pe": "19.1x",
    "evEbitda": "6.4x",
    "de": "0.5x",
    "drawdown": "-34.3%"
  },
  "FMC": {
    "price": 6.2,
    "chg": 30.53,
    "chgW": 22.77,
    "chgM": -26.54,
    "chgYTD": -55.3,
    "marketCap": "$964M",
    "pe": "4.4x",
    "evEbitda": "16.9x",
    "de": "2.7x",
    "drawdown": "-66.1%"
  },
  "CTVA": {
    "price": 11.64,
    "chg": 1.48,
    "chgW": -6.51,
    "chgM": -2.35,
    "chgYTD": 15.74,
    "marketCap": "$7.8B",
    "pe": "7.2x",
    "evEbitda": "16.0x",
    "de": "0.6x",
    "drawdown": "-20.4%"
  },
  "ADM": {
    "price": 76.91,
    "chg": 0.93,
    "chgW": -4.03,
    "chgM": -4.4,
    "chgYTD": 33.78,
    "marketCap": "$37.1B",
    "pe": "21.1x",
    "evEbitda": "15.2x",
    "de": "0.4x",
    "drawdown": "-13.3%"
  },
  "BG": {
    "price": 96.64,
    "chg": 0.65,
    "chgW": -6.37,
    "chgM": -9.45,
    "chgYTD": 8.49,
    "marketCap": "$18.6B",
    "pe": "19.3x",
    "evEbitda": "10.5x",
    "de": "1.0x",
    "drawdown": "-28.3%"
  },
  "INGR": {
    "price": 96.97,
    "chg": 1.44,
    "chgW": 1.33,
    "chgM": 1.72,
    "chgYTD": -12.05,
    "marketCap": "$6.1B",
    "pe": "10.6x",
    "evEbitda": "6.0x",
    "de": "0.4x",
    "drawdown": "-21.5%"
  },
  "FPI": {
    "price": 8.43,
    "chg": -4.2,
    "chgW": -17.76,
    "chgM": -25.0,
    "chgYTD": -13.0,
    "marketCap": "$370M",
    "pe": "56.2x",
    "evEbitda": "26.4x",
    "de": "0.6x",
    "drawdown": "-36.3%"
  },
  "LAND": {
    "price": 7.41,
    "chg": -5.12,
    "chgW": -16.46,
    "chgM": -22.49,
    "chgYTD": -19.02,
    "marketCap": "$320M",
    "pe": "-24.3x",
    "evEbitda": "11.6x",
    "de": "0.7x",
    "drawdown": "-43.0%"
  },
  "DE": {
    "price": 675.48,
    "chg": 2.35,
    "chgW": 4.54,
    "chgM": -1.68,
    "chgYTD": 45.09,
    "marketCap": "$182.1B",
    "pe": "37.5x",
    "evEbitda": "27.9x",
    "de": "2.3x",
    "drawdown": "-6.3%"
  },
  "AGCO": {
    "price": 110.91,
    "chg": 2.85,
    "chgW": 4.53,
    "chgM": -3.23,
    "chgYTD": 6.32,
    "marketCap": "$7.6B",
    "pe": "15.3x",
    "evEbitda": "10.7x",
    "de": "0.6x",
    "drawdown": "-22.9%"
  },
  "CNH": {
    "price": 11.76,
    "chg": 4.16,
    "chgW": 2.35,
    "chgM": -12.69,
    "chgYTD": 27.55,
    "marketCap": "$18.9B",
    "pe": "47.0x",
    "evEbitda": "37.5x",
    "de": "3.4x",
    "drawdown": "-18.7%"
  },
  "XYL": {
    "price": 92.4,
    "chg": 1.81,
    "chgW": -15.03,
    "chgM": -9.22,
    "chgYTD": -32.15,
    "marketCap": "$21.2B",
    "pe": "20.5x",
    "evEbitda": "12.1x",
    "de": "0.3x",
    "drawdown": "-39.4%"
  },
  "VMI": {
    "price": 422.1,
    "chg": -2.46,
    "chgW": -2.97,
    "chgM": -11.83,
    "chgYTD": 4.92,
    "marketCap": "$8.1B",
    "pe": "15.7x",
    "evEbitda": "12.4x",
    "de": "0.5x",
    "drawdown": "-27.9%"
  },
  "LNN": {
    "price": 107.63,
    "chg": 1.18,
    "chgW": 1.88,
    "chgM": -5.88,
    "chgYTD": -8.69,
    "marketCap": "$1.1B",
    "pe": "20.2x",
    "evEbitda": "11.6x",
    "de": "0.3x",
    "drawdown": "-27.3%"
  },
  "MWA": {
    "price": 22.79,
    "chg": 0.04,
    "chgW": 2.38,
    "chgM": 5.22,
    "chgYTD": -4.32,
    "marketCap": "$3.6B",
    "pe": "16.0x",
    "evEbitda": "9.7x",
    "de": "0.4x",
    "drawdown": "-26.5%"
  },
  "WTS": {
    "price": 347.6,
    "chg": -0.94,
    "chgW": -3.1,
    "chgM": -4.26,
    "chgYTD": 25.93,
    "marketCap": "$11.6B",
    "pe": "30.4x",
    "evEbitda": "19.7x",
    "de": "0.1x",
    "drawdown": "-11.9%"
  },
  "TSN": {
    "price": 57.04,
    "chg": 1.4,
    "chgW": 0.6,
    "chgM": 9.92,
    "chgYTD": -2.7,
    "marketCap": "$20.1B",
    "pe": "35.2x",
    "evEbitda": "9.9x",
    "de": "0.4x",
    "drawdown": "-17.9%"
  },
  "PPC": {
    "price": 28.72,
    "chg": 4.02,
    "chgW": 2.1,
    "chgM": 4.44,
    "chgYTD": -26.34,
    "marketCap": "$6.8B",
    "pe": "12.5x",
    "evEbitda": "7.4x",
    "de": "0.9x",
    "drawdown": "-36.0%"
  },
  "HRL": {
    "price": 21.28,
    "chg": 1.82,
    "chgW": 1.04,
    "chgM": 5.09,
    "chgYTD": -10.21,
    "marketCap": "$11.7B",
    "pe": "34.3x",
    "evEbitda": "10.8x",
    "de": "0.4x",
    "drawdown": "-20.0%"
  },
  "CAG": {
    "price": 14.57,
    "chg": 3.41,
    "chgW": -1.95,
    "chgM": 9.06,
    "chgYTD": -15.83,
    "marketCap": "$7.0B",
    "pe": "9.7x",
    "evEbitda": "8.7x",
    "de": "1.2x",
    "drawdown": "-28.3%"
  },
  "CALM": {
    "price": 63.56,
    "chg": 2.4,
    "chgW": 1.53,
    "chgM": -4.66,
    "chgYTD": -20.12,
    "marketCap": "$3.0B",
    "pe": "51.7x",
    "evEbitda": "14.9x",
    "de": "–",
    "drawdown": "-33.3%"
  },
  "DBA": {
    "price": 26.89,
    "chg": -1.03,
    "chgW": -3.52,
    "chgM": -4.68,
    "chgYTD": 5.37,
    "marketCap": "–",
    "pe": "11.4x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-8.9%"
  },
  "MOO": {
    "price": 81.98,
    "chg": 1.56,
    "chgW": 0.36,
    "chgM": 0.79,
    "chgYTD": 12.63,
    "marketCap": "–",
    "pe": "15.9x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-8.2%"
  },
  "VEGI": {
    "price": 45.14,
    "chg": 1.23,
    "chgW": 0.62,
    "chgM": -1.16,
    "chgYTD": 17.03,
    "marketCap": "–",
    "pe": "19.5x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-9.1%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "51.4x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
