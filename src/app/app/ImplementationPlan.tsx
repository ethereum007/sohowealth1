"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Layers, TrendingUp } from "lucide-react";
import type { ImplementationPlan as ImplPlan } from "@/lib/wealth/implementation";
import { inrFull, pct } from "@/lib/wealth/calculations";

const ALLOC_COLORS = { equity: "#d4af37", debt: "#10b981", gold: "#f59e0b" };

export default function ImplementationPlan({ impl }: { impl: ImplPlan }) {
  const allocData = [
    { name: "Equity", value: impl.allocation.equity, fill: ALLOC_COLORS.equity },
    { name: "Debt", value: impl.allocation.debt, fill: ALLOC_COLORS.debt },
    { name: "Gold", value: impl.allocation.gold, fill: ALLOC_COLORS.gold },
  ].filter(d => d.value > 0);

  if (impl.monthly_investment <= 0) {
    return (
      <Card>
        <CardTitle icon={<Layers className="w-5 h-5 text-amber-600" />}>How to Invest It</CardTitle>
        <p className="text-sm text-slate-500 py-4">
          Your goals look funded by existing assets — no fresh monthly investment is required right now.
          Keep reviewing as goals and markets change.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
        <CardTitle icon={<Layers className="w-5 h-5 text-amber-600" />}>How to Invest It</CardTitle>
        <div className="text-right">
          <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Recommended new SIP</p>
          <p className="font-serif text-2xl text-slate-900 tabular-nums">{inrFull(impl.monthly_investment)}<span className="text-sm text-slate-500">/mo</span></p>
        </div>
      </div>

      <div className="grid lg:grid-cols-[220px_1fr] gap-6 items-center">
        <div>
          <div style={{ width: "100%", height: 180 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={allocData} dataKey="value" nameKey="name" innerRadius={46} outerRadius={78} paddingAngle={2}>
                  {allocData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                </Pie>
                <Tooltip formatter={(v: any) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-3 text-xs text-slate-500">
            {allocData.map(d => (
              <span key={d.name} className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full" style={{ background: d.fill }} />{d.name} {d.value}%
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 text-sm text-emerald-700 mb-3">
            <TrendingUp className="w-4 h-4" />
            <span>Expected blended return <strong>{impl.expected_xirr.low}%–{impl.expected_xirr.high}%</strong> over a ~{impl.gap_weighted_years}-yr blended horizon.</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-500">
                  <th className="py-2 pr-2 font-semibold">Bucket</th>
                  <th className="py-2 px-2 font-semibold text-right">Monthly</th>
                  <th className="py-2 px-2 font-semibold text-right">%</th>
                  <th className="py-2 px-2 font-semibold text-right">Exp. XIRR</th>
                </tr>
              </thead>
              <tbody>
                {impl.buckets.map(b => (
                  <tr key={b.key} className="border-t border-slate-100 align-top">
                    <td className="py-2 pr-2">
                      <p className="font-medium text-slate-900">{b.label}</p>
                      <p className="text-xs text-slate-500">{b.role} · {b.examples}</p>
                    </td>
                    <td className="py-2 px-2 text-right tabular-nums whitespace-nowrap">{inrFull(b.monthly_amount)}</td>
                    <td className="py-2 px-2 text-right tabular-nums text-slate-500">{pct(b.target_pct, 0)}</td>
                    <td className="py-2 px-2 text-right tabular-nums text-slate-500 whitespace-nowrap">{b.expected_xirr[0]}–{b.expected_xirr[1]}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
        Category-level guidance, not specific scheme advice. Final fund selection, suitability and tax positioning
        are confirmed with your advisor. Mutual funds are subject to market risk.
      </p>
    </Card>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">{children}</div>;
}
function CardTitle({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return <h3 className="font-serif text-xl text-slate-900 flex items-center gap-2">{icon}{children}</h3>;
}
