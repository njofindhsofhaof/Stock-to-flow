window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-08-20 22:54:59",
  "sections": {
    "Index": {
      "risk": "Neutral",
      "leader": "SP500",
      "watch": 0
    },
    "Commodity": {
      "risk": "Risk On",
      "leader": "SLV",
      "watch": 6
    },
    "Crypto": {
      "risk": "Risk Off",
      "leader": "CRCL",
      "watch": 4
    },
    "ETF": {
      "risk": "Risk On",
      "leader": "XLE",
      "watch": 5
    },
    "Stock": {
      "risk": "Risk On",
      "leader": "MRVL",
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
    "price": 7641.16,
    "change": -0.87,
    "mom": 36.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.3,
    "flow": 54,
    "perf": {
      "w1": -2.02,
      "m1": 2.66,
      "m3": 2.8
    },
    "returns": [
      -0.87,
      -1.34,
      -2.02,
      -0.89,
      2.66,
      2.8
    ],
    "volumes": [
      102,
      86,
      93,
      91,
      103,
      94
    ],
    "rsiStack": [
      31.8,
      46.0,
      51.3,
      53.6,
      55.8,
      60.2
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 52759.21,
    "change": -1.32,
    "mom": 27.5,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.4,
    "flow": 95,
    "perf": {
      "w1": -2.01,
      "m1": 1.77,
      "m3": 5.5
    },
    "returns": [
      -1.32,
      -1.31,
      -2.01,
      -2.09,
      1.77,
      5.5
    ],
    "volumes": [
      97,
      92,
      86,
      78,
      85,
      72
    ],
    "rsiStack": [
      22.9,
      38.8,
      46.4,
      50.5,
      54.2,
      59.6
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 6471.17,
    "change": -5.8,
    "mom": 51.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.2,
    "flow": 88,
    "perf": {
      "w1": 1.98,
      "m1": -11.16,
      "m3": -13.9
    },
    "returns": [
      -5.8,
      -5.02,
      1.98,
      1.76,
      -11.16,
      -13.9
    ],
    "volumes": [
      114,
      115,
      88,
      75,
      74,
      88
    ],
    "rsiStack": [
      42.6,
      45.7,
      45.2,
      45.2,
      46.3,
      48.6
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
    "rsi": 46.0,
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
      99,
      80,
      95,
      94,
      118,
      93
    ],
    "rsiStack": [
      33.6,
      43.1,
      46.0,
      47.7,
      49.8,
      53.4
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 415.26,
    "change": 0.34,
    "mom": 63.9,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 2)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 2,
    "rsi": 67.6,
    "flow": 152,
    "perf": {
      "w1": 4.09,
      "m1": 11.77,
      "m3": 0.3
    },
    "returns": [
      0.34,
      2.41,
      4.09,
      6.57,
      11.77,
      0.3
    ],
    "volumes": [
      196,
      117,
      110,
      96,
      154,
      149
    ],
    "rsiStack": [
      74.9,
      71.9,
      67.6,
      62.9,
      56.6,
      46.9
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 61.66,
    "change": 2.75,
    "mom": 64.4,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 64.7,
    "flow": 154,
    "perf": {
      "w1": 6.02,
      "m1": 18.44,
      "m3": -11.56
    },
    "returns": [
      2.75,
      3.51,
      6.02,
      10.4,
      18.44,
      -11.56
    ],
    "volumes": [
      141,
      84,
      78,
      88,
      92,
      88
    ],
    "rsiStack": [
      73.4,
      69.6,
      64.7,
      59.5,
      53.5,
      45.9
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 43.84,
    "change": -2.6,
    "mom": 48.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.3,
    "flow": 97,
    "perf": {
      "w1": -3.12,
      "m1": 6.59,
      "m3": -13.8
    },
    "returns": [
      -2.6,
      -3.12,
      -3.12,
      1.48,
      6.59,
      -13.8
    ],
    "volumes": [
      75,
      63,
      99,
      85,
      73,
      105
    ],
    "rsiStack": [
      44.8,
      51.8,
      52.3,
      51.0,
      50.1,
      53.4
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 86.29,
    "change": 0.54,
    "mom": 61.2,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.6,
    "flow": 0,
    "perf": {
      "w1": 6.2,
      "m1": -6.4,
      "m3": -8.09
    },
    "returns": [
      0.54,
      2.12,
      6.2,
      11.64,
      -6.4,
      -8.09
    ],
    "volumes": [
      34,
      62,
      88,
      102,
      86,
      159
    ],
    "rsiStack": [
      74.9,
      63.6,
      58.6,
      55.4,
      52.7,
      51.3
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 125.7,
    "change": 5.61,
    "mom": 62.7,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.9,
    "flow": 145,
    "perf": {
      "w1": 7.39,
      "m1": 2.23,
      "m3": 3.3
    },
    "returns": [
      5.61,
      6.72,
      7.39,
      7.68,
      2.23,
      3.3
    ],
    "volumes": [
      105,
      88,
      88,
      134,
      138,
      91
    ],
    "rsiStack": [
      74.2,
      64.0,
      59.9,
      57.6,
      55.7,
      55.1
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 38.28,
    "change": 3.49,
    "mom": 68.5,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 64.1,
    "flow": 175,
    "perf": {
      "w1": 6.39,
      "m1": 12.72,
      "m3": -5.01
    },
    "returns": [
      3.49,
      4.59,
      6.39,
      9.62,
      12.72,
      -5.01
    ],
    "volumes": [
      158,
      72,
      71,
      87,
      104,
      45
    ],
    "rsiStack": [
      78.5,
      69.9,
      64.1,
      59.7,
      56.4,
      57.2
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 23.35,
    "change": 5.04,
    "mom": 59.4,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.4,
    "flow": 159,
    "perf": {
      "w1": 7.21,
      "m1": 4.8,
      "m3": 3.23
    },
    "returns": [
      5.04,
      9.99,
      7.21,
      -0.47,
      4.8,
      3.23
    ],
    "volumes": [
      115,
      120,
      106,
      80,
      107,
      75
    ],
    "rsiStack": [
      70.6,
      61.3,
      57.4,
      55.1,
      52.4,
      48.3
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 73.12,
    "change": 3.72,
    "mom": 70.6,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 68.3,
    "flow": 117,
    "perf": {
      "w1": 8.37,
      "m1": 6.74,
      "m3": 4.1
    },
    "returns": [
      3.72,
      7.07,
      8.37,
      9.53,
      6.74,
      4.1
    ],
    "volumes": [
      134,
      77,
      93,
      147,
      130,
      55
    ],
    "rsiStack": [
      89.0,
      76.0,
      68.3,
      63.2,
      58.9,
      57.5
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 72825.95,
    "change": 5.14,
    "mom": 78.7,
    "phase": "Exhaustion",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 80.1,
    "flow": 255,
    "perf": {
      "w1": 15.55,
      "m1": 15.94,
      "m3": 15.16
    },
    "returns": [
      5.14,
      12.9,
      15.55,
      13.95,
      15.94,
      15.16
    ],
    "volumes": [
      225,
      108,
      48,
      90,
      103,
      122
    ],
    "rsiStack": [
      95.1,
      87.9,
      80.1,
      73.0,
      65.2,
      57.9
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 172.35,
    "change": 7.58,
    "mom": 75.4,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 60.7,
    "flow": 205,
    "perf": {
      "w1": 11.99,
      "m1": 6.94,
      "m3": -4.26
    },
    "returns": [
      7.58,
      14.48,
      11.99,
      18.53,
      6.94,
      -4.26
    ],
    "volumes": [
      213,
      74,
      96,
      83,
      76,
      76
    ],
    "rsiStack": [
      78.6,
      67.6,
      60.7,
      56.6,
      53.5,
      52.6
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 83.66,
    "change": 6.45,
    "mom": 72.4,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 66.2,
    "flow": 182,
    "perf": {
      "w1": 10.98,
      "m1": 34.54,
      "m3": -19.69
    },
    "returns": [
      6.45,
      12.16,
      10.98,
      32.21,
      34.54,
      -19.69
    ],
    "volumes": [
      201,
      86,
      93,
      122,
      93,
      68
    ],
    "rsiStack": [
      80.0,
      73.5,
      66.2,
      60.0,
      54.7,
      51.9
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 112.39,
    "change": 7.81,
    "mom": 71.5,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 61.8,
    "flow": 244,
    "perf": {
      "w1": 15.75,
      "m1": 20.04,
      "m3": -29.73
    },
    "returns": [
      7.81,
      15.06,
      15.75,
      16.05,
      20.04,
      -29.73
    ],
    "volumes": [
      278,
      127,
      118,
      80,
      68,
      73
    ],
    "rsiStack": [
      76.6,
      68.6,
      61.8,
      56.4,
      51.9,
      50.0
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 63.75,
    "change": 0.27,
    "mom": 64.4,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 72.6,
    "flow": 90,
    "perf": {
      "w1": 4.41,
      "m1": 7.36,
      "m3": 10.2
    },
    "returns": [
      0.27,
      1.87,
      4.41,
      9.61,
      7.36,
      10.2
    ],
    "volumes": [
      92,
      85,
      73,
      77,
      84,
      121
    ],
    "rsiStack": [
      86.4,
      78.3,
      72.6,
      68.2,
      63.6,
      59.2
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 183.1,
    "change": -0.29,
    "mom": 39.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.2,
    "flow": 62,
    "perf": {
      "w1": -4.02,
      "m1": 2.61,
      "m3": -1.1
    },
    "returns": [
      -0.29,
      -3.79,
      -4.02,
      -1.2,
      2.61,
      -1.1
    ],
    "volumes": [
      89,
      76,
      57,
      65,
      74,
      75
    ],
    "rsiStack": [
      32.4,
      45.5,
      49.2,
      50.6,
      52.4,
      56.2
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 43.77,
    "change": -0.57,
    "mom": 46.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.7,
    "flow": 84,
    "perf": {
      "w1": -0.61,
      "m1": -5.24,
      "m3": -3.44
    },
    "returns": [
      -0.57,
      -0.93,
      -0.61,
      0.9,
      -5.24,
      -3.44
    ],
    "volumes": [
      79,
      82,
      88,
      97,
      139,
      75
    ],
    "rsiStack": [
      37.3,
      40.2,
      41.7,
      43.4,
      46.0,
      52.3
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 172.39,
    "change": -1.87,
    "mom": 53.6,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 65.2,
    "flow": 99,
    "perf": {
      "w1": 2.38,
      "m1": 6.78,
      "m3": 16.08
    },
    "returns": [
      -1.87,
      3.2,
      2.38,
      4.83,
      6.78,
      16.08
    ],
    "volumes": [
      173,
      81,
      74,
      70,
      95,
      62
    ],
    "rsiStack": [
      64.4,
      65.8,
      65.2,
      64.1,
      62.3,
      58.2
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 110.68,
    "change": -0.57,
    "mom": 48.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.9,
    "flow": 65,
    "perf": {
      "w1": -1.66,
      "m1": 1.36,
      "m3": -4.67
    },
    "returns": [
      -0.57,
      -0.13,
      -1.66,
      -0.45,
      1.36,
      -4.67
    ],
    "volumes": [
      61,
      64,
      92,
      56,
      61,
      57
    ],
    "rsiStack": [
      44.8,
      48.9,
      49.9,
      49.7,
      49.7,
      51.9
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 56.95,
    "change": -0.92,
    "mom": 25.0,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.3,
    "flow": 101,
    "perf": {
      "w1": -2.25,
      "m1": 2.01,
      "m3": 9.84
    },
    "returns": [
      -0.92,
      -1.09,
      -2.25,
      -1.49,
      2.01,
      9.84
    ],
    "volumes": [
      118,
      154,
      77,
      62,
      83,
      72
    ],
    "rsiStack": [
      27.2,
      41.0,
      49.3,
      54.0,
      57.3,
      60.6
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 45.08,
    "change": 0.2,
    "mom": 53.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.0,
    "flow": 79,
    "perf": {
      "w1": -0.09,
      "m1": 0.29,
      "m3": 1.3
    },
    "returns": [
      0.2,
      0.56,
      -0.09,
      0.6,
      0.29,
      1.3
    ],
    "volumes": [
      82,
      157,
      110,
      109,
      102,
      95
    ],
    "rsiStack": [
      57.3,
      53.0,
      52.0,
      52.0,
      52.4,
      53.9
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 179.77,
    "change": -1.2,
    "mom": 25.8,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "WATCH",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 41.9,
    "flow": 104,
    "perf": {
      "w1": -3.24,
      "m1": 0.93,
      "m3": 5.29
    },
    "returns": [
      -1.2,
      -3.52,
      -3.24,
      -2.7,
      0.93,
      5.29
    ],
    "volumes": [
      133,
      85,
      75,
      74,
      80,
      86
    ],
    "rsiStack": [
      17.9,
      33.7,
      41.9,
      46.4,
      50.4,
      56.4
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 52.42,
    "change": -0.19,
    "mom": 49.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.9,
    "flow": 86,
    "perf": {
      "w1": 0.21,
      "m1": 3.15,
      "m3": 4.8
    },
    "returns": [
      -0.19,
      0.34,
      0.21,
      0.48,
      3.15,
      4.8
    ],
    "volumes": [
      99,
      70,
      93,
      103,
      83,
      93
    ],
    "rsiStack": [
      52.3,
      53.6,
      53.9,
      53.6,
      53.6,
      55.5
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 116.68,
    "change": -1.61,
    "mom": 44.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.7,
    "flow": 78,
    "perf": {
      "w1": -1.49,
      "m1": 1.58,
      "m3": -1.7
    },
    "returns": [
      -1.61,
      -0.06,
      -1.49,
      -1.2,
      1.58,
      -1.7
    ],
    "volumes": [
      113,
      99,
      63,
      52,
      59,
      77
    ],
    "rsiStack": [
      42.3,
      47.8,
      49.7,
      50.3,
      51.5,
      56.2
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 85.32,
    "change": -1.41,
    "mom": 47.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.8,
    "flow": 106,
    "perf": {
      "w1": -0.79,
      "m1": 2.54,
      "m3": 2.02
    },
    "returns": [
      -1.41,
      0.76,
      -0.79,
      0.25,
      2.54,
      2.02
    ],
    "volumes": [
      104,
      101,
      97,
      68,
      75,
      96
    ],
    "rsiStack": [
      46.8,
      49.6,
      50.8,
      51.3,
      52.0,
      55.0
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 522.35,
    "change": 0.52,
    "mom": 42.9,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.5,
    "flow": 64,
    "perf": {
      "w1": -5.15,
      "m1": -5.24,
      "m3": -8.37
    },
    "returns": [
      0.52,
      -6.58,
      -5.15,
      -1.91,
      -5.24,
      -8.37
    ],
    "volumes": [
      85,
      59,
      57,
      67,
      71,
      68
    ],
    "rsiStack": [
      36.3,
      43.4,
      45.5,
      46.9,
      48.9,
      52.2
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 28.38,
    "change": 0.32,
    "mom": 62.2,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.0,
    "flow": 167,
    "perf": {
      "w1": 2.75,
      "m1": 1.28,
      "m3": 1.47
    },
    "returns": [
      0.32,
      0.85,
      2.75,
      3.46,
      1.28,
      1.47
    ],
    "volumes": [
      94,
      116,
      62,
      56,
      51,
      66
    ],
    "rsiStack": [
      73.6,
      65.8,
      62.0,
      59.8,
      58.0,
      57.3
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 45.7,
    "change": 3.11,
    "mom": 66.9,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.2,
    "flow": 203,
    "perf": {
      "w1": 2.56,
      "m1": 2.26,
      "m3": 2.77
    },
    "returns": [
      3.11,
      3.14,
      2.56,
      3.0,
      2.26,
      2.77
    ],
    "volumes": [
      29,
      96,
      37,
      62,
      46,
      101
    ],
    "rsiStack": [
      79.9,
      67.1,
      61.2,
      58.0,
      55.9,
      56.6
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 44.03,
    "change": -0.81,
    "mom": 31.8,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.5,
    "flow": 18,
    "perf": {
      "w1": -2.59,
      "m1": -1.14,
      "m3": 5.59
    },
    "returns": [
      -0.81,
      -2.23,
      -2.59,
      -1.73,
      -1.14,
      5.59
    ],
    "volumes": [
      4,
      15,
      24,
      17,
      15,
      23
    ],
    "rsiStack": [
      25.0,
      35.5,
      41.5,
      45.7,
      50.6,
      58.9
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.74,
    "change": 1.46,
    "mom": 63.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.3,
    "flow": 99,
    "perf": {
      "w1": 2.62,
      "m1": 2.33,
      "m3": 1.22
    },
    "returns": [
      1.46,
      2.76,
      2.62,
      1.29,
      2.33,
      1.22
    ],
    "volumes": [
      66,
      38,
      141,
      32,
      87,
      25
    ],
    "rsiStack": [
      71.4,
      62.1,
      58.3,
      56.3,
      54.9,
      56.3
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 103.99,
    "change": -0.94,
    "mom": 38.8,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.2,
    "flow": 98,
    "perf": {
      "w1": -4.2,
      "m1": 0.76,
      "m3": 2.53
    },
    "returns": [
      -0.94,
      -3.64,
      -4.2,
      -1.11,
      0.76,
      2.53
    ],
    "volumes": [
      89,
      78,
      66,
      63,
      76,
      100
    ],
    "rsiStack": [
      27.0,
      39.5,
      45.2,
      48.2,
      51.2,
      57.1
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 83.51,
    "change": 1.68,
    "mom": 64.8,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.8,
    "flow": 306,
    "perf": {
      "w1": 3.15,
      "m1": 1.83,
      "m3": 3.04
    },
    "returns": [
      1.68,
      2.86,
      3.15,
      2.49,
      1.83,
      3.04
    ],
    "volumes": [
      92,
      70,
      87,
      105,
      79,
      64
    ],
    "rsiStack": [
      82.2,
      69.6,
      63.8,
      60.5,
      58.1,
      59.1
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 13.99,
    "change": -3.52,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.3,
    "flow": 83,
    "perf": {
      "w1": 0.72,
      "m1": -1.13,
      "m3": -8.68
    },
    "returns": [
      -3.52,
      -0.43,
      0.72,
      1.45,
      -1.13,
      -8.68
    ],
    "volumes": [
      100,
      60,
      50,
      67,
      107,
      131
    ],
    "rsiStack": [
      45.0,
      46.2,
      47.3,
      48.5,
      51.0,
      58.2
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 86.15,
    "change": 1.4,
    "mom": 47.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.9,
    "flow": 86,
    "perf": {
      "w1": -0.28,
      "m1": 6.79,
      "m3": 7.97
    },
    "returns": [
      1.4,
      2.11,
      -0.28,
      -0.91,
      6.79,
      7.97
    ],
    "volumes": [
      79,
      70,
      50,
      66,
      74,
      127
    ],
    "rsiStack": [
      52.6,
      52.1,
      53.9,
      54.8,
      55.6,
      58.9
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 26.89,
    "change": 0.13,
    "mom": 66.3,
    "phase": "Exhaustion",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 76.1,
    "flow": 117,
    "perf": {
      "w1": 4.32,
      "m1": 5.51,
      "m3": 5.35
    },
    "returns": [
      0.13,
      1.99,
      4.32,
      7.36,
      5.51,
      5.35
    ],
    "volumes": [
      92,
      471,
      83,
      36,
      59,
      103
    ],
    "rsiStack": [
      92.2,
      83.0,
      76.1,
      70.9,
      65.8,
      61.7
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 27.79,
    "change": -1.59,
    "mom": 58.3,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 68.4,
    "flow": 72,
    "perf": {
      "w1": 3.69,
      "m1": 11.12,
      "m3": 7.5
    },
    "returns": [
      -1.59,
      3.42,
      3.69,
      6.07,
      11.12,
      7.5
    ],
    "volumes": [
      147,
      75,
      87,
      90,
      125,
      70
    ],
    "rsiStack": [
      69.7,
      70.5,
      68.4,
      65.3,
      61.4,
      58.1
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 10.12,
    "change": 1.1,
    "mom": 68.4,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.6,
    "flow": 103,
    "perf": {
      "w1": 3.79,
      "m1": 5.86,
      "m3": -3.34
    },
    "returns": [
      1.1,
      3.48,
      3.79,
      1.81,
      5.86,
      -3.34
    ],
    "volumes": [
      101,
      79,
      68,
      78,
      139,
      62
    ],
    "rsiStack": [
      76.3,
      68.6,
      62.6,
      57.9,
      54.9,
      59.3
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.69,
    "change": 0.93,
    "mom": 74.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.6,
    "flow": 105,
    "perf": {
      "w1": 4.83,
      "m1": -0.11,
      "m3": -7.94
    },
    "returns": [
      0.93,
      5.46,
      4.83,
      4.2,
      -0.11,
      -7.94
    ],
    "volumes": [
      106,
      111,
      132,
      91,
      90,
      72
    ],
    "rsiStack": [
      81.0,
      68.1,
      59.6,
      54.0,
      50.4,
      53.1
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 231.35,
    "change": -1.48,
    "mom": 41.1,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.9,
    "flow": 63,
    "perf": {
      "w1": -13.02,
      "m1": -2.18,
      "m3": 4.38
    },
    "returns": [
      -1.48,
      -18.2,
      -13.02,
      0.4,
      -2.18,
      4.38
    ],
    "volumes": [
      94,
      114,
      82,
      45,
      65,
      55
    ],
    "rsiStack": [
      36.9,
      45.2,
      47.9,
      49.2,
      50.3,
      50.7
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 251.01,
    "change": 5.79,
    "mom": 57.7,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 61.4,
    "flow": 122,
    "perf": {
      "w1": 12.98,
      "m1": 19.92,
      "m3": 20.53
    },
    "returns": [
      5.79,
      7.12,
      12.98,
      19.22,
      19.92,
      20.53
    ],
    "volumes": [
      190,
      97,
      85,
      66,
      71,
      58
    ],
    "rsiStack": [
      74.5,
      67.6,
      61.4,
      57.7,
      55.7,
      55.6
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 73.12,
    "chg": 3.72,
    "chgW": 8.37,
    "chgM": 6.74,
    "chgYTD": 18.47,
    "marketCap": "$34.9B",
    "pe": "14.8x",
    "evEbitda": "8.0x",
    "de": "0.5x",
    "drawdown": "-14.3%"
  },
  "MOS": {
    "price": 23.35,
    "chg": 5.04,
    "chgW": 7.21,
    "chgM": 4.8,
    "chgYTD": -3.07,
    "marketCap": "$7.4B",
    "pe": "13.9x",
    "evEbitda": "7.6x",
    "de": "0.5x",
    "drawdown": "-36.9%"
  },
  "CF": {
    "price": 125.7,
    "chg": 5.61,
    "chgW": 7.39,
    "chgM": 2.23,
    "chgYTD": 62.53,
    "marketCap": "$19.0B",
    "pe": "9.3x",
    "evEbitda": "5.8x",
    "de": "0.4x",
    "drawdown": "-11.5%"
  },
  "ICL": {
    "price": 5.52,
    "chg": 0.36,
    "chgW": 2.41,
    "chgM": 10.4,
    "chgYTD": -3.33,
    "marketCap": "–",
    "pe": "23.0x",
    "evEbitda": "7.3x",
    "de": "0.5x",
    "drawdown": "-20.8%"
  },
  "FMC": {
    "price": 10.88,
    "chg": 0.65,
    "chgW": 7.09,
    "chgM": -6.93,
    "chgYTD": -21.56,
    "marketCap": "$1.4B",
    "pe": "6.7x",
    "evEbitda": "19.7x",
    "de": "2.7x",
    "drawdown": "-73.4%"
  },
  "CTVA": {
    "price": 79.46,
    "chg": 1.13,
    "chgW": 4.84,
    "chgM": -10.5,
    "chgYTD": 18.54,
    "marketCap": "$53.0B",
    "pe": "48.2x",
    "evEbitda": "12.9x",
    "de": "0.2x",
    "drawdown": "-12.7%"
  },
  "ADM": {
    "price": 81.7,
    "chg": 1.16,
    "chgW": 1.93,
    "chgM": -5.39,
    "chgYTD": 42.11,
    "marketCap": "$39.4B",
    "pe": "22.3x",
    "evEbitda": "15.8x",
    "de": "0.4x",
    "drawdown": "-7.6%"
  },
  "BG": {
    "price": 116.57,
    "chg": 2.25,
    "chgW": 3.41,
    "chgM": -3.25,
    "chgYTD": 30.86,
    "marketCap": "$22.4B",
    "pe": "25.1x",
    "evEbitda": "12.7x",
    "de": "1.0x",
    "drawdown": "-13.6%"
  },
  "INGR": {
    "price": 107.02,
    "chg": -0.12,
    "chgW": 1.83,
    "chgM": 4.39,
    "chgYTD": -2.94,
    "marketCap": "$6.7B",
    "pe": "11.6x",
    "evEbitda": "6.6x",
    "de": "0.4x",
    "drawdown": "-18.0%"
  },
  "FPI": {
    "price": 10.12,
    "chg": 1.1,
    "chgW": 3.79,
    "chgM": 5.86,
    "chgYTD": 4.44,
    "marketCap": "$445M",
    "pe": "19.8x",
    "evEbitda": "24.3x",
    "de": "0.5x",
    "drawdown": "-23.5%"
  },
  "LAND": {
    "price": 8.69,
    "chg": 0.93,
    "chgW": 4.83,
    "chgM": -0.11,
    "chgYTD": -5.03,
    "marketCap": "$375M",
    "pe": "-28.5x",
    "evEbitda": "12.4x",
    "de": "0.7x",
    "drawdown": "-33.2%"
  },
  "DE": {
    "price": 620.94,
    "chg": 6.94,
    "chgW": 1.4,
    "chgM": 5.96,
    "chgYTD": 33.37,
    "marketCap": "$167.6B",
    "pe": "35.2x",
    "evEbitda": "22.8x",
    "de": "3.8x",
    "drawdown": "-7.9%"
  },
  "AGCO": {
    "price": 104.02,
    "chg": 4.52,
    "chgW": 4.6,
    "chgM": -7.4,
    "chgYTD": -0.29,
    "marketCap": "$7.3B",
    "pe": "14.4x",
    "evEbitda": "9.5x",
    "de": "0.7x",
    "drawdown": "-27.7%"
  },
  "CNH": {
    "price": 10.95,
    "chg": 6.41,
    "chgW": 5.39,
    "chgM": 6.0,
    "chgYTD": 18.76,
    "marketCap": "$17.6B",
    "pe": "43.8x",
    "evEbitda": "35.6x",
    "de": "3.4x",
    "drawdown": "-17.7%"
  },
  "XYL": {
    "price": 113.44,
    "chg": -2.38,
    "chgW": -5.72,
    "chgM": -3.04,
    "chgYTD": -16.7,
    "marketCap": "$26.5B",
    "pe": "27.0x",
    "evEbitda": "14.7x",
    "de": "0.3x",
    "drawdown": "-26.5%"
  },
  "VMI": {
    "price": 481.67,
    "chg": -0.55,
    "chgW": -2.14,
    "chgM": -8.41,
    "chgYTD": 19.72,
    "marketCap": "$9.3B",
    "pe": "18.8x",
    "evEbitda": "14.9x",
    "de": "0.5x",
    "drawdown": "-17.8%"
  },
  "LNN": {
    "price": 116.14,
    "chg": 1.56,
    "chgW": 1.35,
    "chgM": 2.9,
    "chgYTD": -1.47,
    "marketCap": "$1.2B",
    "pe": "22.3x",
    "evEbitda": "13.6x",
    "de": "0.3x",
    "drawdown": "-21.5%"
  },
  "MWA": {
    "price": 25.13,
    "chg": -0.63,
    "chgW": -1.49,
    "chgM": 0.28,
    "chgYTD": 5.5,
    "marketCap": "$3.9B",
    "pe": "17.7x",
    "evEbitda": "10.9x",
    "de": "0.4x",
    "drawdown": "-18.9%"
  },
  "WTS": {
    "price": 369.9,
    "chg": -1.29,
    "chgW": -3.43,
    "chgM": 8.63,
    "chgYTD": 34.01,
    "marketCap": "$12.3B",
    "pe": "32.2x",
    "evEbitda": "21.3x",
    "de": "0.1x",
    "drawdown": "-6.2%"
  },
  "TSN": {
    "price": 58.4,
    "chg": -0.26,
    "chgW": 3.56,
    "chgM": 2.91,
    "chgYTD": -0.38,
    "marketCap": "$20.5B",
    "pe": "36.0x",
    "evEbitda": "10.1x",
    "de": "0.4x",
    "drawdown": "-15.9%"
  },
  "PPC": {
    "price": 31.24,
    "chg": -0.13,
    "chgW": 13.19,
    "chgM": 7.13,
    "chgYTD": -19.88,
    "marketCap": "$7.4B",
    "pe": "13.6x",
    "evEbitda": "5.7x",
    "de": "0.8x",
    "drawdown": "-34.5%"
  },
  "HRL": {
    "price": 24.08,
    "chg": -1.35,
    "chgW": -1.47,
    "chgM": -4.1,
    "chgYTD": 1.6,
    "marketCap": "–",
    "pe": "28.3x",
    "evEbitda": "10.5x",
    "de": "0.0x",
    "drawdown": "-18.0%"
  },
  "CAG": {
    "price": 16.27,
    "chg": 0.31,
    "chgW": 5.72,
    "chgM": 13.22,
    "chgYTD": -6.01,
    "marketCap": "$7.8B",
    "pe": "10.5x",
    "evEbitda": "8.6x",
    "de": "1.2x",
    "drawdown": "-19.9%"
  },
  "CALM": {
    "price": 82.43,
    "chg": 2.33,
    "chgW": -0.19,
    "chgM": -6.18,
    "chgYTD": 3.59,
    "marketCap": "$3.8B",
    "pe": "12.4x",
    "evEbitda": "6.1x",
    "de": "–",
    "drawdown": "-29.8%"
  },
  "DBA": {
    "price": 28.38,
    "chg": 0.32,
    "chgW": 2.75,
    "chgM": 1.28,
    "chgYTD": 11.21,
    "marketCap": "–",
    "pe": "12.0x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-1.6%"
  },
  "MOO": {
    "price": 83.51,
    "chg": 1.68,
    "chgW": 3.15,
    "chgM": 1.83,
    "chgYTD": 14.73,
    "marketCap": "–",
    "pe": "19.1x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-3.5%"
  },
  "VEGI": {
    "price": 45.7,
    "chg": 3.11,
    "chgW": 2.56,
    "chgM": 2.26,
    "chgYTD": 18.49,
    "marketCap": "–",
    "pe": "21.5x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-3.3%"
  },
  "USAG": {},
  "COCO.L": {
    "price": 9.73,
    "chg": 1.1,
    "chgW": 6.73,
    "chgM": 12.8,
    "chgYTD": -6.98,
    "marketCap": "–",
    "pe": "56.9x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-31.9%"
  }
};
