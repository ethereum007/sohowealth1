// Pure calculation engine. No I/O, no React.
// Input: UserData (raw from DB).  Output: ComputedPlan (drives the dashboard).

import type {
  AssetClass, ComputedGoal, ComputedPlan, GoalStatus, UserData,
} from "./types";

const MONTHS = 12;

/** Future value of a lump sum: PV * (1+r)^n  (rate as percent, e.g. 7 = 7%) */
export function futureValue(present: number, ratePct: number, years: number) {
  return present * Math.pow(1 + ratePct / 100, years);
}

/** Monthly SIP needed to reach a future value with monthly compounding. */
export function requiredMonthlySIP(targetFV: number, annualReturnPct: number, years: number) {
  if (years <= 0 || targetFV <= 0) return 0;
  const i = annualReturnPct / 100 / MONTHS;
  const n = years * MONTHS;
  if (i === 0) return targetFV / n;
  // SIP = FV * i / ((1+i)^n - 1)
  return (targetFV * i) / (Math.pow(1 + i, n) - 1);
}

/** Present value of a growing annuity (used for retirement corpus). */
export function presentValueGrowingAnnuity(payment: number, ratePct: number, growthPct: number, years: number) {
  const r = ratePct / 100;
  const g = growthPct / 100;
  if (Math.abs(r - g) < 1e-9) return payment * years;
  return (payment / (r - g)) * (1 - Math.pow((1 + g) / (1 + r), years));
}

/** Age in whole years from a date string (YYYY-MM-DD). */
export function ageFromDOB(dob: string | null, asOf = new Date()): number {
  if (!dob) return 0;
  const d = new Date(dob);
  if (isNaN(d.getTime())) return 0;
  let age = asOf.getFullYear() - d.getFullYear();
  const m = asOf.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && asOf.getDate() < d.getDate())) age--;
  return age;
}

function sum<T>(arr: T[], pick: (x: T) => number) { return arr.reduce((s, x) => s + (pick(x) || 0), 0); }

function statusFor(fundingPct: number): GoalStatus {
  if (fundingPct >= 90) return "on_track";
  if (fundingPct >= 50) return "review";
  return "critical";
}

