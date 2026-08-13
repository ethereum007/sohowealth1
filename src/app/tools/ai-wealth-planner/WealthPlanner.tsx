"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Download,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

type Goal = "retirement" | "education" | "home" | "wealth";
type Risk = "conservative" | "balanced" | "growth";

type FormState = {
  age: number;
  goal: Goal;
  targetAmount: number;
  currentSavings: number;
  monthlyInvestment: number;
  horizonYears: number;
  risk: Risk;
};

const DEFAULTS: FormState = {
  age: 38,
  goal: "retirement",
  targetAmount: 5_00_00_000,
  currentSavings: 50_00_000,
  monthlyInvestment: 1_00_000,
  horizonYears: 15,
  risk: "balanced",
};

const GOALS: { value: Goal; label: string; helper: string }[] = [
  { value: "retirement", label: "Retirement", helper: "Build long-term independence" },
  { value: "education", label: "Child's education", helper: "Fund a future milestone" },
  { value: "home", label: "Home purchase", helper: "Prepare for a major purchase" },
  { value: "wealth", label: "Wealth creation", helper: "Grow capital over time" },
];

const RISKS: { value: Risk; label: string; helper: string }[] = [
  { value: "conservative", label: "Stability first", helper: "I prefer smaller fluctuations" },
  { value: "balanced", label: "Balanced", helper: "I can accept moderate ups and downs" },
  { value: "growth", label: "Growth focused", helper: "I can stay invested through sharp falls" },
];

const ALLOCATIONS: Record<Risk, Record<string, number>> = {
  conservative: { Equity: 35, Debt: 50, Gold: 10, Alternatives: 5 },
  balanced: { Equity: 55, Debt: 30, Gold: 10, Alternatives: 5 },
  growth: { Equity: 70, Debt: 15, Gold: 10, Alternatives: 5 },
};

const COLORS: Record<string, string> = {
  Equity: "#C9A84C",
  Debt: "#193A63",
  Gold: "#E5CB83",
  Alternatives: "#5A7595",
};

const RETURN_ASSUMPTIONS: Record<Risk, number> = {
  conservative: 0.08,
  balanced: 0.1,
  growth: 0.115,
};

function futureValue(present: number, monthly: number, years: number, annualReturn: number) {
  const months = years * 12;
  const monthlyRate = annualReturn / 12;
  const savingsValue = present * Math.pow(1 + annualReturn, years);
  const sipValue = monthlyRate > 0
    ? monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
    : monthly * months;
  return savingsValue + sipValue;
}

function requiredSip(target: number, present: number, years: number, annualReturn: number) {
  const months = years * 12;
  const monthlyRate = annualReturn / 12;
  const remaining = Math.max(0, target - present * Math.pow(1 + annualReturn, years));
  const factor = ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  return factor > 0 ? remaining / factor : remaining / months;
}

function formatCurrency(value: number, compact = false) {
  if (!Number.isFinite(value)) return "₹0";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
    notation: compact ? "compact" : "standard",
  }).format(value);
}

function InputField({
  label,
  value,
  onChange,
  prefix,
  suffix,
  min = 0,
  max,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[#0B1F3A]">{label}</span>
      <span className="flex h-12 items-center rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-[#C9A84C] focus-within:ring-2 focus-within:ring-[#C9A84C]/15">
        {prefix && <span className="mr-2 text-slate-400">{prefix}</span>}
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(event) => onChange(Math.max(min, Number(event.target.value) || 0))}
          className="min-w-0 flex-1 bg-transparent text-base font-medium text-[#0B1F3A] outline-none"
        />
        {suffix && <span className="ml-2 text-sm text-slate-400">{suffix}</span>}
      </span>
    </label>
  );
}

