import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQSection, type FAQ } from "@/components/seo/FAQSection";

export type AudiencePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  canonicalPath: string;
  icon: LucideIcon;
  challenges: Array<{ title: string; description: string }>;
  process: Array<{ title: string; description: string }>;
  outcomes: string[];
  faqs: FAQ[];
};

export function AudiencePage({ eyebrow, title, intro, canonicalPath, icon: Icon, challenges, process, outcomes, faqs }: AudiencePageProps) {
  const canonicalUrl = `https://www.sohowealth.in${canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: eyebrow,
    description: intro,
    url: canonicalUrl,
    provider: { "@id": "https://www.sohowealth.in/#organization" },
    areaServed: "India",
  };

  return (
    <main className="bg-white pt-20">
      <JsonLd data={schema} />
      <section className="relative overflow-hidden bg-[#07192F] py-20 text-white lg:py-28">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#C9A84C]/10 blur-3xl" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <Link href="/who-we-serve" className="text-xs font-semibold text-white/55 transition hover:text-white">Who We Serve / {eyebrow}</Link>
          <div className="mt-10 max-w-4xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A84C]/15 text-[#E5CB83]"><Icon className="h-6 w-6" /></div>
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#C9A84C]">{eyebrow}</p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/70">{intro}</p>
            <Link href="/portfolio-review" className="mt-9 inline-flex items-center rounded-xl bg-[#C9A84C] px-6 py-4 text-sm font-bold text-[#0B1F3A]">Book a Private Portfolio Review <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A7622]">Where complexity usually appears</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">The portfolio is only one part of the decision.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {challenges.map((item) => <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7"><h3 className="font-display text-xl font-semibold text-[#0B1F3A]">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A7622]">How the review works</p><div className="mt-7 space-y-6">{process.map((step, index) => <div key={step.title} className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B1F3A] text-sm font-bold text-white">{index + 1}</span><div><h3 className="font-display text-xl font-semibold text-[#0B1F3A]">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p></div></div>)}</div></div>
          <aside className="rounded-3xl bg-[#0B1F3A] p-8 text-white"><h2 className="font-display text-3xl font-semibold">What you should leave with</h2><ul className="mt-7 space-y-4">{outcomes.map((outcome) => <li key={outcome} className="flex gap-3 text-sm leading-relaxed text-white/75"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" />{outcome}</li>)}</ul></aside>
        </div></div>
      </section>
      <FAQSection faqs={faqs} heading={`${eyebrow}: FAQs`} background="#F7F8FA" />
    </main>
  );
}
