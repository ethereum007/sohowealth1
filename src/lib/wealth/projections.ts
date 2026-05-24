// Multi-year cashflow projection + one-year action plan.
// Pure functions over the computed plan — no I/O.

import type { ComputedPlan, Profile, UserData } from "./types";
import type { ImplementationPlan } from "./implementation";

export interface CashflowYear {
  year: number;
  age: number;
  income: number;
  expenses: number;
  surplus: number;
  recommendedInvestment: number;
  investableSurplus: number;   // surplus left after recommended investment
  cumulativeInvested: number;
}

/**
 * Projects annual income (grown at income_growth_rate), expenses (grown at
 * inflation_rate), surplus, and the recommended annual investment — over N years.
 * Mirrors the "Five Year Cashflow Analysis" in a classic comprehensive plan.
 */
export function projectCashflows(
  data: UserData, plan: ComputedPlan, profile: Profile, years = 10,
): CashflowYear[] {
  const startYear = new Date().getFullYear();
  const incomeGrowth = profile.income_growth_rate / 100;
  const inflation = profile.inflation_rate / 100;
  const annualRecommended = plan ? (plan.goalFunding.totalMonthlySip + plan.retirementMonthlySipRequired) * 12 : 0;

  let income = plan.monthlyIncome * 12;
  let expenses = plan.monthlyExpenses * 12;
  let cumulative = 0;
  const rows: CashflowYear[] = [];

  for (let i = 0; i < years; i++) {
    const surplus = income - expenses;
    const recommended = Math.min(Math.max(surplus, 0), annualRecommended || surplus);
    cumulative += recommended;
    rows.push({
      year: startYear + i,
      age: plan.age + i,
      income: Math.round(income),
      expenses: Math.round(expenses),
      surplus: Math.round(surplus),
      recommendedInvestment: Math.round(recommended),
      investableSurplus: Math.round(surplus - recommended),
      cumulativeInvested: Math.round(cumulative),
    });
    income *= 1 + incomeGrowth;
    expenses *= 1 + inflation;
  }
  return rows;
}

// ---------------- One-year action plan ----------------

export type ActionPriority = "high" | "medium" | "low";

export interface ActionItem {
  id: string;
  category: string;
  title: string;
  detail: string;
  priority: ActionPriority;
  when: string;
}

export function buildActionPlan(
  plan: ComputedPlan, data: UserData, impl: ImplementationPlan,
): ActionItem[] {
  const items: ActionItem[] = [];
  const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

  // --- protection first ---
  if (plan.additionalCoverRequired > 0) {
    items.push({
      id: "term", category: "Protection", priority: "high", when: "Within 1 month",
      title: `Buy term life cover of ${compact(plan.recommendedTermCover)}`,
      detail: `You're under-insured by ${compact(plan.additionalCoverRequired)} on a human-life-value basis. A pure term plan is the cheapest fix (~₹25k–₹35k/yr).`,
    });
  }
  const hasHealth = data.insurance.some(p => p.policy_type === "health" && Number(p.cover_amount) > 0);
  if (!hasHealth) {
    items.push({
      id: "health", category: "Protection", priority: "high", when: "Within 1 month",
      title: "Take a family health floater of ₹25 L",
      detail: "Independent of any employer cover, so the family stays protected through job changes.",
    });
  }

  // --- emergency fund ---
  if (plan.emergencyFundDeficit > 0) {
    items.push({
      id: "emergency", category: "Contingency", priority: "high", when: "Start this month",
      title: `Build emergency fund — short by ${compact(plan.emergencyFundDeficit)}`,
      detail: `Park ${inr(plan.emergencyFundDeficit / 12)}/month in a liquid fund for 12 months to reach 6 months of expenses.`,
    });
  }

  // --- top under-funded goals by SIP need ---
  const goalActions = [...plan.goals]
    .filter(g => g.sip_required_monthly > 0)
    .sort((a, b) => b.sip_required_monthly - a.sip_required_monthly)
    .slice(0, 4);
  for (const g of goalActions) {
    items.push({
      id: `goal-${g.id}`, category: "Goals",
      priority: g.status === "critical" ? "high" : "medium",
      when: "Within 1 month",
      title: `Start ${inr(g.sip_required_monthly)}/mo SIP for ${g.goal_name}`,
      detail: `Target ${compact(g.future_value)} by ${g.target_year}. Currently ${Math.round(g.funding_pct)}% funded · invest for a ${g.years_to_goal}-yr horizon.`,
    });
  }

  // --- retirement ---
  if (plan.retirementMonthlySipRequired > 0) {
    items.push({
      id: "retirement", category: "Retirement", priority: "medium", when: "Within 1 month",
      title: `Allocate ${inr(plan.retirementMonthlySipRequired)}/mo toward retirement`,
      detail: `Corpus needed ${compact(plan.retirementCorpusRequired)} · currently ${Math.round(plan.retirementOnTrackPct)}% on track.`,
    });
  }

  // --- general housekeeping ---
  items.push(
    { id: "nominate", category: "Estate", priority: "medium", when: "Within 3 months", title: "Add nominations to every account", detail: "Bank, MF, insurance, EPF — ensures smooth transfer and avoids disputes." },
    { id: "will", category: "Estate", priority: "low", when: "Within 3 months", title: "Draft a simple Will", detail: "Even a one-page registered Will removes ambiguity for the family." },
    { id: "review", category: "Review", priority: "low", when: "Every 6 months", title: "Review the plan twice a year", detail: "Re-check goals, top-ups, and allocation as income and markets move." },
  );

  const order: Record<ActionPriority, number> = { high: 0, medium: 1, low: 2 };
  return items.sort((a, b) => order[a.priority] - order[b.priority]);
}

function compact(n: number): string {
  const abs = Math.abs(n);
  if (abs >= 1_00_00_000) return `₹${(n / 1_00_00_000).toFixed(2)} Cr`;
  if (abs >= 1_00_000) return `₹${(n / 1_00_000).toFixed(2)} L`;
  if (abs >= 1_000) return `₹${(n / 1_000).toFixed(1)} K`;
  return `₹${Math.round(n)}`;
}
