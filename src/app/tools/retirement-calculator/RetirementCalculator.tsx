"use client";

import { useMemo, useState } from "react";

const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

function bounded(value: number, min: number, max: number, fallback: number) {
  return Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
}

function Input({ label, value, onChange, suffix = "₹", min = 0, max, step = suffix === "%" ? 0.1 : suffix === "years" ? 1 : 1000 }: { label: string; value: number; onChange: (n: number) => void; suffix?: string; min?: number; max?: number; step?: number }) {
  const id = `retirement-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return <label htmlFor={id} className="block"><span className="mb-2 block text-sm font-semibold text-[#0B1F3A]">{label}</span><div className="flex rounded-xl border border-slate-300 bg-white focus-within:ring-2 focus-within:ring-[#C9A84C]"><span aria-hidden="true" className="flex items-center px-3 text-sm text-slate-500">{suffix}</span><input id={id} aria-label={`${label} in ${suffix}`} inputMode="decimal" type="number" value={value} min={min} max={max} step={step} onChange={(e) => onChange(Number(e.target.value))} className="min-w-0 flex-1 rounded-xl bg-transparent px-2 py-3 text-[#0B1F3A] outline-none" /></div></label>;
}

export function RetirementCalculator() {
  const [age, setAge] = useState(45), [retireAge, setRetireAge] = useState(60), [lifeAge, setLifeAge] = useState(90);
  const [expense, setExpense] = useState(100000), [inflation, setInflation] = useState(6), [retInflation, setRetInflation] = useState(6);
  const [postReturn, setPostReturn] = useState(7.5), [currentCorpus, setCurrentCorpus] = useState(5000000), [preReturn, setPreReturn] = useState(10);
  const [pension, setPension] = useState(25000), [reserve, setReserve] = useState(1500000);
  const hasIncompleteInput = [age, retireAge, lifeAge, expense, inflation, retInflation, postReturn, currentCorpus, preReturn, pension, reserve].some((value) => !Number.isFinite(value));
  const hasOutOfRangeInput = age < 18 || age > 80 || retireAge < 19 || retireAge > 90 || lifeAge < 20 || lifeAge > 110 || [expense, inflation, retInflation, postReturn, currentCorpus, preReturn, pension, reserve].some((value) => value < 0) || expense > 100000000 || inflation > 20 || retInflation > 20 || postReturn > 20 || currentCorpus > 10000000000 || preReturn > 25 || pension > 10000000 || reserve > 1000000000;
  const ageError = hasIncompleteInput ? "Complete every field with a valid number." : hasOutOfRangeInput ? "Review values outside the allowed input range." : retireAge <= age ? "Retirement age must be greater than current age." : lifeAge <= retireAge ? "Plan-until age must be greater than retirement age." : "";

  const result = useMemo(() => {
    const safeAge = bounded(age, 18, 80, 45), safeRetireAge = bounded(retireAge, 19, 90, 60), safeLifeAge = bounded(lifeAge, 20, 110, 90);
    const safeExpense = bounded(expense, 0, 100000000, 0), safeInflation = bounded(inflation, 0, 20, 6), safeRetInflation = bounded(retInflation, 0, 20, 6);
    const safePostReturn = bounded(postReturn, 0, 20, 7.5), safeCurrentCorpus = bounded(currentCorpus, 0, 10000000000, 0), safePreReturn = bounded(preReturn, 0, 25, 10);
    const safePension = bounded(pension, 0, 10000000, 0), safeReserve = bounded(reserve, 0, 1000000000, 0);
    const yearsTo = Math.max(0, safeRetireAge - safeAge), yearsIn = Math.max(1, safeLifeAge - safeRetireAge);
    const firstMonthly = safeExpense * Math.pow(1 + safeInflation / 100, yearsTo);
    const firstAnnualGap = Math.max(0, (firstMonthly - safePension) * 12);
    const real = (1 + safePostReturn / 100) / (1 + safeRetInflation / 100) - 1;
    const neededForIncome = Math.abs(real) < 0.000001 ? firstAnnualGap * yearsIn : firstAnnualGap * (1 - Math.pow(1 + real, -yearsIn)) / real;
    const target = Math.max(0, neededForIncome + safeReserve);
    const futureExisting = safeCurrentCorpus * Math.pow(1 + safePreReturn / 100, yearsTo);
    const gap = Math.max(0, target - futureExisting);
    const monthlyRate = safePreReturn / 1200, months = yearsTo * 12;
    const sip = months <= 0 ? gap : monthlyRate === 0 ? gap / months : gap * monthlyRate / ((Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate));
    const firstRate = target > 0 ? firstAnnualGap / target * 100 : 0;
    return { yearsTo, yearsIn, firstMonthly, firstAnnualGap, target, futureExisting, gap, sip, firstRate };
  }, [age, retireAge, lifeAge, expense, inflation, retInflation, postReturn, currentCorpus, preReturn, pension, reserve]);

  return <section className="bg-[#F7F8FA] py-16 lg:py-20"><div className="container mx-auto max-w-6xl px-6 lg:px-8"><div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-9"><h2 className="font-display text-3xl font-semibold text-[#0B1F3A]">Your assumptions</h2><p className="mt-2 text-sm text-slate-500">Use post-tax return assumptions. Try a conservative case after your base case.</p><div className="mt-8 grid gap-5 sm:grid-cols-2">
      <Input label="Current age" value={age} onChange={setAge} suffix="years" min={18} max={80} /><Input label="Retirement age" value={retireAge} onChange={setRetireAge} suffix="years" min={19} max={90} />
      <Input label="Plan until age" value={lifeAge} onChange={setLifeAge} suffix="years" min={20} max={110} /><Input label="Monthly expenses today" value={expense} onChange={setExpense} max={100000000} />
      <Input label="Inflation until retirement" value={inflation} onChange={setInflation} suffix="%" max={20} /><Input label="Inflation in retirement" value={retInflation} onChange={setRetInflation} suffix="%" max={20} />
      <Input label="Post-tax return in retirement" value={postReturn} onChange={setPostReturn} suffix="%" max={20} /><Input label="Current retirement corpus" value={currentCorpus} onChange={setCurrentCorpus} max={10000000000} />
      <Input label="Return before retirement" value={preReturn} onChange={setPreReturn} suffix="%" max={25} /><Input label="Monthly pension at retirement" value={pension} onChange={setPension} max={10000000} />
      <Input label="Separate healthcare reserve" value={reserve} onChange={setReserve} max={1000000000} />
    </div><button type="button" onClick={() => { setAge(45); setRetireAge(60); setLifeAge(90); setExpense(100000); setInflation(6); setRetInflation(6); setPostReturn(7.5); setCurrentCorpus(5000000); setPreReturn(10); setPension(25000); setReserve(1500000); }} className="mt-7 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#C9A84C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A761F]">Restore example assumptions</button></div>
    <aside className="rounded-3xl bg-[#07192F] p-7 text-white md:p-9" aria-labelledby="retirement-results-heading"><p id="retirement-results-heading" className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">Illustrative retirement map</p>
    {ageError ? <div role="alert" className="mt-7 rounded-2xl border border-amber-300/40 bg-amber-200/10 p-5 text-sm leading-relaxed text-amber-100"><strong className="block text-base text-white">Check the ages entered</strong><span className="mt-2 block">{ageError}</span></div> : <div className="mt-7 space-y-6" aria-live="polite" aria-atomic="true">
      <div><p className="text-sm text-white/55">First-month expense at retirement</p><p className="mt-1 font-display text-3xl font-semibold">{money.format(result.firstMonthly)}</p></div>
      <div><p className="text-sm text-white/55">Estimated corpus required</p><p className="mt-1 font-display text-4xl font-semibold text-[#E5CB83]">{money.format(result.target)}</p></div>
      <div className="grid grid-cols-2 gap-4"><div><p className="text-xs text-white/55">Existing corpus at retirement</p><p className="mt-1 text-lg font-bold">{money.format(result.futureExisting)}</p></div><div><p className="text-xs text-white/55">Estimated shortfall</p><p className="mt-1 text-lg font-bold">{money.format(result.gap)}</p></div></div>
      <div className="rounded-2xl bg-white/10 p-5"><p className="text-sm text-white/65">Indicative monthly investment</p><p className="mt-1 font-display text-3xl font-semibold">{money.format(result.sip)}</p><p className="mt-2 text-xs leading-relaxed text-white/45">Assumes monthly contributions at the selected pre-retirement return.</p></div>
      <div className="border-t border-white/10 pt-5 text-sm leading-relaxed text-white/60"><p>Planning period: {result.yearsTo} years to retirement + {result.yearsIn} retirement years.</p><p className="mt-2">First-year portfolio withdrawal: {result.firstRate.toFixed(1)}% of the estimated corpus.</p>{result.firstRate > 5 && <p className="mt-3 rounded-lg bg-amber-200/10 p-3 text-amber-100">Stress flag: a starting withdrawal above 5% deserves a lower-return and higher-inflation test.</p>}</div>
    </div>}</aside>
  </div><p className="mx-auto mt-6 max-w-4xl text-xs leading-relaxed text-slate-500">This calculator uses a growing-annuity present-value model. It assumes smooth annual returns and inflation; real markets and spending are uneven. It excludes tax-rule modelling, fees and product recommendations. Results are educational illustrations, not guarantees.</p></div></section>;
}
