export type IpoCalendarEntry = {
  slug?: string;
  company: string;
  market: "Mainboard" | "SME";
  opens: string;
  closes: string;
  issueSizeCr: number | null;
  priceBand: string | null;
  exchange?: "BSE SME" | "NSE SME";
};

export type IpoWeek = {
  id: 1 | 2 | 3 | 4;
  label: string;
  range: string;
  entries: IpoCalendarEntry[];
};

// Source snapshot: Chittorgarh Mainboard and SME IPO calendars, accessed
// 16 August 2026. Entries are grouped by opening date. A null value means the
// source had not published the final figure; it must never be rendered as zero.
const august2026Ipos: IpoCalendarEntry[] = [
  { company: "Anawil Wire & Engineering", slug: "anawil-wire-engineering-ipo", market: "SME", opens: "2026-08-03", closes: "2026-08-05", issueSizeCr: 177.81, priceBand: "₹257–₹270", exchange: "NSE SME" },
  { company: "Aegeus Technologies", slug: "aegeus-technologies-ipo", market: "SME", opens: "2026-08-04", closes: "2026-08-06", issueSizeCr: 23.71, priceBand: "₹100–₹105", exchange: "BSE SME" },
  { company: "Ardee Industries", slug: "ardee-industries-ipo", market: "Mainboard", opens: "2026-08-05", closes: "2026-08-07", issueSizeCr: 425.87, priceBand: "₹50–₹53" },
  { company: "LAPL Automotive", slug: "lapl-automotive-ipo", market: "SME", opens: "2026-08-06", closes: "2026-08-10", issueSizeCr: 32.40, priceBand: "₹88–₹94", exchange: "BSE SME" },
  { company: "LEAP India", slug: "leap-india-ipo", market: "Mainboard", opens: "2026-08-07", closes: "2026-08-11", issueSizeCr: 2480, priceBand: "₹151–₹159" },
  { company: "Technocraft Ventures", slug: "technocraft-ventures-ipo", market: "Mainboard", opens: "2026-08-07", closes: "2026-08-11", issueSizeCr: 251.88, priceBand: "₹200–₹212" },
  { company: "Optimystix Entertainment India", slug: "optimystix-entertainment-india-ipo", market: "SME", opens: "2026-08-07", closes: "2026-08-11", issueSizeCr: 108.50, priceBand: "₹166–₹175", exchange: "NSE SME" },

  { company: "Dhoot Transmission", slug: "dhoot-transmission-ipo", market: "Mainboard", opens: "2026-08-10", closes: "2026-08-12", issueSizeCr: 3066.89, priceBand: "₹829–₹871" },
  { company: "Molbio Diagnostics", slug: "molbio-diagnostics-ipo", market: "Mainboard", opens: "2026-08-10", closes: "2026-08-12", issueSizeCr: 939.7, priceBand: "₹768–₹807" },
  { company: "Milky Mist Dairy Food", slug: "milky-mist-dairy-food-ipo", market: "Mainboard", opens: "2026-08-11", closes: "2026-08-13", issueSizeCr: 1553, priceBand: "₹133–₹140" },
  { company: "Sham Foam", slug: "sham-foam-ipo", market: "SME", opens: "2026-08-11", closes: "2026-08-13", issueSizeCr: 40.48, priceBand: "₹130", exchange: "BSE SME" },
  { company: "Fascinate Textiles", slug: "fascinate-textiles-ipo", market: "SME", opens: "2026-08-11", closes: "2026-08-19", issueSizeCr: 66.98, priceBand: "₹148–₹156", exchange: "NSE SME" },
  { company: "Shiprocket", slug: "shiprocket-ipo", market: "Mainboard", opens: "2026-08-12", closes: "2026-08-14", issueSizeCr: 1617.48, priceBand: "₹92–₹97" },
  { company: "Behari Lal Engineering", slug: "behari-lal-engineering-ipo", market: "Mainboard", opens: "2026-08-12", closes: "2026-08-14", issueSizeCr: 301.62, priceBand: "₹271–₹285" },
  { company: "Q&T Foods", slug: "qt-foods-ipo", market: "SME", opens: "2026-08-12", closes: "2026-08-14", issueSizeCr: 26.25, priceBand: "₹115", exchange: "BSE SME" },
  { company: "Pramodini Medicare", slug: "pramodini-medicare-ipo", market: "SME", opens: "2026-08-12", closes: "2026-08-14", issueSizeCr: 69.04, priceBand: "₹110–₹118", exchange: "NSE SME" },
  { company: "Credent Connect N Care", slug: "credent-connect-n-care-ipo", market: "SME", opens: "2026-08-13", closes: "2026-08-17", issueSizeCr: 93.90, priceBand: "₹179–₹189", exchange: "NSE SME" },
  { company: "Skytech Infinite Platform", slug: "skytech-infinite-platform-ipo", market: "SME", opens: "2026-08-14", closes: "2026-08-18", issueSizeCr: 22.68, priceBand: "₹73–₹77", exchange: "NSE SME" },
  { company: "ENS Enterprises", slug: "ens-enterprises-ipo", market: "SME", opens: "2026-08-14", closes: "2026-08-18", issueSizeCr: 33.14, priceBand: "₹87–₹92", exchange: "BSE SME" },
  { company: "Technocrats Plasma Systems", slug: "technocrats-plasma-systems-ipo", market: "SME", opens: "2026-08-14", closes: "2026-08-18", issueSizeCr: 60.98, priceBand: "₹125–₹132", exchange: "BSE SME" },

  { company: "Lalithaa Jewellery Mart", slug: "lalithaa-jewellery-mart-ipo", market: "Mainboard", opens: "2026-08-17", closes: "2026-08-19", issueSizeCr: 1700, priceBand: "₹190–₹201" },
  { company: "Horizon Industrial Parks", slug: "horizon-industrial-parks-ipo", market: "Mainboard", opens: "2026-08-17", closes: "2026-08-19", issueSizeCr: 2600, priceBand: "₹57–₹60" },
  { company: "Shankesh Jewellers", slug: "shankesh-jewellers-ipo", market: "Mainboard", opens: "2026-08-18", closes: "2026-08-20", issueSizeCr: 367.18, priceBand: "₹88–₹93" },
  { company: "Sunshine Pictures", slug: "sunshine-pictures-ipo", market: "Mainboard", opens: "2026-08-18", closes: "2026-08-20", issueSizeCr: 282.14, priceBand: "₹342–₹360" },
  { company: "Gaja Alternative Asset Management", slug: "gaja-alternative-asset-management-ipo", market: "Mainboard", opens: "2026-08-19", closes: "2026-08-21", issueSizeCr: 550, priceBand: "₹152–₹160" },
  // Skyways Air Services removed: its March 2026 RHP launch was deferred and no August dates were verified as of 14 August 2026.
];

