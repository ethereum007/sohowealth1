export const SITE_URL = "https://sohowealth.in";
export const ORG_ID = `${SITE_URL}/#organization`;
export const PERSON_KIRAN_ID = `${SITE_URL}/#kiran-dutta`;

export const kiranPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_KIRAN_ID,
  name: "Kiran Dutta",
  jobTitle: "Founder & Chief Investment Strategist",
  worksFor: { "@id": ORG_ID },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Columbia University" },
  url: `${SITE_URL}/about`,
  image: `${SITE_URL}/kiran-dutta.jpeg`,
  sameAs: ["https://linkedin.com/in/kirandutta"],
  knowsAbout: [
    "Wealth Management",
    "Portfolio Management Services",
    "Specialized Investment Funds",
    "Alternative Investment Funds",
    "NRI Investing",
    "Global Investing",
    "Pre-IPO Investments",
    "RSU & ESOP Tax Planning",
  ],
};

interface ServiceSchemaInput {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string[];
}

export function buildServiceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed = ["Hyderabad", "Telangana", "India"],
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url,
    provider: { "@id": ORG_ID },
    areaServed: areaServed.map((a) => ({ "@type": "Place", name: a })),
    audience: {
      "@type": "Audience",
      audienceType: "HNIs, Family Offices, NRIs, and Entrepreneurs",
    },
  };
}
