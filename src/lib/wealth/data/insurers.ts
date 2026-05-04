// IRDAI-registered insurance providers (curated, current).
// Source: IRDAI registered insurer list. Update annually.

import type { ComboboxOption } from "@/components/ui/combobox";
import type { PolicyType } from "@/lib/wealth/types";

const LIFE = [
  "LIC of India",
  "HDFC Life",
  "ICICI Prudential Life",
  "SBI Life",
  "Max Life",
  "Tata AIA Life",
  "Bajaj Allianz Life",
  "Aditya Birla Sun Life",
  "Kotak Mahindra Life",
  "Canara HSBC Life",
  "PNB MetLife",
  "Bandhan Life",
  "IndiaFirst Life",
  "Reliance Nippon Life",
  "Pramerica Life",
  "Future Generali Life",
  "Edelweiss Tokio Life",
  "Star Union Dai-ichi Life",
  "Aegon Life",
  "Aviva Life",
  "Ageas Federal Life",
  "Shriram Life",
  "Sahara Life",
  "Exide Life",
];

const HEALTH = [
  "Star Health",
  "Niva Bupa", // formerly Max Bupa
  "Care Health", // formerly Religare
  "ManipalCigna",
  "Aditya Birla Health",
  "HDFC Ergo Health",
  "ICICI Lombard",
  "Bajaj Allianz General",
  "TATA AIG General",
  "New India Assurance",
  "Oriental Insurance",
  "United India Insurance",
  "National Insurance",
  "Reliance General",
  "SBI General",
  "Future Generali General",
  "Cholamandalam MS",
  "Liberty General",
  "Iffco Tokio",
  "Universal Sompo",
  "Magma HDI",
  "Royal Sundaram",
  "Acko",
  "Digit Insurance",
  "Zuno General", // formerly Edelweiss General
];

const MOTOR_GENERAL = [
  "ICICI Lombard",
  "Bajaj Allianz General",
  "HDFC Ergo",
  "Tata AIG General",
  "Reliance General",
  "SBI General",
  "Acko",
  "Digit Insurance",
  "New India Assurance",
  "Oriental Insurance",
  "United India Insurance",
  "National Insurance",
  "Future Generali",
  "Cholamandalam MS",
  "Liberty General",
  "Iffco Tokio",
  "Royal Sundaram",
  "Universal Sompo",
  "Magma HDI",
  "Zuno General",
];

function toOptions(list: string[], group?: string): ComboboxOption[] {
  return list.map(name => ({ value: name, label: name, group }));
}

/** All insurers de-duplicated, grouped by primary line of business. */
export function insurerOptions(filterFor?: PolicyType): ComboboxOption[] {
  if (filterFor === "term_life") return toOptions(LIFE, "Life Insurers");
  if (filterFor === "health" || filterFor === "critical_illness")
    return toOptions(HEALTH, "Health & General Insurers");
  if (filterFor === "motor" || filterFor === "personal_accident")
    return toOptions(MOTOR_GENERAL, "Motor & General Insurers");

  // Default: all, grouped
  return [
    ...toOptions(LIFE, "Life"),
    ...toOptions(HEALTH, "Health"),
    ...toOptions(MOTOR_GENERAL, "Motor & General"),
  ];
}
