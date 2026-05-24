"use client";

import Link from "next/link";
import { Printer, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ComputedPlan, UserData } from "@/lib/wealth/types";
import type { ImplementationPlan } from "@/lib/wealth/implementation";
import type { CashflowYear, ActionItem } from "@/lib/wealth/projections";
import { inrFull, inrCompact, pct } from "@/lib/wealth/calculations";

interface Props {
  data: UserData;
  plan: ComputedPlan;
  impl: ImplementationPlan;
  cashflows: CashflowYear[];
  actions: ActionItem[];
}

export default function ReportView({ data, plan, impl, cashflows, actions }: Props) {
  const today = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  const name = data.profile.full_name || "Client";

  return (
    <>
      <style>{`
        @media print {
          header, footer, .no-print { display: none !important; }
          body { background: #fff !important; }
          .report-page { box-shadow: none !important; margin: 0 !important; max-width: 100% !important; }
          .report-section { break-inside: avoid; }
        }
        @page { margin: 16mm 14mm; }
      `}</style>

      {/* toolbar (screen only) */}
      <div className="no-print sticky top-0 z-10 bg-slate-100/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/app" className="text-sm text-slate-600 hover:text-slate-900 flex items-center gap-1.5">
            <ArrowLeft className="w-4 h-4" /> Back to dashboard
          </Link>
          <Button size="sm" onClick={() => window.print()} className="bg-slate-900 hover:bg-slate-800 text-white">
            <Printer className="w-4 h-4 mr-1.5" /> Print / Save as PDF
          </Button>
        </div>
      </div>

      <div className="report-page max-w-4xl mx-auto bg-white my-6 p-8 sm:p-12 shadow-sm">
        {/* ---- cover header ---- */}
        <div className="flex items-start justify-between border-b-2 border-slate-900 pb-5">
          <div>
            <p className="font-serif text-2xl text-slate-900">SoHo <span className="text-amber-600">Wealth</span></p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mt-1">Comprehensive Financial Plan</p>
          </div>
          <div className="text-right text-xs text-slate-500">
            <p className="font-semibold text-slate-700">{name}</p>
            <p>Prepared {today}</p>
            <p className="mt-1 text-amber-700 font-medium">Strictly Private &amp; Confidential</p>
          </div>
        </div>

        {/* ---- executive summary ---- */}
        <Section title="Executive Summary">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Metric label="Net Worth" value={inrCompact(plan.netWorth)} />
            <Metric label="Monthly Surplus" value={inrCompact(plan.monthlySurplus)} />
            <Metric label="Savings Rate" value={pct(plan.savingsRate, 0)} />
            <Metric label="Retirement On-Track" value={pct(plan.retirementOnTrackPct, 0)} />
            <Metric label="Total Goal Value" value={inrCompact(plan.goalFunding.totalFutureValue)} />
            <Metric label="Funding Gap" value={inrCompact(plan.goalFunding.totalGap)} />
            <Metric label="Recommended SIP" value={`${inrCompact(impl.monthly_investment)}/mo`} />
            <Metric label="Term Cover Needed" value={inrCompact(plan.recommendedTermCover)} />
          </div>
        </Section>

        {/* ---- cashflow statement ---- */}
        <Section title="Cashflow (Monthly)">
          <DataTable
            head={["Particulars", "Amount"]}
            rows={[
              ["Total income", inrFull(plan.monthlyIncome)],
              ["Total expenses", inrFull(plan.monthlyExpenses)],
              ["Surplus", inrFull(plan.monthlySurplus)],
              ["Savings rate", pct(plan.savingsRate)],
            ]}
          />
        </Section>

        {/* ---- net worth ---- */}
        <Section title="Net Worth Statement">
          <DataTable
            head={["Asset class", "Value", "% of total"]}
            rows={plan.assetAllocation.filter(a => a.value > 0).map(a => [
              cap(a.class.replace("_", " ")), inrFull(a.value), pct(a.pct),
            ])}
            foot={[
              ["Total assets", inrFull(plan.totalAssets), "100%"],
              ...(plan.totalLiabilities > 0 ? [["Liabilities", `−${inrFull(plan.totalLiabilities)}`, ""] as string[]] : []),
              ["Net worth", inrFull(plan.netWorth), ""],
            ]}
          />
        </Section>

        {/* ---- goal funding map ---- */}
        <Section title="Goal Funding Map">
          <DataTable
            head={["Goal", "Year", "Future value", "Funded", "SIP/mo", "Status"]}
            rows={[...plan.goals].sort((a, b) => a.years_to_goal - b.years_to_goal).map(g => [
              g.goal_name, String(g.target_year), inrFull(g.future_value),
              pct(g.funding_pct, 0), g.sip_required_monthly > 0 ? inrFull(g.sip_required_monthly) : "—",
              g.status.replace("_", " "),
            ])}
            foot={[[
              "Total", "", inrFull(plan.goalFunding.totalFutureValue), "",
              inrFull(plan.goalFunding.totalMonthlySip), "",
            ]]}
          />
        </Section>

        {/* ---- retirement ---- */}
        <Section title="Retirement">
          <DataTable
            head={["Particulars", "Amount"]}
            rows={[
              ["Years to retirement", `${plan.yearsToRetirement} yrs`],
              ["Annual expenses at retirement", inrFull(plan.annualExpensesAtRetirement)],
              ["Corpus required", inrCompact(plan.retirementCorpusRequired)],
              ["Existing assets (future value)", inrCompact(plan.retirementAssetsFV)],
              ["SIP required / month", inrFull(plan.retirementMonthlySipRequired)],
            ]}
          />
        </Section>

        {/* ---- insurance ---- */}
        <Section title="Life Insurance — Needs Analysis (HLV)">
          <DataTable
            head={["Particulars", "Amount"]}
            rows={[
              ["Total cover required", inrCompact(plan.hlvCoverRequired)],
              ["Existing life cover", inrCompact(plan.existingLifeCover)],
              ["Investable assets available", inrCompact(plan.investableAssets)],
              ["Additional cover required", inrCompact(plan.additionalCoverRequired)],
              ["Recommended term cover", inrCompact(plan.recommendedTermCover)],
            ]}
          />
        </Section>

        {/* ---- implementation ---- */}
        <Section title={`How to Invest — ${inrFull(impl.monthly_investment)}/mo · Target ${impl.allocation.equity}/${impl.allocation.debt}/${impl.allocation.gold} (Eq/Debt/Gold)`}>
          <DataTable
            head={["Bucket", "Category", "Monthly", "%", "Exp. XIRR"]}
            rows={impl.buckets.map(b => [
              b.label, b.examples, inrFull(b.monthly_amount), pct(b.target_pct, 0), `${b.expected_xirr[0]}–${b.expected_xirr[1]}%`,
            ])}
          />
          <p className="text-xs text-slate-500 mt-2">Blended expected return {impl.expected_xirr.low}%–{impl.expected_xirr.high}%.</p>
        </Section>

        {/* ---- cashflow projection ---- */}
        <Section title="Cashflow Projection (10 years)">
          <DataTable
            head={["Year", "Income", "Expenses", "Surplus", "Invest", "Cumulative"]}
            rows={cashflows.map(r => [
              `${r.year} (age ${r.age})`, inrFull(r.income), inrFull(r.expenses),
              inrFull(r.surplus), inrFull(r.recommendedInvestment), inrCompact(r.cumulativeInvested),
            ])}
          />
        </Section>

        {/* ---- action plan ---- */}
        <Section title="One-Year Action Plan">
          <ol className="space-y-2">
            {actions.map((a, i) => (
              <li key={a.id} className="flex gap-3 text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-semibold flex items-center justify-center mt-0.5">{i + 1}</span>
                <div>
                  <p className="font-semibold text-slate-900">{a.title} <span className="text-xs font-normal text-amber-700">· {a.when}</span></p>
                  <p className="text-slate-600">{a.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* ---- disclaimer ---- */}
        <div className="report-section mt-8 pt-4 border-t border-slate-200">
          <p className="text-[10px] leading-relaxed text-slate-400">
            This financial plan is a long-term direction based on the information you provided and standard assumptions
            (inflation {pct(data.profile.inflation_rate, 0)}, equity {pct(data.profile.equity_returns, 0)}, debt {pct(data.profile.debt_returns, 0)}).
            Actual outcomes vary with markets, income, and life events, and should be reviewed periodically. Figures are category-level
            planning aids, not specific investment advice or guaranteed returns. Mutual fund investments are subject to market risks;
            read all scheme-related documents carefully. © {new Date().getFullYear()} SoHo Wealth · Confidential.
          </p>
        </div>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="report-section mt-8">
      <h2 className="font-serif text-lg text-slate-900 border-b border-slate-200 pb-1.5 mb-3">{title}</h2>
      {children}
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-slate-200 rounded-lg p-3">
      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">{label}</p>
      <p className="font-serif text-lg text-slate-900 tabular-nums mt-0.5">{value}</p>
    </div>
  );
}

function DataTable({ head, rows, foot }: { head: string[]; rows: string[][]; foot?: string[][] }) {
  return (
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr>
          {head.map((h, i) => (
            <th key={i} className={`px-2 py-1.5 text-xs uppercase tracking-wider text-slate-500 font-semibold border-b border-slate-300 ${i === 0 ? "text-left" : "text-right"}`}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, ri) => (
          <tr key={ri}>
            {r.map((c, ci) => (
              <td key={ci} className={`px-2 py-1.5 border-b border-slate-100 ${ci === 0 ? "text-left" : "text-right tabular-nums"}`}>{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
      {foot && (
        <tfoot>
          {foot.map((r, ri) => (
            <tr key={ri} className="font-semibold bg-slate-50">
              {r.map((c, ci) => (
                <td key={ci} className={`px-2 py-1.5 border-b border-slate-200 ${ci === 0 ? "text-left" : "text-right tabular-nums"}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      )}
    </table>
  );
}

function cap(s: string) { return s.charAt(0).toUpperCase() + s.slice(1); }
