import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  FileSpreadsheet,
  Gauge,
  Goal,
  Laptop2,
  MapPin,
  MessageCircle,
  Network,
  RefreshCw,
  Rocket,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { FAQSection, type FAQ } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedServices } from "@/components/seo/RelatedServices";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { TechWealthCheckup } from "./TechWealthCheckup";

const canonicalUrl =
  "https://www.sohowealth.in/wealth-planning-for-it-professionals";

export const metadata: Metadata = {
  title: "Wealth Planning for IT Professionals in Hyderabad | SoHo",
  description:
    "Wealth planning for IT professionals in Hyderabad. Organise salary, bonuses, RSUs, ESOPs, employer-stock concentration and financial-independence goals.",
  keywords: [
    "wealth planning for IT professionals Hyderabad",
    "financial planning for tech professionals India",
    "RSU wealth planning Hyderabad",
    "ESOP financial planning India",
    "investment planning for software engineers Hyderabad",
    "financial advisor for IT professionals Hyderabad",
    "RSU diversification India",
    "tech professional wealth management",
    "financial independence for software engineers India",
    "HITEC City wealth advisor",
  ],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Wealth Planning for IT Professionals in Hyderabad",
    description:
      "A practical system for salary, bonuses, RSUs, ESOPs, career changes and financial independence.",
    url: canonicalUrl,
    siteName: "SoHo Wealth",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wealth Planning for IT Professionals in Hyderabad",
    description:
      "Connect compensation, employer stock and long-term goals—and take the free Tech Wealth Check-up.",
  },
};

const compensationLayers = [
  {
    icon: CircleDollarSign,
    title: "Salary",
    copy: "Use predictable monthly cash flow for core commitments, systematic investing and lifestyle guardrails.",
  },
  {
    icon: TrendingUp,
    title: "Bonus",
    copy: "Create an allocation rule before payout day so annual incentives do not become unplanned spending.",
  },
  {
    icon: BarChart3,
    title: "RSUs",
    copy: "Track vesting and employer-stock concentration, then discuss reporting with your CA and portfolio decisions within the appropriate scope.",
  },
  {
    icon: Rocket,
    title: "ESOPs",
    copy: "Understand grant terms, exercise windows and liquidity uncertainty before treating options as spendable wealth.",
  },
];

const careerEvents = [
  {
    icon: CalendarClock,
    stage: "01",
    title: "A vesting event",
    trigger: "A meaningful RSU tranche is about to vest.",
    decisions:
      "Update the concentration view, reserve any cash your specialists identify, and evaluate the remaining proceeds against goals—not the grant price.",
  },
  {
    icon: RefreshCw,
    stage: "02",
    title: "A job switch",
    trigger: "You are leaving with vested shares, unvested grants or ESOPs.",
    decisions:
      "Confirm plan terms with the administrator, map lost benefits and exercise deadlines, and protect the household runway before making investment changes.",
  },
  {
    icon: Rocket,
    stage: "03",
    title: "A startup move",
    trigger: "Cash compensation falls while private equity exposure rises.",
    decisions:
      "Separate the career bet from the family portfolio, test liquidity needs and avoid counting uncertain private equity toward near-term goals.",
  },
  {
    icon: Network,
    stage: "04",
    title: "An overseas move or return",
    trigger: "Residency, payroll, broker access or asset location may change.",
    decisions:
      "Pause assumptions. Coordinate with qualified tax and legal specialists, preserve records and review investment access before executing.",
  },
];

