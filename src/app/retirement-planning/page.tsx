import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarClock, CheckCircle2, Landmark, RefreshCw, ShieldCheck, UsersRound, WalletCards } from "lucide-react";
import { FAQSection, type FAQ } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";

const canonicalUrl = "https://www.sohowealth.in/retirement-planning";

export const metadata: Metadata = {
  title: "Retirement Planning in Hyderabad, India | SoHo Wealth",
  description: "Retirement planning in Hyderabad for corpus, monthly income, inflation, healthcare, EPF, NPS, annuities, withdrawals and spouse protection.",
  keywords: ["retirement planning Hyderabad", "retirement planner Hyderabad", "retirement planning India", "retirement income planning India", "retirement corpus calculator India", "post retirement income planning", "NPS annuity planning", "EPF retirement planning"],
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
  openGraph: { title: "Retirement Planning in Hyderabad, India | SoHo Wealth", description: "Plan retirement corpus, monthly income, inflation, healthcare, EPF, NPS, annuities and family continuity.", url: canonicalUrl, type: "website", images: ["https://www.sohowealth.in/retirement-planning/opengraph-image"] },
  twitter: { card: "summary_large_image", title: "Retirement Planning in Hyderabad, India | SoHo Wealth", description: "Connect retirement expenses, corpus, NPS, pensions, healthcare and family continuity in one practical plan.", images: ["https://www.sohowealth.in/retirement-planning/opengraph-image"] },
};

const pillars = [
  { icon: WalletCards, title: "Your spending floor", text: "Separate essential monthly expenses from lifestyle choices and one-off goals." },
  { icon: CalendarClock, title: "Income by phase", text: "Plan the active, slower and care-intensive years instead of assuming one flat expense number." },
  { icon: ShieldCheck, title: "Liquidity and shocks", text: "Keep near-term spending and emergency money away from assets that may be down when you need them." },
  { icon: UsersRound, title: "Spouse and family", text: "Test what happens to household income after either spouse dies and organise nominees and records." },
  { icon: Landmark, title: "Pension choices", text: "Compare NPS, EPF, pensions and annuities by the job each must do—not by headline rate alone." },
  { icon: RefreshCw, title: "Annual course correction", text: "Update spending, returns, health costs and family responsibilities at least once a year." },
];

const faqs: FAQ[] = [
  { q: "Is retirement planning an investment product?", a: "No. It is a planning service. We first define spending, income, liquidity, risk and family needs. Investment products are considered only later, where they fit the plan." },
  { q: "Does SoHo Wealth provide an NPS annuity rate?", a: "Annuity quotes vary by provider, age, option, payment frequency and market conditions. We help you compare live, like-for-like quotes and the contract features that come with them." },
  { q: "Should I choose the annuity with the highest payout?", a: "Not automatically. A higher starting payout may come with less spouse protection, no return of purchase price or other trade-offs. Compare the complete contract and your household needs." },
  { q: "Can you guarantee a retirement corpus or income?", a: "No. Projections use assumptions and need periodic review. The purpose of planning is to create a resilient decision framework, not a guarantee." },
  { q: "Does SoHo Wealth provide retirement planning in Hyderabad?", a: "Yes. SoHo Wealth is based in Hyderabad and offers retirement-planning reviews for local families, professionals and business owners, with online consultations available where appropriate." },
  { q: "How much retirement corpus do I need in India?", a: "Start with future monthly expenses after inflation, subtract reliable pension or rental income, then model portfolio withdrawals across the expected retirement period. There is no universal ₹1 crore or salary-multiple answer." },
  { q: "When should I start retirement planning?", a: "Start as soon as retirement becomes a household goal. Beginning earlier can reduce the monthly contribution required, while people closer to retirement can still improve the plan through higher savings, debt decisions, spending changes and a revised timeline." },
  { q: "What does a retirement planning service include?", a: "A structured review can cover retirement expenses, required corpus, EPF and NPS, pensions, annuities, portfolio withdrawals, healthcare reserves, debt, property, spouse income and family documentation." },
];

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service", "@id": `${canonicalUrl}#service`,
  name: "Retirement Planning", serviceType: "Retirement Income Planning", url: canonicalUrl,
  description: "Retirement cash-flow, income, liquidity, NPS annuity and family-continuity planning in Hyderabad and online across India.",
  provider: { "@id": "https://www.sohowealth.in/#organization" },
  areaServed: [
    { "@type": "City", name: "Hyderabad" },
    { "@type": "AdministrativeArea", name: "Telangana" },
    { "@type": "Country", name: "India" },
  ],
  audience: [
    { "@type": "PeopleAudience", audienceType: "Professionals and families preparing for retirement" },
    { "@type": "PeopleAudience", audienceType: "Retirees building a household income plan" },
  ],
  availableChannel: [
    {
      "@type": "ServiceChannel",
      name: "In-person retirement planning review",
      serviceLocation: {
        "@type": "Place",
        name: "SoHo Wealth, Khajaguda, Hyderabad",
        address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
      },
    },
    {
      "@type": "ServiceChannel",
      name: "Online retirement planning review",
      serviceUrl: `${canonicalUrl}#retirement-review`,
      availableLanguage: ["English", "Telugu"],
    },
  ],
  serviceOutput: ["Retirement cash-flow map", "Corpus and contribution-gap estimate", "Retirement income framework", "Annual review priorities"].map((name) => ({ "@type": "Thing", name })),
};

