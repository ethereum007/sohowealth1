// Parser for AMFI's daily NAV file: https://www.amfiindia.com/spages/NAVAll.txt
//
// File structure (sections separated by blank lines):
//   "Open Ended Schemes(Equity Scheme - Multi Cap Fund)"   ← category header
//   "Aditya Birla Sun Life Mutual Fund"                     ← AMC header
//   "Scheme Code;ISIN Div Payout/ ISIN Growth;ISIN Div Reinvestment;Scheme Name;Net Asset Value;Date"
//   "103174;INF209K01157;INF209K01165;Aditya Birla Sun Life ... - Growth;75.5000;28-Apr-2026"
//   "..."                                                   ← more schemes
//   ""                                                      ← blank line ends AMC
//   "Close Ended Schemes(...)"                              ← next section

export type SchemeType = "open_ended" | "close_ended" | "interval" | "other";

export interface ParsedFund {
  scheme_code: string;
  isin_growth: string | null;
  isin_div_payout: string | null;
  scheme_name: string;
  amc: string | null;
  category: string | null;
  scheme_type: SchemeType;
  nav: number | null;
  nav_date: string | null; // ISO yyyy-mm-dd
}

/** Convert "28-Apr-2026" → "2026-04-28" */
function toIsoDate(s: string): string | null {
  if (!s) return null;
  const m = s.match(/^(\d{1,2})-([A-Za-z]{3})-(\d{4})$/);
  if (!m) return null;
  const months: Record<string, string> = {
    Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
    Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
  };
  const mm = months[m[2].slice(0, 1).toUpperCase() + m[2].slice(1).toLowerCase()];
  if (!mm) return null;
  const dd = m[1].padStart(2, "0");
  return `${m[3]}-${mm}-${dd}`;
}

function classifySchemeType(header: string): SchemeType {
  const h = header.toLowerCase();
  if (h.startsWith("open ended"))  return "open_ended";
  if (h.startsWith("close ended")) return "close_ended";
  if (h.startsWith("interval"))    return "interval";
  return "other";
}

/** Extract category from "Open Ended Schemes(Equity Scheme - Multi Cap Fund)" → "Equity Scheme - Multi Cap Fund" */
function extractCategory(header: string): string | null {
  const m = header.match(/\(([^)]+)\)/);
  return m ? m[1].trim() : null;
}

export function parseAmfiNavAll(raw: string): ParsedFund[] {
  const out: ParsedFund[] = [];
  const lines = raw.split(/\r?\n/);

  let currentSchemeType: SchemeType = "open_ended";
  let currentCategory: string | null = null;
  let currentAmc: string | null = null;

  for (let line of lines) {
    line = line.trim();
    if (!line) {
      // blank line: end of an AMC block (next non-blank could be a new AMC or section)
      currentAmc = null;
      continue;
    }

    // Section header: "Open Ended Schemes(...)" / "Close Ended Schemes(...)" / "Interval Fund Schemes(...)"
    if (/^(Open Ended|Close Ended|Interval) /i.test(line) && line.toLowerCase().includes("schemes")) {
      currentSchemeType = classifySchemeType(line);
      currentCategory = extractCategory(line);
      currentAmc = null;
      continue;
    }

    // Header row of the data table — skip
    if (line.startsWith("Scheme Code")) continue;

    // Data row → exactly 5 semicolons (6 fields)
    const fields = line.split(";");
    if (fields.length === 6 && /^\d+$/.test(fields[0].trim())) {
      const [code, isinPayout, isinGrowth, name, navStr, dateStr] = fields.map(s => s.trim());
      const nav = parseFloat(navStr);
      out.push({
        scheme_code: code,
        isin_growth: isinGrowth || null,
        isin_div_payout: isinPayout || null,
        scheme_name: name,
        amc: currentAmc,
        category: currentCategory,
        scheme_type: currentSchemeType,
        nav: Number.isFinite(nav) ? nav : null,
        nav_date: toIsoDate(dateStr),
      });
      continue;
    }

    // Otherwise → likely an AMC name line (no semicolons, not a section header)
    if (!line.includes(";")) {
      currentAmc = line;
    }
  }

  return out;
}

/** Convenience: fetch + parse.
 *  Uses the portal.amfiindia.com host directly (the legacy www.amfiindia.com
 *  serves a 302 to the same path on the portal — but Node's fetch sometimes
 *  short-reads the redirected response, so we go straight there). */
export async function fetchAndParseAmfi(): Promise<ParsedFund[]> {
  // AMFI's IIS server sometimes truncates gzipped responses to Node's undici fetch.
  // Reading via ArrayBuffer (not text()) and forcing identity encoding fixes it.
  const res = await fetch("https://portal.amfiindia.com/spages/NAVAll.txt", {
    cache: "no-store",
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; SoHoWealth-WealthReview/1.0)",
      "Accept": "text/plain,*/*",
      "Accept-Encoding": "identity",
    },
  });
  if (!res.ok) throw new Error(`AMFI fetch failed: ${res.status}`);
  const buf = await res.arrayBuffer();
  const text = Buffer.from(buf).toString("utf8");
  if (text.length < 1_500_000) {
    throw new Error(`AMFI fetch suspiciously short: ${text.length} bytes (expected ~2 MB)`);
  }
  return parseAmfiNavAll(text);
}
