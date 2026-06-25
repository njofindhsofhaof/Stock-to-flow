window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-06-25 23:52:16",
  "sections": {
    "Index": {
      "risk": "Strong ON",
      "leader": "KOSPI",
      "watch": 1
    },
    "Commodity": {
      "risk": "Neutral",
      "leader": "MOS",
      "watch": 0
    },
    "Crypto": {
      "risk": "Strong OFF",
      "leader": "BTC",
      "watch": 0
    },
    "ETF": {
      "risk": "Risk On",
      "leader": "SOX",
      "watch": 2
    },
    "Stock": {
      "risk": "Risk On",
      "leader": "MRVL",
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
    "price": 7357.49,
    "change": -0.01,
    "mom": 36.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.3,
    "flow": 61,
    "perf": {
      "w1": -0.84,
      "m1": -2.17,
      "m3": 15.98
    },
    "returns": [
      -0.01,
      -1.54,
      -0.84,
      1.25,
      -2.17,
      15.98
    ],
    "volumes": [
      101,
      102,
      104,
      101,
      93,
      100
    ],
    "rsiStack": [
      35.7,
      42.0,
      46.3,
      49.6,
      52.0,
      51.7
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 51920.62,
    "change": 0.14,
    "mom": 53.4,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.8,
    "flow": 111,
    "perf": {
      "w1": 0.83,
      "m1": 2.52,
      "m3": 14.83
    },
    "returns": [
      0.14,
      0.4,
      0.83,
      4.01,
      2.52,
      14.83
    ],
    "volumes": [
      99,
      94,
      92,
      94,
      92,
      100
    ],
    "rsiStack": [
      67.5,
      63.1,
      61.8,
      60.9,
      59.0,
      54.1
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 8471.02,
    "change": 3.26,
    "mom": 42.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.1,
    "flow": 80,
    "perf": {
      "w1": -4.44,
      "m1": 5.26,
      "m3": 55.13
    },
    "returns": [
      3.26,
      -6.42,
      -4.44,
      9.57,
      5.26,
      55.13
    ],
    "volumes": [
      92,
      96,
      106,
      93,
      75,
      70
    ],
    "rsiStack": [
      45.4,
      51.0,
      54.1,
      56.2,
      58.1,
      60.9
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
    "rsi": 58.7,
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
      76,
      90,
      88,
      96,
      97
    ],
    "rsiStack": [
      46.9,
      55.5,
      58.7,
      60.0,
      60.7,
      61.7
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 369.46,
    "change": 0.97,
    "mom": 41.6,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 31.8,
    "flow": 105,
    "perf": {
      "w1": -4.93,
      "m1": -9.55,
      "m3": -10.88
    },
    "returns": [
      0.97,
      -3.93,
      -4.93,
      -1.37,
      -9.55,
      -10.88
    ],
    "volumes": [
      150,
      98,
      172,
      142,
      208,
      112
    ],
    "rsiStack": [
      26.4,
      29.5,
      31.8,
      34.0,
      35.5,
      32.1
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 52.36,
    "change": 1.12,
    "mom": 36.0,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 28.8,
    "flow": 103,
    "perf": {
      "w1": -13.61,
      "m1": -22.43,
      "m3": -17.57
    },
    "returns": [
      1.12,
      -11.12,
      -13.61,
      -9.19,
      -22.43,
      -17.57
    ],
    "volumes": [
      222,
      78,
      159,
      96,
      128,
      67
    ],
    "rsiStack": [
      17.5,
      23.6,
      28.8,
      33.0,
      36.1,
      34.2
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 43.92,
    "change": -1.79,
    "mom": 43.3,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.4,
    "flow": 68,
    "perf": {
      "w1": -6.75,
      "m1": -12.44,
      "m3": -3.02
    },
    "returns": [
      -1.79,
      -6.15,
      -6.75,
      3.71,
      -12.44,
      -3.02
    ],
    "volumes": [
      64,
      65,
      68,
      121,
      134,
      89
    ],
    "rsiStack": [
      27.0,
      35.1,
      38.4,
      40.6,
      42.8,
      44.8
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 71.49,
    "change": 1.63,
    "mom": 38.2,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 28.5,
    "flow": 1,
    "perf": {
      "w1": -6.9,
      "m1": -19.38,
      "m3": -30.51
    },
    "returns": [
      1.63,
      -4.45,
      -6.9,
      -20.59,
      -19.38,
      -30.51
    ],
    "volumes": [
      84,
      125,
      38,
      78,
      115,
      107
    ],
    "rsiStack": [
      19.4,
      22.7,
      28.5,
      34.0,
      39.9,
      46.8
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 105.49,
    "change": 2.33,
    "mom": 55.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.3,
    "flow": 99,
    "perf": {
      "w1": -0.34,
      "m1": -9.33,
      "m3": -23.34
    },
    "returns": [
      2.33,
      1.82,
      -0.34,
      -3.45,
      -9.33,
      -23.34
    ],
    "volumes": [
      97,
      114,
      101,
      118,
      93,
      87
    ],
    "rsiStack": [
      51.3,
      41.6,
      40.3,
      41.8,
      44.6,
      48.1
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 33.93,
    "change": 1.37,
    "mom": 51.5,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.7,
    "flow": 57,
    "perf": {
      "w1": -3.17,
      "m1": -12.46,
      "m3": -23.01
    },
    "returns": [
      1.37,
      -1.31,
      -3.17,
      0.38,
      -12.46,
      -23.01
    ],
    "volumes": [
      117,
      128,
      90,
      98,
      86,
      55
    ],
    "rsiStack": [
      42.2,
      39.0,
      39.7,
      41.6,
      43.9,
      45.0
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 21.73,
    "change": 4.17,
    "mom": 57.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.9,
    "flow": 90,
    "perf": {
      "w1": -3.47,
      "m1": -8.39,
      "m3": -13.08
    },
    "returns": [
      4.17,
      -1.23,
      -3.47,
      9.64,
      -8.39,
      -13.08
    ],
    "volumes": [
      97,
      88,
      106,
      159,
      165,
      110
    ],
    "rsiStack": [
      49.4,
      47.7,
      46.9,
      46.2,
      45.4,
      44.2
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 60.96,
    "change": 0.98,
    "mom": 39.8,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 29.0,
    "flow": 44,
    "perf": {
      "w1": -5.16,
      "m1": -11.31,
      "m3": -20.37
    },
    "returns": [
      0.98,
      -2.07,
      -5.16,
      -6.26,
      -11.31,
      -20.37
    ],
    "volumes": [
      147,
      86,
      81,
      130,
      147,
      81
    ],
    "rsiStack": [
      23.2,
      25.3,
      29.0,
      32.8,
      37.2,
      41.6
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 59715.55,
    "change": -2.1,
    "mom": 39.1,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 30.4,
    "flow": 140,
    "perf": {
      "w1": -7.04,
      "m1": -1.98,
      "m3": -24.08
    },
    "returns": [
      -2.1,
      -6.62,
      -7.04,
      -9.92,
      -1.98,
      -24.08
    ],
    "volumes": [
      140,
      82,
      50,
      87,
      91,
      203
    ],
    "rsiStack": [
      19.7,
      27.6,
      30.4,
      32.6,
      35.7,
      39.7
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 142.52,
    "change": -5.06,
    "mom": 36.6,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 33.0,
    "flow": 86,
    "perf": {
      "w1": -13.58,
      "m1": -17.99,
      "m3": -11.36
    },
    "returns": [
      -5.06,
      -13.54,
      -13.58,
      -7.44,
      -17.99,
      -11.36
    ],
    "volumes": [
      113,
      97,
      96,
      104,
      67,
      84
    ],
    "rsiStack": [
      17.2,
      27.4,
      33.0,
      36.7,
      39.6,
      40.6
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 68.81,
    "change": -3.06,
    "mom": 40.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 30.7,
    "flow": 82,
    "perf": {
      "w1": -14.62,
      "m1": -32.96,
      "m3": -23.47
    },
    "returns": [
      -3.06,
      -13.93,
      -14.62,
      -12.82,
      -32.96,
      -23.47
    ],
    "volumes": [
      87,
      73,
      76,
      118,
      59,
      47
    ],
    "rsiStack": [
      15.8,
      24.5,
      30.7,
      35.3,
      39.7,
      43.0
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 85.33,
    "change": -9.35,
    "mom": 33.5,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 24.4,
    "flow": 182,
    "perf": {
      "w1": -26.79,
      "m1": -44.66,
      "m3": -29.73
    },
    "returns": [
      -9.35,
      -22.04,
      -26.79,
      -26.03,
      -44.66,
      -29.73
    ],
    "volumes": [
      175,
      121,
      95,
      107,
      86,
      81
    ],
    "rsiStack": [
      10.5,
      18.6,
      24.4,
      29.3,
      34.2,
      37.2
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 54.09,
    "change": 0.97,
    "mom": 45.1,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.3,
    "flow": 76,
    "perf": {
      "w1": -1.06,
      "m1": -5.09,
      "m3": -12.7
    },
    "returns": [
      0.97,
      0.06,
      -1.06,
      -7.14,
      -5.09,
      -12.7
    ],
    "volumes": [
      113,
      81,
      96,
      112,
      97,
      125
    ],
    "rsiStack": [
      36.5,
      35.8,
      38.3,
      40.9,
      44.4,
      50.3
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 184.57,
    "change": 0.83,
    "mom": 40.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.8,
    "flow": 86,
    "perf": {
      "w1": -0.66,
      "m1": 0.08,
      "m3": 44.76
    },
    "returns": [
      0.83,
      -3.94,
      -0.66,
      4.5,
      0.08,
      44.76
    ],
    "volumes": [
      81,
      75,
      96,
      84,
      133,
      104
    ],
    "rsiStack": [
      44.5,
      48.5,
      51.8,
      54.4,
      56.4,
      56.6
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 45.85,
    "change": 0.68,
    "mom": 68.5,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.3,
    "flow": 88,
    "perf": {
      "w1": 3.13,
      "m1": 1.57,
      "m3": -0.15
    },
    "returns": [
      0.68,
      2.53,
      3.13,
      4.2,
      1.57,
      -0.15
    ],
    "volumes": [
      87,
      104,
      112,
      89,
      84,
      83
    ],
    "rsiStack": [
      80.5,
      68.7,
      61.3,
      57.0,
      54.3,
      53.8
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 155.63,
    "change": 1.49,
    "mom": 62.9,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.6,
    "flow": 82,
    "perf": {
      "w1": 3.26,
      "m1": 4.6,
      "m3": 8.21
    },
    "returns": [
      1.49,
      3.71,
      3.26,
      1.82,
      4.6,
      8.21
    ],
    "volumes": [
      88,
      105,
      101,
      87,
      105,
      103
    ],
    "rsiStack": [
      75.3,
      67.2,
      63.6,
      60.9,
      57.7,
      53.7
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 105.58,
    "change": -0.9,
    "mom": 35.0,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 25.2,
    "flow": 72,
    "perf": {
      "w1": -3.32,
      "m1": -9.19,
      "m3": -2.2
    },
    "returns": [
      -0.9,
      -1.2,
      -3.32,
      -4.89,
      -9.19,
      -2.2
    ],
    "volumes": [
      127,
      110,
      154,
      111,
      99,
      116
    ],
    "rsiStack": [
      15.1,
      20.5,
      25.2,
      29.5,
      34.1,
      38.0
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 53.45,
    "change": -0.5,
    "mom": 43.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.2,
    "flow": 79,
    "perf": {
      "w1": -1.11,
      "m1": 3.95,
      "m3": 10.53
    },
    "returns": [
      -0.5,
      -0.47,
      -1.11,
      2.34,
      3.95,
      10.53
    ],
    "volumes": [
      78,
      72,
      127,
      98,
      85,
      132
    ],
    "rsiStack": [
      48.4,
      56.7,
      58.2,
      57.7,
      55.5,
      49.9
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 44.59,
    "change": 0.18,
    "mom": 47.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.7,
    "flow": 102,
    "perf": {
      "w1": 1.41,
      "m1": -0.09,
      "m3": 10.89
    },
    "returns": [
      0.18,
      1.29,
      1.41,
      -0.89,
      -0.09,
      10.89
    ],
    "volumes": [
      96,
      84,
      222,
      108,
      93,
      67
    ],
    "rsiStack": [
      54.4,
      52.6,
      52.7,
      53.2,
      54.0,
      55.6
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 184.12,
    "change": 2.17,
    "mom": 63.6,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 64.6,
    "flow": 92,
    "perf": {
      "w1": 2.52,
      "m1": 5.63,
      "m3": 17.57
    },
    "returns": [
      2.17,
      1.28,
      2.52,
      8.52,
      5.63,
      17.57
    ],
    "volumes": [
      85,
      81,
      130,
      91,
      172,
      93
    ],
    "rsiStack": [
      72.6,
      67.9,
      64.6,
      62.1,
      59.7,
      57.0
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 51.84,
    "change": 1.33,
    "mom": 53.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.6,
    "flow": 74,
    "perf": {
      "w1": -0.35,
      "m1": 1.29,
      "m3": 5.6
    },
    "returns": [
      1.33,
      0.43,
      -0.35,
      4.52,
      1.29,
      5.6
    ],
    "volumes": [
      97,
      73,
      126,
      117,
      80,
      85
    ],
    "rsiStack": [
      57.3,
      54.7,
      53.6,
      52.9,
      52.0,
      49.4
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 113.35,
    "change": -1.49,
    "mom": 41.5,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.5,
    "flow": 91,
    "perf": {
      "w1": -1.85,
      "m1": -6.75,
      "m3": 7.28
    },
    "returns": [
      -1.49,
      -1.38,
      -1.85,
      -0.12,
      -6.75,
      7.28
    ],
    "volumes": [
      104,
      99,
      117,
      83,
      96,
      157
    ],
    "rsiStack": [
      34.7,
      38.8,
      41.5,
      43.5,
      44.8,
      42.8
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 83.94,
    "change": -0.59,
    "mom": 46.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.9,
    "flow": 92,
    "perf": {
      "w1": 0.31,
      "m1": -0.76,
      "m3": 2.52
    },
    "returns": [
      -0.59,
      2.14,
      0.31,
      -1.81,
      -0.76,
      2.52
    ],
    "volumes": [
      87,
      89,
      140,
      87,
      107,
      105
    ],
    "rsiStack": [
      49.6,
      49.6,
      49.9,
      50.2,
      50.5,
      51.3
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 625.2,
    "change": 3.94,
    "mom": 48.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.8,
    "flow": 110,
    "perf": {
      "w1": 4.25,
      "m1": 10.86,
      "m3": 101.81
    },
    "returns": [
      3.94,
      -4.55,
      4.25,
      15.45,
      10.86,
      101.81
    ],
    "volumes": [
      82,
      70,
      81,
      74,
      156,
      138
    ],
    "rsiStack": [
      57.4,
      57.7,
      58.8,
      59.9,
      61.0,
      61.6
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 26.92,
    "change": 1.36,
    "mom": 61.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.5,
    "flow": 101,
    "perf": {
      "w1": 0.3,
      "m1": -2.0,
      "m3": -0.74
    },
    "returns": [
      1.36,
      1.01,
      0.3,
      2.24,
      -2.0,
      -0.74
    ],
    "volumes": [
      62,
      182,
      66,
      107,
      51,
      78
    ],
    "rsiStack": [
      70.9,
      57.1,
      50.5,
      48.7,
      48.8,
      50.0
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 43.95,
    "change": 1.92,
    "mom": 62.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.7,
    "flow": 29,
    "perf": {
      "w1": 1.74,
      "m1": 0.23,
      "m3": -1.94
    },
    "returns": [
      1.92,
      1.81,
      1.74,
      1.97,
      0.23,
      -1.94
    ],
    "volumes": [
      34,
      44,
      61,
      205,
      32,
      110
    ],
    "rsiStack": [
      67.2,
      55.8,
      50.7,
      48.7,
      48.3,
      49.3
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 45.39,
    "change": 1.72,
    "mom": 53.8,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 59.7,
    "flow": 184,
    "perf": {
      "w1": 3.4,
      "m1": 1.41,
      "m3": 23.28
    },
    "returns": [
      1.72,
      1.34,
      3.4,
      4.68,
      1.41,
      23.28
    ],
    "volumes": [
      305,
      109,
      343,
      59,
      58,
      7
    ],
    "rsiStack": [
      64.1,
      60.2,
      59.7,
      59.3,
      57.8,
      53.4
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 28.8,
    "change": 1.87,
    "mom": 61.4,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.1,
    "flow": 3,
    "perf": {
      "w1": 1.08,
      "m1": -1.45,
      "m3": -0.87
    },
    "returns": [
      1.87,
      1.54,
      1.08,
      3.44,
      -1.45,
      -0.87
    ],
    "volumes": [
      72,
      15,
      7,
      13,
      114,
      11
    ],
    "rsiStack": [
      67.4,
      56.7,
      51.1,
      48.8,
      48.3,
      49.7
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 103.16,
    "change": -0.36,
    "mom": 55.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.5,
    "flow": 77,
    "perf": {
      "w1": 3.35,
      "m1": 1.04,
      "m3": 18.96
    },
    "returns": [
      -0.36,
      3.01,
      3.35,
      4.46,
      1.04,
      18.96
    ],
    "volumes": [
      89,
      71,
      86,
      89,
      108,
      106
    ],
    "rsiStack": [
      68.6,
      61.6,
      57.5,
      55.6,
      54.9,
      56.0
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 79.29,
    "change": 2.76,
    "mom": 68.4,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.2,
    "flow": 288,
    "perf": {
      "w1": 2.59,
      "m1": -1.44,
      "m3": -4.83
    },
    "returns": [
      2.76,
      3.11,
      2.59,
      2.68,
      -1.44,
      -4.83
    ],
    "volumes": [
      84,
      82,
      161,
      127,
      40,
      26
    ],
    "rsiStack": [
      73.8,
      59.9,
      52.2,
      48.5,
      47.0,
      47.2
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 14.11,
    "change": 1.95,
    "mom": 46.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.4,
    "flow": 83,
    "perf": {
      "w1": 1.07,
      "m1": -11.15,
      "m3": 25.87
    },
    "returns": [
      1.95,
      0.0,
      1.07,
      -1.33,
      -11.15,
      25.87
    ],
    "volumes": [
      78,
      95,
      63,
      70,
      58,
      117
    ],
    "rsiStack": [
      43.2,
      43.5,
      47.4,
      49.9,
      51.4,
      51.5
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 78.53,
    "change": -0.53,
    "mom": 40.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.3,
    "flow": 60,
    "perf": {
      "w1": -1.32,
      "m1": -6.65,
      "m3": 7.93
    },
    "returns": [
      -0.53,
      -2.36,
      -1.32,
      -1.1,
      -6.65,
      7.93
    ],
    "volumes": [
      99,
      118,
      135,
      97,
      135,
      147
    ],
    "rsiStack": [
      33.1,
      40.9,
      45.3,
      47.5,
      48.8,
      48.8
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 23.81,
    "change": 1.19,
    "mom": 54.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.2,
    "flow": 49,
    "perf": {
      "w1": -1.61,
      "m1": -4.03,
      "m3": -5.21
    },
    "returns": [
      1.19,
      0.13,
      -1.61,
      0.0,
      -4.03,
      -5.21
    ],
    "volumes": [
      61,
      138,
      220,
      71,
      31,
      136
    ],
    "rsiStack": [
      51.0,
      43.9,
      42.2,
      43.0,
      44.8,
      46.3
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 23.67,
    "change": -1.54,
    "mom": 25.5,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet) (Day 2)",
    "signal": "AVOID",
    "dist_streak": 2,
    "acc_streak": 0,
    "rsi": 24.9,
    "flow": 109,
    "perf": {
      "w1": -8.68,
      "m1": -9.69,
      "m3": -14.76
    },
    "returns": [
      -1.54,
      -5.62,
      -8.68,
      -7.54,
      -9.69,
      -14.76
    ],
    "volumes": [
      174,
      106,
      93,
      100,
      91,
      110
    ],
    "rsiStack": [
      8.0,
      17.9,
      24.9,
      30.0,
      34.9,
      38.9
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.6,
    "change": -1.23,
    "mom": 46.0,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 32.4,
    "flow": 101,
    "perf": {
      "w1": -0.93,
      "m1": -8.13,
      "m3": -13.36
    },
    "returns": [
      -1.23,
      -1.03,
      -0.93,
      -3.13,
      -8.13,
      -13.36
    ],
    "volumes": [
      126,
      89,
      133,
      142,
      168,
      76
    ],
    "rsiStack": [
      29.0,
      31.1,
      32.4,
      33.8,
      36.1,
      37.7
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.5,
    "change": -1.16,
    "mom": 42.8,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 31.4,
    "flow": 98,
    "perf": {
      "w1": -0.82,
      "m1": -10.71,
      "m3": -16.17
    },
    "returns": [
      -1.16,
      -1.05,
      -0.82,
      -6.7,
      -10.71,
      -16.17
    ],
    "volumes": [
      123,
      153,
      130,
      194,
      82,
      63
    ],
    "rsiStack": [
      27.5,
      29.3,
      31.4,
      33.6,
      37.0,
      43.4
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 268.03,
    "change": -0.36,
    "mom": 46.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.3,
    "flow": 80,
    "perf": {
      "w1": 7.5,
      "m1": 21.15,
      "m3": 205.24
    },
    "returns": [
      -0.36,
      -11.4,
      7.5,
      12.77,
      21.15,
      205.24
    ],
    "volumes": [
      67,
      95,
      77,
      80,
      151,
      68
    ],
    "rsiStack": [
      53.7,
      57.7,
      59.3,
      60.0,
      60.1,
      59.6
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 281.26,
    "change": 1.65,
    "mom": 39.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.5,
    "flow": 54,
    "perf": {
      "w1": -2.86,
      "m1": 41.55,
      "m3": 220.31
    },
    "returns": [
      1.65,
      -8.64,
      -2.86,
      11.35,
      41.55,
      220.31
    ],
    "volumes": [
      49,
      68,
      85,
      97,
      101,
      213
    ],
    "rsiStack": [
      47.0,
      53.1,
      56.5,
      58.5,
      60.3,
      61.5
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 60.96,
    "chg": 0.98,
    "chgW": -5.16,
    "chgM": -11.31,
    "chgYTD": -1.23,
    "marketCap": "$29.3B",
    "pe": "12.4x",
    "evEbitda": "7.6x",
    "de": "0.6x",
    "drawdown": "-28.6%"
  },
  "MOS": {
    "price": 21.73,
    "chg": 4.17,
    "chgW": -3.47,
    "chgM": -8.39,
    "chgYTD": -9.8,
    "marketCap": "$6.9B",
    "pe": "155.2x",
    "evEbitda": "6.2x",
    "de": "0.5x",
    "drawdown": "-43.2%"
  },
  "CF": {
    "price": 105.49,
    "chg": 2.33,
    "chgW": -0.34,
    "chgM": -9.33,
    "chgYTD": 36.4,
    "marketCap": "$16.2B",
    "pe": "9.5x",
    "evEbitda": "5.9x",
    "de": "0.4x",
    "drawdown": "-25.7%"
  },
  "ICL": {
    "price": 4.98,
    "chg": -1.78,
    "chgW": -4.96,
    "chgM": -24.89,
    "chgYTD": -12.78,
    "marketCap": "$6.4B",
    "pe": "23.7x",
    "evEbitda": "7.3x",
    "de": "0.5x",
    "drawdown": "-32.2%"
  },
  "FMC": {
    "price": 11.32,
    "chg": 0.0,
    "chgW": -5.51,
    "chgM": -16.21,
    "chgYTD": -18.39,
    "marketCap": "$1.4B",
    "pe": "5.1x",
    "evEbitda": "17.2x",
    "de": "2.5x",
    "drawdown": "-74.7%"
  },
  "CTVA": {
    "price": 81.62,
    "chg": 1.91,
    "chgW": 5.49,
    "chgM": 2.17,
    "chgYTD": 21.77,
    "marketCap": "$54.6B",
    "pe": "44.1x",
    "evEbitda": "13.3x",
    "de": "0.1x",
    "drawdown": "-4.7%"
  },
  "ADM": {
    "price": 76.54,
    "chg": 1.94,
    "chgW": 0.05,
    "chgM": -3.78,
    "chgYTD": 33.14,
    "marketCap": "$36.9B",
    "pe": "34.2x",
    "evEbitda": "18.6x",
    "de": "0.5x",
    "drawdown": "-10.3%"
  },
  "BG": {
    "price": 111.55,
    "chg": 2.35,
    "chgW": -3.95,
    "chgM": -7.95,
    "chgYTD": 25.22,
    "marketCap": "$21.6B",
    "pe": "29.4x",
    "evEbitda": "16.6x",
    "de": "0.9x",
    "drawdown": "-17.3%"
  },
  "INGR": {
    "price": 96.82,
    "chg": -1.31,
    "chgW": -2.04,
    "chgM": -6.87,
    "chgYTD": -12.19,
    "marketCap": "$6.1B",
    "pe": "9.3x",
    "evEbitda": "6.0x",
    "de": "0.4x",
    "drawdown": "-30.0%"
  },
  "FPI": {
    "price": 9.6,
    "chg": -1.23,
    "chgW": -0.93,
    "chgM": -8.13,
    "chgYTD": -0.93,
    "marketCap": "$426M",
    "pe": "16.3x",
    "evEbitda": "24.3x",
    "de": "0.5x",
    "drawdown": "-27.4%"
  },
  "LAND": {
    "price": 8.5,
    "chg": -1.16,
    "chgW": -0.82,
    "chgM": -10.71,
    "chgYTD": -7.1,
    "marketCap": "$367M",
    "pe": "-17.8x",
    "evEbitda": "12.4x",
    "de": "0.7x",
    "drawdown": "-34.6%"
  },
  "DE": {
    "price": 630.76,
    "chg": 5.0,
    "chgW": 7.19,
    "chgM": 19.15,
    "chgYTD": 35.48,
    "marketCap": "$170.3B",
    "pe": "35.7x",
    "evEbitda": "23.4x",
    "de": "3.8x",
    "drawdown": "-6.4%"
  },
  "AGCO": {
    "price": 118.86,
    "chg": 3.74,
    "chgW": 6.15,
    "chgM": 4.01,
    "chgYTD": 13.94,
    "marketCap": "$8.6B",
    "pe": "11.5x",
    "evEbitda": "10.3x",
    "de": "0.6x",
    "drawdown": "-17.3%"
  },
  "CNH": {
    "price": 10.93,
    "chg": 6.01,
    "chgW": 6.32,
    "chgM": 3.9,
    "chgYTD": 18.55,
    "marketCap": "$13.6B",
    "pe": "34.2x",
    "evEbitda": "34.9x",
    "de": "3.3x",
    "drawdown": "-23.4%"
  },
  "XYL": {
    "price": 117.0,
    "chg": 4.43,
    "chgW": 6.08,
    "chgM": 6.27,
    "chgYTD": -14.08,
    "marketCap": "$27.8B",
    "pe": "29.1x",
    "evEbitda": "14.7x",
    "de": "0.2x",
    "drawdown": "-24.2%"
  },
  "VMI": {
    "price": 583.55,
    "chg": 3.57,
    "chgW": 3.23,
    "chgM": 11.73,
    "chgYTD": 45.05,
    "marketCap": "$11.3B",
    "pe": "32.5x",
    "evEbitda": "19.0x",
    "de": "0.5x",
    "drawdown": "-0.4%"
  },
  "LNN": {
    "price": 124.87,
    "chg": 3.6,
    "chgW": 7.55,
    "chgM": 12.37,
    "chgYTD": 5.94,
    "marketCap": "$1.3B",
    "pe": "22.8x",
    "evEbitda": "14.1x",
    "de": "0.3x",
    "drawdown": "-17.3%"
  },
  "MWA": {
    "price": 26.98,
    "chg": 2.86,
    "chgW": 5.19,
    "chgM": 5.1,
    "chgYTD": 13.27,
    "marketCap": "$4.2B",
    "pe": "20.4x",
    "evEbitda": "12.2x",
    "de": "0.4x",
    "drawdown": "-13.0%"
  },
  "WTS": {
    "price": 375.09,
    "chg": 5.65,
    "chgW": 11.53,
    "chgM": 19.15,
    "chgYTD": 35.89,
    "marketCap": "$12.5B",
    "pe": "34.3x",
    "evEbitda": "21.1x",
    "de": "0.1x",
    "drawdown": "-0.1%"
  },
  "TSN": {
    "price": 57.8,
    "chg": -0.02,
    "chgW": 2.85,
    "chgM": -12.45,
    "chgYTD": -1.4,
    "marketCap": "$20.4B",
    "pe": "45.5x",
    "evEbitda": "10.3x",
    "de": "0.4x",
    "drawdown": "-16.8%"
  },
  "PPC": {
    "price": 26.77,
    "chg": -2.87,
    "chgW": -5.57,
    "chgM": -7.75,
    "chgYTD": -31.34,
    "marketCap": "$6.4B",
    "pe": "7.2x",
    "evEbitda": "4.6x",
    "de": "0.9x",
    "drawdown": "-47.1%"
  },
  "HRL": {
    "price": 26.02,
    "chg": 1.84,
    "chgW": 6.95,
    "chgM": 24.14,
    "chgYTD": 9.79,
    "marketCap": "$14.3B",
    "pe": "30.6x",
    "evEbitda": "11.0x",
    "de": "0.0x",
    "drawdown": "-18.3%"
  },
  "CAG": {
    "price": 13.78,
    "chg": 1.25,
    "chgW": 4.71,
    "chgM": 3.38,
    "chgYTD": -20.39,
    "marketCap": "$6.6B",
    "pe": "8.7x",
    "evEbitda": "8.0x",
    "de": "0.9x",
    "drawdown": "-35.5%"
  },
  "CALM": {
    "price": 78.24,
    "chg": -1.0,
    "chgW": -0.08,
    "chgM": 2.91,
    "chgYTD": -1.67,
    "marketCap": "$3.7B",
    "pe": "5.4x",
    "evEbitda": "2.6x",
    "de": "–",
    "drawdown": "-38.1%"
  },
  "DBA": {
    "price": 26.92,
    "chg": 1.36,
    "chgW": 0.3,
    "chgM": -2.0,
    "chgYTD": 5.49,
    "marketCap": "–",
    "pe": "11.4x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-6.7%"
  },
  "MOO": {
    "price": 79.29,
    "chg": 2.76,
    "chgW": 2.59,
    "chgM": -1.44,
    "chgYTD": 8.93,
    "marketCap": "–",
    "pe": "20.2x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-8.4%"
  },
  "VEGI": {
    "price": 43.95,
    "chg": 1.92,
    "chgW": 1.74,
    "chgM": 0.23,
    "chgYTD": 13.95,
    "marketCap": "–",
    "pe": "21.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-7.0%"
  },
  "USAG": {},
  "COCO.L": {
    "price": 8.06,
    "chg": 5.74,
    "chgW": 17.55,
    "chgM": 17.44,
    "chgYTD": -22.94,
    "marketCap": "–",
    "pe": "50.1x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-48.5%"
  }
};
