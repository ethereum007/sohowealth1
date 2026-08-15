import test from "node:test";
import assert from "node:assert/strict";
import { allocationFor, analysePlan, buildScenarios, futureGoalAmount, projectPlan, requiredStartingSip, type PlanInputs } from "./engine";

const base: PlanInputs = {
  goal: "education", amountMode: "today", targetAmount: 25_00_000, inflationRate: 0.08,
  currentSavings: 5_00_000, monthlyInvestment: 25_000, sipStepUpRate: 0.1,
  horizonYears: 10, risk: "balanced", delayMonths: 0,
};

test("future goal cost compounds the entered inflation assumption", () => {
  assert.ok(Math.abs(futureGoalAmount(base) - 25_00_000 * 1.08 ** 10) < 1);
  assert.equal(futureGoalAmount({ ...base, amountMode: "future" }), base.targetAmount);
});

test("annual SIP step-up increases projected corpus", () => {
  const flat = projectPlan({ ...base, sipStepUpRate: 0 }).projected;
  const stepped = projectPlan(base).projected;
  assert.ok(stepped > flat);
});

test("required SIP back-solve reaches the inflation-adjusted target", () => {
  const required = requiredStartingSip(base);
  const projected = projectPlan(base, undefined, required).projected;
  assert.ok(required >= 0);
  assert.ok(Math.abs(projected / futureGoalAmount(base) - 1) < 0.0001);
});

test("scenario projections remain ordered downside to upside", () => {
  const scenarios = buildScenarios(base);
  assert.ok(scenarios[0].projected < scenarios[1].projected);
  assert.ok(scenarios[1].projected < scenarios[2].projected);
});

test("allocation always totals 100 and short horizons cap equity", () => {
  for (const risk of ["conservative", "balanced", "growth"] as const) {
    const allocation = allocationFor({ ...base, risk });
    assert.equal(allocation.reduce((sum, item) => sum + item.value, 0), 100);
  }
  const short = allocationFor({ ...base, risk: "growth", horizonYears: 2 });
  assert.equal(short.find((item) => item.name === "Equity")?.value, 25);
});

test("delay and downside stress reduce funding outcomes", () => {
  const normal = analysePlan(base);
  const delayed = analysePlan({ ...base, delayMonths: 12 });
  assert.ok(delayed.projected < normal.projected);
  assert.ok(normal.stressTests.every((stress) => stress.projected < normal.projected));
});

test("existing corpus that fully funds a goal produces zero required SIP", () => {
  const required = requiredStartingSip({ ...base, currentSavings: 1_00_00_000 });
  assert.equal(required, 0);
});
