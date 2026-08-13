"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

const questions = [
  { q: "If the same value arrived as cash today, would you buy this much employer stock?", yes: 0, no: 2 },
  { q: "Do salary, bonus and future grants already depend heavily on the same company?", yes: 2, no: 0 },
  { q: "Does a goal within five years depend on these shares?", yes: 2, no: 0 },
  { q: "Would a 40% fall materially change your family plan or career choices?", yes: 2, no: 0 },
  { q: "Are the tax, trading-window and foreign-exchange questions already resolved?", yes: 0, no: 2 },
];

export function RSUDecisionCheck() {
  const [answers, setAnswers] = useState<Array<boolean | null>>(Array(questions.length).fill(null));
  const complete = answers.every((a) => a !== null);
  const score = answers.reduce<number>((sum, answer, index) => sum + (answer === null ? 0 : answer ? questions[index].yes : questions[index].no), 0);
  const result = score >= 7
    ? { title: "Prioritise a staged diversification review", body: "Several parts of your financial life appear tied to the same company. A written sell-at-vest or staged-reduction rule may deserve review after specialist questions are resolved." }
    : score >= 4
      ? { title: "Use a fixed rule, not repeated forecasts", body: "Your answers suggest meaningful dependency but not necessarily an urgent all-or-nothing decision. Compare a fixed vest-sale percentage with a target-range approach." }
      : { title: "A documented hold policy may be reasonable to review", body: "Your answers show fewer immediate pressure points. Keep monitoring future grants, goal timing and total concentration rather than treating holding as the default forever." };
  const answer = (index: number, value: boolean) => { const next = [...answers]; next[index] = value; setAnswers(next); if (index === 0) trackEvent("rsu_decision_start", { tool: "five_question_check" }); };

  return <div className="mx-auto max-w-4xl">
    <div className="space-y-4">{questions.map((item, index) => <fieldset key={item.q} className="rounded-2xl border border-slate-200 bg-white p-6"><legend className="px-1 font-display text-lg font-semibold text-[#0B1F3A]">{index + 1}. {item.q}</legend><div className="mt-4 grid grid-cols-2 gap-3">{[true, false].map((value) => <button key={String(value)} type="button" onClick={() => answer(index, value)} aria-pressed={answers[index] === value} className={`min-h-12 rounded-xl border px-5 text-sm font-semibold transition ${answers[index] === value ? "border-[#C9A84C] bg-[#FDF9EF] text-[#0B1F3A]" : "border-slate-200 text-slate-600 hover:border-slate-400"}`}>{value ? "Yes" : "No"}</button>)}</div></fieldset>)}</div>
    <div className="mt-8 rounded-3xl bg-[#0B1F3A] p-8 text-white" aria-live="polite">
      {complete ? <><div className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#C9A84C]" /><div><p className="text-xs font-bold uppercase tracking-[.14em] text-[#C9A84C]">Planning direction</p><h2 className="mt-2 font-display text-3xl font-semibold">{result.title}</h2><p className="mt-4 leading-relaxed text-white/75">{result.body}</p></div></div><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/rsu-esops#rsu-consultation" onClick={() => trackEvent("rsu_decision_complete", { score_band: score >= 7 ? "priority" : score >= 4 ? "rule" : "monitor" })} className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#C9A84C] px-6 text-sm font-semibold text-[#0B1F3A]">Book an RSU portfolio review<ArrowRight className="ml-2 h-4 w-4" /></Link><a href="/guides/soho-wealth-annual-rsu-planning-pack.pdf" download className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/25 px-6 text-sm font-semibold">Download planning pack</a></div></> : <p className="text-center text-white/70">Answer all five questions to see the planning direction.</p>}
    </div>
    <button type="button" onClick={() => setAnswers(Array(questions.length).fill(null))} className="mx-auto mt-5 flex min-h-11 items-center gap-2 px-4 text-sm font-semibold text-slate-500"><RotateCcw className="h-4 w-4" />Reset answers</button>
  </div>;
}
