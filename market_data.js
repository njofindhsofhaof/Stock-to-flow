window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-07-14 23:24:39",
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
      "risk": "Neutral",
      "leader": "BTC",
      "watch": 1
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "XLF",
      "watch": 2
    },
    "Stock": {
      "risk": "Risk Off",
      "leader": "TAGS",
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
    "price": 7543.59,
    "change": 0.38,
    "mom": 48.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.5,
    "flow": 50,
    "perf": {
      "w1": 0.53,
      "m1": 1.51,
      "m3": 7.13
    },
    "returns": [
      0.38,
      -0.0,
      0.53,
      1.39,
      1.51,
      7.13
    ],
    "volumes": [
      83,
      76,
      86,
      92,
      97,
      88
    ],
    "rsiStack": [
      59.0,
      57.6,
      56.5,
      56.5,
      56.7,
      56.4
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 52508.27,
    "change": 0.02,
    "mom": 39.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.9,
    "flow": 82,
    "perf": {
      "w1": -0.79,
      "m1": 2.55,
      "m3": 8.09
    },
    "returns": [
      0.02,
      0.04,
      -0.79,
      0.62,
      2.55,
      8.09
    ],
    "volumes": [
      70,
      78,
      75,
      91,
      97,
      79
    ],
    "rsiStack": [
      51.4,
      57.8,
      59.9,
      60.3,
      59.5,
      56.8
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 6806.93,
    "change": -8.95,
    "mom": 28.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.8,
    "flow": 102,
    "perf": {
      "w1": -15.46,
      "m1": -20.35,
      "m3": 14.06
    },
    "returns": [
      -8.95,
      -6.07,
      -15.46,
      -18.91,
      -20.35,
      14.06
    ],
    "volumes": [
      97,
      108,
      98,
      110,
      0,
      93
    ],
    "rsiStack": [
      22.1,
      29.7,
      35.8,
      40.4,
      45.0,
      50.2
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
    "rsi": 47.4,
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
      86,
      84,
      107,
      96,
      97,
      88
    ],
    "rsiStack": [
      37.1,
      42.8,
      47.4,
      50.5,
      52.9,
      53.7
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 372.15,
    "change": 1.37,
    "mom": 55.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.4,
    "flow": 78,
    "perf": {
      "w1": -1.41,
      "m1": -3.72,
      "m3": -15.44
    },
    "returns": [
      1.37,
      -1.59,
      -1.41,
      0.97,
      -3.72,
      -15.44
    ],
    "volumes": [
      96,
      59,
      57,
      87,
      60,
      103
    ],
    "rsiStack": [
      44.5,
      42.9,
      41.4,
      40.7,
      40.8,
      41.2
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 53.17,
    "change": 1.94,
    "mom": 52.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.7,
    "flow": 66,
    "perf": {
      "w1": -2.37,
      "m1": -13.25,
      "m3": -25.36
    },
    "returns": [
      1.94,
      -1.79,
      -2.37,
      0.93,
      -13.25,
      -25.36
    ],
    "volumes": [
      88,
      55,
      64,
      71,
      61,
      96
    ],
    "rsiStack": [
      43.5,
      40.1,
      38.7,
      39.0,
      39.5,
      37.8
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 41.55,
    "change": 2.04,
    "mom": 49.0,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.1,
    "flow": 64,
    "perf": {
      "w1": -0.48,
      "m1": -8.72,
      "m3": -24.82
    },
    "returns": [
      2.04,
      -1.89,
      -0.48,
      -5.42,
      -8.72,
      -24.82
    ],
    "volumes": [
      94,
      74,
      111,
      107,
      63,
      73
    ],
    "rsiStack": [
      39.2,
      37.4,
      38.1,
      39.6,
      42.7,
      49.5
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 79.93,
    "change": 2.29,
    "mom": 69.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.1,
    "flow": 1,
    "perf": {
      "w1": 13.47,
      "m1": -5.83,
      "m3": -15.59
    },
    "returns": [
      2.29,
      10.89,
      13.47,
      12.98,
      -5.83,
      -15.59
    ],
    "volumes": [
      98,
      113,
      117,
      81,
      72,
      90
    ],
    "rsiStack": [
      80.3,
      64.5,
      54.1,
      49.4,
      47.2,
      44.5
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 119.19,
    "change": -1.43,
    "mom": 63.5,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.6,
    "flow": 64,
    "perf": {
      "w1": 3.7,
      "m1": 8.87,
      "m3": -4.43
    },
    "returns": [
      -1.43,
      4.53,
      3.7,
      13.08,
      8.87,
      -4.43
    ],
    "volumes": [
      88,
      83,
      112,
      67,
      78,
      90
    ],
    "rsiStack": [
      69.9,
      67.5,
      61.6,
      57.0,
      54.1,
      53.3
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 35.71,
    "change": 0.22,
    "mom": 61.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.9,
    "flow": 62,
    "perf": {
      "w1": 1.82,
      "m1": -1.22,
      "m3": -9.09
    },
    "returns": [
      0.22,
      4.38,
      1.82,
      6.85,
      -1.22,
      -9.09
    ],
    "volumes": [
      110,
      43,
      80,
      49,
      171,
      96
    ],
    "rsiStack": [
      71.2,
      59.7,
      52.9,
      49.6,
      47.6,
      43.9
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 22.94,
    "change": 2.82,
    "mom": 68.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.9,
    "flow": 84,
    "perf": {
      "w1": 8.62,
      "m1": 1.1,
      "m3": -7.24
    },
    "returns": [
      2.82,
      10.55,
      8.62,
      2.23,
      1.1,
      -7.24
    ],
    "volumes": [
      84,
      60,
      71,
      83,
      76,
      163
    ],
    "rsiStack": [
      78.9,
      64.9,
      57.9,
      53.8,
      49.0,
      40.3
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 68.64,
    "change": 1.54,
    "mom": 70.5,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.4,
    "flow": 68,
    "perf": {
      "w1": 5.08,
      "m1": 1.51,
      "m3": -7.9
    },
    "returns": [
      1.54,
      6.3,
      5.08,
      12.19,
      1.51,
      -7.9
    ],
    "volumes": [
      65,
      72,
      98,
      87,
      164,
      100
    ],
    "rsiStack": [
      76.6,
      67.9,
      60.4,
      55.2,
      50.6,
      44.5
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 64852.64,
    "change": 4.2,
    "mom": 61.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Day 1)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 55.9,
    "flow": 105,
    "perf": {
      "w1": 2.63,
      "m1": 6.32,
      "m3": -17.98
    },
    "returns": [
      4.2,
      1.65,
      2.63,
      2.8,
      6.32,
      -17.98
    ],
    "volumes": [
      130,
      48,
      93,
      109,
      65,
      140
    ],
    "rsiStack": [
      65.8,
      61.1,
      55.9,
      51.7,
      48.2,
      44.8
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 161.5,
    "change": 2.62,
    "mom": 55.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.0,
    "flow": 95,
    "perf": {
      "w1": -1.23,
      "m1": 1.08,
      "m3": -19.18
    },
    "returns": [
      2.62,
      1.93,
      -1.23,
      6.5,
      1.08,
      -19.18
    ],
    "volumes": [
      70,
      61,
      59,
      108,
      81,
      73
    ],
    "rsiStack": [
      57.0,
      52.0,
      49.0,
      47.5,
      47.1,
      48.0
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 63.22,
    "change": 0.35,
    "mom": 46.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.7,
    "flow": 105,
    "perf": {
      "w1": -2.96,
      "m1": -18.78,
      "m3": -41.17
    },
    "returns": [
      0.35,
      0.33,
      -2.96,
      -16.77,
      -18.78,
      -41.17
    ],
    "volumes": [
      87,
      71,
      62,
      124,
      73,
      93
    ],
    "rsiStack": [
      38.7,
      36.9,
      36.7,
      38.2,
      41.1,
      46.0
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 97.58,
    "change": 5.95,
    "mom": 55.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.6,
    "flow": 65,
    "perf": {
      "w1": 0.23,
      "m1": -21.29,
      "m3": -34.48
    },
    "returns": [
      5.95,
      3.93,
      0.23,
      5.29,
      -21.29,
      -34.48
    ],
    "volumes": [
      47,
      51,
      65,
      119,
      165,
      90
    ],
    "rsiStack": [
      56.4,
      46.0,
      41.6,
      40.7,
      41.7,
      45.2
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 56.95,
    "change": 0.37,
    "mom": 66.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 58.7,
    "flow": 98,
    "perf": {
      "w1": 4.23,
      "m1": -1.04,
      "m3": 0.65
    },
    "returns": [
      0.37,
      3.89,
      4.23,
      6.29,
      -1.04,
      0.65
    ],
    "volumes": [
      124,
      64,
      122,
      85,
      71,
      82
    ],
    "rsiStack": [
      79.1,
      66.8,
      58.7,
      54.6,
      52.5,
      52.7
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 183.62,
    "change": 1.29,
    "mom": 44.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.4,
    "flow": 56,
    "perf": {
      "w1": 2.48,
      "m1": -0.64,
      "m3": 20.79
    },
    "returns": [
      1.29,
      -0.93,
      2.48,
      -0.97,
      -0.64,
      20.79
    ],
    "volumes": [
      75,
      61,
      87,
      95,
      78,
      96
    ],
    "rsiStack": [
      50.4,
      49.5,
      50.4,
      52.0,
      53.9,
      55.7
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 45.69,
    "change": -0.07,
    "mom": 53.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.9,
    "flow": 85,
    "perf": {
      "w1": -0.02,
      "m1": 2.6,
      "m3": -1.42
    },
    "returns": [
      -0.07,
      1.24,
      -0.02,
      -0.72,
      2.6,
      -1.42
    ],
    "volumes": [
      77,
      95,
      90,
      115,
      83,
      86
    ],
    "rsiStack": [
      58.3,
      56.2,
      54.9,
      53.6,
      51.9,
      49.1
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 158.29,
    "change": -1.93,
    "mom": 34.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.1,
    "flow": 101,
    "perf": {
      "w1": -3.74,
      "m1": 2.91,
      "m3": 7.97
    },
    "returns": [
      -1.93,
      -2.39,
      -3.74,
      -1.52,
      2.91,
      7.97
    ],
    "volumes": [
      63,
      85,
      106,
      124,
      110,
      83
    ],
    "rsiStack": [
      35.1,
      47.9,
      53.1,
      54.9,
      54.6,
      50.3
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 111.45,
    "change": -0.13,
    "mom": 61.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.5,
    "flow": 60,
    "perf": {
      "w1": 0.39,
      "m1": -0.18,
      "m3": -6.21
    },
    "returns": [
      -0.13,
      0.85,
      0.39,
      3.31,
      -0.18,
      -6.21
    ],
    "volumes": [
      74,
      82,
      98,
      106,
      88,
      129
    ],
    "rsiStack": [
      66.0,
      58.9,
      53.5,
      50.4,
      47.7,
      42.9
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 56.18,
    "change": 0.2,
    "mom": 58.1,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 68.5,
    "flow": 124,
    "perf": {
      "w1": 0.23,
      "m1": 5.32,
      "m3": 7.98
    },
    "returns": [
      0.2,
      1.15,
      0.23,
      4.58,
      5.32,
      7.98
    ],
    "volumes": [
      95,
      74,
      74,
      120,
      83,
      135
    ],
    "rsiStack": [
      71.9,
      70.2,
      68.5,
      66.5,
      63.8,
      60.5
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 44.48,
    "change": -0.49,
    "mom": 46.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.4,
    "flow": 72,
    "perf": {
      "w1": -0.91,
      "m1": -1.94,
      "m3": 1.53
    },
    "returns": [
      -0.49,
      0.57,
      -0.91,
      -0.98,
      -1.94,
      1.53
    ],
    "volumes": [
      77,
      53,
      84,
      96,
      94,
      82
    ],
    "rsiStack": [
      49.8,
      50.0,
      50.4,
      51.2,
      52.9,
      58.2
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 180.45,
    "change": 0.04,
    "mom": 37.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.4,
    "flow": 90,
    "perf": {
      "w1": -1.06,
      "m1": 2.42,
      "m3": 5.94
    },
    "returns": [
      0.04,
      -0.36,
      -1.06,
      -1.26,
      2.42,
      5.94
    ],
    "volumes": [
      72,
      66,
      93,
      79,
      93,
      84
    ],
    "rsiStack": [
      40.1,
      47.8,
      51.4,
      53.0,
      54.2,
      56.5
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 50.64,
    "change": 0.12,
    "mom": 46.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.3,
    "flow": 74,
    "perf": {
      "w1": -1.69,
      "m1": -2.95,
      "m3": -2.14
    },
    "returns": [
      0.12,
      0.76,
      -1.69,
      -0.04,
      -2.95,
      -2.14
    ],
    "volumes": [
      76,
      87,
      101,
      106,
      100,
      121
    ],
    "rsiStack": [
      43.1,
      44.7,
      46.3,
      47.4,
      48.0,
      46.9
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 115.9,
    "change": -0.12,
    "mom": 44.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.7,
    "flow": 77,
    "perf": {
      "w1": -1.27,
      "m1": -0.6,
      "m3": -1.47
    },
    "returns": [
      -0.12,
      -0.81,
      -1.27,
      -1.04,
      -0.6,
      -1.47
    ],
    "volumes": [
      71,
      98,
      112,
      137,
      134,
      94
    ],
    "rsiStack": [
      42.5,
      46.6,
      47.7,
      48.3,
      48.6,
      47.5
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 83.42,
    "change": -1.38,
    "mom": 41.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.1,
    "flow": 65,
    "perf": {
      "w1": -1.7,
      "m1": -2.8,
      "m3": 2.44
    },
    "returns": [
      -1.38,
      0.26,
      -1.7,
      -1.13,
      -2.8,
      2.44
    ],
    "volumes": [
      69,
      90,
      106,
      132,
      77,
      74
    ],
    "rsiStack": [
      41.5,
      45.4,
      47.1,
      48.0,
      48.5,
      47.7
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 567.92,
    "change": 2.58,
    "mom": 39.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.3,
    "flow": 73,
    "perf": {
      "w1": 2.94,
      "m1": -4.75,
      "m3": 39.9
    },
    "returns": [
      2.58,
      -2.37,
      2.94,
      -7.56,
      -4.75,
      39.9
    ],
    "volumes": [
      83,
      93,
      104,
      129,
      94,
      89
    ],
    "rsiStack": [
      45.3,
      46.1,
      48.3,
      50.4,
      52.9,
      56.1
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 27.63,
    "change": -0.32,
    "mom": 56.3,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.4,
    "flow": 53,
    "perf": {
      "w1": 0.29,
      "m1": 5.3,
      "m3": 1.92
    },
    "returns": [
      -0.32,
      -0.29,
      0.29,
      4.22,
      5.3,
      1.92
    ],
    "volumes": [
      105,
      57,
      107,
      31,
      173,
      59
    ],
    "rsiStack": [
      66.3,
      66.0,
      61.4,
      58.0,
      55.8,
      55.2
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 44.3,
    "change": 0.33,
    "mom": 57.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 53.3,
    "flow": 53,
    "perf": {
      "w1": 0.36,
      "m1": 0.81,
      "m3": -2.84
    },
    "returns": [
      0.33,
      1.51,
      0.36,
      0.74,
      0.81,
      -2.84
    ],
    "volumes": [
      178,
      177,
      94,
      165,
      41,
      46
    ],
    "rsiStack": [
      59.4,
      56.0,
      53.3,
      51.3,
      49.6,
      47.0
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 44.91,
    "change": -0.11,
    "mom": 40.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.2,
    "flow": 27,
    "perf": {
      "w1": 0.05,
      "m1": -0.87,
      "m3": 11.05
    },
    "returns": [
      -0.11,
      -0.58,
      0.05,
      -1.32,
      -0.87,
      11.05
    ],
    "volumes": [
      24,
      21,
      26,
      14,
      41,
      35
    ],
    "rsiStack": [
      44.6,
      49.2,
      52.2,
      53.9,
      54.4,
      51.7
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.3,
    "change": 0.36,
    "mom": 60.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.6,
    "flow": 25,
    "perf": {
      "w1": 0.26,
      "m1": 2.25,
      "m3": -3.0
    },
    "returns": [
      0.36,
      1.16,
      0.26,
      2.25,
      2.25,
      -3.0
    ],
    "volumes": [
      98,
      6,
      9,
      9,
      47,
      8
    ],
    "rsiStack": [
      63.6,
      60.1,
      56.6,
      53.9,
      51.3,
      47.6
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 106.17,
    "change": -1.09,
    "mom": 52.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.3,
    "flow": 68,
    "perf": {
      "w1": 2.47,
      "m1": 3.04,
      "m3": 7.94
    },
    "returns": [
      -1.09,
      -0.23,
      2.47,
      2.03,
      3.04,
      7.94
    ],
    "volumes": [
      86,
      91,
      70,
      99,
      83,
      67
    ],
    "rsiStack": [
      60.7,
      61.0,
      59.3,
      57.8,
      56.2,
      54.1
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 81.51,
    "change": 0.04,
    "mom": 63.6,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.0,
    "flow": 42,
    "perf": {
      "w1": 0.74,
      "m1": 3.72,
      "m3": -2.73
    },
    "returns": [
      0.04,
      1.43,
      0.74,
      3.11,
      3.72,
      -2.73
    ],
    "volumes": [
      87,
      61,
      111,
      109,
      38,
      62
    ],
    "rsiStack": [
      73.2,
      67.9,
      62.0,
      57.4,
      53.3,
      49.6
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 13.94,
    "change": 0.65,
    "mom": 52.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.1,
    "flow": 74,
    "perf": {
      "w1": 2.8,
      "m1": -6.06,
      "m3": 12.06
    },
    "returns": [
      0.65,
      2.42,
      2.8,
      -0.57,
      -6.06,
      12.06
    ],
    "volumes": [
      97,
      78,
      83,
      91,
      81,
      58
    ],
    "rsiStack": [
      57.7,
      50.4,
      49.1,
      49.7,
      50.1,
      47.8
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 76.87,
    "change": 0.2,
    "mom": 50.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.1,
    "flow": 31,
    "perf": {
      "w1": 1.1,
      "m1": -5.68,
      "m3": -1.51
    },
    "returns": [
      0.2,
      0.29,
      1.1,
      -0.61,
      -5.68,
      -1.51
    ],
    "volumes": [
      40,
      49,
      86,
      67,
      77,
      61
    ],
    "rsiStack": [
      47.1,
      44.6,
      45.1,
      46.3,
      47.5,
      48.0
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 24.9,
    "change": 0.17,
    "mom": 61.7,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.3,
    "flow": 13,
    "perf": {
      "w1": 0.62,
      "m1": 5.43,
      "m3": 3.21
    },
    "returns": [
      0.17,
      1.15,
      0.62,
      5.26,
      5.43,
      3.21
    ],
    "volumes": [
      114,
      28,
      79,
      138,
      33,
      64
    ],
    "rsiStack": [
      78.0,
      69.6,
      62.3,
      57.9,
      56.0,
      59.3
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 24.25,
    "change": -0.94,
    "mom": 56.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.3,
    "flow": 50,
    "perf": {
      "w1": 0.75,
      "m1": -7.48,
      "m3": -10.91
    },
    "returns": [
      -0.94,
      0.0,
      0.75,
      -0.49,
      -7.48,
      -10.91
    ],
    "volumes": [
      84,
      57,
      85,
      106,
      102,
      113
    ],
    "rsiStack": [
      49.9,
      45.6,
      43.3,
      42.5,
      42.2,
      40.7
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.66,
    "change": 0.62,
    "mom": 61.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.5,
    "flow": 59,
    "perf": {
      "w1": 0.84,
      "m1": -3.21,
      "m3": -16.29
    },
    "returns": [
      0.62,
      1.9,
      0.84,
      -1.13,
      -3.21,
      -16.29
    ],
    "volumes": [
      84,
      91,
      97,
      64,
      138,
      100
    ],
    "rsiStack": [
      56.1,
      47.4,
      43.5,
      41.7,
      42.0,
      47.0
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.66,
    "change": 0.7,
    "mom": 72.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.9,
    "flow": 66,
    "perf": {
      "w1": 1.17,
      "m1": -3.35,
      "m3": -16.09
    },
    "returns": [
      0.7,
      1.17,
      1.17,
      0.58,
      -3.35,
      -16.09
    ],
    "volumes": [
      74,
      47,
      95,
      70,
      117,
      129
    ],
    "rsiStack": [
      64.5,
      50.0,
      43.9,
      41.5,
      41.1,
      43.5
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 236.18,
    "change": -0.3,
    "mom": 39.8,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.4,
    "flow": 45,
    "perf": {
      "w1": -4.15,
      "m1": -5.83,
      "m3": 48.61
    },
    "returns": [
      -0.3,
      -11.09,
      -4.15,
      -3.87,
      -5.83,
      48.61
    ],
    "volumes": [
      71,
      68,
      72,
      81,
      85,
      93
    ],
    "rsiStack": [
      35.6,
      43.2,
      47.4,
      50.0,
      52.3,
      54.5
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 222.44,
    "change": 2.26,
    "mom": 36.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.6,
    "flow": 44,
    "perf": {
      "w1": -3.58,
      "m1": -20.47,
      "m3": 66.78
    },
    "returns": [
      2.26,
      -8.56,
      -3.58,
      -19.91,
      -20.47,
      66.78
    ],
    "volumes": [
      53,
      41,
      62,
      60,
      44,
      76
    ],
    "rsiStack": [
      31.9,
      37.3,
      42.6,
      46.5,
      50.0,
      53.2
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 68.64,
    "chg": 1.54,
    "chgW": 5.08,
    "chgM": 1.51,
    "chgYTD": 11.21,
    "marketCap": "$32.9B",
    "pe": "14.0x",
    "evEbitda": "8.2x",
    "de": "0.6x",
    "drawdown": "-19.6%"
  },
  "MOS": {
    "price": 22.94,
    "chg": 2.82,
    "chgW": 8.62,
    "chgM": 1.1,
    "chgYTD": -4.77,
    "marketCap": "$7.3B",
    "pe": "163.9x",
    "evEbitda": "6.5x",
    "de": "0.5x",
    "drawdown": "-38.9%"
  },
  "CF": {
    "price": 119.19,
    "chg": -1.43,
    "chgW": 3.7,
    "chgM": 8.87,
    "chgYTD": 54.11,
    "marketCap": "$18.3B",
    "pe": "10.7x",
    "evEbitda": "6.7x",
    "de": "0.4x",
    "drawdown": "-16.0%"
  },
  "ICL": {
    "price": 5.01,
    "chg": 1.62,
    "chgW": 1.21,
    "chgM": -12.57,
    "chgYTD": -12.26,
    "marketCap": "$6.5B",
    "pe": "23.9x",
    "evEbitda": "7.2x",
    "de": "0.5x",
    "drawdown": "-29.2%"
  },
  "FMC": {
    "price": 10.72,
    "chg": -1.74,
    "chgW": -7.51,
    "chgM": -9.54,
    "chgYTD": -22.71,
    "marketCap": "$1.3B",
    "pe": "5.2x",
    "evEbitda": "17.0x",
    "de": "2.5x",
    "drawdown": "-75.6%"
  },
  "CTVA": {
    "price": 84.91,
    "chg": -1.35,
    "chgW": -2.12,
    "chgM": 11.52,
    "chgYTD": 26.67,
    "marketCap": "$56.8B",
    "pe": "45.9x",
    "evEbitda": "14.3x",
    "de": "0.1x",
    "drawdown": "-3.2%"
  },
  "ADM": {
    "price": 82.28,
    "chg": 0.29,
    "chgW": 5.22,
    "chgM": 2.54,
    "chgYTD": 43.12,
    "marketCap": "$39.7B",
    "pe": "36.7x",
    "evEbitda": "19.6x",
    "de": "0.5x",
    "drawdown": "-3.6%"
  },
  "BG": {
    "price": 116.63,
    "chg": -0.66,
    "chgW": 5.16,
    "chgM": -8.29,
    "chgYTD": 30.93,
    "marketCap": "$22.6B",
    "pe": "30.7x",
    "evEbitda": "17.4x",
    "de": "0.9x",
    "drawdown": "-13.5%"
  },
  "INGR": {
    "price": 98.2,
    "chg": -1.15,
    "chgW": -0.38,
    "chgM": -3.34,
    "chgYTD": -10.94,
    "marketCap": "$6.2B",
    "pe": "9.4x",
    "evEbitda": "6.0x",
    "de": "0.4x",
    "drawdown": "-27.9%"
  },
  "FPI": {
    "price": 9.66,
    "chg": 0.62,
    "chgW": 0.84,
    "chgM": -3.21,
    "chgYTD": -0.31,
    "marketCap": "$429M",
    "pe": "16.4x",
    "evEbitda": "24.2x",
    "de": "0.5x",
    "drawdown": "-27.0%"
  },
  "LAND": {
    "price": 8.66,
    "chg": 0.7,
    "chgW": 1.17,
    "chgM": -3.35,
    "chgYTD": -5.36,
    "marketCap": "$374M",
    "pe": "-18.2x",
    "evEbitda": "12.4x",
    "de": "0.7x",
    "drawdown": "-33.4%"
  },
  "DE": {
    "price": 584.4,
    "chg": -0.21,
    "chgW": -3.18,
    "chgM": 1.2,
    "chgYTD": 25.52,
    "marketCap": "$157.9B",
    "pe": "33.1x",
    "evEbitda": "23.0x",
    "de": "3.8x",
    "drawdown": "-13.3%"
  },
  "AGCO": {
    "price": 114.14,
    "chg": 0.05,
    "chgW": 0.34,
    "chgM": 1.47,
    "chgYTD": 9.41,
    "marketCap": "$8.3B",
    "pe": "11.0x",
    "evEbitda": "10.2x",
    "de": "0.6x",
    "drawdown": "-20.6%"
  },
  "CNH": {
    "price": 10.42,
    "chg": 0.0,
    "chgW": -0.1,
    "chgM": -1.7,
    "chgYTD": 13.02,
    "marketCap": "$12.9B",
    "pe": "32.6x",
    "evEbitda": "35.0x",
    "de": "3.3x",
    "drawdown": "-22.7%"
  },
  "XYL": {
    "price": 121.55,
    "chg": 0.28,
    "chgW": 0.75,
    "chgM": 10.42,
    "chgYTD": -10.74,
    "marketCap": "$28.9B",
    "pe": "30.2x",
    "evEbitda": "15.9x",
    "de": "0.2x",
    "drawdown": "-21.2%"
  },
  "VMI": {
    "price": 543.47,
    "chg": 0.68,
    "chgW": 0.73,
    "chgM": -0.61,
    "chgYTD": 35.08,
    "marketCap": "$10.6B",
    "pe": "30.2x",
    "evEbitda": "17.6x",
    "de": "0.5x",
    "drawdown": "-7.2%"
  },
  "LNN": {
    "price": 115.46,
    "chg": 0.46,
    "chgW": 0.19,
    "chgM": 0.1,
    "chgYTD": -2.04,
    "marketCap": "$1.2B",
    "pe": "22.2x",
    "evEbitda": "13.7x",
    "de": "0.3x",
    "drawdown": "-22.0%"
  },
  "MWA": {
    "price": 24.7,
    "chg": 0.41,
    "chgW": -1.59,
    "chgM": -4.34,
    "chgYTD": 3.69,
    "marketCap": "$3.9B",
    "pe": "18.7x",
    "evEbitda": "11.5x",
    "de": "0.4x",
    "drawdown": "-20.3%"
  },
  "WTS": {
    "price": 350.0,
    "chg": 0.92,
    "chgW": -2.04,
    "chgM": 5.07,
    "chgYTD": 26.8,
    "marketCap": "$11.7B",
    "pe": "32.1x",
    "evEbitda": "20.8x",
    "de": "0.1x",
    "drawdown": "-11.3%"
  },
  "TSN": {
    "price": 57.48,
    "chg": -0.76,
    "chgW": -2.28,
    "chgM": 0.09,
    "chgYTD": -1.94,
    "marketCap": "$20.2B",
    "pe": "45.3x",
    "evEbitda": "10.4x",
    "de": "0.4x",
    "drawdown": "-17.3%"
  },
  "PPC": {
    "price": 28.22,
    "chg": -1.02,
    "chgW": -1.91,
    "chgM": -6.15,
    "chgYTD": -27.62,
    "marketCap": "$6.7B",
    "pe": "7.6x",
    "evEbitda": "4.7x",
    "de": "0.9x",
    "drawdown": "-44.2%"
  },
  "HRL": {
    "price": 24.81,
    "chg": 1.43,
    "chgW": 0.45,
    "chgM": 0.24,
    "chgYTD": 4.68,
    "marketCap": "$13.7B",
    "pe": "29.2x",
    "evEbitda": "10.7x",
    "de": "0.0x",
    "drawdown": "-17.5%"
  },
  "CAG": {
    "price": 14.15,
    "chg": -1.26,
    "chgW": 0.86,
    "chgM": 2.98,
    "chgYTD": -18.26,
    "marketCap": "$6.8B",
    "pe": "9.0x",
    "evEbitda": "8.1x",
    "de": "0.9x",
    "drawdown": "-30.4%"
  },
  "CALM": {
    "price": 83.14,
    "chg": -0.32,
    "chgW": -2.66,
    "chgM": 6.45,
    "chgYTD": 4.49,
    "marketCap": "$3.9B",
    "pe": "5.8x",
    "evEbitda": "2.9x",
    "de": "–",
    "drawdown": "-34.2%"
  },
  "DBA": {
    "price": 27.63,
    "chg": -0.32,
    "chgW": 0.29,
    "chgM": 5.3,
    "chgYTD": 8.27,
    "marketCap": "–",
    "pe": "11.7x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-4.2%"
  },
  "MOO": {
    "price": 81.51,
    "chg": 0.04,
    "chgW": 0.74,
    "chgM": 3.72,
    "chgYTD": 11.98,
    "marketCap": "–",
    "pe": "18.4x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-5.8%"
  },
  "VEGI": {
    "price": 44.3,
    "chg": 0.33,
    "chgW": 0.36,
    "chgM": 0.81,
    "chgYTD": 14.86,
    "marketCap": "–",
    "pe": "20.7x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-6.3%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "54.4x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
