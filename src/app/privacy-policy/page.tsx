import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | SoHo Wealth",
  description:
    "How SoHo Wealth collects, uses and protects information submitted through its website, portfolio review forms and consultation requests.",
  alternates: { canonical: "https://www.sohowealth.in/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | SoHo Wealth",
    description:
      "How SoHo Wealth collects, uses and protects website visitor and lead information.",
    url: "https://www.sohowealth.in/privacy-policy",
    type: "website",
  },
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "When you submit a form, request a portfolio review, call us, WhatsApp us or email us, we may collect your name, phone number, email address, portfolio range, NRI status, preferred call time, message details and source/attribution information such as campaign, referral or landing page.",
      "If you use the wealth review app, we may process information you choose to provide about assets, liabilities, income, expenses, goals and uploaded account statements for the purpose of preparing your review.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use the information to respond to enquiries, schedule consultations, prepare portfolio reviews, improve our website and services, measure marketing performance, comply with applicable obligations and maintain business records.",
      "We do not sell personal information. We do not share lead information with unrelated third parties for their own marketing.",
    ],
  },
  {
    title: "Analytics and Cookies",
    body: [
      "The website may use analytics and attribution tools, including Google Analytics and Ahrefs analytics, to understand traffic sources, page performance and campaign effectiveness.",
      "These tools may use cookies or similar technologies. You can manage cookie settings in your browser.",
    ],
  },
  {
    title: "Service Providers",
    body: [
      "We may use trusted service providers for hosting, analytics, email delivery, lead management, authentication, database storage and communication. They process information only as needed to provide those services to us.",
    ],
  },
  {
    title: "Data Security and Retention",
    body: [
      "We use reasonable technical and organisational safeguards to protect information submitted through the website. No internet transmission or storage system can be guaranteed to be completely secure.",
      "We retain information for as long as needed for the purpose collected, business records, compliance, dispute resolution and legitimate follow-up, unless a longer period is required or permitted by law.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You may ask us to update, correct or delete information you submitted, subject to legitimate business or legal retention requirements.",
      "You may opt out of non-essential follow-up communication by contacting us.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-28 pb-20 bg-white">
      <section className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <p className="font-body text-xs font-bold uppercase tracking-[0.16em] mb-4" style={{ color: "#C9A84C" }}>
          SoHo Wealth
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4" style={{ color: "#0B1F3A" }}>
          Privacy Policy
        </h1>
        <p className="font-body text-sm mb-10" style={{ color: "#4A5568" }}>
          Last updated: June 12, 2026
        </p>
        <div className="prose prose-slate max-w-none">
          <p>
            This Privacy Policy explains how SoHo Wealth handles information submitted through
            this website and related consultation workflows. By using the website or submitting
            information, you agree to this policy.
          </p>

          {sections.map((section) => (
            <section key={section.title} className="mt-10">
              <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: "#0B1F3A" }}>
                {section.title}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="font-body leading-relaxed" style={{ color: "#4A5568" }}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <section className="mt-10">
            <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: "#0B1F3A" }}>
              Contact
            </h2>
            <p className="font-body leading-relaxed" style={{ color: "#4A5568" }}>
              For privacy questions, corrections or deletion requests, email{" "}
              <a href="mailto:invest@sohowealth.in">invest@sohowealth.in</a> or call{" "}
              <a href="tel:+919032999466">+91 90329 99466</a>.
            </p>
          </section>

          <section className="mt-10 rounded-lg border p-6" style={{ borderColor: "#E2E8F0", backgroundColor: "#F7F8FA" }}>
            <p className="font-body text-sm leading-relaxed mb-0" style={{ color: "#4A5568" }}>
              This page should be read with our{" "}
              <Link href="/disclosures" className="font-semibold" style={{ color: "#0B1F3A" }}>
                regulatory disclosures
              </Link>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
