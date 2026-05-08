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

const sampleRows = [
  ...sampleIndexRows,
  ...sampleEtfs.map((item) => ({ ...item, section: "ETF" })),
  ...sampleStockRows,
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
const sectionOrder = ["Index", "ETF", "Stock"];
const indexOrder = ["SP500", "GLD", "SLV", "URA", "CL"];

const tableBody = document.querySelector("#etfTable tbody");
const searchInput = document.querySelector("#searchInput");
const phaseButtons = document.querySelectorAll("[data-phase]");
const viewButtons = document.querySelectorAll("[data-view]");
const mapView = document.querySelector("#mapView");
const basketView = document.querySelector("#basketView");

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

function renderSummaryList(selector, counts, classGetter = () => "") {
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
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
      const selected = etfs.find((item) => item.symbol === selectedSymbol);
      if (selected?.section === "ETF" && selected.holdings?.length) {
        setView("basket");
      }
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

  renderSummaryList("#phaseSummary", phaseCounts, (phase) => `phase ${phaseClass(phase)}`);
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

  document.querySelector("#rsiTable tbody").innerHTML = rows
    .map((etf) => {
      const values = rsiStack(etf);
      return `
        <tr>
          <td><strong>${etf.symbol}</strong></td>
          ${values.map((value) => `<td class="${cls(value - 50)} mono">${value.toFixed(1)}</td>`).join("")}
        </tr>
      `;
    })
    .join("");

  document.querySelector("#volumeTable tbody").innerHTML = rows
    .map((etf) => {
      const volumes = rotationMetrics(etf).volumes;
      return `
        <tr>
          <td><strong>${etf.symbol}</strong></td>
          <td class="${cls(volumes[0] - 100)} mono">${pct(volumes[0])}</td>
          <td class="${cls(volumes[2] - 100)} mono">${pct(volumes[2])}</td>
          <td class="${cls(volumes[4] - 100)} mono">${pct(volumes[4])}</td>
          <td>${volumeMeaning(etf, volumes)}</td>
        </tr>
      `;
    })
    .join("");

}

function setView(view) {
  activeView = view;
  mapView.classList.toggle("hidden", view !== "map");
  basketView.classList.toggle("hidden", view !== "basket");
  viewButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
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
    const accCount = sectionEtfs.filter((item) => item.rotation.includes("Accumulation")).length;
    const threshold = section === "Stock" ? 4 : 2;
    const risk = accCount >= threshold ? "Risk On" : "Neutral";
    document.querySelector(`#${prefix}Risk`).textContent = risk;
    document.querySelector(`#${prefix}Leader`).textContent = leader?.symbol || "–";
    document.querySelector(`#${prefix}Watch`).textContent = watchCount;
  });
  document.querySelector("#asOf").textContent = window.marketDataMeta?.updatedAt
    ? `${window.marketDataMeta.source} | Updated ${window.marketDataMeta.updatedAt}`
    : "Static sample data";
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
