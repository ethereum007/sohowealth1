import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Download,
  ExternalLink,
  FileCheck2,
  FileText,
  Globe2,
  Landmark,
  MessageCircle,
  MoveRight,
  Network,
  Scale,
  ShieldCheck,
  Waypoints,
} from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQSection, type FAQ } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedServices } from "@/components/seo/RelatedServices";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { RSUConcentrationWorksheet } from "./RSUConcentrationWorksheet";

const canonicalUrl =
  "https://www.sohowealth.in/wealth-planning-for-it-professionals/rsu-guide";
const pdfUrl =
  "/guides/soho-wealth-rsu-tax-diversification-guide.pdf";

export const metadata: Metadata = {
  title: "RSU Tax & Diversification Guide for IT Professionals | SoHo",
  description:
    "RSU guide for Indian IT professionals: vesting, employer-stock concentration, Schedule FA, diversification routes and a practical decision checklist.",
  keywords: [
    "RSU tax India",
    "RSU tax for Indian employees",
    "RSU diversification India",
    "Schedule FA RSU",
    "foreign RSU tax India",
    "employer stock concentration India",
    "RSU financial planning Hyderabad",
    "US shares estate tax Indian resident",
    "RSU vesting tax India",
    "RSU wealth planning for IT professionals",
  ],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "RSU Tax & Diversification Guide for IT Professionals",
    description:
      "A practical, specialist-ready guide to RSU records, concentration, reporting questions and diversification routes.",
    url: canonicalUrl,
    siteName: "SoHo Wealth",
    locale: "en_IN",
    type: "article",
    publishedTime: "2026-07-28T00:00:00+05:30",
    modifiedTime: "2026-07-28T00:00:00+05:30",
  },
  twitter: {
    card: "summary_large_image",
    title: "RSU Tax & Diversification Guide for IT Professionals",
    description:
      "Turn RSU statements into a clearer tax, reporting and portfolio decision process.",
  },
};

const decisions = [
  {
    number: "01",
    title: "What do I own today?",
    copy: "Separate vested shares, unvested awards, cash at the broker and any sale proceeds. Do not count every grant headline as liquid wealth.",
  },
  {
    number: "02",
    title: "What has already been taxed?",
    copy: "Reconcile the vest or allotment statement, payslip, employer tax records and broker statement before estimating a later sale gain.",
  },
  {
    number: "03",
    title: "What must be reported?",
    copy: "Ask a CA who understands foreign assets which return and schedules apply to your residential status, holdings, income and transactions.",
  },
  {
    number: "04",
    title: "How concentrated am I?",
    copy: "Measure vested employer shares against your liquid portfolio, then consider salary, career capital and future grants as connected exposures.",
  },
  {
    number: "05",
    title: "What route fits the goal?",
    copy: "Compare holding, transferring, selling and reinvesting only after liquidity, tax, FEMA, costs, access and product risks are clear.",
  },
];

const taxMoments = [
  {
    icon: BriefcaseBusiness,
    label: "Moment 1",
    title: "Vesting or allotment",
    copy: "Employer equity can create salary or perquisite taxation under Indian rules. The exact event, value and withholding depend on the award and plan records.",
    records:
      "Keep the grant notice, vest confirmation, payslip, Form 16 or employer tax statement, share count, fair-market-value record and FX conversion evidence.",
  },
  {
    icon: CircleDollarSign,
    label: "Moment 2",
    title: "Sale or transfer",
    copy: "A later sale can be a separate capital-gains event. A transfer between brokers may not itself be a sale, but availability and treatment depend on the brokers, plan and facts.",
    records:
      "Keep trade confirmations, fees, acquisition value used, dates, broker ledger, bank credits and transfer confirmations. Ask your CA before relying on a loss set-off.",
  },
  {
    icon: FileCheck2,
    label: "Moment 3",
    title: "Annual return and disclosures",
    copy: "Foreign shares, accounts and income can create Indian return-disclosure questions. The Income Tax Department says ITR-1 and ITR-4 should not be used where Schedule FA applies.",
    records:
      "Preserve year-end and calendar-year statements, peak and closing values where relevant, dividend records, foreign tax documents and remittance history.",
  },
];

