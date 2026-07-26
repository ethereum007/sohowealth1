import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseMedical,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  GraduationCap,
  HeartPulse,
  Landmark,
  MessageCircle,
  RefreshCw,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import { FAQSection, type FAQ } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedServices } from "@/components/seo/RelatedServices";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";

const canonicalUrl = "https://www.sohowealth.in/financial-planning-for-doctors";

export const metadata: Metadata = {
  title: "Financial Planning for Doctors in India | SoHo Wealth",
  description:
    "Doctor-focused financial planning in Hyderabad for consultants, clinic owners and medical families. Align investments, practice capital, protection, tax coordination and retirement.",
  keywords: [
    "financial planning for doctors",
    "financial planning for doctors in India",
    "wealth management for doctors",
    "financial advisor for doctors",
    "investment planning for doctors",
    "doctor wealth management Hyderabad",
    "financial planning for medical professionals",
    "clinic owner financial planning",
  ],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Financial Planning for Doctors in India | SoHo Wealth",
    description:
      "A doctor-focused wealth framework for consultants, clinic owners and medical families in India.",
    url: canonicalUrl,
    siteName: "SoHo Wealth",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Planning for Doctors in India | SoHo Wealth",
    description:
      "Connect personal wealth, practice capital and family goals in one doctor-focused plan.",
  },
};

const careerStages = [
  {
    icon: GraduationCap,
    stage: "01",
    title: "Resident to Consultant",
    copy: "Balance education debt, a late start to investing, your first meaningful surplus and essential protection.",
  },
  {
    icon: Stethoscope,
    stage: "02",
    title: "Established Consultant",
    copy: "Turn income from salaries, consultations and procedures into a disciplined, tax-aware investment system.",
  },
  {
    icon: Building2,
    stage: "03",
    title: "Clinic or Practice Owner",
    copy: "Separate personal wealth from practice cash, equipment decisions, working capital and expansion goals.",
  },
  {
    icon: Users,
    stage: "04",
    title: "Legacy and Retirement",
    copy: "Create optionality around how long you practise, family security, succession, nominations and estate coordination.",
  },
];

const planningPillars = [
  {
    icon: CircleDollarSign,
    title: "Cash-flow architecture",
    copy: "Create a system for variable receipts, predictable commitments, liquidity reserves and automated investing.",
  },
  {
    icon: BarChart3,
    title: "Investment portfolio",
    copy: "Bring mutual funds, direct equity, PMS, SIF, AIF, deposits and property into one allocation view.",
  },
  {
    icon: Building2,
    title: "Practice capital",
    copy: "Plan separately for clinic working capital, equipment replacement, expansion and eventual transition.",
  },
  {
    icon: Landmark,
    title: "Tax coordination",
    copy: "Keep the portfolio organised for your CA and make investment decisions with after-tax outcomes in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Risk and protection",
    copy: "Review liquidity, family protection and professional-risk gaps with the appropriate licensed specialists.",
  },
  {
    icon: CalendarCheck2,
    title: "Retirement and legacy",
    copy: "Build the freedom to practise by choice, while coordinating nominees, succession and family goals.",
  },
];

const portfolioGaps = [
  "Personal and clinic cash are mixed, so neither has a clear liquidity target.",
  "Most long-term wealth sits in property, deposits or bundled insurance products.",
  "Investments were accumulated product by product, without an overall asset allocation.",
  "Practice expansion is funded without testing its effect on personal goals.",
  "Retirement is postponed because medicine has no fixed retirement age.",
  "Tax, investment, insurance and estate decisions happen in separate conversations.",
];

const process = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Financial case history",
    copy: "We map income sources, assets, liabilities, existing products, practice needs and family goals.",
  },
  {
    icon: HeartPulse,
    number: "02",
    title: "Portfolio diagnosis",
    copy: "We identify concentration, liquidity, duplication, fee leakage and gaps between the portfolio and your goals.",
  },
  {
    icon: BriefcaseMedical,
    number: "03",
    title: "Investment plan",
    copy: "We prioritise the next decisions and build a suitable allocation using products only where they fit.",
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Ongoing reviews",
    copy: "We monitor the portfolio and revisit it as your income, practice, family and goals evolve.",
  },
];

