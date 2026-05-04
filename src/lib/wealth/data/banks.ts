// Indian scheduled commercial banks — for FD, savings, salary credit dropdowns.
// Source: RBI list of scheduled commercial banks. Update annually.

import type { ComboboxOption } from "@/components/ui/combobox";

const PRIVATE = [
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Kotak Mahindra Bank",
  "IndusInd Bank",
  "Yes Bank",
  "IDFC First Bank",
  "Federal Bank",
  "RBL Bank",
  "South Indian Bank",
  "Karnataka Bank",
  "Karur Vysya Bank",
  "City Union Bank",
  "DCB Bank",
  "Tamilnad Mercantile Bank",
  "Bandhan Bank",
  "CSB Bank",
  "Dhanlaxmi Bank",
  "Nainital Bank",
  "Jammu & Kashmir Bank",
];

const PUBLIC = [
  "State Bank of India",
  "Punjab National Bank",
  "Bank of Baroda",
  "Canara Bank",
  "Union Bank of India",
  "Bank of India",
  "Indian Bank",
  "Central Bank of India",
  "Bank of Maharashtra",
  "Punjab & Sind Bank",
  "UCO Bank",
  "Indian Overseas Bank",
];

const FOREIGN = [
  "DBS Bank India",
  "HSBC India",
  "Standard Chartered India",
  "Citibank India",
  "Deutsche Bank India",
  "Barclays India",
];

const SMALL_FINANCE = [
  "AU Small Finance Bank",
  "Equitas Small Finance Bank",
  "Ujjivan Small Finance Bank",
  "ESAF Small Finance Bank",
  "Suryoday Small Finance Bank",
  "Jana Small Finance Bank",
  "Fincare Small Finance Bank",
  "Capital Small Finance Bank",
  "Utkarsh Small Finance Bank",
  "Unity Small Finance Bank",
];

export function bankOptions(): ComboboxOption[] {
  return [
    ...PRIVATE.map(b => ({ value: b, label: b, group: "Private Sector" })),
    ...PUBLIC.map(b => ({ value: b, label: b, group: "Public Sector" })),
    ...FOREIGN.map(b => ({ value: b, label: b, group: "Foreign" })),
    ...SMALL_FINANCE.map(b => ({ value: b, label: b, group: "Small Finance" })),
  ];
}
