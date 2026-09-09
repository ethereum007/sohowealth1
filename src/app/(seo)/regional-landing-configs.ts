import type { LandingPageConfig } from "./LandingPageClient";

const registrationCopy = "SoHo Wealth is an AMFI-registered mutual fund and SIF distributor (ARN 306593) and an APMI-registered PMS distributor (APRN01233). It is not a SEBI Registered Investment Adviser and may receive commissions from product providers.";

const sharedRelated = [
  { title: "Hyderabad Wealth Management", href: "/wealth-management-hyderabad", description: "Meet locally in Khajaguda or work with us by video." },
  { title: "Portfolio Review", href: "/portfolio-review", description: "Organise holdings, goals, liquidity and product questions." },
  { title: "Investment Products", href: "/investment-products", description: "Compare mutual funds, SIF, PMS, AIF and other eligible routes." },
];

export const pmsHyderabad: LandingPageConfig = {
  slug: "portfolio-management-services-hyderabad",
  title: "Portfolio Management Services in Hyderabad",
  eyebrow: "PMS comparison for Hyderabad HNIs",
  h1: "Portfolio Management Services in",
  highlightedH1: "Hyderabad.",
  intro: "Compare PMS strategies, mandates, concentration, fees, drawdowns and portfolio overlap before committing the regulatory minimum of Rs. 50 lakh. SoHo Wealth supports research-led PMS distribution from Hyderabad.",
  primaryCta: "Book a PMS Comparison Call",
  serviceName: "Portfolio Management Services Distribution in Hyderabad",
  serviceDescription: "PMS comparison, documentation and distribution support for eligible investors in Hyderabad.",
  serviceType: "Portfolio Management Services Distribution",
  leadSource: "portfolio-management-services-hyderabad page",
  formHeading: "Discuss PMS in Hyderabad",
  formTitle: "Move Beyond a Performance Leaderboard",
  formCopy: "Bring your current portfolio and PMS shortlist. We will help organise the questions that matter before implementation.",
  formBullets: ["Strategy and manager comparison", "Fee and exit-term review", "Concentration and overlap check", "Published drawdown and performance context", "Distribution-led onboarding where suitable"],
  sections: [
    { eyebrow: "Before investing Rs. 50 lakh", heading: "What Hyderabad Investors Should Compare", copy: "A high recent return does not establish portfolio fit. PMS selection should be evaluated against the investor's total balance sheet and ability to tolerate concentration.", cards: [
      { title: "Mandate", description: "Understand whether the strategy is large-cap, multi-cap, small-cap, thematic, quant or long-short." },
      { title: "Concentration", description: "Review stock, sector and style concentration alongside your existing equity exposure." },
      { title: "Drawdowns", description: "Compare difficult periods, not only trailing returns and recent winners." },
      { title: "Fees", description: "Model fixed or performance fees, hurdle rates, high-water marks and exit loads." },
      { title: "Tax Experience", description: "Manager trades can create investor-level capital gains because securities sit in the investor's account." },
      { title: "Manager Continuity", description: "Examine process, team depth, tenure and changes that may affect repeatability." },
    ]},
    { eyebrow: "Role disclosure", heading: "PMS Distribution, Clearly Described", copy: registrationCopy, bullets: ["PMS securities are managed by the appointed SEBI-registered portfolio manager", "SoHo Wealth does not exercise discretion over the client's PMS account", "Availability depends on provider arrangements and investor eligibility", "Official disclosure documents prevail over website summaries"] },
  ],
  faqs: [
    { q: "What is the minimum investment for PMS in Hyderabad?", a: "The regulatory minimum for a PMS relationship is Rs. 50 lakh per client. Eligibility is only a starting point; liquidity, risk and portfolio concentration still need consideration." },
    { q: "Does SoHo Wealth manage the PMS portfolio?", a: "No. The appointed SEBI-registered portfolio manager manages the account. SoHo Wealth supports comparison, documentation and distribution within its disclosed APMI registration." },
    { q: "Is PMS better than mutual funds or SIF?", a: "Not automatically. PMS provides direct ownership and can be more concentrated. Mutual funds and SIF use pooled structures and have different minimums, tax experiences and risk profiles." },
    { q: "Can I meet SoHo Wealth in Hyderabad?", a: "Yes. Meetings are available by appointment in Khajaguda, with video consultations available across Telangana, Andhra Pradesh and India." },
  ],
  related: [{ title: "Best PMS Research", href: "/best-pms-in-india", description: "Explore published PMS performance as a discovery tool." }, { title: "SIF vs PMS", href: "/sif-vs-pms", description: "Compare structure, minimums and portfolio use." }, sharedRelated[1]],
};