const faqs: FAQ[] = [
  {
    q: "Why do doctors need specialised financial planning?",
    a: "Doctors often start earning later, work with multiple or variable income streams, have limited time for portfolio management and may need to fund a clinic or practice. A doctor-focused plan connects these realities with liquidity, investments, protection, retirement and family goals.",
  },
  {
    q: "Does SoHo Wealth work with both salaried doctors and clinic owners?",
    a: "Yes. We work with salaried consultants, doctors with multiple hospital affiliations, independent practitioners, clinic owners and medical families. The priorities differ, so the review begins with your career stage and financial structure.",
  },
  {
    q: "How should personal and practice finances be handled?",
    a: "They should be viewed together but managed through distinct cash-flow and liquidity plans. Personal goals should not depend on money needed for clinic operations, equipment or expansion. Your accountant should advise on the appropriate legal, bookkeeping and tax structure.",
  },
  {
    q: "Does SoHo Wealth provide tax, legal, accounting or insurance advice?",
    a: "No. SoHo Wealth focuses on investment distribution, portfolio review and wealth coordination. We can organise the investment information and work alongside your chosen CA, lawyer and licensed insurance professional, but those specialists remain responsible for their respective advice.",
  },
  {
    q: "What investments can be considered for a doctor's portfolio?",
    a: "Depending on suitability, liquidity needs and risk capacity, the allocation may include mutual funds, deposits, SIF, PMS, AIF, global investments and other regulated opportunities. No product is automatically appropriate because of your profession.",
  },
  {
    q: "What happens in the first doctor portfolio review?",
    a: "We discuss your current assets, liabilities, income pattern, practice plans and family goals. You receive a high-level view of portfolio gaps and the decisions that deserve priority. The first conversation is complimentary and carries no obligation.",
  },
  {
    q: "Can a doctor consult SoHo Wealth online?",
    a: "Yes. SoHo Wealth is based in Hyderabad and works with doctors across India through video consultations, with digital documentation and ongoing remote reviews where available.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Financial Planning for Doctors in India",
  description:
    "Doctor-focused portfolio review and wealth management for consultants, clinic owners and medical families in India.",
  serviceType: "Wealth Management for Doctors",
  url: canonicalUrl,
  provider: { "@id": "https://www.sohowealth.in/#organization" },
  areaServed: [
    { "@type": "City", name: "Hyderabad" },
    { "@type": "AdministrativeArea", name: "Telangana" },
    { "@type": "Country", name: "India" },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Doctors, medical professionals, clinic owners and medical families",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Doctor Wealth Planning",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Doctor Portfolio Review" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Investment Allocation Planning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ongoing Portfolio Monitoring" } },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sohowealth.in/" },
    { "@type": "ListItem", position: 2, name: "Financial Planning for Doctors", item: canonicalUrl },
  ],
};

