"use client";

import { ListChecks } from "lucide-react";
import type { ActionItem, ActionPriority } from "@/lib/wealth/projections";

const PRIORITY_META: Record<ActionPriority, { label: string; chip: string; bar: string }> = {
  high:   { label: "High",   chip: "bg-red-100 text-red-700",       bar: "bg-red-400" },
  medium: { label: "Medium", chip: "bg-amber-100 text-amber-700",   bar: "bg-amber-400" },
  low:    { label: "Low",    chip: "bg-slate-100 text-slate-600",   bar: "bg-slate-300" },
};

export default function ActionPlan({ items }: { items: ActionItem[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h3 className="font-serif text-xl text-slate-900 flex items-center gap-2 mb-1">
        <ListChecks className="w-5 h-5 text-amber-600" /> Your One-Year Action Plan
      </h3>
      <p className="text-sm text-slate-500 mb-5">
        The highest-leverage moves, in order. Protection and contingency first, then goals.
      </p>

      <ol className="space-y-2.5">
        {items.map((item, i) => {
          const meta = PRIORITY_META[item.priority];
          return (
            <li key={item.id} className="relative flex gap-3 rounded-lg border border-slate-200 p-3.5 hover:bg-slate-50 transition-colors">
              <span className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg ${meta.bar}`} />
              <span className="shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-semibold flex items-center justify-center mt-0.5">{i + 1}</span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${meta.chip}`}>{meta.label}</span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider">{item.category}</span>
                </div>
                <p className="text-sm text-slate-600 mt-1">{item.detail}</p>
                <p className="text-xs text-amber-700 font-medium mt-1">⏱ {item.when}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
