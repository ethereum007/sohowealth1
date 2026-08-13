import Link from "next/link";
import { ArrowRight, Calculator, CheckCircle2, ShieldCheck } from "lucide-react";
import { FAQSection, type FAQ } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";

export type PlanningSection = { title: string; text: string };

type Props = {
  canonicalUrl: string;
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  toolLabel: string;
  serviceLabel: string;
  serviceHref: string;
  sections: PlanningSection[];
  checklistTitle: string;
  checklist: string[];
  assumptions: [string, string][];
  related: [string, string][];
  faqs: FAQ[];
};

export function PlanningSEOPage(props: Props) {
  const schema = [
    {
      "@context": "https://schema.org", "@type": "Article", "@id": `${props.canonicalUrl}#article`,
      headline: props.title, description: props.intro, url: props.canonicalUrl, datePublished: "2026-08-13", dateModified: "2026-08-13",
      author: { "@id": "https://www.sohowealth.in/#kiran-dutta" }, publisher: { "@id": "https://www.sohowealth.in/#organization" },
      mainEntityOfPage: props.canonicalUrl,
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sohowealth.in/" },
        { "@type": "ListItem", position: 2, name: props.title, item: props.canonicalUrl },
      ],
    },
  ];

  return (
    <main className="bg-white pt-20">
      <JsonLd data={schema} />
      <section className="relative overflow-hidden bg-[#07192F] py-20 text-white lg:py-28">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#C9A84C]/10 blur-3xl" />
        <div className="container relative mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E5CB83]">{props.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">{props.title} <span className="text-[#C9A84C]">{props.accent}</span></h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/72">{props.intro}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/tools/ai-wealth-planner" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#C9A84C] px-7 font-bold text-[#07192F]"><Calculator className="mr-2 h-4 w-4" /> {props.toolLabel}</Link>
            <Link href={props.serviceHref} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-7 font-semibold text-white">{props.serviceLabel}</Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {props.sections.map((section, index) => <article key={section.title} className="rounded-2xl border border-slate-200 p-7"><span className="text-xs font-bold text-[#A9862D]">0{index + 1}</span><h2 className="mt-3 font-display text-2xl font-semibold text-[#0B1F3A]">{section.title}</h2><p className="mt-3 leading-relaxed text-slate-600">{section.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] py-16 lg:py-24">
        <div className="container mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div><p className="text-xs font-bold uppercase tracking-[0.17em] text-[#A9862D]">Planning checklist</p><h2 className="mt-3 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">{props.checklistTitle}</h2><div className="mt-7 space-y-3">{props.checklist.map((item) => <div key={item} className="flex gap-3 rounded-xl bg-white p-4"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#A9862D]" /><span className="text-sm font-medium text-[#0B1F3A]">{item}</span></div>)}</div></div>
          <div className="self-start overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="bg-[#0B1F3A] px-5 py-4 font-semibold text-white">Key planning assumptions</div>{props.assumptions.map(([label, value]) => <div key={label} className="flex justify-between gap-5 border-b border-slate-100 px-5 py-4 text-sm last:border-0"><span className="text-slate-500">{label}</span><strong className="text-right text-[#0B1F3A]">{value}</strong></div>)}</div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl border border-[#C9A84C]/30 bg-[#FFFDF7] p-7 md:p-10"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#A9862D]"><ShieldCheck className="h-5 w-5" /> Reviewed for SoHo Wealth</div><h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A]">A calculator is the beginning, not the whole plan.</h2><p className="mt-4 max-w-3xl leading-relaxed text-slate-600">Reviewed by Kiran Dutta, Founder of SoHo Wealth, Columbia MBA and NISM-certified professional. Projections are educational illustrations. A personal plan should account for inflation, tax, liquidity, insurance, existing investments and your ability to absorb losses.</p></div>
          <h2 className="mt-14 font-display text-3xl font-semibold text-[#0B1F3A]">Related wealth-planning resources</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">{props.related.map(([label, href]) => <Link key={href} href={href} className="group flex items-center justify-between rounded-2xl border border-slate-200 p-5 font-semibold text-[#0B1F3A] hover:border-[#C9A84C]"><span>{label}</span><ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>)}</div>
        </div>
      </section>

      <FAQSection faqs={props.faqs} heading="Frequently asked questions" background="#F7F8FA" />
    </main>
  );
}
