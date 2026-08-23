import { BadgeCheck } from "lucide-react";
import { RERA_NUMBER, RERA_VALID_UNTIL } from "@/lib/real-estate/vertical";

export function ReraBadge({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex items-start gap-3 rounded-xl border p-4 ${dark ? "border-white/15 bg-white/[0.06] text-white" : "border-[#C9A84C]/40 bg-[#FDF8EC] text-[#0B1F3A]"}`}>
      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" aria-hidden="true" />
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em]">Telangana RERA Registered Real Estate Agent</p>
        <p className={`mt-1 text-sm ${dark ? "text-white/70" : "text-slate-600"}`}>Registration No. {RERA_NUMBER} · Valid until {RERA_VALID_UNTIL}</p>
      </div>
    </div>
  );
}
