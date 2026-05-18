window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-05-18 23:35:54",
  "sections": {
    "Index": {
      "risk": "Strong OFF",
      "leader": "KOSPI",
      "watch": 1
    },
    "Commodity": {
      "risk": "Strong ON",
      "leader": "IPI",
      "watch": 0
    },
    "Crypto": {
      "risk": "Risk Off",
      "leader": "CRCL",
      "watch": 1
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "SOX",
      "watch": 3
    },
    "Stock": {
      "risk": "Neutral",
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
    "price": 7403.05,
    "change": -0.07,
    "mom": 47.1,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 66.6,
    "flow": 59,
    "perf": {
      "w1": -0.13,
      "m1": 4.13,
      "m3": 7.14
    },
    "returns": [
      -0.07,
      -0.55,
      -0.13,
      2.81,
      4.13,
      7.14
    ],
    "volumes": [
      105,
      107,
      110,
      120,
      103,
      90
    ],
    "rsiStack": [
      54.8,
      64.2,
      66.6,
      65.5,
      61.4,
      50.5
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 49686.12,
    "change": 0.32,
    "mom": 50.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.4,
    "flow": 93,
    "perf": {
      "w1": -0.04,
      "m1": 0.49,
      "m3": 0.12
    },
    "returns": [
      0.32,
      -0.01,
      -0.04,
      1.52,
      0.49,
      0.12
    ],
    "volumes": [
      119,
      99,
      100,
      98,
      89,
      83
    ],
    "rsiStack": [
      51.8,
      55.8,
      57.4,
      57.0,
      54.8,
      49.2
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 7493.18,
    "change": -6.12,
    "mom": 46.2,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 64.4,
    "flow": 106,
    "perf": {
      "w1": -0.06,
      "m1": 23.01,
      "m3": 35.69
    },
    "returns": [
      -6.12,
      -1.96,
      -0.06,
      11.99,
      23.01,
      35.69
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
      49.6,
      60.7,
      64.4,
      64.9,
      64.2,
      62.6
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
    "rsi": 59.1,
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
      110,
      124,
      150,
      120,
      96
    ],
    "rsiStack": [
      44.0,
      55.8,
      59.1,
      59.4,
      58.6,
      56.9
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 418.43,
    "change": 0.27,
    "mom": 43.9,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 41.2,
    "flow": 90,
    "perf": {
      "w1": -3.73,
      "m1": -5.35,
      "m3": -10.71
    },
    "returns": [
      0.27,
      -2.8,
      -3.73,
      0.9,
      -5.35,
      -10.71
    ],
    "volumes": [
      146,
      65,
      83,
      101,
      104,
      72
    ],
    "rsiStack": [
      28.0,
      37.2,
      41.2,
      43.4,
      45.6,
      47.9
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 69.94,
    "change": 1.3,
    "mom": 44.8,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 48.1,
    "flow": 90,
    "perf": {
      "w1": -10.33,
      "m1": -3.06,
      "m3": -8.72
    },
    "returns": [
      1.3,
      -11.86,
      -10.33,
      6.07,
      -3.06,
      -8.72
    ],
    "volumes": [
      191,
      134,
      168,
      150,
      90,
      59
    ],
    "rsiStack": [
      37.5,
      45.3,
      48.1,
      48.9,
      49.3,
      49.2
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 48.68,
    "change": -2.5,
    "mom": 29.6,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.6,
    "flow": 95,
    "perf": {
      "w1": -14.94,
      "m1": -13.15,
      "m3": -10.45
    },
    "returns": [
      -2.5,
      -8.69,
      -14.94,
      -11.12,
      -13.15,
      -10.45
    ],
    "volumes": [
      109,
      83,
      110,
      135,
      87,
      114
    ],
    "rsiStack": [
      20.6,
      32.2,
      38.6,
      42.3,
      44.0,
      40.2
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 102.42,
    "change": -2.85,
    "mom": 45.6,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.6,
    "flow": 1,
    "perf": {
      "w1": 4.44,
      "m1": 14.3,
      "m3": 54.27
    },
    "returns": [
      -2.85,
      1.39,
      4.44,
      -3.76,
      14.3,
      54.27
    ],
    "volumes": [
      62,
      76,
      90,
      134,
      110,
      34
    ],
    "rsiStack": [
      55.6,
      55.0,
      54.6,
      54.8,
      55.1,
      54.2
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 125.22,
    "change": -0.02,
    "mom": 46.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.2,
    "flow": 98,
    "perf": {
      "w1": 0.59,
      "m1": 8.0,
      "m3": 28.85
    },
    "returns": [
      -0.02,
      -0.22,
      0.59,
      -0.53,
      8.0,
      28.85
    ],
    "volumes": [
      90,
      91,
      85,
      161,
      75,
      74
    ],
    "rsiStack": [
      53.8,
      52.6,
      52.2,
      52.6,
      53.3,
      53.5
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 41.19,
    "change": -1.58,
    "mom": 45.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.1,
    "flow": 64,
    "perf": {
      "w1": -5.85,
      "m1": 15.12,
      "m3": 22.81
    },
    "returns": [
      -1.58,
      -9.27,
      -5.85,
      4.7,
      15.12,
      22.81
    ],
    "volumes": [
      91,
      123,
      161,
      155,
      66,
      56
    ],
    "rsiStack": [
      45.2,
      50.9,
      52.1,
      52.4,
      52.8,
      53.7
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 21.41,
    "change": -1.61,
    "mom": 45.1,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 33.4,
    "flow": 102,
    "perf": {
      "w1": -1.74,
      "m1": -11.2,
      "m3": -27.25
    },
    "returns": [
      -1.61,
      -6.01,
      -1.74,
      -6.79,
      -11.2,
      -27.25
    ],
    "volumes": [
      100,
      137,
      198,
      83,
      76,
      101
    ],
    "rsiStack": [
      25.0,
      29.8,
      33.4,
      36.5,
      39.1,
      39.3
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 71.62,
    "change": 0.08,
    "mom": 46.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.8,
    "flow": 72,
    "perf": {
      "w1": 0.46,
      "m1": 0.63,
      "m3": 0.59
    },
    "returns": [
      0.08,
      0.46,
      0.46,
      -5.54,
      0.63,
      0.59
    ],
    "volumes": [
      81,
      72,
      129,
      229,
      96,
      63
    ],
    "rsiStack": [
      49.1,
      46.8,
      46.8,
      47.4,
      48.3,
      47.8
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 76953.05,
    "change": -0.62,
    "mom": 34.4,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.0,
    "flow": 130,
    "perf": {
      "w1": -2.93,
      "m1": 0.79,
      "m3": 10.07
    },
    "returns": [
      -0.62,
      -2.67,
      -2.93,
      -4.03,
      0.79,
      10.07
    ],
    "volumes": [
      63,
      114,
      107,
      98,
      98,
      88
    ],
    "rsiStack": [
      26.4,
      37.7,
      45.0,
      49.0,
      50.8,
      48.9
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 189.44,
    "change": -3.07,
    "mom": 37.4,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet) (Day 2)",
    "signal": "AVOID",
    "dist_streak": 2,
    "acc_streak": 0,
    "rsi": 46.6,
    "flow": 98,
    "perf": {
      "w1": -12.54,
      "m1": -10.49,
      "m3": 10.56
    },
    "returns": [
      -3.07,
      -6.12,
      -12.54,
      -6.68,
      -10.49,
      10.56
    ],
    "volumes": [
      139,
      83,
      132,
      93,
      114,
      91
    ],
    "rsiStack": [
      36.0,
      43.2,
      46.6,
      47.8,
      46.4,
      38.2
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 111.39,
    "change": -2.29,
    "mom": 39.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.8,
    "flow": 66,
    "perf": {
      "w1": -15.46,
      "m1": 4.73,
      "m3": 76.75
    },
    "returns": [
      -2.29,
      -11.99,
      -15.46,
      -6.81,
      4.73,
      76.75
    ],
    "volumes": [
      102,
      117,
      321,
      161,
      275,
      74
    ],
    "rsiStack": [
      38.9,
      47.9,
      50.8,
      52.0,
      52.5,
      50.9
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 166.63,
    "change": -6.08,
    "mom": 33.8,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.4,
    "flow": 111,
    "perf": {
      "w1": -14.96,
      "m1": -2.45,
      "m3": 27.15
    },
    "returns": [
      -6.08,
      -6.4,
      -14.96,
      -9.34,
      -2.45,
      27.15
    ],
    "volumes": [
      114,
      66,
      83,
      84,
      96,
      116
    ],
    "rsiStack": [
      32.3,
      42.8,
      48.4,
      50.9,
      50.8,
      45.1
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 60.58,
    "change": 1.92,
    "mom": 60.7,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.4,
    "flow": 110,
    "perf": {
      "w1": 5.96,
      "m1": 10.01,
      "m3": 10.39
    },
    "returns": [
      1.92,
      5.12,
      5.96,
      2.0,
      10.01,
      10.39
    ],
    "volumes": [
      92,
      57,
      77,
      124,
      82,
      62
    ],
    "rsiStack": [
      81.2,
      69.4,
      63.4,
      60.5,
      58.7,
      55.5
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 174.36,
    "change": -1.08,
    "mom": 45.5,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 68.2,
    "flow": 161,
    "perf": {
      "w1": -1.98,
      "m1": 12.81,
      "m3": 23.76
    },
    "returns": [
      -1.08,
      -1.41,
      -1.98,
      7.6,
      12.81,
      23.76
    ],
    "volumes": [
      132,
      91,
      99,
      106,
      104,
      62
    ],
    "rsiStack": [
      53.3,
      64.5,
      68.2,
      68.2,
      64.6,
      52.8
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 43.94,
    "change": 0.16,
    "mom": 36.4,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Reflex Setup",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.2,
    "flow": 146,
    "perf": {
      "w1": -2.66,
      "m1": -3.96,
      "m3": -5.16
    },
    "returns": [
      0.16,
      -1.63,
      -2.66,
      -5.24,
      -3.96,
      -5.16
    ],
    "volumes": [
      108,
      134,
      113,
      119,
      94,
      63
    ],
    "rsiStack": [
      24.4,
      30.5,
      35.2,
      38.7,
      42.1,
      43.3
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 145.72,
    "change": 0.43,
    "mom": 57.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.3,
    "flow": 80,
    "perf": {
      "w1": 1.87,
      "m1": -1.15,
      "m3": -7.08
    },
    "returns": [
      0.43,
      -0.67,
      1.87,
      0.68,
      -1.15,
      -7.08
    ],
    "volumes": [
      96,
      168,
      106,
      91,
      130,
      54
    ],
    "rsiStack": [
      53.9,
      51.7,
      49.3,
      47.6,
      45.9,
      42.9
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 116.98,
    "change": 0.78,
    "mom": 52.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.3,
    "flow": 105,
    "perf": {
      "w1": 1.21,
      "m1": -1.49,
      "m3": 0.15
    },
    "returns": [
      0.78,
      0.19,
      1.21,
      0.76,
      -1.49,
      0.15
    ],
    "volumes": [
      93,
      89,
      103,
      95,
      124,
      54
    ],
    "rsiStack": [
      56.9,
      54.9,
      54.3,
      53.5,
      51.6,
      45.8
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 51.74,
    "change": 1.25,
    "mom": 56.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.1,
    "flow": 98,
    "perf": {
      "w1": 1.09,
      "m1": -1.69,
      "m3": -1.43
    },
    "returns": [
      1.25,
      1.47,
      1.09,
      0.31,
      -1.69,
      -1.43
    ],
    "volumes": [
      90,
      101,
      94,
      111,
      132,
      59
    ],
    "rsiStack": [
      60.9,
      55.4,
      54.1,
      53.0,
      50.6,
      45.2
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 43.75,
    "change": 1.2,
    "mom": 45.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.3,
    "flow": 110,
    "perf": {
      "w1": -1.84,
      "m1": -1.99,
      "m3": 0.44
    },
    "returns": [
      1.2,
      -1.04,
      -1.84,
      -0.75,
      -1.99,
      0.44
    ],
    "volumes": [
      94,
      101,
      82,
      135,
      83,
      48
    ],
    "rsiStack": [
      42.2,
      46.5,
      50.3,
      52.3,
      53.1,
      52.0
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 170.75,
    "change": -0.38,
    "mom": 42.5,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.1,
    "flow": 100,
    "perf": {
      "w1": -2.45,
      "m1": -1.81,
      "m3": -3.66
    },
    "returns": [
      -0.38,
      -1.65,
      -2.45,
      -0.13,
      -1.81,
      -3.66
    ],
    "volumes": [
      94,
      72,
      72,
      122,
      85,
      50
    ],
    "rsiStack": [
      33.1,
      42.8,
      47.1,
      49.0,
      49.5,
      45.7
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 50.22,
    "change": -0.16,
    "mom": 40.6,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.8,
    "flow": 104,
    "perf": {
      "w1": -3.9,
      "m1": -3.85,
      "m3": -5.17
    },
    "returns": [
      -0.16,
      -3.53,
      -3.9,
      -0.85,
      -3.85,
      -5.17
    ],
    "volumes": [
      112,
      84,
      82,
      124,
      97,
      65
    ],
    "rsiStack": [
      23.9,
      34.8,
      40.8,
      44.4,
      46.7,
      44.9
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 116.32,
    "change": -0.18,
    "mom": 36.8,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.1,
    "flow": 109,
    "perf": {
      "w1": -2.56,
      "m1": -2.96,
      "m3": -0.96
    },
    "returns": [
      -0.18,
      -2.02,
      -2.56,
      -1.19,
      -2.96,
      -0.96
    ],
    "volumes": [
      138,
      61,
      75,
      102,
      134,
      57
    ],
    "rsiStack": [
      23.2,
      38.3,
      46.1,
      48.8,
      48.7,
      43.7
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 85.9,
    "change": 1.49,
    "mom": 65.5,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.9,
    "flow": 99,
    "perf": {
      "w1": 3.03,
      "m1": 4.26,
      "m3": -2.26
    },
    "returns": [
      1.49,
      1.39,
      3.03,
      2.82,
      4.26,
      -2.26
    ],
    "volumes": [
      109,
      91,
      97,
      89,
      108,
      62
    ],
    "rsiStack": [
      76.0,
      69.1,
      63.9,
      60.1,
      57.8,
      59.2
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 495.87,
    "change": -2.49,
    "mom": 40.8,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 60.0,
    "flow": 124,
    "perf": {
      "w1": -6.92,
      "m1": 18.76,
      "m3": 37.96
    },
    "returns": [
      -2.49,
      -6.14,
      -6.92,
      7.32,
      18.76,
      37.96
    ],
    "volumes": [
      122,
      99,
      109,
      150,
      84,
      51
    ],
    "rsiStack": [
      41.2,
      54.1,
      60.0,
      62.3,
      62.2,
      55.8
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 28.2,
    "change": 1.33,
    "mom": 40.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 56.8,
    "flow": 93,
    "perf": {
      "w1": -0.46,
      "m1": 4.48,
      "m3": 8.34
    },
    "returns": [
      1.33,
      -1.84,
      -0.46,
      -0.32,
      4.48,
      8.34
    ],
    "volumes": [
      136,
      109,
      86,
      172,
      154,
      59
    ],
    "rsiStack": [
      51.1,
      54.4,
      56.8,
      58.2,
      58.5,
      54.3
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 45.04,
    "change": 0.02,
    "mom": 39.5,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 44.9,
    "flow": 44,
    "perf": {
      "w1": -2.24,
      "m1": -0.86,
      "m3": -4.5
    },
    "returns": [
      0.02,
      -2.13,
      -2.24,
      -1.49,
      -0.86,
      -4.5
    ],
    "volumes": [
      226,
      140,
      49,
      97,
      49,
      45
    ],
    "rsiStack": [
      32.4,
      41.0,
      44.9,
      47.3,
      49.3,
      49.0
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 40.99,
    "change": -0.66,
    "mom": 48.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.9,
    "flow": 8,
    "perf": {
      "w1": -0.83,
      "m1": -1.27,
      "m3": -4.73
    },
    "returns": [
      -0.66,
      -1.07,
      -0.83,
      2.85,
      -1.27,
      -4.73
    ],
    "volumes": [
      7,
      26,
      46,
      85,
      153,
      62
    ],
    "rsiStack": [
      42.3,
      48.2,
      50.9,
      51.7,
      51.2,
      47.4
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.69,
    "change": -0.12,
    "mom": 43.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.7,
    "flow": 67,
    "perf": {
      "w1": -1.35,
      "m1": -1.44,
      "m3": -2.96
    },
    "returns": [
      -0.12,
      -1.58,
      -1.35,
      -0.22,
      -1.44,
      -2.96
    ],
    "volumes": [
      89,
      59,
      82,
      33,
      109,
      54
    ],
    "rsiStack": [
      33.6,
      42.8,
      46.7,
      48.9,
      50.2,
      47.6
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 106.6,
    "change": -0.21,
    "mom": 50.8,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Fading",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 64.6,
    "flow": 80,
    "perf": {
      "w1": 0.81,
      "m1": 7.73,
      "m3": 9.34
    },
    "returns": [
      -0.21,
      0.61,
      0.81,
      1.55,
      7.73,
      9.34
    ],
    "volumes": [
      82,
      112,
      87,
      123,
      76,
      94
    ],
    "rsiStack": [
      64.5,
      65.7,
      64.6,
      62.6,
      59.8,
      54.6
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 81.61,
    "change": 0.55,
    "mom": 46.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.5,
    "flow": 86,
    "perf": {
      "w1": -0.37,
      "m1": -2.59,
      "m3": -4.99
    },
    "returns": [
      0.55,
      -0.9,
      -0.37,
      -2.45,
      -2.59,
      -4.99
    ],
    "volumes": [
      64,
      65,
      214,
      162,
      94,
      36
    ],
    "rsiStack": [
      39.4,
      40.6,
      42.5,
      44.5,
      46.4,
      45.0
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 13.03,
    "change": -2.76,
    "mom": 60.2,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet) (Day 2)",
    "signal": "REDUCE",
    "dist_streak": 2,
    "acc_streak": 0,
    "rsi": 54.9,
    "flow": 100,
    "perf": {
      "w1": 8.13,
      "m1": 1.24,
      "m3": -7.0
    },
    "returns": [
      -2.76,
      -3.98,
      8.13,
      13.3,
      1.24,
      -7.0
    ],
    "volumes": [
      175,
      423,
      114,
      94,
      123,
      71
    ],
    "rsiStack": [
      51.8,
      54.7,
      54.9,
      54.0,
      51.5,
      43.6
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 73.1,
    "change": -2.35,
    "mom": 41.5,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 1,
    "acc_streak": 0,
    "rsi": 39.6,
    "flow": 81,
    "perf": {
      "w1": -2.91,
      "m1": -9.24,
      "m3": -10.32
    },
    "returns": [
      -2.35,
      -3.57,
      -2.91,
      -3.43,
      -9.24,
      -10.32
    ],
    "volumes": [
      122,
      120,
      95,
      102,
      115,
      63
    ],
    "rsiStack": [
      29.1,
      35.4,
      39.6,
      42.2,
      44.2,
      45.0
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 25.64,
    "change": 2.17,
    "mom": 47.5,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Trending up",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.2,
    "flow": 37,
    "perf": {
      "w1": 0.77,
      "m1": 6.41,
      "m3": 8.62
    },
    "returns": [
      2.17,
      -1.56,
      0.77,
      -0.37,
      6.41,
      8.62
    ],
    "volumes": [
      88,
      157,
      90,
      115,
      99,
      23
    ],
    "rsiStack": [
      56.1,
      56.9,
      57.2,
      57.2,
      56.6,
      53.4
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 25.33,
    "change": 0.0,
    "mom": 34.6,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 33.2,
    "flow": 88,
    "perf": {
      "w1": -1.86,
      "m1": -7.96,
      "m3": -4.95
    },
    "returns": [
      0.0,
      -2.43,
      -1.86,
      -3.69,
      -7.96,
      -4.95
    ],
    "volumes": [
      98,
      106,
      119,
      134,
      101,
      74
    ],
    "rsiStack": [
      19.9,
      27.5,
      33.2,
      37.4,
      40.5,
      39.2
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 10.39,
    "change": 2.26,
    "mom": 51.5,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 34.3,
    "flow": 86,
    "perf": {
      "w1": -0.29,
      "m1": -11.65,
      "m3": -12.62
    },
    "returns": [
      2.26,
      -0.1,
      -0.29,
      -1.33,
      -11.65,
      -12.62
    ],
    "volumes": [
      123,
      132,
      120,
      111,
      108,
      66
    ],
    "rsiStack": [
      42.5,
      34.4,
      34.3,
      36.6,
      40.6,
      46.5
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 9.66,
    "change": 2.77,
    "mom": 59.4,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.9,
    "flow": 87,
    "perf": {
      "w1": 2.33,
      "m1": -5.85,
      "m3": -11.46
    },
    "returns": [
      2.77,
      1.36,
      2.33,
      0.73,
      -5.85,
      -11.46
    ],
    "volumes": [
      80,
      118,
      120,
      66,
      112,
      140
    ],
    "rsiStack": [
      58.5,
      48.1,
      43.9,
      42.9,
      43.6,
      43.9
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 156.27,
    "change": -9.24,
    "mom": 36.2,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.9,
    "flow": 140,
    "perf": {
      "w1": -25.66,
      "m1": -10.46,
      "m3": 25.96
    },
    "returns": [
      -9.24,
      -17.47,
      -25.66,
      -13.21,
      -10.46,
      25.96
    ],
    "volumes": [
      91,
      104,
      111,
      74,
      49,
      104
    ],
    "rsiStack": [
      22.3,
      36.0,
      43.9,
      48.0,
      49.8,
      47.2
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 168.93,
    "change": -4.5,
    "mom": 38.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.1,
    "flow": 95,
    "perf": {
      "w1": -1.12,
      "m1": 14.27,
      "m3": 112.54
    },
    "returns": [
      -4.5,
      -5.07,
      -1.12,
      3.22,
      14.27,
      112.54
    ],
    "volumes": [
      94,
      124,
      88,
      86,
      52,
      143
    ],
    "rsiStack": [
      45.6,
      54.1,
      59.1,
      62.0,
      62.9,
      58.0
    ]
  }
];