type RetirementGuideLink = readonly [title: string, href: string];

const retirementGuideGroups: ReadonlyArray<{ title: string; description: string; links: readonly RetirementGuideLink[] }> = [
  { title: "Start with your life stage", description: "Use the guide closest to your current planning horizon.", links: [
    ["Retirement Planning at 30", "/insights/retirement-planning-at-30-india"],
    ["Retirement Planning at 40", "/insights/retirement-planning-at-40-india"],
    ["Retirement Planning at 50", "/insights/retirement-planning-at-50-india"],
    ["Retirement Planning at 60", "/insights/retirement-planning-at-60-india"],
    ["Early Retirement & FIRE", "/insights/early-retirement-planning-india"],
  ] },
  { title: "Plan for your household", description: "Account for income, ownership, care and family continuity.", links: [
    ["Retirement Planning for Women", "/insights/retirement-planning-for-women-india"],
    ["Retirement Planning for Singles", "/insights/retirement-planning-for-single-people-india"],
    ["Retirement Planning for Couples", "/insights/retirement-planning-for-couples-india"],
    ["NRIs Returning to India", "/insights/retirement-planning-for-nris-returning-to-india"],
    ["Retirement for Business Owners", "/insights/retirement-planning-self-employed-business-owners-india"],
  ] },
  { title: "Build corpus and monthly income", description: "Move from a target number to a usable withdrawal system.", links: [
    ["How Much Money Do You Need to Retire?", "/insights/how-much-money-needed-to-retire-india"],
    ["Monthly Income From ₹1 Crore", "/insights/monthly-income-from-1-crore-retirement"],
    ["Safe Withdrawal Rate in India", "/insights/safe-withdrawal-rate-india-retirement"],
    ["How to Invest a Retirement Corpus", "/insights/how-to-invest-retirement-corpus-india"],
    ["Retirement Bucket Strategy", "/insights/retirement-bucket-strategy-india"],
    ["SWP vs Annuity", "/insights/swp-vs-annuity-retirement"],
  ] },
  { title: "Review accounts and final decisions", description: "Resolve access, healthcare and income choices before retirement.", links: [
    ["EPF vs PPF vs NPS", "/insights/epf-vs-ppf-vs-nps"],
    ["NPS Lump Sum vs Annuity", "/insights/nps-lump-sum-vs-annuity"],
    ["Five Years Before Retirement", "/insights/five-years-before-retirement-checklist-india"],
    ["Healthcare Reserve", "/insights/healthcare-cost-retirement-india"],
  ] },
];

