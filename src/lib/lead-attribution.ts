"use client";

export type LeadAttribution = {
  landing_page: string | null;
  page_path: string | null;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
};

const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export function captureLeadAttribution(): LeadAttribution {
  if (typeof window === "undefined") {
    return {
      landing_page: null,
      page_path: null,
      referrer: null,
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_term: null,
      utm_content: null,
    };
  }

  const params = new URLSearchParams(window.location.search);
  const storedLandingPage = window.sessionStorage.getItem("landing_page");
  const landingPage = storedLandingPage || window.location.href;

  if (!storedLandingPage) {
    window.sessionStorage.setItem("landing_page", landingPage);
  }

  const attribution: LeadAttribution = {
    landing_page: landingPage,
    page_path: window.location.pathname,
    referrer: document.referrer || null,
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
    utm_term: null,
    utm_content: null,
  };

  keys.forEach((key) => {
    const value = params.get(key) || window.sessionStorage.getItem(key);
    if (value) {
      window.sessionStorage.setItem(key, value);
      attribution[key] = value;
    }
  });

  return attribution;
}
