import type { Metadata } from "next";

export type RealEstateSource = {
  title: string;
  href: string;
};

export type RealEstateCard = {
  title: string;
  description: string;
};

export type RealEstateSection = {
  eyebrow?: string;
  heading: string;
  copy?: string[];
  cards?: RealEstateCard[];
  bullets?: string[];
};

export type RealEstateTable = {
  heading: string;
  columns: string[];
  rows: string[][];
};

export type RealEstateFaq = {
  q: string;
  a: string;
};

export type RealEstateRelatedLink = {
  title: string;
  href: string;
  description: string;
};

export type RealEstateGuide = {
  slug: string;
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroKicker: string;
  h1: string;
  highlightedH1: string;
  intro: string;
  marketLabel: string;
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
  leadSource: string;
  formHeading: string;
  formTitle: string;
  formCopy: string;
  formBullets: string[];
  highlights: RealEstateCard[];
  sections: RealEstateSection[];
  checklistTitle: string;
  checklistIntro: string;
  checklist: string[];
  table?: RealEstateTable;
  faqs: RealEstateFaq[];
  sources: RealEstateSource[];
  related: RealEstateRelatedLink[];
  updatedAt: string;
  sitemapPriority: number;
};

const baseUrl = "https://www.sohowealth.in";

const coreSources: RealEstateSource[] = [
  { title: "TG-RERA official portal", href: "https://rera.telangana.gov.in/" },
  { title: "TG-RERA project and agent search", href: "https://rerait.telangana.gov.in/SearchList/Search" },
  { title: "HMDA official portal", href: "https://www.hmda.gov.in/" },
  { title: "HMDA Master Plan 2031", href: "https://www.hmda.gov.in/master-planning-2031/" },
  { title: "RBI FAQ on NRI and OCI purchase of immovable property", href: "https://www.rbi.org.in/commonperson/english/scripts/FAQs.aspx?Id=1855" },
  { title: "JLL Hyderabad residential market dynamics Q1 2026", href: "https://www.jll.com/en-in/insights/market-dynamics/hyderabad-residential" },
  { title: "Cushman & Wakefield Hyderabad MarketBeat", href: "https://www.cushmanwakefield.com/en/india/insights/hyderabad-marketbeat" },
];

const usSources: RealEstateSource[] = [
  { title: "FinCEN FBAR foreign account reporting", href: "https://www.fincen.gov/report-foreign-bank-and-financial-accounts" },
  { title: "IRS Form 8938 specified foreign financial assets", href: "https://www.irs.gov/forms-pubs/about-form-8938" },
  { title: "IRS Schedule E rental real estate reporting", href: "https://www.irs.gov/forms-pubs/about-schedule-e-form-1040" },
  { title: "IRS resident alien worldwide income guidance", href: "https://www.irs.gov/individuals/international-taxpayers/alien-taxation-certain-essential-concepts" },
  { title: "IRS foreign tax credit guidance", href: "https://www.irs.gov/individuals/international-taxpayers/foreign-tax-credit" },
];

