// Top 100 Indian cities by population — covers ~95% of UHNI/HNI residence.
// Free-text fallback handles long-tail cities.

import type { ComboboxOption } from "@/components/ui/combobox";

const CITIES_TIER_1 = [
  "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai",
  "Kolkata", "Ahmedabad", "Pune",
];

const CITIES_TIER_2 = [
  "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Bhopal",
  "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra",
  "Nashik", "Faridabad", "Meerut", "Rajkot", "Varanasi", "Srinagar",
  "Aurangabad", "Amritsar", "Navi Mumbai", "Allahabad", "Ranchi", "Coimbatore",
  "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur", "Madurai", "Raipur", "Kota",
  "Guwahati", "Chandigarh", "Solapur", "Hubli-Dharwad", "Mysore",
  "Tiruchirappalli", "Tiruppur", "Gurgaon", "Aligarh", "Jalandhar",
  "Bhubaneswar", "Salem", "Warangal", "Thiruvananthapuram", "Saharanpur",
  "Gorakhpur", "Guntur", "Bikaner", "Amravati", "Noida", "Jamshedpur",
  "Bhilai", "Cuttack", "Firozabad", "Kochi", "Nellore", "Bhavnagar",
  "Dehradun", "Durgapur", "Asansol", "Rourkela", "Nanded", "Kolhapur", "Ajmer",
  "Akola", "Gulbarga", "Jamnagar", "Ujjain", "Siliguri", "Jhansi",
  "Ulhasnagar", "Jammu", "Sangli-Miraj", "Mangalore", "Erode", "Belgaum",
  "Tirunelveli", "Gaya", "Jalgaon", "Udaipur", "Maheshtala", "Davangere",
  "Tirupati", "Panvel", "Tiruvottiyur", "Bidar", "Karimnagar",
  "Kakinada", "Khammam", "Rajahmundry", "Bilaspur", "Korba", "Shimla",
  "Tumkur", "Hisar", "Karnal", "Panipat", "Rohtak", "Patiala",
];

export function cityOptions(): ComboboxOption[] {
  return [
    ...CITIES_TIER_1.map(c => ({ value: c, label: c, group: "Metros" })),
    ...CITIES_TIER_2.map(c => ({ value: c, label: c, group: "Tier 2 / Tier 3" })),
  ];
}
