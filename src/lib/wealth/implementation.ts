// Implementation layer — turns the computed plan into an actionable
// portfolio: a target allocation, fund-category buckets with rupee amounts,
// and a blended expected-return range. Category-level (not scheme-level) by
// design — this is a planning aid, not investment advice.

import type { ComputedPlan, Profile } from "./types";

export interface FundBucket {
  key: string;
  label: string;
  role: string;
  target_pct: number;        // % of the new monthly investment
  monthly_amount: number;    // ₹ / month
  expected_xirr: [number, number];
  examples: string;          // category names, not specific schemes
}

export interface ImplementationPlan {
  allocation: { equity: number; debt: number; gold: number };
  buckets: FundBucket[];
  expected_xirr: { low: number; high: number };
  monthly_investment: number;
  gap_weighted_years: number;
}

/** Portfolio-level equity weight for a blended horizon (slightly more conservative than a single goal). */
function equityWeight(years: number): number {
  if (years < 3) return 0.20;
  if (years < 6) return 0.45;
  if (years < 10) return 0.65;
  return 0.75;
}

export function buildImplementation(plan: ComputedPlan, profile: Profile): ImplementationPlan {
  // 1) total NEW money to deploy each month across goals + retirement + emergency
  const emergencyMonthly = plan.emergencyFundDeficit > 0 ? plan.emergencyFundDeficit / 12 : 0;
  const monthlyInvestment =
    plan.goalFunding.totalMonthlySip + plan.retirementMonthlySipRequired + emergencyMonthly;

  // 2) blended horizon — weight each goal's horizon by its funding gap; fall back to retirement
  const gapTotal = plan.goals.reduce((s, g) => s + g.gap, 0);
  const gapWeightedYears =
    gapTotal > 0
      ? plan.goals.reduce((s, g) => s + g.gap * g.years_to_goal, 0) / gapTotal
      : plan.yearsToRetirement || 10;

  const eq = equityWeight(gapWeightedYears);
  const gold = 0.05;
  const equityPct = Math.round(eq * (1 - gold) * 100);
  const goldPct = Math.round(gold * 100);
  const debtPct = 100 - equityPct - goldPct;

  // 3) split the monthly investment into fund-category buckets
  const eqLarge = equityPct * 0.6;
  const eqMidSmall = equityPct * 0.4;
  const debtShort = debtPct * 0.5;
  const debtCorp = debtPct * 0.5;

  const buckets: FundBucket[] = [
    bucket("equity_core", "Equity — Large & Flexi cap", "Core long-term growth", eqLarge, monthlyInvestment, [11, 13], "Large-cap / Flexi-cap funds"),
    bucket("equity_growth", "Equity — Mid & Small cap", "Higher-growth satellite", eqMidSmall, monthlyInvestment, [13, 17], "Mid-cap / Small-cap funds"),
    bucket("debt_short", "Debt — Short duration", "Stability, 3–6 yr goals", debtShort, monthlyInvestment, [6.5, 7.5], "Short-duration / Banking & PSU debt"),
    bucket("debt_corp", "Debt — Corporate bond", "Accrual income", debtCorp, monthlyInvestment, [7, 8], "Corporate-bond / Target-maturity funds"),
    bucket("gold", "Gold", "Inflation hedge", goldPct, monthlyInvestment, [6, 8], "Gold ETF / Sovereign Gold Bonds"),
  ].filter(b => b.target_pct > 0.5);

  // emergency money sits in liquid, separate from the growth allocation above
  if (emergencyMonthly > 0) {
    buckets.unshift({
      key: "liquid_emergency",
      label: "Liquid — Emergency fund",
      role: "6-month safety net (build first)",
      target_pct: Math.round((emergencyMonthly / (monthlyInvestment || 1)) * 100),
      monthly_amount: Math.round(emergencyMonthly),
      expected_xirr: [5, 6.5],
      examples: "Liquid / Overnight funds",
    });
  }

  // 4) blended expected XIRR of the growth allocation
  const low = (equityPct / 100) * 11 + (debtPct / 100) * 6.8 + (goldPct / 100) * 6;
  const high = (equityPct / 100) * 15 + (debtPct / 100) * 7.8 + (goldPct / 100) * 8;

  return {
    allocation: { equity: equityPct, debt: debtPct, gold: goldPct },
    buckets,
    expected_xirr: { low: Math.round(low), high: Math.round(high) },
    monthly_investment: Math.round(monthlyInvestment),
    gap_weighted_years: Math.round(gapWeightedYears),
  };
}

function bucket(
  key: string, label: string, role: string, pct: number, monthly: number,
  xirr: [number, number], examples: string,
): FundBucket {
  return {
    key, label, role,
    target_pct: Math.round(pct),
    monthly_amount: Math.round((pct / 100) * monthly),
    expected_xirr: xirr,
    examples,
  };
}

/** Recommended vehicle label for a single goal, by its horizon. */
export function vehicleForHorizon(years: number): string {
  if (years < 3) return "Liquid / short-duration debt";
  if (years < 6) return "Hybrid / aggressive-hybrid funds";
  if (years < 10) return "Flexi-cap equity + some debt";
  return "Diversified equity (large + mid/small)";
}
