window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-08-11 23:11:37",
  "sections": {
    "Index": {
      "risk": "Risk Off",
      "leader": "SP500",
      "watch": 0
    },
    "Commodity": {
      "risk": "Risk On",
      "leader": "SLV",
      "watch": 0
    },
    "Crypto": {
      "risk": "Risk On",
      "leader": "CRCL",
      "watch": 1
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "XLE",
      "watch": 0
    },
    "Stock": {
      "risk": "Neutral",
      "leader": "GM",
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
    "price": 7728.2,
    "change": -0.32,
    "mom": 57.6,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.4,
    "flow": 48,
    "perf": {
      "w1": -0.11,
      "m1": 2.45,
      "m3": 3.03
    },
    "returns": [
      -0.32,
      0.24,
      -0.11,
      4.03,
      2.45,
      3.03
    ],
    "volumes": [
      92,
      102,
      115,
      106,
      109,
      85
    ],
    "rsiStack": [
      68.5,
      66.7,
      63.4,
      61.3,
      59.8,
      59.1
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 53791.85,
    "change": -0.34,
    "mom": 48.5,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.6,
    "flow": 76,
    "perf": {
      "w1": -0.54,
      "m1": 2.44,
      "m3": 7.45
    },
    "returns": [
      -0.34,
      -0.17,
      -0.54,
      1.98,
      2.44,
      7.45
    ],
    "volumes": [
      82,
      83,
      116,
      143,
      112,
      81
    ],
    "rsiStack": [
      58.7,
      60.9,
      60.6,
      60.3,
      59.9,
      59.5
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 6299.66,
    "change": 0.65,
    "mom": 49.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.4,
    "flow": 80,
    "perf": {
      "w1": 0.67,
      "m1": -15.73,
      "m3": -19.69
    },
    "returns": [
      0.65,
      -4.53,
      0.67,
      -6.75,
      -15.73,
      -19.69
    ],
    "volumes": [
      79,
      84,
      65,
      88,
      66,
      97
    ],
    "rsiStack": [
      47.3,
      44.5,
      43.4,
      43.8,
      45.7,
      50.4
    ]
  },
  {
    "symbol": "NI225",
    "dataSymbol": "^N225",
    "section": "Index",
    "name": "Japan Index",
    "category": "Broad",
    "price": 66970.22,
    "change": 2.08,
    "mom": 60.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.2,
    "flow": 91,
    "perf": {
      "w1": 5.04,
      "m1": -2.32,
      "m3": 9.06
    },
    "returns": [
      2.08,
      1.01,
      5.04,
      3.14,
      -2.32,
      9.06
    ],
    "volumes": [
      114,
      116,
      119,
      129,
      102,
      96
    ],
    "rsiStack": [
      70.4,
      58.9,
      54.2,
      52.7,
      52.7,
      53.2
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 400.96,
    "change": -0.39,
    "mom": 74.2,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 65.8,
    "flow": 93,
    "perf": {
      "w1": 7.16,
      "m1": 7.74,
      "m3": -6.14
    },
    "returns": [
      -0.39,
      2.9,
      7.16,
      8.55,
      7.74,
      -6.14
    ],
    "volumes": [
      143,
      154,
      89,
      107,
      77,
      86
    ],
    "rsiStack": [
      81.8,
      73.6,
      65.8,
      59.9,
      55.8,
      58.5
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 58.55,
    "change": -1.45,
    "mom": 71.5,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 61.2,
    "flow": 87,
    "perf": {
      "w1": 8.75,
      "m1": 10.12,
      "m3": -22.46
    },
    "returns": [
      -1.45,
      4.83,
      8.75,
      13.25,
      10.12,
      -22.46
    ],
    "volumes": [
      143,
      92,
      97,
      80,
      74,
      67
    ],
    "rsiStack": [
      74.6,
      68.7,
      61.2,
      55.6,
      52.1,
      54.1
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 45.17,
    "change": 1.78,
    "mom": 70.9,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.8,
    "flow": 79,
    "perf": {
      "w1": 6.31,
      "m1": 8.71,
      "m3": -13.96
    },
    "returns": [
      1.78,
      4.56,
      6.31,
      15.97,
      8.71,
      -13.96
    ],
    "volumes": [
      94,
      73,
      193,
      124,
      111,
      64
    ],
    "rsiStack": [
      77.7,
      68.4,
      60.8,
      55.5,
      51.5,
      49.6
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 83.49,
    "change": 1.66,
    "mom": 59.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.3,
    "flow": 1,
    "perf": {
      "w1": 10.19,
      "m1": 5.23,
      "m3": -17.48
    },
    "returns": [
      1.66,
      8.02,
      10.19,
      5.34,
      5.23,
      -17.48
    ],
    "volumes": [
      85,
      86,
      123,
      90,
      134,
      172
    ],
    "rsiStack": [
      64.9,
      57.1,
      54.3,
      52.3,
      50.2,
      47.5
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 117.8,
    "change": -3.03,
    "mom": 47.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 48.5,
    "flow": 94,
    "perf": {
      "w1": -0.26,
      "m1": -1.17,
      "m3": -4.2
    },
    "returns": [
      -3.03,
      0.92,
      -0.26,
      -4.17,
      -1.17,
      -4.2
    ],
    "volumes": [
      123,
      145,
      92,
      101,
      90,
      65
    ],
    "rsiStack": [
      44.8,
      46.3,
      48.5,
      49.6,
      50.4,
      51.8
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 36.88,
    "change": -2.3,
    "mom": 66.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 59.8,
    "flow": 78,
    "perf": {
      "w1": 8.6,
      "m1": 3.28,
      "m3": -13.49
    },
    "returns": [
      -2.3,
      5.61,
      8.6,
      4.54,
      3.28,
      -13.49
    ],
    "volumes": [
      156,
      108,
      142,
      89,
      122,
      73
    ],
    "rsiStack": [
      68.1,
      64.1,
      59.8,
      56.2,
      53.9,
      55.9
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 23.1,
    "change": -1.58,
    "mom": 50.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.5,
    "flow": 67,
    "perf": {
      "w1": 1.72,
      "m1": 0.7,
      "m3": 1.85
    },
    "returns": [
      -1.58,
      -1.53,
      1.72,
      0.09,
      0.7,
      1.85
    ],
    "volumes": [
      79,
      107,
      93,
      153,
      107,
      84
    ],
    "rsiStack": [
      53.4,
      55.1,
      54.5,
      53.3,
      51.2,
      48.1
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 67.28,
    "change": 1.46,
    "mom": 51.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 2)",
    "signal": "STRONG BUY",
    "dist_streak": 0,
    "acc_streak": 2,
    "rsi": 50.8,
    "flow": 115,
    "perf": {
      "w1": 0.54,
      "m1": -1.98,
      "m3": -5.16
    },
    "returns": [
      1.46,
      0.78,
      0.54,
      -3.14,
      -1.98,
      -5.16
    ],
    "volumes": [
      146,
      135,
      138,
      94,
      133,
      78
    ],
    "rsiStack": [
      53.5,
      51.0,
      50.8,
      50.4,
      49.7,
      50.2
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 63520.48,
    "change": -0.61,
    "mom": 41.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.1,
    "flow": 98,
    "perf": {
      "w1": -1.15,
      "m1": -3.9,
      "m3": -0.04
    },
    "returns": [
      -0.61,
      -2.13,
      -1.15,
      1.21,
      -3.9,
      -0.04
    ],
    "volumes": [
      103,
      54,
      82,
      102,
      55,
      110
    ],
    "rsiStack": [
      32.6,
      42.5,
      46.1,
      47.1,
      46.8,
      45.6
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 148.58,
    "change": -0.07,
    "mom": 46.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.8,
    "flow": 83,
    "perf": {
      "w1": -1.43,
      "m1": -8.0,
      "m3": -29.92
    },
    "returns": [
      -0.07,
      2.18,
      -1.43,
      -11.51,
      -8.0,
      -29.92
    ],
    "volumes": [
      78,
      76,
      97,
      288,
      73,
      95
    ],
    "rsiStack": [
      41.6,
      42.6,
      43.8,
      45.0,
      48.8,
      61.0
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 71.16,
    "change": 6.13,
    "mom": 74.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.2,
    "flow": 112,
    "perf": {
      "w1": 12.51,
      "m1": 12.56,
      "m3": -42.56
    },
    "returns": [
      6.13,
      12.45,
      12.51,
      10.63,
      12.56,
      -42.56
    ],
    "volumes": [
      67,
      93,
      101,
      112,
      55,
      105
    ],
    "rsiStack": [
      80.7,
      65.3,
      56.2,
      51.2,
      49.1,
      51.9
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 96.09,
    "change": -1.27,
    "mom": 55.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.2,
    "flow": 79,
    "perf": {
      "w1": -1.6,
      "m1": -1.53,
      "m3": -48.61
    },
    "returns": [
      -1.27,
      -0.78,
      -1.6,
      -0.07,
      -1.53,
      -48.61
    ],
    "volumes": [
      87,
      68,
      100,
      128,
      70,
      66
    ],
    "rsiStack": [
      45.3,
      47.7,
      46.2,
      44.9,
      46.1,
      54.5
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 60.93,
    "change": 1.25,
    "mom": 60.4,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 64.0,
    "flow": 77,
    "perf": {
      "w1": 4.12,
      "m1": 6.99,
      "m3": 4.93
    },
    "returns": [
      1.25,
      4.76,
      4.12,
      5.84,
      6.99,
      4.93
    ],
    "volumes": [
      114,
      84,
      125,
      78,
      90,
      98
    ],
    "rsiStack": [
      72.8,
      67.2,
      64.0,
      61.3,
      58.7,
      58.0
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 186.09,
    "change": -0.12,
    "mom": 57.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.5,
    "flow": 63,
    "perf": {
      "w1": -0.43,
      "m1": 1.35,
      "m3": 3.67
    },
    "returns": [
      -0.12,
      0.41,
      -0.43,
      8.77,
      1.35,
      3.67
    ],
    "volumes": [
      73,
      74,
      146,
      100,
      112,
      58
    ],
    "rsiStack": [
      64.3,
      60.1,
      56.5,
      55.0,
      54.8,
      55.8
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 43.63,
    "change": 1.16,
    "mom": 45.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 39.2,
    "flow": 97,
    "perf": {
      "w1": -1.09,
      "m1": -4.51,
      "m3": -2.83
    },
    "returns": [
      1.16,
      0.58,
      -1.09,
      -4.15,
      -4.51,
      -2.83
    ],
    "volumes": [
      126,
      139,
      145,
      117,
      91,
      86
    ],
    "rsiStack": [
      40.3,
      37.1,
      39.2,
      41.9,
      46.6,
      58.5
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 168.01,
    "change": -0.26,
    "mom": 57.8,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 65.2,
    "flow": 70,
    "perf": {
      "w1": 3.65,
      "m1": 6.14,
      "m3": 14.58
    },
    "returns": [
      -0.26,
      2.16,
      3.65,
      0.45,
      6.14,
      14.58
    ],
    "volumes": [
      71,
      95,
      157,
      99,
      130,
      104
    ],
    "rsiStack": [
      75.9,
      68.7,
      65.2,
      63.5,
      62.3,
      63.3
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 111.27,
    "change": -0.5,
    "mom": 55.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.4,
    "flow": 57,
    "perf": {
      "w1": -0.69,
      "m1": -0.16,
      "m3": -4.99
    },
    "returns": [
      -0.5,
      0.08,
      -0.69,
      1.46,
      -0.16,
      -4.99
    ],
    "volumes": [
      71,
      63,
      86,
      77,
      78,
      65
    ],
    "rsiStack": [
      57.0,
      55.5,
      53.4,
      51.8,
      50.3,
      48.9
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 57.8,
    "change": -0.02,
    "mom": 47.3,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 65.1,
    "flow": 56,
    "perf": {
      "w1": -0.14,
      "m1": 2.88,
      "m3": 12.69
    },
    "returns": [
      -0.02,
      -0.02,
      -0.14,
      0.35,
      2.88,
      12.69
    ],
    "volumes": [
      79,
      83,
      93,
      97,
      101,
      124
    ],
    "rsiStack": [
      63.9,
      64.9,
      65.1,
      64.8,
      63.7,
      61.3
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 44.08,
    "change": -0.72,
    "mom": 28.4,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.9,
    "flow": 110,
    "perf": {
      "w1": -2.41,
      "m1": -0.9,
      "m3": 0.39
    },
    "returns": [
      -0.72,
      -1.63,
      -2.41,
      -4.19,
      -0.9,
      0.39
    ],
    "volumes": [
      106,
      101,
      133,
      142,
      122,
      72
    ],
    "rsiStack": [
      18.5,
      30.9,
      38.9,
      43.7,
      48.5,
      57.0
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 185.7,
    "change": 0.6,
    "mom": 54.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.3,
    "flow": 74,
    "perf": {
      "w1": -0.38,
      "m1": 2.91,
      "m3": 6.41
    },
    "returns": [
      0.6,
      0.51,
      -0.38,
      1.76,
      2.91,
      6.41
    ],
    "volumes": [
      51,
      82,
      154,
      110,
      89,
      90
    ],
    "rsiStack": [
      65.1,
      61.7,
      59.3,
      58.1,
      57.4,
      58.9
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 53.24,
    "change": 0.11,
    "mom": 62.3,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.8,
    "flow": 99,
    "perf": {
      "w1": 2.38,
      "m1": 5.13,
      "m3": 3.04
    },
    "returns": [
      0.11,
      2.05,
      2.38,
      1.72,
      5.13,
      3.04
    ],
    "volumes": [
      105,
      82,
      152,
      162,
      108,
      76
    ],
    "rsiStack": [
      72.4,
      66.0,
      61.8,
      59.0,
      57.0,
      57.8
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 119.24,
    "change": -0.36,
    "mom": 61.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.8,
    "flow": 49,
    "perf": {
      "w1": 0.8,
      "m1": 2.88,
      "m3": 0.48
    },
    "returns": [
      -0.36,
      0.97,
      0.8,
      6.01,
      2.88,
      0.48
    ],
    "volumes": [
      57,
      60,
      122,
      155,
      72,
      79
    ],
    "rsiStack": [
      69.3,
      64.6,
      59.8,
      56.8,
      54.6,
      53.1
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 84.69,
    "change": -0.31,
    "mom": 39.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.9,
    "flow": 66,
    "perf": {
      "w1": -0.8,
      "m1": 1.52,
      "m3": -0.34
    },
    "returns": [
      -0.31,
      -0.49,
      -0.8,
      -2.72,
      1.52,
      -0.34
    ],
    "volumes": [
      64,
      75,
      117,
      100,
      196,
      67
    ],
    "rsiStack": [
      36.4,
      46.1,
      48.9,
      50.0,
      50.6,
      51.8
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 534.2,
    "change": 0.91,
    "mom": 54.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.2,
    "flow": 66,
    "perf": {
      "w1": -1.48,
      "m1": -5.94,
      "m3": 0.79
    },
    "returns": [
      0.91,
      0.32,
      -1.48,
      8.7,
      -5.94,
      0.79
    ],
    "volumes": [
      82,
      71,
      102,
      123,
      149,
      74
    ],
    "rsiStack": [
      55.7,
      51.4,
      49.2,
      49.2,
      50.3,
      52.7
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 27.59,
    "change": -0.83,
    "mom": 48.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.7,
    "flow": 61,
    "perf": {
      "w1": -0.25,
      "m1": -0.14,
      "m3": -2.34
    },
    "returns": [
      -0.83,
      0.58,
      -0.25,
      -0.9,
      -0.14,
      -2.34
    ],
    "volumes": [
      45,
      53,
      91,
      48,
      123,
      55
    ],
    "rsiStack": [
      45.4,
      47.6,
      49.7,
      50.8,
      51.1,
      49.6
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 44.84,
    "change": 0.52,
    "mom": 51.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.6,
    "flow": 54,
    "perf": {
      "w1": 0.16,
      "m1": 1.22,
      "m3": -1.47
    },
    "returns": [
      0.52,
      1.06,
      0.16,
      -3.09,
      1.22,
      -1.47
    ],
    "volumes": [
      74,
      41,
      63,
      42,
      118,
      54
    ],
    "rsiStack": [
      55.7,
      51.6,
      51.6,
      51.6,
      51.5,
      53.4
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 44.91,
    "change": 0.52,
    "mom": 43.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.0,
    "flow": 17,
    "perf": {
      "w1": -1.86,
      "m1": 0.01,
      "m3": 6.42
    },
    "returns": [
      0.52,
      0.23,
      -1.86,
      -0.94,
      0.01,
      6.42
    ],
    "volumes": [
      53,
      15,
      11,
      10,
      15,
      27
    ],
    "rsiStack": [
      48.4,
      49.0,
      50.0,
      51.3,
      53.0,
      56.0
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.42,
    "change": -0.1,
    "mom": 50.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.2,
    "flow": 37,
    "perf": {
      "w1": 0.07,
      "m1": 0.41,
      "m3": -2.23
    },
    "returns": [
      -0.1,
      0.2,
      0.07,
      -1.31,
      0.41,
      -2.23
    ],
    "volumes": [
      8,
      86,
      18,
      32,
      228,
      27
    ],
    "rsiStack": [
      49.6,
      51.4,
      52.2,
      52.2,
      51.7,
      51.7
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 106.66,
    "change": 1.92,
    "mom": 57.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.2,
    "flow": 63,
    "perf": {
      "w1": 1.61,
      "m1": 0.46,
      "m3": 0.24
    },
    "returns": [
      1.92,
      1.43,
      1.61,
      3.45,
      0.46,
      0.24
    ],
    "volumes": [
      62,
      76,
      120,
      161,
      110,
      70
    ],
    "rsiStack": [
      64.8,
      59.5,
      57.2,
      55.7,
      53.0,
      44.4
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 81.62,
    "change": 0.12,
    "mom": 47.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.4,
    "flow": 78,
    "perf": {
      "w1": -0.09,
      "m1": 0.13,
      "m3": -0.43
    },
    "returns": [
      0.12,
      0.17,
      -0.09,
      -2.69,
      0.13,
      -0.43
    ],
    "volumes": [
      68,
      79,
      190,
      174,
      120,
      42
    ],
    "rsiStack": [
      47.9,
      48.2,
      50.4,
      51.3,
      51.4,
      52.4
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 13.98,
    "change": -0.14,
    "mom": 42.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.3,
    "flow": 67,
    "perf": {
      "w1": -1.83,
      "m1": 0.29,
      "m3": -3.45
    },
    "returns": [
      -0.14,
      1.38,
      -1.83,
      -6.55,
      0.29,
      -3.45
    ],
    "volumes": [
      72,
      107,
      98,
      102,
      146,
      81
    ],
    "rsiStack": [
      35.8,
      41.7,
      45.3,
      47.6,
      49.7,
      52.4
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 89.35,
    "change": 1.58,
    "mom": 51.2,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 64.6,
    "flow": 43,
    "perf": {
      "w1": 1.18,
      "m1": 16.24,
      "m3": 14.92
    },
    "returns": [
      1.58,
      2.77,
      1.18,
      -1.05,
      16.24,
      14.92
    ],
    "volumes": [
      47,
      74,
      74,
      89,
      178,
      61
    ],
    "rsiStack": [
      67.4,
      66.3,
      64.6,
      62.6,
      60.6,
      60.7
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 25.42,
    "change": -0.18,
    "mom": 56.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 57.4,
    "flow": 23,
    "perf": {
      "w1": 1.94,
      "m1": 2.11,
      "m3": -0.57
    },
    "returns": [
      -0.18,
      1.49,
      1.94,
      0.41,
      2.11,
      -0.57
    ],
    "volumes": [
      186,
      50,
      21,
      175,
      63,
      14
    ],
    "rsiStack": [
      64.5,
      58.9,
      57.4,
      56.4,
      54.8,
      52.0
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 26.62,
    "change": -1.59,
    "mom": 60.9,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 65.4,
    "flow": 72,
    "perf": {
      "w1": 4.76,
      "m1": 9.77,
      "m3": 3.38
    },
    "returns": [
      -1.59,
      1.6,
      4.76,
      5.43,
      9.77,
      3.38
    ],
    "volumes": [
      118,
      125,
      158,
      114,
      120,
      80
    ],
    "rsiStack": [
      69.3,
      69.2,
      65.4,
      61.5,
      57.5,
      55.1
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.74,
    "change": 0.21,
    "mom": 55.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 51.0,
    "flow": 80,
    "perf": {
      "w1": -0.1,
      "m1": 0.83,
      "m3": -5.89
    },
    "returns": [
      0.21,
      -2.01,
      -0.1,
      1.99,
      0.83,
      -5.89
    ],
    "volumes": [
      128,
      145,
      123,
      132,
      81,
      60
    ],
    "rsiStack": [
      50.7,
      52.6,
      51.0,
      48.8,
      47.1,
      49.2
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.21,
    "change": 0.98,
    "mom": 52.6,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.9,
    "flow": 86,
    "perf": {
      "w1": 0.61,
      "m1": -5.2,
      "m3": -13.03
    },
    "returns": [
      0.98,
      -1.56,
      0.61,
      -3.18,
      -5.2,
      -13.03
    ],
    "volumes": [
      119,
      88,
      154,
      167,
      76,
      67
    ],
    "rsiStack": [
      43.5,
      40.7,
      39.9,
      39.9,
      42.6,
      53.6
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 247.69,
    "change": 3.23,
    "mom": 59.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.9,
    "flow": 44,
    "perf": {
      "w1": 4.11,
      "m1": 4.87,
      "m3": 34.22
    },
    "returns": [
      3.23,
      7.49,
      4.11,
      28.82,
      4.87,
      34.22
    ],
    "volumes": [
      78,
      65,
      118,
      106,
      106,
      45
    ],
    "rsiStack": [
      66.1,
      59.8,
      55.9,
      54.3,
      53.8,
      54.0
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 212.31,
    "change": 1.8,
    "mom": 53.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.2,
    "flow": 51,
    "perf": {
      "w1": -2.87,
      "m1": -4.55,
      "m3": 16.28
    },
    "returns": [
      1.8,
      0.84,
      -2.87,
      21.69,
      -4.55,
      16.28
    ],
    "volumes": [
      88,
      71,
      139,
      108,
      112,
      44
    ],
    "rsiStack": [
      58.3,
      53.5,
      50.2,
      49.4,
      50.2,
      52.1
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 67.28,
    "chg": 1.46,
    "chgW": 0.54,
    "chgM": -1.98,
    "chgYTD": 9.01,
    "marketCap": "$32.1B",
    "pe": "13.6x",
    "evEbitda": "7.7x",
    "de": "0.5x",
    "drawdown": "-21.2%"
  },
  "MOS": {
    "price": 23.1,
    "chg": -1.58,
    "chgW": 1.72,
    "chgM": 0.7,
    "chgYTD": -4.11,
    "marketCap": "$7.3B",
    "pe": "13.7x",
    "evEbitda": "7.8x",
    "de": "0.5x",
    "drawdown": "-37.6%"
  },
  "CF": {
    "price": 117.8,
    "chg": -3.03,
    "chgW": -0.26,
    "chgM": -1.17,
    "chgYTD": 52.31,
    "marketCap": "$17.8B",
    "pe": "8.7x",
    "evEbitda": "5.9x",
    "de": "0.4x",
    "drawdown": "-17.0%"
  },
  "ICL": {
    "price": 5.34,
    "chg": 0.0,
    "chgW": 3.69,
    "chgM": 6.59,
    "chgYTD": -6.48,
    "marketCap": "$6.9B",
    "pe": "22.3x",
    "evEbitda": "7.1x",
    "de": "0.5x",
    "drawdown": "-23.4%"
  },
  "FMC": {
    "price": 10.41,
    "chg": -0.48,
    "chgW": -1.33,
    "chgM": -2.89,
    "chgYTD": -24.95,
    "marketCap": "$1.3B",
    "pe": "6.5x",
    "evEbitda": "19.5x",
    "de": "2.7x",
    "drawdown": "-74.5%"
  },
  "CTVA": {
    "price": 76.22,
    "chg": -0.33,
    "chgW": -2.67,
    "chgM": -10.23,
    "chgYTD": 13.71,
    "marketCap": "$50.9B",
    "pe": "46.2x",
    "evEbitda": "12.6x",
    "de": "0.2x",
    "drawdown": "-16.2%"
  },
  "ADM": {
    "price": 80.46,
    "chg": -0.04,
    "chgW": 0.74,
    "chgM": -2.21,
    "chgYTD": 39.95,
    "marketCap": "$38.8B",
    "pe": "22.0x",
    "evEbitda": "15.8x",
    "de": "0.4x",
    "drawdown": "-9.0%"
  },
  "BG": {
    "price": 111.6,
    "chg": -0.93,
    "chgW": 4.56,
    "chgM": -4.31,
    "chgYTD": 25.28,
    "marketCap": "$21.4B",
    "pe": "24.1x",
    "evEbitda": "12.6x",
    "de": "1.0x",
    "drawdown": "-17.3%"
  },
  "INGR": {
    "price": 104.67,
    "chg": 1.15,
    "chgW": 0.04,
    "chgM": 6.59,
    "chgYTD": -5.07,
    "marketCap": "$6.6B",
    "pe": "11.4x",
    "evEbitda": "6.4x",
    "de": "0.4x",
    "drawdown": "-19.8%"
  },
  "FPI": {
    "price": 9.74,
    "chg": 0.21,
    "chgW": -0.1,
    "chgM": 0.83,
    "chgYTD": 0.52,
    "marketCap": "$428M",
    "pe": "19.1x",
    "evEbitda": "23.8x",
    "de": "0.5x",
    "drawdown": "-26.4%"
  },
  "LAND": {
    "price": 8.21,
    "chg": 0.98,
    "chgW": 0.61,
    "chgM": -5.2,
    "chgYTD": -10.27,
    "marketCap": "$354M",
    "pe": "-17.2x",
    "evEbitda": "12.1x",
    "de": "0.7x",
    "drawdown": "-36.8%"
  },
  "DE": {
    "price": 617.95,
    "chg": 1.42,
    "chgW": 0.09,
    "chgM": 5.74,
    "chgYTD": 32.73,
    "marketCap": "$166.8B",
    "pe": "35.0x",
    "evEbitda": "23.7x",
    "de": "3.8x",
    "drawdown": "-8.3%"
  },
  "AGCO": {
    "price": 101.43,
    "chg": 0.56,
    "chgW": -5.38,
    "chgM": -11.14,
    "chgYTD": -2.77,
    "marketCap": "$7.1B",
    "pe": "14.0x",
    "evEbitda": "9.6x",
    "de": "0.7x",
    "drawdown": "-29.5%"
  },
  "CNH": {
    "price": 10.63,
    "chg": 1.43,
    "chgW": -5.26,
    "chgM": 2.02,
    "chgYTD": 15.29,
    "marketCap": "$17.1B",
    "pe": "42.5x",
    "evEbitda": "35.9x",
    "de": "3.4x",
    "drawdown": "-20.1%"
  },
  "XYL": {
    "price": 123.18,
    "chg": 1.64,
    "chgW": 0.83,
    "chgM": 1.34,
    "chgYTD": -9.55,
    "marketCap": "$28.8B",
    "pe": "29.3x",
    "evEbitda": "15.3x",
    "de": "0.3x",
    "drawdown": "-20.2%"
  },
  "VMI": {
    "price": 493.37,
    "chg": 0.23,
    "chgW": -2.01,
    "chgM": -9.22,
    "chgYTD": 22.63,
    "marketCap": "$9.6B",
    "pe": "19.3x",
    "evEbitda": "15.1x",
    "de": "0.5x",
    "drawdown": "-15.8%"
  },
  "LNN": {
    "price": 114.99,
    "chg": -0.19,
    "chgW": -2.33,
    "chgM": -0.41,
    "chgYTD": -2.44,
    "marketCap": "$1.2B",
    "pe": "22.1x",
    "evEbitda": "13.7x",
    "de": "0.3x",
    "drawdown": "-22.3%"
  },
  "MWA": {
    "price": 26.22,
    "chg": 0.54,
    "chgW": -1.43,
    "chgM": 6.15,
    "chgYTD": 10.08,
    "marketCap": "$4.1B",
    "pe": "18.5x",
    "evEbitda": "11.3x",
    "de": "0.4x",
    "drawdown": "-15.4%"
  },
  "WTS": {
    "price": 384.76,
    "chg": 0.17,
    "chgW": 7.45,
    "chgM": 9.93,
    "chgYTD": 39.4,
    "marketCap": "$12.8B",
    "pe": "33.6x",
    "evEbitda": "21.8x",
    "de": "0.1x",
    "drawdown": "-2.5%"
  },
  "TSN": {
    "price": 56.43,
    "chg": -1.28,
    "chgW": -3.93,
    "chgM": -1.83,
    "chgYTD": -3.74,
    "marketCap": "$19.9B",
    "pe": "34.8x",
    "evEbitda": "9.9x",
    "de": "0.4x",
    "drawdown": "-18.8%"
  },
  "PPC": {
    "price": 26.86,
    "chg": 1.32,
    "chgW": -0.37,
    "chgM": -4.82,
    "chgYTD": -31.11,
    "marketCap": "$6.4B",
    "pe": "11.7x",
    "evEbitda": "5.1x",
    "de": "0.8x",
    "drawdown": "-46.7%"
  },
  "HRL": {
    "price": 24.3,
    "chg": -1.62,
    "chgW": -4.1,
    "chgM": -2.06,
    "chgYTD": 2.53,
    "marketCap": "–",
    "pe": "28.6x",
    "evEbitda": "10.6x",
    "de": "0.0x",
    "drawdown": "-17.2%"
  },
  "CAG": {
    "price": 14.93,
    "chg": 1.08,
    "chgW": -0.47,
    "chgM": 5.51,
    "chgYTD": -13.75,
    "marketCap": "–",
    "pe": "9.6x",
    "evEbitda": "8.3x",
    "de": "1.2x",
    "drawdown": "-26.5%"
  },
  "CALM": {
    "price": 82.56,
    "chg": 0.71,
    "chgW": -2.61,
    "chgM": -0.7,
    "chgYTD": 3.76,
    "marketCap": "$3.9B",
    "pe": "12.5x",
    "evEbitda": "6.3x",
    "de": "–",
    "drawdown": "-29.7%"
  },
  "DBA": {
    "price": 27.59,
    "chg": -0.83,
    "chgW": -0.25,
    "chgM": -0.14,
    "chgYTD": 8.11,
    "marketCap": "–",
    "pe": "11.7x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-4.3%"
  },
  "MOO": {
    "price": 81.62,
    "chg": 0.12,
    "chgW": -0.09,
    "chgM": 0.13,
    "chgYTD": 12.13,
    "marketCap": "–",
    "pe": "18.7x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-5.7%"
  },
  "VEGI": {
    "price": 44.84,
    "chg": 0.52,
    "chgW": 0.16,
    "chgM": 1.22,
    "chgYTD": 16.26,
    "marketCap": "–",
    "pe": "21.1x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-5.1%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "52.9x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