export const mutualFundsHyderabad: LandingPageConfig = {
  slug: "mutual-fund-distributor-hyderabad",
  title: "Mutual Fund Distributor in Hyderabad",
  eyebrow: "Goal-led mutual fund distribution",
  h1: "Mutual Fund Distributor in",
  highlightedH1: "Hyderabad.",
  intro: "Build or reorganise a goal-linked mutual fund portfolio with regular-plan implementation, portfolio servicing and clear commission disclosure from SoHo Wealth in Khajaguda.",
  primaryCta: "Review My Mutual Funds",
  serviceName: "Mutual Fund Distribution in Hyderabad",
  serviceDescription: "Mutual fund portfolio review, regular-plan distribution and ongoing service for investors in Hyderabad.",
  serviceType: "Mutual Fund Distribution",
  leadSource: "mutual-fund-distributor-hyderabad page",
  formHeading: "Request a Mutual Fund Review",
  formTitle: "Give Every Fund a Defined Job",
  formCopy: "We help map existing schemes to goals, identify avoidable overlap and organise a simpler implementation path.",
  formBullets: ["Portfolio inventory and goal map", "Scheme-category and overlap review", "SIP and lump-sum implementation support", "Regular-plan commission disclosure", "Ongoing transaction and service support"],
  sections: [
    { eyebrow: "Portfolio before product", heading: "A More Organised Mutual Fund Process", cards: [
      { title: "Goal Mapping", description: "Connect each allocation to a time horizon, liquidity need and family objective." },
      { title: "Overlap Review", description: "Find duplicate fund styles, concentrated themes and holdings without a clear role." },
      { title: "Asset Allocation", description: "Organise equity, debt, hybrid and cash exposure before comparing individual schemes." },
      { title: "SIP Discipline", description: "Set a realistic contribution and review cadence instead of reacting to short-term rankings." },
      { title: "Consolidated Service", description: "Coordinate transactions, statements, nominations and periodic review through one relationship." },
      { title: "Transparent Role", description: registrationCopy },
    ]},
    { heading: "What to Bring to a Portfolio Review", bullets: ["Consolidated account statement or scheme list", "Monthly SIPs and intended goals", "Expected withdrawals over the next three years", "Other major equity, property or employer-stock exposure", "Questions about costs, tax records and nomination status"] },
  ],
  faqs: [
    { q: "Is SoHo Wealth a mutual fund distributor in Hyderabad?", a: "Yes. SoHo Wealth is an AMFI-registered mutual fund distributor, ARN 306593, based in Khajaguda, Hyderabad." },
    { q: "Does SoHo Wealth distribute direct or regular plans?", a: "SoHo Wealth distributes regular plans and may receive trail commission from asset management companies. It does not offer a separate fee-only investment-advisory service." },
    { q: "Can you review mutual funds bought elsewhere?", a: "Yes. A portfolio review can organise existing holdings, overlap, category exposure, liquidity and questions before any implementation decision." },
    { q: "Do I need Rs. 25 lakh to start a SIP?", a: "No. Mutual funds permit much smaller investments. The Rs. 25 lakh guideline applies to the site's complimentary comprehensive wealth review, not to mutual fund product minimums." },
  ],
  related: [{ title: "Mutual Funds", href: "/mutual-funds", description: "Explore the complete mutual fund service and education page." }, { title: "Goal-Based SIP Planning", href: "/goal-based-sip-planning", description: "Connect monthly investing to a defined goal." }, sharedRelated[1]],
};

