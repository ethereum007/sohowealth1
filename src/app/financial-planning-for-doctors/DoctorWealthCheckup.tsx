"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, Stethoscope } from "lucide-react";

type Answer = "yes" | "partly" | "no";

type Question = {
  id: string;
  category: string;
  question: string;
  context: string;
};

const questions: Question[] = [
  {
    id: "cash-separation",
    category: "Cash flow",
    question: "Are your personal and practice finances clearly separated?",
    context: "Separate accounts and liquidity targets make it easier to see what the clinic can use and what your family can invest.",
  },
  {
    id: "liquidity",
    category: "Liquidity",
    question: "Do you know how much emergency liquidity your household and practice each require?",
    context: "The right reserve depends on income stability, fixed commitments, clinic overhead and access to credit.",
  },
  {
    id: "allocation",
    category: "Portfolio",
    question: "Does every major investment have a defined goal, time horizon and role?",
    context: "A portfolio becomes easier to review when every holding has a reason to exist.",
  },
  {
    id: "concentration",
    category: "Diversification",
    question: "Is your long-term wealth diversified beyond property, deposits and a few familiar products?",
    context: "Diversification should be assessed across asset classes, strategies, liquidity and sources of risk.",
  },
  {
    id: "protection",
    category: "Protection",
    question: "Have your family protection and professional-risk covers been reviewed recently?",
    context: "A licensed insurance professional should review health, life, disability and professional indemnity needs.",
  },
  {
    id: "tax-coordination",
    category: "Tax coordination",
    question: "Does your CA receive a complete, organised view of professional income and investments?",
    context: "Doctors may have salary, consultation, practice and investment records that need to be considered together.",
  },
  {
    id: "retirement",
    category: "Retirement",
    question: "Do you know the corpus and investment pace required to make work optional?",
    context: "Medicine may not have a fixed retirement age, but a plan should still define financial independence.",
  },
  {
    id: "legacy",
    category: "Legacy",
    question: "Are nominations, account ownership and your estate plan current?",
    context: "A lawyer should advise on wills, trusts and succession; your portfolio records should support that plan.",
  },
];

const answerScores: Record<Answer, number> = {
  yes: 2,
  partly: 1,
  no: 0,
};

function getResult(score: number) {
  if (score >= 88) {
    return {
      label: "Optimisation ready",
      heading: "Your foundations look strong.",
      copy: "Your next opportunity is likely portfolio efficiency: allocation, product overlap, costs, tax coordination and long-term monitoring.",
      color: "#2F855A",
    };
  }
  if (score >= 63) {
    return {
      label: "Stable, with gaps",
      heading: "You have a base—now connect the pieces.",
      copy: "A structured review can help turn several good financial decisions into one coordinated personal and practice wealth plan.",
      color: "#8B6815",
    };
  }
  if (score >= 38) {
    return {
      label: "Needs structure",
      heading: "Important decisions are still disconnected.",
      copy: "Start with liquidity, personal-versus-practice separation and a written portfolio allocation before adding more products.",
      color: "#B45309",
    };
  }
  return {
    label: "Foundation first",
    heading: "Build the financial foundations before optimising returns.",
    copy: "Prioritise visibility, liquidity, protection coordination and a clear investment system. Progress matters more than complexity.",
    color: "#B42318",
  };
}