export default function FinancialPlanningForDoctorsPage() {
  return (
    <main className="pt-20">
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />

      <section className="relative overflow-hidden bg-[#07192f]">
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full bg-[#C9A84C]/10 blur-3xl" />

        <div className="container relative z-10 mx-auto px-6 pb-20 pt-10 lg:px-8 lg:pb-28 lg:pt-14">
          <nav aria-label="Breadcrumb" className="mb-14 text-xs font-medium text-white/50">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span className="mx-2 text-white/25">/</span>
            <span aria-current="page" className="text-white/75">For Doctors</span>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#e2c46f]">
                <Stethoscope className="h-4 w-4" aria-hidden="true" />
                SoHo Wealth for Doctors
              </span>
              <h1 className="mt-7 max-w-4xl font-display text-4xl font-semibold leading-[1.08] text-white md:text-5xl lg:text-6xl">
                Financial planning for doctors in India, built around{" "}
                <span className="text-[#C9A84C]">your real financial life.</span>
              </h1>
              <p className="mt-7 max-w-2xl font-body text-lg leading-relaxed text-white/70 lg:text-xl">
                Your salary, consultations, practice, investments and family goals should not live in separate files.
                We help you see them as one connected wealth system.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#doctor-consultation"
                  className="inline-flex items-center justify-center rounded-lg bg-[#C9A84C] px-7 py-4 font-body text-sm font-bold text-[#0B1F3A] transition hover:bg-[#d8ba62]"
                >
                  Book a Doctor Portfolio Review
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/thedoctorsportfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 font-body text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Follow The Doctors Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-5 font-body text-xs leading-relaxed text-white/45">
                Hyderabad-based. Online consultations available across India. For investable portfolios of ₹25 lakh and above.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/[0.065] p-6 shadow-2xl backdrop-blur md:p-8">
                <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">
                  The connected view
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                  One doctor. Three balance sheets.
                </h2>
                <div className="mt-7 space-y-4">
                  {[
                    { icon: Stethoscope, title: "Your earning life", text: "Salary, consultations and procedures" },
                    { icon: Building2, title: "Your practice", text: "Cash, equipment, debt and growth" },
                    { icon: Users, title: "Your family wealth", text: "Investments, goals and legacy" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#07192f]/55 p-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/15 text-[#C9A84C]">
                        <item.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 font-body text-sm text-white/55">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#C9A84C] px-4 py-3 text-[#0B1F3A]">
                  <HeartPulse className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <p className="font-body text-sm font-bold">One coordinated investment conversation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#B18C2D]">A different career curve</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl lg:text-5xl">
              Your wealth plan should change as your medical career changes.
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-slate-600 md:text-lg">
              Long training, delayed peak earnings, multiple income streams and practice ownership create decisions
              that a standard salaried-professional plan can miss.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {careerStages.map((item) => (
              <article key={item.stage} className="relative rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6">
                <span className="absolute right-5 top-4 font-display text-4xl font-semibold text-[#0B1F3A]/[0.07]">{item.stage}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#C9A84C]">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-[#0B1F3A]">{item.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#B18C2D]">The complete picture</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl lg:text-5xl">
              Six parts of a doctor-focused wealth plan
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-slate-600 md:text-lg">
              The goal is not more products. It is a clearer system for deciding what every rupee needs to do.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {planningPillars.map((item) => (
              <article key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_10px_35px_-28px_rgba(11,31,58,.55)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FDF7E8] text-[#9C771E] transition group-hover:bg-[#0B1F3A] group-hover:text-[#C9A84C]">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-[#0B1F3A]">{item.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#0B1F3A] py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-body text-xs font-bold uppercase tracking-[0.15em] text-[#C9A84C]">
                <HeartPulse className="h-4 w-4" aria-hidden="true" />
                The Doctors Portfolio
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                Financial education made for the way doctors think and work.
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-white/65 md:text-lg">
                Follow our doctor-first education initiative for practical ideas on investing, practice wealth,
                protection, taxes and financial independence—created for Indian medical professionals.
              </p>
              <a
                href="https://www.instagram.com/thedoctorsportfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center font-body text-sm font-bold text-[#C9A84C] transition hover:text-[#ead17f]"
              >
                Visit @thedoctorsportfolio
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 md:p-9">
              <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-white/45">Topics we unpack</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Irregular-income investing",
                  "Clinic versus personal cash",
                  "Portfolio diversification",
                  "Tax-season organisation",
                  "Professional-risk planning",
                  "Retirement by choice",
                ].map((topic) => (
                  <div key={topic} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#07192f]/50 px-4 py-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#C9A84C]" aria-hidden="true" />
                    <span className="font-body text-sm font-medium text-white/80">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#B18C2D]">Common portfolio symptoms</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">
                A high income does not automatically become durable wealth.
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-slate-600">
                These are not failures. They are predictable results of a demanding profession—and they can be
                addressed with a more deliberate system.
              </p>
              <a
                href="#doctor-consultation"
                className="mt-7 inline-flex items-center font-body text-sm font-bold text-[#8B6815] hover:text-[#0B1F3A]"
              >
                Get a portfolio health check
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {portfolioGaps.map((gap) => (
                <li key={gap} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B18C2D]" aria-hidden="true" />
                  <span className="font-body text-sm leading-relaxed text-slate-700">{gap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#B18C2D]">How it works</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl lg:text-5xl">
              Your portfolio review, in four clear steps
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <article key={item.number} className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_-25px_rgba(11,31,58,.6)]">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#C9A84C]">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-body text-xs font-bold tracking-[0.14em] text-[#B18C2D]">{item.number}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-[#0B1F3A]">{item.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">{item.copy}</p>
              </article>
            ))}
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
              <h2 className="font-display text-2xl font-semibold text-[#0B1F3A]">Clear scope. Coordinated decisions.</h2>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate-700 md:text-base">
                SoHo Wealth provides investment distribution, portfolio review and wealth coordination. We do not
                replace your chartered accountant, lawyer or licensed insurance professional. Where a decision falls
                outside our scope, we help you identify the question and coordinate with the appropriate specialist.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LeadCaptureForm
        source="financial-planning-for-doctors page"
        service="Financial Planning for Doctors"
        heading="Book Your Doctor Portfolio Review"
        sectionId="doctor-consultation"
        leftContent={
          <>
            <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">Private consultation</p>
            <h2 className="mb-5 font-display text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-[2.75rem]">
              Give your wealth the same attention you give your practice.
            </h2>
            <p className="mb-9 font-body text-base leading-relaxed text-white/70 lg:text-lg">
              Bring your current investments, goals and questions. We will help you see the full picture and identify
              the decisions that matter next.
            </p>
            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-widest text-[#C9A84C]">What you will get</p>
            <ul className="mb-9 space-y-4">
              {[
                "Personal and practice wealth map",
                "Portfolio allocation and concentration review",
                "Liquidity and goal-funding check",
                "Prioritised next-step roadmap",
                "Direct conversation with Kiran Dutta",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" aria-hidden="true" />
                  <span className="font-body text-base text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/919032999466?text=Hi%20Kiran%2C%20I%20would%20like%20a%20doctor%20portfolio%20review."
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

      <FAQSection faqs={faqs} heading="Financial Planning for Doctors: FAQs" background="#FFFFFF" />

      <RelatedServices
        heading="Explore the Right Investment Route"
        items={[
          {
            title: "Free Portfolio Review",
            href: "/portfolio-review",
            description: "Understand your current allocation, concentration, fees and goal alignment.",
          },
          {
            title: "Mutual Funds",
            href: "/mutual-funds",
            description: "Build a diversified, goal-led core portfolio with systematic investing.",
          },
          {
            title: "PMS Advisory",
            href: "/pms-advisory",
            description: "Evaluate concentrated equity portfolios when the risk and minimum investment fit.",
          },
        ]}
      />
    </main>
  );
}
