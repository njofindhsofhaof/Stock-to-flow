const sampleEtfs = [
  {
    symbol: "XLK",
    name: "Technology",
    category: "Tech",
    mom: 4,
    phase: "Exhaustion",
    volume: "Rising",
    rotation: "Distribution",
    rsi: 76.9,
    perf: { w1: 6.29, m1: 24.62, m3: 22.95 },
    flow: 101,
    signal: "Trending up, Extended",
    holdings: [
      ["NVDA", "NVIDIA", 18.8, 32.4],
      ["AAPL", "Apple", 17.1, 9.6],
      ["MSFT", "Microsoft", 15.4, 7.8],
      ["AVGO", "Broadcom", 6.6, 20.9],
      ["MU", "Micron", 4.8, 41.0],
      ["AMD", "Advanced Micro Devices", 4.4, 24.2],
      ["ORCL", "Oracle", 3.2, 18.4],
      ["PLTR", "Palantir", 2.9, 28.8],
      ["CSCO", "Cisco", 2.6, 4.1],
      ["AMAT", "Applied Materials", 2.4, 13.9],
    ],
  },
  {
    symbol: "SOX",
    name: "PHLX Semiconductor",
    category: "Semis",
    mom: 5,
    phase: "Mature",
    volume: "Spike",
    rotation: "Accumulation",
    rsi: 69.7,
    perf: { w1: 7.44, m1: 41.01, m3: 43.79 },
    flow: 144,
    signal: "Trending up, Accumulation",
    holdings: [
      ["NVDA", "NVIDIA", 11.5, 32.4],
      ["AVGO", "Broadcom", 8.9, 20.9],
      ["AMD", "Advanced Micro Devices", 7.1, 24.2],
      ["TSM", "Taiwan Semiconductor", 6.8, 14.1],
      ["ASML", "ASML", 6.4, 10.7],
      ["MU", "Micron", 5.8, 41.0],
      ["QCOM", "Qualcomm", 4.5, 8.4],
      ["AMAT", "Applied Materials", 4.4, 13.9],
      ["LRCX", "Lam Research", 4.0, 17.3],
      ["INTC", "Intel", 3.6, 19.6],
    ],
  },
  {
    symbol: "XLE",
    name: "Energy",
    category: "Energy",
    mom: 3,
    phase: "Bottoming",
    volume: "Spike",
    rotation: "Reflex Setup",
    rsi: 52.0,
    perf: { w1: -3.87, m1: -6.45, m3: 6.57 },
    flow: 99,
    signal: "Neutral",
    holdings: [
      ["XOM", "Exxon Mobil", 22.4, -5.4],
      ["CVX", "Chevron", 16.7, -4.8],
      ["COP", "ConocoPhillips", 7.0, -7.6],
      ["SLB", "SLB", 4.7, -8.2],
      ["WMB", "Williams", 4.4, 1.2],
      ["EOG", "EOG Resources", 4.2, -6.0],
      ["MPC", "Marathon Petroleum", 4.1, 2.6],
      ["VLO", "Valero", 4.1, 3.2],
    ],
  },
  {
    symbol: "XLF",
    name: "Financials",
    category: "Financial",
    mom: 1,
    phase: "Exhaustion",
    volume: "Quiet",
    rotation: "Distribution",
    rsi: 48.8,
    perf: { w1: 0.08, m1: 3.89, m3: -4.24 },
    flow: 82,
    signal: "Neutral",
    holdings: [
      ["BRK.B", "Berkshire Hathaway", 12.6, 2.2],
      ["JPM", "JPMorgan Chase", 11.2, 5.8],
      ["V", "Visa", 7.3, 1.4],
      ["MA", "Mastercard", 6.2, 0.9],
      ["BAC", "Bank of America", 4.9, -2.4],
      ["GS", "Goldman Sachs", 3.7, 4.1],
      ["WFC", "Wells Fargo", 3.5, 1.6],
      ["MS", "Morgan Stanley", 3.3, -1.1],
    ],
  },
  {
    symbol: "XLI",
    name: "Industrials",
    category: "Industrial",
    mom: 2,
    phase: "Exhaustion",
    volume: "Quiet",
    rotation: "Distribution",
    rsi: 68.2,
    perf: { w1: 1.46, m1: 6.32, m3: 2.42 },
    flow: 110,
    signal: "Neutral",
    holdings: [
      ["CAT", "Caterpillar", 5.1, 6.8],
      ["GE", "GE Aerospace", 4.9, 12.2],
      ["GEV", "GE Vernova", 4.4, 18.0],
      ["RTX", "RTX", 4.1, 2.7],
      ["BA", "Boeing", 3.8, -6.1],
      ["ETN", "Eaton", 3.6, 9.4],
      ["UBER", "Uber", 3.4, 8.9],
      ["UNP", "Union Pacific", 3.2, -0.4],
    ],
  },
  {
    symbol: "XLY",
    name: "Consumer Discretionary",
    category: "Consumer",
    mom: 3,
    phase: "Bottoming",
    volume: "Fading",
    rotation: "Reflex Setup",
    rsi: 57.4,
    perf: { w1: 1.16, m1: 10.89, m3: 3.62 },
    flow: 89,
    signal: "Trending up",
    holdings: [
      ["AMZN", "Amazon", 23.5, 12.1],
      ["TSLA", "Tesla", 18.2, 22.8],
      ["HD", "Home Depot", 6.7, 1.2],
      ["TJX", "TJX", 4.3, 6.9],
      ["MCD", "McDonald's", 4.1, -1.8],
      ["BKNG", "Booking", 3.6, 5.4],
      ["LOW", "Lowe's", 3.4, 2.9],
      ["SBUX", "Starbucks", 2.9, -3.1],
    ],
  },
  {
    symbol: "XLV",
    name: "Health Care",
    category: "Health",
    mom: -1,
    phase: "Exhaustion",
    volume: "Quiet",
    rotation: "Distribution",
    rsi: 43.8,
    perf: { w1: 0.72, m1: -1.49, m3: -7.25 },
    flow: 80,
    signal: "Distribution",
    holdings: [
      ["LLY", "Eli Lilly", 13.7, 4.6],
      ["JNJ", "Johnson & Johnson", 7.6, -1.9],
      ["ABBV", "AbbVie", 7.2, -2.7],
      ["UNH", "UnitedHealth", 6.5, -11.4],
      ["MRK", "Merck", 5.3, -3.5],
      ["AMGN", "Amgen", 4.1, 1.0],
      ["TMO", "Thermo Fisher", 3.6, -4.0],
      ["GILD", "Gilead", 3.2, 2.3],
    ],
  },
  {
    symbol: "XLC",
    name: "Communication Services",
    category: "Comm",
    mom: 2,
    phase: "Early",
    volume: "Quiet",
    rotation: "Accumulation",
    rsi: 61.2,
    perf: { w1: 2.07, m1: 5.21, m3: 1.08 },
    flow: 97,
    signal: "Trending up",
    holdings: [
      ["META", "Meta Platforms", 24.0, 7.6],
      ["GOOGL", "Alphabet A", 11.6, 2.8],
      ["GOOG", "Alphabet C", 10.1, 2.5],
      ["NFLX", "Netflix", 5.6, 10.7],
      ["DIS", "Disney", 4.9, -2.1],
      ["TMUS", "T-Mobile", 4.2, 1.8],
      ["VZ", "Verizon", 4.0, -1.6],
      ["CMCSA", "Comcast", 3.6, -3.8],
    ],
  },
  {
    symbol: "XLU",
    name: "Utilities",
    category: "Defensive",
    mom: 1,
    phase: "Bottoming",
    volume: "Quiet",
    rotation: "Reflex Setup",
    rsi: 47.2,
    perf: { w1: -1.59, m1: -2.04, m3: 3.75 },
    flow: 94,
    signal: "Neutral",
    holdings: [
      ["NEE", "NextEra Energy", 13.4, -3.6],
      ["SO", "Southern", 7.9, 2.1],
      ["CEG", "Constellation Energy", 7.4, 8.8],
      ["DUK", "Duke Energy", 6.6, -1.0],
      ["AEP", "American Electric", 4.8, 1.7],
      ["SRE", "Sempra", 4.3, -2.3],
      ["D", "Dominion", 4.1, -4.4],
      ["ETR", "Entergy", 3.9, 0.6],
    ],
  },
  {
    symbol: "XLB",
    name: "Materials",
    category: "Materials",
    mom: 2,
    phase: "Early",
    volume: "Quiet",
    rotation: "Accumulation",
    rsi: 58.0,
    perf: { w1: 0.94, m1: 2.55, m3: 1.06 },
    flow: 97,
    signal: "Neutral",
    holdings: [
      ["LIN", "Linde", 20.0, 1.9],
      ["NEM", "Newmont", 8.6, 14.2],
      ["NUE", "Nucor", 5.8, -1.5],
      ["FCX", "Freeport-McMoRan", 5.4, 6.8],
      ["CRH", "CRH", 5.2, 3.4],
      ["VMC", "Vulcan Materials", 4.6, -2.1],
      ["APD", "Air Products", 4.4, -3.6],
      ["SHW", "Sherwin-Williams", 4.1, 0.9],
    ],
  },
  {
    symbol: "XLP",
    name: "Consumer Staples",
    category: "Defensive",
    mom: 0,
    phase: "Exhaustion",
    volume: "Fading",
    rotation: "Distribution",
    rsi: 45.6,
    perf: { w1: 0.83, m1: 1.84, m3: -3.3 },
    flow: 86,
    signal: "Neutral",
    holdings: [
      ["WMT", "Walmart", 10.4, 4.4],
      ["COST", "Costco", 9.7, 3.1],
      ["PG", "Procter & Gamble", 9.4, -1.2],
      ["KO", "Coca-Cola", 7.1, 1.8],
      ["PM", "Philip Morris", 6.7, 5.7],
      ["MDLZ", "Mondelez", 4.8, -2.1],
      ["MO", "Altria", 4.3, 2.2],
      ["PEP", "PepsiCo", 4.2, -1.9],
    ],
  },
  {
    symbol: "XLRE",
    name: "Real Estate",
    category: "Real Estate",
    mom: 1,
    phase: "Bottoming",
    volume: "Rising",
    rotation: "Reflex Setup",
    rsi: 53.5,
    perf: { w1: 1.98, m1: 6.76, m3: 6.78 },
    flow: 104,
    signal: "Trending up",
    holdings: [
      ["WELL", "Welltower", 11.6, 8.1],
      ["PLD", "Prologis", 9.5, 7.8],
      ["EQIX", "Equinix", 8.1, 3.0],
      ["AMT", "American Tower", 7.4, 4.2],
      ["DLR", "Digital Realty", 6.0, 9.6],
      ["SPG", "Simon Property", 5.1, 5.8],
      ["PSA", "Public Storage", 4.8, 1.6],
      ["CBRE", "CBRE", 4.1, 7.0],
    ],
  },
];

