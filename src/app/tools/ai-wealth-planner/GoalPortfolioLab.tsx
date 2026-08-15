"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Plus, Save, Target, Trash2 } from "lucide-react";
import { analysePlan, DEFAULT_INFLATION, type GoalType, type RiskProfile } from "@/lib/wealth-planner/engine";

type GoalRow = { id: string; goal: GoalType; name: string; amount: number; years: number; saved: number; priority: number };
const LABELS: Record<GoalType, string> = { retirement: "Retirement", education: "Education", home: "Home", wealth: "Wealth creation" };
const STARTER: GoalRow[] = [
  { id: "retirement", goal: "retirement", name: "Retirement", amount: 3_00_00_000, years: 20, saved: 25_00_000, priority: 5 },
  { id: "education", goal: "education", name: "Child education", amount: 30_00_000, years: 10, saved: 5_00_000, priority: 4 },
];
const money = (value: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0, notation: "compact" }).format(value);

function NumericField({ label, value, onChange, min = 0, max }: { label: string; value: number; onChange: (value: number) => void; min?: number; max?: number }) {
  return <label className="block text-xs text-slate-500">{label}<input type="number" min={min} max={max} value={value} onChange={(event) => onChange(Math.min(max ?? Infinity, Math.max(min, Number(event.target.value) || 0)))} className="mt-1 h-10 w-full rounded-lg border border-slate-200 px-2 text-sm text-[#0B1F3A]" /></label>;
}

