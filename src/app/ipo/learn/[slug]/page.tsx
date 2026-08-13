import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getIpoLearnGuide, ipoLearnGuides } from "@/lib/ipo/learn";

export const dynamicParams = false;

export function generateStaticParams() {
  return ipoLearnGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getIpoLearnGuide(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | SoHo Wealth`,
    description: guide.description,
    alternates: { canonical: `https://www.sohowealth.in/ipo/learn/${guide.slug}` },
    openGraph: { title: guide.title, description: guide.description, url: `https://www.sohowealth.in/ipo/learn/${guide.slug}`, type: "article" },
  };
}

export default async function IpoLearnGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getIpoLearnGuide(slug);
  if (!guide) notFound();
  const related = ipoLearnGuides.filter((item) => item.slug !== guide.slug);

  return (
    <main className="bg-white pb-20">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        datePublished: "2026-08-13",
        dateModified: "2026-08-13",
        author: { "@type": "Organization", name: "SoHo Wealth Editorial Team", url: "https://www.sohowealth.in/team" },
        publisher: { "@type": "Organization", name: "SoHo Wealth", url: "https://www.sohowealth.in" },
        mainEntityOfPage: `https://www.sohowealth.in/ipo/learn/${guide.slug}`,
      }} />
      <Breadcrumbs items={[{ name: "IPO Research", href: "/ipo" }, { name: "Learn", href: "/ipo/learn" }, { name: guide.title, href: `/ipo/learn/${guide.slug}` }]} />
      <header className="container mx-auto max-w-4xl px-6 pb-14 pt-10">
        <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">{guide.eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl" style={{ color: "#0B1F3A" }}>{guide.title}</h1>
        <p className="mt-6 font-body text-lg leading-relaxed text-slate-600">{guide.intro}</p>
        <p className="mt-5 font-body text-xs text-slate-500">Educational guide · Reviewed 13 August 2026 · <Link href="/team" className="font-semibold text-emerald-800">SoHo Wealth Editorial Team</Link></p>
      </header>

      <FAQSection faqs={guide.faqs} heading={`${guide.title}: FAQs`} />

      <section className="container mx-auto max-w-5xl px-6 pt-16">
        <h2 className="font-display text-2xl font-semibold" style={{ color: "#0B1F3A" }}>Continue learning</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {related.map((item) => (
            <Link key={item.slug} href={`/ipo/learn/${item.slug}`} className="group flex items-center justify-between rounded-xl border border-slate-200 p-5 hover:border-emerald-300">
              <span>
                <span className="block font-body text-xs font-bold uppercase tracking-[0.1em] text-emerald-700">{item.eyebrow}</span>
                <span className="mt-1 block font-display text-lg font-semibold" style={{ color: "#0B1F3A" }}>{item.title}</span>
              </span>
              <ArrowRight className="h-4 w-4 text-emerald-700 transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
        <div className="mt-12 rounded-xl border border-amber-200 bg-amber-50 p-6 font-body text-sm leading-relaxed text-amber-900/80">
          This material is general education, not personalized advice or a recommendation concerning any IPO. Always read the applicable RHP or prospectus and verify current exchange and registrar information.
        </div>
      </section>
    </main>
  );
}
