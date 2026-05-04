// Domain types for Wealth Review — mirror the public.* tables.

export type Relationship = "self" | "spouse" | "son" | "daughter" | "parent" | "sibling" | "other";
export type IncomeSource = "salary" | "bonus" | "rental" | "business" | "other";
export type ExpenseCategory = "household" | "lifestyle" | "dependents" | "insurance" | "investments" | "other";
export type AssetClass = "liquid" | "debt" | "equity" | "gold" | "real_estate" | "personal";
export type LoanType = "home" | "car" | "personal" | "credit_card" | "other";
export type GoalType = "emergency" | "education" | "marriage" | "house" | "car" | "vacation" | "retirement" | "other";
export type Priority = "high" | "medium" | "low";
export type PolicyType = "term_life" | "health" | "motor" | "critical_illness" | "personal_accident";
export type HoldingType = "equity_mf" | "debt_mf" | "direct_equity" | "bond" | "fd" | "gold" | "crypto";

export interface Profile {
  id: string;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  date_of_birth: string | null;
  retirement_age: number;
  city: string | null;
  occupation: string | null;
  inflation_rate: number;
  education_inflation: number;
  income_growth_rate: number;
  equity_returns: number;
  debt_returns: number;
  gold_returns: number;
  real_estate_returns: number;
  home_loan_rate: number;
  onboarded_at: string | null;
}

export interface FamilyMember { id: string; user_id: string; name: string; relationship: Relationship; date_of_birth: string | null; notes: string | null; }
export interface IncomeItem   { id: string; user_id: string; source: IncomeSource; label: string | null; monthly_amount: number; }
export interface ExpenseItem  { id: string; user_id: string; category: ExpenseCategory; label: string | null; monthly_amount: number; }
export interface Asset        { id: string; user_id: string; asset_class: AssetClass; description: string | null; current_value: number; notes: string | null; }
export interface Liability    { id: string; user_id: string; loan_type: LoanType; outstanding_amount: number; emi_monthly: number; interest_rate: number; notes: string | null; }
export interface Goal         { id: string; user_id: string; goal_name: string; goal_type: GoalType; target_year: number; present_value: number; inflation_rate: number; earmarked_assets: number; priority: Priority; }
export interface Insurance    { id: string; user_id: string; policy_type: PolicyType; provider: string | null; cover_amount: number; annual_premium: number; notes: string | null; }
export interface Holding      { id: string; user_id: string; holding_type: HoldingType; name: string; invested_amount: number; current_value: number; monthly_sip: number; notes: string | null; }
export interface DocumentRow  { id: string; user_id: string; doc_type: string; file_name: string; storage_path: string; file_size: number | null; uploaded_at: string; }

export interface UserData {
  profile: Profile;
  family: FamilyMember[];
  income: IncomeItem[];
  expenses: ExpenseItem[];
  assets: Asset[];
  liabilities: Liability[];
  goals: Goal[];
  insurance: Insurance[];
  holdings: Holding[];
}

// ---------- computed plan ----------
export type GoalStatus = "on_track" | "review" | "critical";

export interface ComputedGoal {
  id: string;
  goal_name: string;
  goal_type: GoalType;
  target_year: number;
  years_to_goal: number;
  present_value: number;
  future_value: number;
  earmarked_assets: number;
  earmarked_future_value: number;
  funding_pct: number;
  sip_required_monthly: number;
  status: GoalStatus;
}

export interface ComputedPlan {
  asOf: string;
  age: number;
  retirementAge: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  monthlySurplus: number;
  savingsRate: number; // %
  totalAssets: number;
  totalLiabilities: number;
  netWorth: number;
  assetAllocation: { class: AssetClass; value: number; pct: number }[];
  // life insurance via HLV
  hlvCoverRequired: number;
  existingLifeCover: number;
  investableAssets: number;
  additionalCoverRequired: number;
  recommendedTermCover: number;
  // retirement
  yearsToRetirement: number;
  postRetirementYears: number;
  annualExpensesAtRetirement: number;
  retirementCorpusRequired: number;
  retirementAssetsFV: number;
  retirementOnTrackPct: number;
  retirementMonthlySipRequired: number;
  // goals
  goals: ComputedGoal[];
  // contingency
  emergencyFundTarget: number;
  emergencyFundExisting: number;
  emergencyFundDeficit: number;
}
