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
}, {
  slug: "molbio-diagnostics-ipo", company: "Molbio Diagnostics", market: "Mainboard", sector: "Point-of-care molecular diagnostics", status: "Issue closed; listing awaited", analysisAsOf: "13 August 2026",
  summary: "Molbio Diagnostics develops the portable Truenat molecular-testing platform and disease-specific test kits. Its installed devices can support recurring consumable sales, but the economics are concentrated in tuberculosis programmes, government and aid-agency procurement, large customers and inventory with finite shelf life.",
  business: [
    "Molbio's Truenat platform combines portable, battery-operated PCR analysers with single-use disease-specific test chips and sample-processing products. The installed device base can create repeat consumable demand as tests are run.",
    "As of March 2025, the issuer reported molecular tests for 30 diseases through 42 assays, including tuberculosis, COVID-19, HIV, hepatitis and HPV. Truenat's TB application has received WHO recognition for defined diagnostic uses.",
    "The group also includes R&D and radiology activities through subsidiaries. This broadens the technology portfolio but adds acquisition, product-development, regulatory and capital-allocation complexity.",
  ],
  issueNote: "Final offer materials indicate a ₹939.70 crore issue at ₹768–₹807, comprising about ₹200 crore fresh issue and ₹739.70 crore OFS. The August 2025 DRHP originally described the OFS as up to 1.2556 crore shares; final RHP and allotment notices should control exact share counts.",
  issue: { open: "10 August 2026", close: "12 August 2026", listing: "Expected 17 August 2026", priceBand: "₹768–₹807", lotSize: 18, totalCr: 939.7, freshCr: 200, ofsCr: 739.7, faceValue: "₹1" },
  useOfProceeds: [
    { purpose: "R&D facility, Centre of Excellence and connected office space", amount: "Up to ₹99.37 crore" },
    { purpose: "Plant, machinery and equipment for Goa and Visakhapatnam units", amount: "Up to ₹73.60 crore" },
    { purpose: "General corporate purposes", amount: "Balance of net fresh proceeds" },
    { purpose: "Offer for sale", amount: "Approximately ₹739.70 crore to selling shareholders" },
  ],
  financials: [
    { year: "FY23", revenueCr: 332.46, ebitdaCr: 48.11, patCr: -3.45, netWorthCr: 706.04, borrowingsCr: 108.44, assetsCr: 1461.56 },
    { year: "FY24", revenueCr: 836.56, ebitdaCr: 185.09, patCr: 83.54, netWorthCr: 807.94, borrowingsCr: 174.58, assetsCr: 1221.06 },
    { year: "FY25", revenueCr: 1020.42, ebitdaCr: 256.64, patCr: 138.58, netWorthCr: 952.95, borrowingsCr: 123.16, assetsCr: 1034.21 },
  ],
  metrics: [
    { label: "FY23–FY25 revenue CAGR", value: "75.2%", context: "Growth is from a low FY23 base and includes public-health procurement variability." },
    { label: "FY25 EBITDA margin", value: "25.2%", context: "Derived from DRHP EBITDA and revenue; R&D capitalization and subsidiary mix require review." },
    { label: "FY25 PAT margin", value: "13.6%", context: "Improved from a small loss in FY23." },
    { label: "FY25 government/aid exposure", value: "87.8%", context: "Share of finished-goods sales disclosed in the DRHP risk factors." },
  ],
  strengths: [
    "The device-plus-consumables architecture can create repeat kit revenue after analyser deployment.",
    "Revenue rose from ₹332.46 crore in FY23 to ₹1,020.42 crore in FY25, with a swing from loss to ₹138.58 crore PAT.",
    "The portable platform addresses decentralized testing where laboratory infrastructure and reliable power are limited.",
    "Exports increased to ₹197.14 crore in FY25, providing an avenue to diversify beyond Indian procurement over time.",
    "Fresh proceeds fund R&D infrastructure and manufacturing equipment rather than debt repayment.",
  ],
  concerns: [
    "Government and international aid agencies accounted for 87.83% of FY25 finished-goods sales, exposing revenue to tenders, budgets, programme changes and payment timing.",
    "TB test kits represented 69.11% of FY25 finished-goods sales; alternative testing protocols or procurement changes could affect the core franchise.",
    "The top ten customers contributed 83.62% of FY25 finished-goods sales, creating significant counterparty concentration.",
    "FY25 trade receivables were ₹271.66 crore and the average credit cycle was 125 days. Government collection delays can weaken cash conversion.",
    "Inventory was ₹435.91 crore at March 2025 and many kits have limited shelf life, increasing forecasting, obsolescence and write-off risk.",
    "Auditor reporting on internal financial controls included a disclaimer of opinion in FY23 and FY24; remediation and sustained FY25 controls warrant monitoring.",
    "The OFS is almost four-fifths of the offer, so most proceeds provide liquidity to existing shareholders rather than capital to the company.",
  ],
  monitor: [
    "Revenue diversification outside TB and outside government or aid-funded programmes.",
    "Receivable days, operating cash flow and overdue government balances.",
    "Inventory ageing, expiry provisions, write-offs and kit demand forecasting.",
    "R&D spending, capitalization policy, regulatory approvals and commercial uptake of new assays.",
    "Export registrations and recurring consumable revenue per installed Truenat device.",
    "Internal-control reporting, related-party transactions and performance of acquired subsidiaries including OptraSCAN.",
  ],
  valuation: [
    "At ₹807, the issue was marketed at approximately 54.6× reported FY26 EPS of ₹14.77. That multiple should be tied to the final RHP share count and audited FY26 financials before use.",
    "Conventional diagnostics peers are imperfect comparisons because Molbio combines proprietary devices, consumables, public-health tenders, R&D and acquired medtech businesses. Revenue quality and cash conversion therefore matter alongside P/E.",
    "A durable valuation framework should normalize procurement cycles, bad-debt and inventory provisions, R&D expense versus capitalization, and maintenance investment while testing how quickly non-TB and export assays scale.",
  ],
  sources: [
    { label: "SEBI filing page: Molbio Diagnostics DRHP", href: "https://www.sebi.gov.in/filings/public-issues/aug-2025/molbio-diagnostics-limited-drhp_96343.html", kind: "Primary" },
    { label: "Molbio Diagnostics DRHP", href: "https://www.molbiodiagnostics.com/wp-content/uploads/2025/08/Molbio-Diagnostics-Limited-DRHP.pdf", kind: "Primary" },
    { label: "Molbio investor disclosures and financials", href: "https://www.molbiodiagnostics.com/investors/", kind: "Primary" },
    { label: "Molbio issuer announcement: IPO filing", href: "https://www.molbiodiagnostics.com/newsroom/molbio-diagnostics-files-for-ipo-to-raise-rs-200-cr-ofs-of-1-25-cr-shares/", kind: "Primary" },
  ],
}, {
  slug: "technocraft-ventures-ipo", company: "Technocraft Ventures", market: "Mainboard", sector: "Water, wastewater and public-infrastructure EPC", status: "Issue closed; listing awaited", analysisAsOf: "13 August 2026",
  summary: "Technocraft Ventures executes government-led water, sewerage, roads and electrical EPC projects, often with operations-and-maintenance obligations. Revenue and margins expanded through FY25, but the model remains dependent on tender wins, project execution, government collections, joint ventures and a long working-capital cycle.",
  business: [
    "Technocraft provides engineering, procurement and construction services for sewage-treatment plants, sewer networks, water-supply systems, roads, electrical works and micro-tunnelling, with selected long-term operations and maintenance contracts.",
    "Projects are primarily won through competitive government tenders. Scale depends on bid qualification, bank guarantees, working-capital funding, site availability, approvals, subcontractor execution and timely certification of bills.",
    "The June 2025 order book was disclosed at approximately ₹685.83 crore after an addendum update, including projects executed through joint ventures. Earlier references to a larger order book should not be mixed with the updated figure.",
  ],
  issueNote: "The final offer comprised 95.05 lakh fresh shares and 23.76 lakh OFS shares at ₹200–₹212. At the upper band this equates to approximately ₹201.51 crore fresh issue, ₹50.37 crore OFS and ₹251.88 crore total.",
  issue: { open: "7 August 2026", close: "11 August 2026", listing: "Expected 14 August 2026", priceBand: "₹200–₹212", lotSize: 70, totalCr: 251.88, freshCr: 201.51, ofsCr: 50.37, faceValue: "₹10" },
  useOfProceeds: [
    { purpose: "Funding working-capital requirements", amount: "₹138 crore" },
    { purpose: "General corporate purposes", amount: "Balance of net fresh proceeds" },
    { purpose: "Offer for sale by Kartikey Constructions", amount: "Approximately ₹50.37 crore at the upper band" },
  ],
  financials: [
    { year: "FY23", revenueCr: 178.69, ebitdaCr: 21.88, patCr: 10.81, netWorthCr: 72.73, borrowingsCr: 50.8, assetsCr: 183.49 },
    { year: "FY24", revenueCr: 226.1, ebitdaCr: 33.83, patCr: 19.05, netWorthCr: 91.78, borrowingsCr: 80.11, assetsCr: 258.05 },
    { year: "FY25", revenueCr: 279.56, ebitdaCr: 48.19, patCr: 28.2, netWorthCr: 119.98, borrowingsCr: 88.04, assetsCr: 269.74 },
  ],
  metrics: [
    { label: "FY23–FY25 revenue CAGR", value: "25.1%", context: "Derived from restated revenue from operations." },
    { label: "FY25 EBITDA margin", value: "17.2%", context: "Up from 12.2% in FY23 as reported execution scaled." },
    { label: "FY25 operating cash flow", value: "₹21.68 Cr", context: "Below PAT of ₹28.20 crore and volatile across the three-year period." },
    { label: "Upper-band FY25 P/E", value: "22.6×", context: "Derived from ₹212 and restated FY25 EPS of ₹9.37." },
  ],
  strengths: [
    "Revenue increased from ₹178.69 crore in FY23 to ₹279.56 crore in FY25, while EBITDA and PAT grew faster.",
    "Capabilities across civil, mechanical and electrical works allow the company to bid for integrated water and sewerage projects.",
    "An O&M component can extend customer relationships after construction, although its share and margin should be tracked separately.",
    "The ₹138 crore working-capital allocation directly addresses the funding constraint visible in the operating cycle.",
  ],
  concerns: [
    "Government-funded projects dominate the order book, creating tender, budget, approval, land-access, certification and collection risks.",
    "The rating rationale reported a 190-day operating cycle in FY25, with 104 collection days and 114 inventory days. Growth can consume significant cash.",
    "Operating cash flow was only ₹1.40 crore in FY24 before recovering to ₹21.68 crore in FY25, illustrating working-capital volatility.",
    "Joint-venture projects introduce reliance on partners, shared control, guarantees and potentially different economics from wholly executed work.",
    "Order-book size is not revenue: cancellations, scope changes, delays, cost inflation and liquidated damages can reduce conversion and margins.",
    "The company disclosed missing or untraceable historical corporate records and certain unfiled RoC forms, which is a governance diligence item.",
    "Promoters and related entities have operational and financial linkages; post-listing related-party transactions should be monitored.",
  ],
  monitor: [
    "Quarterly order inflow, executable order book and conversion rather than headline order-book value alone.",
    "Receivable ageing, unbilled revenue, retention money, inventory and operating cash flow.",
    "Gross margin by project and provisions for cost overruns, claims or liquidated damages.",
    "Debt, bank-guarantee utilization and finance costs after the working-capital infusion.",
    "JV project economics, related-party transactions and contingent liabilities.",
    "O&M revenue share and cash profitability after EPC projects enter their service phase.",
  ],
  valuation: [
    "At ₹212, the offer implies approximately 22.6× FY25 EPS of ₹9.37 and about 5.3× FY25 NAV of ₹39.86. Both are historical measures before fresh-issue dilution and deployment.",
    "The RHP peer set includes EMS, VA Tech Wabag, Enviro Infra Engineers and Denta Water and Infra Solutions. Differences in scale, order mix, geographic reach, technology, leverage and cash conversion limit simple P/E comparisons.",
    "The valuation case ultimately depends on converting the order book into cash-backed earnings without sacrificing bidding discipline. Receivable ageing and operating cash flow are therefore as important as reported PAT growth.",
  ],
  sources: [
    { label: "SEBI filing page: Technocraft Ventures RHP", href: "https://www.sebi.gov.in/filings/public-issues/jul-2026/technocraft-ventures-limited-rhp_103278.html", kind: "Primary" },
    { label: "SEBI filing page: Technocraft Ventures DRHP", href: "https://www.sebi.gov.in/filings/public-issues/aug-2025/technocraft-ventures-limited-drhp_96055.html", kind: "Primary" },
    { label: "SEBI addendum to the DRHP", href: "https://www.sebi.gov.in/sebi_data/attachdocs/oct-2025/1760589175985.pdf", kind: "Primary" },
    { label: "Infomerics rating rationale, March 2026", href: "https://infomericstorage.blob.core.windows.net/uploads/pr_Technocraft_Ventures_19mar26_1e225b0d2e.pdf", kind: "Secondary" },
  ],
}, {
  slug: "milky-mist-dairy-food-ipo", company: "Milky Mist Dairy Food", market: "Mainboard", sector: "Value-added dairy products", status: "Issue closed; allotment awaited", analysisAsOf: "13 August 2026",
  summary: "Milky Mist is a value-added dairy company built around paneer, curd, cheese, ice cream and other packaged products rather than commodity liquid milk. Its strong revenue growth is offset by thin net margins, heavy borrowings and substantial concentration in Tamil Nadu milk procurement, one core manufacturing campus and southern markets.",
  business: [
    "Milky Mist procures raw milk and converts it into value-added products including paneer, curd, cheese, butter, ghee, ice cream, cream and traditional dairy foods. Avoiding liquid-milk distribution supports a differentiated mix but does not remove raw-milk price and seasonality risk.",
    "The company operates an integrated manufacturing campus at Perundurai, Tamil Nadu, supported by a cold-chain fleet, distributors, retail refrigeration equipment and direct farmer procurement.",
    "In FY25 it procured 307.20 million litres of milk, with 97.68% sourced in Tamil Nadu. The issuer reported a network of more than 67,000 farmers, but there are generally no long-term supply commitments with individual farmers.",
  ],
  issueNote: "The original DRHP proposed ₹2,035 crore, including ₹1,785 crore fresh issue and ₹250 crore OFS. A ₹482 crore pre-IPO placement subsequently reduced the final offer to approximately ₹1,553 crore: ₹1,428 crore fresh issue and ₹125 crore OFS.",
  issue: { open: "11 August 2026", close: "13 August 2026", listing: "Expected 18 August 2026", priceBand: "₹133–₹140", lotSize: 107, totalCr: 1553, freshCr: 1428, ofsCr: 125, faceValue: "₹2" },
  useOfProceeds: [
    { purpose: "Repayment or prepayment of borrowings", amount: "Final RHP allocation: approximately ₹496.86 crore" },
    { purpose: "Expansion and modernisation of the Perundurai facility", amount: "Final RHP allocation: approximately ₹469.24 crore" },
    { purpose: "Deployment of visi-coolers, ice-cream freezers and chocolate coolers", amount: "Amount reduced/recast from the original DRHP; verify final prospectus schedule" },
    { purpose: "General corporate purposes", amount: "Balance of net fresh proceeds" },
    { purpose: "Offer for sale", amount: "₹125 crore to promoter selling shareholders" },
  ],
  financials: [
    { year: "FY23", revenueCr: 1394.18, ebitdaCr: 201.39, patCr: 27.23, netWorthCr: 177.37, borrowingsCr: 798.06, assetsCr: 1289.42 },
    { year: "FY24", revenueCr: 1821.61, ebitdaCr: 222.33, patCr: 19.44, netWorthCr: 197.05, borrowingsCr: 1036.72, assetsCr: 1606.26 },
    { year: "FY25", revenueCr: 2349.5, ebitdaCr: 310.35, patCr: 46.07, netWorthCr: 242.77, borrowingsCr: 1376.38, assetsCr: 2150.59 },
  ],
  metrics: [
    { label: "FY23–FY25 revenue CAGR", value: "29.8%", context: "Restated revenue from operations grew consistently across the period." },
    { label: "FY25 EBITDA margin", value: "13.2%", context: "Recovered from 12.2% in FY24 but remained below FY23's 14.4%." },
    { label: "FY25 PAT margin", value: "2.0%", context: "Finance costs and depreciation absorb much of operating profit." },
    { label: "FY25 debt/equity", value: "5.7×", context: "Derived from total borrowings and DRHP-defined net worth; leverage is the central balance-sheet risk." },
  ],
  strengths: [
    "Revenue grew nearly 30% annually from FY23 to FY25, supported by a broad value-added product portfolio.",
    "Integrated milk procurement, processing, cold-chain logistics and retail equipment give the company greater control over product handling.",
    "FY25 PAT recovered to ₹46.07 crore as procurement prices eased and scale improved.",
    "A material portion of the fresh issue is allocated to debt reduction, while capex supports capacity and automation at Perundurai.",
  ],
  concerns: [
    "Tamil Nadu supplied 97.68% of FY25 raw milk, creating weather, cattle-health, fodder, competition and regional-policy exposure.",
    "Core production is concentrated at Perundurai. An accident, contamination event, utility interruption or regulatory shutdown could affect multiple categories.",
    "Southern India generated roughly 71% of FY25 revenue, so national expansion requires new procurement, cold-chain and distribution capabilities.",
    "Borrowings rose from ₹798.06 crore in FY23 to ₹1,376.38 crore in FY25; FY25 finance cost was approximately ₹104.7 crore.",
    "The 2% FY25 net margin leaves limited room for adverse milk prices, discounting, freight, spoilage or slower plant utilisation.",
    "Food safety, cold-chain integrity, product recalls and shelf-life management can create financial and reputational risk.",
  ],
  monitor: [
    "Actual debt repayment, interest savings and post-issue leverage.", "Perundurai expansion cost, commissioning schedule and utilisation by product category.",
    "Milk procurement price versus selling-price realization and gross margin.", "Non-south revenue, distributor productivity and cold-chain economics.",
    "Operating cash flow after capex, inventory days and receivable days.", "Quality incidents, product recalls, farmer retention and geographic diversification of milk sourcing.",
  ],
  valuation: [
    "The upper-band valuation should be calculated from the final RHP FY26 EPS and post-offer share count. Published estimates range widely because the pre-IPO placement changed the capital structure; this page therefore does not present an unverified final P/E.",
    "The DRHP peer set spans dairy businesses and diversified packaged-food companies including Dodla Dairy, Hatsun Agro, Parag Milk Foods, Britannia and Nestlé India. Their brand strength, margins, leverage and product mix are not directly comparable.",
    "The critical valuation variables are normalized dairy spreads, post-deleveraging finance cost, incremental returns on the expanded plant and the cash cost of building a national cold chain.",
  ],
  sources: [
    { label: "SEBI filing page: Milky Mist DRHP", href: "https://www.sebi.gov.in/filings/public-issues/jul-2025/milky-mist-dairy-food-limited_95576.html", kind: "Primary" },
    { label: "Milky Mist DRHP hosted by SEBI", href: "https://www.sebi.gov.in/sebi_data/attachdocs/jun-2026/1780558204915_1257.pdf", kind: "Primary" },
    { label: "Milky Mist offer-document page", href: "https://www.milkymist.com/drhp-english", kind: "Primary" },
    { label: "Milky Mist financial information", href: "https://www.milkymist.com/financial-information", kind: "Primary" },
  ],
}, {
  slug: "behari-lal-engineering-ipo", company: "Behari Lal Engineering", market: "Mainboard", sector: "Specialty steel, metal rolls and engineering castings", status: "Issue open", analysisAsOf: "13 August 2026",
  summary: "Behari Lal Engineering manufactures metal rolls, engineering castings, alloy-steel products and forged components. FY23–FY25 filings show margin expansion, faster profit growth and a sharp reduction in debt, while steel-cycle exposure, working-capital needs, customer qualification and the sustainability of higher-value product margins remain key questions.",
  business: [
    "The company manufactures metal rolls used in rolling mills, engineering castings, alloy-steel rounds and flats, forging ingots, shafts and blocks. Its customers operate across steel and other capital-intensive industries.",
    "The product strategy has shifted toward higher-value metal rolls, tool steel, die steel and customized castings. This supported margins through FY25, but requires metallurgical quality control, customer approvals and consistent utilization.",
    "Operations are centered in Punjab and are exposed to electricity, scrap and alloy input costs. Selling prices and raw-material pass-through can move with the steel cycle and customer contracts.",
  ],
  issueNote: "Final offer materials indicate a ₹302 crore issue at ₹271–₹285, comprising ₹93 crore fresh issue and an OFS of 73.20 lakh shares worth approximately ₹208.62 crore at the upper band. Exact final proceeds depend on the discovered offer price.",
  issue: { open: "12 August 2026", close: "14 August 2026", listing: "Expected 19 August 2026", priceBand: "₹271–₹285", lotSize: 52, totalCr: 301.62, freshCr: 93, ofsCr: 208.62, faceValue: "₹10" },
  useOfProceeds: [
    { purpose: "Repayment or prepayment of identified borrowings", amount: "Final allocation to be verified from the RHP" },
    { purpose: "Funding working-capital requirements", amount: "Final allocation to be verified from the RHP" },
    { purpose: "General corporate purposes", amount: "Balance of net fresh proceeds" },
    { purpose: "Offer for sale", amount: "73.20 lakh shares; proceeds go to selling shareholders" },
  ],
  financials: [
    { year: "FY23", revenueCr: 462.93, ebitdaCr: 49.34, patCr: 28.8, netWorthCr: 119.59, borrowingsCr: 64.09, assetsCr: 203.24 },
    { year: "FY24", revenueCr: 446.08, ebitdaCr: 60.99, patCr: 35.79, netWorthCr: 193.94, borrowingsCr: 41.21, assetsCr: 262.08 },
    { year: "FY25", revenueCr: 507.91, ebitdaCr: 81.31, patCr: 52.95, netWorthCr: 241.62, borrowingsCr: 7.58, assetsCr: 295.98 },
  ],
  metrics: [
    { label: "FY25 EBITDA margin", value: "16.0%", context: "Up from 10.7% in FY23 as higher-value products contributed more." },
    { label: "FY25 PAT margin", value: "10.4%", context: "PAT grew faster than revenue across the three-year period." },
    { label: "FY25 debt/equity", value: "0.03×", context: "Borrowings fell to ₹7.58 crore from ₹64.09 crore in FY23." },
    { label: "FY23–FY25 PAT CAGR", value: "35.6%", context: "Profit growth was driven by margin expansion rather than continuous revenue growth." },
  ],
  strengths: [
    "EBITDA margin expanded from 10.7% in FY23 to 16.0% in FY25 as the mix shifted toward higher-value products.",
    "PAT increased from ₹28.80 crore to ₹52.95 crore even though FY24 revenue declined, indicating improved unit economics over the period.",
    "Borrowings reduced sharply and FY25 liquidity was supported by low bank-limit utilization, according to CRISIL.",
    "Three decades of promoter experience and established steel-industry relationships support customer qualification and procurement.",
  ],
  concerns: [
    "Steel and foundry demand is cyclical and linked to industrial capex, mill utilization and commodity prices.",
    "The FY25 margin step-up may normalize if high-value product mix, realizations, energy costs or plant utilization weaken.",
    "Gross current assets remained around 100–120 days, driven partly by 45–60 inventory days. Growth can rebuild working-capital borrowing.",
    "The company remains modest in scale relative to several listed engineering and casting peers.",
    "Product defects, rejection, metallurgical inconsistency or delayed customer approvals can create warranty, rework and reputation costs.",
    "Most of the public offer is an OFS, so only ₹93 crore of the approximately ₹302 crore issue is primary capital.",
  ],
  monitor: [
    "Revenue and EBITDA margin by product category, particularly metal rolls and specialty alloy steel.",
    "Inventory, receivable days and operating cash conversion as volumes increase.",
    "Energy, scrap and alloy-input costs and the timing of price pass-through.",
    "Capacity utilization, maintenance capex and customer additions outside the existing base.",
    "Post-issue promoter holding, related-party transactions and final use of the fresh proceeds.",
  ],
  valuation: [
    "A final P/E should be computed using the RHP's post-offer share count and applicable EPS. The historical FY25 earnings base is ₹52.95 crore; this page avoids an inferred multiple until the final denominator is tied out.",
    "The DRHP references AIA Engineering, RHI Magnesita India and Steelcast. These businesses differ in scale, export exposure, product specialization, margins and capital intensity, limiting a simple peer-average comparison.",
    "The valuation question is whether FY25's 16% EBITDA margin and low leverage represent a durable product-mix shift or a favorable point in the steel and input-cost cycle.",
  ],
  sources: [
    { label: "SEBI corrigendum to Behari Lal Engineering DRHP", href: "https://www.sebi.gov.in/filings/public-issues/jul-2026/behari-lal-engineering-limited-corrigendum-to-drhp_102871.html", kind: "Primary" },
    { label: "Behari Lal Engineering IPO disclosures", href: "https://www.beharilalengineering.com/ipo.php", kind: "Primary" },
    { label: "Behari Lal Engineering DRHP", href: "https://www.systematixgroup.in/download/Beharilal_Engg_DRHP.pdf", kind: "Primary" },
    { label: "CRISIL Ratings rationale, December 2025", href: "https://www.crisilratings.com/mnt/winshare/Ratings/RatingList/RatingDocs/BehariLalEngineeringLimited_December%2031_%202025_RR_373525.html", kind: "Secondary" },
  ],
}];

export const getCompanyIpoAnalysis = (slug: string) => companyIpoAnalyses.find((item) => item.slug === slug);