const systemChecklist = [
  {
    number: "01",
    title: "Build one compensation dashboard",
    copy: "List salary, bonus cycles, every equity grant, vesting dates, exercise terms and the current value of vested employer stock.",
  },
  {
    number: "02",
    title: "Measure correlated risk",
    copy: "View salary, career capital and employer shares as connected exposures instead of judging the stock holding in isolation.",
  },
  {
    number: "03",
    title: "Protect career optionality",
    copy: "Set a household runway for a job change, sabbatical or startup attempt without depending on a favourable market exit.",
  },
  {
    number: "04",
    title: "Give irregular inflows a rule",
    copy: "Decide in advance how bonuses and vest proceeds will fund goals, diversification, taxes identified by your CA and discretionary spending.",
  },
  {
    number: "05",
    title: "Match portfolios to timelines",
    copy: "Keep near-term goals away from assets whose volatility or liquidity could force a bad decision at the wrong time.",
  },
  {
    number: "06",
    title: "Define financial independence",
    copy: "Estimate the target corpus and contribution pace, then review both as compensation, family commitments and desired retirement age change.",
  },
  {
    number: "07",
    title: "Keep specialist-ready records",
    copy: "Organise grant statements, brokerage reports and remittance records so your CA, lawyer or plan administrator can advise from complete information.",
  },
  {
    number: "08",
    title: "Review after every career event",
    copy: "Revisit liquidity, protection, nominations and allocation after a promotion, job switch, relocation, startup move or liquidity event.",
  },
];

const faqs: FAQ[] = [
  {
    q: "What is wealth planning for IT professionals?",
    a: "It is the process of connecting salary, bonuses, RSUs, ESOPs, household goals, career changes and long-term investments in one system. The objective is not simply to buy products; it is to decide what each source of wealth is meant to do and how much risk the household is taking.",
  },
  {
    q: "Why do IT professionals need a different wealth plan?",
    a: "Technology compensation can combine rapid salary growth, variable bonuses, employer equity and frequent career changes. That can concentrate income, career prospects and investments in one employer while also creating irregular cash flows and record-keeping needs.",
  },
  {
    q: "Can SoHo Wealth advise me whether to sell my employer's shares?",
    a: "SoHo Wealth provides investment distribution, portfolio review and wealth coordination, not personalised fee-based investment advice or single-stock recommendations. We can help map concentration, goals and product options within our scope; tax, legal, plan-specific and security-level decisions should be confirmed with the relevant qualified specialists.",
  },
  {
    q: "How should I plan around RSU vesting?",
    a: "Start by maintaining a vesting calendar and measuring employer-stock exposure across vested and liquid holdings. Before acting, understand the plan terms and ask your CA about applicable tax and reporting. Any investable proceeds can then be reviewed against liquidity needs, near-term goals and portfolio diversification.",
  },
  {
    q: "How are ESOPs different from RSUs in a wealth plan?",
    a: "ESOPs commonly involve an exercise decision, plan deadlines and uncertain liquidity, while RSUs typically become shares when they vest subject to plan terms. Both need accurate records, but neither should automatically be counted at headline value for near-term family goals.",
  },
  {
    q: "Do foreign RSUs or brokerage accounts need to be reported in India?",
    a: "Foreign assets can create Indian tax-return disclosure and other reporting questions depending on your residential status and facts. SoHo Wealth does not provide tax opinions. Keep complete statements and consult a chartered accountant familiar with foreign assets and equity compensation.",
  },
  {
    q: "Do you work with software engineers across Gachibowli and HITEC City?",
    a: "Yes. SoHo Wealth is based in Khajaguda, Hyderabad and serves technology professionals in Gachibowli, HITEC City, Financial District, Kondapur, Madhapur and beyond, through in-person and video consultations.",
  },
  {
    q: "What should I bring to an IT-professional portfolio review?",
    a: "Bring a current investment list, major goals, monthly commitments, approximate emergency reserves and a summary of RSU or ESOP grants. Do not send passwords or private broker credentials. Tax returns and plan documents should only be shared with the appropriate specialist through secure channels.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Wealth Planning for IT Professionals in Hyderabad",
    description:
      "A practical guide to connecting salary, bonuses, RSUs, ESOPs, career events and financial-independence goals.",
    inLanguage: "en-IN",
    isPartOf: { "@id": "https://www.sohowealth.in/#website" },
    about: [
      "Wealth planning for technology professionals",
      "RSU and ESOP portfolio coordination",
      "Employer-stock concentration",
      "Financial independence",
    ],
    datePublished: "2026-07-27",
    dateModified: "2026-07-28",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl}#service`,
    name: "Wealth Planning for IT Professionals",
    serviceType:
      "Investment distribution, portfolio review and wealth coordination for IT professionals",
    provider: { "@id": "https://www.sohowealth.in/#organization" },
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "Place", name: "Gachibowli" },
      { "@type": "Place", name: "HITEC City" },
      { "@type": "Place", name: "Financial District" },
      { "@type": "AdministrativeArea", name: "Telangana" },
      { "@type": "Country", name: "India" },
    ],
    audience: {
      "@type": "Audience",
      audienceType:
        "Software engineers, technology leaders, product professionals and startup employees",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.sohowealth.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Who We Serve",
        item: "https://www.sohowealth.in/who-we-serve",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "For IT Professionals",
        item: canonicalUrl,
      },
    ],
  },
];

