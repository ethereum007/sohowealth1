"use client";

import Link from "next/link";
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend,
} from "recharts";
import {
  ArrowRight, AlertTriangle, MessageCircle, Pencil, ShieldCheck,
  TrendingUp, PiggyBank, Wallet, FileDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ComputedPlan, UserData, AssetClass } from "@/lib/wealth/types";
import { inrCompact, inrFull, pct } from "@/lib/wealth/calculations";
import { buildImplementation } from "@/lib/wealth/implementation";
import { projectCashflows, buildActionPlan } from "@/lib/wealth/projections";
import GoalFundingMap from "./GoalFundingMap";
import ImplementationPlan from "./ImplementationPlan";
import CashflowProjection from "./CashflowProjection";
import ActionPlan from "./ActionPlan";

const ASSET_COLORS: Record<AssetClass, string> = {
  liquid:      "#3b82f6",
  debt:        "#10b981",
  equity:      "#d4af37",
  gold:        "#f59e0b",
  real_estate: "#7c3aed",
  personal:    "#94a3b8",
};

const ASSET_LABELS: Record<AssetClass, string> = {
  liquid: "Liquid", debt: "Debt", equity: "Equity",
  gold: "Gold", real_estate: "Real Estate", personal: "Personal",
};

const WA_LINK = "https://wa.me/919032999466?text=Hi%20Kiran%2C%20I'd%20like%20to%20discuss%20my%20Wealth%20Review.";

