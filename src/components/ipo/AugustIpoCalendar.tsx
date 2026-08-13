import { CalendarDays, ExternalLink } from "lucide-react";
import { august2026Snapshot, august2026Weeks, type IpoCalendarEntry } from "@/lib/ipo/calendar";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short" }).format(
    new Date(`${date}T12:00:00+05:30`),
  );

function EntryTable({ entries, market }: { entries: IpoCalendarEntry[]; market: "Mainboard" | "SME" }) {
  const filtered = entries.filter((entry) => entry.market === market);

  if (!filtered.length) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-7 text-center">
        <p className="font-body text-sm font-semibold text-slate-500">No confirmed {market} IPO openings yet</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead className="bg-slate-50">
            <tr className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">
              <th className="px-5 py-3">Company</th>
              <th className="px-4 py-3">Dates</th>
              <th className="px-4 py-3">Issue size</th>
              <th className="px-4 py-3">Price band</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((entry) => (
              <tr key={`${entry.company}-${entry.opens}`} className="border-t border-slate-100 font-body text-sm">
                <td className="px-5 py-4">
                  <span className="block font-bold text-slate-900">{entry.company}</span>
                  <span className="mt-1 block text-xs text-slate-500">{entry.exchange ?? "NSE & BSE Mainboard"}</span>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-slate-700">{formatDate(entry.opens)}–{formatDate(entry.closes)}</td>
                <td className="whitespace-nowrap px-4 py-4 font-semibold text-slate-900">
                  {entry.issueSizeCr === null ? <span className="text-amber-700">To be announced</span> : `₹${entry.issueSizeCr.toLocaleString("en-IN")} Cr`}
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-slate-700">
                  {entry.priceBand ?? <span className="text-amber-700">To be announced</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AugustIpoCalendar() {
  return (
    <section id="coverage" className="container mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="font-body text-xs font-bold uppercase tracking-[0.16em]" style={{ color: "#137A52" }}>Upcoming IPOs</p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl" style={{ color: "#0B1F3A" }}>August 2026 IPO calendar</h2>
          <p className="mt-3 font-body text-sm text-slate-500">Grouped by opening date · Data checked {august2026Snapshot.asOf}</p>
        </div>
        <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 font-body text-xs font-bold text-emerald-800">
          <CalendarDays className="mr-2 h-4 w-4" /> Mainboard + SME
        </div>
      </div>

      <div className="mt-10 space-y-14">
        {august2026Weeks.map((week) => (
          <section key={week.id} aria-labelledby={`ipo-week-${week.id}`}>
            <div className="mb-5 flex items-baseline gap-3">
              <h3 id={`ipo-week-${week.id}`} className="font-display text-2xl font-semibold" style={{ color: "#0B1F3A" }}>{week.label}</h3>
              <span className="font-body text-sm text-slate-500">{week.range}</span>
            </div>
            <div className="grid gap-7">
              <div>
                <h4 className="mb-3 font-body text-xs font-extrabold uppercase tracking-[0.14em] text-slate-600">Mainboard IPOs</h4>
                <EntryTable entries={week.entries} market="Mainboard" />
              </div>
              <div>
                <h4 className="mb-3 font-body text-xs font-extrabold uppercase tracking-[0.14em] text-slate-600">SME IPOs</h4>
                <EntryTable entries={week.entries} market="SME" />
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <p className="font-body text-sm leading-relaxed text-slate-600">
          Dates, price bands and issue sizes can change. “To be announced” means the source had not published a final figure; it does not mean zero. Check the RHP and exchange notice before relying on any issue detail.
        </p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {august2026Snapshot.sourceLinks.map((source) => (
            <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="inline-flex items-center font-body text-xs font-bold" style={{ color: "#137A52" }}>
              {source.label}<ExternalLink className="ml-1 h-3 w-3" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

