import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, Clock, ExternalLink } from "lucide-react";
import { FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getInsightPost, getRelatedInsightPosts, insightPosts } from "@/lib/insights/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightPost(slug);

  if (!post) {
    return {};
  }

  const url = `https://www.sohowealth.in/insights/${post.slug}`;

  return {
    title: `${post.title} | SoHo Wealth`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: "Kiran Dutta", url: "https://www.sohowealth.in/about" }],
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ["Kiran Dutta"],
      section: post.category,
      tags: post.keywords,
      siteName: "SoHo Wealth",
      images: [{ url: "https://www.sohowealth.in/soho-logo.png", width: 1024, height: 1024, alt: "SoHo Wealth" }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["https://www.sohowealth.in/soho-logo.png"],
    },
  };
}

export default async function InsightPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getInsightPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedInsightPosts(post);
  const publishedLabel = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${post.publishedAt}T00:00:00Z`));
  const url = `https://www.sohowealth.in/insights/${post.slug}`;
  const isDoctorPost = post.category === "Doctors";
  const isItProfessionalPost = post.category === "IT Professionals";
  const cta = isDoctorPost
    ? {
        title: "Review the Doctor Family Balance Sheet",
        copy: "Bring the clinic, household, debt, property and investment view into one structured conversation before the next major capital decision.",
        href: "/financial-planning-for-doctors",
        label: "Explore Wealth Planning for Doctors",
      }
    : isItProfessionalPost
      ? {
          title: "Review Salary, RSUs and Goals Together",
          copy: "Map employer equity, liquid investments and major goals in one portfolio view before the next vest, exercise or career move.",
          href: "/wealth-planning-for-it-professionals",
          label: "Explore Wealth Planning for IT Professionals",
        }
      : {
          title: "Book a Portfolio Review",
          copy: "If your India portfolio includes old resident folios, NRE/NRO confusion, PMS, SIF, AIF, property or RSUs, a structured review can make the next decision much clearer.",
          href: "/portfolio-review",
          label: "Book Free Review",
        };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@id": "https://www.sohowealth.in/#kiran-dutta" },
    publisher: { "@id": "https://www.sohowealth.in/#organization" },
    image: "https://www.sohowealth.in/soho-logo.png",
    mainEntityOfPage: url,
    url,
    isPartOf: { "@id": "https://www.sohowealth.in/insights#blog" },
    inLanguage: "en-IN",
    isAccessibleForFree: true,
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    about: post.keywords.map((keyword) => ({ "@type": "Thing", name: keyword })),
    citation: post.sources.map((source) => source.url),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sohowealth.in/" },
      { "@type": "ListItem", position: 2, name: "Insights", item: "https://www.sohowealth.in/insights" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <main className="pt-20">
      <JsonLd data={[articleSchema, breadcrumbSchema]} />

      <section className="relative overflow-hidden py-16 lg:py-24" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)" }} />
        <div className="container relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <Link href="/insights" className="mb-8 inline-flex items-center gap-2 font-body text-sm font-semibold text-white/70 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to insights
          </Link>
          <div className="mb-5 flex flex-wrap items-center gap-3 font-body text-sm" style={{ color: "rgba(255,255,255,0.68)" }}>
            <span className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
              {post.heroKicker}
            </span>
            <span>{post.category}</span>
            <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" />{publishedLabel}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readingTime}</span>
          </div>
          <h1 className="font-display mb-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="font-body text-lg leading-relaxed lg:text-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            {post.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-body text-sm text-white/60">
            <span>By <Link href="/team" className="font-semibold text-white underline-offset-4 hover:underline">Kiran Dutta</Link></span>
            <span aria-hidden="true">•</span>
            <span>Founder, SoHo Wealth</span>
            <span aria-hidden="true">•</span>
            <span>Reviewed {publishedLabel}</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-lg border border-slate-200 p-6 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)]">
            <h2 className="font-display mb-5 text-2xl font-semibold" style={{ color: "#0B1F3A" }}>Key Takeaways</h2>
            <ul className="space-y-3">
              {post.keyTakeaways.map((item) => (
                <li key={item} className="flex gap-3 font-body text-base leading-relaxed text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#C9A84C" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <article className="bg-white pb-20">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-14">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display mb-5 text-3xl font-semibold leading-tight md:text-4xl" style={{ color: "#0B1F3A" }}>
                  {section.heading}
                </h2>

                {section.body && (
                  <div className="space-y-5">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="font-body text-base leading-8 text-slate-700 md:text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 font-body text-base leading-7 text-slate-700 md:text-lg">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0" style={{ color: "#C9A84C" }} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.table && (
                  <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full min-w-[680px] border-collapse font-body text-sm">
                      <thead style={{ backgroundColor: "#0B1F3A" }}>
                        <tr>
                          {section.table.columns.map((column) => (
                            <th key={column} className="px-4 py-4 text-left font-semibold text-white">
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.join("-")} className="border-b border-slate-200 last:border-b-0">
                            {row.map((cell, index) => (
                              <td key={`${cell}-${index}`} className="px-4 py-4 align-top text-slate-700">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </div>

          <div className="mt-16 rounded-lg p-8" style={{ backgroundColor: "#FDF8EC" }}>
            <h2 className="font-display mb-3 text-2xl font-semibold" style={{ color: "#0B1F3A" }}>{cta.title}</h2>
            <p className="font-body mb-6 max-w-2xl text-base leading-relaxed text-slate-700">
              {cta.copy}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={cta.href} className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-body text-sm font-semibold transition hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
                {cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 font-body text-sm font-semibold transition hover:bg-white" style={{ color: "#0B1F3A" }}>
                WhatsApp SoHo Wealth
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <h2 className="font-display mb-4 text-2xl font-semibold" style={{ color: "#0B1F3A" }}>Sources Checked</h2>
            <ul className="grid gap-3">
              {post.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-body text-sm font-semibold text-slate-700 underline-offset-4 hover:underline">
                    {source.title}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 font-body text-xs leading-relaxed text-slate-500">
              The article copy is original SoHo Wealth editorial content. Source links are cited for factual verification of rules, frameworks and public guidance.
            </p>
            <p className="mt-3 font-body text-xs leading-relaxed text-slate-500">
              This article is for education and portfolio discussion only. SoHo Wealth is a distributor, not a SEBI Registered Investment Advisor. Tax and legal outcomes depend on personal facts.
            </p>
          </div>
        </div>
      </article>

      <FAQSection faqs={post.faqs} heading="Frequently Asked Questions" background="#F7F8FA" />

      {relatedPosts.length > 0 && (
        <section className="bg-white py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="font-body text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#C9A84C" }}>Next Reads</p>
              <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl" style={{ color: "#0B1F3A" }}>
                {isDoctorPost
                  ? "Continue the Doctor Wealth Thread"
                  : isItProfessionalPost
                    ? "Continue the Tech Wealth Thread"
                    : "Continue the NRI Wealth Thread"}
              </h2>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/insights/${related.slug}`} className="group rounded-lg border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(11,31,58,0.35)]">
                  <span className="mb-4 inline-block font-body text-xs font-bold uppercase tracking-[0.12em]" style={{ color: "#C9A84C" }}>{related.category}</span>
                  <h3 className="font-display mb-3 text-xl font-semibold leading-snug" style={{ color: "#0B1F3A" }}>{related.title}</h3>
                  <p className="font-body mb-5 text-sm leading-relaxed text-slate-600">{related.description}</p>
                  <span className="inline-flex items-center gap-2 font-body text-sm font-semibold" style={{ color: "#0B1F3A" }}>
                    Read note
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
