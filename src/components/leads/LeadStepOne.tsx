import type { LeadIntent } from "@/lib/leads/types";

export type LeadFormState = {
  name: string; phone: string; intent: LeadIntent; portfolio_size: string; email: string;
  resident_status: "resident" | "nri"; call_time: string; message: string;
  qualification_value: string; privacy_consent: boolean; website: string;
};

type Props = { form: LeadFormState; errors: Record<string, string>; onChange: (name: keyof LeadFormState, value: string | boolean) => void; onContinue: () => void };

const intentLabels: Record<LeadIntent, string> = {
  "portfolio-review": "Review my complete portfolio", "pms-comparison": "Compare PMS strategies",
  "retirement-review": "Review my retirement gap", "nri-review": "Coordinate my NRI portfolio",
  "rsu-review": "Review RSU / employer-stock concentration", "sif-vs-pms": "Compare SIF and PMS",
  "founder-wealth-map": "Map founder and personal wealth", "family-office-research": "Review family-office research",
  "hyderabad-consultation": "Meet in Hyderabad or by video",
};

export function LeadStepOne({ form, errors, onChange, onContinue }: Props) {
  const input = "mt-1.5 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]";
  return (
    <div className="space-y-5">
      <div><label htmlFor="lead-name" className="text-sm font-semibold text-white/80">Full name</label><input id="lead-name" name="name" autoComplete="name" value={form.name} onChange={(e) => onChange("name", e.target.value)} aria-invalid={Boolean(errors.name)} className={input} placeholder="Your full name" />{errors.name ? <p className="mt-1 text-xs text-red-300">{errors.name}</p> : null}</div>
      <div><label htmlFor="lead-phone" className="text-sm font-semibold text-white/80">Mobile / WhatsApp number</label><input id="lead-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={(e) => onChange("phone", e.target.value)} aria-invalid={Boolean(errors.phone)} className={input} placeholder="+91 90329 99466" />{errors.phone ? <p className="mt-1 text-xs text-red-300">{errors.phone}</p> : null}</div>
      <div><label htmlFor="lead-intent" className="text-sm font-semibold text-white/80">What would you like help with?</label><select id="lead-intent" value={form.intent} onChange={(e) => onChange("intent", e.target.value)} className={input}>{Object.entries(intentLabels).map(([value, label]) => <option className="text-slate-900" key={value} value={value}>{label}</option>)}</select></div>
      <button type="button" onClick={onContinue} className="min-h-11 w-full rounded-lg bg-[#C9A84C] px-5 py-3 font-semibold text-[#0B1F3A]">Continue to step 2</button>
    </div>
  );
}
