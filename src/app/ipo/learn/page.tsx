import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ipoLearnGuides } from "@/lib/ipo/learn";

export const metadata: Metadata = {
  title: "IPO Learning Centre | Subscription, Allotment & Applications",
  description: "Plain-language guides to IPO subscription, allotment, applications, Mainboard vs SME issues and issue structure in India.",
  alternates: { canonical: "https://www.sohowealth.in/ipo/learn" },
};

export default function IpoLearnPage() {
  return (
    <main className="bg-white pb-20">
      <Breadcrumbs items={[{ name: "IPO Research", href: "/ipo" }, { name: "Learn", href: "/ipo/learn" }]} />
      <section className="container mx-auto max-w-6xl px-6 pb-14 pt-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 font-body text-xs font-bold uppercase tracking-[0.12em] text-emerald-800">
            <GraduationCap className="mr-2 h-4 w-4" /> IPO Learning Centre
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-6xl" style={{ color: "#0B1F3A" }}>Understand the IPO process before reading the numbers.</h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-slate-600">Clear explanations of bidding, subscription, allocation and issue structure—without application calls or grey-market speculation.</p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {ipoLearnGuides.map((guide, index) => (
            <Link key={guide.slug} href={`/ipo/learn/${guide.slug}`} className={`group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg ${index === 0 ? "md:col-span-2" : ""}`}>
              <BookOpen className="h-6 w-6 text-emerald-700" />
              <p className="mt-6 font-body text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">{guide.eyebrow}</p>
              <h2 className="mt-2 font-display text-2xl font-semibold" style={{ color: "#0B1F3A" }}>{guide.title}</h2>
              <p className="mt-3 max-w-3xl font-body text-sm leading-relaxed text-slate-600">{guide.description}</p>
              <span className="mt-6 inline-flex items-center font-body text-sm font-bold text-emerald-800">Read {guide.faqs.length} answers <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-6 pt-14">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 font-body text-sm leading-relaxed text-amber-900/80">
          This learning centre provides general information, not a recommendation to apply for, buy, sell or hold any security. Rules and operational timelines can change; verify the current offer document, exchange notice, registrar information and intermediary cut-offs.
        </div>
      </section>
    </main>
  );
}