const weekForDate = (date: string): 1 | 2 | 3 | 4 => {
  const day = Number(date.slice(-2));
  if (day <= 7) return 1;
  if (day <= 14) return 2;
  if (day <= 21) return 3;
  return 4;
};

const weekMeta = [
  { id: 1 as const, label: "Week 1", range: "1–7 August" },
  { id: 2 as const, label: "Week 2", range: "8–14 August" },
  { id: 3 as const, label: "Week 3", range: "15–21 August" },
  { id: 4 as const, label: "Week 4", range: "22–31 August" },
];

export const august2026Weeks: IpoWeek[] = weekMeta.map((week) => ({
  ...week,
  entries: august2026Ipos.filter((entry) => weekForDate(entry.opens) === week.id),
}));

export const august2026Snapshot = {
  asOf: "16 August 2026",
  coverageCount: 25,
  verificationNotes: [
    "All 25 companies currently shown in the August calendar link to an individual analysis page.",
    "BSE's official listing notices and historical-price files now add first-day context for two BSE SME listings. Aegeus traded under scrip 544858 on 11 August, opening at ₹124.50 and closing at ₹130.70 versus its ₹105 issue price; LAPL traded under scrip 544863 on 13 August, opening at ₹135 and closing at ₹128.29 versus ₹94. Both were in the trade-for-trade segment and recorded 100% delivery in BSE's files. These dated outcomes are market context, not recommendations.",
    "NSE's official security files add first-day context for two NSE Emerge listings: Anawil opened at ₹329.65 and closed at ₹346.10 on 10 August versus its ₹270 issue price; Optimystix opened at ₹180 and closed at ₹189 on 14 August versus ₹175. The Optimystix page previously showed ₹175 as the opening price and has been corrected. Aegeus's final RHP now also supplies workforce attrition, nil contingent liabilities and the FY25 audit-trail exception.",
    "NSE's official security files now supply first-day trading context for three Mainboard listings: Ardee opened at ₹72.00 and closed at ₹67.12 on 12 August versus its ₹53 issue price; LEAP India opened at ₹165.90 and closed at ₹144.93 on 14 August versus ₹159; Technocraft Ventures opened at ₹284.00 and closed at ₹311.15 on 14 August versus ₹212. These historical listing outcomes are presented as dated market context, not recommendations.",
    "Dhoot Transmission's final RHP confirms ₹1,400 crore of fresh issue and 1,91,37,602 OFS shares, implying an approximately ₹3,066.89 crore total offer at the ₹871 final price. BSE notice 20260814-32 confirms 13 August allotment, 20,45,48,057 post-issue shares and listing from 17 August under scrip 544867 / DHOOTTRANS. Trading had not started as of 16 August, so listing-price performance remains unavailable. The analysis also covers FY26 customer concentration, employee attrition and the auditor's accounting-software audit-trail exceptions.",
    "Molbio Diagnostics' final RHP confirms a ₹200 crore fresh issue plus 91.66 lakh OFS shares, or approximately ₹939.70 crore at the ₹807 final price. BSE notice 20260814-42 confirms 13 August allotment, 11,52,39,996 post-issue shares and listing from 17 August under scrip 544866 / MOLBIO. Trading had not started as of 16 August. Its analysis quantifies ₹168.74 crore of FY26 contingent liabilities, weaker cash conversion and employee attrition; the 7 August addendum's pre-offer promoter transfer remains separately disclosed.",
    "Ardee Industries, Anawil Wire and Aegeus Technologies have been reworked against their final RHPs. The largest correction is Anawil: its ₹177.81 crore offer comprised ₹142.69 crore fresh capital and ₹35.12 crore OFS, not an all-fresh issue, and the minimum individual bid was 800 shares. Aegeus's minimum application was likewise corrected to 2,400 shares; all three pages now include prospectus cash flow, working-capital and customer-concentration evidence.",
    "Gaja Alternative Asset Management's 12 August RHP, price advertisement and BSE issue record 7895 confirm a ₹550 crore offer: ₹450 crore fresh issue, ₹100 crore OFS, ₹152–₹160 band, 93-share lot and 19–21 August bidding. ₹372 crore, or 82.7% of fresh proceeds, is allocated to sponsor commitments and the related bridge repayment across FY27–FY29; Fund IV's top ten LPs supplied 63.42% of commitments and its carry is subject to a contractual clawback in specified circumstances. The company page also separates 13.33% overall FY26 employee attrition from zero KMP and senior-management attrition and maps employee costs at 49.90% of total expenses.",
    "Skyways Air Services is not included: its March 2026 RHP launch was deferred, and no primary filing confirming an August relaunch was found.",
    "Technocrats Plasma's issuer-hosted RHP confirms 46,20,000 fresh shares and 14–18 August bidding. BSE notice 20260813-18 confirms 13,14,000 anchor shares at ₹132. The 33,06,000-share live display is post-anchor but still includes 2,31,000 market-maker shares; the residual public-investor pool is 30,75,000 shares. The page now flags ₹7.55 crore of FY26 receivables over six months, ₹26.08 crore of work-in-progress, 50.08% owned-capacity utilisation, 38.81% attrition, 93.50% top-ten supplier concentration, no business-interruption insurance, FY23 audit qualifications and pending Section 454 adjudications.",
    "Shankesh Jewellers' official 11 August price-band advertisement verifies the ₹88–₹93 band, 160-share lot, 3,94,82,000-share offer and 18–20 August bidding. The final RHP also shows 97.6% utilisation of the ₹167 crore working-capital line at 30 June, a ₹360.53 crore FY26 gap and a projected ₹401.17 crore FY27 gap after the proposed ₹158 crore debt repayment. The deeper operating review adds 17.24% job-worker attrition, six unsigned job-worker agreements, ₹4.06 crore of contingent liabilities and bullion-hedging margin balances.",
    "Skytech Infinite Platform's official price advertisement confirms a ₹73–₹77 band and a 3,200-share minimum bid, equal to ₹2,33,600–₹2,46,400. NSE's 16 August feed shows the issue active; its final RHP allocates up to ₹16.81 crore to working capital, records 98.8% utilisation of the sanctioned fund-based line at FY26 and assumes debtor days improve from 196 to 110. Governance checks now include corrected PAS-3 allotment filings under adjudication and historical MSME-return delays of up to 997 days.",
    "ENS Enterprises remains live in BSE's 16 August feed at ₹87–₹92. BSE notice 20260813-19 confirms 10,26,000 anchor shares at ₹92, worth ₹9.44 crore. The 25,76,400-share live display is post-anchor but still includes 1,81,200 market-maker shares; the residual public-investor pool is 23,95,200 shares. The RHP records nil subscription revenue in FY24–FY26, proposes 65 hires against a 100-person June workforce, says the accounting audit trail was disabled throughout FY24–FY26, discloses ₹63.54 lakh of TDS payable and ₹1.20 crore of FY26 director/family remuneration, and prints a 1,519.74 contingent-liability figure without identifying its unit.",
    "Fascinate Textiles remained active through 19 August in NSE's 16 August current-issue feed, superseding the RHP's original 13 August close. The feed showed 23,04,800 bids against 42,93,600 displayed gross-offer shares, or 0.54×. IPO funding covers 36.5% of the projected ₹68.95 crore FY27 working-capital requirement, while only ₹5 lakh of the ₹12.50 crore additional-facility budget had been deployed. The page now adds the 647-day ADT-1 delay, director-classification rectification, historical GST/EPF delays and pending intellectual-property protection.",
    "Pramodini Medicare's issuer-hosted RHP confirms ₹110–₹118, a 1,200-share market lot, a two-lot or 2,400-share minimum application and a proposed 19 August listing. Final price, allotment and listing remain pending; the network reached 16 centres across 14 cities, 100% of the ₹45.15 crore offer-funded equipment remained unordered, and FY26 contingent guarantees included ₹4.95 crore for group companies plus ₹0.67 crore of bank guarantees.",
    "ENS Enterprises' final RHP confirms a ₹87–₹92 book-built issue, a 2,400-share minimum bid and proposed 21 August trading; the earlier ₹92 fixed-price label was corrected.",
    "Credent Connect N Care's 8 August RHP confirms 49,68,000 fresh shares, including a 2,52,000-share market-maker reservation. The full offer at the cap is approximately ₹93.90 crore; the RHP directs ₹63.80 crore to parent and subsidiary working capital, while their combined gap is projected to rise from ₹51.89 crore at FY26 to ₹124.65 crore by FY28. NSE's 16 August feed shows the issue active and the two-lot minimum requires ₹2,26,800 at the cap. The analysis now separates pre-acquisition Alltrak related-party revenue, maps 81.76% top-ten customer and 46.97% top-ten supplier concentration, and adds Section 73/185 compounding matters, pending state registrations, promoter-guarantee dependence, FY24 control remediation and 19.16% parent attrition.",
    "Lalithaa Jewellery Mart's final RHP and price advertisement confirm a ₹1,200 crore fresh issue, ₹500 crore OFS, ₹190–₹201 band and 74-share lot. BSE's 14 August notice confirms a ₹508.20 crore anchor allocation at ₹201; NSE and BSE show 6,27,61,403 shares in the post-anchor public bid pool. FY26 inventory was 89.7% of assets, while the JILABA sales-and-inventory audit trail did not operate throughout FY26; the page also adds 197 delayed FY26 statutory payments and untraceable historical corporate records.",
    "Milky Mist Dairy Food's final prospectus dated 13 August fixes the offer price at ₹140 and confirms a ₹1,428 crore fresh issue plus ₹125 crore promoter OFS. Its analysis now includes FY26 milk sourcing, the 59.05% paneer-cheese-curd revenue share, 48 working-capital days, ₹229.01 crore of contingent liabilities, partial capex ordering and the offer document's PPE, inventory and internal-audit observations.",
    "Shiprocket's final prospectus dated 14 August fixes the offer price at ₹97, confirms a ₹885.50 crore fresh issue plus ₹731.98 crore OFS and corrects the face value to ₹10. Its page now separates statutory from adjusted EBITDA and adds active merchants, transactions, power-merchant ARPU, 84.50% top-five courier concentration, historical acquisition impairments and FY26 audit-trail observations.",
    "Behari Lal Engineering's final RHP replaces draft-era figures: the ₹93 crore fresh issue allocates ₹63.04 crore to equipment and solar, ₹0.57 crore to debt repayment and the balance to general purposes. FY26 revenue, EBITDA and PAT were ₹534.03 crore, ₹101.33 crore and ₹64.64 crore, but operating cash flow was only ₹27.54 crore and working-capital days rose to 132; inventory days rose to 57 from 34 in FY24, top-ten suppliers represented 38.39% of expenses, contingent liabilities were ₹3.56 crore and the entire expansion budget was undeployed at the RHP date.",
    "Horizon Industrial Parks' final RHP and price advertisement confirm an all-fresh ₹2,600 crore issue, ₹57–₹60 band, 250-share lot and ₹2,250 crore debt-repayment object. BSE's 14 August notice confirms a ₹1,167.75 crore anchor allocation at ₹60; NSE and BSE show a 25,13,56,273-share post-anchor public pool. Post-repayment net external debt remains about 3.28× FY26 EBITDA; the page now adds FY25 audit-trail, backup and fund-use observations across subsidiaries, ₹1,264.05 crore of capital commitments and ₹143.35 crore of disclosed subsidiary litigation.",
    "Shankesh Jewellers' 10 August RHP and official 11 August price-band advertisement confirm 2,94,82,000 fresh shares, 1,00,00,000 OFS shares, a ₹88–₹93 band, 160-share lot and 18–20 August bidding. BSE issue record 7889 currently displays a one-share lot and minimum bid, conflicting with the official advertisement and appearing to be a pre-open placeholder; the company page keeps the 160-share marketed lot and flags the exchange field for recheck. The operating analysis now also tracks job-worker contracts, design-IP protection and bullion-hedge collateral.",
    "Sunshine Pictures' final RHP, official price advertisement and BSE issue record 7892 confirm 48,00,034 fresh shares, 30,37,157 OFS shares, a ₹342–₹360 band and 41-share lot. Beyond the ₹320.49 crore FY27 working-capital requirement, the page now maps three active and eight pipeline projects, ₹31.73 crore of tax-related contingent liabilities, historical corporate-filing lapses and incomplete trademark registrations, and flags that the RHP describes Samuk as a sole production in the slate section but as an approved co-production under the studio first-look arrangement in its risk factors.",
    "Q&T Foods' final prospectus corrects the issue size to ₹26.2476 crore, confirms ₹22.59 crore estimated net proceeds and a 2,400-share minimum application. BSE had not published final allotment or listing approval through 16 August; the analysis now adds 91.33% FY26 utilisation, a roughly 101-day cash cycle, 25.01% top-ten customer and 36.07% top-ten supplier concentration, statutory-payment delays, ₹20.61 lakh of contingent litigation and the pending FSSAI address amendment.",
    "LAPL Automotive's BSE notices confirm a 9,76,800-share anchor allocation at ₹94, 1,25,36,218 post-issue shares, ₹94 final price and listing from 13 August under scrip 544863. Its page now distinguishes the ₹32.40 crore gross offer, post-anchor pool, 2,400-share minimum bid and 1,200-share trading lot.",
    "Optimystix Entertainment's final RHP confirms 50,00,000 fresh shares, 12,00,000 OFS shares and a 1,600-share minimum bid; NSE's 14 August bhavdata confirms first trading under OPTIMYSTIX, opening at ₹175 and closing at ₹189. Its page now uses audited FY24–FY26 statements and highlights negative FY26 operating cash flow.",
    "Sham Foam's 10 August final prospectus and BSE issue record 7881 confirm a 31,14,000-share fresh issue at ₹130, including a 1,56,000-share market-maker reservation, a 2,000-share minimum application and a proposed 18 August listing. BSE had not published final allotment or listing approval through 16 August; no machinery orders or definitive vendor agreements were in place for the ₹14.72 crore capex programme, which targets 10,000 tonnes of available cutting capacity rather than a change in the 15,000-tonne headline installed capacity.",
    "Fascinate Textiles' RHP confirms 34,57,600 fresh shares, an 8,36,000-share OFS and a 1,600-share minimum bid; the calendar now shows the approximately ₹66.98 crore full offer at the cap rather than a floor-price estimate.",
    "Skytech Infinite Platform's final RHP confirms 29,45,600 fresh shares, including a 1,48,800-share market-maker reservation, and the lead manager's price advertisement confirms ₹77.",
  ],
  sourceLinks: [
    { label: "Chittorgarh Mainboard IPO Calendar", href: "https://www.chittorgarh.com/calendar/ipo-calendar/1/?month=8&year=2026" },
    { label: "Chittorgarh SME IPO Calendar", href: "https://www.chittorgarh.com/calendar/sme-ipo-calendar/2/?month=8&year=2026" },
    { label: "NSE Issue Information", href: "https://www.nseindia.com/market-data/all-upcoming-issues-ipo" },
    { label: "BSE Public Issue Information", href: "https://www.bseindia.com/markets/PublicIssues/IPOIssues_new.aspx" },
  ],
};
