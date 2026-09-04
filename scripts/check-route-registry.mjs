import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const app = path.join(root, "src", "app");
const registryFile = path.join(root, "src", "lib", "seo", "public-routes.ts");
const source = fs.readFileSync(registryFile, "utf8");
const entries = [...source.matchAll(/route\("(\/[^"\n]*)",\s*"([^"]+)",\s*"([^"]+)"(?:,\s*"(\d{4}-\d{2}-\d{2})")?\)/g)].map((match) => ({ path: match[1], date: match[4] || "2026-09-04" }));
const exceptions = new Set(["/app", "/app/onboarding", "/app/report", "/app/leads", "/sign-in", "/best-pms-in-hyderabad", "/hyderabad-real-estate/guide"]);

function walk(dir) { return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => { const full = path.join(dir, entry.name); return entry.isDirectory() ? walk(full) : [full]; }); }
function routeFor(file) { const relative = path.relative(app, path.dirname(file)).replaceAll(path.sep, "/"); const parts = relative.split("/").filter((part) => part && !/^\(.+\)$/.test(part)); return `/${parts.join("/")}` || "/"; }

const staticPages = walk(app).filter((file) => file.endsWith(`${path.sep}page.tsx`)).map(routeFor).filter((route) => !route.includes("["));
const registryPaths = entries.map((entry) => entry.path);
const errors = [];
for (const route of staticPages) if (!registryPaths.includes(route) && !exceptions.has(route)) errors.push(`Static public page missing from registry: ${route}`);
for (const route of registryPaths) if (!staticPages.includes(route)) errors.push(`Registry route has no static page: ${route}`);
for (const route of new Set(registryPaths)) if (registryPaths.filter((item) => item === route).length > 1) errors.push(`Duplicate registry route: ${route}`);
const today = new Date(`${new Date().toISOString().slice(0, 10)}T23:59:59Z`);
for (const entry of entries) { const date = new Date(`${entry.date}T00:00:00Z`); if (Number.isNaN(date.valueOf())) errors.push(`Invalid lastModified for ${entry.path}: ${entry.date}`); else if (date > today) errors.push(`Future lastModified for ${entry.path}: ${entry.date}`); }
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`Route registry checks passed for ${entries.length} public static routes and ${exceptions.size} approved exceptions.`);
