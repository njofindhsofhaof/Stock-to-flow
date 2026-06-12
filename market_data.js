window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-06-12 23:59:24",
  "sections": {
    "Index": {
      "risk": "Neutral",
      "leader": "DJI",
      "watch": 0
    },
    "Commodity": {
      "risk": "Neutral",
      "leader": "MOS",
      "watch": 1
    },
    "Crypto": {
      "risk": "Neutral",
      "leader": "BTC",
      "watch": 0
    },
    "ETF": {
      "risk": "Risk On",
      "leader": "SOX",
      "watch": 2
    },
    "Stock": {
      "risk": "Neutral",
      "leader": "MRVL",
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
    "price": 7431.46,
    "change": 0.5,
    "mom": 43.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.7,
    "flow": 54,
    "perf": {
      "w1": 0.65,
      "m1": -0.93,
      "m3": 12.18
    },
    "returns": [
      0.5,
      0.61,
      0.65,
      -1.96,
      -0.93,
      12.18
    ],
    "volumes": [
      100,
      106,
      98,
      100,
      140,
      98
    ],
    "rsiStack": [
      51.1,
      50.0,
      52.7,
      55.2,
      56.5,
      55.4
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 51202.26,
    "change": 0.7,
    "mom": 48.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.4,
    "flow": 79,
    "perf": {
      "w1": 0.66,
      "m1": 2.27,
      "m3": 10.77
    },
    "returns": [
      0.7,
      0.65,
      0.66,
      0.33,
      2.27,
      10.77
    ],
    "volumes": [
      94,
      104,
      118,
      102,
      174,
      102
    ],
    "rsiStack": [
      59.7,
      58.1,
      58.4,
      58.4,
      57.0,
      52.3
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
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.0,
    "flow": 86,
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
      82,
      72,
      72,
      91,
      93,
      88
    ],
    "rsiStack": [
      40.6,
      46.4,
      51.0,
      54.0,
      56.0,
      55.8
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
    "rsi": 52.2,
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
      93,
      81,
      90,
      157,
      125
    ],
    "rsiStack": [
      38.4,
      47.1,
      52.2,
      54.8,
      55.7,
      53.0
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 386.54,
    "change": 0.06,
    "mom": 46.1,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 35.1,
    "flow": 99,
    "perf": {
      "w1": -2.45,
      "m1": -9.52,
      "m3": -13.09
    },
    "returns": [
      0.06,
      -1.09,
      -2.45,
      -7.33,
      -9.52,
      -13.09
    ],
    "volumes": [
      177,
      151,
      191,
      85,
      128,
      63
    ],
    "rsiStack": [
      36.4,
      34.2,
      35.1,
      37.0,
      39.9,
      43.3
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 61.29,
    "change": 0.77,
    "mom": 47.2,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 39.6,
    "flow": 93,
    "perf": {
      "w1": -0.45,
      "m1": -18.83,
      "m3": -10.79
    },
    "returns": [
      0.77,
      3.86,
      -0.45,
      -10.3,
      -18.83,
      -10.79
    ],
    "volumes": [
      138,
      152,
      168,
      60,
      70,
      116
    ],
    "rsiStack": [
      42.5,
      38.3,
      39.6,
      41.6,
      43.7,
      45.5
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 45.52,
    "change": 1.54,
    "mom": 46.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.1,
    "flow": 60,
    "perf": {
      "w1": 0.46,
      "m1": -13.3,
      "m3": -7.23
    },
    "returns": [
      1.54,
      3.17,
      0.46,
      -10.32,
      -13.3,
      -7.23
    ],
    "volumes": [
      112,
      157,
      179,
      116,
      98,
      77
    ],
    "rsiStack": [
      44.4,
      40.8,
      41.1,
      42.3,
      44.0,
      45.2
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 84.29,
    "change": -3.9,
    "mom": 40.8,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 37.4,
    "flow": 80,
    "perf": {
      "w1": -6.9,
      "m1": -16.68,
      "m3": -12.49
    },
    "returns": [
      -3.9,
      -4.43,
      -6.9,
      -3.51,
      -16.68,
      -12.49
    ],
    "volumes": [
      114,
      123,
      103,
      99,
      101,
      63
    ],
    "rsiStack": [
      24.5,
      32.1,
      37.4,
      41.5,
      45.2,
      48.0
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 109.48,
    "change": 2.74,
    "mom": 47.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.1,
    "flow": 90,
    "perf": {
      "w1": -3.53,
      "m1": -10.97,
      "m3": -13.61
    },
    "returns": [
      2.74,
      0.83,
      -3.53,
      -2.55,
      -10.97,
      -13.61
    ],
    "volumes": [
      114,
      154,
      81,
      78,
      146,
      70
    ],
    "rsiStack": [
      41.0,
      38.2,
      40.1,
      42.6,
      45.5,
      47.2
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 36.15,
    "change": 5.21,
    "mom": 53.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.9,
    "flow": 96,
    "perf": {
      "w1": 3.4,
      "m1": -15.2,
      "m3": -9.74
    },
    "returns": [
      5.21,
      4.48,
      3.4,
      -7.47,
      -15.2,
      -9.74
    ],
    "volumes": [
      72,
      137,
      104,
      152,
      76,
      99
    ],
    "rsiStack": [
      54.7,
      44.8,
      43.9,
      45.0,
      46.7,
      47.8
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 22.69,
    "change": 7.59,
    "mom": 57.2,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 50.9,
    "flow": 146,
    "perf": {
      "w1": 2.02,
      "m1": 0.04,
      "m3": -18.32
    },
    "returns": [
      7.59,
      6.63,
      2.02,
      -5.06,
      0.04,
      -18.32
    ],
    "volumes": [
      150,
      97,
      94,
      71,
      101,
      87
    ],
    "rsiStack": [
      60.8,
      54.2,
      50.9,
      48.6,
      45.6,
      38.4
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 67.62,
    "change": 3.14,
    "mom": 59.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 43.8,
    "flow": 88,
    "perf": {
      "w1": 0.63,
      "m1": -4.68,
      "m3": -13.17
    },
    "returns": [
      3.14,
      1.91,
      0.63,
      -1.36,
      -4.68,
      -13.17
    ],
    "volumes": [
      186,
      117,
      93,
      145,
      84,
      64
    ],
    "rsiStack": [
      54.7,
      46.1,
      43.8,
      43.9,
      45.2,
      47.4
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 63528.01,
    "change": -0.05,
    "mom": 51.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 32.8,
    "flow": 74,
    "perf": {
      "w1": 0.46,
      "m1": -17.14,
      "m3": -14.71
    },
    "returns": [
      -0.05,
      3.06,
      0.46,
      -4.76,
      -17.14,
      -14.71
    ],
    "volumes": [
      80,
      110,
      102,
      203,
      175,
      91
    ],
    "rsiStack": [
      47.2,
      35.3,
      32.8,
      34.1,
      37.4,
      41.2
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 159.78,
    "change": -0.41,
    "mom": 47.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.3,
    "flow": 73,
    "perf": {
      "w1": 4.84,
      "m1": -24.64,
      "m3": -21.01
    },
    "returns": [
      -0.41,
      2.75,
      4.84,
      -15.47,
      -24.64,
      -21.01
    ],
    "volumes": [
      74,
      92,
      166,
      99,
      106,
      159
    ],
    "rsiStack": [
      42.8,
      39.4,
      40.3,
      41.9,
      43.8,
      46.2
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 77.84,
    "change": -5.8,
    "mom": 40.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 34.3,
    "flow": 92,
    "perf": {
      "w1": -3.04,
      "m1": -37.16,
      "m3": -41.4
    },
    "returns": [
      -5.8,
      -4.02,
      -3.04,
      -31.12,
      -37.16,
      -41.4
    ],
    "volumes": [
      64,
      88,
      141,
      92,
      132,
      137
    ],
    "rsiStack": [
      25.8,
      29.2,
      34.3,
      38.6,
      43.7,
      52.6
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 123.97,
    "change": 3.18,
    "mom": 45.5,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 37.2,
    "flow": 90,
    "perf": {
      "w1": 2.93,
      "m1": -33.7,
      "m3": -11.8
    },
    "returns": [
      3.18,
      5.94,
      2.93,
      -22.08,
      -33.7,
      -11.8
    ],
    "volumes": [
      95,
      126,
      238,
      133,
      127,
      84
    ],
    "rsiStack": [
      43.1,
      36.4,
      37.2,
      39.7,
      43.3,
      49.2
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 57.55,
    "change": 0.75,
    "mom": 49.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.0,
    "flow": 79,
    "perf": {
      "w1": -0.21,
      "m1": -0.9,
      "m3": -1.51
    },
    "returns": [
      0.75,
      0.28,
      -0.21,
      2.24,
      -0.9,
      -1.51
    ],
    "volumes": [
      106,
      122,
      76,
      115,
      83,
      60
    ],
    "rsiStack": [
      46.3,
      47.1,
      48.0,
      48.8,
      49.0,
      44.7
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 184.8,
    "change": 0.87,
    "mom": 42.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.8,
    "flow": 92,
    "perf": {
      "w1": 2.5,
      "m1": 2.95,
      "m3": 33.95
    },
    "returns": [
      0.87,
      2.23,
      2.5,
      -3.26,
      2.95,
      33.95
    ],
    "volumes": [
      118,
      201,
      196,
      90,
      122,
      106
    ],
    "rsiStack": [
      51.8,
      52.7,
      55.8,
      58.3,
      60.0,
      60.9
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 44.53,
    "change": 1.09,
    "mom": 60.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.9,
    "flow": 82,
    "perf": {
      "w1": 0.41,
      "m1": -0.82,
      "m3": -4.71
    },
    "returns": [
      1.09,
      1.25,
      0.41,
      0.25,
      -0.82,
      -4.71
    ],
    "volumes": [
      92,
      94,
      98,
      99,
      111,
      92
    ],
    "rsiStack": [
      63.4,
      53.8,
      49.9,
      48.4,
      47.8,
      46.8
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 153.81,
    "change": -0.18,
    "mom": 56.5,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.1,
    "flow": 83,
    "perf": {
      "w1": 0.52,
      "m1": 4.9,
      "m3": 4.53
    },
    "returns": [
      -0.18,
      -0.49,
      0.52,
      2.9,
      4.9,
      4.53
    ],
    "volumes": [
      97,
      118,
      190,
      97,
      136,
      83
    ],
    "rsiStack": [
      64.5,
      64.1,
      62.1,
      59.5,
      55.1,
      46.3
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 111.65,
    "change": -0.42,
    "mom": 46.7,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.2,
    "flow": 128,
    "perf": {
      "w1": -0.02,
      "m1": -4.66,
      "m3": -1.77
    },
    "returns": [
      -0.42,
      0.15,
      -0.02,
      -3.49,
      -4.66,
      -1.77
    ],
    "volumes": [
      106,
      120,
      174,
      123,
      111,
      78
    ],
    "rsiStack": [
      39.0,
      36.6,
      38.2,
      40.5,
      43.0,
      45.5
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 53.34,
    "change": 1.37,
    "mom": 62.7,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 64.9,
    "flow": 133,
    "perf": {
      "w1": 1.99,
      "m1": 4.0,
      "m3": 8.92
    },
    "returns": [
      1.37,
      1.68,
      1.99,
      3.41,
      4.0,
      8.92
    ],
    "volumes": [
      111,
      112,
      116,
      128,
      97,
      110
    ],
    "rsiStack": [
      77.8,
      69.8,
      64.9,
      61.4,
      57.0,
      49.9
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 45.36,
    "change": 0.98,
    "mom": 56.8,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.9,
    "flow": 81,
    "perf": {
      "w1": 1.48,
      "m1": 3.3,
      "m3": 7.95
    },
    "returns": [
      0.98,
      0.87,
      1.48,
      3.11,
      3.3,
      7.95
    ],
    "volumes": [
      112,
      113,
      112,
      116,
      138,
      91
    ],
    "rsiStack": [
      72.4,
      65.3,
      61.9,
      60.0,
      57.7,
      52.3
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 176.18,
    "change": 0.59,
    "mom": 54.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 55.9,
    "flow": 82,
    "perf": {
      "w1": 1.15,
      "m1": 0.96,
      "m3": 6.66
    },
    "returns": [
      0.59,
      0.33,
      1.15,
      1.76,
      0.96,
      6.66
    ],
    "volumes": [
      133,
      122,
      117,
      87,
      91,
      88
    ],
    "rsiStack": [
      59.9,
      57.3,
      55.9,
      55.0,
      54.0,
      51.6
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 52.18,
    "change": 1.87,
    "mom": 57.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.3,
    "flow": 120,
    "perf": {
      "w1": 3.06,
      "m1": 0.99,
      "m3": 7.63
    },
    "returns": [
      1.87,
      2.78,
      3.06,
      2.01,
      0.99,
      7.63
    ],
    "volumes": [
      101,
      110,
      105,
      104,
      111,
      107
    ],
    "rsiStack": [
      66.6,
      60.5,
      57.3,
      55.5,
      54.2,
      53.0
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 116.6,
    "change": 0.26,
    "mom": 49.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.2,
    "flow": 94,
    "perf": {
      "w1": 1.51,
      "m1": -1.74,
      "m3": 5.45
    },
    "returns": [
      0.26,
      0.63,
      1.51,
      -3.53,
      -1.74,
      5.45
    ],
    "volumes": [
      108,
      105,
      100,
      76,
      89,
      79
    ],
    "rsiStack": [
      52.5,
      48.2,
      48.2,
      49.0,
      49.6,
      50.2
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 85.82,
    "change": 0.65,
    "mom": 65.1,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.9,
    "flow": 73,
    "perf": {
      "w1": 2.85,
      "m1": 0.99,
      "m3": 3.85
    },
    "returns": [
      0.65,
      2.05,
      2.85,
      3.51,
      0.99,
      3.85
    ],
    "volumes": [
      143,
      101,
      138,
      123,
      115,
      59
    ],
    "rsiStack": [
      76.3,
      66.1,
      60.9,
      58.0,
      55.3,
      51.6
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 596.25,
    "change": 1.59,
    "mom": 48.8,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.5,
    "flow": 82,
    "perf": {
      "w1": 10.46,
      "m1": 12.49,
      "m3": 76.25
    },
    "returns": [
      1.59,
      6.07,
      10.46,
      4.77,
      12.49,
      76.25
    ],
    "volumes": [
      113,
      232,
      236,
      98,
      87,
      70
    ],
    "rsiStack": [
      62.2,
      60.6,
      61.5,
      62.6,
      63.4,
      63.1
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 26.24,
    "change": -0.23,
    "mom": 36.2,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 27.9,
    "flow": 59,
    "perf": {
      "w1": -0.61,
      "m1": -7.12,
      "m3": -2.49
    },
    "returns": [
      -0.23,
      -0.15,
      -0.61,
      -3.71,
      -7.12,
      -2.49
    ],
    "volumes": [
      73,
      51,
      286,
      73,
      117,
      67
    ],
    "rsiStack": [
      11.8,
      19.8,
      27.9,
      33.9,
      39.2,
      42.0
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 43.94,
    "change": 1.38,
    "mom": 54.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.6,
    "flow": 45,
    "perf": {
      "w1": -0.11,
      "m1": -3.45,
      "m3": -2.64
    },
    "returns": [
      1.38,
      0.83,
      -0.11,
      -0.02,
      -3.45,
      -2.64
    ],
    "volumes": [
      81,
      130,
      54,
      79,
      76,
      72
    ],
    "rsiStack": [
      53.5,
      47.4,
      45.6,
      45.4,
      45.4,
      41.6
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 45.3,
    "change": 0.8,
    "mom": 50.5,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.2,
    "flow": 34,
    "perf": {
      "w1": 2.57,
      "m1": 7.34,
      "m3": 20.26
    },
    "returns": [
      0.8,
      0.89,
      2.57,
      1.0,
      7.34,
      20.26
    ],
    "volumes": [
      535,
      56,
      8,
      5,
      15,
      26
    ],
    "rsiStack": [
      64.7,
      63.8,
      63.2,
      62.1,
      60.6,
      59.7
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 28.65,
    "change": 0.92,
    "mom": 55.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.2,
    "flow": 8,
    "perf": {
      "w1": 0.57,
      "m1": -4.78,
      "m3": -0.82
    },
    "returns": [
      0.92,
      1.71,
      0.57,
      -1.2,
      -4.78,
      -0.82
    ],
    "volumes": [
      27,
      19,
      153,
      28,
      61,
      138
    ],
    "rsiStack": [
      56.9,
      47.2,
      44.2,
      44.1,
      45.2,
      45.5
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 103.04,
    "change": 0.74,
    "mom": 62.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.2,
    "flow": 65,
    "perf": {
      "w1": 8.13,
      "m1": -3.16,
      "m3": 11.2
    },
    "returns": [
      0.74,
      5.78,
      8.13,
      3.91,
      -3.16,
      11.2
    ],
    "volumes": [
      128,
      133,
      100,
      110,
      112,
      126
    ],
    "rsiStack": [
      78.7,
      64.4,
      58.2,
      55.9,
      54.7,
      53.5
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 78.59,
    "change": 0.85,
    "mom": 55.3,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.9,
    "flow": 59,
    "perf": {
      "w1": -0.01,
      "m1": -4.12,
      "m3": -5.79
    },
    "returns": [
      0.85,
      0.92,
      -0.01,
      -1.09,
      -4.12,
      -5.79
    ],
    "volumes": [
      45,
      74,
      55,
      59,
      57,
      69
    ],
    "rsiStack": [
      50.3,
      42.2,
      39.9,
      40.2,
      41.7,
      41.9
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 14.84,
    "change": 0.88,
    "mom": 39.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.3,
    "flow": 45,
    "perf": {
      "w1": -0.4,
      "m1": 2.49,
      "m3": 25.87
    },
    "returns": [
      0.88,
      -0.74,
      -0.4,
      -14.91,
      2.49,
      25.87
    ],
    "volumes": [
      60,
      58,
      75,
      69,
      187,
      319
    ],
    "rsiStack": [
      45.1,
      49.9,
      53.3,
      54.8,
      55.3,
      54.9
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 81.5,
    "change": 0.8,
    "mom": 44.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.6,
    "flow": 44,
    "perf": {
      "w1": -0.74,
      "m1": 4.82,
      "m3": 10.84
    },
    "returns": [
      0.8,
      -2.7,
      -0.74,
      -2.09,
      4.82,
      10.84
    ],
    "volumes": [
      73,
      111,
      96,
      129,
      217,
      117
    ],
    "rsiStack": [
      49.1,
      52.3,
      53.6,
      53.8,
      53.0,
      51.3
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 23.62,
    "change": -0.27,
    "mom": 36.6,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 30.5,
    "flow": 64,
    "perf": {
      "w1": -1.06,
      "m1": -7.64,
      "m3": -5.46
    },
    "returns": [
      -0.27,
      -0.85,
      -1.06,
      -4.23,
      -7.64,
      -5.46
    ],
    "volumes": [
      91,
      19,
      214,
      56,
      51,
      105
    ],
    "rsiStack": [
      8.3,
      21.0,
      30.5,
      36.4,
      40.8,
      41.0
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 26.21,
    "change": 0.15,
    "mom": 62.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.7,
    "flow": 113,
    "perf": {
      "w1": 0.65,
      "m1": 1.79,
      "m3": -4.06
    },
    "returns": [
      0.15,
      1.98,
      0.65,
      0.11,
      1.79,
      -4.06
    ],
    "volumes": [
      135,
      107,
      97,
      90,
      135,
      65
    ],
    "rsiStack": [
      66.9,
      58.6,
      53.7,
      50.7,
      46.9,
      37.4
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.98,
    "change": 0.91,
    "mom": 47.8,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.5,
    "flow": 88,
    "perf": {
      "w1": -3.39,
      "m1": -3.57,
      "m3": -13.74
    },
    "returns": [
      0.91,
      -2.82,
      -3.39,
      -2.82,
      -3.57,
      -13.74
    ],
    "volumes": [
      114,
      107,
      107,
      108,
      114,
      102
    ],
    "rsiStack": [
      35.4,
      35.1,
      35.5,
      36.7,
      40.2,
      48.6
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.96,
    "change": -0.44,
    "mom": 44.0,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.0,
    "flow": 128,
    "perf": {
      "w1": -3.34,
      "m1": -5.08,
      "m3": -21.68
    },
    "returns": [
      -0.44,
      -3.03,
      -3.34,
      -5.49,
      -5.08,
      -21.68
    ],
    "volumes": [
      127,
      70,
      84,
      99,
      133,
      115
    ],
    "rsiStack": [
      26.9,
      32.4,
      35.0,
      36.8,
      39.2,
      42.0
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 250.81,
    "change": -5.27,
    "mom": 51.1,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.9,
    "flow": 93,
    "perf": {
      "w1": 21.23,
      "m1": 35.91,
      "m3": 146.57
    },
    "returns": [
      -5.27,
      7.04,
      21.23,
      6.26,
      35.91,
      146.57
    ],
    "volumes": [
      137,
      179,
      193,
      127,
      118,
      81
    ],
    "rsiStack": [
      64.8,
      64.6,
      63.9,
      63.2,
      62.0,
      59.7
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 279.7,
    "change": -0.36,
    "mom": 50.9,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.0,
    "flow": 74,
    "perf": {
      "w1": 6.16,
      "m1": 53.19,
      "m3": 219.22
    },
    "returns": [
      -0.36,
      4.8,
      6.16,
      36.44,
      53.19,
      219.22
    ],
    "volumes": [
      105,
      183,
      209,
      302,
      123,
      124
    ],
    "rsiStack": [
      58.2,
      61.0,
      63.0,
      64.3,
      65.3,
      65.9
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 67.62,
    "chg": 3.14,
    "chgW": 0.63,
    "chgM": -4.68,
    "chgYTD": 9.56,
    "marketCap": "$32.5B",
    "pe": "13.8x",
    "evEbitda": "8.2x",
    "de": "0.6x",
    "drawdown": "-20.8%"
  },
  "MOS": {
    "price": 22.69,
    "chg": 7.59,
    "chgW": 2.02,
    "chgM": 0.04,
    "chgYTD": -5.81,
    "marketCap": "$7.2B",
    "pe": "162.1x",
    "evEbitda": "6.2x",
    "de": "0.5x",
    "drawdown": "-40.6%"
  },
  "CF": {
    "price": 109.48,
    "chg": 2.74,
    "chgW": -3.53,
    "chgM": -10.97,
    "chgYTD": 41.56,
    "marketCap": "$16.8B",
    "pe": "9.9x",
    "evEbitda": "6.2x",
    "de": "0.4x",
    "drawdown": "-22.9%"
  },
  "ICL": {
    "price": 5.73,
    "chg": 1.06,
    "chgW": 2.32,
    "chgM": -12.79,
    "chgYTD": 0.35,
    "marketCap": "$7.4B",
    "pe": "27.3x",
    "evEbitda": "8.0x",
    "de": "0.5x",
    "drawdown": "-22.0%"
  },
  "FMC": {
    "price": 11.85,
    "chg": 5.15,
    "chgW": 1.8,
    "chgM": -12.61,
    "chgYTD": -14.56,
    "marketCap": "$1.5B",
    "pe": "5.3x",
    "evEbitda": "17.4x",
    "de": "2.5x",
    "drawdown": "-73.5%"
  },
  "CTVA": {
    "price": 76.14,
    "chg": 1.71,
    "chgW": -1.16,
    "chgM": -8.6,
    "chgYTD": 13.59,
    "marketCap": "$50.9B",
    "pe": "41.2x",
    "evEbitda": "12.7x",
    "de": "0.1x",
    "drawdown": "-11.1%"
  },
  "ADM": {
    "price": 80.24,
    "chg": 1.7,
    "chgW": -0.84,
    "chgM": -1.44,
    "chgYTD": 39.57,
    "marketCap": "$38.7B",
    "pe": "35.8x",
    "evEbitda": "19.3x",
    "de": "0.5x",
    "drawdown": "-6.0%"
  },
  "BG": {
    "price": 127.17,
    "chg": 1.51,
    "chgW": 0.56,
    "chgM": 3.26,
    "chgYTD": 42.76,
    "marketCap": "$24.7B",
    "pe": "33.5x",
    "evEbitda": "18.2x",
    "de": "0.9x",
    "drawdown": "-5.7%"
  },
  "INGR": {
    "price": 101.59,
    "chg": 0.68,
    "chgW": 1.61,
    "chgM": -0.65,
    "chgYTD": -7.86,
    "marketCap": "$6.4B",
    "pe": "9.8x",
    "evEbitda": "6.1x",
    "de": "0.4x",
    "drawdown": "-27.7%"
  },
  "FPI": {
    "price": 9.98,
    "chg": 0.91,
    "chgW": -3.39,
    "chgM": -3.57,
    "chgYTD": 2.99,
    "marketCap": "$443M",
    "pe": "16.9x",
    "evEbitda": "24.6x",
    "de": "0.5x",
    "drawdown": "-24.5%"
  },
  "LAND": {
    "price": 8.96,
    "chg": -0.44,
    "chgW": -3.34,
    "chgM": -5.08,
    "chgYTD": -2.08,
    "marketCap": "$387M",
    "pe": "-18.8x",
    "evEbitda": "12.6x",
    "de": "0.7x",
    "drawdown": "-31.1%"
  },
  "DE": {
    "price": 577.48,
    "chg": 1.55,
    "chgW": -1.02,
    "chgM": 0.49,
    "chgYTD": 24.04,
    "marketCap": "$155.9B",
    "pe": "32.8x",
    "evEbitda": "22.7x",
    "de": "3.8x",
    "drawdown": "-14.3%"
  },
  "AGCO": {
    "price": 112.49,
    "chg": 1.31,
    "chgW": -3.37,
    "chgM": -4.13,
    "chgYTD": 7.83,
    "marketCap": "$8.1B",
    "pe": "10.8x",
    "evEbitda": "10.1x",
    "de": "0.6x",
    "drawdown": "-21.8%"
  },
  "CNH": {
    "price": 10.6,
    "chg": 2.32,
    "chgW": -1.4,
    "chgM": -0.66,
    "chgYTD": 14.97,
    "marketCap": "$13.1B",
    "pe": "33.1x",
    "evEbitda": "35.3x",
    "de": "3.3x",
    "drawdown": "-25.7%"
  },
  "XYL": {
    "price": 110.08,
    "chg": 0.94,
    "chgW": 0.13,
    "chgM": 0.58,
    "chgYTD": -19.17,
    "marketCap": "$26.2B",
    "pe": "27.4x",
    "evEbitda": "14.3x",
    "de": "0.2x",
    "drawdown": "-28.6%"
  },
  "VMI": {
    "price": 546.81,
    "chg": 3.45,
    "chgW": 2.44,
    "chgM": 6.06,
    "chgYTD": 35.91,
    "marketCap": "$10.6B",
    "pe": "30.4x",
    "evEbitda": "17.8x",
    "de": "0.5x",
    "drawdown": "-0.4%"
  },
  "LNN": {
    "price": 115.35,
    "chg": 0.58,
    "chgW": 2.38,
    "chgM": 8.34,
    "chgYTD": -2.14,
    "marketCap": "$1.2B",
    "pe": "21.1x",
    "evEbitda": "13.0x",
    "de": "0.3x",
    "drawdown": "-23.6%"
  },
  "MWA": {
    "price": 25.82,
    "chg": 0.78,
    "chgW": 1.93,
    "chgM": -0.15,
    "chgYTD": 8.4,
    "marketCap": "$4.0B",
    "pe": "19.6x",
    "evEbitda": "11.9x",
    "de": "0.4x",
    "drawdown": "-16.7%"
  },
  "WTS": {
    "price": 333.11,
    "chg": 3.81,
    "chgW": 6.02,
    "chgM": 10.53,
    "chgYTD": 20.68,
    "marketCap": "$11.1B",
    "pe": "30.4x",
    "evEbitda": "19.1x",
    "de": "0.1x",
    "drawdown": "-3.5%"
  },
  "TSN": {
    "price": 57.43,
    "chg": 3.22,
    "chgW": -2.21,
    "chgM": -13.85,
    "chgYTD": -2.03,
    "marketCap": "$20.2B",
    "pe": "45.2x",
    "evEbitda": "10.3x",
    "de": "0.4x",
    "drawdown": "-17.3%"
  },
  "PPC": {
    "price": 30.07,
    "chg": 1.38,
    "chgW": 0.64,
    "chgM": 7.97,
    "chgYTD": -22.88,
    "marketCap": "$7.2B",
    "pe": "8.1x",
    "evEbitda": "4.9x",
    "de": "0.9x",
    "drawdown": "-40.5%"
  },
  "HRL": {
    "price": 24.75,
    "chg": 1.27,
    "chgW": 4.78,
    "chgM": 23.75,
    "chgYTD": 4.43,
    "marketCap": "$13.6B",
    "pe": "29.1x",
    "evEbitda": "10.5x",
    "de": "0.0x",
    "drawdown": "-22.3%"
  },
  "CAG": {
    "price": 13.74,
    "chg": 2.16,
    "chgW": 5.61,
    "chgM": 0.51,
    "chgYTD": -20.62,
    "marketCap": "$6.6B",
    "pe": "8.5x",
    "evEbitda": "7.9x",
    "de": "0.9x",
    "drawdown": "-38.9%"
  },
  "CALM": {
    "price": 78.1,
    "chg": -2.22,
    "chgW": 3.24,
    "chgM": 0.12,
    "chgYTD": -1.85,
    "marketCap": "$3.7B",
    "pe": "5.4x",
    "evEbitda": "2.6x",
    "de": "–",
    "drawdown": "-38.2%"
  },
  "DBA": {
    "price": 26.24,
    "chg": -0.23,
    "chgW": -0.61,
    "chgM": -7.12,
    "chgYTD": 2.82,
    "marketCap": "–",
    "pe": "11.1x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-9.0%"
  },
  "MOO": {
    "price": 78.59,
    "chg": 0.85,
    "chgW": -0.01,
    "chgM": -4.12,
    "chgYTD": 7.97,
    "marketCap": "–",
    "pe": "20.0x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-9.2%"
  },
  "VEGI": {
    "price": 43.94,
    "chg": 1.38,
    "chgW": -0.11,
    "chgM": -3.45,
    "chgYTD": 13.92,
    "marketCap": "–",
    "pe": "21.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-7.0%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "36.9x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