function mergeLiveEtfs(sampleRows, liveRows) {
  if (!Array.isArray(liveRows) || liveRows.length === 0) return sampleRows;
  const sampleBySymbol = Object.fromEntries(sampleRows.map((item) => [item.symbol, item]));
  return liveRows.map((live) => {
    const base = sampleBySymbol[live.symbol] || sampleBySymbol.SOX || sampleRows[0];
    return {
      ...base,
      ...live,
      section: live.section || base.section || "ETF",
      holdings: live.holdings || base.holdings,
      perf: live.perf || base.perf,
    };
  });
}

const sampleIndexRows = [
  {
    symbol: "SP500",
    name: "S&P 500",
    category: "Broad",
    section: "Index",
    mom: 54,
    phase: "Mature",
    volume: "Quiet",
    rotation: "Trending up",
    rsi: 61.5,
    flow: 98,
    perf: { w1: 1.1, m1: 3.8, m3: 8.6 },
    holdings: [],
  },
  {
    symbol: "GLD",
    name: "Gold",
    category: "Commodity",
    section: "Index",
    mom: 58,
    phase: "Mature",
    volume: "Rising",
    rotation: "Accumulation",
    rsi: 63.2,
    flow: 112,
    perf: { w1: 2.4, m1: 6.2, m3: 14.1 },
    holdings: [],
  },
  {
    symbol: "SLV",
    name: "Silver",
    category: "Commodity",
    section: "Index",
    mom: 62,
    phase: "Mature",
    volume: "Spike",
    rotation: "Accumulation",
    rsi: 67.9,
    flow: 138,
    perf: { w1: 3.1, m1: 9.5, m3: 18.4 },
    holdings: [],
  },
  {
    symbol: "URA",
    name: "Uranium",
    category: "Commodity",
    section: "Index",
    mom: 44,
    phase: "Bottoming",
    volume: "Spike",
    rotation: "Reflex Setup",
    rsi: 42.6,
    flow: 126,
    perf: { w1: 1.4, m1: -2.1, m3: 4.8 },
    holdings: [],
  },
  {
    symbol: "CL",
    name: "Crude Oil",
    category: "Commodity",
    section: "Index",
    mom: 38,
    phase: "Bottoming",
    volume: "Fading",
    rotation: "Distribution",
    rsi: 39.8,
    flow: 84,
    perf: { w1: -2.8, m1: -6.4, m3: -3.2 },
    holdings: [],
  },
];

const stockSymbols = [
  "KMT",
  "VMI",
  "CSTM",
  "UNP",
  "JBHT",
  "AGCO",
  "ODFL",
  "ALMU",
  "SMTC",
  "LWLG",
  "POET",
  "AVGO",
  "MRVL",
  "CRDO",
  "ALAB",
  "GFS",
  "QUBT",
  "COHU",
  "ETN",
  "CIEN",
  "OXY",
];

const sampleStockRows = stockSymbols.map((symbol, index) => ({
  symbol,
  name: symbol,
  category: "Stock",
  section: "Stock",
  mom: 45 + ((index * 7) % 35),
  phase: ["Bottoming", "Early", "Mature", "Exhaustion"][index % 4],
  volume: ["Quiet", "Rising", "Spike", "Fading"][index % 4],
  rotation: ["Neutral", "Accumulation", "Trending up", "Distribution"][index % 4],
  rsi: 38 + ((index * 5) % 42),
  flow: 82 + ((index * 9) % 58),
  perf: {
    w1: -3 + ((index * 1.3) % 8),
    m1: -8 + ((index * 2.1) % 22),
    m3: -12 + ((index * 3.2) % 36),
  },
  holdings: [],
}));

