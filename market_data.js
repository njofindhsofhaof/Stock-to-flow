window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-08-24 22:53:00",
  "sections": {
    "Index": {
      "risk": "Strong ON",
      "leader": "SP500",
      "watch": 0
    },
    "Commodity": {
      "risk": "Strong ON",
      "leader": "SLV",
      "watch": 4
    },
    "Crypto": {
      "risk": "Risk On",
      "leader": "CRCL",
      "watch": 4
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "XLE",
      "watch": 4
    },
    "Stock": {
      "risk": "Neutral",
      "leader": "MRVL",
      "watch": 4
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
    "price": 7652.86,
    "change": -0.28,
    "mom": 40.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.9,
    "flow": 50,
    "perf": {
      "w1": -1.19,
      "m1": 3.23,
      "m3": 1.18
    },
    "returns": [
      -0.28,
      -0.72,
      -1.19,
      -1.29,
      3.23,
      1.18
    ],
    "volumes": [
      89,
      101,
      87,
      93,
      92,
      98
    ],
    "rsiStack": [
      37.8,
      47.5,
      51.9,
      53.6,
      54.2,
      52.1
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 53417.16,
    "change": 0.26,
    "mom": 45.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.9,
    "flow": 88,
    "perf": {
      "w1": -0.08,
      "m1": 2.31,
      "m3": 5.42
    },
    "returns": [
      0.26,
      -0.09,
      -0.08,
      -1.04,
      2.31,
      5.42
    ],
    "volumes": [
      89,
      94,
      91,
      86,
      82,
      100
    ],
    "rsiStack": [
      51.7,
      52.2,
      53.9,
      55.2,
      56.3,
      56.9
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 6912.95,
    "change": 0.88,
    "mom": 57.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.3,
    "flow": 118,
    "perf": {
      "w1": 1.46,
      "m1": -2.59,
      "m3": -14.1
    },
    "returns": [
      0.88,
      0.63,
      1.46,
      9.79,
      -2.59,
      -14.1
    ],
    "volumes": [
      88,
      114,
      118,
      92,
      73,
      92
    ],
    "rsiStack": [
      62.1,
      56.5,
      52.3,
      50.2,
      49.8,
      51.9
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
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.6,
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
      88,
      98,
      78,
      93,
      114,
      86
    ],
    "rsiStack": [
      42.1,
      47.3,
      48.6,
      49.5,
      51.4,
      56.7
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 426.69,
    "change": 0.79,
    "mom": 65.7,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Confirmed Accumulation",
    "signal": "STRONG BUY",
    "dist_streak": 0,
    "acc_streak": 4,
    "rsi": 72.5,
    "flow": 180,
    "perf": {
      "w1": 5.23,
      "m1": 13.9,
      "m3": 3.37
    },
    "returns": [
      0.79,
      3.11,
      5.23,
      6.0,
      13.9,
      3.37
    ],
    "volumes": [
      150,
      196,
      117,
      110,
      143,
      59
    ],
    "rsiStack": [
      83.6,
      78.0,
      72.5,
      67.1,
      61.4,
      57.9
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 62.2,
    "change": -0.83,
    "mom": 59.7,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 64.7,
    "flow": 119,
    "perf": {
      "w1": 4.41,
      "m1": 17.51,
      "m3": -9.01
    },
    "returns": [
      -0.83,
      3.65,
      4.41,
      4.7,
      17.51,
      -9.01
    ],
    "volumes": [
      141,
      141,
      84,
      78,
      143,
      89
    ],
    "rsiStack": [
      70.9,
      68.9,
      64.7,
      60.0,
      55.1,
      51.8
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 45.69,
    "change": -0.82,
    "mom": 55.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 58.2,
    "flow": 84,
    "perf": {
      "w1": 0.97,
      "m1": 13.32,
      "m3": -9.97
    },
    "returns": [
      -0.82,
      1.51,
      0.97,
      2.95,
      13.32,
      -9.97
    ],
    "volumes": [
      131,
      75,
      63,
      99,
      94,
      103
    ],
    "rsiStack": [
      60.6,
      60.5,
      58.2,
      55.1,
      51.7,
      48.2
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 85.08,
    "change": -2.27,
    "mom": 52.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.7,
    "flow": 0,
    "perf": {
      "w1": 0.69,
      "m1": 2.99,
      "m3": -4.3
    },
    "returns": [
      -2.27,
      -0.87,
      0.69,
      3.59,
      2.99,
      -4.3
    ],
    "volumes": [
      103,
      37,
      62,
      88,
      96,
      133
    ],
    "rsiStack": [
      52.2,
      55.5,
      54.7,
      53.2,
      51.5,
      50.5
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 129.24,
    "change": -0.28,
    "mom": 62.6,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 63.3,
    "flow": 83,
    "perf": {
      "w1": 9.73,
      "m1": 7.9,
      "m3": 10.94
    },
    "returns": [
      -0.28,
      8.59,
      9.73,
      6.39,
      7.9,
      10.94
    ],
    "volumes": [
      160,
      105,
      91,
      88,
      123,
      103
    ],
    "rsiStack": [
      78.6,
      68.4,
      63.3,
      60.3,
      57.7,
      56.9
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 37.89,
    "change": -2.8,
    "mom": 55.1,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 59.9,
    "flow": 148,
    "perf": {
      "w1": 3.52,
      "m1": 10.5,
      "m3": -3.91
    },
    "returns": [
      -2.8,
      2.43,
      3.52,
      0.37,
      10.5,
      -3.91
    ],
    "volumes": [
      158,
      157,
      70,
      71,
      156,
      94
    ],
    "rsiStack": [
      59.6,
      61.4,
      59.9,
      57.5,
      55.2,
      56.1
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 24.0,
    "change": -1.68,
    "mom": 63.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 59.8,
    "flow": 104,
    "perf": {
      "w1": 13.05,
      "m1": 7.43,
      "m3": -0.25
    },
    "returns": [
      -1.68,
      7.96,
      13.05,
      2.26,
      7.43,
      -0.25
    ],
    "volumes": [
      163,
      115,
      120,
      106,
      79,
      88
    ],
    "rsiStack": [
      69.4,
      63.5,
      59.8,
      57.3,
      54.8,
      53.3
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 74.29,
    "change": -1.3,
    "mom": 66.2,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 68.5,
    "flow": 78,
    "perf": {
      "w1": 8.79,
      "m1": 10.22,
      "m3": 6.66
    },
    "returns": [
      -1.3,
      5.38,
      8.79,
      12.03,
      10.22,
      6.66
    ],
    "volumes": [
      109,
      132,
      78,
      92,
      146,
      88
    ],
    "rsiStack": [
      78.8,
      73.7,
      68.5,
      64.2,
      59.9,
      57.4
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 78773.4,
    "change": 1.31,
    "mom": 72.5,
    "phase": "Exhaustion",
    "volume": "Spike",
    "rotation": "Trending up",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 82.0,
    "flow": 199,
    "perf": {
      "w1": 13.73,
      "m1": 22.98,
      "m3": 31.9
    },
    "returns": [
      1.31,
      0.56,
      13.73,
      25.09,
      22.98,
      31.9
    ],
    "volumes": [
      118,
      300,
      225,
      108,
      96,
      102
    ],
    "rsiStack": [
      88.8,
      86.3,
      82.0,
      77.0,
      70.4,
      66.0
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 179.48,
    "change": -3.76,
    "mom": 73.2,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 61.7,
    "flow": 135,
    "perf": {
      "w1": 19.22,
      "m1": 7.16,
      "m3": -1.52
    },
    "returns": [
      -3.76,
      12.03,
      19.22,
      20.72,
      7.16,
      -1.52
    ],
    "volumes": [
      240,
      213,
      74,
      96,
      78,
      97
    ],
    "rsiStack": [
      71.1,
      66.5,
      61.7,
      58.0,
      54.3,
      49.9
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 87.72,
    "change": -0.3,
    "mom": 71.4,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 69.0,
    "flow": 129,
    "perf": {
      "w1": 17.6,
      "m1": 33.58,
      "m3": -18.96
    },
    "returns": [
      -0.3,
      11.62,
      17.6,
      30.83,
      33.58,
      -18.96
    ],
    "volumes": [
      199,
      201,
      86,
      93,
      67,
      58
    ],
    "rsiStack": [
      83.1,
      76.5,
      69.0,
      62.5,
      57.2,
      56.7
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 122.63,
    "change": 2.83,
    "mom": 75.6,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Confirmed Accumulation",
    "signal": "STRONG BUY",
    "dist_streak": 0,
    "acc_streak": 3,
    "rsi": 68.0,
    "flow": 186,
    "perf": {
      "w1": 25.54,
      "m1": 24.31,
      "m3": -19.13
    },
    "returns": [
      2.83,
      17.63,
      25.54,
      25.99,
      24.31,
      -19.13
    ],
    "volumes": [
      220,
      278,
      127,
      118,
      87,
      86
    ],
    "rsiStack": [
      84.3,
      75.7,
      68.0,
      61.3,
      55.0,
      49.2
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 63.11,
    "change": -0.83,
    "mom": 52.8,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 67.3,
    "flow": 83,
    "perf": {
      "w1": 0.85,
      "m1": 8.14,
      "m3": 10.82
    },
    "returns": [
      -0.83,
      -0.74,
      0.85,
      4.87,
      8.14,
      10.82
    ],
    "volumes": [
      104,
      92,
      85,
      73,
      114,
      110
    ],
    "rsiStack": [
      64.1,
      68.7,
      67.3,
      64.8,
      61.7,
      59.4
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 180.05,
    "change": -1.78,
    "mom": 35.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.6,
    "flow": 83,
    "perf": {
      "w1": -5.4,
      "m1": 3.3,
      "m3": -3.64
    },
    "returns": [
      -1.78,
      -1.95,
      -5.4,
      -3.37,
      3.3,
      -3.64
    ],
    "volumes": [
      72,
      89,
      76,
      57,
      73,
      93
    ],
    "rsiStack": [
      22.3,
      38.2,
      44.6,
      47.4,
      49.3,
      49.0
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 43.22,
    "change": 1.05,
    "mom": 45.5,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.0,
    "flow": 96,
    "perf": {
      "w1": -2.17,
      "m1": -5.39,
      "m3": -3.16
    },
    "returns": [
      1.05,
      -1.82,
      -2.17,
      0.21,
      -5.39,
      -3.16
    ],
    "volumes": [
      107,
      79,
      82,
      88,
      126,
      92
    ],
    "rsiStack": [
      36.5,
      37.3,
      39.0,
      40.9,
      42.4,
      42.3
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 174.7,
    "change": 0.05,
    "mom": 57.4,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 68.4,
    "flow": 61,
    "perf": {
      "w1": 4.58,
      "m1": 6.92,
      "m3": 15.79
    },
    "returns": [
      0.05,
      -0.56,
      4.58,
      3.72,
      6.92,
      15.79
    ],
    "volumes": [
      103,
      173,
      81,
      74,
      71,
      82
    ],
    "rsiStack": [
      71.4,
      70.4,
      68.4,
      66.6,
      64.3,
      60.4
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 112.32,
    "change": 0.83,
    "mom": 57.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.4,
    "flow": 83,
    "perf": {
      "w1": 1.35,
      "m1": 4.33,
      "m3": -3.73
    },
    "returns": [
      0.83,
      0.9,
      1.35,
      0.44,
      4.33,
      -3.73
    ],
    "volumes": [
      99,
      61,
      66,
      94,
      71,
      97
    ],
    "rsiStack": [
      63.0,
      57.9,
      55.4,
      53.7,
      52.0,
      51.2
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 58.22,
    "change": 1.29,
    "mom": 50.7,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.3,
    "flow": 102,
    "perf": {
      "w1": 1.11,
      "m1": 2.36,
      "m3": 13.56
    },
    "returns": [
      1.29,
      1.29,
      1.11,
      0.71,
      2.36,
      13.56
    ],
    "volumes": [
      90,
      118,
      154,
      77,
      79,
      88
    ],
    "rsiStack": [
      64.7,
      61.3,
      61.3,
      61.9,
      62.8,
      66.3
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 45.33,
    "change": 0.55,
    "mom": 61.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.0,
    "flow": 70,
    "perf": {
      "w1": 1.12,
      "m1": -0.94,
      "m3": 2.07
    },
    "returns": [
      0.55,
      0.76,
      1.12,
      2.09,
      -0.94,
      2.07
    ],
    "volumes": [
      71,
      82,
      157,
      112,
      106,
      89
    ],
    "rsiStack": [
      66.5,
      57.9,
      55.0,
      54.0,
      53.9,
      55.6
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 179.0,
    "change": -0.69,
    "mom": 29.5,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.1,
    "flow": 85,
    "perf": {
      "w1": -3.93,
      "m1": -2.29,
      "m3": 2.99
    },
    "returns": [
      -0.69,
      -1.62,
      -3.93,
      -3.03,
      -2.29,
      2.99
    ],
    "volumes": [
      88,
      132,
      88,
      78,
      51,
      95
    ],
    "rsiStack": [
      19.0,
      31.9,
      40.1,
      44.9,
      48.8,
      53.3
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 53.58,
    "change": 0.07,
    "mom": 61.9,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 61.4,
    "flow": 104,
    "perf": {
      "w1": 2.57,
      "m1": 4.26,
      "m3": 4.32
    },
    "returns": [
      0.07,
      2.02,
      2.57,
      0.75,
      4.26,
      4.32
    ],
    "volumes": [
      127,
      96,
      67,
      90,
      105,
      80
    ],
    "rsiStack": [
      72.6,
      65.2,
      61.4,
      58.9,
      56.5,
      53.9
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 118.3,
    "change": 0.24,
    "mom": 52.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.5,
    "flow": 72,
    "perf": {
      "w1": 1.33,
      "m1": 6.73,
      "m3": -3.08
    },
    "returns": [
      0.24,
      -0.24,
      1.33,
      -1.14,
      6.73,
      -3.08
    ],
    "volumes": [
      100,
      108,
      98,
      61,
      57,
      81
    ],
    "rsiStack": [
      56.5,
      55.4,
      54.5,
      53.6,
      52.6,
      51.6
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 87.45,
    "change": 1.7,
    "mom": 63.8,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 60.3,
    "flow": 85,
    "perf": {
      "w1": 3.27,
      "m1": 2.45,
      "m3": 3.58
    },
    "returns": [
      1.7,
      1.05,
      3.27,
      2.94,
      2.45,
      3.58
    ],
    "volumes": [
      103,
      104,
      101,
      97,
      64,
      114
    ],
    "rsiStack": [
      69.8,
      63.9,
      60.3,
      58.0,
      55.8,
      52.9
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 506.18,
    "change": -2.67,
    "mom": 37.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.4,
    "flow": 83,
    "perf": {
      "w1": -9.47,
      "m1": -1.95,
      "m3": -11.11
    },
    "returns": [
      -2.67,
      -2.6,
      -9.47,
      -4.38,
      -1.95,
      -11.11
    ],
    "volumes": [
      65,
      85,
      59,
      57,
      82,
      137
    ],
    "rsiStack": [
      24.6,
      36.4,
      41.4,
      44.1,
      46.3,
      46.5
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 28.3,
    "change": -0.07,
    "mom": 56.0,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 2)",
    "signal": "REDUCE",
    "dist_streak": 2,
    "acc_streak": 0,
    "rsi": 60.2,
    "flow": 117,
    "perf": {
      "w1": 0.57,
      "m1": 2.46,
      "m3": 2.61
    },
    "returns": [
      -0.07,
      0.04,
      0.57,
      1.73,
      2.46,
      2.61
    ],
    "volumes": [
      128,
      96,
      120,
      66,
      45,
      125
    ],
    "rsiStack": [
      66.5,
      62.8,
      60.2,
      58.5,
      56.7,
      53.9
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 46.6,
    "change": -0.25,
    "mom": 68.9,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 67.2,
    "flow": 145,
    "perf": {
      "w1": 5.17,
      "m1": 2.15,
      "m3": 5.34
    },
    "returns": [
      -0.25,
      5.15,
      5.17,
      4.46,
      2.15,
      5.34
    ],
    "volumes": [
      134,
      29,
      82,
      30,
      74,
      150
    ],
    "rsiStack": [
      83.5,
      73.9,
      67.2,
      62.8,
      58.7,
      54.0
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 44.25,
    "change": -1.15,
    "mom": 40.9,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.9,
    "flow": 41,
    "perf": {
      "w1": -1.76,
      "m1": -2.21,
      "m3": -1.26
    },
    "returns": [
      -1.15,
      -0.33,
      -1.76,
      -0.97,
      -2.21,
      -1.26
    ],
    "volumes": [
      46,
      4,
      16,
      24,
      53,
      17
    ],
    "rsiStack": [
      39.9,
      42.4,
      44.9,
      47.2,
      49.9,
      53.7
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 30.22,
    "change": -0.13,
    "mom": 67.6,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 64.3,
    "flow": 64,
    "perf": {
      "w1": 4.42,
      "m1": 2.23,
      "m3": 3.1
    },
    "returns": [
      -0.13,
      3.1,
      4.42,
      2.61,
      2.23,
      3.1
    ],
    "volumes": [
      142,
      66,
      40,
      148,
      8,
      521
    ],
    "rsiStack": [
      79.0,
      69.6,
      64.3,
      60.8,
      57.4,
      53.3
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 107.49,
    "change": 0.38,
    "mom": 53.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.2,
    "flow": 88,
    "perf": {
      "w1": -0.4,
      "m1": 3.7,
      "m3": 6.69
    },
    "returns": [
      0.38,
      2.39,
      -0.4,
      2.71,
      3.7,
      6.69
    ],
    "volumes": [
      72,
      89,
      78,
      66,
      62,
      86
    ],
    "rsiStack": [
      60.8,
      57.4,
      56.2,
      55.5,
      55.0,
      54.8
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 84.99,
    "change": -0.23,
    "mom": 65.8,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 69.0,
    "flow": 149,
    "perf": {
      "w1": 4.68,
      "m1": 2.4,
      "m3": 5.84
    },
    "returns": [
      -0.23,
      3.48,
      4.68,
      4.26,
      2.4,
      5.84
    ],
    "volumes": [
      316,
      88,
      68,
      87,
      68,
      126
    ],
    "rsiStack": [
      84.7,
      75.3,
      69.0,
      64.7,
      60.0,
      53.4
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 13.93,
    "change": -3.33,
    "mom": 48.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.7,
    "flow": 111,
    "perf": {
      "w1": -0.85,
      "m1": -5.11,
      "m3": -16.34
    },
    "returns": [
      -3.33,
      -3.93,
      -0.85,
      -0.5,
      -5.11,
      -16.34
    ],
    "volumes": [
      93,
      100,
      60,
      50,
      72,
      116
    ],
    "rsiStack": [
      43.3,
      45.5,
      46.7,
      47.8,
      48.9,
      49.5
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 86.98,
    "change": -1.08,
    "mom": 50.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.3,
    "flow": 87,
    "perf": {
      "w1": 3.09,
      "m1": -0.07,
      "m3": 3.12
    },
    "returns": [
      -1.08,
      2.38,
      3.09,
      -1.11,
      -0.07,
      3.12
    ],
    "volumes": [
      92,
      79,
      70,
      50,
      47,
      137
    ],
    "rsiStack": [
      55.4,
      54.4,
      55.3,
      55.5,
      54.3,
      49.0
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 26.99,
    "change": -0.02,
    "mom": 63.1,
    "phase": "Exhaustion",
    "volume": "Spike",
    "rotation": "Trending up",
    "signal": "WATCH",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 75.2,
    "flow": 137,
    "perf": {
      "w1": 2.36,
      "m1": 7.42,
      "m3": 8.67
    },
    "returns": [
      -0.02,
      0.5,
      2.36,
      5.98,
      7.42,
      8.67
    ],
    "volumes": [
      184,
      89,
      424,
      71,
      186,
      113
    ],
    "rsiStack": [
      91.9,
      82.3,
      75.2,
      70.2,
      65.5,
      61.9
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 27.97,
    "change": -0.36,
    "mom": 56.8,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 68.7,
    "flow": 59,
    "perf": {
      "w1": 4.09,
      "m1": 13.38,
      "m3": 7.0
    },
    "returns": [
      -0.36,
      -0.96,
      4.09,
      3.4,
      13.38,
      7.0
    ],
    "volumes": [
      90,
      147,
      75,
      87,
      118,
      93
    ],
    "rsiStack": [
      69.6,
      70.6,
      68.7,
      65.7,
      61.8,
      57.6
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 10.36,
    "change": 1.97,
    "mom": 75.3,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 69.1,
    "flow": 116,
    "perf": {
      "w1": 5.93,
      "m1": 7.69,
      "m3": -0.48
    },
    "returns": [
      1.97,
      3.5,
      5.93,
      6.58,
      7.69,
      -0.48
    ],
    "volumes": [
      102,
      101,
      81,
      70,
      128,
      80
    ],
    "rsiStack": [
      86.1,
      76.5,
      69.1,
      62.9,
      56.6,
      51.0
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.83,
    "change": 2.08,
    "mom": 75.4,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.8,
    "flow": 142,
    "perf": {
      "w1": 7.16,
      "m1": 3.88,
      "m3": -7.92
    },
    "returns": [
      2.08,
      2.56,
      7.16,
      8.61,
      3.88,
      -7.92
    ],
    "volumes": [
      91,
      102,
      110,
      129,
      119,
      82
    ],
    "rsiStack": [
      82.9,
      72.3,
      63.8,
      57.4,
      50.8,
      42.9
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 222.61,
    "change": -3.45,
    "mom": 36.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.5,
    "flow": 86,
    "perf": {
      "w1": -21.29,
      "m1": 6.95,
      "m3": 0.12
    },
    "returns": [
      -3.45,
      -5.2,
      -21.29,
      -7.22,
      6.95,
      0.12
    ],
    "volumes": [
      54,
      94,
      114,
      82,
      78,
      77
    ],
    "rsiStack": [
      30.9,
      41.5,
      45.5,
      47.4,
      48.7,
      47.8
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 229.29,
    "change": -3.27,
    "mom": 49.7,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.9,
    "flow": 78,
    "perf": {
      "w1": -2.15,
      "m1": 21.21,
      "m3": 11.94
    },
    "returns": [
      -3.27,
      -3.36,
      -2.15,
      9.94,
      21.21,
      11.94
    ],
    "volumes": [
      106,
      190,
      97,
      85,
      88,
      82
    ],
    "rsiStack": [
      50.0,
      53.6,
      52.9,
      52.1,
      52.0,
      52.3
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 74.29,
    "chg": -1.3,
    "chgW": 8.79,
    "chgM": 10.22,
    "chgYTD": 20.37,
    "marketCap": "$35.5B",
    "pe": "15.0x",
    "evEbitda": "8.5x",
    "de": "0.5x",
    "drawdown": "-13.0%"
  },
  "MOS": {
    "price": 24.0,
    "chg": -1.68,
    "chgW": 13.05,
    "chgM": 7.43,
    "chgYTD": -0.37,
    "marketCap": "$7.6B",
    "pe": "14.9x",
    "evEbitda": "8.0x",
    "de": "0.5x",
    "drawdown": "-35.1%"
  },
  "CF": {
    "price": 129.24,
    "chg": -0.28,
    "chgW": 9.73,
    "chgM": 7.9,
    "chgYTD": 67.11,
    "marketCap": "$19.6B",
    "pe": "9.6x",
    "evEbitda": "6.2x",
    "de": "0.4x",
    "drawdown": "-9.0%"
  },
  "ICL": {
    "price": 5.75,
    "chg": -0.86,
    "chgW": 5.31,
    "chgM": 11.65,
    "chgYTD": 0.7,
    "marketCap": "–",
    "pe": "24.0x",
    "evEbitda": "7.6x",
    "de": "0.5x",
    "drawdown": "-17.5%"
  },
  "FMC": {
    "price": 11.28,
    "chg": 2.36,
    "chgW": 10.81,
    "chgM": 1.44,
    "chgYTD": -18.67,
    "marketCap": "$1.4B",
    "pe": "6.9x",
    "evEbitda": "19.8x",
    "de": "2.7x",
    "drawdown": "-72.3%"
  },
  "CTVA": {
    "price": 82.81,
    "chg": 1.25,
    "chgW": 8.95,
    "chgM": -5.45,
    "chgYTD": 23.54,
    "marketCap": "$55.3B",
    "pe": "50.2x",
    "evEbitda": "13.4x",
    "de": "0.2x",
    "drawdown": "-9.0%"
  },
  "ADM": {
    "price": 78.16,
    "chg": -2.67,
    "chgW": -3.85,
    "chgM": -6.05,
    "chgYTD": 35.95,
    "marketCap": "$37.7B",
    "pe": "21.4x",
    "evEbitda": "15.8x",
    "de": "0.4x",
    "drawdown": "-11.6%"
  },
  "BG": {
    "price": 110.16,
    "chg": -2.61,
    "chgW": -4.13,
    "chgM": -6.25,
    "chgYTD": 23.66,
    "marketCap": "$21.2B",
    "pe": "23.7x",
    "evEbitda": "12.6x",
    "de": "1.0x",
    "drawdown": "-18.3%"
  },
  "INGR": {
    "price": 106.13,
    "chg": -0.66,
    "chgW": 2.45,
    "chgM": 4.61,
    "chgYTD": -3.75,
    "marketCap": "$6.7B",
    "pe": "11.5x",
    "evEbitda": "6.6x",
    "de": "0.4x",
    "drawdown": "-18.7%"
  },
  "FPI": {
    "price": 10.36,
    "chg": 1.97,
    "chgW": 5.93,
    "chgM": 7.69,
    "chgYTD": 6.91,
    "marketCap": "$455M",
    "pe": "20.3x",
    "evEbitda": "24.5x",
    "de": "0.5x",
    "drawdown": "-21.7%"
  },
  "LAND": {
    "price": 8.83,
    "chg": 2.08,
    "chgW": 7.16,
    "chgM": 3.88,
    "chgYTD": -3.5,
    "marketCap": "$381M",
    "pe": "-29.0x",
    "evEbitda": "12.4x",
    "de": "0.7x",
    "drawdown": "-32.1%"
  },
  "DE": {
    "price": 648.64,
    "chg": 0.18,
    "chgW": 8.12,
    "chgM": 3.78,
    "chgYTD": 39.32,
    "marketCap": "$175.1B",
    "pe": "36.0x",
    "evEbitda": "24.2x",
    "de": "3.8x",
    "drawdown": "-3.8%"
  },
  "AGCO": {
    "price": 110.13,
    "chg": 3.11,
    "chgW": 10.41,
    "chgM": -8.41,
    "chgYTD": 5.57,
    "marketCap": "$7.7B",
    "pe": "15.2x",
    "evEbitda": "10.0x",
    "de": "0.7x",
    "drawdown": "-23.4%"
  },
  "CNH": {
    "price": 11.76,
    "chg": -0.93,
    "chgW": 14.29,
    "chgM": 6.14,
    "chgYTD": 27.55,
    "marketCap": "$18.9B",
    "pe": "47.0x",
    "evEbitda": "37.5x",
    "de": "3.4x",
    "drawdown": "-11.6%"
  },
  "XYL": {
    "price": 114.18,
    "chg": 0.67,
    "chgW": -2.8,
    "chgM": -4.98,
    "chgYTD": -16.16,
    "marketCap": "$26.7B",
    "pe": "27.2x",
    "evEbitda": "14.4x",
    "de": "0.3x",
    "drawdown": "-26.0%"
  },
  "VMI": {
    "price": 481.47,
    "chg": -0.9,
    "chgW": -5.0,
    "chgM": -2.7,
    "chgYTD": 19.67,
    "marketCap": "$9.3B",
    "pe": "18.8x",
    "evEbitda": "14.9x",
    "de": "0.5x",
    "drawdown": "-17.8%"
  },
  "LNN": {
    "price": 116.24,
    "chg": 0.06,
    "chgW": 1.93,
    "chgM": 1.43,
    "chgYTD": -1.38,
    "marketCap": "$1.2B",
    "pe": "22.4x",
    "evEbitda": "13.8x",
    "de": "0.3x",
    "drawdown": "-21.5%"
  },
  "MWA": {
    "price": 25.15,
    "chg": 0.84,
    "chgW": -0.12,
    "chgM": -0.04,
    "chgYTD": 5.58,
    "marketCap": "$3.9B",
    "pe": "17.7x",
    "evEbitda": "10.7x",
    "de": "0.4x",
    "drawdown": "-18.9%"
  },
  "WTS": {
    "price": 372.8,
    "chg": -0.74,
    "chgW": -3.21,
    "chgM": 7.84,
    "chgYTD": 35.06,
    "marketCap": "$12.4B",
    "pe": "32.6x",
    "evEbitda": "21.3x",
    "de": "0.1x",
    "drawdown": "-5.5%"
  },
  "TSN": {
    "price": 57.87,
    "chg": -1.04,
    "chgW": -1.26,
    "chgM": -4.68,
    "chgYTD": -1.28,
    "marketCap": "$20.4B",
    "pe": "35.7x",
    "evEbitda": "10.1x",
    "de": "0.4x",
    "drawdown": "-16.7%"
  },
  "PPC": {
    "price": 31.79,
    "chg": -1.43,
    "chgW": 10.5,
    "chgM": 8.91,
    "chgYTD": -18.47,
    "marketCap": "$7.6B",
    "pe": "13.9x",
    "evEbitda": "5.9x",
    "de": "0.8x",
    "drawdown": "-31.2%"
  },
  "HRL": {
    "price": 24.09,
    "chg": 0.88,
    "chgW": 0.29,
    "chgM": -7.52,
    "chgYTD": 1.65,
    "marketCap": "–",
    "pe": "28.3x",
    "evEbitda": "10.2x",
    "de": "0.0x",
    "drawdown": "-17.4%"
  },
  "CAG": {
    "price": 16.67,
    "chg": 1.46,
    "chgW": 7.27,
    "chgM": 9.38,
    "chgYTD": -3.7,
    "marketCap": "$8.0B",
    "pe": "10.7x",
    "evEbitda": "8.7x",
    "de": "1.2x",
    "drawdown": "-18.0%"
  },
  "CALM": {
    "price": 84.6,
    "chg": 2.17,
    "chgW": 5.17,
    "chgM": -4.64,
    "chgYTD": 6.32,
    "marketCap": "$4.0B",
    "pe": "12.8x",
    "evEbitda": "6.3x",
    "de": "–",
    "drawdown": "-28.0%"
  },
  "DBA": {
    "price": 28.3,
    "chg": -0.07,
    "chgW": 0.57,
    "chgM": 2.46,
    "chgYTD": 10.89,
    "marketCap": "–",
    "pe": "12.0x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-1.9%"
  },
  "MOO": {
    "price": 84.99,
    "chg": -0.23,
    "chgW": 4.68,
    "chgM": 2.4,
    "chgYTD": 16.76,
    "marketCap": "–",
    "pe": "19.4x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-1.8%"
  },
  "VEGI": {
    "price": 46.6,
    "chg": -0.25,
    "chgW": 5.17,
    "chgM": 2.15,
    "chgYTD": 20.82,
    "marketCap": "–",
    "pe": "21.9x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-1.4%"
  },
  "USAG": {},
  "COCO.L": {
    "price": 9.53,
    "chg": -1.4,
    "chgW": -0.17,
    "chgM": 13.35,
    "chgYTD": -8.89,
    "marketCap": "–",
    "pe": "55.7x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-31.9%"
  }
};
