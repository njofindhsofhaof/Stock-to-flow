window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-08-29 03:47:50",
  "sections": {
    "Index": {
      "risk": "Strong ON",
      "leader": "SP500",
      "watch": 1
    },
    "Commodity": {
      "risk": "Neutral",
      "leader": "URA",
      "watch": 3
    },
    "Crypto": {
      "risk": "Risk Off",
      "leader": "CRCL",
      "watch": 3
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "DBA",
      "watch": 3
    },
    "Stock": {
      "risk": "Risk Off",
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
    "price": 7711.76,
    "change": -0.25,
    "mom": 50.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.3,
    "flow": 55,
    "perf": {
      "w1": 0.49,
      "m1": 2.96,
      "m3": 2.09
    },
    "returns": [
      -0.25,
      0.45,
      0.49,
      -0.95,
      2.96,
      2.09
    ],
    "volumes": [
      91,
      86,
      89,
      101,
      81,
      106
    ],
    "rsiStack": [
      56.2,
      55.7,
      56.3,
      56.4,
      55.5,
      50.6
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 53559.99,
    "change": -0.02,
    "mom": 49.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 55.2,
    "flow": 113,
    "perf": {
      "w1": 0.53,
      "m1": 2.05,
      "m3": 5.67
    },
    "returns": [
      -0.02,
      -0.03,
      0.53,
      -0.32,
      2.05,
      5.67
    ],
    "volumes": [
      140,
      85,
      89,
      94,
      67,
      143
    ],
    "rsiStack": [
      56.1,
      54.6,
      55.2,
      55.9,
      55.6,
      51.1
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
    "rsi": 52.5,
    "flow": 89,
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
      81,
      84,
      118,
      87,
      118,
      88
    ],
    "rsiStack": [
      62.3,
      56.6,
      52.5,
      50.1,
      47.3,
      39.1
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
    "rsi": 49.3,
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
      73,
      88,
      98,
      93,
      129
    ],
    "rsiStack": [
      47.4,
      48.9,
      49.3,
      49.5,
      49.1,
      44.3
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 408.89,
    "change": -3.24,
    "mom": 42.0,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.5,
    "flow": 209,
    "perf": {
      "w1": -3.42,
      "m1": 10.05,
      "m3": 0.25
    },
    "returns": [
      -3.24,
      -4.48,
      -3.42,
      1.85,
      10.05,
      0.25
    ],
    "volumes": [
      66,
      115,
      150,
      196,
      85,
      107
    ],
    "rsiStack": [
      36.4,
      50.0,
      54.5,
      54.7,
      50.3,
      36.8
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 60.02,
    "change": -4.38,
    "mom": 47.2,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.4,
    "flow": 207,
    "perf": {
      "w1": -4.3,
      "m1": 14.63,
      "m3": -9.35
    },
    "returns": [
      -4.38,
      -3.69,
      -4.3,
      2.63,
      14.63,
      -9.35
    ],
    "volumes": [
      89,
      85,
      141,
      141,
      70,
      80
    ],
    "rsiStack": [
      41.4,
      51.7,
      54.4,
      53.2,
      47.7,
      33.9
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 45.57,
    "change": -5.79,
    "mom": 48.8,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.3,
    "flow": 179,
    "perf": {
      "w1": -1.09,
      "m1": 16.64,
      "m3": -9.57
    },
    "returns": [
      -5.79,
      -5.34,
      -1.09,
      1.42,
      16.64,
      -9.57
    ],
    "volumes": [
      103,
      132,
      131,
      75,
      53,
      124
    ],
    "rsiStack": [
      43.1,
      51.3,
      53.3,
      52.4,
      48.1,
      36.5
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 83.44,
    "change": -0.11,
    "mom": 48.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.5,
    "flow": 61,
    "perf": {
      "w1": -4.16,
      "m1": -1.45,
      "m3": -13.1
    },
    "returns": [
      -0.11,
      1.31,
      -4.16,
      1.26,
      -1.45,
      -13.1
    ],
    "volumes": [
      107,
      117,
      91,
      37,
      67,
      90
    ],
    "rsiStack": [
      46.6,
      50.5,
      51.5,
      51.2,
      51.4,
      55.5
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 125.79,
    "change": 0.06,
    "mom": 50.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.0,
    "flow": 64,
    "perf": {
      "w1": -2.94,
      "m1": 0.48,
      "m3": 7.88
    },
    "returns": [
      0.06,
      -1.16,
      -2.94,
      6.33,
      0.48,
      7.88
    ],
    "volumes": [
      89,
      89,
      160,
      105,
      56,
      101
    ],
    "rsiStack": [
      57.0,
      57.9,
      57.0,
      56.0,
      55.3,
      56.6
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 37.6,
    "change": -0.21,
    "mom": 49.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.4,
    "flow": 72,
    "perf": {
      "w1": -3.54,
      "m1": 10.72,
      "m3": 3.27
    },
    "returns": [
      -0.21,
      -0.56,
      -3.54,
      2.68,
      10.72,
      3.27
    ],
    "volumes": [
      78,
      78,
      158,
      157,
      98,
      89
    ],
    "rsiStack": [
      53.3,
      57.5,
      57.4,
      55.8,
      53.4,
      50.9
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 23.6,
    "change": -0.67,
    "mom": 53.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.4,
    "flow": 67,
    "perf": {
      "w1": -3.32,
      "m1": 6.69,
      "m3": 1.29
    },
    "returns": [
      -0.67,
      -2.76,
      -3.32,
      9.21,
      6.69,
      1.29
    ],
    "volumes": [
      68,
      71,
      163,
      115,
      81,
      153
    ],
    "rsiStack": [
      52.7,
      55.8,
      55.4,
      54.3,
      51.7,
      45.1
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 73.51,
    "change": 0.62,
    "mom": 53.8,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.9,
    "flow": 67,
    "perf": {
      "w1": -2.34,
      "m1": 6.43,
      "m3": 6.83
    },
    "returns": [
      0.62,
      0.92,
      -2.34,
      7.72,
      6.43,
      6.83
    ],
    "volumes": [
      49,
      92,
      109,
      132,
      68,
      94
    ],
    "rsiStack": [
      63.5,
      64.7,
      62.9,
      60.5,
      56.4,
      48.8
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 77582.59,
    "change": -3.33,
    "mom": 54.1,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Distribution",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 69.9,
    "flow": 110,
    "perf": {
      "w1": -0.22,
      "m1": 19.53,
      "m3": 29.01
    },
    "returns": [
      -3.33,
      -1.25,
      -0.22,
      19.95,
      19.53,
      29.01
    ],
    "volumes": [
      112,
      160,
      118,
      300,
      96,
      54
    ],
    "rsiStack": [
      58.1,
      68.2,
      69.9,
      68.7,
      65.0,
      58.1
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 178.64,
    "change": -6.33,
    "mom": 56.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.8,
    "flow": 105,
    "perf": {
      "w1": -4.21,
      "m1": 22.14,
      "m3": 9.45
    },
    "returns": [
      -6.33,
      -4.55,
      -4.21,
      20.32,
      22.14,
      9.45
    ],
    "volumes": [
      92,
      106,
      241,
      213,
      93,
      288
    ],
    "rsiStack": [
      53.1,
      57.2,
      56.8,
      55.4,
      53.1,
      49.6
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 87.14,
    "change": -7.53,
    "mom": 56.3,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.9,
    "flow": 99,
    "perf": {
      "w1": -0.95,
      "m1": 39.18,
      "m3": -3.32
    },
    "returns": [
      -7.53,
      -5.3,
      -0.95,
      21.7,
      39.18,
      -3.32
    ],
    "volumes": [
      98,
      130,
      200,
      201,
      74,
      112
    ],
    "rsiStack": [
      53.7,
      60.9,
      60.9,
      58.4,
      55.4,
      55.2
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 127.31,
    "change": -7.34,
    "mom": 64.2,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 63.0,
    "flow": 123,
    "perf": {
      "w1": 6.76,
      "m1": 36.48,
      "m3": 0.6
    },
    "returns": [
      -7.34,
      0.38,
      6.76,
      36.83,
      36.48,
      0.6
    ],
    "volumes": [
      180,
      138,
      222,
      278,
      130,
      128
    ],
    "rsiStack": [
      61.7,
      64.7,
      63.0,
      59.7,
      54.8,
      47.9
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 62.68,
    "change": 0.63,
    "mom": 47.4,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.1,
    "flow": 79,
    "perf": {
      "w1": -1.51,
      "m1": 5.26,
      "m3": 6.76
    },
    "returns": [
      0.63,
      1.0,
      -1.51,
      1.24,
      5.26,
      6.76
    ],
    "volumes": [
      113,
      105,
      104,
      92,
      82,
      78
    ],
    "rsiStack": [
      55.6,
      60.7,
      62.1,
      61.3,
      58.7,
      53.3
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 185.69,
    "change": -1.55,
    "mom": 51.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.0,
    "flow": 94,
    "perf": {
      "w1": 1.3,
      "m1": 5.9,
      "m3": -5.37
    },
    "returns": [
      -1.55,
      2.17,
      1.3,
      -2.27,
      5.9,
      -5.37
    ],
    "volumes": [
      119,
      70,
      72,
      89,
      45,
      100
    ],
    "rsiStack": [
      54.4,
      53.4,
      53.0,
      52.8,
      52.6,
      50.9
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 42.73,
    "change": -1.04,
    "mom": 40.1,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.8,
    "flow": 103,
    "perf": {
      "w1": -0.09,
      "m1": -3.65,
      "m3": -2.24
    },
    "returns": [
      -1.04,
      -1.34,
      -0.09,
      -3.57,
      -3.65,
      -2.24
    ],
    "volumes": [
      81,
      65,
      107,
      79,
      85,
      117
    ],
    "rsiStack": [
      27.5,
      32.5,
      35.8,
      38.4,
      40.5,
      40.0
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 171.16,
    "change": -0.24,
    "mom": 37.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.1,
    "flow": 57,
    "perf": {
      "w1": -1.98,
      "m1": 5.3,
      "m3": 16.0
    },
    "returns": [
      -0.24,
      -2.36,
      -1.98,
      2.26,
      5.3,
      16.0
    ],
    "volumes": [
      81,
      58,
      103,
      173,
      56,
      99
    ],
    "rsiStack": [
      42.1,
      53.0,
      57.1,
      58.6,
      58.2,
      52.8
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 112.99,
    "change": 1.42,
    "mom": 55.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.3,
    "flow": 87,
    "perf": {
      "w1": 1.43,
      "m1": 4.39,
      "m3": 0.81
    },
    "returns": [
      1.42,
      -0.17,
      1.43,
      0.04,
      4.39,
      0.81
    ],
    "volumes": [
      101,
      56,
      99,
      61,
      53,
      77
    ],
    "rsiStack": [
      61.3,
      58.4,
      56.3,
      54.5,
      52.7,
      51.3
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 58.1,
    "change": 0.38,
    "mom": 44.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.5,
    "flow": 91,
    "perf": {
      "w1": 1.08,
      "m1": 2.04,
      "m3": 14.21
    },
    "returns": [
      0.38,
      -0.36,
      1.08,
      -0.1,
      2.04,
      14.21
    ],
    "volumes": [
      93,
      80,
      90,
      118,
      96,
      97
    ],
    "rsiStack": [
      56.6,
      57.0,
      58.5,
      59.7,
      60.2,
      59.1
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 44.48,
    "change": -0.4,
    "mom": 33.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.3,
    "flow": 75,
    "perf": {
      "w1": -1.33,
      "m1": -1.31,
      "m3": 2.23
    },
    "returns": [
      -0.4,
      -1.94,
      -1.33,
      -1.75,
      -1.31,
      2.23
    ],
    "volumes": [
      89,
      58,
      71,
      82,
      88,
      142
    ],
    "rsiStack": [
      27.9,
      38.5,
      43.3,
      46.0,
      47.8,
      47.0
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 177.14,
    "change": -0.93,
    "mom": 35.0,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 37.8,
    "flow": 135,
    "perf": {
      "w1": -1.73,
      "m1": -1.5,
      "m3": 1.78
    },
    "returns": [
      -0.93,
      -0.71,
      -1.73,
      -5.02,
      -1.5,
      1.78
    ],
    "volumes": [
      91,
      106,
      88,
      132,
      58,
      110
    ],
    "rsiStack": [
      24.7,
      31.5,
      37.8,
      42.2,
      44.6,
      40.7
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 53.18,
    "change": -0.09,
    "mom": 48.2,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.9,
    "flow": 127,
    "perf": {
      "w1": -0.67,
      "m1": 5.45,
      "m3": 3.0
    },
    "returns": [
      -0.09,
      -0.75,
      -0.67,
      1.22,
      5.45,
      3.0
    ],
    "volumes": [
      71,
      72,
      127,
      96,
      65,
      162
    ],
    "rsiStack": [
      52.4,
      56.8,
      56.9,
      55.8,
      52.6,
      42.8
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 117.21,
    "change": 1.15,
    "mom": 48.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.8,
    "flow": 80,
    "perf": {
      "w1": -0.69,
      "m1": 0.96,
      "m3": 0.41
    },
    "returns": [
      1.15,
      -0.63,
      -0.69,
      -0.84,
      0.96,
      0.41
    ],
    "volumes": [
      88,
      66,
      100,
      108,
      54,
      155
    ],
    "rsiStack": [
      49.1,
      49.9,
      50.8,
      50.9,
      50.3,
      47.1
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 85.45,
    "change": 0.43,
    "mom": 42.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.8,
    "flow": 76,
    "perf": {
      "w1": -0.63,
      "m1": 0.47,
      "m3": 4.0
    },
    "returns": [
      0.43,
      -1.24,
      -0.63,
      -0.74,
      0.47,
      4.0
    ],
    "volumes": [
      92,
      70,
      103,
      104,
      68,
      100
    ],
    "rsiStack": [
      43.9,
      48.0,
      49.8,
      50.5,
      50.0,
      45.4
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 508.62,
    "change": -3.2,
    "mom": 43.2,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.1,
    "flow": 111,
    "perf": {
      "w1": -2.2,
      "m1": 0.74,
      "m3": -17.39
    },
    "returns": [
      -3.2,
      -1.06,
      -2.2,
      -7.59,
      0.74,
      -17.39
    ],
    "volumes": [
      117,
      72,
      65,
      85,
      44,
      123
    ],
    "rsiStack": [
      35.9,
      40.4,
      43.1,
      45.0,
      46.5,
      45.2
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 29.19,
    "change": 1.28,
    "mom": 65.9,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Confirmed Accumulation",
    "signal": "STRONG BUY",
    "dist_streak": 0,
    "acc_streak": 3,
    "rsi": 72.8,
    "flow": 304,
    "perf": {
      "w1": 3.07,
      "m1": 6.11,
      "m3": 8.67
    },
    "returns": [
      1.28,
      3.22,
      3.07,
      5.11,
      6.11,
      8.67
    ],
    "volumes": [
      262,
      129,
      128,
      96,
      63,
      48
    ],
    "rsiStack": [
      90.1,
      80.0,
      72.8,
      68.1,
      64.0,
      61.2
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 46.58,
    "change": 1.35,
    "mom": 56.8,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 62.5,
    "flow": 57,
    "perf": {
      "w1": -0.3,
      "m1": 5.43,
      "m3": 3.24
    },
    "returns": [
      1.35,
      0.67,
      -0.3,
      4.6,
      5.43,
      3.24
    ],
    "volumes": [
      122,
      61,
      134,
      29,
      56,
      42
    ],
    "rsiStack": [
      66.5,
      65.0,
      62.5,
      60.0,
      55.8,
      46.1
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 43.86,
    "change": -0.64,
    "mom": 32.8,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.3,
    "flow": 38,
    "perf": {
      "w1": -2.02,
      "m1": -0.87,
      "m3": -1.15
    },
    "returns": [
      -0.64,
      -1.11,
      -2.02,
      -3.04,
      -0.87,
      -1.15
    ],
    "volumes": [
      20,
      27,
      46,
      4,
      37,
      10
    ],
    "rsiStack": [
      29.6,
      36.9,
      41.3,
      44.5,
      46.4,
      43.1
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 30.18,
    "change": 0.73,
    "mom": 57.3,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.5,
    "flow": 30,
    "perf": {
      "w1": -0.27,
      "m1": 3.7,
      "m3": 3.77
    },
    "returns": [
      0.73,
      -0.04,
      -0.27,
      3.38,
      3.7,
      3.77
    ],
    "volumes": [
      15,
      44,
      142,
      66,
      20,
      32
    ],
    "rsiStack": [
      67.1,
      64.4,
      61.5,
      58.8,
      53.4,
      39.6
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 107.85,
    "change": 0.55,
    "mom": 50.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.4,
    "flow": 79,
    "perf": {
      "w1": 0.72,
      "m1": 2.47,
      "m3": 12.47
    },
    "returns": [
      0.55,
      1.98,
      0.72,
      0.15,
      2.47,
      12.47
    ],
    "volumes": [
      99,
      75,
      72,
      89,
      46,
      161
    ],
    "rsiStack": [
      57.5,
      56.1,
      55.4,
      55.0,
      54.6,
      54.0
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 84.99,
    "change": 0.85,
    "mom": 55.5,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 65.3,
    "flow": 120,
    "perf": {
      "w1": -0.23,
      "m1": 4.0,
      "m3": 6.05
    },
    "returns": [
      0.85,
      0.05,
      -0.23,
      4.45,
      4.0,
      6.05
    ],
    "volumes": [
      185,
      148,
      316,
      88,
      130,
      174
    ],
    "rsiStack": [
      69.5,
      68.2,
      65.3,
      62.3,
      56.5,
      42.4
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 13.88,
    "change": -0.5,
    "mom": 46.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.1,
    "flow": 99,
    "perf": {
      "w1": -3.68,
      "m1": -5.45,
      "m3": -11.65
    },
    "returns": [
      -0.5,
      -0.5,
      -3.68,
      -3.41,
      -5.45,
      -11.65
    ],
    "volumes": [
      91,
      77,
      93,
      100,
      93,
      102
    ],
    "rsiStack": [
      41.6,
      44.6,
      46.1,
      47.1,
      46.8,
      40.4
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 86.27,
    "change": 0.1,
    "mom": 47.5,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 52.9,
    "flow": 129,
    "perf": {
      "w1": -1.89,
      "m1": -2.91,
      "m3": 5.59
    },
    "returns": [
      0.1,
      0.54,
      -1.89,
      -0.58,
      -2.91,
      5.59
    ],
    "volumes": [
      153,
      97,
      92,
      79,
      50,
      89
    ],
    "rsiStack": [
      49.7,
      51.0,
      52.9,
      53.9,
      54.0,
      52.3
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 28.24,
    "change": 0.84,
    "mom": 64.1,
    "phase": "Exhaustion",
    "volume": "Spike",
    "rotation": "Trending up",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 84.2,
    "flow": 138,
    "perf": {
      "w1": 4.58,
      "m1": 14.22,
      "m3": 16.1
    },
    "returns": [
      0.84,
      3.92,
      4.58,
      8.1,
      14.22,
      16.1
    ],
    "volumes": [
      72,
      35,
      184,
      89,
      100,
      175
    ],
    "rsiStack": [
      97.8,
      91.4,
      84.2,
      78.2,
      72.0,
      66.7
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 27.96,
    "change": -0.21,
    "mom": 48.6,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.4,
    "flow": 71,
    "perf": {
      "w1": -0.39,
      "m1": 11.8,
      "m3": 10.34
    },
    "returns": [
      -0.21,
      -2.14,
      -0.39,
      4.37,
      11.8,
      10.34
    ],
    "volumes": [
      80,
      81,
      90,
      147,
      59,
      114
    ],
    "rsiStack": [
      54.2,
      61.9,
      63.4,
      62.3,
      58.1,
      47.2
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 10.25,
    "change": 0.0,
    "mom": 56.1,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.7,
    "flow": 101,
    "perf": {
      "w1": 0.89,
      "m1": 9.63,
      "m3": -0.58
    },
    "returns": [
      0.0,
      -0.19,
      0.89,
      3.33,
      9.63,
      -0.58
    ],
    "volumes": [
      124,
      83,
      102,
      101,
      108,
      132
    ],
    "rsiStack": [
      60.6,
      63.5,
      61.7,
      58.3,
      53.0,
      44.1
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.97,
    "change": 1.13,
    "mom": 68.9,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 66.9,
    "flow": 111,
    "perf": {
      "w1": 3.7,
      "m1": 10.6,
      "m3": -2.39
    },
    "returns": [
      1.13,
      2.16,
      3.7,
      7.94,
      10.6,
      -2.39
    ],
    "volumes": [
      101,
      93,
      91,
      102,
      97,
      167
    ],
    "rsiStack": [
      84.2,
      75.0,
      66.9,
      60.3,
      52.7,
      42.6
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 232.75,
    "change": -3.12,
    "mom": 45.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.0,
    "flow": 83,
    "perf": {
      "w1": 0.95,
      "m1": 12.45,
      "m3": 8.46
    },
    "returns": [
      -3.12,
      2.75,
      0.95,
      -10.45,
      12.45,
      8.46
    ],
    "volumes": [
      96,
      55,
      54,
      94,
      68,
      106
    ],
    "rsiStack": [
      46.7,
      47.9,
      49.0,
      49.6,
      49.6,
      46.0
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 216.62,
    "change": -10.28,
    "mom": 44.1,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 47.2,
    "flow": 196,
    "perf": {
      "w1": -8.61,
      "m1": 15.49,
      "m3": -28.19
    },
    "returns": [
      -10.28,
      -9.88,
      -8.61,
      -2.43,
      15.49,
      -28.19
    ],
    "volumes": [
      173,
      90,
      106,
      190,
      66,
      108
    ],
    "rsiStack": [
      34.1,
      43.9,
      47.2,
      48.4,
      49.5,
      50.1
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 73.51,
    "chg": 0.62,
    "chgW": -2.34,
    "chgM": 6.43,
    "chgYTD": 19.1,
    "marketCap": "$35.1B",
    "pe": "14.9x",
    "evEbitda": "8.3x",
    "de": "0.5x",
    "drawdown": "-13.9%"
  },
  "MOS": {
    "price": 23.6,
    "chg": -0.67,
    "chgW": -3.32,
    "chgM": 6.69,
    "chgYTD": -2.03,
    "marketCap": "$7.5B",
    "pe": "14.7x",
    "evEbitda": "7.9x",
    "de": "0.5x",
    "drawdown": "-36.2%"
  },
  "CF": {
    "price": 125.79,
    "chg": 0.06,
    "chgW": -2.94,
    "chgM": 0.48,
    "chgYTD": 62.65,
    "marketCap": "$19.0B",
    "pe": "9.3x",
    "evEbitda": "6.0x",
    "de": "0.4x",
    "drawdown": "-11.4%"
  },
  "ICL": {
    "price": 5.6,
    "chg": -1.23,
    "chgW": -3.45,
    "chgM": 10.67,
    "chgYTD": -1.93,
    "marketCap": "–",
    "pe": "23.3x",
    "evEbitda": "7.4x",
    "de": "0.5x",
    "drawdown": "-19.7%"
  },
  "FMC": {
    "price": 11.33,
    "chg": 6.29,
    "chgW": 2.81,
    "chgM": 5.79,
    "chgYTD": -18.31,
    "marketCap": "$1.4B",
    "pe": "6.9x",
    "evEbitda": "19.6x",
    "de": "2.7x",
    "drawdown": "-71.4%"
  },
  "CTVA": {
    "price": 83.9,
    "chg": 1.82,
    "chgW": 2.58,
    "chgM": 6.59,
    "chgYTD": 25.17,
    "marketCap": "$56.0B",
    "pe": "50.8x",
    "evEbitda": "13.5x",
    "de": "0.2x",
    "drawdown": "-7.8%"
  },
  "ADM": {
    "price": 81.54,
    "chg": 3.08,
    "chgW": 1.54,
    "chgM": 2.86,
    "chgYTD": 41.83,
    "marketCap": "$39.3B",
    "pe": "22.3x",
    "evEbitda": "15.6x",
    "de": "0.4x",
    "drawdown": "-7.8%"
  },
  "BG": {
    "price": 115.48,
    "chg": 3.5,
    "chgW": 2.1,
    "chgM": 8.71,
    "chgYTD": 29.64,
    "marketCap": "$22.2B",
    "pe": "24.9x",
    "evEbitda": "12.5x",
    "de": "1.0x",
    "drawdown": "-14.4%"
  },
  "INGR": {
    "price": 104.62,
    "chg": 1.08,
    "chgW": -2.08,
    "chgM": 5.19,
    "chgYTD": -5.12,
    "marketCap": "$6.6B",
    "pe": "11.4x",
    "evEbitda": "6.4x",
    "de": "0.4x",
    "drawdown": "-19.8%"
  },
  "FPI": {
    "price": 10.25,
    "chg": 0.0,
    "chgW": 0.89,
    "chgM": 9.63,
    "chgYTD": 5.78,
    "marketCap": "$450M",
    "pe": "20.1x",
    "evEbitda": "24.7x",
    "de": "0.5x",
    "drawdown": "-22.5%"
  },
  "LAND": {
    "price": 8.97,
    "chg": 1.13,
    "chgW": 3.7,
    "chgM": 10.6,
    "chgYTD": -1.97,
    "marketCap": "$387M",
    "pe": "-29.4x",
    "evEbitda": "12.6x",
    "de": "0.7x",
    "drawdown": "-31.0%"
  },
  "DE": {
    "price": 630.33,
    "chg": 1.23,
    "chgW": -2.65,
    "chgM": 6.35,
    "chgYTD": 35.39,
    "marketCap": "$170.1B",
    "pe": "35.0x",
    "evEbitda": "23.5x",
    "de": "3.8x",
    "drawdown": "-6.5%"
  },
  "AGCO": {
    "price": 113.39,
    "chg": 2.25,
    "chgW": 6.16,
    "chgM": 10.99,
    "chgYTD": 8.69,
    "marketCap": "$7.9B",
    "pe": "15.7x",
    "evEbitda": "10.3x",
    "de": "0.7x",
    "drawdown": "-21.1%"
  },
  "CNH": {
    "price": 11.68,
    "chg": 2.19,
    "chgW": -1.6,
    "chgM": 13.95,
    "chgYTD": 26.68,
    "marketCap": "$18.8B",
    "pe": "46.7x",
    "evEbitda": "37.0x",
    "de": "3.4x",
    "drawdown": "-12.2%"
  },
  "XYL": {
    "price": 111.31,
    "chg": -1.19,
    "chgW": -1.86,
    "chgM": -4.84,
    "chgYTD": -18.26,
    "marketCap": "$26.0B",
    "pe": "26.5x",
    "evEbitda": "14.3x",
    "de": "0.3x",
    "drawdown": "-27.8%"
  },
  "VMI": {
    "price": 476.28,
    "chg": -0.88,
    "chgW": -1.97,
    "chgM": -1.13,
    "chgYTD": 18.38,
    "marketCap": "$9.2B",
    "pe": "18.6x",
    "evEbitda": "14.8x",
    "de": "0.5x",
    "drawdown": "-18.7%"
  },
  "LNN": {
    "price": 113.88,
    "chg": -0.33,
    "chgW": -1.97,
    "chgM": 2.76,
    "chgYTD": -3.39,
    "marketCap": "$1.2B",
    "pe": "21.9x",
    "evEbitda": "13.6x",
    "de": "0.3x",
    "drawdown": "-23.1%"
  },
  "MWA": {
    "price": 24.38,
    "chg": -1.38,
    "chgW": -2.25,
    "chgM": -3.41,
    "chgYTD": 2.35,
    "marketCap": "$3.8B",
    "pe": "17.2x",
    "evEbitda": "10.6x",
    "de": "0.4x",
    "drawdown": "-21.4%"
  },
  "WTS": {
    "price": 366.34,
    "chg": -1.62,
    "chgW": -2.46,
    "chgM": 5.94,
    "chgYTD": 32.72,
    "marketCap": "$12.2B",
    "pe": "32.1x",
    "evEbitda": "21.2x",
    "de": "0.1x",
    "drawdown": "-7.1%"
  },
  "TSN": {
    "price": 55.4,
    "chg": 0.09,
    "chgW": -5.27,
    "chgM": -4.42,
    "chgYTD": -5.49,
    "marketCap": "$19.5B",
    "pe": "34.2x",
    "evEbitda": "9.7x",
    "de": "0.4x",
    "drawdown": "-20.3%"
  },
  "PPC": {
    "price": 31.69,
    "chg": 1.86,
    "chgW": -1.74,
    "chgM": 15.83,
    "chgYTD": -18.72,
    "marketCap": "$7.5B",
    "pe": "13.8x",
    "evEbitda": "5.7x",
    "de": "0.8x",
    "drawdown": "-30.3%"
  },
  "HRL": {
    "price": 21.57,
    "chg": 1.36,
    "chgW": -9.67,
    "chgM": -13.75,
    "chgYTD": -8.99,
    "marketCap": "$11.9B",
    "pe": "34.8x",
    "evEbitda": "9.0x",
    "de": "0.0x",
    "drawdown": "-18.9%"
  },
  "CAG": {
    "price": 16.09,
    "chg": 0.44,
    "chgW": -2.07,
    "chgM": 10.89,
    "chgYTD": -7.05,
    "marketCap": "$7.7B",
    "pe": "10.4x",
    "evEbitda": "8.6x",
    "de": "1.2x",
    "drawdown": "-20.8%"
  },
  "CALM": {
    "price": 80.21,
    "chg": 0.58,
    "chgW": -3.13,
    "chgM": -8.62,
    "chgYTD": 0.8,
    "marketCap": "$3.7B",
    "pe": "12.1x",
    "evEbitda": "6.0x",
    "de": "–",
    "drawdown": "-31.2%"
  },
  "DBA": {
    "price": 29.19,
    "chg": 1.28,
    "chgW": 3.07,
    "chgM": 6.11,
    "chgYTD": 14.38,
    "marketCap": "–",
    "pe": "12.3x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-0.0%"
  },
  "MOO": {
    "price": 84.99,
    "chg": 0.85,
    "chgW": -0.23,
    "chgM": 4.0,
    "chgYTD": 16.76,
    "marketCap": "–",
    "pe": "19.4x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-1.8%"
  },
  "VEGI": {
    "price": 46.58,
    "chg": 1.35,
    "chgW": -0.3,
    "chgM": 5.43,
    "chgYTD": 20.77,
    "marketCap": "–",
    "pe": "21.9x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-1.5%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "61.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