const cryptoSymbols = ["BTC", "COIN", "CRCL", "MSTR"];
const sampleCryptoRows = cryptoSymbols.map((symbol, index) => ({
  symbol,
  name: symbol,
  category: "Crypto",
  section: "Crypto",
  mom: 50 + ((index * 11) % 30),
  phase: ["Early", "Mature", "Bottoming", "Exhaustion"][index % 4],
  volume: ["Rising", "Spike", "Quiet", "Fading"][index % 4],
  rotation: ["Accumulation", "Trending up", "Neutral", "Distribution"][index % 4],
  rsi: 45 + ((index * 8) % 40),
  flow: 90 + ((index * 12) % 60),
  perf: { w1: -2 + ((index * 2.1) % 12), m1: -5 + ((index * 3.4) % 28), m3: -8 + ((index * 5.1) % 40) },
  holdings: [],
}));

const sampleRows = [
  ...sampleIndexRows,
  ...sampleEtfs.map((item) => ({ ...item, section: "ETF" })),
  ...sampleStockRows,
  ...sampleCryptoRows,
];
const etfs = mergeLiveEtfs(sampleRows, window.marketData);
etfs.forEach((item) => {
  item.section = item.section || "ETF";
  item.holdings = item.holdings || [];
});

let selectedSymbol = "XLK";
let phaseFilter = "all";
let searchTerm = "";
let activeView = "map";
const sectionOrder = ["Index", "Commodity", "ETF", "Stock", "Crypto"];
const indexOrder = ["SP500", "DJI", "KOSPI", "NI225"];
const commodityOrder = ["GLD", "SLV", "URA", "CL", "CF", "IPI", "MOS", "NTR"];

const tableBody = document.querySelector("#etfTable tbody");
const searchInput = document.querySelector("#searchInput");
const phaseButtons = document.querySelectorAll("[data-phase]");
const viewButtons = document.querySelectorAll("[data-view]");
const mapView = document.querySelector("#mapView");
const basketView = document.querySelector("#basketView");
const agriView = document.querySelector("#agriView");

