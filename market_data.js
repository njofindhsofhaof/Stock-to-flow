window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-07-31 23:29:18",
  "sections": {
    "Index": {
      "risk": "Neutral",
      "leader": "SP500",
      "watch": 0
    },
    "Commodity": {
      "risk": "Strong ON",
      "leader": "CL",
      "watch": 1
    },
    "Crypto": {
      "risk": "Strong ON",
      "leader": "BTC",
      "watch": 0
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "XLE",
      "watch": 1
    },
    "Stock": {
      "risk": "Neutral",
      "leader": "GM",
      "watch": 3
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
    "price": 7489.72,
    "change": 0.7,
    "mom": 53.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.8,
    "flow": 69,
    "perf": {
      "w1": 1.05,
      "m1": 0.09,
      "m3": 3.18
    },
    "returns": [
      0.7,
      0.82,
      1.05,
      0.43,
      0.09,
      3.18
    ],
    "volumes": [
      110,
      109,
      91,
      91,
      93,
      92
    ],
    "rsiStack": [
      60.6,
      54.5,
      52.8,
      52.7,
      52.6,
      49.1
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 52485.03,
    "change": 0.53,
    "mom": 50.2,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 54.5,
    "flow": 144,
    "perf": {
      "w1": 1.04,
      "m1": -0.78,
      "m3": 6.46
    },
    "returns": [
      0.53,
      -0.5,
      1.04,
      0.65,
      -0.78,
      6.46
    ],
    "volumes": [
      131,
      112,
      83,
      83,
      95,
      91
    ],
    "rsiStack": [
      57.3,
      54.6,
      54.5,
      55.2,
      55.5,
      53.6
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
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 30.8,
    "flow": 102,
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
      88,
      76,
      92,
      86,
      95,
      110
    ],
    "rsiStack": [
      18.3,
      25.7,
      30.8,
      35.2,
      40.7,
      50.4
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
    "rsi": 36.3,
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
      129,
      118,
      86,
      98,
      93,
      103
    ],
    "rsiStack": [
      25.8,
      31.2,
      36.3,
      40.8,
      46.5,
      56.7
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 371.54,
    "change": -1.49,
    "mom": 54.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.8,
    "flow": 104,
    "perf": {
      "w1": -0.1,
      "m1": -1.74,
      "m3": -11.17
    },
    "returns": [
      -1.49,
      0.59,
      -0.1,
      0.85,
      -1.74,
      -11.17
    ],
    "volumes": [
      93,
      77,
      61,
      106,
      92,
      87
    ],
    "rsiStack": [
      46.6,
      47.2,
      45.8,
      45.0,
      48.0,
      61.7
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 52.36,
    "change": -2.13,
    "mom": 55.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.0,
    "flow": 79,
    "perf": {
      "w1": -0.44,
      "m1": -4.83,
      "m3": -20.56
    },
    "returns": [
      -2.13,
      1.28,
      -0.44,
      3.11,
      -4.83,
      -20.56
    ],
    "volumes": [
      110,
      74,
      75,
      80,
      83,
      71
    ],
    "rsiStack": [
      48.2,
      46.5,
      44.0,
      43.0,
      45.2,
      54.9
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 39.07,
    "change": -1.64,
    "mom": 56.1,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.8,
    "flow": 124,
    "perf": {
      "w1": -2.06,
      "m1": -9.62,
      "m3": -27.92
    },
    "returns": [
      -1.64,
      0.31,
      -2.06,
      0.88,
      -9.62,
      -27.92
    ],
    "volumes": [
      98,
      111,
      97,
      107,
      91,
      107
    ],
    "rsiStack": [
      44.8,
      42.2,
      40.8,
      40.9,
      43.6,
      53.4
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 86.8,
    "change": 3.84,
    "mom": 54.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.1,
    "flow": 81,
    "perf": {
      "w1": -2.81,
      "m1": 26.36,
      "m3": -15.13
    },
    "returns": [
      3.84,
      9.51,
      -2.81,
      5.22,
      26.36,
      -15.13
    ],
    "volumes": [
      114,
      134,
      140,
      146,
      40,
      81
    ],
    "rsiStack": [
      60.5,
      59.4,
      57.1,
      54.6,
      52.6,
      53.1
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 125.19,
    "change": -0.46,
    "mom": 51.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.4,
    "flow": 72,
    "perf": {
      "w1": 0.1,
      "m1": 13.25,
      "m3": -2.23
    },
    "returns": [
      -0.46,
      1.85,
      0.1,
      3.1,
      13.25,
      -2.23
    ],
    "volumes": [
      68,
      90,
      58,
      79,
      111,
      67
    ],
    "rsiStack": [
      55.9,
      59.3,
      59.4,
      58.0,
      56.6,
      58.4
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 33.96,
    "change": -3.85,
    "mom": 47.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.9,
    "flow": 74,
    "perf": {
      "w1": -0.76,
      "m1": 1.13,
      "m3": -15.33
    },
    "returns": [
      -3.85,
      -3.74,
      -0.76,
      -0.7,
      1.13,
      -15.33
    ],
    "volumes": [
      75,
      122,
      68,
      61,
      55,
      49
    ],
    "rsiStack": [
      33.3,
      41.4,
      43.9,
      45.1,
      47.9,
      56.4
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 22.12,
    "change": -2.85,
    "mom": 46.7,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.9,
    "flow": 148,
    "perf": {
      "w1": -0.81,
      "m1": 4.69,
      "m3": -4.9
    },
    "returns": [
      -2.85,
      -4.16,
      -0.81,
      -0.05,
      4.69,
      -4.9
    ],
    "volumes": [
      79,
      107,
      81,
      101,
      69,
      83
    ],
    "rsiStack": [
      40.1,
      47.0,
      48.9,
      49.1,
      49.9,
      55.3
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 69.07,
    "change": -2.33,
    "mom": 53.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.4,
    "flow": 87,
    "perf": {
      "w1": 1.42,
      "m1": 6.16,
      "m3": -10.58
    },
    "returns": [
      -2.33,
      -0.56,
      1.42,
      2.66,
      6.16,
      -10.58
    ],
    "volumes": [
      83,
      133,
      61,
      56,
      56,
      87
    ],
    "rsiStack": [
      51.9,
      56.9,
      56.4,
      54.6,
      53.2,
      56.6
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 62922.11,
    "change": -2.79,
    "mom": 43.3,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.4,
    "flow": 124,
    "perf": {
      "w1": -3.7,
      "m1": -1.38,
      "m3": -11.77
    },
    "returns": [
      -2.79,
      -1.49,
      -3.7,
      -5.39,
      -1.38,
      -11.77
    ],
    "volumes": [
      109,
      100,
      58,
      100,
      113,
      48
    ],
    "rsiStack": [
      33.0,
      40.6,
      44.4,
      45.5,
      45.4,
      43.6
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 146.26,
    "change": -10.59,
    "mom": 39.9,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.3,
    "flow": 283,
    "perf": {
      "w1": -7.6,
      "m1": -11.61,
      "m3": -26.04
    },
    "returns": [
      -10.59,
      -12.89,
      -7.6,
      -6.91,
      -11.61,
      -26.04
    ],
    "volumes": [
      118,
      73,
      74,
      91,
      85,
      108
    ],
    "rsiStack": [
      27.8,
      36.3,
      40.3,
      42.2,
      43.0,
      40.5
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 62.61,
    "change": -2.54,
    "mom": 55.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.2,
    "flow": 112,
    "perf": {
      "w1": 0.4,
      "m1": -3.11,
      "m3": -45.17
    },
    "returns": [
      -2.54,
      -2.66,
      0.4,
      3.56,
      -3.11,
      -45.17
    ],
    "volumes": [
      66,
      55,
      55,
      71,
      59,
      124
    ],
    "rsiStack": [
      44.6,
      44.6,
      43.2,
      42.5,
      42.6,
      42.3
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 93.28,
    "change": -4.56,
    "mom": 55.0,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.0,
    "flow": 127,
    "perf": {
      "w1": 1.76,
      "m1": -7.43,
      "m3": -50.09
    },
    "returns": [
      -4.56,
      -3.0,
      1.76,
      -1.66,
      -7.43,
      -50.09
    ],
    "volumes": [
      80,
      70,
      60,
      53,
      50,
      119
    ],
    "rsiStack": [
      42.5,
      44.1,
      43.0,
      42.0,
      41.3,
      38.9
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 59.55,
    "change": 1.0,
    "mom": 55.9,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.4,
    "flow": 77,
    "perf": {
      "w1": -0.12,
      "m1": 11.89,
      "m3": 0.17
    },
    "returns": [
      1.0,
      3.44,
      -0.12,
      3.24,
      11.89,
      0.17
    ],
    "volumes": [
      75,
      90,
      114,
      98,
      99,
      85
    ],
    "rsiStack": [
      68.9,
      66.7,
      63.4,
      60.2,
      58.5,
      63.0
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 175.35,
    "change": -0.22,
    "mom": 48.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 46.3,
    "flow": 99,
    "perf": {
      "w1": -0.3,
      "m1": -2.9,
      "m3": 5.87
    },
    "returns": [
      -0.22,
      2.49,
      -0.3,
      -0.14,
      -2.9,
      5.87
    ],
    "volumes": [
      161,
      112,
      83,
      54,
      112,
      95
    ],
    "rsiStack": [
      51.5,
      46.8,
      46.3,
      47.4,
      48.7,
      47.3
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 44.35,
    "change": -0.69,
    "mom": 33.8,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Day 2)",
    "signal": "AVOID",
    "dist_streak": 2,
    "acc_streak": 0,
    "rsi": 40.3,
    "flow": 117,
    "perf": {
      "w1": -4.19,
      "m1": -3.08,
      "m3": -4.36
    },
    "returns": [
      -0.69,
      -2.57,
      -4.19,
      -1.82,
      -3.08,
      -4.36
    ],
    "volumes": [
      131,
      91,
      88,
      99,
      104,
      115
    ],
    "rsiStack": [
      21.9,
      33.9,
      40.3,
      43.8,
      47.3,
      54.6
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 162.55,
    "change": -0.59,
    "mom": 41.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 55.0,
    "flow": 95,
    "perf": {
      "w1": -0.01,
      "m1": -0.73,
      "m3": 11.87
    },
    "returns": [
      -0.59,
      -2.82,
      -0.01,
      0.91,
      -0.73,
      11.87
    ],
    "volumes": [
      125,
      130,
      74,
      53,
      82,
      124
    ],
    "rsiStack": [
      45.5,
      52.2,
      55.0,
      56.2,
      55.7,
      50.9
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 108.24,
    "change": 1.56,
    "mom": 52.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 46.1,
    "flow": 76,
    "perf": {
      "w1": 1.83,
      "m1": -1.24,
      "m3": -6.39
    },
    "returns": [
      1.56,
      -1.3,
      1.83,
      -2.18,
      -1.24,
      -6.39
    ],
    "volumes": [
      151,
      78,
      88,
      59,
      102,
      106
    ],
    "rsiStack": [
      48.3,
      46.7,
      46.1,
      45.6,
      44.3,
      38.8
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 56.94,
    "change": -0.11,
    "mom": 48.7,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.2,
    "flow": 95,
    "perf": {
      "w1": 1.12,
      "m1": 2.37,
      "m3": 10.37
    },
    "returns": [
      -0.11,
      -1.15,
      1.12,
      1.21,
      2.37,
      10.37
    ],
    "volumes": [
      97,
      101,
      96,
      75,
      124,
      120
    ],
    "rsiStack": [
      58.0,
      60.7,
      62.2,
      62.4,
      60.5,
      53.4
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 45.07,
    "change": -0.51,
    "mom": 37.1,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Confirmed Distribution",
    "signal": "SELL",
    "dist_streak": 3,
    "acc_streak": 0,
    "rsi": 50.3,
    "flow": 142,
    "perf": {
      "w1": -1.92,
      "m1": 0.87,
      "m3": 2.04
    },
    "returns": [
      -0.51,
      -2.04,
      -1.92,
      -0.77,
      0.87,
      2.04
    ],
    "volumes": [
      142,
      122,
      98,
      83,
      77,
      96
    ],
    "rsiStack": [
      36.8,
      46.8,
      50.3,
      51.7,
      52.3,
      51.4
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 179.84,
    "change": 0.81,
    "mom": 46.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.7,
    "flow": 86,
    "perf": {
      "w1": -1.54,
      "m1": -2.21,
      "m3": 4.31
    },
    "returns": [
      0.81,
      -1.45,
      -1.54,
      0.24,
      -2.21,
      4.31
    ],
    "volumes": [
      113,
      89,
      83,
      65,
      113,
      79
    ],
    "rsiStack": [
      48.9,
      48.5,
      49.7,
      51.0,
      52.7,
      56.0
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 50.43,
    "change": -2.34,
    "mom": 41.5,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.5,
    "flow": 162,
    "perf": {
      "w1": -1.62,
      "m1": -3.04,
      "m3": -2.13
    },
    "returns": [
      -2.34,
      -3.65,
      -1.62,
      -0.2,
      -3.04,
      -2.13
    ],
    "volumes": [
      99,
      108,
      111,
      94,
      79,
      106
    ],
    "rsiStack": [
      35.6,
      42.9,
      45.5,
      47.0,
      49.5,
      56.9
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 116.09,
    "change": 3.29,
    "mom": 66.7,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.3,
    "flow": 149,
    "perf": {
      "w1": 6.11,
      "m1": -0.88,
      "m3": -1.68
    },
    "returns": [
      3.29,
      3.21,
      6.11,
      0.56,
      -0.88,
      -1.68
    ],
    "volumes": [
      96,
      72,
      95,
      84,
      119,
      137
    ],
    "rsiStack": [
      70.7,
      59.3,
      54.3,
      52.1,
      50.3,
      46.8
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 85.05,
    "change": -0.49,
    "mom": 47.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral (Day 2)",
    "signal": "REDUCE",
    "dist_streak": 2,
    "acc_streak": 0,
    "rsi": 51.3,
    "flow": 93,
    "perf": {
      "w1": 1.09,
      "m1": 0.07,
      "m3": 1.18
    },
    "returns": [
      -0.49,
      -2.31,
      1.09,
      -0.16,
      0.07,
      1.18
    ],
    "volumes": [
      142,
      196,
      90,
      60,
      136,
      132
    ],
    "rsiStack": [
      46.0,
      50.3,
      51.3,
      51.7,
      52.6,
      57.8
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 504.89,
    "change": 0.07,
    "mom": 44.7,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Accumulation (Day 2)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 2,
    "rsi": 42.6,
    "flow": 121,
    "perf": {
      "w1": -4.2,
      "m1": -10.85,
      "m3": 4.59
    },
    "returns": [
      0.07,
      2.73,
      -4.2,
      -3.24,
      -10.85,
      4.59
    ],
    "volumes": [
      161,
      149,
      113,
      63,
      151,
      129
    ],
    "rsiStack": [
      44.5,
      41.5,
      42.6,
      44.6,
      47.0,
      48.3
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 27.51,
    "change": 0.11,
    "mom": 42.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 48.6,
    "flow": 48,
    "perf": {
      "w1": -2.58,
      "m1": 2.88,
      "m3": -3.03
    },
    "returns": [
      0.11,
      -1.19,
      -2.58,
      -1.19,
      2.88,
      -3.03
    ],
    "volumes": [
      148,
      123,
      60,
      69,
      78,
      31
    ],
    "rsiStack": [
      34.7,
      44.0,
      48.6,
      50.4,
      51.8,
      54.7
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 44.18,
    "change": -2.47,
    "mom": 36.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.5,
    "flow": 41,
    "perf": {
      "w1": -4.16,
      "m1": -0.02,
      "m3": -4.02
    },
    "returns": [
      -2.47,
      -4.52,
      -4.16,
      -1.67,
      -0.02,
      -4.02
    ],
    "volumes": [
      36,
      118,
      48,
      430,
      110,
      165
    ],
    "rsiStack": [
      28.2,
      39.3,
      44.5,
      46.9,
      49.3,
      55.8
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 44.24,
    "change": -0.49,
    "mom": 32.2,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.3,
    "flow": 10,
    "perf": {
      "w1": -2.08,
      "m1": -1.91,
      "m3": 9.16
    },
    "returns": [
      -0.49,
      -2.43,
      -2.08,
      -1.95,
      -1.91,
      9.16
    ],
    "volumes": [
      15,
      15,
      1295,
      20,
      10,
      14
    ],
    "rsiStack": [
      28.7,
      38.7,
      44.3,
      48.1,
      52.0,
      58.2
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.1,
    "change": -2.11,
    "mom": 41.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.2,
    "flow": 31,
    "perf": {
      "w1": -1.65,
      "m1": -1.12,
      "m3": -3.57
    },
    "returns": [
      -2.11,
      -2.38,
      -1.65,
      -0.78,
      -1.12,
      -3.57
    ],
    "volumes": [
      31,
      228,
      43,
      13,
      115,
      9
    ],
    "rsiStack": [
      33.9,
      43.1,
      47.2,
      48.8,
      50.8,
      57.7
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 105.25,
    "change": -0.57,
    "mom": 53.7,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 54.4,
    "flow": 161,
    "perf": {
      "w1": 1.94,
      "m1": 0.94,
      "m3": 0.3
    },
    "returns": [
      -0.57,
      2.09,
      1.94,
      -0.23,
      0.94,
      0.3
    ],
    "volumes": [
      313,
      110,
      92,
      80,
      106,
      99
    ],
    "rsiStack": [
      59.3,
      55.2,
      54.4,
      54.2,
      54.7,
      58.0
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 81.72,
    "change": -2.16,
    "mom": 40.5,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 50.3,
    "flow": 173,
    "perf": {
      "w1": -1.72,
      "m1": 1.0,
      "m3": -3.36
    },
    "returns": [
      -2.16,
      -2.58,
      -1.72,
      -0.98,
      1.0,
      -3.36
    ],
    "volumes": [
      192,
      120,
      49,
      78,
      86,
      109
    ],
    "rsiStack": [
      32.4,
      44.9,
      50.3,
      51.8,
      52.5,
      56.3
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 14.68,
    "change": -1.21,
    "mom": 49.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.2,
    "flow": 85,
    "perf": {
      "w1": 2.16,
      "m1": 9.88,
      "m3": 25.58
    },
    "returns": [
      -1.21,
      -1.87,
      2.16,
      3.16,
      9.88,
      25.58
    ],
    "volumes": [
      110,
      146,
      151,
      126,
      86,
      91
    ],
    "rsiStack": [
      51.4,
      55.6,
      55.2,
      54.5,
      53.8,
      52.1
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 88.86,
    "change": 0.52,
    "mom": 65.3,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 68.2,
    "flow": 49,
    "perf": {
      "w1": 7.53,
      "m1": 16.92,
      "m3": 16.69
    },
    "returns": [
      0.52,
      -1.59,
      7.53,
      16.81,
      16.92,
      16.69
    ],
    "volumes": [
      83,
      178,
      76,
      175,
      76,
      67
    ],
    "rsiStack": [
      73.9,
      72.2,
      68.2,
      64.7,
      61.6,
      61.2
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 24.72,
    "change": -0.88,
    "mom": 39.0,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "WATCH",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 46.3,
    "flow": 173,
    "perf": {
      "w1": -4.0,
      "m1": 2.74,
      "m3": -2.91
    },
    "returns": [
      -0.88,
      -2.37,
      -4.0,
      -2.72,
      2.74,
      -2.91
    ],
    "volumes": [
      150,
      63,
      18,
      219,
      117,
      138
    ],
    "rsiStack": [
      27.9,
      40.4,
      46.3,
      48.8,
      50.9,
      55.6
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 25.01,
    "change": 0.4,
    "mom": 55.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.3,
    "flow": 87,
    "perf": {
      "w1": 1.92,
      "m1": 2.84,
      "m3": -5.44
    },
    "returns": [
      0.4,
      -0.95,
      1.92,
      -0.16,
      2.84,
      -5.44
    ],
    "volumes": [
      113,
      120,
      68,
      71,
      85,
      106
    ],
    "rsiStack": [
      54.9,
      54.4,
      52.3,
      50.0,
      46.2,
      36.7
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.35,
    "change": -0.74,
    "mom": 37.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 35.6,
    "flow": 108,
    "perf": {
      "w1": -2.6,
      "m1": -3.71,
      "m3": -11.54
    },
    "returns": [
      -0.74,
      -2.09,
      -2.6,
      -3.71,
      -3.71,
      -11.54
    ],
    "volumes": [
      157,
      81,
      62,
      52,
      87,
      64
    ],
    "rsiStack": [
      19.4,
      31.1,
      35.6,
      37.4,
      39.6,
      45.6
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.11,
    "change": -2.05,
    "mom": 29.7,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 29.1,
    "flow": 167,
    "perf": {
      "w1": -4.87,
      "m1": -6.24,
      "m3": -15.78
    },
    "returns": [
      -2.05,
      -4.36,
      -4.87,
      -7.37,
      -6.24,
      -15.78
    ],
    "volumes": [
      162,
      76,
      58,
      86,
      83,
      70
    ],
    "rsiStack": [
      10.9,
      22.6,
      29.1,
      32.7,
      37.2,
      46.8
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 206.99,
    "change": 2.94,
    "mom": 48.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.3,
    "flow": 106,
    "perf": {
      "w1": -2.89,
      "m1": -14.44,
      "m3": 6.93
    },
    "returns": [
      2.94,
      7.65,
      -2.89,
      2.13,
      -14.44,
      6.93
    ],
    "volumes": [
      112,
      106,
      73,
      48,
      91,
      81
    ],
    "rsiStack": [
      50.0,
      45.3,
      45.3,
      46.7,
      48.2,
      47.6
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 187.56,
    "change": 2.32,
    "mom": 48.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.6,
    "flow": 105,
    "perf": {
      "w1": -3.43,
      "m1": -23.54,
      "m3": 11.15
    },
    "returns": [
      2.32,
      7.5,
      -3.43,
      -0.59,
      -23.54,
      11.15
    ],
    "volumes": [
      118,
      112,
      73,
      58,
      68,
      60
    ],
    "rsiStack": [
      48.1,
      41.6,
      41.6,
      43.6,
      46.2,
      48.3
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 69.07,
    "chg": -2.33,
    "chgW": 1.42,
    "chgM": 6.16,
    "chgYTD": 11.91,
    "marketCap": "$33.2B",
    "pe": "14.1x",
    "evEbitda": "8.3x",
    "de": "0.6x",
    "drawdown": "-19.1%"
  },
  "MOS": {
    "price": 22.12,
    "chg": -2.85,
    "chgW": -0.81,
    "chgM": 4.69,
    "chgYTD": -8.18,
    "marketCap": "$7.0B",
    "pe": "158.0x",
    "evEbitda": "6.5x",
    "de": "0.5x",
    "drawdown": "-40.2%"
  },
  "CF": {
    "price": 125.19,
    "chg": -0.46,
    "chgW": 0.1,
    "chgM": 13.25,
    "chgYTD": 61.87,
    "marketCap": "$19.2B",
    "pe": "11.3x",
    "evEbitda": "6.9x",
    "de": "0.4x",
    "drawdown": "-11.8%"
  },
  "ICL": {
    "price": 5.06,
    "chg": -2.32,
    "chgW": -4.17,
    "chgM": 0.6,
    "chgYTD": -11.38,
    "marketCap": "$6.5B",
    "pe": "24.1x",
    "evEbitda": "7.4x",
    "de": "0.5x",
    "drawdown": "-27.4%"
  },
  "FMC": {
    "price": 10.71,
    "chg": -9.47,
    "chgW": -5.22,
    "chgM": -5.64,
    "chgYTD": -22.78,
    "marketCap": "$1.3B",
    "pe": "6.1x",
    "evEbitda": "19.6x",
    "de": "2.6x",
    "drawdown": "-73.8%"
  },
  "CTVA": {
    "price": 78.71,
    "chg": -11.9,
    "chgW": -11.81,
    "chgM": -8.26,
    "chgYTD": 17.43,
    "marketCap": "$52.6B",
    "pe": "47.7x",
    "evEbitda": "14.8x",
    "de": "0.1x",
    "drawdown": "-13.5%"
  },
  "ADM": {
    "price": 79.27,
    "chg": -1.66,
    "chgW": -7.74,
    "chgM": 3.23,
    "chgYTD": 37.88,
    "marketCap": "$38.2B",
    "pe": "35.4x",
    "evEbitda": "19.1x",
    "de": "0.5x",
    "drawdown": "-10.4%"
  },
  "BG": {
    "price": 106.23,
    "chg": 1.1,
    "chgW": -12.59,
    "chgM": -0.22,
    "chgYTD": 19.25,
    "marketCap": "$20.4B",
    "pe": "22.9x",
    "evEbitda": "12.1x",
    "de": "1.0x",
    "drawdown": "-21.2%"
  },
  "INGR": {
    "price": 99.46,
    "chg": -0.87,
    "chgW": -1.64,
    "chgM": 1.88,
    "chgYTD": -9.8,
    "marketCap": "$6.3B",
    "pe": "9.6x",
    "evEbitda": "6.1x",
    "de": "0.4x",
    "drawdown": "-23.9%"
  },
  "FPI": {
    "price": 9.35,
    "chg": -0.74,
    "chgW": -2.6,
    "chgM": -3.71,
    "chgYTD": -3.51,
    "marketCap": "$411M",
    "pe": "18.3x",
    "evEbitda": "24.0x",
    "de": "0.5x",
    "drawdown": "-29.3%"
  },
  "LAND": {
    "price": 8.11,
    "chg": -2.05,
    "chgW": -4.87,
    "chgM": -6.24,
    "chgYTD": -11.37,
    "marketCap": "$350M",
    "pe": "-17.0x",
    "evEbitda": "12.2x",
    "de": "0.7x",
    "drawdown": "-37.6%"
  },
  "DE": {
    "price": 592.67,
    "chg": -1.13,
    "chgW": -5.65,
    "chgM": -4.6,
    "chgYTD": 27.3,
    "marketCap": "$160.1B",
    "pe": "33.6x",
    "evEbitda": "23.4x",
    "de": "3.8x",
    "drawdown": "-12.1%"
  },
  "AGCO": {
    "price": 102.16,
    "chg": -4.64,
    "chgW": -15.72,
    "chgM": -12.3,
    "chgYTD": -2.07,
    "marketCap": "$7.4B",
    "pe": "14.1x",
    "evEbitda": "10.1x",
    "de": "0.6x",
    "drawdown": "-28.9%"
  },
  "CNH": {
    "price": 10.25,
    "chg": -0.68,
    "chgW": -8.07,
    "chgM": -4.38,
    "chgYTD": 11.17,
    "marketCap": "$12.7B",
    "pe": "32.0x",
    "evEbitda": "34.9x",
    "de": "3.3x",
    "drawdown": "-23.0%"
  },
  "XYL": {
    "price": 116.97,
    "chg": 0.13,
    "chgW": -2.32,
    "chgM": -0.97,
    "chgYTD": -14.11,
    "marketCap": "$27.3B",
    "pe": "27.8x",
    "evEbitda": "14.8x",
    "de": "0.3x",
    "drawdown": "-24.2%"
  },
  "VMI": {
    "price": 481.7,
    "chg": 1.07,
    "chgW": -0.92,
    "chgM": -13.26,
    "chgYTD": 19.73,
    "marketCap": "$9.4B",
    "pe": "18.8x",
    "evEbitda": "14.8x",
    "de": "0.5x",
    "drawdown": "-17.8%"
  },
  "LNN": {
    "price": 110.82,
    "chg": 0.23,
    "chgW": -2.76,
    "chgM": -9.25,
    "chgYTD": -5.98,
    "marketCap": "$1.1B",
    "pe": "21.3x",
    "evEbitda": "13.2x",
    "de": "0.3x",
    "drawdown": "-25.1%"
  },
  "MWA": {
    "price": 25.24,
    "chg": 1.16,
    "chgW": 0.84,
    "chgM": 1.08,
    "chgYTD": 5.96,
    "marketCap": "$3.9B",
    "pe": "19.1x",
    "evEbitda": "11.6x",
    "de": "0.4x",
    "drawdown": "-18.6%"
  },
  "WTS": {
    "price": 345.79,
    "chg": 0.49,
    "chgW": 0.39,
    "chgM": -6.18,
    "chgYTD": 25.28,
    "marketCap": "$11.5B",
    "pe": "31.6x",
    "evEbitda": "20.4x",
    "de": "0.1x",
    "drawdown": "-12.4%"
  },
  "TSN": {
    "price": 57.96,
    "chg": -4.44,
    "chgW": 0.89,
    "chgM": -1.58,
    "chgYTD": -1.13,
    "marketCap": "$20.4B",
    "pe": "45.6x",
    "evEbitda": "10.4x",
    "de": "0.4x",
    "drawdown": "-16.6%"
  },
  "PPC": {
    "price": 27.36,
    "chg": -6.75,
    "chgW": -4.6,
    "chgM": -4.87,
    "chgYTD": -29.83,
    "marketCap": "$6.5B",
    "pe": "11.9x",
    "evEbitda": "6.1x",
    "de": "0.8x",
    "drawdown": "-45.9%"
  },
  "HRL": {
    "price": 25.01,
    "chg": -1.42,
    "chgW": -1.19,
    "chgM": 0.04,
    "chgYTD": 5.53,
    "marketCap": "$13.8B",
    "pe": "29.4x",
    "evEbitda": "10.9x",
    "de": "0.0x",
    "drawdown": "-14.8%"
  },
  "CAG": {
    "price": 14.51,
    "chg": -3.46,
    "chgW": -1.76,
    "chgM": 1.19,
    "chgYTD": -16.18,
    "marketCap": "$6.9B",
    "pe": "9.4x",
    "evEbitda": "8.3x",
    "de": "1.2x",
    "drawdown": "-28.6%"
  },
  "CALM": {
    "price": 87.78,
    "chg": 0.8,
    "chgW": -2.81,
    "chgM": 4.69,
    "chgYTD": 10.32,
    "marketCap": "$4.1B",
    "pe": "13.2x",
    "evEbitda": "6.8x",
    "de": "–",
    "drawdown": "-25.3%"
  },
  "DBA": {
    "price": 27.51,
    "chg": 0.11,
    "chgW": -2.58,
    "chgM": 2.88,
    "chgYTD": 7.8,
    "marketCap": "–",
    "pe": "11.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-4.6%"
  },
  "MOO": {
    "price": 81.72,
    "chg": -2.16,
    "chgW": -1.72,
    "chgM": 1.0,
    "chgYTD": 12.27,
    "marketCap": "–",
    "pe": "18.5x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-5.6%"
  },
  "VEGI": {
    "price": 44.18,
    "chg": -2.47,
    "chgW": -4.16,
    "chgM": -0.02,
    "chgYTD": 14.54,
    "marketCap": "–",
    "pe": "20.7x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-6.5%"
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
