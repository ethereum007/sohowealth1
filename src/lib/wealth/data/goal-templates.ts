// Pre-filled goal templates. Users pick one → it lands in the form pre-populated.
// `auto` flag means PV/year is computed from profile (e.g. retirement = 25× annual expenses).

import type { GoalType, Priority } from "@/lib/wealth/types";

export interface GoalTemplate {
  key: string;
  label: string;
  group: "Family" | "Lifestyle" | "Self";
  goal_type: GoalType;
  /** Today's cost in ₹. Use 0 + auto:true to defer calc. */
  present_value: number;
  /** Years from now until target. */
  years_from_now: number;
  inflation_rate: number;
  priority: Priority;
  goal_name: string;
  /** If true, present_value should be auto-derived from profile data on the client. */
  auto?: "retirement_corpus" | "emergency_6m";
  hint?: string;
}

const NOW_YEAR = new Date().getFullYear();

export const GOAL_TEMPLATES: GoalTemplate[] = [
  // ----- Self -----
  {
    key: "emergency", group: "Self",
    label: "Emergency fund (6 months)",
    goal_name: "Emergency Fund",
    goal_type: "emergency",
    present_value: 0, // auto = monthly_expenses * 6
    years_from_now: 1, inflation_rate: 6, priority: "high",
    auto: "emergency_6m",
    hint: "Target = 6 months of expenses, kept in a liquid fund.",
  },
  {
    key: "retirement", group: "Self",
    label: "Retirement corpus",
    goal_name: "Retirement",
    goal_type: "retirement",
    present_value: 0, // auto = monthly_expenses * 12 * 25
    years_from_now: 23, inflation_rate: 7, priority: "high",
    auto: "retirement_corpus",
    hint: "Default = 25× annual expenses (4% safe-withdrawal rule).",
  },

  // ----- Family — Education -----
  {
    key: "ug_india", group: "Family",
    label: "Child's Undergrad — India",
    goal_name: "Child UG (India)",
    goal_type: "education",
    present_value: 1500000, years_from_now: 12, inflation_rate: 10, priority: "high",
    hint: "Typical IIT/IIM/private engg cost today.",
  },
  {
    key: "ug_abroad", group: "Family",
    label: "Child's Undergrad — Abroad (US/UK)",
    goal_name: "Child UG (Abroad)",
    goal_type: "education",
    present_value: 8000000, years_from_now: 12, inflation_rate: 10, priority: "high",
    hint: "4-year UG at US/UK university (today's cost).",
  },
  {
    key: "pg_india", group: "Family",
    label: "Child's Post-Graduation — India",
    goal_name: "Child PG (India)",
    goal_type: "education",
    present_value: 2500000, years_from_now: 16, inflation_rate: 10, priority: "high",
  },
  {
    key: "pg_abroad", group: "Family",
    label: "Child's Post-Graduation — Abroad",
    goal_name: "Child PG (Abroad)",
    goal_type: "education",
    present_value: 6000000, years_from_now: 16, inflation_rate: 10, priority: "high",
  },

  // ----- Family — Marriage -----
  {
    key: "marriage_modest", group: "Family",
    label: "Child's marriage — Modest",
    goal_name: "Child Marriage",
    goal_type: "marriage",
    present_value: 2500000, years_from_now: 22, inflation_rate: 7, priority: "medium",
  },
  {
    key: "marriage_premium", group: "Family",
    label: "Child's marriage — Premium",
    goal_name: "Child Marriage (Premium)",
    goal_type: "marriage",
    present_value: 7500000, years_from_now: 22, inflation_rate: 7, priority: "medium",
  },

  // ----- Lifestyle -----
  {
    key: "house", group: "Lifestyle",
    label: "Home purchase / upgrade",
    goal_name: "House Purchase",
    goal_type: "house",
    present_value: 15000000, years_from_now: 5, inflation_rate: 6, priority: "high",
    hint: "Today's cost of your dream 3BHK / target city.",
  },
  {
    key: "car", group: "Lifestyle",
    label: "Car upgrade",
    goal_name: "Car Purchase",
    goal_type: "car",
    present_value: 1500000, years_from_now: 4, inflation_rate: 6, priority: "medium",
  },
  {
    key: "vacation_intl", group: "Lifestyle",
    label: "International family vacation",
    goal_name: "International Vacation",
    goal_type: "vacation",
    present_value: 500000, years_from_now: 2, inflation_rate: 7, priority: "low",
    hint: "10-day Europe / SE Asia trip for 4.",
  },
  {
    key: "vacation_dom", group: "Lifestyle",
    label: "Domestic vacation (annual)",
    goal_name: "Annual Vacation",
    goal_type: "vacation",
    present_value: 200000, years_from_now: 1, inflation_rate: 7, priority: "low",
  },
  {
    key: "parents_health", group: "Family",
    label: "Aging parents — healthcare buffer",
    goal_name: "Parents Healthcare",
    goal_type: "other",
    present_value: 2500000, years_from_now: 5, inflation_rate: 10, priority: "high",
    hint: "Healthcare inflation runs at ~12% — start early.",
  },
];

export function templateToGoal(t: GoalTemplate, monthlyExpenses: number) {
  const targetYear = NOW_YEAR + t.years_from_now;
  let pv = t.present_value;
  if (t.auto === "emergency_6m") pv = (monthlyExpenses || 0) * 6;
  if (t.auto === "retirement_corpus") pv = (monthlyExpenses || 0) * 12 * 25;
  return {
    goal_name: t.goal_name,
    goal_type: t.goal_type,
    target_year: targetYear,
    present_value: pv,
    inflation_rate: t.inflation_rate,
    earmarked_assets: 0,
    priority: t.priority,
  };
}
