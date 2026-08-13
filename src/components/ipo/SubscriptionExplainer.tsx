"use client";

import { useMemo, useState } from "react";
import { Calculator, Info } from "lucide-react";

const demandBands = [
  { range: "Below 1×", meaning: "Demand is below the shares available at that point.", caution: "Final-day bids can materially change the figure." },
  { range: "1×", meaning: "Bids approximately match the shares available.", caution: "A fully subscribed issue is not automatically fully allotted in every category." },
  { range: "2–5×", meaning: "Demand exceeds supply, so allotment pressure begins.", caution: "Category-level demand matters more than the total alone." },
  { range: "5–20×", meaning: "The category is meaningfully oversubscribed.", caution: "This still says nothing directly about valuation or business quality." },
  { range: "Above 20×", meaning: "Demand is very high relative to the offered quantity.", caution: "Small issues can produce extreme multiples with modest absolute demand." },
];

const numberValue = (value: string, fallback: number) => {
  const parsed = Number(value.replace(/,/g, ""));
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

export function SubscriptionExplainer() {
  const [sharesOffered, setSharesOffered] = useState("1000000");
  const [sharesBid, setSharesBid] = useState("8500000");
  const [retailShares, setRetailShares] = useState("350000");
  const [lotSize, setLotSize] = useState("50");
  const [validApplicants, setValidApplicants] = useState("50000");

  const result = useMemo(() => {
    const offered = numberValue(sharesOffered, 1);
    const bid = numberValue(sharesBid, 1);
    const reserved = numberValue(retailShares, 1);
    const lot = numberValue(lotSize, 1);
    const applicants = numberValue(validApplicants, 1);
    const subscription = bid / offered;
    const minimumLots = Math.floor(reserved / lot);
    const illustrativeChance = Math.min(100, (minimumLots / applicants) * 100);
    return { subscription, minimumLots, illustrativeChance };
  }, [sharesOffered, sharesBid, retailShares, lotSize, validApplicants]);

  const fields = [
    ["Shares offered in category", sharesOffered, setSharesOffered],
    ["Shares bid for", sharesBid, setSharesBid],
  ] as const;

  const allotmentFields = [
    ["Shares reserved for retail", retailShares, setRetailShares],
    ["Minimum lot size", lotSize, setLotSize],
    ["Valid retail applicants", validApplicants, setValidApplicants],
  ] as const;

  return (
    <div className="space-y-12">
      <section className="grid gap-7 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Calculator className="h-6 w-6 text-emerald-700" />
            <h2 className="font-display text-2xl font-semibold" style={{ color: "#0B1F3A" }}>Subscription multiple calculator</h2>
          </div>
          <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">Enter category-level demand—not the entire IPO—to calculate the subscription multiple.</p>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {fields.map(([label, value, setter]) => (
              <label key={label} className="font-body text-sm font-semibold text-slate-700">
                {label}
                <input type="number" min="1" value={value} onChange={(event) => setter(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-body text-base text-slate-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" />
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center rounded-2xl p-8 text-white" style={{ background: "#0B1F3A" }}>
          <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Calculated demand</p>
          <p className="mt-3 font-display text-6xl font-semibold">{result.subscription.toFixed(2)}×</p>
          <p className="mt-5 font-body text-sm leading-relaxed text-white/70">Bids are {result.subscription.toFixed(2)} times the shares available in this category. This is a demand ratio, not a return forecast or quality rating.</p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-3xl font-semibold" style={{ color: "#0B1F3A" }}>How to read subscription levels</h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
          {demandBands.map((band, index) => (
            <div key={band.range} className={`grid gap-2 bg-white p-5 md:grid-cols-[120px_1fr_1fr] ${index ? "border-t border-slate-200" : ""}`}>
              <strong className="font-body text-sm text-emerald-800">{band.range}</strong>
              <span className="font-body text-sm leading-relaxed text-slate-700">{band.meaning}</span>
              <span className="font-body text-sm leading-relaxed text-slate-500">{band.caution}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
        <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Retail allotment illustration</p>
        <h2 className="mt-3 font-display text-3xl font-semibold" style={{ color: "#0B1F3A" }}>Why oversubscription can lead to a draw of lots</h2>
        <p className="mt-4 max-w-3xl font-body text-sm leading-relaxed text-slate-600">This simplified illustration assumes each successful retail applicant receives one minimum lot. It does not reproduce the exchange-approved basis of allotment.</p>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {allotmentFields.map(([label, value, setter]) => (
            <label key={label} className="font-body text-sm font-semibold text-slate-700">
              {label}
              <input type="number" min="1" value={value} onChange={(event) => setter(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 font-body text-base outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" />
            </label>
          ))}
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-white p-5">
            <p className="font-body text-xs font-bold uppercase tracking-[0.1em] text-slate-500">Minimum lots available</p>
            <p className="mt-2 font-display text-3xl font-semibold" style={{ color: "#0B1F3A" }}>{result.minimumLots.toLocaleString("en-IN")}</p>
          </div>
          <div className="rounded-xl bg-white p-5">
            <p className="font-body text-xs font-bold uppercase tracking-[0.1em] text-slate-500">Illustrative applicant coverage</p>
            <p className="mt-2 font-display text-3xl font-semibold" style={{ color: "#0B1F3A" }}>{result.illustrativeChance.toFixed(2)}%</p>
          </div>
        </div>
        <div className="mt-5 flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-800" />
          <p className="font-body text-xs leading-relaxed text-amber-900/80">This percentage is an educational ratio, not your actual allotment probability. Valid applications, category rules, lot rounding, technical rejections and the final basis of allotment determine the outcome.</p>
        </div>
      </section>
    </div>
  );
}

