import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, Clock, Globe2, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { insightPosts } from "@/lib/insights/posts";

export const metadata: Metadata = {
  title: "Insights | NRI, Doctors, IT Professionals, SIF & PMS | SoHo Wealth",
  description:
    "Original SoHo Wealth guides for NRIs, doctors and IT professionals, plus SIF, PMS, GIFT City, NRE/NRO, RSU and India-investing research.",
  authors: [{ name: "SoHo Wealth" }],
  alternates: { canonical: "https://www.sohowealth.in/insights" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Insights | SoHo Wealth",
    description: "NRI, doctor and IT-professional wealth-planning insights from SoHo Wealth.",
    url: "https://www.sohowealth.in/insights",
    type: "website",
    images: [{ url: "https://www.sohowealth.in/soho-logo.png", width: 1024, height: 1024, alt: "SoHo Wealth" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | SoHo Wealth",
    description: "NRI wealth and India investing insights from SoHo Wealth.",
    images: ["https://www.sohowealth.in/soho-logo.png"],
  },
};

const categories = Array.from(new Set(insightPosts.map((post) => post.category)));
const featuredPosts = insightPosts.slice(0, 3);

export default function InsightsPage() {
  const formatDate = (date: string) => new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": ["Blog", "CollectionPage"],
    "@id": "https://www.sohowealth.in/insights#blog",
    name: "SoHo Wealth Insights",
    description: "NRI wealth and India investing insights from SoHo Wealth.",
    url: "https://www.sohowealth.in/insights",
    inLanguage: "en-IN",
    isPartOf: { "@id": "https://www.sohowealth.in/#website" },
    publisher: { "@id": "https://www.sohowealth.in/#organization" },
    hasPart: insightPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://www.sohowealth.in/insights/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: { "@id": "https://www.sohowealth.in/#kiran-dutta" },
    })),
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Latest SoHo Wealth Insights",
    itemListElement: insightPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.sohowealth.in/insights/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <main className="pt-20">
      <JsonLd data={[collectionSchema, itemListSchema]} />

      <section className="relative overflow-hidden py-20 lg:py-28" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)" }} />
        <div className="container relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em]" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
            <BookOpen className="h-3.5 w-3.5" />
            SoHo Wealth Insights
          </span>
          <h1 className="font-display mb-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            Wealth Planning for NRIs, Doctors and Tech Professionals <span style={{ color: "#C9A84C" }}>Without the Noise.</span>
          </h1>
          <p className="mx-auto max-w-3xl font-body text-lg leading-relaxed lg:text-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            Current, practical notes on NRI investing, doctors&apos; capital decisions, RSUs, FIRE, GIFT City, SIFs, PMS, NRE/NRO and Indian market themes.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-8">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-3 px-6 lg:px-8">
          {categories.map((category) => (
            <span key={category} className="rounded-full border border-slate-200 px-4 py-2 font-body text-sm font-semibold" style={{ color: "#0B1F3A" }}>
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#C9A84C" }}>Featured</p>
              <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl" style={{ color: "#0B1F3A" }}>
                Latest Decision Guides
              </h2>
            </div>
            <div className="flex items-center gap-4 font-body text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4" />Compliance aware</span>
              <span className="inline-flex items-center gap-2"><Globe2 className="h-4 w-4" />Cross-border</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/insights/${post.slug}`} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(11,31,58,0.35)]">
                <span className="mb-5 inline-block rounded-full px-3 py-1 font-body text-xs font-bold uppercase tracking-[0.12em]" style={{ backgroundColor: "#FDF8EC", color: "#0B1F3A" }}>
                  {post.category}
                </span>
                <h3 className="font-display mb-3 text-xl font-semibold leading-snug" style={{ color: "#0B1F3A" }}>{post.title}</h3>
                <p className="font-body mb-5 text-sm leading-relaxed text-slate-600">{post.description}</p>
                <div className="flex items-center justify-between font-body text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readingTime}</span>
                  <span className="inline-flex items-center gap-1 font-semibold" style={{ color: "#0B1F3A" }}>Read <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#C9A84C" }}>All Posts</p>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl" style={{ color: "#0B1F3A" }}>
              Latest Wealth Notes
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-5">
            {insightPosts.map((post) => (
              <Link key={post.slug} href={`/insights/${post.slug}`} className="group grid gap-5 rounded-lg border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-[0_14px_36px_-24px_rgba(11,31,58,0.45)] md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3 font-body text-xs text-slate-500">
                    <span className="font-bold uppercase tracking-[0.12em]" style={{ color: "#C9A84C" }}>{post.category}</span>
                    <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" />{formatDate(post.publishedAt)}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readingTime}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold leading-snug" style={{ color: "#0B1F3A" }}>{post.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{post.description}</p>
                </div>
                <span className="inline-flex items-center gap-2 font-body text-sm font-semibold" style={{ color: "#0B1F3A" }}>
                  Read note
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