const retirementGuideLinks = retirementGuideGroups.flatMap((group) => group.links);

const agePlanningJourney = [
  { age: "30s", title: "Build the system", text: "Create liquidity, automate contributions and increase them as income grows.", href: "/insights/retirement-planning-at-30-india" },
  { age: "40s", title: "Measure the gap", text: "Connect competing goals, existing accounts and the next 20 years of saving.", href: "/insights/retirement-planning-at-40-india" },
  { age: "50s", title: "Make the reset", text: "Resolve debt, healthcare, property and catch-up funding before retirement.", href: "/insights/retirement-planning-at-50-india" },
  { age: "60s", title: "Turn savings into income", text: "Set up liquidity, withdrawals, NPS choices and spouse continuity.", href: "/insights/retirement-planning-at-60-india" },
] as const;

const retirementTools = [
  { title: "Corpus calculator", text: "Estimate future expenses, required corpus and the monthly investment gap.", href: "/tools/retirement-calculator" },
  { title: "Inflation calculator", text: "See how today's spending and a fixed pension may change in purchasing power.", href: "/tools/retirement-inflation-calculator" },
  { title: "Income calculator", text: "Estimate first-year monthly income from an existing corpus and pension.", href: "/tools/retirement-income-calculator" },
  { title: "Readiness check", text: "Review ten foundations and find the most useful next planning step.", href: "/tools/retirement-readiness-check" },
  { title: "NPS annuity calculator", text: "Turn a live annuity quote into monthly, quarterly and annual income.", href: "/tools/nps-annuity-calculator" },
  { title: "EPF calculator", text: "Estimate how an existing EPF balance and future monthly credits may grow.", href: "/tools/epf-calculator" },
  { title: "PPF calculator", text: "Estimate a PPF maturity value with editable deposit, term and rate assumptions.", href: "/tools/ppf-calculator" },
] as const;

const officialRetirementResources = [
  { name: "SEBI Investor", text: "Retirement basics, financial goal planning and investor education.", href: "https://investor.sebi.gov.in/moneymatters-planforearlyretire.html" },
  { name: "PFRDA", text: "Current NPS scheme information, regulatory updates and retirement literacy.", href: "https://www.pfrda.org.in/en/schemes/national-pension-system/about-nps" },
  { name: "NPS Trust", text: "Subscriber guidance on NPS exits, withdrawals and operational processes.", href: "https://npstrust.org.in/normal-exit" },
  { name: "EPFO", text: "Official EPF member information, services and frequently asked questions.", href: "https://www.epfindia.gov.in/site_en/FAQ.php" },
] as const;

const retirementGlossary = [
  { term: "Retirement corpus", definition: "The pool of assets assigned to fund retirement spending, after separating other goals and reserves." },
  { term: "Real return", definition: "The investment return left after accounting for inflation; it approximates growth in purchasing power." },
  { term: "Income floor", definition: "The dependable income intended to cover essential expenses such as housing, food, utilities and basic healthcare." },
  { term: "Sequence risk", definition: "The risk that poor returns early in retirement make withdrawals more damaging, even if long-term average returns later recover." },
  { term: "Annuity", definition: "A contract that exchanges a purchase amount for periodic income under a selected life and survivor option." },
  { term: "SWP", definition: "A systematic withdrawal plan: an instruction to redeem investment units regularly, not a guaranteed return or pension." },
] as const;

