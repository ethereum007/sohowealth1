"use client";

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { LineChart as LineChartIcon } from "lucide-react";
import type { CashflowYear } from "@/lib/wealth/projections";
import { inrCompact, inrFull } from "@/lib/wealth/calculations";

export default function CashflowProjection({ rows }: { rows: CashflowYear[] }) {
  if (!rows || rows.length === 0) return null;

  const chartData = rows.map(r => ({
    year: r.year,
    Income: r.income,
    Expenses: r.expenses,
    Surplus: r.surplus,
  }));

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h3 className="font-serif text-xl text-slate-900 flex items-center gap-2 mb-1">
        <LineChartIcon className="w-5 h-5 text-amber-600" /> Cashflow Projection
      </h3>
      <p className="text-sm text-slate-500 mb-5">
        Income grows with your assumed salary growth; expenses with inflation. The widening gap is your investable surplus.
      </p>

      <div style={{ width: "100%", height: 280 }}>
        <ResponsiveContainer>
          <AreaChart data={chartData} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
            <defs>
              <linearGradient id="gInc" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gExp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#eef2f6" />
            <XAxis dataKey="year" tick={{ fontSize: 11 }} stroke="#94a3b8" />
            <YAxis tickFormatter={(v) => inrCompact(v)} tick={{ fontSize: 11 }} width={64} stroke="#94a3b8" />
            <Tooltip formatter={(v: any) => inrFull(v)} labelStyle={{ fontWeight: 600 }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Area type="monotone" dataKey="Income" stroke="#10b981" strokeWidth={2} fill="url(#gInc)" />
            <Area type="monotone" dataKey="Expenses" stroke="#f59e0b" strokeWidth={2} fill="url(#gExp)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wider text-slate-500">
              <th className="px-3 py-2 text-left font-semibold border-b border-slate-200">Year</th>
              <th className="px-3 py-2 text-right font-semibold border-b border-slate-200">Income</th>
              <th className="px-3 py-2 text-right font-semibold border-b border-slate-200">Expenses</th>
              <th className="px-3 py-2 text-right font-semibold border-b border-slate-200">Surplus</th>
              <th className="px-3 py-2 text-right font-semibold border-b border-slate-200">Invest</th>
              <th className="px-3 py-2 text-right font-semibold border-b border-slate-200">Cumulative</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.year}>
                <td className="px-3 py-2 border-b border-slate-100">{r.year} <span className="text-slate-400">· age {r.age}</span></td>
                <td className="px-3 py-2 text-right tabular-nums border-b border-slate-100">{inrFull(r.income)}</td>
                <td className="px-3 py-2 text-right tabular-nums border-b border-slate-100">{inrFull(r.expenses)}</td>
                <td className="px-3 py-2 text-right tabular-nums border-b border-slate-100 text-emerald-700">{inrFull(r.surplus)}</td>
                <td className="px-3 py-2 text-right tabular-nums border-b border-slate-100">{inrFull(r.recommendedInvestment)}</td>
                <td className="px-3 py-2 text-right tabular-nums border-b border-slate-100 font-semibold">{inrCompact(r.cumulativeInvested)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
