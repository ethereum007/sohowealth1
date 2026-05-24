"use client";

import { useState } from "react";
import {
  ChevronDown, TrendingUp, Target, Wallet, CalendarClock,
  CheckCircle2, AlertCircle, AlertTriangle, Landmark,
} from "lucide-react";
import type { ComputedGoal, ComputedPlan, GoalStatus, GoalType } from "@/lib/wealth/types";
import { inrCompact, inrFull, pct } from "@/lib/wealth/calculations";

const STATUS_META: Record<GoalStatus, { label: string; dot: string; chip: string; bar: string }> = {
  on_track: { label: "On track", dot: "bg-emerald-500", chip: "bg-emerald-100 text-emerald-700", bar: "#10b981" },
  review:   { label: "Review",   dot: "bg-amber-500",   chip: "bg-amber-100 text-amber-700",     bar: "#f59e0b" },
  critical: { label: "Critical", dot: "bg-red-500",     chip: "bg-red-100 text-red-700",         bar: "#ef4444" },
};

const GOAL_EMOJI: Record<GoalType, string> = {
  emergency: "🛟", education: "🎓", marriage: "💍", house: "🏠",
  car: "🚗", vacation: "✈️", retirement: "🌴", other: "🎯",
};

export default function GoalFundingMap({ plan }: { plan: ComputedPlan }) {
  const goals = [...plan.goals].sort((a, b) => a.years_to_goal - b.years_to_goal);
  const f = plan.goalFunding;

  if (goals.length === 0) {
    return (
      <Card>
        <CardTitle icon={<Target className="w-5 h-5 text-amber-600" />}>Goal Funding Map</CardTitle>
        <p className="text-sm text-slate-400 italic py-6 text-center">
          No goals added yet. Add a few in your plan to see the funding map.
        </p>
      </Card>
    );
  }

  const maxFV = Math.max(...goals.map(g => g.future_value), 1);
  const maxYear = Math.max(...goals.map(g => g.years_to_goal), 1);

  return (
    <Card>
      <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
        <CardTitle icon={<Target className="w-5 h-5 text-amber-600" />}>Goal Funding Map</CardTitle>
        <div className="flex items-center gap-3 text-xs">
          <LegendDot status="on_track" count={f.onTrackCount} />
          <LegendDot status="review" count={f.reviewCount} />
          <LegendDot status="critical" count={f.criticalCount} />
        </div>
      </div>

      {/* ---- totals strip ---- */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <Stat icon={<Target className="w-4 h-4" />} label="Total goal value (future)" value={inrCompact(f.totalFutureValue)} />
        <Stat icon={<Wallet className="w-4 h-4" />} label="Already earmarked (future)" value={inrCompact(f.totalEarmarkedFV)} tone="good" />
        <Stat icon={<AlertTriangle className="w-4 h-4" />} label="Funding gap" value={inrCompact(f.totalGap)} tone={f.totalGap > 0 ? "warn" : "good"} />
        <Stat icon={<TrendingUp className="w-4 h-4" />} label="SIP needed / month" value={inrFull(f.totalMonthlySip)} tone="warn" />
      </div>

      {/* ---- timeline ---- */}
      <div className="mb-6">
        <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-3">Timeline</p>
        <div className="space-y-2.5">
          {goals.map(g => {
            const meta = STATUS_META[g.status];
            const offset = (g.years_to_goal / maxYear) * 100;
            const width = Math.max(8, (g.future_value / maxFV) * 100);
            const room = Math.max(0, 100 - offset);
            const barW = Math.min(width, room || width);
            return (
              <div key={g.id} className="flex items-center gap-3">
                <div className="w-28 sm:w-40 shrink-0 text-xs text-slate-600 truncate">
                  <span className="mr-1">{GOAL_EMOJI[g.goal_type]}</span>{g.goal_name}
                </div>
                <div className="relative flex-1 h-7 rounded-md bg-slate-100 overflow-hidden">
                  <div
                    className="absolute top-0 h-full rounded-md flex items-center justify-end pr-2"
                    style={{ left: `${offset}%`, width: `${barW}%`, background: meta.bar, opacity: 0.9, minWidth: 56 }}
                  >
                    <span className="text-[10px] font-semibold text-white whitespace-nowrap">{inrCompact(g.future_value)}</span>
                  </div>
                </div>
                <div className="w-14 shrink-0 text-right text-xs text-slate-500 tabular-nums">
                  {g.years_to_goal === 0 ? "now" : `${g.years_to_goal}y`}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---- per-goal detail rows ---- */}
      <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">Goal-by-goal</p>
      <div className="divide-y divide-slate-100 border border-slate-200 rounded-lg overflow-hidden">
        {goals.map(g => <GoalRow key={g.id} goal={g} />)}
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
        Future values inflate today&apos;s cost to the target year. Earmarked assets grow at a horizon-appropriate
        blended return ({"<"}3y debt-heavy → 10y+ equity-heavy). SIP / lump-sum figures close the remaining gap.
      </p>
    </Card>
  );
}

function GoalRow({ goal: g }: { goal: ComputedGoal }) {
  const [open, setOpen] = useState(false);
  const meta = STATUS_META[g.status];
  return (
    <div className="bg-white">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="text-lg leading-none">{GOAL_EMOJI[g.goal_type]}</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-slate-900 truncate">{g.goal_name}</p>
          <p className="text-xs text-slate-500">
            {g.target_year} · {g.years_to_goal === 0 ? "this year" : `${g.years_to_goal} yrs`} · {inrCompact(g.future_value)}
          </p>
        </div>
        {/* funding bar */}
        <div className="hidden sm:flex items-center gap-2 w-40">
          <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full rounded-full" style={{ width: `${Math.min(100, g.funding_pct)}%`, background: meta.bar }} />
          </div>
          <span className="text-xs tabular-nums text-slate-500 w-9 text-right">{pct(g.funding_pct, 0)}</span>
        </div>
        <span className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-semibold ${meta.chip}`}>
          {meta.label}
        </span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="px-4 pb-4 pt-1 bg-slate-50/60 border-t border-slate-100">
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm mt-2">
            <DetailRow label="Today's cost (present value)" value={inrFull(g.present_value)} />
            <DetailRow label="Future value at target" value={inrFull(g.future_value)} bold />
            <DetailRow label="Years to goal" value={g.years_to_goal === 0 ? "this year" : `${g.years_to_goal} yrs`} />
            <DetailRow label="Expected return (horizon-based)" value={pct(g.expected_return)} />
            <DetailRow label="Already earmarked (today)" value={inrFull(g.earmarked_assets)} />
            <DetailRow label="Earmarked grows to" value={inrFull(g.earmarked_future_value)} />
            <DetailRow label="Funding gap" value={inrFull(g.gap)} tone={g.gap > 0 ? "warn" : "good"} bold />
            <DetailRow label="Funded" value={pct(g.funding_pct, 0)} />
          </div>

          {g.gap > 0 && (
            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              <FundOption label="Start a monthly SIP" value={`${inrFull(g.sip_required_monthly)}/mo`} hint={`for ${g.years_to_goal || 1} years @ ${pct(g.expected_return)}`} />
              <FundOption label="Or invest a lump sum today" value={inrFull(g.lumpsum_required)} hint="grows to cover the gap" />
            </div>
          )}

          {g.loan && (
            <div className="mt-3 rounded-lg border border-slate-200 bg-white p-3">
              <p className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Landmark className="w-3.5 h-3.5 text-slate-500" /> Loan vs. down-payment (typical structure)
              </p>
              <div className="grid sm:grid-cols-3 gap-x-6 gap-y-1 text-sm mt-2">
                <DetailRow label="Down-payment" value={inrCompact(g.loan.down_payment)} />
                <DetailRow label="Loan amount" value={inrCompact(g.loan.loan_amount)} />
                <DetailRow label={`EMI (${g.loan.tenure_years}y)`} value={`${inrFull(g.loan.emi_monthly)}/mo`} />
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                Plan funds the down-payment; the rest is serviced via EMI. Confirm eligibility before committing.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ---------- presentational ---------- */
function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">{children}</div>;
}
function CardTitle({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return <h3 className="font-serif text-xl text-slate-900 flex items-center gap-2">{icon}{children}</h3>;
}
function Stat({ icon, label, value, tone }: { icon: React.ReactNode; label: string; value: string; tone?: "good" | "warn" }) {
  const toneClass = tone === "warn" ? "text-amber-700" : tone === "good" ? "text-emerald-700" : "text-slate-900";
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3">
      <div className="flex items-center gap-1.5 text-slate-400">{icon}<p className="text-[11px] uppercase tracking-wider font-semibold">{label}</p></div>
      <p className={`font-serif text-xl mt-1 tabular-nums ${toneClass}`}>{value}</p>
    </div>
  );
}
function LegendDot({ status, count }: { status: GoalStatus; count: number }) {
  const meta = STATUS_META[status];
  return (
    <span className="flex items-center gap-1.5 text-slate-500">
      <span className={`inline-block w-2 h-2 rounded-full ${meta.dot}`} />
      {meta.label} <span className="tabular-nums font-semibold text-slate-700">{count}</span>
    </span>
  );
}
function DetailRow({ label, value, bold, tone }: { label: string; value: string; bold?: boolean; tone?: "good" | "warn" }) {
  const toneClass = tone === "warn" ? "text-amber-700" : tone === "good" ? "text-emerald-700" : "text-slate-700";
  return (
    <div className="flex justify-between border-b border-slate-100 py-1">
      <span className="text-slate-500">{label}</span>
      <span className={`tabular-nums ${bold ? "font-semibold" : ""} ${toneClass}`}>{value}</span>
    </div>
  );
}
function FundOption({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-lg border border-emerald-100 bg-emerald-50/60 p-3">
      <p className="text-[11px] uppercase tracking-wider text-emerald-700 font-semibold">{label}</p>
      <p className="font-serif text-lg text-slate-900 tabular-nums mt-0.5">{value}</p>
      <p className="text-[11px] text-slate-500">{hint}</p>
    </div>
  );
}
