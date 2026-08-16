"use client";

import { useMemo, useState } from "react";

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
const bounded = (value: number, min: number, max: number, fallback: number) => Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;

export function EpfCalculator() {
  const [openingBalance, setOpeningBalance] = useState(500000);
  const [monthlyContribution, setMonthlyContribution] = useState(12000);
  const [annualStepUp, setAnnualStepUp] = useState(6);
  const [interestRate, setInterestRate] = useState(8.25);
  const [years, setYears] = useState(20);
  const result = useMemo(() => {
    const safeYears = Math.round(bounded(years, 1, 50, 20));
    const monthlyRate = bounded(interestRate, 0, 15, 8.25) / 1200;
    const stepUp = bounded(annualStepUp, 0, 30, 6) / 100;
    let balance = bounded(openingBalance, 0, 1000000000, 0);
    let contribution = bounded(monthlyContribution, 0, 10000000, 0);
    let added = 0;
    for (let month = 1; month <= safeYears * 12; month += 1) {
      balance += contribution;
      added += contribution;
      balance *= 1 + monthlyRate;
      if (month % 12 === 0) contribution *= 1 + stepUp;
    }
    return { balance, added, interest: balance - bounded(openingBalance, 0, 1000000000, 0) - added };
  }, [openingBalance, monthlyContribution, annualStepUp, interestRate, years]);
  const fields = [
    ["Current EPF balance", openingBalance, setOpeningBalance, "₹", 0, 1000000000, 1000],
    ["Total monthly amount credited", monthlyContribution, setMonthlyContribution, "₹", 0, 10000000, 100],
    ["Annual contribution increase", annualStepUp, setAnnualStepUp, "%", 0, 30, 0.5],
    ["Assumed annual interest rate", interestRate, setInterestRate, "%", 0, 15, 0.05],
    ["Years until retirement", years, setYears, "years", 1, 50, 1],
  ] as const;
  return <section className="bg-[#F7F8FA] py-16 lg:py-20"><div className="container mx-auto max-w-6xl px-6 lg:px-8"><div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
    <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10"><h2 className="font-display text-3xl font-semibold text-[#0B1F3A]">Enter your EPF assumptions</h2><p className="mt-3 text-sm leading-relaxed text-slate-500">Use the total amount actually reaching EPF each month after any EPS allocation. Check your passbook rather than assuming the full employer contribution is credited to EPF.</p><div className="mt-8 grid gap-5">{fields.map(([label, value, setter, suffix, min, max, step]) => { const id = `epf-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`; return <label key={label} htmlFor={id}><span className="mb-2 block text-sm font-semibold text-[#0B1F3A]">{label}</span><div className="flex rounded-xl border border-slate-300 focus-within:ring-2 focus-within:ring-[#C9A84C]"><span aria-hidden="true" className="flex items-center px-3 text-sm text-slate-500">{suffix}</span><input id={id} type="number" inputMode="decimal" min={min} max={max} step={step} value={value} onChange={(event) => setter(Number(event.target.value))} className="min-w-0 flex-1 rounded-xl px-2 py-3 text-[#0B1F3A] outline-none" /></div></label>; })}</div></div>
    <aside aria-labelledby="epf-results" className="rounded-3xl bg-[#07192F] p-7 text-white md:p-10"><p id="epf-results" className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">Illustrative EPF value</p><div aria-live="polite" aria-atomic="true" className="mt-8 space-y-6"><div><p className="text-sm text-white/55">Projected balance</p><p className="mt-2 font-display text-4xl font-semibold text-[#E5CB83]">{inr.format(result.balance)}</p></div><div className="grid grid-cols-2 gap-5"><div><p className="text-xs text-white/55">Future contributions</p><p className="mt-2 text-xl font-bold">{inr.format(result.added)}</p></div><div><p className="text-xs text-white/55">Illustrative interest</p><p className="mt-2 text-xl font-bold">{inr.format(result.interest)}</p></div></div><p className="border-t border-white/10 pt-5 text-sm leading-relaxed text-white/55">The model compounds monthly for simplicity. EPFO credits interest under its applicable rules, so an actual passbook will not match this illustration exactly.</p></div></aside>
  </div><p className="mx-auto mt-6 max-w-4xl text-xs leading-relaxed text-slate-500">Educational estimate only. The entered rate is an assumption—not a guaranteed future EPF rate. Contribution rules, wage ceilings, EPS allocation, service history, withdrawals and declared interest can change the outcome.</p></div></section>;
}
