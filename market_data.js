window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-05-13 23:36:55",
  "sections": {
    "Index": {
      "risk": "Strong OFF",
      "leader": "KOSPI",
      "watch": 1
    },
    "Commodity": {
      "risk": "Risk On",
      "leader": "IPI",
      "watch": 2
    },
    "Crypto": {
      "risk": "Strong ON",
      "leader": "MSTR",
      "watch": 2
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "SOX",
      "watch": 2
    },
    "Stock": {
      "risk": "Neutral",
      "leader": "MRVL",
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
    "price": 7444.25,
    "change": 0.58,
    "mom": 58.5,
    "phase": "Exhaustion",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "SELL",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 75.5,
    "flow": 62,
    "perf": {
      "w1": 1.07,
      "m1": 6.0,
      "m3": 8.78
    },
    "returns": [
      0.58,
      0.61,
      1.07,
      4.32,
      6.0,
      8.78
    ],
    "volumes": [
      105,
      101,
      128,
      103,
      103,
      97
    ],
    "rsiStack": [
      82.5,
      79.4,
      75.5,
      71.2,
      65.4,
      55.6
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 49693.2,
    "change": -0.14,
    "mom": 52.4,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "SELL",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.1,
    "flow": 100,
    "perf": {
      "w1": -0.44,
      "m1": 2.54,
      "m3": 0.32
    },
    "returns": [
      -0.14,
      0.17,
      -0.44,
      1.7,
      2.54,
      0.32
    ],
    "volumes": [
      101,
      93,
      112,
      89,
      94,
      101
    ],
    "rsiStack": [
      58.2,
      60.1,
      60.1,
      58.5,
      55.0,
      47.0
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 7643.15,
    "change": -2.29,
    "mom": 58.6,
    "phase": "Exhaustion",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 76.7,
    "flow": 119,
    "perf": {
      "w1": 10.18,
      "m1": 30.45,
      "m3": 44.26
    },
    "returns": [
      -2.29,
      2.04,
      10.18,
      18.03,
      30.45,
      44.26
    ],
    "volumes": [
      86,
      86,
      96,
      75,
      91,
      94
    ],
    "rsiStack": [
      76.6,
      79.4,
      76.7,
      73.0,
      68.2,
      59.7
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
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 69.1,
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
      116,
      134,
      102,
      120,
      111,
      103
    ],
    "rsiStack": [
      76.2,
      72.9,
      69.1,
      65.6,
      61.4,
      53.8
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 430.5,
    "change": -0.56,
    "mom": 53.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.4,
    "flow": 64,
    "perf": {
      "w1": -0.11,
      "m1": -2.26,
      "m3": -3.95
    },
    "returns": [
      -0.56,
      -0.75,
      -0.11,
      3.14,
      -2.26,
      -3.95
    ],
    "volumes": [
      101,
      81,
      104,
      104,
      86,
      45
    ],
    "rsiStack": [
      52.0,
      51.0,
      49.4,
      48.6,
      48.3,
      47.0
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 79.35,
    "change": 1.02,
    "mom": 68.9,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 67.7,
    "flow": 133,
    "perf": {
      "w1": 13.15,
      "m1": 10.45,
      "m3": 19.56
    },
    "returns": [
      1.02,
      8.68,
      13.15,
      22.38,
      10.45,
      19.56
    ],
    "volumes": [
      136,
      86,
      111,
      90,
      75,
      57
    ],
    "rsiStack": [
      87.6,
      76.1,
      67.7,
      61.8,
      57.2,
      54.1
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 53.31,
    "change": -1.91,
    "mom": 40.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 47.7,
    "flow": 82,
    "perf": {
      "w1": -8.5,
      "m1": -2.79,
      "m3": 3.88
    },
    "returns": [
      -1.91,
      -3.39,
      -8.5,
      0.79,
      -2.79,
      3.88
    ],
    "volumes": [
      136,
      124,
      152,
      87,
      63,
      151
    ],
    "rsiStack": [
      37.4,
      44.3,
      47.7,
      49.3,
      49.9,
      48.1
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 100.97,
    "change": -1.18,
    "mom": 45.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.9,
    "flow": 0,
    "perf": {
      "w1": 6.19,
      "m1": 10.6,
      "m3": 61.99
    },
    "returns": [
      -1.18,
      5.82,
      6.19,
      -5.53,
      10.6,
      61.99
    ],
    "volumes": [
      91,
      84,
      144,
      110,
      106,
      67
    ],
    "rsiStack": [
      57.0,
      54.4,
      53.9,
      54.4,
      55.5,
      57.9
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 125.5,
    "change": -3.75,
    "mom": 48.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.5,
    "flow": 91,
    "perf": {
      "w1": 4.79,
      "m1": 3.88,
      "m3": 33.81
    },
    "returns": [
      -3.75,
      9.11,
      4.79,
      -1.01,
      3.88,
      33.81
    ],
    "volumes": [
      110,
      92,
      158,
      75,
      66,
      45
    ],
    "rsiStack": [
      54.1,
      52.9,
      52.5,
      52.7,
      52.8,
      49.0
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 45.4,
    "change": -2.74,
    "mom": 64.0,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 63.4,
    "flow": 111,
    "perf": {
      "w1": 20.52,
      "m1": 21.16,
      "m3": 37.28
    },
    "returns": [
      -2.74,
      20.07,
      20.52,
      17.89,
      21.16,
      37.28
    ],
    "volumes": [
      183,
      81,
      96,
      66,
      105,
      49
    ],
    "rsiStack": [
      72.3,
      68.1,
      63.4,
      60.3,
      57.6,
      52.8
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 22.78,
    "change": 1.74,
    "mom": 54.9,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 41.8,
    "flow": 135,
    "perf": {
      "w1": -3.31,
      "m1": -4.0,
      "m3": -21.66
    },
    "returns": [
      1.74,
      2.66,
      -3.31,
      -1.09,
      -4.0,
      -21.66
    ],
    "volumes": [
      127,
      115,
      95,
      76,
      76,
      95
    ],
    "rsiStack": [
      50.6,
      43.7,
      41.8,
      41.9,
      41.5,
      36.2
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 71.29,
    "change": -0.96,
    "mom": 43.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.6,
    "flow": 70,
    "perf": {
      "w1": -3.41,
      "m1": -2.81,
      "m3": 2.05
    },
    "returns": [
      -0.96,
      4.33,
      -3.41,
      -3.83,
      -2.81,
      2.05
    ],
    "volumes": [
      106,
      115,
      178,
      96,
      128,
      58
    ],
    "rsiStack": [
      44.8,
      44.8,
      45.6,
      46.5,
      47.0,
      43.4
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 79304.14,
    "change": -1.46,
    "mom": 39.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.3,
    "flow": 107,
    "perf": {
      "w1": -1.1,
      "m1": 1.32,
      "m3": 11.36
    },
    "returns": [
      -1.46,
      -3.45,
      -1.1,
      0.98,
      1.32,
      11.36
    ],
    "volumes": [
      100,
      81,
      98,
      119,
      59,
      107
    ],
    "rsiStack": [
      37.2,
      49.2,
      54.3,
      55.9,
      54.7,
      47.0
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 201.8,
    "change": -2.81,
    "mom": 50.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.4,
    "flow": 82,
    "perf": {
      "w1": 1.94,
      "m1": 3.01,
      "m3": 21.55
    },
    "returns": [
      -2.81,
      0.32,
      1.94,
      11.04,
      3.01,
      21.55
    ],
    "volumes": [
      92,
      128,
      78,
      114,
      128,
      109
    ],
    "rsiStack": [
      50.0,
      52.9,
      53.4,
      52.6,
      49.2,
      38.8
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 126.57,
    "change": 2.36,
    "mom": 52.9,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 61.2,
    "flow": 113,
    "perf": {
      "w1": 3.92,
      "m1": 19.95,
      "m3": 105.4
    },
    "returns": [
      2.36,
      11.35,
      3.92,
      32.45,
      19.95,
      105.4
    ],
    "volumes": [
      183,
      122,
      148,
      275,
      78,
      64
    ],
    "rsiStack": [
      64.4,
      63.1,
      61.2,
      59.6,
      57.5,
      51.9
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 178.03,
    "change": -3.46,
    "mom": 46.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.2,
    "flow": 65,
    "perf": {
      "w1": -4.71,
      "m1": 24.03,
      "m3": 38.36
    },
    "returns": [
      -3.46,
      -5.1,
      -4.71,
      12.54,
      24.03,
      38.36
    ],
    "volumes": [
      77,
      83,
      76,
      96,
      80,
      77
    ],
    "rsiStack": [
      43.5,
      52.7,
      56.2,
      56.9,
      55.4,
      50.4
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 57.63,
    "change": 0.1,
    "mom": 48.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.6,
    "flow": 57,
    "perf": {
      "w1": 1.11,
      "m1": 3.35,
      "m3": 7.22
    },
    "returns": [
      0.1,
      3.46,
      1.11,
      -2.37,
      3.35,
      7.22
    ],
    "volumes": [
      91,
      73,
      135,
      82,
      84,
      68
    ],
    "rsiStack": [
      54.0,
      51.2,
      50.6,
      51.2,
      51.9,
      49.1
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 176.85,
    "change": 0.94,
    "mom": 57.5,
    "phase": "Exhaustion",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 78.8,
    "flow": 85,
    "perf": {
      "w1": 4.01,
      "m1": 17.66,
      "m3": 26.79
    },
    "returns": [
      0.94,
      0.76,
      4.01,
      11.15,
      17.66,
      26.79
    ],
    "volumes": [
      147,
      107,
      110,
      104,
      69,
      73
    ],
    "rsiStack": [
      78.7,
      80.4,
      78.8,
      75.7,
      70.2,
      59.9
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 44.67,
    "change": -1.15,
    "mom": 38.6,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 39.0,
    "flow": 134,
    "perf": {
      "w1": -2.28,
      "m1": -2.93,
      "m3": -3.69
    },
    "returns": [
      -1.15,
      -0.11,
      -2.28,
      -2.21,
      -2.93,
      -3.69
    ],
    "volumes": [
      139,
      91,
      133,
      94,
      65,
      99
    ],
    "rsiStack": [
      28.2,
      34.7,
      39.0,
      42.2,
      46.1,
      52.7
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 146.71,
    "change": 0.59,
    "mom": 64.9,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 52.7,
    "flow": 165,
    "perf": {
      "w1": 0.9,
      "m1": -0.72,
      "m3": -6.77
    },
    "returns": [
      0.59,
      2.24,
      0.9,
      2.71,
      -0.72,
      -6.77
    ],
    "volumes": [
      133,
      118,
      127,
      130,
      140,
      52
    ],
    "rsiStack": [
      67.7,
      57.9,
      52.7,
      49.8,
      47.7,
      46.5
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 116.76,
    "change": 0.78,
    "mom": 51.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.0,
    "flow": 89,
    "perf": {
      "w1": -0.5,
      "m1": -0.51,
      "m3": 2.06
    },
    "returns": [
      0.78,
      -0.15,
      -0.5,
      1.28,
      -0.51,
      2.06
    ],
    "volumes": [
      116,
      90,
      137,
      124,
      99,
      73
    ],
    "rsiStack": [
      56.0,
      54.3,
      54.0,
      53.4,
      52.5,
      51.2
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 50.99,
    "change": -1.14,
    "mom": 41.6,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 44.9,
    "flow": 100,
    "perf": {
      "w1": -1.64,
      "m1": -2.26,
      "m3": -2.32
    },
    "returns": [
      -1.14,
      -0.49,
      -1.64,
      -1.79,
      -2.26,
      -2.32
    ],
    "volumes": [
      133,
      90,
      119,
      132,
      65,
      69
    ],
    "rsiStack": [
      32.0,
      39.4,
      44.9,
      46.9,
      45.7,
      38.2
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 44.21,
    "change": -0.83,
    "mom": 45.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.2,
    "flow": 96,
    "perf": {
      "w1": -1.18,
      "m1": 1.84,
      "m3": 0.61
    },
    "returns": [
      -0.83,
      -0.45,
      -1.18,
      1.31,
      1.84,
      0.61
    ],
    "volumes": [
      99,
      65,
      105,
      83,
      171,
      35
    ],
    "rsiStack": [
      43.7,
      53.1,
      56.2,
      56.8,
      55.9,
      51.8
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 173.62,
    "change": -0.42,
    "mom": 49.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.5,
    "flow": 71,
    "perf": {
      "w1": -1.84,
      "m1": 1.43,
      "m3": -0.83
    },
    "returns": [
      -0.42,
      0.24,
      -1.84,
      2.17,
      1.43,
      -0.83
    ],
    "volumes": [
      84,
      67,
      121,
      85,
      97,
      107
    ],
    "rsiStack": [
      49.2,
      52.5,
      53.5,
      53.6,
      53.0,
      50.0
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 52.06,
    "change": -0.15,
    "mom": 53.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.4,
    "flow": 83,
    "perf": {
      "w1": -0.67,
      "m1": 1.32,
      "m3": -1.21
    },
    "returns": [
      -0.15,
      0.91,
      -0.67,
      2.16,
      1.32,
      -1.21
    ],
    "volumes": [
      109,
      72,
      103,
      97,
      65,
      140
    ],
    "rsiStack": [
      56.9,
      55.9,
      55.4,
      55.0,
      53.8,
      48.8
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 118.72,
    "change": 0.36,
    "mom": 47.9,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.1,
    "flow": 59,
    "perf": {
      "w1": -0.96,
      "m1": 0.46,
      "m3": 2.31
    },
    "returns": [
      0.36,
      -1.23,
      -0.96,
      1.61,
      0.46,
      2.31
    ],
    "volumes": [
      86,
      78,
      136,
      134,
      104,
      78
    ],
    "rsiStack": [
      48.1,
      54.3,
      56.1,
      55.4,
      53.2,
      48.0
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 84.72,
    "change": 0.33,
    "mom": 60.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 58.6,
    "flow": 87,
    "perf": {
      "w1": 0.57,
      "m1": 4.52,
      "m3": -3.95
    },
    "returns": [
      0.33,
      0.64,
      0.57,
      2.17,
      4.52,
      -3.95
    ],
    "volumes": [
      139,
      91,
      101,
      108,
      96,
      66
    ],
    "rsiStack": [
      66.2,
      62.2,
      58.6,
      55.9,
      53.5,
      49.9
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 528.29,
    "change": 2.38,
    "mom": 55.1,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 73.8,
    "flow": 97,
    "perf": {
      "w1": 4.23,
      "m1": 31.46,
      "m3": 49.19
    },
    "returns": [
      2.38,
      1.54,
      4.23,
      17.4,
      31.46,
      49.19
    ],
    "volumes": [
      200,
      116,
      153,
      84,
      92,
      75
    ],
    "rsiStack": [
      71.0,
      73.3,
      73.8,
      73.1,
      70.8,
      65.6
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 28.73,
    "change": 0.56,
    "mom": 58.1,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 72.3,
    "flow": 109,
    "perf": {
      "w1": 2.39,
      "m1": 5.74,
      "m3": 11.75
    },
    "returns": [
      0.56,
      2.72,
      2.39,
      2.21,
      5.74,
      11.75
    ],
    "volumes": [
      104,
      34,
      118,
      154,
      177,
      64
    ],
    "rsiStack": [
      78.4,
      74.5,
      72.3,
      70.8,
      69.8,
      72.5
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 46.02,
    "change": -0.24,
    "mom": 55.3,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.9,
    "flow": 139,
    "perf": {
      "w1": -0.28,
      "m1": 1.84,
      "m3": 0.83
    },
    "returns": [
      -0.24,
      1.81,
      -0.28,
      2.7,
      1.84,
      0.83
    ],
    "volumes": [
      75,
      101,
      63,
      49,
      69,
      57
    ],
    "rsiStack": [
      59.7,
      56.7,
      54.9,
      54.2,
      53.5,
      49.8
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 41.43,
    "change": 0.82,
    "mom": 52.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.5,
    "flow": 25,
    "perf": {
      "w1": -0.54,
      "m1": 3.33,
      "m3": -3.33
    },
    "returns": [
      0.82,
      -0.95,
      -0.54,
      2.05,
      3.33,
      -3.33
    ],
    "volumes": [
      4,
      1488,
      62,
      153,
      44,
      30
    ],
    "rsiStack": [
      55.0,
      55.3,
      55.5,
      54.8,
      52.8,
      46.9
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 30.17,
    "change": -0.2,
    "mom": 54.9,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 55.3,
    "flow": 62,
    "perf": {
      "w1": -0.37,
      "m1": 0.26,
      "m3": -1.28
    },
    "returns": [
      -0.2,
      1.1,
      -0.37,
      2.79,
      0.26,
      -1.28
    ],
    "volumes": [
      132,
      89,
      13,
      109,
      17,
      22
    ],
    "rsiStack": [
      59.2,
      56.4,
      55.3,
      54.7,
      53.4,
      47.1
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 105.95,
    "change": -0.59,
    "mom": 48.8,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Distribution",
    "signal": "SELL",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.6,
    "flow": 112,
    "perf": {
      "w1": -0.46,
      "m1": 7.74,
      "m3": 11.07
    },
    "returns": [
      -0.59,
      0.97,
      -0.46,
      0.43,
      7.74,
      11.07
    ],
    "volumes": [
      85,
      61,
      120,
      76,
      350,
      69
    ],
    "rsiStack": [
      61.4,
      64.2,
      63.6,
      61.9,
      59.3,
      54.3
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 82.35,
    "change": -0.34,
    "mom": 48.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.4,
    "flow": 43,
    "perf": {
      "w1": -2.23,
      "m1": -1.67,
      "m3": -3.5
    },
    "returns": [
      -0.34,
      0.84,
      -2.23,
      0.56,
      -1.67,
      -3.5
    ],
    "volumes": [
      33,
      548,
      165,
      94,
      58,
      148
    ],
    "rsiStack": [
      44.5,
      44.5,
      45.4,
      46.7,
      47.4,
      42.8
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 13.57,
    "change": 13.18,
    "mom": 69.8,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 67.5,
    "flow": 422,
    "perf": {
      "w1": 11.5,
      "m1": 6.77,
      "m3": -3.96
    },
    "returns": [
      13.18,
      10.15,
      11.5,
      10.87,
      6.77,
      -3.96
    ],
    "volumes": [
      100,
      92,
      127,
      123,
      133,
      91
    ],
    "rsiStack": [
      82.3,
      73.5,
      67.5,
      62.8,
      57.2,
      48.3
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 75.81,
    "change": -0.82,
    "mom": 45.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.6,
    "flow": 101,
    "perf": {
      "w1": -3.67,
      "m1": -2.53,
      "m3": -6.66
    },
    "returns": [
      -0.82,
      -3.79,
      -3.67,
      -1.06,
      -2.53,
      -6.66
    ],
    "volumes": [
      79,
      45,
      82,
      115,
      145,
      91
    ],
    "rsiStack": [
      39.1,
      43.1,
      45.6,
      46.7,
      46.0,
      40.2
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 26.04,
    "change": 0.39,
    "mom": 57.7,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 66.4,
    "flow": 156,
    "perf": {
      "w1": 4.16,
      "m1": 8.14,
      "m3": 13.32
    },
    "returns": [
      0.39,
      3.99,
      4.16,
      2.44,
      8.14,
      13.32
    ],
    "volumes": [
      132,
      40,
      95,
      99,
      79,
      34
    ],
    "rsiStack": [
      75.7,
      69.8,
      66.4,
      64.3,
      63.1,
      65.5
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 25.96,
    "change": 0.35,
    "mom": 45.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.1,
    "flow": 106,
    "perf": {
      "w1": -2.15,
      "m1": -4.52,
      "m3": -5.15
    },
    "returns": [
      0.35,
      1.09,
      -2.15,
      -1.14,
      -4.52,
      -5.15
    ],
    "volumes": [
      73,
      106,
      115,
      101,
      88,
      78
    ],
    "rsiStack": [
      38.5,
      37.9,
      40.1,
      42.5,
      45.2,
      48.0
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 10.4,
    "change": 0.0,
    "mom": 39.7,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 28.3,
    "flow": 110,
    "perf": {
      "w1": -2.62,
      "m1": -9.8,
      "m3": -12.75
    },
    "returns": [
      0.0,
      -1.7,
      -2.62,
      -9.41,
      -9.8,
      -12.75
    ],
    "volumes": [
      90,
      87,
      101,
      108,
      127,
      82
    ],
    "rsiStack": [
      16.0,
      22.2,
      28.3,
      33.4,
      38.2,
      40.2
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 9.53,
    "change": 0.85,
    "mom": 49.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 37.1,
    "flow": 118,
    "perf": {
      "w1": -2.66,
      "m1": -8.28,
      "m3": -16.55
    },
    "returns": [
      0.85,
      -2.06,
      -2.66,
      -1.65,
      -8.28,
      -16.55
    ],
    "volumes": [
      179,
      78,
      113,
      112,
      124,
      78
    ],
    "rsiStack": [
      38.1,
      36.7,
      37.1,
      38.6,
      40.5,
      39.6
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 189.36,
    "change": -4.64,
    "mom": 46.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.9,
    "flow": 103,
    "perf": {
      "w1": -4.5,
      "m1": 12.48,
      "m3": 51.73
    },
    "returns": [
      -4.64,
      0.45,
      -4.5,
      7.73,
      12.48,
      51.73
    ],
    "volumes": [
      95,
      66,
      82,
      49,
      59,
      152
    ],
    "rsiStack": [
      47.4,
      54.5,
      57.9,
      58.9,
      58.6,
      57.0
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 177.95,
    "change": 8.18,
    "mom": 48.4,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 69.4,
    "flow": 122,
    "perf": {
      "w1": 3.37,
      "m1": 32.21,
      "m3": 125.22
    },
    "returns": [
      8.18,
      4.6,
      3.37,
      13.66,
      32.21,
      125.22
    ],
    "volumes": [
      84,
      78,
      83,
      52,
      68,
      90
    ],
    "rsiStack": [
      68.2,
      68.0,
      69.4,
      70.0,
      69.2,
      63.9
    ]
  }
];