const planningProcess = [
  { title: "Define the retirement life", text: "Set the target date, location, housing, family responsibilities and essential versus discretionary spending." },
  { title: "Calculate the income gap", text: "Project expenses after inflation and subtract pensions, rent and other dependable household income." },
  { title: "Map every retirement asset", text: "Bring EPF, PPF, NPS, investments, deposits, property, business interests and liabilities into one view." },
  { title: "Stress-test the plan", text: "Test lower returns, higher inflation, longer life, healthcare shocks and the plan for either spouse alone." },
  { title: "Sequence decisions and reviews", text: "Prioritise contributions, liquidity, debt, withdrawals, NPS choices and family documentation, then review annually." },
] as const;

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${canonicalUrl}#webpage`,
  url: canonicalUrl,
  name: "Retirement Planning in Hyderabad",
  description: "Retirement income planning covering expenses, inflation, corpus, NPS, pensions, healthcare, liquidity and family continuity.",
  datePublished: "2026-08-13",
  dateModified: "2026-08-16",
  inLanguage: "en-IN",
  isPartOf: { "@id": "https://www.sohowealth.in/#website" },
  about: ["Retirement planning", "Retirement income", "NPS", "EPF", "PPF"].map((name) => ({ "@type": "Thing", name })),
  citation: officialRetirementResources.map((resource) => resource.href),
  mainEntity: { "@id": `${canonicalUrl}#service` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sohowealth.in/" },
    { "@type": "ListItem", position: 2, name: "Retirement Planning", item: canonicalUrl },
  ],
};

const guideListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SoHo Wealth Retirement Planning Guides",
  itemListElement: retirementGuideLinks.map(([name, path], index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    url: `https://www.sohowealth.in${path}`,
  })),
};

const toolListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${canonicalUrl}#tools`,
  name: "Free Retirement Planning Tools",
  description: "Free calculators and checks for retirement corpus, inflation, monthly income and planning readiness.",
  numberOfItems: retirementTools.length,
  itemListElement: retirementTools.map((tool, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: tool.title,
    description: tool.text,
    url: `https://www.sohowealth.in${tool.href}`,
  })),
};

const glossarySchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": `${canonicalUrl}#glossary`,
  name: "Retirement Planning Glossary",
  url: `${canonicalUrl}#retirement-glossary-heading`,
  hasDefinedTerm: retirementGlossary.map((item) => ({
    "@type": "DefinedTerm",
    name: item.term,
    description: item.definition,
    inDefinedTermSet: { "@id": `${canonicalUrl}#glossary` },
  })),
};

const processSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${canonicalUrl}#process`,
  name: "How SoHo Wealth Builds a Retirement Plan",
  description: "A five-step retirement planning process covering lifestyle, income gap, assets, stress testing and annual reviews.",
  step: planningProcess.map((item, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: item.title,
    text: item.text,
    url: `${canonicalUrl}#retirement-planning-process`,
  })),
};

