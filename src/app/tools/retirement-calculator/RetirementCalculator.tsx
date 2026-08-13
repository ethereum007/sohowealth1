"use client";

import { useMemo, useState } from "react";

const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

function Input({ label, value, onChange, suffix = "₹", min = 0, max }: { label: string; value: number; onChange: (n: number) => void; suffix?: string; min?: number; max?: number }) {
  return <label className="block"><span className="mb-2 block text-sm font-semibold text-[#0B1F3A]">{label}</span><div className="flex rounded-xl border border-slate-300 bg-white focus-within:ring-2 focus-within:ring-[#C9A84C]"><span className="flex items-center px-3 text-sm text-slate-500">{suffix}</span><input type="number" value={value} min={min} max={max} onChange={(e) => onChange(Number(e.target.value))} className="min-w-0 flex-1 rounded-xl bg-transparent px-2 py-3 text-[#0B1F3A] outline-none" /></div></label>;
}

export function RetirementCalculator() {
  const [age, setAge] = useState(45), [retireAge, setRetireAge] = useState(60), [lifeAge, setLifeAge] = useState(90);
  const [expense, setExpense] = useState(100000), [inflation, setInflation] = useState(6), [retInflation, setRetInflation] = useState(6);
  const [postReturn, setPostReturn] = useState(7.5), [currentCorpus, setCurrentCorpus] = useState(5000000), [preReturn, setPreReturn] = useState(10);
  const [pension, setPension] = useState(25000), [reserve, setReserve] = useState(1500000);

  const result = useMemo(() => {
    const yearsTo = Math.max(0, retireAge - age), yearsIn = Math.max(1, lifeAge - retireAge);
    const firstMonthly = expense * Math.pow(1 + inflation / 100, yearsTo);
    const firstAnnualGap = Math.max(0, (firstMonthly - pension) * 12);
    const real = (1 + postReturn / 100) / (1 + retInflation / 100) - 1;
    const neededForIncome = Math.abs(real) < 0.000001 ? firstAnnualGap * yearsIn : firstAnnualGap * (1 - Math.pow(1 + real, -yearsIn)) / real;
    const target = Math.max(0, neededForIncome + reserve);
    const futureExisting = currentCorpus * Math.pow(1 + preReturn / 100, yearsTo);
    const gap = Math.max(0, target - futureExisting);
    const monthlyRate = preReturn / 1200, months = yearsTo * 12;
    const sip = months <= 0 ? gap : monthlyRate === 0 ? gap / months : gap * monthlyRate / ((Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate));
    const firstRate = target > 0 ? firstAnnualGap / target * 100 : 0;
    return { yearsTo, yearsIn, firstMonthly, firstAnnualGap, target, futureExisting, gap, sip, firstRate };
  }, [age, retireAge, lifeAge, expense, inflation, retInflation, postReturn, currentCorpus, preReturn, pension, reserve]);

  return <section className="bg-[#F7F8FA] py-16 lg:py-20"><div className="container mx-auto max-w-6xl px-6 lg:px-8"><div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-9"><h2 className="font-display text-3xl font-semibold text-[#0B1F3A]">Your assumptions</h2><p className="mt-2 text-sm text-slate-500">Use post-tax return assumptions. Try a conservative case after your base case.</p><div className="mt-8 grid gap-5 sm:grid-cols-2">
      <Input label="Current age" value={age} onChange={setAge} suffix="years" max={80} /><Input label="Retirement age" value={retireAge} onChange={setRetireAge} suffix="years" max={90} />
      <Input label="Plan until age" value={lifeAge} onChange={setLifeAge} suffix="years" max={110} /><Input label="Monthly expenses today" value={expense} onChange={setExpense} />
      <Input label="Inflation until retirement" value={inflation} onChange={setInflation} suffix="%" max={20} /><Input label="Inflation in retirement" value={retInflation} onChange={setRetInflation} suffix="%" max={20} />
      <Input label="Post-tax return in retirement" value={postReturn} onChange={setPostReturn} suffix="%" max={20} /><Input label="Current retirement corpus" value={currentCorpus} onChange={setCurrentCorpus} />
      <Input label="Return before retirement" value={preReturn} onChange={setPreReturn} suffix="%" max={25} /><Input label="Monthly pension at retirement" value={pension} onChange={setPension} />
      <Input label="Separate healthcare reserve" value={reserve} onChange={setReserve} />
    </div></div>
    <aside className="rounded-3xl bg-[#07192F] p-7 text-white md:p-9"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">Illustrative retirement map</p><div className="mt-7 space-y-6">
      <div><p className="text-sm text-white/55">First-month expense at retirement</p><p className="mt-1 font-display text-3xl font-semibold">{money.format(result.firstMonthly)}</p></div>
      <div><p className="text-sm text-white/55">Estimated corpus required</p><p className="mt-1 font-display text-4xl font-semibold text-[#E5CB83]">{money.format(result.target)}</p></div>
      <div className="grid grid-cols-2 gap-4"><div><p className="text-xs text-white/55">Existing corpus at retirement</p><p className="mt-1 text-lg font-bold">{money.format(result.futureExisting)}</p></div><div><p className="text-xs text-white/55">Estimated shortfall</p><p className="mt-1 text-lg font-bold">{money.format(result.gap)}</p></div></div>
      <div className="rounded-2xl bg-white/10 p-5"><p className="text-sm text-white/65">Indicative monthly investment</p><p className="mt-1 font-display text-3xl font-semibold">{money.format(result.sip)}</p><p className="mt-2 text-xs leading-relaxed text-white/45">Assumes monthly contributions at the selected pre-retirement return.</p></div>
      <div className="border-t border-white/10 pt-5 text-sm leading-relaxed text-white/60"><p>Planning period: {result.yearsTo} years to retirement + {result.yearsIn} retirement years.</p><p className="mt-2">First-year portfolio withdrawal: {result.firstRate.toFixed(1)}% of the estimated corpus.</p></div>
    </div></aside>
  </div><p className="mx-auto mt-6 max-w-4xl text-xs leading-relaxed text-slate-500">This calculator uses a growing-annuity present-value model. It assumes smooth annual returns and inflation; real markets and spending are uneven. It excludes tax-rule modelling, fees and product recommendations. Results are educational illustrations, not guarantees.</p></div></section>;
}
