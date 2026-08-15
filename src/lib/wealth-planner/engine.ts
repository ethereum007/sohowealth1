export type GoalType = "retirement" | "education" | "home" | "wealth";
export type RiskProfile = "conservative" | "balanced" | "growth";

export type PlanInputs = {
  goal: GoalType;
  amountMode: "today" | "future";
  targetAmount: number;
  inflationRate: number;
  currentSavings: number;
  monthlyInvestment: number;
  sipStepUpRate: number;
  horizonYears: number;
  risk: RiskProfile;
  delayMonths: number;
};

export type ProjectionPoint = { year: number; invested: number; projected: number; target: number };
export type Scenario = { name: "Downside" | "Base" | "Upside"; returnRate: number; projected: number; fundingRatio: number };

export const RETURN_ASSUMPTIONS: Record<RiskProfile, number> = {
  conservative: 0.08,
  balanced: 0.1,
  growth: 0.115,
};

export const DEFAULT_INFLATION: Record<GoalType, number> = {
  retirement: 0.06,
  education: 0.09,
  home: 0.06,
  wealth: 0,
};

const BASE_ALLOCATIONS: Record<RiskProfile, Record<string, number>> = {
  conservative: { Equity: 35, Debt: 50, Gold: 10, Alternatives: 5 },
  balanced: { Equity: 55, Debt: 30, Gold: 10, Alternatives: 5 },
  growth: { Equity: 70, Debt: 15, Gold: 10, Alternatives: 5 },
};

export function futureGoalAmount(input: PlanInputs) {
  if (input.amountMode === "future") return input.targetAmount;
  return input.targetAmount * Math.pow(1 + input.inflationRate, input.horizonYears);
}

export function projectPlan(
  input: PlanInputs,
  annualReturn = RETURN_ASSUMPTIONS[input.risk],
  monthlyOverride = input.monthlyInvestment,
  shockPct = 0,
) {
  const totalMonths = Math.max(12, Math.round(input.horizonYears * 12));
  const delay = Math.min(Math.max(0, input.delayMonths), totalMonths - 1);
  const monthlyRate = annualReturn / 12;
  let corpus = Math.max(0, input.currentSavings) * (1 - shockPct);
  let invested = Math.max(0, input.currentSavings);
  let monthly = Math.max(0, monthlyOverride);
  const target = futureGoalAmount(input);
  const points: ProjectionPoint[] = [{ year: 0, invested, projected: corpus, target: input.targetAmount }];

  for (let month = 1; month <= totalMonths; month += 1) {
    corpus *= 1 + monthlyRate;
    if (month > delay) {
      corpus += monthly;
      invested += monthly;
    }
    if (month % 12 === 0) {
      const year = month / 12;
      points.push({
        year,
        invested,
        projected: corpus,
        target: input.amountMode === "today"
          ? input.targetAmount * Math.pow(1 + input.inflationRate, year)
          : target,
      });
      monthly *= 1 + input.sipStepUpRate;
    }
  }
  return { projected: corpus, invested, points };
}

export function requiredStartingSip(input: PlanInputs) {
  const target = futureGoalAmount(input);
  if (projectPlan(input, RETURN_ASSUMPTIONS[input.risk], 0).projected >= target) return 0;
  let low = 0;
  let high = Math.max(target / Math.max(1, input.horizonYears * 12), 1_000);
  while (projectPlan(input, RETURN_ASSUMPTIONS[input.risk], high).projected < target && high < target) high *= 2;
  for (let i = 0; i < 48; i += 1) {
    const mid = (low + high) / 2;
    if (projectPlan(input, RETURN_ASSUMPTIONS[input.risk], mid).projected >= target) high = mid;
    else low = mid;
  }
  return high;
}

export function buildScenarios(input: PlanInputs): Scenario[] {
  const base = RETURN_ASSUMPTIONS[input.risk];
  const target = futureGoalAmount(input);
  return [
    { name: "Downside" as const, returnRate: Math.max(0.04, base - 0.025) },
    { name: "Base" as const, returnRate: base },
    { name: "Upside" as const, returnRate: base + 0.02 },
  ].map((scenario) => {
    const projected = projectPlan(input, scenario.returnRate).projected;
    return { ...scenario, projected, fundingRatio: projected / target };
  });
}

export function buildStressTests(input: PlanInputs) {
  const base = RETURN_ASSUMPTIONS[input.risk];
  const target = futureGoalAmount(input);
  const tests = [
    { name: "20% market shock today", projected: projectPlan(input, base, input.monthlyInvestment, 0.2).projected },
    { name: "Returns 2% lower", projected: projectPlan(input, Math.max(0.04, base - 0.02)).projected },
    { name: "Investing starts 12 months late", projected: projectPlan({ ...input, delayMonths: input.delayMonths + 12 }).projected },
    { name: "Monthly SIP is 10% lower", projected: projectPlan(input, base, input.monthlyInvestment * 0.9).projected },
  ];
  return tests.map((test) => ({ ...test, fundingRatio: test.projected / target, shortfall: Math.max(0, target - test.projected) }));
}

export function allocationFor(input: PlanInputs) {
  const allocation = { ...BASE_ALLOCATIONS[input.risk] };
  if (input.horizonYears < 3) {
    const excess = Math.max(0, allocation.Equity - 25);
    allocation.Equity -= excess;
    allocation.Debt += excess;
  } else if (input.horizonYears < 5) {
    const excess = Math.max(0, allocation.Equity - 45);
    allocation.Equity -= excess;
    allocation.Debt += excess;
  }
  return Object.entries(allocation).map(([name, value]) => ({ name, value }));
}

export function analysePlan(input: PlanInputs) {
  const target = futureGoalAmount(input);
  const baseProjection = projectPlan(input);
  const requiredSip = requiredStartingSip(input);
  const scenarios = buildScenarios(input);
  const stressTests = buildStressTests(input);
  const fundingRatio = baseProjection.projected / target;
  return {
    target,
    ...baseProjection,
    requiredSip,
    scenarios,
    stressTests,
    fundingRatio,
    status: fundingRatio >= 1 ? "On track" : fundingRatio >= 0.8 ? "Within reach" : "Needs attention",
    allocation: allocationFor(input),
    annualReturn: RETURN_ASSUMPTIONS[input.risk],
  };
}

export function deterministicNarrative(input: PlanInputs, result: ReturnType<typeof analysePlan>) {
  const ratio = Math.round(result.fundingRatio * 100);
  const stepUp = Math.round(input.sipStepUpRate * 100);
  const opening = result.fundingRatio >= 1
    ? `Your current path funds approximately ${ratio}% of the goal in the base scenario.`
    : `Your current path funds approximately ${ratio}% of the goal, leaving a gap that can be addressed early.`;
  const action = result.requiredSip > input.monthlyInvestment
    ? `Moving toward the suggested starting SIP, extending the timeline, or increasing contributions by ${stepUp}% annually can improve resilience.`
    : `Your current monthly contribution is above the estimated starting requirement; keep the surplus as a margin of safety.`;
  return `${opening} ${action} Review the plan annually and begin reducing risk as the goal date approaches.`;
}
