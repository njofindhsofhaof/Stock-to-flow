window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-06-05 23:45:44",
  "sections": {
    "Index": {
      "risk": "Risk Off",
      "leader": "DJI",
      "watch": 1
    },
    "Commodity": {
      "risk": "Risk Off",
      "leader": "NTR",
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
      "watch": 6
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
    "price": 7383.74,
    "change": -2.64,
    "mom": 32.5,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.8,
    "flow": 64,
    "perf": {
      "w1": -2.59,
      "m1": 0.64,
      "m3": 8.97
    },
    "returns": [
      -2.64,
      -2.97,
      -2.59,
      -0.83,
      0.64,
      8.97
    ],
    "volumes": [
      94,
      103,
      140,
      100,
      100,
      120
    ],
    "rsiStack": [
      24.8,
      39.2,
      48.8,
      53.8,
      56.3,
      56.2
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 50866.78,
    "change": -1.35,
    "mom": 45.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.8,
    "flow": 119,
    "perf": {
      "w1": -0.32,
      "m1": 2.56,
      "m3": 7.27
    },
    "returns": [
      -1.35,
      -0.86,
      -0.32,
      1.16,
      2.56,
      7.27
    ],
    "volumes": [
      98,
      104,
      174,
      100,
      111,
      98
    ],
    "rsiStack": [
      49.8,
      55.4,
      57.8,
      58.3,
      57.3,
      53.7
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
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 71.7,
    "flow": 72,
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
      65,
      92,
      93,
      70,
      62,
      110
    ],
    "rsiStack": [
      70.9,
      72.2,
      71.7,
      70.7,
      69.2,
      68.3
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
    "rsi": 69.3,
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
      82,
      100,
      157,
      91,
      90,
      134
    ],
    "rsiStack": [
      69.0,
      70.5,
      69.3,
      67.5,
      65.3,
      63.3
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 396.24,
    "change": -3.65,
    "mom": 40.9,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 33.0,
    "flow": 190,
    "perf": {
      "w1": -5.01,
      "m1": -8.21,
      "m3": -16.8
    },
    "returns": [
      -3.65,
      -3.81,
      -5.01,
      -4.98,
      -8.21,
      -16.8
    ],
    "volumes": [
      80,
      65,
      128,
      112,
      77,
      101
    ],
    "rsiStack": [
      22.0,
      28.3,
      33.0,
      36.8,
      40.9,
      46.0
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 61.57,
    "change": -8.08,
    "mom": 37.1,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.2,
    "flow": 162,
    "perf": {
      "w1": -9.89,
      "m1": -14.01,
      "m3": -20.97
    },
    "returns": [
      -8.08,
      -9.44,
      -9.89,
      -11.35,
      -14.01,
      -20.97
    ],
    "volumes": [
      53,
      51,
      70,
      67,
      72,
      150
    ],
    "rsiStack": [
      17.7,
      28.2,
      35.2,
      39.6,
      44.2,
      51.2
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 45.31,
    "change": -9.88,
    "mom": 35.6,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.8,
    "flow": 178,
    "perf": {
      "w1": -10.74,
      "m1": -19.46,
      "m3": -11.78
    },
    "returns": [
      -9.88,
      -15.18,
      -10.74,
      -7.27,
      -19.46,
      -11.78
    ],
    "volumes": [
      61,
      170,
      98,
      89,
      88,
      135
    ],
    "rsiStack": [
      22.4,
      30.6,
      35.8,
      39.4,
      42.8,
      46.4
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 90.25,
    "change": -3.0,
    "mom": 44.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.1,
    "flow": 88,
    "perf": {
      "w1": 3.31,
      "m1": -4.81,
      "m3": 3.44
    },
    "returns": [
      -3.0,
      -3.74,
      3.31,
      -6.33,
      -4.81,
      3.44
    ],
    "volumes": [
      102,
      91,
      101,
      107,
      129,
      134
    ],
    "rsiStack": [
      36.7,
      40.0,
      43.1,
      45.7,
      48.2,
      49.3
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 113.49,
    "change": -3.43,
    "mom": 43.6,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.6,
    "flow": 81,
    "perf": {
      "w1": 1.01,
      "m1": -4.37,
      "m3": -5.53
    },
    "returns": [
      -3.43,
      0.01,
      1.01,
      -6.74,
      -4.37,
      -5.53
    ],
    "volumes": [
      62,
      54,
      146,
      87,
      88,
      161
    ],
    "rsiStack": [
      34.6,
      38.1,
      41.6,
      44.4,
      47.3,
      49.6
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 34.96,
    "change": -5.97,
    "mom": 35.9,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.7,
    "flow": 88,
    "perf": {
      "w1": -10.52,
      "m1": -9.45,
      "m3": -20.82
    },
    "returns": [
      -5.97,
      -8.17,
      -10.52,
      -13.34,
      -9.45,
      -20.82
    ],
    "volumes": [
      99,
      68,
      76,
      55,
      55,
      155
    ],
    "rsiStack": [
      19.0,
      28.4,
      35.7,
      40.4,
      44.0,
      44.9
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 22.24,
    "change": -2.88,
    "mom": 43.6,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.5,
    "flow": 82,
    "perf": {
      "w1": -6.95,
      "m1": -2.92,
      "m3": -23.7
    },
    "returns": [
      -2.88,
      -4.55,
      -6.95,
      1.37,
      -2.92,
      -23.7
    ],
    "volumes": [
      73,
      62,
      101,
      110,
      76,
      83
    ],
    "rsiStack": [
      26.4,
      38.4,
      41.5,
      42.6,
      43.9,
      46.7
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 67.2,
    "change": -2.61,
    "mom": 40.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 37.0,
    "flow": 81,
    "perf": {
      "w1": -1.97,
      "m1": -1.73,
      "m3": -15.27
    },
    "returns": [
      -2.61,
      -1.9,
      -1.97,
      -4.33,
      -1.73,
      -15.27
    ],
    "volumes": [
      96,
      103,
      84,
      81,
      85,
      229
    ],
    "rsiStack": [
      26.1,
      32.5,
      37.0,
      40.2,
      43.2,
      45.3
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 60678.0,
    "change": -4.9,
    "mom": 23.9,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Confirmed Distribution",
    "signal": "SELL",
    "dist_streak": 3,
    "acc_streak": 0,
    "rsi": 15.3,
    "flow": 203,
    "perf": {
      "w1": -17.53,
      "m1": -22.34,
      "m3": -11.88
    },
    "returns": [
      -4.9,
      -9.03,
      -17.53,
      -19.98,
      -22.34,
      -11.88
    ],
    "volumes": [
      194,
      175,
      59,
      111,
      120,
      77
    ],
    "rsiStack": [
      2.8,
      8.2,
      15.3,
      22.4,
      30.5,
      37.5
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 152.4,
    "change": -7.15,
    "mom": 30.7,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 33.1,
    "flow": 162,
    "perf": {
      "w1": -19.38,
      "m1": -21.02,
      "m3": -23.27
    },
    "returns": [
      -7.15,
      -12.41,
      -19.38,
      -21.26,
      -21.02,
      -23.27
    ],
    "volumes": [
      87,
      95,
      106,
      84,
      59,
      93
    ],
    "rsiStack": [
      17.6,
      26.7,
      33.1,
      37.3,
      41.0,
      44.9
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 80.28,
    "change": -11.33,
    "mom": 31.4,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 33.0,
    "flow": 139,
    "perf": {
      "w1": -28.96,
      "m1": -29.11,
      "m3": -28.84
    },
    "returns": [
      -11.33,
      -20.4,
      -28.96,
      -30.12,
      -29.11,
      -28.84
    ],
    "volumes": [
      70,
      81,
      132,
      47,
      63,
      161
    ],
    "rsiStack": [
      14.7,
      25.2,
      33.0,
      38.2,
      43.3,
      50.4
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 120.44,
    "change": -6.9,
    "mom": 31.3,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 29.5,
    "flow": 235,
    "perf": {
      "w1": -24.29,
      "m1": -33.03,
      "m3": -12.93
    },
    "returns": [
      -6.9,
      -11.49,
      -24.29,
      -26.94,
      -33.03,
      -12.93
    ],
    "volumes": [
      150,
      200,
      127,
      81,
      70,
      84
    ],
    "rsiStack": [
      15.5,
      22.2,
      29.5,
      35.2,
      40.8,
      47.7
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 57.67,
    "change": -1.84,
    "mom": 46.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.0,
    "flow": 75,
    "perf": {
      "w1": 2.45,
      "m1": 3.07,
      "m3": 1.21
    },
    "returns": [
      -1.84,
      -0.5,
      2.45,
      -2.47,
      3.07,
      1.21
    ],
    "volumes": [
      62,
      61,
      83,
      125,
      121,
      124
    ],
    "rsiStack": [
      43.6,
      46.5,
      48.0,
      49.3,
      51.2,
      54.8
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 180.3,
    "change": -6.66,
    "mom": 32.3,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.2,
    "flow": 194,
    "perf": {
      "w1": -5.61,
      "m1": 6.25,
      "m3": 28.39
    },
    "returns": [
      -6.66,
      -9.04,
      -5.61,
      0.95,
      6.25,
      28.39
    ],
    "volumes": [
      102,
      80,
      122,
      104,
      94,
      106
    ],
    "rsiStack": [
      29.3,
      43.9,
      52.2,
      56.7,
      59.4,
      60.5
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 44.35,
    "change": 0.93,
    "mom": 54.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.1,
    "flow": 98,
    "perf": {
      "w1": -0.16,
      "m1": -1.71,
      "m3": -3.94
    },
    "returns": [
      0.93,
      1.03,
      -0.16,
      -1.44,
      -1.71,
      -3.94
    ],
    "volumes": [
      83,
      124,
      111,
      83,
      91,
      119
    ],
    "rsiStack": [
      54.2,
      48.1,
      46.1,
      45.9,
      46.6,
      48.5
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 153.01,
    "change": 0.61,
    "mom": 64.1,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 63.9,
    "flow": 190,
    "perf": {
      "w1": 2.37,
      "m1": 5.73,
      "m3": 0.1
    },
    "returns": [
      0.61,
      4.52,
      2.37,
      3.28,
      5.73,
      0.1
    ],
    "volumes": [
      137,
      121,
      136,
      103,
      73,
      91
    ],
    "rsiStack": [
      74.4,
      68.2,
      63.9,
      60.2,
      55.5,
      48.1
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 111.67,
    "change": -1.27,
    "mom": 39.3,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 34.2,
    "flow": 174,
    "perf": {
      "w1": -3.47,
      "m1": -4.86,
      "m3": -4.56
    },
    "returns": [
      -1.27,
      -1.67,
      -3.47,
      -3.82,
      -4.86,
      -4.56
    ],
    "volumes": [
      123,
      132,
      111,
      116,
      99,
      95
    ],
    "rsiStack": [
      23.4,
      28.7,
      34.2,
      38.4,
      42.1,
      45.4
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 52.3,
    "change": 0.21,
    "mom": 58.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 58.3,
    "flow": 112,
    "perf": {
      "w1": 1.4,
      "m1": 1.45,
      "m3": 5.36
    },
    "returns": [
      0.21,
      1.63,
      1.4,
      1.1,
      1.45,
      5.36
    ],
    "volumes": [
      159,
      90,
      97,
      132,
      100,
      111
    ],
    "rsiStack": [
      68.2,
      61.6,
      58.3,
      56.1,
      53.5,
      49.2
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 44.7,
    "change": 0.68,
    "mom": 55.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 58.3,
    "flow": 109,
    "perf": {
      "w1": 1.61,
      "m1": 0.68,
      "m3": 5.4
    },
    "returns": [
      0.68,
      2.78,
      1.61,
      0.45,
      0.68,
      5.4
    ],
    "volumes": [
      107,
      126,
      138,
      67,
      68,
      135
    ],
    "rsiStack": [
      69.3,
      61.0,
      58.3,
      57.3,
      56.0,
      52.5
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 174.18,
    "change": -1.12,
    "mom": 52.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.6,
    "flow": 115,
    "perf": {
      "w1": 0.61,
      "m1": 0.1,
      "m3": 2.77
    },
    "returns": [
      -1.12,
      -0.01,
      0.61,
      2.14,
      0.1,
      2.77
    ],
    "volumes": [
      87,
      110,
      91,
      93,
      105,
      122
    ],
    "rsiStack": [
      52.6,
      53.8,
      53.6,
      53.4,
      52.8,
      50.3
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 50.63,
    "change": -1.92,
    "mom": 44.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.1,
    "flow": 104,
    "perf": {
      "w1": -1.02,
      "m1": -1.5,
      "m3": 1.59
    },
    "returns": [
      -1.92,
      -1.73,
      -1.02,
      1.22,
      -1.5,
      1.59
    ],
    "volumes": [
      82,
      168,
      111,
      85,
      97,
      124
    ],
    "rsiStack": [
      35.5,
      43.4,
      46.1,
      47.6,
      49.1,
      50.4
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 114.86,
    "change": -2.05,
    "mom": 35.4,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.8,
    "flow": 100,
    "perf": {
      "w1": -4.97,
      "m1": -4.19,
      "m3": 0.63
    },
    "returns": [
      -2.05,
      -2.32,
      -4.97,
      -3.24,
      -4.19,
      0.63
    ],
    "volumes": [
      65,
      103,
      89,
      157,
      87,
      102
    ],
    "rsiStack": [
      23.0,
      33.3,
      39.8,
      43.8,
      46.4,
      47.8
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 83.44,
    "change": 1.71,
    "mom": 54.9,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.4,
    "flow": 137,
    "perf": {
      "w1": 0.64,
      "m1": -0.64,
      "m3": -1.36
    },
    "returns": [
      1.71,
      1.97,
      0.64,
      -1.44,
      -0.64,
      -1.36
    ],
    "volumes": [
      102,
      134,
      115,
      105,
      112,
      89
    ],
    "rsiStack": [
      57.2,
      50.1,
      49.4,
      49.5,
      50.0,
      51.9
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 539.77,
    "change": -10.44,
    "mom": 34.0,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 52.9,
    "flow": 235,
    "perf": {
      "w1": -5.15,
      "m1": 9.63,
      "m3": 57.79
    },
    "returns": [
      -10.44,
      -10.78,
      -5.15,
      2.87,
      9.63,
      57.79
    ],
    "volumes": [
      129,
      86,
      87,
      138,
      81,
      150
    ],
    "rsiStack": [
      32.9,
      45.8,
      52.9,
      56.9,
      59.6,
      60.9
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 26.4,
    "change": -1.09,
    "mom": 28.8,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 28.9,
    "flow": 283,
    "perf": {
      "w1": -3.12,
      "m1": -5.04,
      "m3": -1.12
    },
    "returns": [
      -1.09,
      -2.65,
      -3.12,
      -4.38,
      -5.04,
      -1.12
    ],
    "volumes": [
      94,
      111,
      117,
      78,
      89,
      172
    ],
    "rsiStack": [
      8.0,
      19.9,
      28.9,
      35.2,
      40.7,
      45.3
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 43.99,
    "change": -1.85,
    "mom": 47.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 41.7,
    "flow": 53,
    "perf": {
      "w1": 0.09,
      "m1": -2.74,
      "m3": -3.8
    },
    "returns": [
      -1.85,
      -1.94,
      0.09,
      0.23,
      -2.74,
      -3.8
    ],
    "volumes": [
      184,
      44,
      76,
      110,
      146,
      97
    ],
    "rsiStack": [
      36.7,
      40.0,
      41.7,
      43.5,
      45.9,
      48.0
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 44.17,
    "change": -0.9,
    "mom": 48.0,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.3,
    "flow": 8,
    "perf": {
      "w1": -1.53,
      "m1": 6.53,
      "m3": 14.37
    },
    "returns": [
      -0.9,
      -0.48,
      -1.53,
      5.06,
      6.53,
      14.37
    ],
    "volumes": [
      4,
      7,
      15,
      7,
      21,
      85
    ],
    "rsiStack": [
      54.3,
      62.0,
      62.3,
      61.1,
      59.4,
      58.0
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 28.49,
    "change": -0.07,
    "mom": 39.4,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 32.9,
    "flow": 153,
    "perf": {
      "w1": -1.76,
      "m1": -4.3,
      "m3": -2.4
    },
    "returns": [
      -0.07,
      -1.79,
      -1.76,
      -2.27,
      -4.3,
      -2.4
    ],
    "volumes": [
      1374,
      92,
      61,
      11,
      39,
      33
    ],
    "rsiStack": [
      22.4,
      27.5,
      32.9,
      37.6,
      43.0,
      49.9
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 95.29,
    "change": 1.22,
    "mom": 40.0,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 33.4,
    "flow": 100,
    "perf": {
      "w1": -3.9,
      "m1": -8.6,
      "m3": -6.06
    },
    "returns": [
      1.22,
      -0.23,
      -3.9,
      -8.49,
      -8.6,
      -6.06
    ],
    "volumes": [
      98,
      125,
      112,
      106,
      103,
      123
    ],
    "rsiStack": [
      26.5,
      27.2,
      33.4,
      38.9,
      43.5,
      44.6
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 78.6,
    "change": -2.04,
    "mom": 41.2,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 31.8,
    "flow": 55,
    "perf": {
      "w1": -1.08,
      "m1": -3.69,
      "m3": -6.18
    },
    "returns": [
      -2.04,
      -1.45,
      -1.08,
      -2.31,
      -3.69,
      -6.18
    ],
    "volumes": [
      38,
      65,
      57,
      26,
      66,
      162
    ],
    "rsiStack": [
      22.9,
      27.6,
      31.8,
      35.7,
      40.1,
      44.0
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 14.9,
    "change": -2.87,
    "mom": 41.5,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.3,
    "flow": 49,
    "perf": {
      "w1": -14.56,
      "m1": 22.33,
      "m3": 23.04
    },
    "returns": [
      -2.87,
      -7.74,
      -14.56,
      9.0,
      22.33,
      23.04
    ],
    "volumes": [
      58,
      85,
      187,
      117,
      108,
      94
    ],
    "rsiStack": [
      36.5,
      49.7,
      54.3,
      55.9,
      56.0,
      54.5
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 82.11,
    "change": -1.33,
    "mom": 51.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.8,
    "flow": 66,
    "perf": {
      "w1": -1.36,
      "m1": 4.72,
      "m3": 9.79
    },
    "returns": [
      -1.33,
      0.46,
      -1.36,
      6.35,
      4.72,
      9.79
    ],
    "volumes": [
      90,
      144,
      217,
      147,
      86,
      102
    ],
    "rsiStack": [
      54.8,
      58.4,
      57.8,
      56.7,
      55.8,
      57.9
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 23.86,
    "change": -0.65,
    "mom": 32.7,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 33.5,
    "flow": 212,
    "perf": {
      "w1": -3.22,
      "m1": -3.73,
      "m3": -3.42
    },
    "returns": [
      -0.65,
      -3.03,
      -3.22,
      -5.97,
      -3.73,
      -3.42
    ],
    "volumes": [
      119,
      83,
      51,
      136,
      41,
      115
    ],
    "rsiStack": [
      12.2,
      24.9,
      33.5,
      38.9,
      43.2,
      45.6
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 26.04,
    "change": 1.36,
    "mom": 59.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.1,
    "flow": 95,
    "perf": {
      "w1": -0.53,
      "m1": -1.66,
      "m3": -4.62
    },
    "returns": [
      1.36,
      1.92,
      -0.53,
      0.35,
      -1.66,
      -4.62
    ],
    "volumes": [
      92,
      87,
      135,
      110,
      53,
      134
    ],
    "rsiStack": [
      62.1,
      54.3,
      50.1,
      48.2,
      46.6,
      42.1
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 10.33,
    "change": 0.49,
    "mom": 54.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.0,
    "flow": 85,
    "perf": {
      "w1": 0.58,
      "m1": -2.36,
      "m3": -17.43
    },
    "returns": [
      0.49,
      -0.48,
      0.58,
      -1.34,
      -2.36,
      -17.43
    ],
    "volumes": [
      103,
      90,
      114,
      76,
      71,
      111
    ],
    "rsiStack": [
      47.2,
      42.5,
      40.0,
      39.9,
      41.6,
      44.5
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 9.27,
    "change": -0.64,
    "mom": 52.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.6,
    "flow": 78,
    "perf": {
      "w1": -2.22,
      "m1": -4.92,
      "m3": -22.43
    },
    "returns": [
      -0.64,
      -0.54,
      -2.22,
      -2.73,
      -4.92,
      -22.43
    ],
    "volumes": [
      63,
      66,
      133,
      63,
      88,
      66
    ],
    "rsiStack": [
      41.3,
      41.0,
      40.6,
      40.7,
      41.9,
      44.2
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 206.89,
    "change": -4.88,
    "mom": 42.1,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.7,
    "flow": 187,
    "perf": {
      "w1": -12.35,
      "m1": 9.88,
      "m3": 78.49
    },
    "returns": [
      -4.88,
      -9.66,
      -12.35,
      6.98,
      9.88,
      78.49
    ],
    "volumes": [
      97,
      218,
      118,
      68,
      111,
      74
    ],
    "rsiStack": [
      38.3,
      49.4,
      53.7,
      55.6,
      55.6,
      50.9
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 263.47,
    "change": -16.74,
    "mom": 57.7,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 65.0,
    "flow": 198,
    "perf": {
      "w1": 28.52,
      "m1": 64.66,
      "m3": 191.32
    },
    "returns": [
      -16.74,
      -9.4,
      28.52,
      38.17,
      64.66,
      191.32
    ],
    "volumes": [
      209,
      335,
      123,
      213,
      88,
      86
    ],
    "rsiStack": [
      55.0,
      62.2,
      65.0,
      66.5,
      67.1,
      65.3
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 67.2,
    "chg": -2.61,
    "chgW": -1.97,
    "chgM": -1.73,
    "chgYTD": 8.88,
    "marketCap": "$32.3B",
    "pe": "13.7x",
    "evEbitda": "8.1x",
    "de": "0.6x",
    "drawdown": "-21.3%"
  },
  "MOS": {
    "price": 22.24,
    "chg": -2.88,
    "chgW": -6.95,
    "chgM": -2.92,
    "chgYTD": -7.68,
    "marketCap": "$7.1B",
    "pe": "158.9x",
    "evEbitda": "6.5x",
    "de": "0.5x",
    "drawdown": "-41.8%"
  },
  "CF": {
    "price": 113.49,
    "chg": -3.43,
    "chgW": 1.01,
    "chgM": -4.37,
    "chgYTD": 46.74,
    "marketCap": "$17.4B",
    "pe": "10.2x",
    "evEbitda": "6.6x",
    "de": "0.4x",
    "drawdown": "-20.1%"
  },
  "ICL": {
    "price": 5.6,
    "chg": -4.92,
    "chgW": -15.66,
    "chgM": -6.67,
    "chgYTD": -1.93,
    "marketCap": "$7.2B",
    "pe": "26.7x",
    "evEbitda": "7.9x",
    "de": "0.5x",
    "drawdown": "-23.8%"
  },
  "FMC": {
    "price": 11.64,
    "chg": -4.51,
    "chgW": -14.79,
    "chgM": -14.91,
    "chgYTD": -16.08,
    "marketCap": "$1.5B",
    "pe": "5.3x",
    "evEbitda": "17.5x",
    "de": "2.5x",
    "drawdown": "-74.0%"
  },
  "CTVA": {
    "price": 77.03,
    "chg": -0.56,
    "chgW": -1.6,
    "chgM": -2.58,
    "chgYTD": 14.92,
    "marketCap": "$51.5B",
    "pe": "41.6x",
    "evEbitda": "12.9x",
    "de": "0.1x",
    "drawdown": "-10.0%"
  },
  "ADM": {
    "price": 80.92,
    "chg": -2.94,
    "chgW": 1.43,
    "chgM": 4.37,
    "chgYTD": 40.75,
    "marketCap": "$39.0B",
    "pe": "36.1x",
    "evEbitda": "19.4x",
    "de": "0.5x",
    "drawdown": "-5.2%"
  },
  "BG": {
    "price": 126.46,
    "chg": -2.29,
    "chgW": 2.56,
    "chgM": 2.19,
    "chgYTD": 41.96,
    "marketCap": "$24.5B",
    "pe": "33.3x",
    "evEbitda": "18.4x",
    "de": "0.9x",
    "drawdown": "-6.2%"
  },
  "INGR": {
    "price": 99.98,
    "chg": 0.52,
    "chgW": -1.44,
    "chgM": -6.87,
    "chgYTD": -9.32,
    "marketCap": "$6.3B",
    "pe": "9.6x",
    "evEbitda": "6.1x",
    "de": "0.4x",
    "drawdown": "-28.8%"
  },
  "FPI": {
    "price": 10.33,
    "chg": 0.49,
    "chgW": 0.58,
    "chgM": -2.36,
    "chgYTD": 6.6,
    "marketCap": "$458M",
    "pe": "17.5x",
    "evEbitda": "25.2x",
    "de": "0.5x",
    "drawdown": "-21.9%"
  },
  "LAND": {
    "price": 9.27,
    "chg": -0.64,
    "chgW": -2.22,
    "chgM": -4.92,
    "chgYTD": 1.31,
    "marketCap": "$400M",
    "pe": "-19.4x",
    "evEbitda": "12.8x",
    "de": "0.7x",
    "drawdown": "-28.7%"
  },
  "DE": {
    "price": 583.44,
    "chg": -1.4,
    "chgW": 7.61,
    "chgM": 0.5,
    "chgYTD": 25.32,
    "marketCap": "$157.5B",
    "pe": "33.1x",
    "evEbitda": "23.1x",
    "de": "3.8x",
    "drawdown": "-13.5%"
  },
  "AGCO": {
    "price": 116.41,
    "chg": -2.89,
    "chgW": 3.68,
    "chgM": -1.1,
    "chgYTD": 11.59,
    "marketCap": "$8.4B",
    "pe": "11.2x",
    "evEbitda": "10.6x",
    "de": "0.6x",
    "drawdown": "-19.0%"
  },
  "CNH": {
    "price": 10.75,
    "chg": -0.92,
    "chgW": 5.29,
    "chgM": -0.83,
    "chgYTD": 16.59,
    "marketCap": "$13.3B",
    "pe": "33.6x",
    "evEbitda": "35.5x",
    "de": "3.3x",
    "drawdown": "-24.7%"
  },
  "XYL": {
    "price": 109.94,
    "chg": -0.22,
    "chgW": 0.37,
    "chgM": -4.93,
    "chgYTD": -19.27,
    "marketCap": "$26.1B",
    "pe": "27.3x",
    "evEbitda": "14.5x",
    "de": "0.2x",
    "drawdown": "-28.7%"
  },
  "VMI": {
    "price": 533.8,
    "chg": -2.03,
    "chgW": 2.69,
    "chgM": 4.84,
    "chgYTD": 32.68,
    "marketCap": "$10.4B",
    "pe": "29.7x",
    "evEbitda": "17.4x",
    "de": "0.5x",
    "drawdown": "-2.8%"
  },
  "LNN": {
    "price": 112.67,
    "chg": -1.24,
    "chgW": 3.09,
    "chgM": 0.29,
    "chgYTD": -4.41,
    "marketCap": "$1.2B",
    "pe": "20.6x",
    "evEbitda": "12.7x",
    "de": "0.3x",
    "drawdown": "-25.4%"
  },
  "MWA": {
    "price": 25.33,
    "chg": 0.96,
    "chgW": 0.48,
    "chgM": -5.8,
    "chgYTD": 6.34,
    "marketCap": "$4.0B",
    "pe": "19.2x",
    "evEbitda": "11.6x",
    "de": "0.4x",
    "drawdown": "-18.3%"
  },
  "WTS": {
    "price": 314.21,
    "chg": -0.27,
    "chgW": 1.69,
    "chgM": 6.82,
    "chgYTD": 13.84,
    "marketCap": "$10.5B",
    "pe": "28.7x",
    "evEbitda": "18.7x",
    "de": "0.1x",
    "drawdown": "-9.0%"
  },
  "TSN": {
    "price": 58.73,
    "chg": 3.25,
    "chgW": -3.75,
    "chgM": -13.56,
    "chgYTD": 0.19,
    "marketCap": "$20.7B",
    "pe": "46.2x",
    "evEbitda": "10.5x",
    "de": "0.4x",
    "drawdown": "-15.5%"
  },
  "PPC": {
    "price": 29.88,
    "chg": 3.14,
    "chgW": 5.55,
    "chgM": -1.71,
    "chgYTD": -23.36,
    "marketCap": "$7.1B",
    "pe": "8.0x",
    "evEbitda": "4.7x",
    "de": "0.9x",
    "drawdown": "-40.9%"
  },
  "HRL": {
    "price": 23.62,
    "chg": 1.42,
    "chgW": 1.68,
    "chgM": 13.83,
    "chgYTD": -0.34,
    "marketCap": "$13.0B",
    "pe": "27.8x",
    "evEbitda": "10.0x",
    "de": "0.0x",
    "drawdown": "-25.9%"
  },
  "CAG": {
    "price": 13.01,
    "chg": 2.6,
    "chgW": -2.03,
    "chgM": -9.4,
    "chgYTD": -24.84,
    "marketCap": "$6.2B",
    "pe": "8.0x",
    "evEbitda": "7.8x",
    "de": "0.9x",
    "drawdown": "-42.4%"
  },
  "CALM": {
    "price": 75.65,
    "chg": 1.6,
    "chgW": 1.24,
    "chgM": -0.12,
    "chgYTD": -4.93,
    "marketCap": "$3.6B",
    "pe": "5.3x",
    "evEbitda": "2.5x",
    "de": "–",
    "drawdown": "-40.2%"
  },
  "DBA": {
    "price": 26.4,
    "chg": -1.09,
    "chgW": -3.12,
    "chgM": -5.04,
    "chgYTD": 3.45,
    "marketCap": "–",
    "pe": "11.1x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-8.5%"
  },
  "MOO": {
    "price": 78.6,
    "chg": -2.04,
    "chgW": -1.08,
    "chgM": -3.69,
    "chgYTD": 7.98,
    "marketCap": "–",
    "pe": "20.0x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-9.2%"
  },
  "VEGI": {
    "price": 43.99,
    "chg": -1.85,
    "chgW": 0.09,
    "chgM": -2.74,
    "chgYTD": 14.05,
    "marketCap": "–",
    "pe": "21.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-6.9%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "36.8x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
