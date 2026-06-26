window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-06-26 23:42:45",
  "sections": {
    "Index": {
      "risk": "Neutral",
      "leader": "DJI",
      "watch": 1
    },
    "Commodity": {
      "risk": "Neutral",
      "leader": "MOS",
      "watch": 0
    },
    "Crypto": {
      "risk": "Risk Off",
      "leader": "BTC",
      "watch": 0
    },
    "ETF": {
      "risk": "Risk On",
      "leader": "XLV",
      "watch": 3
    },
    "Stock": {
      "risk": "Risk On",
      "leader": "MRVL",
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
    "price": 7354.02,
    "change": -0.05,
    "mom": 35.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.1,
    "flow": 99,
    "perf": {
      "w1": -1.95,
      "m1": -2.77,
      "m3": 12.64
    },
    "returns": [
      -0.05,
      -0.16,
      -1.95,
      -0.54,
      -2.77,
      12.64
    ],
    "volumes": [
      94,
      96,
      155,
      94,
      100,
      100
    ],
    "rsiStack": [
      35.1,
      41.7,
      46.1,
      49.5,
      52.2,
      53.0
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 51876.11,
    "change": -0.09,
    "mom": 49.3,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.1,
    "flow": 215,
    "perf": {
      "w1": 0.6,
      "m1": 2.38,
      "m3": 11.94
    },
    "returns": [
      -0.09,
      0.41,
      0.6,
      2.02,
      2.38,
      11.94
    ],
    "volumes": [
      111,
      97,
      175,
      83,
      94,
      100
    ],
    "rsiStack": [
      64.3,
      61.9,
      61.1,
      60.5,
      59.2,
      56.3
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
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.4,
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
      92,
      96,
      106,
      86,
      93
    ],
    "rsiStack": [
      60.0,
      59.1,
      59.4,
      60.0,
      60.9,
      62.7
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
    "rsi": 66.3,
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
      87,
      98,
      122,
      83,
      108,
      157
    ],
    "rsiStack": [
      68.5,
      67.1,
      66.3,
      65.5,
      64.2,
      61.6
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 373.63,
    "change": 1.13,
    "mom": 45.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.5,
    "flow": 64,
    "perf": {
      "w1": -3.48,
      "m1": -9.48,
      "m3": -13.17
    },
    "returns": [
      1.13,
      -0.98,
      -3.48,
      -3.28,
      -9.48,
      -13.17
    ],
    "volumes": [
      106,
      91,
      97,
      81,
      177,
      120
    ],
    "rsiStack": [
      37.3,
      35.2,
      35.5,
      36.7,
      38.9,
      42.3
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 53.28,
    "change": 1.76,
    "mom": 38.5,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 31.5,
    "flow": 65,
    "perf": {
      "w1": -10.47,
      "m1": -22.06,
      "m3": -21.81
    },
    "returns": [
      1.76,
      -4.4,
      -10.47,
      -12.4,
      -22.06,
      -21.81
    ],
    "volumes": [
      104,
      96,
      136,
      80,
      138,
      81
    ],
    "rsiStack": [
      26.6,
      28.2,
      31.5,
      35.1,
      40.2,
      49.1
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 43.59,
    "change": -0.75,
    "mom": 39.5,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 37.6,
    "flow": 52,
    "perf": {
      "w1": -8.77,
      "m1": -14.11,
      "m3": -9.99
    },
    "returns": [
      -0.75,
      -4.37,
      -8.77,
      -2.77,
      -14.11,
      -9.99
    ],
    "volumes": [
      68,
      81,
      93,
      66,
      112,
      92
    ],
    "rsiStack": [
      25.1,
      34.0,
      37.6,
      39.9,
      41.1,
      37.7
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 70.24,
    "change": -2.34,
    "mom": 38.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 27.9,
    "flow": 92,
    "perf": {
      "w1": -8.3,
      "m1": -20.99,
      "m3": -30.72
    },
    "returns": [
      -2.34,
      -4.06,
      -8.3,
      -19.92,
      -20.99,
      -30.72
    ],
    "volumes": [
      104,
      81,
      38,
      76,
      123,
      88
    ],
    "rsiStack": [
      18.9,
      22.2,
      27.9,
      33.4,
      39.4,
      46.4
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 105.7,
    "change": 0.2,
    "mom": 59.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.8,
    "flow": 85,
    "perf": {
      "w1": 2.69,
      "m1": -9.27,
      "m3": -18.59
    },
    "returns": [
      0.2,
      3.46,
      2.69,
      -0.81,
      -9.27,
      -18.59
    ],
    "volumes": [
      105,
      70,
      187,
      100,
      114,
      66
    ],
    "rsiStack": [
      52.8,
      42.4,
      40.8,
      42.0,
      44.4,
      46.7
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 34.59,
    "change": 1.95,
    "mom": 56.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.2,
    "flow": 71,
    "perf": {
      "w1": 0.29,
      "m1": -12.27,
      "m3": -19.13
    },
    "returns": [
      1.95,
      4.12,
      0.29,
      0.67,
      -12.27,
      -19.13
    ],
    "volumes": [
      60,
      87,
      106,
      182,
      72,
      60
    ],
    "rsiStack": [
      53.9,
      45.1,
      43.2,
      43.8,
      45.4,
      47.3
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 22.38,
    "change": 2.99,
    "mom": 58.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.8,
    "flow": 93,
    "perf": {
      "w1": -2.27,
      "m1": -6.98,
      "m3": -12.24
    },
    "returns": [
      2.99,
      5.32,
      -2.27,
      6.12,
      -6.98,
      -12.24
    ],
    "volumes": [
      93,
      89,
      259,
      89,
      150,
      113
    ],
    "rsiStack": [
      58.8,
      53.3,
      50.8,
      49.1,
      47.9,
      48.0
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 60.98,
    "change": 0.03,
    "mom": 41.2,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 29.1,
    "flow": 78,
    "perf": {
      "w1": -2.99,
      "m1": -12.45,
      "m3": -19.19
    },
    "returns": [
      0.03,
      -0.91,
      -2.99,
      -6.99,
      -12.45,
      -19.19
    ],
    "volumes": [
      53,
      105,
      135,
      112,
      186,
      72
    ],
    "rsiStack": [
      23.6,
      25.5,
      29.1,
      32.9,
      37.2,
      41.2
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 59962.0,
    "change": 0.4,
    "mom": 42.0,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 31.6,
    "flow": 141,
    "perf": {
      "w1": -5.18,
      "m1": -1.49,
      "m3": -22.5
    },
    "returns": [
      0.4,
      -4.32,
      -5.18,
      -8.6,
      -1.49,
      -22.5
    ],
    "volumes": [
      141,
      94,
      47,
      64,
      70,
      87
    ],
    "rsiStack": [
      23.8,
      29.5,
      31.6,
      33.4,
      36.3,
      40.5
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 149.06,
    "change": 4.59,
    "mom": 42.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.3,
    "flow": 117,
    "perf": {
      "w1": -8.7,
      "m1": -18.21,
      "m3": -14.63
    },
    "returns": [
      4.59,
      -5.77,
      -8.7,
      -7.09,
      -18.21,
      -14.63
    ],
    "volumes": [
      88,
      87,
      114,
      76,
      74,
      95
    ],
    "rsiStack": [
      36.0,
      36.7,
      38.3,
      40.1,
      41.9,
      42.4
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 73.57,
    "change": 6.92,
    "mom": 46.4,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.8,
    "flow": 108,
    "perf": {
      "w1": -8.3,
      "m1": -32.03,
      "m3": -22.89
    },
    "returns": [
      6.92,
      -2.79,
      -8.3,
      -10.96,
      -32.03,
      -22.89
    ],
    "volumes": [
      83,
      67,
      111,
      76,
      64,
      66
    ],
    "rsiStack": [
      39.9,
      35.8,
      36.8,
      39.1,
      42.0,
      44.5
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 82.31,
    "change": -3.54,
    "mom": 32.6,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution (Day 2)",
    "signal": "AVOID",
    "dist_streak": 2,
    "acc_streak": 0,
    "rsi": 23.6,
    "flow": 171,
    "perf": {
      "w1": -26.86,
      "m1": -45.72,
      "m3": -34.05
    },
    "returns": [
      -3.54,
      -20.73,
      -26.86,
      -31.49,
      -45.72,
      -34.05
    ],
    "volumes": [
      185,
      105,
      176,
      96,
      95,
      110
    ],
    "rsiStack": [
      9.4,
      17.5,
      23.6,
      28.6,
      33.9,
      39.0
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 53.84,
    "change": -0.46,
    "mom": 45.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 37.3,
    "flow": 52,
    "perf": {
      "w1": 0.13,
      "m1": -5.46,
      "m3": -12.11
    },
    "returns": [
      -0.46,
      -1.14,
      0.13,
      -5.74,
      -5.46,
      -12.11
    ],
    "volumes": [
      76,
      102,
      102,
      106,
      106,
      119
    ],
    "rsiStack": [
      33.4,
      34.3,
      37.3,
      40.1,
      43.8,
      49.5
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 181.11,
    "change": -1.87,
    "mom": 32.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.2,
    "flow": 87,
    "perf": {
      "w1": -5.4,
      "m1": -3.07,
      "m3": 36.28
    },
    "returns": [
      -1.87,
      -1.67,
      -5.4,
      -1.15,
      -3.07,
      36.28
    ],
    "volumes": [
      86,
      96,
      80,
      67,
      118,
      93
    ],
    "rsiStack": [
      35.4,
      43.3,
      48.2,
      51.6,
      54.3,
      55.5
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 46.2,
    "change": 0.76,
    "mom": 69.6,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 64.0,
    "flow": 86,
    "perf": {
      "w1": 3.22,
      "m1": 3.52,
      "m3": 0.68
    },
    "returns": [
      0.76,
      2.51,
      3.22,
      4.88,
      3.52,
      0.68
    ],
    "volumes": [
      89,
      104,
      177,
      82,
      92,
      93
    ],
    "rsiStack": [
      84.5,
      72.2,
      64.0,
      59.1,
      55.8,
      54.9
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 160.34,
    "change": 3.03,
    "mom": 71.7,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 71.3,
    "flow": 140,
    "perf": {
      "w1": 7.32,
      "m1": 6.27,
      "m3": 9.36
    },
    "returns": [
      3.03,
      5.36,
      7.32,
      4.06,
      6.27,
      9.36
    ],
    "volumes": [
      82,
      84,
      99,
      79,
      97,
      107
    ],
    "rsiStack": [
      86.2,
      76.9,
      71.3,
      67.2,
      62.7,
      57.7
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 106.18,
    "change": 0.57,
    "mom": 39.2,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Reflex Setup",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 28.8,
    "flow": 125,
    "perf": {
      "w1": -2.99,
      "m1": -8.99,
      "m3": -4.22
    },
    "returns": [
      0.57,
      -1.02,
      -2.99,
      -5.3,
      -8.99,
      -4.22
    ],
    "volumes": [
      74,
      115,
      176,
      130,
      106,
      91
    ],
    "rsiStack": [
      26.1,
      26.3,
      28.8,
      32.0,
      36.2,
      41.9
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 53.57,
    "change": 0.22,
    "mom": 46.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.3,
    "flow": 68,
    "perf": {
      "w1": 0.0,
      "m1": 4.49,
      "m3": 8.51
    },
    "returns": [
      0.22,
      -0.58,
      0.0,
      1.81,
      4.49,
      8.51
    ],
    "volumes": [
      82,
      85,
      97,
      98,
      111,
      116
    ],
    "rsiStack": [
      53.1,
      58.6,
      59.3,
      58.5,
      56.4,
      52.2
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 45.24,
    "change": 1.46,
    "mom": 55.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.8,
    "flow": 94,
    "perf": {
      "w1": 3.15,
      "m1": 1.87,
      "m3": 10.8
    },
    "returns": [
      1.46,
      1.34,
      3.15,
      0.71,
      1.87,
      10.8
    ],
    "volumes": [
      103,
      78,
      109,
      83,
      112,
      67
    ],
    "rsiStack": [
      70.4,
      61.9,
      58.8,
      57.5,
      56.9,
      57.3
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 181.2,
    "change": -1.59,
    "mom": 48.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.1,
    "flow": 105,
    "perf": {
      "w1": 0.16,
      "m1": 4.26,
      "m3": 12.04
    },
    "returns": [
      -1.59,
      1.71,
      0.16,
      3.45,
      4.26,
      12.04
    ],
    "volumes": [
      94,
      107,
      96,
      108,
      133,
      109
    ],
    "rsiStack": [
      55.6,
      58.0,
      58.1,
      57.5,
      56.5,
      54.7
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 51.6,
    "change": -0.46,
    "mom": 47.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.9,
    "flow": 72,
    "perf": {
      "w1": -0.41,
      "m1": 0.47,
      "m3": 3.26
    },
    "returns": [
      -0.46,
      1.44,
      -0.41,
      0.74,
      0.47,
      3.26
    ],
    "volumes": [
      75,
      82,
      96,
      67,
      101,
      98
    ],
    "rsiStack": [
      51.5,
      51.9,
      51.9,
      51.7,
      51.8,
      52.2
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 114.37,
    "change": 0.9,
    "mom": 43.6,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.6,
    "flow": 115,
    "perf": {
      "w1": -2.38,
      "m1": -6.3,
      "m3": 4.95
    },
    "returns": [
      0.9,
      0.54,
      -2.38,
      -1.66,
      -6.3,
      4.95
    ],
    "volumes": [
      93,
      118,
      115,
      78,
      108,
      91
    ],
    "rsiStack": [
      43.8,
      43.6,
      44.6,
      45.7,
      46.7,
      46.1
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 84.71,
    "change": 0.92,
    "mom": 53.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.6,
    "flow": 85,
    "perf": {
      "w1": 1.69,
      "m1": 0.33,
      "m3": 3.33
    },
    "returns": [
      0.92,
      1.18,
      1.69,
      -0.66,
      0.33,
      3.33
    ],
    "volumes": [
      93,
      116,
      82,
      75,
      143,
      56
    ],
    "rsiStack": [
      59.2,
      55.1,
      53.6,
      52.8,
      52.1,
      51.3
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 589.94,
    "change": -5.64,
    "mom": 31.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.2,
    "flow": 84,
    "perf": {
      "w1": -7.74,
      "m1": 3.59,
      "m3": 79.5
    },
    "returns": [
      -5.64,
      -2.23,
      -7.74,
      0.51,
      3.59,
      79.5
    ],
    "volumes": [
      112,
      112,
      88,
      100,
      113,
      81
    ],
    "rsiStack": [
      42.0,
      48.6,
      52.2,
      54.7,
      56.9,
      58.6
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 26.8,
    "change": -0.45,
    "mom": 56.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.6,
    "flow": 46,
    "perf": {
      "w1": 0.64,
      "m1": -2.83,
      "m3": -1.9
    },
    "returns": [
      -0.45,
      0.75,
      0.64,
      1.9,
      -2.83,
      -1.9
    ],
    "volumes": [
      101,
      128,
      83,
      63,
      73,
      37
    ],
    "rsiStack": [
      59.3,
      51.9,
      47.6,
      46.7,
      47.2,
      47.1
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 43.72,
    "change": -0.53,
    "mom": 57.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.3,
    "flow": 27,
    "perf": {
      "w1": 1.43,
      "m1": -1.18,
      "m3": -3.37
    },
    "returns": [
      -0.53,
      2.17,
      1.43,
      0.87,
      -1.18,
      -3.37
    ],
    "volumes": [
      29,
      112,
      111,
      62,
      81,
      55
    ],
    "rsiStack": [
      58.6,
      51.7,
      48.3,
      47.1,
      47.4,
      49.2
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 45.23,
    "change": -0.35,
    "mom": 47.8,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 58.4,
    "flow": 749,
    "perf": {
      "w1": 1.92,
      "m1": 0.93,
      "m3": 18.68
    },
    "returns": [
      -0.35,
      2.27,
      1.92,
      0.65,
      0.93,
      18.68
    ],
    "volumes": [
      205,
      48,
      71,
      52,
      535,
      10
    ],
    "rsiStack": [
      60.0,
      58.2,
      58.4,
      58.4,
      57.8,
      55.9
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 28.82,
    "change": 0.06,
    "mom": 60.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.4,
    "flow": 18,
    "perf": {
      "w1": 1.75,
      "m1": -1.68,
      "m3": -2.48
    },
    "returns": [
      0.06,
      2.77,
      1.75,
      1.5,
      -1.68,
      -2.48
    ],
    "volumes": [
      3,
      11,
      42,
      26,
      27,
      101
    ],
    "rsiStack": [
      68.0,
      57.2,
      51.4,
      49.0,
      48.7,
      50.9
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 104.6,
    "change": 1.4,
    "mom": 56.8,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.0,
    "flow": 206,
    "perf": {
      "w1": 3.92,
      "m1": 3.82,
      "m3": 16.75
    },
    "returns": [
      1.4,
      3.51,
      3.92,
      2.27,
      3.82,
      16.75
    ],
    "volumes": [
      88,
      75,
      129,
      83,
      128,
      84
    ],
    "rsiStack": [
      76.0,
      66.6,
      61.0,
      58.1,
      56.1,
      54.3
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 79.22,
    "change": -0.09,
    "mom": 67.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 51.8,
    "flow": 80,
    "perf": {
      "w1": 2.94,
      "m1": -1.34,
      "m3": -6.25
    },
    "returns": [
      -0.09,
      3.5,
      2.94,
      1.66,
      -1.34,
      -6.25
    ],
    "volumes": [
      288,
      81,
      119,
      59,
      45,
      46
    ],
    "rsiStack": [
      72.2,
      59.1,
      51.8,
      48.3,
      47.5,
      50.5
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 14.13,
    "change": 0.14,
    "mom": 45.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.7,
    "flow": 95,
    "perf": {
      "w1": 0.5,
      "m1": -15.14,
      "m3": 22.44
    },
    "returns": [
      0.14,
      0.93,
      0.5,
      -3.94,
      -15.14,
      22.44
    ],
    "volumes": [
      95,
      96,
      126,
      70,
      60,
      125
    ],
    "rsiStack": [
      44.5,
      44.0,
      47.7,
      50.0,
      51.4,
      51.3
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 78.1,
    "change": -0.55,
    "mom": 38.4,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.1,
    "flow": 90,
    "perf": {
      "w1": -1.5,
      "m1": -7.41,
      "m3": 4.83
    },
    "returns": [
      -0.55,
      -1.08,
      -1.5,
      -3.4,
      -7.41,
      4.83
    ],
    "volumes": [
      90,
      85,
      210,
      96,
      73,
      110
    ],
    "rsiStack": [
      30.0,
      39.2,
      44.1,
      46.7,
      48.0,
      46.9
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 23.84,
    "change": 0.13,
    "mom": 56.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.9,
    "flow": 22,
    "perf": {
      "w1": 0.0,
      "m1": -4.03,
      "m3": -5.99
    },
    "returns": [
      0.13,
      0.76,
      0.0,
      0.68,
      -4.03,
      -5.99
    ],
    "volumes": [
      49,
      77,
      30,
      38,
      91,
      49
    ],
    "rsiStack": [
      52.9,
      45.1,
      42.9,
      43.4,
      44.7,
      44.4
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 24.29,
    "change": 2.62,
    "mom": 41.8,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 35.7,
    "flow": 79,
    "perf": {
      "w1": -3.65,
      "m1": -7.08,
      "m3": -13.5
    },
    "returns": [
      2.62,
      -1.74,
      -3.65,
      -7.18,
      -7.08,
      -13.5
    ],
    "volumes": [
      128,
      196,
      317,
      96,
      135,
      73
    ],
    "rsiStack": [
      35.7,
      34.3,
      35.7,
      37.5,
      39.9,
      42.8
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.91,
    "change": 3.23,
    "mom": 58.5,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.6,
    "flow": 276,
    "perf": {
      "w1": 1.54,
      "m1": -4.8,
      "m3": -11.75
    },
    "returns": [
      3.23,
      0.81,
      1.54,
      0.2,
      -4.8,
      -11.75
    ],
    "volumes": [
      114,
      92,
      108,
      132,
      114,
      92
    ],
    "rsiStack": [
      58.6,
      49.3,
      44.6,
      42.4,
      42.1,
      44.1
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.61,
    "change": 1.29,
    "mom": 51.8,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.0,
    "flow": 265,
    "perf": {
      "w1": -0.58,
      "m1": -10.22,
      "m3": -15.59
    },
    "returns": [
      1.29,
      -1.6,
      -0.58,
      -4.33,
      -10.22,
      -15.59
    ],
    "volumes": [
      99,
      96,
      160,
      104,
      127,
      67
    ],
    "rsiStack": [
      41.1,
      36.7,
      36.0,
      36.7,
      39.7,
      48.2
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 238.0,
    "change": -11.2,
    "mom": 34.8,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.3,
    "flow": 326,
    "perf": {
      "w1": -12.45,
      "m1": 7.04,
      "m3": 153.54
    },
    "returns": [
      -11.2,
      -12.5,
      -12.45,
      -10.11,
      7.04,
      153.54
    ],
    "volumes": [
      81,
      103,
      95,
      77,
      137,
      80
    ],
    "rsiStack": [
      34.8,
      45.3,
      50.3,
      53.0,
      54.9,
      55.9
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 266.77,
    "change": -5.15,
    "mom": 30.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.6,
    "flow": 57,
    "perf": {
      "w1": -14.11,
      "m1": 30.24,
      "m3": 169.33
    },
    "returns": [
      -5.15,
      -4.4,
      -14.11,
      -4.97,
      30.24,
      169.33
    ],
    "volumes": [
      54,
      63,
      355,
      101,
      105,
      194
    ],
    "rsiStack": [
      37.1,
      47.6,
      52.6,
      55.5,
      58.0,
      60.2
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 60.98,
    "chg": 0.03,
    "chgW": -2.99,
    "chgM": -12.45,
    "chgYTD": -1.2,
    "marketCap": "$29.3B",
    "pe": "12.4x",
    "evEbitda": "7.6x",
    "de": "0.6x",
    "drawdown": "-28.6%"
  },
  "MOS": {
    "price": 22.38,
    "chg": 2.99,
    "chgW": -2.27,
    "chgM": -6.98,
    "chgYTD": -7.1,
    "marketCap": "$7.1B",
    "pe": "159.9x",
    "evEbitda": "6.3x",
    "de": "0.5x",
    "drawdown": "-41.5%"
  },
  "CF": {
    "price": 105.7,
    "chg": 0.2,
    "chgW": 2.69,
    "chgM": -9.27,
    "chgYTD": 36.67,
    "marketCap": "$16.2B",
    "pe": "9.5x",
    "evEbitda": "6.0x",
    "de": "0.4x",
    "drawdown": "-25.5%"
  },
  "ICL": {
    "price": 5.02,
    "chg": 0.8,
    "chgW": -2.33,
    "chgM": -25.63,
    "chgYTD": -12.08,
    "marketCap": "$6.5B",
    "pe": "23.9x",
    "evEbitda": "7.3x",
    "de": "0.5x",
    "drawdown": "-31.7%"
  },
  "FMC": {
    "price": 11.75,
    "chg": 3.8,
    "chgW": 1.73,
    "chgM": -13.41,
    "chgYTD": -15.28,
    "marketCap": "$1.5B",
    "pe": "5.3x",
    "evEbitda": "17.2x",
    "de": "2.5x",
    "drawdown": "-73.7%"
  },
  "CTVA": {
    "price": 82.62,
    "chg": 1.23,
    "chgW": 5.13,
    "chgM": 2.51,
    "chgYTD": 23.26,
    "marketCap": "$55.3B",
    "pe": "44.7x",
    "evEbitda": "13.6x",
    "de": "0.1x",
    "drawdown": "-3.5%"
  },
  "ADM": {
    "price": 76.79,
    "chg": 0.33,
    "chgW": 2.25,
    "chgM": -4.06,
    "chgYTD": 33.57,
    "marketCap": "$37.0B",
    "pe": "34.3x",
    "evEbitda": "18.6x",
    "de": "0.5x",
    "drawdown": "-10.1%"
  },
  "BG": {
    "price": 110.54,
    "chg": -0.91,
    "chgW": -1.81,
    "chgM": -10.64,
    "chgYTD": 24.09,
    "marketCap": "$21.4B",
    "pe": "29.1x",
    "evEbitda": "16.9x",
    "de": "0.9x",
    "drawdown": "-18.0%"
  },
  "INGR": {
    "price": 97.5,
    "chg": 0.7,
    "chgW": -0.44,
    "chgM": -5.53,
    "chgYTD": -11.57,
    "marketCap": "$6.1B",
    "pe": "9.4x",
    "evEbitda": "5.9x",
    "de": "0.4x",
    "drawdown": "-29.6%"
  },
  "FPI": {
    "price": 9.91,
    "chg": 3.23,
    "chgW": 1.54,
    "chgM": -4.8,
    "chgYTD": 2.27,
    "marketCap": "$440M",
    "pe": "16.8x",
    "evEbitda": "24.1x",
    "de": "0.5x",
    "drawdown": "-25.1%"
  },
  "LAND": {
    "price": 8.61,
    "chg": 1.29,
    "chgW": -0.58,
    "chgM": -10.22,
    "chgYTD": -5.9,
    "marketCap": "$371M",
    "pe": "-18.1x",
    "evEbitda": "12.3x",
    "de": "0.7x",
    "drawdown": "-33.8%"
  },
  "DE": {
    "price": 613.24,
    "chg": -2.78,
    "chgW": 4.07,
    "chgM": 13.77,
    "chgYTD": 31.72,
    "marketCap": "$165.5B",
    "pe": "34.7x",
    "evEbitda": "24.4x",
    "de": "3.8x",
    "drawdown": "-9.0%"
  },
  "AGCO": {
    "price": 117.35,
    "chg": -1.27,
    "chgW": 3.25,
    "chgM": 3.06,
    "chgYTD": 12.49,
    "marketCap": "$8.5B",
    "pe": "11.3x",
    "evEbitda": "10.6x",
    "de": "0.6x",
    "drawdown": "-18.4%"
  },
  "CNH": {
    "price": 11.03,
    "chg": 0.91,
    "chgW": 5.45,
    "chgM": 5.45,
    "chgYTD": 19.63,
    "marketCap": "$13.7B",
    "pe": "34.5x",
    "evEbitda": "35.6x",
    "de": "3.3x",
    "drawdown": "-22.7%"
  },
  "XYL": {
    "price": 116.45,
    "chg": -0.47,
    "chgW": 4.51,
    "chgM": 6.59,
    "chgYTD": -14.49,
    "marketCap": "$27.7B",
    "pe": "29.0x",
    "evEbitda": "15.3x",
    "de": "0.2x",
    "drawdown": "-24.5%"
  },
  "VMI": {
    "price": 568.75,
    "chg": -2.54,
    "chgW": -0.27,
    "chgM": 8.37,
    "chgYTD": 41.37,
    "marketCap": "$11.0B",
    "pe": "31.6x",
    "evEbitda": "18.5x",
    "de": "0.5x",
    "drawdown": "-2.9%"
  },
  "LNN": {
    "price": 124.85,
    "chg": -0.02,
    "chgW": 4.83,
    "chgM": 13.48,
    "chgYTD": 5.92,
    "marketCap": "$1.3B",
    "pe": "22.8x",
    "evEbitda": "14.1x",
    "de": "0.3x",
    "drawdown": "-16.5%"
  },
  "MWA": {
    "price": 26.7,
    "chg": -1.04,
    "chgW": 2.18,
    "chgM": 5.28,
    "chgYTD": 12.09,
    "marketCap": "$4.2B",
    "pe": "20.2x",
    "evEbitda": "12.5x",
    "de": "0.4x",
    "drawdown": "-13.9%"
  },
  "WTS": {
    "price": 359.26,
    "chg": -4.22,
    "chgW": 4.47,
    "chgM": 15.48,
    "chgYTD": 30.16,
    "marketCap": "$12.0B",
    "pe": "32.9x",
    "evEbitda": "22.3x",
    "de": "0.1x",
    "drawdown": "-4.4%"
  },
  "TSN": {
    "price": 58.55,
    "chg": 1.3,
    "chgW": 5.57,
    "chgM": -5.56,
    "chgYTD": -0.12,
    "marketCap": "$20.6B",
    "pe": "46.1x",
    "evEbitda": "10.3x",
    "de": "0.4x",
    "drawdown": "-15.7%"
  },
  "PPC": {
    "price": 28.61,
    "chg": 6.87,
    "chgW": 4.72,
    "chgM": 0.25,
    "chgYTD": -26.62,
    "marketCap": "$6.8B",
    "pe": "7.7x",
    "evEbitda": "4.5x",
    "de": "0.9x",
    "drawdown": "-43.4%"
  },
  "HRL": {
    "price": 26.51,
    "chg": 1.88,
    "chgW": 9.73,
    "chgM": 12.38,
    "chgYTD": 11.86,
    "marketCap": "$14.6B",
    "pe": "31.2x",
    "evEbitda": "11.2x",
    "de": "0.0x",
    "drawdown": "-16.8%"
  },
  "CAG": {
    "price": 14.08,
    "chg": 2.18,
    "chgW": 6.67,
    "chgM": 5.23,
    "chgYTD": -18.66,
    "marketCap": "$6.7B",
    "pe": "8.9x",
    "evEbitda": "8.1x",
    "de": "0.9x",
    "drawdown": "-34.1%"
  },
  "CALM": {
    "price": 80.23,
    "chg": 2.54,
    "chgW": 3.22,
    "chgM": 4.89,
    "chgYTD": 0.83,
    "marketCap": "$3.8B",
    "pe": "5.6x",
    "evEbitda": "2.7x",
    "de": "–",
    "drawdown": "-36.5%"
  },
  "DBA": {
    "price": 26.8,
    "chg": -0.45,
    "chgW": 0.64,
    "chgM": -2.83,
    "chgYTD": 5.02,
    "marketCap": "–",
    "pe": "11.3x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-7.1%"
  },
  "MOO": {
    "price": 79.22,
    "chg": -0.09,
    "chgW": 2.94,
    "chgM": -1.34,
    "chgYTD": 8.83,
    "marketCap": "–",
    "pe": "20.2x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-8.5%"
  },
  "VEGI": {
    "price": 43.72,
    "chg": -0.53,
    "chgW": 1.43,
    "chgM": -1.18,
    "chgYTD": 13.35,
    "marketCap": "–",
    "pe": "21.5x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-7.5%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "48.5x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