export const nriHyderabad: LandingPageConfig = {
  slug: "nri-investment-services-hyderabad",
  title: "NRI Investment Services in Hyderabad",
  eyebrow: "For NRIs with India-linked wealth",
  h1: "NRI Investment Services with a",
  highlightedH1: "Hyderabad Relationship Point.",
  intro: "Coordinate India-linked portfolios, documentation and eligible investment products through a Hyderabad-based relationship for Telugu and global NRI families.",
  primaryCta: "Book an NRI Portfolio Call",
  serviceName: "NRI Investment Distribution Services in Hyderabad",
  serviceDescription: "India-linked portfolio review and investment distribution support for NRIs with a Hyderabad relationship point.",
  serviceType: "NRI Investment Distribution",
  leadSource: "nri-investment-services-hyderabad page",
  formHeading: "Discuss Your India-Linked Portfolio",
  formTitle: "Connect the India and Overseas Pieces",
  formCopy: "Start with account status, existing holdings, family goals and the specialist tax or FEMA questions that need coordination.",
  formBullets: ["India portfolio inventory", "NRE, NRO and documentation checklist", "Mutual fund, SIF and PMS route comparison", "RSU and global-exposure coordination", "Tax and legal specialist question list"],
  sections: [
    { eyebrow: "One coordinated view", heading: "Common NRI Investment Frictions", cards: [
      { title: "Scattered Holdings", description: "Old mutual funds, demat accounts, deposits and property can lack one consolidated purpose." },
      { title: "Account Status", description: "NRE, NRO, KYC and residency records need to match the selected implementation route." },
      { title: "Cross-Border Tax", description: "Indian and overseas reporting requires product-specific advice from qualified tax professionals." },
      { title: "Family Coordination", description: "Parents, nominees, documents and local follow-through often need a trusted Hyderabad point of contact." },
      { title: "Return-to-India Planning", description: "Liquidity, RNOR questions and asset location deserve review before relocation." },
      { title: "Product Eligibility", description: "Provider, country and documentation rules differ across mutual funds, SIF, PMS and AIF." },
    ]},
    { eyebrow: "Scope", heading: "Distribution and Coordination—not Cross-Border Tax Advice", copy: registrationCopy, bullets: ["Country-specific tax conclusions remain with qualified professionals", "FEMA and legal opinions should be confirmed by the appropriate specialist", "Product availability varies by residence and provider", "SoHo Wealth can help organise the questions and distribution paperwork"] },
  ],
  faqs: [
    { q: "Does SoHo Wealth work with Telugu NRIs?", a: "Yes. Conversations are available in Telugu or English for families connected to Telangana and Andhra Pradesh." },
    { q: "Can NRIs invest in Indian mutual funds and PMS?", a: "Many NRIs can, subject to residency, FEMA, KYC, bank-account and provider requirements. Availability should be confirmed for the investor's country and selected product." },
    { q: "Does SoHo Wealth provide US or overseas tax advice?", a: "No. SoHo Wealth coordinates investment-distribution questions; country-specific tax filings and legal opinions remain with appropriately qualified professionals." },
    { q: "Are consultations available outside Indian hours?", a: "Video calls can be scheduled for overseas families, subject to availability. In-person Hyderabad meetings are available by appointment." },
  ],
  related: [{ title: "NRI Wealth Planning", href: "/services/nri", description: "Explore the broader India-linked NRI process." }, { title: "Telugu NRI Wealth", href: "/nri-telugu", description: "Work with SoHo Wealth in Telugu or English." }, { title: "GIFT City Outbound", href: "/gift-city-outbound-investing", description: "Understand selected IFSC access routes." }],
};

