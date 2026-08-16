"use client";

import { useMemo, useState } from "react";

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
const bounded = (value: number, min: number, max: number, fallback: number) => Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;

export function PpfCalculator() {
  const [openingBalance, setOpeningBalance] = useState(0);
  const [annualDeposit, setAnnualDeposit] = useState(150000);
  const [interestRate, setInterestRate] = useState(7.1);
  const [years, setYears] = useState(15);
  const result = useMemo(() => {
    const safeYears = Math.round(bounded(years, 1, 50, 15));
    const rate = bounded(interestRate, 0, 15, 7.1) / 100;
    const deposit = bounded(annualDeposit, 500, 150000, 150000);
    const opening = bounded(openingBalance, 0, 1000000000, 0);
    let balance = opening;
    for (let year = 0; year < safeYears; year += 1) balance = (balance + deposit) * (1 + rate);
    return { balance, deposits: deposit * safeYears, interest: balance - opening - deposit * safeYears };
  }, [openingBalance, annualDeposit, interestRate, years]);
  const fields = [
    ["Current PPF balance", openingBalance, setOpeningBalance, "₹", 0, 1000000000, 1000],
    ["Annual deposit", annualDeposit, setAnnualDeposit, "₹", 500, 150000, 500],
    ["Assumed annual interest rate", interestRate, setInterestRate, "%", 0, 15, 0.1],
    ["Years to project", years, setYears, "years", 1, 50, 1],
  ] as const;
  return <section className="bg-[#F7F8FA] py-16 lg:py-20"><div className="container mx-auto max-w-6xl px-6 lg:px-8"><div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
    <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10"><h2 className="font-display text-3xl font-semibold text-[#0B1F3A]">Enter your PPF assumptions</h2><p className="mt-3 text-sm leading-relaxed text-slate-500">The illustration treats each annual deposit as if made at the start of the year. Actual interest depends on deposit timing and the balance considered under scheme rules.</p><div className="mt-8 grid gap-5">{fields.map(([label, value, setter, suffix, min, max, step]) => { const id = `ppf-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`; return <label key={label} htmlFor={id}><span className="mb-2 block text-sm font-semibold text-[#0B1F3A]">{label}</span><div className="flex rounded-xl border border-slate-300 focus-within:ring-2 focus-within:ring-[#C9A84C]"><span aria-hidden="true" className="flex items-center px-3 text-sm text-slate-500">{suffix}</span><input id={id} type="number" inputMode="decimal" min={min} max={max} step={step} value={value} onChange={(event) => setter(Number(event.target.value))} className="min-w-0 flex-1 rounded-xl px-2 py-3 text-[#0B1F3A] outline-none" /></div></label>; })}</div></div>
    <aside aria-labelledby="ppf-results" className="rounded-3xl bg-[#07192F] p-7 text-white md:p-10"><p id="ppf-results" className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">Illustrative PPF value</p><div aria-live="polite" aria-atomic="true" className="mt-8 space-y-6"><div><p className="text-sm text-white/55">Projected balance</p><p className="mt-2 font-display text-4xl font-semibold text-[#E5CB83]">{inr.format(result.balance)}</p></div><div className="grid grid-cols-2 gap-5"><div><p className="text-xs text-white/55">Future deposits</p><p className="mt-2 text-xl font-bold">{inr.format(result.deposits)}</p></div><div><p className="text-xs text-white/55">Illustrative interest</p><p className="mt-2 text-xl font-bold">{inr.format(result.interest)}</p></div></div><p className="border-t border-white/10 pt-5 text-sm leading-relaxed text-white/55">The annual deposit is capped at ₹1.5 lakh in this calculator to reflect the current scheme limit. It does not model loans, withdrawals or premature closure.</p></div></aside>
  </div><p className="mx-auto mt-6 max-w-4xl text-xs leading-relaxed text-slate-500">Educational estimate only. PPF rates are notified periodically and can change. The standard account term is 15 complete financial years from the end of the opening year; extension is governed by current scheme rules.</p></div></section>;
}
