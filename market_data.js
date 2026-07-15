window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-07-15 23:27:50",
  "sections": {
    "Index": {
      "risk": "Risk Off",
      "leader": "DJI",
      "watch": 0
    },
    "Commodity": {
      "risk": "Neutral",
      "leader": "CF",
      "watch": 0
    },
    "Crypto": {
      "risk": "Strong ON",
      "leader": "BTC",
      "watch": 0
    },
    "ETF": {
      "risk": "Risk On",
      "leader": "DBA",
      "watch": 3
    },
    "Stock": {
      "risk": "Risk On",
      "leader": "TAGS",
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
    "price": 7572.4,
    "change": 0.38,
    "mom": 52.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.5,
    "flow": 55,
    "perf": {
      "w1": 1.2,
      "m1": 0.24,
      "m3": 6.26
    },
    "returns": [
      0.38,
      -0.04,
      1.2,
      0.97,
      0.24,
      6.26
    ],
    "volumes": [
      85,
      69,
      86,
      84,
      101,
      101
    ],
    "rsiStack": [
      65.2,
      60.9,
      58.5,
      57.5,
      55.0,
      45.0
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 52658.64,
    "change": 0.29,
    "mom": 46.7,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.7,
    "flow": 89,
    "perf": {
      "w1": 0.59,
      "m1": 1.91,
      "m3": 6.49
    },
    "returns": [
      0.29,
      0.04,
      0.59,
      0.65,
      1.91,
      6.49
    ],
    "volumes": [
      81,
      71,
      77,
      78,
      104,
      94
    ],
    "rsiStack": [
      60.1,
      61.2,
      61.7,
      61.1,
      57.6,
      46.1
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 6856.83,
    "change": 0.73,
    "mom": 31.4,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.6,
    "flow": 107,
    "perf": {
      "w1": -10.44,
      "m1": -21.43,
      "m3": 12.57
    },
    "returns": [
      0.73,
      -5.97,
      -10.44,
      -19.11,
      -21.43,
      12.57
    ],
    "volumes": [
      102,
      124,
      112,
      101,
      97,
      109
    ],
    "rsiStack": [
      24.9,
      31.0,
      36.6,
      40.9,
      45.2,
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
    "rsi": 49.1,
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
      106,
      96,
      103,
      83,
      99,
      83
    ],
    "rsiStack": [
      43.5,
      45.8,
      49.1,
      51.6,
      53.7,
      54.5
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 372.35,
    "change": 0.05,
    "mom": 56.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.6,
    "flow": 106,
    "perf": {
      "w1": -0.56,
      "m1": -6.1,
      "m3": -16.5
    },
    "returns": [
      0.05,
      -1.24,
      -0.56,
      1.08,
      -6.1,
      -16.5
    ],
    "volumes": [
      86,
      71,
      92,
      45,
      63,
      142
    ],
    "rsiStack": [
      45.1,
      43.2,
      41.6,
      41.3,
      44.1,
      54.8
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 52.21,
    "change": -1.81,
    "mom": 50.4,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.8,
    "flow": 83,
    "perf": {
      "w1": -1.17,
      "m1": -17.74,
      "m3": -29.09
    },
    "returns": [
      -1.81,
      -3.23,
      -1.17,
      -2.36,
      -17.74,
      -29.09
    ],
    "volumes": [
      67,
      57,
      89,
      57,
      67,
      96
    ],
    "rsiStack": [
      36.2,
      36.6,
      36.8,
      38.2,
      42.2,
      52.5
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 40.9,
    "change": -1.56,
    "mom": 46.6,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.2,
    "flow": 103,
    "perf": {
      "w1": -1.82,
      "m1": -14.9,
      "m3": -26.78
    },
    "returns": [
      -1.56,
      -4.82,
      -1.82,
      -6.41,
      -14.9,
      -26.78
    ],
    "volumes": [
      64,
      68,
      66,
      43,
      62,
      121
    ],
    "rsiStack": [
      33.5,
      34.4,
      36.2,
      38.2,
      40.4,
      41.9
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 80.25,
    "change": 1.15,
    "mom": 68.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 54.7,
    "flow": 1,
    "perf": {
      "w1": 9.15,
      "m1": -0.62,
      "m3": -4.29
    },
    "returns": [
      1.15,
      12.38,
      9.15,
      15.47,
      -0.62,
      -4.29
    ],
    "volumes": [
      140,
      96,
      190,
      102,
      84,
      78
    ],
    "rsiStack": [
      81.2,
      65.3,
      54.7,
      49.9,
      48.4,
      49.4
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 117.82,
    "change": -1.15,
    "mom": 57.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.7,
    "flow": 62,
    "perf": {
      "w1": 0.68,
      "m1": 10.22,
      "m3": 4.56
    },
    "returns": [
      -1.15,
      0.77,
      0.68,
      8.83,
      10.22,
      4.56
    ],
    "volumes": [
      65,
      39,
      131,
      107,
      110,
      118
    ],
    "rsiStack": [
      61.2,
      62.6,
      58.7,
      55.3,
      53.5,
      55.1
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 34.87,
    "change": -2.35,
    "mom": 55.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.3,
    "flow": 56,
    "perf": {
      "w1": 0.2,
      "m1": -2.76,
      "m3": -0.91
    },
    "returns": [
      -2.35,
      0.2,
      0.2,
      6.38,
      -2.76,
      -0.91
    ],
    "volumes": [
      73,
      60,
      85,
      46,
      197,
      98
    ],
    "rsiStack": [
      50.8,
      50.8,
      48.3,
      46.9,
      45.9,
      42.7
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 23.04,
    "change": 0.44,
    "mom": 72.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.6,
    "flow": 72,
    "perf": {
      "w1": 11.57,
      "m1": 2.31,
      "m3": -6.23
    },
    "returns": [
      0.44,
      7.11,
      11.57,
      8.73,
      2.31,
      -6.23
    ],
    "volumes": [
      84,
      64,
      74,
      71,
      149,
      159
    ],
    "rsiStack": [
      79.9,
      65.8,
      58.6,
      54.6,
      52.3,
      54.3
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 68.33,
    "change": -0.45,
    "mom": 65.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.2,
    "flow": 45,
    "perf": {
      "w1": 2.35,
      "m1": 3.33,
      "m3": -3.24
    },
    "returns": [
      -0.45,
      4.43,
      2.35,
      8.55,
      3.33,
      -3.24
    ],
    "volumes": [
      78,
      48,
      98,
      87,
      182,
      130
    ],
    "rsiStack": [
      72.3,
      65.7,
      59.2,
      54.6,
      51.8,
      52.9
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 64819.26,
    "change": -0.21,
    "mom": 59.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.6,
    "flow": 98,
    "perf": {
      "w1": 1.08,
      "m1": 8.54,
      "m3": -17.04
    },
    "returns": [
      -0.21,
      1.66,
      1.08,
      2.0,
      8.54,
      -17.04
    ],
    "volumes": [
      105,
      67,
      94,
      96,
      65,
      141
    ],
    "rsiStack": [
      64.6,
      60.5,
      55.6,
      51.6,
      48.3,
      46.4
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 167.21,
    "change": 3.54,
    "mom": 65.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.2,
    "flow": 98,
    "perf": {
      "w1": 4.93,
      "m1": -1.42,
      "m3": -18.96
    },
    "returns": [
      3.54,
      5.12,
      4.93,
      14.38,
      -1.42,
      -18.96
    ],
    "volumes": [
      95,
      79,
      59,
      74,
      100,
      104
    ],
    "rsiStack": [
      69.4,
      58.9,
      53.2,
      50.1,
      46.8,
      39.3
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 65.69,
    "change": 3.91,
    "mom": 57.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.1,
    "flow": 78,
    "perf": {
      "w1": 2.53,
      "m1": -21.21,
      "m3": -37.98
    },
    "returns": [
      3.91,
      -0.68,
      2.53,
      4.89,
      -21.21,
      -37.98
    ],
    "volumes": [
      105,
      252,
      64,
      91,
      278,
      118
    ],
    "rsiStack": [
      51.1,
      42.9,
      40.1,
      40.1,
      40.8,
      39.1
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 97.47,
    "change": -0.11,
    "mom": 58.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.5,
    "flow": 54,
    "perf": {
      "w1": 3.84,
      "m1": -25.67,
      "m3": -41.47
    },
    "returns": [
      -0.11,
      2.99,
      3.84,
      12.12,
      -25.67,
      -41.47
    ],
    "volumes": [
      66,
      59,
      64,
      94,
      127,
      107
    ],
    "rsiStack": [
      56.0,
      45.9,
      41.5,
      40.3,
      39.5,
      34.6
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 56.5,
    "change": -0.79,
    "mom": 60.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.8,
    "flow": 101,
    "perf": {
      "w1": 1.62,
      "m1": 1.71,
      "m3": 2.69
    },
    "returns": [
      -0.79,
      2.58,
      1.62,
      6.38,
      1.71,
      2.69
    ],
    "volumes": [
      98,
      69,
      113,
      73,
      83,
      112
    ],
    "rsiStack": [
      68.1,
      61.6,
      55.8,
      52.7,
      51.1,
      50.8
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 181.58,
    "change": -1.11,
    "mom": 39.4,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.2,
    "flow": 85,
    "perf": {
      "w1": 0.1,
      "m1": -5.32,
      "m3": 17.64
    },
    "returns": [
      -1.11,
      -2.26,
      0.1,
      -4.69,
      -5.32,
      17.64
    ],
    "volumes": [
      58,
      51,
      76,
      61,
      72,
      84
    ],
    "rsiStack": [
      43.4,
      46.0,
      48.2,
      50.3,
      51.7,
      48.8
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 45.22,
    "change": -1.03,
    "mom": 45.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.0,
    "flow": 79,
    "perf": {
      "w1": -0.31,
      "m1": 1.07,
      "m3": -2.04
    },
    "returns": [
      -1.03,
      -0.42,
      -0.31,
      -0.26,
      1.07,
      -2.04
    ],
    "volumes": [
      86,
      69,
      72,
      91,
      91,
      89
    ],
    "rsiStack": [
      42.1,
      48.2,
      50.0,
      50.2,
      49.4,
      45.5
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 158.29,
    "change": 0.0,
    "mom": 36.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.1,
    "flow": 95,
    "perf": {
      "w1": -2.47,
      "m1": 3.53,
      "m3": 6.38
    },
    "returns": [
      0.0,
      -1.59,
      -2.47,
      -0.23,
      3.53,
      6.38
    ],
    "volumes": [
      104,
      85,
      81,
      135,
      99,
      87
    ],
    "rsiStack": [
      35.1,
      47.9,
      53.1,
      55.0,
      55.2,
      53.2
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 113.38,
    "change": 1.73,
    "mom": 71.6,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.2,
    "flow": 81,
    "perf": {
      "w1": 3.58,
      "m1": 1.06,
      "m3": -4.8
    },
    "returns": [
      1.73,
      1.56,
      3.58,
      5.83,
      1.06,
      -4.8
    ],
    "volumes": [
      65,
      82,
      70,
      111,
      64,
      111
    ],
    "rsiStack": [
      79.5,
      68.0,
      60.2,
      55.4,
      50.8,
      42.7
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 56.56,
    "change": 0.68,
    "mom": 64.0,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 70.6,
    "flow": 140,
    "perf": {
      "w1": 2.89,
      "m1": 5.6,
      "m3": 7.88
    },
    "returns": [
      0.68,
      1.53,
      2.89,
      5.5,
      5.6,
      7.88
    ],
    "volumes": [
      124,
      68,
      114,
      86,
      74,
      98
    ],
    "rsiStack": [
      77.5,
      73.3,
      70.6,
      67.8,
      61.6,
      46.7
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 44.56,
    "change": 0.18,
    "mom": 51.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.2,
    "flow": 84,
    "perf": {
      "w1": 0.93,
      "m1": -0.96,
      "m3": 0.18
    },
    "returns": [
      0.18,
      0.25,
      0.93,
      1.2,
      -0.96,
      0.18
    ],
    "volumes": [
      72,
      65,
      69,
      121,
      162,
      108
    ],
    "rsiStack": [
      52.7,
      51.3,
      51.2,
      51.4,
      50.3,
      43.1
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 180.06,
    "change": -0.22,
    "mom": 35.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.5,
    "flow": 99,
    "perf": {
      "w1": -0.2,
      "m1": 0.77,
      "m3": 3.78
    },
    "returns": [
      -0.22,
      -1.02,
      -0.2,
      -2.79,
      0.77,
      3.78
    ],
    "volumes": [
      90,
      69,
      88,
      81,
      78,
      91
    ],
    "rsiStack": [
      37.3,
      46.4,
      50.5,
      52.1,
      51.6,
      45.2
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 50.5,
    "change": -0.28,
    "mom": 46.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.3,
    "flow": 108,
    "perf": {
      "w1": 0.68,
      "m1": -3.81,
      "m3": -2.66
    },
    "returns": [
      -0.28,
      -0.77,
      0.68,
      -0.65,
      -3.81,
      -2.66
    ],
    "volumes": [
      76,
      62,
      108,
      165,
      70,
      117
    ],
    "rsiStack": [
      39.7,
      43.0,
      45.3,
      46.6,
      47.2,
      44.9
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 117.0,
    "change": 0.95,
    "mom": 53.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.2,
    "flow": 95,
    "perf": {
      "w1": 1.47,
      "m1": -1.32,
      "m3": -2.83
    },
    "returns": [
      0.95,
      -0.2,
      1.47,
      -0.24,
      -1.32,
      -2.83
    ],
    "volumes": [
      79,
      69,
      173,
      111,
      68,
      83
    ],
    "rsiStack": [
      55.4,
      52.5,
      51.2,
      50.5,
      48.4,
      40.0
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 83.47,
    "change": 0.06,
    "mom": 43.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.4,
    "flow": 64,
    "perf": {
      "w1": -1.09,
      "m1": -2.35,
      "m3": 1.22
    },
    "returns": [
      0.06,
      -0.77,
      -1.09,
      0.48,
      -2.35,
      1.22
    ],
    "volumes": [
      67,
      68,
      87,
      104,
      100,
      87
    ],
    "rsiStack": [
      42.3,
      45.8,
      47.4,
      48.3,
      49.2,
      51.1
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 555.27,
    "change": -2.23,
    "mom": 34.7,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.2,
    "flow": 100,
    "perf": {
      "w1": -1.2,
      "m1": -11.64,
      "m3": 33.57
    },
    "returns": [
      -2.23,
      -4.48,
      -1.2,
      -13.34,
      -11.64,
      33.57
    ],
    "volumes": [
      74,
      57,
      63,
      69,
      85,
      74
    ],
    "rsiStack": [
      38.9,
      42.9,
      46.2,
      48.8,
      51.2,
      52.4
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 27.98,
    "change": 1.27,
    "mom": 61.2,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 67.1,
    "flow": 132,
    "perf": {
      "w1": 1.3,
      "m1": 6.07,
      "m3": 3.94
    },
    "returns": [
      1.27,
      0.76,
      1.3,
      4.91,
      6.07,
      3.94
    ],
    "volumes": [
      55,
      133,
      64,
      105,
      52,
      107
    ],
    "rsiStack": [
      80.1,
      73.8,
      67.1,
      62.3,
      58.3,
      53.6
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 44.48,
    "change": 0.41,
    "mom": 60.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.2,
    "flow": 56,
    "perf": {
      "w1": 0.93,
      "m1": 2.42,
      "m3": -1.92
    },
    "returns": [
      0.41,
      1.07,
      0.93,
      0.84,
      2.42,
      -1.92
    ],
    "volumes": [
      54,
      52,
      25,
      78,
      34,
      205
    ],
    "rsiStack": [
      64.8,
      58.9,
      55.2,
      52.7,
      50.7,
      48.1
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 44.86,
    "change": -0.1,
    "mom": 40.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.8,
    "flow": 40,
    "perf": {
      "w1": 0.79,
      "m1": -1.4,
      "m3": 8.05
    },
    "returns": [
      -0.1,
      -1.18,
      0.79,
      -1.55,
      -1.4,
      8.05
    ],
    "volumes": [
      27,
      75,
      39,
      51,
      67,
      59
    ],
    "rsiStack": [
      43.2,
      48.5,
      51.8,
      53.5,
      52.8,
      45.2
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.16,
    "change": -0.47,
    "mom": 54.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.7,
    "flow": 91,
    "perf": {
      "w1": -0.1,
      "m1": 2.07,
      "m3": -2.96
    },
    "returns": [
      -0.47,
      0.28,
      -0.1,
      0.91,
      2.07,
      -2.96
    ],
    "volumes": [
      27,
      228,
      12,
      84,
      30,
      13
    ],
    "rsiStack": [
      52.8,
      55.1,
      53.7,
      52.0,
      49.8,
      45.1
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 105.11,
    "change": -1.0,
    "mom": 49.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.7,
    "flow": 65,
    "perf": {
      "w1": 1.19,
      "m1": 3.46,
      "m3": 5.11
    },
    "returns": [
      -1.0,
      -0.85,
      1.19,
      2.86,
      3.46,
      5.11
    ],
    "volumes": [
      70,
      62,
      89,
      92,
      87,
      89
    ],
    "rsiStack": [
      50.0,
      55.1,
      55.7,
      55.4,
      55.2,
      56.5
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 81.58,
    "change": 0.09,
    "mom": 63.5,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.4,
    "flow": 160,
    "perf": {
      "w1": 0.88,
      "m1": 4.23,
      "m3": -2.04
    },
    "returns": [
      0.09,
      0.75,
      0.88,
      3.01,
      4.23,
      -2.04
    ],
    "volumes": [
      42,
      100,
      93,
      67,
      46,
      127
    ],
    "rsiStack": [
      74.3,
      68.5,
      62.4,
      57.7,
      53.7,
      50.7
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 14.18,
    "change": 1.72,
    "mom": 55.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.6,
    "flow": 96,
    "perf": {
      "w1": 5.04,
      "m1": -3.99,
      "m3": 10.18
    },
    "returns": [
      1.72,
      1.29,
      5.04,
      2.01,
      -3.99,
      10.18
    ],
    "volumes": [
      81,
      90,
      83,
      101,
      107,
      70
    ],
    "rsiStack": [
      67.8,
      56.4,
      52.6,
      51.9,
      51.2,
      47.1
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 77.64,
    "change": 1.0,
    "mom": 55.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.1,
    "flow": 52,
    "perf": {
      "w1": 1.84,
      "m1": -7.65,
      "m3": -4.53
    },
    "returns": [
      1.0,
      -0.27,
      1.84,
      0.73,
      -7.65,
      -4.53
    ],
    "volumes": [
      61,
      58,
      59,
      100,
      85,
      97
    ],
    "rsiStack": [
      57.2,
      49.7,
      48.1,
      48.0,
      46.7,
      39.7
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 25.32,
    "change": 1.7,
    "mom": 65.6,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 68.4,
    "flow": 138,
    "perf": {
      "w1": 3.23,
      "m1": 7.03,
      "m3": 5.69
    },
    "returns": [
      1.7,
      1.99,
      3.23,
      6.22,
      7.03,
      5.69
    ],
    "volumes": [
      14,
      41,
      71,
      158,
      82,
      71
    ],
    "rsiStack": [
      87.6,
      77.2,
      68.4,
      62.4,
      57.5,
      52.0
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 24.82,
    "change": 2.35,
    "mom": 69.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.1,
    "flow": 63,
    "perf": {
      "w1": 3.2,
      "m1": -4.54,
      "m3": -9.94
    },
    "returns": [
      2.35,
      2.69,
      3.2,
      3.07,
      -4.54,
      -9.94
    ],
    "volumes": [
      80,
      54,
      74,
      114,
      125,
      100
    ],
    "rsiStack": [
      68.0,
      56.8,
      51.1,
      48.2,
      46.4,
      44.6
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.58,
    "change": -0.83,
    "mom": 56.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.8,
    "flow": 83,
    "perf": {
      "w1": -0.1,
      "m1": -1.84,
      "m3": -18.74
    },
    "returns": [
      -0.83,
      -0.21,
      -0.1,
      -1.03,
      -1.84,
      -18.74
    ],
    "volumes": [
      60,
      92,
      88,
      95,
      133,
      142
    ],
    "rsiStack": [
      44.2,
      42.6,
      40.8,
      39.7,
      38.7,
      35.5
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.66,
    "change": 0.0,
    "mom": 72.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.9,
    "flow": 60,
    "perf": {
      "w1": 2.0,
      "m1": -2.15,
      "m3": -15.92
    },
    "returns": [
      0.0,
      1.17,
      2.0,
      1.52,
      -2.15,
      -15.92
    ],
    "volumes": [
      67,
      56,
      99,
      73,
      103,
      194
    ],
    "rsiStack": [
      64.5,
      50.0,
      43.9,
      41.3,
      39.4,
      35.9
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 226.74,
    "change": -4.0,
    "mom": 34.0,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.0,
    "flow": 61,
    "perf": {
      "w1": -12.35,
      "m1": -12.59,
      "m3": 41.1
    },
    "returns": [
      -4.0,
      -12.04,
      -12.35,
      -16.62,
      -12.59,
      41.1
    ],
    "volumes": [
      45,
      41,
      54,
      67,
      69,
      80
    ],
    "rsiStack": [
      29.8,
      39.8,
      45.0,
      48.2,
      51.0,
      53.6
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 206.26,
    "change": -7.27,
    "mom": 32.2,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.1,
    "flow": 56,
    "perf": {
      "w1": -10.98,
      "m1": -33.22,
      "m3": 47.66
    },
    "returns": [
      -7.27,
      -12.53,
      -10.98,
      -30.76,
      -33.22,
      47.66
    ],
    "volumes": [
      44,
      30,
      46,
      42,
      52,
      97
    ],
    "rsiStack": [
      23.6,
      32.3,
      39.1,
      43.7,
      47.8,
      51.2
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 68.33,
    "chg": -0.45,
    "chgW": 2.35,
    "chgM": 3.33,
    "chgYTD": 10.71,
    "marketCap": "$32.8B",
    "pe": "13.9x",
    "evEbitda": "8.2x",
    "de": "0.6x",
    "drawdown": "-20.0%"
  },
  "MOS": {
    "price": 23.04,
    "chg": 0.44,
    "chgW": 11.57,
    "chgM": 2.31,
    "chgYTD": -4.36,
    "marketCap": "$7.3B",
    "pe": "164.6x",
    "evEbitda": "6.5x",
    "de": "0.5x",
    "drawdown": "-38.6%"
  },
  "CF": {
    "price": 117.82,
    "chg": -1.15,
    "chgW": 0.68,
    "chgM": 10.22,
    "chgYTD": 52.34,
    "marketCap": "$18.1B",
    "pe": "10.6x",
    "evEbitda": "6.6x",
    "de": "0.4x",
    "drawdown": "-17.0%"
  },
  "ICL": {
    "price": 5.1,
    "chg": 1.8,
    "chgW": 0.59,
    "chgM": -11.3,
    "chgYTD": -10.68,
    "marketCap": "$6.6B",
    "pe": "24.3x",
    "evEbitda": "7.3x",
    "de": "0.5x",
    "drawdown": "-28.0%"
  },
  "FMC": {
    "price": 10.83,
    "chg": 1.03,
    "chgW": -1.01,
    "chgM": -5.91,
    "chgYTD": -21.92,
    "marketCap": "$1.4B",
    "pe": "5.2x",
    "evEbitda": "17.0x",
    "de": "2.5x",
    "drawdown": "-75.4%"
  },
  "CTVA": {
    "price": 84.45,
    "chg": -0.54,
    "chgW": -0.86,
    "chgM": 11.54,
    "chgYTD": 25.99,
    "marketCap": "$56.5B",
    "pe": "45.6x",
    "evEbitda": "14.1x",
    "de": "0.1x",
    "drawdown": "-3.7%"
  },
  "ADM": {
    "price": 82.3,
    "chg": 0.02,
    "chgW": 2.5,
    "chgM": 3.82,
    "chgYTD": 43.16,
    "marketCap": "$39.7B",
    "pe": "36.7x",
    "evEbitda": "19.7x",
    "de": "0.5x",
    "drawdown": "-3.6%"
  },
  "BG": {
    "price": 115.72,
    "chg": -0.78,
    "chgW": 0.43,
    "chgM": -5.92,
    "chgYTD": 29.91,
    "marketCap": "$22.5B",
    "pe": "30.5x",
    "evEbitda": "17.4x",
    "de": "0.9x",
    "drawdown": "-14.2%"
  },
  "INGR": {
    "price": 99.17,
    "chg": 0.99,
    "chgW": 1.24,
    "chgM": -2.31,
    "chgYTD": -10.06,
    "marketCap": "$6.3B",
    "pe": "9.5x",
    "evEbitda": "6.0x",
    "de": "0.4x",
    "drawdown": "-27.0%"
  },
  "FPI": {
    "price": 9.58,
    "chg": -0.83,
    "chgW": -0.1,
    "chgM": -1.84,
    "chgYTD": -1.14,
    "marketCap": "$425M",
    "pe": "16.2x",
    "evEbitda": "24.1x",
    "de": "0.5x",
    "drawdown": "-27.6%"
  },
  "LAND": {
    "price": 8.66,
    "chg": 0.0,
    "chgW": 2.0,
    "chgM": -2.15,
    "chgYTD": -5.36,
    "marketCap": "$374M",
    "pe": "-18.2x",
    "evEbitda": "12.4x",
    "de": "0.7x",
    "drawdown": "-33.4%"
  },
  "DE": {
    "price": 589.48,
    "chg": 0.87,
    "chgW": -1.22,
    "chgM": 2.43,
    "chgYTD": 26.61,
    "marketCap": "$159.1B",
    "pe": "33.4x",
    "evEbitda": "22.9x",
    "de": "3.8x",
    "drawdown": "-12.6%"
  },
  "AGCO": {
    "price": 114.89,
    "chg": 0.66,
    "chgW": 1.02,
    "chgM": 2.09,
    "chgYTD": 10.13,
    "marketCap": "$8.3B",
    "pe": "11.1x",
    "evEbitda": "10.2x",
    "de": "0.6x",
    "drawdown": "-20.1%"
  },
  "CNH": {
    "price": 10.57,
    "chg": 1.44,
    "chgW": 2.92,
    "chgM": -0.94,
    "chgYTD": 14.64,
    "marketCap": "$13.1B",
    "pe": "33.0x",
    "evEbitda": "35.0x",
    "de": "3.3x",
    "drawdown": "-21.6%"
  },
  "XYL": {
    "price": 121.43,
    "chg": -0.1,
    "chgW": 2.37,
    "chgM": 9.43,
    "chgYTD": -10.83,
    "marketCap": "$28.9B",
    "pe": "30.2x",
    "evEbitda": "15.9x",
    "de": "0.2x",
    "drawdown": "-21.3%"
  },
  "VMI": {
    "price": 544.38,
    "chg": 0.17,
    "chgW": 0.73,
    "chgM": 0.7,
    "chgYTD": 35.31,
    "marketCap": "$10.6B",
    "pe": "30.3x",
    "evEbitda": "17.7x",
    "de": "0.5x",
    "drawdown": "-7.1%"
  },
  "LNN": {
    "price": 115.65,
    "chg": 0.16,
    "chgW": 4.05,
    "chgM": 0.74,
    "chgYTD": -1.88,
    "marketCap": "$1.2B",
    "pe": "22.2x",
    "evEbitda": "13.7x",
    "de": "0.3x",
    "drawdown": "-21.9%"
  },
  "MWA": {
    "price": 24.87,
    "chg": 0.69,
    "chgW": 0.48,
    "chgM": -3.57,
    "chgYTD": 4.41,
    "marketCap": "$3.9B",
    "pe": "18.8x",
    "evEbitda": "11.5x",
    "de": "0.4x",
    "drawdown": "-19.8%"
  },
  "WTS": {
    "price": 349.21,
    "chg": -0.23,
    "chgW": 0.33,
    "chgM": 4.78,
    "chgYTD": 26.52,
    "marketCap": "$11.7B",
    "pe": "32.0x",
    "evEbitda": "20.8x",
    "de": "0.1x",
    "drawdown": "-11.5%"
  },
  "TSN": {
    "price": 57.47,
    "chg": -0.02,
    "chgW": -1.42,
    "chgM": 0.3,
    "chgYTD": -1.96,
    "marketCap": "$20.2B",
    "pe": "45.3x",
    "evEbitda": "10.3x",
    "de": "0.4x",
    "drawdown": "-17.3%"
  },
  "PPC": {
    "price": 28.42,
    "chg": 0.71,
    "chgW": 3.72,
    "chgM": -2.13,
    "chgYTD": -27.11,
    "marketCap": "$6.8B",
    "pe": "7.6x",
    "evEbitda": "4.7x",
    "de": "0.9x",
    "drawdown": "-43.8%"
  },
  "HRL": {
    "price": 25.15,
    "chg": 1.37,
    "chgW": 2.49,
    "chgM": 2.32,
    "chgYTD": 6.12,
    "marketCap": "$13.8B",
    "pe": "29.6x",
    "evEbitda": "10.8x",
    "de": "0.0x",
    "drawdown": "-16.4%"
  },
  "CAG": {
    "price": 14.09,
    "chg": -0.42,
    "chgW": 2.32,
    "chgM": 3.53,
    "chgYTD": -18.6,
    "marketCap": "$6.7B",
    "pe": "8.4x",
    "evEbitda": "8.1x",
    "de": "0.9x",
    "drawdown": "-30.7%"
  },
  "CALM": {
    "price": 85.36,
    "chg": 2.67,
    "chgW": 0.33,
    "chgM": 7.28,
    "chgYTD": 7.28,
    "marketCap": "$4.0B",
    "pe": "5.9x",
    "evEbitda": "2.9x",
    "de": "–",
    "drawdown": "-32.5%"
  },
  "DBA": {
    "price": 27.98,
    "chg": 1.27,
    "chgW": 1.3,
    "chgM": 6.07,
    "chgYTD": 9.64,
    "marketCap": "–",
    "pe": "11.8x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-3.0%"
  },
  "MOO": {
    "price": 81.58,
    "chg": 0.09,
    "chgW": 0.88,
    "chgM": 4.23,
    "chgYTD": 12.08,
    "marketCap": "–",
    "pe": "18.5x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-5.8%"
  },
  "VEGI": {
    "price": 44.48,
    "chg": 0.41,
    "chgW": 0.93,
    "chgM": 2.42,
    "chgYTD": 15.32,
    "marketCap": "–",
    "pe": "20.8x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-5.9%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "55.9x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