export default function RetirementPlanningPage() {
  return (
    <main className="pt-20">
      <JsonLd data={[serviceSchema, webpageSchema, breadcrumbSchema, guideListSchema, toolListSchema, glossarySchema, processSchema]} />
      <section className="relative overflow-hidden bg-[#07192f]">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#C9A84C]/10 blur-3xl" />
        <div className="container relative mx-auto px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A84C]">Planning service · not an investment product</p>
          <h1 className="mt-6 max-w-5xl font-display text-4xl font-semibold leading-tight text-white md:text-6xl">Retirement planning in Hyderabad is not one number. It is a <span className="text-[#C9A84C]">30-year income plan.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70">We connect everyday spending, inflation, healthcare, family protection, pensions, NPS, investments and property into one plan you can actually use.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#retirement-review" className="inline-flex items-center justify-center rounded-lg bg-[#C9A84C] px-7 py-4 text-sm font-bold text-[#0B1F3A]">Book a Retirement Review <ArrowRight className="ml-2 h-4 w-4" /></a>
            <Link href="/tools/retirement-calculator" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 text-sm font-semibold text-white">Use Retirement Calculator</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-12 lg:py-16" aria-labelledby="retirement-tools-heading">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A761F]">Free retirement tools</p><h2 id="retirement-tools-heading" className="mt-3 font-display text-3xl font-semibold text-[#0B1F3A]">Choose the question you need to answer</h2></div><div className="max-w-xl"><p className="text-sm leading-relaxed text-slate-500">Your entries stay in the browser. Use ranges and revisit the assumptions rather than treating one result as a promise.</p><Link href="/tools/retirement-planning-calculators" className="mt-3 inline-flex items-center text-sm font-bold text-[#8B6815]">View all seven calculators <ArrowRight className="ml-2 h-4 w-4" /></Link></div></div>
          <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {retirementTools.map((tool) => <li key={tool.href}><Link href={tool.href} className="group flex h-full flex-col rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-[#C9A84C] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A761F]"><h3 className="font-display text-xl font-semibold text-[#0B1F3A]">{tool.title}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{tool.text}</p><span className="mt-5 inline-flex items-center text-sm font-bold text-[#8B6815]">Open tool <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" /></span></Link></li>)}
          </ul>
        </div>
      </section>

      <section className="border-b border-[#E7D7A9] bg-[#FDF8EC] py-10 lg:py-14">
        <div className="container mx-auto px-6 lg:px-8">
          <Link href="/insights/epf-vs-ppf-vs-nps" className="group mx-auto grid max-w-6xl gap-7 rounded-3xl border border-[#C9A84C]/40 bg-white p-7 shadow-[0_18px_50px_-35px_rgba(11,31,58,.55)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-35px_rgba(11,31,58,.65)] md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]"><span className="rounded-full bg-[#0B1F3A] px-3 py-1.5 text-white">Start here</span><span className="text-[#9A761F]">EPF · PPF · NPS</span></div>
              <h2 className="mt-5 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">They sound similar. They do three different jobs.</h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">See employment-linked EPF, personal PPF and market-linked NPS side by side—who can use them, how returns work, when money is accessible and where each fits in retirement.</p>
              <div className="mt-6 grid gap-2 text-sm sm:grid-cols-3"><span className="rounded-lg bg-[#F7F8FA] px-4 py-3 font-semibold text-[#0B1F3A]">EPF: salary-linked base</span><span className="rounded-lg bg-[#F7F8FA] px-4 py-3 font-semibold text-[#0B1F3A]">PPF: personal fixed income</span><span className="rounded-lg bg-[#F7F8FA] px-4 py-3 font-semibold text-[#0B1F3A]">NPS: market-linked pension</span></div>
            </div>
            <span className="inline-flex items-center justify-center rounded-xl bg-[#C9A84C] px-6 py-4 text-sm font-bold text-[#0B1F3A]">Compare all three <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" /></span>
          </Link>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A761F]">The retirement dashboard</p><h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-5xl">Six questions before any product</h2></div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">{pillars.map((item) => <article key={item.title} className="rounded-2xl border border-slate-200 p-7"><item.icon className="h-6 w-6 text-[#B18C2D]" /><h3 className="mt-5 font-display text-xl font-semibold text-[#0B1F3A]">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p></article>)}</div>
        </div>
      </section>

      <section id="retirement-planning-process" className="bg-[#07192F] py-20 text-white lg:py-24" aria-labelledby="retirement-process-heading">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">Retirement planning process</p><h2 id="retirement-process-heading" className="mt-4 font-display text-3xl font-semibold md:text-5xl">From scattered accounts to one usable plan</h2><p className="mt-5 leading-relaxed text-white/65">The sequence matters. We establish the household decisions before discussing which regulated products may fit them.</p></div>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">{planningProcess.map((step, index) => <li key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6"><span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#C9A84C] text-sm font-bold text-[#0B1F3A]">{index + 1}</span><h3 className="mt-5 font-display text-xl font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-white/60">{step.text}</p></li>)}</ol>
          <a href="#retirement-review" className="mt-9 inline-flex items-center rounded-xl bg-[#C9A84C] px-6 py-3 text-sm font-bold text-[#0B1F3A]">Start a retirement review <ArrowRight className="ml-2 h-4 w-4" /></a>
        </div>
      </section>

      <section className="bg-[#F7F8FA] py-20 lg:py-24">
        <div className="container mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A761F]">A living plan</p><h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">What we keep adding and reviewing</h2><p className="mt-5 leading-relaxed text-slate-600">This service is designed as a growing retirement knowledge hub. New guides, checklists and decision tools can sit here without mixing planning with the investment-product catalogue.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">{["Retirement expense estimate", "Income-floor calculation", "NPS exit and annuity comparison", "Healthcare and contingency reserve", "Withdrawal sequence", "Spouse-continuity test", "Property and rent decisions", "Nominee and estate coordination"].map((item) => <div key={item} className="flex gap-3 rounded-xl bg-white p-5"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B18C2D]" /><span className="text-sm font-semibold text-[#0B1F3A]">{item}</span></div>)}</div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#F7F8FA] py-20 lg:py-24" aria-labelledby="retirement-by-age-heading">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A761F]">Retirement planning by age</p>
            <h2 id="retirement-by-age-heading" className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-5xl">Start with the decade you are in</h2>
            <p className="mt-5 leading-relaxed text-slate-600">The goal stays the same, but the most useful next decision changes as retirement gets closer.</p>
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {agePlanningJourney.map((stage) => (
              <li key={stage.age}>
                <Link href={stage.href} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#C9A84C] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A761F]">
                  <span className="text-3xl font-semibold text-[#C9A84C]">{stage.age}</span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-[#0B1F3A]">{stage.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{stage.text}</p>
                  <span className="mt-6 inline-flex items-center text-sm font-bold text-[#8B6815]">Read the {stage.age} guide <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" /></span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24" aria-labelledby="hyderabad-retirement-heading">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A761F]">Retirement planning in Hyderabad</p>
              <h2 id="hyderabad-retirement-heading" className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-5xl">Build around the life you expect to live here.</h2>
              <p className="mt-6 leading-relaxed text-slate-600">A Hyderabad retirement plan should reflect the household&apos;s actual housing, healthcare, family and travel decisions. Living in an owned home, moving closer to children, retaining rental property or choosing a senior-living community all create different cash-flow and liquidity needs.</p>
              <p className="mt-4 leading-relaxed text-slate-600">SoHo Wealth is based in Khajaguda and works with Hyderabad families through structured portfolio and retirement reviews. Consultations can also continue online when children or family decision-makers live elsewhere.</p>
              <a href="#retirement-review" className="mt-7 inline-flex items-center rounded-xl bg-[#0B1F3A] px-6 py-3 text-sm font-bold text-white">Book a Hyderabad retirement review <ArrowRight className="ml-2 h-4 w-4" /></a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Housing", "Owned home, downsizing, maintenance, rent and property liquidity"],
                ["Healthcare", "Hospital access, insurance, medical reserve and longer-term care"],
                ["Family", "Children abroad, dependent parents and survivor-income continuity"],
                ["Income", "EPF, NPS, pensions, rent, business income and portfolio withdrawals"],
              ].map(([title, copy]) => <article key={title} className="rounded-2xl border border-slate-200 bg-[#F7F8FA] p-6"><h3 className="font-display text-xl font-semibold text-[#0B1F3A]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{copy}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#C9A84C]/30 bg-[#FDF9EF] p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A761F]">Popular retirement question</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A]">How much monthly income can ₹1 crore provide?</h2>
              <p className="mt-5 leading-relaxed text-slate-700">Compare ₹25,000–₹41,667 starting monthly withdrawals, then see how inflation, pensions, healthcare reserves and retirement length change the answer.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/insights/monthly-income-from-1-crore-retirement" className="inline-flex items-center font-bold text-[#0B1F3A]">See the scenarios <ArrowRight className="ml-2 h-4 w-4" /></Link>
                <Link href="/tools/retirement-calculator" className="inline-flex items-center font-semibold text-[#8B6815]">Calculate your corpus</Link>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A761F]">NPS decision guide</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A]">Annuity choice is bigger than the rate</h2>
              <p className="mt-5 leading-relaxed text-slate-700">Compare spouse income, return of purchase price, inflation and liquidity before choosing an annuity from live provider quotes.</p>
              <Link href="/insights/nps-annuity-rates-retirement-decision" className="mt-7 inline-flex items-center font-bold text-[#0B1F3A]">Read the NPS guide <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07192F] py-20 text-white" aria-labelledby="retirement-knowledge-heading">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8"><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">Retirement knowledge hub</p><h2 id="retirement-knowledge-heading" className="mt-4 font-display text-3xl font-semibold md:text-5xl">Choose the retirement question you need to solve</h2><p className="mt-5 leading-relaxed text-white/65">Start with your stage or household, then move into corpus, income and account decisions.</p></div><div className="mt-12 space-y-12">{retirementGuideGroups.map((group) => <section key={group.title} aria-labelledby={`guide-group-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}><h3 id={`guide-group-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="font-display text-2xl font-semibold text-[#E5CB83]">{group.title}</h3><p className="mt-2 text-sm leading-relaxed text-white/55">{group.description}</p><ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{group.links.map(([title, href]) => <li key={href}><Link href={href} className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-[#C9A84C]/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E5CB83]"><h4 className="font-display text-xl font-semibold">{title}</h4><span className="mt-5 inline-flex items-center text-sm font-bold text-[#C9A84C]">Read guide <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" /></span></Link></li>)}</ul></section>)}</div></div>
      </section>

      <section className="border-t border-slate-200 bg-[#F7F8FA] py-16" aria-labelledby="official-retirement-resources-heading">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A761F]">Verify the rules</p><h2 id="official-retirement-resources-heading" className="mt-3 font-display text-3xl font-semibold text-[#0B1F3A]">Official retirement resources</h2><p className="mt-4 leading-relaxed text-slate-600">Rates, tax treatment and withdrawal rules can change. Use current regulator and scheme-owner guidance before acting on an older article or illustration.</p></div>
          <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{officialRetirementResources.map((resource) => <li key={resource.href}><a href={resource.href} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#C9A84C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A761F]"><h3 className="font-display text-xl font-semibold text-[#0B1F3A]">{resource.name}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{resource.text}</p><span className="mt-5 inline-flex items-center text-sm font-bold text-[#8B6815]">Open official source <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" /><span className="sr-only"> (opens in a new tab)</span></span></a></li>)}</ul>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20" aria-labelledby="retirement-glossary-heading">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A761F]">Plain-English definitions</p><h2 id="retirement-glossary-heading" className="mt-3 font-display text-3xl font-semibold text-[#0B1F3A]">Retirement planning glossary</h2><p className="mt-4 leading-relaxed text-slate-600">Six terms that make retirement conversations easier to follow.</p></div>
          <dl className="mt-9 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">{retirementGlossary.map((item) => <div key={item.term} className="border-t border-slate-200 pt-5"><dt className="font-display text-xl font-semibold text-[#0B1F3A]">{item.term}</dt><dd className="mt-3 text-sm leading-relaxed text-slate-600">{item.definition}</dd></div>)}</dl>
        </div>
      </section>

      <LeadCaptureForm source="retirement-planning page" service="Retirement Planning" heading="Book Your Retirement Planning Review" sectionId="retirement-review" leftContent={<><p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">Start with the plan</p><h2 className="mb-5 font-display text-3xl font-semibold text-white md:text-4xl">Turn your retirement savings into a usable income map.</h2><p className="mb-8 leading-relaxed text-white/70">Bring your NPS, EPF, pensions, investments, property, loans and expected monthly spending. We will organise the decisions in the right sequence.</p></>} />
      <FAQSection faqs={faqs} heading="Retirement Planning: Frequently Asked Questions" background="#FFFFFF" />
    </main>
  );
}
