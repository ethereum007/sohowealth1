import type { Metadata } from "next";
import { PlanningSEOPage } from "@/components/planning/PlanningSEOPage";

const canonicalUrl = "https://www.sohowealth.in/child-education-planning";

export const metadata: Metadata = {
  title: "Child Education Planning India: SIP & Corpus Guide | SoHo Wealth",
  description: "Estimate the future cost and monthly SIP for your child's higher education in India or abroad. Learn how inflation, timeline and asset allocation affect the plan.",
  keywords: ["child education planning India", "child education SIP calculator", "education corpus calculator", "SIP for child education", "child future planning"],
  alternates: { canonical: canonicalUrl }, robots: { index: true, follow: true },
  openGraph: { title: "Child Education Planning India | SoHo Wealth", description: "Build an education corpus around inflation, timeline and realistic monthly investing.", url: canonicalUrl, type: "article" },
};

const faqs = [
  { q: "How much should I save for my child's education in India?", a: "Start with the likely course cost in today's rupees, apply a reasonable education-inflation assumption until enrolment, and subtract savings already earmarked for the goal. The balance becomes the corpus your SIP must fund." },
  { q: "What inflation rate should I use for education planning?", a: "Education costs may rise faster than general consumer inflation and vary by institution, course and country. Many illustrations test a range rather than one precise forecast. Review actual fee data annually." },
  { q: "Should I use equity mutual funds for a child education goal?", a: "Equity may be considered for sufficiently long horizons and suitable risk capacity, but the allocation should usually reduce as the admission date approaches. Near-term tuition should not depend on volatile assets." },
  { q: "What if my child wants to study abroad?", a: "Include foreign tuition, living costs, travel, insurance and currency risk. Keep domestic and overseas scenarios separate so the range is visible and can be revised as plans become clearer." },
  { q: "Can education loans be part of the plan?", a: "Yes. A plan can combine family savings, scholarships, cash flow during the course and a measured education loan. Avoid assuming debt will cover every shortfall without testing repayment affordability." },
];

export default function ChildEducationPlanningPage() {
  return <PlanningSEOPage canonicalUrl={canonicalUrl} eyebrow="Child education planning in India" title="Build the education corpus before" accent="the admission letter arrives." intro="Estimate the future cost of higher education, the monthly SIP required and a sensible glide path from growth to capital protection as the goal gets closer." toolLabel="Calculate Education SIP" serviceLabel="Discuss the Education Goal" serviceHref="/portfolio-review" sections={[
    { title: "Start with the future course cost", text: "A ₹25 lakh course today will not cost ₹25 lakh ten or fifteen years from now. Build separate estimates for tuition, accommodation, travel, devices and contingency, then inflate the total to the likely admission year." },
    { title: "Separate India and overseas scenarios", text: "Domestic and overseas education have different fee structures, living costs and currency exposure. Maintaining a base plan and a higher-cost scenario prevents false precision while your child's interests are still evolving." },
    { title: "Match risk to the deadline", text: "A long horizon may support greater growth exposure, subject to suitability. As admission approaches, gradually move the money needed for near-term fees toward more stable and liquid assets." },
    { title: "Review the SIP every year", text: "Update actual fee information, existing corpus and monthly contributions annually. A planned SIP step-up can help income growth share the burden instead of relying only on market returns." },
  ]} checklistTitle="What a complete education plan should include" checklist={["Target course and country scenarios", "Education inflation range", "Existing investments earmarked for the goal", "Monthly SIP and annual step-up capacity", "Scholarship and education-loan assumptions", "Currency risk for overseas study", "De-risking plan before admission", "Contingency for living and travel costs"]} assumptions={[["Goal date", "Expected admission year"], ["Inflation", "Course-specific range"], ["Existing corpus", "Only goal-linked savings"], ["Review cycle", "At least annually"], ["Final 3–5 years", "Progressive de-risking"]]} related={[["AI Wealth Planner", "/tools/ai-wealth-planner"], ["Goal-based SIP planning", "/goal-based-sip-planning"], ["Mutual fund investing", "/mutual-funds"]]} faqs={faqs} />;
}
