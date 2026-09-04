import Link from "next/link";
import { ArrowRight, Calculator, ShieldCheck, Sparkles } from "lucide-react";

const trustItems = ["AMFI mutual fund & SIF distributor — ARN 306593", "APMI PMS distributor — APRN01233", "Not a SEBI Registered Investment Adviser", "Columbia MBA founder"];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B1F3A]">
      <div className="absolute inset-0 opacity-[.04]" style={{ backgroundImage: "repeating-linear-gradient(135deg,transparent,transparent 40px,rgba(255,255,255,.08) 40px,rgba(255,255,255,.08) 41px)" }} />
      <div className="container relative z-10 mx-auto px-6 pb-20 pt-28 text-center lg:px-8"><div className="mx-auto max-w-5xl">
        <Link href="/tools/ai-wealth-planner" data-analytics-event="cta_click" data-analytics-label="free-wealth-planner" data-analytics-location="homepage-hero" className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-[#E5CB83]"><Sparkles className="h-4 w-4" aria-hidden="true" />Free Wealth Planning Tool<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        <h1 className="mt-7 font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">Wealth Planning for <span className="text-[#C9A84C]">HNIs, Founders and NRIs Across India</span></h1>
        <p className="mx-auto mt-7 max-w-4xl text-lg leading-relaxed text-white/75 md:text-xl">Bring mutual funds, PMS, SIFs, employer stock, property and cross-border assets into one decision framework—with a clearly disclosed distribution model and institutional-style research.</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"><Link href="/portfolio-review" data-analytics-event="cta_click" data-analytics-label="private-portfolio-review" data-analytics-location="homepage-hero" className="inline-flex min-h-14 items-center justify-center rounded-md bg-[#C9A84C] px-8 text-base font-semibold text-[#0B1F3A]">Book a Private Portfolio Review<ArrowRight className="ml-2 h-5 w-5" /></Link><Link href="/tools/ai-wealth-planner" data-analytics-event="cta_click" data-analytics-label="free-wealth-planner" data-analytics-location="homepage-hero" className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/25 px-8 text-base font-semibold text-white"><Calculator className="mr-2 h-5 w-5" />Explore the Free Wealth Planner</Link></div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/55"><span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#C9A84C]" />Private browser-based planning</span><span>No sign-up for the calculator</span><span>Goal corpus · Required SIP · Asset mix</span></div>
        <div className="mt-12 border-t border-white/10 pt-8"><div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-white/70">{trustItems.map((item) => <span key={item}>{item}</span>)}</div></div>
      </div></div>
    </section>
  );
}