export function GoalPortfolioLab() {
  const [goals, setGoals] = useState<GoalRow[]>(STARTER);
  const [budget, setBudget] = useState(1_50_000);
  const [risk, setRisk] = useState<RiskProfile>("balanced");
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("soho-goal-portfolio") || "null") as { goals: GoalRow[]; budget: number; risk: RiskProfile } | null;
      if (stored?.goals?.length) { setGoals(stored.goals); setBudget(stored.budget); setRisk(stored.risk); }
    } catch { /* Ignore damaged device-local data. */ }
  }, []);

  const plan = useMemo(() => {
    const rows = goals.map((goal) => {
      const result = analysePlan({ goal: goal.goal, amountMode: "today", targetAmount: goal.amount, inflationRate: DEFAULT_INFLATION[goal.goal], currentSavings: goal.saved, monthlyInvestment: 0, sipStepUpRate: 0.1, horizonYears: goal.years, risk, delayMonths: 0 });
      return { ...goal, required: result.requiredSip, futureTarget: result.target, urgency: goal.priority / Math.max(1, goal.years) };
    });
    const totalRequired = rows.reduce((sum, row) => sum + row.required, 0);
    const totalUrgency = rows.reduce((sum, row) => sum + row.urgency, 0);
    const allocatedRows = rows.map((row) => {
      const idealShare = totalRequired ? row.required / totalRequired : 0;
      const priorityShare = totalUrgency ? row.urgency / totalUrgency : 0;
      const allocated = Math.min(row.required, budget * (idealShare * 0.7 + priorityShare * 0.3));
      return { ...row, allocated };
    });

    // If a small goal reaches 100%, keep redistributing its unused share to
    // goals that are still underfunded. This uses the full available budget
    // without ever allocating more than a goal actually requires.
    for (let pass = 0; pass < allocatedRows.length; pass += 1) {
      const used = allocatedRows.reduce((sum, row) => sum + row.allocated, 0);
      const remaining = Math.max(0, Math.min(budget, totalRequired) - used);
      const underfunded = allocatedRows.filter((row) => row.allocated + 0.01 < row.required);
      if (remaining < 0.01 || !underfunded.length) break;

      const weightTotal = underfunded.reduce((sum, row) => sum + row.required + row.urgency * totalRequired, 0);
      underfunded.forEach((row) => {
        const weight = weightTotal ? (row.required + row.urgency * totalRequired) / weightTotal : 1 / underfunded.length;
        row.allocated += Math.min(row.required - row.allocated, remaining * weight);
      });
    }

    return allocatedRows.map((row) => ({ ...row, coverage: row.required ? row.allocated / row.required : 1 }));
  }, [goals, budget, risk]);

  const update = (id: string, patch: Partial<GoalRow>) => setGoals((current) => current.map((goal) => goal.id === id ? { ...goal, ...patch } : goal));
  const addGoal = () => setGoals((current) => [...current, { id: crypto.randomUUID(), goal: "wealth", name: "New goal", amount: 25_00_000, years: 7, saved: 0, priority: 3 }]);
  const savePortfolio = () => { localStorage.setItem("soho-goal-portfolio", JSON.stringify({ goals, budget, risk })); setMessage("Goal portfolio saved privately on this device"); };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl bg-[#07192F] p-7 text-white md:p-9">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#E5CB83]"><Target className="h-4 w-4" /> Multi-goal priority lab</span>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">When every goal matters, decide what each rupee does first.</h2>
            <p className="mt-4 leading-relaxed text-white/70">Set the amount available across all goals. The lab combines urgency, importance and required SIP to suggest a starting allocation.</p>
            <div className="mt-8"><NumericField label="Total monthly investment budget" value={budget} onChange={setBudget} /></div>
            <label className="mt-4 block text-sm font-semibold">Household risk approach<select value={risk} onChange={(event) => setRisk(event.target.value as RiskProfile)} className="mt-2 h-12 w-full rounded-xl border border-white/15 bg-[#132B49] px-4 text-white"><option value="conservative">Stability first</option><option value="balanced">Balanced</option><option value="growth">Growth focused</option></select></label>
            <button type="button" onClick={savePortfolio} className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-[#C9A84C]/50 text-sm font-semibold text-[#E5CB83]"><Save className="mr-2 h-4 w-4" /> Save goal portfolio</button>
            {message && <p className="mt-3 text-xs text-[#E5CB83]">{message}</p>}
          </div>
          <div className="space-y-4">
            {plan.map((row) => <article key={row.id} className="rounded-2xl border border-slate-200 p-5">
              <div className="flex items-start justify-between gap-4"><div className="flex-1"><input aria-label="Goal name" value={row.name} onChange={(event) => update(row.id, { name: event.target.value })} className="w-full bg-transparent font-display text-xl font-semibold text-[#0B1F3A] outline-none" /><select aria-label="Goal type" value={row.goal} onChange={(event) => update(row.id, { goal: event.target.value as GoalType })} className="mt-1 bg-transparent text-xs font-semibold uppercase tracking-wider text-[#A9862D] outline-none">{Object.entries(LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></div><button type="button" onClick={() => setGoals((current) => current.filter((goal) => goal.id !== row.id))} aria-label={`Remove ${row.name}`} className="text-slate-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button></div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4"><NumericField label="Today's cost" value={row.amount} onChange={(amount) => update(row.id, { amount })} /><NumericField label="Already saved" value={row.saved} onChange={(saved) => update(row.id, { saved })} /><NumericField label="Years" value={row.years} min={1} max={50} onChange={(years) => update(row.id, { years })} /><NumericField label="Priority 1–5" value={row.priority} min={1} max={5} onChange={(priority) => update(row.id, { priority })} /></div>
              <div className="mt-4 grid grid-cols-3 gap-3 rounded-xl bg-[#F7F8FA] p-4 text-sm"><div><p className="text-xs text-slate-500">Future target</p><strong className="text-[#0B1F3A]">{money(row.futureTarget)}</strong></div><div><p className="text-xs text-slate-500">SIP required</p><strong className="text-[#0B1F3A]">{money(row.required)}</strong></div><div><p className="text-xs text-slate-500">Suggested now</p><strong className="text-[#A9862D]">{money(row.allocated)}</strong></div></div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${row.coverage >= 1 ? "bg-emerald-500" : "bg-[#C9A84C]"}`} style={{ width: `${Math.min(100, row.coverage * 100)}%` }} /></div>
            </article>)}
            <button type="button" onClick={addGoal} className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-dashed border-slate-300 font-semibold text-[#0B1F3A] hover:border-[#C9A84C]"><Plus className="mr-2 h-4 w-4" /> Add another goal</button>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:flex-row sm:items-center"><p className="text-sm leading-relaxed text-amber-900"><strong>Priority rule:</strong> protect essential near-term goals and retirement adequacy before discretionary goals.</p><a href="/portfolio-review" className="inline-flex shrink-0 items-center font-semibold text-[#0B1F3A]">Review all goals <ArrowRight className="ml-2 h-4 w-4" /></a></div>
      </div>
    </section>
  );
}
