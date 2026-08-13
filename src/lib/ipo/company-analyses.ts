export type CompanyIpoAnalysis = {
  slug: string; company: string; market: "Mainboard" | "SME"; sector: string; status: string; analysisAsOf: string; summary: string;
  business: string[];
  issueNote?: string;
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
}, {
  slug: "leap-india-ipo", company: "LEAP India", market: "Mainboard", sector: "Asset pooling and supply-chain equipment", status: "Issue closed; listing awaited", analysisAsOf: "13 August 2026",
  summary: "LEAP India operates a pooled network of pallets, containers and material-handling equipment for enterprise supply chains. The model benefits from recurring rental relationships and network density, but it requires heavy upfront capital, carries meaningful debt and depends on utilisation, asset life and loss-control assumptions.",
  business: [
    "LEAP owns and pools reusable supply-chain assets such as wooden and plastic pallets, foldable large containers, crates, bins and material-handling equipment. Customers rent these assets instead of purchasing and managing them directly.",
    "The company also provides repair, sanitation, inventory management and reverse-logistics services. Its economics depend on keeping assets deployed, extending their useful life and efficiently moving them between customer locations and fulfilment centres.",
    "The DRHP reported more than 13 million assets, over 7,700 customer touchpoints, 30 fulfilment centres and more than 900 customers as of May 2025. These are issuer-reported operating measures and should be refreshed from the final prospectus when available.",
  ],
  issueNote: "Final price-band materials indicate a ₹2,480 crore offer comprising ₹480 crore of fresh issue and ₹2,000 crore of OFS. The August 2025 DRHP originally proposed up to ₹2,400 crore, including ₹400 crore fresh issue; final prospectus and exchange allotment notices should control if figures differ.",
  issue: { open: "7 August 2026", close: "11 August 2026", listing: "Expected 14 August 2026", priceBand: "₹151–₹159", lotSize: 94, totalCr: 2480, freshCr: 480, ofsCr: 2000, faceValue: "₹1" },
  useOfProceeds: [
    { purpose: "Repayment or prepayment of identified borrowings", amount: "DRHP earmark: ₹300.10 crore" },
    { purpose: "General corporate purposes", amount: "Balance of net fresh proceeds" },
    { purpose: "Offer for sale", amount: "₹2,000 crore to selling shareholders; no proceeds to the company" },
    { purpose: "Final fresh-issue allocation", amount: "Verify against the final prospectus; DRHP fresh issue was ₹400 crore" },
  ],
  financials: [
    { year: "FY23", revenueCr: 253.37, ebitdaCr: 126.29, patCr: 9.01, netWorthCr: 569.41, borrowingsCr: 354.54, assetsCr: 1115.39 },
    { year: "FY24", revenueCr: 364.97, ebitdaCr: 209.92, patCr: 37.17, netWorthCr: 714.18, borrowingsCr: 513.07, assetsCr: 1400.28 },
    { year: "FY25", revenueCr: 466.47, ebitdaCr: 273.8, patCr: 37.56, netWorthCr: 917.35, borrowingsCr: 801.66, assetsCr: 2042.46 },
  ],
  metrics: [
    { label: "FY23–FY25 revenue CAGR", value: "35.7%", context: "Derived from restated revenue from operations of ₹253.37 crore and ₹466.47 crore." },
    { label: "FY25 EBITDA margin", value: "58.7%", context: "Derived from DRHP financials; the asset-heavy rental model carries substantial depreciation and finance costs below EBITDA." },
    { label: "FY25 PAT margin", value: "8.1%", context: "PAT was nearly flat versus FY24 despite approximately 28% revenue growth." },
    { label: "FY25 borrowings/equity", value: "0.87×", context: "Borrowings increased to ₹801.66 crore from ₹513.07 crore in FY24." },
  ],
  strengths: [
    "A large reusable-asset pool and broad fulfilment footprint can create network density and customer switching friction.",
    "Revenue from operations grew from ₹253.37 crore in FY23 to ₹466.47 crore in FY25, while reported EBITDA margins remained high.",
    "Multi-year enterprise relationships and outsourcing of pallet management can improve revenue visibility, subject to contract renewal and utilisation.",
    "The fresh issue is intended primarily to reduce debt, which could lower finance costs if repayment occurs as disclosed.",
  ],
  concerns: [
    "The business requires continuing capital expenditure. Total assets rose to ₹2,042.46 crore in FY25, more than four times FY25 revenue.",
    "Borrowings increased by about 56% in FY25. Debt reduction from the IPO is modest relative to the reported borrowing base unless supplemented by internal cash generation.",
    "FY25 PAT increased only around 1% even as revenue grew approximately 28%, highlighting depreciation, finance-cost and tax drag below EBITDA.",
    "Asset theft, damage, loss, premature retirement and weaker-than-expected useful lives can reduce returns on the pooled fleet.",
    "Customer concentration, contract renewals, receivable collection and utilisation rates can materially affect cash conversion.",
    "The OFS represents most of the offer, so the majority of IPO proceeds go to selling shareholders rather than funding the company.",
  ],
  monitor: [
    "Final prospectus, basis of allotment and exchange listing notice, including any change from the published issue structure.",
    "Net debt and finance cost after the disclosed repayment of borrowings.",
    "Asset utilisation, additions, disposals, losses and repair expense across the pallet and container pools.",
    "Operating cash flow after capex; EBITDA alone does not capture the replacement and expansion cost of the fleet.",
    "Customer concentration, contract duration and the revenue mix between pallet pooling, containers and material-handling equipment.",
  ],
  valuation: [
    "A clean final P/E and enterprise-value comparison requires the final issue price, post-offer share count and updated net debt from the final prospectus. Until those are tied out, valuation is marked pending rather than inferred from incomplete offer data.",
    "Peer comparison is imperfect: equipment-rental, logistics and supply-chain-service companies can have very different asset ownership, depreciation policies, leverage and contract structures.",
    "The key valuation question is return on invested capital after maintenance capex and asset losses, not EBITDA growth in isolation. Cash generation through a full replacement cycle is the more useful test.",
  ],
  sources: [
    { label: "SEBI filing page: LEAP India DRHP", href: "https://www.sebi.gov.in/filings/public-issues/sep-2025/leap-india-limited_96378.html", kind: "Primary" },
    { label: "LEAP India DRHP filed with SEBI", href: "https://www.sebi.gov.in/sebi_data/attachdocs/sep-2025/1756798204736_932.pdf", kind: "Primary" },
    { label: "LEAP India offer-document page", href: "https://www.leapindia.net/drhpdownload", kind: "Primary" },
    { label: "India Ratings: LEAP India rating rationale, February 2026", href: "https://www.indiaratings.co.in/pressrelease/81339", kind: "Secondary" },
  ],
}, {
  slug: "dhoot-transmission-ipo", company: "Dhoot Transmission", market: "Mainboard", sector: "Automotive electrical and electronic components", status: "Issue closed; listing awaited", analysisAsOf: "13 August 2026",
  summary: "Dhoot Transmission is a scaled wiring-harness and automotive-electronics supplier with strong positions in two- and three-wheelers and rising EV exposure. Its restated financials show rapid growth and high returns, while customer concentration, acquisition integration, cyclical OEM demand and debt-funded expansion remain central analytical risks.",
  business: [
    "Dhoot designs and manufactures wiring harnesses, battery packs, electronic sensors and controllers, automotive switches, connectors and other electrical systems for two-wheelers, three-wheelers, commercial vehicles, off-road equipment and selected non-automotive applications.",
    "The company operated 22 manufacturing facilities across India and overseas as of December 2025. Plants located near customer factories support just-in-time supply, but they also increase execution complexity and fixed-cost exposure when individual vehicle programmes slow.",
    "Issuer disclosures describe Dhoot as one of the two largest suppliers in India's two- and three-wheeler wiring-harness market. EV-related revenue rose from 8.05% in FY23 to 25.22% in FY25; market-share and industry-growth figures remain issuer-commissioned claims rather than independently audited financial metrics.",
  ],
  issueNote: "The final offer was marketed at ₹829–₹871 per share with a ₹1,400 crore fresh issue and approximately ₹1,666.89 crore OFS. The May 2026 UDRHP stated the OFS as 1.631 crore shares; final RHP, allotment and exchange notices should control any rounding differences.",
  issue: { open: "10 August 2026", close: "12 August 2026", listing: "Expected 17 August 2026", priceBand: "₹829–₹871", lotSize: 17, totalCr: 3066.89, freshCr: 1400, ofsCr: 1666.89, faceValue: "₹2" },
  useOfProceeds: [
    { purpose: "Repayment or prepayment of company borrowings", amount: "Up to ₹493.99 crore" },
    { purpose: "Investment in subsidiaries for repayment of their borrowings", amount: "Up to ₹272.59 crore" },
    { purpose: "New wiring-harness plants at Jhajjar and Shoolagiri/Hosur", amount: "₹150 crore" },
    { purpose: "Unidentified acquisitions and general corporate purposes", amount: "Balance, subject to disclosed limits" },
    { purpose: "Offer for sale", amount: "Approximately ₹1,666.89 crore to selling shareholders" },
  ],
  financials: [
    { year: "FY23", revenueCr: 2125.86, ebitdaCr: 298.68, patCr: 163.91, netWorthCr: 468.53, borrowingsCr: 422.67, assetsCr: 1261.18 },
    { year: "FY24", revenueCr: 2797.73, ebitdaCr: 512.4, patCr: 298.75, netWorthCr: 741.01, borrowingsCr: 554.89, assetsCr: 1711.7 },
    { year: "FY25", revenueCr: 3444.86, ebitdaCr: 590.96, patCr: 353.89, netWorthCr: 978.18, borrowingsCr: 776.06, assetsCr: 2336.23 },
  ],
  metrics: [
    { label: "FY23–FY25 revenue CAGR", value: "27.3%", context: "Derived from restated revenue from operations of ₹2,125.86 crore and ₹3,444.86 crore." },
    { label: "FY25 EBITDA margin", value: "17.2%", context: "Up from 14.1% in FY23, though below the FY24 margin of 18.3%." },
    { label: "FY25 PAT margin", value: "10.3%", context: "PAT more than doubled between FY23 and FY25." },
    { label: "Upper-band FY25 P/E", value: "35.8×", context: "Derived from ₹871 and UDRHP FY25 EPS of ₹24.31; not a forward multiple." },
  ],
  strengths: [
    "Revenue grew 62% between FY23 and FY25, while PAT expanded faster and EBITDA margin improved from the FY23 base.",
    "Long OEM relationships, embedded vehicle programmes and manufacturing proximity can create switching friction after a component is validated.",
    "EV-related revenue reached 25.22% of FY25 revenue, increasing Dhoot's exposure to higher electrical content per vehicle.",
    "Approximately ₹766.58 crore of identified fresh proceeds is directed to parent and subsidiary debt repayment, which should reduce finance costs if deployed as filed.",
    "The Jhajjar and Hosur facilities expand capacity near important northern and southern automotive clusters.",
  ],
  concerns: [
    "The top five customers contributed 72.49% of revenue in the nine months ended December 2025. Programme loss, insourcing or weaker production at a major OEM could materially affect results.",
    "Two- and three-wheelers represented roughly four-fifths of FY25 revenue, leaving the business exposed to category volumes and model cycles.",
    "Borrowings increased from ₹422.67 crore in FY23 to ₹776.06 crore in FY25 as the group expanded; December 2025 borrowings were higher still at about ₹822.49 crore.",
    "Copper, polymers, connectors and electronic inputs create commodity, foreign-exchange and supply-chain risk; pass-through arrangements may operate with a lag.",
    "The group has expanded through acquisitions and internal restructuring. Integration, related-party history, goodwill and cross-border subsidiary controls need continued scrutiny.",
    "Bain Capital affiliate BC Asia Investments XV is both a promoter and a major OFS seller. The sale is a partial liquidity event alongside primary capital raising.",
  ],
  monitor: [
    "Actual consolidated debt and finance-cost reduction after deployment of the IPO proceeds.",
    "Customer and vehicle-platform concentration, particularly revenue from the top five OEM relationships.",
    "Ramp-up cost, utilisation and customer nominations at the Jhajjar and Hosur plants.",
    "EV revenue mix and profitability rather than market-share claims alone.",
    "Operating cash flow, working-capital days and capex after the recent expansion cycle.",
    "Post-listing promoter shareholding, related-party transactions and acquisition discipline.",
  ],
  valuation: [
    "At ₹871, the offer implies approximately 35.8× FY25 EPS of ₹24.31. This is a historical multiple and does not incorporate the FY26 result, post-issue dilution or interest savings from debt repayment.",
    "The UDRHP peer set includes Minda Corporation, Uno Minda, Motherson Sumi Wiring India and Sona BLW Precision Forgings. Their product mix, end markets, global exposure and capital intensity differ, so the peer range is context rather than a direct valuation verdict.",
    "The central valuation test is whether Dhoot can sustain mid-to-high-teen EBITDA margins and strong returns while funding new plants, managing customer concentration and normalising leverage. Post-listing cash conversion will be more informative than revenue growth alone.",
  ],
  sources: [
    { label: "SEBI filing page: Dhoot Transmission UDRHP-I", href: "https://www.sebi.gov.in/filings/public-issues/may-2026/dhoot-transmission-limited-udrhp-1_101683.html", kind: "Primary" },
    { label: "Dhoot Transmission UDRHP-I hosted by SEBI", href: "https://www.sebi.gov.in/sebi_data/attachdocs/may-2026/1780048215478.pdf", kind: "Primary" },
    { label: "Dhoot Transmission IPO disclosures", href: "https://www.dhoottransmission.com/investor-relations/ipo-related-disclosures", kind: "Primary" },
    { label: "Bain Capital announcement: strategic investment", href: "https://www.baincapital.com/news/dhoot-transmission-group-secures-strategic-growth-investment-bain-capital-significant-minority", kind: "Primary" },
  ],
}];

export const getCompanyIpoAnalysis = (slug: string) => companyIpoAnalyses.find((item) => item.slug === slug);
