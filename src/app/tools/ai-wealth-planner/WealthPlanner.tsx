"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Download,
  Save,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { analysePlan, DEFAULT_INFLATION, deterministicNarrative, type GoalType, type PlanInputs, type RiskProfile } from "@/lib/wealth-planner/engine";

type Goal = GoalType;
type Risk = RiskProfile;

type FormState = PlanInputs & {
  age: number;
};

const DEFAULTS: FormState = {
  age: 38,
  goal: "retirement",
  amountMode: "today",
  targetAmount: 5_00_00_000,
  inflationRate: 0.06,
  currentSavings: 50_00_000,
  monthlyInvestment: 1_00_000,
  sipStepUpRate: 0.1,
  horizonYears: 15,
  risk: "balanced",
  delayMonths: 0,
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

const COLORS: Record<string, string> = {
  Equity: "#C9A84C",
  Debt: "#193A63",
  Gold: "#E5CB83",
  Alternatives: "#5A7595",
};

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
  const [savedMessage, setSavedMessage] = useState("");
  const [aiNarrative, setAiNarrative] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [lead, setLead] = useState({ name: "", email: "", phone: "", consent: false });
  const [leadStatus, setLeadStatus] = useState("");

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const result = useMemo(() => {
    const analysis = analysePlan(form);
    return { ...analysis, neededSip: analysis.requiredSip, gap: analysis.target - analysis.projected, probability: analysis.status };
  }, [form]);

  const narrative = useMemo(() => deterministicNarrative(form, result), [form, result]);

  const savePlan = () => {
    const saved = JSON.parse(localStorage.getItem("soho-wealth-plans") || "[]") as unknown[];
    saved.unshift({ id: crypto.randomUUID(), savedAt: new Date().toISOString(), inputs: form, result });
    localStorage.setItem("soho-wealth-plans", JSON.stringify(saved.slice(0, 12)));
    setSavedMessage("Plan saved privately on this device");
  };

  const explainWithAI = async () => {
    setAiLoading(true);
    try {
      const response = await fetch("/api/wealth-plan/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          goal: form.goal,
          horizonYears: form.horizonYears,
          risk: form.risk,
          target: Math.round(result.target),
          projected: Math.round(result.projected),
          monthlyInvestment: form.monthlyInvestment,
          requiredSip: Math.round(result.requiredSip),
          sipStepUpPct: Math.round(form.sipStepUpRate * 100),
          fundingRatioPct: Math.round(result.fundingRatio * 100),
          downsideRatioPct: Math.round(result.scenarios[0].fundingRatio * 100),
        }),
      });
      const data = await response.json() as { explanation?: string };
      if (data.explanation) setAiNarrative(data.explanation);
    } finally {
      setAiLoading(false);
    }
  };

  const requestReview = async () => {
    if (!lead.consent || !lead.name || !lead.email || !lead.phone) {
      setLeadStatus("Please complete the fields and confirm consent.");
      return;
    }
    setLeadStatus("Sending…");
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: lead.name, email: lead.email, phone: lead.phone, portfolio_size: "Wealth planner enquiry",
        is_nri: false, source: "AI Wealth Planner", service: "Goal Planning Review", landing_page: "/tools/ai-wealth-planner",
        notes: `${form.goal} goal | ${form.horizonYears} years | ${Math.round(result.fundingRatio * 100)}% funded | monthly SIP ${form.monthlyInvestment}. Shared with explicit consent.`,
      }),
    });
    setLeadStatus(response.ok ? "Thank you. SoHo Wealth will contact you within one business day." : "We could not send this now. Please use WhatsApp instead.");
  };

  const printPlan = () => {
    const goalLabel = GOALS.find((goal) => goal.value === form.goal)?.label || "Financial goal";
    const scenarioRows = result.scenarios.map((scenario) => `<tr><td>${scenario.name}</td><td>${(scenario.returnRate * 100).toFixed(1)}%</td><td>${formatCurrency(scenario.projected)}</td><td>${Math.round(scenario.fundingRatio * 100)}%</td></tr>`).join("");
    const allocationRows = result.allocation.map((item) => `<span>${item.name}: <strong>${item.value}%</strong></span>`).join("");
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`<!doctype html><html><head><title>${goalLabel} Wealth Plan</title><style>body{font-family:Arial,sans-serif;color:#0B1F3A;margin:0;padding:48px}header{background:#07192F;color:white;padding:32px;border-radius:16px}h1{margin:8px 0;font-size:34px}.gold{color:#C9A84C}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin:24px 0}.card{background:#f5f6f8;padding:18px;border-radius:12px}.label{font-size:11px;text-transform:uppercase;color:#64748b}.value{font-size:22px;font-weight:700;margin-top:6px}table{width:100%;border-collapse:collapse;margin:18px 0}td,th{padding:10px;border-bottom:1px solid #e2e8f0;text-align:left}.mix{display:flex;gap:18px;flex-wrap:wrap;background:#FFF9E9;padding:16px;border-radius:12px}.note{font-size:11px;color:#64748b;margin-top:28px;line-height:1.5}@media print{body{padding:20px}}</style></head><body><header><div class="gold">SOHO WEALTH · NOVELTY WEALTH PLAN</div><h1>${goalLabel} roadmap</h1><p>${form.horizonYears}-year horizon · ${form.risk} risk approach · Generated ${new Date().toLocaleDateString("en-IN")}</p></header><div class="grid"><div class="card"><div class="label">Future target</div><div class="value">${formatCurrency(result.target)}</div></div><div class="card"><div class="label">Projected corpus</div><div class="value">${formatCurrency(result.projected)}</div></div><div class="card"><div class="label">Suggested starting SIP</div><div class="value">${formatCurrency(result.requiredSip)}</div></div><div class="card"><div class="label">Funding ratio</div><div class="value">${Math.round(result.fundingRatio * 100)}%</div></div></div><h2>Plan explanation</h2><p>${aiNarrative || narrative}</p><h2>Scenario range</h2><table><thead><tr><th>Scenario</th><th>Return assumption</th><th>Projected</th><th>Funded</th></tr></thead><tbody>${scenarioRows}</tbody></table><h2>Illustrative asset mix</h2><div class="mix">${allocationRows}</div><p class="note">Educational illustration only. Inflation and return assumptions are not guarantees. This document is not investment, tax or legal advice and does not recommend a product. SoHo Wealth is a distributor, not a SEBI Registered Investment Adviser.</p><script>window.onload=()=>window.print()</script></body></html>`);
    printWindow.document.close();
  };

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
                  onClick={() => setForm((current) => ({ ...current, goal: goal.value, inflationRate: DEFAULT_INFLATION[goal.value] }))}
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
            <div className="mt-6 grid gap-5 rounded-2xl bg-[#F7F8FA] p-5 md:grid-cols-2">
              <label className="block"><span className="mb-2 block text-sm font-semibold text-[#0B1F3A]">Goal amount is in</span><select value={form.amountMode} onChange={(event) => update("amountMode", event.target.value as FormState["amountMode"])} className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-[#0B1F3A]"><option value="today">Today&apos;s rupees — inflate it</option><option value="future">Future rupees — use as entered</option></select></label>
              <InputField label="Expected annual inflation" value={Math.round(form.inflationRate * 100)} onChange={(value) => update("inflationRate", value / 100)} suffix="%" min={0} max={15} />
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
            <div className="mt-5 grid gap-5 rounded-2xl bg-[#F7F8FA] p-5 sm:grid-cols-2">
              <InputField label="Annual SIP increase" value={Math.round(form.sipStepUpRate * 100)} onChange={(value) => update("sipStepUpRate", value / 100)} suffix="%" min={0} max={25} />
              <InputField label="Delay before starting" value={form.delayMonths} onChange={(value) => update("delayMonths", value)} suffix="months" min={0} max={60} />
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
                    Based on a {form.horizonYears}-year horizon and a {form.risk} approach, your current path could grow to approximately {formatCurrency(result.projected)} against an inflation-adjusted target of {formatCurrency(result.target)}.
                  </p>
                </div>
                <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.06] p-5 md:min-w-56">
                  <p className="text-xs uppercase tracking-wider text-white/50">Goal progress</p>
                  <p className="mt-2 text-2xl font-bold text-[#E5CB83]">{Math.min(100, Math.round(result.fundingRatio * 100))}%</p>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-[#C9A84C]" style={{ width: `${Math.min(100, result.fundingRatio * 100)}%` }} /></div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
                <h3 className="font-display text-2xl font-semibold text-[#0B1F3A]">Your numbers at a glance</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#F5F6F8] p-5"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Future target corpus</p><p className="mt-2 text-2xl font-bold text-[#0B1F3A]">{formatCurrency(result.target, true)}</p></div>
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

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8"><h3 className="font-display text-2xl font-semibold text-[#0B1F3A]">Three return scenarios</h3><p className="mt-2 text-sm text-slate-500">A range is more honest than one forecast.</p><div className="mt-5 space-y-3">{result.scenarios.map((scenario) => <div key={scenario.name} className="flex items-center justify-between rounded-xl bg-[#F7F8FA] p-4"><div><p className="font-semibold text-[#0B1F3A]">{scenario.name}</p><p className="text-xs text-slate-500">{(scenario.returnRate * 100).toFixed(1)}% assumed return</p></div><div className="text-right"><p className="font-bold text-[#0B1F3A]">{formatCurrency(scenario.projected, true)}</p><p className="text-xs text-slate-500">{Math.round(scenario.fundingRatio * 100)}% funded</p></div></div>)}</div></div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8"><h3 className="font-display text-2xl font-semibold text-[#0B1F3A]">Goal stress test</h3><p className="mt-2 text-sm text-slate-500">What could weaken the plan?</p><div className="mt-5 space-y-3">{result.stressTests.map((test) => <div key={test.name} className="flex items-center justify-between rounded-xl border border-slate-100 p-4"><span className="text-sm font-medium text-[#0B1F3A]">{test.name}</span><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${test.fundingRatio >= 1 ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-800"}`}>{Math.round(test.fundingRatio * 100)}%</span></div>)}</div></div>
            </div>

            <div className="rounded-3xl border border-[#C9A84C]/30 bg-white p-6 md:p-8"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#A9862D]"><Sparkles className="h-4 w-4" /> Personalised plan explanation</div><p className="mt-4 text-lg leading-relaxed text-[#0B1F3A]">{aiNarrative || narrative}</p><div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center"><button type="button" onClick={explainWithAI} disabled={aiLoading} className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#0B1F3A] px-5 text-sm font-semibold text-white disabled:opacity-60"><Sparkles className="mr-2 h-4 w-4 text-[#E5CB83]" />{aiLoading ? "Creating explanation…" : "Explain this plan with AI"}</button><p className="text-xs text-slate-500">Only aggregated planning numbers are sent—never names, email, phone, PAN or account details.</p></div></div>

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
              <p className="max-w-3xl">Educational illustration only. Inflation and returns are assumptions, not guarantees. This tool does not consider tax, product suitability or your complete financial position and is not investment advice.</p>
              <div className="flex flex-wrap gap-4"><button type="button" onClick={savePlan} className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#0B1F3A]"><Save className="h-4 w-4" /> Save on this device</button><button type="button" onClick={printPlan} className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#0B1F3A]"><Download className="h-4 w-4" /> Download branded plan</button></div>
            </div>

            <div className="rounded-3xl bg-[#07192F] p-6 text-white md:p-9"><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#E5CB83]">Consent-based handoff</p><h3 className="mt-3 font-display text-3xl font-semibold">Ask a human to review the plan.</h3><p className="mt-3 text-sm leading-relaxed text-white/65">We send your goal type, horizon, contribution and funding ratio only after you consent. Do not enter PAN, account numbers or passwords.</p></div><div className="grid gap-3 sm:grid-cols-2"><input aria-label="Name" placeholder="Name" value={lead.name} onChange={(event) => setLead({ ...lead, name: event.target.value })} className="h-12 rounded-xl border border-white/15 bg-white/10 px-4 text-white placeholder:text-white/40 outline-none focus:border-[#C9A84C]" /><input aria-label="Phone" placeholder="Phone" value={lead.phone} onChange={(event) => setLead({ ...lead, phone: event.target.value })} className="h-12 rounded-xl border border-white/15 bg-white/10 px-4 text-white placeholder:text-white/40 outline-none focus:border-[#C9A84C]" /><input aria-label="Email" type="email" placeholder="Email" value={lead.email} onChange={(event) => setLead({ ...lead, email: event.target.value })} className="h-12 rounded-xl border border-white/15 bg-white/10 px-4 text-white placeholder:text-white/40 outline-none focus:border-[#C9A84C] sm:col-span-2" /><label className="flex gap-3 text-xs leading-relaxed text-white/65 sm:col-span-2"><input type="checkbox" checked={lead.consent} onChange={(event) => setLead({ ...lead, consent: event.target.checked })} className="mt-0.5 h-4 w-4 accent-[#C9A84C]" />I consent to SoHo Wealth receiving my contact details and the non-sensitive planning summary shown above for a follow-up.</label><button type="button" onClick={requestReview} className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#C9A84C] px-6 font-bold text-[#07192F] sm:col-span-2">Request my plan review <ArrowRight className="ml-2 h-4 w-4" /></button>{leadStatus && <p className="text-sm text-[#E5CB83] sm:col-span-2">{leadStatus}</p>}</div></div></div>
            {savedMessage && <p className="text-center text-sm font-semibold text-emerald-700">{savedMessage}</p>}
          </div>
        )}
      </div>
    </section>
  );
}