export function DoctorWealthCheckup() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [showResult, setShowResult] = useState(false);

  const question = questions[current];
  const selected = answers[question.id];
  const completed = Object.keys(answers).length;
  const rawScore = questions.reduce((total, item) => total + (answers[item.id] ? answerScores[answers[item.id]] : 0), 0);
  const score = Math.round((rawScore / (questions.length * 2)) * 100);
  const result = getResult(score);
  const focusAreas = questions
    .filter((item) => answers[item.id] !== "yes")
    .sort((a, b) => answerScores[answers[a.id] || "no"] - answerScores[answers[b.id] || "no"])
    .slice(0, 3);

  const selectAnswer = (answer: Answer) => {
    setAnswers((previous) => ({ ...previous, [question.id]: answer }));
  };

  const next = () => {
    if (!selected) return;
    if (current === questions.length - 1) {
      setShowResult(true);
      return;
    }
    setCurrent((value) => value + 1);
  };

  const restart = () => {
    setAnswers({});
    setCurrent(0);
    setShowResult(false);
  };

  return (
    <section id="doctor-wealth-checkup" className="scroll-mt-24 bg-[#F7F8FA] py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-4 py-2 font-body text-xs font-bold uppercase tracking-[0.15em] text-[#C9A84C]">
              <Stethoscope className="h-4 w-4" aria-hidden="true" />
              Free 2-minute check-up
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-[#0B1F3A] md:text-4xl lg:text-5xl">
              How healthy is your doctor wealth system?
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-slate-600 md:text-lg">
              Answer eight practical questions across personal wealth, practice finances and family planning. You will
              get an immediate readiness score and three areas to discuss next.
            </p>
            <div className="mt-7 rounded-2xl border border-[#C9A84C]/30 bg-[#FDF9EF] p-5">
              <p className="font-body text-sm leading-relaxed text-slate-700">
                Educational diagnostic only. Your answers stay in this browser and are not saved or used to recommend
                a security, tax position, insurance policy or legal structure.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_60px_-35px_rgba(11,31,58,.45)] md:p-9">
            {showResult ? (
              <div aria-live="polite">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span
                    className="rounded-full px-4 py-2 font-body text-xs font-bold uppercase tracking-[0.14em]"
                    style={{ backgroundColor: `${result.color}14`, color: result.color }}
                  >
                    {result.label}
                  </span>
                  <span className="font-display text-4xl font-semibold text-[#0B1F3A]">
                    {score}<span className="font-body text-base font-medium text-slate-400">/100</span>
                  </span>
                </div>
                <h3 className="mt-7 font-display text-2xl font-semibold text-[#0B1F3A] md:text-3xl">{result.heading}</h3>
                <p className="mt-4 font-body text-base leading-relaxed text-slate-600">{result.copy}</p>

                {focusAreas.length > 0 && (
                  <div className="mt-7">
                    <p className="font-body text-xs font-bold uppercase tracking-[0.14em] text-[#8B6815]">
                      Your priority discussion areas
                    </p>
                    <ul className="mt-4 space-y-3">
                      {focusAreas.map((area) => (
                        <li key={area.id} className="flex items-start gap-3 rounded-xl bg-[#F7F8FA] p-4">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B18C2D]" aria-hidden="true" />
                          <div>
                            <p className="font-body text-sm font-bold text-[#0B1F3A]">{area.category}</p>
                            <p className="mt-1 font-body text-sm leading-relaxed text-slate-600">{area.context}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#doctor-consultation"
                    className="inline-flex items-center justify-center rounded-lg bg-[#C9A84C] px-6 py-3.5 font-body text-sm font-bold text-[#0B1F3A] transition hover:bg-[#d8ba62]"
                  >
                    Discuss my score
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={restart}
                    className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-6 py-3.5 font-body text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" />
                    Start again
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between gap-4">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.14em] text-[#8B6815]">
                    {question.category}
                  </p>
                  <p className="font-body text-xs font-semibold text-slate-400">
                    {current + 1} of {questions.length}
                  </p>
                </div>
                <div
                  className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100"
                  role="progressbar"
                  aria-label="Doctor wealth check-up progress"
                  aria-valuemin={0}
                  aria-valuemax={questions.length}
                  aria-valuenow={completed}
                >
                  <div
                    className="h-full rounded-full bg-[#C9A84C] transition-all duration-300"
                    style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                  />
                </div>

                <h3 className="mt-8 font-display text-2xl font-semibold leading-snug text-[#0B1F3A] md:text-3xl">
                  {question.question}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-slate-500">{question.context}</p>

                <fieldset className="mt-8">
                  <legend className="sr-only">Choose your answer</legend>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {([
                      ["yes", "Yes"],
                      ["partly", "Partly"],
                      ["no", "Not yet"],
                    ] as const).map(([value, label]) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => selectAnswer(value)}
                        aria-pressed={selected === value}
                        className="rounded-xl border px-4 py-3.5 font-body text-sm font-bold transition"
                        style={
                          selected === value
                            ? { borderColor: "#C9A84C", backgroundColor: "#FDF7E8", color: "#0B1F3A" }
                            : { borderColor: "#E2E8F0", backgroundColor: "#FFFFFF", color: "#475569" }
                        }
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-8 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrent((value) => Math.max(0, value - 1))}
                    disabled={current === 0}
                    className="inline-flex items-center font-body text-sm font-semibold text-slate-500 transition hover:text-[#0B1F3A] disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    disabled={!selected}
                    className="inline-flex items-center rounded-lg bg-[#0B1F3A] px-6 py-3.5 font-body text-sm font-bold text-white transition hover:bg-[#132d50] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {current === questions.length - 1 ? "See my score" : "Next question"}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
