"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, LockKeyhole, RotateCcw } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
const number = (value: string) => { const parsed = Number(value); return Number.isFinite(parsed) && parsed > 0 ? parsed : 0; };

type Field = { key: string; label: string; help: string; value: string; set: (value: string) => void };

export function RSUConcentrationWorksheet() {
  const [employerStock, setEmployerStock] = useState("");
  const [otherInvestments, setOtherInvestments] = useState("");
  const [unvestedAwards, setUnvestedAwards] = useState("");
  const [salaryBonus, setSalaryBonus] = useState("");
  const [sectorExposure, setSectorExposure] = useState("");
  const [goalsDependent, setGoalsDependent] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const values = useMemo(() => ({
    stock: number(employerStock), other: number(otherInvestments), unvested: number(unvestedAwards),
    income: number(salaryBonus), sector: number(sectorExposure),
  }), [employerStock, otherInvestments, unvestedAwards, salaryBonus, sectorExposure]);
  const liquidPortfolio = values.stock + values.other + values.sector;
  const concentration = liquidPortfolio ? (values.stock / liquidPortfolio) * 100 : 0;
  const broaderDependency = liquidPortfolio ? ((values.stock + values.sector + values.unvested) / (liquidPortfolio + values.unvested)) * 100 : 0;
  const reviewLevel = concentration >= 20 || broaderDependency >= 35 || goalsDependent ? "Priority review" : concentration >= 10 || broaderDependency >= 20 ? "Review recommended" : "Monitor with a written rule";

  const onValue = (setter: (value: string) => void, value: string) => {
    setter(value);
    if (!hasStarted) { setHasStarted(true); trackEvent("rsu_calculator_start", { tool: "employer_dependency" }); }
  };
  const fields: Field[] = [
    { key: "stock", label: "Vested employer shares (₹)", help: "Current market value", value: employerStock, set: setEmployerStock },
    { key: "other", label: "Other liquid investments (₹)", help: "Funds, stocks, debt and cash", value: otherInvestments, set: setOtherInvestments },
    { key: "unvested", label: "Unvested awards (₹)", help: "Approximate current value", value: unvestedAwards, set: setUnvestedAwards },
    { key: "income", label: "Annual salary and bonus (₹)", help: "Shown as career dependency", value: salaryBonus, set: setSalaryBonus },
    { key: "sector", label: "Same-sector investments (₹)", help: "Outside employer stock", value: sectorExposure, set: setSectorExposure },
  ];
  const reset = () => { setEmployerStock(""); setOtherInvestments(""); setUnvestedAwards(""); setSalaryBonus(""); setSectorExposure(""); setGoalsDependent(false); setHasStarted(false); };

  return (
    <section id="rsu-concentration-worksheet" className="scroll-mt-24 bg-[#F7F8FA] py-20 lg:py-28" aria-labelledby="rsu-worksheet-heading">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8B6815]">Private, browser-only worksheet</p>
            <h2 id="rsu-worksheet-heading" className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">Measure the holding—and the dependency around it.</h2>
            <p className="mt-5 leading-relaxed text-slate-600">The first percentage measures vested employer stock. The second adds unvested awards and same-sector investments. Salary remains separate because it is income, not an investment.</p>
            <div className="mt-8 rounded-2xl border border-[#C9A84C]/30 bg-[#FDF9EF] p-5">
              <div className="flex items-center gap-3"><LockKeyhole className="h-5 w-5 text-[#8B6815]" /><p className="text-sm font-semibold text-[#0B1F3A]">Nothing is uploaded or saved</p></div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">Use approximate values only. Never enter account numbers, credentials or confidential plan documents.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#C9A84C]"><Calculator className="h-5 w-5" /></span><div><h3 className="font-display text-xl font-semibold text-[#0B1F3A]">Employer-dependency snapshot</h3><p className="text-xs text-slate-500">Approximate current values</p></div></div>
              <button type="button" onClick={reset} className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs font-semibold text-slate-500 hover:bg-slate-100"><RotateCcw className="h-4 w-4" />Reset</button>
            </div>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {fields.map((field) => <label key={field.key} className="block text-sm font-semibold text-slate-700">{field.label}<span className="mt-0.5 block text-xs font-normal text-slate-400">{field.help}</span><input type="number" min="0" step="10000" value={field.value} onChange={(e) => onValue(field.set, e.target.value)} placeholder="0" className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 px-4 text-base font-normal text-[#0B1F3A] outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20" /></label>)}
              <label className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 sm:col-span-2"><input type="checkbox" checked={goalsDependent} onChange={(e) => setGoalsDependent(e.target.checked)} className="mt-1 h-4 w-4 accent-[#0B1F3A]" /><span><span className="block text-sm font-semibold text-slate-700">A major goal depends on selling these shares</span><span className="block text-xs leading-relaxed text-slate-500">For example: home purchase, education, retirement or a career break.</span></span></label>
            </div>
            <div className="mt-7 rounded-2xl bg-[#0B1F3A] p-6 text-white" aria-live="polite">
              <div className="grid gap-5 sm:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.12em] text-[#C9A84C]">Current concentration</p><p className="mt-2 font-display text-4xl font-semibold">{liquidPortfolio ? `${concentration.toFixed(1)}%` : "—"}</p></div><div><p className="text-xs font-bold uppercase tracking-[.12em] text-[#C9A84C]">Broader equity dependency</p><p className="mt-2 font-display text-4xl font-semibold">{liquidPortfolio ? `${broaderDependency.toFixed(1)}%` : "—"}</p></div></div>
              <div className="mt-5 border-t border-white/15 pt-5"><p className="text-xs text-white/55">Planning signal</p><p className="mt-1 text-lg font-semibold">{liquidPortfolio ? reviewLevel : "Enter values to begin"}</p><p className="mt-2 text-xs leading-relaxed text-white/60">Income dependency: {money.format(values.income)} a year. This is not included in either percentage.</p></div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row"><Link href="/tools/rsu-decision-check" onClick={() => trackEvent("rsu_calculator_complete", { concentration_band: concentration >= 20 ? "20_plus" : concentration >= 10 ? "10_20" : "under_10" })} className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl bg-[#C9A84C] px-5 text-sm font-semibold text-[#0B1F3A]">Take the decision check<ArrowRight className="ml-2 h-4 w-4" /></Link><a href="/guides/soho-wealth-annual-rsu-planning-pack.pdf" download onClick={() => trackEvent("rsu_pack_download", { location: "calculator" })} className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl border border-slate-300 px-5 text-center text-sm font-semibold text-[#0B1F3A]">Download planning pack</a></div>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">Educational planning signal only—not a safe limit, sell recommendation, tax computation or suitability assessment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
