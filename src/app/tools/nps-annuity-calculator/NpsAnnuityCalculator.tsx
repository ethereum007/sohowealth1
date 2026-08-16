"use client";

import { useMemo, useState } from "react";

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
const bounded = (value: number, min: number, max: number, fallback: number) => Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;

export function NpsAnnuityCalculator() {
  const [corpus, setCorpus] = useState(10000000);
  const [annuityShare, setAnnuityShare] = useState(40);
  const [quotedRate, setQuotedRate] = useState(6.5);
  const result = useMemo(() => {
    const safeCorpus = bounded(corpus, 0, 10000000000, 0), safeShare = bounded(annuityShare, 0, 100, 40), safeRate = bounded(quotedRate, 0, 20, 6.5);
    const purchasePrice = safeCorpus * safeShare / 100, annual = purchasePrice * safeRate / 100;
    return { purchasePrice, lumpSum: safeCorpus - purchasePrice, annual, quarterly: annual / 4, monthly: annual / 12 };
  }, [corpus, annuityShare, quotedRate]);
  const fields = [
    ["NPS corpus at exit", corpus, setCorpus, "₹", 0, 10000000000, 1000],
    ["Share used to buy annuity", annuityShare, setAnnuityShare, "%", 0, 100, 1],
    ["Live quoted annual annuity rate", quotedRate, setQuotedRate, "%", 0, 20, 0.1],
  ] as const;

  return <section className="bg-[#F7F8FA] py-16 lg:py-20"><div className="container mx-auto max-w-6xl px-6 lg:px-8"><div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
    <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10"><h2 className="font-display text-3xl font-semibold text-[#0B1F3A]">Enter the live quote you are comparing</h2><p className="mt-3 text-sm leading-relaxed text-slate-500">Use the rate shown for the same age, insurer, payout frequency and annuity option. Different promises produce different rates.</p><div className="mt-8 grid gap-5">{fields.map(([label, value, setter, suffix, min, max, step]) => { const id = `annuity-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`; return <label key={label} htmlFor={id}><span className="mb-2 block text-sm font-semibold text-[#0B1F3A]">{label}</span><div className="flex rounded-xl border border-slate-300 focus-within:ring-2 focus-within:ring-[#C9A84C]"><span aria-hidden="true" className="flex items-center px-3 text-sm text-slate-500">{suffix}</span><input id={id} type="number" inputMode="decimal" min={min} max={max} step={step} value={value} onChange={(event) => setter(Number(event.target.value))} className="min-w-0 flex-1 rounded-xl px-2 py-3 text-[#0B1F3A] outline-none" /></div></label>; })}</div><button type="button" onClick={() => { setCorpus(10000000); setAnnuityShare(40); setQuotedRate(6.5); }} className="mt-7 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#C9A84C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A761F]">Restore example assumptions</button></div>
    <aside aria-labelledby="annuity-results" className="rounded-3xl bg-[#07192F] p-7 text-white md:p-10"><p id="annuity-results" className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">Illustrative gross annuity payout</p><div aria-live="polite" aria-atomic="true" className="mt-8 space-y-6"><div><p className="text-sm text-white/55">Monthly annuity</p><p className="mt-2 font-display text-4xl font-semibold text-[#E5CB83]">{inr.format(result.monthly)}</p></div><div className="grid grid-cols-2 gap-5"><div><p className="text-xs text-white/55">Quarterly</p><p className="mt-2 text-xl font-bold">{inr.format(result.quarterly)}</p></div><div><p className="text-xs text-white/55">Annual</p><p className="mt-2 text-xl font-bold">{inr.format(result.annual)}</p></div></div><div className="rounded-2xl bg-white/10 p-5"><p className="text-sm text-white/60">Annuity purchase amount</p><p className="mt-2 font-display text-3xl font-semibold">{inr.format(result.purchasePrice)}</p><p className="mt-4 text-sm text-white/60">Corpus outside this illustration: <strong className="text-white">{inr.format(result.lumpSum)}</strong></p></div><p className="border-t border-white/10 pt-5 text-sm leading-relaxed text-white/55">Before tax. This calculator uses the entered quote; it does not predict or source a live provider rate.</p></div></aside>
  </div><p className="mx-auto mt-6 max-w-4xl text-xs leading-relaxed text-slate-500">Educational illustration only. Actual payout depends on age, provider, annuity option, spouse continuation, return of purchase price, frequency and prevailing quote. Confirm current NPS exit rules and policy terms before acting.</p></div></section>;
}
