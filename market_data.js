window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-07-17 23:22:40",
  "sections": {
    "Index": {
      "risk": "Neutral",
      "leader": "DJI",
      "watch": 0
    },
    "Commodity": {
      "risk": "Risk On",
      "leader": "CF",
      "watch": 1
    },
    "Crypto": {
      "risk": "Risk On",
      "leader": "BTC",
      "watch": 0
    },
    "ETF": {
      "risk": "Risk On",
      "leader": "XLV",
      "watch": 4
    },
    "Stock": {
      "risk": "Neutral",
      "leader": "MOO",
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
    "price": 7457.69,
    "change": -1.01,
    "mom": 34.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.3,
    "flow": 61,
    "perf": {
      "w1": -1.55,
      "m1": 0.51,
      "m3": 5.57
    },
    "returns": [
      -1.01,
      -1.14,
      -1.55,
      -0.34,
      0.51,
      5.57
    ],
    "volumes": [
      94,
      85,
      69,
      86,
      92,
      104
    ],
    "rsiStack": [
      34.5,
      44.2,
      48.3,
      51.1,
      54.4,
      60.6
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 52146.42,
    "change": -0.77,
    "mom": 26.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.4,
    "flow": 95,
    "perf": {
      "w1": -0.93,
      "m1": 1.27,
      "m3": 6.1
    },
    "returns": [
      -0.77,
      -0.69,
      -0.93,
      -1.42,
      1.27,
      6.1
    ],
    "volumes": [
      91,
      81,
      71,
      77,
      91,
      92
    ],
    "rsiStack": [
      31.5,
      45.6,
      52.4,
      55.6,
      58.3,
      63.6
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 6820.6,
    "change": -6.37,
    "mom": 37.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.5,
    "flow": 95,
    "perf": {
      "w1": -6.46,
      "m1": -24.75,
      "m3": 10.15
    },
    "returns": [
      -6.37,
      0.2,
      -6.46,
      -10.82,
      -24.75,
      10.15
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
      33.2,
      35.1,
      38.5,
      41.8,
      45.5,
      50.0
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
    "rsi": 46.2,
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
      93,
      106,
      96,
      103,
      96,
      122
    ],
    "rsiStack": [
      37.1,
      42.0,
      46.2,
      49.2,
      51.6,
      51.3
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 368.41,
    "change": 0.95,
    "mom": 50.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Day 1)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 40.3,
    "flow": 81,
    "perf": {
      "w1": -2.28,
      "m1": -5.2,
      "m3": -14.24
    },
    "returns": [
      0.95,
      -1.0,
      -2.28,
      -2.57,
      -5.2,
      -14.24
    ],
    "volumes": [
      123,
      86,
      71,
      92,
      87,
      172
    ],
    "rsiStack": [
      41.6,
      41.1,
      40.3,
      40.2,
      41.6,
      47.4
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 50.78,
    "change": 0.77,
    "mom": 45.1,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 34.7,
    "flow": 82,
    "perf": {
      "w1": -5.88,
      "m1": -16.22,
      "m3": -25.86
    },
    "returns": [
      0.77,
      -4.5,
      -5.88,
      -7.71,
      -16.22,
      -25.86
    ],
    "volumes": [
      99,
      67,
      57,
      89,
      71,
      159
    ],
    "rsiStack": [
      31.1,
      33.4,
      34.7,
      36.3,
      38.0,
      38.2
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 38.73,
    "change": -0.97,
    "mom": 37.2,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 30.9,
    "flow": 91,
    "perf": {
      "w1": -9.87,
      "m1": -17.77,
      "m3": -27.93
    },
    "returns": [
      -0.97,
      -6.79,
      -9.87,
      -10.41,
      -17.77,
      -27.93
    ],
    "volumes": [
      139,
      64,
      68,
      66,
      107,
      68
    ],
    "rsiStack": [
      20.6,
      26.4,
      30.9,
      34.7,
      39.7,
      48.8
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 81.77,
    "change": 3.57,
    "mom": 69.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.2,
    "flow": 95,
    "perf": {
      "w1": 14.51,
      "m1": 6.49,
      "m3": -11.24
    },
    "returns": [
      3.57,
      3.06,
      14.51,
      19.04,
      6.49,
      -11.24
    ],
    "volumes": [
      99,
      172,
      96,
      190,
      81,
      38
    ],
    "rsiStack": [
      81.5,
      67.8,
      57.2,
      51.8,
      49.6,
      50.1
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 121.42,
    "change": 2.33,
    "mom": 62.1,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.8,
    "flow": 108,
    "perf": {
      "w1": 3.85,
      "m1": 14.71,
      "m3": 0.09
    },
    "returns": [
      2.33,
      1.87,
      3.85,
      9.84,
      14.71,
      0.09
    ],
    "volumes": [
      78,
      65,
      39,
      131,
      67,
      101
    ],
    "rsiStack": [
      74.0,
      69.7,
      63.8,
      59.0,
      56.4,
      58.9
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 34.2,
    "change": -0.03,
    "mom": 48.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.9,
    "flow": 49,
    "perf": {
      "w1": -1.72,
      "m1": -2.4,
      "m3": -7.52
    },
    "returns": [
      -0.03,
      -4.23,
      -1.72,
      1.85,
      -2.4,
      -7.52
    ],
    "volumes": [
      49,
      73,
      60,
      85,
      49,
      90
    ],
    "rsiStack": [
      39.4,
      44.8,
      44.9,
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
    "price": 22.13,
    "change": -1.78,
    "mom": 56.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.0,
    "flow": 59,
    "perf": {
      "w1": 2.88,
      "m1": -1.69,
      "m3": -8.55
    },
    "returns": [
      -1.78,
      -3.53,
      2.88,
      4.73,
      -1.69,
      -8.55
    ],
    "volumes": [
      63,
      84,
      64,
      74,
      83,
      106
    ],
    "rsiStack": [
      50.3,
      52.3,
      51.0,
      49.8,
      49.2,
      52.1
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 67.28,
    "change": 0.27,
    "mom": 57.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.8,
    "flow": 51,
    "perf": {
      "w1": 2.83,
      "m1": 4.67,
      "m3": -7.42
    },
    "returns": [
      0.27,
      -1.98,
      2.83,
      3.41,
      4.67,
      -7.42
    ],
    "volumes": [
      68,
      78,
      48,
      98,
      87,
      81
    ],
    "rsiStack": [
      58.0,
      58.3,
      54.8,
      51.9,
      50.6,
      54.1
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 63893.92,
    "change": 0.16,
    "mom": 55.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.7,
    "flow": 100,
    "perf": {
      "w1": 0.21,
      "m1": 6.6,
      "m3": -16.97
    },
    "returns": [
      0.16,
      -1.64,
      0.21,
      0.94,
      6.6,
      -16.97
    ],
    "volumes": [
      101,
      105,
      67,
      94,
      109,
      53
    ],
    "rsiStack": [
      52.5,
      53.9,
      51.7,
      49.1,
      46.7,
      43.9
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 157.12,
    "change": -2.1,
    "mom": 47.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.8,
    "flow": 84,
    "perf": {
      "w1": -1.23,
      "m1": -4.73,
      "m3": -19.82
    },
    "returns": [
      -2.1,
      -2.71,
      -1.23,
      -5.05,
      -4.73,
      -19.82
    ],
    "volumes": [
      82,
      95,
      79,
      59,
      108,
      96
    ],
    "rsiStack": [
      41.1,
      45.4,
      45.8,
      45.6,
      45.7,
      45.4
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 60.46,
    "change": -0.3,
    "mom": 47.4,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.7,
    "flow": 53,
    "perf": {
      "w1": -8.59,
      "m1": -24.98,
      "m3": -37.03
    },
    "returns": [
      -0.3,
      -4.37,
      -8.59,
      -6.44,
      -24.98,
      -37.03
    ],
    "volumes": [
      66,
      105,
      252,
      64,
      124,
      76
    ],
    "rsiStack": [
      33.1,
      34.9,
      35.7,
      37.4,
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
    "price": 94.85,
    "change": 0.87,
    "mom": 52.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.1,
    "flow": 47,
    "perf": {
      "w1": 0.22,
      "m1": -18.63,
      "m3": -42.15
    },
    "returns": [
      0.87,
      -2.8,
      0.22,
      -5.87,
      -18.63,
      -42.15
    ],
    "volumes": [
      43,
      66,
      59,
      64,
      119,
      95
    ],
    "rsiStack": [
      46.7,
      42.8,
      40.1,
      39.7,
      41.3,
      45.7
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 57.68,
    "change": 1.16,
    "mom": 66.0,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.4,
    "flow": 99,
    "perf": {
      "w1": 4.72,
      "m1": 5.51,
      "m3": 3.24
    },
    "returns": [
      1.16,
      1.28,
      4.72,
      8.38,
      5.51,
      3.24
    ],
    "volumes": [
      86,
      98,
      69,
      113,
      85,
      96
    ],
    "rsiStack": [
      79.0,
      69.1,
      61.4,
      56.9,
      55.2,
      59.4
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 175.59,
    "change": -1.09,
    "mom": 33.8,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.3,
    "flow": 108,
    "perf": {
      "w1": -5.48,
      "m1": -5.5,
      "m3": 13.51
    },
    "returns": [
      -1.09,
      -4.37,
      -5.48,
      -2.77,
      -5.5,
      13.51
    ],
    "volumes": [
      80,
      58,
      51,
      76,
      95,
      96
    ],
    "rsiStack": [
      28.0,
      37.2,
      42.3,
      46.0,
      49.9,
      55.1
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 45.17,
    "change": -0.66,
    "mom": 44.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.4,
    "flow": 104,
    "perf": {
      "w1": -0.53,
      "m1": 1.6,
      "m3": 0.49
    },
    "returns": [
      -0.66,
      -1.14,
      -0.53,
      -1.29,
      1.6,
      0.49
    ],
    "volumes": [
      78,
      86,
      69,
      72,
      115,
      112
    ],
    "rsiStack": [
      41.4,
      47.2,
      49.4,
      49.9,
      50.1,
      51.0
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 161.09,
    "change": -0.44,
    "mom": 46.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.2,
    "flow": 80,
    "perf": {
      "w1": 0.16,
      "m1": 6.89,
      "m3": 10.4
    },
    "returns": [
      -0.44,
      1.77,
      0.16,
      -1.62,
      6.89,
      10.4
    ],
    "volumes": [
      105,
      104,
      85,
      81,
      124,
      101
    ],
    "rsiStack": [
      54.6,
      56.5,
      58.2,
      58.7,
      59.2,
      63.1
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 110.65,
    "change": -1.78,
    "mom": 49.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.9,
    "flow": 99,
    "perf": {
      "w1": -0.89,
      "m1": 1.33,
      "m3": -5.56
    },
    "returns": [
      -1.78,
      -0.72,
      -0.89,
      0.96,
      1.33,
      -5.56
    ],
    "volumes": [
      74,
      65,
      82,
      70,
      106,
      154
    ],
    "rsiStack": [
      43.4,
      49.1,
      48.9,
      48.1,
      48.3,
      52.7
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 56.26,
    "change": -0.86,
    "mom": 49.4,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 65.3,
    "flow": 122,
    "perf": {
      "w1": 0.99,
      "m1": 4.09,
      "m3": 7.57
    },
    "returns": [
      -0.86,
      0.14,
      0.99,
      1.15,
      4.09,
      7.57
    ],
    "volumes": [
      79,
      124,
      68,
      114,
      120,
      127
    ],
    "rsiStack": [
      59.0,
      64.4,
      65.3,
      64.6,
      63.1,
      62.1
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 45.42,
    "change": -0.09,
    "mom": 64.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.9,
    "flow": 75,
    "perf": {
      "w1": 2.18,
      "m1": 3.3,
      "m3": 3.75
    },
    "returns": [
      -0.09,
      2.11,
      2.18,
      1.66,
      3.3,
      3.75
    ],
    "volumes": [
      77,
      72,
      65,
      69,
      96,
      222
    ],
    "rsiStack": [
      72.0,
      62.9,
      58.9,
      57.1,
      56.3,
      57.1
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 179.41,
    "change": -0.41,
    "mom": 33.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.9,
    "flow": 94,
    "perf": {
      "w1": -1.38,
      "m1": -0.11,
      "m3": 4.65
    },
    "returns": [
      -0.41,
      -0.58,
      -1.38,
      -2.45,
      -0.11,
      4.65
    ],
    "volumes": [
      84,
      90,
      69,
      88,
      79,
      130
    ],
    "rsiStack": [
      32.0,
      43.7,
      48.9,
      51.4,
      53.9,
      59.6
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 50.53,
    "change": -0.71,
    "mom": 44.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.9,
    "flow": 74,
    "perf": {
      "w1": -0.71,
      "m1": -2.86,
      "m3": -2.4
    },
    "returns": [
      -0.71,
      -0.22,
      -0.71,
      -2.85,
      -2.86,
      -2.4
    ],
    "volumes": [
      63,
      76,
      62,
      108,
      106,
      126
    ],
    "rsiStack": [
      42.2,
      44.2,
      45.9,
      47.3,
      49.9,
      57.8
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 115.44,
    "change": -1.62,
    "mom": 41.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.2,
    "flow": 110,
    "perf": {
      "w1": -1.54,
      "m1": -0.04,
      "m3": -2.97
    },
    "returns": [
      -1.62,
      -0.4,
      -1.54,
      -1.43,
      -0.04,
      -2.97
    ],
    "volumes": [
      71,
      79,
      69,
      173,
      137,
      117
    ],
    "rsiStack": [
      37.8,
      44.0,
      46.2,
      47.5,
      49.8,
      56.5
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 85.19,
    "change": -0.72,
    "mom": 53.5,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.5,
    "flow": 133,
    "perf": {
      "w1": 1.27,
      "m1": 1.8,
      "m3": 4.09
    },
    "returns": [
      -0.72,
      2.12,
      1.27,
      0.24,
      1.8,
      4.09
    ],
    "volumes": [
      104,
      67,
      68,
      87,
      132,
      140
    ],
    "rsiStack": [
      59.5,
      56.2,
      54.5,
      53.5,
      52.7,
      52.4
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 521.81,
    "change": -1.64,
    "mom": 31.8,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.0,
    "flow": 149,
    "perf": {
      "w1": -10.24,
      "m1": -12.99,
      "m3": 24.03
    },
    "returns": [
      -1.64,
      -8.12,
      -10.24,
      -7.86,
      -12.99,
      24.03
    ],
    "volumes": [
      104,
      74,
      57,
      63,
      129,
      81
    ],
    "rsiStack": [
      26.0,
      35.4,
      41.0,
      44.9,
      48.9,
      54.3
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 27.84,
    "change": 0.91,
    "mom": 54.3,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.0,
    "flow": 78,
    "perf": {
      "w1": 0.25,
      "m1": 3.73,
      "m3": 2.47
    },
    "returns": [
      0.91,
      0.76,
      0.25,
      4.11,
      3.73,
      2.47
    ],
    "volumes": [
      59,
      55,
      133,
      64,
      31,
      66
    ],
    "rsiStack": [
      62.0,
      63.2,
      61.0,
      58.6,
      56.9,
      57.1
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 44.93,
    "change": -0.02,
    "mom": 64.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.6,
    "flow": 110,
    "perf": {
      "w1": 2.09,
      "m1": 4.0,
      "m3": -1.21
    },
    "returns": [
      -0.02,
      1.42,
      2.09,
      1.67,
      4.0,
      -1.21
    ],
    "volumes": [
      71,
      54,
      52,
      25,
      165,
      61
    ],
    "rsiStack": [
      74.7,
      65.2,
      59.6,
      56.2,
      55.1,
      60.8
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 45.12,
    "change": -1.19,
    "mom": 43.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.0,
    "flow": 10,
    "perf": {
      "w1": -0.62,
      "m1": 2.78,
      "m3": 9.8
    },
    "returns": [
      -1.19,
      0.47,
      -0.62,
      0.04,
      2.78,
      9.8
    ],
    "volumes": [
      49,
      27,
      75,
      39,
      14,
      343
    ],
    "rsiStack": [
      49.3,
      51.2,
      53.0,
      54.6,
      56.9,
      63.3
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.33,
    "change": 0.38,
    "mom": 58.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.9,
    "flow": 114,
    "perf": {
      "w1": 0.86,
      "m1": 2.95,
      "m3": -1.61
    },
    "returns": [
      0.38,
      0.1,
      0.86,
      -0.34,
      2.95,
      -1.61
    ],
    "volumes": [
      28,
      27,
      228,
      12,
      9,
      7
    ],
    "rsiStack": [
      63.8,
      60.1,
      56.9,
      54.5,
      54.4,
      61.2
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 105.49,
    "change": -2.66,
    "mom": 47.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.4,
    "flow": 106,
    "perf": {
      "w1": -0.49,
      "m1": 5.68,
      "m3": 7.86
    },
    "returns": [
      -2.66,
      -0.64,
      -0.49,
      1.17,
      5.68,
      7.86
    ],
    "volumes": [
      87,
      70,
      62,
      89,
      99,
      86
    ],
    "rsiStack": [
      48.5,
      53.1,
      54.4,
      54.7,
      55.8,
      61.4
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 82.53,
    "change": 0.47,
    "mom": 66.0,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 67.6,
    "flow": 86,
    "perf": {
      "w1": 1.93,
      "m1": 6.78,
      "m3": -0.7
    },
    "returns": [
      0.47,
      1.25,
      1.93,
      2.0,
      6.78,
      -0.7
    ],
    "volumes": [
      56,
      42,
      100,
      93,
      109,
      161
    ],
    "rsiStack": [
      85.1,
      75.4,
      67.6,
      61.9,
      58.4,
      62.2
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 14.23,
    "change": 0.28,
    "mom": 56.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.4,
    "flow": 78,
    "perf": {
      "w1": 1.64,
      "m1": 1.93,
      "m3": 11.35
    },
    "returns": [
      0.28,
      2.08,
      1.64,
      6.51,
      1.93,
      11.35
    ],
    "volumes": [
      63,
      81,
      90,
      83,
      91,
      63
    ],
    "rsiStack": [
      70.0,
      57.7,
      53.4,
      52.7,
      53.8,
      59.2
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 76.07,
    "change": -2.12,
    "mom": 45.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.7,
    "flow": 59,
    "perf": {
      "w1": -2.29,
      "m1": -4.41,
      "m3": -3.77
    },
    "returns": [
      -2.12,
      -1.04,
      -2.29,
      0.09,
      -4.41,
      -3.77
    ],
    "volumes": [
      68,
      61,
      58,
      59,
      67,
      135
    ],
    "rsiStack": [
      35.9,
      40.2,
      42.7,
      45.0,
      48.7,
      58.0
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 25.41,
    "change": 1.48,
    "mom": 60.2,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 66.2,
    "flow": 116,
    "perf": {
      "w1": 2.34,
      "m1": 5.0,
      "m3": 4.44
    },
    "returns": [
      1.48,
      2.05,
      2.34,
      5.61,
      5.0,
      4.44
    ],
    "volumes": [
      42,
      14,
      41,
      71,
      138,
      220
    ],
    "rsiStack": [
      75.2,
      71.6,
      66.2,
      61.8,
      58.3,
      56.5
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 25.05,
    "change": -0.36,
    "mom": 67.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.6,
    "flow": 75,
    "perf": {
      "w1": 3.64,
      "m1": -3.36,
      "m3": -8.28
    },
    "returns": [
      -0.36,
      3.3,
      3.64,
      3.0,
      -3.36,
      -8.28
    ],
    "volumes": [
      95,
      80,
      54,
      74,
      106,
      93
    ],
    "rsiStack": [
      69.5,
      59.6,
      53.6,
      50.4,
      49.3,
      53.2
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.71,
    "change": -1.22,
    "mom": 61.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.8,
    "flow": 87,
    "perf": {
      "w1": 1.15,
      "m1": 0.21,
      "m3": -16.08
    },
    "returns": [
      -1.22,
      0.52,
      1.15,
      0.0,
      0.21,
      -16.08
    ],
    "volumes": [
      92,
      60,
      92,
      88,
      64,
      133
    ],
    "rsiStack": [
      54.6,
      50.5,
      46.8,
      44.5,
      44.9,
      52.8
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.76,
    "change": -2.07,
    "mom": 64.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.8,
    "flow": 83,
    "perf": {
      "w1": 2.28,
      "m1": 2.16,
      "m3": -12.54
    },
    "returns": [
      -2.07,
      1.1,
      2.28,
      1.21,
      2.16,
      -12.54
    ],
    "volumes": [
      110,
      67,
      56,
      99,
      70,
      130
    ],
    "rsiStack": [
      57.2,
      53.7,
      48.8,
      45.5,
      43.7,
      44.6
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 202.68,
    "change": -2.54,
    "mom": 31.1,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.5,
    "flow": 90,
    "perf": {
      "w1": -21.38,
      "m1": -18.71,
      "m3": 10.56
    },
    "returns": [
      -2.54,
      -14.18,
      -21.38,
      -16.22,
      -18.71,
      10.56
    ],
    "volumes": [
      88,
      45,
      41,
      54,
      81,
      77
    ],
    "rsiStack": [
      19.3,
      32.2,
      39.5,
      43.8,
      46.7,
      45.1
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 188.68,
    "change": 0.2,
    "mom": 33.0,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.7,
    "flow": 68,
    "perf": {
      "w1": -19.99,
      "m1": -34.83,
      "m3": 24.7
    },
    "returns": [
      0.2,
      -15.18,
      -19.99,
      -23.08,
      -34.83,
      24.7
    ],
    "volumes": [
      79,
      44,
      30,
      46,
      60,
      85
    ],
    "rsiStack": [
      17.9,
      28.0,
      35.7,
      41.0,
      45.8,
      50.8
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 67.28,
    "chg": 0.27,
    "chgW": 2.83,
    "chgM": 4.67,
    "chgYTD": 9.01,
    "marketCap": "$32.3B",
    "pe": "13.7x",
    "evEbitda": "8.1x",
    "de": "0.6x",
    "drawdown": "-21.2%"
  },
  "MOS": {
    "price": 22.13,
    "chg": -1.78,
    "chgW": 2.88,
    "chgM": -1.69,
    "chgYTD": -8.14,
    "marketCap": "$7.0B",
    "pe": "158.1x",
    "evEbitda": "6.4x",
    "de": "0.5x",
    "drawdown": "-41.0%"
  },
  "CF": {
    "price": 121.42,
    "chg": 2.33,
    "chgW": 3.85,
    "chgM": 14.71,
    "chgYTD": 57.0,
    "marketCap": "$18.7B",
    "pe": "10.9x",
    "evEbitda": "6.6x",
    "de": "0.4x",
    "drawdown": "-14.5%"
  },
  "ICL": {
    "price": 5.05,
    "chg": 0.2,
    "chgW": 4.12,
    "chgM": -3.63,
    "chgYTD": -11.56,
    "marketCap": "$6.5B",
    "pe": "24.0x",
    "evEbitda": "7.3x",
    "de": "0.5x",
    "drawdown": "-28.7%"
  },
  "FMC": {
    "price": 11.21,
    "chg": -2.01,
    "chgW": 2.75,
    "chgM": -6.43,
    "chgYTD": -19.18,
    "marketCap": "$1.4B",
    "pe": "5.5x",
    "evEbitda": "17.2x",
    "de": "2.5x",
    "drawdown": "-74.5%"
  },
  "CTVA": {
    "price": 87.3,
    "chg": 0.75,
    "chgW": 1.89,
    "chgM": 12.83,
    "chgYTD": 30.24,
    "marketCap": "$58.4B",
    "pe": "47.2x",
    "evEbitda": "14.4x",
    "de": "0.1x",
    "drawdown": "-1.0%"
  },
  "ADM": {
    "price": 85.9,
    "chg": 3.49,
    "chgW": 6.83,
    "chgM": 12.29,
    "chgYTD": 49.42,
    "marketCap": "$41.4B",
    "pe": "38.3x",
    "evEbitda": "20.4x",
    "de": "0.5x",
    "drawdown": "-0.1%"
  },
  "BG": {
    "price": 119.15,
    "chg": 2.87,
    "chgW": 4.22,
    "chgM": 2.59,
    "chgYTD": 33.76,
    "marketCap": "$23.1B",
    "pe": "31.4x",
    "evEbitda": "17.3x",
    "de": "0.9x",
    "drawdown": "-11.7%"
  },
  "INGR": {
    "price": 102.56,
    "chg": 0.31,
    "chgW": 3.86,
    "chgM": 3.76,
    "chgYTD": -6.98,
    "marketCap": "$6.5B",
    "pe": "9.9x",
    "evEbitda": "6.2x",
    "de": "0.4x",
    "drawdown": "-24.4%"
  },
  "FPI": {
    "price": 9.71,
    "chg": -1.22,
    "chgW": 1.15,
    "chgM": 0.21,
    "chgYTD": 0.21,
    "marketCap": "$431M",
    "pe": "16.5x",
    "evEbitda": "24.5x",
    "de": "0.5x",
    "drawdown": "-26.6%"
  },
  "LAND": {
    "price": 8.76,
    "chg": -2.07,
    "chgW": 2.28,
    "chgM": 2.16,
    "chgYTD": -4.26,
    "marketCap": "$378M",
    "pe": "-18.4x",
    "evEbitda": "12.6x",
    "de": "0.7x",
    "drawdown": "-32.6%"
  },
  "DE": {
    "price": 597.24,
    "chg": -0.29,
    "chgW": 1.77,
    "chgM": 1.49,
    "chgYTD": 28.28,
    "marketCap": "$161.2B",
    "pe": "33.8x",
    "evEbitda": "23.4x",
    "de": "3.8x",
    "drawdown": "-11.4%"
  },
  "AGCO": {
    "price": 115.33,
    "chg": -0.02,
    "chgW": 0.88,
    "chgM": 3.0,
    "chgYTD": 10.55,
    "marketCap": "$8.4B",
    "pe": "11.1x",
    "evEbitda": "10.3x",
    "de": "0.6x",
    "drawdown": "-19.8%"
  },
  "CNH": {
    "price": 10.64,
    "chg": 0.38,
    "chgW": 1.82,
    "chgM": 3.5,
    "chgYTD": 15.4,
    "marketCap": "$13.2B",
    "pe": "33.2x",
    "evEbitda": "35.3x",
    "de": "3.3x",
    "drawdown": "-21.1%"
  },
  "XYL": {
    "price": 122.78,
    "chg": -2.01,
    "chgW": 1.29,
    "chgM": 11.32,
    "chgYTD": -9.84,
    "marketCap": "$29.2B",
    "pe": "30.5x",
    "evEbitda": "16.4x",
    "de": "0.2x",
    "drawdown": "-20.4%"
  },
  "VMI": {
    "price": 531.66,
    "chg": -1.27,
    "chgW": -2.77,
    "chgM": -5.95,
    "chgYTD": 32.15,
    "marketCap": "$10.3B",
    "pe": "29.6x",
    "evEbitda": "17.4x",
    "de": "0.5x",
    "drawdown": "-9.2%"
  },
  "LNN": {
    "price": 115.54,
    "chg": -2.3,
    "chgW": 1.51,
    "chgM": -0.48,
    "chgYTD": -1.98,
    "marketCap": "$1.2B",
    "pe": "22.1x",
    "evEbitda": "13.7x",
    "de": "0.3x",
    "drawdown": "-21.9%"
  },
  "MWA": {
    "price": 25.46,
    "chg": -1.85,
    "chgW": 2.17,
    "chgM": -0.74,
    "chgYTD": 6.88,
    "marketCap": "$4.0B",
    "pe": "19.3x",
    "evEbitda": "12.0x",
    "de": "0.4x",
    "drawdown": "-17.9%"
  },
  "WTS": {
    "price": 346.43,
    "chg": -1.97,
    "chgW": -1.68,
    "chgM": 3.01,
    "chgYTD": 25.51,
    "marketCap": "$11.6B",
    "pe": "31.7x",
    "evEbitda": "21.0x",
    "de": "0.1x",
    "drawdown": "-12.2%"
  },
  "TSN": {
    "price": 57.77,
    "chg": -0.1,
    "chgW": -0.1,
    "chgM": 2.79,
    "chgYTD": -1.45,
    "marketCap": "$20.3B",
    "pe": "45.5x",
    "evEbitda": "10.3x",
    "de": "0.4x",
    "drawdown": "-16.9%"
  },
  "PPC": {
    "price": 29.11,
    "chg": 0.34,
    "chgW": 3.04,
    "chgM": 2.68,
    "chgYTD": -25.34,
    "marketCap": "$6.9B",
    "pe": "7.8x",
    "evEbitda": "4.8x",
    "de": "0.9x",
    "drawdown": "-42.4%"
  },
  "HRL": {
    "price": 25.39,
    "chg": -1.24,
    "chgW": 2.67,
    "chgM": 4.36,
    "chgYTD": 7.13,
    "marketCap": "$14.0B",
    "pe": "29.9x",
    "evEbitda": "11.0x",
    "de": "0.0x",
    "drawdown": "-14.7%"
  },
  "CAG": {
    "price": 14.28,
    "chg": -1.31,
    "chgW": 3.25,
    "chgM": 8.51,
    "chgYTD": -17.5,
    "marketCap": "$6.8B",
    "pe": "9.1x",
    "evEbitda": "8.1x",
    "de": "1.2x",
    "drawdown": "-29.7%"
  },
  "CALM": {
    "price": 88.55,
    "chg": 0.31,
    "chgW": 0.24,
    "chgM": 13.09,
    "chgYTD": 11.29,
    "marketCap": "$4.2B",
    "pe": "6.2x",
    "evEbitda": "3.1x",
    "de": "–",
    "drawdown": "-29.9%"
  },
  "DBA": {
    "price": 27.84,
    "chg": 0.91,
    "chgW": 0.25,
    "chgM": 3.73,
    "chgYTD": 9.09,
    "marketCap": "–",
    "pe": "11.8x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-3.5%"
  },
  "MOO": {
    "price": 82.53,
    "chg": 0.47,
    "chgW": 1.93,
    "chgM": 6.78,
    "chgYTD": 13.38,
    "marketCap": "–",
    "pe": "18.7x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-4.7%"
  },
  "VEGI": {
    "price": 44.93,
    "chg": -0.02,
    "chgW": 2.09,
    "chgM": 4.0,
    "chgYTD": 16.49,
    "marketCap": "–",
    "pe": "21.0x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-5.0%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "52.4x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
