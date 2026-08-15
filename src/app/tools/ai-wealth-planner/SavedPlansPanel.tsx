"use client";

import { useEffect, useState } from "react";
import { History, Trash2 } from "lucide-react";
import { decodeSavedPlans, encodeSavedPlans, expectedCorpusAt, WEALTH_PLANS_KEY, type SavedWealthPlan } from "@/lib/wealth-planner/storage";

const money = (value: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0, notation: "compact" }).format(value || 0);

export function SavedPlansPanel() {
  const [plans, setPlans] = useState<SavedWealthPlan[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const load = () => {
      const decoded = decodeSavedPlans(localStorage.getItem(WEALTH_PLANS_KEY));
      setPlans(decoded);
      localStorage.setItem(WEALTH_PLANS_KEY, encodeSavedPlans(decoded));
    };
    load();
    setReady(true);
    window.addEventListener("soho-plan-saved", load);
    return () => window.removeEventListener("soho-plan-saved", load);
  }, []);

  const persist = (next: SavedWealthPlan[]) => {
    setPlans(next);
    localStorage.setItem(WEALTH_PLANS_KEY, encodeSavedPlans(next));
  };

  if (!ready) return null;
  return (
    <section className="bg-[#F7F8FA] py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#A9862D]"><History className="h-4 w-4" /> Private goal tracking</p><h2 className="mt-3 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">Revisit the plan against actual progress.</h2><p className="mt-3 max-w-2xl text-slate-600">Saved plans remain on this device. Add the latest goal-linked corpus during your six- or twelve-month review.</p></div></div>
        {plans.length === 0 ? <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">Complete a plan and choose “Save on this device” to begin tracking.</div> : <div className="mt-8 grid gap-4 md:grid-cols-2">{plans.map((plan) => {
          const actual = plan.actualCorpus ?? plan.inputs.currentSavings;
          const progress = Math.min(100, (actual / plan.result.target) * 100);
          const elapsedYears = Math.max(0, (Date.now() - new Date(plan.savedAt).getTime()) / (365.25 * 24 * 60 * 60 * 1000));
          const expectedCorpus = expectedCorpusAt(plan.result.points, elapsedYears, plan.inputs.currentSavings);
          const variance = actual - expectedCorpus;
          return <article key={plan.id} className="rounded-2xl border border-slate-200 bg-white p-6"><div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-wider text-[#A9862D]">{plan.inputs.goal}</p><h3 className="mt-1 font-display text-xl font-semibold text-[#0B1F3A]">Target {money(plan.result.target)}</h3><p className="mt-1 text-xs text-slate-500">Saved {new Date(plan.savedAt).toLocaleDateString("en-IN")}</p></div><button type="button" onClick={() => persist(plans.filter((item) => item.id !== plan.id))} aria-label="Delete saved plan" className="text-slate-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button></div><div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-[#C9A84C]" style={{ width: `${progress}%` }} /></div><div className="mt-4 flex items-end gap-3"><label className="flex-1 text-xs text-slate-500">Latest goal corpus<input type="number" value={actual} onChange={(event) => persist(plans.map((item) => item.id === plan.id ? { ...item, actualCorpus: Number(event.target.value), lastCheckedAt: new Date().toISOString() } : item))} className="mt-1 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm text-[#0B1F3A]" /></label><div className="pb-2 text-right"><p className="text-xs text-slate-500">Actual progress</p><strong className="text-[#0B1F3A]">{progress.toFixed(1)}%</strong></div></div><div className={`mt-4 rounded-xl p-3 text-sm ${variance >= 0 ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-900"}`}><strong>{variance >= 0 ? "Ahead of saved path" : "Behind saved path"}</strong><span className="ml-2">by {money(Math.abs(variance))}</span></div></article>;
        })}</div>}
      </div>
    </section>
  );
}