function fmt(value, suffix = "%") {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}${suffix}`;
}

function money(value) {
  if (typeof value !== "number" || Number.isNaN(value)) return "-";
  return `$${value.toFixed(2)}`;
}

function pct(value) {
  return `${Math.round(value)}%`;
}

function cls(value) {
  if (value > 0) return "positive";
  if (value < 0) return "negative";
  return "neutral";
}

function phaseClass(phase) {
  return phase.toLowerCase();
}

function rotationClass(rotation) {
  if (rotation.includes("Accumulation")) return "accumulation-bg";
  if (rotation.includes("Distribution") || rotation.includes("Fading")) return "distribution-bg";
  if (rotation.includes("Reflex")) return "reflex-bg";
  if (rotation.includes("Trending")) return "trending-bg";
  return "neutral-bg";
}

function determineSignal(etf) {
  const phase = etf.phase;
  const rotation = etf.rotation;
  const mom = etf.mom ?? 50;

  if (phase === "Bottoming" && ["Distribution", "Distribution (Quiet)", "Fading"].includes(rotation)) return "AVOID";
  if (phase === "Exhaustion" && ["Accumulation (Quiet)", "Accumulation"].includes(rotation)) {
    return mom > 70 ? "SELL" : "WATCH";
  }
  if (phase === "Exhaustion" && ["Trending up", "Neutral"].includes(rotation)) return "WATCH";

  if (phase === "Bottoming" && rotation === "Reflex Setup") return "BUY";
  if (phase === "Bottoming" && ["Accumulation (Quiet)", "Accumulation"].includes(rotation)) return "BUY";
  if (phase === "Early" && ["Accumulation", "Accumulation (Quiet)", "Trending up"].includes(rotation)) return "BUY";

  if (phase === "Mature" && ["Accumulation", "Accumulation (Quiet)", "Trending up"].includes(rotation)) return "HOLD";
  if (phase === "Mature" && rotation === "Neutral") return "HOLD";
  if (phase === "Early" && rotation === "Neutral") return "HOLD";
  if (phase === "Mature" && rotation === "Reflex Setup") return "HOLD";

  if (phase === "Mature" && ["Distribution", "Distribution (Quiet)"].includes(rotation)) return "SELL";
  if (phase === "Mature" && rotation === "Fading") return "SELL";
  if (phase === "Early" && ["Distribution", "Distribution (Quiet)", "Fading"].includes(rotation)) return "REDUCE";
  if (phase === "Exhaustion" && ["Distribution", "Distribution (Quiet)", "Fading"].includes(rotation)) return "SELL";

  if (phase === "Bottoming" && rotation === "Neutral") return "WATCH";
  if (phase === "Early" && rotation === "Reflex Setup") return "WATCH";
  if (phase === "Neutral") return "NEUTRAL";

  return "NEUTRAL";
}

function calculateRiskV3(sectionData) {
  if (!sectionData.length) return "⚠️ Neutral";
  const total = sectionData.length;
  let score = 0;
  for (const item of sectionData) {
    const phase = item.phase || "Neutral";
    const rotation = item.rotation || "Neutral";
    if (["Accumulation", "Accumulation (Quiet)", "Trending up"].includes(rotation)) {
      if (["Early", "Bottoming"].includes(phase)) score += 2;
      else if (phase === "Mature") score += 1;
    } else if (["Distribution", "Distribution (Quiet)", "Fading"].includes(rotation)) {
      if (["Mature", "Exhaustion"].includes(phase)) score -= 2;
      else score -= 1;
    }
    if (phase === "Exhaustion") score -= 1;
    else if (phase === "Mature" && !["Accumulation", "Accumulation (Quiet)"].includes(rotation)) score -= 0.5;
  }
  const s = score / total;
  if (s >= 0.5)  return "Strong ON";
  if (s >= 0.1)  return "Risk On";
  if (s >= -0.3) return "Neutral";
  if (s >= -0.8) return "Risk Off";
  return "Strong OFF";
}

function signalClass(signal) {
  if (signal.startsWith("BUY")) return "buy-signal";
  if (signal.startsWith("HOLD")) return "hold-signal";
  if (signal.startsWith("SELL")) return "sell-signal";
  if (signal.startsWith("REDUCE")) return "reduce-signal";
  if (signal.startsWith("AVOID")) return "avoid-signal";
  if (signal.startsWith("WATCH")) return "watch-signal";
  return "neutral-signal";
}

function signalShort(signal) {
  if (signal.startsWith("BUY")) return "BUY";
  if (signal.startsWith("HOLD")) return "HOLD";
  if (signal.startsWith("SELL")) return "SELL";
  if (signal.startsWith("REDUCE")) return "REDUCE";
  if (signal.startsWith("AVOID")) return "AVOID";
  if (signal.startsWith("WATCH")) return "WATCH";
  return "NEUTRAL";
}

function countBy(items, getter) {
  return items.reduce((acc, item) => {
    const key = getter(item);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

const phaseOrder = ["Bottoming", "Early", "Mature", "Exhaustion"];

function renderSummaryList(selector, counts, classGetter = () => "", fixedOrder = null) {
  const entries = fixedOrder
    ? fixedOrder.filter((k) => k in counts).map((k) => [k, counts[k]])
    : Object.entries(counts).sort((a, b) => b[1] - a[1]);
  document.querySelector(selector).innerHTML = entries
    .map(([label, count]) => {
      const extraClass = classGetter(label);
      return `
        <div class="summary-item ${extraClass}">
          <strong>${label}</strong>
          <span>${count}</span>
        </div>
      `;
    })
    .join("");
}

function pill(label, className) {
  return `<span class="pill ${className}">${label}</span>`;
}

function contribution(holding) {
  return (holding[2] * holding[3]) / 100;
}

function rotationMetrics(etf) {
  if (Array.isArray(etf.returns) && Array.isArray(etf.volumes)) {
    return {
      returns: etf.returns,
      volumes: etf.volumes,
    };
  }

  const bias = etf.rotation === "Accumulation" ? 0.8 : etf.rotation === "Distribution" ? -0.45 : 0.25;
  const volumeBias =
    etf.volume === "Spike" ? 1.42 : etf.volume === "Rising" ? 1.18 : etf.volume === "Fading" ? 0.76 : 0.92;
  const r60 = etf.perf.m3;
  const r20 = etf.perf.m1;
  const r10 = etf.perf.m1 * 0.42 + bias;
  const r5 = etf.perf.w1 * 0.66 + etf.mom * 0.32;
  const r3 = etf.perf.w1 * 0.38 + bias;
  const r1 = etf.perf.w1 * 0.16 + bias * 0.45;
  const v1 = etf.flow * volumeBias;
  const v2 = etf.flow * (volumeBias * 0.92 + 0.06);
  const v3 = etf.flow * (volumeBias * 0.82 + 0.14);
  const v4 = etf.flow * (volumeBias * 0.72 + 0.22);
  const v5 = etf.flow * (volumeBias * 0.62 + 0.32);
  const v6 = etf.flow * (volumeBias * 0.52 + 0.42);
  return {
    returns: [r1, r3, r5, r10, r20, r60],
    volumes: [v1, v2, v3, v4, v5, v6],
  };
}

function rsiStack(etf) {
  if (Array.isArray(etf.rsiStack)) return etf.rsiStack;

  const momentumTilt = etf.mom * 1.6;
  return [
    etf.rsi + momentumTilt + etf.perf.w1 * 0.9,
    etf.rsi + momentumTilt * 0.65 + etf.perf.w1 * 0.45,
    etf.rsi,
    etf.rsi - momentumTilt * 0.28,
    etf.rsi - momentumTilt * 0.42,
    etf.rsi - momentumTilt * 0.56,
  ].map((value) => Math.max(1, Math.min(99, value)));
}

function volumeMeaning(etf, volumes) {
  const [v1, , v3, , v5] = volumes;
  if (v1 > 120 && etf.rotation === "Reflex Setup") return "Volume spike -> Reflex Setup";
  if (v1 < v3 && v3 < v5) return "Volume fading";
  if (v1 > v3 && v3 >= v5) return "Volume improving";
  if (etf.rotation.includes("Accumulation")) return "Stable accumulation";
  if (etf.rotation.includes("Distribution")) return "Distribution pressure";
  return "Balanced";
}

function filteredEtfs() {
  return etfs.filter((etf) => {
    const haystack = `${etf.symbol} ${etf.name} ${etf.category} ${(etf.holdings || [])
      .map((item) => item[0])
      .join(" ")}`.toLowerCase();
    const phaseOk = phaseFilter === "all" || etf.phase === phaseFilter;
    const searchOk = haystack.includes(searchTerm.toLowerCase());
    return phaseOk && searchOk;
  });
}

function renderTable() {
  const filteredRows = filteredEtfs();
  const rows = sectionOrder
    .map((section) => {
      const sectionRows = filteredRows
        .filter((etf) => etf.section === section)
        .sort((a, b) => {
          if (section === "Index") {
            const ai = indexOrder.indexOf(a.symbol);
            const bi = indexOrder.indexOf(b.symbol);
            if (ai === -1 && bi === -1) return 0;
            if (ai === -1) return 1;
            if (bi === -1) return -1;
            return ai - bi;
          }
          if (section === "Commodity") {
            const ai = commodityOrder.indexOf(a.symbol);
            const bi = commodityOrder.indexOf(b.symbol);
            if (ai === -1 && bi === -1) return 0;
            if (ai === -1) return 1;
            if (bi === -1) return -1;
            return ai - bi;
          }
          if (section === "Stock") {
            const catCmp = (a.category || "").localeCompare(b.category || "");
            if (catCmp !== 0) return catCmp;
            return a.symbol.localeCompare(b.symbol);
          }
          return b.perf.m1 - a.perf.m1;
        });
      const headerRow = `
        <tr class="section-row">
          <td colspan="22">
            <strong>${section}</strong>
            <span>${sectionRows.length ? `${sectionRows.length} symbols` : "No data yet"}</span>
          </td>
        </tr>
      `;
      if (!sectionRows.length) {
        return `${headerRow}
          <tr class="placeholder-row">
            <td colspan="22">No ${section.toLowerCase()} data yet.</td>
          </tr>
        `;
      }
      return (
        headerRow +
        sectionRows
          .map((etf) => {
      const metrics = rotationMetrics(etf);
      const signal = etf.signal || determineSignal(etf);
      return `
        <tr class="${etf.symbol === selectedSymbol ? "selected" : ""}" data-symbol="${etf.symbol}">
          <td class="ticker-list">${etf.symbol}</td>
          <td>${etf.category}</td>
          <td class="mono">${money(etf.price)}</td>
          <td class="${cls(etf.change || 0)} mono">${typeof etf.change === "number" ? fmt(etf.change) : "-"}</td>
          <td class="${cls(etf.mom - 50)} mono">
            <div class="mom-cell"><span class="mom-track"><span style="width:${Math.max(0, Math.min(100, etf.mom))}%"></span></span><strong>${etf.mom}</strong></div>
          </td>
          <td>${pill(etf.phase, `phase ${phaseClass(etf.phase)}`)}</td>
          <td><span class="volume">${etf.volume}</span></td>
          <td>${pill(etf.rotation, `rotation ${rotationClass(etf.rotation)}`)}</td>
          <td>${pill(signal, `signal ${signalClass(signal)}`)}</td>
          <td class="${cls(etf.rsi - 50)} mono">${etf.rsi.toFixed(1)}</td>
          ${metrics.returns.map((item) => `<td class="${cls(item)} mono">${fmt(item)}</td>`).join("")}
          ${metrics.volumes.map((item) => `<td class="${cls(item - 100)} mono">${pct(item)}</td>`).join("")}
        </tr>
      `;
    })
          .join("")
      );
    })
    .join("");

  tableBody.innerHTML = rows;
  tableBody.querySelectorAll("tr").forEach((row) => {
    row.addEventListener("click", () => {
      selectedSymbol = row.dataset.symbol;
      setView("basket");
      renderTable();
      renderDetail();
    });
  });
}

function renderAnalysisPanels() {
  const rows = filteredEtfs();
  const phaseCounts = countBy(rows, (etf) => etf.phase);
  const rotationCounts = countBy(rows, (etf) => etf.rotation);
  const signalCounts = countBy(rows, (etf) => signalShort(etf.signal || determineSignal(etf)));

  renderSummaryList("#phaseSummary", phaseCounts, (phase) => `phase ${phaseClass(phase)}`, phaseOrder);
  renderSummaryList("#rotationSummary", rotationCounts, rotationClass);
  renderSummaryList("#signalSummary", signalCounts, (signal) => `${signal.toLowerCase()}-signal`);


  const signalOrder = ["BUY", "HOLD", "WATCH", "REDUCE", "SELL", "AVOID"];
  const signalTitles = {
    BUY: "BUY",
    HOLD: "HOLD",
    WATCH: "WATCH",
    REDUCE: "REDUCE",
    SELL: "SELL",
    AVOID: "AVOID",
  };

  document.querySelector("#recommendations").innerHTML = signalOrder
    .map((signal) => {
      const matches = rows.filter((etf) => signalShort(etf.signal || determineSignal(etf)) === signal);
      return `
        <div class="recommendation-card ${signal.toLowerCase()}-signal">
          <h4>${signalTitles[signal]}</h4>
          ${
            matches.length
              ? `<ul>${matches
                  .map(
                    (etf) =>
                      `<li><strong>${etf.symbol}</strong><span>${etf.phase} + ${etf.rotation}</span></li>`,
                  )
                  .join("")}</ul>`
              : `<p>No ${signal}</p>`
          }
        </div>
      `;
    })
    .join("");

  const volTrendClass = (meaning) => {
    if (meaning.includes("spike") || meaning.includes("Reflex")) return "vol-trend-spike";
    if (meaning.includes("improving") || meaning.includes("accumulation")) return "vol-trend-up";
    if (meaning.includes("fading")) return "vol-trend-fade";
    if (meaning.includes("Distribution")) return "vol-trend-dist";
    return "vol-trend-neutral";
  };

  const volClass = (v) => {
    if (v >= 150) return "vol-vhigh";
    if (v >= 120) return "vol-high";
    if (v >= 100) return "vol-above";
    if (v >= 80)  return "vol-normal";
    return "vol-low";
  };

  const byCategory = {};
  rows.forEach((etf) => {
    const cat = etf.category || "Other";
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(etf);
  });

  document.querySelector("#volumeTable tbody").innerHTML = Object.entries(byCategory)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([cat, items]) => {
      const headerRow = `<tr class="vol-section-row"><td colspan="5"><strong>${cat}</strong></td></tr>`;
      const dataRows = items
        .sort((a, b) => rotationMetrics(b).volumes[0] - rotationMetrics(a).volumes[0])
        .map((etf) => {
          const volumes = rotationMetrics(etf).volumes;
          return `
            <tr>
              <td><strong>${etf.symbol}</strong></td>
              <td class="mono ${volClass(volumes[0])}">${pct(volumes[0])}</td>
              <td class="mono ${volClass(volumes[2])}">${pct(volumes[2])}</td>
              <td class="mono ${volClass(volumes[4])}">${pct(volumes[4])}</td>
              <td class="vol-trend ${volTrendClass(volumeMeaning(etf, volumes))}">${volumeMeaning(etf, volumes)}</td>
            </tr>
          `;
        }).join("");
      return headerRow + dataRows;
    }).join("");

}

function setView(view) {
  activeView = view;
  mapView.classList.toggle("hidden", view !== "map");
  basketView.classList.toggle("hidden", view !== "basket");
  agriView.classList.toggle("hidden", view !== "agri");
  viewButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  if (view === "agri") renderAgriView();
}

function renderDetail() {
  const etf = etfs.find((item) => item.symbol === selectedSymbol) || etfs[0];
  const metrics = rotationMetrics(etf);
  const sorted = [...etf.holdings].sort((a, b) => contribution(b) - contribution(a));
  const totalPositive = etf.holdings.filter((item) => item[3] > 0).length;
  const topWeightLift = etf.holdings
    .slice(0, 3)
    .reduce((sum, item) => sum + contribution(item), 0);
  const confidence = Math.round(
    Math.min(99, Math.max(1, 42 + etf.mom * 8 + topWeightLift * 3 + (etf.flow - 100) / 3)),
  );
  const maxAbs = Math.max(...sorted.slice(0, 5).map((item) => Math.abs(contribution(item))));

  document.querySelector("#selectedTitle").textContent = `${etf.symbol} ${etf.name}`;
  document.querySelector("#selectedBadge").textContent =
    topWeightLift > 2 && etf.perf.m1 > 0 ? "Watch" : etf.rotation;
  document.querySelector("#metricOneMonth").textContent = fmt(etf.perf.m1);
  document.querySelector("#metricOneMonth").className = cls(etf.perf.m1);
  document.querySelector("#metricTopLift").textContent = fmt(topWeightLift);
  document.querySelector("#metricTopLift").className = cls(topWeightLift);
  document.querySelector("#metricBreadth").textContent = `${totalPositive}/${etf.holdings.length}`;
  document.querySelector("#metricConfidence").textContent = `${confidence}`;
  document.querySelector("#holdingCount").textContent = `${etf.holdings.length} names`;

  document.querySelector("#driverList").innerHTML = sorted
    .slice(0, 5)
    .map((item) => {
      const value = contribution(item);
      const width = Math.max(8, (Math.abs(value) / maxAbs) * 100);
      return `
        <div class="driver-row">
          <span class="driver-symbol">${item[0]}</span>
          <div class="bar-track">
            <div class="bar ${value < 0 ? "negative-bar" : ""}" style="width:${width}%"></div>
          </div>
          <span class="driver-value ${cls(value)}">${fmt(value, "")}</span>
        </div>
      `;
    })
    .join("");

  document.querySelector("#tapeGrid").innerHTML = [1, 3, 5, 10, 20, 60]
    .map((period, index) => {
      const ret = metrics.returns[index];
      const vol = metrics.volumes[index];
      return `
        <div class="tape-cell">
          <span>${period}D</span>
          <strong class="${cls(ret)}">${fmt(ret)}</strong>
          <em class="${cls(vol - 100)}">${pct(vol)}</em>
        </div>
      `;
    })
    .join("");

  document.querySelector("#holdingsTable").innerHTML = sorted
    .map((item) => {
      const value = contribution(item);
      return `
        <div class="holding-row">
          <strong>${item[0]}</strong>
          <span class="holding-name">${item[1]}</span>
          <span class="mono">${item[2].toFixed(1)}%</span>
          <span class="${cls(item[3])} mono">${fmt(item[3])}</span>
          <span class="contribution-cell ${cls(value)} mono">${fmt(value, "")}</span>
        </div>
      `;
    })
    .join("");

  sectionOrder.forEach((section) => {
    const prefix = section.toLowerCase();
    const sectionEtfs = etfs.filter((item) => item.section === section);
    if (!sectionEtfs.length) return;
    const leader = [...sectionEtfs].sort((a, b) => b.perf.m1 - a.perf.m1)[0];
    const watchCount = sectionEtfs.filter((item) => item.perf.m1 > 0 && item.flow > 100).length;
    const risk = calculateRiskV3(sectionEtfs);
    document.querySelector(`#${prefix}Risk`).textContent = risk;
    document.querySelector(`#${prefix}Leader`).textContent = leader?.symbol || "–";
    document.querySelector(`#${prefix}Watch`).textContent = watchCount;
  });
  document.querySelector("#asOf").textContent = window.marketDataMeta?.updatedAt
    ? `${window.marketDataMeta.source} | Updated ${window.marketDataMeta.updatedAt}`
    : "Static sample data";
}