export const realEstateSeoPages: RealEstateGuide[] = [
  {
    slug: "us-nri-hyderabad-real-estate",
    path: "/us-nri-hyderabad-real-estate",
    title: "US NRI Hyderabad Real Estate",
    metaTitle: "US NRI Hyderabad Real Estate Advisory | Buy Property in Hyderabad from USA | SoHo Wealth",
    metaDescription:
      "US NRI Hyderabad real estate advisory for NRIs and OCIs buying residential or commercial property from the USA. NRE/NRO routing, POA, RERA checks, rental income and repatriation planning.",
    keywords: [
      "buy property in Hyderabad from USA",
      "US NRI Hyderabad real estate",
      "NRI property investment Hyderabad from US",
      "Hyderabad property for US NRIs",
      "NRE NRO property purchase India",
      "OCI buy property Hyderabad",
      "NRI real estate consultant Hyderabad",
    ],
    heroKicker: "For US NRIs and OCIs",
    h1: "Buy Hyderabad property from the US",
    highlightedH1: "with the right NRI structure.",
    intro:
      "SoHo Wealth helps US-based NRIs and OCIs evaluate Hyderabad residential and commercial real estate before money moves: account routing, POA, RERA, title, rental yield, US tax coordination and future repatriation.",
    marketLabel: "US NRI property desk",
    serviceName: "US NRI Hyderabad Real Estate Advisory",
    serviceDescription:
      "Remote-first Hyderabad real estate advisory for US-based NRIs and OCIs evaluating residential, commercial and rental property in Hyderabad.",
    serviceType: "NRI Real Estate Advisory",
    leadSource: "us-nri-hyderabad-real-estate page",
    formHeading: "Book a US NRI Property Call",
    formTitle: "Buying from the US? Start with structure.",
    formCopy:
      "Bring the project name, budget, city in the US, NRI/OCI status and funding account. We will help you frame the right diligence and execution questions before you commit.",
    formBullets: [
      "NRE, NRO and inward remittance route discussion",
      "TG-RERA, HMDA and title checklist",
      "US CPA coordination points for rental income and accounts",
      "Remote POA and registration workflow questions",
      "Portfolio fitment before property concentration increases",
    ],
    highlights: [
      {
        title: "Remote execution without blind trust",
        description:
          "Shortlist, document review, site inspection questions, POA scope and registration sequencing should be mapped before the first token payment.",
      },
      {
        title: "NRE/NRO decisions before payment",
        description:
          "Funding route can affect documentation, repatriation and banking workflow. Decide the account route before the builder payment schedule begins.",
      },
      {
        title: "US tax reminders built in",
        description:
          "US taxpayers should coordinate rental income, foreign account reporting and foreign tax credit questions with a qualified US CPA.",
      },
    ],
    sections: [
      {
        eyebrow: "Before Shortlisting",
        heading: "The six decisions US NRIs should settle first",
        copy: [
          "Most overseas buyers begin with a builder, a floor plan or a family recommendation. A cleaner process begins one step earlier: why this property belongs in the portfolio at all.",
          "For a US-based NRI, Hyderabad real estate is not just a property decision. It touches FEMA, banking, POA, Indian taxation, US reporting, rental operations and eventual exit.",
        ],
        cards: [
          { title: "Purpose", description: "End-use, retirement home, rental income, rupee asset, family legacy or diversification each lead to different property choices." },
          { title: "Ownership", description: "Clarify whether the buyer is NRI, OCI, joint owner with spouse or buying for parents, and match documents accordingly." },
          { title: "Funding Route", description: "Use normal banking channels and choose NRE, NRO, FCNR(B) or inward remittance based on source of funds and future use." },
          { title: "POA Scope", description: "A transaction-specific POA is usually safer than a broad authority that can be misused or questioned later." },
          { title: "Rental Operations", description: "Tenant verification, repairs, rent collection, tax withholding and periodic inspection need an owner before handover." },
          { title: "Exit Plan", description: "Sale TDS, capital gains, Form 15CA/CB, bank paperwork and repatriation limits should be discussed before purchase." },
        ],
      },
      {
        eyebrow: "US Lens",
        heading: "US tax and reporting points to flag with your CPA",
        copy: [
          "SoHo Wealth does not provide US tax advice, but US clients should not treat Indian property as a purely Indian decision. A US citizen or resident alien is generally taxed on worldwide income, and rental real estate income is commonly reported through Schedule E.",
          "Foreign accounts used for NRE, NRO, rent collection or property proceeds may create FBAR or Form 8938 review points depending on balances and thresholds. Directly held real estate is different from a foreign financial account, so the details should be checked with a US CPA.",
        ],
        bullets: [
          "Ask whether Indian rental income must be reported on your US return and how expenses, depreciation and Indian taxes are handled.",
          "Review whether your Indian bank and investment accounts cross FBAR reporting thresholds.",
          "Review whether specified foreign financial assets require Form 8938 based on your filing status and thresholds.",
          "Keep Indian rent statements, TDS certificates, property tax receipts and repair invoices in a CPA-ready folder.",
          "Plan foreign tax credit questions instead of discovering them after the first rental year.",
        ],
      },
      {
        eyebrow: "Execution Flow",
        heading: "A cleaner buying workflow from the USA",
        bullets: [
          "Define budget, purpose and acceptable concentration inside your total India allocation.",
          "Shortlist corridors and property type: residential apartment, villa, plot, pre-leased commercial or office unit.",
          "Verify project and agent status on TG-RERA before paying a token amount.",
          "Check HMDA, GHMC, DTCP or relevant authority approvals through a qualified lawyer and official portals.",
          "Draft a transaction-specific POA and register or attest it correctly for India use.",
          "Route payments through normal banking channels and keep source-of-funds records.",
          "Agree on rental management, insurance, tax withholding, inspection and resale review cadence after handover.",
        ],
      },
      {
        eyebrow: "Where US Clients Ask First",
        heading: "Hyderabad corridors commonly reviewed by US tech professionals",
        cards: [
          { title: "Financial District and Gachibowli", description: "Mature office demand, rental catchment and premium apartments, but entry prices can compress yield." },
          { title: "Kokapet and Neopolis", description: "High-growth premium corridor with large-ticket supply, where delivery timing and future density need careful review." },
          { title: "Narsingi and Nanakramguda", description: "ORR access and proximity to West Hyderabad employment hubs, with project quality varying by developer." },
          { title: "Tellapur and Kollur", description: "Family-led residential and villa demand, with commute, schools, water and social infrastructure as key checks." },
          { title: "Miyapur, Bachupally and Kompally", description: "Value and mid-market options where livability and resale liquidity should be compared closely." },
          { title: "Shamshabad corridor", description: "Airport and logistics adjacency can be interesting, but land-use, title and exit liquidity need specialist diligence." },
        ],
      },
    ],
    table: {
      heading: "NRE vs NRO for US NRI property funding",
      columns: ["Factor", "NRE route", "NRO route"],
      rows: [
        ["Typical source", "Overseas earnings remitted to India", "India-sourced income or legacy resident assets"],
        ["Repatriability", "Generally more flexible for overseas-earned funds, subject to bank documentation", "Subject to tax compliance, paperwork and applicable limits"],
        ["Common use", "Fresh purchase funded from US income", "Rent, Indian income, resident savings or sale proceeds"],
        ["What to verify", "Source records, remittance trail, account rules and bank process", "Tax paid status, Form 15CA/CB needs and bank repatriation process"],
      ],
    },
    checklistTitle: "US NRI property checklist",
    checklistIntro:
      "Use this before a token payment or POA signature. It is not a legal opinion, but it gives your lawyer, CA and CPA a cleaner starting point.",
    checklist: [
      "Passport, OCI, PAN, US address proof and Indian address proof where required",
      "NRE/NRO/FCNR(B) account details and source-of-funds trail",
      "TG-RERA registration certificate, project status and promoter disclosures",
      "Title chain, mother deed, encumbrance certificate and litigation search",
      "Sanctioned plan, occupancy or completion status and payment schedule",
      "Transaction-specific POA with limited authority and clear expiry or scope",
      "Rental plan covering tenant search, verification, repairs, taxes and inspection",
      "US CPA checklist for rental income, Indian accounts, FBAR/Form 8938 review and foreign tax credit questions",
      "Exit plan covering TDS on sale, capital gains, bank documentation and repatriation",
    ],
    faqs: [
      {
        q: "Can a US NRI buy property in Hyderabad?",
        a: "Yes. NRIs and OCIs can generally buy residential and commercial property in India. Agricultural land, plantation property and farmhouses require special care and are generally restricted without specific permission.",
      },
      {
        q: "Can I buy Hyderabad property without visiting India?",
        a: "Remote purchase may be possible with the right POA, bank process, legal review and registration workflow. The risk is not distance itself, but signing broad authority or paying before documents are verified.",
      },
      {
        q: "Should I pay from my US bank account, NRE account or NRO account?",
        a: "The answer depends on source of funds and future repatriation intent. Overseas earnings often fit an NRE or inward remittance route, while India-sourced money commonly sits in NRO. Confirm with your bank and tax advisor before payment.",
      },
      {
        q: "Does Indian rental income need US tax review?",
        a: "US citizens and resident aliens generally report worldwide income. Indian rental income, Indian taxes and foreign account reporting should be reviewed with a US CPA.",
      },
      {
        q: "Does SoHo Wealth provide legal or US tax advice?",
        a: "No. SoHo Wealth provides portfolio fitment, diligence framing and coordination support. Legal title, Indian tax and US tax advice should be confirmed by qualified professionals.",
      },
    ],
    sources: [...coreSources, ...usSources],
    related: [
      { title: "NRI Real Estate in Hyderabad", href: "/nri-real-estate-in-hyderabad", description: "A broader guide for NRIs across the US, UAE, Singapore, UK, Canada and Australia." },
      { title: "NRI Property Checklist", href: "/nri-property-checklist-hyderabad", description: "Use a practical document, banking and diligence checklist before paying a token amount." },
      { title: "Kokapet Real Estate", href: "/hyderabad-real-estate/kokapet", description: "Review Kokapet and Neopolis for premium residential exposure." },
    ],
    updatedAt: "2026-06-14",
    sitemapPriority: 0.9,
  },
  {
    slug: "nri-real-estate-in-hyderabad",
    path: "/nri-real-estate-in-hyderabad",
    title: "NRI Real Estate in Hyderabad",
    metaTitle: "NRI Real Estate in Hyderabad | SoHo Wealth",
    metaDescription:
      "NRI real estate in Hyderabad advisory for NRIs and OCIs buying residential, commercial or rental property. RERA checks, NRE/NRO, POA and repatriation.",
    keywords: [
      "nri real estate in hyderabad",
      "NRI real estate in Hyderabad",
      "NRI real estate Hyderabad",
      "NRI property investment Hyderabad",
      "Hyderabad property for NRIs",
      "NRI commercial property Hyderabad",
      "NRI residential property Hyderabad",
      "NRI property consultant Hyderabad",
      "OCI buy property Hyderabad",
    ],
    heroKicker: "NRI property advisory",
    h1: "NRI real estate in Hyderabad",
    highlightedH1: "planned from overseas with clarity.",
    intro:
      "For NRI real estate in Hyderabad, the real decision is not just location or builder. A Hyderabad property can be a home, rental asset, rupee diversification or family anchor, but overseas buyers need structure, diligence and ongoing ownership planning.",
    marketLabel: "Global NRI desk",
    serviceName: "NRI Real Estate in Hyderabad Advisory",
    serviceDescription:
      "Residential, commercial and rental property advisory for NRIs and OCIs evaluating real estate in Hyderabad.",
    serviceType: "NRI Real Estate Advisory",
    leadSource: "nri-real-estate-in-hyderabad page",
    formHeading: "Book an NRI Property Review",
    formTitle: "Evaluate Hyderabad property before money moves.",
    formCopy:
      "Tell us where you live, how you plan to fund the purchase, and whether the property is for use, income or legacy. We will help organize the decision.",
    formBullets: [
      "NRI eligibility and funding route questions",
      "RERA, HMDA, title and approval checklist",
      "Residential versus commercial fitment",
      "Rental management and repatriation planning",
      "Country-specific tax coordination reminders",
    ],
    highlights: [
      {
        title: "Country-specific coordination",
        description:
          "US, Canada, UAE, Singapore, UK and Australia based clients need different local tax and reporting questions, even when the India property is the same.",
      },
      {
        title: "Portfolio-first property selection",
        description:
          "We evaluate whether the property reduces or increases concentration across Indian equity, debt, PMS, AIFs, gold and existing family real estate.",
      },
      {
        title: "Remote ownership plan",
        description:
          "Tenant handling, repair decisions, tax documents, inspections and exit review should be assigned before the property is handed over.",
      },
    ],
    sections: [
      {
        eyebrow: "NRI Decision Map",
        heading: "What changes when the buyer is overseas",
        copy: [
          "For resident buyers, the friction is usually price, location and loan eligibility. For NRIs, the friction expands to account route, POA, source of funds, repatriation, tax documents and who manages the asset after purchase.",
          "The right real estate process should connect the Indian CA, lawyer, banker, property manager and overseas tax advisor instead of leaving each person to solve only their piece.",
        ],
        cards: [
          { title: "Eligibility", description: "Confirm NRI or OCI status, property type and any restriction before considering land or farmhouse-like products." },
          { title: "Funding", description: "Map NRE, NRO, FCNR(B), inward remittance and home loan options before agreeing to a payment schedule." },
          { title: "Documentation", description: "Keep identity, PAN, OCI, address proof, POA, bank statements and source-of-funds records organized." },
          { title: "Diligence", description: "RERA, title, encumbrance, sanctioned plan, approvals, developer record and site inspection should be documented." },
          { title: "Operations", description: "Rental collection, maintenance, insurance, property tax and tenant verification need a clear owner." },
          { title: "Exit", description: "Capital gains, TDS, Form 15CA/CB and repatriation should be planned before the asset is sold." },
        ],
      },
      {
        eyebrow: "By Country",
        heading: "How the NRI conversation differs by geography",
        cards: [
          { title: "United States and Canada", description: "Worldwide income, foreign account reporting and CPA coordination often matter as much as Indian tax paperwork." },
          { title: "UAE and Middle East", description: "Investors often focus on rupee diversification, retirement homes and rental management while living close enough for periodic visits." },
          { title: "Singapore", description: "High-earning professionals often compare India property with Singapore liquidity, SRS/CPF planning and private market exposure." },
          { title: "United Kingdom", description: "Currency movement, inheritance planning, remittance documentation and rental income reporting should be coordinated early." },
          { title: "Australia", description: "Time-zone friendly execution, POA clarity and family-led management decisions often become the practical bottlenecks." },
          { title: "Returning NRIs", description: "If return to India is likely, end-use livability, schools, commute and liquidity may matter more than headline yield." },
        ],
      },
      {
        eyebrow: "Property Type",
        heading: "Residential, commercial, plots and managed ownership",
        bullets: [
          "Residential apartments are easier to understand and rent, but net yields can look modest after maintenance, vacancy and tax.",
          "Villas and gated communities can fit returning families, but need careful commute, maintenance and resale-depth review.",
          "Pre-leased commercial property can show higher quoted yield, but tenant quality, lock-in, escalation and exit liquidity drive the real outcome.",
          "Plots can work for patient capital, but land-use, title, layout approval, access road and resale depth need specialist diligence.",
          "Managed ownership matters for NRIs: a good asset without a property-management plan can still become operational stress.",
        ],
      },
      {
        eyebrow: "Hyderabad Lens",
        heading: "Micro-markets NRIs commonly compare",
        cards: [
          { title: "Gachibowli and Financial District", description: "Office-led rental demand and premium supply, often suited to income and liquidity-aware buyers." },
          { title: "Kokapet and Neopolis", description: "Premium growth corridor with large-ticket projects, future supply and infrastructure timing to monitor." },
          { title: "Narsingi and Nanakramguda", description: "ORR connectivity and West Hyderabad access, with project selection driving experience." },
          { title: "Tellapur and Kollur", description: "Larger homes and villa communities, useful for end-use or return-to-India families." },
          { title: "Miyapur, Bachupally and Kompally", description: "Value and mid-market options where livability and rental depth vary by project." },
          { title: "Shamshabad", description: "Airport and logistics themes, best approached with title and land-use diligence at the center." },
        ],
      },
    ],
    table: {
      heading: "NRI property route planning",
      columns: ["Question", "Why it matters", "Who should confirm"],
      rows: [
        ["What is the source of funds?", "Determines NRE/NRO/inward remittance route and future paperwork", "Banker and CA"],
        ["Is the project registered and approved?", "Reduces regulatory and completion risk", "TG-RERA, lawyer and technical reviewer"],
        ["Who signs in India?", "Controls POA, registration and payment release risk", "Lawyer and family representative"],
        ["How will rent be managed?", "Prevents income leakage, tax gaps and vacant property drift", "Property manager and CA"],
        ["How will sale proceeds move abroad?", "Affects TDS, capital gains, Form 15CA/CB and repatriation timing", "CA and bank"],
      ],
    },
    checklistTitle: "NRI Hyderabad property checklist",
    checklistIntro:
      "The checklist is designed to help an overseas buyer organize the purchase conversation before signing an agreement or transferring funds.",
    checklist: [
      "NRI or OCI status, passport, PAN, address proof and local nominee details",
      "Funding route with source-of-funds records and bank confirmation",
      "TG-RERA project and agent verification",
      "Title chain, encumbrance certificate, sanctioned plan and approvals",
      "Builder payment schedule, cancellation clauses and possession timeline",
      "Transaction-specific POA with clear authority and boundaries",
      "Rental, maintenance, insurance and tax document ownership",
      "Exit and repatriation plan with TDS and Form 15CA/CB review",
      "Local country tax advisor coordination for income and asset reporting",
    ],
    faqs: [
      {
        q: "Can NRIs and OCIs buy property in Hyderabad?",
        a: "Yes. NRIs and OCIs can generally buy residential and commercial property in India, while agricultural land, plantation property and farmhouses need special care and are generally restricted.",
      },
      {
        q: "Which account should NRIs use for property purchase?",
        a: "It depends on source of funds and future repatriation needs. Overseas earnings often use NRE or inward remittance routes, while India-sourced funds usually sit in NRO. Confirm with your bank and tax advisor.",
      },
      {
        q: "Is commercial property good for NRIs?",
        a: "Commercial property can offer higher quoted yield, but lease quality, tenant risk, vacancy, ticket size and resale liquidity need careful review. It is not automatically better than residential property.",
      },
      {
        q: "How should an NRI verify a Hyderabad project?",
        a: "Start with TG-RERA project search, then verify approvals, title, encumbrance, sanctioned plan, developer history and agreement terms through a qualified lawyer.",
      },
      {
        q: "Can SoHo Wealth manage the full purchase?",
        a: "SoHo Wealth helps with portfolio fitment, diligence framing and coordination. Legal, tax, valuation and transaction facilitation should be handled by qualified and properly registered professionals where required.",
      },
    ],
    sources: coreSources,
    related: [
      { title: "US NRI Hyderabad Real Estate", href: "/us-nri-hyderabad-real-estate", description: "A dedicated guide for US-based NRIs and OCIs buying in Hyderabad." },
      { title: "NRI Property Checklist", href: "/nri-property-checklist-hyderabad", description: "A practical checklist for documents, banking, POA, diligence and repatriation." },
      { title: "Financial District Real Estate", href: "/hyderabad-real-estate/financial-district", description: "Review Hyderabad's office-led premium residential corridor." },
    ],
    updatedAt: "2026-06-16",
    sitemapPriority: 0.92,
  },
  {
    slug: "nri-property-checklist-hyderabad",
    path: "/nri-property-checklist-hyderabad",
    title: "NRI Property Checklist Hyderabad",
    metaTitle: "NRI Property Checklist Hyderabad | Documents, RERA, POA, NRE/NRO | SoHo Wealth",
    metaDescription:
      "NRI property checklist for buying real estate in Hyderabad. Documents, TG-RERA checks, HMDA approvals, POA, NRE/NRO funding, rental management, tax and repatriation review.",
    keywords: [
      "NRI property checklist Hyderabad",
      "NRI property documents India",
      "Hyderabad property due diligence checklist",
      "NRI POA property India",
      "RERA checklist Hyderabad",
      "NRE NRO property purchase checklist",
    ],
    heroKicker: "Practical checklist",
    h1: "NRI property checklist for Hyderabad",
    highlightedH1: "before token, POA or agreement.",
    intro:
      "Use this SoHo Wealth checklist to organize documents, account routing, RERA verification, legal diligence, tax questions and remote ownership before buying property in Hyderabad.",
    marketLabel: "NRI due diligence",
    serviceName: "NRI Hyderabad Property Checklist",
    serviceDescription:
      "Document, banking, POA, diligence and repatriation checklist for NRIs evaluating Hyderabad property.",
    serviceType: "Real Estate Due Diligence Support",
    leadSource: "nri-property-checklist-hyderabad page",
    formHeading: "Review Your Property Checklist",
    formTitle: "Have a project in mind? Check it before you pay.",
    formCopy:
      "Share the project, location, budget and NRI status. We will help you organize the diligence questions to ask your lawyer, banker, CA and property manager.",
    formBullets: [
      "Document checklist review",
      "RERA, approval and title question list",
      "NRE/NRO and remittance planning points",
      "Remote POA and registration workflow review",
      "Rental, tax and repatriation action list",
    ],
    highlights: [
      {
        title: "Before token payment",
        description:
          "Verify registration, title basics, payment terms and cancellation conditions before urgency replaces diligence.",
      },
      {
        title: "Before POA",
        description:
          "Limit authority to the actual transaction, avoid open-ended permissions and keep execution records clean.",
      },
      {
        title: "Before handover",
        description:
          "Assign rental, inspection, maintenance, property tax, insurance and document storage responsibilities.",
      },
    ],
    sections: [
      {
        eyebrow: "Step 1",
        heading: "Identity, eligibility and ownership",
        bullets: [
          "Confirm NRI or OCI status and whether the property type is permitted.",
          "Keep passport, OCI, PAN, overseas address proof and Indian contact details ready.",
          "Decide single, joint or family ownership before the agreement is drafted.",
          "Avoid agricultural land, plantation property or farmhouse-like purchases unless your lawyer confirms permissibility.",
          "Clarify nominee, inheritance and family succession questions separately from the purchase decision.",
        ],
      },
      {
        eyebrow: "Step 2",
        heading: "Banking, funding and source of funds",
        bullets: [
          "Map whether money comes from overseas income, India-sourced income, sale proceeds, inheritance or a home loan.",
          "Use normal banking channels. Avoid cash components and undocumented transfers.",
          "Get bank confirmation on NRE, NRO, FCNR(B), inward remittance or loan disbursement process before the builder timeline starts.",
          "Store remittance advice, bank statements, TDS documents and payment receipts in one folder.",
          "Think about repatriation before purchase, not only when selling.",
        ],
      },
      {
        eyebrow: "Step 3",
        heading: "Project, title and approval checks",
        cards: [
          { title: "RERA", description: "Search TG-RERA for the project, promoter, status, timelines and uploaded disclosures." },
          { title: "Approvals", description: "Check HMDA, GHMC, DTCP or relevant authority approvals through official records and a lawyer." },
          { title: "Title", description: "Review mother deed, title chain, encumbrance certificate, litigation search and ownership flow." },
          { title: "Plan", description: "Compare sanctioned plan, carpet area, UDS, parking, amenities, maintenance and possession terms." },
          { title: "Agreement", description: "Read cancellation, delay, escalation, transfer, assignment and dispute terms before signing." },
          { title: "Developer", description: "Review past delivery, complaints, finance partner approval and current construction status." },
        ],
      },
      {
        eyebrow: "Step 4",
        heading: "Remote execution and POA controls",
        copy: [
          "A POA is a practical tool, but it should not become a blank cheque. The safest POA is specific, time-bound, property-linked and drafted by a lawyer who understands NRI execution.",
        ],
        bullets: [
          "Name the property or transaction clearly where possible.",
          "Limit powers to inspection, signing, registration or bank formalities that are actually needed.",
          "Avoid broad sale, mortgage or transfer powers unless they are deliberate and legally reviewed.",
          "Confirm notarization, attestation, apostille or consular process for your country.",
          "Keep scanned and physical copies of executed POA, ID proofs and registration receipts.",
        ],
      },
      {
        eyebrow: "Step 5",
        heading: "Rental, tax and repatriation planning",
        bullets: [
          "Decide who will find tenants, verify identity, execute lease, collect rent and handle repairs.",
          "Track property tax, maintenance, insurance, rent receipts and TDS certificates.",
          "For sale, plan TDS, capital gains, indexation if applicable, Form 15CA/CB and bank documentation with your CA.",
          "For overseas tax, confirm rental income and foreign account reporting treatment with the relevant country advisor.",
          "Review the property annually like any other asset: yield, vacancy, maintenance, price, tax and exit depth.",
        ],
      },
    ],
    table: {
      heading: "When to involve which professional",
      columns: ["Decision", "Professional", "Output to ask for"],
      rows: [
        ["RERA and title", "Property lawyer", "Written title and approval review"],
        ["Funding route", "Banker and CA", "NRE/NRO/inward remittance recommendation"],
        ["POA", "Property lawyer", "Specific and limited POA draft"],
        ["Rental tax", "Indian CA and overseas tax advisor", "Annual reporting checklist"],
        ["Commercial lease", "Lawyer and valuer", "Lease, tenant and yield review"],
      ],
    },
    checklistTitle: "Copy this checklist into your purchase folder",
    checklistIntro:
      "This is the working list we want NRI buyers to complete before an agreement becomes a long-term commitment.",
    checklist: [
      "NRI/OCI identity documents and PAN",
      "Property purpose, budget, holding period and exit plan",
      "Source-of-funds proof and banking route",
      "TG-RERA project and agent verification",
      "HMDA/GHMC/DTCP or relevant approval documents",
      "Title chain, mother deed and encumbrance certificate",
      "Sanctioned plan, UDS, carpet area and parking details",
      "Agreement draft with payment and cancellation terms",
      "Specific POA draft and execution process",
      "Rental management and inspection plan",
      "Indian tax and overseas tax reporting checklist",
      "Sale, TDS and repatriation plan",
    ],
    faqs: [
      {
        q: "What documents should an NRI check before buying Hyderabad property?",
        a: "Start with TG-RERA registration, title chain, encumbrance certificate, sanctioned plan, approvals, sale agreement, payment schedule, POA draft and funding account records.",
      },
      {
        q: "Is RERA registration enough to buy safely?",
        a: "No. RERA is a starting point, not a complete legal review. Title, approvals, encumbrance, plan, agreement terms and project-level risk still need independent verification.",
      },
      {
        q: "Can I give POA to a relative in India?",
        a: "Yes, but the POA should be drafted carefully, limited to required actions and executed through the correct process for your country and Indian registration needs.",
      },
      {
        q: "What is the biggest mistake NRIs make?",
        a: "The biggest mistake is paying token money before the account route, RERA status, title basics, POA and exit plan are clear.",
      },
      {
        q: "Can SoHo Wealth review my checklist?",
        a: "Yes. SoHo Wealth can help organize the checklist and coordinate the right questions. Legal, tax and valuation opinions should come from qualified professionals.",
      },
    ],
    sources: coreSources,
    related: [
      { title: "US NRI Hyderabad Real Estate", href: "/us-nri-hyderabad-real-estate", description: "Country-specific guidance for US-based NRIs and OCIs." },
      { title: "NRI Real Estate in Hyderabad", href: "/nri-real-estate-in-hyderabad", description: "The broad NRI property guide across residential, commercial and rental assets." },
      { title: "Hyderabad Real Estate Advisory", href: "/hyderabad-real-estate", description: "Compare property types, corridors, platforms and SoHo Wealth's diligence framework." },
    ],
    updatedAt: "2026-06-14",
    sitemapPriority: 0.86,
  },
];