export default function Dashboard({ plan, data }: { plan: ComputedPlan; data: UserData }) {
  const allocChartData = plan.assetAllocation
    .filter(a => a.value > 0)
    .map(a => ({ name: ASSET_LABELS[a.class], value: a.value, fill: ASSET_COLORS[a.class] }));

  const insuranceGap = plan.additionalCoverRequired > 0;
  const emergencyGap = plan.emergencyFundDeficit > 0;
  const firstName = data.profile.full_name?.split(" ")[0] || "there";

  const impl = buildImplementation(plan, data.profile);
  const cashflows = projectCashflows(data, plan, data.profile, 10);
  const actions = buildActionPlan(plan, data, impl);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white p-6 sm:p-8">
        <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-24 bottom-0 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="relative flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-amber-400 font-bold">Your Wealth Review</p>
            <h1 className="font-serif text-3xl sm:text-4xl mt-2">Hi {firstName} 👋</h1>
            <p className="text-sm text-slate-300 mt-2">
              Age {plan.age} · Retiring at {plan.retirementAge} · {plan.yearsToRetirement} years to go
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <Link href="/app/onboarding">
                <Button variant="outline" size="sm" className="border-white/25 text-white bg-transparent hover:bg-white/10">
                  <Pencil className="w-4 h-4 mr-1.5" /> Edit plan
                </Button>
              </Link>
              <Link href="/app/report">
                <Button variant="outline" size="sm" className="border-white/25 text-white bg-transparent hover:bg-white/10">
                  <FileDown className="w-4 h-4 mr-1.5" /> Download plan
                </Button>
              </Link>
              <a href={WA_LINK} target="_blank" rel="noopener">
                <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                  <MessageCircle className="w-4 h-4 mr-1.5" /> Talk to Kiran
                </Button>
              </a>
            </div>
          </div>

          {/* net-worth headline */}
          <div className="rounded-2xl bg-white/5 border border-white/10 px-6 py-5 backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Net worth</p>
            <p className="font-serif text-4xl sm:text-5xl tabular-nums mt-1">{inrCompact(plan.netWorth)}</p>
            <div className="flex items-center gap-4 mt-3 text-xs text-slate-300">
              <span>Assets <span className="font-semibold text-white">{inrCompact(plan.totalAssets)}</span></span>
              <span>Liabilities <span className="font-semibold text-white">{inrCompact(plan.totalLiabilities)}</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- KPI grid ---------- */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Kpi icon={<Wallet className="w-4 h-4" />} label="Monthly Income"    value={inrCompact(plan.monthlyIncome)} />
        <Kpi icon={<TrendingUp className="w-4 h-4" />} label="Monthly Surplus"   value={inrCompact(plan.monthlySurplus)} tone={plan.monthlySurplus < 0 ? "bad" : "good"} />
        <Kpi icon={<PiggyBank className="w-4 h-4" />} label="Savings Rate"      value={pct(plan.savingsRate)} tone={plan.savingsRate < 15 ? "warn" : "good"} />
        <Kpi icon={<ShieldCheck className="w-4 h-4" />} label="Retirement On-Track" value={pct(plan.retirementOnTrackPct, 0)} tone={plan.retirementOnTrackPct < 70 ? "warn" : "good"} />
      </section>

      {/* ---------- Critical alerts ---------- */}
      {(insuranceGap || emergencyGap) && (
        <section className="space-y-3">
          {insuranceGap && (
            <Alert tone="red" title={`You need an additional ${inrCompact(plan.additionalCoverRequired)} of life cover.`}>
              Recommended term plan: <strong>{inrCompact(plan.recommendedTermCover)}</strong> · Approx. annual premium ₹25,000–₹35,000.
              Health floater of <strong>₹25 L</strong> also recommended.
            </Alert>
          )}
          {emergencyGap && (
            <Alert tone="amber" title={`Emergency fund short by ${inrCompact(plan.emergencyFundDeficit)}.`}>
              Target = 6 months of expenses ({inrCompact(plan.emergencyFundTarget)}). Park in a liquid fund or sweep-FD.
            </Alert>
          )}
        </section>
      )}

      {/* ---------- Net worth + allocation chart ---------- */}
      <section className="grid lg:grid-cols-5 gap-6">
        <Card className="lg:col-span-3">
          <CardTitle>Net Worth Breakdown — {inrCompact(plan.totalAssets)}</CardTitle>
          <Table>
            <thead>
              <tr><Th>Asset Class</Th><Th right>Value (₹)</Th><Th right>% of Total</Th></tr>
            </thead>
            <tbody>
              {plan.assetAllocation.filter(a => a.value > 0).map(a => (
                <tr key={a.class}>
                  <Td>
                    <span className="inline-block w-2 h-2 rounded-full mr-2 align-middle" style={{ background: ASSET_COLORS[a.class] }} />
                    {ASSET_LABELS[a.class]}
                  </Td>
                  <Td right num>{inrFull(a.value)}</Td>
                  <Td right num>{pct(a.pct)}</Td>
                </tr>
              ))}
              <tr className="font-semibold bg-slate-50">
                <Td>TOTAL ASSETS</Td>
                <Td right num>{inrFull(plan.totalAssets)}</Td>
                <Td right num>100%</Td>
              </tr>
              {plan.totalLiabilities > 0 && (
                <tr><Td>Liabilities</Td><Td right num className="text-red-600">−{inrFull(plan.totalLiabilities)}</Td><Td /></tr>
              )}
              <tr className="font-semibold bg-emerald-50 text-emerald-800">
                <Td>NET WORTH</Td>
                <Td right num>{inrFull(plan.netWorth)}</Td>
                <Td />
              </tr>
            </tbody>
          </Table>
        </Card>

        <Card className="lg:col-span-2">
          <CardTitle>Asset Allocation</CardTitle>
          {allocChartData.length === 0 ? (
            <Empty>No assets added yet.</Empty>
          ) : (
            <div style={{ width: "100%", height: 280 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={allocChartData} dataKey="value" nameKey="name" innerRadius={56} outerRadius={92} paddingAngle={2}>
                    {allocChartData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                  </Pie>
                  <Tooltip formatter={(v: any) => inrFull(v)} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </Card>
      </section>

      {/* ---------- Goal Funding Map ---------- */}
      <section>
        <GoalFundingMap plan={plan} />
      </section>

      {/* ---------- Implementation ---------- */}
      <section>
        <ImplementationPlan impl={impl} />
      </section>

      {/* ---------- Cashflow projection ---------- */}
      <section>
        <CashflowProjection rows={cashflows} />
      </section>

      {/* ---------- Action plan ---------- */}
      <section>
        <ActionPlan items={actions} />
      </section>

      {/* ---------- Retirement ---------- */}
      <section className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardTitle>Retirement Planning</CardTitle>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <Row label="Years to retirement" value={`${plan.yearsToRetirement} yrs`} />
            <Row label="Post-retirement years" value={`${plan.postRetirementYears} yrs`} />
            <Row label="Annual expenses (today)" value={inrFull(plan.monthlyExpenses * 12)} />
            <Row label="Annual expenses at retirement" value={inrFull(plan.annualExpensesAtRetirement)} />
            <Row label="Corpus required" value={inrCompact(plan.retirementCorpusRequired)} bold />
            <Row label="Existing assets (FV)" value={inrCompact(plan.retirementAssetsFV)} />
            <Row label="Deficit" value={inrCompact(Math.max(0, plan.retirementCorpusRequired - plan.retirementAssetsFV))} tone="warn" />
            <Row label="SIP required/mo" value={inrFull(plan.retirementMonthlySipRequired)} bold tone="warn" />
          </div>
        </Card>

        <Card>
          <CardTitle>On-Track Meter</CardTitle>
          <div className="flex flex-col items-center justify-center py-4">
            <div className="relative">
              <svg width="180" height="180" viewBox="0 0 180 180">
                <circle cx="90" cy="90" r="72" fill="none" stroke="#fef3c7" strokeWidth="16" />
                <circle
                  cx="90" cy="90" r="72" fill="none" stroke="#10b981" strokeWidth="16"
                  strokeDasharray={`${(plan.retirementOnTrackPct / 100) * 452.39} 452.39`}
                  strokeDashoffset={113.1}
                  transform="rotate(-90 90 90)"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="font-serif text-4xl text-slate-900">{plan.retirementOnTrackPct.toFixed(0)}%</p>
                <p className="text-xs text-slate-500">on track</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2 text-center">
              Of {inrCompact(plan.retirementCorpusRequired)} target
            </p>
          </div>
        </Card>
      </section>

      {/* ---------- Insurance + Emergency ---------- */}
      <section className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardTitle>Life Insurance — Needs Analysis (HLV)</CardTitle>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <Row label="Total cover required" value={inrCompact(plan.hlvCoverRequired)} bold />
            <Row label="Existing life cover" value={inrCompact(plan.existingLifeCover)} />
            <Row label="Investable assets available" value={inrCompact(plan.investableAssets)} />
            <Row label="Additional cover required" value={inrCompact(plan.additionalCoverRequired)} tone={insuranceGap ? "warn" : "good"} bold />
            <Row label="Recommended term cover" value={inrCompact(plan.recommendedTermCover)} bold />
          </div>
        </Card>

        <Card>
          <CardTitle>Emergency Fund</CardTitle>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <Row label="Target (6 months expenses)" value={inrCompact(plan.emergencyFundTarget)} bold />
            <Row label="Currently in liquid assets" value={inrCompact(plan.emergencyFundExisting)} />
            <Row label="Shortfall" value={inrCompact(plan.emergencyFundDeficit)} tone={emergencyGap ? "warn" : "good"} bold />
            <Row label="Status" value={emergencyGap ? "Build it up" : "Fully funded"} tone={emergencyGap ? "warn" : "good"} />
          </div>
          <div className="mt-4 h-2 rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full rounded-full bg-emerald-500"
              style={{ width: `${plan.emergencyFundTarget > 0 ? Math.min(100, (plan.emergencyFundExisting / plan.emergencyFundTarget) * 100) : 0}%` }} />
          </div>
        </Card>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10">
        <div className="grid lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.18em] text-amber-400 font-bold">Next step</p>
            <h2 className="font-serif text-2xl mt-2">Turn this into an implementation plan</h2>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              These numbers are computed from what you&apos;ve entered. A 45-min call with Kiran turns this into actual
              fund picks, a term-plan shortlist, and tax positioning — mapped to each goal above.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            <a href={WA_LINK} target="_blank" rel="noopener">
              <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                Book a call <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
            <a href="mailto:invest@sohowealth.in?subject=My%20Wealth%20Review">
              <Button variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white/10">
                Email instead
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------- presentational ----------
function Kpi({ icon, label, value, tone }: { icon?: React.ReactNode; label: string; value: string; tone?: "good" | "warn" | "bad" }) {
  const toneClass = tone === "warn" ? "text-amber-700" : tone === "bad" ? "text-red-700" : tone === "good" ? "text-emerald-700" : "text-slate-900";
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
      <div className="flex items-center gap-1.5 text-slate-400">
        {icon}
        <p className="text-[11px] uppercase tracking-wider font-semibold">{label}</p>
      </div>
      <p className={`font-serif text-2xl mt-1.5 tabular-nums ${toneClass}`}>{value}</p>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-white border border-slate-200 rounded-xl p-6 shadow-sm ${className}`}>{children}</div>;
}
function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="font-serif text-xl text-slate-900 mb-4">{children}</h3>;
}
function Table({ children }: { children: React.ReactNode }) {
  return <div className="overflow-x-auto"><table className="w-full text-sm">{children}</table></div>;
}
function Th({ children, right }: { children?: React.ReactNode; right?: boolean }) {
  return <th className={`px-3 py-2 text-xs font-semibold text-slate-600 uppercase tracking-wider border-b border-slate-200 ${right ? "text-right" : "text-left"}`}>{children}</th>;
}
function Td({ children, right, num, className = "" }: { children?: React.ReactNode; right?: boolean; num?: boolean; className?: string }) {
  return (
    <td className={`px-3 py-2 border-b border-slate-100 ${right ? "text-right" : ""} ${num ? "tabular-nums" : ""} ${className}`}>
      {children}
    </td>
  );
}
function Row({ label, value, bold, tone }: { label: string; value: string; bold?: boolean; tone?: "good" | "warn" }) {
  const toneClass = tone === "warn" ? "text-amber-700" : tone === "good" ? "text-emerald-700" : "";
  return (
    <div className="flex justify-between border-b border-slate-100 py-1.5">
      <span className="text-slate-500">{label}</span>
      <span className={`tabular-nums ${bold ? "font-semibold" : ""} ${toneClass}`}>{value}</span>
    </div>
  );
}
function Empty({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-slate-400 italic py-6 text-center">{children}</p>;
}
function Alert({ tone, title, children }: { tone: "red" | "amber"; title: string; children: React.ReactNode }) {
  const styles = tone === "red"
    ? "bg-red-50 border-red-200 text-red-800"
    : "bg-amber-50 border-amber-200 text-amber-800";
  return (
    <div className={`border ${styles} rounded-xl p-4 flex gap-3`}>
      <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
      <div className="text-sm">
        <p className="font-semibold">{title}</p>
        <p className="mt-0.5">{children}</p>
      </div>
    </div>
  );
}
