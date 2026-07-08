window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-07-08 23:35:22",
  "sections": {
    "Index": {
      "risk": "Neutral",
      "leader": "DJI",
      "watch": 0
    },
    "Commodity": {
      "risk": "Risk On",
      "leader": "CF",
      "watch": 1
    },
    "Crypto": {
      "risk": "Neutral",
      "leader": "BTC",
      "watch": 0
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "XLV",
      "watch": 2
    },
    "Stock": {
      "risk": "Risk On",
      "leader": "CRDO",
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
    "price": 7482.71,
    "change": -0.28,
    "mom": 44.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.6,
    "flow": 50,
    "perf": {
      "w1": -0.22,
      "m1": 1.04,
      "m3": 9.77
    },
    "returns": [
      -0.28,
      -0.01,
      -0.22,
      1.59,
      1.04,
      9.77
    ],
    "volumes": [
      86,
      92,
      101,
      149,
      96,
      87
    ],
    "rsiStack": [
      52.7,
      53.3,
      53.6,
      54.5,
      55.7,
      56.9
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 52348.39,
    "change": -1.09,
    "mom": 37.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.1,
    "flow": 77,
    "perf": {
      "w1": 0.06,
      "m1": 3.08,
      "m3": 9.25
    },
    "returns": [
      -1.09,
      -1.04,
      0.06,
      1.32,
      3.08,
      9.25
    ],
    "volumes": [
      75,
      91,
      104,
      211,
      97,
      88
    ],
    "rsiStack": [
      46.4,
      56.2,
      59.1,
      59.8,
      59.6,
      59.0
    ]
  },
  {
    "symbol": "KOSPI",
    "dataSymbol": "^KS11",
    "section": "Index",
    "name": "Korea Index",
    "category": "Broad",
    "price": 7656.31,
    "change": -4.91,
    "mom": 32.2,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.2,
    "flow": 112,
    "perf": {
      "w1": -9.68,
      "m1": -5.44,
      "m3": 30.38
    },
    "returns": [
      -4.91,
      0.11,
      -9.68,
      -6.67,
      -5.44,
      30.38
    ],
    "volumes": [
      98,
      110,
      97,
      102,
      92,
      72
    ],
    "rsiStack": [
      31.2,
      38.2,
      43.2,
      46.7,
      50.1,
      53.6
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
    "rsi": 50.3,
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
      107,
      96,
      99,
      110,
      88,
      95
    ],
    "rsiStack": [
      36.2,
      45.3,
      50.3,
      53.3,
      56.0,
      60.0
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 374.45,
    "change": -0.81,
    "mom": 55.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.4,
    "flow": 91,
    "perf": {
      "w1": 1.65,
      "m1": -5.74,
      "m3": -14.34
    },
    "returns": [
      -0.81,
      -0.97,
      1.65,
      -0.76,
      -5.74,
      -14.34
    ],
    "volumes": [
      57,
      87,
      63,
      66,
      91,
      131
    ],
    "rsiStack": [
      44.6,
      42.2,
      40.4,
      40.2,
      42.1,
      49.1
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 52.83,
    "change": -2.99,
    "mom": 47.5,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.2,
    "flow": 88,
    "perf": {
      "w1": -1.2,
      "m1": -14.21,
      "m3": -23.52
    },
    "returns": [
      -2.99,
      -3.98,
      -1.2,
      -5.2,
      -14.21,
      -23.52
    ],
    "volumes": [
      64,
      71,
      67,
      65,
      96,
      98
    ],
    "rsiStack": [
      33.4,
      34.2,
      35.2,
      37.3,
      42.1,
      53.3
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 41.66,
    "change": -0.22,
    "mom": 40.1,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 34.2,
    "flow": 66,
    "perf": {
      "w1": -4.67,
      "m1": -9.28,
      "m3": -18.25
    },
    "returns": [
      -0.22,
      -3.63,
      -4.67,
      -8.6,
      -9.28,
      -18.25
    ],
    "volumes": [
      111,
      107,
      62,
      53,
      81,
      70
    ],
    "rsiStack": [
      21.6,
      29.3,
      34.2,
      37.6,
      41.6,
      48.7
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 74.47,
    "change": 5.72,
    "mom": 64.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.8,
    "flow": 3,
    "perf": {
      "w1": 7.15,
      "m1": -18.43,
      "m3": -22.88
    },
    "returns": [
      5.72,
      8.41,
      7.15,
      1.72,
      -18.43,
      -22.88
    ],
    "volumes": [
      102,
      81,
      84,
      103,
      81,
      113
    ],
    "rsiStack": [
      69.8,
      49.8,
      42.8,
      41.9,
      43.9,
      48.7
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 117.02,
    "change": 1.81,
    "mom": 75.4,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 62.4,
    "flow": 130,
    "perf": {
      "w1": 8.09,
      "m1": 6.92,
      "m3": -3.54
    },
    "returns": [
      1.81,
      5.86,
      8.09,
      14.53,
      6.92,
      -3.54
    ],
    "volumes": [
      112,
      67,
      110,
      93,
      70,
      104
    ],
    "rsiStack": [
      90.9,
      74.5,
      62.4,
      56.0,
      52.4,
      49.3
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 34.8,
    "change": -0.77,
    "mom": 61.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.8,
    "flow": 75,
    "perf": {
      "w1": 6.16,
      "m1": 0.37,
      "m3": -6.83
    },
    "returns": [
      -0.77,
      3.63,
      6.16,
      4.76,
      0.37,
      -6.83
    ],
    "volumes": [
      80,
      49,
      197,
      166,
      87,
      86
    ],
    "rsiStack": [
      62.0,
      52.4,
      47.8,
      46.6,
      47.9,
      53.3
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 20.65,
    "change": -2.23,
    "mom": 45.0,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.8,
    "flow": 73,
    "perf": {
      "w1": -2.55,
      "m1": -3.41,
      "m3": -16.6
    },
    "returns": [
      -2.23,
      -2.27,
      -2.55,
      -2.82,
      -3.41,
      -16.6
    ],
    "volumes": [
      71,
      83,
      149,
      95,
      89,
      79
    ],
    "rsiStack": [
      28.5,
      37.6,
      40.8,
      42.1,
      42.7,
      42.1
    ]
  },
  {
    "symbol": "NTR",
    "dataSymbol": "NTR",
    "section": "Commodity",
    "name": "NTR",
    "category": "Materials",
    "price": 66.76,
    "change": 2.2,
    "mom": 74.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.9,
    "flow": 82,
    "perf": {
      "w1": 6.05,
      "m1": -0.77,
      "m3": -9.48
    },
    "returns": [
      2.2,
      2.61,
      6.05,
      8.48,
      -0.77,
      -9.48
    ],
    "volumes": [
      98,
      87,
      182,
      82,
      105,
      120
    ],
    "rsiStack": [
      80.7,
      65.5,
      55.9,
      51.0,
      48.2,
      46.6
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 62160.0,
    "change": -1.8,
    "mom": 56.1,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.9,
    "flow": 98,
    "perf": {
      "w1": -0.61,
      "m1": -1.17,
      "m3": -22.94
    },
    "returns": [
      -1.8,
      -2.18,
      -0.61,
      4.41,
      -1.17,
      -22.94
    ],
    "volumes": [
      109,
      65,
      91,
      137,
      59,
      87
    ],
    "rsiStack": [
      46.2,
      48.5,
      45.9,
      43.8,
      42.8,
      42.7
    ]
  },
  {
    "symbol": "COIN",
    "dataSymbol": "COIN",
    "section": "Crypto",
    "name": "Coinbase",
    "category": "Exchange",
    "price": 159.36,
    "change": -2.54,
    "mom": 54.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.9,
    "flow": 58,
    "perf": {
      "w1": 9.01,
      "m1": -1.7,
      "m3": -5.06
    },
    "returns": [
      -2.54,
      -3.7,
      9.01,
      0.75,
      -1.7,
      -5.06
    ],
    "volumes": [
      59,
      108,
      100,
      117,
      87,
      89
    ],
    "rsiStack": [
      49.0,
      48.6,
      46.9,
      46.2,
      46.3,
      47.6
    ]
  },
  {
    "symbol": "CRCL",
    "dataSymbol": "CRCL",
    "section": "Crypto",
    "name": "Circle",
    "category": "Stablecoin",
    "price": 64.07,
    "change": -1.66,
    "mom": 47.3,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.6,
    "flow": 63,
    "perf": {
      "w1": 2.3,
      "m1": -22.37,
      "m3": -27.23
    },
    "returns": [
      -1.66,
      -0.85,
      2.3,
      -15.34,
      -22.37,
      -27.23
    ],
    "volumes": [
      62,
      124,
      278,
      108,
      67,
      62
    ],
    "rsiStack": [
      36.0,
      34.9,
      35.6,
      37.5,
      40.3,
      43.4
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 93.87,
    "change": -3.58,
    "mom": 50.6,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 37.2,
    "flow": 64,
    "perf": {
      "w1": 7.98,
      "m1": -26.2,
      "m3": -27.03
    },
    "returns": [
      -3.58,
      -6.85,
      7.98,
      -9.6,
      -26.2,
      -27.03
    ],
    "volumes": [
      65,
      119,
      127,
      176,
      105,
      117
    ],
    "rsiStack": [
      41.3,
      38.6,
      37.2,
      37.8,
      40.3,
      46.1
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 55.6,
    "change": 1.76,
    "mom": 65.9,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Day 1)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 1,
    "rsi": 52.2,
    "flow": 109,
    "perf": {
      "w1": 4.69,
      "m1": -4.68,
      "m3": -2.35
    },
    "returns": [
      1.76,
      4.47,
      4.69,
      2.09,
      -4.68,
      -2.35
    ],
    "volumes": [
      122,
      85,
      83,
      53,
      102,
      69
    ],
    "rsiStack": [
      76.1,
      59.6,
      52.2,
      49.5,
      48.6,
      48.0
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 181.4,
    "change": 1.24,
    "mom": 37.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.3,
    "flow": 72,
    "perf": {
      "w1": -4.79,
      "m1": -1.51,
      "m3": 27.19
    },
    "returns": [
      1.24,
      0.45,
      -4.79,
      -1.51,
      -1.51,
      27.19
    ],
    "volumes": [
      87,
      95,
      72,
      87,
      96,
      106
    ],
    "rsiStack": [
      44.1,
      45.8,
      48.3,
      50.7,
      53.3,
      56.0
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 45.36,
    "change": -0.74,
    "mom": 50.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.2,
    "flow": 72,
    "perf": {
      "w1": 0.04,
      "m1": 4.23,
      "m3": -3.41
    },
    "returns": [
      -0.74,
      -0.87,
      0.04,
      0.64,
      4.23,
      -3.41
    ],
    "volumes": [
      90,
      115,
      91,
      90,
      104,
      95
    ],
    "rsiStack": [
      48.6,
      51.8,
      52.2,
      51.7,
      51.3,
      51.9
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 162.3,
    "change": -1.3,
    "mom": 55.2,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Fading",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 64.3,
    "flow": 78,
    "perf": {
      "w1": 2.29,
      "m1": 6.32,
      "m3": 10.18
    },
    "returns": [
      -1.3,
      -0.88,
      2.29,
      6.65,
      6.32,
      10.18
    ],
    "volumes": [
      106,
      124,
      99,
      141,
      84,
      97
    ],
    "rsiStack": [
      60.5,
      64.1,
      64.3,
      63.2,
      61.1,
      58.2
    ]
  },
  {
    "symbol": "XLC",
    "dataSymbol": "XLC",
    "section": "ETF",
    "name": "Communication Services",
    "category": "Comm",
    "price": 109.46,
    "change": -1.41,
    "mom": 55.3,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.3,
    "flow": 65,
    "perf": {
      "w1": 2.17,
      "m1": -1.47,
      "m3": -3.94
    },
    "returns": [
      -1.41,
      -0.13,
      2.17,
      2.04,
      -1.47,
      -3.94
    ],
    "volumes": [
      98,
      106,
      64,
      127,
      115,
      168
    ],
    "rsiStack": [
      51.9,
      49.3,
      46.3,
      44.9,
      44.3,
      43.2
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 54.97,
    "change": -1.93,
    "mom": 47.6,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.2,
    "flow": 113,
    "perf": {
      "w1": 2.54,
      "m1": 5.77,
      "m3": 8.27
    },
    "returns": [
      -1.93,
      -1.17,
      2.54,
      2.02,
      5.77,
      8.27
    ],
    "volumes": [
      74,
      120,
      74,
      70,
      85,
      106
    ],
    "rsiStack": [
      52.0,
      59.3,
      61.2,
      60.9,
      58.4,
      51.2
    ]
  },
  {
    "symbol": "XLRE",
    "dataSymbol": "XLRE",
    "section": "ETF",
    "name": "Real Estate",
    "category": "Real Estate",
    "price": 44.15,
    "change": -1.65,
    "mom": 42.8,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.5,
    "flow": 68,
    "perf": {
      "w1": 0.27,
      "m1": 0.27,
      "m3": 3.11
    },
    "returns": [
      -1.65,
      -1.19,
      0.27,
      -1.1,
      0.27,
      3.11
    ],
    "volumes": [
      84,
      96,
      162,
      97,
      78,
      102
    ],
    "rsiStack": [
      42.0,
      45.4,
      47.5,
      49.0,
      50.8,
      53.4
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 180.42,
    "change": -1.07,
    "mom": 36.3,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.9,
    "flow": 87,
    "perf": {
      "w1": -2.6,
      "m1": 3.91,
      "m3": 5.19
    },
    "returns": [
      -1.07,
      -1.9,
      -2.6,
      1.27,
      3.91,
      5.19
    ],
    "volumes": [
      93,
      79,
      78,
      105,
      107,
      71
    ],
    "rsiStack": [
      38.4,
      48.1,
      51.9,
      53.4,
      54.5,
      57.0
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 50.16,
    "change": -2.62,
    "mom": 37.4,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.3,
    "flow": 108,
    "perf": {
      "w1": -1.32,
      "m1": 0.4,
      "m3": -3.46
    },
    "returns": [
      -2.62,
      -3.56,
      -1.32,
      -1.4,
      0.4,
      -3.46
    ],
    "volumes": [
      101,
      106,
      70,
      72,
      82,
      92
    ],
    "rsiStack": [
      28.6,
      37.8,
      42.3,
      44.8,
      47.1,
      50.8
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 115.3,
    "change": -1.78,
    "mom": 43.0,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 46.0,
    "flow": 170,
    "perf": {
      "w1": -1.69,
      "m1": -0.08,
      "m3": 2.13
    },
    "returns": [
      -1.78,
      -1.55,
      -1.69,
      1.35,
      -0.08,
      2.13
    ],
    "volumes": [
      112,
      137,
      68,
      115,
      118,
      82
    ],
    "rsiStack": [
      37.3,
      44.0,
      46.0,
      47.1,
      48.1,
      48.7
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 84.39,
    "change": -0.55,
    "mom": 51.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.5,
    "flow": 83,
    "perf": {
      "w1": 1.59,
      "m1": 1.59,
      "m3": 2.45
    },
    "returns": [
      -0.55,
      -0.71,
      1.59,
      0.8,
      1.59,
      2.45
    ],
    "volumes": [
      106,
      132,
      100,
      86,
      116,
      78
    ],
    "rsiStack": [
      52.1,
      51.8,
      51.5,
      51.4,
      52.2,
      56.7
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 562.03,
    "change": 1.87,
    "mom": 30.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.1,
    "flow": 62,
    "perf": {
      "w1": -12.29,
      "m1": -1.65,
      "m3": 45.38
    },
    "returns": [
      1.87,
      -0.76,
      -12.29,
      -6.85,
      -1.65,
      45.38
    ],
    "volumes": [
      104,
      129,
      85,
      95,
      112,
      132
    ],
    "rsiStack": [
      38.8,
      43.4,
      47.1,
      49.8,
      52.6,
      55.3
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 27.62,
    "change": 0.25,
    "mom": 64.1,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.3,
    "flow": 63,
    "perf": {
      "w1": 3.56,
      "m1": 4.9,
      "m3": 2.71
    },
    "returns": [
      0.25,
      3.29,
      3.56,
      3.83,
      4.9,
      2.71
    ],
    "volumes": [
      107,
      31,
      52,
      46,
      128,
      82
    ],
    "rsiStack": [
      80.2,
      70.7,
      63.3,
      58.7,
      55.3,
      50.6
    ]
  },
  {
    "symbol": "VEGI",
    "dataSymbol": "VEGI",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 44.07,
    "change": -0.16,
    "mom": 54.7,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.7,
    "flow": 25,
    "perf": {
      "w1": -0.09,
      "m1": 1.45,
      "m3": -4.92
    },
    "returns": [
      -0.16,
      -0.27,
      -0.09,
      2.99,
      1.45,
      -4.92
    ],
    "volumes": [
      94,
      165,
      34,
      28,
      112,
      141
    ],
    "rsiStack": [
      50.0,
      52.0,
      50.7,
      49.5,
      49.5,
      51.9
    ]
  },
  {
    "symbol": "FTXR",
    "dataSymbol": "FTXR",
    "section": "ETF",
    "name": "Transportation",
    "category": "Auto",
    "price": 44.51,
    "change": -0.83,
    "mom": 34.2,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.0,
    "flow": 39,
    "perf": {
      "w1": -2.33,
      "m1": -0.2,
      "m3": 12.4
    },
    "returns": [
      -0.83,
      -1.31,
      -2.33,
      0.64,
      -0.2,
      12.4
    ],
    "volumes": [
      26,
      14,
      67,
      1146,
      48,
      356
    ],
    "rsiStack": [
      34.2,
      44.7,
      50.0,
      52.7,
      54.1,
      53.7
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
    "category": "Agriculture",
    "price": 29.19,
    "change": -0.11,
    "mom": 58.9,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.2,
    "flow": 12,
    "perf": {
      "w1": 1.0,
      "m1": 3.69,
      "m3": -4.18
    },
    "returns": [
      -0.11,
      -0.82,
      1.0,
      4.09,
      3.69,
      -4.18
    ],
    "volumes": [
      9,
      9,
      30,
      19,
      11,
      10
    ],
    "rsiStack": [
      58.0,
      58.2,
      55.2,
      52.8,
      51.3,
      51.3
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 103.87,
    "change": 0.25,
    "mom": 51.6,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.9,
    "flow": 89,
    "perf": {
      "w1": 1.64,
      "m1": 9.54,
      "m3": 7.53
    },
    "returns": [
      0.25,
      -0.38,
      1.64,
      2.79,
      9.54,
      7.53
    ],
    "volumes": [
      70,
      99,
      87,
      207,
      75,
      94
    ],
    "rsiStack": [
      58.0,
      57.2,
      55.9,
      55.0,
      55.0,
      57.5
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 80.87,
    "change": -0.05,
    "mom": 66.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Accumulation (Quiet)",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 59.6,
    "flow": 91,
    "perf": {
      "w1": 2.11,
      "m1": 4.21,
      "m3": -4.86
    },
    "returns": [
      -0.05,
      -0.05,
      2.11,
      5.66,
      4.21,
      -4.86
    ],
    "volumes": [
      111,
      109,
      46,
      89,
      81,
      88
    ],
    "rsiStack": [
      70.4,
      65.8,
      59.6,
      55.2,
      52.3,
      52.3
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 13.5,
    "change": -0.44,
    "mom": 43.8,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.1,
    "flow": 71,
    "perf": {
      "w1": -2.88,
      "m1": -10.0,
      "m3": 11.29
    },
    "returns": [
      -0.44,
      1.05,
      -2.88,
      -3.57,
      -10.0,
      11.29
    ],
    "volumes": [
      83,
      91,
      107,
      95,
      96,
      38
    ],
    "rsiStack": [
      35.5,
      37.7,
      42.1,
      45.4,
      47.6,
      46.8
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 76.24,
    "change": 0.28,
    "mom": 44.3,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.1,
    "flow": 55,
    "perf": {
      "w1": -1.09,
      "m1": -8.99,
      "m3": -0.24
    },
    "returns": [
      0.28,
      0.32,
      -1.09,
      -3.43,
      -8.99,
      -0.24
    ],
    "volumes": [
      86,
      67,
      85,
      130,
      85,
      112
    ],
    "rsiStack": [
      38.7,
      39.2,
      42.1,
      44.5,
      46.4,
      47.7
    ]
  },
  {
    "symbol": "TAGS",
    "dataSymbol": "TAGS",
    "section": "Stock",
    "name": "TAGS",
    "category": "Commodity",
    "price": 24.53,
    "change": -0.89,
    "mom": 59.8,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.3,
    "flow": 70,
    "perf": {
      "w1": 2.89,
      "m1": 2.72,
      "m3": 3.02
    },
    "returns": [
      -0.89,
      1.95,
      2.89,
      3.68,
      2.72,
      3.02
    ],
    "volumes": [
      79,
      138,
      82,
      22,
      77,
      43
    ],
    "rsiStack": [
      65.6,
      61.5,
      56.3,
      53.1,
      50.4,
      44.6
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 24.05,
    "change": -0.08,
    "mom": 53.0,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.3,
    "flow": 62,
    "perf": {
      "w1": -0.12,
      "m1": -6.13,
      "m3": -10.66
    },
    "returns": [
      -0.08,
      -1.11,
      -0.12,
      -2.71,
      -6.13,
      -10.66
    ],
    "volumes": [
      85,
      106,
      125,
      128,
      196,
      126
    ],
    "rsiStack": [
      44.2,
      40.2,
      39.3,
      39.6,
      40.4,
      40.2
    ]
  },
  {
    "symbol": "FPI",
    "dataSymbol": "FPI",
    "section": "Stock",
    "name": "FPI",
    "category": "Real Estate",
    "price": 9.59,
    "change": 0.1,
    "mom": 51.7,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.5,
    "flow": 72,
    "perf": {
      "w1": -0.93,
      "m1": -5.33,
      "m3": -18.38
    },
    "returns": [
      0.1,
      -1.24,
      -0.93,
      -2.44,
      -5.33,
      -18.38
    ],
    "volumes": [
      97,
      64,
      133,
      276,
      92,
      110
    ],
    "rsiStack": [
      40.2,
      39.4,
      38.5,
      38.4,
      40.4,
      48.0
    ]
  },
  {
    "symbol": "LAND",
    "dataSymbol": "LAND",
    "section": "Stock",
    "name": "LAND",
    "category": "Real Estate",
    "price": 8.49,
    "change": -0.82,
    "mom": 48.4,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Distribution (Quiet)",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.0,
    "flow": 98,
    "perf": {
      "w1": -0.47,
      "m1": -6.91,
      "m3": -18.29
    },
    "returns": [
      -0.82,
      -1.85,
      -0.47,
      -2.97,
      -6.91,
      -18.29
    ],
    "volumes": [
      95,
      70,
      103,
      282,
      96,
      94
    ],
    "rsiStack": [
      32.0,
      34.4,
      35.0,
      36.1,
      38.9,
      46.4
    ]
  },
  {
    "symbol": "CRDO",
    "dataSymbol": "CRDO",
    "section": "Stock",
    "name": "CRDO",
    "category": "Semis",
    "price": 258.69,
    "change": 4.99,
    "mom": 41.1,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "BUY",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 53.6,
    "flow": 53,
    "perf": {
      "w1": -4.88,
      "m1": 16.39,
      "m3": 116.31
    },
    "returns": [
      4.99,
      6.94,
      -4.88,
      -4.9,
      16.39,
      116.31
    ],
    "volumes": [
      72,
      81,
      69,
      327,
      103,
      104
    ],
    "rsiStack": [
      51.9,
      52.2,
      53.6,
      54.8,
      56.1,
      58.3
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 231.71,
    "change": 0.44,
    "mom": 30.2,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 43.8,
    "flow": 45,
    "perf": {
      "w1": -22.22,
      "m1": -19.78,
      "m3": 80.33
    },
    "returns": [
      0.44,
      -5.54,
      -22.22,
      -16.96,
      -19.78,
      80.33
    ],
    "volumes": [
      62,
      60,
      52,
      58,
      63,
      175
    ],
    "rsiStack": [
      27.6,
      37.4,
      43.8,
      47.9,
      51.4,
      54.3
    ]
  }
];
window.agriData = {
  "NTR": {
    "price": 66.76,
    "chg": 2.2,
    "chgW": 6.05,
    "chgM": -0.77,
    "chgYTD": 8.17,
    "marketCap": "$32.0B",
    "pe": "13.6x",
    "evEbitda": "8.1x",
    "de": "0.6x",
    "drawdown": "-21.8%"
  },
  "MOS": {
    "price": 20.65,
    "chg": -2.23,
    "chgW": -2.55,
    "chgM": -3.41,
    "chgYTD": -14.28,
    "marketCap": "$6.6B",
    "pe": "147.5x",
    "evEbitda": "6.2x",
    "de": "0.5x",
    "drawdown": "-45.0%"
  },
  "CF": {
    "price": 117.02,
    "chg": 1.81,
    "chgW": 8.09,
    "chgM": 6.92,
    "chgYTD": 51.31,
    "marketCap": "$18.0B",
    "pe": "10.5x",
    "evEbitda": "6.5x",
    "de": "0.4x",
    "drawdown": "-17.6%"
  },
  "ICL": {
    "price": 5.07,
    "chg": 2.42,
    "chgW": 1.81,
    "chgM": -9.3,
    "chgYTD": -11.21,
    "marketCap": "$6.5B",
    "pe": "24.1x",
    "evEbitda": "7.2x",
    "de": "0.5x",
    "drawdown": "-29.9%"
  },
  "FMC": {
    "price": 10.94,
    "chg": -5.61,
    "chgW": -4.87,
    "chgM": -1.44,
    "chgYTD": -21.12,
    "marketCap": "$1.4B",
    "pe": "5.2x",
    "evEbitda": "17.0x",
    "de": "2.5x",
    "drawdown": "-75.3%"
  },
  "CTVA": {
    "price": 85.18,
    "chg": -1.81,
    "chgW": 0.58,
    "chgM": 12.29,
    "chgYTD": 27.08,
    "marketCap": "$57.0B",
    "pe": "46.0x",
    "evEbitda": "14.2x",
    "de": "0.1x",
    "drawdown": "-2.9%"
  },
  "ADM": {
    "price": 80.29,
    "chg": 2.67,
    "chgW": 5.09,
    "chgM": 0.09,
    "chgYTD": 39.66,
    "marketCap": "$38.7B",
    "pe": "35.8x",
    "evEbitda": "18.9x",
    "de": "0.5x",
    "drawdown": "-6.0%"
  },
  "BG": {
    "price": 115.23,
    "chg": 3.9,
    "chgW": 7.96,
    "chgM": -8.18,
    "chgYTD": 29.36,
    "marketCap": "$22.4B",
    "pe": "30.3x",
    "evEbitda": "17.2x",
    "de": "0.9x",
    "drawdown": "-14.6%"
  },
  "INGR": {
    "price": 97.96,
    "chg": -0.62,
    "chgW": 3.43,
    "chgM": -1.71,
    "chgYTD": -11.16,
    "marketCap": "$6.2B",
    "pe": "9.4x",
    "evEbitda": "6.0x",
    "de": "0.4x",
    "drawdown": "-28.8%"
  },
  "FPI": {
    "price": 9.59,
    "chg": 0.1,
    "chgW": -0.93,
    "chgM": -5.33,
    "chgYTD": -1.03,
    "marketCap": "$425M",
    "pe": "16.3x",
    "evEbitda": "24.1x",
    "de": "0.5x",
    "drawdown": "-27.5%"
  },
  "LAND": {
    "price": 8.49,
    "chg": -0.82,
    "chgW": -0.47,
    "chgM": -6.91,
    "chgYTD": -7.21,
    "marketCap": "$366M",
    "pe": "-17.8x",
    "evEbitda": "12.3x",
    "de": "0.7x",
    "drawdown": "-34.7%"
  },
  "DE": {
    "price": 596.74,
    "chg": -1.14,
    "chgW": -5.93,
    "chgM": 4.02,
    "chgYTD": 28.17,
    "marketCap": "$161.1B",
    "pe": "33.8x",
    "evEbitda": "23.3x",
    "de": "3.8x",
    "drawdown": "-11.5%"
  },
  "AGCO": {
    "price": 113.73,
    "chg": -0.02,
    "chgW": -4.99,
    "chgM": -1.65,
    "chgYTD": 9.02,
    "marketCap": "$8.2B",
    "pe": "11.0x",
    "evEbitda": "10.2x",
    "de": "0.6x",
    "drawdown": "-20.9%"
  },
  "CNH": {
    "price": 10.27,
    "chg": -1.53,
    "chgW": -8.55,
    "chgM": -3.84,
    "chgYTD": 11.39,
    "marketCap": "$12.7B",
    "pe": "32.1x",
    "evEbitda": "34.9x",
    "de": "3.3x",
    "drawdown": "-28.0%"
  },
  "XYL": {
    "price": 118.62,
    "chg": -1.68,
    "chgW": 0.35,
    "chgM": 8.31,
    "chgYTD": -12.89,
    "marketCap": "$28.2B",
    "pe": "29.5x",
    "evEbitda": "15.5x",
    "de": "0.2x",
    "drawdown": "-23.1%"
  },
  "VMI": {
    "price": 540.46,
    "chg": 0.18,
    "chgW": -6.43,
    "chgM": 0.9,
    "chgYTD": 34.34,
    "marketCap": "$10.5B",
    "pe": "30.1x",
    "evEbitda": "17.6x",
    "de": "0.5x",
    "drawdown": "-7.7%"
  },
  "LNN": {
    "price": 111.15,
    "chg": -3.55,
    "chgW": -10.22,
    "chgM": -1.72,
    "chgYTD": -5.7,
    "marketCap": "$1.1B",
    "pe": "21.3x",
    "evEbitda": "13.7x",
    "de": "0.3x",
    "drawdown": "-24.9%"
  },
  "MWA": {
    "price": 24.75,
    "chg": -1.39,
    "chgW": -4.18,
    "chgM": -2.44,
    "chgYTD": 3.9,
    "marketCap": "$3.9B",
    "pe": "18.8x",
    "evEbitda": "11.7x",
    "de": "0.4x",
    "drawdown": "-20.2%"
  },
  "WTS": {
    "price": 348.05,
    "chg": -2.59,
    "chgW": -11.09,
    "chgM": 10.32,
    "chgYTD": 26.1,
    "marketCap": "$11.6B",
    "pe": "31.8x",
    "evEbitda": "21.2x",
    "de": "0.1x",
    "drawdown": "-11.8%"
  },
  "TSN": {
    "price": 58.3,
    "chg": -0.88,
    "chgW": 1.83,
    "chgM": 2.3,
    "chgYTD": -0.55,
    "marketCap": "$20.5B",
    "pe": "45.9x",
    "evEbitda": "10.4x",
    "de": "0.4x",
    "drawdown": "-16.1%"
  },
  "PPC": {
    "price": 27.4,
    "chg": -4.76,
    "chgW": -2.53,
    "chgM": -6.1,
    "chgYTD": -29.73,
    "marketCap": "$6.5B",
    "pe": "7.3x",
    "evEbitda": "4.6x",
    "de": "0.9x",
    "drawdown": "-45.8%"
  },
  "HRL": {
    "price": 24.54,
    "chg": -0.65,
    "chgW": -1.13,
    "chgM": 3.81,
    "chgYTD": 3.54,
    "marketCap": "$13.5B",
    "pe": "28.9x",
    "evEbitda": "10.6x",
    "de": "0.0x",
    "drawdown": "-23.0%"
  },
  "CAG": {
    "price": 13.77,
    "chg": -1.85,
    "chgW": 2.3,
    "chgM": 4.71,
    "chgYTD": -20.45,
    "marketCap": "$6.6B",
    "pe": "8.7x",
    "evEbitda": "8.1x",
    "de": "0.9x",
    "drawdown": "-33.8%"
  },
  "CALM": {
    "price": 85.08,
    "chg": -0.39,
    "chgW": 5.61,
    "chgM": 11.45,
    "chgYTD": 6.92,
    "marketCap": "$4.0B",
    "pe": "5.9x",
    "evEbitda": "3.0x",
    "de": "–",
    "drawdown": "-32.7%"
  },
  "DBA": {
    "price": 27.62,
    "chg": 0.25,
    "chgW": 3.56,
    "chgM": 4.9,
    "chgYTD": 8.23,
    "marketCap": "–",
    "pe": "11.7x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-4.2%"
  },
  "MOO": {
    "price": 80.87,
    "chg": -0.05,
    "chgW": 2.11,
    "chgM": 4.21,
    "chgYTD": 11.1,
    "marketCap": "–",
    "pe": "18.3x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-6.6%"
  },
  "VEGI": {
    "price": 44.07,
    "chg": -0.16,
    "chgW": -0.09,
    "chgM": 1.45,
    "chgYTD": 14.26,
    "marketCap": "–",
    "pe": "20.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "-6.8%"
  },
  "USAG": {},
  "COCO.L": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "58.4x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
