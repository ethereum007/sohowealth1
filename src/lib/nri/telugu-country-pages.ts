export type TeluguNriCountryPage = {
  slug: string;
  kicker: string;
  title: string;
  description: string;
  keywords: string[];
  intro: string;
  priorities: Array<{ title: string; text: string }>;
  checklist: string[];
  related: Array<{ title: string; href: string; text: string }>;
  faqs: Array<{ q: string; a: string }>;
  sources: Array<{ title: string; href: string }>;
};

const commonRelated = [
  { title: "NRE vs NRO and repatriation", href: "/insights/nre-vs-nro-repatriation", text: "Choose the funding and remittance route before selecting products." },
  { title: "NRI investment checklist", href: "/insights/nri-investing-india-2026-checklist", text: "A portfolio-level sequence for India-linked capital." },
  { title: "SIF, PMS and mutual funds for NRIs", href: "/insights/sif-for-nris-vs-pms-mutual-funds", text: "Compare structure, minimums, liquidity and portfolio role." },
  { title: "Hyderabad real estate for NRIs", href: "/nri-real-estate-in-hyderabad", text: "Property, banking, diligence, tax and remote execution in one workflow." },
];

export const teluguNriCountryPages: TeluguNriCountryPage[] = [
  {
    slug: "usa",
    kicker: "Telugu NRIs in the United States",
    title: "India-Linked Wealth Planning for Telugu NRIs in the USA",
    description: "Telugu NRI wealth management for US families coordinating Indian investments, NRE/NRO accounts, FATCA, PFIC, RSUs, property and return-to-India plans.",
    keywords: ["Telugu NRI wealth management USA", "US NRI investment India", "Indian mutual funds PFIC", "NRI wealth advisor Hyderabad USA"],
    intro: "A US-based Telugu family can face Indian banking and tax rules alongside US reporting, estate and investment consequences. The portfolio must be designed for both jurisdictions rather than optimised for only one statement.",
    priorities: [
      { title: "US reporting before product selection", text: "Indian bank, brokerage and investment accounts can create FBAR, Form 8938 or other reporting questions. Indian pooled investments may require a PFIC review before purchase." },
      { title: "Employer equity and concentration", text: "RSUs, ESPPs and employer stock should be measured alongside salary and career exposure before adding more equity risk in India." },
      { title: "India account and remittance routes", text: "NRE, NRO and FCNR accounts should reflect the source of money, desired currency and eventual repatriation path." },
      { title: "Property and family responsibilities", text: "A Hyderabad property needs title, RERA, operating, tax-withholding and remittance planning—not only remote purchase support." },
      { title: "Return-to-India sequencing", text: "Residency days, RNOR, foreign assets, retirement accounts and account conversion should be mapped before relocation." },
      { title: "One coordinated record", text: "Keep India and US advisers working from the same asset inventory, transaction history and family objectives." },
    ],
    checklist: ["Passport, OCI and PAN status", "India entry and exit history", "NRE, NRO, FCNR and resident accounts", "Indian mutual funds, PMS, SIF, stocks and property", "US brokerage, retirement accounts and employer equity", "FBAR, Form 8938 and PFIC questions for a US tax professional", "Nomination, will and cross-border estate documents"],
    related: [{ title: "US and Canada NRI mutual funds", href: "/insights/us-canada-nris-mutual-funds-fatca", text: "AMC acceptance, FATCA/KYC and US tax questions before investing." }, { title: "RSU and ESOP diversification for NRIs", href: "/insights/rsu-esop-diversification-nri", text: "Connect employer equity with India and global goals." }, ...commonRelated],
    faqs: [
      { q: "Can a US-based NRI invest in Indian mutual funds?", a: "Some AMCs and platforms accept US residents subject to their processes. Acceptance does not resolve US PFIC or reporting consequences, which should be reviewed before investing." },
      { q: "Does SoHo Wealth file US tax returns?", a: "No. SoHo Wealth coordinates India-linked portfolios and product distribution. US tax positions and filings belong with an appropriately qualified US tax professional." },
      { q: "Can consultations happen in Telugu and US time zones?", a: "Yes. Telugu or English video consultations can be scheduled for US-based families." },
    ],
    sources: [
      { title: "IRS: FBAR", href: "https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar" },
      { title: "IRS: Form 8938", href: "https://www.irs.gov/forms-pubs/about-form-8938" },
      { title: "IRS: Form 8621 instructions", href: "https://www.irs.gov/instructions/i8621" },
      { title: "RBI: Non-resident accounts", href: "https://www.rbi.org.in/commonman/English/Scripts/FAQs.aspx?Id=3" },
    ],
  },
  {
    slug: "uae",
    kicker: "Telugu NRIs in the UAE and Gulf",
    title: "India-Linked Wealth Planning for Telugu NRIs in the UAE",
    description: "Telugu NRI wealth management for UAE and Gulf families covering NRE/NRO accounts, remittances, India investments, property, protection and return planning.",
    keywords: ["Telugu NRI wealth management UAE", "Dubai NRI investment India", "Gulf NRI wealth planning", "NRI investment Hyderabad UAE"],
    intro: "Gulf income may be tax-light locally, but India investments, property, succession and a future return still need careful structure. Currency, liquidity and family protection deserve as much attention as investment returns.",
    priorities: [
      { title: "Build the emergency reserve in the right currency", text: "Separate Gulf living costs and job-transition liquidity from India allocations so remittance timing does not create pressure." },
      { title: "Use NRE, NRO and FCNR deliberately", text: "Match foreign earnings, India income and currency deposits to the correct operational account and future use." },
      { title: "Avoid an India-only portfolio", text: "Property, deposits and Indian equities can create concentrated rupee exposure when future education or retirement costs may be overseas." },
      { title: "Prepare for employment transitions", text: "Residency and benefits can be linked to employment. Maintain accessible records, insurance and liquidity for an unplanned move." },
      { title: "Coordinate property from overseas", text: "Use bounded POA, verified title/RERA checks, banking records and a defined rental or exit process." },
      { title: "Plan succession across jurisdictions", text: "Review nominations, wills, account access and family instructions with qualified legal professionals in the relevant jurisdictions." },
    ],
    checklist: ["UAE/Gulf residency and employment timeline", "Emergency reserve and insurance", "NRE, NRO and FCNR accounts", "India investments and property cash flows", "Expected education, retirement and return currency", "Nominees, wills and family access records", "Tax-residency certificate or treaty questions for qualified professionals"],
    related: [{ title: "GIFT City for NRIs", href: "/insights/gift-city-for-nris-guide", text: "Understand the role of eligible foreign-currency investment structures." }, ...commonRelated],
    faqs: [
      { q: "Should a UAE NRI keep all savings in India?", a: "Not automatically. Match currencies and liquidity to where future expenses will occur, then decide the appropriate India allocation." },
      { q: "Is NRE interest always tax-free everywhere?", a: "Indian treatment and overseas treatment are separate questions. Confirm current rules and personal status with qualified tax professionals." },
      { q: "Can SoHo Wealth help with Hyderabad property?", a: "Yes. The Hyderabad real-estate desk covers portfolio fit, project and title checks, NRI execution and remote ownership planning within the disclosed scope." },
    ],
    sources: [
      { title: "RBI: Non-resident accounts", href: "https://www.rbi.org.in/commonman/English/Scripts/FAQs.aspx?Id=3" },
      { title: "RBI: Remittance of assets", href: "https://www.rbi.org.in/commonperson/english/scripts/FAQs.aspx?Id=17" },
      { title: "Income Tax Department: Non-resident guidance", href: "https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/non-resident" },
    ],
  },
  {
    slug: "returning-to-india",
    kicker: "Returning Telugu NRIs",
    title: "Return-to-India Wealth Planning for Telugu NRI Families",
    description: "A return-to-India wealth roadmap for Telugu NRIs covering residency days, RNOR, RFC accounts, foreign assets, RSUs, property and retirement.",
    keywords: ["Telugu NRI returning to India", "RNOR planning India", "return to India wealth planning", "RFC account returning NRI"],
    intro: "The move home is a financial-status transition, not merely a relocation. Decisions made before the return date can affect accounts, reporting, currency exposure and the flexibility of a family portfolio for years.",
    priorities: [
      { title: "Build the residency calendar", text: "Record travel days and prior-year history. Income-tax residence, RNOR and FEMA residence require fact-specific professional review." },
      { title: "Inventory every foreign asset", text: "List bank and brokerage accounts, pensions, retirement plans, RSUs, insurance and property before India reporting obligations change." },
      { title: "Sequence account redesignation", text: "NRE, NRO and FCNR accounts may need conversion or redesignation. RFC accounts may be relevant for eligible returning residents." },
      { title: "Protect currency flexibility", text: "Do not convert every foreign asset to rupees merely because the family has returned. Match currencies to goals and liabilities." },
      { title: "Rebuild insurance and estate arrangements", text: "Check continuity of overseas cover, India health and term needs, nominations, wills and access instructions." },
      { title: "Integrate the Hyderabad home decision", text: "Separate end-use property needs from investment assumptions and measure total real-estate concentration." },
    ],
    checklist: ["Ten-year India travel history", "Expected permanent-return date", "All India and overseas financial accounts", "RSUs, options and employer benefits", "Pensions and retirement accounts", "Property, loans and expected remittances", "Nominations, wills, insurance and dependent-family needs", "CA/CPA/FEMA specialist hand-off list"],
    related: [{ title: "Complete return-to-India checklist", href: "/insights/returning-to-india-wealth-checklist", text: "The detailed account, asset and documentation workflow." }, { title: "Retirement planning for returning NRIs", href: "/insights/retirement-planning-for-nris-returning-to-india", text: "Income, currency, healthcare and housing after the move." }, ...commonRelated],
    faqs: [
      { q: "Is every returning NRI eligible for RNOR?", a: "No. RNOR depends on statutory conditions and prior residence history. A day-count tool is only directional; obtain a professional determination." },
      { q: "Must all foreign money be brought to India?", a: "Do not assume that. The correct treatment depends on the asset, transaction history, residency and applicable rules. Review each holding before moving it." },
      { q: "When should return planning begin?", a: "Ideally before the financial year in which the move may occur, especially when large asset sales, RSU transactions or account changes are being considered." },
    ],
    sources: [
      { title: "Income Tax Department: Non-resident guidance", href: "https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/non-resident" },
      { title: "RBI: Non-resident accounts", href: "https://www.rbi.org.in/commonman/English/Scripts/FAQs.aspx?Id=3" },
      { title: "Income Tax Department: Schedule FA guidance", href: "https://www.incometax.gov.in/iec/foportal/nudge/nudge-schedule-fa" },
    ],
  },
];

export function getTeluguNriCountryPage(slug: string) {
  return teluguNriCountryPages.find((page) => page.slug === slug);
}
