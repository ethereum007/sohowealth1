import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const appDir = path.join(root, "src", "app");

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function routeForPage(file) {
  const directory = path.relative(appDir, path.dirname(file)).replaceAll(path.sep, "/");
  const segments = directory.split("/").filter((segment) => segment && !/^\(.+\)$/.test(segment));
  return `/${segments.join("/")}`.replace(/\/$/, "") || "/";
}

function matchesRoute(href, route) {
  const hrefParts = href.split("/").filter(Boolean);
  const routeParts = route.split("/").filter(Boolean);
  if (hrefParts.length !== routeParts.length) return false;
  return routeParts.every((part, index) => /^\[.+\]$/.test(part) || part === hrefParts[index]);
}

const pageFiles = walk(appDir).filter((file) => file.endsWith(`${path.sep}page.tsx`));
const routes = pageFiles.map(routeForPage);
const sourceFiles = walk(path.join(root, "src")).filter((file) => /\.(?:ts|tsx)$/.test(file));
const links = new Map();

for (const file of sourceFiles) {
  const source = fs.readFileSync(file, "utf8");
  for (const match of source.matchAll(/\b(?:href|ctaLink)\s*(?:=|:)\s*["'](\/[^"']*)["']/g)) {
    const href = match[1].split(/[?#]/, 1)[0].replace(/\/$/, "") || "/";
    if (href.startsWith("/_next") || href.startsWith("/api/") || /\.[a-z0-9]{2,5}$/i.test(href)) continue;
    if (!links.has(href)) links.set(href, new Set());
    links.get(href).add(path.relative(root, file));
  }
}

const broken = [];
for (const [href, files] of links) {
  if (!routes.some((route) => matchesRoute(href, route))) {
    broken.push(`${href} referenced by ${[...files].join(", ")}`);
  }
}

if (broken.length) {
  console.error(`Internal-link checks failed (${broken.length}):`);
  for (const item of broken) console.error(`- ${item}`);
  process.exit(1);
}

console.log(`Internal-link checks passed for ${links.size} unique links across ${routes.length} routes.`);