// ─── Agri Research Data ────────────────────────────────────────────────────

const AGRI_STOCKS = [
  // Fertilizer & Chemicals
  { sector:"Fertilizer & Chemicals", no:1, ticker:"NTR", name:"Nutrien Ltd.", exchange:"NYSE", subsector:"Potash, Nitrogen, Phosphate", marketCap:"~$36B", pe:"~10x", evEbitda:"~5.5x", drawdown:">30%", de:"~0.45x", fcf:"Positive", classification:"Deep Value / Commodity Beta", whyBenefits:"World's largest fertilizer producer; integrated model benefits from rising potash, nitrogen, and phosphate prices. Direct play on global crop input inflation.", keyRisks:"Commodity price volatility; geopolitical risk (Belarus/Russia).", technical:"Trading near multi-year support; deeply out-of-favor." },
  { sector:"Fertilizer & Chemicals", no:2, ticker:"MOS", name:"The Mosaic Company", exchange:"NYSE", subsector:"Potash, Phosphate", marketCap:"~$7.6B", pe:"~11x", evEbitda:"~6x", drawdown:">40%", de:"~0.55x", fcf:"Positive", classification:"Deep Value / Cyclical Recovery", whyBenefits:"Pure-play on phosphate and potash; concentrated exposure to crop nutrient supply shocks. Phosphate has the most favorable supply-demand outlook.", keyRisks:"Earnings highly cyclical; sensitive to grain prices and farmer income.", technical:"Classic contrarian setup; sell-off may be overdone." },
  { sector:"Fertilizer & Chemicals", no:3, ticker:"CF", name:"CF Industries Holdings", exchange:"NYSE", subsector:"Nitrogen", marketCap:"~$14B", pe:"~8x", evEbitda:"~5x", drawdown:"~30%", de:"~0.50x", fcf:"Strongly Positive", classification:"Deep Value / Crisis Hedge", whyBenefits:"Leading nitrogen producer; benefits from tight global nitrogen/ammonia markets and high natural gas prices in Europe.", keyRisks:"Natural gas cost volatility; carbon policy uncertainty.", technical:"Pulling back to value zone; recent downgrades create entry point." },
  { sector:"Fertilizer & Chemicals", no:4, ticker:"ICL", name:"ICL Group Ltd.", exchange:"NYSE", subsector:"Potash, Phosphate, Specialty", marketCap:"~$9B", pe:"~9x", evEbitda:"~5x", drawdown:">30%", de:"~0.55x", fcf:"Positive", classification:"Deep Value / Commodity Beta", whyBenefits:"Diversified fertilizer producer with growing specialty fertilizer business. Secured large potash contract with China for 2026.", keyRisks:"Geopolitical risk (Israel-based operations).", technical:"Basing pattern near multi-year lows; high dividend yield supports valuation." },
  { sector:"Fertilizer & Chemicals", no:5, ticker:"FMC", name:"FMC Corporation", exchange:"NYSE", subsector:"Crop Protection", marketCap:"~$2.2B", pe:"~12x", evEbitda:"~7x", drawdown:">78%", de:"~1.2x", fcf:"Negative", classification:"Deep Value / Cyclical Recovery (Spec.)", whyBenefits:"Pure-play crop protection chemicals; essential for maintaining yields under pest/disease pressure during climate stress.", keyRisks:"High debt; severe earnings contraction; dividend cut.", technical:"Extreme oversold; deeply contrarian but high-risk turnaround." },
  { sector:"Fertilizer & Chemicals", no:6, ticker:"CTVA", name:"Corteva, Inc.", exchange:"NYSE", subsector:"Seeds & Crop Protection", marketCap:"~$49B", pe:"~37x", evEbitda:"~14.5x", drawdown:"~20%", de:"~0.30x", fcf:"Strongly Positive", classification:"Secular Compounder", whyBenefits:"Global leader in seeds and crop protection; innovative pipeline drives yield improvement. Seed business is a secular growth engine.", keyRisks:"Premium valuation; regulatory risk (GMO, pesticides).", technical:"Consolidating near highs; defensive growth profile." },
  // Commodity Trading & Processing
  { sector:"Commodity Trading & Processing", no:7, ticker:"ADM", name:"Archer-Daniels-Midland Co.", exchange:"NYSE", subsector:"Grain & Oilseed Processing", marketCap:"~$25B", pe:"~34x", evEbitda:"~9x", drawdown:">35%", de:"~0.42x", fcf:"Positive (norm.)", classification:"Cyclical Recovery / Crisis Hedge", whyBenefits:"Global agricultural supply chain manager; profits from grain merchandising, oilseed crushing, and trade flow disruptions.", keyRisks:"Biofuel policy uncertainty; trade disputes; weak crush margins.", technical:"Trading at multi-year lows; deep value if earnings normalize." },
  { sector:"Commodity Trading & Processing", no:8, ticker:"BG", name:"Bunge Global SA", exchange:"NYSE", subsector:"Oilseed Processing", marketCap:"~$10B", pe:"~9x", evEbitda:"~4x", drawdown:">30%", de:"~0.93x", fcf:"Positive (norm.)", classification:"Deep Value / Commodity Beta", whyBenefits:"Leading oilseed processor; benefits from rising food oil demand, biofuel mandates, and trade flow shifts.", keyRisks:"High debt; volatile earnings tied to crush spreads.", technical:"Deep value territory; cyclical trough in earnings." },
  { sector:"Commodity Trading & Processing", no:9, ticker:"INGR", name:"Ingredion Incorporated", exchange:"NYSE", subsector:"Starches & Sweeteners", marketCap:"~$6.2B", pe:"~10.7x", evEbitda:"~7x", drawdown:"~18%", de:"~0.50x", fcf:"Strongly Positive", classification:"Secular Compounder", whyBenefits:"Processes corn into starches, sweeteners, and biomaterials; benefits from rising grain prices and food inflation pass-through.", keyRisks:"Input cost volatility; FX risk.", technical:"Steady performer; defensive characteristics with growth upside." },
  // Agriculture & Farmland
  { sector:"Agriculture & Farmland", no:10, ticker:"FPI", name:"Farmland Partners Inc.", exchange:"NYSE", subsector:"Farmland REIT", marketCap:"~$600M", pe:"~25x", evEbitda:"~18x", drawdown:">30%", de:"~0.85x", fcf:"Positive", classification:"Deep Value / Crisis Hedge", whyBenefits:"Owns 190K acres of Midwest row-crop farmland; rental income rises with crop prices. Direct inflation hedge.", keyRisks:"Interest rate sensitivity; low liquidity.", technical:"Trading near book value; overlooked small-cap." },
  { sector:"Agriculture & Farmland", no:11, ticker:"LAND", name:"Gladstone Land Corp.", exchange:"NASDAQ", subsector:"Farmland REIT", marketCap:"~$500M", pe:"~20x", evEbitda:"~22x", drawdown:">35%", de:"~0.70x", fcf:"Positive", classification:"Deep Value / Crisis Hedge", whyBenefits:"Owns 117K acres of specialty farmland (fruits, nuts, vegetables); higher-value crops with premium pricing.", keyRisks:"Variable rent structure; interest rate risk.", technical:"Trading below book value; monthly dividend payer." },
  { sector:"Agriculture & Farmland", no:12, ticker:"DE", name:"Deere & Company", exchange:"NYSE", subsector:"Farm Equipment", marketCap:"~$140B", pe:"~14x", evEbitda:"~12x", drawdown:"~12%", de:"~1.3x", fcf:"Strongly Positive", classification:"Secular Compounder", whyBenefits:"Global leader in precision agriculture equipment; technology-driven farming solutions. Benefits from long-term food demand.", keyRisks:"Cyclical downturn in farm income; tariff costs.", technical:"Near highs but growth outlook pressured; premium for tech platform." },
  { sector:"Agriculture & Farmland", no:13, ticker:"AGCO", name:"AGCO Corporation", exchange:"NYSE", subsector:"Farm Equipment / Precision Ag", marketCap:"~$8B", pe:"~12x", evEbitda:"~7x", drawdown:"~21%", de:"~0.55x", fcf:"Positive", classification:"Cyclical Recovery", whyBenefits:"Leading manufacturer of tractors and precision agriculture technology; JV with Trimble.", keyRisks:"Weak end-market demand; dealer inventory destocking.", technical:"Trading near support; value emerging as cycle troughs." },
  { sector:"Agriculture & Farmland", no:14, ticker:"CNH", name:"CNH Industrial N.V.", exchange:"NYSE", subsector:"Farm Equipment", marketCap:"~$13B", pe:"~10x", evEbitda:"~6x", drawdown:">40%", de:"~0.95x", fcf:"Positive", classification:"Deep Value / Cyclical Recovery", whyBenefits:"Global agricultural and construction equipment; precision tech focus.", keyRisks:"Downgraded to Underweight by JPM; severe demand contraction.", technical:"Deeply out-of-favor; classic cyclical trough play." },
  // Water Infrastructure
  { sector:"Water Infrastructure", no:15, ticker:"XYL", name:"Xylem Inc.", exchange:"NYSE", subsector:"Water Treatment & Transport", marketCap:"~$32B", pe:"~30x", evEbitda:"~22x", drawdown:"~15%", de:"~0.18x", fcf:"Strongly Positive", classification:"Secular Compounder", whyBenefits:"Global water solutions leader; technology for water security, treatment, and efficiency. Essential for drought resilience.", keyRisks:"Premium valuation; moderate growth profile.", technical:"Steady uptrend; defensive growth compounder." },
  { sector:"Water Infrastructure", no:16, ticker:"VMI", name:"Valmont Industries", exchange:"NYSE", subsector:"Irrigation Systems", marketCap:"~$5.5B", pe:"~25x", evEbitda:"~14x", drawdown:"~20%", de:"~0.58x", fcf:"Positive", classification:"Cyclical Recovery / Secular Compounder", whyBenefits:"Leading manufacturer of center-pivot irrigation systems; infrastructure & agriculture exposure.", keyRisks:"Weak domestic irrigation volumes; cyclical ag exposure.", technical:"Pulling back; balanced infrastructure/ag portfolio." },
  { sector:"Water Infrastructure", no:17, ticker:"LNN", name:"Lindsay Corporation", exchange:"NYSE", subsector:"Irrigation Systems", marketCap:"~$1.3B", pe:"~20x", evEbitda:"~12x", drawdown:"~25%", de:"~0.26x", fcf:"Strongly Positive", classification:"Cyclical Recovery", whyBenefits:"Pure-play irrigation solutions; strong international growth in water-scarce regions.", keyRisks:"Project-based revenue lumpiness; MENA geopolitical risk.", technical:"Healthy balance sheet; undervalued small-cap." },
  { sector:"Water Infrastructure", no:18, ticker:"MWA", name:"Mueller Water Products", exchange:"NYSE", subsector:"Flow Control", marketCap:"~$2.5B", pe:"~29x", evEbitda:"~15x", drawdown:"~10%", de:"~0.49x", fcf:"Strongly Positive", classification:"Secular Compounder", whyBenefits:"Provider of water infrastructure products; benefits from aging water system upgrades and drought-driven demand.", keyRisks:"Mature industry; modest growth.", technical:"Near highs; steady performer." },
  { sector:"Water Infrastructure", no:19, ticker:"WTS", name:"Watts Water Technologies", exchange:"NYSE", subsector:"Water Treatment", marketCap:"~$7B", pe:"~27x", evEbitda:"~18x", drawdown:"~15%", de:"~0.14x", fcf:"Strongly Positive", classification:"Secular Compounder", whyBenefits:"Water quality and conservation solutions; global residential, commercial, and industrial exposure.", keyRisks:"Housing market sensitivity.", technical:"Consistent compounder; high-quality balance sheet." },
  // Protein & Food Producers
  { sector:"Protein & Food Producers", no:20, ticker:"TSN", name:"Tyson Foods, Inc.", exchange:"NYSE", subsector:"Meat & Poultry", marketCap:"~$20B", pe:"~53x", evEbitda:"~12x", drawdown:">40%", de:"~0.44x", fcf:"Positive (norm.)", classification:"Cyclical Recovery", whyBenefits:"Largest U.S. protein processor; diversified across beef, chicken, pork. Benefits from rising protein demand and pricing power.", keyRisks:"Margin pressure from livestock costs; cyclical earnings.", technical:"Deeply out-of-favor; DCF suggests 39% undervaluation." },
  { sector:"Protein & Food Producers", no:21, ticker:"PPC", name:"Pilgrim's Pride Corp.", exchange:"NASDAQ", subsector:"Poultry", marketCap:"~$10B", pe:"~7.5x", evEbitda:"~6x", drawdown:"~30%", de:"~0.55x", fcf:"Strongly Positive", classification:"Cyclical Recovery / Commodity Beta", whyBenefits:"Leading poultry producer; benefits from shift toward lower-cost protein. Strong foodservice demand.", keyRisks:"Commodity input costs; avian flu risk.", technical:"Attractive valuation; steady margin profile." },
  { sector:"Protein & Food Producers", no:22, ticker:"HRL", name:"Hormel Foods Corp.", exchange:"NYSE", subsector:"Packaged Food / Protein", marketCap:"~$10B", pe:"~27.6x", evEbitda:"~14x", drawdown:"~35%", de:"~0.50x", fcf:"Positive", classification:"Secular Compounder", whyBenefits:"Diversified protein and branded foods; strong pricing power and inflation pass-through. Organic growth improving.", keyRisks:"Rich valuation vs. peers; slow growth.", technical:"Pulling back to value zone; Barclays maintains Overweight." },
  { sector:"Protein & Food Producers", no:23, ticker:"CAG", name:"Conagra Brands, Inc.", exchange:"NYSE", subsector:"Pantry Staples", marketCap:"~$13B", pe:"~8.7x", evEbitda:"~10x", drawdown:">40%", de:"~1.5x", fcf:"Strongly Positive", classification:"Deep Value / Crisis Hedge", whyBenefits:"Leading packaged food brand with pricing power; benefits from food-at-home demand during crises.", keyRisks:"High debt; tariff exposure; volume pressure.", technical:"Deep value in consumer staples; high dividend yield." },
  { sector:"Protein & Food Producers", no:24, ticker:"CALM", name:"Cal-Maine Foods, Inc.", exchange:"NASDAQ", subsector:"Eggs & Feed", marketCap:"~$5.2B", pe:"~3.3x", evEbitda:"~2.5x", drawdown:">35%", de:"~0.05x", fcf:"Strongly Positive", classification:"Deep Value / Crisis Hedge", whyBenefits:"Largest U.S. egg producer; direct beneficiary of protein inflation and supply shocks (avian flu). DCF implies 68-70% undervaluation.", keyRisks:"Egg price volatility; disease risk.", technical:"Extremely undervalued on earnings; high-quality balance sheet." },
];