export function WealthPlanner() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(DEFAULTS);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const result = useMemo(() => {
    const annualReturn = RETURN_ASSUMPTIONS[form.risk];
    const projected = futureValue(form.currentSavings, form.monthlyInvestment, form.horizonYears, annualReturn);
    const neededSip = requiredSip(form.targetAmount, form.currentSavings, form.horizonYears, annualReturn);
    const gap = form.targetAmount - projected;
    const probability = projected >= form.targetAmount ? "On track" : projected >= form.targetAmount * 0.8 ? "Within reach" : "Needs attention";
    const allocation = Object.entries(ALLOCATIONS[form.risk]).map(([name, value]) => ({ name, value }));
    return { annualReturn, projected, neededSip, gap, probability, allocation };
  }, [form]);

  const whatsappText = encodeURIComponent(
    `Hi SoHo Wealth, I used the AI Wealth Planner for my ${GOALS.find((goal) => goal.value === form.goal)?.label.toLowerCase()} goal. My horizon is ${form.horizonYears} years and I would like a professional review of the plan.`
  );

  const reset = () => {
    setForm(DEFAULTS);
    setStep(1);
  };

  return (
    <section className="bg-[#F5F6F8] py-10 lg:py-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setStep((current) => Math.max(1, current - 1))}
            className={`inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3A] ${step === 1 ? "invisible" : ""}`}
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <div className="flex items-center gap-2" aria-label={`Step ${step} of 3`}>
            {[1, 2, 3].map((item) => (
              <span key={item} className={`h-1.5 rounded-full transition-all ${item === step ? "w-10 bg-[#C9A84C]" : item < step ? "w-6 bg-[#0B1F3A]" : "w-6 bg-slate-300"}`} />
            ))}
          </div>
          <button type="button" onClick={reset} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#0B1F3A]">
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
        </div>

        {step === 1 && (
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A9862D]">Step 1 · Define the goal</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">What are you planning for?</h2>
              <p className="mt-3 text-slate-600">Choose one priority. You can create a separate plan for every major goal.</p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {GOALS.map((goal) => (
                <button
                  key={goal.value}
                  type="button"
                  onClick={() => update("goal", goal.value)}
                  className={`rounded-2xl border p-5 text-left transition ${form.goal === goal.value ? "border-[#C9A84C] bg-[#C9A84C]/[0.08] ring-2 ring-[#C9A84C]/15" : "border-slate-200 hover:border-slate-300"}`}
                >
                  <span className="flex items-center justify-between font-semibold text-[#0B1F3A]">
                    {goal.label}
                    {form.goal === goal.value && <CheckCircle2 className="h-5 w-5 text-[#A9862D]" />}
                  </span>
                  <span className="mt-1 block text-sm text-slate-500">{goal.helper}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <InputField label="Your age" value={form.age} onChange={(value) => update("age", value)} suffix="years" min={18} max={80} />
              <InputField label="Goal amount" value={form.targetAmount} onChange={(value) => update("targetAmount", value)} prefix="₹" />
              <InputField label="Time available" value={form.horizonYears} onChange={(value) => update("horizonYears", value)} suffix="years" min={1} max={40} />
            </div>
            <button type="button" onClick={() => setStep(2)} className="mt-9 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#0B1F3A] px-7 font-semibold text-white transition hover:bg-[#193A63] sm:w-auto">
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A9862D]">Step 2 · Current position</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">Tell us where you are today.</h2>
            <p className="mt-3 text-slate-600">Use approximate numbers. This planner runs privately in your browser and does not save your values.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <InputField label="Already saved for this goal" value={form.currentSavings} onChange={(value) => update("currentSavings", value)} prefix="₹" />
              <InputField label="Monthly amount you can invest" value={form.monthlyInvestment} onChange={(value) => update("monthlyInvestment", value)} prefix="₹" />
            </div>
            <div className="mt-9">
              <h3 className="text-sm font-semibold text-[#0B1F3A]">How do you feel about market fluctuations?</h3>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                {RISKS.map((risk) => (
                  <button
                    key={risk.value}
                    type="button"
                    onClick={() => update("risk", risk.value)}
                    className={`rounded-2xl border p-5 text-left transition ${form.risk === risk.value ? "border-[#C9A84C] bg-[#C9A84C]/[0.08] ring-2 ring-[#C9A84C]/15" : "border-slate-200 hover:border-slate-300"}`}
                  >
                    <span className="font-semibold text-[#0B1F3A]">{risk.label}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-500">{risk.helper}</span>
                  </button>
                ))}
              </div>
            </div>
            <button type="button" onClick={() => setStep(3)} className="mt-9 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#0B1F3A] px-7 font-semibold text-white transition hover:bg-[#193A63] sm:w-auto">
              <Sparkles className="mr-2 h-4 w-4 text-[#E5CB83]" /> Create my wealth plan
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="rounded-3xl bg-[#07192F] p-6 text-white shadow-xl md:p-10">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#E5CB83]">
                    <Sparkles className="h-3.5 w-3.5" /> Your smart wealth roadmap
                  </span>
                  <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-5xl">
                    Your {GOALS.find((goal) => goal.value === form.goal)?.label.toLowerCase()} goal is {result.probability.toLowerCase()}.
                  </h2>
                  <p className="mt-4 max-w-2xl leading-relaxed text-white/70">
                    Based on a {form.horizonYears}-year horizon and a {form.risk} approach, your current path could grow to approximately {formatCurrency(result.projected)}.
                  </p>
                </div>
                <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.06] p-5 md:min-w-56">
                  <p className="text-xs uppercase tracking-wider text-white/50">Goal progress</p>
                  <p className="mt-2 text-2xl font-bold text-[#E5CB83]">{Math.min(100, Math.round((result.projected / form.targetAmount) * 100))}%</p>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-[#C9A84C]" style={{ width: `${Math.min(100, (result.projected / form.targetAmount) * 100)}%` }} /></div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
                <h3 className="font-display text-2xl font-semibold text-[#0B1F3A]">Your numbers at a glance</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#F5F6F8] p-5"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Target corpus</p><p className="mt-2 text-2xl font-bold text-[#0B1F3A]">{formatCurrency(form.targetAmount, true)}</p></div>
                  <div className="rounded-2xl bg-[#F5F6F8] p-5"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Projected corpus</p><p className="mt-2 text-2xl font-bold text-[#0B1F3A]">{formatCurrency(result.projected, true)}</p></div>
                  <div className="rounded-2xl bg-[#F5F6F8] p-5"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Suggested monthly SIP</p><p className="mt-2 text-2xl font-bold text-[#0B1F3A]">{formatCurrency(result.neededSip)}</p></div>
                  <div className="rounded-2xl bg-[#F5F6F8] p-5"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Illustrative return</p><p className="mt-2 text-2xl font-bold text-[#0B1F3A]">{(result.annualReturn * 100).toFixed(1)}% p.a.</p></div>
                </div>
                <div className={`mt-5 rounded-2xl border p-5 ${result.gap > 0 ? "border-amber-200 bg-amber-50" : "border-emerald-200 bg-emerald-50"}`}>
                  <p className="font-semibold text-[#0B1F3A]">{result.gap > 0 ? "One adjustment could strengthen the plan" : "Your current contribution is ahead of the illustration"}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {result.gap > 0
                      ? `Consider moving toward ${formatCurrency(result.neededSip)} per month, increasing contributions annually, or reviewing the goal amount and timeline.`
                      : "Keep reviewing the goal annually so the allocation and contribution remain aligned as markets and life circumstances change."}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
                <h3 className="font-display text-2xl font-semibold text-[#0B1F3A]">Illustrative asset mix</h3>
                <p className="mt-2 text-sm text-slate-500">A starting framework for a {form.risk} investor—not a product recommendation.</p>
                <div className="mt-4 h-56" aria-label="Suggested asset allocation chart">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={result.allocation} dataKey="value" nameKey="name" innerRadius={58} outerRadius={88} paddingAngle={3} stroke="none">
                        {result.allocation.map((item) => <Cell key={item.name} fill={COLORS[item.name]} />)}
                      </Pie>
                      <Tooltip formatter={(value) => [`${Number(value)}%`, "Allocation"]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {result.allocation.map((item) => (
                    <div key={item.name} className="flex items-center justify-between rounded-xl bg-[#F5F6F8] px-4 py-3 text-sm">
                      <span className="flex items-center gap-2 text-slate-600"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS[item.name] }} />{item.name}</span>
                      <strong className="text-[#0B1F3A]">{item.value}%</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#C9A84C]/30 bg-[#FFFDF7] p-6 md:p-9">
              <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#A9862D]"><ShieldCheck className="h-5 w-5" /> Human review matters</div>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-[#0B1F3A]">Turn this illustration into a personal wealth plan.</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">A SoHo Wealth review can factor in taxes, inflation, insurance, existing holdings, multiple goals, liquidity and the right investment vehicles for your situation.</p>
                </div>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
                  <a href={`https://wa.me/919032999466?text=${whatsappText}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#0B1F3A] px-6 font-semibold text-white hover:bg-[#193A63]">Discuss my plan <ArrowRight className="ml-2 h-4 w-4" /></a>
                  <Link href="/portfolio-review" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 font-semibold text-[#0B1F3A]">Book a portfolio review</Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4 text-xs leading-relaxed text-slate-500 sm:flex-row">
              <p className="max-w-3xl">Educational illustration only. Returns are assumed, not guaranteed. This tool does not consider inflation, tax, product suitability or your complete financial position and is not investment advice.</p>
              <button type="button" onClick={() => window.print()} className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#0B1F3A]"><Download className="h-4 w-4" /> Save as PDF</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
