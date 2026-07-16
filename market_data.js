window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-07-16 23:24:20",
  "sections": {
    "Index": {
      "risk": "Neutral",
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
      "risk": "Neutral",
      "leader": "XLV",
      "watch": 2
    },
    "Stock": {
      "risk": "Neutral",
      "leader": "SBUX",
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
    "price": 7533.77,
    "change": -0.51,
    "mom": 44.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.8,
    "flow": 57,
    "perf": {
      "w1": -0.13,
      "m1": 0.3,
      "m3": 5.97
    },
    "returns": [
      -0.51,
      0.25,
      -0.13,
      0.68,
      0.3,
      5.97
    ],
    "volumes": [
      92,
      83,
      76,
      86,
      97,
      94
    ],
    "rsiStack": [
      51.9,
      54.5,
      54.8,
      55.6,
      57.4,
      62.5
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 52552.97,
    "change": -0.2,
    "mom": 41.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.6,
    "flow": 92,
    "perf": {
      "w1": 0.12,
      "m1": 1.06,
      "m3": 6.29
    },
    "returns": [
      -0.2,
      0.1,
      0.12,
      0.47,
      1.06,
      6.29
    ],
    "volumes": [
      88,
      70,
      78,
      75,
      103,
      83
    ],
    "rsiStack": [
      51.9,
      57.5,
      59.6,
      60.4,
      61.2,
      65.3
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
    "rsi": 43.2,
    "flow": 95,
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
      102,
      124,
      112,
      110,
      95
    ],
    "rsiStack": [
      45.7,
      41.9,
      43.2,
      45.4,
      48.3,
      52.1
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
    "rsi": 52.5,
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
      92,
      86,
      84,
      107,
      103,
      90
    ],
    "rsiStack": [
      55.1,
      51.5,
      52.5,
      53.9,
      55.1,
      54.6
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 364.96,
    "change": -1.98,
    "mom": 45.2,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 37.0,
    "flow": 119,
    "perf": {
      "w1": -3.5,
      "m1": -8.22,
      "m3": -17.45
    },
    "returns": [
      -1.98,
      -0.59,
      -3.5,
      -1.52,
      -8.22,
      -17.45
    ],
    "volumes": [
      106,
      96,
      59,
      57,
      105,
      81
    ],
    "rsiStack": [
      30.7,
      35.6,
      37.0,
      37.9,
      40.3,
      46.8
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 50.39,
    "change": -3.49,
    "mom": 43.9,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 33.3,
    "flow": 93,
    "perf": {
      "w1": -6.93,
      "m1": -20.51,
      "m3": -30.16
    },
    "returns": [
      -3.49,
      -3.39,
      -6.93,
      -5.95,
      -20.51,
      -30.16
    ],
    "volumes": [
      84,
      88,
      55,
      64,
      68,
      80
    ],
    "rsiStack": [
      25.9,
      30.9,
      33.3,
      35.4,
      37.5,
      37.9
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 39.11,
    "change": -4.38,
    "mom": 39.0,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 31.8,
    "flow": 130,
    "perf": {
      "w1": -7.65,
      "m1": -18.3,
      "m3": -30.22
    },
    "returns": [
      -4.38,
      -3.95,
      -7.65,
      -9.43,
      -18.3,
      -30.22
    ],
    "volumes": [
      105,
      94,
      74,
      111,
      95,
      66
    ],
    "rsiStack": [
      22.4,
      27.7,
      31.8,
      35.3,
      40.1,
      49.1
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 78.99,
    "change": -0.77,
    "mom": 66.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 52.4,
    "flow": 1,
    "perf": {
      "w1": 9.59,
      "m1": 3.87,
      "m3": -11.85
    },
    "returns": [
      -0.77,
      1.09,
      9.59,
      15.18,
      3.87,
      -11.85
    ],
    "volumes": [
      165,
      143,
      113,
      117,
      87,
      76
    ],
    "rsiStack": [
      73.7,
      61.5,
      52.4,
      48.5,
      47.7,
      50.1
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 118.66,
    "change": 0.71,
    "mom": 60.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.9,
    "flow": 77,
    "perf": {
      "w1": 4.07,
      "m1": 12.38,
      "m3": 2.35
    },
    "returns": [
      0.71,
      -1.87,
      4.07,
      9.71,
      12.38,
      2.35
    ],
    "volumes": [
      84,
      88,
      83,
      112,
      89,
      100
    ],
    "rsiStack": [
      64.6,
      64.4,
      59.9,
      56.2,
      54.6,
      58.0
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 34.21,
    "change": -1.89,
    "mom": 49.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.0,
    "flow": 49,
    "perf": {
      "w1": 0.0,
      "m1": 0.06,
      "m3": -4.39
    },
    "returns": [
      -1.89,
      -3.99,
      0.0,
      2.09,
      0.06,
      -4.39
    ],
    "volumes": [
      62,
      110,
      43,
      80,
      158,
      182
    ],
    "rsiStack": [
      39.6,
      44.9,
      45.0,
      45.3,
      47.9,
      56.0
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 22.53,
    "change": -2.21,
    "mom": 63.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.2,
    "flow": 50,
    "perf": {
      "w1": 8.58,
      "m1": 3.87,
      "m3": -6.55
    },
    "returns": [
      -2.21,
      0.99,
      8.58,
      5.77,
      3.87,
      -6.55
    ],
    "volumes": [
      72,
      84,
      60,
      71,
      98,
      89
    ],
    "rsiStack": [
      61.6,
      57.9,
      54.2,
      51.8,
      50.5,
      52.9
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 67.1,
    "change": -1.8,
    "mom": 59.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.2,
    "flow": 59,
    "perf": {
      "w1": 3.92,
      "m1": 2.47,
      "m3": -5.72
    },
    "returns": [
      -1.8,
      -0.74,
      3.92,
      5.55,
      2.47,
      -5.72
    ],
    "volumes": [
      55,
      65,
      72,
      98,
      73,
      112
    ],
    "rsiStack": [
      56.4,
      57.4,
      54.2,
      51.5,
      50.3,
      54.0
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 63720.94,
    "change": -1.53,
    "mom": 53.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.0,
    "flow": 99,
    "perf": {
      "w1": -0.13,
      "m1": 6.17,
      "m3": -17.7
    },
    "returns": [
      -1.53,
      2.38,
      -0.13,
      -0.43,
      6.17,
      -17.7
    ],
    "volumes": [
      98,
      130,
      48,
      93,
      128,
      141
    ],
    "rsiStack": [
      50.5,
      52.8,
      51.0,
      48.6,
      46.5,
      44.9
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 160.49,
    "change": -4.02,
    "mom": 53.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.1,
    "flow": 79,
    "perf": {
      "w1": 1.29,
      "m1": -5.19,
      "m3": -24.16
    },
    "returns": [
      -4.02,
      1.98,
      1.29,
      0.78,
      -5.19,
      -24.16
    ],
    "volumes": [
      98,
      70,
      61,
      59,
      135,
      76
    ],
    "rsiStack": [
      48.8,
      49.5,
      48.1,
      47.2,
      46.6,
      46.0
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 60.64,
    "change": -7.69,
    "mom": 50.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.9,
    "flow": 65,
    "perf": {
      "w1": -3.76,
      "m1": -23.93,
      "m3": -42.99
    },
    "returns": [
      -7.69,
      -3.75,
      -3.76,
      -2.11,
      -23.93,
      -42.99
    ],
    "volumes": [
      87,
      87,
      71,
      62,
      173,
      76
    ],
    "rsiStack": [
      33.6,
      35.2,
      35.9,
      37.5,
      40.0,
      43.1
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 94.03,
    "change": -3.53,
    "mom": 52.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.2,
    "flow": 41,
    "perf": {
      "w1": 0.15,
      "m1": -23.43,
      "m3": -44.95
    },
    "returns": [
      -3.53,
      2.1,
      0.15,
      0.69,
      -23.43,
      -44.95
    ],
    "volumes": [
      54,
      47,
      51,
      65,
      122,
      96
    ],
    "rsiStack": [
      43.0,
      41.2,
      39.2,
      39.2,
      40.9,
      45.5
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 57.02,
    "change": 0.92,
    "mom": 64.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.4,
    "flow": 78,
    "perf": {
      "w1": 4.01,
      "m1": 3.0,
      "m3": 3.54
    },
    "returns": [
      0.92,
      0.49,
      4.01,
      7.97,
      3.0,
      3.54
    ],
    "volumes": [
      102,
      124,
      64,
      122,
      97,
      106
    ],
    "rsiStack": [
      73.4,
      65.1,
      58.4,
      54.7,
      53.7,
      58.6
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 177.52,
    "change": -2.24,
    "mom": 34.4,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.2,
    "flow": 78,
    "perf": {
      "w1": -4.22,
      "m1": -4.78,
      "m3": 14.86
    },
    "returns": [
      -2.24,
      -2.07,
      -4.22,
      -4.36,
      -4.78,
      14.86
    ],
    "volumes": [
      85,
      75,
      61,
      87,
      67,
      67
    ],
    "rsiStack": [
      32.3,
      39.8,
      44.2,
      47.4,
      50.9,
      55.8
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 45.47,
    "change": 0.55,
    "mom": 52.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.5,
    "flow": 77,
    "perf": {
      "w1": 0.75,
      "m1": 0.91,
      "m3": -0.61
    },
    "returns": [
      0.55,
      -0.55,
      0.75,
      1.56,
      0.91,
      -0.61
    ],
    "volumes": [
      79,
      77,
      95,
      90,
      141,
      82
    ],
    "rsiStack": [
      51.1,
      52.3,
      52.5,
      52.0,
      51.5,
      51.9
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 161.8,
    "change": 2.22,
    "mom": 50.3,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.0,
    "flow": 104,
    "perf": {
      "w1": -0.23,
      "m1": 5.79,
      "m3": 9.75
    },
    "returns": [
      2.22,
      0.24,
      -0.23,
      1.42,
      5.79,
      9.75
    ],
    "volumes": [
      98,
      63,
      85,
      106,
      87,
      79
    ],
    "rsiStack": [
      59.8,
      59.4,
      60.0,
      60.1,
      60.1,
      63.7
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 112.65,
    "change": -0.64,
    "mom": 63.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.9,
    "flow": 73,
    "perf": {
      "w1": 1.94,
      "m1": 0.29,
      "m3": -5.14
    },
    "returns": [
      -0.64,
      0.95,
      1.94,
      2.65,
      0.29,
      -5.14
    ],
    "volumes": [
      81,
      74,
      82,
      98,
      186,
      130
    ],
    "rsiStack": [
      66.9,
      62.1,
      56.9,
      53.6,
      52.0,
      55.1
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 56.75,
    "change": 0.34,
    "mom": 63.2,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 2)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 2,
    "rsi": 71.7,
    "flow": 75,
    "perf": {
      "w1": 2.18,
      "m1": 4.42,
      "m3": 7.83
    },
    "returns": [
      0.34,
      1.21,
      2.18,
      3.6,
      4.42,
      7.83
    ],
    "volumes": [
      140,
      95,
      74,
      74,
      124,
      98
    ],
    "rsiStack": [
      80.0,
      74.8,
      71.7,
      69.0,
      66.0,
      63.8
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 45.46,
    "change": 2.02,
    "mom": 68.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.4,
    "flow": 76,
    "perf": {
      "w1": 2.78,
      "m1": 0.8,
      "m3": 1.84
    },
    "returns": [
      2.02,
      1.7,
      2.78,
      2.9,
      0.8,
      1.84
    ],
    "volumes": [
      84,
      77,
      53,
      84,
      141,
      83
    ],
    "rsiStack": [
      73.8,
      63.7,
      59.4,
      57.4,
      56.5,
      57.2
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 180.15,
    "change": 0.05,
    "mom": 37.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.7,
    "flow": 84,
    "perf": {
      "w1": -0.53,
      "m1": 0.17,
      "m3": 3.59
    },
    "returns": [
      0.05,
      -0.12,
      -0.53,
      -1.75,
      0.17,
      3.59
    ],
    "volumes": [
      101,
      72,
      66,
      93,
      97,
      108
    ],
    "rsiStack": [
      38.5,
      46.8,
      50.7,
      52.7,
      54.7,
      60.1
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 50.89,
    "change": 0.77,
    "mom": 54.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.7,
    "flow": 63,
    "perf": {
      "w1": 1.25,
      "m1": -3.47,
      "m3": -2.57
    },
    "returns": [
      0.77,
      0.61,
      1.25,
      -0.25,
      -3.47,
      -2.57
    ],
    "volumes": [
      108,
      76,
      87,
      101,
      121,
      67
    ],
    "rsiStack": [
      52.7,
      48.9,
      48.7,
      49.2,
      51.2,
      58.6
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 117.34,
    "change": 0.29,
    "mom": 54.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.4,
    "flow": 63,
    "perf": {
      "w1": 0.42,
      "m1": -0.95,
      "m3": -2.11
    },
    "returns": [
      0.29,
      1.12,
      0.42,
      -0.64,
      -0.95,
      -2.11
    ],
    "volumes": [
      106,
      71,
      98,
      112,
      128,
      78
    ],
    "rsiStack": [
      59.0,
      54.3,
      52.4,
      51.7,
      52.6,
      58.3
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 85.81,
    "change": 2.8,
    "mom": 62.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.5,
    "flow": 103,
    "perf": {
      "w1": 3.14,
      "m1": 0.26,
      "m3": 4.15
    },
    "returns": [
      2.8,
      1.44,
      3.14,
      3.01,
      0.26,
      4.15
    ],
    "volumes": [
      64,
      69,
      90,
      106,
      97,
      75
    ],
    "rsiStack": [
      68.4,
      60.9,
      57.5,
      55.6,
      54.2,
      53.4
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 530.5,
    "change": -4.46,
    "mom": 30.8,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.3,
    "flow": 101,
    "perf": {
      "w1": -8.8,
      "m1": -10.27,
      "m3": 27.05
    },
    "returns": [
      -4.46,
      -4.17,
      -8.8,
      -11.54,
      -10.27,
      27.05
    ],
    "volumes": [
      102,
      83,
      93,
      104,
      83,
      100
    ],
    "rsiStack": [
      28.9,
      37.2,
      42.3,
      45.9,
      49.7,
      54.9
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 27.59,
    "change": -1.39,
    "mom": 49.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 57.0,
    "flow": 58,
    "perf": {
      "w1": -0.43,
      "m1": 3.49,
      "m3": 2.22
    },
    "returns": [
      -1.39,
      -0.47,
      -0.43,
      2.72,
      3.49,
      2.22
    ],
    "volumes": [
      132,
      105,
      57,
      107,
      40,
      63
    ],
    "rsiStack": [
      51.0,
      57.3,
      57.0,
      55.6,
      54.7,
      55.7
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 44.94,
    "change": 1.03,
    "mom": 66.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.7,
    "flow": 69,
    "perf": {
      "w1": 2.98,
      "m1": 3.31,
      "m3": -1.08
    },
    "returns": [
      1.03,
      1.79,
      2.98,
      2.14,
      3.31,
      -1.08
    ],
    "volumes": [
      56,
      178,
      177,
      94,
      42,
      62
    ],
    "rsiStack": [
      75.3,
      65.5,
      59.7,
      56.3,
      55.2,
      60.8
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 45.66,
    "change": 1.78,
    "mom": 53.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.2,
    "flow": 49,
    "perf": {
      "w1": 1.08,
      "m1": 1.07,
      "m3": 9.99
    },
    "returns": [
      1.78,
      1.56,
      1.08,
      0.35,
      1.07,
      9.99
    ],
    "volumes": [
      40,
      24,
      21,
      26,
      87,
      52
    ],
    "rsiStack": [
      66.6,
      59.8,
      58.2,
      58.1,
      59.1,
      64.6
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.22,
    "change": 0.21,
    "mom": 56.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.8,
    "flow": 28,
    "perf": {
      "w1": 0.9,
      "m1": 2.28,
      "m3": -3.02
    },
    "returns": [
      0.21,
      0.1,
      0.9,
      1.25,
      2.28,
      -3.02
    ],
    "volumes": [
      90,
      98,
      6,
      9,
      2,
      26
    ],
    "rsiStack": [
      56.7,
      56.8,
      54.8,
      53.1,
      53.5,
      60.8
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 108.37,
    "change": 3.1,
    "mom": 56.9,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.2,
    "flow": 86,
    "perf": {
      "w1": 1.84,
      "m1": 6.58,
      "m3": 9.52
    },
    "returns": [
      3.1,
      0.96,
      1.84,
      4.82,
      6.58,
      9.52
    ],
    "volumes": [
      66,
      86,
      91,
      70,
      92,
      83
    ],
    "rsiStack": [
      70.2,
      66.3,
      63.2,
      60.9,
      59.9,
      63.9
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 82.14,
    "change": 0.69,
    "mom": 66.9,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 65.6,
    "flow": 56,
    "perf": {
      "w1": 2.22,
      "m1": 5.33,
      "m3": -1.96
    },
    "returns": [
      0.69,
      0.81,
      2.22,
      3.99,
      5.33,
      -1.96
    ],
    "volumes": [
      160,
      87,
      61,
      111,
      44,
      59
    ],
    "rsiStack": [
      81.4,
      72.8,
      65.6,
      60.3,
      57.4,
      61.7
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 14.19,
    "change": 0.07,
    "mom": 56.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.8,
    "flow": 55,
    "perf": {
      "w1": 4.26,
      "m1": -1.53,
      "m3": 10.26
    },
    "returns": [
      0.07,
      2.45,
      4.26,
      4.03,
      -1.53,
      10.26
    ],
    "volumes": [
      108,
      97,
      78,
      83,
      82,
      70
    ],
    "rsiStack": [
      68.2,
      56.7,
      52.8,
      52.3,
      53.6,
      59.1
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 77.72,
    "change": 0.1,
    "mom": 57.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.4,
    "flow": 45,
    "perf": {
      "w1": 1.4,
      "m1": -5.81,
      "m3": -3.5
    },
    "returns": [
      0.1,
      1.3,
      1.4,
      2.91,
      -5.81,
      -3.5
    ],
    "volumes": [
      78,
      40,
      49,
      86,
      84,
      96
    ],
    "rsiStack": [
      58.2,
      50.3,
      48.4,
      48.7,
      51.2,
      59.5
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 25.04,
    "change": -1.09,
    "mom": 55.9,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 61.3,
    "flow": 42,
    "perf": {
      "w1": 1.72,
      "m1": 5.0,
      "m3": 3.96
    },
    "returns": [
      -1.09,
      0.74,
      1.72,
      3.87,
      5.0,
      3.96
    ],
    "volumes": [
      139,
      114,
      28,
      79,
      93,
      38
    ],
    "rsiStack": [
      64.5,
      65.1,
      61.3,
      58.0,
      55.5,
      54.7
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 25.14,
    "change": 1.29,
    "mom": 72.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.9,
    "flow": 85,
    "perf": {
      "w1": 3.67,
      "m1": -3.46,
      "m3": -8.65
    },
    "returns": [
      1.29,
      2.7,
      3.67,
      5.28,
      -3.46,
      -8.65
    ],
    "volumes": [
      85,
      84,
      57,
      85,
      101,
      96
    ],
    "rsiStack": [
      74.4,
      61.8,
      54.9,
      51.3,
      49.8,
      53.5
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.83,
    "change": 2.61,
    "mom": 71.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.9,
    "flow": 92,
    "perf": {
      "w1": 3.69,
      "m1": 0.31,
      "m3": -16.41
    },
    "returns": [
      2.61,
      2.4,
      3.69,
      1.76,
      0.31,
      -16.41
    ],
    "volumes": [
      83,
      84,
      91,
      97,
      70,
      132
    ],
    "rsiStack": [
      69.5,
      57.7,
      50.9,
      47.2,
      46.6,
      53.8
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.94,
    "change": 3.23,
    "mom": 83.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.6,
    "flow": 108,
    "perf": {
      "w1": 4.44,
      "m1": 1.82,
      "m3": -12.87
    },
    "returns": [
      3.23,
      3.95,
      4.44,
      3.59,
      1.82,
      -12.87
    ],
    "volumes": [
      61,
      74,
      47,
      95,
      98,
      104
    ],
    "rsiStack": [
      86.5,
      68.5,
      56.6,
      50.1,
      46.3,
      46.1
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 207.97,
    "change": -8.28,
    "mom": 29.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.6,
    "flow": 87,
    "perf": {
      "w1": -21.71,
      "m1": -13.05,
      "m3": 19.16
    },
    "returns": [
      -8.28,
      -12.2,
      -21.71,
      -19.73,
      -13.05,
      19.16
    ],
    "volumes": [
      61,
      71,
      68,
      72,
      70,
      77
    ],
    "rsiStack": [
      21.2,
      33.8,
      40.6,
      44.7,
      47.4,
      45.5
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 188.3,
    "change": -8.71,
    "mom": 29.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.6,
    "flow": 78,
    "perf": {
      "w1": -22.6,
      "m1": -32.43,
      "m3": 27.37
    },
    "returns": [
      -8.71,
      -13.44,
      -22.6,
      -30.78,
      -32.43,
      27.37
    ],
    "volumes": [
      59,
      53,
      41,
      62,
      50,
      101
    ],
    "rsiStack": [
      17.4,
      27.7,
      35.6,
      40.9,
      45.8,
      50.8
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 67.1,
    "chg": -1.8,
    "chgW": 3.92,
    "chgM": 2.47,
    "chgYTD": 8.72,
    "marketCap": "$32.2B",
    "pe": "13.7x",
    "evEbitda": "8.2x",
    "de": "0.6x",
    "drawdown": "-21.4%"
  },
  "MOS": {
    "price": 22.53,
    "chg": -2.21,
    "chgW": 8.58,
    "chgM": 3.87,
    "chgYTD": -6.48,
    "marketCap": "$7.2B",
    "pe": "160.9x",
    "evEbitda": "6.4x",
    "de": "0.5x",
    "drawdown": "-40.0%"
  },
  "CF": {
    "price": 118.66,
    "chg": 0.71,
    "chgW": 4.07,
    "chgM": 12.38,
    "chgYTD": 53.43,
    "marketCap": "$18.2B",
    "pe": "10.7x",
    "evEbitda": "6.6x",
    "de": "0.4x",
    "drawdown": "-16.4%"
  },
  "ICL": {
    "price": 5.04,
    "chg": -1.18,
    "chgW": 3.92,
    "chgM": -6.84,
    "chgYTD": -11.73,
    "marketCap": "$6.5B",
    "pe": "24.0x",
    "evEbitda": "7.4x",
    "de": "0.5x",
    "drawdown": "-28.8%"
  },
  "FMC": {
    "price": 11.44,
    "chg": 5.63,
    "chgW": 5.05,
    "chgM": -1.38,
    "chgYTD": -17.52,
    "marketCap": "$1.4B",
    "pe": "5.6x",
    "evEbitda": "17.0x",
    "de": "2.5x",
    "drawdown": "-74.0%"
  },
  "CTVA": {
    "price": 86.65,
    "chg": 2.61,
    "chgW": 3.33,
    "chgM": 12.72,
    "chgYTD": 29.27,
    "marketCap": "$58.0B",
    "pe": "46.8x",
    "evEbitda": "14.0x",
    "de": "0.1x",
    "drawdown": "-1.2%"
  },
  "ADM": {
    "price": 83.0,
    "chg": 0.85,
    "chgW": 5.09,
    "chgM": 6.38,
    "chgYTD": 44.37,
    "marketCap": "$40.0B",
    "pe": "37.1x",
    "evEbitda": "19.7x",
    "de": "0.5x",
    "drawdown": "-2.8%"
  },
  "BG": {
    "price": 115.83,
    "chg": 0.1,
    "chgW": 1.95,
    "chgM": -3.01,
    "chgYTD": 30.03,
    "marketCap": "$22.5B",
    "pe": "30.5x",
    "evEbitda": "17.3x",
    "de": "0.9x",
    "drawdown": "-14.1%"
  },
  "INGR": {
    "price": 102.24,
    "chg": 3.1,
    "chgW": 4.87,
    "chgM": 1.42,
    "chgYTD": -7.27,
    "marketCap": "$6.4B",
    "pe": "9.8x",
    "evEbitda": "6.0x",
    "de": "0.4x",
    "drawdown": "-24.8%"
  },
  "FPI": {
    "price": 9.83,
    "chg": 2.61,
    "chgW": 3.69,
    "chgM": 0.31,
    "chgYTD": 1.44,
    "marketCap": "$436M",
    "pe": "16.7x",
    "evEbitda": "24.1x",
    "de": "0.5x",
    "drawdown": "-25.7%"
  },
  "LAND": {
    "price": 8.94,
    "chg": 3.23,
    "chgW": 4.44,
    "chgM": 1.82,
    "chgYTD": -2.3,
    "marketCap": "$386M",
    "pe": "-18.8x",
    "evEbitda": "12.4x",
    "de": "0.7x",
    "drawdown": "-31.2%"
  },
  "DE": {
    "price": 598.97,
    "chg": 1.61,
    "chgW": 1.02,
    "chgM": 2.34,
    "chgYTD": 28.65,
    "marketCap": "$161.7B",
    "pe": "34.0x",
    "evEbitda": "23.1x",
    "de": "3.8x",
    "drawdown": "-11.2%"
  },
  "AGCO": {
    "price": 115.35,
    "chg": 0.4,
    "chgW": 1.85,
    "chgM": 1.89,
    "chgYTD": 10.57,
    "marketCap": "$8.4B",
    "pe": "11.1x",
    "evEbitda": "10.3x",
    "de": "0.6x",
    "drawdown": "-19.8%"
  },
  "CNH": {
    "price": 10.6,
    "chg": 0.28,
    "chgW": 3.11,
    "chgM": 0.86,
    "chgYTD": 14.97,
    "marketCap": "$13.1B",
    "pe": "33.1x",
    "evEbitda": "35.2x",
    "de": "3.3x",
    "drawdown": "-21.4%"
  },
  "XYL": {
    "price": 125.3,
    "chg": 3.19,
    "chgW": 5.39,
    "chgM": 11.85,
    "chgYTD": -7.99,
    "marketCap": "$29.8B",
    "pe": "31.2x",
    "evEbitda": "15.9x",
    "de": "0.2x",
    "drawdown": "-18.8%"
  },
  "VMI": {
    "price": 538.48,
    "chg": -1.08,
    "chgW": -1.51,
    "chgM": -3.24,
    "chgYTD": 33.84,
    "marketCap": "$10.5B",
    "pe": "30.0x",
    "evEbitda": "17.8x",
    "de": "0.5x",
    "drawdown": "-8.1%"
  },
  "LNN": {
    "price": 118.26,
    "chg": 2.26,
    "chgW": 6.37,
    "chgM": 1.87,
    "chgYTD": 0.33,
    "marketCap": "$1.2B",
    "pe": "22.7x",
    "evEbitda": "13.8x",
    "de": "0.3x",
    "drawdown": "-20.1%"
  },
  "MWA": {
    "price": 25.94,
    "chg": 4.3,
    "chgW": 4.13,
    "chgM": -1.11,
    "chgYTD": 8.9,
    "marketCap": "$4.1B",
    "pe": "19.7x",
    "evEbitda": "12.0x",
    "de": "0.4x",
    "drawdown": "-16.3%"
  },
  "WTS": {
    "price": 353.4,
    "chg": 1.2,
    "chgW": 1.55,
    "chgM": 4.25,
    "chgYTD": 28.03,
    "marketCap": "$11.8B",
    "pe": "32.3x",
    "evEbitda": "21.0x",
    "de": "0.1x",
    "drawdown": "-10.4%"
  },
  "TSN": {
    "price": 57.83,
    "chg": 0.63,
    "chgW": 0.21,
    "chgM": 1.03,
    "chgYTD": -1.35,
    "marketCap": "$20.4B",
    "pe": "45.5x",
    "evEbitda": "10.3x",
    "de": "0.4x",
    "drawdown": "-16.8%"
  },
  "PPC": {
    "price": 29.01,
    "chg": 2.08,
    "chgW": 5.84,
    "chgM": -0.28,
    "chgYTD": -25.6,
    "marketCap": "$6.9B",
    "pe": "7.8x",
    "evEbitda": "4.7x",
    "de": "0.9x",
    "drawdown": "-42.6%"
  },
  "HRL": {
    "price": 25.71,
    "chg": 2.23,
    "chgW": 5.67,
    "chgM": 4.3,
    "chgYTD": 8.48,
    "marketCap": "$14.1B",
    "pe": "30.2x",
    "evEbitda": "11.0x",
    "de": "0.0x",
    "drawdown": "-14.6%"
  },
  "CAG": {
    "price": 14.47,
    "chg": 2.7,
    "chgW": 8.23,
    "chgM": 6.71,
    "chgYTD": -16.41,
    "marketCap": "$6.9B",
    "pe": "9.2x",
    "evEbitda": "8.1x",
    "de": "1.1x",
    "drawdown": "-28.8%"
  },
  "CALM": {
    "price": 88.28,
    "chg": 3.42,
    "chgW": 3.43,
    "chgM": 11.7,
    "chgYTD": 10.95,
    "marketCap": "$4.2B",
    "pe": "6.1x",
    "evEbitda": "3.0x",
    "de": "–",
    "drawdown": "-30.2%"
  },
  "DBA": {
    "price": 27.59,
    "chg": -1.39,
    "chgW": -0.43,
    "chgM": 3.49,
    "chgYTD": 8.11,
    "marketCap": "–",
    "pe": "11.7x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-4.3%"
  },
  "MOO": {
    "price": 82.14,
    "chg": 0.69,
    "chgW": 2.22,
    "chgM": 5.33,
    "chgYTD": 12.85,
    "marketCap": "–",
    "pe": "18.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-5.1%"
  },
  "VEGI": {
    "price": 44.94,
    "chg": 1.03,
    "chgW": 2.98,
    "chgM": 3.31,
    "chgYTD": 16.52,
    "marketCap": "–",
    "pe": "21.0x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-4.9%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "51.8x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