function cityConfig(city: "Vijayawada" | "Visakhapatnam"): LandingPageConfig {
  const slug = `wealth-management-${city.toLowerCase()}`;
  return {
    slug,
    title: `Wealth Management in ${city}`,
    eyebrow: `${city} portfolio review and distribution`,
    h1: "Wealth Management Services for",
    highlightedH1: `${city} Investors.`,
    intro: `SoHo Wealth serves HNIs, business owners, doctors, professionals, families and NRIs in ${city} through video-led portfolio reviews and registered investment distribution, backed by its Hyderabad office.`,
    primaryCta: `Book a ${city} Portfolio Call`,
    serviceName: `Wealth Management and Investment Distribution in ${city}`,
    serviceDescription: `Portfolio review and investment distribution for investors in ${city}, Andhra Pradesh.`,
    serviceType: "Investment Distribution and Portfolio Review",
    leadSource: `${slug} page`,
    formHeading: `Book a ${city} Wealth Consultation`,
    formTitle: "Start With the Portfolio You Already Own",
    formCopy: "Bring your holdings, goals and questions to a structured video review. We will help identify fragmentation, concentration, liquidity constraints and routes worth evaluating.",
    formBullets: ["Consolidated portfolio view", "Goal and liquidity map", "Mutual fund, SIF, PMS and AIF comparison", "NRI and family coordination questions", "Ongoing digital service where products are implemented"],
    sections: [
      { eyebrow: "Andhra Pradesh coverage", heading: `A Hyderabad Wealth Relationship for ${city}`, copy: `Investors in ${city} do not need a nearby bank branch to receive a structured portfolio review. Documents, video meetings and ongoing service can be coordinated remotely, while the SoHo Wealth office remains available in Hyderabad by appointment.`, cards: [
        { title: "Business Owners", description: "Separate business concentration, near-term liquidity and family capital before selecting products." },
        { title: "Doctors", description: "Coordinate clinic capital, variable income, protection questions and long-term financial independence." },
        { title: "Senior Professionals", description: "Organise salary, bonuses, retirement assets and existing mutual fund portfolios." },
        { title: "NRIs and Returning NRIs", description: "Create a clearer view of India-linked holdings, documentation and specialist questions." },
        { title: "HNI Families", description: "Compare manager exposure, alternatives, liquidity and family objectives in one framework." },
        { title: "Retirees", description: "Review income needs, inflation, emergency liquidity and the role of market-linked assets." },
      ]},
      { eyebrow: "How it works", heading: "How Remote Portfolio Service Works", copy: "This is the service model available to Andhra Pradesh investors who work with SoHo Wealth by video.", bullets: ["Initial fact-finding and document checklist by video", "Portfolio inventory and high-priority issue map", "Product comparison within SoHo Wealth's disclosed distribution scope", "Digital onboarding subject to provider and investor eligibility", "Periodic service and review coordination where applicable"] },
      { eyebrow: "Registration disclosure", heading: "Know SoHo Wealth's Role", copy: registrationCopy, bullets: ["No separate fee-only investment-advisory service is offered", "Product-provider documents and risk disclosures must be read before investing", "Tax, legal and security-specific advice remains outside SoHo Wealth's scope", "A review does not require a transaction"] },
    ],
    faqs: [
      { q: `Does SoHo Wealth have an office in ${city}?`, a: `SoHo Wealth's office is in Khajaguda, Hyderabad. Investors in ${city} are served through video consultations, digital documentation and remote ongoing service where available.` },
      { q: `Who can use the ${city} portfolio review?`, a: "The comprehensive review is designed primarily for HNIs, business owners, doctors, senior professionals, families and NRIs with approximately Rs. 25 lakh or more in investable assets." },
      { q: "Which investment products are available?", a: "Depending on eligibility and provider availability, SoHo Wealth distributes regular-plan mutual funds, SIF and PMS and supports evaluation and access for selected AIF and other eligible routes." },
      { q: "Is SoHo Wealth a SEBI Registered Investment Adviser?", a: registrationCopy },
    ],
    related: sharedRelated,
    areaServed: [{ type: "City", name: city }, { type: "AdministrativeArea", name: "Andhra Pradesh" }, { type: "Country", name: "India" }],
  };
}

export const wealthVijayawada = cityConfig("Vijayawada");
export const wealthVisakhapatnam = cityConfig("Visakhapatnam");
