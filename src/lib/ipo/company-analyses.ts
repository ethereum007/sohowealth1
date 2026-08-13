export type CompanyIpoAnalysis = {
  slug: string; company: string; market: "Mainboard" | "SME"; sector: string; status: string; analysisAsOf: string; summary: string;
  business: string[];
  issue: { open: string; close: string; listing: string; priceBand: string; lotSize: number; totalCr: number; freshCr: number; ofsCr: number; faceValue: string };
  useOfProceeds: Array<{ purpose: string; amount: string }>;
  financials: Array<{ year: string; revenueCr: number; ebitdaCr: number; patCr: number; netWorthCr: number; borrowingsCr: number; assetsCr: number }>;
  metrics: Array<{ label: string; value: string; context: string }>;
  strengths: string[]; concerns: string[]; monitor: string[]; valuation: string[];
  sources: Array<{ label: string; href: string; kind: "Primary" | "Secondary" }>;
};

export const companyIpoAnalyses: CompanyIpoAnalysis[] = [{
  slug: "ardee-industries-ipo", company: "Ardee Industries", market: "Mainboard", sector: "Secondary lead recycling and non-ferrous metals", status: "Listed 12 August 2026", analysisAsOf: "13 August 2026",
  summary: "Ardee Industries processes secondary lead and lead alloys for battery and industrial customers. The filed numbers show fast scale-up, margin expansion and stronger equity, but the business remains working-capital intensive, leveraged and concentrated across customers and end-markets.",
  business: [
    "Ardee recycles end-of-life energy-storage products and non-ferrous scrap into refined lead and customized lead alloys. Its outputs are used primarily by battery manufacturers and other industrial customers.",
    "The model combines raw-material procurement, recycling and refining. That creates exposure to scrap availability, lead-price movements, inventory funding, environmental compliance and the company's ability to pass input-price changes through to customers.",
    "The current promoters acquired the company in 2021 and manufacturing under the present operating setup began that year. The reported growth therefore comes from a relatively short operating history under current control.",
  ],
  issue: { open: "5 August 2026", close: "7 August 2026", listing: "12 August 2026", priceBand: "₹50–₹53", lotSize: 281, totalCr: 425.87, freshCr: 320, ofsCr: 105.87, faceValue: "₹2" },
  useOfProceeds: [
    { purpose: "Incremental working-capital requirements", amount: "₹220 crore" }, { purpose: "Repayment or prepayment of borrowings", amount: "₹22 crore" },
    { purpose: "General corporate purposes and issue expenses", amount: "Balance of net fresh proceeds" }, { purpose: "Offer for sale", amount: "₹105.87 crore to selling shareholders, not the company" },
  ],
  financials: [
    { year: "FY24", revenueCr: 462.96, ebitdaCr: 28.06, patCr: 8.95, netWorthCr: 29.25, borrowingsCr: 142.36, assetsCr: 196.12 },
    { year: "FY25", revenueCr: 742.74, ebitdaCr: 65.93, patCr: 33.27, netWorthCr: 62.6, borrowingsCr: 165.77, assetsCr: 262.06 },
    { year: "FY26", revenueCr: 1167.65, ebitdaCr: 147.08, patCr: 84.68, netWorthCr: 147.38, borrowingsCr: 182.75, assetsCr: 363.33 },
  ],
  metrics: [
    { label: "FY26 EBITDA margin", value: "12.60%", context: "Up from approximately 6.1% in FY24." }, { label: "FY26 PAT margin", value: "7.25%", context: "Profit grew faster than revenue across the reported period." },
    { label: "FY26 debt/equity", value: "1.25×", context: "Improved as equity expanded, though absolute borrowings increased." }, { label: "Upper-band P/E", value: "15.96×", context: "Based on reported FY26 EPS of ₹3.32 and the ₹53 upper band." },
  ],
  strengths: [
    "Revenue increased from ₹462.96 crore in FY24 to ₹1,167.65 crore in FY26, while EBITDA and PAT expanded faster.", "EBITDA margin improved materially, indicating operating leverage and/or better spreads over the reported period.",
    "The fresh issue directs ₹220 crore to working capital and ₹22 crore to debt repayment, addressing two constraints visible in the balance sheet.", "Recycling and secondary-metal recovery provide exposure to circular-economy demand and import substitution, although the economics remain commodity-linked.",
  ],
  concerns: [
    "The top customer, top five and top ten customers contributed 40.64%, 81.98% and 91.61% of FY26 revenue respectively, according to RHP-derived disclosures.", "Battery and metal industries contributed 84.79% of FY26 revenue, creating end-market concentration.",
    "FY26 borrowings were ₹182.75 crore. Debt/equity improved to 1.25× from 4.87× in FY24, but absolute debt continued to rise.", "Working-capital needs rose sharply as the business scaled. Inventory, receivables and raw-material funding can absorb cash even when accounting profits grow.",
    "Lead scrap availability, commodity prices, foreign exchange, environmental compliance and customer pass-through arrangements can affect margins.", "The operating record under current promoters is limited because the acquisition and manufacturing ramp began in 2021.",
  ],
  monitor: [
    "Whether the ₹220 crore working-capital infusion improves operating cash conversion rather than only supporting higher inventory and receivables.", "Gross and EBITDA margins after listing, particularly if lead prices or scrap spreads normalize.",
    "Reduction in borrowings and finance cost after use of the fresh proceeds.", "Customer concentration: movement in the top-five and top-ten revenue shares.", "Environmental approvals, plant utilization, accident record and compliance disclosures.",
  ],
  valuation: [
    "At the ₹53 upper price band, the indicated FY26 P/E was approximately 15.96× based on EPS of ₹3.32. The issue announcement indicated an equity valuation of about ₹1,671 crore.",
    "RHP peer references include Gravita India, Pondy Oxides & Chemicals and Jain Resource Recycling. Their business mixes, scale, margins and trading histories differ, so a simple P/E discount is not sufficient by itself.",
    "The valuation case depends heavily on whether FY26 margins and profit growth are sustainable after the IPO. A normalized-cycle view should test lower recycling spreads, slower revenue growth and continued working-capital consumption.",
  ],
  sources: [
    { label: "SEBI public-issue filings: Ardee Industries RHP", href: "https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&sid=3&smid=11&ssid=15", kind: "Primary" },
    { label: "Ardee Industries DRHP hosted by NSE", href: "https://nsearchives.nseindia.com/corporate/Registration_29092025064558_Ardee_Industries_Limited.pdf", kind: "Primary" },
    { label: "Ardee Industries investor information", href: "https://ardeeindustries.com/investors/", kind: "Primary" },
    { label: "Issue announcement and use of proceeds (PTI)", href: "https://theprint.in/economy/ardee-industries-rs-426-cr-ipo-to-open-on-aug-5-fixes-price-band-at-rs-50-53/2999617/", kind: "Secondary" },
  ],
}];

export const getCompanyIpoAnalysis = (slug: string) => companyIpoAnalyses.find((item) => item.slug === slug);
