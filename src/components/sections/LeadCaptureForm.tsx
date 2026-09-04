import { ContextualLeadForm } from "@/components/leads/ContextualLeadForm";
import { inferLeadIntent } from "@/lib/leads/lead-intents";
import type { LeadIntent } from "@/lib/leads/types";

interface LeadCaptureFormProps {
  source?: string; heading?: string; leftContent?: React.ReactNode; sectionId?: string; service?: string;
  selectLabel?: string; selectOptions?: string[]; buttonLabel?: string; thankYouMessage?: string;
  intent?: LeadIntent; ctaVariant?: string; comparedStrategies?: string[];
}

export function LeadCaptureForm({ source = "website", heading, leftContent, sectionId = "portfolio-review", service = "Portfolio review", intent, ctaVariant, comparedStrategies }: LeadCaptureFormProps) {
  const resolvedIntent = intent || inferLeadIntent(source, service);
  const defaultLeftContent = (
    <>
      <p className="text-xs font-bold uppercase tracking-[.16em] text-[#C9A84C]">Confidential, founder-led review</p>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white md:text-5xl">Put the next decision in the context of your whole portfolio.</h2>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">Review allocation, concentration, product structure, costs and goal fit before committing more capital.</p>
      <ul className="mt-8 space-y-3 text-white/80">{["Current allocation and overlap", "Risk, liquidity and time horizon", "Fees, tax questions and documents", "A clear next-decision checklist"].map((item) => <li key={item} className="flex gap-3"><span className="text-[#C9A84C]" aria-hidden="true">✓</span>{item}</li>)}</ul>
    </>
  );
  return (
    <section id={sectionId} className="overflow-x-hidden bg-[#0B1F3A] py-20 lg:py-28">
      <div className="container mx-auto grid items-start gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>{leftContent || defaultLeftContent}</div>
        <div className="rounded-2xl border border-white/10 bg-white/[.06] p-7 md:p-10"><ContextualLeadForm intent={resolvedIntent} service={service} ctaVariant={ctaVariant || source} heading={heading} comparedStrategies={comparedStrategies} /></div>
      </div>
    </section>
  );
}
