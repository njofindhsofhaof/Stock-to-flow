window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-06-04 00:12:42",
  "sections": {
    "Index": {
      "risk": "Risk Off",
      "leader": "KOSPI",
      "watch": 1
    },
    "Commodity": {
      "risk": "Risk On",
      "leader": "SLV",
      "watch": 0
    },
    "Crypto": {
      "risk": "Risk Off",
      "leader": "COIN",
      "watch": 0
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "SOX",
      "watch": 1
    },
    "Stock": {
      "risk": "Neutral",
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
    "price": 7553.68,
    "change": -0.74,
    "mom": 46.0,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 67.0,
    "flow": 60,
    "perf": {
      "w1": 0.44,
      "m1": 4.06,
      "m3": 11.15
    },
    "returns": [
      -0.74,
      -0.35,
      0.44,
      2.72,
      4.06,
      11.15
    ],
    "volumes": [
      103,
      140,
      100,
      91,
      101,
      103
    ],
    "rsiStack": [
      55.7,
      64.5,
      67.0,
      66.8,
      65.1,
      63.1
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 50687.07,
    "change": -1.21,
    "mom": 46.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.6,
    "flow": 102,
    "perf": {
      "w1": 0.08,
      "m1": 2.82,
      "m3": 6.17
    },
    "returns": [
      -1.21,
      -0.68,
      0.08,
      2.68,
      2.82,
      6.17
    ],
    "volumes": [
      104,
      174,
      100,
      92,
      100,
      81
    ],
    "rsiStack": [
      49.4,
      57.4,
      59.6,
      59.5,
      58.5,
      57.8
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 8801.49,
    "change": 0.15,
    "mom": 61.2,
    "phase": "Exhaustion",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 76.7,
    "flow": 91,
    "perf": {
      "w1": 9.37,
      "m1": 33.38,
      "m3": 57.62
    },
    "returns": [
      0.15,
      7.53,
      9.37,
      17.1,
      33.38,
      57.62
    ],
    "volumes": [
      92,
      93,
      70,
      79,
      69,
      74
    ],
    "rsiStack": [
      87.0,
      80.1,
      76.7,
      74.2,
      71.6,
      70.2
    ]
  },
  {
    "symbol": "NI225",
    "dataSymbol": "^N225",
    "section": "Index",
    "name": "Japan Index",
    "category": "Broad",
    "price": 66734.24,
    "change": -0.3,
    "mom": 60.6,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 71.1,
    "flow": 100,
    "perf": {
      "w1": 2.67,
      "m1": 12.57,
      "m3": 18.58
    },
    "returns": [
      -0.3,
      3.16,
      2.67,
      10.21,
      12.57,
      18.58
    ],
    "volumes": [
      100,
      97,
      88,
      90,
      102,
      137
    ],
    "rsiStack": [
      79.1,
      74.5,
      71.1,
      68.2,
      64.6,
      58.7
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 407.87,
    "change": -0.99,
    "mom": 48.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.7,
    "flow": 80,
    "perf": {
      "w1": -0.15,
      "m1": -2.49,
      "m3": -13.68
    },
    "returns": [
      -0.99,
      -2.22,
      -0.15,
      -0.88,
      -2.49,
      -13.68
    ],
    "volumes": [
      65,
      128,
      112,
      92,
      90,
      63
    ],
    "rsiStack": [
      32.2,
      36.0,
      38.7,
      41.0,
      43.4,
      45.7
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 66.21,
    "change": -2.62,
    "mom": 45.8,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.6,
    "flow": 57,
    "perf": {
      "w1": -1.91,
      "m1": 0.46,
      "m3": -15.4
    },
    "returns": [
      -2.62,
      -3.1,
      -1.91,
      -1.03,
      0.46,
      -15.4
    ],
    "volumes": [
      51,
      70,
      67,
      61,
      98,
      57
    ],
    "rsiStack": [
      29.4,
      38.2,
      42.6,
      44.9,
      47.2,
      50.9
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 50.39,
    "change": -5.67,
    "mom": 52.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 46.4,
    "flow": 116,
    "perf": {
      "w1": 0.46,
      "m1": -7.03,
      "m3": -1.33
    },
    "returns": [
      -5.67,
      -0.73,
      0.46,
      6.76,
      -7.03,
      -1.33
    ],
    "volumes": [
      170,
      98,
      89,
      72,
      86,
      83
    ],
    "rsiStack": [
      45.6,
      46.0,
      46.4,
      47.1,
      47.4,
      45.3
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 95.31,
    "change": 1.65,
    "mom": 48.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 48.9,
    "flow": 2,
    "perf": {
      "w1": 7.48,
      "m1": -6.81,
      "m3": 0.57
    },
    "returns": [
      1.65,
      9.1,
      7.48,
      -11.56,
      -6.81,
      0.57
    ],
    "volumes": [
      121,
      101,
      107,
      99,
      77,
      80
    ],
    "rsiStack": [
      57.5,
      49.6,
      48.9,
      49.8,
      51.5,
      54.0
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 116.6,
    "change": 2.75,
    "mom": 45.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.2,
    "flow": 78,
    "perf": {
      "w1": 0.22,
      "m1": -8.93,
      "m3": 5.01
    },
    "returns": [
      2.75,
      3.78,
      0.22,
      -8.81,
      -8.93,
      5.01
    ],
    "volumes": [
      54,
      146,
      87,
      53,
      84,
      80
    ],
    "rsiStack": [
      48.7,
      44.1,
      45.2,
      46.9,
      48.5,
      48.1
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 36.41,
    "change": -4.36,
    "mom": 36.8,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.4,
    "flow": 152,
    "perf": {
      "w1": -6.06,
      "m1": -9.22,
      "m3": -13.66
    },
    "returns": [
      -4.36,
      -6.81,
      -6.06,
      -11.86,
      -9.22,
      -13.66
    ],
    "volumes": [
      68,
      76,
      55,
      59,
      74,
      66
    ],
    "rsiStack": [
      16.2,
      30.4,
      38.4,
      42.7,
      46.0,
      47.9
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 23.3,
    "change": 0.0,
    "mom": 57.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.1,
    "flow": 59,
    "perf": {
      "w1": -1.77,
      "m1": 0.17,
      "m3": -13.45
    },
    "returns": [
      0.0,
      -2.51,
      -1.77,
      8.88,
      0.17,
      -13.45
    ],
    "volumes": [
      62,
      101,
      110,
      91,
      101,
      81
    ],
    "rsiStack": [
      55.5,
      54.9,
      51.1,
      48.4,
      46.4,
      43.5
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 68.81,
    "change": 0.45,
    "mom": 47.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.7,
    "flow": 110,
    "perf": {
      "w1": 0.12,
      "m1": -10.91,
      "m3": -9.23
    },
    "returns": [
      0.45,
      0.38,
      0.12,
      -3.88,
      -10.91,
      -9.23
    ],
    "volumes": [
      103,
      84,
      81,
      55,
      79,
      117
    ],
    "rsiStack": [
      40.5,
      40.3,
      41.7,
      43.5,
      45.9,
      49.3
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 64259.6,
    "change": -3.66,
    "mom": 23.8,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution (Day 2)",
    "signal": "AVOID",
    "dist_streak": 2,
    "acc_streak": 0,
    "rsi": 18.8,
    "flow": 152,
    "perf": {
      "w1": -12.42,
      "m1": -20.72,
      "m3": -4.5
    },
    "returns": [
      -3.66,
      -12.67,
      -12.42,
      -16.53,
      -20.72,
      -4.5
    ],
    "volumes": [
      175,
      59,
      111,
      114,
      66,
      135
    ],
    "rsiStack": [
      4.4,
      11.0,
      18.8,
      26.1,
      33.6,
      37.7
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 163.22,
    "change": -6.19,
    "mom": 37.3,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.9,
    "flow": 96,
    "perf": {
      "w1": -6.08,
      "m1": -17.46,
      "m3": -18.3
    },
    "returns": [
      -6.19,
      -13.65,
      -6.08,
      -15.63,
      -17.46,
      -18.3
    ],
    "volumes": [
      95,
      106,
      84,
      82,
      71,
      101
    ],
    "rsiStack": [
      23.6,
      31.5,
      36.9,
      40.3,
      42.4,
      41.7
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 90.13,
    "change": -10.63,
    "mom": 38.1,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 37.7,
    "flow": 90,
    "perf": {
      "w1": -12.19,
      "m1": -21.07,
      "m3": -19.41
    },
    "returns": [
      -10.63,
      -20.24,
      -12.19,
      -18.82,
      -21.07,
      -19.41
    ],
    "volumes": [
      81,
      132,
      47,
      56,
      62,
      180
    ],
    "rsiStack": [
      21.0,
      31.0,
      37.7,
      41.9,
      45.1,
      46.3
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 126.54,
    "change": -7.01,
    "mom": 32.0,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 30.5,
    "flow": 127,
    "perf": {
      "w1": -17.93,
      "m1": -32.29,
      "m3": -8.93
    },
    "returns": [
      -7.01,
      -20.46,
      -17.93,
      -23.13,
      -32.29,
      -8.93
    ],
    "volumes": [
      200,
      127,
      81,
      86,
      61,
      81
    ],
    "rsiStack": [
      13.4,
      22.3,
      30.5,
      36.3,
      40.4,
      40.0
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 58.71,
    "change": 1.29,
    "mom": 51.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.3,
    "flow": 115,
    "perf": {
      "w1": 3.02,
      "m1": -1.24,
      "m3": 4.24
    },
    "returns": [
      1.29,
      4.3,
      3.02,
      -4.21,
      -1.24,
      4.24
    ],
    "volumes": [
      61,
      83,
      125,
      111,
      86,
      61
    ],
    "rsiStack": [
      62.1,
      55.2,
      53.3,
      52.9,
      53.3,
      53.5
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 196.23,
    "change": -1.0,
    "mom": 57.6,
    "phase": "Exhaustion",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 78.9,
    "flow": 89,
    "perf": {
      "w1": 6.4,
      "m1": 18.47,
      "m3": 40.4
    },
    "returns": [
      -1.0,
      2.73,
      6.4,
      13.27,
      18.47,
      40.4
    ],
    "volumes": [
      80,
      122,
      104,
      93,
      135,
      94
    ],
    "rsiStack": [
      79.6,
      80.0,
      78.9,
      77.2,
      74.5,
      71.5
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 43.71,
    "change": -0.43,
    "mom": 44.8,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 39.6,
    "flow": 94,
    "perf": {
      "w1": -3.17,
      "m1": -5.74,
      "m3": -6.7
    },
    "returns": [
      -0.43,
      -1.6,
      -3.17,
      -1.42,
      -5.74,
      -6.7
    ],
    "volumes": [
      124,
      111,
      83,
      75,
      105,
      90
    ],
    "rsiStack": [
      36.8,
      38.1,
      39.6,
      41.1,
      42.7,
      41.8
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 147.55,
    "change": 0.79,
    "mom": 49.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 51.0,
    "flow": 97,
    "perf": {
      "w1": -0.83,
      "m1": 1.55,
      "m3": -4.35
    },
    "returns": [
      0.79,
      -1.28,
      -0.83,
      0.16,
      1.55,
      -4.35
    ],
    "volumes": [
      121,
      136,
      103,
      71,
      128,
      87
    ],
    "rsiStack": [
      46.4,
      50.2,
      51.0,
      50.3,
      48.8,
      45.8
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 112.08,
    "change": -1.31,
    "mom": 35.6,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 32.7,
    "flow": 123,
    "perf": {
      "w1": -3.6,
      "m1": -3.07,
      "m3": -4.66
    },
    "returns": [
      -1.31,
      -3.12,
      -3.6,
      -3.25,
      -3.07,
      -4.66
    ],
    "volumes": [
      132,
      111,
      116,
      84,
      109,
      119
    ],
    "rsiStack": [
      13.6,
      24.5,
      32.7,
      38.2,
      43.6,
      52.3
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 50.87,
    "change": -1.15,
    "mom": 40.2,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.9,
    "flow": 127,
    "perf": {
      "w1": -1.07,
      "m1": -1.4,
      "m3": 1.07
    },
    "returns": [
      -1.15,
      -1.38,
      -1.07,
      -0.45,
      -1.4,
      1.07
    ],
    "volumes": [
      90,
      97,
      132,
      70,
      108,
      82
    ],
    "rsiStack": [
      28.1,
      37.9,
      42.9,
      45.5,
      47.0,
      47.5
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 43.51,
    "change": 0.05,
    "mom": 42.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 2)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 2,
    "rsi": 44.7,
    "flow": 116,
    "perf": {
      "w1": -2.51,
      "m1": -1.49,
      "m3": 1.23
    },
    "returns": [
      0.05,
      -1.09,
      -2.51,
      -0.98,
      -1.49,
      1.23
    ],
    "volumes": [
      126,
      138,
      67,
      73,
      81,
      114
    ],
    "rsiStack": [
      31.8,
      39.2,
      44.7,
      48.0,
      50.5,
      52.0
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 174.05,
    "change": -0.08,
    "mom": 56.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.6,
    "flow": 87,
    "perf": {
      "w1": -0.14,
      "m1": 0.95,
      "m3": 1.82
    },
    "returns": [
      -0.08,
      0.53,
      -0.14,
      3.15,
      0.95,
      1.82
    ],
    "volumes": [
      110,
      91,
      93,
      86,
      89,
      71
    ],
    "rsiStack": [
      60.6,
      56.2,
      54.6,
      53.9,
      53.4,
      52.4
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 51.63,
    "change": 0.21,
    "mom": 60.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 2)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 2,
    "rsi": 55.2,
    "flow": 103,
    "perf": {
      "w1": 0.88,
      "m1": 0.19,
      "m3": 3.28
    },
    "returns": [
      0.21,
      0.94,
      0.88,
      5.28,
      0.19,
      3.28
    ],
    "volumes": [
      168,
      111,
      85,
      66,
      117,
      103
    ],
    "rsiStack": [
      68.1,
      58.9,
      55.2,
      53.8,
      53.0,
      52.2
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 116.73,
    "change": -0.73,
    "mom": 40.1,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.9,
    "flow": 75,
    "perf": {
      "w1": -3.97,
      "m1": -1.13,
      "m3": 1.87
    },
    "returns": [
      -0.73,
      -3.43,
      -3.97,
      1.48,
      -1.13,
      1.87
    ],
    "volumes": [
      103,
      89,
      157,
      65,
      109,
      79
    ],
    "rsiStack": [
      29.1,
      39.5,
      44.9,
      47.8,
      49.7,
      52.2
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 82.16,
    "change": 0.4,
    "mom": 39.2,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 40.5,
    "flow": 123,
    "perf": {
      "w1": -2.86,
      "m1": -2.26,
      "m3": -4.43
    },
    "returns": [
      0.4,
      -0.9,
      -2.86,
      -4.56,
      -2.26,
      -4.43
    ],
    "volumes": [
      134,
      115,
      105,
      68,
      106,
      95
    ],
    "rsiStack": [
      29.3,
      35.5,
      40.5,
      43.5,
      46.0,
      48.3
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 615.68,
    "change": 1.76,
    "mom": 62.9,
    "phase": "Exhaustion",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 79.7,
    "flow": 95,
    "perf": {
      "w1": 9.17,
      "m1": 27.54,
      "m3": 83.04
    },
    "returns": [
      1.76,
      8.19,
      9.17,
      23.94,
      27.54,
      83.04
    ],
    "volumes": [
      86,
      87,
      138,
      93,
      146,
      112
    ],
    "rsiStack": [
      91.1,
      83.6,
      79.7,
      77.3,
      75.0,
      72.9
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 26.86,
    "change": -0.96,
    "mom": 28.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 34.8,
    "flow": 72,
    "perf": {
      "w1": -2.22,
      "m1": -5.32,
      "m3": 1.17
    },
    "returns": [
      -0.96,
      -1.43,
      -2.22,
      -5.02,
      -5.32,
      1.17
    ],
    "volumes": [
      111,
      117,
      78,
      51,
      48,
      100
    ],
    "rsiStack": [
      14.2,
      26.6,
      34.8,
      40.2,
      45.1,
      50.2
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 45.12,
    "change": 0.58,
    "mom": 65.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.7,
    "flow": 78,
    "perf": {
      "w1": 2.9,
      "m1": -1.98,
      "m3": -0.7
    },
    "returns": [
      0.58,
      2.66,
      2.9,
      1.35,
      -1.98,
      -0.7
    ],
    "volumes": [
      44,
      76,
      110,
      32,
      154,
      127
    ],
    "rsiStack": [
      74.1,
      59.7,
      53.7,
      51.7,
      51.3,
      51.1
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 44.37,
    "change": -0.02,
    "mom": 56.4,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 65.5,
    "flow": 4,
    "perf": {
      "w1": -0.88,
      "m1": 9.47,
      "m3": 13.53
    },
    "returns": [
      -0.02,
      -1.09,
      -0.88,
      9.59,
      9.47,
      13.53
    ],
    "volumes": [
      7,
      15,
      7,
      9,
      15,
      17
    ],
    "rsiStack": [
      68.3,
      68.0,
      65.5,
      63.1,
      60.8,
      60.0
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.08,
    "change": 0.23,
    "mom": 48.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.6,
    "flow": 33,
    "perf": {
      "w1": -0.49,
      "m1": -3.65,
      "m3": 0.83
    },
    "returns": [
      0.23,
      0.27,
      -0.49,
      -1.03,
      -3.65,
      0.83
    ],
    "volumes": [
      92,
      61,
      11,
      153,
      941,
      39
    ],
    "rsiStack": [
      44.4,
      40.3,
      41.6,
      44.0,
      46.9,
      50.2
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 95.89,
    "change": 0.4,
    "mom": 33.9,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 31.8,
    "flow": 110,
    "perf": {
      "w1": -6.08,
      "m1": -8.62,
      "m3": -3.89
    },
    "returns": [
      0.4,
      -3.3,
      -6.08,
      -9.86,
      -8.62,
      -3.89
    ],
    "volumes": [
      125,
      112,
      106,
      110,
      67,
      89
    ],
    "rsiStack": [
      13.8,
      22.1,
      31.8,
      38.7,
      44.5,
      49.0
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 80.14,
    "change": 0.48,
    "mom": 53.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.2,
    "flow": 59,
    "perf": {
      "w1": -0.39,
      "m1": -5.23,
      "m3": -3.04
    },
    "returns": [
      0.48,
      0.86,
      -0.39,
      -1.09,
      -5.23,
      -3.04
    ],
    "volumes": [
      65,
      57,
      26,
      31,
      69,
      107
    ],
    "rsiStack": [
      49.0,
      40.9,
      40.2,
      41.6,
      44.0,
      45.3
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 15.71,
    "change": -2.72,
    "mom": 53.4,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.5,
    "flow": 67,
    "perf": {
      "w1": -1.07,
      "m1": 34.39,
      "m3": 28.88
    },
    "returns": [
      -2.72,
      -9.92,
      -1.07,
      20.29,
      34.39,
      28.88
    ],
    "volumes": [
      85,
      187,
      117,
      154,
      64,
      102
    ],
    "rsiStack": [
      50.6,
      59.4,
      61.5,
      61.5,
      60.2,
      56.8
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 81.7,
    "change": -0.04,
    "mom": 55.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "WATCH",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 58.1,
    "flow": 95,
    "perf": {
      "w1": -2.88,
      "m1": 7.29,
      "m3": 9.39
    },
    "returns": [
      -0.04,
      -1.85,
      -2.88,
      12.49,
      7.29,
      9.39
    ],
    "volumes": [
      144,
      217,
      147,
      87,
      99,
      76
    ],
    "rsiStack": [
      56.6,
      59.3,
      58.1,
      56.7,
      55.3,
      55.7
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 24.32,
    "change": -1.18,
    "mom": 34.3,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.8,
    "flow": 55,
    "perf": {
      "w1": -1.98,
      "m1": -4.48,
      "m3": -0.86
    },
    "returns": [
      -1.18,
      -1.38,
      -1.98,
      -5.63,
      -4.48,
      -0.86
    ],
    "volumes": [
      83,
      51,
      136,
      52,
      40,
      147
    ],
    "rsiStack": [
      19.6,
      31.5,
      38.8,
      43.0,
      46.1,
      46.2
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 25.34,
    "change": -0.82,
    "mom": 36.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.8,
    "flow": 89,
    "perf": {
      "w1": -3.32,
      "m1": -4.2,
      "m3": -5.48
    },
    "returns": [
      -0.82,
      -3.21,
      -3.32,
      -1.25,
      -4.2,
      -5.48
    ],
    "volumes": [
      87,
      135,
      110,
      61,
      106,
      166
    ],
    "rsiStack": [
      24.0,
      32.8,
      36.8,
      39.8,
      43.8,
      51.1
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 10.31,
    "change": -0.67,
    "mom": 53.1,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.4,
    "flow": 89,
    "perf": {
      "w1": -1.34,
      "m1": -2.46,
      "m3": -16.92
    },
    "returns": [
      -0.67,
      0.39,
      -1.34,
      1.18,
      -2.46,
      -16.92
    ],
    "volumes": [
      90,
      114,
      76,
      70,
      93,
      111
    ],
    "rsiStack": [
      40.8,
      39.6,
      38.4,
      39.0,
      41.1,
      44.3
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 9.19,
    "change": -1.39,
    "mom": 47.6,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 37.1,
    "flow": 99,
    "perf": {
      "w1": -3.47,
      "m1": -4.57,
      "m3": -22.12
    },
    "returns": [
      -1.39,
      -3.06,
      -3.47,
      -2.65,
      -4.57,
      -22.12
    ],
    "volumes": [
      66,
      133,
      63,
      117,
      78,
      101
    ],
    "rsiStack": [
      31.8,
      35.6,
      37.1,
      38.3,
      40.1,
      41.3
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 214.6,
    "change": -6.29,
    "mom": 48.8,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Trending up",
    "signal": "WATCH",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 57.7,
    "flow": 124,
    "perf": {
      "w1": -3.0,
      "m1": 10.86,
      "m3": 85.03
    },
    "returns": [
      -6.29,
      -9.08,
      -3.0,
      26.99,
      10.86,
      85.03
    ],
    "volumes": [
      218,
      118,
      68,
      138,
      137,
      82
    ],
    "rsiStack": [
      47.2,
      55.2,
      57.7,
      58.5,
      58.0,
      54.3
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 301.65,
    "change": 3.73,
    "mom": 83.7,
    "phase": "Exhaustion",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 86.9,
    "flow": 286,
    "perf": {
      "w1": 51.81,
      "m1": 78.76,
      "m3": 225.58
    },
    "returns": [
      3.73,
      47.15,
      51.81,
      71.13,
      78.76,
      225.58
    ],
    "volumes": [
      335,
      123,
      213,
      84,
      99,
      79
    ],
    "rsiStack": [
      94.9,
      90.3,
      86.9,
      84.5,
      82.0,
      79.4
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 68.81,
    "chg": 0.45,
    "chgW": 0.12,
    "chgM": -10.91,
    "chgYTD": 11.49,
    "marketCap": "$33.0B",
    "pe": "14.0x",
    "evEbitda": "8.3x",
    "de": "0.6x",
    "drawdown": "-19.4%"
  },
  "MOS": {
    "price": 23.3,
    "chg": 0.0,
    "chgW": -1.77,
    "chgM": 0.17,
    "chgYTD": -3.28,
    "marketCap": "$7.4B",
    "pe": "166.4x",
    "evEbitda": "6.5x",
    "de": "0.5x",
    "drawdown": "-39.1%"
  },
  "CF": {
    "price": 116.6,
    "chg": 2.75,
    "chgW": 0.22,
    "chgM": -8.93,
    "chgYTD": 50.76,
    "marketCap": "$17.9B",
    "pe": "10.5x",
    "evEbitda": "6.5x",
    "de": "0.4x",
    "drawdown": "-17.9%"
  },
  "ICL": {
    "price": 6.12,
    "chg": -1.45,
    "chgW": -7.69,
    "chgM": 9.29,
    "chgYTD": 7.18,
    "marketCap": "$7.9B",
    "pe": "29.1x",
    "evEbitda": "8.4x",
    "de": "0.5x",
    "drawdown": "-16.7%"
  },
  "FMC": {
    "price": 12.35,
    "chg": -5.94,
    "chgW": -8.59,
    "chgM": -16.95,
    "chgYTD": -10.96,
    "marketCap": "$1.5B",
    "pe": "5.6x",
    "evEbitda": "17.6x",
    "de": "2.5x",
    "drawdown": "-72.4%"
  },
  "CTVA": {
    "price": 77.8,
    "chg": 0.3,
    "chgW": -2.62,
    "chgM": -7.27,
    "chgYTD": 16.07,
    "marketCap": "$52.0B",
    "pe": "42.1x",
    "evEbitda": "13.0x",
    "de": "0.1x",
    "drawdown": "-9.1%"
  },
  "ADM": {
    "price": 84.11,
    "chg": 2.0,
    "chgW": 5.73,
    "chgM": 6.21,
    "chgYTD": 46.3,
    "marketCap": "$40.5B",
    "pe": "37.5x",
    "evEbitda": "20.0x",
    "de": "0.5x",
    "drawdown": "-1.5%"
  },
  "BG": {
    "price": 131.41,
    "chg": 1.77,
    "chgW": 8.44,
    "chgM": 0.79,
    "chgYTD": 47.52,
    "marketCap": "$25.5B",
    "pe": "34.6x",
    "evEbitda": "18.6x",
    "de": "0.9x",
    "drawdown": "-2.6%"
  },
  "INGR": {
    "price": 100.9,
    "chg": -0.22,
    "chgW": -2.94,
    "chgM": -5.82,
    "chgYTD": -8.49,
    "marketCap": "$6.4B",
    "pe": "9.7x",
    "evEbitda": "6.1x",
    "de": "0.4x",
    "drawdown": "-28.2%"
  },
  "FPI": {
    "price": 10.31,
    "chg": -0.67,
    "chgW": -1.34,
    "chgM": -2.46,
    "chgYTD": 6.4,
    "marketCap": "$457M",
    "pe": "17.5x",
    "evEbitda": "25.4x",
    "de": "0.5x",
    "drawdown": "-22.0%"
  },
  "LAND": {
    "price": 9.19,
    "chg": -1.39,
    "chgW": -3.47,
    "chgM": -4.57,
    "chgYTD": 0.44,
    "marketCap": "$396M",
    "pe": "-19.3x",
    "evEbitda": "12.8x",
    "de": "0.7x",
    "drawdown": "-29.3%"
  },
  "DE": {
    "price": 588.29,
    "chg": 1.56,
    "chgW": 11.13,
    "chgM": 2.17,
    "chgYTD": 26.36,
    "marketCap": "$158.8B",
    "pe": "33.3x",
    "evEbitda": "23.0x",
    "de": "3.8x",
    "drawdown": "-12.7%"
  },
  "AGCO": {
    "price": 119.62,
    "chg": 1.03,
    "chgW": 4.67,
    "chgM": 4.43,
    "chgYTD": 14.67,
    "marketCap": "$8.7B",
    "pe": "11.5x",
    "evEbitda": "10.6x",
    "de": "0.6x",
    "drawdown": "-16.8%"
  },
  "CNH": {
    "price": 11.04,
    "chg": 0.82,
    "chgW": 4.94,
    "chgM": 6.98,
    "chgYTD": 19.74,
    "marketCap": "$13.7B",
    "pe": "34.5x",
    "evEbitda": "35.8x",
    "de": "3.3x",
    "drawdown": "-22.6%"
  },
  "XYL": {
    "price": 109.69,
    "chg": -0.54,
    "chgW": -0.37,
    "chgM": -5.76,
    "chgYTD": -19.45,
    "marketCap": "$26.1B",
    "pe": "27.4x",
    "evEbitda": "14.4x",
    "de": "0.2x",
    "drawdown": "-28.9%"
  },
  "VMI": {
    "price": 547.14,
    "chg": 0.67,
    "chgW": 4.76,
    "chgM": 5.59,
    "chgYTD": 36.0,
    "marketCap": "$10.6B",
    "pe": "30.4x",
    "evEbitda": "17.8x",
    "de": "0.5x",
    "drawdown": "-0.3%"
  },
  "LNN": {
    "price": 113.28,
    "chg": -0.2,
    "chgW": 1.94,
    "chgM": 3.25,
    "chgYTD": -3.89,
    "marketCap": "$1.2B",
    "pe": "20.7x",
    "evEbitda": "12.7x",
    "de": "0.3x",
    "drawdown": "-25.0%"
  },
  "MWA": {
    "price": 25.18,
    "chg": 0.4,
    "chgW": -1.91,
    "chgM": -8.6,
    "chgYTD": 5.71,
    "marketCap": "$3.9B",
    "pe": "19.1x",
    "evEbitda": "11.6x",
    "de": "0.4x",
    "drawdown": "-18.8%"
  },
  "WTS": {
    "price": 314.65,
    "chg": 1.41,
    "chgW": -0.05,
    "chgM": 7.87,
    "chgYTD": 14.0,
    "marketCap": "$10.5B",
    "pe": "28.8x",
    "evEbitda": "18.4x",
    "de": "0.1x",
    "drawdown": "-8.8%"
  },
  "TSN": {
    "price": 57.09,
    "chg": -4.2,
    "chgW": -13.53,
    "chgM": -16.58,
    "chgYTD": -2.61,
    "marketCap": "$20.1B",
    "pe": "45.0x",
    "evEbitda": "10.3x",
    "de": "0.4x",
    "drawdown": "-17.8%"
  },
  "PPC": {
    "price": 27.58,
    "chg": -1.5,
    "chgW": -4.96,
    "chgM": -11.94,
    "chgYTD": -29.26,
    "marketCap": "$6.6B",
    "pe": "7.4x",
    "evEbitda": "4.6x",
    "de": "0.9x",
    "drawdown": "-45.5%"
  },
  "HRL": {
    "price": 23.13,
    "chg": -0.94,
    "chgW": 10.35,
    "chgM": 10.51,
    "chgYTD": -2.41,
    "marketCap": "$12.7B",
    "pe": "27.2x",
    "evEbitda": "10.0x",
    "de": "0.0x",
    "drawdown": "-27.4%"
  },
  "CAG": {
    "price": 12.58,
    "chg": -2.18,
    "chgW": -5.63,
    "chgM": -10.14,
    "chgYTD": -27.33,
    "marketCap": "$6.0B",
    "pe": "7.6x",
    "evEbitda": "7.8x",
    "de": "0.9x",
    "drawdown": "-44.8%"
  },
  "CALM": {
    "price": 75.35,
    "chg": 1.1,
    "chgW": -0.89,
    "chgM": -1.98,
    "chgYTD": -5.3,
    "marketCap": "$3.6B",
    "pe": "5.2x",
    "evEbitda": "2.5x",
    "de": "–",
    "drawdown": "-40.4%"
  },
  "DBA": {
    "price": 26.86,
    "chg": -0.96,
    "chgW": -2.22,
    "chgM": -5.32,
    "chgYTD": 5.25,
    "marketCap": "–",
    "pe": "11.3x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-6.9%"
  },
  "MOO": {
    "price": 80.14,
    "chg": 0.48,
    "chgW": -0.39,
    "chgM": -5.23,
    "chgYTD": 10.1,
    "marketCap": "–",
    "pe": "19.2x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-7.4%"
  },
  "VEGI": {
    "price": 45.12,
    "chg": 0.58,
    "chgW": 2.9,
    "chgM": -1.98,
    "chgYTD": 16.98,
    "marketCap": "–",
    "pe": "21.2x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-4.5%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "39.4x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
