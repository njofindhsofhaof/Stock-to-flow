window.marketDataMeta = {
  "source": "Yahoo Finance via yfinance (delayed daily data)",
  "updatedAt": "2026-09-19 00:29:22",
  "sections": {
    "Index": {
      "risk": "Risk Off",
      "leader": "SP500",
      "watch": 1
    },
    "Commodity": {
      "risk": "Neutral",
      "leader": "CL",
      "watch": 0
    },
    "Crypto": {
      "risk": "Risk On",
      "leader": "BTC",
      "watch": 1
    },
    "ETF": {
      "risk": "Neutral",
      "leader": "XLE",
      "watch": 0
    },
    "Stock": {
      "risk": "Neutral",
      "leader": "FTAG",
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
    "price": 7650.5,
    "change": 0.17,
    "mom": 50.8,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "REDUCE",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.7,
    "flow": 126,
    "perf": {
      "w1": -0.08,
      "m1": 0.12,
      "m3": 3.97
    },
    "returns": [
      0.17,
      0.85,
      -0.08,
      -1.25,
      0.12,
      3.97
    ],
    "volumes": [
      107,
      110,
      102,
      106,
      102,
      94
    ],
    "rsiStack": [
      55.9,
      51.0,
      50.7,
      51.3,
      51.2,
      45.9
    ]
  },
  {
    "symbol": "DJI",
    "dataSymbol": "^DJI",
    "section": "Index",
    "name": "Dow Jones",
    "category": "Broad",
    "price": 51682.64,
    "change": -0.18,
    "mom": 38.6,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Distribution",
    "signal": "AVOID",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 38.4,
    "flow": 192,
    "perf": {
      "w1": -1.69,
      "m1": -2.04,
      "m3": -0.32
    },
    "returns": [
      -0.18,
      -0.79,
      -1.69,
      -3.73,
      -2.04,
      -0.32
    ],
    "volumes": [
      95,
      87,
      83,
      93,
      95,
      91
    ],
    "rsiStack": [
      32.5,
      34.9,
      38.4,
      41.8,
      45.0,
      44.7
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
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 47.9,
    "flow": 115,
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
      73,
      92,
      84,
      99,
      73,
      118
    ],
    "rsiStack": [
      41.7,
      46.4,
      47.9,
      48.0,
      47.6,
      45.7
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
    "rsi": 43.6,
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
      90,
      89,
      110,
      107,
      98,
      88
    ],
    "rsiStack": [
      43.7,
      42.1,
      43.6,
      45.1,
      45.7,
      41.7
    ]
  },
  {
    "symbol": "GLD",
    "dataSymbol": "GLD",
    "section": "Commodity",
    "name": "Gold",
    "category": "Precious",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 48.5,
    "flow": 81,
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
      66,
      56,
      90,
      68,
      102,
      152
    ],
    "rsiStack": [
      50.5,
      47.1,
      48.5,
      49.5,
      48.2,
      40.4
    ]
  },
  {
    "symbol": "SLV",
    "dataSymbol": "SLV",
    "section": "Commodity",
    "name": "Silver",
    "category": "Precious",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.2,
    "flow": 92,
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
      69,
      92,
      123,
      80,
      155
    ],
    "rsiStack": [
      55.9,
      51.3,
      51.2,
      50.9,
      48.1,
      38.6
    ]
  },
  {
    "symbol": "URA",
    "dataSymbol": "URA",
    "section": "Commodity",
    "name": "Uranium",
    "category": "Energy",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 44.2,
    "flow": 118,
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
      92,
      85,
      86,
      66,
      76,
      97
    ],
    "rsiStack": [
      40.6,
      41.3,
      44.2,
      45.8,
      45.6,
      41.1
    ]
  },
  {
    "symbol": "CL",
    "dataSymbol": "CL=F",
    "section": "Commodity",
    "name": "Crude Oil",
    "category": "Energy",
    "price": 95.47,
    "change": -6.32,
    "mom": 42.4,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Trending up",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 54.8,
    "flow": 98,
    "perf": {
      "w1": -4.58,
      "m1": 8.7,
      "m3": 35.73
    },
    "returns": [
      -6.32,
      -9.79,
      -4.58,
      4.57,
      8.7,
      35.73
    ],
    "volumes": [
      99,
      131,
      152,
      133,
      139,
      101
    ],
    "rsiStack": [
      37.9,
      50.2,
      54.8,
      55.9,
      55.1,
      52.9
    ]
  },
  {
    "symbol": "CF",
    "dataSymbol": "CF",
    "section": "Commodity",
    "name": "CF",
    "category": "Materials",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.0,
    "flow": 171,
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
      57,
      115,
      87,
      123,
      87,
      143
    ],
    "rsiStack": [
      51.6,
      54.4,
      56.0,
      56.4,
      55.7,
      53.3
    ]
  },
  {
    "symbol": "IPI",
    "dataSymbol": "IPI",
    "section": "Commodity",
    "name": "IPI",
    "category": "Materials",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.1,
    "flow": 129,
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
      56,
      73,
      79,
      101,
      176
    ],
    "rsiStack": [
      52.6,
      53.3,
      55.1,
      55.6,
      55.0,
      54.9
    ]
  },
  {
    "symbol": "MOS",
    "dataSymbol": "MOS",
    "section": "Commodity",
    "name": "MOS",
    "category": "Materials",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.3,
    "flow": 142,
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
      57,
      136,
      80,
      92,
      91,
      159
    ],
    "rsiStack": [
      53.8,
      56.2,
      57.3,
      56.7,
      51.9,
      36.9
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
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 61.2,
    "flow": 85,
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
      57,
      94,
      93,
      124,
      106,
      117
    ],
    "rsiStack": [
      56.5,
      59.4,
      61.2,
      61.2,
      58.9,
      51.8
    ]
  },
  {
    "symbol": "BTC",
    "dataSymbol": "BTC-USD",
    "section": "Crypto",
    "name": "Bitcoin",
    "category": "Currency",
    "price": 81070.38,
    "change": 6.11,
    "mom": 56.7,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Accumulation",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.9,
    "flow": 142,
    "perf": {
      "w1": 5.51,
      "m1": 3.61,
      "m3": 24.28
    },
    "returns": [
      6.11,
      7.22,
      5.51,
      3.36,
      3.61,
      24.28
    ],
    "volumes": [
      81,
      141,
      48,
      119,
      99,
      44
    ],
    "rsiStack": [
      74.8,
      66.3,
      63.9,
      63.2,
      62.1,
      60.1
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
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.4,
    "flow": 198,
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
      92,
      173,
      79,
      60,
      138,
      205
    ],
    "rsiStack": [
      48.0,
      49.1,
      50.4,
      50.9,
      50.3,
      47.0
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
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 49.3,
    "flow": 179,
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
      86,
      143,
      69,
      62,
      165,
      183
    ],
    "rsiStack": [
      41.5,
      45.9,
      49.3,
      50.7,
      50.4,
      47.3
    ]
  },
  {
    "symbol": "MSTR",
    "dataSymbol": "MSTR",
    "section": "Crypto",
    "name": "MicroStrategy",
    "category": "Fund",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Mature",
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.0,
    "flow": 196,
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
      68,
      81,
      68,
      61,
      162,
      246
    ],
    "rsiStack": [
      52.8,
      54.7,
      56.0,
      55.8,
      54.0,
      50.1
    ]
  },
  {
    "symbol": "XLE",
    "dataSymbol": "XLE",
    "section": "ETF",
    "name": "Energy",
    "category": "Energy",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.6,
    "flow": 97,
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
      118,
      121,
      114,
      99,
      95,
      90
    ],
    "rsiStack": [
      47.8,
      53.1,
      56.6,
      58.2,
      58.3,
      56.7
    ]
  },
  {
    "symbol": "XLK",
    "dataSymbol": "XLK",
    "section": "ETF",
    "name": "Technology",
    "category": "Tech",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.7,
    "flow": 107,
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
      116,
      96,
      106,
      98,
      101,
      62
    ],
    "rsiStack": [
      64.5,
      58.2,
      55.7,
      54.4,
      53.1,
      49.3
    ]
  },
  {
    "symbol": "XLU",
    "dataSymbol": "XLU",
    "section": "ETF",
    "name": "Utilities",
    "category": "Defensive",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 35.7,
    "flow": 105,
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
      100,
      118,
      77,
      86,
      114,
      84
    ],
    "rsiStack": [
      35.5,
      34.5,
      35.7,
      37.0,
      36.4,
      28.1
    ]
  },
  {
    "symbol": "XLV",
    "dataSymbol": "XLV",
    "section": "ETF",
    "name": "Health Care",
    "category": "Health",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.0,
    "flow": 153,
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
      79,
      94,
      85,
      105,
      79,
      99
    ],
    "rsiStack": [
      57.0,
      50.1,
      51.0,
      52.8,
      54.0,
      51.9
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
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.0,
    "flow": 160,
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
      100,
      132,
      99,
      117,
      84,
      70
    ],
    "rsiStack": [
      45.2,
      49.6,
      51.0,
      51.3,
      50.4,
      46.9
    ]
  },
  {
    "symbol": "XLF",
    "dataSymbol": "XLF",
    "section": "ETF",
    "name": "Financials",
    "category": "Financial",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 37.1,
    "flow": 116,
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
      96,
      103,
      117,
      96,
      119,
      101
    ],
    "rsiStack": [
      20.0,
      30.1,
      37.1,
      42.4,
      47.7,
      52.9
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
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 34.7,
    "flow": 123,
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
      89,
      94,
      87,
      115,
      86,
      79
    ],
    "rsiStack": [
      31.3,
      31.8,
      34.7,
      37.7,
      39.2,
      32.9
    ]
  },
  {
    "symbol": "XLI",
    "dataSymbol": "XLI",
    "section": "ETF",
    "name": "Industrials",
    "category": "Industrial",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 31.5,
    "flow": 117,
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
      81,
      125,
      83,
      98,
      132,
      105
    ],
    "rsiStack": [
      27.5,
      28.4,
      31.5,
      35.2,
      38.9,
      39.0
    ]
  },
  {
    "symbol": "XLB",
    "dataSymbol": "XLB",
    "section": "ETF",
    "name": "Materials",
    "category": "Materials",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 40.2,
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
      81,
      88,
      83,
      120,
      131,
      83
    ],
    "rsiStack": [
      37.7,
      36.8,
      40.2,
      43.1,
      44.9,
      42.3
    ]
  },
  {
    "symbol": "XLY",
    "dataSymbol": "XLY",
    "section": "ETF",
    "name": "Consumer Discretionary",
    "category": "Consumer",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.0,
    "flow": 91,
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
      77,
      219,
      83,
      143,
      113,
      78
    ],
    "rsiStack": [
      38.1,
      36.7,
      39.0,
      41.3,
      42.8,
      40.3
    ]
  },
  {
    "symbol": "XLP",
    "dataSymbol": "XLP",
    "section": "ETF",
    "name": "Consumer Staples",
    "category": "Defensive",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 42.9,
    "flow": 109,
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
      78,
      144,
      112,
      130,
      119,
      106
    ],
    "rsiStack": [
      40.4,
      40.6,
      42.9,
      44.9,
      46.2,
      44.6
    ]
  },
  {
    "symbol": "SOX",
    "dataSymbol": "SOXX",
    "section": "ETF",
    "name": "Semiconductors",
    "category": "Semis",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 50.1,
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
      94,
      81,
      81,
      91,
      93,
      64
    ],
    "rsiStack": [
      58.2,
      52.6,
      50.1,
      49.1,
      48.9,
      48.3
    ]
  },
  {
    "symbol": "DBA",
    "dataSymbol": "DBA",
    "section": "ETF",
    "name": "Agriculture",
    "category": "Agriculture",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Bottoming",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.8,
    "flow": 58,
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
      112,
      147,
      82,
      99,
      112,
      169
    ],
    "rsiStack": [
      24.4,
      38.3,
      45.8,
      49.5,
      51.4,
      50.2
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
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.6,
    "flow": 28,
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
      39,
      147,
      222,
      70,
      382,
      254
    ],
    "rsiStack": [
      47.1,
      52.2,
      55.6,
      56.6,
      55.1,
      46.5
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
    "phase": "Bottoming",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.3,
    "flow": 66,
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
      332,
      195,
      35,
      26,
      57,
      19
    ],
    "rsiStack": [
      40.2,
      38.4,
      39.3,
      41.1,
      43.1,
      41.6
    ]
  },
  {
    "symbol": "FTAG",
    "dataSymbol": "FTAG",
    "section": "Stock",
    "name": "FTAG",
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
    "rsi": 53.7,
    "flow": 17,
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
      64,
      208,
      50,
      414,
      232,
      102
    ],
    "rsiStack": [
      45.4,
      50.1,
      53.7,
      54.9,
      53.0,
      42.9
    ]
  },
  {
    "symbol": "SBUX",
    "dataSymbol": "SBUX",
    "section": "Stock",
    "name": "SBUX",
    "category": "Consumer",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 30.4,
    "flow": 205,
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
      109,
      115,
      97,
      106,
      76,
      98
    ],
    "rsiStack": [
      19.3,
      24.3,
      30.4,
      35.2,
      38.6,
      35.9
    ]
  },
  {
    "symbol": "MOO",
    "dataSymbol": "MOO",
    "section": "Stock",
    "name": "MOO",
    "category": "Agriculture",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 55.8,
    "flow": 63,
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
      61,
      49,
      81,
      248,
      118,
      298
    ],
    "rsiStack": [
      47.2,
      52.2,
      55.8,
      56.9,
      54.4,
      42.1
    ]
  },
  {
    "symbol": "F",
    "dataSymbol": "F",
    "section": "Stock",
    "name": "F",
    "category": "Auto",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 45.0,
    "flow": 229,
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
      103,
      106,
      90,
      162,
      101,
      83
    ],
    "rsiStack": [
      44.1,
      44.1,
      45.0,
      46.1,
      47.2,
      47.4
    ]
  },
  {
    "symbol": "GM",
    "dataSymbol": "GM",
    "section": "Stock",
    "name": "GM",
    "category": "Auto",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 52.7,
    "flow": 299,
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
      141,
      107,
      129,
      142,
      102,
      86
    ],
    "rsiStack": [
      56.4,
      53.3,
      52.7,
      52.8,
      52.7,
      50.3
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
    "phase": "Mature",
    "volume": "Rising",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 57.2,
    "flow": 48,
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
      168,
      38,
      123,
      61,
      173,
      114
    ],
    "rsiStack": [
      38.5,
      50.6,
      57.2,
      60.0,
      60.3,
      56.8
    ]
  },
  {
    "symbol": "PFE",
    "dataSymbol": "PFE",
    "section": "Stock",
    "name": "PFE",
    "category": "Healthcare",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Early",
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 51.8,
    "flow": 222,
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
      92,
      120,
      78,
      87,
      75,
      72
    ],
    "rsiStack": [
      41.3,
      46.5,
      51.8,
      54.2,
      53.8,
      47.5
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
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 71.8,
    "flow": 94,
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
      61,
      65,
      56,
      141,
      120,
      103
    ],
    "rsiStack": [
      81.1,
      75.6,
      71.8,
      67.4,
      59.1,
      41.6
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
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 63.9,
    "flow": 91,
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
      64,
      57,
      89,
      153,
      103
    ],
    "rsiStack": [
      61.6,
      63.4,
      63.9,
      61.9,
      55.3,
      39.1
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
    "phase": "Bottoming",
    "volume": "Spike",
    "rotation": "Neutral",
    "signal": "WATCH",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 39.5,
    "flow": 160,
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
      114,
      86,
      82,
      100,
      224,
      63
    ],
    "rsiStack": [
      52.0,
      40.4,
      39.5,
      41.0,
      43.4,
      45.2
    ]
  },
  {
    "symbol": "MRVL",
    "dataSymbol": "MRVL",
    "section": "Stock",
    "name": "MRVL",
    "category": "Tech",
    "price": 0,
    "change": 0,
    "mom": 50.0,
    "phase": "Mature",
    "volume": "Fading",
    "rotation": "Neutral",
    "signal": "HOLD",
    "dist_streak": 0,
    "acc_streak": 0,
    "rsi": 56.8,
    "flow": 105,
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
      93,
      53,
      72,
      83,
      77,
      123
    ],
    "rsiStack": [
      67.3,
      60.3,
      56.8,
      54.7,
      53.5,
      52.8
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
    "marketCap": "$36.8B",
    "pe": "15.6x",
    "evEbitda": "8.6x",
    "de": "0.5x",
    "drawdown": "nan%"
  },
  "MOS": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$7.8B",
    "pe": "15.6x",
    "evEbitda": "8.2x",
    "de": "0.5x",
    "drawdown": "nan%"
  },
  "CF": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$19.3B",
    "pe": "9.5x",
    "evEbitda": "6.1x",
    "de": "0.4x",
    "drawdown": "nan%"
  },
  "ICL": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "22.3x",
    "evEbitda": "7.2x",
    "de": "0.5x",
    "drawdown": "nan%"
  },
  "FMC": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$1.3B",
    "pe": "6.2x",
    "evEbitda": "19.4x",
    "de": "2.7x",
    "drawdown": "nan%"
  },
  "CTVA": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$53.7B",
    "pe": "48.8x",
    "evEbitda": "13.2x",
    "de": "0.2x",
    "drawdown": "nan%"
  },
  "ADM": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$41.1B",
    "pe": "23.3x",
    "evEbitda": "17.0x",
    "de": "0.4x",
    "drawdown": "nan%"
  },
  "BG": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$22.2B",
    "pe": "24.9x",
    "evEbitda": "12.8x",
    "de": "1.0x",
    "drawdown": "nan%"
  },
  "INGR": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$6.1B",
    "pe": "10.6x",
    "evEbitda": "6.0x",
    "de": "0.4x",
    "drawdown": "nan%"
  },
  "FPI": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$477M",
    "pe": "21.3x",
    "evEbitda": "25.8x",
    "de": "0.5x",
    "drawdown": "nan%"
  },
  "LAND": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$407M",
    "pe": "-30.9x",
    "evEbitda": "12.9x",
    "de": "0.7x",
    "drawdown": "nan%"
  },
  "DE": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$184.4B",
    "pe": "38.1x",
    "evEbitda": "28.2x",
    "de": "2.3x",
    "drawdown": "nan%"
  },
  "AGCO": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$8.4B",
    "pe": "16.6x",
    "evEbitda": "10.9x",
    "de": "0.7x",
    "drawdown": "nan%"
  },
  "CNH": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$21.6B",
    "pe": "53.8x",
    "evEbitda": "39.5x",
    "de": "3.4x",
    "drawdown": "nan%"
  },
  "XYL": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$25.1B",
    "pe": "25.6x",
    "evEbitda": "13.7x",
    "de": "0.3x",
    "drawdown": "nan%"
  },
  "VMI": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$9.2B",
    "pe": "18.5x",
    "evEbitda": "14.6x",
    "de": "0.5x",
    "drawdown": "nan%"
  },
  "LNN": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$1.2B",
    "pe": "22.1x",
    "evEbitda": "13.9x",
    "de": "0.3x",
    "drawdown": "nan%"
  },
  "MWA": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$3.4B",
    "pe": "15.4x",
    "evEbitda": "9.3x",
    "de": "0.4x",
    "drawdown": "nan%"
  },
  "WTS": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$11.7B",
    "pe": "30.6x",
    "evEbitda": "19.9x",
    "de": "0.1x",
    "drawdown": "nan%"
  },
  "TSN": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$18.6B",
    "pe": "32.6x",
    "evEbitda": "9.4x",
    "de": "0.4x",
    "drawdown": "nan%"
  },
  "PPC": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$7.1B",
    "pe": "13.0x",
    "evEbitda": "5.6x",
    "de": "0.8x",
    "drawdown": "nan%"
  },
  "HRL": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$11.5B",
    "pe": "33.6x",
    "evEbitda": "10.6x",
    "de": "0.4x",
    "drawdown": "nan%"
  },
  "CAG": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$7.2B",
    "pe": "9.7x",
    "evEbitda": "8.3x",
    "de": "1.2x",
    "drawdown": "nan%"
  },
  "CALM": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "$3.4B",
    "pe": "11.0x",
    "evEbitda": "5.5x",
    "de": "–",
    "drawdown": "nan%"
  },
  "DBA": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "11.9x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  },
  "MOO": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "18.6x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  },
  "VEGI": {
    "price": NaN,
    "chg": NaN,
    "chgW": NaN,
    "chgM": NaN,
    "chgYTD": NaN,
    "marketCap": "–",
    "pe": "19.7x",
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
    "pe": "50.0x",
    "evEbitda": "–",
    "de": "–",
    "drawdown": "nan%"
  }
};