const routes = [
  {
    icon: Building2,
    title: "Keep shares at the plan broker",
    bestFor:
      "A deliberate holding decision after concentration, liquidity, reporting and estate-planning questions are understood.",
    verify:
      "Broker access, fees, residency restrictions, nominations or succession process, reporting data and the role of the stock in family goals.",
  },
  {
    icon: Waypoints,
    title: "Transfer shares to another broker",
    bestFor:
      "Consolidating eligible positions without first selling, where both the plan administrator and destination broker support the transfer.",
    verify:
      "Supported transfer method, eligible securities, cost-basis records, transfer fees, fractional shares, blackout rules and account-opening requirements.",
  },
  {
    icon: Globe2,
    title: "Sell and reinvest globally",
    bestFor:
      "Moving from one-company exposure toward a diversified allocation after sale, tax, cash-use and regulatory questions are resolved.",
    verify:
      "Capital-gains calculation, currency conversion, cash location, reinvestment or repatriation rules, brokerage costs and the risks of the chosen investments.",
  },
  {
    icon: Landmark,
    title: "Evaluate an India or IFSC route",
    bestFor:
      "Investors comparing locally accessible global strategies, including appropriately authorised offerings in GIFT-IFSC.",
    verify:
      "Entity authorisation, product documents, domicile, liquidity, minimums, total costs, taxation, reporting and whether the route actually matches the goal.",
  },
];

const checklist = [
  "Latest grant and vesting statements",
  "Payslips and employer tax records for vest months",
  "Broker transaction history and year-end statements",
  "Share counts, vest dates, sale dates and reported values",
  "Dividend and foreign-tax documents",
  "Bank, remittance and currency-conversion records",
  "Current value of all vested employer shares",
  "Approximate value and schedule of unvested awards",
  "Family goals that currently depend on employer stock",
  "Written questions for your CA, broker and wealth professional",
];

const officialSources = [
  {
    label: "Income Tax Department: taxation of ESOPs",
    href: "https://wmstatic-prd.incometaxindia.gov.in/web/guest/w/salary",
    note: "Official overview of perquisite and later capital-gains treatment.",
  },
  {
    label: "Income Tax Department: Schedule FA guidance",
    href: "https://www.incometax.gov.in/iec/foportal/nudge/nudge-schedule-fa",
    note: "Foreign-asset return guidance and filing resources.",
  },
  {
    label: "RBI: Liberalised Remittance Scheme FAQs",
    href: "https://www.rbi.org.in/scripts/FAQDisplay.aspx?Id=115",
    note: "Official LRS limits, retained or reinvested income and repatriation guidance.",
  },
  {
    label: "IRS: estate tax for nonresident noncitizens",
    href: "https://www.irs.gov/individuals/international-taxpayers/some-nonresidents-with-us-assets-must-file-estate-tax-returns",
    note: "Official explanation of U.S.-situated assets and the Form 706-NA filing threshold.",
  },
  {
    label: "IFSCA: fund management and regulated entities",
    href: "https://www.ifsca.gov.in/Pages/Contents/Fund_Management",
    note: "Current regulations, circulars and directory links for IFSC fund offerings.",
  },
];