export function computePlan(data: UserData, asOfDate = new Date()): ComputedPlan {
  const { profile, income, expenses, assets, liabilities, goals, insurance } = data;
  const currentYear = asOfDate.getFullYear();
  const age = ageFromDOB(profile.date_of_birth, asOfDate);
  const retirementAge = profile.retirement_age || 60;
  const yearsToRetirement = Math.max(0, retirementAge - age);
  const postRetirementYears = 20; // industry default

  // ---------- cash flow ----------
  const monthlyIncome   = sum(income,   x => Number(x.monthly_amount));
  const monthlyExpenses = sum(expenses, x => Number(x.monthly_amount));
  const monthlySurplus  = monthlyIncome - monthlyExpenses;
  const savingsRate     = monthlyIncome > 0 ? (monthlySurplus / monthlyIncome) * 100 : 0;

  // ---------- net worth ----------
  const totalAssets      = sum(assets,      x => Number(x.current_value));
  const totalLiabilities = sum(liabilities, x => Number(x.outstanding_amount));
  const netWorth         = totalAssets - totalLiabilities;

  const classes: AssetClass[] = ["liquid","debt","equity","gold","real_estate","personal"];
  const assetAllocation = classes.map(c => {
    const value = sum(assets.filter(a => a.asset_class === c), a => Number(a.current_value));
    return { class: c, value, pct: totalAssets > 0 ? (value / totalAssets) * 100 : 0 };
  });

  // ---------- HLV (Human Life Value) ----------
  const annualExpensesNow = monthlyExpenses * MONTHS;
  // PV of monthly expenses growing at inflation, discounted at debt return, over years to retirement
  const corpusForExpenses = presentValueGrowingAnnuity(
    annualExpensesNow,
    profile.debt_returns,
    profile.inflation_rate,
    Math.max(yearsToRetirement, 10),
  );
  const familyGoalsPV = sum(goals.filter(g => g.goal_type !== "retirement"), g => Number(g.present_value));
  const hlvCoverRequired = totalLiabilities + familyGoalsPV + corpusForExpenses;
  const existingLifeCover = sum(insurance.filter(p => p.policy_type === "term_life"), p => Number(p.cover_amount));
  // Investable assets = liquid + debt + equity + gold (not real estate / personal)
  const investableAssets = sum(
    assets.filter(a => ["liquid","debt","equity","gold"].includes(a.asset_class)),
    a => Number(a.current_value),
  );
  const additionalCoverRequired = Math.max(0, hlvCoverRequired - existingLifeCover - investableAssets);
  // Round recommendation up to nearest 25 lakh
  const recommendedTermCover = Math.ceil(additionalCoverRequired / 2_500_000) * 2_500_000;

  // ---------- retirement ----------
  const annualExpensesAtRetirement = futureValue(annualExpensesNow, profile.inflation_rate, yearsToRetirement);
  const retirementCorpusRequired = presentValueGrowingAnnuity(
    annualExpensesAtRetirement,
    profile.debt_returns,
    profile.inflation_rate,
    postRetirementYears,
  );
  // FV of investable assets at accumulation rate (blended ~10.6% — use weighted of equity/debt)
  const accumulationRate =
    investableAssets > 0
      ? (sum(assets.filter(a => a.asset_class === "equity"), a => Number(a.current_value)) * profile.equity_returns +
         sum(assets.filter(a => a.asset_class === "debt"),   a => Number(a.current_value)) * profile.debt_returns +
         sum(assets.filter(a => a.asset_class === "gold"),   a => Number(a.current_value)) * profile.gold_returns +
         sum(assets.filter(a => a.asset_class === "liquid"), a => Number(a.current_value)) * profile.debt_returns) / investableAssets
      : profile.equity_returns;
  const retirementAssetsFV = futureValue(investableAssets, accumulationRate, yearsToRetirement);
  const retirementOnTrackPct = retirementCorpusRequired > 0
    ? Math.min(100, (retirementAssetsFV / retirementCorpusRequired) * 100)
    : 0;
  const retirementGap = Math.max(0, retirementCorpusRequired - retirementAssetsFV);
  const retirementMonthlySipRequired = requiredMonthlySIP(retirementGap, accumulationRate, yearsToRetirement);

  // ---------- goals ----------
  const computedGoals: ComputedGoal[] = goals.map(g => {
    const years = Math.max(0, g.target_year - currentYear);
    const fv = futureValue(Number(g.present_value), Number(g.inflation_rate), years);
    const earmarkedFV = futureValue(Number(g.earmarked_assets), profile.equity_returns, years);
    const fundingPct = fv > 0 ? Math.min(150, (earmarkedFV / fv) * 100) : 100;
    const gap = Math.max(0, fv - earmarkedFV);
    const sip = requiredMonthlySIP(gap, profile.equity_returns, years);
    return {
      id: g.id,
      goal_name: g.goal_name,
      goal_type: g.goal_type,
      target_year: g.target_year,
      years_to_goal: years,
      present_value: Number(g.present_value),
      future_value: fv,
      earmarked_assets: Number(g.earmarked_assets),
      earmarked_future_value: earmarkedFV,
      funding_pct: fundingPct,
      sip_required_monthly: sip,
      status: statusFor(fundingPct),
    };
  });

  // ---------- contingency ----------
  const emergencyFundTarget = monthlyExpenses * 6;
  const emergencyFundExisting = sum(assets.filter(a => a.asset_class === "liquid"), a => Number(a.current_value));
  const emergencyFundDeficit = Math.max(0, emergencyFundTarget - emergencyFundExisting);

  return {
    asOf: asOfDate.toISOString(),
    age,
    retirementAge,
    monthlyIncome, monthlyExpenses, monthlySurplus, savingsRate,
    totalAssets, totalLiabilities, netWorth, assetAllocation,
    hlvCoverRequired, existingLifeCover, investableAssets, additionalCoverRequired, recommendedTermCover,
    yearsToRetirement, postRetirementYears, annualExpensesAtRetirement,
    retirementCorpusRequired, retirementAssetsFV, retirementOnTrackPct, retirementMonthlySipRequired,
    goals: computedGoals,
    emergencyFundTarget, emergencyFundExisting, emergencyFundDeficit,
  };
}

// ---------- formatting helpers (used by components) ----------
export function inrCompact(n: number): string {
  if (!isFinite(n)) return "—";
  const abs = Math.abs(n);
  if (abs >= 1_00_00_000) return `${sign(n)}₹${(abs / 1_00_00_000).toFixed(2)} Cr`;
  if (abs >= 1_00_000)    return `${sign(n)}₹${(abs / 1_00_000).toFixed(2)} L`;
  if (abs >= 1_000)       return `${sign(n)}₹${(abs / 1_000).toFixed(1)} K`;
  return `${sign(n)}₹${abs.toFixed(0)}`;
}
function sign(n: number) { return n < 0 ? "−" : ""; }

export function inrFull(n: number): string {
  if (!isFinite(n)) return "—";
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

export function pct(n: number, digits = 1): string {
  if (!isFinite(n)) return "—";
  return `${n.toFixed(digits)}%`;
}