const AGRI_ETFS = [
  { ticker:"DBA",  name:"Invesco DB Agriculture Fund",            exchange:"NYSE Arca", focus:"Broad agricultural commodities (corn, soybeans, wheat, livestock, softs)", expense:"0.85%", whyBenefits:"Direct play on rising food commodity prices; diversified across grains, proteins, and softs." },
  { ticker:"MOO",  name:"VanEck Agribusiness ETF",                exchange:"NYSE Arca", focus:"Global agribusiness equities (chemicals, seeds, equipment, livestock)",        expense:"0.53%", whyBenefits:"Diversified equity exposure to the entire agricultural value chain." },
  { ticker:"VEGI", name:"iShares MSCI Agriculture Producers ETF", exchange:"NYSE Arca", focus:"Global agricultural producers",                                                expense:"0.39%", whyBenefits:"Targeted exposure to companies that produce agricultural commodities and inputs." },
  { ticker:"USAG", name:"United States Agriculture Index ETF",    exchange:"NYSE Arca", focus:"U.S. agricultural commodities futures",                                         expense:"0.75%", whyBenefits:"Pure-play on U.S. agricultural commodity prices." },
];

const SENSITIVITY_MAP = [
  { driver:"Fertilizer Shortages", tickers:["MOS","CF","NTR","ICL"] },
  { driver:"Grain Inflation",       tickers:["BG","ADM","INGR","DBA","MOO"] },
  { driver:"Drought",               tickers:["LNN","VMI","XYL","FPI","LAND"] },
  { driver:"Water Scarcity",        tickers:["XYL","WTS","MWA","LNN"] },
  { driver:"Protein Inflation",     tickers:["CALM","TSN","PPC","HRL"] },
  { driver:"Export Restrictions",   tickers:["BG","ADM","NTR","MOS"] },
];