const faqs: FAQ[] = [
  {
    q: "How are RSUs taxed in India?",
    a: "RSUs or similar employer shares can involve salary or perquisite taxation when shares vest or are allotted, followed by a separate capital-gains calculation when shares are sold. The exact event, valuation, foreign-tax credit and rate depend on the plan, employer reporting, residential status, holding period and current law. Reconcile the vest statement and payslip with a CA before filing or selling.",
  },
  {
    q: "Should I sell my RSUs immediately when they vest?",
    a: "There is no universal answer. Ask whether you would buy the same value of this stock today with cash, how much of your salary and future awards already depend on the company, and which goals rely on the holding. Then confirm tax, trading-window and plan constraints before executing. SoHo Wealth does not provide a single-stock sell recommendation.",
  },
  {
    q: "Do foreign RSUs need to be disclosed in Schedule FA?",
    a: "They may create foreign-asset and income disclosure requirements depending on your residential status, account structure and facts. The Income Tax Department provides Schedule FA guidance and says ITR-1 and ITR-4 should not be used where Schedule FA applies. A CA familiar with foreign equity compensation should determine the correct schedules and values for your return.",
  },
  {
    q: "Can I transfer vested shares without selling them?",
    a: "Sometimes. A direct stock transfer may be available if the source plan administrator, destination broker, account ownership and security are eligible. Confirm the supported method, fees, fractional-share handling, cost-basis records and any employer restrictions. A transfer is operationally different from a sale, but obtain tax advice for your facts.",
  },
  {
    q: "Can RSU sale proceeds remain outside India?",
    a: "Do not assume that every cash balance can remain abroad indefinitely. RBI rules distinguish retained or reinvested income, realised or unused foreign exchange and the underlying investment route. The current LRS FAQ includes a 180-day rule in specified circumstances and notes that additional overseas-investment requirements may apply. Confirm your specific proceeds with an authorised dealer bank and a FEMA-aware tax professional.",
  },
  {
    q: "Do U.S. shares create an estate-tax issue for an Indian resident?",
    a: "Potentially. The IRS says stock of corporations organised under U.S. law can be U.S.-situated property and that Form 706-NA may be required when a nonresident noncitizen's U.S.-situated assets exceed $60,000 at death. Domicile, citizenship, asset type, ownership and treaty facts matter, so use a cross-border estate professional rather than treating the threshold as a tax bill or planning rule.",
  },
  {
    q: "Does investing through GIFT City remove all tax and reporting?",
    a: "No blanket conclusion is safe. IFSC offerings differ by legal structure, domicile, investor eligibility, underlying assets and current tax treatment. Verify that the entity and scheme are authorised, read the offer documents and obtain advice on the reporting and tax treatment that applies to you.",
  },
  {
    q: "Can SoHo Wealth prepare my tax return or recommend one stock?",
    a: "No. SoHo Wealth provides investment distribution, portfolio review and wealth coordination within its disclosed scope. We can organise the portfolio view and help frame specialist questions, but tax returns, legal opinions, FEMA advice, plan administration and security-level recommendations belong with appropriately qualified professionals.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": ["Article", "LearningResource"],
    "@id": `${canonicalUrl}#article`,
    url: canonicalUrl,
    headline: "RSU Tax and Diversification Guide for IT Professionals",
    description:
      "A practical guide to RSU records, Indian tax touchpoints, Schedule FA questions, employer-stock concentration and diversification routes.",
    inLanguage: "en-IN",
    datePublished: "2026-07-28",
    dateModified: "2026-07-28",
    author: {
      "@type": "Person",
      name: "Kiran Dutta",
      url: "https://www.sohowealth.in/team",
    },
    publisher: { "@id": "https://www.sohowealth.in/#organization" },
    isPartOf: {
      "@id":
        "https://www.sohowealth.in/wealth-planning-for-it-professionals#webpage",
    },
    about: [
      "Restricted stock units",
      "RSU taxation in India",
      "Schedule FA",
      "Employer-stock concentration",
      "Global diversification",
    ],
    audience: {
      "@type": "Audience",
      audienceType:
        "Indian software engineers, technology leaders and IT professionals receiving foreign employer equity",
    },
    educationalLevel: "General investor education",
    learningResourceType: ["Guide", "Checklist", "Interactive worksheet"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "RSU Tax and Diversification Guide for IT Professionals",
    description:
      "An educational RSU decision framework for Indian technology professionals.",
    inLanguage: "en-IN",
    isPartOf: { "@id": "https://www.sohowealth.in/#website" },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${canonicalUrl}/opengraph-image`,
    },
  },
];

export default function RSUGuidePage() {
  return (
    <main className="bg-white">
      <JsonLd data={structuredData} id="rsu-guide-schema" />

      <Breadcrumbs
        items={[
          { name: "Who We Serve", href: "/who-we-serve" },
          {
            name: "IT Professionals",
            href: "/wealth-planning-for-it-professionals",
          },
          {
            name: "RSU Guide",
            href: "/wealth-planning-for-it-professionals/rsu-guide",
          },
        ]}
      />

      <section className="relative overflow-hidden bg-[#07192F] py-16 text-white lg:py-24">
        <div
          className="absolute inset-0 opacity-30"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 82% 18%, rgba(201,168,76,.28), transparent 25%), radial-gradient(circle at 12% 80%, rgba(45,103,151,.35), transparent 28%)",
          }}
        />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-5xl">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-[#C9A84C]/50 bg-[#C9A84C]/10 px-3 py-1 font-body text-xs font-bold uppercase tracking-[0.12em] text-[#E5CB83]">
                  IT professionals
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-body text-xs font-semibold text-white/70">
                  Updated 28 July 2026
                </span>
              </div>
              <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.08] md:text-5xl lg:text-6xl">
                RSU tax and diversification guide for IT professionals.
              </h1>
              <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-white/72 md:text-xl">
                Turn vesting statements, foreign shares and employer-stock
                exposure into one clear decision process—before tax deadlines
                or market moves force the conversation.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={pdfUrl}
                  download
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#C9A84C] px-6 font-body text-sm font-bold text-[#07192F] transition hover:bg-[#D7BB70]"
                >
                  <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                  Download the PDF guide
                </a>
                <a
                  href="#rsu-concentration-worksheet"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/25 px-6 font-body text-sm font-bold text-white transition hover:border-[#C9A84C] hover:text-[#E5CB83]"
                >
                  Use the concentration worksheet
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-5 font-body text-xs leading-relaxed text-white/50">
                Educational material only. Not tax, legal, FEMA or
                security-specific advice.
              </p>
            </div>

          </div>
        </div>
      </section>

      <nav
        aria-label="On this page"
        className="border-b border-slate-200 bg-white"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto py-4 font-body text-sm font-semibold text-slate-600">
            {[
              ["Five decisions", "#five-rsu-decisions"],
              ["Tax moments", "#rsu-tax-moments"],
              ["Routes", "#rsu-diversification-routes"],
              ["Worksheet", "#rsu-concentration-worksheet"],
              ["Checklist", "#rsu-records-checklist"],
              ["Sources", "#rsu-official-sources"],
              ["FAQs", "#rsu-guide-faqs"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="whitespace-nowrap transition hover:text-[#8B6815]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="five-rsu-decisions"
        className="scroll-mt-24 bg-white py-20 lg:py-28"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#8B6815]">
              Start here
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">
              Five decisions—taken in the right order.
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-slate-600">
              A product comparison is rarely the first step. Build a reliable
              record, resolve reporting questions and understand the household
              risk before choosing where the shares or proceeds should go.
            </p>
          </div>
          <ol className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-5">
            {decisions.map((decision) => (
              <li
                key={decision.number}
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6"
              >
                <span className="font-body text-xs font-bold tracking-[0.14em] text-[#B18C2D]">
                  {decision.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-[#0B1F3A]">
                  {decision.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">
                  {decision.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#FDF9EF] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#8B6815]">
                The real concentration
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">
                One company may fund your present, future and portfolio.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: BriefcaseBusiness,
                  title: "Income",
                  copy: "Salary, bonus and benefits",
                },
                {
                  icon: CalendarDays,
                  title: "Future pay",
                  copy: "Unvested RSUs and refresh grants",
                },
                {
                  icon: Network,
                  title: "Investments",
                  copy: "Vested shares and sector exposure",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#C9A84C]/25 bg-white p-5"
                >
                  <item.icon
                    className="h-5 w-5 text-[#8B6815]"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-display text-xl font-semibold text-[#0B1F3A]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-slate-600">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="rsu-tax-moments"
        className="scroll-mt-24 bg-white py-20 lg:py-28"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#8B6815]">
              RSU tax in India
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">
              Do not collapse three different moments into one number.
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-slate-600">
              The useful question is not simply “what is the RSU tax rate?”
              It is which event occurred, what value and exchange rate were
              recorded, what the employer withheld, what happened later and
              which disclosures apply to you.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-3">
            {taxMoments.map((moment) => (
              <article
                key={moment.title}
                className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#C9A84C]">
                    <moment.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#B18C2D]">
                    {moment.label}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-[#0B1F3A]">
                  {moment.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">
                  {moment.copy}
                </p>
                <div className="mt-5 border-t border-slate-200 pt-5">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#8B6815]">
                    Records to keep
                  </p>
                  <p className="mt-2 font-body text-xs leading-relaxed text-slate-500">
                    {moment.records}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-8 flex max-w-6xl items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <Scale
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
              aria-hidden="true"
            />
            <p className="font-body text-sm leading-relaxed text-amber-950">
              <strong>Why this page does not publish one tax rate:</strong>{" "}
              rates and holding-period treatment can change, while the correct
              answer also depends on award terms, residential status, foreign
              tax, dates and current law. Use the framework to prepare the
              facts; use a qualified CA to determine the return.
            </p>
          </div>
        </div>
      </section>

      <section
        id="rsu-diversification-routes"
        className="scroll-mt-24 bg-[#07192F] py-20 text-white lg:py-28"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">
              Four routes to evaluate
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
              Diversification is a decision sequence, not a product name.
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-white/65">
              Each route solves a different operational problem. Compare the
              legal account, asset domicile, liquidity, cost, reporting and
              household purpose—not just the marketing label.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
            {routes.map((route) => (
              <article
                key={route.title}
                className="rounded-3xl border border-white/12 bg-white/[.06] p-7"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C] text-[#07192F]">
                    <route.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold">
                    {route.title}
                  </h3>
                </div>
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#C9A84C]">
                      When it may enter the comparison
                    </dt>
                    <dd className="mt-2 font-body text-sm leading-relaxed text-white/68">
                      {route.bestFor}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#C9A84C]">
                      Verify before acting
                    </dt>
                    <dd className="mt-2 font-body text-sm leading-relaxed text-white/68">
                      {route.verify}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RSUConcentrationWorksheet />

      <section
        id="rsu-records-checklist"
        className="scroll-mt-24 bg-[#FDF9EF] py-20 lg:py-28"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#8B6815]">
                Before your next vest or sale
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">
                Build one specialist-ready RSU file.
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-slate-600">
                The fastest way to improve an RSU conversation is to replace
                screenshots and memory with a clean record. Give each
                specialist the facts relevant to their role—never passwords.
              </p>
              <a
                href={pdfUrl}
                download
                className="mt-7 inline-flex min-h-12 items-center rounded-xl bg-[#0B1F3A] px-5 font-body text-sm font-bold text-white transition hover:bg-[#163A5D]"
              >
                <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                Save the printable checklist
              </a>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2">
              {checklist.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[#C9A84C]/25 bg-white p-5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0B1F3A] font-body text-xs font-bold text-[#C9A84C]">
                    {index + 1}
                  </span>
                  <span className="font-body text-sm leading-relaxed text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        id="rsu-official-sources"
        className="scroll-mt-24 bg-white py-20 lg:py-28"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#C9A84C]">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-6 font-body text-xs font-bold uppercase tracking-[0.16em] text-[#8B6815]">
                  Primary-source check
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">
                  Verify the rule, the entity and your facts.
                </h2>
                <p className="mt-5 font-body text-sm leading-relaxed text-slate-600">
                  This page links to official sources because tax, FEMA, IFSC
                  regulation and U.S. estate guidance can change. Review the
                  current version with the specialist responsible for that
                  decision.
                </p>
              </div>
              <ul className="grid gap-4">
                {officialSources.map((source) => (
                  <li
                    key={source.href}
                    className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5"
                  >
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-4"
                    >
                      <span>
                        <span className="font-body text-sm font-bold text-[#0B1F3A] group-hover:text-[#8B6815]">
                          {source.label}
                        </span>
                        <span className="mt-1 block font-body text-xs leading-relaxed text-slate-500">
                          {source.note}
                        </span>
                      </span>
                      <ExternalLink
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#B18C2D]"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#F7F8FA] py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 md:p-9">
              <div className="flex items-center gap-3">
                <BadgeCheck
                  className="h-5 w-5 text-[#B18C2D]"
                  aria-hidden="true"
                />
                <p className="font-body text-xs font-bold uppercase tracking-[0.14em] text-[#8B6815]">
                  Editorial responsibility
                </p>
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold text-[#0B1F3A]">
                Prepared by SoHo Wealth
              </h2>
              <p className="mt-4 font-body text-sm leading-relaxed text-slate-600">
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
                Published and last substantially updated: 28 July 2026
              </p>
            </div>
            <div className="rounded-3xl bg-[#0B1F3A] p-7 text-white md:p-9">
              <div className="flex items-center gap-3">
                <FileText
                  className="h-5 w-5 text-[#C9A84C]"
                  aria-hidden="true"
                />
                <p className="font-body text-xs font-bold uppercase tracking-[0.14em] text-[#C9A84C]">
                  Scope
                </p>
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold">
                Coordination, with clear boundaries.
              </h2>
              <p className="mt-4 font-body text-sm leading-relaxed text-white/68">
                SoHo Wealth provides investment distribution, portfolio review
                and wealth coordination. We do not replace your CA, lawyer,
                FEMA specialist, broker or plan administrator, and we do not
                provide personalised security-level or fee-based investment
                advice. Read our{" "}
                <Link
                  href="/disclosures"
                  className="font-semibold text-[#E5CB83] underline underline-offset-4"
                >
                  disclosures
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <LeadCaptureForm
        source="rsu-guide-for-it-professionals page"
        service="RSU Portfolio & Diversification Review"
        heading="Book Your RSU Portfolio Review"
        sectionId="rsu-guide-consultation"
        leftContent={
          <>
            <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">
              Private consultation
            </p>
            <h2 className="mb-5 font-display text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-[2.75rem]">
              Bring the statements. Leave with the next questions in order.
            </h2>
            <p className="mb-8 font-body text-base leading-relaxed text-white/70 lg:text-lg">
              We will map vested shares, future awards, portfolio
              concentration and family goals—then identify what belongs with
              SoHo Wealth and what must go to your CA, broker or legal
              specialist.
            </p>
            <ul className="mb-8 space-y-4">
              {[
                "Employer-stock concentration view",
                "RSU and portfolio record checklist",
                "Goal and liquidity alignment",
                "Diversification route comparison",
                "Prioritised specialist questions",
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
              href="https://wa.me/919032999466?text=Hi%20Kiran%2C%20I%20would%20like%20an%20RSU%20portfolio%20review."
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

      <div id="rsu-guide-faqs" className="scroll-mt-24">
        <FAQSection
          faqs={faqs}
          heading="RSU Tax & Diversification: FAQs"
          background="#FFFFFF"
        />
      </div>

      <section className="bg-[#FDF9EF] py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-5 rounded-2xl border border-[#C9A84C]/30 bg-white p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.14em] text-[#8B6815]">
                Continue the IT-professional journey
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-[#0B1F3A]">
                Connect this RSU decision to salary, bonuses, ESOPs and
                financial independence.
              </p>
            </div>
            <Link
              href="/wealth-planning-for-it-professionals"
              className="inline-flex min-h-11 shrink-0 items-center rounded-xl bg-[#0B1F3A] px-5 font-body text-sm font-bold text-white transition hover:bg-[#163A5D]"
            >
              IT professionals hub
              <MoveRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices
        heading="Related Planning Routes"
        items={[
          {
            title: "Wealth Planning for IT Professionals",
            href: "/wealth-planning-for-it-professionals",
            description:
              "Connect salary, bonuses, employer equity, career events and financial-independence goals.",
          },
          {
            title: "Global Investing",
            href: "/global-investing",
            description:
              "Understand the role, access, currency and risk questions around global allocations.",
          },
          {
            title: "Free Portfolio Review",
            href: "/portfolio-review",
            description:
              "Bring all holdings into one allocation, concentration and goal-alignment review.",
          },
        ]}
      />
    </main>
  );
}
