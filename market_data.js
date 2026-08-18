window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-08-18 22:50:00",
  "sections": {
    "Index": {
      "risk": "Risk On",
      "leader": "SP500",
      "watch": 0
    },
    "Commodity": {
      "risk": "Strong ON",
      "leader": "URA",
      "watch": 1
    },
    "Crypto": {
      "risk": "Risk Off",
      "leader": "BTC",
      "watch": 0
    },
    "ETF": {
      "risk": "Risk On",
      "leader": "XLE",
      "watch": 1
    },
    "Stock": {
      "risk": "Risk On",
      "leader": "CRDO",
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
    "price": 7691.76,
    "change": -0.69,
    "mom": 40.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.2,
    "flow": 53,
    "perf": {
      "w1": -0.47,
      "m1": 2.43,
      "m3": 3.3
    },
    "returns": [
      -0.69,
      -1.37,
      -0.47,
      -0.58,
      2.43,
      3.3
    ],
    "volumes": [
      87,
      93,
      90,
      95,
      115,
      95
    ],
    "rsiStack": [
      41.1,
      53.4,
      56.2,
      56.9,
      57.7,
      60.7
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 53343.4,
    "change": -0.22,
    "mom": 33.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.8,
    "flow": 89,
    "perf": {
      "w1": -0.83,
      "m1": 2.14,
      "m3": 6.08
    },
    "returns": [
      -0.22,
      -0.92,
      -0.83,
      -1.37,
      2.14,
      6.08
    ],
    "volumes": [
      91,
      86,
      76,
      76,
      116,
      74
    ],
    "rsiStack": [
      35.6,
      49.7,
      53.8,
      55.7,
      57.3,
      59.8
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 6977.94,
    "change": 2.42,
    "mom": 63.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.3,
    "flow": 95,
    "perf": {
      "w1": 11.49,
      "m1": 2.31,
      "m3": -4.04
    },
    "returns": [
      2.42,
      9.97,
      11.49,
      5.8,
      2.31,
      -4.04
    ],
    "volumes": [
      118,
      92,
      79,
      84,
      102,
      95
    ],
    "rsiStack": [
      75.5,
      60.2,
      53.3,
      50.6,
      50.1,
      52.5
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
    "rsi": 60.9,
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
      78,
      93,
      91,
      109,
      119,
      123
    ],
    "rsiStack": [
      83.3,
      68.5,
      60.9,
      57.6,
      56.2,
      56.7
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 398.55,
    "change": -1.71,
    "mom": 54.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.5,
    "flow": 110,
    "perf": {
      "w1": -0.6,
      "m1": 6.33,
      "m3": -4.42
    },
    "returns": [
      -1.71,
      -0.1,
      -0.6,
      6.52,
      6.33,
      -4.42
    ],
    "volumes": [
      117,
      110,
      96,
      177,
      89,
      90
    ],
    "rsiStack": [
      52.3,
      59.0,
      58.5,
      56.1,
      53.9,
      56.4
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 57.44,
    "change": -3.58,
    "mom": 53.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.3,
    "flow": 86,
    "perf": {
      "w1": -1.9,
      "m1": 8.21,
      "m3": -17.29
    },
    "returns": [
      -3.58,
      -1.24,
      -1.9,
      6.69,
      8.21,
      -17.29
    ],
    "volumes": [
      84,
      78,
      88,
      135,
      97,
      72
    ],
    "rsiStack": [
      47.1,
      54.7,
      54.3,
      52.3,
      52.4,
      61.2
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 43.62,
    "change": -3.6,
    "mom": 48.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.3,
    "flow": 94,
    "perf": {
      "w1": -3.43,
      "m1": 8.37,
      "m3": -10.72
    },
    "returns": [
      -3.6,
      -3.6,
      -3.43,
      2.66,
      8.37,
      -10.72
    ],
    "volumes": [
      63,
      99,
      85,
      112,
      193,
      148
    ],
    "rsiStack": [
      41.0,
      52.0,
      52.3,
      50.6,
      48.9,
      49.1
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 84.51,
    "change": 0.01,
    "mom": 59.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.8,
    "flow": 0,
    "perf": {
      "w1": 1.57,
      "m1": -0.47,
      "m3": -12.29
    },
    "returns": [
      0.01,
      4.01,
      1.57,
      11.53,
      -0.47,
      -12.29
    ],
    "volumes": [
      66,
      88,
      102,
      84,
      123,
      125
    ],
    "rsiStack": [
      67.1,
      59.1,
      55.8,
      53.5,
      51.9,
      52.7
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 119.72,
    "change": 1.65,
    "mom": 53.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.6,
    "flow": 108,
    "perf": {
      "w1": 1.63,
      "m1": -2.64,
      "m3": -1.62
    },
    "returns": [
      1.65,
      2.28,
      1.63,
      1.36,
      -2.64,
      -1.62
    ],
    "volumes": [
      91,
      88,
      134,
      91,
      92,
      91
    ],
    "rsiStack": [
      55.5,
      51.7,
      51.6,
      51.5,
      50.8,
      47.7
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 36.41,
    "change": -0.52,
    "mom": 57.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.1,
    "flow": 60,
    "perf": {
      "w1": -1.27,
      "m1": 6.03,
      "m3": -9.74
    },
    "returns": [
      -0.52,
      1.2,
      -1.27,
      7.21,
      6.03,
      -9.74
    ],
    "volumes": [
      70,
      71,
      91,
      127,
      142,
      65
    ],
    "rsiStack": [
      57.0,
      57.8,
      56.1,
      53.9,
      51.7,
      50.4
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 21.14,
    "change": -0.42,
    "mom": 32.5,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 39.6,
    "flow": 65,
    "perf": {
      "w1": -8.48,
      "m1": -3.78,
      "m3": -3.65
    },
    "returns": [
      -0.42,
      -2.94,
      -8.48,
      -6.91,
      -3.78,
      -3.65
    ],
    "volumes": [
      120,
      106,
      80,
      74,
      93,
      86
    ],
    "rsiStack": [
      20.1,
      32.9,
      39.6,
      42.7,
      43.5,
      39.7
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 69.4,
    "change": 1.63,
    "mom": 63.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.1,
    "flow": 86,
    "perf": {
      "w1": 4.66,
      "m1": 4.11,
      "m3": -1.01
    },
    "returns": [
      1.63,
      2.86,
      4.66,
      5.22,
      4.11,
      -1.01
    ],
    "volumes": [
      79,
      95,
      146,
      135,
      108,
      102
    ],
    "rsiStack": [
      72.5,
      62.1,
      58.1,
      55.4,
      52.5,
      48.3
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 64586.25,
    "change": 0.12,
    "mom": 59.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.0,
    "flow": 96,
    "perf": {
      "w1": 1.87,
      "m1": 1.06,
      "m3": 1.65
    },
    "returns": [
      0.12,
      2.48,
      1.87,
      -0.49,
      1.06,
      1.65
    ],
    "volumes": [
      108,
      48,
      90,
      98,
      54,
      118
    ],
    "rsiStack": [
      70.8,
      59.7,
      55.0,
      52.4,
      50.1,
      49.3
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 146.23,
    "change": -2.87,
    "mom": 49.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.0,
    "flow": 89,
    "perf": {
      "w1": -1.58,
      "m1": -16.84,
      "m3": -24.45
    },
    "returns": [
      -2.87,
      -4.98,
      -1.58,
      -2.99,
      -16.84,
      -24.45
    ],
    "volumes": [
      74,
      96,
      83,
      112,
      97,
      179
    ],
    "rsiStack": [
      37.9,
      41.3,
      43.0,
      44.1,
      45.8,
      50.3
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 71.73,
    "change": -3.83,
    "mom": 60.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.2,
    "flow": 67,
    "perf": {
      "w1": 0.8,
      "m1": 0.91,
      "m3": -37.56
    },
    "returns": [
      -3.83,
      -4.84,
      0.8,
      13.41,
      0.91,
      -37.56
    ],
    "volumes": [
      86,
      93,
      122,
      101,
      101,
      120
    ],
    "rsiStack": [
      55.4,
      57.2,
      54.2,
      51.0,
      48.9,
      49.4
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 92.52,
    "change": -5.28,
    "mom": 50.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 43.7,
    "flow": 105,
    "perf": {
      "w1": -3.72,
      "m1": -9.25,
      "m3": -43.88
    },
    "returns": [
      -5.28,
      -4.72,
      -3.72,
      -5.25,
      -9.25,
      -43.88
    ],
    "volumes": [
      127,
      118,
      80,
      187,
      100,
      80
    ],
    "rsiStack": [
      38.9,
      42.9,
      43.7,
      43.4,
      43.5,
      45.6
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 63.68,
    "change": 1.76,
    "mom": 65.7,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 72.9,
    "flow": 97,
    "perf": {
      "w1": 4.51,
      "m1": 8.85,
      "m3": 7.69
    },
    "returns": [
      1.76,
      4.29,
      4.51,
      8.82,
      8.85,
      7.69
    ],
    "volumes": [
      85,
      73,
      77,
      70,
      125,
      67
    ],
    "rsiStack": [
      88.2,
      78.8,
      72.9,
      68.2,
      63.2,
      57.4
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 185.62,
    "change": -2.47,
    "mom": 44.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.9,
    "flow": 104,
    "perf": {
      "w1": -0.25,
      "m1": 2.68,
      "m3": 3.93
    },
    "returns": [
      -2.47,
      -2.7,
      -0.25,
      -0.68,
      2.68,
      3.93
    ],
    "volumes": [
      76,
      57,
      65,
      70,
      146,
      73
    ],
    "rsiStack": [
      42.0,
      51.6,
      52.9,
      53.0,
      53.7,
      55.6
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 44.02,
    "change": -0.36,
    "mom": 51.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.5,
    "flow": 91,
    "perf": {
      "w1": 0.89,
      "m1": -2.0,
      "m3": -2.18
    },
    "returns": [
      -0.36,
      -0.05,
      0.89,
      -0.2,
      -2.0,
      -2.18
    ],
    "volumes": [
      82,
      88,
      97,
      95,
      145,
      84
    ],
    "rsiStack": [
      49.3,
      45.2,
      44.5,
      45.2,
      46.4,
      49.5
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 169.73,
    "change": 1.6,
    "mom": 58.3,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 66.6,
    "flow": 83,
    "perf": {
      "w1": 1.02,
      "m1": 5.92,
      "m3": 14.57
    },
    "returns": [
      1.6,
      0.8,
      1.02,
      4.71,
      5.92,
      14.57
    ],
    "volumes": [
      81,
      74,
      70,
      81,
      157,
      61
    ],
    "rsiStack": [
      75.6,
      70.1,
      66.6,
      64.5,
      62.2,
      58.3
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 110.48,
    "change": -0.31,
    "mom": 47.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.7,
    "flow": 70,
    "perf": {
      "w1": -1.21,
      "m1": -0.29,
      "m3": -4.84
    },
    "returns": [
      -0.31,
      -1.84,
      -1.21,
      -0.77,
      -0.29,
      -4.84
    ],
    "volumes": [
      65,
      93,
      71,
      63,
      120,
      56
    ],
    "rsiStack": [
      43.2,
      48.7,
      49.7,
      49.7,
      50.1,
      54.9
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 57.84,
    "change": 0.45,
    "mom": 39.8,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 60.7,
    "flow": 80,
    "perf": {
      "w1": 0.07,
      "m1": 3.08,
      "m3": 11.81
    },
    "returns": [
      0.45,
      -0.72,
      0.07,
      -0.07,
      3.08,
      11.81
    ],
    "volumes": [
      154,
      77,
      62,
      62,
      93,
      77
    ],
    "rsiStack": [
      52.2,
      57.8,
      60.7,
      62.0,
      62.6,
      64.1
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 44.63,
    "change": -0.45,
    "mom": 42.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 45.7,
    "flow": 112,
    "perf": {
      "w1": 0.52,
      "m1": -1.33,
      "m3": 0.45
    },
    "returns": [
      -0.45,
      -1.09,
      0.52,
      -1.22,
      -1.33,
      0.45
    ],
    "volumes": [
      160,
      113,
      106,
      101,
      162,
      66
    ],
    "rsiStack": [
      38.4,
      42.6,
      45.7,
      48.0,
      50.5,
      55.5
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 183.57,
    "change": -1.48,
    "mom": 34.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.2,
    "flow": 74,
    "perf": {
      "w1": -1.15,
      "m1": 2.75,
      "m3": 7.65
    },
    "returns": [
      -1.48,
      -1.19,
      -1.15,
      -1.52,
      2.75,
      7.65
    ],
    "volumes": [
      88,
      78,
      74,
      91,
      154,
      70
    ],
    "rsiStack": [
      34.2,
      47.1,
      51.2,
      52.9,
      54.1,
      55.9
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 51.78,
    "change": -0.88,
    "mom": 36.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.5,
    "flow": 68,
    "perf": {
      "w1": -2.74,
      "m1": 3.35,
      "m3": 3.52
    },
    "returns": [
      -0.88,
      -1.01,
      -2.74,
      -0.42,
      3.35,
      3.52
    ],
    "volumes": [
      67,
      90,
      99,
      116,
      152,
      80
    ],
    "rsiStack": [
      35.0,
      46.0,
      49.5,
      50.6,
      51.1,
      51.8
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 116.36,
    "change": -0.33,
    "mom": 39.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.0,
    "flow": 73,
    "perf": {
      "w1": -2.42,
      "m1": 1.3,
      "m3": -1.97
    },
    "returns": [
      -0.33,
      -1.76,
      -2.42,
      -1.63,
      1.3,
      -1.97
    ],
    "volumes": [
      98,
      61,
      49,
      64,
      122,
      77
    ],
    "rsiStack": [
      32.7,
      45.7,
      49.0,
      49.9,
      50.8,
      54.4
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 85.58,
    "change": 1.06,
    "mom": 53.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.1,
    "flow": 94,
    "perf": {
      "w1": 1.05,
      "m1": 1.81,
      "m3": 1.09
    },
    "returns": [
      1.06,
      -0.49,
      1.05,
      0.25,
      1.81,
      1.09
    ],
    "volumes": [
      101,
      97,
      68,
      52,
      117,
      65
    ],
    "rsiStack": [
      54.6,
      53.5,
      53.1,
      52.7,
      52.4,
      52.7
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 531.39,
    "change": -4.96,
    "mom": 45.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.6,
    "flow": 99,
    "perf": {
      "w1": -0.53,
      "m1": -3.85,
      "m3": 1.27
    },
    "returns": [
      -4.96,
      -3.51,
      -0.53,
      -2.0,
      -3.85,
      1.27
    ],
    "volumes": [
      59,
      57,
      67,
      49,
      102,
      98
    ],
    "rsiStack": [
      40.6,
      46.7,
      47.6,
      48.3,
      49.8,
      52.4
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 28.03,
    "change": -0.39,
    "mom": 56.3,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 56.8,
    "flow": 194,
    "perf": {
      "w1": 1.59,
      "m1": -0.43,
      "m3": 1.52
    },
    "returns": [
      -0.39,
      1.48,
      1.59,
      1.34,
      -0.43,
      1.52
    ],
    "volumes": [
      120,
      66,
      61,
      50,
      91,
      65
    ],
    "rsiStack": [
      62.0,
      58.4,
      56.8,
      55.9,
      55.5,
      57.4
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 44.25,
    "change": -0.14,
    "mom": 42.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.1,
    "flow": 54,
    "perf": {
      "w1": -0.81,
      "m1": -0.99,
      "m3": -0.5
    },
    "returns": [
      -0.14,
      -0.7,
      -0.81,
      0.18,
      -0.99,
      -0.5
    ],
    "volumes": [
      81,
      30,
      74,
      41,
      46,
      101
    ],
    "rsiStack": [
      32.7,
      40.9,
      45.1,
      47.0,
      48.2,
      49.6
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 44.33,
    "change": -1.58,
    "mom": 35.5,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.3,
    "flow": 8,
    "perf": {
      "w1": -0.79,
      "m1": -0.47,
      "m3": 6.3
    },
    "returns": [
      -1.58,
      -1.93,
      -0.79,
      -1.17,
      -0.47,
      6.3
    ],
    "volumes": [
      16,
      24,
      53,
      15,
      36,
      23
    ],
    "rsiStack": [
      30.8,
      39.9,
      44.3,
      47.4,
      50.9,
      56.7
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.06,
    "change": 0.42,
    "mom": 45.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.2,
    "flow": 45,
    "perf": {
      "w1": -1.22,
      "m1": -0.68,
      "m3": -0.31
    },
    "returns": [
      0.42,
      0.28,
      -1.22,
      -1.15,
      -0.68,
      -0.31
    ],
    "volumes": [
      40,
      148,
      37,
      63,
      18,
      17
    ],
    "rsiStack": [
      41.1,
      43.5,
      46.2,
      47.6,
      48.4,
      48.8
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 106.01,
    "change": -1.77,
    "mom": 46.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.8,
    "flow": 70,
    "perf": {
      "w1": -0.61,
      "m1": 1.49,
      "m3": 1.81
    },
    "returns": [
      -1.77,
      -2.34,
      -0.61,
      0.99,
      1.49,
      1.81
    ],
    "volumes": [
      78,
      66,
      63,
      79,
      120,
      85
    ],
    "rsiStack": [
      41.3,
      49.4,
      51.8,
      52.8,
      54.2,
      58.6
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 81.35,
    "change": 0.2,
    "mom": 48.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.0,
    "flow": 87,
    "perf": {
      "w1": -0.33,
      "m1": -0.97,
      "m3": 1.11
    },
    "returns": [
      0.2,
      0.48,
      -0.33,
      -0.42,
      -0.97,
      1.11
    ],
    "volumes": [
      68,
      87,
      103,
      67,
      190,
      39
    ],
    "rsiStack": [
      48.5,
      47.3,
      49.0,
      50.0,
      49.7,
      47.1
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 13.93,
    "change": -0.85,
    "mom": 46.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.8,
    "flow": 50,
    "perf": {
      "w1": -0.36,
      "m1": -2.38,
      "m3": 1.9
    },
    "returns": [
      -0.85,
      0.29,
      -0.36,
      -2.18,
      -2.38,
      1.9
    ],
    "volumes": [
      60,
      50,
      67,
      63,
      98,
      99
    ],
    "rsiStack": [
      41.7,
      43.8,
      45.8,
      47.5,
      49.8,
      53.9
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 83.71,
    "change": -0.78,
    "mom": 34.5,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "NEUTRAL",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.9,
    "flow": 42,
    "perf": {
      "w1": -6.31,
      "m1": 5.27,
      "m3": 8.42
    },
    "returns": [
      -0.78,
      -3.1,
      -6.31,
      -5.21,
      5.27,
      8.42
    ],
    "volumes": [
      70,
      50,
      66,
      55,
      74,
      165
    ],
    "rsiStack": [
      25.5,
      39.8,
      46.9,
      50.1,
      51.7,
      52.3
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 26.4,
    "change": 0.11,
    "mom": 64.9,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 69.5,
    "flow": 159,
    "perf": {
      "w1": 3.85,
      "m1": 3.45,
      "m3": 4.02
    },
    "returns": [
      0.11,
      2.4,
      3.85,
      5.85,
      3.45,
      4.02
    ],
    "volumes": [
      424,
      71,
      30,
      69,
      21,
      84
    ],
    "rsiStack": [
      86.0,
      75.7,
      69.5,
      65.6,
      62.6,
      63.0
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 27.25,
    "change": 1.41,
    "mom": 62.3,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 68.8,
    "flow": 76,
    "perf": {
      "w1": 2.37,
      "m1": 9.26,
      "m3": 5.01
    },
    "returns": [
      1.41,
      1.68,
      2.37,
      7.24,
      9.26,
      5.01
    ],
    "volumes": [
      75,
      87,
      90,
      102,
      158,
      56
    ],
    "rsiStack": [
      77.9,
      73.3,
      68.8,
      64.5,
      59.4,
      52.3
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.94,
    "change": 1.64,
    "mom": 64.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.1,
    "flow": 97,
    "perf": {
      "w1": 2.26,
      "m1": 3.22,
      "m3": -4.7
    },
    "returns": [
      1.64,
      1.95,
      2.26,
      3.87,
      3.22,
      -4.7
    ],
    "volumes": [
      81,
      69,
      128,
      145,
      137,
      80
    ],
    "rsiStack": [
      64.4,
      60.8,
      57.1,
      53.6,
      49.7,
      45.8
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.23,
    "change": -0.12,
    "mom": 56.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.6,
    "flow": 83,
    "perf": {
      "w1": 1.23,
      "m1": -5.4,
      "m3": -12.82
    },
    "returns": [
      -0.12,
      -0.72,
      1.23,
      2.11,
      -5.4,
      -12.82
    ],
    "volumes": [
      110,
      126,
      119,
      88,
      127,
      72
    ],
    "rsiStack": [
      44.4,
      42.8,
      41.6,
      40.7,
      39.6,
      37.3
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 245.97,
    "change": -13.03,
    "mom": 46.0,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.7,
    "flow": 149,
    "perf": {
      "w1": -0.69,
      "m1": 9.87,
      "m3": 27.19
    },
    "returns": [
      -13.03,
      -7.53,
      -0.69,
      3.38,
      9.87,
      27.19
    ],
    "volumes": [
      114,
      82,
      45,
      75,
      118,
      55
    ],
    "rsiStack": [
      45.0,
      50.7,
      51.7,
      52.0,
      52.0,
      50.8
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 216.0,
    "change": -7.82,
    "mom": 47.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.3,
    "flow": 117,
    "perf": {
      "w1": 1.74,
      "m1": 3.87,
      "m3": 13.27
    },
    "returns": [
      -7.82,
      -2.78,
      1.74,
      -1.18,
      3.87,
      13.27
    ],
    "volumes": [
      97,
      85,
      66,
      82,
      139,
      72
    ],
    "rsiStack": [
      48.1,
      51.4,
      50.3,
      49.9,
      50.5,
      52.0
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 69.4,
    "chg": 1.63,
    "chgW": 4.66,
    "chgM": 4.11,
    "chgYTD": 12.44,
    "marketCap": "$33.1B",
    "pe": "14.0x",
    "evEbitda": "7.9x",
    "de": "0.5x",
    "drawdown": "-18.7%"
  },
  "MOS": {
    "price": 21.14,
    "chg": -0.42,
    "chgW": -8.48,
    "chgM": -3.78,
    "chgYTD": -12.25,
    "marketCap": "$6.7B",
    "pe": "12.6x",
    "evEbitda": "7.4x",
    "de": "0.5x",
    "drawdown": "-42.8%"
  },
  "CF": {
    "price": 119.72,
    "chg": 1.65,
    "chgW": 1.63,
    "chgM": -2.64,
    "chgYTD": 54.8,
    "marketCap": "$18.1B",
    "pe": "8.9x",
    "evEbitda": "5.7x",
    "de": "0.4x",
    "drawdown": "-15.7%"
  },
  "ICL": {
    "price": 5.41,
    "chg": -0.92,
    "chgW": 1.31,
    "chgM": 8.2,
    "chgYTD": -5.25,
    "marketCap": "$7.0B",
    "pe": "22.5x",
    "evEbitda": "7.2x",
    "de": "0.5x",
    "drawdown": "-22.4%"
  },
  "FMC": {
    "price": 10.12,
    "chg": -0.59,
    "chgW": -2.79,
    "chgM": -10.99,
    "chgYTD": -27.04,
    "marketCap": "$1.3B",
    "pe": "6.2x",
    "evEbitda": "19.4x",
    "de": "2.7x",
    "drawdown": "-75.2%"
  },
  "CTVA": {
    "price": 77.91,
    "chg": 2.5,
    "chgW": 1.88,
    "chgM": -10.22,
    "chgYTD": 16.23,
    "marketCap": "$52.0B",
    "pe": "47.2x",
    "evEbitda": "12.5x",
    "de": "0.2x",
    "drawdown": "-14.4%"
  },
  "ADM": {
    "price": 82.45,
    "chg": 1.43,
    "chgW": 2.47,
    "chgM": -4.35,
    "chgYTD": 43.42,
    "marketCap": "$39.7B",
    "pe": "22.5x",
    "evEbitda": "15.9x",
    "de": "0.4x",
    "drawdown": "-6.8%"
  },
  "BG": {
    "price": 114.36,
    "chg": -0.48,
    "chgW": 2.47,
    "chgM": -5.92,
    "chgYTD": 28.38,
    "marketCap": "$22.0B",
    "pe": "24.6x",
    "evEbitda": "12.7x",
    "de": "1.0x",
    "drawdown": "-15.2%"
  },
  "INGR": {
    "price": 105.45,
    "chg": 1.8,
    "chgW": 0.75,
    "chgM": 3.59,
    "chgYTD": -4.36,
    "marketCap": "$6.7B",
    "pe": "11.5x",
    "evEbitda": "6.4x",
    "de": "0.4x",
    "drawdown": "-19.2%"
  },
  "FPI": {
    "price": 9.94,
    "chg": 1.64,
    "chgW": 2.26,
    "chgM": 3.22,
    "chgYTD": 2.58,
    "marketCap": "$437M",
    "pe": "19.5x",
    "evEbitda": "23.9x",
    "de": "0.5x",
    "drawdown": "-24.8%"
  },
  "LAND": {
    "price": 8.23,
    "chg": -0.12,
    "chgW": 1.23,
    "chgM": -5.4,
    "chgYTD": -10.05,
    "marketCap": "$355M",
    "pe": "-20.6x",
    "evEbitda": "12.2x",
    "de": "0.7x",
    "drawdown": "-36.7%"
  },
  "DE": {
    "price": 588.72,
    "chg": -1.87,
    "chgW": -4.73,
    "chgM": 0.31,
    "chgYTD": 26.45,
    "marketCap": "$159.0B",
    "pe": "33.4x",
    "evEbitda": "23.4x",
    "de": "3.8x",
    "drawdown": "-12.7%"
  },
  "AGCO": {
    "price": 98.45,
    "chg": -1.3,
    "chgW": -2.94,
    "chgM": -11.93,
    "chgYTD": -5.63,
    "marketCap": "$6.9B",
    "pe": "13.6x",
    "evEbitda": "9.5x",
    "de": "0.7x",
    "drawdown": "-31.5%"
  },
  "CNH": {
    "price": 10.03,
    "chg": -2.53,
    "chgW": -4.29,
    "chgM": -2.9,
    "chgYTD": 8.79,
    "marketCap": "$16.1B",
    "pe": "40.1x",
    "evEbitda": "35.6x",
    "de": "3.4x",
    "drawdown": "-24.6%"
  },
  "XYL": {
    "price": 113.94,
    "chg": -3.01,
    "chgW": -7.5,
    "chgM": -2.62,
    "chgYTD": -16.33,
    "marketCap": "$26.6B",
    "pe": "27.1x",
    "evEbitda": "14.9x",
    "de": "0.3x",
    "drawdown": "-26.1%"
  },
  "VMI": {
    "price": 487.36,
    "chg": -3.83,
    "chgW": -1.22,
    "chgM": -3.56,
    "chgYTD": 21.14,
    "marketCap": "$9.5B",
    "pe": "19.0x",
    "evEbitda": "15.5x",
    "de": "0.5x",
    "drawdown": "-16.8%"
  },
  "LNN": {
    "price": 111.8,
    "chg": -1.96,
    "chgW": -2.77,
    "chgM": -0.25,
    "chgYTD": -5.15,
    "marketCap": "$1.1B",
    "pe": "21.5x",
    "evEbitda": "13.6x",
    "de": "0.3x",
    "drawdown": "-24.5%"
  },
  "MWA": {
    "price": 24.91,
    "chg": -1.07,
    "chgW": -5.0,
    "chgM": 0.32,
    "chgYTD": 4.58,
    "marketCap": "$3.9B",
    "pe": "17.5x",
    "evEbitda": "10.9x",
    "de": "0.4x",
    "drawdown": "-19.6%"
  },
  "WTS": {
    "price": 375.8,
    "chg": -2.44,
    "chgW": -2.33,
    "chgM": 10.08,
    "chgYTD": 36.15,
    "marketCap": "$12.5B",
    "pe": "32.8x",
    "evEbitda": "21.9x",
    "de": "0.1x",
    "drawdown": "-4.7%"
  },
  "TSN": {
    "price": 57.99,
    "chg": -1.06,
    "chgW": 2.76,
    "chgM": 1.65,
    "chgYTD": -1.07,
    "marketCap": "$20.4B",
    "pe": "35.8x",
    "evEbitda": "10.1x",
    "de": "0.4x",
    "drawdown": "-16.5%"
  },
  "PPC": {
    "price": 28.49,
    "chg": -0.97,
    "chgW": 6.07,
    "chgM": -0.21,
    "chgYTD": -26.93,
    "marketCap": "$6.8B",
    "pe": "12.4x",
    "evEbitda": "5.4x",
    "de": "0.8x",
    "drawdown": "-41.2%"
  },
  "HRL": {
    "price": 24.34,
    "chg": 1.33,
    "chgW": 0.16,
    "chgM": -3.07,
    "chgYTD": 2.7,
    "marketCap": "$13.4B",
    "pe": "28.6x",
    "evEbitda": "10.3x",
    "de": "0.0x",
    "drawdown": "-17.1%"
  },
  "CAG": {
    "price": 15.52,
    "chg": -0.13,
    "chgW": 3.95,
    "chgM": 4.51,
    "chgYTD": -10.34,
    "marketCap": "$7.4B",
    "pe": "10.0x",
    "evEbitda": "8.4x",
    "de": "1.2x",
    "drawdown": "-23.6%"
  },
  "CALM": {
    "price": 81.19,
    "chg": 0.93,
    "chgW": -1.66,
    "chgM": -6.95,
    "chgYTD": 2.04,
    "marketCap": "$3.8B",
    "pe": "12.2x",
    "evEbitda": "6.1x",
    "de": "–",
    "drawdown": "-30.9%"
  },
  "DBA": {
    "price": 28.03,
    "chg": -0.39,
    "chgW": 1.59,
    "chgM": -0.43,
    "chgYTD": 9.84,
    "marketCap": "–",
    "pe": "11.8x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-2.8%"
  },
  "MOO": {
    "price": 81.35,
    "chg": 0.2,
    "chgW": -0.33,
    "chgM": -0.97,
    "chgYTD": 11.76,
    "marketCap": "–",
    "pe": "18.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-6.0%"
  },
  "VEGI": {
    "price": 44.25,
    "chg": -0.14,
    "chgW": -0.81,
    "chgM": -0.99,
    "chgYTD": 14.73,
    "marketCap": "–",
    "pe": "20.8x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-6.4%"
  },
  "USAG": {},
  "COCO.L": {
    "price": 9.49,
    "chg": -0.62,
    "chgW": 4.95,
    "chgM": 4.46,
    "chgYTD": -9.27,
    "marketCap": "–",
    "pe": "55.5x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-35.2%"
  }
};