type MicroMarketInput = {
  slug: string;
  name: string;
  metaArea: string;
  primaryKeyword: string;
  positioning: string;
  buyerFit: string[];
  watchouts: string[];
  nriAngle: string[];
  sourceNote: string;
  related: RealEstateRelatedLink[];
};

function createMicroMarketPage(input: MicroMarketInput): RealEstateGuide {
  const path = `/hyderabad-real-estate/${input.slug}`;
  return {
    slug: input.slug,
    path,
    title: `${input.name} Real Estate`,
    metaTitle: `${input.name} Real Estate for NRIs | Hyderabad Property Advisory | SoHo Wealth`,
    metaDescription:
      `${input.name} real estate advisory for NRIs and HNIs evaluating Hyderabad property. Residential fit, rental demand, RERA checks, title diligence, pricing and exit review.`,
    keywords: [
      input.primaryKeyword,
      `${input.name} property investment`,
      `${input.name} real estate for NRIs`,
      `${input.name} flats for NRI buyers`,
      `${input.name} Hyderabad property`,
      `buy property in ${input.name}`,
      "Hyderabad real estate advisory",
    ],
    heroKicker: `${input.metaArea} property guide`,
    h1: `${input.name} real estate`,
    highlightedH1: "reviewed for NRI and HNI buyers.",
    intro:
      `${input.name} is one of the Hyderabad corridors NRIs ask about most often. SoHo Wealth helps evaluate whether the location, project, price, rental story and exit route fit your wider portfolio.`,
    marketLabel: input.metaArea,
    serviceName: `${input.name} Real Estate Advisory`,
    serviceDescription:
      `Residential and NRI real estate advisory for ${input.name}, Hyderabad, with RERA, title, rental and portfolio-fitment review.`,
    serviceType: "Hyderabad Real Estate Advisory",
    leadSource: `${input.slug} real estate page`,
    formHeading: `Review a ${input.name} Property`,
    formTitle: `Looking at ${input.name}? Check the fit first.`,
    formCopy:
      "Share the project name, price, possession timeline and NRI status. We will help you frame the right questions before the next payment.",
    formBullets: [
      "Project and micro-market fitment",
      "RERA, approval and title checklist",
      "Rental yield and exit discussion",
      "NRE/NRO and POA questions for NRIs",
      "Portfolio concentration review",
    ],
    highlights: [
      {
        title: "Best fit",
        description: input.positioning,
      },
      {
        title: "NRI buyer lens",
        description:
          "Remote buyers should compare builder delivery, rental depth, maintenance, handover quality and property-management options before choosing a unit.",
      },
      {
        title: "Diligence first",
        description:
          "TG-RERA, title, approvals, payment schedule and possession status should be verified before token money or POA execution.",
      },
    ],
    sections: [
      {
        eyebrow: "Buyer Fit",
        heading: `Who should evaluate ${input.name}`,
        bullets: input.buyerFit,
      },
      {
        eyebrow: "NRI Angle",
        heading: `How NRIs should approach ${input.name}`,
        bullets: input.nriAngle,
      },
      {
        eyebrow: "Risk Review",
        heading: `What to watch before buying in ${input.name}`,
        bullets: input.watchouts,
      },
      {
        eyebrow: "Comparison",
        heading: `${input.name} versus other Hyderabad corridors`,
        cards: [
          { title: "Versus Gachibowli and Financial District", description: "Compare maturity, office proximity, rental depth and entry pricing." },
          { title: "Versus Kokapet and Narsingi", description: "Compare premium supply, future infrastructure, possession timelines and density." },
          { title: "Versus Tellapur and Kollur", description: "Compare larger homes, end-use comfort, commute and family infrastructure." },
          { title: "Versus Miyapur and Bachupally", description: "Compare affordability, rental yield, resale liquidity and livability." },
          { title: "Versus Shamshabad", description: "Compare airport-led themes, land-use diligence and longer holding periods." },
          { title: "Versus REITs or debt", description: "Compare rental yield, liquidity, concentration and operational effort against financial assets." },
        ],
      },
    ],
    table: {
      heading: `${input.name} diligence matrix`,
      columns: ["Check", "Question to ask", "Why it matters"],
      rows: [
        ["RERA", "Is the exact project registered and current on TG-RERA?", "Confirms basic regulatory disclosure and project details."],
        ["Approvals", "Which authority approved the plan or layout?", "Reduces plan, land-use and completion risk."],
        ["Pricing", "What is the all-in cost after GST, registration, maintenance and interiors?", "Headline per-sq-ft pricing can understate total capital deployed."],
        ["Rental", "What realistic rent, vacancy and maintenance assumptions should be used?", "Prevents yield decisions based on broker optimism."],
        ["Exit", "Who is the likely buyer five to seven years later?", "Liquidity depends on ticket size, supply, location maturity and project quality."],
      ],
    },
    checklistTitle: `${input.name} buyer checklist`,
    checklistIntro:
      `Use this checklist before selecting a unit or paying token money in ${input.name}.`,
    checklist: [
      "Project and developer shortlist with comparable pricing",
      "TG-RERA project registration and promoter disclosures",
      "Approval authority, sanctioned plan and occupancy or completion status",
      "Title chain, encumbrance certificate and litigation search",
      "All-in cost including GST, stamp duty, registration, maintenance, corpus and interiors",
      "Rental estimate with vacancy, maintenance and property-management costs",
      "NRE/NRO or inward remittance funding route for NRI buyers",
      "POA, registration and remote signing workflow if buyer is overseas",
      "Exit depth and resale comparables for similar ticket sizes",
    ],
    faqs: [
      {
        q: `Is ${input.name} good for NRI property investment?`,
        a: `${input.name} can be suitable for some NRI buyers, but it depends on budget, purpose, project quality, rental assumptions, holding period and exit liquidity. Treat the corridor as a shortlist, not a recommendation.`,
      },
      {
        q: `What should I verify before buying in ${input.name}?`,
        a: "Verify TG-RERA registration, approvals, title chain, encumbrance, sanctioned plan, payment terms, possession timeline, realistic rent and resale comparables.",
      },
      {
        q: `Is ${input.name} better for end-use or rental income?`,
        a: "It depends on the project and price. Some properties fit end-use and family living, while others need rental-yield discipline. SoHo Wealth compares both outcomes before shortlisting.",
      },
      {
        q: `Can SoHo Wealth help me compare ${input.name} with other Hyderabad areas?`,
        a: "Yes. We help compare corridors and property types through portfolio fitment, diligence framing, rental math and NRI execution questions.",
      },
    ],
    sources: coreSources,
    related: input.related,
    updatedAt: "2026-06-14",
    sitemapPriority: 0.82,
  };
}

