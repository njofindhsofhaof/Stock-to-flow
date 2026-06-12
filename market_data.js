window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-06-12 00:01:03",
  "sections": {
    "Index": {
      "risk": "Neutral",
      "leader": "DJI",
      "watch": 0
    },
    "Commodity": {
      "risk": "Neutral",
      "leader": "MOS",
      "watch": 0
    },
    "Crypto": {
      "risk": "Neutral",
      "leader": "BTC",
      "watch": 0
    },
    "ETF": {
      "risk": "Risk On",
      "leader": "SOX",
      "watch": 7
    },
    "Stock": {
      "risk": "Neutral",
      "leader": "MRVL",
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
    "price": 7394.3,
    "change": 1.75,
    "mom": 40.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.3,
    "flow": 64,
    "perf": {
      "w1": -2.51,
      "m1": -0.67,
      "m3": 10.1
    },
    "returns": [
      1.75,
      -0.15,
      -2.51,
      -2.24,
      -0.67,
      10.1
    ],
    "volumes": [
      93,
      87,
      94,
      103,
      100,
      107
    ],
    "rsiStack": [
      45.2,
      46.2,
      50.3,
      53.5,
      55.5,
      55.3
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 50848.75,
    "change": 1.86,
    "mom": 44.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.6,
    "flow": 95,
    "perf": {
      "w1": -1.38,
      "m1": 2.33,
      "m3": 8.2
    },
    "returns": [
      1.86,
      0.12,
      -1.38,
      0.35,
      2.33,
      8.2
    ],
    "volumes": [
      92,
      88,
      98,
      104,
      100,
      99
    ],
    "rsiStack": [
      53.2,
      54.0,
      55.6,
      56.4,
      56.2,
      54.8
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 7730.82,
    "change": -4.52,
    "mom": 33.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.5,
    "flow": 75,
    "perf": {
      "w1": -12.16,
      "m1": -1.17,
      "m3": 38.46
    },
    "returns": [
      -4.52,
      -5.27,
      -12.16,
      -3.94,
      -1.17,
      38.46
    ],
    "volumes": [
      72,
      72,
      91,
      105,
      70,
      86
    ],
    "rsiStack": [
      39.3,
      45.7,
      50.5,
      53.6,
      55.8,
      55.6
    ]
  },
  {
    "symbol": "NI225",
    "dataSymbol": "^N225",
    "section": "Index",
    "name": "Japan Index",
    "category": "Broad",
    "price": 64179.27,
    "change": -1.89,
    "mom": 35.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.0,
    "flow": 95,
    "perf": {
      "w1": -6.17,
      "m1": 1.43,
      "m3": 16.64
    },
    "returns": [
      -1.89,
      -3.62,
      -6.17,
      -1.26,
      1.43,
      16.64
    ],
    "volumes": [
      93,
      81,
      90,
      100,
      91,
      110
    ],
    "rsiStack": [
      38.0,
      46.8,
      52.0,
      54.7,
      55.6,
      53.0
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 386.32,
    "change": 3.13,
    "mom": 44.7,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 34.9,
    "flow": 176,
    "perf": {
      "w1": -6.07,
      "m1": -10.26,
      "m3": -15.88
    },
    "returns": [
      3.13,
      -2.76,
      -6.07,
      -6.41,
      -10.26,
      -15.88
    ],
    "volumes": [
      208,
      131,
      80,
      65,
      120,
      65
    ],
    "rsiStack": [
      36.0,
      34.0,
      34.9,
      36.9,
      39.8,
      43.5
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 60.82,
    "change": 5.48,
    "mom": 43.3,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 38.4,
    "flow": 136,
    "perf": {
      "w1": -9.2,
      "m1": -23.35,
      "m3": -15.13
    },
    "returns": [
      5.48,
      -1.23,
      -9.2,
      -11.03,
      -23.35,
      -15.13
    ],
    "volumes": [
      128,
      98,
      53,
      51,
      81,
      134
    ],
    "rsiStack": [
      39.1,
      36.4,
      38.4,
      40.9,
      44.3,
      50.2
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 44.83,
    "change": 5.86,
    "mom": 39.7,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 39.2,
    "flow": 112,
    "perf": {
      "w1": -10.84,
      "m1": -15.91,
      "m3": -11.26
    },
    "returns": [
      5.86,
      -2.37,
      -10.84,
      -11.67,
      -15.91,
      -11.26
    ],
    "volumes": [
      134,
      70,
      61,
      170,
      92,
      83
    ],
    "rsiStack": [
      39.3,
      37.8,
      39.2,
      40.9,
      42.6,
      42.0
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 86.13,
    "change": -4.33,
    "mom": 41.7,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 39.4,
    "flow": 2,
    "perf": {
      "w1": -7.43,
      "m1": -14.74,
      "m3": -10.48
    },
    "returns": [
      -4.33,
      -5.66,
      -7.43,
      -3.12,
      -14.74,
      -10.48
    ],
    "volumes": [
      121,
      113,
      87,
      91,
      88,
      76
    ],
    "rsiStack": [
      29.5,
      35.1,
      39.4,
      42.9,
      46.3,
      49.3
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 106.56,
    "change": -2.47,
    "mom": 34.6,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 34.8,
    "flow": 113,
    "perf": {
      "w1": -9.33,
      "m1": -15.09,
      "m3": -13.57
    },
    "returns": [
      -2.47,
      -2.64,
      -9.33,
      -8.53,
      -15.09,
      -13.57
    ],
    "volumes": [
      93,
      104,
      62,
      54,
      66,
      91
    ],
    "rsiStack": [
      20.4,
      28.3,
      34.8,
      39.4,
      43.7,
      47.2
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 34.36,
    "change": 1.66,
    "mom": 40.4,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.6,
    "flow": 69,
    "perf": {
      "w1": -7.58,
      "m1": -24.32,
      "m3": -18.07
    },
    "returns": [
      1.66,
      -0.89,
      -7.58,
      -12.86,
      -24.32,
      -18.07
    ],
    "volumes": [
      86,
      86,
      99,
      68,
      60,
      123
    ],
    "rsiStack": [
      27.1,
      30.0,
      35.6,
      39.9,
      43.6,
      45.5
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 21.09,
    "change": 6.41,
    "mom": 42.6,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 39.6,
    "flow": 148,
    "perf": {
      "w1": -7.9,
      "m1": -7.42,
      "m3": -26.85
    },
    "returns": [
      6.41,
      -1.36,
      -7.9,
      -12.34,
      -7.42,
      -26.85
    ],
    "volumes": [
      165,
      79,
      73,
      62,
      113,
      137
    ],
    "rsiStack": [
      39.7,
      38.8,
      39.6,
      40.3,
      40.1,
      35.5
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 65.56,
    "change": 0.82,
    "mom": 38.5,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 34.0,
    "flow": 137,
    "perf": {
      "w1": -4.99,
      "m1": -8.04,
      "m3": -17.59
    },
    "returns": [
      0.82,
      -2.56,
      -4.99,
      -5.87,
      -8.04,
      -17.59
    ],
    "volumes": [
      147,
      120,
      96,
      103,
      72,
      72
    ],
    "rsiStack": [
      25.9,
      29.6,
      34.0,
      37.7,
      40.9,
      41.9
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 63530.0,
    "change": 3.39,
    "mom": 50.5,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 32.8,
    "flow": 80,
    "perf": {
      "w1": 4.37,
      "m1": -15.84,
      "m3": -10.21
    },
    "returns": [
      3.39,
      0.7,
      4.37,
      -10.92,
      -15.84,
      -10.21
    ],
    "volumes": [
      75,
      95,
      87,
      194,
      143,
      86
    ],
    "rsiStack": [
      47.2,
      35.3,
      32.8,
      34.1,
      37.4,
      41.2
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 160.43,
    "change": 4.2,
    "mom": 46.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.6,
    "flow": 73,
    "perf": {
      "w1": -2.25,
      "m1": -20.5,
      "m3": -23.69
    },
    "returns": [
      4.2,
      -1.04,
      -2.25,
      -11.97,
      -20.5,
      -23.69
    ],
    "volumes": [
      67,
      89,
      87,
      95,
      95,
      83
    ],
    "rsiStack": [
      43.9,
      39.9,
      40.6,
      41.9,
      41.9,
      36.2
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 82.63,
    "change": 4.69,
    "mom": 42.1,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 36.9,
    "flow": 63,
    "perf": {
      "w1": -8.74,
      "m1": -34.72,
      "m3": -37.55
    },
    "returns": [
      4.69,
      0.12,
      -8.74,
      -23.66,
      -34.72,
      -37.55
    ],
    "volumes": [
      59,
      62,
      70,
      81,
      66,
      117
    ],
    "rsiStack": [
      33.6,
      33.2,
      36.9,
      40.3,
      42.6,
      40.3
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 120.15,
    "change": 4.16,
    "mom": 41.9,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 34.2,
    "flow": 94,
    "perf": {
      "w1": -7.13,
      "m1": -32.51,
      "m3": -20.05
    },
    "returns": [
      4.16,
      -5.54,
      -7.13,
      -20.77,
      -32.51,
      -20.05
    ],
    "volumes": [
      86,
      117,
      150,
      200,
      110,
      66
    ],
    "rsiStack": [
      34.3,
      31.6,
      34.2,
      37.5,
      39.7,
      36.0
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 57.12,
    "change": -1.94,
    "mom": 44.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.8,
    "flow": 104,
    "perf": {
      "w1": -2.77,
      "m1": -0.88,
      "m3": -2.38
    },
    "returns": [
      -1.94,
      -2.07,
      -2.77,
      0.3,
      -0.88,
      -2.38
    ],
    "volumes": [
      97,
      69,
      62,
      61,
      119,
      57
    ],
    "rsiStack": [
      39.4,
      43.6,
      45.8,
      47.4,
      49.1,
      49.9
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 183.21,
    "change": 3.73,
    "mom": 38.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 54.3,
    "flow": 118,
    "perf": {
      "w1": -5.16,
      "m1": 3.6,
      "m3": 31.3
    },
    "returns": [
      3.73,
      -0.53,
      -5.16,
      -1.95,
      3.6,
      31.3
    ],
    "volumes": [
      133,
      106,
      102,
      80,
      93,
      91
    ],
    "rsiStack": [
      47.8,
      50.4,
      54.3,
      57.1,
      58.7,
      57.1
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 44.05,
    "change": 0.11,
    "mom": 53.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.1,
    "flow": 88,
    "perf": {
      "w1": 0.25,
      "m1": -1.39,
      "m3": -6.54
    },
    "returns": [
      0.11,
      1.22,
      0.25,
      -1.3,
      -1.39,
      -6.54
    ],
    "volumes": [
      84,
      95,
      83,
      124,
      93,
      134
    ],
    "rsiStack": [
      50.3,
      46.4,
      45.1,
      45.1,
      46.7,
      52.1
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 154.09,
    "change": 0.81,
    "mom": 58.0,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.1,
    "flow": 97,
    "perf": {
      "w1": 1.32,
      "m1": 5.03,
      "m3": 2.97
    },
    "returns": [
      0.81,
      0.94,
      1.32,
      2.13,
      5.03,
      2.97
    ],
    "volumes": [
      105,
      97,
      137,
      121,
      107,
      168
    ],
    "rsiStack": [
      67.4,
      65.6,
      63.1,
      60.4,
      58.1,
      59.9
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 112.12,
    "change": 1.0,
    "mom": 48.0,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.0,
    "flow": 106,
    "perf": {
      "w1": -0.88,
      "m1": -3.97,
      "m3": -2.82
    },
    "returns": [
      1.0,
      0.93,
      -0.88,
      -3.9,
      -3.97,
      -2.82
    ],
    "volumes": [
      99,
      168,
      123,
      132,
      91,
      89
    ],
    "rsiStack": [
      44.5,
      39.3,
      40.0,
      41.8,
      43.9,
      45.7
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 52.62,
    "change": 0.75,
    "mom": 57.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.5,
    "flow": 111,
    "perf": {
      "w1": 0.82,
      "m1": 3.2,
      "m3": 6.17
    },
    "returns": [
      0.75,
      1.25,
      0.82,
      2.63,
      3.2,
      6.17
    ],
    "volumes": [
      85,
      106,
      159,
      90,
      116,
      101
    ],
    "rsiStack": [
      67.3,
      62.5,
      59.5,
      57.3,
      55.0,
      52.6
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 44.92,
    "change": -0.16,
    "mom": 53.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.2,
    "flow": 111,
    "perf": {
      "w1": 1.17,
      "m1": 1.61,
      "m3": 5.15
    },
    "returns": [
      -0.16,
      2.02,
      1.17,
      1.15,
      1.61,
      5.15
    ],
    "volumes": [
      93,
      102,
      107,
      126,
      67,
      101
    ],
    "rsiStack": [
      63.9,
      60.0,
      58.2,
      57.4,
      57.1,
      58.2
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 175.15,
    "change": 3.24,
    "mom": 51.1,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 54.1,
    "flow": 132,
    "perf": {
      "w1": -0.57,
      "m1": 0.88,
      "m3": 5.2
    },
    "returns": [
      3.24,
      0.88,
      -0.57,
      0.78,
      0.88,
      5.2
    ],
    "volumes": [
      172,
      71,
      87,
      110,
      109,
      72
    ],
    "rsiStack": [
      56.4,
      54.8,
      54.1,
      53.7,
      53.6,
      54.1
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 51.22,
    "change": 3.27,
    "mom": 51.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.0,
    "flow": 99,
    "perf": {
      "w1": -0.77,
      "m1": -1.61,
      "m3": 3.43
    },
    "returns": [
      3.27,
      2.52,
      -0.77,
      -0.27,
      -1.61,
      3.43
    ],
    "volumes": [
      80,
      92,
      82,
      168,
      98,
      84
    ],
    "rsiStack": [
      57.2,
      53.6,
      52.0,
      51.5,
      51.4,
      51.9
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 116.3,
    "change": 2.48,
    "mom": 46.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.3,
    "flow": 103,
    "perf": {
      "w1": -0.82,
      "m1": -2.04,
      "m3": 2.76
    },
    "returns": [
      2.48,
      0.79,
      -0.82,
      -4.72,
      -2.04,
      2.76
    ],
    "volumes": [
      96,
      82,
      65,
      103,
      91,
      61
    ],
    "rsiStack": [
      50.3,
      46.8,
      47.3,
      48.4,
      49.8,
      53.1
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 85.27,
    "change": -0.26,
    "mom": 62.8,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.5,
    "flow": 143,
    "perf": {
      "w1": 3.94,
      "m1": 0.65,
      "m3": 0.67
    },
    "returns": [
      -0.26,
      2.65,
      3.94,
      0.99,
      0.65,
      0.67
    ],
    "volumes": [
      107,
      78,
      102,
      134,
      56,
      91
    ],
    "rsiStack": [
      71.8,
      62.7,
      58.5,
      56.2,
      54.7,
      54.9
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 586.93,
    "change": 8.39,
    "mom": 41.9,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 60.1,
    "flow": 109,
    "perf": {
      "w1": -2.62,
      "m1": 11.1,
      "m3": 72.5
    },
    "returns": [
      8.39,
      2.71,
      -2.62,
      3.07,
      11.1,
      72.5
    ],
    "volumes": [
      156,
      132,
      129,
      86,
      81,
      99
    ],
    "rsiStack": [
      58.8,
      58.5,
      60.1,
      61.5,
      62.6,
      62.7
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 26.3,
    "change": -0.11,
    "mom": 35.1,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 28.7,
    "flow": 72,
    "perf": {
      "w1": -1.46,
      "m1": -8.46,
      "m3": -1.2
    },
    "returns": [
      -0.11,
      -0.11,
      -1.46,
      -4.64,
      -8.46,
      -1.2
    ],
    "volumes": [
      51,
      82,
      94,
      111,
      37,
      109
    ],
    "rsiStack": [
      13.4,
      20.8,
      28.7,
      34.6,
      39.4,
      40.1
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 43.34,
    "change": 0.56,
    "mom": 43.4,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.5,
    "flow": 78,
    "perf": {
      "w1": -3.3,
      "m1": -5.82,
      "m3": -4.85
    },
    "returns": [
      0.56,
      -0.23,
      -3.3,
      -2.03,
      -5.82,
      -4.85
    ],
    "volumes": [
      32,
      141,
      184,
      44,
      55,
      140
    ],
    "rsiStack": [
      34.8,
      36.5,
      38.5,
      40.8,
      44.0,
      48.3
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 44.94,
    "change": 3.64,
    "mom": 47.5,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.5,
    "flow": 535,
    "perf": {
      "w1": 0.83,
      "m1": 8.46,
      "m3": 17.64
    },
    "returns": [
      3.64,
      0.76,
      0.83,
      0.29,
      8.46,
      17.64
    ],
    "volumes": [
      58,
      356,
      4,
      7,
      10,
      26
    ],
    "rsiStack": [
      60.5,
      61.3,
      61.5,
      60.9,
      59.8,
      59.9
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 28.39,
    "change": 1.98,
    "mom": 49.9,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.1,
    "flow": 27,
    "perf": {
      "w1": -0.42,
      "m1": -5.9,
      "m3": -3.07
    },
    "returns": [
      1.98,
      0.85,
      -0.42,
      -3.14,
      -5.9,
      -3.07
    ],
    "volumes": [
      114,
      10,
      1374,
      92,
      101,
      59
    ],
    "rsiStack": [
      46.7,
      39.9,
      39.1,
      40.5,
      42.9,
      44.6
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 102.28,
    "change": 3.56,
    "mom": 61.3,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.5,
    "flow": 127,
    "perf": {
      "w1": 8.65,
      "m1": -3.46,
      "m3": 4.83
    },
    "returns": [
      3.56,
      7.87,
      8.65,
      1.52,
      -3.46,
      4.83
    ],
    "volumes": [
      108,
      94,
      98,
      125,
      84,
      112
    ],
    "rsiStack": [
      76.5,
      62.2,
      56.5,
      54.6,
      54.0,
      54.2
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 77.93,
    "change": 0.92,
    "mom": 46.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 34.4,
    "flow": 45,
    "perf": {
      "w1": -2.88,
      "m1": -5.37,
      "m3": -7.93
    },
    "returns": [
      0.92,
      0.43,
      -2.88,
      -2.95,
      -5.37,
      -7.93
    ],
    "volumes": [
      40,
      88,
      38,
      65,
      46,
      65
    ],
    "rsiStack": [
      37.2,
      33.8,
      34.4,
      36.5,
      40.1,
      45.1
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 14.71,
    "change": 2.87,
    "mom": 38.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.3,
    "flow": 50,
    "perf": {
      "w1": -4.11,
      "m1": 8.4,
      "m3": 23.2
    },
    "returns": [
      2.87,
      -1.93,
      -4.11,
      -11.65,
      8.4,
      23.2
    ],
    "volumes": [
      58,
      38,
      58,
      85,
      125,
      423
    ],
    "rsiStack": [
      40.9,
      48.1,
      52.3,
      54.0,
      54.4,
      52.6
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 80.85,
    "change": 1.83,
    "mom": 40.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 52.0,
    "flow": 58,
    "perf": {
      "w1": -2.85,
      "m1": 6.65,
      "m3": 9.2
    },
    "returns": [
      1.83,
      -3.49,
      -2.85,
      -4.15,
      6.65,
      9.2
    ],
    "volumes": [
      135,
      112,
      90,
      144,
      110,
      120
    ],
    "rsiStack": [
      44.0,
      49.7,
      52.0,
      52.7,
      53.0,
      55.0
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 23.68,
    "change": -0.56,
    "mom": 35.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 31.2,
    "flow": 90,
    "perf": {
      "w1": -1.43,
      "m1": -9.07,
      "m3": -3.04
    },
    "returns": [
      -0.56,
      -0.85,
      -1.43,
      -4.68,
      -9.07,
      -3.04
    ],
    "volumes": [
      31,
      43,
      119,
      83,
      49,
      157
    ],
    "rsiStack": [
      9.4,
      22.0,
      31.2,
      37.0,
      41.6,
      43.3
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 26.17,
    "change": 2.23,
    "mom": 62.8,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.1,
    "flow": 135,
    "perf": {
      "w1": 1.87,
      "m1": 0.81,
      "m3": -4.66
    },
    "returns": [
      2.23,
      2.15,
      1.87,
      0.11,
      0.81,
      -4.66
    ],
    "volumes": [
      91,
      126,
      92,
      87,
      73,
      106
    ],
    "rsiStack": [
      65.7,
      57.8,
      53.1,
      50.8,
      51.1,
      57.7
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.89,
    "change": -0.2,
    "mom": 43.2,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 31.5,
    "flow": 103,
    "perf": {
      "w1": -3.79,
      "m1": -4.9,
      "m3": -16.82
    },
    "returns": [
      -0.2,
      -2.37,
      -3.79,
      -5.0,
      -4.9,
      -16.82
    ],
    "volumes": [
      168,
      110,
      103,
      90,
      92,
      132
    ],
    "rsiStack": [
      23.9,
      28.7,
      31.5,
      33.9,
      37.2,
      40.9
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 9.0,
    "change": -1.21,
    "mom": 44.2,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.9,
    "flow": 125,
    "perf": {
      "w1": -3.54,
      "m1": -5.56,
      "m3": -23.73
    },
    "returns": [
      -1.21,
      -1.32,
      -3.54,
      -6.15,
      -5.56,
      -23.73
    ],
    "volumes": [
      82,
      94,
      63,
      66,
      67,
      118
    ],
    "rsiStack": [
      29.1,
      33.8,
      35.9,
      37.3,
      38.8,
      37.8
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 264.76,
    "change": 11.39,
    "mom": 55.9,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 2)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 2,
    "rsi": 70.4,
    "flow": 136,
    "perf": {
      "w1": 21.73,
      "m1": 39.82,
      "m3": 154.43
    },
    "returns": [
      11.39,
      19.12,
      21.73,
      19.07,
      39.82,
      154.43
    ],
    "volumes": [
      151,
      104,
      97,
      218,
      80,
      104
    ],
    "rsiStack": [
      82.8,
      74.7,
      70.4,
      67.8,
      65.3,
      61.7
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 280.71,
    "change": 11.13,
    "mom": 46.3,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.3,
    "flow": 103,
    "perf": {
      "w1": -11.29,
      "m1": 57.75,
      "m3": 209.19
    },
    "returns": [
      11.13,
      -2.82,
      -11.29,
      37.05,
      57.75,
      209.19
    ],
    "volumes": [
      101,
      175,
      209,
      335,
      194,
      124
    ],
    "rsiStack": [
      58.8,
      61.4,
      63.3,
      64.5,
      65.5,
      66.1
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 65.56,
    "chg": 0.82,
    "chgW": -4.99,
    "chgM": -8.04,
    "chgYTD": 6.22,
    "marketCap": "$31.5B",
    "pe": "13.4x",
    "evEbitda": "8.0x",
    "de": "0.6x",
    "drawdown": "-23.2%"
  },
  "MOS": {
    "price": 21.09,
    "chg": 6.41,
    "chgW": -7.9,
    "chgM": -7.42,
    "chgYTD": -12.45,
    "marketCap": "$6.7B",
    "pe": "150.6x",
    "evEbitda": "6.0x",
    "de": "0.5x",
    "drawdown": "-44.8%"
  },
  "CF": {
    "price": 106.56,
    "chg": -2.47,
    "chgW": -9.33,
    "chgM": -15.09,
    "chgYTD": 37.78,
    "marketCap": "$16.4B",
    "pe": "9.6x",
    "evEbitda": "6.1x",
    "de": "0.4x",
    "drawdown": "-24.9%"
  },
  "ICL": {
    "price": 5.67,
    "chg": 3.09,
    "chgW": -3.74,
    "chgM": -16.86,
    "chgYTD": -0.7,
    "marketCap": "$7.3B",
    "pe": "27.0x",
    "evEbitda": "7.8x",
    "de": "0.5x",
    "drawdown": "-22.9%"
  },
  "FMC": {
    "price": 11.27,
    "chg": 4.35,
    "chgW": -7.55,
    "chgM": -11.47,
    "chgYTD": -18.75,
    "marketCap": "$1.4B",
    "pe": "5.1x",
    "evEbitda": "17.2x",
    "de": "2.5x",
    "drawdown": "-74.8%"
  },
  "CTVA": {
    "price": 74.86,
    "chg": 0.54,
    "chgW": -3.36,
    "chgM": -10.19,
    "chgYTD": 11.68,
    "marketCap": "$50.1B",
    "pe": "40.5x",
    "evEbitda": "12.5x",
    "de": "0.1x",
    "drawdown": "-12.6%"
  },
  "ADM": {
    "price": 78.9,
    "chg": -2.93,
    "chgW": -5.36,
    "chgM": -4.81,
    "chgYTD": 37.24,
    "marketCap": "$38.0B",
    "pe": "35.2x",
    "evEbitda": "19.5x",
    "de": "0.5x",
    "drawdown": "-7.6%"
  },
  "BG": {
    "price": 125.28,
    "chg": -2.29,
    "chgW": -3.2,
    "chgM": -0.59,
    "chgYTD": 40.64,
    "marketCap": "$24.3B",
    "pe": "33.0x",
    "evEbitda": "18.1x",
    "de": "0.9x",
    "drawdown": "-7.1%"
  },
  "INGR": {
    "price": 100.9,
    "chg": -1.6,
    "chgW": 1.45,
    "chgM": -4.8,
    "chgYTD": -8.49,
    "marketCap": "$6.4B",
    "pe": "9.7x",
    "evEbitda": "6.2x",
    "de": "0.4x",
    "drawdown": "-28.2%"
  },
  "FPI": {
    "price": 9.89,
    "chg": -0.2,
    "chgW": -3.79,
    "chgM": -4.9,
    "chgYTD": 2.06,
    "marketCap": "$439M",
    "pe": "16.8x",
    "evEbitda": "24.6x",
    "de": "0.5x",
    "drawdown": "-25.2%"
  },
  "LAND": {
    "price": 9.0,
    "chg": -1.21,
    "chgW": -3.54,
    "chgM": -5.56,
    "chgYTD": -1.64,
    "marketCap": "$388M",
    "pe": "-18.9x",
    "evEbitda": "12.7x",
    "de": "0.7x",
    "drawdown": "-30.8%"
  },
  "DE": {
    "price": 568.64,
    "chg": 1.53,
    "chgW": -3.91,
    "chgM": -2.07,
    "chgYTD": 22.14,
    "marketCap": "$153.5B",
    "pe": "32.2x",
    "evEbitda": "22.4x",
    "de": "3.8x",
    "drawdown": "-15.7%"
  },
  "AGCO": {
    "price": 111.03,
    "chg": 2.13,
    "chgW": -7.37,
    "chgM": -4.25,
    "chgYTD": 6.43,
    "marketCap": "$8.0B",
    "pe": "10.7x",
    "evEbitda": "10.0x",
    "de": "0.6x",
    "drawdown": "-22.8%"
  },
  "CNH": {
    "price": 10.36,
    "chg": 1.77,
    "chgW": -4.52,
    "chgM": -3.72,
    "chgYTD": 12.36,
    "marketCap": "$12.8B",
    "pe": "32.4x",
    "evEbitda": "35.0x",
    "de": "3.3x",
    "drawdown": "-27.4%"
  },
  "XYL": {
    "price": 109.05,
    "chg": 1.79,
    "chgW": -1.03,
    "chgM": 0.04,
    "chgYTD": -19.92,
    "marketCap": "$25.9B",
    "pe": "27.1x",
    "evEbitda": "14.3x",
    "de": "0.2x",
    "drawdown": "-29.3%"
  },
  "VMI": {
    "price": 528.56,
    "chg": 3.18,
    "chgW": -3.0,
    "chgM": 2.91,
    "chgYTD": 31.38,
    "marketCap": "$10.3B",
    "pe": "29.4x",
    "evEbitda": "16.8x",
    "de": "0.5x",
    "drawdown": "-3.7%"
  },
  "LNN": {
    "price": 114.68,
    "chg": 1.71,
    "chgW": 0.53,
    "chgM": 8.7,
    "chgYTD": -2.71,
    "marketCap": "$1.2B",
    "pe": "21.0x",
    "evEbitda": "12.7x",
    "de": "0.3x",
    "drawdown": "-24.0%"
  },
  "MWA": {
    "price": 25.62,
    "chg": -0.04,
    "chgW": 2.11,
    "chgM": 0.71,
    "chgYTD": 7.56,
    "marketCap": "$4.0B",
    "pe": "19.4x",
    "evEbitda": "11.9x",
    "de": "0.4x",
    "drawdown": "-17.4%"
  },
  "WTS": {
    "price": 320.89,
    "chg": 2.4,
    "chgW": 1.85,
    "chgM": 6.96,
    "chgYTD": 16.26,
    "marketCap": "$10.7B",
    "pe": "29.3x",
    "evEbitda": "18.6x",
    "de": "0.1x",
    "drawdown": "-7.0%"
  },
  "TSN": {
    "price": 55.64,
    "chg": -0.87,
    "chgW": -2.18,
    "chgM": -16.82,
    "chgYTD": -5.08,
    "marketCap": "$19.6B",
    "pe": "43.8x",
    "evEbitda": "10.1x",
    "de": "0.4x",
    "drawdown": "-19.9%"
  },
  "PPC": {
    "price": 29.66,
    "chg": 0.54,
    "chgW": 2.38,
    "chgM": 6.46,
    "chgYTD": -23.93,
    "marketCap": "$7.1B",
    "pe": "8.0x",
    "evEbitda": "4.8x",
    "de": "0.9x",
    "drawdown": "-41.3%"
  },
  "HRL": {
    "price": 24.44,
    "chg": 0.62,
    "chgW": 4.94,
    "chgM": 22.75,
    "chgYTD": 3.12,
    "marketCap": "$13.4B",
    "pe": "28.8x",
    "evEbitda": "10.4x",
    "de": "0.0x",
    "drawdown": "-23.3%"
  },
  "CAG": {
    "price": 13.45,
    "chg": 0.82,
    "chgW": 6.07,
    "chgM": -4.54,
    "chgYTD": -22.3,
    "marketCap": "$6.4B",
    "pe": "8.4x",
    "evEbitda": "7.9x",
    "de": "0.9x",
    "drawdown": "-40.2%"
  },
  "CALM": {
    "price": 79.87,
    "chg": 1.01,
    "chgW": 7.27,
    "chgM": 0.45,
    "chgYTD": 0.38,
    "marketCap": "$3.8B",
    "pe": "5.6x",
    "evEbitda": "2.7x",
    "de": "–",
    "drawdown": "-36.8%"
  },
  "DBA": {
    "price": 26.3,
    "chg": -0.11,
    "chgW": -1.46,
    "chgM": -8.46,
    "chgYTD": 3.06,
    "marketCap": "–",
    "pe": "11.1x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-8.8%"
  },
  "MOO": {
    "price": 77.93,
    "chg": 0.92,
    "chgW": -2.88,
    "chgM": -5.37,
    "chgYTD": 7.06,
    "marketCap": "–",
    "pe": "19.9x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-10.0%"
  },
  "VEGI": {
    "price": 43.34,
    "chg": 0.56,
    "chgW": -3.3,
    "chgM": -5.82,
    "chgYTD": 12.37,
    "marketCap": "–",
    "pe": "21.3x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-8.3%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "36.0x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
