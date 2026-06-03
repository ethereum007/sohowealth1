export type PmsPerformancePeriod = "1 Month" | "3 Months" | "6 Months";

export type PmsPerformanceLeader = {
  rank: number;
  period: PmsPerformancePeriod;
  provider: string;
  strategyName: string;
  strategy: string;
  serviceType: string;
  returnPct: number;
  aumCr: number;
  oneYearPct: number | null;
  iaInsightUrl: string;
};

export type PmsPerformanceSourceRow = {
  provider: string;
  strategyName: string;
  strategy: string;
  serviceType: string;
  aumCr: number;
  oneMonthPct: number;
  threeMonthsPct: number;
  sixMonthsPct: number;
  oneYearPct: number | null;
  iaInsightUrl: string;
};

export const pmsPerformanceMeta = {
  asOnDate: "31 May 2026",
  downloadedOn: "2 June 2026",
  sourceName: "APMI IA Performance Report",
  sourceUrl: "https://www.apmiindia.org/apmi/welcomeiaperformance.htm?action=PMSmenu",
  providerCount: 498,
  investmentApproachCount: 1434,
  rankedStrategyCount: 38,
};

export const pmsPerformanceRows: PmsPerformanceSourceRow[] = [
  { provider: "Ghalla Bhansali Stock Brokers Pvt Ltd", strategyName: "KINETIC", strategy: "Equity", serviceType: "Discretionary", aumCr: 83.03, oneMonthPct: 13.89, threeMonthsPct: 20.84, sixMonthsPct: 11.81, oneYearPct: 3.38, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1392" },
  { provider: "Ghalla Bhansali Stock Brokers Pvt Ltd", strategyName: "ACTIVE", strategy: "Equity", serviceType: "Discretionary", aumCr: 9.38, oneMonthPct: 13.12, threeMonthsPct: 17.92, sixMonthsPct: 1.96, oneYearPct: 0.58, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1380" },
  { provider: "Ghalla Bhansali Stock Brokers Pvt Ltd", strategyName: "UNIQUE", strategy: "Equity", serviceType: "Discretionary", aumCr: 18.79, oneMonthPct: 12.96, threeMonthsPct: 18.28, sixMonthsPct: 2.66, oneYearPct: 1.4, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1405" },
  { provider: "Ghalla Bhansali Stock Brokers Pvt Ltd", strategyName: "DISCOVERY", strategy: "Equity", serviceType: "Discretionary", aumCr: 18.79, oneMonthPct: 12.96, threeMonthsPct: 18.28, sixMonthsPct: 2.66, oneYearPct: 1.4, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1383" },
  { provider: "Ghalla Bhansali Stock Brokers Pvt Ltd", strategyName: "RAW PEARL", strategy: "Equity", serviceType: "Discretionary", aumCr: 15.67, oneMonthPct: 12.94, threeMonthsPct: 18.57, sixMonthsPct: 1.84, oneYearPct: 1.14, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1399" },
  { provider: "Ghalla Bhansali Stock Brokers Pvt Ltd", strategyName: "IMPERIAL INDIA FOCUSED EQUITY", strategy: "Equity", serviceType: "Discretionary", aumCr: 28.52, oneMonthPct: 12.36, threeMonthsPct: 16.32, sixMonthsPct: 4.09, oneYearPct: 1.56, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1387" },
  { provider: "Ghalla Bhansali Stock Brokers Pvt Ltd", strategyName: "HIGH RISER", strategy: "Equity", serviceType: "Discretionary", aumCr: 21.09, oneMonthPct: 12.14, threeMonthsPct: 18.29, sixMonthsPct: 10.09, oneYearPct: 4.12, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1386" },
  { provider: "Ghalla Bhansali Stock Brokers Pvt Ltd", strategyName: "PREMIER", strategy: "Equity", serviceType: "Discretionary", aumCr: 4.27, oneMonthPct: 11.68, threeMonthsPct: 16.4, sixMonthsPct: 0.08, oneYearPct: -1.91, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1397" },
  { provider: "Ghalla Bhansali Stock Brokers Pvt Ltd", strategyName: "GROWTH", strategy: "Equity", serviceType: "Discretionary", aumCr: 20.8, oneMonthPct: 9.43, threeMonthsPct: 16.81, sixMonthsPct: 10.18, oneYearPct: 3.34, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1385" },
  { provider: "Ghalla Bhansali Stock Brokers Pvt Ltd", strategyName: "JEWEL", strategy: "Equity", serviceType: "Discretionary", aumCr: 40.88, oneMonthPct: 9.13, threeMonthsPct: 12.64, sixMonthsPct: -2.26, oneYearPct: -3.85, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1390" },
  { provider: "Ghalla Bhansali Stock Brokers Pvt Ltd", strategyName: "LEAPFROG", strategy: "Equity", serviceType: "Discretionary", aumCr: 44.8, oneMonthPct: 7.09, threeMonthsPct: 9.18, sixMonthsPct: -3.55, oneYearPct: -8.03, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1550" },
  { provider: "Ohm Portfolio Equi Research Private Limited", strategyName: "Ohm Growth", strategy: "Equity", serviceType: "Discretionary", aumCr: 686.95, oneMonthPct: 6.87, threeMonthsPct: 14.84, sixMonthsPct: 11.12, oneYearPct: 15.57, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=642" },
  { provider: "Ghalla Bhansali Stock Brokers Pvt Ltd", strategyName: "MAJESTIC", strategy: "Equity", serviceType: "Discretionary", aumCr: 13.06, oneMonthPct: 6.87, threeMonthsPct: 12.93, sixMonthsPct: -0.35, oneYearPct: -2.18, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1657" },
  { provider: "Ghalla Bhansali Stock Brokers Pvt Ltd", strategyName: "WHITE TRUFFLE", strategy: "Equity", serviceType: "Discretionary", aumCr: 22.77, oneMonthPct: 5.71, threeMonthsPct: 12.25, sixMonthsPct: 3.98, oneYearPct: 14.19, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1406" },
  { provider: "Ghalla Bhansali Stock Brokers Pvt Ltd", strategyName: "NUCLEUS", strategy: "Equity", serviceType: "Discretionary", aumCr: 64.45, oneMonthPct: 5.56, threeMonthsPct: 13.59, sixMonthsPct: 2.19, oneYearPct: -6.66, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1737" },
  { provider: "Lakewater Advisors Private Limited", strategyName: "India Growth", strategy: "Equity", serviceType: "Discretionary", aumCr: 32.59, oneMonthPct: 4.31, threeMonthsPct: 7.85, sixMonthsPct: 2.71, oneYearPct: 7.43, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=158" },
  { provider: "ESCORP ASSET MANAGEMENT LIMITED", strategyName: "ESCORP ASSET MANAGEMENT LTD", strategy: "Equity", serviceType: "Discretionary", aumCr: 22.8, oneMonthPct: 3.73, threeMonthsPct: 8.86, sixMonthsPct: 8.88, oneYearPct: 13.59, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1933" },
  { provider: "Revelation Portfolio Management Pvt Ltd", strategyName: "Revelation India Opportunities Portfolio I", strategy: "Equity", serviceType: "Discretionary", aumCr: 117.42, oneMonthPct: 3.03, threeMonthsPct: 3.4, sixMonthsPct: -0.83, oneYearPct: -0.81, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1023" },
  { provider: "PRP Edge Wealth Pvt Ltd", strategyName: "AlphaaMoney Equity+ Portfolio", strategy: "Equity", serviceType: "Discretionary", aumCr: 1.35, oneMonthPct: 2.75, threeMonthsPct: 5.17, sixMonthsPct: 4.37, oneYearPct: 18.87, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1425" },
  { provider: "Ohm Portfolio Equi Research Private Limited", strategyName: "Ohm Absolute", strategy: "Equity", serviceType: "Discretionary", aumCr: 45.34, oneMonthPct: 2.55, threeMonthsPct: 5.24, sixMonthsPct: -2.5, oneYearPct: -1.18, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=636" },
  { provider: "Fractal Capital Investments Llp", strategyName: "FCI LLP Wealth Optimizer II", strategy: "Equity", serviceType: "Discretionary", aumCr: 18.49, oneMonthPct: 1.86, threeMonthsPct: -1.81, sixMonthsPct: 7.62, oneYearPct: 25.7, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=830" },
  { provider: "Ghalla Bhansali Stock Brokers Pvt Ltd", strategyName: "OPULENCE", strategy: "Equity", serviceType: "Discretionary", aumCr: 75, oneMonthPct: 1.57, threeMonthsPct: 10.67, sixMonthsPct: -9.47, oneYearPct: -2.61, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1911" },
  { provider: "Revelation Portfolio Management Pvt Ltd", strategyName: "Revelation India Opportunities Portfolio II", strategy: "Equity", serviceType: "Discretionary", aumCr: 100.37, oneMonthPct: 1.52, threeMonthsPct: 3.45, sixMonthsPct: -2.26, oneYearPct: -0.34, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1024" },
  { provider: "Ghalla Bhansali Stock Brokers Pvt Ltd", strategyName: "FOCUSSED MULTICAP", strategy: "Equity", serviceType: "Discretionary", aumCr: 21.88, oneMonthPct: 1.24, threeMonthsPct: -0.1, sixMonthsPct: -3.83, oneYearPct: -1.61, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1384" },
  { provider: "Ghalla Bhansali Stock Brokers Pvt Ltd", strategyName: "ALPHA STAR", strategy: "Equity", serviceType: "Discretionary", aumCr: 11.19, oneMonthPct: 1, threeMonthsPct: 1.41, sixMonthsPct: -1.73, oneYearPct: -3.17, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1381" },
  { provider: "Fractal Capital Investments Llp", strategyName: "FCI LLP Opportunities", strategy: "Equity", serviceType: "Discretionary", aumCr: 34.25, oneMonthPct: 0.71, threeMonthsPct: 2.01, sixMonthsPct: -9.2, oneYearPct: -6.57, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=826" },
  { provider: "PRP Edge Wealth Pvt Ltd", strategyName: "Alphaa MPT Plus Fund", strategy: "Equity", serviceType: "Discretionary", aumCr: 17.04, oneMonthPct: 0.25, threeMonthsPct: -1.33, sixMonthsPct: -4.81, oneYearPct: 2.04, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1427" },
  { provider: "Fractal Capital Investments Llp", strategyName: "FCI LLP Wealth Builder", strategy: "Equity", serviceType: "Discretionary", aumCr: 44.68, oneMonthPct: -0.09, threeMonthsPct: -2.09, sixMonthsPct: -7.89, oneYearPct: -6.96, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=825" },
  { provider: "PRP Edge Wealth Pvt Ltd", strategyName: "Alphaa Better Risk Reward 30 Stocks Portfolio", strategy: "Equity", serviceType: "Discretionary", aumCr: 7.07, oneMonthPct: -0.96, threeMonthsPct: -7.23, sixMonthsPct: -12.83, oneYearPct: -7.98, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1426" },
  { provider: "KB Capital Markets Pvt. Ltd.", strategyName: "Concentrated Diversified Equity", strategy: "Equity", serviceType: "Discretionary", aumCr: 1.98, oneMonthPct: -1.25, threeMonthsPct: -3.83, sixMonthsPct: -8.3, oneYearPct: -4.25, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1808" },
  { provider: "Ghalla Bhansali Stock Brokers Pvt Ltd", strategyName: "QUANTFIN GROWTH", strategy: "Equity", serviceType: "Discretionary", aumCr: 3.41, oneMonthPct: -1.26, threeMonthsPct: -4.85, sixMonthsPct: -7.45, oneYearPct: -1.73, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1398" },
  { provider: "KB Capital Markets Pvt. Ltd.", strategyName: "Diversified Equity Portfolio", strategy: "Equity", serviceType: "Discretionary", aumCr: 311.19, oneMonthPct: -1.4, threeMonthsPct: -4.24, sixMonthsPct: -8.68, oneYearPct: -4.49, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=177" },
  { provider: "T Ram Financial Services Private Limited", strategyName: "BLUECHIP", strategy: "Equity", serviceType: "Discretionary", aumCr: 238.45, oneMonthPct: -1.61, threeMonthsPct: -7.07, sixMonthsPct: -10.85, oneYearPct: -6.43, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1244" },
  { provider: "PRP Edge Wealth Pvt Ltd", strategyName: "Alphaa Focused Small-Cap Portfolio", strategy: "Equity", serviceType: "Discretionary", aumCr: 15.01, oneMonthPct: -1.7, threeMonthsPct: 1.66, sixMonthsPct: -4.12, oneYearPct: -6.51, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1424" },
  { provider: "PRP Edge Wealth Pvt Ltd", strategyName: "Alphaa factor Investing Fund", strategy: "Equity", serviceType: "Discretionary", aumCr: 24.37, oneMonthPct: -2.06, threeMonthsPct: -6.38, sixMonthsPct: -10.01, oneYearPct: -4.43, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1734" },
  { provider: "PRP Edge Wealth Pvt Ltd", strategyName: "Alphaa factor Investing Fund-ND", strategy: "Equity", serviceType: "Non Discretionary", aumCr: 0.64, oneMonthPct: 13.56, threeMonthsPct: 16.87, sixMonthsPct: 13.38, oneYearPct: null, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=2208" },
  { provider: "Fractal Capital Investments Llp", strategyName: "FCI LLP Non-Discretionary PMS", strategy: "Equity", serviceType: "Non Discretionary", aumCr: 10.94, oneMonthPct: -2.97, threeMonthsPct: -2.35, sixMonthsPct: -18.76, oneYearPct: -30.78, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=831" },
  { provider: "Fractal Capital Investments Llp", strategyName: "FCI LLP Wealth Optimizer", strategy: "Debt", serviceType: "Discretionary", aumCr: 11.01, oneMonthPct: 0.36, threeMonthsPct: 1.25, sixMonthsPct: 3.48, oneYearPct: 7.48, iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=829" },
];

export const pmsPerformanceLeaders: Record<PmsPerformancePeriod, PmsPerformanceLeader[]> = {
  "1 Month": [
    {
      rank: 1,
      period: "1 Month",
      provider: "Ghalla Bhansali Stock Brokers Pvt Ltd",
      strategyName: "KINETIC",
      strategy: "Equity",
      serviceType: "Discretionary",
      returnPct: 13.89,
      aumCr: 83.03,
      oneYearPct: 3.38,
      iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1392",
    },
    {
      rank: 2,
      period: "1 Month",
      provider: "PRP Edge Wealth Pvt Ltd",
      strategyName: "Alphaa factor Investing Fund-ND",
      strategy: "Equity",
      serviceType: "Non Discretionary",
      returnPct: 13.56,
      aumCr: 0.64,
      oneYearPct: null,
      iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=2208",
    },
    {
      rank: 3,
      period: "1 Month",
      provider: "Ghalla Bhansali Stock Brokers Pvt Ltd",
      strategyName: "ACTIVE",
      strategy: "Equity",
      serviceType: "Discretionary",
      returnPct: 13.12,
      aumCr: 9.38,
      oneYearPct: 0.58,
      iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1380",
    },
    {
      rank: 4,
      period: "1 Month",
      provider: "Ghalla Bhansali Stock Brokers Pvt Ltd",
      strategyName: "UNIQUE",
      strategy: "Equity",
      serviceType: "Discretionary",
      returnPct: 12.96,
      aumCr: 18.79,
      oneYearPct: 1.4,
      iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1405",
    },
    {
      rank: 5,
      period: "1 Month",
      provider: "Ghalla Bhansali Stock Brokers Pvt Ltd",
      strategyName: "DISCOVERY",
      strategy: "Equity",
      serviceType: "Discretionary",
      returnPct: 12.96,
      aumCr: 18.79,
      oneYearPct: 1.4,
      iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1383",
    },
  ],
  "3 Months": [
    {
      rank: 1,
      period: "3 Months",
      provider: "Ghalla Bhansali Stock Brokers Pvt Ltd",
      strategyName: "KINETIC",
      strategy: "Equity",
      serviceType: "Discretionary",
      returnPct: 20.84,
      aumCr: 83.03,
      oneYearPct: 3.38,
      iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1392",
    },
    {
      rank: 2,
      period: "3 Months",
      provider: "Ghalla Bhansali Stock Brokers Pvt Ltd",
      strategyName: "RAW PEARL",
      strategy: "Equity",
      serviceType: "Discretionary",
      returnPct: 18.57,
      aumCr: 15.67,
      oneYearPct: 1.14,
      iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1399",
    },
    {
      rank: 3,
      period: "3 Months",
      provider: "Ghalla Bhansali Stock Brokers Pvt Ltd",
      strategyName: "HIGH RISER",
      strategy: "Equity",
      serviceType: "Discretionary",
      returnPct: 18.29,
      aumCr: 21.09,
      oneYearPct: 4.12,
      iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1386",
    },
    {
      rank: 4,
      period: "3 Months",
      provider: "Ghalla Bhansali Stock Brokers Pvt Ltd",
      strategyName: "UNIQUE",
      strategy: "Equity",
      serviceType: "Discretionary",
      returnPct: 18.28,
      aumCr: 18.79,
      oneYearPct: 1.4,
      iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1405",
    },
    {
      rank: 5,
      period: "3 Months",
      provider: "Ghalla Bhansali Stock Brokers Pvt Ltd",
      strategyName: "DISCOVERY",
      strategy: "Equity",
      serviceType: "Discretionary",
      returnPct: 18.28,
      aumCr: 18.79,
      oneYearPct: 1.4,
      iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1383",
    },
  ],
  "6 Months": [
    {
      rank: 1,
      period: "6 Months",
      provider: "PRP Edge Wealth Pvt Ltd",
      strategyName: "Alphaa factor Investing Fund-ND",
      strategy: "Equity",
      serviceType: "Non Discretionary",
      returnPct: 13.38,
      aumCr: 0.64,
      oneYearPct: null,
      iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=2208",
    },
    {
      rank: 2,
      period: "6 Months",
      provider: "Ghalla Bhansali Stock Brokers Pvt Ltd",
      strategyName: "KINETIC",
      strategy: "Equity",
      serviceType: "Discretionary",
      returnPct: 11.81,
      aumCr: 83.03,
      oneYearPct: 3.38,
      iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1392",
    },
    {
      rank: 3,
      period: "6 Months",
      provider: "Ohm Portfolio Equi Research Private Limited",
      strategyName: "Ohm Growth",
      strategy: "Equity",
      serviceType: "Discretionary",
      returnPct: 11.12,
      aumCr: 686.95,
      oneYearPct: 15.57,
      iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=642",
    },
    {
      rank: 4,
      period: "6 Months",
      provider: "Ghalla Bhansali Stock Brokers Pvt Ltd",
      strategyName: "GROWTH",
      strategy: "Equity",
      serviceType: "Discretionary",
      returnPct: 10.18,
      aumCr: 20.8,
      oneYearPct: 3.34,
      iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1385",
    },
    {
      rank: 5,
      period: "6 Months",
      provider: "Ghalla Bhansali Stock Brokers Pvt Ltd",
      strategyName: "HIGH RISER",
      strategy: "Equity",
      serviceType: "Discretionary",
      returnPct: 10.09,
      aumCr: 21.09,
      oneYearPct: 4.12,
      iaInsightUrl: "https://www.apmiindia.org/apmi/IaInsight.htm?IAID=1386",
    },
  ],
};