export const realEstateMicroMarketPages: RealEstateGuide[] = [
  createMicroMarketPage({
    slug: "kokapet",
    name: "Kokapet",
    metaArea: "West Hyderabad",
    primaryKeyword: "Kokapet real estate",
    positioning:
      "Kokapet suits buyers looking at premium and luxury residential supply near the Financial District, ORR access and the Neopolis growth corridor.",
    buyerFit: [
      "NRIs and HNIs considering premium apartments or larger-ticket residential projects.",
      "Families who want West Hyderabad access but are comfortable with evolving infrastructure and future supply.",
      "Investors comparing luxury residential appreciation against rental yield and liquidity.",
      "Buyers who can hold through delivery cycles and future density changes.",
    ],
    watchouts: [
      "Premium pricing can reduce rental yield if rents are assumed too aggressively.",
      "Future supply and density should be compared project by project.",
      "Delivery timelines, approach roads, water, traffic and social infrastructure need current verification.",
      "Do not rely on Neopolis branding alone; verify exact project approvals and title.",
    ],
    nriAngle: [
      "Use a conservative rent, vacancy and maintenance model because premium assets can look strong on appreciation but modest on income.",
      "Ask for video inspection, construction progress, floor-plan usability and handover-quality evidence.",
      "Decide whether the property is for future self-use, family use or investment before picking ticket size.",
      "Keep NRE/NRO funding and POA workflow ready before builder payment milestones.",
    ],
    sourceNote: "Kokapet and Neopolis are commonly covered in Hyderabad premium residential discussions.",
    related: [
      { title: "US NRI Hyderabad Real Estate", href: "/us-nri-hyderabad-real-estate", description: "US-specific property routing and tax coordination points." },
      { title: "Narsingi Real Estate", href: "/hyderabad-real-estate/narsingi", description: "Compare Kokapet with nearby Narsingi and Nanakramguda." },
      { title: "Financial District Real Estate", href: "/hyderabad-real-estate/financial-district", description: "Compare Kokapet with the office-led premium corridor." },
    ],
  }),
  createMicroMarketPage({
    slug: "gachibowli",
    name: "Gachibowli",
    metaArea: "IT and office hub",
    primaryKeyword: "Gachibowli real estate",
    positioning:
      "Gachibowli is a mature office-led market with strong tenant catchment, established social infrastructure and better visibility on resale demand than many emerging corridors.",
    buyerFit: [
      "NRIs seeking rental demand from IT, GCC and financial services employees.",
      "Families who want an established ecosystem with schools, hospitals, offices and retail nearby.",
      "Investors who prefer mature-market liquidity over early-stage corridor optionality.",
      "Buyers comparing premium apartments with older resale inventory.",
    ],
    watchouts: [
      "Entry prices are often high, so net rental yield should be modeled carefully.",
      "Older projects need maintenance, association, parking and renovation checks.",
      "Traffic, access and micro-location matter because broad Gachibowli labels can hide differences.",
      "Resale liquidity depends on project reputation and ticket size.",
    ],
    nriAngle: [
      "For rental income, ask for tenant profile, expected vacancy, maintenance and property-manager costs.",
      "For self-use, compare commute and livability street by street rather than relying on the area name.",
      "Older resale can offer location, but requires stronger title, association and maintenance diligence.",
      "Keep tax and repatriation documents organized from the first rental year.",
    ],
    sourceNote: "Gachibowli is a mature West Hyderabad office and residential catchment.",
    related: [
      { title: "Financial District Real Estate", href: "/hyderabad-real-estate/financial-district", description: "Compare nearby premium office-led demand." },
      { title: "NRI Real Estate in Hyderabad", href: "/nri-real-estate-in-hyderabad", description: "Broader NRI buying framework for Hyderabad." },
      { title: "NRI Property Checklist", href: "/nri-property-checklist-hyderabad", description: "Documents and diligence before purchase." },
    ],
  }),
  createMicroMarketPage({
    slug: "financial-district",
    name: "Financial District",
    metaArea: "Premium office corridor",
    primaryKeyword: "Financial District Hyderabad real estate",
    positioning:
      "Financial District suits buyers who want proximity to large office campuses, premium residential supply and rental demand from senior professionals.",
    buyerFit: [
      "US and global NRIs working in tech or finance who understand office-led rental demand.",
      "HNIs comparing premium apartments near employment hubs.",
      "Buyers seeking stronger tenant catchment and shorter rental vacancy assumptions.",
      "Investors comfortable with high ticket sizes and lower margin of safety on yield.",
    ],
    watchouts: [
      "Price discipline is critical because premium location can already be priced in.",
      "Compare net yield after maintenance, vacancy, interiors and property-management costs.",
      "Check congestion, parking, approach roads and exact project access.",
      "Avoid assuming every nearby project has the same rental profile.",
    ],
    nriAngle: [
      "Ask whether the expected tenant profile matches the unit size and rent level.",
      "Have a property manager lined up before handover because premium tenants expect responsiveness.",
      "If buying for future return to India, test weekday commute, school access and daily convenience.",
      "Use conservative resale assumptions for larger-ticket apartments.",
    ],
    sourceNote: "Financial District is a key office-led premium residential corridor in West Hyderabad.",
    related: [
      { title: "US NRI Hyderabad Real Estate", href: "/us-nri-hyderabad-real-estate", description: "Remote buying workflow for US-based NRIs." },
      { title: "Gachibowli Real Estate", href: "/hyderabad-real-estate/gachibowli", description: "Compare adjacent mature office-led demand." },
      { title: "Kokapet Real Estate", href: "/hyderabad-real-estate/kokapet", description: "Compare premium growth supply west of the core." },
    ],
  }),
  createMicroMarketPage({
    slug: "tellapur",
    name: "Tellapur",
    metaArea: "Family growth corridor",
    primaryKeyword: "Tellapur real estate",
    positioning:
      "Tellapur is commonly evaluated for larger apartments, villas and family-led communities with West Hyderabad access at a different price equation from the core office hubs.",
    buyerFit: [
      "Returning NRIs who want larger homes, gated communities and family-oriented living.",
      "Buyers comparing villas or larger apartments with commute tolerance.",
      "Families prioritizing schools, open space and community living over immediate office adjacency.",
      "Longer-horizon investors comfortable with infrastructure maturity taking time.",
    ],
    watchouts: [
      "Commute and last-mile access should be tested during peak hours.",
      "Water, roads, schools, hospitals and retail maturity vary by pocket.",
      "Villa and large-unit ticket sizes need careful resale-depth review.",
      "Verify layout approvals, land title and project delivery record carefully.",
    ],
    nriAngle: [
      "If the goal is return to India, evaluate school access, daily commute and healthcare before price appreciation.",
      "If the goal is rental, compare realistic tenants for larger homes rather than assuming core-office rents.",
      "For villas, review maintenance, association quality, security and property-management depth.",
      "Keep construction and handover inspection support in place if you cannot travel frequently.",
    ],
    sourceNote: "Tellapur is a frequently evaluated family-led growth corridor near West Hyderabad.",
    related: [
      { title: "NRI Real Estate in Hyderabad", href: "/nri-real-estate-in-hyderabad", description: "Broader NRI buying guide for Hyderabad." },
      { title: "Narsingi Real Estate", href: "/hyderabad-real-estate/narsingi", description: "Compare a closer ORR and West Hyderabad access corridor." },
      { title: "NRI Property Checklist", href: "/nri-property-checklist-hyderabad", description: "Checklist for documents, title, POA and funding route." },
    ],
  }),
  createMicroMarketPage({
    slug: "narsingi",
    name: "Narsingi",
    metaArea: "ORR access corridor",
    primaryKeyword: "Narsingi real estate",
    positioning:
      "Narsingi sits between premium West Hyderabad demand and ORR-led connectivity, making project selection and entry price especially important.",
    buyerFit: [
      "Buyers comparing Kokapet, Nanakramguda, Gachibowli and Financial District access.",
      "NRIs who want West Hyderabad proximity without necessarily choosing the highest-priced core pocket.",
      "Families who value ORR connectivity and access to premium corridors.",
      "Investors comparing rental catchment and resale depth across nearby projects.",
    ],
    watchouts: [
      "Project-by-project quality varies, so developer and handover diligence matter.",
      "Approach roads, traffic, density and civic infrastructure should be checked on site.",
      "Rental assumptions should be compared with nearby alternatives, not area averages.",
      "Resale depth depends heavily on project brand, unit size and all-in price.",
    ],
    nriAngle: [
      "Ask for a rental and resale comparison against Kokapet, Financial District and Gachibowli.",
      "If buying remotely, insist on independent site videos showing access roads and surroundings.",
      "Compare maintenance and association quality for similar projects in the corridor.",
      "Use a transaction-specific POA if registration or handover will be handled by family.",
    ],
    sourceNote: "Narsingi is often compared with Kokapet, Nanakramguda and the Financial District.",
    related: [
      { title: "Kokapet Real Estate", href: "/hyderabad-real-estate/kokapet", description: "Compare nearby premium growth supply." },
      { title: "Financial District Real Estate", href: "/hyderabad-real-estate/financial-district", description: "Compare office-led tenant demand." },
      { title: "US NRI Hyderabad Real Estate", href: "/us-nri-hyderabad-real-estate", description: "Country-specific remote buying guidance." },
    ],
  }),
  createMicroMarketPage({
    slug: "shamshabad",
    name: "Shamshabad",
    metaArea: "Airport and logistics corridor",
    primaryKeyword: "Shamshabad real estate",
    positioning:
      "Shamshabad is a longer-horizon airport, logistics and infrastructure corridor where land-use, title and exit liquidity matter more than headline appreciation stories.",
    buyerFit: [
      "Investors considering longer holding periods around airport-led growth themes.",
      "Buyers evaluating plotted developments, logistics adjacency or selective residential projects.",
      "Families who understand the commute trade-off and want airport-side access.",
      "NRIs who can tolerate lower near-term liquidity in exchange for thematic exposure.",
    ],
    watchouts: [
      "Land title, layout approval, zoning and access roads need specialist diligence.",
      "Avoid unregistered pre-launch or informal plotted schemes.",
      "Rental demand may be project-specific and lower than West Hyderabad office corridors.",
      "Exit liquidity can be thinner for land or large-ticket speculative purchases.",
    ],
    nriAngle: [
      "Do not buy land remotely without independent legal title review and physical verification.",
      "Ask whether the property has a clear end-user or tenant base, not just a future-infrastructure story.",
      "Keep documentation and payment trail clean because land exits can require more paperwork.",
      "Compare the same capital against REITs, debt funds or smaller residential assets for liquidity.",
    ],
    sourceNote: "Shamshabad is tied to airport-led and infrastructure-led property narratives.",
    related: [
      { title: "NRI Property Checklist", href: "/nri-property-checklist-hyderabad", description: "Use the land, title and approval checklist before paying token." },
      { title: "NRI Real Estate in Hyderabad", href: "/nri-real-estate-in-hyderabad", description: "Broader NRI property route planning." },
      { title: "Tellapur Real Estate", href: "/hyderabad-real-estate/tellapur", description: "Compare with a family-led residential growth corridor." },
    ],
  }),
];

export const allRealEstateGuides = [...realEstateSeoPages, ...realEstateMicroMarketPages];

export function getRealEstateGuideByPath(path: string) {
  return allRealEstateGuides.find((page) => page.path === path);
}

export function getRealEstateMicroMarketGuide(slug: string) {
  return realEstateMicroMarketPages.find((page) => page.slug === slug);
}

export function buildRealEstateMetadata(page: RealEstateGuide): Metadata {
  const url = `${baseUrl}${page.path}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    authors: [{ name: "SoHo Wealth" }],
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      siteName: "SoHo Wealth",
      type: "website",
      locale: "en_IN",
      images: [{ url: "https://www.sohowealth.in/soho-logo.png", width: 1024, height: 1024, alt: "SoHo Wealth" }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: ["https://www.sohowealth.in/soho-logo.png"],
    },
  };
}
