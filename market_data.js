window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-07-09 23:45:47",
  "sections": {
    "Index": {
      "risk": "Strong OFF",
      "leader": "DJI",
      "watch": 0
    },
    "Commodity": {
      "risk": "Risk On",
      "leader": "CF",
      "watch": 0
    },
    "Crypto": {
      "risk": "Neutral",
      "leader": "COIN",
      "watch": 0
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "XLF",
      "watch": 1
    },
    "Stock": {
      "risk": "Risk On",
      "leader": "CRDO",
      "watch": 0
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
    "price": 7543.64,
    "change": 0.81,
    "mom": 52.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.9,
    "flow": 48,
    "perf": {
      "w1": 0.81,
      "m1": 2.13,
      "m3": 9.55
    },
    "returns": [
      0.81,
      0.08,
      0.81,
      2.52,
      2.13,
      9.55
    ],
    "volumes": [
      86,
      84,
      97,
      97,
      101,
      106
    ],
    "rsiStack": [
      67.2,
      60.5,
      57.9,
      57.4,
      57.2,
      55.7
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 52487.41,
    "change": 0.27,
    "mom": 40.9,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.5,
    "flow": 79,
    "perf": {
      "w1": 0.35,
      "m1": 3.18,
      "m3": 8.85
    },
    "returns": [
      0.27,
      -1.07,
      0.35,
      1.23,
      3.18,
      8.85
    ],
    "volumes": [
      77,
      78,
      103,
      97,
      99,
      104
    ],
    "rsiStack": [
      52.3,
      58.8,
      60.5,
      60.6,
      58.8,
      52.1
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 7246.79,
    "change": -5.35,
    "mom": 27.8,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.9,
    "flow": 108,
    "perf": {
      "w1": -12.73,
      "m1": -6.26,
      "m3": 25.42
    },
    "returns": [
      -5.35,
      -10.4,
      -12.73,
      -14.45,
      -6.26,
      25.42
    ],
    "volumes": [
      112,
      101,
      103,
      0,
      80,
      75
    ],
    "rsiStack": [
      23.5,
      32.6,
      38.9,
      43.3,
      47.5,
      51.6
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
    "rsi": 45.9,
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
      103,
      83,
      103,
      97,
      87,
      96
    ],
    "rsiStack": [
      27.1,
      39.1,
      45.9,
      50.0,
      54.1,
      61.0
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 378.18,
    "change": 1.0,
    "mom": 62.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.7,
    "flow": 57,
    "perf": {
      "w1": 2.05,
      "m1": -3.22,
      "m3": -13.13
    },
    "returns": [
      1.0,
      -1.03,
      2.05,
      3.35,
      -3.22,
      -13.13
    ],
    "volumes": [
      92,
      45,
      105,
      60,
      150,
      151
    ],
    "rsiStack": [
      54.5,
      47.4,
      43.7,
      42.3,
      42.1,
      42.9
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 54.14,
    "change": 2.48,
    "mom": 55.5,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.3,
    "flow": 52,
    "perf": {
      "w1": 1.05,
      "m1": -8.25,
      "m3": -20.71
    },
    "returns": [
      2.48,
      -3.51,
      1.05,
      4.56,
      -8.25,
      -20.71
    ],
    "volumes": [
      89,
      57,
      68,
      61,
      222,
      152
    ],
    "rsiStack": [
      46.6,
      41.1,
      39.3,
      39.7,
      41.7,
      46.5
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 42.35,
    "change": 1.66,
    "mom": 46.8,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 37.6,
    "flow": 70,
    "perf": {
      "w1": -1.92,
      "m1": -4.01,
      "m3": -18.84
    },
    "returns": [
      1.66,
      -3.49,
      -1.92,
      -5.3,
      -4.01,
      -18.84
    ],
    "volumes": [
      66,
      43,
      95,
      63,
      64,
      157
    ],
    "rsiStack": [
      36.9,
      35.9,
      37.6,
      39.4,
      41.1,
      40.8
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 71.87,
    "change": -2.24,
    "mom": 59.5,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.4,
    "flow": 1,
    "perf": {
      "w1": 4.8,
      "m1": -18.51,
      "m3": -27.46
    },
    "returns": [
      -2.24,
      4.84,
      4.8,
      2.18,
      -18.51,
      -27.46
    ],
    "volumes": [
      117,
      102,
      87,
      72,
      103,
      123
    ],
    "rsiStack": [
      53.0,
      42.0,
      38.4,
      39.1,
      41.9,
      46.0
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 114.02,
    "change": -2.56,
    "mom": 63.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 55.6,
    "flow": 82,
    "perf": {
      "w1": 5.42,
      "m1": 5.01,
      "m3": -6.3
    },
    "returns": [
      -2.56,
      0.72,
      5.42,
      10.6,
      5.01,
      -6.3
    ],
    "volumes": [
      131,
      107,
      89,
      78,
      97,
      154
    ],
    "rsiStack": [
      64.0,
      61.4,
      55.6,
      52.3,
      51.5,
      54.6
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 34.21,
    "change": -1.7,
    "mom": 55.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.0,
    "flow": 37,
    "perf": {
      "w1": 2.09,
      "m1": -1.13,
      "m3": -9.88
    },
    "returns": [
      -1.7,
      0.12,
      2.09,
      2.21,
      -1.13,
      -9.88
    ],
    "volumes": [
      85,
      46,
      158,
      171,
      117,
      137
    ],
    "rsiStack": [
      49.5,
      47.1,
      45.0,
      44.8,
      46.0,
      49.0
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 20.75,
    "change": 0.48,
    "mom": 47.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.7,
    "flow": 59,
    "perf": {
      "w1": -2.58,
      "m1": -2.49,
      "m3": -15.44
    },
    "returns": [
      0.48,
      -2.03,
      -2.58,
      -0.53,
      -2.49,
      -15.44
    ],
    "volumes": [
      74,
      71,
      98,
      76,
      97,
      97
    ],
    "rsiStack": [
      33.0,
      39.3,
      41.7,
      42.8,
      44.3,
      48.5
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 64.57,
    "change": -3.28,
    "mom": 60.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.4,
    "flow": 59,
    "perf": {
      "w1": 1.57,
      "m1": -2.68,
      "m3": -13.19
    },
    "returns": [
      -3.28,
      0.05,
      1.57,
      6.96,
      -2.68,
      -13.19
    ],
    "volumes": [
      98,
      87,
      73,
      164,
      147,
      117
    ],
    "rsiStack": [
      51.5,
      50.6,
      47.4,
      45.8,
      46.8,
      54.0
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 63225.1,
    "change": 1.55,
    "mom": 60.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.3,
    "flow": 93,
    "perf": {
      "w1": 0.22,
      "m1": -0.5,
      "m3": -23.03
    },
    "returns": [
      1.55,
      -1.2,
      0.22,
      5.13,
      -0.5,
      -23.03
    ],
    "volumes": [
      96,
      128,
      65,
      141,
      114,
      64
    ],
    "rsiStack": [
      59.3,
      55.3,
      50.3,
      46.9,
      44.9,
      44.3
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 158.44,
    "change": -0.58,
    "mom": 52.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.3,
    "flow": 60,
    "perf": {
      "w1": -0.5,
      "m1": 1.89,
      "m3": -9.22
    },
    "returns": [
      -0.58,
      -6.18,
      -0.5,
      5.55,
      1.89,
      -9.22
    ],
    "volumes": [
      59,
      74,
      135,
      81,
      113,
      92
    ],
    "rsiStack": [
      47.1,
      47.6,
      46.3,
      45.9,
      47.1,
      52.6
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 63.01,
    "change": -1.65,
    "mom": 48.0,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 34.8,
    "flow": 70,
    "perf": {
      "w1": 1.71,
      "m1": -22.31,
      "m3": -36.15
    },
    "returns": [
      -1.65,
      -8.22,
      1.71,
      -11.23,
      -22.31,
      -36.15
    ],
    "volumes": [
      64,
      91,
      173,
      73,
      87,
      88
    ],
    "rsiStack": [
      33.3,
      33.6,
      34.8,
      37.0,
      40.1,
      43.9
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 93.89,
    "change": 0.02,
    "mom": 51.1,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 37.2,
    "flow": 50,
    "perf": {
      "w1": 0.54,
      "m1": -19.77,
      "m3": -29.06
    },
    "returns": [
      0.02,
      -6.83,
      0.54,
      -0.25,
      -19.77,
      -29.06
    ],
    "volumes": [
      64,
      94,
      122,
      165,
      175,
      126
    ],
    "rsiStack": [
      41.4,
      38.6,
      37.2,
      38.0,
      41.3,
      50.5
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 54.82,
    "change": -1.4,
    "mom": 59.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.9,
    "flow": 63,
    "perf": {
      "w1": 3.81,
      "m1": -4.48,
      "m3": -4.01
    },
    "returns": [
      -1.4,
      3.18,
      3.81,
      2.33,
      -4.48,
      -4.01
    ],
    "volumes": [
      113,
      73,
      97,
      71,
      113,
      122
    ],
    "rsiStack": [
      59.1,
      51.8,
      47.9,
      46.8,
      47.9,
      53.1
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 185.35,
    "change": 2.18,
    "mom": 45.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.2,
    "flow": 61,
    "perf": {
      "w1": -0.15,
      "m1": 2.53,
      "m3": 27.29
    },
    "returns": [
      2.18,
      0.97,
      -0.15,
      1.26,
      2.53,
      27.29
    ],
    "volumes": [
      76,
      61,
      67,
      78,
      81,
      201
    ],
    "rsiStack": [
      55.8,
      52.1,
      52.2,
      53.4,
      54.9,
      55.8
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 45.13,
    "change": -0.51,
    "mom": 47.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.1,
    "flow": 95,
    "perf": {
      "w1": 0.8,
      "m1": 2.61,
      "m3": -2.72
    },
    "returns": [
      -0.51,
      -0.38,
      0.8,
      -0.9,
      2.61,
      -2.72
    ],
    "volumes": [
      72,
      91,
      141,
      83,
      87,
      94
    ],
    "rsiStack": [
      43.2,
      48.6,
      50.1,
      50.3,
      50.7,
      53.4
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 162.17,
    "change": -0.08,
    "mom": 53.6,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.9,
    "flow": 85,
    "perf": {
      "w1": 1.65,
      "m1": 4.92,
      "m3": 9.6
    },
    "returns": [
      -0.08,
      0.13,
      1.65,
      5.75,
      4.92,
      9.6
    ],
    "volumes": [
      81,
      135,
      87,
      110,
      88,
      118
    ],
    "rsiStack": [
      59.6,
      63.6,
      63.9,
      62.9,
      60.4,
      55.5
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 110.51,
    "change": 0.96,
    "mom": 59.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.4,
    "flow": 82,
    "perf": {
      "w1": 0.7,
      "m1": -0.87,
      "m3": -3.75
    },
    "returns": [
      0.96,
      0.27,
      0.7,
      3.73,
      -0.87,
      -3.75
    ],
    "volumes": [
      70,
      111,
      186,
      88,
      127,
      120
    ],
    "rsiStack": [
      61.3,
      55.0,
      50.4,
      47.9,
      46.2,
      43.3
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 55.54,
    "change": 1.04,
    "mom": 52.5,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 64.7,
    "flow": 72,
    "perf": {
      "w1": 1.39,
      "m1": 5.87,
      "m3": 7.51
    },
    "returns": [
      1.04,
      -1.07,
      1.39,
      3.39,
      5.87,
      7.51
    ],
    "volumes": [
      114,
      86,
      124,
      83,
      78,
      112
    ],
    "rsiStack": [
      61.9,
      64.7,
      64.7,
      63.4,
      58.9,
      46.5
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 44.23,
    "change": 0.18,
    "mom": 44.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.3,
    "flow": 51,
    "perf": {
      "w1": 0.11,
      "m1": -1.65,
      "m3": 2.81
    },
    "returns": [
      0.18,
      -0.14,
      0.11,
      -0.63,
      -1.65,
      2.81
    ],
    "volumes": [
      69,
      121,
      141,
      94,
      96,
      113
    ],
    "rsiStack": [
      44.2,
      46.6,
      48.3,
      49.6,
      51.5,
      55.8
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 181.11,
    "change": 0.38,
    "mom": 39.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.1,
    "flow": 65,
    "perf": {
      "w1": -1.23,
      "m1": 3.14,
      "m3": 4.85
    },
    "returns": [
      0.38,
      -2.4,
      -1.23,
      0.5,
      3.14,
      4.85
    ],
    "volumes": [
      88,
      81,
      97,
      93,
      85,
      122
    ],
    "rsiStack": [
      43.1,
      50.2,
      53.1,
      54.3,
      54.9,
      56.5
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 50.26,
    "change": 0.2,
    "mom": 38.4,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.1,
    "flow": 82,
    "perf": {
      "w1": -1.49,
      "m1": -1.0,
      "m3": -3.7
    },
    "returns": [
      0.2,
      -3.31,
      -1.49,
      -1.76,
      -1.0,
      -3.7
    ],
    "volumes": [
      108,
      165,
      121,
      100,
      97,
      110
    ],
    "rsiStack": [
      31.4,
      39.1,
      43.1,
      45.3,
      47.4,
      50.6
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 116.85,
    "change": 1.34,
    "mom": 49.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 50.6,
    "flow": 96,
    "perf": {
      "w1": -1.05,
      "m1": 0.85,
      "m3": 2.57
    },
    "returns": [
      1.34,
      -0.98,
      -1.05,
      1.55,
      0.85,
      2.57
    ],
    "volumes": [
      173,
      111,
      128,
      134,
      104,
      105
    ],
    "rsiStack": [
      52.1,
      51.3,
      50.6,
      50.3,
      50.0,
      48.5
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 83.2,
    "change": -1.41,
    "mom": 40.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.0,
    "flow": 88,
    "perf": {
      "w1": -0.12,
      "m1": -1.07,
      "m3": 2.02
    },
    "returns": [
      -1.41,
      -1.07,
      -0.12,
      -1.47,
      -1.07,
      2.02
    ],
    "volumes": [
      87,
      104,
      97,
      77,
      87,
      101
    ],
    "rsiStack": [
      37.9,
      43.6,
      46.0,
      47.4,
      49.4,
      54.8
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 581.7,
    "change": 3.5,
    "mom": 38.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.3,
    "flow": 89,
    "perf": {
      "w1": -3.0,
      "m1": 3.48,
      "m3": 47.89
    },
    "returns": [
      3.5,
      0.03,
      -3.0,
      -3.29,
      3.48,
      47.89
    ],
    "volumes": [
      63,
      69,
      83,
      94,
      82,
      232
    ],
    "rsiStack": [
      49.2,
      48.5,
      50.3,
      52.1,
      54.2,
      56.7
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 27.71,
    "change": 0.33,
    "mom": 64.2,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 64.6,
    "flow": 57,
    "perf": {
      "w1": 3.16,
      "m1": 5.44,
      "m3": 2.9
    },
    "returns": [
      0.33,
      0.62,
      3.16,
      4.33,
      5.44,
      2.9
    ],
    "volumes": [
      64,
      105,
      40,
      173,
      62,
      51
    ],
    "rsiStack": [
      82.2,
      72.4,
      64.6,
      59.9,
      56.6,
      53.7
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 43.64,
    "change": -0.98,
    "mom": 48.2,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.3,
    "flow": 174,
    "perf": {
      "w1": -0.82,
      "m1": 0.14,
      "m3": -6.05
    },
    "returns": [
      -0.98,
      -2.91,
      -0.82,
      1.21,
      0.14,
      -6.05
    ],
    "volumes": [
      25,
      78,
      42,
      41,
      34,
      130
    ],
    "rsiStack": [
      38.7,
      45.1,
      46.3,
      46.6,
      47.8,
      52.5
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 45.17,
    "change": 1.48,
    "mom": 44.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.0,
    "flow": 20,
    "perf": {
      "w1": -0.73,
      "m1": 0.61,
      "m3": 13.96
    },
    "returns": [
      1.48,
      -0.84,
      -0.73,
      1.23,
      0.61,
      13.96
    ],
    "volumes": [
      39,
      51,
      87,
      41,
      305,
      56
    ],
    "rsiStack": [
      53.0,
      53.5,
      55.0,
      55.9,
      55.9,
      54.0
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 28.96,
    "change": -0.8,
    "mom": 52.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.9,
    "flow": 6,
    "perf": {
      "w1": 0.33,
      "m1": 2.79,
      "m3": -5.53
    },
    "returns": [
      -0.8,
      -2.08,
      0.33,
      2.43,
      2.79,
      -5.53
    ],
    "volumes": [
      12,
      84,
      2,
      47,
      72,
      19
    ],
    "rsiStack": [
      45.5,
      51.2,
      50.9,
      49.9,
      49.7,
      51.7
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 106.41,
    "change": 2.45,
    "mom": 56.5,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.0,
    "flow": 90,
    "perf": {
      "w1": 2.92,
      "m1": 9.24,
      "m3": 9.16
    },
    "returns": [
      2.45,
      4.21,
      2.92,
      2.78,
      9.24,
      9.16
    ],
    "volumes": [
      89,
      92,
      92,
      83,
      89,
      133
    ],
    "rsiStack": [
      72.8,
      66.1,
      62.0,
      59.4,
      57.7,
      57.9
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 80.36,
    "change": -0.63,
    "mom": 60.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.6,
    "flow": 61,
    "perf": {
      "w1": 1.73,
      "m1": 3.2,
      "m3": -5.78
    },
    "returns": [
      -0.63,
      -1.33,
      1.73,
      4.15,
      3.2,
      -5.78
    ],
    "volumes": [
      93,
      67,
      44,
      38,
      84,
      74
    ],
    "rsiStack": [
      56.7,
      58.9,
      55.6,
      52.6,
      50.7,
      51.8
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 13.61,
    "change": 0.81,
    "mom": 47.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.9,
    "flow": 66,
    "perf": {
      "w1": -0.22,
      "m1": -8.96,
      "m3": 11.92
    },
    "returns": [
      0.81,
      -1.59,
      -0.22,
      -1.66,
      -8.96,
      11.92
    ],
    "volumes": [
      83,
      101,
      82,
      81,
      78,
      58
    ],
    "rsiStack": [
      42.8,
      41.1,
      43.9,
      46.6,
      48.6,
      49.0
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 76.65,
    "change": 0.54,
    "mom": 48.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.6,
    "flow": 36,
    "perf": {
      "w1": 1.5,
      "m1": -8.49,
      "m3": -0.23
    },
    "returns": [
      0.54,
      -1.54,
      1.5,
      -2.91,
      -8.49,
      -0.23
    ],
    "volumes": [
      59,
      100,
      84,
      77,
      99,
      111
    ],
    "rsiStack": [
      44.4,
      42.0,
      43.6,
      45.5,
      47.3,
      49.2
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 24.62,
    "change": 0.37,
    "mom": 60.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.8,
    "flow": 28,
    "perf": {
      "w1": 2.12,
      "m1": 3.36,
      "m3": 3.01
    },
    "returns": [
      0.37,
      -0.4,
      2.12,
      4.63,
      3.36,
      3.01
    ],
    "volumes": [
      71,
      158,
      93,
      33,
      61,
      19
    ],
    "rsiStack": [
      68.9,
      63.5,
      57.8,
      54.4,
      52.1,
      49.6
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 24.25,
    "change": 0.83,
    "mom": 60.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.3,
    "flow": 56,
    "perf": {
      "w1": 1.55,
      "m1": -5.64,
      "m3": -11.3
    },
    "returns": [
      0.83,
      2.23,
      1.55,
      0.87,
      -5.64,
      -11.3
    ],
    "volumes": [
      74,
      114,
      101,
      102,
      174,
      107
    ],
    "rsiStack": [
      52.0,
      44.7,
      42.3,
      41.7,
      42.0,
      42.2
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.48,
    "change": -1.15,
    "mom": 47.4,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.6,
    "flow": 66,
    "perf": {
      "w1": -1.86,
      "m1": -7.69,
      "m3": -18.91
    },
    "returns": [
      -1.15,
      -0.42,
      -1.86,
      -2.47,
      -7.69,
      -18.91
    ],
    "volumes": [
      88,
      95,
      70,
      138,
      126,
      107
    ],
    "rsiStack": [
      30.5,
      34.6,
      35.6,
      36.3,
      37.8,
      41.2
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.56,
    "change": 0.82,
    "mom": 58.4,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.6,
    "flow": 47,
    "perf": {
      "w1": -0.81,
      "m1": -7.36,
      "m3": -17.85
    },
    "returns": [
      0.82,
      0.12,
      -0.81,
      -0.47,
      -7.36,
      -17.85
    ],
    "volumes": [
      99,
      73,
      98,
      117,
      123,
      70
    ],
    "rsiStack": [
      45.9,
      40.7,
      38.6,
      38.2,
      39.7,
      44.7
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 265.65,
    "change": 2.69,
    "mom": 44.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.1,
    "flow": 67,
    "perf": {
      "w1": 2.53,
      "m1": 13.37,
      "m3": 97.72
    },
    "returns": [
      2.69,
      0.04,
      2.53,
      -1.24,
      13.37,
      97.72
    ],
    "volumes": [
      54,
      67,
      70,
      85,
      67,
      179
    ],
    "rsiStack": [
      56.3,
      54.6,
      55.1,
      55.9,
      56.9,
      58.7
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 243.27,
    "change": 4.99,
    "mom": 36.4,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.0,
    "flow": 41,
    "perf": {
      "w1": -10.58,
      "m1": -8.85,
      "m3": 85.28
    },
    "returns": [
      4.99,
      -2.41,
      -10.58,
      -12.08,
      -8.85,
      85.28
    ],
    "volumes": [
      46,
      42,
      50,
      44,
      49,
      183
    ],
    "rsiStack": [
      40.5,
      42.9,
      47.0,
      50.0,
      52.9,
      55.5
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 64.57,
    "chg": -3.28,
    "chgW": 1.57,
    "chgM": -2.68,
    "chgYTD": 4.62,
    "marketCap": "$31.0B",
    "pe": "13.2x",
    "evEbitda": "7.9x",
    "de": "0.6x",
    "drawdown": "-24.4%"
  },
  "MOS": {
    "price": 20.75,
    "chg": 0.48,
    "chgW": -2.58,
    "chgM": -2.49,
    "chgYTD": -13.86,
    "marketCap": "$6.6B",
    "pe": "148.2x",
    "evEbitda": "6.1x",
    "de": "0.5x",
    "drawdown": "-44.7%"
  },
  "CF": {
    "price": 114.02,
    "chg": -2.56,
    "chgW": 5.42,
    "chgM": 5.01,
    "chgYTD": 47.43,
    "marketCap": "$17.5B",
    "pe": "10.3x",
    "evEbitda": "6.4x",
    "de": "0.4x",
    "drawdown": "-19.7%"
  },
  "ICL": {
    "price": 4.85,
    "chg": -4.34,
    "chgW": -3.58,
    "chgM": -13.24,
    "chgYTD": -15.06,
    "marketCap": "$6.3B",
    "pe": "23.1x",
    "evEbitda": "7.4x",
    "de": "0.5x",
    "drawdown": "-32.5%"
  },
  "FMC": {
    "price": 10.89,
    "chg": -0.46,
    "chgW": -0.55,
    "chgM": -5.3,
    "chgYTD": -21.49,
    "marketCap": "$1.4B",
    "pe": "5.2x",
    "evEbitda": "17.0x",
    "de": "2.5x",
    "drawdown": "-75.3%"
  },
  "CTVA": {
    "price": 83.86,
    "chg": -1.55,
    "chgW": 0.38,
    "chgM": 11.8,
    "chgYTD": 25.11,
    "marketCap": "$56.1B",
    "pe": "45.3x",
    "evEbitda": "13.9x",
    "de": "0.1x",
    "drawdown": "-4.4%"
  },
  "ADM": {
    "price": 78.98,
    "chg": -1.63,
    "chgW": 3.09,
    "chgM": -1.42,
    "chgYTD": 37.38,
    "marketCap": "$38.1B",
    "pe": "35.3x",
    "evEbitda": "19.3x",
    "de": "0.5x",
    "drawdown": "-7.5%"
  },
  "BG": {
    "price": 113.62,
    "chg": -1.4,
    "chgW": 8.32,
    "chgM": -10.31,
    "chgYTD": 27.55,
    "marketCap": "$22.0B",
    "pe": "29.9x",
    "evEbitda": "17.0x",
    "de": "0.9x",
    "drawdown": "-15.8%"
  },
  "INGR": {
    "price": 97.49,
    "chg": -0.48,
    "chgW": 1.96,
    "chgM": -4.08,
    "chgYTD": -11.58,
    "marketCap": "$6.1B",
    "pe": "9.4x",
    "evEbitda": "6.0x",
    "de": "0.4x",
    "drawdown": "-29.1%"
  },
  "FPI": {
    "price": 9.48,
    "chg": -1.15,
    "chgW": -1.86,
    "chgM": -7.69,
    "chgYTD": -2.17,
    "marketCap": "$421M",
    "pe": "16.1x",
    "evEbitda": "24.1x",
    "de": "0.5x",
    "drawdown": "-28.3%"
  },
  "LAND": {
    "price": 8.56,
    "chg": 0.82,
    "chgW": -0.81,
    "chgM": -7.36,
    "chgYTD": -6.45,
    "marketCap": "$369M",
    "pe": "-18.0x",
    "evEbitda": "12.4x",
    "de": "0.7x",
    "drawdown": "-34.2%"
  },
  "DE": {
    "price": 592.9,
    "chg": -0.64,
    "chgW": -5.53,
    "chgM": 2.7,
    "chgYTD": 27.35,
    "marketCap": "$160.0B",
    "pe": "33.6x",
    "evEbitda": "23.2x",
    "de": "3.8x",
    "drawdown": "-12.1%"
  },
  "AGCO": {
    "price": 113.26,
    "chg": -0.41,
    "chgW": -2.81,
    "chgM": 0.11,
    "chgYTD": 8.57,
    "marketCap": "$8.2B",
    "pe": "10.9x",
    "evEbitda": "10.2x",
    "de": "0.6x",
    "drawdown": "-21.2%"
  },
  "CNH": {
    "price": 10.28,
    "chg": 0.1,
    "chgW": -5.86,
    "chgM": -4.28,
    "chgYTD": 11.5,
    "marketCap": "$12.7B",
    "pe": "32.1x",
    "evEbitda": "34.9x",
    "de": "3.3x",
    "drawdown": "-28.0%"
  },
  "XYL": {
    "price": 118.89,
    "chg": 0.23,
    "chgW": 1.38,
    "chgM": 7.23,
    "chgYTD": -12.7,
    "marketCap": "$28.3B",
    "pe": "29.6x",
    "evEbitda": "15.6x",
    "de": "0.2x",
    "drawdown": "-22.9%"
  },
  "VMI": {
    "price": 546.73,
    "chg": 1.16,
    "chgW": -2.2,
    "chgM": 2.49,
    "chgYTD": 35.89,
    "marketCap": "$10.6B",
    "pe": "30.4x",
    "evEbitda": "17.6x",
    "de": "0.5x",
    "drawdown": "-6.7%"
  },
  "LNN": {
    "price": 111.18,
    "chg": 0.03,
    "chgW": -8.17,
    "chgM": -2.94,
    "chgYTD": -5.68,
    "marketCap": "$1.1B",
    "pe": "21.3x",
    "evEbitda": "13.2x",
    "de": "0.3x",
    "drawdown": "-24.9%"
  },
  "MWA": {
    "price": 24.91,
    "chg": 0.65,
    "chgW": -0.8,
    "chgM": -4.63,
    "chgYTD": 4.58,
    "marketCap": "$3.9B",
    "pe": "18.9x",
    "evEbitda": "11.5x",
    "de": "0.4x",
    "drawdown": "-19.6%"
  },
  "WTS": {
    "price": 348.0,
    "chg": -0.01,
    "chgW": -8.71,
    "chgM": 8.81,
    "chgYTD": 26.08,
    "marketCap": "$11.6B",
    "pe": "31.8x",
    "evEbitda": "20.7x",
    "de": "0.1x",
    "drawdown": "-11.8%"
  },
  "TSN": {
    "price": 57.71,
    "chg": -1.01,
    "chgW": -1.23,
    "chgM": 2.2,
    "chgYTD": -1.55,
    "marketCap": "$20.3B",
    "pe": "45.4x",
    "evEbitda": "10.3x",
    "de": "0.4x",
    "drawdown": "-16.9%"
  },
  "PPC": {
    "price": 27.41,
    "chg": 0.04,
    "chgW": -3.99,
    "chgM": -7.83,
    "chgYTD": -29.7,
    "marketCap": "$6.5B",
    "pe": "7.3x",
    "evEbitda": "4.6x",
    "de": "0.9x",
    "drawdown": "-45.8%"
  },
  "HRL": {
    "price": 24.33,
    "chg": -0.86,
    "chgW": -2.21,
    "chgM": 1.46,
    "chgYTD": 2.66,
    "marketCap": "$13.4B",
    "pe": "28.6x",
    "evEbitda": "10.5x",
    "de": "0.0x",
    "drawdown": "-23.6%"
  },
  "CAG": {
    "price": 13.37,
    "chg": -2.9,
    "chgW": -6.5,
    "chgM": 1.75,
    "chgYTD": -22.76,
    "marketCap": "$6.4B",
    "pe": "8.5x",
    "evEbitda": "8.0x",
    "de": "0.9x",
    "drawdown": "-34.2%"
  },
  "CALM": {
    "price": 85.35,
    "chg": 0.32,
    "chgW": 6.09,
    "chgM": 9.86,
    "chgYTD": 7.26,
    "marketCap": "$4.0B",
    "pe": "5.9x",
    "evEbitda": "3.0x",
    "de": "–",
    "drawdown": "-32.5%"
  },
  "DBA": {
    "price": 27.71,
    "chg": 0.33,
    "chgW": 3.16,
    "chgM": 5.44,
    "chgYTD": 8.58,
    "marketCap": "–",
    "pe": "11.7x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-3.9%"
  },
  "MOO": {
    "price": 80.36,
    "chg": -0.63,
    "chgW": 1.73,
    "chgM": 3.2,
    "chgYTD": 10.4,
    "marketCap": "–",
    "pe": "18.2x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-7.2%"
  },
  "VEGI": {
    "price": 43.64,
    "chg": -0.98,
    "chgW": -0.82,
    "chgM": 0.14,
    "chgYTD": 13.14,
    "marketCap": "–",
    "pe": "20.4x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-7.7%"
  },
  "USAG": {},
  "COCO.L": {
    "price": 9.98,
    "chg": 6.2,
    "chgW": 20.28,
    "chgM": 58.75,
    "chgYTD": -4.59,
    "marketCap": "–",
    "pe": "61.0x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-36.2%"
  }
};
