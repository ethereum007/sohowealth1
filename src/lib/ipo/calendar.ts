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
// 13 August 2026. Entries are grouped by opening date. A null value means the
// source had not published the final figure; it must never be rendered as zero.
const august2026Ipos: IpoCalendarEntry[] = [
  { company: "Anawil Wire & Engineering", slug: "anawil-wire-engineering-ipo", market: "SME", opens: "2026-08-03", closes: "2026-08-05", issueSizeCr: 177.81, priceBand: "₹257–₹270", exchange: "NSE SME" },
  { company: "Aegeus Technologies", slug: "aegeus-technologies-ipo", market: "SME", opens: "2026-08-04", closes: "2026-08-06", issueSizeCr: 23.71, priceBand: "₹100–₹105", exchange: "BSE SME" },
  { company: "Ardee Industries", slug: "ardee-industries-ipo", market: "Mainboard", opens: "2026-08-05", closes: "2026-08-07", issueSizeCr: 425.87, priceBand: "₹50–₹53" },
  { company: "LAPL Automotive", slug: "lapl-automotive-ipo", market: "SME", opens: "2026-08-06", closes: "2026-08-10", issueSizeCr: 30.77, priceBand: "₹88–₹94", exchange: "BSE SME" },
  { company: "LEAP India", slug: "leap-india-ipo", market: "Mainboard", opens: "2026-08-07", closes: "2026-08-11", issueSizeCr: 2480, priceBand: "₹151–₹159" },
  { company: "Technocraft Ventures", slug: "technocraft-ventures-ipo", market: "Mainboard", opens: "2026-08-07", closes: "2026-08-11", issueSizeCr: 251.88, priceBand: "₹200–₹212" },
  { company: "Optimystix Entertainment India", slug: "optimystix-entertainment-india-ipo", market: "SME", opens: "2026-08-07", closes: "2026-08-11", issueSizeCr: 97.65, priceBand: "₹166–₹175", exchange: "NSE SME" },

  { company: "Dhoot Transmission", slug: "dhoot-transmission-ipo", market: "Mainboard", opens: "2026-08-10", closes: "2026-08-12", issueSizeCr: 3066.89, priceBand: "₹829–₹871" },
  { company: "Molbio Diagnostics", slug: "molbio-diagnostics-ipo", market: "Mainboard", opens: "2026-08-10", closes: "2026-08-12", issueSizeCr: 939.7, priceBand: "₹768–₹807" },
  { company: "Milky Mist Dairy Food", slug: "milky-mist-dairy-food-ipo", market: "Mainboard", opens: "2026-08-11", closes: "2026-08-13", issueSizeCr: 1553, priceBand: "₹133–₹140" },
  { company: "Sham Foam", slug: "sham-foam-ipo", market: "SME", opens: "2026-08-11", closes: "2026-08-13", issueSizeCr: 40.48, priceBand: "₹130", exchange: "BSE SME" },
  { company: "Fascinate Textiles", slug: "fascinate-textiles-ipo", market: "SME", opens: "2026-08-11", closes: "2026-08-13", issueSizeCr: 63.62, priceBand: "₹148–₹156", exchange: "NSE SME" },
  { company: "Shiprocket", slug: "shiprocket-ipo", market: "Mainboard", opens: "2026-08-12", closes: "2026-08-14", issueSizeCr: 1617.48, priceBand: "₹92–₹97" },
  { company: "Behari Lal Engineering", slug: "behari-lal-engineering-ipo", market: "Mainboard", opens: "2026-08-12", closes: "2026-08-14", issueSizeCr: 301.62, priceBand: "₹271–₹285" },
  { company: "Q&T Foods", market: "SME", opens: "2026-08-12", closes: "2026-08-14", issueSizeCr: 24.92, priceBand: "₹115", exchange: "BSE SME" },
  { company: "Pramodini Medicare", market: "SME", opens: "2026-08-12", closes: "2026-08-14", issueSizeCr: null, priceBand: null, exchange: "NSE SME" },
  { company: "Credent Connect N Care", market: "SME", opens: "2026-08-13", closes: "2026-08-17", issueSizeCr: 89.13, priceBand: "₹179–₹189", exchange: "NSE SME" },
  { company: "Skytech Infinite Platform", market: "SME", opens: "2026-08-14", closes: "2026-08-18", issueSizeCr: null, priceBand: null, exchange: "NSE SME" },
  { company: "ENS Enterprises", market: "SME", opens: "2026-08-14", closes: "2026-08-18", issueSizeCr: null, priceBand: null, exchange: "BSE SME" },
  { company: "Technocrats Plasma Systems", market: "SME", opens: "2026-08-14", closes: "2026-08-18", issueSizeCr: null, priceBand: null, exchange: "BSE SME" },

  { company: "Lalithaa Jewellery Mart", slug: "lalithaa-jewellery-mart-ipo", market: "Mainboard", opens: "2026-08-17", closes: "2026-08-19", issueSizeCr: 1700, priceBand: "₹190–₹201" },
  { company: "Horizon Industrial Parks", slug: "horizon-industrial-parks-ipo", market: "Mainboard", opens: "2026-08-17", closes: "2026-08-19", issueSizeCr: 2600, priceBand: "₹57–₹60" },
  { company: "Shankesh Jewellers", slug: "shankesh-jewellers-ipo", market: "Mainboard", opens: "2026-08-18", closes: "2026-08-20", issueSizeCr: 367.18, priceBand: "₹88–₹93" },
  { company: "Sunshine Pictures", slug: "sunshine-pictures-ipo", market: "Mainboard", opens: "2026-08-18", closes: "2026-08-20", issueSizeCr: 282.14, priceBand: "₹342–₹360" },
  { company: "Gaja Alternative Asset Management", slug: "gaja-alternative-asset-management-ipo", market: "Mainboard", opens: "2026-08-19", closes: "2026-08-21", issueSizeCr: 656.2, priceBand: null },

  { company: "Skyways Air Services", market: "Mainboard", opens: "2026-08-24", closes: "2026-08-27", issueSizeCr: null, priceBand: null },
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
  asOf: "13 August 2026",
  sourceLinks: [
    { label: "Chittorgarh Mainboard IPO Calendar", href: "https://www.chittorgarh.com/calendar/ipo-calendar/1/?month=8&year=2026" },
    { label: "Chittorgarh SME IPO Calendar", href: "https://www.chittorgarh.com/calendar/sme-ipo-calendar/2/?month=8&year=2026" },
    { label: "NSE Issue Information", href: "https://www.nseindia.com/market-data/all-upcoming-issues-ipo" },
  ],
};