// ─── Agri Research Render ───────────────────────────────────────────────────

let selectedAgriTicker = null;

function fcfClass(fcf) {
  if (!fcf) return "";
  const f = fcf.toLowerCase();
  if (f.includes("strongly")) return "fcf-strongly";
  if (f.includes("negative")) return "fcf-negative";
  if (f.includes("positive")) return "fcf-positive";
  return "";
}

function renderAgriDetail(stock) {
  selectedAgriTicker = stock.ticker;
  const detail = document.querySelector("#agriDetail");
  detail.classList.remove("hidden");
  agriView.classList.add("with-detail");
  document.querySelector("#agriDetailTicker").textContent = `${stock.ticker} — ${stock.name}`;
  const badge = document.querySelector("#agriDetailClass");
  badge.textContent = stock.classification;
  // Color badge by classification type
  badge.className = "badge";
  if (stock.classification.includes("Deep Value")) badge.classList.add("badge-red");
  else if (stock.classification.includes("Secular")) badge.classList.add("badge-green");
  else if (stock.classification.includes("Cyclical")) badge.classList.add("badge-amber");
  document.querySelector("#agriWhyBenefits").textContent = stock.whyBenefits;
  document.querySelector("#agriKeyRisks").textContent = stock.keyRisks;
  document.querySelector("#agriTechnical").textContent = stock.technical;
  // Highlight active row
  document.querySelectorAll("#agriTable tbody tr.data-row").forEach(r => {
    r.classList.toggle("row-selected", r.dataset.ticker === stock.ticker);
  });
}

