"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Plus, Target, Trash2 } from "lucide-react";
import { analysePlan, DEFAULT_INFLATION, type GoalType, type RiskProfile } from "@/lib/wealth-planner/engine";

type GoalRow = { id: string; goal: GoalType; name: string; amount: number; years: number; saved: number; priority: number };

const LABELS: Record<GoalType, string> = { retirement: "Retirement", education: "Education", home: "Home", wealth: "Wealth creation" };
const STARTER: GoalRow[] = [
  { id: "retirement", goal: "retirement", name: "Retirement", amount: 3_00_00_000, years: 20, saved: 25_00_000, priority: 5 },
  { id: "education", goal: "education", name: "Child education", amount: 30_00_000, years: 10, saved: 5_00_000, priority: 4 },
];

const money = (value: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0, notation: "compact" }).format(value);

export function GoalPortfolioLab() {
  const [goals, setGoals] = useState<GoalRow[]>(STARTER);
  const [budget, setBudget] = useState(1_50_000);
  const [risk, setRisk] = useState<RiskProfile>("balanced");

  const plan = useMemo(() => {
    const rows = goals.map((goal) => {
      const result = analysePlan({ goal: goal.goal, amountMode: "today", targetAmount: goal.amount, inflationRate: DEFAULT_INFLATION[goal.goal], currentSavings: goal.saved, monthlyInvestment: 0, sipStepUpRate: 0.1, horizonYears: goal.years, risk, delayMonths: 0 });
      const urgency = goal.priority * (1 / Math.max(1, goal.years));
      return { ...goal, required: result.requiredSip, futureTarget: result.target, urgency };
    });
    const totalRequired = rows.reduce((sum, row) => sum + row.required, 0);
    const totalUrgency = rows.reduce((sum, row) => sum + row.urgency, 0);
    return rows.map((row) => {
      const idealShare = totalRequired > 0 ? row.required / totalRequired : 0;
      const priorityShare = totalUrgency > 0 ? row.urgency / totalUrgency : 0;
      const blendedShare = idealShare * 0.7 + priorityShare * 0.3;
      const allocated = Math.min(row.required, budget * blendedShare);
      return { ...row, allocated, coverage: row.required > 0 ? allocated / row.required : 1 };
    });
  }, [goals, budget, risk]);

  const update = (id: string, patch: Partial<GoalRow>) => setGoals((current) => current.map((goal) => goal.id === id ? { ...goal, ...patch } : goal));
  const addGoal = () => setGoals((current) => [...current, { id: crypto.randomUUID(), goal: "wealth", name: "New goal", amount: 25_00_000, years: 7, saved: 0, priority: 3 }]);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl bg-[#07192F] p-7 text-white md:p-9"><span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#E5CB83]"><Target className="h-4 w-4" /> Multi-goal priority lab</span><h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">When every goal matters, decide what each rupee does first.</h2><p className="mt-4 leading-relaxed text-white/70">Set the monthly amount available across all goals. The lab combines urgency, importance and required SIP to suggest a starting allocation—without pretending every goal can always be fully funded.</p><label className="mt-8 block"><span className="text-sm font-semibold">Total monthly investment budget</span><div className="mt-2 flex h-12 items-center rounded-xl border border-white/15 bg-white/10 px-4"><span className="mr-2 text-white/50">₹</span><input type="number" value={budget} onChange={(event) => setBudget(Math.max(0, Number(event.target.value)))} className="w-full bg-transparent font-bold text-white outline-none" /></div></label><label className="mt-4 block"><span className="text-sm font-semibold">Household risk approach</span><select value={risk} onChange={(event) => setRisk(event.target.value as RiskProfile)} className="mt-2 h-12 w-full rounded-xl border border-white/15 bg-[#132B49] px-4 text-white"><option value="conservative">Stability first</option><option value="balanced">Balanced</option><option value="growth">Growth focused</option></select></label></div>
          <div className="space-y-4">
            {plan.map((row) => <article key={row.id} className="rounded-2xl border border-slate-200 p-5"><div className="flex items-start justify-between gap-4"><div className="flex-1"><input value={row.name} onChange={(event) => update(row.id, { name: event.target.value })} className="w-full bg-transparent font-display text-xl font-semibold text-[#0B1F3A] outline-none" /><select value={row.goal} onChange={(event) => update(row.id, { goal: event.target.value as GoalType })} className="mt-1 bg-transparent text-xs font-semibold uppercase tracking-wider text-[#A9862D] outline-none">{Object.entries(LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></div><button type="button" onClick={() => setGoals((current) => current.filter((goal) => goal.id !== row.id))} aria-label={`Remove ${row.name}`} className="text-slate-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button></div><div className="mt-4 grid grid-cols-3 gap-3"><label className="text-xs text-slate-500">Today&apos;s cost<input type="number" value={row.amount} onChange={(event) => update(row.id, { amount: Number(event.target.value) })} className="mt-1 h-10 w-full rounded-lg border border-slate-200 px-2 text-sm text-[#0B1F3A]" /></label><label className="text-xs text-slate-500">Years<input type="number" value={row.years} onChange={(event) => update(row.id, { years: Math.max(1, Number(event.target.value)) })} className="mt-1 h-10 w-full rounded-lg border border-slate-200 px-2 text-sm text-[#0B1F3A]" /></label><label className="text-xs text-slate-500">Priority 1–5<input type="number" min="1" max="5" value={row.priority} onChange={(event) => update(row.id, { priority: Math.min(5, Math.max(1, Number(event.target.value))) })} className="mt-1 h-10 w-full rounded-lg border border-slate-200 px-2 text-sm text-[#0B1F3A]" /></label></div><div className="mt-4 grid grid-cols-3 gap-3 rounded-xl bg-[#F7F8FA] p-4 text-sm"><div><p className="text-xs text-slate-500">Future target</p><strong className="text-[#0B1F3A]">{money(row.futureTarget)}</strong></div><div><p className="text-xs text-slate-500">SIP required</p><strong className="text-[#0B1F3A]">{money(row.required)}</strong></div><div><p className="text-xs text-slate-500">Suggested now</p><strong className="text-[#A9862D]">{money(row.allocated)}</strong></div></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${row.coverage >= 1 ? "bg-emerald-500" : "bg-[#C9A84C]"}`} style={{ width: `${Math.min(100, row.coverage * 100)}%` }} /></div></article>)}
            <button type="button" onClick={addGoal} className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-dashed border-slate-300 font-semibold text-[#0B1F3A] hover:border-[#C9A84C]"><Plus className="mr-2 h-4 w-4" /> Add another goal</button>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:flex-row sm:items-center"><p className="text-sm leading-relaxed text-amber-900"><strong>Priority rule:</strong> protect essential near-term goals and retirement adequacy before discretionary goals. This allocation is an educational starting point.</p><a href="/portfolio-review" className="inline-flex shrink-0 items-center font-semibold text-[#0B1F3A]">Review all goals <ArrowRight className="ml-2 h-4 w-4" /></a></div>
      </div>
    </section>
  );
}
