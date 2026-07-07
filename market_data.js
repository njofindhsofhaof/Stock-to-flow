window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-07-07 23:29:17",
  "sections": {
    "Index": {
      "risk": "Risk Off",
      "leader": "KOSPI",
      "watch": 0
    },
    "Commodity": {
      "risk": "Risk On",
      "leader": "CF",
      "watch": 1
    },
    "Crypto": {
      "risk": "Strong ON",
      "leader": "COIN",
      "watch": 0
    },
    "ETF": {
      "risk": "Risk On",
      "leader": "XLV",
      "watch": 6
    },
    "Stock": {
      "risk": "Risk On",
      "leader": "CRDO",
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
    "price": 7503.85,
    "change": -0.45,
    "mom": 47.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.4,
    "flow": 52,
    "perf": {
      "w1": 0.85,
      "m1": 1.63,
      "m3": 9.95
    },
    "returns": [
      -0.45,
      0.28,
      0.85,
      0.42,
      1.63,
      9.95
    ],
    "volumes": [
      84,
      97,
      97,
      94,
      102,
      98
    ],
    "rsiStack": [
      60.1,
      56.5,
      55.4,
      55.8,
      57.0,
      60.0
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 52925.15,
    "change": -0.25,
    "mom": 57.4,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 68.9,
    "flow": 75,
    "perf": {
      "w1": 1.42,
      "m1": 4.05,
      "m3": 9.84
    },
    "returns": [
      -0.25,
      1.19,
      1.42,
      2.34,
      4.05,
      9.84
    ],
    "volumes": [
      78,
      103,
      97,
      111,
      94,
      118
    ],
    "rsiStack": [
      78.4,
      73.0,
      68.9,
      66.3,
      63.9,
      63.1
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 8051.33,
    "change": -0.46,
    "mom": 34.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.8,
    "flow": 98,
    "perf": {
      "w1": -4.09,
      "m1": 7.57,
      "m3": 46.53
    },
    "returns": [
      -0.46,
      -3.04,
      -4.09,
      -11.67,
      7.57,
      46.53
    ],
    "volumes": [
      101,
      103,
      0,
      88,
      72,
      72
    ],
    "rsiStack": [
      42.0,
      44.7,
      47.8,
      50.4,
      52.9,
      55.1
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
    "rsi": 55.5,
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
      83,
      103,
      97,
      94,
      98,
      93
    ],
    "rsiStack": [
      50.0,
      53.0,
      55.5,
      57.0,
      57.4,
      54.2
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 377.49,
    "change": -1.21,
    "mom": 57.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.3,
    "flow": 53,
    "perf": {
      "w1": 2.42,
      "m1": -4.73,
      "m3": -13.8
    },
    "returns": [
      -1.21,
      1.86,
      2.42,
      -1.85,
      -4.73,
      -13.8
    ],
    "volumes": [
      45,
      105,
      60,
      106,
      98,
      191
    ],
    "rsiStack": [
      51.9,
      45.5,
      42.3,
      41.3,
      42.1,
      45.8
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 54.46,
    "change": -2.94,
    "mom": 50.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.2,
    "flow": 63,
    "perf": {
      "w1": 3.38,
      "m1": -11.55,
      "m3": -20.37
    },
    "returns": [
      -2.94,
      1.64,
      3.38,
      -7.55,
      -11.55,
      -20.37
    ],
    "volumes": [
      57,
      68,
      61,
      103,
      78,
      168
    ],
    "rsiStack": [
      44.3,
      39.3,
      38.2,
      39.2,
      42.3,
      49.7
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 41.75,
    "change": -4.85,
    "mom": 38.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 34.4,
    "flow": 104,
    "perf": {
      "w1": -4.96,
      "m1": -7.86,
      "m3": -18.02
    },
    "returns": [
      -4.85,
      -3.31,
      -4.96,
      -10.79,
      -7.86,
      -18.02
    ],
    "volumes": [
      43,
      95,
      63,
      68,
      65,
      179
    ],
    "rsiStack": [
      22.1,
      29.6,
      34.4,
      37.7,
      41.2,
      46.5
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 72.34,
    "change": 5.53,
    "mom": 58.3,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.0,
    "flow": 2,
    "perf": {
      "w1": 2.25,
      "m1": -20.1,
      "m3": -26.09
    },
    "returns": [
      5.53,
      5.48,
      2.25,
      -3.31,
      -20.1,
      -26.09
    ],
    "volumes": [
      82,
      87,
      72,
      94,
      125,
      103
    ],
    "rsiStack": [
      58.4,
      41.8,
      38.0,
      38.9,
      42.4,
      48.6
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 114.94,
    "change": 1.54,
    "mom": 75.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.2,
    "flow": 109,
    "perf": {
      "w1": 9.05,
      "m1": 1.28,
      "m3": -3.72
    },
    "returns": [
      1.54,
      6.27,
      9.05,
      10.95,
      1.28,
      -3.72
    ],
    "volumes": [
      107,
      89,
      78,
      105,
      114,
      81
    ],
    "rsiStack": [
      88.1,
      70.7,
      59.2,
      53.9,
      52.0,
      53.8
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 35.07,
    "change": 2.63,
    "mom": 62.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.1,
    "flow": 80,
    "perf": {
      "w1": 4.94,
      "m1": 0.31,
      "m3": -6.58
    },
    "returns": [
      2.63,
      4.66,
      4.94,
      2.01,
      0.31,
      -6.58
    ],
    "volumes": [
      46,
      158,
      171,
      60,
      128,
      104
    ],
    "rsiStack": [
      68.4,
      54.9,
      49.1,
      47.3,
      48.0,
      52.0
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 21.12,
    "change": -0.28,
    "mom": 45.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.7,
    "flow": 69,
    "perf": {
      "w1": -5.88,
      "m1": -5.04,
      "m3": -16.42
    },
    "returns": [
      -0.28,
      -0.85,
      -5.88,
      -4.0,
      -5.04,
      -16.42
    ],
    "volumes": [
      71,
      98,
      76,
      93,
      88,
      94
    ],
    "rsiStack": [
      38.3,
      42.5,
      43.7,
      44.0,
      43.7,
      41.3
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 65.32,
    "change": 1.21,
    "mom": 71.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.5,
    "flow": 96,
    "perf": {
      "w1": 6.77,
      "m1": -2.8,
      "m3": -10.25
    },
    "returns": [
      1.21,
      2.75,
      6.77,
      4.93,
      -2.8,
      -10.25
    ],
    "volumes": [
      87,
      73,
      164,
      53,
      86,
      93
    ],
    "rsiStack": [
      72.5,
      58.3,
      50.5,
      47.1,
      46.0,
      47.0
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 63622.03,
    "change": -0.58,
    "mom": 65.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 51.7,
    "flow": 109,
    "perf": {
      "w1": 3.48,
      "m1": -1.24,
      "m3": -20.66
    },
    "returns": [
      -0.58,
      0.85,
      3.48,
      6.14,
      -1.24,
      -20.66
    ],
    "volumes": [
      128,
      65,
      141,
      120,
      53,
      89
    ],
    "rsiStack": [
      69.2,
      59.1,
      51.7,
      47.4,
      45.0,
      44.2
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 163.51,
    "change": -3.17,
    "mom": 55.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.4,
    "flow": 59,
    "perf": {
      "w1": 7.82,
      "m1": 7.29,
      "m3": -3.26
    },
    "returns": [
      -3.17,
      2.68,
      7.82,
      -0.81,
      7.29,
      -3.26
    ],
    "volumes": [
      74,
      135,
      81,
      88,
      97,
      166
    ],
    "rsiStack": [
      57.7,
      52.9,
      49.4,
      47.7,
      46.4,
      43.5
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 65.15,
    "change": -5.1,
    "mom": 42.3,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.3,
    "flow": 62,
    "perf": {
      "w1": -14.23,
      "m1": -18.85,
      "m3": -23.44
    },
    "returns": [
      -5.1,
      5.17,
      -14.23,
      -18.51,
      -18.85,
      -23.44
    ],
    "volumes": [
      91,
      173,
      73,
      83,
      73,
      141
    ],
    "rsiStack": [
      38.5,
      36.1,
      36.3,
      38.0,
      40.9,
      45.0
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 97.36,
    "change": -3.38,
    "mom": 50.5,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.9,
    "flow": 64,
    "perf": {
      "w1": 5.05,
      "m1": -19.16,
      "m3": -24.45
    },
    "returns": [
      -3.38,
      4.25,
      5.05,
      -11.05,
      -19.16,
      -24.45
    ],
    "volumes": [
      94,
      122,
      165,
      184,
      121,
      238
    ],
    "rsiStack": [
      48.5,
      41.6,
      38.9,
      38.8,
      39.3,
      36.8
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 54.64,
    "change": 2.84,
    "mom": 61.7,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.7,
    "flow": 121,
    "perf": {
      "w1": 1.98,
      "m1": -5.25,
      "m3": -4.69
    },
    "returns": [
      2.84,
      3.47,
      1.98,
      1.07,
      -5.25,
      -4.69
    ],
    "volumes": [
      73,
      97,
      71,
      76,
      81,
      76
    ],
    "rsiStack": [
      66.7,
      51.7,
      46.7,
      45.8,
      46.6,
      49.4
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 179.18,
    "change": -2.39,
    "mom": 33.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.0,
    "flow": 85,
    "perf": {
      "w1": -3.36,
      "m1": -0.62,
      "m3": 26.12
    },
    "returns": [
      -2.39,
      -3.47,
      -3.36,
      -6.75,
      -0.62,
      26.12
    ],
    "volumes": [
      61,
      67,
      78,
      86,
      75,
      196
    ],
    "rsiStack": [
      36.5,
      42.1,
      46.0,
      49.2,
      52.5,
      56.9
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 45.7,
    "change": 0.88,
    "mom": 54.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.4,
    "flow": 90,
    "perf": {
      "w1": -0.7,
      "m1": 3.04,
      "m3": -3.08
    },
    "returns": [
      0.88,
      2.08,
      -0.7,
      2.19,
      3.04,
      -3.08
    ],
    "volumes": [
      91,
      141,
      83,
      89,
      104,
      98
    ],
    "rsiStack": [
      56.9,
      56.6,
      55.4,
      54.1,
      53.7,
      57.5
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 164.44,
    "change": 1.53,
    "mom": 64.0,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 70.3,
    "flow": 105,
    "perf": {
      "w1": 2.3,
      "m1": 7.47,
      "m3": 10.12
    },
    "returns": [
      1.53,
      3.07,
      2.3,
      9.58,
      7.47,
      10.12
    ],
    "volumes": [
      135,
      87,
      110,
      82,
      105,
      190
    ],
    "rsiStack": [
      75.4,
      73.0,
      70.3,
      67.5,
      63.5,
      56.8
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 111.02,
    "change": 0.73,
    "mom": 64.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.2,
    "flow": 98,
    "perf": {
      "w1": 2.91,
      "m1": -0.58,
      "m3": -2.84
    },
    "returns": [
      0.73,
      1.17,
      2.91,
      3.89,
      -0.58,
      -2.84
    ],
    "volumes": [
      111,
      186,
      88,
      74,
      110,
      174
    ],
    "rsiStack": [
      73.0,
      59.1,
      52.2,
      49.0,
      47.7,
      49.1
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 56.05,
    "change": -0.16,
    "mom": 65.8,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 74.4,
    "flow": 74,
    "perf": {
      "w1": 4.34,
      "m1": 7.17,
      "m3": 9.2
    },
    "returns": [
      -0.16,
      2.32,
      4.34,
      4.38,
      7.17,
      9.2
    ],
    "volumes": [
      86,
      124,
      83,
      82,
      72,
      116
    ],
    "rsiStack": [
      85.7,
      79.5,
      74.4,
      70.2,
      65.0,
      57.7
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 44.89,
    "change": 1.35,
    "mom": 51.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 54.2,
    "flow": 82,
    "perf": {
      "w1": -0.07,
      "m1": 0.43,
      "m3": 5.05
    },
    "returns": [
      1.35,
      1.61,
      -0.07,
      1.98,
      0.43,
      5.05
    ],
    "volumes": [
      121,
      141,
      94,
      103,
      84,
      112
    ],
    "rsiStack": [
      59.1,
      55.4,
      54.2,
      54.0,
      54.2,
      55.1
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 182.38,
    "change": -1.71,
    "mom": 41.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.8,
    "flow": 93,
    "perf": {
      "w1": -0.21,
      "m1": 4.71,
      "m3": 5.92
    },
    "returns": [
      -1.71,
      -0.53,
      -0.21,
      0.32,
      4.71,
      5.92
    ],
    "volumes": [
      81,
      97,
      93,
      94,
      81,
      117
    ],
    "rsiStack": [
      47.3,
      53.8,
      55.8,
      56.3,
      56.7,
      59.3
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 51.51,
    "change": -0.9,
    "mom": 50.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 51.1,
    "flow": 101,
    "perf": {
      "w1": 1.68,
      "m1": 1.74,
      "m3": -0.31
    },
    "returns": [
      -0.9,
      0.96,
      1.68,
      -0.21,
      1.74,
      -0.31
    ],
    "volumes": [
      165,
      121,
      100,
      75,
      73,
      105
    ],
    "rsiStack": [
      50.4,
      51.0,
      51.1,
      51.3,
      52.4,
      57.7
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 117.39,
    "change": -0.53,
    "mom": 51.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.1,
    "flow": 110,
    "perf": {
      "w1": 0.23,
      "m1": 2.2,
      "m3": 4.12
    },
    "returns": [
      -0.53,
      -0.59,
      0.23,
      2.13,
      2.2,
      4.12
    ],
    "volumes": [
      111,
      128,
      134,
      93,
      99,
      100
    ],
    "rsiStack": [
      55.8,
      53.7,
      52.1,
      51.5,
      51.9,
      55.5
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 84.86,
    "change": 0.9,
    "mom": 55.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.9,
    "flow": 106,
    "perf": {
      "w1": 0.58,
      "m1": 1.7,
      "m3": 1.69
    },
    "returns": [
      0.9,
      1.87,
      0.58,
      3.26,
      1.7,
      1.69
    ],
    "volumes": [
      104,
      97,
      77,
      93,
      89,
      138
    ],
    "rsiStack": [
      59.1,
      55.5,
      53.9,
      53.1,
      53.2,
      56.9
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 551.69,
    "change": -5.13,
    "mom": 25.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.4,
    "flow": 101,
    "perf": {
      "w1": -10.2,
      "m1": 2.21,
      "m3": 45.71
    },
    "returns": [
      -5.13,
      -8.01,
      -10.2,
      -15.77,
      2.21,
      45.71
    ],
    "volumes": [
      69,
      83,
      94,
      112,
      70,
      236
    ],
    "rsiStack": [
      33.0,
      40.6,
      45.4,
      48.7,
      52.0,
      56.5
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 27.55,
    "change": 0.04,
    "mom": 64.2,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.2,
    "flow": 107,
    "perf": {
      "w1": 3.92,
      "m1": 4.36,
      "m3": 2.53
    },
    "returns": [
      0.04,
      2.57,
      3.92,
      3.38,
      4.36,
      2.53
    ],
    "volumes": [
      105,
      40,
      173,
      101,
      182,
      286
    ],
    "rsiStack": [
      78.8,
      69.5,
      62.2,
      57.9,
      54.3,
      48.0
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 44.14,
    "change": -1.8,
    "mom": 55.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.4,
    "flow": 94,
    "perf": {
      "w1": 0.39,
      "m1": 0.34,
      "m3": -5.46
    },
    "returns": [
      -1.8,
      0.32,
      0.39,
      2.25,
      0.34,
      -5.46
    ],
    "volumes": [
      78,
      42,
      41,
      29,
      44,
      54
    ],
    "rsiStack": [
      51.9,
      53.1,
      51.4,
      50.0,
      49.0,
      48.0
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 44.88,
    "change": -1.47,
    "mom": 37.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.1,
    "flow": 26,
    "perf": {
      "w1": -1.37,
      "m1": 1.63,
      "m3": 12.93
    },
    "returns": [
      -1.47,
      -1.36,
      -1.37,
      0.21,
      1.63,
      12.93
    ],
    "volumes": [
      51,
      87,
      41,
      205,
      109,
      8
    ],
    "rsiStack": [
      41.7,
      49.4,
      53.1,
      54.9,
      56.0,
      57.5
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.22,
    "change": -1.19,
    "mom": 59.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.8,
    "flow": 10,
    "perf": {
      "w1": 1.98,
      "m1": 2.55,
      "m3": -4.05
    },
    "returns": [
      -1.19,
      1.24,
      1.98,
      3.02,
      2.55,
      -4.05
    ],
    "volumes": [
      84,
      2,
      47,
      3,
      15,
      153
    ],
    "rsiStack": [
      59.7,
      59.1,
      55.8,
      53.2,
      51.5,
      51.4
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 103.61,
    "change": 1.47,
    "mom": 50.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.2,
    "flow": 69,
    "perf": {
      "w1": -0.43,
      "m1": 8.73,
      "m3": 6.9
    },
    "returns": [
      1.47,
      0.21,
      -0.43,
      3.45,
      8.73,
      6.9
    ],
    "volumes": [
      92,
      92,
      83,
      88,
      71,
      100
    ],
    "rsiStack": [
      56.0,
      56.2,
      55.2,
      54.5,
      54.4,
      56.2
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 80.91,
    "change": -0.65,
    "mom": 67.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.9,
    "flow": 111,
    "perf": {
      "w1": 2.35,
      "m1": 2.94,
      "m3": -5.4
    },
    "returns": [
      -0.65,
      2.43,
      2.35,
      5.21,
      2.94,
      -5.4
    ],
    "volumes": [
      67,
      44,
      38,
      288,
      82,
      55
    ],
    "rsiStack": [
      71.5,
      66.3,
      59.9,
      55.4,
      52.1,
      50.7
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 13.56,
    "change": -1.95,
    "mom": 43.8,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.8,
    "flow": 82,
    "perf": {
      "w1": -3.28,
      "m1": -8.99,
      "m3": 10.78
    },
    "returns": [
      -1.95,
      -0.59,
      -3.28,
      -3.9,
      -8.99,
      10.78
    ],
    "volumes": [
      101,
      82,
      81,
      95,
      95,
      75
    ],
    "rsiStack": [
      37.6,
      38.8,
      42.8,
      45.9,
      47.8,
      46.6
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 76.03,
    "change": -2.34,
    "mom": 41.8,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.3,
    "flow": 60,
    "perf": {
      "w1": -1.69,
      "m1": -7.4,
      "m3": -0.91
    },
    "returns": [
      -2.34,
      0.68,
      -1.69,
      -5.47,
      -7.4,
      -0.91
    ],
    "volumes": [
      100,
      84,
      77,
      90,
      118,
      96
    ],
    "rsiStack": [
      36.0,
      37.8,
      41.3,
      43.8,
      44.7,
      40.5
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 24.75,
    "change": 0.12,
    "mom": 66.9,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Day 2)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 2,
    "rsi": 61.2,
    "flow": 79,
    "perf": {
      "w1": 4.61,
      "m1": 3.69,
      "m3": 3.25
    },
    "returns": [
      0.12,
      2.65,
      4.61,
      4.08,
      3.69,
      3.25
    ],
    "volumes": [
      158,
      93,
      33,
      49,
      138,
      214
    ],
    "rsiStack": [
      82.6,
      70.1,
      61.2,
      56.4,
      53.6,
      51.6
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 24.07,
    "change": 1.48,
    "mom": 51.4,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.5,
    "flow": 85,
    "perf": {
      "w1": -1.23,
      "m1": -7.57,
      "m3": -11.57
    },
    "returns": [
      1.48,
      0.8,
      -1.23,
      -4.03,
      -7.57,
      -11.57
    ],
    "volumes": [
      114,
      101,
      102,
      128,
      106,
      97
    ],
    "rsiStack": [
      44.8,
      40.5,
      39.5,
      39.9,
      41.6,
      46.4
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.58,
    "change": 0.63,
    "mom": 50.8,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.1,
    "flow": 97,
    "perf": {
      "w1": -1.94,
      "m1": -7.26,
      "m3": -18.33
    },
    "returns": [
      0.63,
      -0.83,
      -1.94,
      -1.24,
      -7.26,
      -18.33
    ],
    "volumes": [
      95,
      70,
      138,
      114,
      89,
      107
    ],
    "rsiStack": [
      38.8,
      38.7,
      38.1,
      37.9,
      38.7,
      40.5
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.56,
    "change": 0.12,
    "mom": 54.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 37.0,
    "flow": 95,
    "perf": {
      "w1": -0.58,
      "m1": -7.66,
      "m3": -17.05
    },
    "returns": [
      0.12,
      -0.81,
      -0.58,
      -0.35,
      -7.66,
      -17.05
    ],
    "volumes": [
      73,
      98,
      117,
      99,
      153,
      84
    ],
    "rsiStack": [
      40.3,
      38.0,
      37.0,
      37.2,
      38.8,
      42.6
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 246.4,
    "change": -7.21,
    "mom": 38.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.7,
    "flow": 72,
    "perf": {
      "w1": 0.29,
      "m1": 19.1,
      "m3": 128.3
    },
    "returns": [
      -7.21,
      -4.9,
      0.29,
      -18.55,
      19.1,
      128.3
    ],
    "volumes": [
      67,
      70,
      85,
      81,
      95,
      193
    ],
    "rsiStack": [
      43.8,
      47.9,
      50.7,
      52.7,
      54.8,
      58.4
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 230.7,
    "change": -7.45,
    "mom": 28.3,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.5,
    "flow": 60,
    "perf": {
      "w1": -16.94,
      "m1": -12.44,
      "m3": 92.36
    },
    "returns": [
      -7.45,
      -15.2,
      -16.94,
      -25.06,
      -12.44,
      92.36
    ],
    "volumes": [
      42,
      50,
      44,
      54,
      68,
      209
    ],
    "rsiStack": [
      26.5,
      36.9,
      43.5,
      47.7,
      51.3,
      54.2
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 65.32,
    "chg": 1.21,
    "chgW": 6.77,
    "chgM": -2.8,
    "chgYTD": 5.83,
    "marketCap": "$31.4B",
    "pe": "13.3x",
    "evEbitda": "8.0x",
    "de": "0.6x",
    "drawdown": "-23.5%"
  },
  "MOS": {
    "price": 21.12,
    "chg": -0.28,
    "chgW": -5.88,
    "chgM": -5.04,
    "chgYTD": -12.33,
    "marketCap": "$6.7B",
    "pe": "150.9x",
    "evEbitda": "6.2x",
    "de": "0.5x",
    "drawdown": "-44.8%"
  },
  "CF": {
    "price": 114.94,
    "chg": 1.54,
    "chgW": 9.05,
    "chgM": 1.28,
    "chgYTD": 48.62,
    "marketCap": "$17.7B",
    "pe": "10.4x",
    "evEbitda": "6.4x",
    "de": "0.4x",
    "drawdown": "-19.0%"
  },
  "ICL": {
    "price": 4.95,
    "chg": -1.98,
    "chgW": -1.2,
    "chgM": -11.61,
    "chgYTD": -13.31,
    "marketCap": "$6.4B",
    "pe": "23.6x",
    "evEbitda": "7.3x",
    "de": "0.5x",
    "drawdown": "-31.5%"
  },
  "FMC": {
    "price": 11.59,
    "chg": 1.85,
    "chgW": 0.43,
    "chgM": -0.43,
    "chgYTD": -16.44,
    "marketCap": "$1.5B",
    "pe": "5.6x",
    "evEbitda": "17.3x",
    "de": "2.5x",
    "drawdown": "-73.8%"
  },
  "CTVA": {
    "price": 86.75,
    "chg": 0.42,
    "chgW": 4.05,
    "chgM": 12.62,
    "chgYTD": 29.42,
    "marketCap": "$58.0B",
    "pe": "46.9x",
    "evEbitda": "14.4x",
    "de": "0.1x",
    "drawdown": "-1.1%"
  },
  "ADM": {
    "price": 78.2,
    "chg": 0.35,
    "chgW": 1.73,
    "chgM": -3.36,
    "chgYTD": 36.02,
    "marketCap": "$37.7B",
    "pe": "34.9x",
    "evEbitda": "18.9x",
    "de": "0.5x",
    "drawdown": "-8.4%"
  },
  "BG": {
    "price": 110.91,
    "chg": 1.96,
    "chgW": 1.66,
    "chgM": -12.3,
    "chgYTD": 24.51,
    "marketCap": "$21.5B",
    "pe": "29.2x",
    "evEbitda": "16.8x",
    "de": "0.9x",
    "drawdown": "-17.8%"
  },
  "INGR": {
    "price": 98.57,
    "chg": -0.73,
    "chgW": 3.31,
    "chgM": -1.41,
    "chgYTD": -10.6,
    "marketCap": "$6.2B",
    "pe": "9.5x",
    "evEbitda": "6.0x",
    "de": "0.4x",
    "drawdown": "-28.3%"
  },
  "FPI": {
    "price": 9.58,
    "chg": 0.63,
    "chgW": -1.94,
    "chgM": -7.26,
    "chgYTD": -1.14,
    "marketCap": "$425M",
    "pe": "16.2x",
    "evEbitda": "24.0x",
    "de": "0.5x",
    "drawdown": "-27.6%"
  },
  "LAND": {
    "price": 8.56,
    "chg": 0.12,
    "chgW": -0.58,
    "chgM": -7.66,
    "chgYTD": -6.45,
    "marketCap": "$369M",
    "pe": "-18.0x",
    "evEbitda": "12.4x",
    "de": "0.7x",
    "drawdown": "-34.2%"
  },
  "DE": {
    "price": 603.61,
    "chg": -4.98,
    "chgW": -3.67,
    "chgM": 3.46,
    "chgYTD": 29.65,
    "marketCap": "$162.9B",
    "pe": "34.2x",
    "evEbitda": "23.5x",
    "de": "3.8x",
    "drawdown": "-10.5%"
  },
  "AGCO": {
    "price": 113.75,
    "chg": -3.86,
    "chgW": -4.64,
    "chgM": -2.29,
    "chgYTD": 9.04,
    "marketCap": "$8.2B",
    "pe": "11.0x",
    "evEbitda": "10.2x",
    "de": "0.6x",
    "drawdown": "-20.9%"
  },
  "CNH": {
    "price": 10.43,
    "chg": -4.05,
    "chgW": -8.43,
    "chgM": -2.98,
    "chgYTD": 13.12,
    "marketCap": "$12.9B",
    "pe": "32.6x",
    "evEbitda": "35.1x",
    "de": "3.3x",
    "drawdown": "-26.9%"
  },
  "XYL": {
    "price": 120.65,
    "chg": 1.03,
    "chgW": 3.36,
    "chgM": 9.74,
    "chgYTD": -11.4,
    "marketCap": "$28.7B",
    "pe": "30.0x",
    "evEbitda": "15.8x",
    "de": "0.2x",
    "drawdown": "-21.8%"
  },
  "VMI": {
    "price": 539.51,
    "chg": -4.35,
    "chgW": -5.91,
    "chgM": 1.07,
    "chgYTD": 34.1,
    "marketCap": "$10.5B",
    "pe": "30.0x",
    "evEbitda": "18.4x",
    "de": "0.5x",
    "drawdown": "-7.9%"
  },
  "LNN": {
    "price": 115.24,
    "chg": -2.02,
    "chgW": -7.24,
    "chgM": 2.28,
    "chgYTD": -2.23,
    "marketCap": "$1.2B",
    "pe": "22.1x",
    "evEbitda": "14.0x",
    "de": "0.3x",
    "drawdown": "-22.1%"
  },
  "MWA": {
    "price": 25.1,
    "chg": -0.99,
    "chgW": -3.83,
    "chgM": -0.91,
    "chgYTD": 5.37,
    "marketCap": "$3.9B",
    "pe": "19.0x",
    "evEbitda": "11.8x",
    "de": "0.4x",
    "drawdown": "-19.0%"
  },
  "WTS": {
    "price": 357.29,
    "chg": -3.32,
    "chgW": -0.46,
    "chgM": 13.71,
    "chgYTD": 29.44,
    "marketCap": "$11.9B",
    "pe": "32.7x",
    "evEbitda": "22.0x",
    "de": "0.1x",
    "drawdown": "-9.4%"
  },
  "TSN": {
    "price": 58.82,
    "chg": 0.12,
    "chgW": 0.29,
    "chgM": 0.15,
    "chgYTD": 0.34,
    "marketCap": "$20.7B",
    "pe": "46.3x",
    "evEbitda": "10.5x",
    "de": "0.4x",
    "drawdown": "-15.3%"
  },
  "PPC": {
    "price": 28.77,
    "chg": 0.42,
    "chgW": -0.62,
    "chgM": -3.71,
    "chgYTD": -26.21,
    "marketCap": "$6.8B",
    "pe": "7.7x",
    "evEbitda": "4.7x",
    "de": "0.9x",
    "drawdown": "-43.1%"
  },
  "HRL": {
    "price": 24.7,
    "chg": 1.73,
    "chgW": -6.12,
    "chgM": 4.57,
    "chgYTD": 4.22,
    "marketCap": "$13.6B",
    "pe": "29.1x",
    "evEbitda": "10.4x",
    "de": "0.0x",
    "drawdown": "-22.5%"
  },
  "CAG": {
    "price": 14.03,
    "chg": 1.74,
    "chgW": 0.36,
    "chgM": 7.84,
    "chgYTD": -18.95,
    "marketCap": "$6.7B",
    "pe": "8.9x",
    "evEbitda": "8.0x",
    "de": "0.9x",
    "drawdown": "-32.6%"
  },
  "CALM": {
    "price": 85.41,
    "chg": 0.26,
    "chgW": 7.65,
    "chgM": 12.9,
    "chgYTD": 7.34,
    "marketCap": "$4.0B",
    "pe": "5.9x",
    "evEbitda": "3.0x",
    "de": "–",
    "drawdown": "-32.4%"
  },
  "DBA": {
    "price": 27.55,
    "chg": 0.04,
    "chgW": 3.92,
    "chgM": 4.36,
    "chgYTD": 7.95,
    "marketCap": "–",
    "pe": "11.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-4.5%"
  },
  "MOO": {
    "price": 80.91,
    "chg": -0.65,
    "chgW": 2.35,
    "chgM": 2.94,
    "chgYTD": 11.16,
    "marketCap": "–",
    "pe": "18.3x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-6.5%"
  },
  "VEGI": {
    "price": 44.14,
    "chg": -1.8,
    "chgW": 0.39,
    "chgM": 0.34,
    "chgYTD": 14.44,
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
    "pe": "55.0x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
