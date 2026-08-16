import fs from "node:fs";
import path from "node:path";

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

const appPages = walk("src/app").filter((file) => file.endsWith("page.tsx"));
const routeEntries = appPages
  .filter((file) => !file.includes("[slug]"))
  .map((file) => [`/${path.relative("src/app", path.dirname(file)).replaceAll("\\", "/")}`, file])
  .map(([route, file]) => [route === "/" ? "/" : route, file]);
const routeToFile = new Map(routeEntries);
const staticRoutes = new Set(routeToFile.keys());

const insightSource = walk("src/lib/insights")
  .filter((file) => file.endsWith(".ts"))
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");
const allInsightSlugMatches = [...insightSource.matchAll(/\bslug:\s*"([^"]+)"/g)].map((match) => match[1]);
const insightSlugs = new Set(allInsightSlugMatches);
const duplicateSlugs = [...new Set(allInsightSlugMatches.filter((slug, index) => allInsightSlugMatches.indexOf(slug) !== index))];
const invalidInsightRelatedSlugs = [];
for (const relatedListMatch of insightSource.matchAll(/relatedSlugs:\s*\[([^\]]*)\]/gs)) {
  for (const relatedMatch of relatedListMatch[1].matchAll(/"([^"]+)"/g)) {
    if (!insightSlugs.has(relatedMatch[1])) invalidInsightRelatedSlugs.push(relatedMatch[1]);
  }
}

const retirementFile = "src/lib/insights/retirement-posts.ts";
const retirementSource = fs.readFileSync(retirementFile, "utf8");
const retirementHubSource = fs.readFileSync("src/app/retirement-planning/page.tsx", "utf8");
const sitemapSource = fs.readFileSync("src/app/sitemap.ts", "utf8");
const retirementPostStarts = [...retirementSource.matchAll(/^  \{\r?\n    slug:\s*"([^"]+)"/gm)];
const retirementPostBlocks = retirementPostStarts.map((match, index) => ({
  slug: match[1],
  source: retirementSource.slice(match.index, retirementPostStarts[index + 1]?.index ?? retirementSource.lastIndexOf("\n];")),
}));
const brokenRelatedSlugs = [];
const incompletePosts = [];
const snippetQualityIssues = [];
const postsMissingFromHub = [];

for (const post of retirementPostBlocks) {
  const requiredFields = ["seoTitle", "description", "audience", "updatedAt", "keywords", "faqs", "relatedSlugs", "sources"];
  const missingFields = requiredFields.filter((field) => !new RegExp(`\\b${field}:`).test(post.source));
  if (missingFields.length) incompletePosts.push({ slug: post.slug, missingFields });
  const seoTitle = post.source.match(/\bseoTitle:\s*"([^"]+)"/)?.[1] ?? "";
  const description = post.source.match(/\bdescription:\s*"([^"]+)"/)?.[1] ?? "";
  const keywordList = post.source.match(/\bkeywords:\s*\[([^\]]*)\]/s)?.[1] ?? "";
  const keywordCount = [...keywordList.matchAll(/"([^"]+)"/g)].length;
  if (seoTitle && (seoTitle.length < 30 || seoTitle.length > 65)) snippetQualityIssues.push(`${post.slug}: SEO title is ${seoTitle.length} characters`);
  if (description && (description.length < 110 || description.length > 165)) snippetQualityIssues.push(`${post.slug}: description is ${description.length} characters`);
  if (keywordCount > 0 && keywordCount < 4) snippetQualityIssues.push(`${post.slug}: only ${keywordCount} target keywords`);
  if (!retirementHubSource.includes(`/insights/${post.slug}`)) postsMissingFromHub.push(post.slug);

  const relatedList = post.source.match(/relatedSlugs:\s*\[([^\]]*)\]/s)?.[1] ?? "";
  for (const relatedMatch of relatedList.matchAll(/"([^"]+)"/g)) {
    const relatedSlug = relatedMatch[1];
    if (!insightSlugs.has(relatedSlug) || relatedSlug === post.slug) {
      brokenRelatedSlugs.push({ slug: post.slug, relatedSlug });
    }
  }
}

