"use client";

import { useMemo, useState } from "react";

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

function bounded(value: number, min: number, max: number, fallback: number) {
  return Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
}

export function RetirementInflationCalculator() {
  const [monthly, setMonthly] = useState(100000);
  const [years, setYears] = useState(15);
  const [inflation, setInflation] = useState(6);
  const [pension, setPension] = useState(50000);

  const result = useMemo(() => {
    const safeMonthly = bounded(monthly, 0, 10000000, 0);
    const safeYears = bounded(years, 0, 60, 15);
    const safeInflation = bounded(inflation, 0, 20, 6);
    const safePension = bounded(pension, 0, 10000000, 0);
    const factor = Math.pow(1 + safeInflation / 100, safeYears);
    const futureMonthly = safeMonthly * factor;
    const futureAnnual = futureMonthly * 12;
    const pensionPower = safePension / factor;
    const gap = Math.max(0, futureMonthly - safePension);
    return { factor, futureMonthly, futureAnnual, pensionPower, gap };
  }, [monthly, years, inflation, pension]);

  const fields = [
    ["Monthly retirement expenses today", monthly, setMonthly, "₹", 0, 10000000, 1000],
    ["Years until retirement", years, setYears, "years", 0, 60, 1],
    ["Expected annual inflation", inflation, setInflation, "%", 0, 20, 0.1],
    ["Expected fixed monthly pension", pension, setPension, "₹", 0, 10000000, 1000],
  ] as const;

  return (
    <section className="bg-[#F7F8FA] py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10">
            <h2 className="font-display text-3xl font-semibold text-[#0B1F3A]">Enter your assumptions</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">Use expenses that are likely to continue after retirement. Test more than one inflation rate.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {fields.map(([label, value, setter, suffix, min, max, step]) => {
                const id = `inflation-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
                return <label key={label} htmlFor={id}><span className="mb-2 block text-sm font-semibold text-[#0B1F3A]">{label}</span><div className="flex rounded-xl border border-slate-300 focus-within:ring-2 focus-within:ring-[#C9A84C]"><span aria-hidden="true" className="flex items-center px-3 text-sm text-slate-500">{suffix}</span><input id={id} type="number" inputMode="decimal" min={min} max={max} step={step} value={value} onChange={(event) => setter(Number(event.target.value))} className="min-w-0 flex-1 rounded-xl px-2 py-3 text-[#0B1F3A] outline-none" /></div></label>;
              })}
            </div>
            <button type="button" onClick={() => { setMonthly(100000); setYears(15); setInflation(6); setPension(50000); }} className="mt-7 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#C9A84C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A761F]">Restore example assumptions</button>
          </div>
          <aside aria-labelledby="inflation-results" className="rounded-3xl bg-[#07192F] p-7 text-white md:p-10">
            <p id="inflation-results" className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">Inflation-adjusted view</p>
            <div aria-live="polite" aria-atomic="true" className="mt-8 space-y-6">
              <div><p className="text-sm text-white/55">Monthly expenses at retirement</p><p className="mt-2 font-display text-4xl font-semibold text-[#E5CB83]">{inr.format(result.futureMonthly)}</p></div>
              <div className="grid grid-cols-2 gap-5"><div><p className="text-xs text-white/55">First-year expenses</p><p className="mt-2 text-xl font-bold">{inr.format(result.futureAnnual)}</p></div><div><p className="text-xs text-white/55">Monthly gap after pension</p><p className="mt-2 text-xl font-bold">{inr.format(result.gap)}</p></div></div>
              <div className="rounded-2xl bg-white/10 p-5"><p className="text-sm text-white/60">Purchasing power of the fixed pension in today&apos;s money</p><p className="mt-2 font-display text-3xl font-semibold">{inr.format(result.pensionPower)}</p></div>
              <p className="border-t border-white/10 pt-5 text-sm leading-relaxed text-white/55">Prices are approximately {result.factor.toFixed(2)}× the starting level under this constant-inflation illustration.</p>
            </div>
          </aside>
        </div>
        <p className="mx-auto mt-6 max-w-4xl text-xs leading-relaxed text-slate-500">Illustration only. Inflation is uneven across categories and years. Healthcare, housing and support costs may differ from general household inflation. This tool does not estimate investment returns or recommend products.</p>
      </div>
    </section>
  );
}
