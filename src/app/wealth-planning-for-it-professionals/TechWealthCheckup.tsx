"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  RotateCcw,
} from "lucide-react";

type Answer = "yes" | "partly" | "no";

type Question = {
  id: string;
  category: string;
  question: string;
  context: string;
};

const questions: Question[] = [
  {
    id: "employer-stock",
    category: "Concentration",
    question: "Do you know what percentage of your liquid wealth is tied to your employer’s shares?",
    context:
      "Salary, bonus, career prospects and employer stock can all depend on the same company. Measuring that overlap is the first step.",
  },
  {
    id: "grant-calendar",
    category: "Equity compensation",
    question: "Are every RSU and ESOP grant, vesting date and exercise term recorded in one place?",
    context:
      "A single grant calendar helps you prepare for vesting, job changes and exercise windows without relying on memory.",
  },
  {
    id: "allocation-rule",
    category: "Cash flow",
    question: "Do you have a written rule for allocating salary hikes, bonuses and vest proceeds?",
    context:
      "A repeatable rule can direct irregular inflows toward goals, diversification and lifestyle spending before inertia takes over.",
  },
  {
    id: "career-runway",
    category: "Career optionality",
    question: "Could your household manage a six-to-twelve-month career break without selling long-term assets?",
    context:
      "A career runway can protect you during a job switch, sabbatical, startup attempt or delayed joining date.",
  },
  {
    id: "goal-buckets",
    category: "Portfolio",
    question: "Are your near-term goals and long-term investments separated by time horizon?",
    context:
      "Home purchases, education, relocation and financial independence need different liquidity and risk decisions.",
  },
  {
    id: "foreign-assets",
    category: "Records",
    question: "Are your foreign brokerage statements and equity-compensation records organised for your CA?",
    context:
      "Foreign holdings can create reporting questions. SoHo does not give tax advice, but an organised record trail makes specialist review easier.",
  },
  {
    id: "fi-number",
    category: "Financial independence",
    question: "Do you know the corpus and monthly investment pace that could make work optional?",
    context:
      "A defined financial-independence target turns a broad ambition into a goal that can be measured and reviewed.",
  },
  {
    id: "estate",
    category: "Continuity",
    question: "Are nominees, account access and your estate documents current across Indian and overseas assets?",
    context:
      "Cross-platform wealth is harder for a family to locate. A lawyer should advise on wills and succession.",
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
      heading: "Your wealth system has strong foundations.",
      copy: "The next review can focus on concentration limits, portfolio overlap, costs and the path from career wealth to financial independence.",
      color: "#2F855A",
    };
  }
  if (score >= 63) {
    return {
      label: "Good base, visible gaps",
      heading: "Connect your compensation plan to your investment plan.",
      copy: "You have several strong habits. A written framework for equity compensation, irregular inflows and career events can make them work together.",
      color: "#8B6815",
    };
  }
  if (score >= 38) {
    return {
      label: "Needs a system",
      heading: "Important decisions are still happening event by event.",
      copy: "Start with visibility, career runway and a rule for salary, bonus and vest proceeds before adding portfolio complexity.",
      color: "#B45309",
    };
  }
  return {
    label: "Foundation first",
    heading: "Build visibility before optimising returns.",
    copy: "Map compensation, assets and near-term commitments first. Then create liquidity, diversification and goal-funding rules that can survive a career change.",
    color: "#B42318",
  };
}

