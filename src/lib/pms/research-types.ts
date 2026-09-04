export type PmsPeriod = "1M" | "3M" | "6M" | "1Y" | "2Y" | "3Y" | "5Y" | "10Y" | "SI";

export interface PmsRecord {
  amc_name: string;
  aum_crore: string;
  aum_crore_detail: string;
  benchmark: string;
  category: string;
  fee_plans: Record<string, string>[];
  fund_managers: { name: string; role: string; bio: string }[];
  inception_date: string;
  inception_date_detail: string;
  investment_approach: string;
  investment_objective: string;
  minimum_investment: string;
  portfolio_characteristics: Record<string, string | undefined>;
  return_10y: string;
  return_1m: string;
  return_1y: string;
  return_2y: string;
  return_3m: string;
  return_3y: string;
  return_5y: string;
  return_6m: string;
  return_since_inception: string;
  strategy_display_name: string;
  strategy_url: string;
  top_holdings: { name: string; weight: string }[];
  top_sectors: { name: string; weight: string }[];
}

export interface PmsResearchPage {
  records: PmsRecord[];
  categories: string[];
  total: number;
  page: number;
  pageCount: number;
}
