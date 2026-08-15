import type { PlanInputs, ProjectionPoint } from "./engine";

export const WEALTH_PLANS_KEY = "soho-wealth-plans";
export const WEALTH_PLANS_VERSION = 2;

export type SavedWealthPlan = {
  id: string;
  savedAt: string;
  inputs: PlanInputs;
  result: {
    target: number;
    projected: number;
    fundingRatio: number;
    points?: ProjectionPoint[];
  };
  actualCorpus?: number;
  lastCheckedAt?: string;
};

type StoredPlans = { version: typeof WEALTH_PLANS_VERSION; plans: SavedWealthPlan[] };

function isPlan(value: unknown): value is SavedWealthPlan {
  if (!value || typeof value !== "object") return false;
  const plan = value as Partial<SavedWealthPlan>;
  return typeof plan.id === "string"
    && typeof plan.savedAt === "string"
    && !!plan.inputs
    && typeof plan.inputs.currentSavings === "number"
    && typeof plan.inputs.horizonYears === "number"
    && !!plan.result
    && typeof plan.result.target === "number";
}

export function decodeSavedPlans(raw: string | null): SavedWealthPlan[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    const candidates = Array.isArray(parsed)
      ? parsed
      : (parsed as Partial<StoredPlans>)?.version === WEALTH_PLANS_VERSION
        ? (parsed as Partial<StoredPlans>).plans
        : [];
    return Array.isArray(candidates) ? candidates.filter(isPlan).slice(0, 12) : [];
  } catch {
    return [];
  }
}

export function encodeSavedPlans(plans: SavedWealthPlan[]) {
  return JSON.stringify({ version: WEALTH_PLANS_VERSION, plans: plans.slice(0, 12) } satisfies StoredPlans);
}

export function expectedCorpusAt(points: ProjectionPoint[] | undefined, elapsedYears: number, fallback: number) {
  if (!points?.length) return fallback;
  const elapsed = Math.max(0, elapsedYears);
  if (elapsed <= points[0].year) return points[0].projected;
  const last = points[points.length - 1];
  if (elapsed >= last.year) return last.projected;

  const upperIndex = points.findIndex((point) => point.year >= elapsed);
  const lower = points[Math.max(0, upperIndex - 1)];
  const upper = points[upperIndex];
  const span = upper.year - lower.year;
  const fraction = span ? (elapsed - lower.year) / span : 0;
  return lower.projected + (upper.projected - lower.projected) * fraction;
}
