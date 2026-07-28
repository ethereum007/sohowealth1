"use client";

import { useState } from "react";
import { Calculator, LockKeyhole, RotateCcw } from "lucide-react";

const formatIndianCurrency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function toAmount(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

export function RSUConcentrationWorksheet() {
  const [employerStock, setEmployerStock] = useState("");
  const [otherInvestments, setOtherInvestments] = useState("");
  const [unvestedAwards, setUnvestedAwards] = useState("");

  const employerStockValue = toAmount(employerStock);
  const otherInvestmentsValue = toAmount(otherInvestments);
  const unvestedAwardsValue = toAmount(unvestedAwards);
  const liquidPortfolio = employerStockValue + otherInvestmentsValue;
  const concentration =
    liquidPortfolio > 0 ? (employerStockValue / liquidPortfolio) * 100 : 0;

  const reset = () => {
    setEmployerStock("");
    setOtherInvestments("");
    setUnvestedAwards("");
  };

  return (
    <section
      id="rsu-concentration-worksheet"
      className="scroll-mt-24 bg-[#F7F8FA] py-20 lg:py-28"
      aria-labelledby="rsu-worksheet-heading"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#8B6815]">
              Private, browser-only worksheet
            </p>
            <h2
              id="rsu-worksheet-heading"
              className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl"
            >
              See how much of your liquid portfolio depends on one employer.
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-slate-600">
              Enter approximate current values. The result is a conversation
              starter, not a sell signal or a recommended concentration limit.
              Unvested awards are shown separately because they are future,
              conditional compensation rather than liquid wealth today.
            </p>

            <div className="mt-8 rounded-2xl border border-[#C9A84C]/30 bg-[#FDF9EF] p-5">
              <div className="flex items-center gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-[#8B6815]"
                  aria-hidden="true"
                />
                <p className="font-body text-sm font-semibold text-[#0B1F3A]">
                  Nothing is uploaded or saved
                </p>
              </div>
              <p className="mt-2 font-body text-xs leading-relaxed text-slate-600">
                The calculation runs only in your browser. Do not enter account
                numbers, broker credentials or other sensitive information.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#C9A84C]">
                  <Calculator className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#0B1F3A]">
                    Employer-stock snapshot
                  </h3>
                  <p className="font-body text-xs text-slate-500">
                    Use current approximate market values
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={reset}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 font-body text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-[#0B1F3A]"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Reset
              </button>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="block font-body text-sm font-semibold text-slate-700">
                Vested employer shares (₹)
                <input
                  type="number"
                  min="0"
                  step="10000"
                  inputMode="decimal"
                  value={employerStock}
                  onChange={(event) => setEmployerStock(event.target.value)}
                  placeholder="25,00,000"
                  className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base font-normal text-[#0B1F3A] outline-none transition placeholder:text-slate-300 focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20"
                />
              </label>
              <label className="block font-body text-sm font-semibold text-slate-700">
                Other liquid investments (₹)
                <input
                  type="number"
                  min="0"
                  step="10000"
                  inputMode="decimal"
                  value={otherInvestments}
                  onChange={(event) => setOtherInvestments(event.target.value)}
                  placeholder="75,00,000"
                  className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base font-normal text-[#0B1F3A] outline-none transition placeholder:text-slate-300 focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20"
                />
              </label>
              <label className="block font-body text-sm font-semibold text-slate-700 sm:col-span-2">
                Approximate unvested awards (₹, optional)
                <input
                  type="number"
                  min="0"
                  step="10000"
                  inputMode="decimal"
                  value={unvestedAwards}
                  onChange={(event) => setUnvestedAwards(event.target.value)}
                  placeholder="40,00,000"
                  className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base font-normal text-[#0B1F3A] outline-none transition placeholder:text-slate-300 focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20"
                />
              </label>
            </div>

            <div
              className="mt-7 rounded-2xl bg-[#0B1F3A] p-6 text-white"
              aria-live="polite"
            >
              <p className="font-body text-xs font-bold uppercase tracking-[0.14em] text-[#C9A84C]">
                Current employer-stock concentration
              </p>
              <p className="mt-2 font-display text-5xl font-semibold">
                {liquidPortfolio > 0 ? `${concentration.toFixed(1)}%` : "—"}
              </p>
              <div className="mt-5 grid gap-3 border-t border-white/15 pt-5 sm:grid-cols-2">
                <div>
                  <p className="font-body text-xs text-white/55">
                    Liquid portfolio entered
                  </p>
                  <p className="mt-1 font-body text-sm font-semibold">
                    {formatIndianCurrency.format(liquidPortfolio)}
                  </p>
                </div>
                <div>
                  <p className="font-body text-xs text-white/55">
                    Unvested awards, separate
                  </p>
                  <p className="mt-1 font-body text-sm font-semibold">
                    {formatIndianCurrency.format(unvestedAwardsValue)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#8B6815]">
                Questions to take into a review
              </p>
              <ul className="mt-3 space-y-2 font-body text-sm leading-relaxed text-slate-600">
                <li>• How much future income and unvested equity depend on the same company?</li>
                <li>• Which family goals rely on this stock holding?</li>
                <li>• What records, tax and FEMA questions must be resolved before acting?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
