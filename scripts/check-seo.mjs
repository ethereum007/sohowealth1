import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const appDir = path.join(root, "src", "app");
const errors = [];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

const sourceFiles = walk(path.join(root, "src")).filter((file) => /\.(?:ts|tsx)$/.test(file));
const pageFiles = walk(appDir).filter((file) => file.endsWith(`${path.sep}page.tsx`));

for (const file of sourceFiles) {
  const source = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file);
  if (/https?:\/\/(?:sohowealth\.in|www\.sohowealth\.in)(?::\d+)?/i.test(source)) {
    for (const match of source.matchAll(/https?:\/\/[^"'`\s)]+/gi)) {
      const url = match[0];
      if (/^http:\/\//i.test(url) || /^https:\/\/sohowealth\.in/i.test(url)) {
        errors.push(`${relative}: non-canonical SoHo Wealth URL ${url}`);
      }
    }
  }
  if (/^["']use client["'];?/m.test(source) && /pms_profiles_enriched[^"']*\.json/.test(source)) {
    errors.push(`${relative}: enriched PMS JSON must not be imported by a client component`);
  }
  if (/\b(?:export const metadata|generateMetadata)\b/.test(source) && /\bkeywords\s*:/.test(source.split(/const\s+\w*Schema|<JsonLd/)[0])) {
    errors.push(`${relative}: emitted Metadata must not include a keywords property`);
  }
}

for (const file of pageFiles) {
  const relative = path.relative(appDir, file).replaceAll(path.sep, "/");
  const isPrivate = relative.startsWith("app/") || relative.startsWith("sign-in/");
  const source = fs.readFileSync(file, "utf8");
  if (!isPrivate && !/(?:export const metadata|generateMetadata)/.test(source)) {
    errors.push(`src/app/${relative}: public page has no metadata export`);
  }
}

const layout = fs.readFileSync(path.join(appDir, "layout.tsx"), "utf8");
if (!/metadataBase:\s*new URL\(["']https:\/\/www\.sohowealth\.in["']\)/.test(layout)) {
  errors.push("src/app/layout.tsx: metadataBase must be https://www.sohowealth.in");
}

const robots = fs.readFileSync(path.join(appDir, "robots.ts"), "utf8");
for (const required of ["/app", "/auth/", "/sign-in", "/api/", "https://www.sohowealth.in/sitemap.xml"]) {
  if (!robots.includes(required)) errors.push(`src/app/robots.ts: missing ${required}`);
}

const llms = path.join(root, "public", "llms.txt");
if (!fs.existsSync(llms)) {
  errors.push("public/llms.txt: missing agent-readable site summary");
} else {
  const text = fs.readFileSync(llms, "utf8");
  for (const required of ["ARN 306593", "APRN01233", "not a SEBI Registered Investment Adviser", "/disclosures"]) {
    if (!text.includes(required)) errors.push(`public/llms.txt: missing required disclosure or link: ${required}`);
  }
}

if (errors.length) {
  console.error(`SEO checks failed (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`SEO checks passed for ${pageFiles.length} App Router pages and ${sourceFiles.length} source files.`);
