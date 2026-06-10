// CAS (Consolidated Account Statement) PDF parser — CAMS / KFintech layout.
// Ported from the Trezofin portfolio analyser. PDF engine is `unpdf`, a
// serverless-safe pdfjs build (no worker file, no DOM polyfills) that runs
// as-is on Vercel's Node lambdas.

export interface CasHolding {
  folio: string;
  schemeName: string;
  isin: string | null;
  units: number;
  nav: number;
  navDate: string | null;
  marketValue: number;
  costValue: number;
  registrar: string | null;
}

export interface CasResult {
  holdings: CasHolding[];
  totalMarketValue: number;
  totalCostValue: number;
  asOnDate: string | null;
}

// unpdf's bundled pdfjs uses Promise.try; polyfill for older Node 22 V8.
const P = Promise as unknown as { try?: (fn: (...a: unknown[]) => unknown, ...args: unknown[]) => Promise<unknown> };
if (typeof P.try !== "function") {
  P.try = function promiseTry(fn: (...a: unknown[]) => unknown, ...args: unknown[]) {
    return new Promise((resolve) => resolve(fn(...args)));
  };
}

function parseIndianNum(s: string): number {
  return parseFloat(s.replace(/,/g, ""));
}

/** Classify a scheme into our asset classes by name keywords. */
export function classifyScheme(schemeName: string): "equity" | "debt" {
  const s = schemeName.toLowerCase();
  const debtHints = [
    "debt", "liquid", "gilt", "bond", "overnight", "money market", "ultra short",
    "low duration", "short duration", "corporate", "banking & psu", "banking and psu",
    "credit risk", "floater", "floating", "treasury", "savings fund", "income fund",
    "dynamic bond", "medium duration", "long duration", "psu fund", "arbitrage",
  ];
  return debtHints.some(h => s.includes(h)) ? "debt" : "equity";
}

export async function parseCasPdf(buffer: ArrayBuffer | Buffer, password?: string): Promise<CasResult> {
  const { getResolvedPDFJS } = await import("unpdf");
  const { getDocument } = await getResolvedPDFJS();

  const data = new Uint8Array(buffer as ArrayBuffer);
  const loadingTask = getDocument({
    data,
    password: password || undefined,
    useSystemFonts: true,
    isEvalSupported: false,
  });

  let doc;
  try {
    doc = await loadingTask.promise;
  } catch (err: unknown) {
    const e = err as { name?: string; message?: string };
    if (e?.name === "PasswordException") {
      throw new Error(
        password
          ? "Incorrect PDF password. Please check and try again."
          : "This PDF is password-protected. Please enter the password (usually your PAN)."
      );
    }
    throw new Error("Failed to open PDF: " + (e?.message || "Unknown error"));
  }

  // Extract positioned text from all pages, group into lines by Y.
  const allItems: { str: string; x: number; y: number }[] = [];
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const tc = await page.getTextContent();
    for (const item of tc.items as Array<{ str?: string; transform: number[] }>) {
      if (item.str && item.str.trim()) {
        allItems.push({ str: item.str, x: Math.round(item.transform[4]), y: Math.round(item.transform[5]) });
      }
    }
  }

  const lineMap = new Map<number, { str: string; x: number }[]>();
  for (const item of allItems) {
    if (!lineMap.has(item.y)) lineMap.set(item.y, []);
    lineMap.get(item.y)!.push(item);
  }
  const lines = Array.from(lineMap.entries())
    .sort((a, b) => b[0] - a[0])
    .map(([y, items]) => ({
      y,
      text: items.sort((a, b) => a.x - b.x).map(i => i.str).join("  "),
    }));

  let asOnDate: string | null = null;
  for (const line of lines) {
    const m = line.text.match(/As on (\d{2}-[A-Z][a-z]{2}-\d{4})/);
    if (m) { asOnDate = m[1]; break; }
  }

  const holdings: CasHolding[] = [];
  const folioPattern = /^(\d{5,}\/\d+)/;
  const isinPattern = /(INF[A-Z0-9]{9})/;
  const numPattern = /[\d,]+\.\d{2,4}/g;
  const datePattern = /\d{2}-[A-Z][a-z]{2}-\d{4}/;
  const registrarPattern = /KFINTECH|CAMS/i;

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const folioMatch = line.text.match(folioPattern);

    if (folioMatch) {
      const folio = folioMatch[1];
      const text = line.text;
      const isin = text.match(isinPattern)?.[1] ?? null;
      const registrar = text.match(registrarPattern)?.[0]?.toUpperCase() ?? null;
      const navDate = text.match(datePattern)?.[0] ?? null;
      const numbers = (text.match(numPattern) || []).map(parseIndianNum);

      // scheme name from continuation lines
      let schemeName = "";
      let j = i + 1;
      while (j < lines.length) {
        const nextLine = lines[j].text.trim();
        if (
          folioPattern.test(nextLine) ||
          /^Total\b/i.test(nextLine) ||
          /^Loads and Fees/i.test(nextLine) ||
          /^Page \d/i.test(nextLine) ||
          /^CAMSCASWS/i.test(nextLine)
        ) break;
        if (
          nextLine.length > 2 &&
          !nextLine.startsWith("(INR)") &&
          !nextLine.startsWith("Folio") &&
          !nextLine.startsWith("Scheme") &&
          !nextLine.startsWith("Market Value")
        ) {
          schemeName += (schemeName ? " " : "") + nextLine;
        }
        j++;
      }

      const schemeInLine = text.match(
        /(?:INF[A-Z0-9]{9})\s+(?:[\d,]+\.\d{2,4}\s+)?([A-Z0-9]+ - .+?)(?:\s+[\d,]+\.\d{2,4})/
      );
      if (schemeInLine?.[1]) {
        schemeName = schemeInLine[1] + (schemeName ? " " + schemeName : "");
      }
      if (!schemeName) schemeName = "Unknown Fund";
      schemeName = schemeName.replace(/\s+/g, " ").trim();

      // Map numbers to fields per the CAMS column layout.
      let costValue = 0, units = 0, nav = 0, marketValue = 0;
      if (numbers.length >= 4) {
        costValue = numbers[0];
        units = numbers[1];
        let numIdx = 2;
        while (numIdx < numbers.length) {
          const n = numbers[numIdx];
          if (n < 5000 && numIdx < numbers.length - 1) {
            nav = n;
            marketValue = numbers[numIdx + 1];
            break;
          }
          numIdx++;
        }
        if (marketValue === 0 && numbers.length >= 4) {
          marketValue = numbers[numbers.length - 1];
          nav = numbers[numbers.length - 2];
        }
      } else if (numbers.length === 3) {
        costValue = numbers[0];
        units = numbers[1];
        marketValue = numbers[2];
      }

      if (folio && (marketValue > 0 || costValue > 0)) {
        holdings.push({ folio, schemeName, isin, units, nav, navDate, marketValue, costValue, registrar });
      }

      i = j;
    } else {
      i++;
    }
  }

  let totalMarketValue = 0, totalCostValue = 0;
  for (const line of lines) {
    const m = line.text.match(/Total\s+([\d,]+\.\d{2})\s+([\d,]+\.\d{2})/);
    if (m) {
      totalCostValue = parseIndianNum(m[1]);
      totalMarketValue = parseIndianNum(m[2]);
      break;
    }
  }
  if (totalMarketValue === 0) totalMarketValue = holdings.reduce((s, h) => s + h.marketValue, 0);
  if (totalCostValue === 0) totalCostValue = holdings.reduce((s, h) => s + h.costValue, 0);

  return { holdings, totalMarketValue, totalCostValue, asOnDate };
}
