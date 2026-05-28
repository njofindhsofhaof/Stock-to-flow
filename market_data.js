window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-05-28 23:49:26",
  "sections": {
    "Index": {
      "risk": "Risk On",
      "leader": "KOSPI",
      "watch": 0
    },
    "Commodity": {
      "risk": "Risk On",
      "leader": "SLV",
      "watch": 0
    },
    "Crypto": {
      "risk": "Neutral",
      "leader": "CRCL",
      "watch": 0
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "SOX",
      "watch": 1
    },
    "Stock": {
      "risk": "Risk Off",
      "leader": "F",
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
    "price": 7563.63,
    "change": 0.58,
    "mom": 56.4,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 72.7,
    "flow": 60,
    "perf": {
      "w1": 1.76,
      "m1": 5.99,
      "m3": 10.96
    },
    "returns": [
      0.58,
      1.21,
      1.76,
      1.6,
      5.99,
      10.96
    ],
    "volumes": [
      100,
      91,
      99,
      102,
      107,
      103
    ],
    "rsiStack": [
      81.2,
      75.2,
      72.7,
      70.2,
      67.0,
      64.4
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 50668.97,
    "change": 0.05,
    "mom": 57.6,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 64.9,
    "flow": 100,
    "perf": {
      "w1": 1.32,
      "m1": 3.7,
      "m3": 4.47
    },
    "returns": [
      0.05,
      0.18,
      1.32,
      1.96,
      3.7,
      4.47
    ],
    "volumes": [
      100,
      92,
      102,
      93,
      99,
      94
    ],
    "rsiStack": [
      72.9,
      67.7,
      64.9,
      62.6,
      60.2,
      59.6
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 8228.7,
    "change": 2.25,
    "mom": 57.8,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 71.4,
    "flow": 85,
    "perf": {
      "w1": 13.16,
      "m1": 27.07,
      "m3": 30.46
    },
    "returns": [
      2.25,
      5.29,
      13.16,
      7.66,
      27.07,
      30.46
    ],
    "volumes": [
      70,
      79,
      66,
      106,
      119,
      91
    ],
    "rsiStack": [
      77.7,
      73.0,
      71.4,
      69.9,
      68.0,
      66.1
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
    "rsi": 68.1,
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
      91,
      90,
      95,
      102,
      125,
      96
    ],
    "rsiStack": [
      76.7,
      71.1,
      68.1,
      65.6,
      62.1,
      54.7
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 412.77,
    "change": 1.05,
    "mom": 48.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.0,
    "flow": 120,
    "perf": {
      "w1": -1.11,
      "m1": -1.11,
      "m3": -11.83
    },
    "returns": [
      1.05,
      -0.25,
      -1.11,
      -4.12,
      -1.11,
      -11.83
    ],
    "volumes": [
      112,
      92,
      99,
      90,
      65,
      86
    ],
    "rsiStack": [
      40.6,
      39.5,
      41.0,
      42.6,
      44.3,
      45.1
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 68.36,
    "change": 1.27,
    "mom": 44.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.7,
    "flow": 78,
    "perf": {
      "w1": -0.54,
      "m1": 5.43,
      "m3": -8.46
    },
    "returns": [
      1.27,
      0.0,
      -0.54,
      -13.85,
      5.43,
      -8.46
    ],
    "volumes": [
      67,
      61,
      93,
      95,
      134,
      75
    ],
    "rsiStack": [
      43.0,
      45.0,
      46.7,
      47.7,
      48.7,
      50.7
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 50.75,
    "change": 1.18,
    "mom": 53.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.8,
    "flow": 90,
    "perf": {
      "w1": 5.64,
      "m1": -4.05,
      "m3": -2.4
    },
    "returns": [
      1.18,
      3.66,
      5.64,
      -4.8,
      -4.05,
      -2.4
    ],
    "volumes": [
      89,
      72,
      76,
      95,
      83,
      63
    ],
    "rsiStack": [
      54.5,
      47.3,
      46.8,
      47.6,
      49.1,
      52.9
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 88.37,
    "change": -0.35,
    "mom": 34.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 38.8,
    "flow": 1,
    "perf": {
      "w1": -10.07,
      "m1": -17.32,
      "m3": 18.52
    },
    "returns": [
      -0.35,
      -8.52,
      -10.07,
      -12.52,
      -17.32,
      18.52
    ],
    "volumes": [
      130,
      99,
      119,
      43,
      76,
      106
    ],
    "rsiStack": [
      17.9,
      31.0,
      38.8,
      43.5,
      47.6,
      51.8
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 116.5,
    "change": 0.14,
    "mom": 36.1,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.7,
    "flow": 59,
    "perf": {
      "w1": -5.52,
      "m1": -8.11,
      "m3": 9.6
    },
    "returns": [
      0.14,
      -4.27,
      -5.52,
      -7.17,
      -8.11,
      9.6
    ],
    "volumes": [
      87,
      53,
      141,
      101,
      91,
      66
    ],
    "rsiStack": [
      25.9,
      37.5,
      42.7,
      45.9,
      48.6,
      50.2
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 39.43,
    "change": 1.73,
    "mom": 41.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.5,
    "flow": 54,
    "perf": {
      "w1": -2.16,
      "m1": 2.39,
      "m3": 9.59
    },
    "returns": [
      1.73,
      -0.2,
      -2.16,
      -13.15,
      2.39,
      9.59
    ],
    "volumes": [
      55,
      59,
      79,
      77,
      123,
      105
    ],
    "rsiStack": [
      39.9,
      44.8,
      47.5,
      49.0,
      50.4,
      51.7
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 24.06,
    "change": 1.43,
    "mom": 72.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.3,
    "flow": 96,
    "perf": {
      "w1": 10.06,
      "m1": 4.47,
      "m3": -10.16
    },
    "returns": [
      1.43,
      6.89,
      10.06,
      5.62,
      4.47,
      -10.16
    ],
    "volumes": [
      110,
      91,
      91,
      103,
      137,
      76
    ],
    "rsiStack": [
      84.0,
      68.4,
      58.3,
      52.7,
      48.7,
      44.2
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 69.65,
    "change": 1.34,
    "mom": 46.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.6,
    "flow": 69,
    "perf": {
      "w1": -0.66,
      "m1": -6.04,
      "m3": -6.41
    },
    "returns": [
      1.34,
      -0.68,
      -0.66,
      -2.3,
      -6.04,
      -6.41
    ],
    "volumes": [
      81,
      55,
      96,
      73,
      72,
      128
    ],
    "rsiStack": [
      40.6,
      40.8,
      42.6,
      44.2,
      45.9,
      45.8
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 73440.55,
    "change": -1.22,
    "mom": 32.2,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.5,
    "flow": 135,
    "perf": {
      "w1": -4.22,
      "m1": -8.41,
      "m3": 11.35
    },
    "returns": [
      -1.22,
      -4.97,
      -4.22,
      -4.57,
      -8.41,
      11.35
    ],
    "volumes": [
      114,
      66,
      91,
      85,
      124,
      98
    ],
    "rsiStack": [
      19.2,
      28.1,
      35.5,
      40.9,
      45.2,
      47.2
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 182.25,
    "change": 4.87,
    "mom": 42.6,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.7,
    "flow": 94,
    "perf": {
      "w1": -4.73,
      "m1": 0.29,
      "m3": -0.06
    },
    "returns": [
      4.87,
      -1.48,
      -4.73,
      -9.69,
      0.29,
      -0.06
    ],
    "volumes": [
      84,
      82,
      73,
      100,
      83,
      128
    ],
    "rsiStack": [
      41.7,
      42.4,
      44.7,
      46.3,
      47.5,
      49.4
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 108.24,
    "change": 5.46,
    "mom": 43.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.9,
    "flow": 65,
    "perf": {
      "w1": -3.03,
      "m1": 13.27,
      "m3": 8.64
    },
    "returns": [
      5.46,
      -4.31,
      -3.03,
      -14.48,
      13.27,
      8.64
    ],
    "volumes": [
      47,
      56,
      41,
      72,
      117,
      78
    ],
    "rsiStack": [
      44.8,
      46.6,
      48.9,
      50.4,
      51.8,
      53.9
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 151.64,
    "change": -1.66,
    "mom": 34.9,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.9,
    "flow": 109,
    "perf": {
      "w1": -8.55,
      "m1": -4.14,
      "m3": 14.29
    },
    "returns": [
      -1.66,
      -5.16,
      -8.55,
      -14.82,
      -4.14,
      14.29
    ],
    "volumes": [
      81,
      86,
      64,
      113,
      66,
      80
    ],
    "rsiStack": [
      16.5,
      31.2,
      39.9,
      44.8,
      49.1,
      56.2
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 56.95,
    "change": -0.07,
    "mom": 38.5,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 44.0,
    "flow": 118,
    "perf": {
      "w1": -4.77,
      "m1": -3.52,
      "m3": 0.76
    },
    "returns": [
      -0.07,
      -4.27,
      -4.77,
      -1.18,
      -3.52,
      0.76
    ],
    "volumes": [
      125,
      111,
      166,
      113,
      57,
      84
    ],
    "rsiStack": [
      28.8,
      39.4,
      44.0,
      46.6,
      48.8,
      48.6
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 186.85,
    "change": 1.31,
    "mom": 55.7,
    "phase": "Exhaustion",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 76.9,
    "flow": 91,
    "perf": {
      "w1": 5.48,
      "m1": 17.43,
      "m3": 35.89
    },
    "returns": [
      1.31,
      3.58,
      5.48,
      5.65,
      17.43,
      35.89
    ],
    "volumes": [
      104,
      93,
      109,
      166,
      91,
      69
    ],
    "rsiStack": [
      82.2,
      78.5,
      76.9,
      75.1,
      72.4,
      70.1
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 44.63,
    "change": -1.13,
    "mom": 48.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.4,
    "flow": 93,
    "perf": {
      "w1": 0.27,
      "m1": -2.3,
      "m3": -5.18
    },
    "returns": [
      -1.13,
      -1.59,
      0.27,
      -0.09,
      -2.3,
      -5.18
    ],
    "volumes": [
      83,
      75,
      84,
      150,
      134,
      65
    ],
    "rsiStack": [
      39.3,
      42.5,
      43.4,
      44.5,
      45.6,
      44.4
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 150.88,
    "change": 1.4,
    "mom": 66.3,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.2,
    "flow": 101,
    "perf": {
      "w1": 2.55,
      "m1": 5.63,
      "m3": -3.74
    },
    "returns": [
      1.4,
      0.66,
      2.55,
      2.84,
      5.63,
      -3.74
    ],
    "volumes": [
      103,
      71,
      108,
      84,
      168,
      140
    ],
    "rsiStack": [
      76.5,
      69.4,
      63.2,
      58.4,
      53.6,
      47.5
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 116.67,
    "change": 0.35,
    "mom": 54.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.6,
    "flow": 91,
    "perf": {
      "w1": 0.49,
      "m1": 1.2,
      "m3": -1.09
    },
    "returns": [
      0.35,
      1.05,
      0.49,
      -0.08,
      1.2,
      -1.09
    ],
    "volumes": [
      116,
      84,
      106,
      109,
      89,
      99
    ],
    "rsiStack": [
      61.9,
      55.1,
      53.6,
      52.9,
      52.5,
      53.7
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 51.27,
    "change": -0.29,
    "mom": 45.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 47.6,
    "flow": 115,
    "perf": {
      "w1": -0.75,
      "m1": -1.25,
      "m3": 0.12
    },
    "returns": [
      -0.29,
      -1.29,
      -0.75,
      0.55,
      -1.25,
      0.12
    ],
    "volumes": [
      132,
      70,
      124,
      99,
      101,
      65
    ],
    "rsiStack": [
      38.8,
      44.8,
      47.6,
      48.8,
      48.9,
      48.0
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 44.41,
    "change": -0.49,
    "mom": 49.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.5,
    "flow": 67,
    "perf": {
      "w1": -0.05,
      "m1": 1.76,
      "m3": 1.62
    },
    "returns": [
      -0.49,
      -0.34,
      -0.05,
      0.45,
      1.76,
      1.62
    ],
    "volumes": [
      67,
      73,
      73,
      113,
      101,
      171
    ],
    "rsiStack": [
      51.0,
      54.2,
      55.5,
      56.0,
      55.8,
      54.1
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 173.8,
    "change": -0.29,
    "mom": 56.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.3,
    "flow": 99,
    "perf": {
      "w1": 1.8,
      "m1": 2.28,
      "m3": -0.93
    },
    "returns": [
      -0.29,
      1.18,
      1.8,
      0.1,
      2.28,
      -0.93
    ],
    "volumes": [
      93,
      86,
      125,
      103,
      72,
      97
    ],
    "rsiStack": [
      61.0,
      55.8,
      54.3,
      53.8,
      54.2,
      57.2
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 51.36,
    "change": 0.35,
    "mom": 58.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.2,
    "flow": 97,
    "perf": {
      "w1": 3.3,
      "m1": 0.78,
      "m3": -1.12
    },
    "returns": [
      0.35,
      2.13,
      3.3,
      -1.34,
      0.78,
      -1.12
    ],
    "volumes": [
      85,
      66,
      190,
      105,
      84,
      65
    ],
    "rsiStack": [
      66.4,
      56.2,
      53.2,
      52.3,
      51.6,
      49.1
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 122.06,
    "change": 0.42,
    "mom": 62.8,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 65.2,
    "flow": 88,
    "perf": {
      "w1": 3.49,
      "m1": 4.47,
      "m3": 6.73
    },
    "returns": [
      0.42,
      2.42,
      3.49,
      2.81,
      4.47,
      6.73
    ],
    "volumes": [
      157,
      65,
      148,
      128,
      61,
      104
    ],
    "rsiStack": [
      81.1,
      70.5,
      65.2,
      61.7,
      58.3,
      54.9
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 84.43,
    "change": -0.18,
    "mom": 49.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.7,
    "flow": 56,
    "perf": {
      "w1": -1.27,
      "m1": 1.82,
      "m3": -3.77
    },
    "returns": [
      -0.18,
      -0.44,
      -1.27,
      -0.34,
      1.82,
      -3.77
    ],
    "volumes": [
      105,
      68,
      119,
      103,
      91,
      96
    ],
    "rsiStack": [
      46.3,
      49.9,
      51.7,
      51.9,
      51.2,
      48.2
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 569.47,
    "change": 0.97,
    "mom": 54.6,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 72.9,
    "flow": 79,
    "perf": {
      "w1": 9.45,
      "m1": 26.55,
      "m3": 70.1
    },
    "returns": [
      0.97,
      5.98,
      9.45,
      7.79,
      26.55,
      70.1
    ],
    "volumes": [
      138,
      93,
      111,
      126,
      99,
      92
    ],
    "rsiStack": [
      78.3,
      74.2,
      72.9,
      72.1,
      71.0,
      70.7
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 27.58,
    "change": 0.4,
    "mom": 35.3,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.4,
    "flow": 37,
    "perf": {
      "w1": -1.39,
      "m1": -1.89,
      "m3": 6.0
    },
    "returns": [
      0.4,
      0.07,
      -1.39,
      -4.0,
      -1.89,
      6.0
    ],
    "volumes": [
      78,
      51,
      60,
      93,
      109,
      177
    ],
    "rsiStack": [
      37.7,
      42.1,
      46.4,
      49.5,
      52.7,
      57.2
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 44.24,
    "change": 0.89,
    "mom": 48.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.3,
    "flow": 54,
    "perf": {
      "w1": -0.52,
      "m1": -1.27,
      "m3": -3.09
    },
    "returns": [
      0.89,
      0.91,
      -0.52,
      -3.87,
      -1.27,
      -3.09
    ],
    "volumes": [
      110,
      32,
      55,
      44,
      140,
      69
    ],
    "rsiStack": [
      45.0,
      39.7,
      41.3,
      43.7,
      46.5,
      48.3
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 44.81,
    "change": 0.12,
    "mom": 66.4,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 69.8,
    "flow": 10,
    "perf": {
      "w1": 7.45,
      "m1": 10.37,
      "m3": 9.11
    },
    "returns": [
      0.12,
      4.96,
      7.45,
      8.15,
      10.37,
      9.11
    ],
    "volumes": [
      7,
      9,
      18,
      8,
      26,
      44
    ],
    "rsiStack": [
      85.2,
      75.5,
      69.8,
      66.0,
      62.5,
      60.6
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.31,
    "change": 0.29,
    "mom": 47.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.8,
    "flow": 100,
    "perf": {
      "w1": -0.26,
      "m1": -0.15,
      "m3": 1.05
    },
    "returns": [
      0.29,
      0.6,
      -0.26,
      -2.87,
      -0.15,
      1.05
    ],
    "volumes": [
      11,
      153,
      8,
      68,
      59,
      17
    ],
    "rsiStack": [
      42.2,
      40.0,
      42.8,
      45.5,
      48.6,
      52.2
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 100.75,
    "change": -1.32,
    "mom": 34.0,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.3,
    "flow": 84,
    "perf": {
      "w1": -5.4,
      "m1": -4.5,
      "m3": 4.21
    },
    "returns": [
      -1.32,
      -2.29,
      -5.4,
      -4.91,
      -4.5,
      4.21
    ],
    "volumes": [
      106,
      110,
      84,
      84,
      112,
      350
    ],
    "rsiStack": [
      19.9,
      32.7,
      42.3,
      47.5,
      51.1,
      53.9
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 80.3,
    "change": -0.19,
    "mom": 44.3,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 37.0,
    "flow": 35,
    "perf": {
      "w1": -0.93,
      "m1": -1.94,
      "m3": -3.49
    },
    "returns": [
      -0.19,
      0.04,
      -0.93,
      -2.49,
      -1.94,
      -3.49
    ],
    "volumes": [
      26,
      31,
      43,
      87,
      65,
      58
    ],
    "rsiStack": [
      30.5,
      33.5,
      37.0,
      40.3,
      44.4,
      49.3
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 16.65,
    "change": 4.85,
    "mom": 73.0,
    "phase": "Exhaustion",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 77.2,
    "flow": 116,
    "perf": {
      "w1": 25.95,
      "m1": 36.03,
      "m3": 31.1
    },
    "returns": [
      4.85,
      11.52,
      25.95,
      22.7,
      36.03,
      31.1
    ],
    "volumes": [
      117,
      154,
      65,
      109,
      423,
      133
    ],
    "rsiStack": [
      89.9,
      82.2,
      77.2,
      73.1,
      68.1,
      60.2
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 84.35,
    "change": 0.27,
    "mom": 72.3,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 66.7,
    "flow": 110,
    "perf": {
      "w1": 10.78,
      "m1": 10.09,
      "m3": 9.16
    },
    "returns": [
      0.27,
      7.06,
      10.78,
      11.27,
      10.09,
      9.16
    ],
    "volumes": [
      147,
      87,
      110,
      81,
      120,
      145
    ],
    "rsiStack": [
      84.2,
      73.1,
      66.7,
      62.5,
      59.1,
      58.0
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 24.84,
    "change": 0.12,
    "mom": 35.4,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 45.4,
    "flow": 47,
    "perf": {
      "w1": -2.7,
      "m1": -2.28,
      "m3": 4.72
    },
    "returns": [
      0.12,
      -1.86,
      -2.7,
      -4.61,
      -2.28,
      4.72
    ],
    "volumes": [
      136,
      52,
      92,
      38,
      157,
      79
    ],
    "rsiStack": [
      29.1,
      40.1,
      45.4,
      48.3,
      51.0,
      55.0
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 26.14,
    "change": -0.27,
    "mom": 63.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.9,
    "flow": 55,
    "perf": {
      "w1": 1.36,
      "m1": -0.46,
      "m3": -1.66
    },
    "returns": [
      -0.27,
      0.93,
      1.36,
      0.69,
      -0.46,
      -1.66
    ],
    "volumes": [
      110,
      61,
      92,
      89,
      106,
      88
    ],
    "rsiStack": [
      64.3,
      53.7,
      48.9,
      47.5,
      47.3,
      46.8
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 10.41,
    "change": -0.38,
    "mom": 54.8,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.2,
    "flow": 80,
    "perf": {
      "w1": -0.19,
      "m1": -9.32,
      "m3": -19.36
    },
    "returns": [
      -0.38,
      -0.19,
      -0.19,
      0.1,
      -9.32,
      -19.36
    ],
    "volumes": [
      76,
      70,
      100,
      95,
      132,
      127
    ],
    "rsiStack": [
      46.8,
      41.4,
      39.2,
      39.7,
      42.6,
      49.1
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 9.59,
    "change": 0.74,
    "mom": 62.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.4,
    "flow": 65,
    "perf": {
      "w1": 1.59,
      "m1": -1.03,
      "m3": -20.22
    },
    "returns": [
      0.74,
      -0.42,
      1.59,
      0.63,
      -1.03,
      -20.22
    ],
    "volumes": [
      63,
      117,
      99,
      88,
      118,
      124
    ],
    "rsiStack": [
      56.2,
      49.3,
      45.4,
      43.9,
      44.1,
      45.0
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 222.35,
    "change": 0.51,
    "mom": 56.1,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 65.5,
    "flow": 77,
    "perf": {
      "w1": 21.52,
      "m1": 26.5,
      "m3": 128.52
    },
    "returns": [
      0.51,
      1.8,
      21.52,
      17.42,
      26.5,
      128.52
    ],
    "volumes": [
      68,
      138,
      124,
      141,
      104,
      59
    ],
    "rsiStack": [
      76.9,
      68.6,
      65.5,
      64.1,
      63.4,
      66.7
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 204.83,
    "change": 3.09,
    "mom": 50.0,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 69.4,
    "flow": 194,
    "perf": {
      "w1": 9.65,
      "m1": 30.82,
      "m3": 164.26
    },
    "returns": [
      3.09,
      4.33,
      9.65,
      15.11,
      30.82,
      164.26
    ],
    "volumes": [
      213,
      84,
      118,
      96,
      124,
      68
    ],
    "rsiStack": [
      70.0,
      69.4,
      69.4,
      69.7,
      69.7,
      69.9
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 69.65,
    "chg": 1.34,
    "chgW": -0.66,
    "chgM": -6.04,
    "chgYTD": 12.85,
    "marketCap": "$33.4B",
    "pe": "14.2x",
    "evEbitda": "8.3x",
    "de": "0.6x",
    "drawdown": "-18.4%"
  },
  "MOS": {
    "price": 24.06,
    "chg": 1.43,
    "chgW": 10.06,
    "chgM": 4.47,
    "chgYTD": -0.12,
    "marketCap": "$7.6B",
    "pe": "171.9x",
    "evEbitda": "6.7x",
    "de": "0.5x",
    "drawdown": "-37.1%"
  },
  "CF": {
    "price": 116.5,
    "chg": 0.14,
    "chgW": -5.52,
    "chgM": -8.11,
    "chgYTD": 50.63,
    "marketCap": "$17.9B",
    "pe": "10.5x",
    "evEbitda": "6.5x",
    "de": "0.4x",
    "drawdown": "-17.9%"
  },
  "ICL": {
    "price": 6.75,
    "chg": 1.81,
    "chgW": 4.81,
    "chgM": 26.64,
    "chgYTD": 18.21,
    "marketCap": "$8.7B",
    "pe": "32.1x",
    "evEbitda": "8.9x",
    "de": "0.5x",
    "drawdown": "-8.2%"
  },
  "FMC": {
    "price": 13.57,
    "chg": 0.44,
    "chgW": 6.93,
    "chgM": -7.37,
    "chgYTD": -2.16,
    "marketCap": "$1.7B",
    "pe": "6.2x",
    "evEbitda": "18.0x",
    "de": "2.5x",
    "drawdown": "-69.7%"
  },
  "CTVA": {
    "price": 80.6,
    "chg": 0.89,
    "chgW": 2.28,
    "chgM": 1.55,
    "chgYTD": 20.24,
    "marketCap": "$53.9B",
    "pe": "43.6x",
    "evEbitda": "13.3x",
    "de": "0.1x",
    "drawdown": "-5.9%"
  },
  "ADM": {
    "price": 80.04,
    "chg": 0.62,
    "chgW": 3.21,
    "chgM": 7.77,
    "chgYTD": 39.22,
    "marketCap": "$38.6B",
    "pe": "35.4x",
    "evEbitda": "19.3x",
    "de": "0.5x",
    "drawdown": "-3.7%"
  },
  "BG": {
    "price": 123.7,
    "chg": 2.08,
    "chgW": 3.13,
    "chgM": -2.07,
    "chgYTD": 38.86,
    "marketCap": "$24.0B",
    "pe": "32.5x",
    "evEbitda": "17.7x",
    "de": "0.9x",
    "drawdown": "-7.6%"
  },
  "INGR": {
    "price": 103.21,
    "chg": -0.72,
    "chgW": 2.49,
    "chgM": -7.61,
    "chgYTD": -6.39,
    "marketCap": "$6.5B",
    "pe": "9.9x",
    "evEbitda": "6.2x",
    "de": "0.4x",
    "drawdown": "-26.5%"
  },
  "FPI": {
    "price": 10.41,
    "chg": -0.38,
    "chgW": -0.19,
    "chgM": -9.32,
    "chgYTD": 7.43,
    "marketCap": "$462M",
    "pe": "17.6x",
    "evEbitda": "25.5x",
    "de": "0.5x",
    "drawdown": "-21.3%"
  },
  "LAND": {
    "price": 9.59,
    "chg": 0.74,
    "chgW": 1.59,
    "chgM": -1.03,
    "chgYTD": 4.81,
    "marketCap": "$414M",
    "pe": "-20.1x",
    "evEbitda": "13.0x",
    "de": "0.7x",
    "drawdown": "-26.2%"
  },
  "DE": {
    "price": 539.0,
    "chg": 1.82,
    "chgW": -3.83,
    "chgM": -3.75,
    "chgYTD": 15.77,
    "marketCap": "$145.6B",
    "pe": "30.6x",
    "evEbitda": "21.2x",
    "de": "3.8x",
    "drawdown": "-20.1%"
  },
  "AGCO": {
    "price": 113.87,
    "chg": -0.36,
    "chgW": -0.78,
    "chgM": -0.49,
    "chgYTD": 9.15,
    "marketCap": "$8.2B",
    "pe": "11.0x",
    "evEbitda": "10.3x",
    "de": "0.6x",
    "drawdown": "-20.8%"
  },
  "CNH": {
    "price": 10.46,
    "chg": -0.57,
    "chgW": 0.0,
    "chgM": 3.77,
    "chgYTD": 13.45,
    "marketCap": "$13.0B",
    "pe": "32.7x",
    "evEbitda": "35.2x",
    "de": "3.3x",
    "drawdown": "-26.7%"
  },
  "XYL": {
    "price": 109.25,
    "chg": -0.77,
    "chgW": 0.95,
    "chgM": -5.33,
    "chgYTD": -19.78,
    "marketCap": "$26.0B",
    "pe": "27.2x",
    "evEbitda": "14.5x",
    "de": "0.2x",
    "drawdown": "-29.2%"
  },
  "VMI": {
    "price": 524.8,
    "chg": 0.48,
    "chgW": 4.26,
    "chgM": 6.74,
    "chgYTD": 30.44,
    "marketCap": "$10.2B",
    "pe": "29.1x",
    "evEbitda": "17.2x",
    "de": "0.5x",
    "drawdown": "-2.0%"
  },
  "LNN": {
    "price": 110.02,
    "chg": -0.99,
    "chgW": 1.42,
    "chgM": 0.24,
    "chgYTD": -6.66,
    "marketCap": "$1.2B",
    "pe": "20.1x",
    "evEbitda": "12.3x",
    "de": "0.3x",
    "drawdown": "-27.1%"
  },
  "MWA": {
    "price": 25.36,
    "chg": -1.21,
    "chgW": -0.28,
    "chgM": -8.45,
    "chgYTD": 6.47,
    "marketCap": "$4.0B",
    "pe": "19.2x",
    "evEbitda": "11.8x",
    "de": "0.4x",
    "drawdown": "-18.2%"
  },
  "WTS": {
    "price": 311.09,
    "chg": -1.18,
    "chgW": 3.99,
    "chgM": 4.65,
    "chgYTD": 12.71,
    "marketCap": "$10.4B",
    "pe": "28.5x",
    "evEbitda": "18.5x",
    "de": "0.1x",
    "drawdown": "-9.9%"
  },
  "TSN": {
    "price": 62.0,
    "chg": -6.09,
    "chgW": -6.79,
    "chgM": -2.49,
    "chgYTD": 5.77,
    "marketCap": "$21.8B",
    "pe": "48.8x",
    "evEbitda": "11.4x",
    "de": "0.4x",
    "drawdown": "-10.8%"
  },
  "PPC": {
    "price": 28.54,
    "chg": -1.65,
    "chgW": -0.38,
    "chgM": -8.38,
    "chgYTD": -26.8,
    "marketCap": "$6.8B",
    "pe": "7.7x",
    "evEbitda": "4.8x",
    "de": "0.9x",
    "drawdown": "-43.6%"
  },
  "HRL": {
    "price": 23.59,
    "chg": 12.55,
    "chgW": 13.63,
    "chgM": 13.09,
    "chgYTD": -0.46,
    "marketCap": "$13.0B",
    "pe": "26.5x",
    "evEbitda": "9.3x",
    "de": "0.0x",
    "drawdown": "-26.0%"
  },
  "CAG": {
    "price": 13.38,
    "chg": 0.38,
    "chgW": -2.76,
    "chgM": -5.97,
    "chgYTD": -22.7,
    "marketCap": "$6.4B",
    "pe": "8.0x",
    "evEbitda": "7.9x",
    "de": "0.9x",
    "drawdown": "-41.8%"
  },
  "CALM": {
    "price": 76.49,
    "chg": 0.61,
    "chgW": -2.26,
    "chgM": 1.89,
    "chgYTD": -3.87,
    "marketCap": "$3.6B",
    "pe": "5.3x",
    "evEbitda": "2.6x",
    "de": "–",
    "drawdown": "-39.5%"
  },
  "DBA": {
    "price": 27.58,
    "chg": 0.4,
    "chgW": -1.39,
    "chgM": -1.89,
    "chgYTD": 8.07,
    "marketCap": "–",
    "pe": "11.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-4.4%"
  },
  "MOO": {
    "price": 80.3,
    "chg": -0.19,
    "chgW": -0.93,
    "chgM": -1.94,
    "chgYTD": 10.32,
    "marketCap": "–",
    "pe": "19.2x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-7.2%"
  },
  "VEGI": {
    "price": 44.24,
    "chg": 0.89,
    "chgW": -0.52,
    "chgM": -1.27,
    "chgYTD": 14.7,
    "marketCap": "–",
    "pe": "20.8x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-6.4%"
  },
  "USAG": {},
  "COCO.L": {
    "price": 6.86,
    "chg": -0.53,
    "chgW": 6.65,
    "chgM": 25.39,
    "chgYTD": -34.42,
    "marketCap": "–",
    "pe": "39.8x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-58.0%"
  }
};