export function TechWealthCheckup() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [showResult, setShowResult] = useState(false);

  const question = questions[current];
  const selected = answers[question.id];
  const completed = Object.keys(answers).length;
  const rawScore = questions.reduce(
    (total, item) => total + (answers[item.id] ? answerScores[answers[item.id]] : 0),
    0,
  );
  const score = Math.round((rawScore / (questions.length * 2)) * 100);
  const result = getResult(score);
  const focusAreas = questions
    .filter((item) => answers[item.id] !== "yes")
    .sort(
      (a, b) =>
        answerScores[answers[a.id] || "no"] - answerScores[answers[b.id] || "no"],
    )
    .slice(0, 3);

  function selectAnswer(answer: Answer) {
    setAnswers((previous) => ({ ...previous, [question.id]: answer }));
  }

  function nextQuestion() {
    if (!selected) return;
    if (current === questions.length - 1) {
      setShowResult(true);
      return;
    }
    setCurrent((value) => value + 1);
  }

  function restart() {
    setAnswers({});
    setCurrent(0);
    setShowResult(false);
  }

  return (
    <section
      id="tech-wealth-checkup"
      className="scroll-mt-24 overflow-hidden bg-[#07192F] py-20 lg:py-28"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-white/[0.06] px-4 py-2 font-body text-xs font-bold uppercase tracking-[0.15em] text-[#C9A84C]">
              <Cpu className="h-4 w-4" aria-hidden="true" />
              Free 2-minute check-up
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              Is your tech income becoming durable wealth?
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-white/70 md:text-lg">
              Answer eight practical questions about employer stock, career runway,
              goals and financial independence. You will get an immediate readiness
              score and three areas to discuss next.
            </p>
            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
              <p className="font-body text-sm leading-relaxed text-white/65">
                Educational diagnostic only. Your answers stay in this browser and
                are not saved or used to recommend a security, tax position or stock
                option action.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white p-6 shadow-[0_24px_80px_-35px_rgba(0,0,0,.75)] md:p-9">
            {showResult ? (
              <div aria-live="polite">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span
                    className="rounded-full px-4 py-2 font-body text-xs font-bold uppercase tracking-[0.14em]"
                    style={{
                      backgroundColor: `${result.color}14`,
                      color: result.color,
                    }}
                  >
                    {result.label}
                  </span>
                  <span className="font-display text-4xl font-semibold text-[#0B1F3A]">
                    {score}
                    <span className="font-body text-base font-medium text-slate-400">
                      /100
                    </span>
                  </span>
                </div>
                <h3 className="mt-7 font-display text-2xl font-semibold text-[#0B1F3A] md:text-3xl">
                  {result.heading}
                </h3>
                <p className="mt-4 font-body text-base leading-relaxed text-slate-600">
                  {result.copy}
                </p>

                {focusAreas.length > 0 && (
                  <div className="mt-7">
                    <p className="font-body text-xs font-bold uppercase tracking-[0.14em] text-[#8B6815]">
                      Your priority discussion areas
                    </p>
                    <ul className="mt-4 space-y-3">
                      {focusAreas.map((area) => (
                        <li
                          key={area.id}
                          className="flex items-start gap-3 rounded-xl bg-[#F7F8FA] p-4"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-5 w-5 shrink-0 text-[#B18C2D]"
                            aria-hidden="true"
                          />
                          <div>
                            <p className="font-body text-sm font-bold text-[#0B1F3A]">
                              {area.category}
                            </p>
                            <p className="mt-1 font-body text-sm leading-relaxed text-slate-600">
                              {area.context}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#it-professional-consultation"
                    className="inline-flex items-center justify-center rounded-lg bg-[#C9A84C] px-6 py-3.5 font-body text-sm font-bold text-[#0B1F3A] transition hover:bg-[#D8BA62]"
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
                  aria-label="Tech wealth check-up progress"
                  aria-valuemin={0}
                  aria-valuemax={questions.length}
                  aria-valuenow={completed}
                >
                  <div
                    className="h-full rounded-full bg-[#C9A84C] transition-all duration-300"
                    style={{
                      width: `${((current + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>

                <h3 className="mt-8 font-display text-2xl font-semibold leading-snug text-[#0B1F3A] md:text-3xl">
                  {question.question}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-slate-500">
                  {question.context}
                </p>

                <fieldset className="mt-8">
                  <legend className="sr-only">Choose your answer</legend>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {(
                      [
                        ["yes", "Yes"],
                        ["partly", "Partly"],
                        ["no", "Not yet"],
                      ] as const
                    ).map(([value, label]) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => selectAnswer(value)}
                        aria-pressed={selected === value}
                        className="rounded-xl border px-4 py-3.5 font-body text-sm font-bold transition"
                        style={
                          selected === value
                            ? {
                                borderColor: "#C9A84C",
                                backgroundColor: "#FDF7E8",
                                color: "#0B1F3A",
                              }
                            : {
                                borderColor: "#E2E8F0",
                                backgroundColor: "#FFFFFF",
                                color: "#475569",
                              }
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
                    onClick={() =>
                      setCurrent((value) => Math.max(0, value - 1))
                    }
                    disabled={current === 0}
                    className="inline-flex items-center font-body text-sm font-semibold text-slate-500 transition hover:text-[#0B1F3A] disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextQuestion}
                    disabled={!selected}
                    className="inline-flex items-center rounded-lg bg-[#0B1F3A] px-6 py-3.5 font-body text-sm font-bold text-white transition hover:bg-[#132D50] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {current === questions.length - 1
                      ? "See my score"
                      : "Next question"}
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
