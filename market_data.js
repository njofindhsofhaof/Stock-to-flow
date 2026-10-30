window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-10-30 02:05:00",
  "sections": {
    "Index": {
      "risk": "Neutral",
      "leader": "DJI",
      "watch": 1
    },
    "Commodity": {
      "risk": "Neutral",
      "leader": "CL",
      "watch": 0
    },
    "Crypto": {
      "risk": "Risk Off",
      "leader": "CRCL",
      "watch": 0
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "XLV",
      "watch": 5
    },
    "Stock": {
      "risk": "Risk Off",
      "leader": "SBUX",
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
    "price": 7720.39,
    "change": -0.3,
    "mom": 50.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.8,
    "flow": 64,
    "perf": {
      "w1": 0.74,
      "m1": 0.7,
      "m3": -0.04
    },
    "returns": [
      -0.3,
      0.57,
      0.74,
      -0.31,
      0.7,
      -0.04
    ],
    "volumes": [
      103,
      111,
      115,
      97,
      113,
      112
    ],
    "rsiStack": [
      52.8,
      50.9,
      50.8,
      51.2,
      52.2,
      54.7
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 52342.56,
    "change": -0.25,
    "mom": 49.8,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.6,
    "flow": 131,
    "perf": {
      "w1": -0.99,
      "m1": 2.78,
      "m3": -3.69
    },
    "returns": [
      -0.25,
      -0.04,
      -0.99,
      0.32,
      2.78,
      -3.69
    ],
    "volumes": [
      93,
      92,
      119,
      87,
      112,
      109
    ],
    "rsiStack": [
      50.6,
      54.6,
      53.6,
      52.1,
      50.9,
      49.2
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 5632.16,
    "change": -5.15,
    "mom": 50.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.0,
    "flow": 29,
    "perf": {
      "w1": 1.47,
      "m1": -17.63,
      "m3": -14.61
    },
    "returns": [
      -5.15,
      -0.11,
      1.47,
      -0.63,
      -17.63,
      -14.61
    ],
    "volumes": [
      105,
      70,
      88,
      78,
      104,
      100
    ],
    "rsiStack": [
      41.1,
      39.6,
      39.0,
      40.0,
      43.4,
      52.1
    ]
  },
  {
    "symbol": "NI225",
    "dataSymbol": "^N225",
    "section": "Index",
    "name": "Japan Index",
    "category": "Broad",
    "price": 62840.28,
    "change": -2.81,
    "mom": 44.7,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 40.4,
    "flow": 0,
    "perf": {
      "w1": 0.23,
      "m1": -8.87,
      "m3": -2.36
    },
    "returns": [
      -2.81,
      -0.68,
      0.23,
      -3.8,
      -8.87,
      -2.36
    ],
    "volumes": [
      163,
      96,
      124,
      89,
      102,
      116
    ],
    "rsiStack": [
      37.0,
      38.2,
      40.4,
      42.4,
      44.9,
      48.2
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 368.57,
    "change": -1.32,
    "mom": 44.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.5,
    "flow": 114,
    "perf": {
      "w1": -0.12,
      "m1": -3.71,
      "m3": -5.41
    },
    "returns": [
      -1.32,
      0.2,
      -0.12,
      -3.69,
      -3.71,
      -5.41
    ],
    "volumes": [
      115,
      83,
      214,
      79,
      113,
      68
    ],
    "rsiStack": [
      35.1,
      36.8,
      38.5,
      40.3,
      42.4,
      43.8
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 47.28,
    "change": -3.63,
    "mom": 37.3,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 29.1,
    "flow": 142,
    "perf": {
      "w1": -4.18,
      "m1": -14.07,
      "m3": -15.68
    },
    "returns": [
      -3.63,
      -2.84,
      -4.18,
      -8.94,
      -14.07,
      -15.68
    ],
    "volumes": [
      116,
      91,
      151,
      95,
      114,
      79
    ],
    "rsiStack": [
      17.3,
      24.0,
      29.1,
      33.4,
      38.7,
      47.2
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 35.72,
    "change": -2.27,
    "mom": 55.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.4,
    "flow": 97,
    "perf": {
      "w1": 4.78,
      "m1": -9.78,
      "m3": -16.72
    },
    "returns": [
      -2.27,
      3.96,
      4.78,
      -1.11,
      -9.78,
      -16.72
    ],
    "volumes": [
      94,
      129,
      119,
      111,
      184,
      134
    ],
    "rsiStack": [
      50.8,
      43.4,
      40.4,
      40.0,
      40.4,
      39.6
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 104.84,
    "change": 2.0,
    "mom": 54.4,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.9,
    "flow": 8,
    "perf": {
      "w1": 5.4,
      "m1": 12.89,
      "m3": 39.38
    },
    "returns": [
      2.0,
      3.03,
      5.4,
      7.01,
      12.89,
      39.38
    ],
    "volumes": [
      101,
      97,
      108,
      133,
      77,
      102
    ],
    "rsiStack": [
      68.9,
      65.4,
      62.9,
      61.0,
      58.3,
      52.5
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 118.09,
    "change": -1.53,
    "mom": 47.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.6,
    "flow": 67,
    "perf": {
      "w1": -0.4,
      "m1": 3.1,
      "m3": 1.18
    },
    "returns": [
      -1.53,
      -2.28,
      -0.4,
      -1.4,
      3.1,
      1.18
    ],
    "volumes": [
      58,
      70,
      68,
      85,
      115,
      95
    ],
    "rsiStack": [
      39.9,
      46.3,
      46.6,
      46.9,
      47.1,
      45.6
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 31.04,
    "change": -1.8,
    "mom": 47.1,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 34.7,
    "flow": 93,
    "perf": {
      "w1": 0.88,
      "m1": -4.79,
      "m3": -8.03
    },
    "returns": [
      -1.8,
      -1.05,
      0.88,
      -3.81,
      -4.79,
      -8.03
    ],
    "volumes": [
      62,
      77,
      146,
      158,
      132,
      106
    ],
    "rsiStack": [
      32.8,
      33.8,
      34.7,
      36.7,
      39.7,
      43.3
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 18.23,
    "change": -0.55,
    "mom": 55.1,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.3,
    "flow": 65,
    "perf": {
      "w1": 5.56,
      "m1": -15.41,
      "m3": -22.13
    },
    "returns": [
      -0.55,
      2.94,
      5.56,
      -3.8,
      -15.41,
      -22.13
    ],
    "volumes": [
      64,
      110,
      134,
      102,
      108,
      142
    ],
    "rsiStack": [
      48.2,
      39.8,
      36.3,
      36.5,
      38.5,
      40.6
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 68.48,
    "change": -0.85,
    "mom": 47.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.5,
    "flow": 54,
    "perf": {
      "w1": -0.88,
      "m1": -1.79,
      "m3": 2.33
    },
    "returns": [
      -0.85,
      0.38,
      -0.88,
      -1.58,
      -1.79,
      2.33
    ],
    "volumes": [
      73,
      88,
      117,
      105,
      126,
      97
    ],
    "rsiStack": [
      41.5,
      42.2,
      42.5,
      43.7,
      45.1,
      44.2
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 76402.73,
    "change": -5.99,
    "mom": 31.7,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 32.7,
    "flow": 195,
    "perf": {
      "w1": -5.43,
      "m1": -7.44,
      "m3": -1.63
    },
    "returns": [
      -5.99,
      -4.5,
      -5.43,
      -6.66,
      -7.44,
      -1.63
    ],
    "volumes": [
      101,
      105,
      79,
      128,
      89,
      75
    ],
    "rsiStack": [
      18.3,
      26.1,
      32.7,
      38.3,
      44.2,
      50.9
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 160.59,
    "change": -1.07,
    "mom": 38.9,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.2,
    "flow": 106,
    "perf": {
      "w1": -5.03,
      "m1": -15.16,
      "m3": 7.14
    },
    "returns": [
      -1.07,
      0.62,
      -5.03,
      -12.63,
      -15.16,
      7.14
    ],
    "volumes": [
      75,
      78,
      84,
      85,
      100,
      60
    ],
    "rsiStack": [
      32.3,
      36.3,
      40.2,
      43.3,
      46.2,
      49.9
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 79.99,
    "change": -2.11,
    "mom": 38.6,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.5,
    "flow": 66,
    "perf": {
      "w1": -7.65,
      "m1": -3.52,
      "m3": 26.41
    },
    "returns": [
      -2.11,
      0.19,
      -7.65,
      -8.03,
      -3.52,
      26.41
    ],
    "volumes": [
      68,
      112,
      118,
      84,
      137,
      64
    ],
    "rsiStack": [
      36.0,
      41.7,
      44.5,
      46.6,
      49.9,
      58.1
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 141.62,
    "change": -2.44,
    "mom": 41.4,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.0,
    "flow": 69,
    "perf": {
      "w1": -2.87,
      "m1": -11.76,
      "m3": 43.97
    },
    "returns": [
      -2.44,
      1.29,
      -2.87,
      -6.39,
      -11.76,
      43.97
    ],
    "volumes": [
      65,
      81,
      106,
      97,
      101,
      82
    ],
    "rsiStack": [
      43.0,
      44.5,
      47.0,
      49.4,
      52.3,
      59.0
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 68.71,
    "change": 0.38,
    "mom": 49.0,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.8,
    "flow": 80,
    "perf": {
      "w1": 1.69,
      "m1": 9.59,
      "m3": 19.89
    },
    "returns": [
      0.38,
      -1.34,
      1.69,
      3.23,
      9.59,
      19.89
    ],
    "volumes": [
      88,
      101,
      130,
      122,
      97,
      121
    ],
    "rsiStack": [
      59.0,
      62.5,
      62.8,
      62.2,
      60.3,
      54.3
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 188.74,
    "change": -1.18,
    "mom": 51.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.9,
    "flow": 86,
    "perf": {
      "w1": 3.51,
      "m1": -4.59,
      "m3": 1.52
    },
    "returns": [
      -1.18,
      1.3,
      3.51,
      -0.24,
      -4.59,
      1.52
    ],
    "volumes": [
      89,
      83,
      139,
      111,
      176,
      152
    ],
    "rsiStack": [
      51.9,
      48.2,
      47.9,
      48.8,
      50.7,
      55.2
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 43.14,
    "change": 1.53,
    "mom": 59.4,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.0,
    "flow": 83,
    "perf": {
      "w1": 0.63,
      "m1": 8.72,
      "m3": -1.19
    },
    "returns": [
      1.53,
      1.39,
      0.63,
      3.58,
      8.72,
      -1.19
    ],
    "volumes": [
      60,
      40,
      82,
      50,
      100,
      222
    ],
    "rsiStack": [
      70.5,
      67.3,
      63.0,
      58.6,
      53.7,
      47.1
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 184.04,
    "change": 2.4,
    "mom": 60.5,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 71.4,
    "flow": 172,
    "perf": {
      "w1": 1.51,
      "m1": 10.73,
      "m3": 12.11
    },
    "returns": [
      2.4,
      2.66,
      1.51,
      3.87,
      10.73,
      12.11
    ],
    "volumes": [
      104,
      89,
      118,
      96,
      133,
      125
    ],
    "rsiStack": [
      82.1,
      75.7,
      71.4,
      68.1,
      64.8,
      60.1
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 101.21,
    "change": -1.87,
    "mom": 23.2,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 24.7,
    "flow": 158,
    "perf": {
      "w1": -5.78,
      "m1": -7.94,
      "m3": -8.71
    },
    "returns": [
      -1.87,
      -2.54,
      -5.78,
      -9.99,
      -7.94,
      -8.71
    ],
    "volumes": [
      127,
      139,
      94,
      70,
      98,
      114
    ],
    "rsiStack": [
      6.6,
      16.5,
      24.7,
      30.7,
      36.1,
      41.0
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 56.94,
    "change": 1.44,
    "mom": 62.8,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.0,
    "flow": 102,
    "perf": {
      "w1": 0.51,
      "m1": 6.51,
      "m3": -1.83
    },
    "returns": [
      1.44,
      1.64,
      0.51,
      3.02,
      6.51,
      -1.83
    ],
    "volumes": [
      77,
      65,
      90,
      56,
      116,
      109
    ],
    "rsiStack": [
      75.7,
      68.8,
      63.0,
      58.8,
      55.6,
      52.2
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 43.06,
    "change": 2.21,
    "mom": 63.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.7,
    "flow": 84,
    "perf": {
      "w1": 1.27,
      "m1": 5.85,
      "m3": -4.73
    },
    "returns": [
      2.21,
      0.61,
      1.27,
      2.55,
      5.85,
      -4.73
    ],
    "volumes": [
      109,
      116,
      137,
      86,
      132,
      164
    ],
    "rsiStack": [
      68.1,
      63.4,
      58.7,
      54.9,
      51.3,
      48.3
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 170.13,
    "change": 0.97,
    "mom": 68.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.9,
    "flow": 105,
    "perf": {
      "w1": 2.04,
      "m1": 0.88,
      "m3": -8.7
    },
    "returns": [
      0.97,
      1.9,
      2.04,
      1.33,
      0.88,
      -8.7
    ],
    "volumes": [
      111,
      90,
      143,
      129,
      103,
      124
    ],
    "rsiStack": [
      70.6,
      60.1,
      53.9,
      50.1,
      47.0,
      42.7
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 52.53,
    "change": 1.29,
    "mom": 65.0,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 69.5,
    "flow": 138,
    "perf": {
      "w1": 1.63,
      "m1": 8.22,
      "m3": -0.21
    },
    "returns": [
      1.29,
      2.24,
      1.63,
      3.9,
      8.22,
      -0.21
    ],
    "volumes": [
      87,
      84,
      84,
      96,
      127,
      219
    ],
    "rsiStack": [
      87.9,
      78.8,
      69.5,
      62.8,
      57.3,
      52.7
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 116.2,
    "change": 0.75,
    "mom": 59.8,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.6,
    "flow": 91,
    "perf": {
      "w1": 1.03,
      "m1": 6.79,
      "m3": -2.06
    },
    "returns": [
      0.75,
      1.7,
      1.03,
      2.46,
      6.79,
      -2.06
    ],
    "volumes": [
      90,
      94,
      112,
      106,
      95,
      118
    ],
    "rsiStack": [
      70.4,
      65.8,
      61.6,
      58.0,
      54.7,
      53.0
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 88.18,
    "change": 1.54,
    "mom": 51.7,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.3,
    "flow": 107,
    "perf": {
      "w1": -2.01,
      "m1": 9.77,
      "m3": 3.34
    },
    "returns": [
      1.54,
      0.25,
      -2.01,
      1.73,
      9.77,
      3.34
    ],
    "volumes": [
      95,
      98,
      171,
      123,
      208,
      116
    ],
    "rsiStack": [
      60.3,
      61.8,
      61.3,
      59.7,
      57.4,
      54.4
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 513.86,
    "change": -1.55,
    "mom": 55.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.6,
    "flow": 71,
    "perf": {
      "w1": 8.02,
      "m1": -10.84,
      "m3": -3.17
    },
    "returns": [
      -1.55,
      4.48,
      8.02,
      -0.17,
      -10.84,
      -3.17
    ],
    "volumes": [
      94,
      109,
      183,
      131,
      234,
      88
    ],
    "rsiStack": [
      55.2,
      48.3,
      46.6,
      46.7,
      47.6,
      50.0
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 27.17,
    "change": 0.22,
    "mom": 34.4,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 25.9,
    "flow": 59,
    "perf": {
      "w1": -2.69,
      "m1": -3.41,
      "m3": -1.66
    },
    "returns": [
      0.22,
      -1.56,
      -2.69,
      -3.93,
      -3.41,
      -1.66
    ],
    "volumes": [
      102,
      149,
      285,
      77,
      45,
      102
    ],
    "rsiStack": [
      11.4,
      17.8,
      25.9,
      32.7,
      39.3,
      46.0
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 44.59,
    "change": 0.77,
    "mom": 50.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.6,
    "flow": 55,
    "perf": {
      "w1": 0.04,
      "m1": -1.07,
      "m3": 0.29
    },
    "returns": [
      0.77,
      0.22,
      0.04,
      -1.83,
      -1.07,
      0.29
    ],
    "volumes": [
      26,
      41,
      78,
      25,
      28,
      198
    ],
    "rsiStack": [
      48.4,
      43.3,
      42.6,
      43.6,
      44.8,
      43.9
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 42.97,
    "change": 1.35,
    "mom": 74.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.7,
    "flow": 1,
    "perf": {
      "w1": 2.63,
      "m1": 4.38,
      "m3": -5.6
    },
    "returns": [
      1.35,
      3.57,
      2.63,
      3.3,
      4.38,
      -5.6
    ],
    "volumes": [
      8,
      5,
      3,
      31,
      1,
      20
    ],
    "rsiStack": [
      73.3,
      65.6,
      59.7,
      55.5,
      51.7,
      47.3
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 28.46,
    "change": 0.78,
    "mom": 56.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 42.7,
    "flow": 77,
    "perf": {
      "w1": 0.64,
      "m1": -0.28,
      "m3": -3.46
    },
    "returns": [
      0.78,
      0.67,
      0.64,
      -1.01,
      -0.28,
      -3.46
    ],
    "volumes": [
      357,
      14,
      66,
      26,
      8,
      18
    ],
    "rsiStack": [
      56.6,
      46.0,
      42.7,
      42.4,
      42.9,
      41.2
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 105.51,
    "change": 2.24,
    "mom": 66.6,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 70.8,
    "flow": 114,
    "perf": {
      "w1": 3.53,
      "m1": 11.2,
      "m3": -0.46
    },
    "returns": [
      2.24,
      2.75,
      3.53,
      8.91,
      11.2,
      -0.46
    ],
    "volumes": [
      81,
      68,
      101,
      88,
      159,
      74
    ],
    "rsiStack": [
      87.9,
      79.1,
      70.8,
      64.4,
      59.0,
      56.3
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 80.72,
    "change": 0.57,
    "mom": 47.7,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.2,
    "flow": 141,
    "perf": {
      "w1": -0.66,
      "m1": 0.04,
      "m3": -0.62
    },
    "returns": [
      0.57,
      -0.64,
      -0.66,
      -1.73,
      0.04,
      -0.62
    ],
    "volumes": [
      50,
      57,
      39,
      45,
      72,
      176
    ],
    "rsiStack": [
      41.6,
      41.0,
      41.2,
      42.4,
      43.9,
      43.2
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 12.36,
    "change": 3.43,
    "mom": 70.1,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 51.3,
    "flow": 171,
    "perf": {
      "w1": 3.52,
      "m1": 0.73,
      "m3": -12.53
    },
    "returns": [
      3.43,
      6.74,
      3.52,
      0.41,
      0.73,
      -12.53
    ],
    "volumes": [
      135,
      89,
      96,
      86,
      84,
      97
    ],
    "rsiStack": [
      72.0,
      58.8,
      51.3,
      47.5,
      45.3,
      43.0
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 85.72,
    "change": 3.93,
    "mom": 73.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.7,
    "flow": 118,
    "perf": {
      "w1": 11.02,
      "m1": 8.08,
      "m3": -3.86
    },
    "returns": [
      3.93,
      12.33,
      11.02,
      2.46,
      8.08,
      -3.86
    ],
    "volumes": [
      114,
      68,
      94,
      318,
      76,
      110
    ],
    "rsiStack": [
      78.0,
      66.1,
      59.7,
      56.2,
      53.5,
      49.7
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 25.76,
    "change": 0.23,
    "mom": 36.6,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 25.6,
    "flow": 32,
    "perf": {
      "w1": -2.53,
      "m1": -5.26,
      "m3": 3.08
    },
    "returns": [
      0.23,
      -0.62,
      -2.53,
      -5.85,
      -5.26,
      3.08
    ],
    "volumes": [
      43,
      139,
      51,
      108,
      12,
      30
    ],
    "rsiStack": [
      11.6,
      17.3,
      25.6,
      33.0,
      41.1,
      51.2
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 29.95,
    "change": 1.7,
    "mom": 46.6,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.7,
    "flow": 117,
    "perf": {
      "w1": -1.55,
      "m1": 6.51,
      "m3": 16.04
    },
    "returns": [
      1.7,
      0.54,
      -1.55,
      1.73,
      6.51,
      16.04
    ],
    "volumes": [
      94,
      86,
      97,
      113,
      100,
      95
    ],
    "rsiStack": [
      59.4,
      61.2,
      61.7,
      61.4,
      59.7,
      53.3
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 8.8,
    "change": -13.13,
    "mom": 21.2,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 25.3,
    "flow": 370,
    "perf": {
      "w1": -12.0,
      "m1": -23.41,
      "m3": -10.93
    },
    "returns": [
      -13.13,
      -14.06,
      -12.0,
      -16.59,
      -23.41,
      -10.93
    ],
    "volumes": [
      82,
      53,
      61,
      57,
      100,
      181
    ],
    "rsiStack": [
      13.0,
      19.8,
      25.3,
      29.8,
      34.4,
      38.0
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 7.81,
    "change": -6.8,
    "mom": 26.3,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 22.4,
    "flow": 299,
    "perf": {
      "w1": -11.25,
      "m1": -18.13,
      "m3": -4.76
    },
    "returns": [
      -6.8,
      -12.05,
      -11.25,
      -16.65,
      -18.13,
      -4.76
    ],
    "volumes": [
      226,
      68,
      107,
      112,
      97,
      78
    ],
    "rsiStack": [
      10.2,
      16.4,
      22.4,
      28.0,
      34.8,
      45.6
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 165.29,
    "change": -4.84,
    "mom": 49.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.9,
    "flow": 84,
    "perf": {
      "w1": 1.55,
      "m1": -21.35,
      "m3": -26.42
    },
    "returns": [
      -4.84,
      9.35,
      1.55,
      -7.4,
      -21.35,
      -26.42
    ],
    "volumes": [
      63,
      85,
      108,
      84,
      109,
      105
    ],
    "rsiStack": [
      45.5,
      42.9,
      42.9,
      43.7,
      45.5,
      50.6
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 218.34,
    "change": -13.24,
    "mom": 39.5,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.8,
    "flow": 193,
    "perf": {
      "w1": -2.3,
      "m1": -18.55,
      "m3": 3.47
    },
    "returns": [
      -13.24,
      -6.6,
      -2.3,
      -9.49,
      -18.55,
      3.47
    ],
    "volumes": [
      80,
      71,
      122,
      84,
      118,
      107
    ],
    "rsiStack": [
      32.3,
      36.2,
      39.8,
      42.8,
      45.8,
      48.2
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 68.48,
    "chg": -0.85,
    "chgW": -0.88,
    "chgM": -1.79,
    "chgYTD": 10.95,
    "marketCap": "$32.7B",
    "pe": "13.9x",
    "evEbitda": "7.9x",
    "de": "0.5x",
    "drawdown": "-19.8%"
  },
  "MOS": {
    "price": 18.23,
    "chg": -0.55,
    "chgW": 5.56,
    "chgM": -15.41,
    "chgYTD": -24.33,
    "marketCap": "$5.8B",
    "pe": "12.3x",
    "evEbitda": "6.8x",
    "de": "0.5x",
    "drawdown": "-43.5%"
  },
  "CF": {
    "price": 118.09,
    "chg": -1.53,
    "chgW": -0.4,
    "chgM": 3.1,
    "chgYTD": 52.69,
    "marketCap": "$17.9B",
    "pe": "8.8x",
    "evEbitda": "5.7x",
    "de": "0.4x",
    "drawdown": "-16.8%"
  },
  "ICL": {
    "price": 4.59,
    "chg": -1.5,
    "chgW": -2.55,
    "chgM": -7.65,
    "chgYTD": -19.61,
    "marketCap": "–",
    "pe": "19.1x",
    "evEbitda": "6.4x",
    "de": "0.5x",
    "drawdown": "-34.1%"
  },
  "FMC": {
    "price": 4.75,
    "chg": 6.26,
    "chgW": -5.38,
    "chgM": -44.51,
    "chgYTD": -65.75,
    "marketCap": "$739M",
    "pe": "3.4x",
    "evEbitda": "16.9x",
    "de": "2.7x",
    "drawdown": "-78.4%"
  },
  "CTVA": {
    "price": 11.47,
    "chg": 1.24,
    "chgW": -10.81,
    "chgM": -8.75,
    "chgYTD": 14.05,
    "marketCap": "$7.7B",
    "pe": "7.1x",
    "evEbitda": "15.9x",
    "de": "0.6x",
    "drawdown": "-21.5%"
  },
  "ADM": {
    "price": 76.2,
    "chg": -1.33,
    "chgW": -4.56,
    "chgM": -4.18,
    "chgYTD": 32.54,
    "marketCap": "$36.7B",
    "pe": "20.9x",
    "evEbitda": "15.1x",
    "de": "0.4x",
    "drawdown": "-14.1%"
  },
  "BG": {
    "price": 96.02,
    "chg": -4.74,
    "chgW": -6.91,
    "chgM": -9.93,
    "chgYTD": 7.79,
    "marketCap": "$18.4B",
    "pe": "19.1x",
    "evEbitda": "11.6x",
    "de": "1.0x",
    "drawdown": "-28.8%"
  },
  "INGR": {
    "price": 95.59,
    "chg": 1.42,
    "chgW": -1.64,
    "chgM": 0.72,
    "chgYTD": -13.3,
    "marketCap": "$6.0B",
    "pe": "10.4x",
    "evEbitda": "5.9x",
    "de": "0.4x",
    "drawdown": "-22.6%"
  },
  "FPI": {
    "price": 8.8,
    "chg": -13.13,
    "chgW": -12.0,
    "chgM": -23.41,
    "chgYTD": -9.18,
    "marketCap": "$387M",
    "pe": "17.3x",
    "evEbitda": "24.5x",
    "de": "0.5x",
    "drawdown": "-33.5%"
  },
  "LAND": {
    "price": 7.81,
    "chg": -6.8,
    "chgW": -11.25,
    "chgM": -18.13,
    "chgYTD": -14.64,
    "marketCap": "$337M",
    "pe": "-25.6x",
    "evEbitda": "11.9x",
    "de": "0.7x",
    "drawdown": "-39.9%"
  },
  "DE": {
    "price": 660.0,
    "chg": 3.02,
    "chgW": 2.54,
    "chgM": -1.09,
    "chgYTD": 41.76,
    "marketCap": "$178.0B",
    "pe": "36.7x",
    "evEbitda": "27.4x",
    "de": "2.3x",
    "drawdown": "-8.5%"
  },
  "AGCO": {
    "price": 107.84,
    "chg": 5.56,
    "chgW": 1.57,
    "chgM": -3.55,
    "chgYTD": 3.37,
    "marketCap": "$7.6B",
    "pe": "14.9x",
    "evEbitda": "10.0x",
    "de": "0.7x",
    "drawdown": "-25.0%"
  },
  "CNH": {
    "price": 11.29,
    "chg": 2.64,
    "chgW": -2.5,
    "chgM": -12.14,
    "chgYTD": 22.45,
    "marketCap": "$18.2B",
    "pe": "45.2x",
    "evEbitda": "37.0x",
    "de": "3.4x",
    "drawdown": "-21.9%"
  },
  "XYL": {
    "price": 90.76,
    "chg": 2.87,
    "chgW": -16.93,
    "chgM": -10.03,
    "chgYTD": -33.35,
    "marketCap": "$20.8B",
    "pe": "20.1x",
    "evEbitda": "11.6x",
    "de": "0.3x",
    "drawdown": "-41.2%"
  },
  "VMI": {
    "price": 432.76,
    "chg": -0.42,
    "chgW": -0.71,
    "chgM": -7.59,
    "chgYTD": 7.57,
    "marketCap": "$8.3B",
    "pe": "16.1x",
    "evEbitda": "12.7x",
    "de": "0.5x",
    "drawdown": "-26.1%"
  },
  "LNN": {
    "price": 106.38,
    "chg": 2.91,
    "chgW": -5.01,
    "chgM": -5.34,
    "chgYTD": -9.75,
    "marketCap": "$1.1B",
    "pe": "20.0x",
    "evEbitda": "11.5x",
    "de": "0.3x",
    "drawdown": "-28.1%"
  },
  "MWA": {
    "price": 22.78,
    "chg": 2.94,
    "chgW": 2.29,
    "chgM": 5.95,
    "chgYTD": -4.37,
    "marketCap": "$3.6B",
    "pe": "16.0x",
    "evEbitda": "9.7x",
    "de": "0.4x",
    "drawdown": "-26.5%"
  },
  "WTS": {
    "price": 350.89,
    "chg": 2.34,
    "chgW": -1.69,
    "chgM": -2.39,
    "chgYTD": 27.12,
    "marketCap": "$11.7B",
    "pe": "30.6x",
    "evEbitda": "19.9x",
    "de": "0.1x",
    "drawdown": "-11.1%"
  },
  "TSN": {
    "price": 56.25,
    "chg": 1.61,
    "chgW": -1.44,
    "chgM": 11.45,
    "chgYTD": -4.04,
    "marketCap": "$19.8B",
    "pe": "34.7x",
    "evEbitda": "9.8x",
    "de": "0.4x",
    "drawdown": "-19.0%"
  },
  "PPC": {
    "price": 27.61,
    "chg": 4.66,
    "chgW": -1.71,
    "chgM": 9.56,
    "chgYTD": -29.19,
    "marketCap": "$6.6B",
    "pe": "12.1x",
    "evEbitda": "5.1x",
    "de": "0.8x",
    "drawdown": "-38.4%"
  },
  "HRL": {
    "price": 20.9,
    "chg": 1.41,
    "chgW": -2.15,
    "chgM": 4.71,
    "chgYTD": -11.81,
    "marketCap": "$11.5B",
    "pe": "33.7x",
    "evEbitda": "10.7x",
    "de": "0.4x",
    "drawdown": "-21.4%"
  },
  "CAG": {
    "price": 14.09,
    "chg": 1.22,
    "chgW": -6.5,
    "chgM": 6.74,
    "chgYTD": -18.6,
    "marketCap": "$6.7B",
    "pe": "9.4x",
    "evEbitda": "8.5x",
    "de": "1.2x",
    "drawdown": "-30.7%"
  },
  "CALM": {
    "price": 62.07,
    "chg": 1.45,
    "chgW": -2.76,
    "chgM": -5.73,
    "chgYTD": -21.99,
    "marketCap": "$2.9B",
    "pe": "50.5x",
    "evEbitda": "14.4x",
    "de": "–",
    "drawdown": "-34.8%"
  },
  "DBA": {
    "price": 27.17,
    "chg": 0.22,
    "chgW": -2.69,
    "chgM": -3.41,
    "chgYTD": 6.47,
    "marketCap": "–",
    "pe": "11.5x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-8.0%"
  },
  "MOO": {
    "price": 80.72,
    "chg": 0.57,
    "chgW": -0.66,
    "chgM": 0.04,
    "chgYTD": 10.89,
    "marketCap": "–",
    "pe": "15.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-9.6%"
  },
  "VEGI": {
    "price": 44.59,
    "chg": 0.77,
    "chgW": 0.04,
    "chgM": -1.07,
    "chgYTD": 15.61,
    "marketCap": "–",
    "pe": "19.2x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-10.2%"
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
