window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-07-29 23:30:00",
  "sections": {
    "Index": {
      "risk": "Neutral",
      "leader": "NI225",
      "watch": 0
    },
    "Commodity": {
      "risk": "Risk Off",
      "leader": "CL",
      "watch": 1
    },
    "Crypto": {
      "risk": "Neutral",
      "leader": "COIN",
      "watch": 1
    },
    "ETF": {
      "risk": "Risk On",
      "leader": "XLE",
      "watch": 7
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
    "price": 7316.15,
    "change": -1.52,
    "mom": 30.2,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.0,
    "flow": 73,
    "perf": {
      "w1": -2.44,
      "m1": -2.44,
      "m3": 1.19
    },
    "returns": [
      -1.52,
      -1.29,
      -2.44,
      -3.38,
      -2.44,
      1.19
    ],
    "volumes": [
      109,
      91,
      91,
      94,
      92,
      101
    ],
    "rsiStack": [
      20.1,
      30.7,
      38.0,
      43.0,
      48.0,
      54.0
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 51594.14,
    "change": -2.19,
    "mom": 34.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.1,
    "flow": 112,
    "perf": {
      "w1": -1.2,
      "m1": -1.39,
      "m3": 4.23
    },
    "returns": [
      -2.19,
      -0.68,
      -1.2,
      -2.02,
      -1.39,
      4.23
    ],
    "volumes": [
      112,
      83,
      83,
      72,
      88,
      104
    ],
    "rsiStack": [
      36.1,
      40.7,
      45.1,
      48.7,
      52.8,
      59.4
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 6023.66,
    "change": -10.84,
    "mom": 36.9,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 34.2,
    "flow": 76,
    "perf": {
      "w1": -10.73,
      "m1": -28.24,
      "m3": -9.3
    },
    "returns": [
      -10.84,
      -15.12,
      -10.73,
      -11.51,
      -28.24,
      -9.3
    ],
    "volumes": [
      66,
      92,
      89,
      95,
      102,
      0
    ],
    "rsiStack": [
      24.3,
      30.1,
      34.2,
      37.7,
      41.5,
      45.5
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
    "rsi": 36.6,
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
      118,
      86,
      98,
      123,
      106,
      97
    ],
    "rsiStack": [
      22.8,
      30.8,
      36.6,
      41.0,
      45.3,
      48.8
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 371.08,
    "change": 0.46,
    "mom": 52.9,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.8,
    "flow": 177,
    "perf": {
      "w1": -2.12,
      "m1": 0.73,
      "m3": -12.31
    },
    "returns": [
      0.46,
      -0.22,
      -2.12,
      -0.34,
      0.73,
      -12.31
    ],
    "volumes": [
      77,
      61,
      106,
      57,
      106,
      63
    ],
    "rsiStack": [
      46.8,
      46.5,
      44.8,
      43.3,
      40.4,
      32.6
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 51.77,
    "change": 0.14,
    "mom": 50.6,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.0,
    "flow": 136,
    "perf": {
      "w1": -3.99,
      "m1": -3.18,
      "m3": -24.19
    },
    "returns": [
      0.14,
      -1.56,
      -3.99,
      -0.84,
      -3.18,
      -24.19
    ],
    "volumes": [
      74,
      75,
      80,
      72,
      84,
      67
    ],
    "rsiStack": [
      41.9,
      42.3,
      41.0,
      40.4,
      39.8,
      36.2
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 37.52,
    "change": -3.67,
    "mom": 40.4,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 32.6,
    "flow": 113,
    "perf": {
      "w1": -8.42,
      "m1": -14.14,
      "m3": -32.81
    },
    "returns": [
      -3.67,
      -5.94,
      -8.42,
      -8.26,
      -14.14,
      -32.81
    ],
    "volumes": [
      111,
      97,
      107,
      79,
      105,
      62
    ],
    "rsiStack": [
      23.3,
      29.4,
      32.6,
      35.1,
      37.0,
      35.9
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 84.65,
    "change": 6.8,
    "mom": 53.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 2)",
    "signal": "STRONG BUY",
    "dist_streak": 0,
    "acc_streak": 2,
    "rsi": 54.6,
    "flow": 1,
    "perf": {
      "w1": -2.51,
      "m1": 21.8,
      "m3": -16.96
    },
    "returns": [
      6.8,
      -5.22,
      -2.51,
      6.34,
      21.8,
      -16.96
    ],
    "volumes": [
      128,
      140,
      146,
      42,
      100,
      84
    ],
    "rsiStack": [
      53.9,
      55.8,
      54.6,
      52.6,
      50.9,
      50.2
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 127.35,
    "change": 3.6,
    "mom": 56.3,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.5,
    "flow": 60,
    "perf": {
      "w1": 0.0,
      "m1": 17.63,
      "m3": 3.8
    },
    "returns": [
      3.6,
      1.82,
      0.0,
      8.09,
      17.63,
      3.8
    ],
    "volumes": [
      90,
      58,
      79,
      106,
      84,
      110
    ],
    "rsiStack": [
      66.5,
      65.5,
      63.5,
      60.5,
      56.3,
      49.5
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 35.46,
    "change": 0.51,
    "mom": 59.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Day 1)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 54.3,
    "flow": 100,
    "perf": {
      "w1": 1.84,
      "m1": 8.18,
      "m3": -10.73
    },
    "returns": [
      0.51,
      3.62,
      1.84,
      1.69,
      8.18,
      -10.73
    ],
    "volumes": [
      122,
      68,
      61,
      45,
      62,
      197
    ],
    "rsiStack": [
      71.7,
      60.7,
      54.3,
      50.9,
      49.0,
      48.6
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 22.62,
    "change": -1.99,
    "mom": 50.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.4,
    "flow": 62,
    "perf": {
      "w1": -0.7,
      "m1": 6.75,
      "m3": -2.29
    },
    "returns": [
      -1.99,
      1.43,
      -0.7,
      -1.82,
      6.75,
      -2.29
    ],
    "volumes": [
      107,
      81,
      101,
      61,
      72,
      149
    ],
    "rsiStack": [
      54.2,
      54.6,
      53.4,
      51.8,
      49.6,
      46.4
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 70.59,
    "change": 1.63,
    "mom": 62.7,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 64.1,
    "flow": 85,
    "perf": {
      "w1": 3.05,
      "m1": 12.14,
      "m3": -6.16
    },
    "returns": [
      1.63,
      3.66,
      3.05,
      3.31,
      12.14,
      -6.16
    ],
    "volumes": [
      133,
      61,
      56,
      102,
      55,
      182
    ],
    "rsiStack": [
      77.2,
      70.0,
      64.1,
      59.2,
      54.7,
      51.1
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 63919.8,
    "change": 0.08,
    "mom": 48.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.6,
    "flow": 119,
    "perf": {
      "w1": -0.28,
      "m1": 1.15,
      "m3": -13.33
    },
    "returns": [
      0.08,
      -2.17,
      -0.28,
      -1.19,
      1.15,
      -13.33
    ],
    "volumes": [
      100,
      58,
      100,
      110,
      56,
      93
    ],
    "rsiStack": [
      41.1,
      46.7,
      48.6,
      48.3,
      47.1,
      45.8
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 160.09,
    "change": -4.65,
    "mom": 46.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.7,
    "flow": 98,
    "perf": {
      "w1": -3.63,
      "m1": 9.51,
      "m3": -16.29
    },
    "returns": [
      -4.65,
      1.14,
      -3.63,
      -4.26,
      9.51,
      -16.29
    ],
    "volumes": [
      73,
      74,
      91,
      77,
      98,
      100
    ],
    "rsiStack": [
      42.8,
      47.0,
      47.7,
      47.5,
      46.5,
      43.0
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 61.36,
    "change": -4.6,
    "mom": 47.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.1,
    "flow": 50,
    "perf": {
      "w1": -7.26,
      "m1": -2.03,
      "m3": -38.46
    },
    "returns": [
      -4.6,
      -1.6,
      -7.26,
      -6.59,
      -2.03,
      -38.46
    ],
    "volumes": [
      55,
      55,
      71,
      94,
      87,
      278
    ],
    "rsiStack": [
      38.5,
      41.4,
      41.1,
      41.0,
      41.3,
      39.7
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 93.33,
    "change": -2.94,
    "mom": 50.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.1,
    "flow": 78,
    "perf": {
      "w1": -6.68,
      "m1": 7.36,
      "m3": -47.32
    },
    "returns": [
      -2.94,
      1.81,
      -6.68,
      -4.25,
      7.36,
      -47.32
    ],
    "volumes": [
      70,
      60,
      53,
      64,
      54,
      127
    ],
    "rsiStack": [
      41.2,
      43.3,
      42.1,
      41.2,
      40.3,
      36.3
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 58.65,
    "change": 1.88,
    "mom": 52.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.3,
    "flow": 109,
    "perf": {
      "w1": -0.93,
      "m1": 10.43,
      "m3": -0.34
    },
    "returns": [
      1.88,
      -1.63,
      -0.93,
      3.81,
      10.43,
      -0.34
    ],
    "volumes": [
      90,
      114,
      98,
      88,
      102,
      83
    ],
    "rsiStack": [
      57.8,
      60.7,
      59.3,
      56.9,
      53.7,
      47.4
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 166.57,
    "change": -2.64,
    "mom": 29.8,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 34.1,
    "flow": 156,
    "perf": {
      "w1": -7.6,
      "m1": -12.57,
      "m3": 2.9
    },
    "returns": [
      -2.64,
      -5.29,
      -7.6,
      -8.27,
      -12.57,
      2.9
    ],
    "volumes": [
      112,
      83,
      54,
      73,
      85,
      72
    ],
    "rsiStack": [
      14.4,
      26.2,
      34.1,
      39.5,
      44.8,
      50.7
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 44.91,
    "change": -1.34,
    "mom": 38.6,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.2,
    "flow": 128,
    "perf": {
      "w1": -2.22,
      "m1": -0.95,
      "m3": -3.52
    },
    "returns": [
      -1.34,
      -2.98,
      -2.22,
      -0.69,
      -0.95,
      -3.52
    ],
    "volumes": [
      91,
      88,
      99,
      93,
      79,
      91
    ],
    "rsiStack": [
      30.9,
      40.8,
      45.2,
      47.0,
      47.1,
      42.7
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 166.24,
    "change": -0.61,
    "mom": 60.7,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 64.9,
    "flow": 118,
    "perf": {
      "w1": 4.27,
      "m1": 4.78,
      "m3": 14.52
    },
    "returns": [
      -0.61,
      2.26,
      4.27,
      5.02,
      4.78,
      14.52
    ],
    "volumes": [
      130,
      74,
      53,
      60,
      98,
      99
    ],
    "rsiStack": [
      72.4,
      67.3,
      64.9,
      63.4,
      61.9,
      61.4
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 109.51,
    "change": -0.15,
    "mom": 53.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.8,
    "flow": 103,
    "perf": {
      "w1": 0.28,
      "m1": 2.22,
      "m3": -6.18
    },
    "returns": [
      -0.15,
      3.02,
      0.28,
      -3.41,
      2.22,
      -6.18
    ],
    "volumes": [
      78,
      88,
      59,
      56,
      81,
      64
    ],
    "rsiStack": [
      55.4,
      50.6,
      48.8,
      47.7,
      46.5,
      44.5
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 56.68,
    "change": -1.6,
    "mom": 46.2,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.7,
    "flow": 138,
    "perf": {
      "w1": 1.12,
      "m1": 5.73,
      "m3": 9.17
    },
    "returns": [
      -1.6,
      0.66,
      1.12,
      0.21,
      5.73,
      9.17
    ],
    "volumes": [
      101,
      96,
      75,
      111,
      140,
      74
    ],
    "rsiStack": [
      53.6,
      58.3,
      60.7,
      61.6,
      61.9,
      64.2
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 45.96,
    "change": -0.11,
    "mom": 62.5,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 61.6,
    "flow": 127,
    "perf": {
      "w1": 2.11,
      "m1": 4.38,
      "m3": 3.7
    },
    "returns": [
      -0.11,
      0.02,
      2.11,
      3.14,
      4.38,
      3.7
    ],
    "volumes": [
      122,
      98,
      83,
      66,
      84,
      162
    ],
    "rsiStack": [
      70.4,
      65.4,
      61.6,
      59.1,
      56.4,
      50.1
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 176.66,
    "change": -3.19,
    "mom": 33.3,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.7,
    "flow": 144,
    "perf": {
      "w1": -1.22,
      "m1": -4.63,
      "m3": 2.14
    },
    "returns": [
      -3.19,
      -3.28,
      -1.22,
      -1.89,
      -4.63,
      2.14
    ],
    "volumes": [
      89,
      83,
      65,
      86,
      101,
      78
    ],
    "rsiStack": [
      25.2,
      35.1,
      41.7,
      45.8,
      49.7,
      55.8
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 51.74,
    "change": -1.15,
    "mom": 59.1,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.2,
    "flow": 122,
    "perf": {
      "w1": 1.81,
      "m1": 1.79,
      "m3": 0.76
    },
    "returns": [
      -1.15,
      0.94,
      1.81,
      2.46,
      1.79,
      0.76
    ],
    "volumes": [
      108,
      111,
      94,
      98,
      108,
      70
    ],
    "rsiStack": [
      61.1,
      58.0,
      55.2,
      53.6,
      53.0,
      55.0
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 111.61,
    "change": -0.77,
    "mom": 45.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.5,
    "flow": 85,
    "perf": {
      "w1": -2.11,
      "m1": -4.83,
      "m3": -5.92
    },
    "returns": [
      -0.77,
      2.01,
      -2.11,
      -4.61,
      -4.83,
      -5.92
    ],
    "volumes": [
      72,
      95,
      84,
      91,
      106,
      68
    ],
    "rsiStack": [
      42.4,
      40.5,
      41.5,
      43.0,
      45.1,
      48.9
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 87.36,
    "change": 0.34,
    "mom": 67.4,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 62.1,
    "flow": 125,
    "perf": {
      "w1": 3.53,
      "m1": 5.16,
      "m3": 3.79
    },
    "returns": [
      0.34,
      3.84,
      3.53,
      4.66,
      5.16,
      3.79
    ],
    "volumes": [
      196,
      90,
      60,
      75,
      64,
      100
    ],
    "rsiStack": [
      76.4,
      67.0,
      62.1,
      59.3,
      57.6,
      59.5
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 465.0,
    "change": -5.38,
    "mom": 27.3,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution (Day 2)",
    "signal": "AVOID",
    "dist_streak": 2,
    "acc_streak": 0,
    "rsi": 33.1,
    "flow": 173,
    "perf": {
      "w1": -16.29,
      "m1": -27.43,
      "m3": -0.16
    },
    "returns": [
      -5.38,
      -11.77,
      -16.29,
      -16.26,
      -27.43,
      -0.16
    ],
    "volumes": [
      149,
      113,
      63,
      64,
      102,
      85
    ],
    "rsiStack": [
      13.9,
      25.3,
      33.1,
      38.5,
      43.6,
      49.3
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 27.49,
    "change": -1.26,
    "mom": 40.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 48.1,
    "flow": 68,
    "perf": {
      "w1": -2.62,
      "m1": 3.07,
      "m3": -2.21
    },
    "returns": [
      -1.26,
      -2.66,
      -2.62,
      -1.75,
      3.07,
      -2.21
    ],
    "volumes": [
      123,
      60,
      69,
      66,
      132,
      52
    ],
    "rsiStack": [
      32.5,
      43.1,
      48.1,
      50.1,
      51.1,
      51.9
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 45.58,
    "change": -1.5,
    "mom": 50.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.5,
    "flow": 63,
    "perf": {
      "w1": -0.3,
      "m1": 3.32,
      "m3": 0.08
    },
    "returns": [
      -1.5,
      -1.14,
      -0.3,
      2.46,
      3.32,
      0.08
    ],
    "volumes": [
      118,
      48,
      430,
      101,
      56,
      34
    ],
    "rsiStack": [
      52.3,
      57.2,
      57.5,
      56.3,
      54.9,
      54.8
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 44.55,
    "change": -1.74,
    "mom": 36.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.0,
    "flow": 16,
    "perf": {
      "w1": -1.78,
      "m1": -2.24,
      "m3": 8.37
    },
    "returns": [
      -1.74,
      -1.39,
      -1.78,
      -0.7,
      -2.24,
      8.37
    ],
    "volumes": [
      15,
      1295,
      20,
      23,
      40,
      67
    ],
    "rsiStack": [
      35.1,
      42.7,
      47.0,
      50.0,
      53.3,
      59.6
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.58,
    "change": -0.76,
    "mom": 53.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 57.0,
    "flow": 87,
    "perf": {
      "w1": -0.02,
      "m1": 2.37,
      "m3": -0.83
    },
    "returns": [
      -0.76,
      -0.02,
      -0.02,
      1.45,
      2.37,
      -0.83
    ],
    "volumes": [
      228,
      43,
      13,
      25,
      90,
      30
    ],
    "rsiStack": [
      55.7,
      57.8,
      57.0,
      55.5,
      54.5,
      57.1
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 104.14,
    "change": 1.01,
    "mom": 49.6,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.3,
    "flow": 166,
    "perf": {
      "w1": 0.15,
      "m1": 1.91,
      "m3": -1.66
    },
    "returns": [
      1.01,
      0.86,
      0.15,
      -0.92,
      1.91,
      -1.66
    ],
    "volumes": [
      110,
      92,
      80,
      88,
      66,
      87
    ],
    "rsiStack": [
      51.5,
      50.2,
      51.3,
      52.0,
      52.4,
      52.0
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 83.39,
    "change": -0.58,
    "mom": 54.3,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 63.9,
    "flow": 128,
    "perf": {
      "w1": 0.26,
      "m1": 5.29,
      "m3": 0.01
    },
    "returns": [
      -0.58,
      0.29,
      0.26,
      2.22,
      5.29,
      0.01
    ],
    "volumes": [
      120,
      49,
      78,
      64,
      160,
      46
    ],
    "rsiStack": [
      62.5,
      65.3,
      63.9,
      61.1,
      58.0,
      57.2
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 15.28,
    "change": 2.14,
    "mom": 59.7,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 66.2,
    "flow": 181,
    "perf": {
      "w1": 5.96,
      "m1": 9.93,
      "m3": 28.62
    },
    "returns": [
      2.14,
      6.33,
      5.96,
      7.76,
      9.93,
      28.62
    ],
    "volumes": [
      146,
      151,
      126,
      80,
      108,
      107
    ],
    "rsiStack": [
      84.4,
      74.2,
      66.2,
      61.5,
      58.1,
      54.8
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 89.4,
    "change": -1.0,
    "mom": 68.3,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 70.7,
    "flow": 106,
    "perf": {
      "w1": 8.85,
      "m1": 15.98,
      "m3": 17.99
    },
    "returns": [
      -1.0,
      8.18,
      8.85,
      15.15,
      15.98,
      17.99
    ],
    "volumes": [
      178,
      76,
      175,
      123,
      78,
      85
    ],
    "rsiStack": [
      80.9,
      76.2,
      70.7,
      66.3,
      62.1,
      58.9
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 24.96,
    "change": -1.42,
    "mom": 41.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.2,
    "flow": 30,
    "perf": {
      "w1": -4.0,
      "m1": 4.7,
      "m3": -1.89
    },
    "returns": [
      -1.42,
      -3.07,
      -4.0,
      -1.42,
      4.7,
      -1.89
    ],
    "volumes": [
      63,
      18,
      219,
      103,
      139,
      82
    ],
    "rsiStack": [
      35.1,
      45.8,
      50.2,
      51.5,
      51.2,
      47.8
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 25.15,
    "change": -0.4,
    "mom": 59.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 54.4,
    "flow": 66,
    "perf": {
      "w1": 1.33,
      "m1": 4.44,
      "m3": -4.48
    },
    "returns": [
      -0.4,
      2.49,
      1.33,
      1.33,
      4.44,
      -4.48
    ],
    "volumes": [
      120,
      68,
      71,
      78,
      85,
      125
    ],
    "rsiStack": [
      61.9,
      58.0,
      54.4,
      51.7,
      50.1,
      51.6
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.52,
    "change": -0.31,
    "mom": 48.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.3,
    "flow": 106,
    "perf": {
      "w1": -1.65,
      "m1": -1.65,
      "m3": -11.11
    },
    "returns": [
      -0.31,
      -0.83,
      -1.65,
      -0.63,
      -1.65,
      -11.11
    ],
    "volumes": [
      81,
      62,
      52,
      80,
      83,
      133
    ],
    "rsiStack": [
      34.1,
      40.3,
      41.3,
      40.7,
      38.5,
      31.8
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.45,
    "change": -0.35,
    "mom": 41.2,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.7,
    "flow": 72,
    "perf": {
      "w1": -2.65,
      "m1": -0.94,
      "m3": -13.6
    },
    "returns": [
      -0.35,
      -0.88,
      -2.65,
      -2.42,
      -0.94,
      -13.6
    ],
    "volumes": [
      76,
      58,
      86,
      72,
      61,
      103
    ],
    "rsiStack": [
      27.3,
      36.2,
      38.7,
      38.9,
      37.2,
      30.6
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 177.45,
    "change": -7.71,
    "mom": 30.5,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.4,
    "flow": 109,
    "perf": {
      "w1": -22.26,
      "m1": -34.75,
      "m3": -3.76
    },
    "returns": [
      -7.71,
      -16.75,
      -22.26,
      -21.74,
      -34.75,
      -3.76
    ],
    "volumes": [
      106,
      73,
      48,
      58,
      61,
      69
    ],
    "rsiStack": [
      18.9,
      28.6,
      35.4,
      40.0,
      44.0,
      45.9
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 163.4,
    "change": -6.34,
    "mom": 35.1,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 31.9,
    "flow": 95,
    "perf": {
      "w1": -22.56,
      "m1": -45.15,
      "m3": -0.94
    },
    "returns": [
      -6.34,
      -15.87,
      -22.56,
      -20.78,
      -45.15,
      -0.94
    ],
    "volumes": [
      112,
      73,
      58,
      78,
      59,
      52
    ],
    "rsiStack": [
      14.9,
      24.5,
      31.9,
      37.4,
      42.5,
      46.9
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 70.59,
    "chg": 1.63,
    "chgW": 3.05,
    "chgM": 12.14,
    "chgYTD": 14.37,
    "marketCap": "$33.9B",
    "pe": "14.4x",
    "evEbitda": "8.4x",
    "de": "0.6x",
    "drawdown": "-17.3%"
  },
  "MOS": {
    "price": 22.62,
    "chg": -1.99,
    "chgW": -0.7,
    "chgM": 6.75,
    "chgYTD": -6.1,
    "marketCap": "$7.2B",
    "pe": "161.6x",
    "evEbitda": "6.5x",
    "de": "0.5x",
    "drawdown": "-39.0%"
  },
  "CF": {
    "price": 127.35,
    "chg": 3.6,
    "chgW": 0.0,
    "chgM": 17.63,
    "chgYTD": 64.66,
    "marketCap": "$19.6B",
    "pe": "11.5x",
    "evEbitda": "7.0x",
    "de": "0.4x",
    "drawdown": "-10.3%"
  },
  "ICL": {
    "price": 5.1,
    "chg": -2.67,
    "chgW": -4.14,
    "chgM": 2.41,
    "chgYTD": -10.68,
    "marketCap": "–",
    "pe": "24.3x",
    "evEbitda": "7.5x",
    "de": "0.5x",
    "drawdown": "-26.8%"
  },
  "FMC": {
    "price": 10.01,
    "chg": -8.5,
    "chgW": -15.03,
    "chgM": -12.96,
    "chgYTD": -27.83,
    "marketCap": "$1.3B",
    "pe": "5.0x",
    "evEbitda": "16.7x",
    "de": "2.5x",
    "drawdown": "-76.6%"
  },
  "CTVA": {
    "price": 90.51,
    "chg": 1.75,
    "chgW": 2.24,
    "chgM": 6.87,
    "chgYTD": 35.03,
    "marketCap": "$60.5B",
    "pe": "48.9x",
    "evEbitda": "15.0x",
    "de": "0.1x",
    "drawdown": "-0.5%"
  },
  "ADM": {
    "price": 80.38,
    "chg": -3.37,
    "chgW": -7.95,
    "chgM": 5.21,
    "chgYTD": 39.82,
    "marketCap": "–",
    "pe": "35.9x",
    "evEbitda": "19.9x",
    "de": "0.5x",
    "drawdown": "-9.1%"
  },
  "BG": {
    "price": 107.78,
    "chg": -8.17,
    "chgW": -13.0,
    "chgM": 0.98,
    "chgYTD": 20.99,
    "marketCap": "–",
    "pe": "28.4x",
    "evEbitda": "17.4x",
    "de": "0.9x",
    "drawdown": "-20.1%"
  },
  "INGR": {
    "price": 101.74,
    "chg": -0.94,
    "chgW": -0.69,
    "chgM": 7.42,
    "chgYTD": -7.73,
    "marketCap": "$6.4B",
    "pe": "9.8x",
    "evEbitda": "6.2x",
    "de": "0.4x",
    "drawdown": "-24.5%"
  },
  "FPI": {
    "price": 9.52,
    "chg": -0.31,
    "chgW": -1.65,
    "chgM": -1.65,
    "chgYTD": -1.75,
    "marketCap": "–",
    "pe": "16.1x",
    "evEbitda": "24.0x",
    "de": "0.5x",
    "drawdown": "-28.0%"
  },
  "LAND": {
    "price": 8.45,
    "chg": -0.35,
    "chgW": -2.65,
    "chgM": -0.94,
    "chgYTD": -7.65,
    "marketCap": "$365M",
    "pe": "-17.7x",
    "evEbitda": "12.3x",
    "de": "0.7x",
    "drawdown": "-35.0%"
  },
  "DE": {
    "price": 610.95,
    "chg": -4.52,
    "chgW": 0.6,
    "chgM": -3.69,
    "chgYTD": 31.23,
    "marketCap": "$164.9B",
    "pe": "34.6x",
    "evEbitda": "23.7x",
    "de": "3.8x",
    "drawdown": "-9.4%"
  },
  "AGCO": {
    "price": 116.17,
    "chg": -6.09,
    "chgW": -0.95,
    "chgM": -2.95,
    "chgYTD": 11.36,
    "marketCap": "$8.4B",
    "pe": "11.2x",
    "evEbitda": "10.4x",
    "de": "0.6x",
    "drawdown": "-19.2%"
  },
  "CNH": {
    "price": 10.76,
    "chg": -5.94,
    "chgW": 0.56,
    "chgM": -4.19,
    "chgYTD": 16.7,
    "marketCap": "$13.3B",
    "pe": "33.6x",
    "evEbitda": "35.4x",
    "de": "3.3x",
    "drawdown": "-19.2%"
  },
  "XYL": {
    "price": 122.13,
    "chg": -2.27,
    "chgW": 5.16,
    "chgM": 3.32,
    "chgYTD": -10.32,
    "marketCap": "$28.5B",
    "pe": "30.4x",
    "evEbitda": "15.4x",
    "de": "0.3x",
    "drawdown": "-20.8%"
  },
  "VMI": {
    "price": 456.29,
    "chg": -5.07,
    "chgW": -6.4,
    "chgM": -21.0,
    "chgYTD": 13.41,
    "marketCap": "$8.9B",
    "pe": "17.8x",
    "evEbitda": "14.9x",
    "de": "0.5x",
    "drawdown": "-22.1%"
  },
  "LNN": {
    "price": 112.43,
    "chg": -2.35,
    "chgW": -1.2,
    "chgM": -9.18,
    "chgYTD": -4.62,
    "marketCap": "$1.1B",
    "pe": "21.6x",
    "evEbitda": "13.7x",
    "de": "0.3x",
    "drawdown": "-24.0%"
  },
  "MWA": {
    "price": 25.17,
    "chg": -2.86,
    "chgW": 1.12,
    "chgM": -2.56,
    "chgYTD": 5.67,
    "marketCap": "–",
    "pe": "19.1x",
    "evEbitda": "12.0x",
    "de": "0.4x",
    "drawdown": "-18.8%"
  },
  "WTS": {
    "price": 336.15,
    "chg": -3.01,
    "chgW": -1.58,
    "chgM": -14.13,
    "chgYTD": 21.78,
    "marketCap": "$11.2B",
    "pe": "30.8x",
    "evEbitda": "20.6x",
    "de": "0.1x",
    "drawdown": "-14.8%"
  },
  "TSN": {
    "price": 61.04,
    "chg": -0.23,
    "chgW": 6.98,
    "chgM": 6.62,
    "chgYTD": 4.13,
    "marketCap": "–",
    "pe": "48.1x",
    "evEbitda": "10.8x",
    "de": "0.4x",
    "drawdown": "-12.1%"
  },
  "PPC": {
    "price": 29.95,
    "chg": 0.47,
    "chgW": 5.35,
    "chgM": 6.55,
    "chgYTD": -23.19,
    "marketCap": "$7.1B",
    "pe": "8.0x",
    "evEbitda": "4.9x",
    "de": "0.9x",
    "drawdown": "-40.8%"
  },
  "HRL": {
    "price": 25.8,
    "chg": 0.94,
    "chgW": 2.34,
    "chgM": 3.95,
    "chgYTD": 8.86,
    "marketCap": "–",
    "pe": "30.4x",
    "evEbitda": "11.0x",
    "de": "0.0x",
    "drawdown": "-12.1%"
  },
  "CAG": {
    "price": 15.5,
    "chg": 0.45,
    "chgW": 4.52,
    "chgM": 15.16,
    "chgYTD": -10.46,
    "marketCap": "–",
    "pe": "10.0x",
    "evEbitda": "8.4x",
    "de": "1.2x",
    "drawdown": "-23.7%"
  },
  "CALM": {
    "price": 93.5,
    "chg": 0.31,
    "chgW": 6.42,
    "chgM": 16.06,
    "chgYTD": 17.51,
    "marketCap": "$4.4B",
    "pe": "6.5x",
    "evEbitda": "7.4x",
    "de": "–",
    "drawdown": "-20.4%"
  },
  "DBA": {
    "price": 27.49,
    "chg": -1.26,
    "chgW": -2.62,
    "chgM": 3.07,
    "chgYTD": 7.72,
    "marketCap": "–",
    "pe": "11.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-4.7%"
  },
  "MOO": {
    "price": 83.39,
    "chg": -0.58,
    "chgW": 0.26,
    "chgM": 5.29,
    "chgYTD": 14.56,
    "marketCap": "–",
    "pe": "–",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-3.7%"
  },
  "VEGI": {
    "price": 45.58,
    "chg": -1.5,
    "chgW": -0.3,
    "chgM": 3.32,
    "chgYTD": 18.17,
    "marketCap": "–",
    "pe": "21.3x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-3.6%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "49.0x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
