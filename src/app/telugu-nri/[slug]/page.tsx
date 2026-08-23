import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getTeluguNriCountryPage, teluguNriCountryPages } from "@/lib/nri/telugu-country-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return teluguNriCountryPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getTeluguNriCountryPage(slug);
  if (!page) return {};
  const url = `https://www.sohowealth.in/telugu-nri/${page.slug}`;
  return {
    title: `${page.title} | SoHo Wealth`,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: { title: page.title, description: page.description, url, siteName: "SoHo Wealth", type: "article" },
    twitter: { card: "summary_large_image", title: page.title, description: page.description },
  };
}

export default async function TeluguNriCountryPage({ params }: Props) {
  const { slug } = await params;
  const page = getTeluguNriCountryPage(slug);
  if (!page) notFound();
  const url = `https://www.sohowealth.in/telugu-nri/${page.slug}`;
  const schema = [
    { "@context": "https://schema.org", "@type": "Service", name: page.title, description: page.description, url, provider: { "@id": "https://www.sohowealth.in/#organization" }, audience: { "@type": "Audience", audienceType: page.kicker } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sohowealth.in/" },
      { "@type": "ListItem", position: 2, name: "Telugu NRI Wealth", item: "https://www.sohowealth.in/nri-telugu" },
      { "@type": "ListItem", position: 3, name: page.kicker, item: url },
    ] },
  ];
  return <main className="pt-20">
    <JsonLd data={schema} />
    <section className="bg-[#07192f] py-20 lg:py-28"><div className="container mx-auto max-w-6xl px-6 lg:px-8">
      <nav className="text-xs text-white/55"><Link href="/">Home</Link><span className="mx-2">/</span><Link href="/nri-telugu">Telugu NRI Wealth</Link><span className="mx-2">/</span><span className="text-white/80">{page.kicker}</span></nav>
      <p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#C9A84C]">{page.kicker}</p>
      <h1 className="mt-5 max-w-5xl font-display text-4xl font-semibold leading-tight text-white md:text-6xl">{page.title}</h1>
      <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/70">{page.intro}</p>
      <div className="mt-9 flex flex-col gap-4 sm:flex-row"><Link href="/contact" className="rounded-lg bg-[#C9A84C] px-7 py-4 text-center font-semibold text-[#0B1F3A]">Book a Telugu NRI Review</Link><Link href="/nri-telugu" className="rounded-lg border border-white/25 px-7 py-4 text-center font-semibold text-white">Explore the complete NRI desk</Link></div>
    </div></section>
    <section className="bg-[#F7F8FA] py-20 lg:py-28"><div className="container mx-auto max-w-6xl px-6 lg:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A7A25]">The planning agenda</p><h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-5xl">Six priorities that belong in one picture</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{page.priorities.map((item, index) => <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7"><p className="text-xs font-bold text-[#9A7A25]">0{index + 1}</p><h3 className="mt-4 font-display text-2xl font-semibold text-[#0B1F3A]">{item.title}</h3><p className="mt-4 text-sm leading-relaxed text-slate-600">{item.text}</p></article>)}</div>
    </div></section>
    <section className="py-20 lg:py-28"><div className="container mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A7A25]">First meeting checklist</p><h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">Bring the complete cross-border picture.</h2></div><ul className="grid gap-3 sm:grid-cols-2">{page.checklist.map((item) => <li key={item} className="flex gap-3 rounded-xl bg-[#F7F8FA] p-4 text-sm text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B18C2D]" />{item}</li>)}</ul></div></section>
    <section className="bg-[#0B1F3A] py-20"><div className="container mx-auto max-w-6xl px-6 lg:px-8"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">Continue your research</p><h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">Related NRI decision guides</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{page.related.map((item) => <Link key={item.href} href={item.href} className="group rounded-xl border border-white/15 p-6"><h3 className="font-display text-xl font-semibold text-white">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-white/60">{item.text}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C9A84C]">Read guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div></div></section>
    <FAQSection faqs={page.faqs} heading={`${page.kicker}: FAQs`} background="#F7F8FA" />
    <section className="py-16"><div className="container mx-auto max-w-6xl px-6 lg:px-8"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A7A25]">Primary references</p><div className="mt-5 flex flex-wrap gap-4">{page.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-[#0B1F3A]">{source.title}<ExternalLink className="h-3.5 w-3.5" /></a>)}</div><p className="mt-6 text-xs leading-relaxed text-slate-500">Educational content only. SoHo Wealth provides portfolio review, investment distribution and specialist coordination within its disclosed scope—not tax returns, legal opinions or country-specific tax advice.</p></div></section>
  </main>;
}
