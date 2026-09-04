import pmsBazaarData from "../../../data/pmsbazaar/pms_profiles_enriched_2026-07-31_scraped_2026-08-13.json";
import { PmsPerformanceExplorer, type PmsRecord } from "./PmsPerformanceExplorer";

/** Server boundary for the enriched PMS research dataset. */
export function PmsPerformanceLeadersSection() {
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

  return <PmsPerformanceExplorer records={records} />;
}
