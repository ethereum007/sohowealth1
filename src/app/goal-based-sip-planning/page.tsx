import type { Metadata } from "next";
import { PlanningSEOPage } from "@/components/planning/PlanningSEOPage";

const canonicalUrl = "https://www.sohowealth.in/goal-based-sip-planning";

export const metadata: Metadata = {
  title: "Goal-Based SIP Planning India: Calculate Required SIP | SoHo Wealth",
  description: "Learn how to calculate the monthly SIP required for a target corpus using your timeline, existing savings and realistic return assumptions.",
  alternates: { canonical: canonicalUrl }, robots: { index: true, follow: true },
  openGraph: { title: "Goal-Based SIP Planning India | SoHo Wealth", description: "Convert a target corpus and deadline into an actionable monthly SIP plan.", url: canonicalUrl, type: "article" },
};

const faqs = [
  { q: "How do I calculate the SIP required for a target amount?", a: "Choose the future corpus and time available, grow any existing goal-linked savings at an assumed return, then calculate the monthly investment needed to fund the remaining amount. The SoHo Wealth AI Wealth Planner performs this illustration." },
  { q: "Is a higher assumed return better for SIP planning?", a: "A higher assumption reduces the calculated SIP but increases the risk of underfunding the goal. Use a conservative, allocation-consistent assumption and test a lower-return scenario rather than choosing the number that makes the SIP comfortable." },
  { q: "Should I increase my SIP every year?", a: "An annual step-up can align investments with rising income and reduce the initial burden. However, treat the step-up as a commitment only if it is realistic; otherwise the plan may appear better funded than it actually is." },
  { q: "Can one SIP fund multiple financial goals?", a: "A single investment can exist operationally, but each goal should have its own target, deadline and progress measurement. Separating goals reduces the chance that a near-term expense consumes money intended for retirement." },
  { q: "How often should a goal-based SIP be reviewed?", a: "Review at least annually and whenever the goal amount, timeline, income or existing corpus changes materially. Also rebalance when market movement pushes the allocation away from the intended risk level." },
];

export default function GoalBasedSIPPlanningPage() {
  return <PlanningSEOPage canonicalUrl={canonicalUrl} eyebrow="Goal-based SIP planning in India" title="Give every monthly SIP" accent="a job and a deadline." intro="Move beyond a generic SIP amount. Start with a future corpus, account for existing savings and calculate the monthly investment required to reach one clearly defined financial goal." toolLabel="Calculate Required SIP" serviceLabel="Review My Goal Plan" serviceHref="/portfolio-review" sections={[
    { title: "Define the target in future rupees", text: "A goal amount should reflect what the expense may cost when the money is needed—not only today's price. Apply a suitable inflation assumption before calculating the SIP." },
    { title: "Credit the money already saved", text: "Include only investments genuinely earmarked for this goal. Growing the existing corpus separately prevents double counting and shows how much of the target still needs regular contributions." },
    { title: "Use realistic return assumptions", text: "The assumed return should reflect the broad asset allocation and horizon. Optimistic returns create an artificially low SIP and increase the risk of discovering a shortfall close to the deadline." },
    { title: "Measure progress, not fund performance", text: "A goal can be on track even when one holding underperforms temporarily—and underfunded despite a strong recent return. Review projected corpus, contribution rate and allocation together." },
  ]} checklistTitle="The inputs behind a useful SIP target" checklist={["Future goal amount after inflation", "Exact years and months available", "Existing goal-linked corpus", "Affordable starting monthly SIP", "Realistic annual SIP step-up", "Allocation-consistent return assumption", "Lower-return stress test", "Annual progress and rebalance review"]} assumptions={[["Target", "Future value, not today's cost"], ["Return", "Illustrative, not guaranteed"], ["Contribution", "Monthly at period end/start"], ["Step-up SIP", "Model only if affordable"], ["Review cycle", "At least annually"]]} related={[["AI Wealth Planner", "/tools/ai-wealth-planner"], ["Child education planning", "/child-education-planning"], ["Portfolio planning review", "/portfolio-review"]]} faqs={faqs} />;
}
