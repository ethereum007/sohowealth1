import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sitemap = fs.readFileSync(path.join(root, "src", "app", "sitemap.ts"), "utf8");
const registry = fs.readFileSync(path.join(root, "src", "lib", "seo", "public-routes.ts"), "utf8");
const errors = [];
if (!sitemap.includes('const baseUrl = "https://www.sohowealth.in"')) errors.push("Sitemap canonical host must be https://www.sohowealth.in");
if (!sitemap.includes("publicRoutes.filter((route) => route.indexable)")) errors.push("Sitemap must consume the canonical public-route registry");
for (const route of ["/app", "/auth", "/sign-in", "/api", "/best-pms-in-hyderabad", "/hyderabad-real-estate/guide"]) {
  if (new RegExp(`route\\(\\"${route.replaceAll("/", "\\/")}\\"`).test(registry)) errors.push(`Private, auth or redirect route appears in registry: ${route}`);
}
if (!sitemap.includes("new Map(entries.map")) errors.push("Sitemap must de-duplicate generated URLs");
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("Sitemap source checks passed: canonical registry, host, exclusions and de-duplication are enforced.");