export default function WealthPlanningForITProfessionalsPage() {
  return (
    <main className="bg-white">
      <JsonLd data={structuredData} id="it-professional-wealth-schema" />

      <section className="relative overflow-hidden bg-[#0B1F3A] pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div
          className="absolute inset-0 opacity-20"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,.16) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage:
              "linear-gradient(to bottom right, black, transparent 76%)",
          }}
        />
        <div className="container relative mx-auto px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mx-auto mb-10 flex max-w-6xl items-center gap-2 font-body text-xs text-white/55"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/who-we-serve" className="transition hover:text-white">
              Who We Serve
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#C9A84C]">For IT Professionals</span>
          </nav>

          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 font-body text-xs font-bold uppercase tracking-[0.15em] text-[#C9A84C]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Hyderabad · Gachibowli · HITEC City
              </span>
              <h1 className="mt-7 max-w-4xl font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Wealth planning for IT professionals, built around salary, RSUs
                and optionality.
              </h1>
              <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-white/70">
                Turn fast-changing compensation into a durable system for
                liquidity, diversification, family goals and financial
                independence—without treating every vest or job switch as a
                separate decision.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#tech-wealth-checkup"
                  className="inline-flex items-center justify-center rounded-lg bg-[#C9A84C] px-7 py-4 font-body text-sm font-bold text-[#0B1F3A] transition hover:bg-[#D8BA62]"
                >
                  Take the free check-up
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#it-professional-consultation"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 font-body text-sm font-bold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
                >
                  Book a portfolio review
                </a>
              </div>
              <p className="mt-5 font-body text-xs leading-relaxed text-white/45">
                Educational content and investment-distribution support. Tax,
                legal, stock-option-plan and security-level advice are outside
                SoHo Wealth&apos;s scope.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#07192F]/80 p-7 shadow-2xl md:p-9">
              <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">
                The hidden concentration
              </p>
              <h2 className="mt-4 font-display text-2xl font-semibold text-white md:text-3xl">
                Your employer can sit on four sides of your balance sheet.
              </h2>
              <ul className="mt-7 space-y-4">
                {[
                  "Monthly salary and benefits",
                  "Annual bonus or retention pay",
                  "Vested and unvested company shares",
                  "Future career value in the same sector",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5"
                  >
                    <CheckCircle2
                      className="h-5 w-5 shrink-0 text-[#C9A84C]"
                      aria-hidden="true"
                    />
                    <span className="font-body text-sm font-medium text-white/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-body text-sm leading-relaxed text-white/55">
                A wealth plan starts by seeing these exposures together—not by
                predicting one company&apos;s share price.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#F7F8FA] py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              [
                "New: RSU guide",
                "/wealth-planning-for-it-professionals/rsu-guide",
              ],
              ["Compensation stack", "#compensation-stack"],
              ["Career events", "#career-events"],
              ["8-step system", "#it-wealth-checklist"],
              ["Illustrative case", "#illustrative-tech-case"],
              ["FAQs", "#it-professional-faqs"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-body text-sm font-semibold text-slate-600 transition hover:text-[#8B6815]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FDF9EF] py-10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-6 rounded-3xl border border-[#C9A84C]/35 bg-white p-7 shadow-[0_18px_55px_-40px_rgba(11,31,58,.5)] md:grid-cols-[auto_1fr_auto] md:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#C9A84C]">
              <FileSpreadsheet className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.14em] text-[#8B6815]">
                New resource for IT professionals
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-[#0B1F3A]">
                RSU tax &amp; diversification guide
              </h2>
              <p className="mt-2 max-w-3xl font-body text-sm leading-relaxed text-slate-600">
                Use the interactive concentration worksheet, understand the
                three tax and reporting moments, compare four diversification
                routes and download the printable decision checklist.
              </p>
            </div>
            <Link
              href="/wealth-planning-for-it-professionals/rsu-guide"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#0B1F3A] px-5 font-body text-sm font-bold text-white transition hover:bg-[#163A5D]"
            >
              Open the RSU guide
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <TechWealthCheckup />

      <section
        id="compensation-stack"
        className="scroll-mt-24 bg-white py-20 lg:py-28"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#B18C2D]">
              One compensation stack
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl lg:text-5xl">
              Give each source of tech income a job.
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-slate-600 md:text-lg">
              Salary, bonuses and equity awards behave differently. Planning
              them together creates a repeatable allocation system while
              preserving the right specialist roles.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {compensationLayers.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_10px_35px_-28px_rgba(11,31,58,.55)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FDF7E8] text-[#9C771E] transition group-hover:bg-[#0B1F3A] group-hover:text-[#C9A84C]">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-[#0B1F3A]">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FDF9EF] py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#8B6815]">
                Concentration is bigger than a stock
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">
                Do not measure employer shares in isolation.
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-slate-600">
                The relevant question is not only how much company stock you
                own. It is how much of your household&apos;s current income,
                future compensation and career capital depends on the same
                business or sector.
              </p>
              <Link
                href="/wealth-planning-for-it-professionals/rsu-guide"
                className="mt-7 inline-flex items-center font-body text-sm font-bold text-[#8B6815] transition hover:text-[#0B1F3A]"
              >
                Explore the RSU &amp; ESOP guide
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: BriefcaseBusiness,
                  title: "Income exposure",
                  copy: "Salary, bonus and benefits can change together when the employer or sector slows.",
                },
                {
                  icon: BarChart3,
                  title: "Portfolio exposure",
                  copy: "Vested shares, future grants and sector-heavy funds may overlap more than they appear to.",
                },
                {
                  icon: Gauge,
                  title: "Goal exposure",
                  copy: "A near-term home or education goal becomes fragile if it relies on one volatile asset.",
                },
                {
                  icon: Laptop2,
                  title: "Career exposure",
                  copy: "Skills and future earnings can also be linked to the same industry cycle.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#C9A84C]/25 bg-white p-6"
                >
                  <item.icon
                    className="h-6 w-6 text-[#B18C2D]"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-display text-xl font-semibold text-[#0B1F3A]">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="career-events"
        className="scroll-mt-24 bg-[#F7F8FA] py-20 lg:py-28"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#B18C2D]">
              Event-driven planning
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl lg:text-5xl">
              Four career moments that deserve a portfolio review.
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-slate-600">
              Career events can change liquidity, concentration, reporting and
              family risk at once. Review the whole system before acting.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2">
            {careerEvents.map((event) => (
              <article
                key={event.stage}
                className="rounded-2xl border border-slate-200 bg-white p-7 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#C9A84C]">
                    <event.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-body text-xs font-bold tracking-[0.14em] text-[#B18C2D]">
                    {event.stage}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-[#0B1F3A]">
                  {event.title}
                </h3>
                <p className="mt-3 font-body text-sm font-semibold text-slate-700">
                  {event.trigger}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">
                  {event.decisions}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="it-wealth-checklist"
        className="scroll-mt-24 bg-white py-20 lg:py-28"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#B18C2D]">
                Practical 2026 guide
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">
                An eight-step wealth system for IT professionals.
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-slate-600">
                Use this order to connect compensation and investments before
                comparing products. The implementation will still depend on
                your goals, risk, residency and specialist advice.
              </p>
              <a
                href="#it-professional-consultation"
                className="mt-7 inline-flex items-center font-body text-sm font-bold text-[#8B6815] transition hover:text-[#0B1F3A]"
              >
                Review my current system
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <ol className="grid gap-4 md:grid-cols-2">
              {systemChecklist.map((item) => (
                <li
                  key={item.number}
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6"
                >
                  <span className="font-body text-xs font-bold tracking-[0.14em] text-[#B18C2D]">
                    {item.number}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-[#0B1F3A]">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">
                    {item.copy}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        id="illustrative-tech-case"
        className="scroll-mt-24 bg-[#FDF9EF] py-20 lg:py-28"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.68fr_1.32fr] lg:gap-20">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#8B6815]">
                Illustrative roadmap
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">
                From four compensation sources to one family plan.
              </h2>
              <p className="mt-5 font-body text-sm leading-relaxed text-slate-600">
                This fictional case explains the planning sequence. It is not a
                return projection, tax opinion, stock recommendation or
                personal advice.
              </p>
            </div>

            <div className="rounded-3xl border border-[#C9A84C]/30 bg-white p-7 md:p-9">
              <p className="font-body text-base leading-relaxed text-slate-700">
                A 38-year-old engineering leader in Hyderabad receives salary,
                an annual bonus and US-listed employer RSUs, while retaining
                ESOPs from a former startup. The family wants a home upgrade in
                four years and the option to take a career break by 45. Current
                investments include equity funds, deposits and employer shares.
              </p>
              <ol className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Map compensation and terms",
                    copy: "Create one vesting and exercise calendar, and send complete foreign-asset records to a qualified CA.",
                  },
                  {
                    title: "Ring-fence optionality",
                    copy: "Separate the home goal and career-runway reserve from volatile long-term assets.",
                  },
                  {
                    title: "Measure combined exposure",
                    copy: "View vested employer shares, future grants, sector funds and career dependence together.",
                  },
                  {
                    title: "Create allocation rules",
                    copy: "Set a repeatable destination for bonuses and investable vest proceeds, then review after each career event.",
                  },
                ].map((step, index) => (
                  <li
                    key={step.title}
                    className="rounded-2xl bg-[#F7F8FA] p-5"
                  >
                    <span className="font-body text-xs font-bold text-[#B18C2D]">
                      0{index + 1}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-[#0B1F3A]">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
                      {step.copy}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-7 rounded-3xl border border-[#C9A84C]/30 bg-[#FDF9EF] p-7 md:grid-cols-[auto_1fr] md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#C9A84C]">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-[#0B1F3A]">
                Clear scope. Coordinated decisions.
              </h2>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate-700 md:text-base">
                SoHo Wealth provides investment distribution, portfolio review
                and wealth coordination. We do not replace your chartered
                accountant, lawyer, stock-option-plan administrator or other
                licensed specialist. We do not provide personalised
                security-level or fee-based investment advice. Where a decision
                falls outside our scope, we help identify the question and
                coordinate the relevant conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F3A] py-20 lg:py-24" aria-labelledby="it-guides-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">
              Tech wealth library
            </p>
            <h2 id="it-guides-heading" className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
              RSU, ESOP and Financial-Independence Guides
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-white/65">
              Use these original decision frameworks before a vest, exercise, sale, career move or FIRE milestone.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/insights/rsu-tax-india-vesting-sale-schedule-fa",
                title: "RSU Tax & Schedule FA",
                copy: "Build the vest, sale, foreign-asset and specialist hand-off workflow.",
              },
              {
                href: "/insights/sell-rsus-at-vest-indian-it-professionals",
                title: "Sell RSUs at Vest?",
                copy: "Separate concentration and goals from tax and execution constraints.",
              },
              {
                href: "/insights/esop-rsu-espp-differences-india",
                title: "ESOP vs RSU vs ESPP",
                copy: "Understand cash needs, records, liquidity and goal-planning differences.",
              },
              {
                href: "/insights/fire-planning-it-professionals-hyderabad",
                title: "FIRE Planning in Hyderabad",
                copy: "Model spending, variable compensation and a work-optional transition.",
              },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-[#C9A84C]/60 hover:bg-white/10">
                <h3 className="font-display text-lg font-semibold text-white">{guide.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-white/60">{guide.copy}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold text-[#C9A84C]">
                  Read guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#F7F8FA] py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_.95fr]">
            <div className="rounded-3xl bg-white p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#C9A84C]">
                  <Goal className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body text-xs font-bold uppercase tracking-[0.14em] text-[#B18C2D]">
                    About this guide
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-[#0B1F3A]">
                    Prepared by SoHo Wealth
                  </h2>
                </div>
              </div>
              <p className="mt-5 font-body text-sm leading-relaxed text-slate-600">
                Editorial responsibility sits with{" "}
                <Link
                  href="/team"
                  className="font-semibold text-[#0B1F3A] underline decoration-[#C9A84C] underline-offset-4"
                >
                  Kiran Dutta
                </Link>
                , founder of SoHo Wealth and SIFPrime, Columbia University
                alumnus, AMFI Registered Mutual Fund and SIF Distributor, and
                APMI Registered PMS Distributor.
              </p>
              <p className="mt-4 font-body text-xs font-semibold text-slate-400">
                Published July 27, 2026 · Last substantially updated July 28, 2026
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 md:p-9">
              <div className="flex items-center gap-3">
                <FileSpreadsheet
                  className="h-5 w-5 text-[#B18C2D]"
                  aria-hidden="true"
                />
                <p className="font-body text-xs font-bold uppercase tracking-[0.14em] text-[#B18C2D]">
                  Primary references
                </p>
              </div>
              <ul className="mt-5 space-y-3">
                {[
                  {
                    label:
                      "Income Tax Department: Schedule FA foreign-asset guidance",
                    href: "https://www.incometax.gov.in/iec/foportal/nudge/nudge-schedule-fa",
                  },
                  {
                    label:
                      "Income Tax Department: ITR-2 user manual and schedules",
                    href: "https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/itr-2/itr-2-UM",
                  },
                  {
                    label:
                      "SEBI Investor: factors to consider before investing",
                    href: "https://investor.sebi.gov.in/investment-thingsbeforeinv.html",
                  },
                ].map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm font-semibold leading-relaxed text-[#0B1F3A] underline decoration-slate-300 underline-offset-4 transition hover:decoration-[#C9A84C]"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-body text-xs leading-relaxed text-slate-500">
                Tax, legal and plan treatment can change and depends on your
                facts. Confirm decisions with the appropriate qualified
                specialist and review SoHo Wealth&apos;s{" "}
                <Link
                  href="/disclosures"
                  className="font-semibold text-[#0B1F3A] underline underline-offset-4"
                >
                  regulatory disclosures
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <LeadCaptureForm
        source="wealth-planning-for-it-professionals page"
        service="Wealth Planning for IT Professionals"
        heading="Book Your Tech Wealth Review"
        sectionId="it-professional-consultation"
        leftContent={
          <>
            <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">
              Private consultation
            </p>
            <h2 className="mb-5 font-display text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-[2.75rem]">
              Connect your compensation plan to your life plan.
            </h2>
            <p className="mb-9 font-body text-base leading-relaxed text-white/70 lg:text-lg">
              Bring your investments, goals and a simple summary of salary,
              bonus and equity awards. We will help you see the full picture and
              identify the decisions that matter next.
            </p>
            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-widest text-[#C9A84C]">
              What you will get
            </p>
            <ul className="mb-9 space-y-4">
              {[
                "Compensation and portfolio map",
                "Employer-stock concentration view",
                "Career-runway and liquidity check",
                "Goal and financial-independence alignment",
                "Prioritised specialist and portfolio questions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]"
                    aria-hidden="true"
                  />
                  <span className="font-body text-base text-white/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/919032999466?text=Hi%20Kiran%2C%20I%20would%20like%20an%20IT%20professional%20wealth%20review."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-body text-sm font-semibold text-[#C9A84C] hover:text-white"
            >
              <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
              Prefer WhatsApp? Message Kiran
            </a>
          </>
        }
      />

      <div id="it-professional-faqs" className="scroll-mt-24">
        <FAQSection
          faqs={faqs}
          heading="Wealth Planning for IT Professionals: FAQs"
          background="#FFFFFF"
        />
      </div>

      <RelatedServices
        heading="Explore the Right Next Route"
        items={[
          {
            title: "RSU Tax & Diversification Guide",
            href: "/wealth-planning-for-it-professionals/rsu-guide",
            description:
              "Use the concentration worksheet, tax-moment map, route comparison and downloadable decision checklist.",
          },
          {
            title: "Investment Products",
            href: "/investment-products",
            description:
              "Compare mutual funds, PMS, SIF, AIF, pre-IPO and global-investing routes by role and risk.",
          },
          {
            title: "Free Portfolio Review",
            href: "/portfolio-review",
            description:
              "Bring existing holdings into one allocation, concentration and goal-alignment review.",
          },
        ]}
      />
    </main>
  );
}
