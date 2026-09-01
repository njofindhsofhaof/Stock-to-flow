window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-09-01 01:21:06",
  "sections": {
    "Index": {
      "risk": "Neutral",
      "leader": "KOSPI",
      "watch": 1
    },
    "Commodity": {
      "risk": "Strong ON",
      "leader": "IPI",
      "watch": 2
    },
    "Crypto": {
      "risk": "Risk On",
      "leader": "CRCL",
      "watch": 2
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "XLE",
      "watch": 4
    },
    "Stock": {
      "risk": "Risk Off",
      "leader": "LAND",
      "watch": 6
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
    "price": 7686.14,
    "change": -0.33,
    "mom": 46.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.5,
    "flow": 74,
    "perf": {
      "w1": 0.43,
      "m1": 1.13,
      "m3": 1.34
    },
    "returns": [
      -0.33,
      0.14,
      0.43,
      -0.76,
      1.13,
      1.34
    ],
    "volumes": [
      90,
      84,
      88,
      94,
      87,
      102
    ],
    "rsiStack": [
      46.3,
      50.9,
      53.5,
      54.6,
      54.4,
      50.0
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 53185.9,
    "change": -0.7,
    "mom": 38.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.5,
    "flow": 114,
    "perf": {
      "w1": -0.43,
      "m1": 0.01,
      "m3": 3.15
    },
    "returns": [
      -0.7,
      -0.52,
      -0.43,
      -0.51,
      0.01,
      3.15
    ],
    "volumes": [
      113,
      93,
      88,
      91,
      91,
      121
    ],
    "rsiStack": [
      36.2,
      45.0,
      49.5,
      52.1,
      53.2,
      49.9
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 6851.57,
    "change": 0.92,
    "mom": 54.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.4,
    "flow": 28,
    "perf": {
      "w1": 2.31,
      "m1": 3.88,
      "m3": -20.69
    },
    "returns": [
      0.92,
      0.64,
      2.31,
      -1.81,
      3.88,
      -20.69
    ],
    "volumes": [
      89,
      97,
      79,
      88,
      95,
      102
    ],
    "rsiStack": [
      56.3,
      54.2,
      51.4,
      49.5,
      46.9,
      39.0
    ]
  },
  {
    "symbol": "NI225",
    "dataSymbol": "^N225",
    "section": "Index",
    "name": "Japan Index",
    "category": "Broad",
    "price": 66150.46,
    "change": -0.38,
    "mom": 47.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.3,
    "flow": 0,
    "perf": {
      "w1": 0.95,
      "m1": 2.78,
      "m3": -1.96
    },
    "returns": [
      -0.38,
      -0.17,
      0.95,
      -4.43,
      2.78,
      -1.96
    ],
    "volumes": [
      88,
      73,
      70,
      87,
      78,
      136
    ],
    "rsiStack": [
      47.1,
      48.9,
      49.3,
      49.6,
      49.2,
      44.4
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 408.42,
    "change": -0.11,
    "mom": 40.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 54.2,
    "flow": 79,
    "perf": {
      "w1": -4.28,
      "m1": 9.88,
      "m3": -0.69
    },
    "returns": [
      -0.11,
      -3.06,
      -4.28,
      0.72,
      9.88,
      -0.69
    ],
    "volumes": [
      214,
      92,
      182,
      152,
      117,
      77
    ],
    "rsiStack": [
      35.7,
      49.5,
      54.2,
      54.4,
      50.2,
      36.7
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 60.13,
    "change": 0.18,
    "mom": 47.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 54.7,
    "flow": 84,
    "perf": {
      "w1": -3.33,
      "m1": 14.62,
      "m3": -10.23
    },
    "returns": [
      0.18,
      -2.37,
      -3.33,
      0.94,
      14.62,
      -10.23
    ],
    "volumes": [
      207,
      79,
      121,
      155,
      84,
      83
    ],
    "rsiStack": [
      42.5,
      52.2,
      54.7,
      53.4,
      47.8,
      34.0
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 45.51,
    "change": -0.13,
    "mom": 48.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 53.1,
    "flow": 59,
    "perf": {
      "w1": -0.39,
      "m1": 11.52,
      "m3": -9.49
    },
    "returns": [
      -0.13,
      -5.29,
      -0.39,
      0.57,
      11.52,
      -9.49
    ],
    "volumes": [
      179,
      179,
      84,
      97,
      63,
      95
    ],
    "rsiStack": [
      42.6,
      51.0,
      53.1,
      52.2,
      48.0,
      36.4
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 86.5,
    "change": 3.72,
    "mom": 54.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.5,
    "flow": 3,
    "perf": {
      "w1": 1.75,
      "m1": 7.67,
      "m3": -7.03
    },
    "returns": [
      3.72,
      5.19,
      1.75,
      2.37,
      7.67,
      -7.03
    ],
    "volumes": [
      94,
      108,
      89,
      101,
      62,
      101
    ],
    "rsiStack": [
      68.0,
      60.8,
      57.5,
      55.1,
      53.8,
      56.6
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 130.03,
    "change": 3.37,
    "mom": 58.7,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.8,
    "flow": 132,
    "perf": {
      "w1": 0.61,
      "m1": 9.92,
      "m3": 10.64
    },
    "returns": [
      3.37,
      3.44,
      0.61,
      10.4,
      9.92,
      10.64
    ],
    "volumes": [
      64,
      80,
      84,
      143,
      91,
      95
    ],
    "rsiStack": [
      75.2,
      67.2,
      62.8,
      60.1,
      58.0,
      58.1
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 38.67,
    "change": 2.85,
    "mom": 59.8,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.8,
    "flow": 101,
    "perf": {
      "w1": 2.06,
      "m1": 16.16,
      "m3": 4.01
    },
    "returns": [
      2.85,
      3.45,
      2.06,
      5.66,
      16.16,
      4.01
    ],
    "volumes": [
      72,
      74,
      148,
      176,
      70,
      122
    ],
    "rsiStack": [
      70.9,
      66.0,
      62.8,
      59.6,
      55.8,
      52.3
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 24.12,
    "change": 2.2,
    "mom": 60.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.9,
    "flow": 87,
    "perf": {
      "w1": 0.5,
      "m1": 10.59,
      "m3": 5.33
    },
    "returns": [
      2.2,
      -0.17,
      0.5,
      13.61,
      10.59,
      5.33
    ],
    "volumes": [
      67,
      96,
      104,
      159,
      120,
      107
    ],
    "rsiStack": [
      64.1,
      61.3,
      58.9,
      56.8,
      53.4,
      46.2
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 75.53,
    "change": 2.75,
    "mom": 60.2,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 67.8,
    "flow": 99,
    "perf": {
      "w1": 1.67,
      "m1": 14.51,
      "m3": 9.46
    },
    "returns": [
      2.75,
      2.61,
      1.67,
      10.6,
      14.51,
      9.46
    ],
    "volumes": [
      69,
      79,
      82,
      117,
      78,
      108
    ],
    "rsiStack": [
      76.1,
      71.7,
      67.8,
      64.2,
      59.2,
      50.6
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 78592.52,
    "change": 0.98,
    "mom": 52.4,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 72.2,
    "flow": 92,
    "perf": {
      "w1": -0.47,
      "m1": 21.2,
      "m3": 34.21
    },
    "returns": [
      0.98,
      -0.55,
      -0.47,
      13.46,
      21.2,
      34.21
    ],
    "volumes": [
      124,
      99,
      198,
      161,
      225,
      60
    ],
    "rsiStack": [
      64.4,
      71.5,
      72.2,
      70.5,
      66.7,
      63.8
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 188.12,
    "change": 5.31,
    "mom": 63.0,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.9,
    "flow": 110,
    "perf": {
      "w1": 4.81,
      "m1": 28.41,
      "m3": 14.62
    },
    "returns": [
      5.31,
      3.49,
      4.81,
      24.96,
      28.41,
      14.62
    ],
    "volumes": [
      105,
      63,
      136,
      205,
      74,
      124
    ],
    "rsiStack": [
      63.1,
      63.0,
      60.9,
      58.5,
      55.4,
      51.2
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 95.55,
    "change": 9.65,
    "mom": 62.6,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 67.2,
    "flow": 133,
    "perf": {
      "w1": 8.93,
      "m1": 58.33,
      "m3": 5.53
    },
    "returns": [
      9.65,
      6.27,
      8.93,
      28.1,
      58.33,
      5.53
    ],
    "volumes": [
      100,
      107,
      130,
      183,
      86,
      129
    ],
    "rsiStack": [
      69.3,
      69.7,
      67.2,
      63.3,
      58.9,
      57.3
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 132.94,
    "change": 4.42,
    "mom": 64.9,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 65.8,
    "flow": 93,
    "perf": {
      "w1": 8.41,
      "m1": 40.14,
      "m3": 2.76
    },
    "returns": [
      4.42,
      7.91,
      8.41,
      36.1,
      40.14,
      2.76
    ],
    "volumes": [
      123,
      74,
      187,
      246,
      127,
      90
    ],
    "rsiStack": [
      67.9,
      68.3,
      65.8,
      61.9,
      56.6,
      49.1
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 63.96,
    "change": 2.04,
    "mom": 54.9,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 67.6,
    "flow": 104,
    "perf": {
      "w1": 1.35,
      "m1": 8.79,
      "m3": 8.87
    },
    "returns": [
      2.04,
      2.45,
      1.35,
      2.21,
      8.79,
      8.87
    ],
    "volumes": [
      79,
      95,
      88,
      90,
      85,
      86
    ],
    "rsiStack": [
      74.0,
      69.9,
      67.6,
      65.1,
      61.4,
      55.1
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 186.5,
    "change": 0.44,
    "mom": 54.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.1,
    "flow": 73,
    "perf": {
      "w1": 3.58,
      "m1": 4.75,
      "m3": -3.45
    },
    "returns": [
      0.44,
      2.0,
      3.58,
      -2.01,
      4.75,
      -3.45
    ],
    "volumes": [
      94,
      65,
      83,
      62,
      76,
      102
    ],
    "rsiStack": [
      57.7,
      55.3,
      54.1,
      53.5,
      53.1,
      51.2
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 42.23,
    "change": -1.17,
    "mom": 35.3,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 32.0,
    "flow": 158,
    "perf": {
      "w1": -2.29,
      "m1": -4.8,
      "m3": -3.89
    },
    "returns": [
      -1.17,
      -2.94,
      -2.29,
      -4.41,
      -4.8,
      -3.89
    ],
    "volumes": [
      103,
      61,
      96,
      84,
      82,
      143
    ],
    "rsiStack": [
      20.0,
      27.2,
      32.0,
      35.5,
      38.5,
      38.8
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 170.54,
    "change": -0.36,
    "mom": 35.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.4,
    "flow": 87,
    "perf": {
      "w1": -2.38,
      "m1": 5.12,
      "m3": 12.14
    },
    "returns": [
      -0.36,
      -1.73,
      -2.38,
      2.09,
      5.12,
      12.14
    ],
    "volumes": [
      57,
      62,
      61,
      99,
      81,
      116
    ],
    "rsiStack": [
      38.0,
      50.5,
      55.4,
      57.4,
      57.4,
      52.4
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 111.46,
    "change": -1.35,
    "mom": 47.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.6,
    "flow": 81,
    "perf": {
      "w1": -0.77,
      "m1": 0.11,
      "m3": -1.46
    },
    "returns": [
      -1.35,
      -1.02,
      -0.77,
      0.58,
      0.11,
      -1.46
    ],
    "volumes": [
      87,
      79,
      83,
      70,
      66,
      120
    ],
    "rsiStack": [
      44.8,
      49.2,
      50.6,
      50.7,
      50.2,
      49.6
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 57.71,
    "change": -0.67,
    "mom": 35.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.5,
    "flow": 92,
    "perf": {
      "w1": -0.88,
      "m1": 0.58,
      "m3": 10.58
    },
    "returns": [
      -0.67,
      -0.94,
      -0.88,
      0.23,
      0.58,
      10.58
    ],
    "volumes": [
      91,
      71,
      104,
      101,
      154,
      92
    ],
    "rsiStack": [
      42.9,
      49.4,
      53.5,
      56.2,
      57.9,
      57.6
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 44.11,
    "change": -0.83,
    "mom": 29.9,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.1,
    "flow": 146,
    "perf": {
      "w1": -2.69,
      "m1": -2.37,
      "m3": -0.65
    },
    "returns": [
      -0.83,
      -2.17,
      -2.69,
      -1.61,
      -2.37,
      -0.65
    ],
    "volumes": [
      76,
      65,
      72,
      79,
      157,
      162
    ],
    "rsiStack": [
      20.0,
      32.5,
      39.1,
      43.0,
      45.8,
      45.8
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 175.13,
    "change": -1.13,
    "mom": 32.4,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 33.9,
    "flow": 123,
    "perf": {
      "w1": -2.16,
      "m1": -4.38,
      "m3": -0.58
    },
    "returns": [
      -1.13,
      -2.89,
      -2.16,
      -6.01,
      -4.38,
      -0.58
    ],
    "volumes": [
      136,
      133,
      85,
      105,
      88,
      132
    ],
    "rsiStack": [
      18.2,
      26.5,
      33.9,
      39.2,
      42.6,
      39.7
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 52.69,
    "change": -0.92,
    "mom": 38.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 51.9,
    "flow": 113,
    "perf": {
      "w1": -1.66,
      "m1": 3.29,
      "m3": 2.07
    },
    "returns": [
      -0.92,
      -1.83,
      -1.66,
      0.86,
      3.29,
      2.07
    ],
    "volumes": [
      127,
      64,
      111,
      83,
      67,
      110
    ],
    "rsiStack": [
      36.2,
      48.3,
      51.9,
      52.6,
      50.7,
      42.0
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 116.59,
    "change": -0.53,
    "mom": 46.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.7,
    "flow": 93,
    "perf": {
      "w1": -1.45,
      "m1": -1.37,
      "m3": -0.57
    },
    "returns": [
      -0.53,
      -0.49,
      -1.45,
      -0.14,
      -1.37,
      -0.57
    ],
    "volumes": [
      81,
      53,
      73,
      78,
      98,
      117
    ],
    "rsiStack": [
      42.8,
      46.5,
      48.7,
      49.5,
      49.4,
      46.6
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 84.98,
    "change": -0.55,
    "mom": 38.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.5,
    "flow": 81,
    "perf": {
      "w1": -2.82,
      "m1": 0.14,
      "m3": 3.58
    },
    "returns": [
      -0.55,
      -1.5,
      -2.82,
      0.35,
      0.14,
      3.58
    ],
    "volumes": [
      76,
      76,
      85,
      106,
      101,
      111
    ],
    "rsiStack": [
      38.1,
      44.5,
      47.5,
      48.9,
      48.9,
      44.8
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 511.04,
    "change": 0.48,
    "mom": 45.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.0,
    "flow": 85,
    "perf": {
      "w1": 0.96,
      "m1": 0.66,
      "m3": -15.21
    },
    "returns": [
      0.48,
      -0.85,
      0.96,
      -8.6,
      0.66,
      -15.21
    ],
    "volumes": [
      112,
      53,
      84,
      64,
      59,
      95
    ],
    "rsiStack": [
      39.6,
      42.1,
      44.0,
      45.5,
      46.8,
      45.3
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 29.32,
    "change": 0.45,
    "mom": 65.6,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Confirmed Accumulation",
    "signal": "STRONG BUY",
    "dist_streak": 0,
    "acc_streak": 4,
    "rsi": 74.2,
    "flow": 193,
    "perf": {
      "w1": 3.6,
      "m1": 5.51,
      "m3": 9.85
    },
    "returns": [
      0.45,
      2.55,
      3.6,
      4.19,
      5.51,
      9.85
    ],
    "volumes": [
      304,
      218,
      117,
      169,
      120,
      57
    ],
    "rsiStack": [
      91.4,
      81.5,
      74.2,
      69.3,
      64.9,
      61.9
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 47.36,
    "change": 1.67,
    "mom": 63.6,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 67.5,
    "flow": 263,
    "perf": {
      "w1": 1.63,
      "m1": 7.22,
      "m3": 5.67
    },
    "returns": [
      1.67,
      1.78,
      1.63,
      6.88,
      7.22,
      5.67
    ],
    "volumes": [
      57,
      97,
      145,
      254,
      82,
      46
    ],
    "rsiStack": [
      76.4,
      71.7,
      67.5,
      63.9,
      58.8,
      48.2
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 43.74,
    "change": -0.27,
    "mom": 32.7,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.3,
    "flow": 45,
    "perf": {
      "w1": -1.14,
      "m1": -2.48,
      "m3": -1.86
    },
    "returns": [
      -0.27,
      -1.45,
      -1.14,
      -2.89,
      -2.48,
      -1.86
    ],
    "volumes": [
      38,
      23,
      45,
      19,
      16,
      36
    ],
    "rsiStack": [
      26.8,
      35.2,
      40.3,
      43.7,
      45.9,
      42.9
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 30.61,
    "change": 1.43,
    "mom": 65.5,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 67.2,
    "flow": 57,
    "perf": {
      "w1": 1.3,
      "m1": 5.38,
      "m3": 7.37
    },
    "returns": [
      1.43,
      1.47,
      1.3,
      5.78,
      5.38,
      7.37
    ],
    "volumes": [
      30,
      79,
      66,
      102,
      40,
      203
    ],
    "rsiStack": [
      79.3,
      72.3,
      67.2,
      63.1,
      56.6,
      41.7
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 106.25,
    "change": -1.48,
    "mom": 40.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.5,
    "flow": 119,
    "perf": {
      "w1": -1.15,
      "m1": 2.79,
      "m3": 12.86
    },
    "returns": [
      -1.48,
      -2.06,
      -1.15,
      -1.55,
      2.79,
      12.86
    ],
    "volumes": [
      79,
      82,
      88,
      98,
      78,
      114
    ],
    "rsiStack": [
      44.4,
      48.6,
      50.5,
      51.5,
      52.2,
      52.5
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 85.98,
    "change": 1.16,
    "mom": 60.3,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 69.6,
    "flow": 135,
    "perf": {
      "w1": 1.16,
      "m1": 6.17,
      "m3": 7.15
    },
    "returns": [
      1.16,
      1.07,
      1.16,
      5.9,
      6.17,
      7.15
    ],
    "volumes": [
      120,
      60,
      149,
      298,
      68,
      127
    ],
    "rsiStack": [
      78.7,
      74.0,
      69.6,
      65.6,
      59.0,
      44.1
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 13.94,
    "change": 0.43,
    "mom": 52.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.2,
    "flow": 101,
    "perf": {
      "w1": 0.07,
      "m1": -3.4,
      "m3": -9.13
    },
    "returns": [
      0.43,
      0.29,
      0.07,
      -0.78,
      -3.4,
      -9.13
    ],
    "volumes": [
      99,
      67,
      111,
      83,
      60,
      78
    ],
    "rsiStack": [
      46.0,
      46.4,
      47.2,
      47.8,
      47.2,
      40.7
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 86.32,
    "change": 0.06,
    "mom": 50.1,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation (Day 2)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 2,
    "rsi": 53.1,
    "flow": 152,
    "perf": {
      "w1": -0.76,
      "m1": -1.55,
      "m3": 3.73
    },
    "returns": [
      0.06,
      -0.01,
      -0.76,
      2.31,
      -1.55,
      3.73
    ],
    "volumes": [
      147,
      110,
      87,
      86,
      70,
      66
    ],
    "rsiStack": [
      50.6,
      51.4,
      53.1,
      54.0,
      54.1,
      52.4
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 28.35,
    "change": 0.39,
    "mom": 63.7,
    "phase": "Exhaustion",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 84.8,
    "flow": 210,
    "perf": {
      "w1": 5.04,
      "m1": 12.86,
      "m3": 18.03
    },
    "returns": [
      0.39,
      1.69,
      5.04,
      7.51,
      12.86,
      18.03
    ],
    "volumes": [
      138,
      169,
      137,
      114,
      424,
      118
    ],
    "rsiStack": [
      98.1,
      91.9,
      84.8,
      78.8,
      72.5,
      67.1
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 28.46,
    "change": 1.79,
    "mom": 55.6,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 67.4,
    "flow": 119,
    "perf": {
      "w1": 1.75,
      "m1": 13.7,
      "m3": 10.78
    },
    "returns": [
      1.79,
      0.57,
      1.75,
      5.92,
      13.7,
      10.78
    ],
    "volumes": [
      71,
      88,
      59,
      72,
      75,
      105
    ],
    "rsiStack": [
      67.9,
      68.2,
      67.4,
      65.2,
      60.3,
      48.8
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 10.29,
    "change": 0.39,
    "mom": 57.8,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.9,
    "flow": 186,
    "perf": {
      "w1": -0.68,
      "m1": 7.52,
      "m3": 0.1
    },
    "returns": [
      0.39,
      -0.68,
      -0.68,
      5.21,
      7.52,
      0.1
    ],
    "volumes": [
      101,
      172,
      116,
      103,
      81,
      137
    ],
    "rsiStack": [
      64.8,
      65.4,
      62.9,
      59.3,
      53.6,
      44.6
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 9.18,
    "change": 2.34,
    "mom": 71.3,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 71.9,
    "flow": 138,
    "perf": {
      "w1": 3.96,
      "m1": 13.9,
      "m3": -1.61
    },
    "returns": [
      2.34,
      3.49,
      3.96,
      11.41,
      13.9,
      -1.61
    ],
    "volumes": [
      111,
      97,
      142,
      103,
      110,
      127
    ],
    "rsiStack": [
      90.3,
      80.7,
      71.9,
      64.5,
      56.1,
      44.9
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 226.19,
    "change": -2.82,
    "mom": 41.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.8,
    "flow": 100,
    "perf": {
      "w1": 1.61,
      "m1": 3.59,
      "m3": 4.0
    },
    "returns": [
      -2.82,
      -0.13,
      1.61,
      -20.02,
      3.59,
      4.0
    ],
    "volumes": [
      83,
      50,
      86,
      63,
      114,
      79
    ],
    "rsiStack": [
      39.1,
      44.2,
      46.8,
      48.2,
      48.7,
      45.5
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 211.66,
    "change": -2.29,
    "mom": 41.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution (Quiet) (Day 2)",
    "signal": "REDUCE",
    "dist_streak": 2,
    "acc_streak": 0,
    "rsi": 45.6,
    "flow": 94,
    "perf": {
      "w1": -7.69,
      "m1": 9.23,
      "m3": -33.11
    },
    "returns": [
      -2.29,
      -13.65,
      -7.69,
      -9.67,
      9.23,
      -33.11
    ],
    "volumes": [
      197,
      74,
      78,
      123,
      97,
      86
    ],
    "rsiStack": [
      31.0,
      41.6,
      45.6,
      47.3,
      48.7,
      49.6
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 75.53,
    "chg": 2.75,
    "chgW": 1.67,
    "chgM": 14.51,
    "chgYTD": 22.38,
    "marketCap": "$36.0B",
    "pe": "14.9x",
    "evEbitda": "8.5x",
    "de": "0.5x",
    "drawdown": "-11.5%"
  },
  "MOS": {
    "price": 24.12,
    "chg": 2.2,
    "chgW": 0.5,
    "chgM": 10.59,
    "chgYTD": 0.12,
    "marketCap": "$7.7B",
    "pe": "15.0x",
    "evEbitda": "7.9x",
    "de": "0.5x",
    "drawdown": "-34.8%"
  },
  "CF": {
    "price": 130.03,
    "chg": 3.37,
    "chgW": 0.61,
    "chgM": 9.92,
    "chgYTD": 68.13,
    "marketCap": "$19.7B",
    "pe": "9.6x",
    "evEbitda": "6.2x",
    "de": "0.4x",
    "drawdown": "-8.4%"
  },
  "ICL": {
    "price": 5.72,
    "chg": 2.14,
    "chgW": -0.52,
    "chgM": 12.6,
    "chgYTD": 0.18,
    "marketCap": "–",
    "pe": "23.8x",
    "evEbitda": "7.5x",
    "de": "0.5x",
    "drawdown": "-17.9%"
  },
  "FMC": {
    "price": 11.53,
    "chg": 1.77,
    "chgW": 2.22,
    "chgM": 11.29,
    "chgYTD": -16.87,
    "marketCap": "$1.4B",
    "pe": "7.0x",
    "evEbitda": "20.0x",
    "de": "2.7x",
    "drawdown": "-70.3%"
  },
  "CTVA": {
    "price": 84.63,
    "chg": 0.87,
    "chgW": 2.2,
    "chgM": 11.3,
    "chgYTD": 26.26,
    "marketCap": "$56.5B",
    "pe": "51.3x",
    "evEbitda": "13.9x",
    "de": "0.2x",
    "drawdown": "-7.0%"
  },
  "ADM": {
    "price": 81.29,
    "chg": -0.31,
    "chgW": 4.0,
    "chgM": 4.14,
    "chgYTD": 41.4,
    "marketCap": "$39.2B",
    "pe": "22.3x",
    "evEbitda": "15.9x",
    "de": "0.4x",
    "drawdown": "-8.1%"
  },
  "BG": {
    "price": 116.21,
    "chg": 0.63,
    "chgW": 5.49,
    "chgM": 10.26,
    "chgYTD": 30.46,
    "marketCap": "$22.3B",
    "pe": "25.0x",
    "evEbitda": "12.8x",
    "de": "1.0x",
    "drawdown": "-13.8%"
  },
  "INGR": {
    "price": 103.46,
    "chg": -1.11,
    "chgW": -2.52,
    "chgM": 3.03,
    "chgYTD": -6.17,
    "marketCap": "$6.5B",
    "pe": "11.4x",
    "evEbitda": "6.4x",
    "de": "0.4x",
    "drawdown": "-20.7%"
  },
  "FPI": {
    "price": 10.29,
    "chg": 0.39,
    "chgW": -0.68,
    "chgM": 7.52,
    "chgYTD": 6.19,
    "marketCap": "$452M",
    "pe": "20.2x",
    "evEbitda": "24.7x",
    "de": "0.5x",
    "drawdown": "-22.2%"
  },
  "LAND": {
    "price": 9.18,
    "chg": 2.34,
    "chgW": 3.96,
    "chgM": 13.9,
    "chgYTD": 0.33,
    "marketCap": "$396M",
    "pe": "-30.1x",
    "evEbitda": "12.8x",
    "de": "0.7x",
    "drawdown": "-29.4%"
  },
  "DE": {
    "price": 654.91,
    "chg": 3.9,
    "chgW": 0.97,
    "chgM": 8.24,
    "chgYTD": 40.67,
    "marketCap": "$176.6B",
    "pe": "35.1x",
    "evEbitda": "25.1x",
    "de": "3.8x",
    "drawdown": "-2.9%"
  },
  "AGCO": {
    "price": 118.31,
    "chg": 4.34,
    "chgW": 7.43,
    "chgM": 13.85,
    "chgYTD": 13.41,
    "marketCap": "$8.3B",
    "pe": "15.7x",
    "evEbitda": "10.8x",
    "de": "0.7x",
    "drawdown": "-17.7%"
  },
  "CNH": {
    "price": 11.83,
    "chg": 1.28,
    "chgW": 0.6,
    "chgM": 9.54,
    "chgYTD": 28.31,
    "marketCap": "$19.0B",
    "pe": "47.3x",
    "evEbitda": "37.4x",
    "de": "3.4x",
    "drawdown": "-11.1%"
  },
  "XYL": {
    "price": 110.11,
    "chg": -1.08,
    "chgW": -3.56,
    "chgM": -7.53,
    "chgYTD": -19.14,
    "marketCap": "$25.7B",
    "pe": "26.2x",
    "evEbitda": "14.2x",
    "de": "0.3x",
    "drawdown": "-28.6%"
  },
  "VMI": {
    "price": 469.66,
    "chg": -1.39,
    "chgW": -2.45,
    "chgM": -3.87,
    "chgYTD": 16.74,
    "marketCap": "$9.1B",
    "pe": "18.6x",
    "evEbitda": "14.5x",
    "de": "0.5x",
    "drawdown": "-19.8%"
  },
  "LNN": {
    "price": 114.91,
    "chg": 0.9,
    "chgW": -1.14,
    "chgM": 1.52,
    "chgYTD": -2.51,
    "marketCap": "$1.2B",
    "pe": "22.1x",
    "evEbitda": "13.7x",
    "de": "0.3x",
    "drawdown": "-22.4%"
  },
  "MWA": {
    "price": 24.14,
    "chg": -0.98,
    "chgW": -4.02,
    "chgM": -6.4,
    "chgYTD": 1.34,
    "marketCap": "$3.8B",
    "pe": "17.0x",
    "evEbitda": "10.3x",
    "de": "0.4x",
    "drawdown": "-22.1%"
  },
  "WTS": {
    "price": 365.75,
    "chg": -0.16,
    "chgW": -1.89,
    "chgM": 4.34,
    "chgYTD": 32.51,
    "marketCap": "$12.2B",
    "pe": "31.9x",
    "evEbitda": "20.8x",
    "de": "0.1x",
    "drawdown": "-7.3%"
  },
  "TSN": {
    "price": 55.14,
    "chg": -0.47,
    "chgW": -4.72,
    "chgM": -7.5,
    "chgYTD": -5.94,
    "marketCap": "$19.4B",
    "pe": "34.0x",
    "evEbitda": "9.7x",
    "de": "0.4x",
    "drawdown": "-20.6%"
  },
  "PPC": {
    "price": 31.38,
    "chg": -0.98,
    "chgW": -1.29,
    "chgM": 12.39,
    "chgYTD": -19.52,
    "marketCap": "$7.5B",
    "pe": "13.8x",
    "evEbitda": "5.8x",
    "de": "0.8x",
    "drawdown": "-30.9%"
  },
  "HRL": {
    "price": 21.85,
    "chg": 1.3,
    "chgW": -9.3,
    "chgM": -13.4,
    "chgYTD": -7.81,
    "marketCap": "$12.0B",
    "pe": "35.2x",
    "evEbitda": "9.2x",
    "de": "0.0x",
    "drawdown": "-17.9%"
  },
  "CAG": {
    "price": 16.02,
    "chg": -0.44,
    "chgW": -3.9,
    "chgM": 7.44,
    "chgYTD": -7.45,
    "marketCap": "$7.7B",
    "pe": "10.3x",
    "evEbitda": "8.6x",
    "de": "1.2x",
    "drawdown": "-21.2%"
  },
  "CALM": {
    "price": 78.92,
    "chg": -1.61,
    "chgW": -6.71,
    "chgM": -9.35,
    "chgYTD": -0.82,
    "marketCap": "$3.7B",
    "pe": "11.9x",
    "evEbitda": "6.0x",
    "de": "–",
    "drawdown": "-32.3%"
  },
  "DBA": {
    "price": 29.32,
    "chg": 0.45,
    "chgW": 3.6,
    "chgM": 5.51,
    "chgYTD": 14.89,
    "marketCap": "–",
    "pe": "12.4x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-0.1%"
  },
  "MOO": {
    "price": 85.98,
    "chg": 1.16,
    "chgW": 1.16,
    "chgM": 6.17,
    "chgYTD": 18.12,
    "marketCap": "–",
    "pe": "19.7x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-0.7%"
  },
  "VEGI": {
    "price": 47.36,
    "chg": 1.67,
    "chgW": 1.63,
    "chgM": 7.22,
    "chgYTD": 22.79,
    "marketCap": "–",
    "pe": "22.3x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-0.0%"
  },
  "USAG": {},
  "COCO.L": {
    "price": 10.52,
    "chg": 6.13,
    "chgW": 8.9,
    "chgM": 19.77,
    "chgYTD": 0.57,
    "marketCap": "–",
    "pe": "61.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-23.8%"
  }
};
