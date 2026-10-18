// Keep public contact details and structured data aligned with the Business Profile.
export const BUSINESS_NAME = "SoHo Wealth";
export const GOOGLE_BUSINESS_URL =
  "https://www.google.com/maps/place/SoHo+Wealth/data=!4m2!3m1!1s0x0:0x93195ad72d910607";
export const BUSINESS_HOURS_LABEL =
  "Mon - Fri: 9:00 AM - 8:00 PM; Sat - Sun: 9:00 AM - 5:00 PM";
export const BUSINESS_OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "20:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday", "Sunday"],
    opens: "09:00",
    closes: "17:00",
  },
];
export const BUSINESS_SOCIAL_PROFILES = [
  "https://www.linkedin.com/company/sohowealth",
  "https://www.instagram.com/soho.wealth/",
];
