window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-10-08 02:10:50",
  "sections": {
    "Index": {
      "risk": "Risk Off",
      "leader": "NI225",
      "watch": 0
    },
    "Commodity": {
      "risk": "Neutral",
      "leader": "GLD",
      "watch": 0
    },
    "Crypto": {
      "risk": "Risk On",
      "leader": "MSTR",
      "watch": 1
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "SOX",
      "watch": 1
    },
    "Stock": {
      "risk": "Risk On",
      "leader": "CRDO",
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
    "price": 7801.77,
    "change": -0.22,
    "mom": 60.6,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.3,
    "flow": 51,
    "perf": {
      "w1": 1.96,
      "m1": 2.17,
      "m3": 3.42
    },
    "returns": [
      -0.22,
      1.02,
      1.96,
      1.24,
      2.17,
      3.42
    ],
    "volumes": [
      95,
      102,
      84,
      100,
      102,
      106
    ],
    "rsiStack": [
      70.9,
      64.3,
      60.3,
      58.3,
      57.7,
      60.2
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 51179.87,
    "change": -0.66,
    "mom": 50.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.8,
    "flow": 82,
    "perf": {
      "w1": 0.54,
      "m1": -2.29,
      "m3": -2.53
    },
    "returns": [
      -0.66,
      0.01,
      0.54,
      -0.64,
      -2.29,
      -2.53
    ],
    "volumes": [
      90,
      124,
      113,
      105,
      95,
      93
    ],
    "rsiStack": [
      42.2,
      40.7,
      40.8,
      42.3,
      45.4,
      51.7
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 6789.78,
    "change": -0.21,
    "mom": 44.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.3,
    "flow": 41,
    "perf": {
      "w1": -0.71,
      "m1": -2.94,
      "m3": -6.89
    },
    "returns": [
      -0.21,
      -3.05,
      -0.71,
      -3.11,
      -2.94,
      -6.89
    ],
    "volumes": [
      98,
      85,
      100,
      79,
      82,
      74
    ],
    "rsiStack": [
      34.2,
      43.6,
      47.3,
      48.1,
      48.1,
      46.8
    ]
  },
  {
    "symbol": "NI225",
    "dataSymbol": "^N225",
    "section": "Index",
    "name": "Japan Index",
    "category": "Broad",
    "price": 69490.42,
    "change": -0.78,
    "mom": 56.4,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.3,
    "flow": 0,
    "perf": {
      "w1": 0.77,
      "m1": 4.65,
      "m3": 2.58
    },
    "returns": [
      -0.78,
      -0.65,
      0.77,
      6.07,
      4.65,
      2.58
    ],
    "volumes": [
      101,
      99,
      116,
      109,
      115,
      91
    ],
    "rsiStack": [
      62.8,
      64.8,
      62.3,
      59.3,
      56.3,
      53.0
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 375.88,
    "change": -1.67,
    "mom": 39.5,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.9,
    "flow": 86,
    "perf": {
      "w1": -1.3,
      "m1": -6.81,
      "m3": 1.0
    },
    "returns": [
      -1.67,
      -1.12,
      -1.3,
      -4.33,
      -6.81,
      1.0
    ],
    "volumes": [
      89,
      106,
      75,
      153,
      73,
      68
    ],
    "rsiStack": [
      28.2,
      32.6,
      36.9,
      40.4,
      43.7,
      48.0
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 53.82,
    "change": -2.94,
    "mom": 38.2,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.3,
    "flow": 131,
    "perf": {
      "w1": -1.27,
      "m1": -11.36,
      "m3": 1.22
    },
    "returns": [
      -2.94,
      -1.68,
      -1.27,
      -7.46,
      -11.36,
      1.22
    ],
    "volumes": [
      77,
      113,
      111,
      146,
      93,
      123
    ],
    "rsiStack": [
      27.6,
      33.7,
      38.3,
      41.6,
      44.5,
      48.5
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 39.93,
    "change": -4.47,
    "mom": 46.8,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "WATCH",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 41.2,
    "flow": 126,
    "perf": {
      "w1": 0.2,
      "m1": -14.79,
      "m3": -3.9
    },
    "returns": [
      -4.47,
      0.35,
      0.2,
      -4.91,
      -14.79,
      -3.9
    ],
    "volumes": [
      280,
      68,
      76,
      83,
      58,
      66
    ],
    "rsiStack": [
      40.8,
      40.2,
      41.2,
      42.6,
      43.7,
      43.2
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 89.64,
    "change": 1.54,
    "mom": 42.1,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.7,
    "flow": 3,
    "perf": {
      "w1": -3.48,
      "m1": -12.53,
      "m3": 12.61
    },
    "returns": [
      1.54,
      0.23,
      -3.48,
      -5.25,
      -12.53,
      12.61
    ],
    "volumes": [
      83,
      83,
      102,
      101,
      133,
      172
    ],
    "rsiStack": [
      41.4,
      42.1,
      45.7,
      47.7,
      44.3,
      29.0
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 114.44,
    "change": -1.36,
    "mom": 42.6,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.6,
    "flow": 107,
    "perf": {
      "w1": -0.66,
      "m1": -17.14,
      "m3": -3.99
    },
    "returns": [
      -1.36,
      -0.5,
      -0.66,
      -5.14,
      -17.14,
      -3.99
    ],
    "volumes": [
      96,
      73,
      78,
      102,
      73,
      123
    ],
    "rsiStack": [
      25.9,
      29.9,
      35.6,
      39.8,
      41.9,
      37.1
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 33.07,
    "change": -1.37,
    "mom": 45.3,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.5,
    "flow": 69,
    "perf": {
      "w1": 3.09,
      "m1": -19.85,
      "m3": -7.39
    },
    "returns": [
      -1.37,
      0.95,
      3.09,
      -9.94,
      -19.85,
      -7.39
    ],
    "volumes": [
      57,
      76,
      123,
      90,
      44,
      79
    ],
    "rsiStack": [
      36.6,
      33.1,
      35.5,
      38.3,
      38.6,
      29.9
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 19.97,
    "change": -4.63,
    "mom": 31.0,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 27.6,
    "flow": 139,
    "perf": {
      "w1": -7.76,
      "m1": -23.81,
      "m3": -12.95
    },
    "returns": [
      -4.63,
      -5.22,
      -7.76,
      -18.05,
      -23.81,
      -12.95
    ],
    "volumes": [
      87,
      93,
      95,
      83,
      66,
      92
    ],
    "rsiStack": [
      11.5,
      19.7,
      27.6,
      33.5,
      37.3,
      34.5
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 69.97,
    "change": -1.73,
    "mom": 40.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.0,
    "flow": 49,
    "perf": {
      "w1": -0.4,
      "m1": -13.32,
      "m3": 1.94
    },
    "returns": [
      -1.73,
      -0.13,
      -0.4,
      -6.87,
      -13.32,
      1.94
    ],
    "volumes": [
      68,
      66,
      63,
      152,
      71,
      124
    ],
    "rsiStack": [
      30.7,
      32.6,
      38.0,
      42.3,
      44.8,
      41.2
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 82945.85,
    "change": -3.05,
    "mom": 38.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.6,
    "flow": 113,
    "perf": {
      "w1": -1.84,
      "m1": 8.56,
      "m3": 27.8
    },
    "returns": [
      -3.05,
      -4.09,
      -1.84,
      -1.79,
      8.56,
      27.8
    ],
    "volumes": [
      81,
      47,
      142,
      116,
      63,
      81
    ],
    "rsiStack": [
      30.9,
      44.4,
      51.6,
      55.3,
      57.6,
      58.3
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 178.45,
    "change": -3.92,
    "mom": 36.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.5,
    "flow": 73,
    "perf": {
      "w1": -4.27,
      "m1": 2.13,
      "m3": 10.5
    },
    "returns": [
      -3.92,
      -2.49,
      -4.27,
      -9.93,
      2.13,
      10.5
    ],
    "volumes": [
      58,
      133,
      87,
      68,
      71,
      60
    ],
    "rsiStack": [
      30.0,
      41.1,
      46.5,
      48.8,
      49.5,
      46.7
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 80.84,
    "change": -3.91,
    "mom": 38.4,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.8,
    "flow": 66,
    "perf": {
      "w1": -1.62,
      "m1": -13.07,
      "m3": 27.87
    },
    "returns": [
      -3.91,
      -0.5,
      -1.62,
      -11.86,
      -13.07,
      27.87
    ],
    "volumes": [
      55,
      103,
      60,
      64,
      69,
      62
    ],
    "rsiStack": [
      31.8,
      38.7,
      43.8,
      46.5,
      46.6,
      40.0
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 153.37,
    "change": -6.79,
    "mom": 37.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.9,
    "flow": 96,
    "perf": {
      "w1": 0.18,
      "m1": 15.58,
      "m3": 57.17
    },
    "returns": [
      -6.79,
      -4.15,
      0.18,
      -5.44,
      15.58,
      57.17
    ],
    "volumes": [
      79,
      121,
      75,
      68,
      81,
      61
    ],
    "rsiStack": [
      37.4,
      49.8,
      54.9,
      56.6,
      56.5,
      55.3
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 63.36,
    "change": -0.61,
    "mom": 51.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.1,
    "flow": 78,
    "perf": {
      "w1": 3.02,
      "m1": -2.99,
      "m3": 11.26
    },
    "returns": [
      -0.61,
      0.86,
      3.02,
      1.59,
      -2.99,
      11.26
    ],
    "volumes": [
      80,
      84,
      74,
      104,
      114,
      99
    ],
    "rsiStack": [
      59.8,
      54.1,
      53.1,
      53.7,
      53.7,
      49.9
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 201.39,
    "change": -0.3,
    "mom": 58.7,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 69.7,
    "flow": 86,
    "perf": {
      "w1": 2.88,
      "m1": 7.2,
      "m3": 9.68
    },
    "returns": [
      -0.3,
      0.79,
      2.88,
      3.1,
      7.2,
      9.68
    ],
    "volumes": [
      84,
      122,
      131,
      102,
      86,
      98
    ],
    "rsiStack": [
      79.0,
      74.8,
      69.7,
      65.4,
      61.7,
      59.8
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 41.15,
    "change": -0.02,
    "mom": 74.4,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 50.6,
    "flow": 134,
    "perf": {
      "w1": 4.34,
      "m1": -4.17,
      "m3": -9.94
    },
    "returns": [
      -0.02,
      3.31,
      4.34,
      3.52,
      -4.17,
      -9.94
    ],
    "volumes": [
      162,
      215,
      214,
      138,
      127,
      86
    ],
    "rsiStack": [
      77.3,
      59.7,
      50.6,
      46.4,
      44.8,
      48.0
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 168.81,
    "change": 1.03,
    "mom": 52.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.0,
    "flow": 111,
    "perf": {
      "w1": 0.23,
      "m1": 1.34,
      "m3": 6.65
    },
    "returns": [
      1.03,
      1.58,
      0.23,
      0.01,
      1.34,
      6.65
    ],
    "volumes": [
      92,
      88,
      153,
      79,
      99,
      105
    ],
    "rsiStack": [
      57.9,
      52.0,
      51.0,
      51.8,
      53.1,
      53.5
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 111.26,
    "change": -0.35,
    "mom": 47.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.8,
    "flow": 70,
    "perf": {
      "w1": 0.26,
      "m1": 0.39,
      "m3": -0.17
    },
    "returns": [
      -0.35,
      0.85,
      0.26,
      -1.15,
      0.39,
      -0.17
    ],
    "volumes": [
      95,
      94,
      180,
      104,
      115,
      117
    ],
    "rsiStack": [
      46.6,
      46.6,
      47.8,
      48.7,
      49.5,
      51.1
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 53.75,
    "change": -0.48,
    "mom": 48.6,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 32.1,
    "flow": 97,
    "perf": {
      "w1": 0.66,
      "m1": -5.8,
      "m3": -4.33
    },
    "returns": [
      -0.48,
      0.49,
      0.66,
      -1.45,
      -5.8,
      -4.33
    ],
    "volumes": [
      58,
      80,
      148,
      114,
      127,
      96
    ],
    "rsiStack": [
      35.8,
      30.8,
      32.1,
      35.5,
      40.6,
      47.1
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 40.57,
    "change": -1.29,
    "mom": 47.3,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 26.3,
    "flow": 143,
    "perf": {
      "w1": -0.83,
      "m1": -6.54,
      "m3": -8.79
    },
    "returns": [
      -1.29,
      -0.59,
      -0.83,
      -3.04,
      -6.54,
      -8.79
    ],
    "volumes": [
      117,
      108,
      139,
      154,
      129,
      115
    ],
    "rsiStack": [
      28.5,
      25.5,
      26.3,
      29.2,
      34.5,
      43.5
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 167.84,
    "change": -2.18,
    "mom": 49.6,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.6,
    "flow": 109,
    "perf": {
      "w1": 0.52,
      "m1": -2.3,
      "m3": -6.99
    },
    "returns": [
      -2.18,
      -1.24,
      0.52,
      -1.33,
      -2.3,
      -6.99
    ],
    "volumes": [
      79,
      82,
      99,
      101,
      105,
      98
    ],
    "rsiStack": [
      37.8,
      39.9,
      39.6,
      40.1,
      42.7,
      49.6
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 48.98,
    "change": -1.51,
    "mom": 47.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.6,
    "flow": 84,
    "perf": {
      "w1": 0.57,
      "m1": -4.69,
      "m3": -3.28
    },
    "returns": [
      -1.51,
      0.25,
      0.57,
      -2.59,
      -4.69,
      -3.28
    ],
    "volumes": [
      109,
      120,
      102,
      97,
      95,
      120
    ],
    "rsiStack": [
      39.8,
      38.4,
      38.6,
      40.0,
      42.2,
      43.9
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 111.36,
    "change": -0.32,
    "mom": 61.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.7,
    "flow": 100,
    "perf": {
      "w1": 2.32,
      "m1": -0.98,
      "m3": -3.92
    },
    "returns": [
      -0.32,
      1.2,
      2.32,
      0.64,
      -0.98,
      -3.92
    ],
    "volumes": [
      88,
      128,
      88,
      103,
      115,
      143
    ],
    "rsiStack": [
      64.6,
      52.9,
      47.7,
      46.3,
      47.6,
      54.4
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 81.7,
    "change": -0.12,
    "mom": 58.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.3,
    "flow": 87,
    "perf": {
      "w1": 1.36,
      "m1": -1.63,
      "m3": -2.06
    },
    "returns": [
      -0.12,
      1.45,
      1.36,
      -0.89,
      -1.63,
      -2.06
    ],
    "volumes": [
      110,
      84,
      105,
      136,
      109,
      130
    ],
    "rsiStack": [
      55.1,
      45.8,
      43.3,
      43.6,
      45.6,
      50.9
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 582.82,
    "change": -1.12,
    "mom": 53.9,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.9,
    "flow": 77,
    "perf": {
      "w1": 2.49,
      "m1": 9.55,
      "m3": 2.62
    },
    "returns": [
      -1.12,
      -1.03,
      2.49,
      3.02,
      9.55,
      2.62
    ],
    "volumes": [
      68,
      99,
      65,
      102,
      135,
      91
    ],
    "rsiStack": [
      62.7,
      65.7,
      62.9,
      59.6,
      57.0,
      57.5
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 28.49,
    "change": -1.25,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.9,
    "flow": 85,
    "perf": {
      "w1": 1.24,
      "m1": -1.76,
      "m3": 3.11
    },
    "returns": [
      -1.25,
      0.99,
      1.24,
      -0.21,
      -1.76,
      3.11
    ],
    "volumes": [
      103,
      55,
      67,
      76,
      30,
      99
    ],
    "rsiStack": [
      51.7,
      49.9,
      49.9,
      50.8,
      51.9,
      52.8
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 45.47,
    "change": -1.79,
    "mom": 43.0,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.3,
    "flow": 54,
    "perf": {
      "w1": 0.31,
      "m1": -6.44,
      "m3": 2.64
    },
    "returns": [
      -1.79,
      -0.44,
      0.31,
      -3.79,
      -6.44,
      2.64
    ],
    "volumes": [
      52,
      43,
      149,
      81,
      26,
      70
    ],
    "rsiStack": [
      36.1,
      37.9,
      41.3,
      44.3,
      46.8,
      47.4
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 41.23,
    "change": -1.47,
    "mom": 50.8,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.9,
    "flow": 532,
    "perf": {
      "w1": 1.16,
      "m1": -3.8,
      "m3": -8.19
    },
    "returns": [
      -1.47,
      -1.1,
      1.16,
      -1.99,
      -3.8,
      -8.19
    ],
    "volumes": [
      24,
      13,
      17,
      58,
      163,
      26
    ],
    "rsiStack": [
      38.7,
      39.0,
      38.9,
      39.7,
      42.3,
      47.7
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 28.8,
    "change": -1.4,
    "mom": 43.4,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.6,
    "flow": 20,
    "perf": {
      "w1": -0.17,
      "m1": -7.57,
      "m3": -1.71
    },
    "returns": [
      -1.4,
      0.07,
      -0.17,
      -4.16,
      -7.57,
      -1.71
    ],
    "volumes": [
      24,
      17,
      28,
      104,
      54,
      414
    ],
    "rsiStack": [
      34.3,
      33.9,
      36.6,
      39.8,
      42.8,
      44.5
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 93.58,
    "change": -2.63,
    "mom": 50.3,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.3,
    "flow": 127,
    "perf": {
      "w1": -0.4,
      "m1": -6.46,
      "m3": -11.86
    },
    "returns": [
      -2.63,
      -1.19,
      -0.4,
      -0.59,
      -6.46,
      -11.86
    ],
    "volumes": [
      86,
      90,
      83,
      108,
      124,
      106
    ],
    "rsiStack": [
      36.1,
      35.5,
      35.3,
      36.7,
      39.3,
      41.8
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 81.23,
    "change": -1.42,
    "mom": 42.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.9,
    "flow": 49,
    "perf": {
      "w1": -0.29,
      "m1": -7.37,
      "m3": -0.34
    },
    "returns": [
      -1.42,
      -0.14,
      -0.29,
      -3.65,
      -7.37,
      -0.34
    ],
    "volumes": [
      48,
      56,
      133,
      46,
      47,
      248
    ],
    "rsiStack": [
      32.7,
      33.4,
      36.9,
      40.4,
      43.3,
      42.6
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 12.12,
    "change": -1.3,
    "mom": 45.5,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 33.8,
    "flow": 81,
    "perf": {
      "w1": 0.5,
      "m1": -9.89,
      "m3": -13.06
    },
    "returns": [
      -1.3,
      0.17,
      0.5,
      -6.34,
      -9.89,
      -13.06
    ],
    "volumes": [
      74,
      101,
      103,
      92,
      74,
      162
    ],
    "rsiStack": [
      32.9,
      31.8,
      33.8,
      36.5,
      40.1,
      44.8
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 80.99,
    "change": -1.24,
    "mom": 51.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.3,
    "flow": 80,
    "perf": {
      "w1": 5.18,
      "m1": -3.31,
      "m3": 5.36
    },
    "returns": [
      -1.24,
      3.48,
      5.18,
      -3.32,
      -3.31,
      5.36
    ],
    "volumes": [
      66,
      115,
      129,
      116,
      65,
      142
    ],
    "rsiStack": [
      51.8,
      47.4,
      46.3,
      46.6,
      47.6,
      48.9
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 27.79,
    "change": -1.28,
    "mom": 48.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.3,
    "flow": 43,
    "perf": {
      "w1": 2.43,
      "m1": -0.96,
      "m3": 11.61
    },
    "returns": [
      -1.28,
      1.57,
      2.43,
      -0.25,
      -0.96,
      11.61
    ],
    "volumes": [
      101,
      31,
      60,
      182,
      45,
      61
    ],
    "rsiStack": [
      55.0,
      52.6,
      53.3,
      54.9,
      55.7,
      52.4
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 28.0,
    "change": 1.82,
    "mom": 43.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.0,
    "flow": 96,
    "perf": {
      "w1": -1.82,
      "m1": 0.79,
      "m3": 15.46
    },
    "returns": [
      1.82,
      0.72,
      -1.82,
      -0.64,
      0.79,
      15.46
    ],
    "volumes": [
      74,
      108,
      104,
      74,
      100,
      87
    ],
    "rsiStack": [
      52.1,
      50.4,
      52.0,
      53.6,
      53.9,
      50.2
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 10.36,
    "change": -3.54,
    "mom": 22.2,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.9,
    "flow": 113,
    "perf": {
      "w1": -8.72,
      "m1": -3.63,
      "m3": 7.25
    },
    "returns": [
      -3.54,
      -7.83,
      -8.72,
      -3.99,
      -3.63,
      7.25
    ],
    "volumes": [
      100,
      229,
      227,
      77,
      113,
      141
    ],
    "rsiStack": [
      22.8,
      33.9,
      40.9,
      45.2,
      48.6,
      52.5
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 9.57,
    "change": -0.93,
    "mom": 47.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.8,
    "flow": 83,
    "perf": {
      "w1": 1.16,
      "m1": 1.22,
      "m3": 10.51
    },
    "returns": [
      -0.93,
      0.1,
      1.16,
      0.42,
      1.22,
      10.51
    ],
    "volumes": [
      110,
      92,
      102,
      79,
      65,
      89
    ],
    "rsiStack": [
      50.8,
      54.5,
      56.8,
      57.4,
      56.7,
      55.5
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 220.01,
    "change": -0.37,
    "mom": 59.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.4,
    "flow": 86,
    "perf": {
      "w1": 12.95,
      "m1": 31.02,
      "m3": -6.85
    },
    "returns": [
      -0.37,
      0.63,
      12.95,
      13.48,
      31.02,
      -6.85
    ],
    "volumes": [
      85,
      121,
      65,
      91,
      85,
      100
    ],
    "rsiStack": [
      71.3,
      65.7,
      59.4,
      55.3,
      52.5,
      50.9
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 284.68,
    "change": -0.81,
    "mom": 57.3,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 68.2,
    "flow": 125,
    "perf": {
      "w1": 7.75,
      "m1": 21.14,
      "m3": 27.98
    },
    "returns": [
      -0.81,
      4.55,
      7.75,
      9.11,
      21.14,
      27.98
    ],
    "volumes": [
      273,
      90,
      68,
      91,
      63,
      83
    ],
    "rsiStack": [
      78.9,
      73.6,
      68.2,
      63.8,
      60.3,
      59.5
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 69.97,
    "chg": -1.73,
    "chgW": -0.4,
    "chgM": -13.32,
    "chgYTD": 13.37,
    "marketCap": "$33.4B",
    "pe": "14.2x",
    "evEbitda": "8.1x",
    "de": "0.5x",
    "drawdown": "-18.0%"
  },
  "MOS": {
    "price": 19.97,
    "chg": -4.63,
    "chgW": -7.76,
    "chgM": -23.81,
    "chgYTD": -17.1,
    "marketCap": "$6.3B",
    "pe": "12.7x",
    "evEbitda": "7.3x",
    "de": "0.5x",
    "drawdown": "-44.5%"
  },
  "CF": {
    "price": 114.44,
    "chg": -1.36,
    "chgW": -0.66,
    "chgM": -17.14,
    "chgYTD": 47.97,
    "marketCap": "$17.3B",
    "pe": "8.5x",
    "evEbitda": "5.6x",
    "de": "0.4x",
    "drawdown": "-19.4%"
  },
  "ICL": {
    "price": 5.08,
    "chg": 0.0,
    "chgW": 1.2,
    "chgM": -13.61,
    "chgYTD": -11.03,
    "marketCap": "$6.6B",
    "pe": "21.2x",
    "evEbitda": "6.9x",
    "de": "0.5x",
    "drawdown": "-27.1%"
  },
  "FMC": {
    "price": 9.09,
    "chg": 0.66,
    "chgW": 1.91,
    "chgM": -26.04,
    "chgYTD": -34.46,
    "marketCap": "$1.4B",
    "pe": "5.7x",
    "evEbitda": "18.9x",
    "de": "2.7x",
    "drawdown": "-71.0%"
  },
  "CTVA": {
    "price": 14.45,
    "chg": 3.88,
    "chgW": 24.03,
    "chgM": 13.64,
    "chgYTD": 43.68,
    "marketCap": "$9.6B",
    "pe": "8.9x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-1.2%"
  },
  "ADM": {
    "price": 81.34,
    "chg": -1.06,
    "chgW": 2.47,
    "chgM": -6.02,
    "chgYTD": 41.49,
    "marketCap": "$39.2B",
    "pe": "22.3x",
    "evEbitda": "16.1x",
    "de": "0.4x",
    "drawdown": "-8.3%"
  },
  "BG": {
    "price": 105.51,
    "chg": -1.7,
    "chgW": -1.35,
    "chgM": -14.57,
    "chgYTD": 18.44,
    "marketCap": "$20.3B",
    "pe": "21.0x",
    "evEbitda": "12.3x",
    "de": "1.0x",
    "drawdown": "-21.8%"
  },
  "INGR": {
    "price": 94.25,
    "chg": -2.58,
    "chgW": -1.63,
    "chgM": -6.42,
    "chgYTD": -14.52,
    "marketCap": "$5.9B",
    "pe": "10.3x",
    "evEbitda": "6.0x",
    "de": "0.4x",
    "drawdown": "-23.7%"
  },
  "FPI": {
    "price": 10.36,
    "chg": -3.54,
    "chgW": -8.72,
    "chgM": -3.63,
    "chgYTD": 6.91,
    "marketCap": "$455M",
    "pe": "20.3x",
    "evEbitda": "25.5x",
    "de": "0.5x",
    "drawdown": "-21.7%"
  },
  "LAND": {
    "price": 9.57,
    "chg": -0.93,
    "chgW": 1.16,
    "chgM": 1.22,
    "chgYTD": 4.59,
    "marketCap": "$413M",
    "pe": "-31.4x",
    "evEbitda": "13.1x",
    "de": "0.7x",
    "drawdown": "-26.4%"
  },
  "DE": {
    "price": 656.87,
    "chg": -3.8,
    "chgW": -2.19,
    "chgM": -3.0,
    "chgYTD": 41.09,
    "marketCap": "$177.1B",
    "pe": "36.5x",
    "evEbitda": "28.1x",
    "de": "2.3x",
    "drawdown": "-8.9%"
  },
  "AGCO": {
    "price": 109.15,
    "chg": -6.06,
    "chgW": -4.45,
    "chgM": -13.97,
    "chgYTD": 4.63,
    "marketCap": "$7.6B",
    "pe": "15.1x",
    "evEbitda": "10.6x",
    "de": "0.7x",
    "drawdown": "-24.1%"
  },
  "CNH": {
    "price": 12.46,
    "chg": -6.1,
    "chgW": -3.04,
    "chgM": -10.36,
    "chgYTD": 35.14,
    "marketCap": "$20.0B",
    "pe": "49.8x",
    "evEbitda": "39.3x",
    "de": "3.4x",
    "drawdown": "-13.8%"
  },
  "XYL": {
    "price": 101.82,
    "chg": -2.63,
    "chgW": 0.54,
    "chgM": -5.41,
    "chgYTD": -25.23,
    "marketCap": "$23.8B",
    "pe": "24.2x",
    "evEbitda": "13.4x",
    "de": "0.3x",
    "drawdown": "-34.0%"
  },
  "VMI": {
    "price": 464.59,
    "chg": -4.58,
    "chgW": 0.35,
    "chgM": -3.37,
    "chgYTD": 15.48,
    "marketCap": "$9.0B",
    "pe": "18.1x",
    "evEbitda": "15.0x",
    "de": "0.5x",
    "drawdown": "-20.7%"
  },
  "LNN": {
    "price": 113.33,
    "chg": -1.22,
    "chgW": 1.24,
    "chgM": -6.24,
    "chgYTD": -3.85,
    "marketCap": "$1.2B",
    "pe": "21.8x",
    "evEbitda": "13.6x",
    "de": "0.3x",
    "drawdown": "-23.4%"
  },
  "MWA": {
    "price": 21.39,
    "chg": -2.6,
    "chgW": 0.71,
    "chgM": -10.84,
    "chgYTD": -10.2,
    "marketCap": "$3.3B",
    "pe": "15.1x",
    "evEbitda": "9.4x",
    "de": "0.4x",
    "drawdown": "-31.0%"
  },
  "WTS": {
    "price": 348.26,
    "chg": -3.92,
    "chgW": -1.67,
    "chgM": -2.25,
    "chgYTD": 26.17,
    "marketCap": "$11.6B",
    "pe": "30.4x",
    "evEbitda": "20.6x",
    "de": "0.1x",
    "drawdown": "-11.7%"
  },
  "TSN": {
    "price": 51.7,
    "chg": -0.52,
    "chgW": 2.32,
    "chgM": -0.08,
    "chgYTD": -11.8,
    "marketCap": "$18.2B",
    "pe": "31.9x",
    "evEbitda": "9.3x",
    "de": "0.4x",
    "drawdown": "-25.6%"
  },
  "PPC": {
    "price": 28.12,
    "chg": 0.82,
    "chgW": 4.11,
    "chgM": -7.01,
    "chgYTD": -27.88,
    "marketCap": "$6.7B",
    "pe": "12.3x",
    "evEbitda": "5.3x",
    "de": "0.8x",
    "drawdown": "-37.3%"
  },
  "HRL": {
    "price": 19.55,
    "chg": -1.66,
    "chgW": -1.96,
    "chgM": -6.77,
    "chgYTD": -17.51,
    "marketCap": "$10.8B",
    "pe": "31.5x",
    "evEbitda": "10.2x",
    "de": "0.4x",
    "drawdown": "-26.5%"
  },
  "CAG": {
    "price": 13.25,
    "chg": -1.49,
    "chgW": -1.41,
    "chgM": -12.31,
    "chgYTD": -23.45,
    "marketCap": "$6.3B",
    "pe": "8.7x",
    "evEbitda": "8.0x",
    "de": "1.2x",
    "drawdown": "-34.8%"
  },
  "CALM": {
    "price": 62.7,
    "chg": -1.1,
    "chgW": -7.88,
    "chgM": -14.38,
    "chgYTD": -21.2,
    "marketCap": "$2.9B",
    "pe": "51.0x",
    "evEbitda": "14.8x",
    "de": "–",
    "drawdown": "-34.4%"
  },
  "DBA": {
    "price": 28.49,
    "chg": -1.25,
    "chgW": 1.24,
    "chgM": -1.76,
    "chgYTD": 11.64,
    "marketCap": "–",
    "pe": "12.0x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-3.5%"
  },
  "MOO": {
    "price": 81.23,
    "chg": -1.42,
    "chgW": -0.29,
    "chgM": -7.37,
    "chgYTD": 11.59,
    "marketCap": "–",
    "pe": "17.8x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-9.0%"
  },
  "VEGI": {
    "price": 45.47,
    "chg": -1.79,
    "chgW": 0.31,
    "chgM": -6.44,
    "chgYTD": 17.89,
    "marketCap": "–",
    "pe": "19.0x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-8.4%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "52.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