function fmtPrice(p) {
  if (p == null || isNaN(p)) return "–";
  return p >= 100 ? p.toFixed(2) : p.toFixed(2);
}

function fmtChg(c) {
  if (c == null || isNaN(c)) return "–";
  const sign = c > 0 ? "+" : "";
  return `${sign}${c.toFixed(2)}%`;
}

function renderAgriView() {
  const live = window.agriData || {};

  // ── ETF table ──
  document.querySelector("#agriEtfTable tbody").innerHTML = AGRI_ETFS.map(e => {
    const d = live[e.ticker] || {};
    const chgCls = d.chg > 0 ? "positive" : d.chg < 0 ? "negative" : "";
    return `
      <tr>
        <td><strong>${e.ticker}</strong></td>
        <td class="mono">${d.price != null ? fmtPrice(d.price) : "–"}</td>
        <td class="mono ${chgCls}">${d.chg != null ? fmtChg(d.chg) : "–"}</td>
        <td>${e.name}</td>
        <td class="muted">${e.exchange}</td>
        <td class="agri-focus-cell">${e.focus}</td>
        <td class="mono muted">${e.expense}</td>
      </tr>
    `;
  }).join("");

  // ── Stock table ──
  const sectors = [...new Set(AGRI_STOCKS.map(s => s.sector))];
  const tbody = document.querySelector("#agriTable tbody");
  tbody.innerHTML = sectors.map(sector => {
    const rows = AGRI_STOCKS.filter(s => s.sector === sector);
    const sectorRow = `<tr class="section-row"><td colspan="14">${sector}</td></tr>`;
    const dataRows = rows.map(s => {
      const d = live[s.ticker] || {};
      const chgCls = d.chg > 0 ? "positive" : d.chg < 0 ? "negative" : "";
      const mktCap   = d.marketCap  || s.marketCap;
      const pe       = d.pe         || s.pe;
      const evEbitda = d.evEbitda   || s.evEbitda;
      const drawdown = d.drawdown   || s.drawdown;
      const de       = d.de         || s.de;
      const ddClass  = drawdown && (drawdown.startsWith("-") || drawdown.startsWith(">") || parseFloat(drawdown) < -10) ? "text-red" : "";
      return `
        <tr class="data-row" data-ticker="${s.ticker}">
          <td class="mono muted">${s.no}</td>
          <td><strong>${s.ticker}</strong></td>
          <td class="mono">${d.price != null ? fmtPrice(d.price) : "–"}</td>
          <td class="mono ${chgCls}">${d.chg != null ? fmtChg(d.chg) : "–"}</td>
          <td>${s.name}</td>
          <td class="muted">${s.exchange}</td>
          <td class="muted agri-subsector">${s.subsector}</td>
          <td class="mono">${mktCap}</td>
          <td class="mono">${pe}</td>
          <td class="mono">${evEbitda}</td>
          <td class="mono ${ddClass}">${drawdown}</td>
          <td class="mono">${de}</td>
          <td class="mono ${fcfClass(s.fcf)}">${s.fcf}</td>
          <td><span class="agri-class-badge">${s.classification}</span></td>
        </tr>
      `;
    }).join("");
    return sectorRow + dataRows;
  }).join("");

  // Row click → detail
  tbody.querySelectorAll("tr.data-row").forEach(row => {
    row.addEventListener("click", () => {
      const stock = AGRI_STOCKS.find(s => s.ticker === row.dataset.ticker);
      if (stock) renderAgriDetail(stock);
    });
  });

  // ── Sensitivity Map ──
  document.querySelector("#sensitivityMap").innerHTML = SENSITIVITY_MAP.map(item => `
    <div class="sensitivity-card">
      <h5>${item.driver}</h5>
      <div class="sensitivity-tickers">
        ${item.tickers.map(t => `<span class="sensitivity-ticker">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");

  // Re-apply selection if any
  if (selectedAgriTicker) {
    const stock = AGRI_STOCKS.find(s => s.ticker === selectedAgriTicker);
    if (stock) {
      document.querySelectorAll("#agriTable tbody tr.data-row").forEach(r => {
        r.classList.toggle("row-selected", r.dataset.ticker === selectedAgriTicker);
      });
    }
  }
}

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderTable();
  renderAnalysisPanels();
});

phaseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    phaseButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    phaseFilter = button.dataset.phase;
    renderTable();
    renderAnalysisPanels();
  });
});


viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setView(button.dataset.view);
    renderTable();
    renderDetail();
  });
});

setView(activeView);
renderTable();
renderDetail();
renderAnalysisPanels();
