"use client";

import { useMemo, useState } from "react";

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

function bounded(value: number, min: number, max: number, fallback: number) {
  return Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
}

export function RetirementIncomeCalculator() {
  const [corpus, setCorpus] = useState(10000000);
  const [years, setYears] = useState(30);
  const [returns, setReturns] = useState(8);
  const [inflation, setInflation] = useState(6);
  const [pension, setPension] = useState(0);

  const result = useMemo(() => {
    const safeCorpus = bounded(corpus, 0, 10000000000, 0);
    const safeYears = bounded(years, 1, 60, 30);
    const safeReturn = bounded(returns, -10, 30, 8);
    const safeInflation = bounded(inflation, 0, 20, 6);
    const fixedIncome = bounded(pension, 0, 10000000, 0);
    const realReturn = (1 + safeReturn / 100) / (1 + safeInflation / 100) - 1;
    const annual = Math.abs(realReturn) < 0.000001
      ? safeCorpus / safeYears
      : safeCorpus * realReturn / (1 - Math.pow(1 + realReturn, -safeYears));
    const portfolioMonthly = Math.max(0, annual / 12);
    return { realReturn, portfolioMonthly, fixedIncome, totalMonthly: portfolioMonthly + fixedIncome, firstYearRate: safeCorpus > 0 ? annual / safeCorpus : 0 };
  }, [corpus, years, returns, inflation, pension]);

  const comparison = useMemo(() => {
    const safeYears = bounded(years, 1, 60, 30);
    const safeReturn = bounded(returns, -10, 30, 8);
    const safeInflation = bounded(inflation, 0, 20, 6);
    const realReturn = (1 + safeReturn / 100) / (1 + safeInflation / 100) - 1;
    const monthlyFor = (amount: number) => {
      const annual = Math.abs(realReturn) < 0.000001
        ? amount / safeYears
        : amount * realReturn / (1 - Math.pow(1 + realReturn, -safeYears));
      return Math.max(0, annual / 12);
    };
    return [5000000, 10000000, 20000000].map((amount) => ({ amount, monthly: monthlyFor(amount) }));
  }, [years, returns, inflation]);

  const fields = [
    ["Retirement corpus", corpus, setCorpus, "₹", 0, 10000000000, 1000],
    ["Income period", years, setYears, "years", 1, 60, 1],
    ["Expected annual return", returns, setReturns, "%", -10, 30, 0.1],
    ["Expected annual inflation", inflation, setInflation, "%", 0, 20, 0.1],
    ["Other fixed monthly income", pension, setPension, "₹", 0, 10000000, 1000],
  ] as const;

  return <section className="bg-[#F7F8FA] py-16 lg:py-20"><div className="container mx-auto max-w-6xl px-6 lg:px-8"><div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
    <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10"><h2 className="font-display text-3xl font-semibold text-[#0B1F3A]">Enter your retirement assumptions</h2><p className="mt-3 text-sm leading-relaxed text-slate-500">Use a corpus available for income after setting aside near-term goals and emergency reserves.</p><div className="mt-8 grid gap-5 sm:grid-cols-2">{fields.map(([label, value, setter, suffix, min, max, step]) => { const id = `income-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`; return <label key={label} htmlFor={id}><span className="mb-2 block text-sm font-semibold text-[#0B1F3A]">{label}</span><div className="flex rounded-xl border border-slate-300 focus-within:ring-2 focus-within:ring-[#C9A84C]"><span aria-hidden="true" className="flex items-center px-3 text-sm text-slate-500">{suffix}</span><input id={id} type="number" inputMode="decimal" min={min} max={max} step={step} value={value} onChange={(event) => setter(Number(event.target.value))} className="min-w-0 flex-1 rounded-xl px-2 py-3 text-[#0B1F3A] outline-none" /></div></label>; })}</div></div>
    <aside aria-labelledby="income-results" className="rounded-3xl bg-[#07192F] p-7 text-white md:p-10"><p id="income-results" className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">Illustrative first-year income</p><div aria-live="polite" aria-atomic="true" className="mt-8 space-y-6"><div><p className="text-sm text-white/55">Monthly withdrawal from corpus</p><p className="mt-2 font-display text-4xl font-semibold text-[#E5CB83]">{inr.format(result.portfolioMonthly)}</p></div><div><p className="text-sm text-white/55">Total monthly income including pension</p><p className="mt-2 font-display text-3xl font-semibold">{inr.format(result.totalMonthly)}</p></div><div className="grid grid-cols-2 gap-5 rounded-2xl bg-white/10 p-5"><div><p className="text-xs text-white/55">Real return assumption</p><p className="mt-2 text-xl font-bold">{(result.realReturn * 100).toFixed(2)}%</p></div><div><p className="text-xs text-white/55">First-year withdrawal</p><p className="mt-2 text-xl font-bold">{(result.firstYearRate * 100).toFixed(2)}%</p></div></div>{result.realReturn <= 0 && <p className="rounded-xl border border-amber-300/30 bg-amber-300/10 p-4 text-sm leading-relaxed text-amber-100">Your return assumption does not exceed inflation. The illustration therefore relies more heavily on spending down capital.</p>}</div></aside>
  </div>
  <button type="button" onClick={() => { setCorpus(10000000); setYears(30); setReturns(8); setInflation(6); setPension(0); }} className="mt-6 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#C9A84C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A761F]">Restore example assumptions</button>
  <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white"><table className="w-full min-w-[600px] border-collapse"><caption className="px-6 pb-3 pt-6 text-left font-display text-2xl font-semibold text-[#0B1F3A]">How corpus size changes the illustration</caption><thead className="bg-[#0B1F3A] text-white"><tr><th scope="col" className="px-6 py-4 text-left text-sm font-semibold">Retirement corpus</th><th scope="col" className="px-6 py-4 text-right text-sm font-semibold">Monthly withdrawal</th><th scope="col" className="px-6 py-4 text-right text-sm font-semibold">Including fixed income</th></tr></thead><tbody>{comparison.map((item) => <tr key={item.amount} className="border-b border-slate-200 last:border-0"><th scope="row" className="px-6 py-4 text-left font-semibold text-[#0B1F3A]">{inr.format(item.amount)}</th><td className="px-6 py-4 text-right text-slate-700">{inr.format(item.monthly)}</td><td className="px-6 py-4 text-right font-semibold text-slate-700">{inr.format(item.monthly + result.fixedIncome)}</td></tr>)}</tbody></table></div>
  <p className="mx-auto mt-6 max-w-4xl text-xs leading-relaxed text-slate-500">Illustration only, before tax, fees and irregular withdrawals. It assumes smooth annual returns and inflation, which real markets do not provide. Sequence risk, healthcare costs and longevity can materially change sustainable income. This is not a guarantee or product recommendation.</p></div></section>;
}
