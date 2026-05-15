window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-05-15 23:28:06",
  "sections": {
    "Index": {
      "risk": "Strong OFF",
      "leader": "SP500",
      "watch": 1
    },
    "Commodity": {
      "risk": "Risk On",
      "leader": "CL",
      "watch": 0
    },
    "Crypto": {
      "risk": "Neutral",
      "leader": "CRCL",
      "watch": 3
    },
    "ETF": {
      "risk": "Risk Off",
      "leader": "SOX",
      "watch": 4
    },
    "Stock": {
      "risk": "Neutral",
      "leader": "MRVL",
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
    "price": 7408.5,
    "change": -1.24,
    "mom": 47.5,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "SELL",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 67.1,
    "flow": 64,
    "perf": {
      "w1": 0.13,
      "m1": 3.96,
      "m3": 7.97
    },
    "returns": [
      -1.24,
      0.1,
      0.13,
      2.47,
      3.96,
      7.97
    ],
    "volumes": [
      98,
      105,
      101,
      128,
      97,
      113
    ],
    "rsiStack": [
      56.3,
      65.1,
      67.1,
      66.0,
      62.7,
      55.1
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 49526.17,
    "change": -1.07,
    "mom": 46.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.6,
    "flow": 119,
    "perf": {
      "w1": -0.17,
      "m1": 0.16,
      "m3": 0.27
    },
    "returns": [
      -1.07,
      -0.47,
      -0.17,
      0.05,
      0.16,
      0.27
    ],
    "volumes": [
      102,
      101,
      93,
      112,
      95,
      111
    ],
    "rsiStack": [
      45.1,
      52.7,
      55.6,
      55.7,
      53.8,
      47.3
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
    "phase": "Exhaustion",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 80.3,
    "flow": 106,
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
      102,
      119,
      60,
      110,
      75,
      88
    ],
    "rsiStack": [
      84.6,
      84.0,
      80.3,
      76.0,
      70.8,
      62.4
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
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 66.5,
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
      125,
      116,
      134,
      102,
      102,
      91
    ],
    "rsiStack": [
      64.9,
      67.9,
      66.5,
      64.0,
      59.6,
      49.2
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 417.29,
    "change": -2.32,
    "mom": 41.0,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.2,
    "flow": 144,
    "perf": {
      "w1": -3.8,
      "m1": -6.42,
      "m3": -9.2
    },
    "returns": [
      -2.32,
      -3.61,
      -3.8,
      -1.39,
      -6.42,
      -9.2
    ],
    "volumes": [
      63,
      101,
      81,
      104,
      86,
      77
    ],
    "rsiStack": [
      23.6,
      35.2,
      40.2,
      42.8,
      45.6,
      49.8
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 69.04,
    "change": -8.57,
    "mom": 43.6,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.5,
    "flow": 190,
    "perf": {
      "w1": -5.44,
      "m1": -6.23,
      "m3": -2.77
    },
    "returns": [
      -8.57,
      -12.11,
      -5.44,
      1.1,
      -6.23,
      -2.77
    ],
    "volumes": [
      116,
      136,
      86,
      111,
      88,
      95
    ],
    "rsiStack": [
      32.9,
      42.9,
      46.5,
      47.9,
      49.1,
      51.3
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 49.93,
    "change": -4.9,
    "mom": 32.2,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.9,
    "flow": 109,
    "perf": {
      "w1": -9.51,
      "m1": -10.62,
      "m3": -7.4
    },
    "returns": [
      -4.9,
      -8.13,
      -9.51,
      -10.58,
      -10.62,
      -7.4
    ],
    "volumes": [
      77,
      136,
      124,
      152,
      79,
      222
    ],
    "rsiStack": [
      24.2,
      35.0,
      40.9,
      44.2,
      46.7,
      48.8
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 101.16,
    "change": -0.01,
    "mom": 47.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.1,
    "flow": 65,
    "perf": {
      "w1": 6.02,
      "m1": 20.64,
      "m3": 52.28
    },
    "returns": [
      -0.01,
      -1.0,
      6.02,
      -0.77,
      20.64,
      52.28
    ],
    "volumes": [
      76,
      83,
      84,
      144,
      87,
      32
    ],
    "rsiStack": [
      57.7,
      54.7,
      54.1,
      54.5,
      55.5,
      57.3
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 125.24,
    "change": 1.85,
    "mom": 51.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.2,
    "flow": 90,
    "perf": {
      "w1": 8.89,
      "m1": 11.15,
      "m3": 25.92
    },
    "returns": [
      1.85,
      -3.95,
      8.89,
      2.08,
      11.15,
      25.92
    ],
    "volumes": [
      70,
      110,
      92,
      158,
      61,
      126
    ],
    "rsiStack": [
      53.8,
      52.6,
      52.2,
      52.6,
      53.7,
      55.4
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 41.85,
    "change": -1.83,
    "mom": 51.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.7,
    "flow": 91,
    "perf": {
      "w1": 10.68,
      "m1": 18.93,
      "m3": 24.78
    },
    "returns": [
      -1.83,
      -10.35,
      10.68,
      5.36,
      18.93,
      24.78
    ],
    "volumes": [
      99,
      183,
      81,
      96,
      69,
      119
    ],
    "rsiStack": [
      49.2,
      53.5,
      53.7,
      53.6,
      53.5,
      53.4
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 21.76,
    "change": -4.06,
    "mom": 46.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.3,
    "flow": 100,
    "perf": {
      "w1": -1.94,
      "m1": -11.44,
      "m3": -27.85
    },
    "returns": [
      -4.06,
      -2.81,
      -1.94,
      -6.0,
      -11.44,
      -27.85
    ],
    "volumes": [
      87,
      127,
      115,
      95,
      66,
      111
    ],
    "rsiStack": [
      29.6,
      32.7,
      35.3,
      37.9,
      40.9,
      44.8
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 71.56,
    "change": 0.87,
    "mom": 48.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.6,
    "flow": 77,
    "perf": {
      "w1": 4.73,
      "m1": 1.33,
      "m3": -0.31
    },
    "returns": [
      0.87,
      -0.58,
      4.73,
      -4.87,
      1.33,
      -0.31
    ],
    "volumes": [
      64,
      106,
      115,
      178,
      70,
      136
    ],
    "rsiStack": [
      48.4,
      46.5,
      46.6,
      47.4,
      48.9,
      51.7
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 79065.21,
    "change": -2.45,
    "mom": 37.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 52.1,
    "flow": 114,
    "perf": {
      "w1": -3.74,
      "m1": 1.87,
      "m3": 5.62
    },
    "returns": [
      -2.45,
      -1.75,
      -3.74,
      -2.3,
      1.87,
      5.62
    ],
    "volumes": [
      135,
      100,
      81,
      98,
      113,
      44
    ],
    "rsiStack": [
      39.5,
      47.4,
      52.1,
      54.2,
      54.1,
      50.8
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 195.43,
    "change": -7.82,
    "mom": 44.5,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 49.3,
    "flow": 139,
    "perf": {
      "w1": -2.85,
      "m1": -5.28,
      "m3": 17.77
    },
    "returns": [
      -7.82,
      -5.88,
      -2.85,
      2.19,
      -5.28,
      17.77
    ],
    "volumes": [
      159,
      92,
      128,
      78,
      70,
      142
    ],
    "rsiStack": [
      41.4,
      47.0,
      49.3,
      50.0,
      49.6,
      47.4
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 114.0,
    "change": -7.98,
    "mom": 46.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 52.5,
    "flow": 102,
    "perf": {
      "w1": 0.29,
      "m1": 7.64,
      "m3": 84.11
    },
    "returns": [
      -7.98,
      -7.8,
      0.29,
      14.34,
      7.64,
      84.11
    ],
    "volumes": [
      137,
      183,
      122,
      148,
      95,
      91
    ],
    "rsiStack": [
      42.5,
      50.2,
      52.5,
      53.3,
      53.8,
      54.1
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 177.42,
    "change": -5.11,
    "mom": 41.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.4,
    "flow": 113,
    "perf": {
      "w1": -5.42,
      "m1": 6.55,
      "m3": 37.06
    },
    "returns": [
      -5.11,
      -3.8,
      -5.42,
      0.14,
      6.55,
      37.06
    ],
    "volumes": [
      84,
      77,
      83,
      76,
      114,
      268
    ],
    "rsiStack": [
      43.2,
      50.7,
      54.4,
      55.7,
      56.5,
      60.4
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 59.44,
    "change": 2.36,
    "mom": 58.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.1,
    "flow": 92,
    "perf": {
      "w1": 6.71,
      "m1": 8.03,
      "m3": 7.72
    },
    "returns": [
      2.36,
      3.25,
      6.71,
      1.0,
      8.03,
      7.72
    ],
    "volumes": [
      60,
      91,
      73,
      135,
      81,
      156
    ],
    "rsiStack": [
      74.3,
      63.7,
      59.1,
      57.4,
      57.4,
      59.8
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 176.26,
    "change": -1.81,
    "mom": 49.8,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 72.5,
    "flow": 132,
    "perf": {
      "w1": 0.42,
      "m1": 14.2,
      "m3": 25.71
    },
    "returns": [
      -1.81,
      0.61,
      0.42,
      8.89,
      14.2,
      25.71
    ],
    "volumes": [
      106,
      147,
      107,
      110,
      99,
      75
    ],
    "rsiStack": [
      62.9,
      70.7,
      72.5,
      71.5,
      67.8,
      58.9
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 43.87,
    "change": -2.29,
    "mom": 35.1,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 34.3,
    "flow": 108,
    "perf": {
      "w1": -1.9,
      "m1": -4.96,
      "m3": -4.86
    },
    "returns": [
      -2.29,
      -2.92,
      -1.9,
      -5.76,
      -4.96,
      -4.86
    ],
    "volumes": [
      92,
      139,
      91,
      133,
      82,
      72
    ],
    "rsiStack": [
      21.7,
      29.1,
      34.3,
      38.2,
      41.8,
      43.6
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 145.1,
    "change": -1.04,
    "mom": 53.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.1,
    "flow": 96,
    "perf": {
      "w1": 1.12,
      "m1": -2.49,
      "m3": -7.73
    },
    "returns": [
      -1.04,
      -0.51,
      1.12,
      -0.04,
      -2.49,
      -7.73
    ],
    "volumes": [
      83,
      133,
      118,
      127,
      108,
      68
    ],
    "rsiStack": [
      47.0,
      48.1,
      47.1,
      46.2,
      46.1,
      49.2
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 116.08,
    "change": -0.88,
    "mom": 46.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.2,
    "flow": 93,
    "perf": {
      "w1": -0.74,
      "m1": -2.54,
      "m3": 0.82
    },
    "returns": [
      -0.88,
      0.19,
      -0.74,
      -0.55,
      -2.54,
      0.82
    ],
    "volumes": [
      78,
      116,
      90,
      137,
      175,
      49
    ],
    "rsiStack": [
      43.4,
      47.9,
      50.2,
      51.0,
      51.6,
      54.4
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 51.1,
    "change": -0.37,
    "mom": 45.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.6,
    "flow": 90,
    "perf": {
      "w1": -0.27,
      "m1": -2.54,
      "m3": -2.01
    },
    "returns": [
      -0.37,
      -0.93,
      -0.27,
      -1.58,
      -2.54,
      -2.01
    ],
    "volumes": [
      110,
      133,
      90,
      119,
      121,
      95
    ],
    "rsiStack": [
      39.1,
      42.8,
      46.6,
      48.1,
      48.3,
      47.5
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 43.23,
    "change": -1.55,
    "mom": 37.0,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.1,
    "flow": 93,
    "perf": {
      "w1": -2.66,
      "m1": -2.81,
      "m3": 0.07
    },
    "returns": [
      -1.55,
      -3.03,
      -2.66,
      -2.46,
      -2.81,
      0.07
    ],
    "volumes": [
      91,
      99,
      65,
      105,
      141,
      47
    ],
    "rsiStack": [
      19.8,
      35.6,
      44.1,
      48.2,
      51.1,
      54.4
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 171.4,
    "change": -1.78,
    "mom": 43.7,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.4,
    "flow": 94,
    "perf": {
      "w1": -1.04,
      "m1": -1.22,
      "m3": -2.8
    },
    "returns": [
      -1.78,
      -1.69,
      -1.04,
      -0.9,
      -1.22,
      -2.8
    ],
    "volumes": [
      88,
      84,
      67,
      121,
      76,
      79
    ],
    "rsiStack": [
      36.1,
      44.8,
      48.4,
      50.1,
      51.0,
      50.8
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 50.3,
    "change": -2.65,
    "mom": 40.6,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.4,
    "flow": 112,
    "perf": {
      "w1": -2.5,
      "m1": -3.05,
      "m3": -4.79
    },
    "returns": [
      -2.65,
      -3.53,
      -2.5,
      -2.04,
      -3.05,
      -4.79
    ],
    "volumes": [
      107,
      109,
      72,
      103,
      91,
      86
    ],
    "rsiStack": [
      24.7,
      35.5,
      41.4,
      44.9,
      48.1,
      51.5
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 116.53,
    "change": -1.8,
    "mom": 36.1,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.9,
    "flow": 138,
    "perf": {
      "w1": -3.05,
      "m1": -3.22,
      "m3": 0.25
    },
    "returns": [
      -1.8,
      -1.49,
      -3.05,
      -1.77,
      -3.22,
      0.25
    ],
    "volumes": [
      79,
      86,
      78,
      136,
      167,
      99
    ],
    "rsiStack": [
      24.6,
      39.5,
      46.9,
      49.3,
      48.7,
      42.6
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 84.64,
    "change": -0.4,
    "mom": 56.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.3,
    "flow": 109,
    "perf": {
      "w1": 0.55,
      "m1": 2.64,
      "m3": -3.46
    },
    "returns": [
      -0.4,
      0.24,
      0.55,
      0.56,
      2.64,
      -3.46
    ],
    "volumes": [
      59,
      139,
      91,
      101,
      116,
      77
    ],
    "rsiStack": [
      59.4,
      59.4,
      57.3,
      55.3,
      54.3,
      55.8
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 508.52,
    "change": -4.06,
    "mom": 44.9,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "SELL",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 64.8,
    "flow": 122,
    "perf": {
      "w1": -2.26,
      "m1": 22.33,
      "m3": 42.91
    },
    "returns": [
      -4.06,
      -1.45,
      -2.26,
      9.18,
      22.33,
      42.91
    ],
    "volumes": [
      70,
      200,
      116,
      153,
      68,
      80
    ],
    "rsiStack": [
      50.3,
      60.5,
      64.8,
      66.2,
      65.7,
      61.4
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 27.83,
    "change": -1.49,
    "mom": 31.1,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.9,
    "flow": 136,
    "perf": {
      "w1": -0.5,
      "m1": 3.38,
      "m3": 7.45
    },
    "returns": [
      -1.49,
      -2.59,
      -0.5,
      -1.0,
      3.38,
      7.45
    ],
    "volumes": [
      67,
      104,
      34,
      118,
      81,
      132
    ],
    "rsiStack": [
      35.8,
      45.7,
      50.9,
      53.9,
      55.8,
      55.8
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 45.03,
    "change": -1.05,
    "mom": 40.8,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.8,
    "flow": 227,
    "perf": {
      "w1": -0.38,
      "m1": -0.71,
      "m3": -4.27
    },
    "returns": [
      -1.05,
      -2.38,
      -0.38,
      -1.12,
      -0.71,
      -4.27
    ],
    "volumes": [
      72,
      75,
      101,
      63,
      60,
      90
    ],
    "rsiStack": [
      31.9,
      40.8,
      44.8,
      47.3,
      50.2,
      54.1
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 41.26,
    "change": -2.22,
    "mom": 48.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.8,
    "flow": 7,
    "perf": {
      "w1": -1.35,
      "m1": -0.62,
      "m3": -2.77
    },
    "returns": [
      -2.22,
      0.41,
      -1.35,
      0.38,
      -0.62,
      -2.77
    ],
    "volumes": [
      26,
      4,
      1488,
      62,
      158,
      66
    ],
    "rsiStack": [
      47.1,
      51.1,
      52.8,
      53.2,
      53.3,
      54.0
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.73,
    "change": -1.21,
    "mom": 44.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 47.3,
    "flow": 89,
    "perf": {
      "w1": -0.39,
      "m1": -1.08,
      "m3": -2.8
    },
    "returns": [
      -1.21,
      -1.67,
      -0.39,
      -0.35,
      -1.08,
      -2.8
    ],
    "volumes": [
      138,
      132,
      89,
      13,
      50,
      49
    ],
    "rsiStack": [
      34.8,
      43.6,
      47.3,
      49.4,
      51.2,
      51.8
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 106.82,
    "change": 0.39,
    "mom": 52.4,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 65.5,
    "flow": 82,
    "perf": {
      "w1": 1.8,
      "m1": 6.82,
      "m3": 11.5
    },
    "returns": [
      0.39,
      0.22,
      1.8,
      0.86,
      6.82,
      11.5
    ],
    "volumes": [
      126,
      85,
      61,
      120,
      87,
      111
    ],
    "rsiStack": [
      68.8,
      67.5,
      65.5,
      63.3,
      60.7,
      57.7
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 81.16,
    "change": -0.99,
    "mom": 41.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.2,
    "flow": 64,
    "perf": {
      "w1": -0.61,
      "m1": -2.55,
      "m3": -5.8
    },
    "returns": [
      -0.99,
      -1.78,
      -0.61,
      -2.66,
      -2.55,
      -5.8
    ],
    "volumes": [
      69,
      33,
      548,
      165,
      49,
      143
    ],
    "rsiStack": [
      28.2,
      35.1,
      39.2,
      42.5,
      46.3,
      50.9
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 13.4,
    "change": -7.46,
    "mom": 62.0,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 59.0,
    "flow": 174,
    "perf": {
      "w1": 8.77,
      "m1": 4.12,
      "m3": -2.76
    },
    "returns": [
      -7.46,
      11.76,
      8.77,
      12.79,
      4.12,
      -2.76
    ],
    "volumes": [
      319,
      100,
      92,
      127,
      132,
      106
    ],
    "rsiStack": [
      59.1,
      60.0,
      59.0,
      57.5,
      55.7,
      55.5
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 74.86,
    "change": -3.72,
    "mom": 43.9,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.8,
    "flow": 122,
    "perf": {
      "w1": -5.0,
      "m1": -7.94,
      "m3": -8.11
    },
    "returns": [
      -3.72,
      -2.07,
      -5.0,
      -1.2,
      -7.94,
      -8.11
    ],
    "volumes": [
      117,
      79,
      45,
      82,
      108,
      104
    ],
    "rsiStack": [
      36.8,
      41.0,
      43.8,
      45.4,
      46.7,
      48.2
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 25.09,
    "change": -1.89,
    "mom": 40.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.7,
    "flow": 88,
    "perf": {
      "w1": 0.19,
      "m1": 4.7,
      "m3": 7.49
    },
    "returns": [
      -1.89,
      -3.29,
      0.19,
      -1.39,
      4.7,
      7.49
    ],
    "volumes": [
      105,
      132,
      40,
      95,
      133,
      52
    ],
    "rsiStack": [
      39.3,
      47.4,
      50.7,
      52.3,
      53.4,
      53.0
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 25.33,
    "change": -1.63,
    "mom": 34.8,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 33.2,
    "flow": 98,
    "perf": {
      "w1": -1.36,
      "m1": -8.09,
      "m3": -5.7
    },
    "returns": [
      -1.63,
      -2.09,
      -1.36,
      -3.8,
      -8.09,
      -5.7
    ],
    "volumes": [
      65,
      73,
      106,
      115,
      87,
      84
    ],
    "rsiStack": [
      19.9,
      27.5,
      33.2,
      37.7,
      42.9,
      51.2
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 10.16,
    "change": -1.84,
    "mom": 39.8,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 24.2,
    "flow": 123,
    "perf": {
      "w1": -3.97,
      "m1": -13.83,
      "m3": -14.69
    },
    "returns": [
      -1.84,
      -2.31,
      -3.97,
      -5.14,
      -13.83,
      -14.69
    ],
    "volumes": [
      102,
      90,
      87,
      101,
      187,
      77
    ],
    "rsiStack": [
      8.4,
      16.7,
      24.2,
      30.2,
      36.2,
      40.8
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 9.4,
    "change": -0.42,
    "mom": 45.1,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 34.3,
    "flow": 80,
    "perf": {
      "w1": -3.39,
      "m1": -8.74,
      "m3": -14.47
    },
    "returns": [
      -0.42,
      -0.53,
      -3.39,
      -3.89,
      -8.74,
      -14.47
    ],
    "volumes": [
      115,
      179,
      78,
      113,
      99,
      92
    ],
    "rsiStack": [
      28.7,
      32.1,
      34.3,
      36.8,
      40.2,
      43.8
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 172.17,
    "change": -6.7,
    "mom": 41.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.0,
    "flow": 91,
    "perf": {
      "w1": -8.67,
      "m1": 7.14,
      "m3": 31.77
    },
    "returns": [
      -6.7,
      -13.3,
      -8.67,
      -6.62,
      7.14,
      31.77
    ],
    "volumes": [
      81,
      95,
      66,
      82,
      64,
      101
    ],
    "rsiStack": [
      31.5,
      43.7,
      50.0,
      52.8,
      53.5,
      50.2
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 176.89,
    "change": -3.12,
    "mom": 44.4,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 65.9,
    "flow": 94,
    "perf": {
      "w1": 3.97,
      "m1": 26.63,
      "m3": 122.2
    },
    "returns": [
      -3.12,
      7.53,
      3.97,
      7.24,
      26.63,
      122.2
    ],
    "volumes": [
      124,
      84,
      78,
      83,
      46,
      98
    ],
    "rsiStack": [
      59.8,
      63.2,
      65.9,
      67.3,
      66.8,
      60.5
    ]
  }
];
