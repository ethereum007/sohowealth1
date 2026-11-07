"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Globe2 } from "lucide-react";
import { HeroSection } from "./HeroSection";

const slideNames = ["NRI investing", "Wealth planning"];

export function HomeHeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section aria-label="SoHo Wealth highlights" aria-roledescription="carousel" className="relative bg-[#0B1F3A] pb-20">
      <div aria-live="polite" aria-atomic="true">
        <div role="group" aria-roledescription="slide" aria-label={`${activeSlide + 1} of 2: ${slideNames[activeSlide]}`}>
          {activeSlide === 0 ? (
            <div className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 lg:px-8">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.18),transparent_65%)]" />
              <div className="relative mx-auto max-w-4xl text-center">
                <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#E5CB83]">
                  <Globe2 className="h-4 w-4" aria-hidden="true" /> For Indians around the world
                </p>
                <h1 className="font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  KYC eased for <span className="text-[#C9A84C]">NRIs.</span>
                </h1>
                <p className="mx-auto mb-9 mt-7 max-w-2xl text-xl leading-relaxed text-white/80 md:text-2xl">
                  From 3 December 2026, eligible NRIs can complete digital KYC from abroad.
                </p>
                <Link href="/contact#contact-form" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-[#C9A84C] px-6 py-4 text-base font-semibold text-[#0B1F3A] transition-colors hover:bg-[#E5CB83] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E5CB83] sm:px-8">
                  Set Up a Free Consultation <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                </Link>
                <p className="mt-6 text-sm text-white/55">Explore your KYC and investment requirements with SoHo Wealth.</p>
                <Link href="/insights/nri-digital-kyc-sebi-rules" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#E5CB83] underline underline-offset-4">
                  Read the new NRI KYC guide
                </Link>
                <Link href="/nri-investment-services-hyderabad" className="mx-auto flex min-h-11 w-fit items-center text-sm text-[#E5CB83] underline underline-offset-4">
                  Explore NRI investment services
                </Link>
              </div>
            </div>
          ) : <HeroSection />}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-4 text-white">
        <button type="button" onClick={() => setActiveSlide((slide) => (slide + 1) % 2)} aria-label="Previous slide" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A84C]">
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        {slideNames.map((name, index) => (
          <button key={name} type="button" onClick={() => setActiveSlide(index)} aria-label={`Show ${name} slide`} aria-pressed={activeSlide === index} className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A84C]">
            <span className={`h-2 rounded-full transition-all ${activeSlide === index ? "w-7 bg-[#C9A84C]" : "w-2 bg-white/40"}`} />
          </button>
        ))}
        <button type="button" onClick={() => setActiveSlide((slide) => (slide + 1) % 2)} aria-label="Next slide" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A84C]">
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