const sitemapIncludesInsights = /insightPosts\.map\(/.test(sitemapSource) && /\/insights\/\$\{post\.slug\}/.test(sitemapSource);
const retirementHubSchemaSignals = [
  ["Service schema", /"@type":\s*"Service"/],
  ["Hyderabad service area", /areaServed:[\s\S]*?"@type":\s*"City",\s*name:\s*"Hyderabad"/],
  ["consultation channels", /availableChannel:/],
  ["service outputs", /serviceOutput:/],
  ["branded Open Graph image", /openGraph:[\s\S]*?images:/],
];
const incompleteHubSchema = retirementHubSchemaSignals.filter(([, pattern]) => !pattern.test(retirementHubSource)).map(([name]) => name);
const insightTemplateSource = fs.readFileSync("src/app/insights/[slug]/page.tsx", "utf8");
const authorTrustSignals = [
  ["visible author name", />Kiran Dutta</],
  ["author profile link", /href="\/team"/],
  ["visible author credentials", /Columbia MBA · NISM-certified professional/],
  ["article author entity", /author:\s*\{\s*"@id":\s*"https:\/\/www\.sohowealth\.in\/#kiran-dutta"/],
];
const incompleteAuthorTrust = authorTrustSignals.filter(([, pattern]) => !pattern.test(insightTemplateSource)).map(([name]) => name);

const filesToCheck = [
  "src/app/retirement-planning/page.tsx",
  ...appPages.filter((file) => file.includes("retirement-")),
  "src/app/insights/[slug]/page.tsx",
  "src/components/layout/Header.tsx",
  "src/components/layout/Footer.tsx",
];

const retirementToolPages = appPages.filter((file) => {
  const normalized = file.replaceAll("\\", "/");
  return normalized.includes("src/app/tools/retirement-") || normalized.includes("src/app/tools/nps-annuity-calculator/") || normalized.includes("src/app/tools/epf-calculator/") || normalized.includes("src/app/tools/ppf-calculator/");
});
const incompleteToolMetadata = [];
for (const file of retirementToolPages) {
  const source = fs.readFileSync(file, "utf8");
  const requiredSignals = [
    ["canonical", /alternates:\s*\{\s*canonical:/],
    ["robots", /robots:\s*\{\s*index:\s*true,\s*follow:\s*true/],
    ["Open Graph image", /openGraph:[\s\S]*?images:/],
    ["Twitter card", /twitter:\s*\{\s*card:\s*"summary_large_image"/],
    ["WebApplication schema", /"@type":\s*"WebApplication"/],
  ];
  const missing = requiredSignals.filter(([, pattern]) => !pattern.test(source)).map(([name]) => name);
  if (missing.length) incompleteToolMetadata.push({ file, missing });
}

const broken = [];
const brokenAnchors = [];
let linksChecked = 0;
for (const file of new Set(filesToCheck)) {
  const source = fs.readFileSync(file, "utf8");
  const normalizedFile = file.replaceAll("\\", "/");
  for (const match of source.matchAll(/(?:href:\s*|href=)[{]?"((?:\/|#)[^"]*)"/g)) {
    const [pathPart, anchor] = match[1].split("#");
    const target = pathPart || (normalizedFile.startsWith("src/app/") ? `/${path.relative("src/app", path.dirname(file)).replaceAll("\\", "/")}` : "");
    linksChecked += 1;
    const exists = target.startsWith("/insights/")
      ? insightSlugs.has(target.slice("/insights/".length))
      : staticRoutes.has(target);
    if (!exists) broken.push({ file, target });
    if (exists && anchor && routeToFile.has(target)) {
      const targetSource = fs.readFileSync(routeToFile.get(target), "utf8");
      const escapedAnchor = anchor.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const declaresAnchor = new RegExp(`(?:id|sectionId)=[{]?"${escapedAnchor}"`).test(targetSource);
      if (!declaresAnchor) brokenAnchors.push({ file, target: `${target}#${anchor}` });
    }
  }
}

if (broken.length || brokenAnchors.length || brokenRelatedSlugs.length || invalidInsightRelatedSlugs.length || duplicateSlugs.length || incompletePosts.length || snippetQualityIssues.length || postsMissingFromHub.length || incompleteToolMetadata.length || incompleteHubSchema.length || incompleteAuthorTrust.length || !sitemapIncludesInsights) {
  console.error(`Retirement SEO validation failed:`);
  for (const item of [...broken, ...brokenAnchors]) console.error(`- Broken link in ${item.file}: ${item.target}`);
  for (const item of brokenRelatedSlugs) console.error(`- Invalid related guide in ${item.slug}: ${item.relatedSlug}`);
  for (const slug of [...new Set(invalidInsightRelatedSlugs)]) console.error(`- Invalid related guide anywhere in insights: ${slug}`);
  for (const slug of duplicateSlugs) console.error(`- Duplicate insight slug: ${slug}`);
  for (const post of incompletePosts) console.error(`- Incomplete retirement metadata for ${post.slug}: ${post.missingFields.join(", ")}`);
  for (const issue of snippetQualityIssues) console.error(`- Search snippet issue: ${issue}`);
  for (const slug of postsMissingFromHub) console.error(`- Retirement guide missing from hub: ${slug}`);
  for (const item of incompleteToolMetadata) console.error(`- Incomplete retirement-tool metadata in ${item.file}: ${item.missing.join(", ")}`);
  if (incompleteHubSchema.length) console.error(`- Incomplete retirement hub schema: ${incompleteHubSchema.join(", ")}`);
  if (incompleteAuthorTrust.length) console.error(`- Incomplete article author trust signals: ${incompleteAuthorTrust.join(", ")}`);
  if (!sitemapIncludesInsights) console.error("- Dynamic insight routes are not included in the XML sitemap");
  process.exitCode = 1;
} else {
  console.log(`Retirement SEO checks OK: ${linksChecked} internal links, ${retirementPostBlocks.length} article records, ${retirementToolPages.length} tool pages, search snippets, author trust, local service schema, hub coverage, sitemap inclusion, related guides, unique slugs and required metadata validated.`);
}
