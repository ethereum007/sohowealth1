import "server-only";
import pmsBazaarData from "../../../data/pmsbazaar/pms_profiles_enriched_2026-07-31_scraped_2026-08-13.json";
import type { PmsPeriod, PmsRecord, PmsResearchPage } from "./research-types";

const pageSize = 25;
const periodKeys: Record<PmsPeriod, keyof PmsRecord> = {
  "1M": "return_1m", "3M": "return_3m", "6M": "return_6m", "1Y": "return_1y",
  "2Y": "return_2y", "3Y": "return_3y", "5Y": "return_5y", "10Y": "return_10y", SI: "return_since_inception",
};

const records: PmsRecord[] = pmsBazaarData.records.map((row) => ({
  amc_name: row.amc_name,
  aum_crore: row.aum_crore,
  aum_crore_detail: row.aum_crore_detail,
  benchmark: row.benchmark,
  category: row.category,
  fee_plans: row.fee_plans,
  fund_managers: row.fund_managers,
  inception_date: row.inception_date,
  inception_date_detail: row.inception_date_detail,
  investment_approach: row.investment_approach,
  investment_objective: row.investment_objective,
  minimum_investment: row.minimum_investment,
  portfolio_characteristics: row.portfolio_characteristics,
  return_10y: row.return_10y,
  return_1m: row.return_1m,
  return_1y: row.return_1y,
  return_2y: row.return_2y,
  return_3m: row.return_3m,
  return_3y: row.return_3y,
  return_5y: row.return_5y,
  return_6m: row.return_6m,
  return_since_inception: row.return_since_inception,
  strategy_display_name: row.strategy_display_name,
  strategy_url: row.strategy_url,
  top_holdings: row.top_holdings,
  top_sectors: row.top_sectors,
}));

const categories = [...new Set(records.map((row) => row.category))].sort();

function numericReturn(value: string) {
  const parsed = Number.parseFloat(value.replace("%", ""));
  return Number.isFinite(parsed) ? parsed : null;
}

export function getPmsResearchPage({
  query = "",
  category = "all",
  period = "1Y",
  page = 1,
}: {
  query?: string;
  category?: string;
  period?: PmsPeriod;
  page?: number;
} = {}): PmsResearchPage {
  const normalizedQuery = query.trim().toLowerCase();
  const key = periodKeys[period];
  const matches = records
    .map((row) => ({ row, value: numericReturn(String(row[key])) }))
    .filter(({ row, value }) => value !== null
      && (category === "all" || row.category === category)
      && (!normalizedQuery || `${row.strategy_display_name} ${row.amc_name} ${row.benchmark}`.toLowerCase().includes(normalizedQuery)))
    .sort((a, b) => (b.value ?? -Infinity) - (a.value ?? -Infinity));

  const pageCount = Math.max(1, Math.ceil(matches.length / pageSize));
  const currentPage = Math.min(Math.max(1, page), pageCount);
  const start = (currentPage - 1) * pageSize;

  return {
    records: matches.slice(start, start + pageSize).map(({ row }) => row),
    categories,
    total: matches.length,
    page: currentPage,
    pageCount,
  };
}
