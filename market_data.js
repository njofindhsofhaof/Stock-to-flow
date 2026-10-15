window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-10-15 00:42:58",
  "sections": {
    "Index": {
      "risk": "Neutral",
      "leader": "SP500",
      "watch": 0
    },
    "Commodity": {
      "risk": "Risk Off",
      "leader": "NTR",
      "watch": 0
    },
    "Crypto": {
      "risk": "Risk Off",
      "leader": "MSTR",
      "watch": 0
    },
    "ETF": {
      "risk": "Risk On",
      "leader": "XLE",
      "watch": 6
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
    "price": 7718.94,
    "change": -1.11,
    "mom": 39.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.5,
    "flow": 65,
    "perf": {
      "w1": -1.06,
      "m1": 2.21,
      "m3": 2.79
    },
    "returns": [
      -1.11,
      -1.19,
      -1.06,
      0.88,
      2.21,
      2.79
    ],
    "volumes": [
      92,
      90,
      97,
      111,
      84,
      112
    ],
    "rsiStack": [
      34.5,
      45.6,
      49.5,
      51.2,
      52.8,
      55.4
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 51621.48,
    "change": -0.09,
    "mom": 58.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.5,
    "flow": 100,
    "perf": {
      "w1": 0.86,
      "m1": 0.31,
      "m3": -1.15
    },
    "returns": [
      -0.09,
      -0.06,
      0.86,
      1.41,
      0.31,
      -1.15
    ],
    "volumes": [
      90,
      76,
      81,
      105,
      113,
      92
    ],
    "rsiStack": [
      55.4,
      50.6,
      47.5,
      46.8,
      47.8,
      51.1
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 5646.5,
    "change": -6.03,
    "mom": 26.4,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Confirmed Distribution",
    "signal": "SELL",
    "dist_streak": 3,
    "acc_streak": 0,
    "rsi": 24.3,
    "flow": 29,
    "perf": {
      "w1": -17.01,
      "m1": -18.28,
      "m3": -22.49
    },
    "returns": [
      -6.03,
      -11.56,
      -17.01,
      -17.82,
      -18.28,
      -22.49
    ],
    "volumes": [
      133,
      122,
      98,
      85,
      77,
      84
    ],
    "rsiStack": [
      5.3,
      14.7,
      24.3,
      31.8,
      38.7,
      46.3
    ]
  },
  {
    "symbol": "NI225",
    "dataSymbol": "^N225",
    "section": "Index",
    "name": "Japan Index",
    "category": "Broad",
    "price": 65429.0,
    "change": -3.42,
    "mom": 35.5,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.8,
    "flow": 0,
    "perf": {
      "w1": -6.58,
      "m1": 2.21,
      "m3": -4.83
    },
    "returns": [
      -3.42,
      -5.22,
      -6.58,
      -1.98,
      2.21,
      -4.83
    ],
    "volumes": [
      94,
      100,
      101,
      99,
      128,
      110
    ],
    "rsiStack": [
      21.6,
      36.3,
      42.8,
      46.1,
      49.4,
      56.2
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 375.99,
    "change": -1.49,
    "mom": 43.4,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.2,
    "flow": 133,
    "perf": {
      "w1": 0.03,
      "m1": -4.02,
      "m3": 0.31
    },
    "returns": [
      -1.49,
      -2.23,
      0.03,
      -1.27,
      -4.02,
      0.31
    ],
    "volumes": [
      71,
      91,
      86,
      50,
      75,
      128
    ],
    "rsiStack": [
      32.9,
      36.6,
      39.2,
      41.5,
      43.7,
      44.7
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 50.22,
    "change": -6.11,
    "mom": 32.6,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 31.1,
    "flow": 228,
    "perf": {
      "w1": -6.69,
      "m1": -11.97,
      "m3": -5.39
    },
    "returns": [
      -6.11,
      -8.32,
      -6.69,
      -7.87,
      -11.97,
      -5.39
    ],
    "volumes": [
      116,
      90,
      131,
      70,
      111,
      119
    ],
    "rsiStack": [
      16.6,
      24.8,
      31.1,
      35.6,
      39.3,
      40.4
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 35.54,
    "change": -4.92,
    "mom": 33.1,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 29.2,
    "flow": 195,
    "perf": {
      "w1": -10.99,
      "m1": -14.09,
      "m3": -11.7
    },
    "returns": [
      -4.92,
      -8.64,
      -10.99,
      -10.82,
      -14.09,
      -11.7
    ],
    "volumes": [
      103,
      81,
      126,
      94,
      76,
      81
    ],
    "rsiStack": [
      15.5,
      23.4,
      29.2,
      33.7,
      38.0,
      42.6
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 94.46,
    "change": 0.34,
    "mom": 55.9,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.2,
    "flow": 2,
    "perf": {
      "w1": 7.0,
      "m1": -7.78,
      "m3": 11.25
    },
    "returns": [
      0.34,
      2.84,
      7.0,
      4.47,
      -7.78,
      11.25
    ],
    "volumes": [
      81,
      75,
      92,
      83,
      87,
      103
    ],
    "rsiStack": [
      69.8,
      57.9,
      55.2,
      54.6,
      54.0,
      52.9
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 119.46,
    "change": 1.88,
    "mom": 60.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.8,
    "flow": 88,
    "perf": {
      "w1": 4.39,
      "m1": -9.49,
      "m3": -2.85
    },
    "returns": [
      1.88,
      7.1,
      4.39,
      3.7,
      -9.49,
      -2.85
    ],
    "volumes": [
      98,
      180,
      107,
      82,
      78,
      61
    ],
    "rsiStack": [
      71.1,
      55.7,
      49.8,
      48.6,
      50.0,
      55.8
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 31.76,
    "change": -3.9,
    "mom": 43.8,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 32.2,
    "flow": 136,
    "perf": {
      "w1": -3.96,
      "m1": -16.79,
      "m3": -7.51
    },
    "returns": [
      -3.9,
      -2.31,
      -3.96,
      -1.0,
      -16.79,
      -7.51
    ],
    "volumes": [
      90,
      91,
      69,
      87,
      123,
      56
    ],
    "rsiStack": [
      26.1,
      28.7,
      32.2,
      36.1,
      41.9,
      53.4
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 19.01,
    "change": -0.89,
    "mom": 40.4,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 27.3,
    "flow": 96,
    "perf": {
      "w1": -4.81,
      "m1": -23.32,
      "m3": -13.47
    },
    "returns": [
      -0.89,
      1.44,
      -4.81,
      -12.19,
      -23.32,
      -13.47
    ],
    "volumes": [
      86,
      153,
      139,
      105,
      95,
      90
    ],
    "rsiStack": [
      22.0,
      22.4,
      27.3,
      32.4,
      39.0,
      50.2
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.6,
    "flow": 86,
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
      178,
      49,
      100,
      63,
      59
    ],
    "rsiStack": [
      48.7,
      41.3,
      41.6,
      44.0,
      47.3,
      52.7
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 81445.23,
    "change": -1.99,
    "mom": 38.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.2,
    "flow": 119,
    "perf": {
      "w1": -1.33,
      "m1": -3.48,
      "m3": 29.23
    },
    "returns": [
      -1.99,
      -2.67,
      -1.33,
      -5.82,
      -3.48,
      29.23
    ],
    "volumes": [
      109,
      42,
      75,
      121,
      47,
      123
    ],
    "rsiStack": [
      35.9,
      41.1,
      46.2,
      50.1,
      53.4,
      55.3
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.5,
    "flow": 78,
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
      51,
      121,
      74,
      81,
      87,
      123
    ],
    "rsiStack": [
      49.2,
      47.9,
      49.5,
      50.6,
      51.5,
      53.4
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.6,
    "flow": 98,
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
      48,
      95,
      66,
      69,
      60,
      152
    ],
    "rsiStack": [
      53.7,
      48.1,
      48.6,
      49.6,
      50.5,
      52.1
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 143.24,
    "change": -5.87,
    "mom": 33.6,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.0,
    "flow": 95,
    "perf": {
      "w1": -6.6,
      "m1": 13.52,
      "m3": 40.5
    },
    "returns": [
      -5.87,
      -7.19,
      -6.6,
      -6.43,
      13.52,
      40.5
    ],
    "volumes": [
      57,
      71,
      97,
      82,
      75,
      77
    ],
    "rsiStack": [
      21.4,
      37.0,
      46.0,
      50.3,
      52.9,
      56.2
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 67.63,
    "change": 0.64,
    "mom": 66.7,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 71.2,
    "flow": 77,
    "perf": {
      "w1": 6.74,
      "m1": 5.62,
      "m3": 15.61
    },
    "returns": [
      0.64,
      3.92,
      6.74,
      9.97,
      5.62,
      15.61
    ],
    "volumes": [
      82,
      77,
      78,
      85,
      74,
      164
    ],
    "rsiStack": [
      89.2,
      78.5,
      71.2,
      67.1,
      64.4,
      64.7
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 190.43,
    "change": -2.98,
    "mom": 30.8,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.1,
    "flow": 159,
    "perf": {
      "w1": -5.44,
      "m1": 3.53,
      "m3": 5.34
    },
    "returns": [
      -2.98,
      -4.2,
      -5.44,
      -2.72,
      3.53,
      5.34
    ],
    "volumes": [
      92,
      75,
      86,
      89,
      131,
      126
    ],
    "rsiStack": [
      18.6,
      34.0,
      43.1,
      47.9,
      51.4,
      55.7
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 41.72,
    "change": -0.36,
    "mom": 66.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.0,
    "flow": 103,
    "perf": {
      "w1": 1.39,
      "m1": 0.97,
      "m3": -7.12
    },
    "returns": [
      -0.36,
      0.75,
      1.39,
      5.78,
      0.97,
      -7.12
    ],
    "volumes": [
      80,
      49,
      134,
      126,
      214,
      114
    ],
    "rsiStack": [
      75.2,
      64.8,
      56.0,
      50.9,
      48.1,
      49.9
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 173.96,
    "change": 2.53,
    "mom": 60.4,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.1,
    "flow": 142,
    "perf": {
      "w1": 3.05,
      "m1": 3.69,
      "m3": 8.56
    },
    "returns": [
      2.53,
      1.84,
      3.05,
      3.29,
      3.69,
      8.56
    ],
    "volumes": [
      108,
      86,
      111,
      89,
      153,
      91
    ],
    "rsiStack": [
      72.1,
      66.2,
      62.1,
      59.7,
      57.9,
      54.2
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.9,
    "flow": 103,
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
      107,
      96,
      70,
      102,
      180,
      105
    ],
    "rsiStack": [
      59.8,
      53.8,
      51.9,
      51.4,
      51.8,
      55.5
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 54.52,
    "change": -0.55,
    "mom": 56.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.8,
    "flow": 115,
    "perf": {
      "w1": 1.43,
      "m1": -2.52,
      "m3": -2.83
    },
    "returns": [
      -0.55,
      -0.38,
      1.43,
      2.1,
      -2.52,
      -2.83
    ],
    "volumes": [
      115,
      91,
      97,
      76,
      148,
      173
    ],
    "rsiStack": [
      51.7,
      47.2,
      43.8,
      43.4,
      44.8,
      46.2
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.0,
    "flow": 111,
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
      85,
      104,
      143,
      148,
      139,
      108
    ],
    "rsiStack": [
      66.5,
      54.2,
      47.0,
      43.9,
      44.1,
      49.9
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 167.04,
    "change": -0.97,
    "mom": 46.0,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.4,
    "flow": 147,
    "perf": {
      "w1": -0.48,
      "m1": -0.99,
      "m3": -6.5
    },
    "returns": [
      -0.97,
      -1.31,
      -0.48,
      0.04,
      -0.99,
      -6.5
    ],
    "volumes": [
      101,
      52,
      109,
      86,
      99,
      122
    ],
    "rsiStack": [
      31.0,
      37.1,
      38.4,
      39.3,
      40.7,
      41.5
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 49.67,
    "change": -0.1,
    "mom": 59.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.1,
    "flow": 78,
    "perf": {
      "w1": 1.41,
      "m1": -1.37,
      "m3": -0.86
    },
    "returns": [
      -0.1,
      0.49,
      1.41,
      1.99,
      -1.37,
      -0.86
    ],
    "volumes": [
      69,
      60,
      84,
      115,
      102,
      85
    ],
    "rsiStack": [
      59.7,
      50.2,
      46.1,
      45.2,
      46.2,
      50.3
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 111.5,
    "change": -0.77,
    "mom": 52.7,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.8,
    "flow": 131,
    "perf": {
      "w1": 0.13,
      "m1": 1.2,
      "m3": -2.93
    },
    "returns": [
      -0.77,
      -1.2,
      0.13,
      2.44,
      1.2,
      -2.93
    ],
    "volumes": [
      89,
      101,
      100,
      103,
      88,
      148
    ],
    "rsiStack": [
      48.2,
      49.9,
      47.8,
      46.6,
      45.9,
      44.4
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 86.06,
    "change": 2.22,
    "mom": 76.1,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 66.6,
    "flow": 133,
    "perf": {
      "w1": 5.34,
      "m1": 3.28,
      "m3": 2.38
    },
    "returns": [
      2.22,
      3.15,
      5.34,
      6.77,
      3.28,
      2.38
    ],
    "volumes": [
      95,
      71,
      87,
      84,
      105,
      97
    ],
    "rsiStack": [
      87.6,
      75.9,
      66.6,
      60.8,
      56.9,
      56.1
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 519.42,
    "change": -4.5,
    "mom": 30.4,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "WATCH",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 37.3,
    "flow": 161,
    "perf": {
      "w1": -10.88,
      "m1": 3.46,
      "m3": -6.02
    },
    "returns": [
      -4.5,
      -7.15,
      -10.88,
      -8.66,
      3.46,
      -6.02
    ],
    "volumes": [
      130,
      76,
      77,
      63,
      65,
      114
    ],
    "rsiStack": [
      11.1,
      27.2,
      37.3,
      42.6,
      46.5,
      50.3
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 28.26,
    "change": -0.6,
    "mom": 43.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.3,
    "flow": 36,
    "perf": {
      "w1": -0.81,
      "m1": -1.94,
      "m3": 0.39
    },
    "returns": [
      -0.6,
      -0.25,
      -0.81,
      0.43,
      -1.94,
      0.39
    ],
    "volumes": [
      62,
      126,
      85,
      81,
      67,
      66
    ],
    "rsiStack": [
      37.9,
      42.6,
      45.3,
      47.5,
      49.3,
      49.7
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.3,
    "flow": 65,
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
      38,
      51,
      54,
      75,
      149,
      201
    ],
    "rsiStack": [
      53.9,
      47.4,
      46.3,
      47.1,
      49.1,
      53.5
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.2,
    "flow": 7,
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
      16,
      1686,
      532,
      12,
      17,
      110
    ],
    "rsiStack": [
      47.6,
      44.1,
      42.2,
      42.0,
      43.9,
      49.5
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 28.84,
    "change": -0.03,
    "mom": 53.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.0,
    "flow": 22,
    "perf": {
      "w1": 0.14,
      "m1": -4.66,
      "m3": -1.44
    },
    "returns": [
      -0.03,
      1.98,
      0.14,
      -0.03,
      -4.66,
      -1.44
    ],
    "volumes": [
      61,
      17,
      20,
      9,
      28,
      261
    ],
    "rsiStack": [
      52.0,
      43.6,
      42.0,
      42.9,
      45.0,
      48.5
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 93.25,
    "change": 1.36,
    "mom": 56.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.5,
    "flow": 73,
    "perf": {
      "w1": -0.35,
      "m1": -4.2,
      "m3": -10.72
    },
    "returns": [
      1.36,
      2.75,
      -0.35,
      -0.76,
      -4.2,
      -10.72
    ],
    "volumes": [
      104,
      143,
      127,
      122,
      83,
      152
    ],
    "rsiStack": [
      50.5,
      43.6,
      40.5,
      39.9,
      41.0,
      43.3
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 82.18,
    "change": 0.26,
    "mom": 56.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.0,
    "flow": 96,
    "perf": {
      "w1": 1.17,
      "m1": -3.65,
      "m3": 0.04
    },
    "returns": [
      0.26,
      2.14,
      1.17,
      0.87,
      -3.65,
      0.04
    ],
    "volumes": [
      23,
      62,
      49,
      29,
      133,
      95
    ],
    "rsiStack": [
      59.6,
      48.7,
      46.0,
      46.3,
      47.6,
      49.1
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 12.05,
    "change": -0.41,
    "mom": 51.0,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.4,
    "flow": 72,
    "perf": {
      "w1": -0.58,
      "m1": -9.74,
      "m3": -15.56
    },
    "returns": [
      -0.41,
      -0.99,
      -0.58,
      -0.08,
      -9.74,
      -15.56
    ],
    "volumes": [
      73,
      62,
      81,
      73,
      103,
      119
    ],
    "rsiStack": [
      36.9,
      34.8,
      35.4,
      37.2,
      39.3,
      39.3
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 83.05,
    "change": -1.13,
    "mom": 57.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.1,
    "flow": 79,
    "perf": {
      "w1": 2.54,
      "m1": -1.47,
      "m3": 4.44
    },
    "returns": [
      -1.13,
      0.39,
      2.54,
      7.86,
      -1.47,
      4.44
    ],
    "volumes": [
      81,
      86,
      80,
      82,
      129,
      106
    ],
    "rsiStack": [
      58.2,
      53.7,
      51.1,
      50.2,
      50.2,
      51.3
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.3,
    "flow": 5,
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
      53,
      122,
      43,
      83,
      60,
      29
    ],
    "rsiStack": [
      40.9,
      44.0,
      47.3,
      50.4,
      53.4,
      56.1
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 29.21,
    "change": 2.96,
    "mom": 59.8,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 66.4,
    "flow": 120,
    "perf": {
      "w1": 4.32,
      "m1": 6.37,
      "m3": 17.12
    },
    "returns": [
      2.96,
      3.29,
      4.32,
      2.42,
      6.37,
      17.12
    ],
    "volumes": [
      84,
      70,
      96,
      100,
      104,
      78
    ],
    "rsiStack": [
      81.5,
      71.6,
      66.4,
      63.7,
      61.4,
      59.2
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.0,
    "flow": 69,
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
      56,
      63,
      113,
      140,
      227,
      90
    ],
    "rsiStack": [
      44.5,
      45.2,
      48.0,
      50.3,
      51.7,
      51.7
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.7,
    "flow": 74,
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
      94,
      71,
      83,
      90,
      102,
      68
    ],
    "rsiStack": [
      65.4,
      60.5,
      59.7,
      59.1,
      57.1,
      51.5
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.1,
    "flow": 139,
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
      126,
      73,
      86,
      89,
      65,
      118
    ],
    "rsiStack": [
      35.3,
      45.7,
      48.1,
      48.2,
      47.7,
      45.2
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 245.28,
    "change": -8.73,
    "mom": 32.0,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Trending up",
    "signal": "NEUTRAL",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.4,
    "flow": 128,
    "perf": {
      "w1": -13.84,
      "m1": 6.78,
      "m3": 17.95
    },
    "returns": [
      -8.73,
      -10.9,
      -13.84,
      -7.16,
      6.78,
      17.95
    ],
    "volumes": [
      94,
      77,
      126,
      75,
      68,
      69
    ],
    "rsiStack": [
      22.2,
      36.3,
      44.4,
      48.3,
      50.4,
      51.3
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$33.3B",
    "pe": "14.1x",
    "evEbitda": "8.0x",
    "de": "0.5x",
    "drawdown": "nan%"
  },
  "MOS": {
    "price": 19.01,
    "chg": -0.89,
    "chgW": -4.81,
    "chgM": -23.32,
    "chgYTD": -21.09,
    "marketCap": "$6.0B",
    "pe": "12.2x",
    "evEbitda": "7.0x",
    "de": "0.5x",
    "drawdown": "-41.1%"
  },
  "CF": {
    "price": 119.46,
    "chg": 1.88,
    "chgW": 4.39,
    "chgM": -9.49,
    "chgYTD": 54.46,
    "marketCap": "$18.1B",
    "pe": "8.9x",
    "evEbitda": "5.8x",
    "de": "0.4x",
    "drawdown": "-15.8%"
  },
  "ICL": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "20.8x",
    "evEbitda": "6.8x",
    "de": "0.5x",
    "drawdown": "nan%"
  },
  "FMC": {
    "price": 8.09,
    "chg": -2.65,
    "chgW": -11.0,
    "chgM": -25.09,
    "chgYTD": -41.67,
    "marketCap": "$1.3B",
    "pe": "5.1x",
    "evEbitda": "18.4x",
    "de": "2.7x",
    "drawdown": "-74.2%"
  },
  "CTVA": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$8.9B",
    "pe": "8.3x",
    "evEbitda": "17.8x",
    "de": "0.6x",
    "drawdown": "nan%"
  },
  "ADM": {
    "price": 83.64,
    "chg": 0.53,
    "chgW": 2.83,
    "chgM": -1.6,
    "chgYTD": 45.49,
    "marketCap": "$40.3B",
    "pe": "22.9x",
    "evEbitda": "16.3x",
    "de": "0.4x",
    "drawdown": "-5.8%"
  },
  "BG": {
    "price": 108.91,
    "chg": 1.26,
    "chgW": 3.22,
    "chgM": -7.02,
    "chgYTD": 22.26,
    "marketCap": "$20.9B",
    "pe": "21.7x",
    "evEbitda": "12.4x",
    "de": "1.0x",
    "drawdown": "-19.2%"
  },
  "INGR": {
    "price": 97.32,
    "chg": 0.06,
    "chgW": 3.26,
    "chgM": -1.18,
    "chgYTD": -11.74,
    "marketCap": "$6.1B",
    "pe": "10.6x",
    "evEbitda": "6.0x",
    "de": "0.4x",
    "drawdown": "-21.2%"
  },
  "FPI": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$463M",
    "pe": "20.7x",
    "evEbitda": "25.2x",
    "de": "0.5x",
    "drawdown": "nan%"
  },
  "LAND": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$411M",
    "pe": "-31.2x",
    "evEbitda": "13.0x",
    "de": "0.7x",
    "drawdown": "nan%"
  },
  "DE": {
    "price": 650.38,
    "chg": 0.06,
    "chgW": -0.99,
    "chgM": -2.85,
    "chgYTD": 39.7,
    "marketCap": "$175.4B",
    "pe": "36.2x",
    "evEbitda": "27.1x",
    "de": "2.3x",
    "drawdown": "-9.8%"
  },
  "AGCO": {
    "price": 106.78,
    "chg": -0.69,
    "chgW": -2.17,
    "chgM": -10.94,
    "chgYTD": 2.36,
    "marketCap": "$7.5B",
    "pe": "14.8x",
    "evEbitda": "10.0x",
    "de": "0.7x",
    "drawdown": "-25.7%"
  },
  "CNH": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$19.3B",
    "pe": "47.9x",
    "evEbitda": "37.8x",
    "de": "3.4x",
    "drawdown": "nan%"
  },
  "XYL": {
    "price": 102.74,
    "chg": 0.2,
    "chgW": 0.9,
    "chgM": -4.22,
    "chgYTD": -24.56,
    "marketCap": "$24.0B",
    "pe": "24.5x",
    "evEbitda": "13.2x",
    "de": "0.3x",
    "drawdown": "-33.4%"
  },
  "VMI": {
    "price": 465.33,
    "chg": -1.4,
    "chgW": 0.16,
    "chgM": -2.11,
    "chgYTD": 15.66,
    "marketCap": "$9.0B",
    "pe": "18.2x",
    "evEbitda": "14.4x",
    "de": "0.5x",
    "drawdown": "-20.6%"
  },
  "LNN": {
    "price": 112.08,
    "chg": -2.93,
    "chgW": -1.1,
    "chgM": -5.2,
    "chgYTD": -4.91,
    "marketCap": "$1.1B",
    "pe": "21.5x",
    "evEbitda": "13.3x",
    "de": "0.3x",
    "drawdown": "-24.3%"
  },
  "MWA": {
    "price": 21.68,
    "chg": -0.23,
    "chgW": 1.36,
    "chgM": -4.66,
    "chgYTD": -8.98,
    "marketCap": "$3.4B",
    "pe": "15.3x",
    "evEbitda": "9.3x",
    "de": "0.4x",
    "drawdown": "-30.1%"
  },
  "WTS": {
    "price": 352.1,
    "chg": 0.29,
    "chgW": 1.1,
    "chgM": 0.95,
    "chgYTD": 27.56,
    "marketCap": "$11.8B",
    "pe": "30.8x",
    "evEbitda": "20.0x",
    "de": "0.1x",
    "drawdown": "-10.8%"
  },
  "TSN": {
    "price": 54.22,
    "chg": 0.8,
    "chgW": 4.87,
    "chgM": 4.03,
    "chgYTD": -7.51,
    "marketCap": "$19.1B",
    "pe": "33.5x",
    "evEbitda": "9.5x",
    "de": "0.4x",
    "drawdown": "-22.0%"
  },
  "PPC": {
    "price": 29.01,
    "chg": 0.76,
    "chgW": 3.17,
    "chgM": -2.19,
    "chgYTD": -25.6,
    "marketCap": "$6.9B",
    "pe": "12.7x",
    "evEbitda": "5.4x",
    "de": "0.8x",
    "drawdown": "-35.3%"
  },
  "HRL": {
    "price": 19.81,
    "chg": 3.12,
    "chgW": 1.33,
    "chgM": -4.67,
    "chgYTD": -16.41,
    "marketCap": "$10.9B",
    "pe": "32.0x",
    "evEbitda": "10.2x",
    "de": "0.4x",
    "drawdown": "-25.5%"
  },
  "CAG": {
    "price": 13.84,
    "chg": 1.02,
    "chgW": 4.45,
    "chgM": -8.83,
    "chgYTD": -20.05,
    "marketCap": "$6.6B",
    "pe": "9.2x",
    "evEbitda": "8.4x",
    "de": "1.2x",
    "drawdown": "-31.9%"
  },
  "CALM": {
    "price": 63.19,
    "chg": 0.77,
    "chgW": 0.78,
    "chgM": -14.94,
    "chgYTD": -20.59,
    "marketCap": "$3.0B",
    "pe": "51.4x",
    "evEbitda": "14.8x",
    "de": "–",
    "drawdown": "-33.9%"
  },
  "DBA": {
    "price": 28.26,
    "chg": -0.6,
    "chgW": -0.81,
    "chgM": -1.94,
    "chgYTD": 10.74,
    "marketCap": "–",
    "pe": "11.9x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-4.3%"
  },
  "MOO": {
    "price": 82.18,
    "chg": 0.26,
    "chgW": 1.17,
    "chgM": -3.65,
    "chgYTD": 12.9,
    "marketCap": "–",
    "pe": "15.9x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-8.0%"
  },
  "VEGI": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "19.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "53.5x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
