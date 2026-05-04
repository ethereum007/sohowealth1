// "Starter pack" templates — bulk-add typical income / expense / insurance / asset rows
// so users can populate the form in 30 seconds and then just edit the numbers.

import type { PlanInput } from "@/app/app/actions";

type StarterRows = Pick<PlanInput, "income" | "expenses" | "assets" | "liabilities" | "goals" | "insurance">;

export interface StarterPack {
  key: string;
  label: string;
  description: string;
  rows: StarterRows;
}

const NOW_YEAR = new Date().getFullYear();

export const STARTER_IT_PROFESSIONAL: StarterPack = {
  key: "it_professional",
  label: "IT Professional (Hyderabad / Bengaluru / Pune)",
  description: "₹1.5 L/mo salary, family of 4, modest portfolio. A starting point — edit the values.",
  rows: {
    income: [
      { source: "salary", label: "Monthly salary (post-tax)", monthly_amount: 150000 },
      { source: "bonus", label: "Annual bonus (averaged monthly)", monthly_amount: 25000 },
    ],
    expenses: [
      { category: "household",   label: "Groceries, utilities, rent/EMI", monthly_amount: 35000 },
      { category: "lifestyle",   label: "Eating out, OTT, fuel, weekend", monthly_amount: 25000 },
      { category: "dependents",  label: "Parents support / school fees",  monthly_amount: 20000 },
      { category: "insurance",   label: "Premiums (avg)",                 monthly_amount: 3000 },
    ],
    assets: [
      { asset_class: "liquid",      description: "Savings account",       current_value: 200000, notes: null },
      { asset_class: "debt",        description: "EPF balance",           current_value: 800000, notes: null },
      { asset_class: "equity",      description: "Equity mutual funds",   current_value: 1500000, notes: null },
      { asset_class: "gold",        description: "Gold (physical + SGB)", current_value: 500000, notes: null },
    ],
    liabilities: [],
    goals: [],
    insurance: [
      { policy_type: "term_life", provider: null, cover_amount: 5000000,  annual_premium: 12000, notes: null },
      { policy_type: "health",    provider: null, cover_amount: 1000000,  annual_premium: 18000, notes: null },
    ],
  },
};

export const STARTER_BUSINESS_OWNER: StarterPack = {
  key: "business_owner",
  label: "Business Owner / Founder",
  description: "Variable income, lumpy bonuses, larger asset base. A starting point.",
  rows: {
    income: [
      { source: "business", label: "Business drawings (monthly avg)", monthly_amount: 300000 },
      { source: "rental",   label: "Rental income (if any)",          monthly_amount: 0 },
    ],
    expenses: [
      { category: "household",  label: "Household running cost",           monthly_amount: 60000 },
      { category: "lifestyle",  label: "Travel, dining, hobbies",          monthly_amount: 50000 },
      { category: "dependents", label: "Children education / dependents",  monthly_amount: 40000 },
      { category: "insurance",  label: "Premiums (avg)",                   monthly_amount: 8000 },
    ],
    assets: [
      { asset_class: "liquid",      description: "Cash + savings + sweep-in", current_value: 1000000, notes: null },
      { asset_class: "debt",        description: "FDs + bonds",              current_value: 3000000, notes: null },
      { asset_class: "equity",      description: "Stocks + equity MFs",      current_value: 5000000, notes: null },
      { asset_class: "real_estate", description: "Self-occupied home",       current_value: 25000000, notes: null },
      { asset_class: "gold",        description: "Gold + jewellery",         current_value: 2000000, notes: null },
    ],
    liabilities: [
      { loan_type: "home", outstanding_amount: 5000000, emi_monthly: 50000, interest_rate: 8.5, notes: null },
    ],
    goals: [],
    insurance: [
      { policy_type: "term_life",        provider: null, cover_amount: 20000000, annual_premium: 45000, notes: null },
      { policy_type: "health",           provider: null, cover_amount: 2500000,  annual_premium: 35000, notes: null },
      { policy_type: "critical_illness", provider: null, cover_amount: 2500000,  annual_premium: 12000, notes: null },
    ],
  },
};

export const STARTER_NRI: StarterPack = {
  key: "nri",
  label: "NRI — Returning / Resident-NRI",
  description: "USD-denominated income, India + global assets. A starting point.",
  rows: {
    income: [
      { source: "salary", label: "Salary (₹-equivalent monthly)", monthly_amount: 600000 },
    ],
    expenses: [
      { category: "household", label: "India household / family",     monthly_amount: 50000 },
      { category: "lifestyle", label: "Overseas living + lifestyle",  monthly_amount: 200000 },
      { category: "insurance", label: "Premiums",                     monthly_amount: 5000 },
    ],
    assets: [
      { asset_class: "liquid",      description: "NRE / NRO savings",        current_value: 2000000, notes: null },
      { asset_class: "debt",        description: "NRE FDs + bonds",          current_value: 5000000, notes: null },
      { asset_class: "equity",      description: "Indian + global equities", current_value: 10000000, notes: null },
      { asset_class: "real_estate", description: "Indian real estate",       current_value: 30000000, notes: null },
    ],
    liabilities: [],
    goals: [],
    insurance: [
      { policy_type: "term_life", provider: null, cover_amount: 30000000, annual_premium: 60000, notes: null },
      { policy_type: "health",    provider: null, cover_amount: 5000000,  annual_premium: 50000, notes: null },
    ],
  },
};

export const STARTER_PACKS = [STARTER_IT_PROFESSIONAL, STARTER_BUSINESS_OWNER, STARTER_NRI];
