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
  { company: "Technocrats Plasma Systems", slug: "technocrats-plasma-systems-ipo", market: "SME", opens: "2026-08-14", closes: "2026-08-18", issueSizeCr: 60.98, priceBand: "₹125–₹132*", exchange: "BSE SME" },

  { company: "Lalithaa Jewellery Mart", slug: "lalithaa-jewellery-mart-ipo", market: "Mainboard", opens: "2026-08-17", closes: "2026-08-19", issueSizeCr: 1700, priceBand: "₹190–₹201" },
  { company: "Horizon Industrial Parks", slug: "horizon-industrial-parks-ipo", market: "Mainboard", opens: "2026-08-17", closes: "2026-08-19", issueSizeCr: 2600, priceBand: "₹57–₹60" },
  { company: "Shankesh Jewellers", slug: "shankesh-jewellers-ipo", market: "Mainboard", opens: "2026-08-18", closes: "2026-08-20", issueSizeCr: 367.18, priceBand: "₹88–₹93" },
  { company: "Sunshine Pictures", slug: "sunshine-pictures-ipo", market: "Mainboard", opens: "2026-08-18", closes: "2026-08-20", issueSizeCr: 282.14, priceBand: "₹342–₹360" },
  // Gaja Alternative Asset Management removed: only draft-stage offer documents were verified; no RHP or exchange notice confirmed 19–21 August.
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
  coverageCount: 24,
  verificationNotes: [
    "All 24 companies currently shown in the August calendar link to an individual analysis page.",
    "Gaja Alternative Asset Management is not yet included: BSE's 16 August feed now shows a forthcoming 19–21 August issue at ₹152–₹160, but the final RHP and complete offer structure still require reconciliation. It is queued for the next research batch.",
    "Skyways Air Services is not included: its March 2026 RHP launch was deferred, and no primary filing confirming an August relaunch was found.",
    "Asterisks beside selected SME prices identify marketed terms that still require reconciliation to the final prospectus or exchange notice.",
    "Technocrats Plasma's issuer-hosted RHP confirms 46,20,000 fresh shares and 14–18 August bidding; its marketed price remains starred pending the separate price-band advertisement and BSE SME notice.",
    "Skytech Infinite Platform's official price advertisement confirms a ₹73–₹77 band and a 3,200-share minimum bid, equal to ₹2,33,600–₹2,46,400. NSE's 16 August feed shows the issue active; its ₹22.68 crore calendar size is the full fresh issue at the cap.",
    "ENS Enterprises remains live in BSE's 16 August feed at ₹87–₹92. Its ₹33.14 crore calendar size is the full fresh issue at the cap; the 34,21,200-share net public issue is approximately ₹31.47 crore after the 1,81,200-share market-maker reservation. The RHP records nil subscription revenue in FY24–FY26 despite the SaaS product narrative.",
    "Fascinate Textiles remained active through 19 August in NSE's 16 August current-issue feed, superseding the RHP's original 13 August close; its page now uses the final RHP's FY24–FY26 restated financials.",
    "Pramodini Medicare's final RHP confirms ₹110–₹118, a 1,200-share lot and a proposed 19 August listing; the earlier fixed-price label was corrected.",
    "ENS Enterprises' final RHP confirms a ₹87–₹92 book-built issue, a 2,400-share minimum bid and proposed 21 August trading; the earlier ₹92 fixed-price label was corrected.",
    "Credent Connect N Care's 8 August RHP confirms 49,68,000 fresh shares, including a 2,52,000-share market-maker reservation. The full offer at the cap is approximately ₹93.90 crore; the previously shown ₹89.13 crore was only the 47,16,000-share net issue at the cap. NSE's 16 August feed shows the issue active and the two-lot minimum requires ₹2,26,800 at the cap.",
    "Lalithaa Jewellery Mart's final RHP and price advertisement confirm a ₹1,200 crore fresh issue, ₹500 crore OFS, ₹190–₹201 band and 74-share lot. NSE's 16 August feed shows 6,27,61,403 shares in the post-anchor public bid pool; the calendar retains the ₹1,700 crore gross offer.",
    "Milky Mist Dairy Food's final prospectus dated 13 August fixes the offer price at ₹140 and confirms a ₹1,428 crore fresh issue plus ₹125 crore promoter OFS. FY26 financials and the complete ₹155.31 crore refrigeration-equipment allocation are now reflected in its analysis.",
    "Shiprocket's final prospectus dated 14 August fixes the offer price at ₹97, confirms a ₹885.50 crore fresh issue plus ₹731.98 crore OFS and corrects the face value to ₹10. Its page now separates statutory EBITDA from company-defined adjusted EBITDA.",
    "Behari Lal Engineering's Emkay offer-document page confirms that final RHP, abridged prospectus and price materials were published. The issue is marked closed; final discovered price and prospectus remain pending as of 15 August.",
    "Horizon Industrial Parks' final RHP and price advertisement confirm an all-fresh ₹2,600 crore issue, ₹57–₹60 band, 250-share lot and ₹2,250 crore debt-repayment object. NSE's post-anchor public pool was 25,13,56,273 shares on 16 August.",
    "Shankesh Jewellers' 10 August RHP confirms 2,94,82,000 fresh shares plus 1,00,00,000 OFS shares, while NSE's current upcoming-issue feed supplies the marketed ₹88–₹93 band and 18–20 August dates. The issuer-hosted separate price advertisement was not located as of 16 August, so the 160-share lot remains clearly source-caveated.",
    "Sunshine Pictures' final RHP and official price advertisement confirm 48,00,034 fresh shares, 30,37,157 OFS shares, ₹112.50 crore for long-term working capital and a ₹342–₹360 band. BSE's 16 August feed shows the issue forthcoming for 18–20 August; the 41-share lot requires ₹14,760 at the cap.",
    "Q&T Foods' final prospectus corrects the issue size to ₹26.2476 crore and confirms a 2,400-share minimum application; the earlier ₹24.92 crore calendar figure was removed.",
    "LAPL Automotive's final RHP confirms 34,46,400 fresh shares and corrects the maximum issue size to approximately ₹32.40 crore; the earlier ₹30.77 crore figure represented only the net issue at the cap.",
    "Optimystix Entertainment's final RHP confirms 50,00,000 fresh shares, 12,00,000 OFS shares and a 1,600-share minimum bid; ₹97.65 crore was the net issue at the cap, while the full offer is approximately ₹108.50 crore.",
    "Fascinate Textiles' RHP confirms 34,57,600 fresh shares, an 8,36,000-share OFS and a 1,600-share minimum bid; the calendar now shows the approximately ₹66.98 crore full offer at the cap rather than a floor-price estimate.",
    "Skytech Infinite Platform's final RHP confirms 29,45,600 fresh shares, including a 1,48,800-share market-maker reservation, and the lead manager's price advertisement confirms ₹77.",
  ],
  sourceLinks: [
    { label: "Chittorgarh Mainboard IPO Calendar", href: "https://www.chittorgarh.com/calendar/ipo-calendar/1/?month=8&year=2026" },
    { label: "Chittorgarh SME IPO Calendar", href: "https://www.chittorgarh.com/calendar/sme-ipo-calendar/2/?month=8&year=2026" },
    { label: "NSE Issue Information", href: "https://www.nseindia.com/market-data/all-upcoming-issues-ipo" },
  ],
};
