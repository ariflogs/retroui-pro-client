// Purchasing Power Parity (PPP) discount configuration
// Based on GDP per capita thresholds:
// < $5K = 60%, < $10K = 50%, < $20K = 40%, < $30K = 30%, < $40K = 20%

export interface PPPCountry {
  code: string;
  name: string;
  discount: number;
  flag: string;
}

export const PPP_COUNTRIES: Record<string, PPPCountry> = {
  // Tier 1: 60% discount (GDP per capita < $5K)
  IN: { code: "IN", name: "India", discount: 60, flag: "🇮🇳" },
  PK: { code: "PK", name: "Pakistan", discount: 60, flag: "🇵🇰" },
  BD: { code: "BD", name: "Bangladesh", discount: 60, flag: "🇧🇩" },
  NG: { code: "NG", name: "Nigeria", discount: 60, flag: "🇳🇬" },
  EG: { code: "EG", name: "Egypt", discount: 60, flag: "🇪🇬" },
  VN: { code: "VN", name: "Vietnam", discount: 60, flag: "🇻🇳" },
  PH: { code: "PH", name: "Philippines", discount: 60, flag: "🇵🇭" },
  ID: { code: "ID", name: "Indonesia", discount: 60, flag: "🇮🇩" },
  UA: { code: "UA", name: "Ukraine", discount: 60, flag: "🇺🇦" },
  KE: { code: "KE", name: "Kenya", discount: 60, flag: "🇰🇪" },
  ET: { code: "ET", name: "Ethiopia", discount: 60, flag: "🇪🇹" },
  GH: { code: "GH", name: "Ghana", discount: 60, flag: "🇬🇭" },
  TZ: { code: "TZ", name: "Tanzania", discount: 60, flag: "🇹🇿" },
  NP: { code: "NP", name: "Nepal", discount: 60, flag: "🇳🇵" },
  LK: { code: "LK", name: "Sri Lanka", discount: 60, flag: "🇱🇰" },
  MM: { code: "MM", name: "Myanmar", discount: 60, flag: "🇲🇲" },
  KH: { code: "KH", name: "Cambodia", discount: 60, flag: "🇰🇭" },
  UZ: { code: "UZ", name: "Uzbekistan", discount: 60, flag: "🇺🇿" },
  MA: { code: "MA", name: "Morocco", discount: 60, flag: "🇲🇦" },
  DZ: { code: "DZ", name: "Algeria", discount: 60, flag: "🇩🇿" },
  TN: { code: "TN", name: "Tunisia", discount: 60, flag: "🇹🇳" },
  SN: { code: "SN", name: "Senegal", discount: 60, flag: "🇸🇳" },
  UG: { code: "UG", name: "Uganda", discount: 60, flag: "🇺🇬" },
  ZW: { code: "ZW", name: "Zimbabwe", discount: 60, flag: "🇿🇼" },
  BO: { code: "BO", name: "Bolivia", discount: 60, flag: "🇧🇴" },

  // Tier 2: 50% discount (GDP per capita $5K - $10K)
  BR: { code: "BR", name: "Brazil", discount: 50, flag: "🇧🇷" },
  CO: { code: "CO", name: "Colombia", discount: 50, flag: "🇨🇴" },
  PE: { code: "PE", name: "Peru", discount: 50, flag: "🇵🇪" },
  TH: { code: "TH", name: "Thailand", discount: 50, flag: "🇹🇭" },
  ZA: { code: "ZA", name: "South Africa", discount: 50, flag: "🇿🇦" },
  EC: { code: "EC", name: "Ecuador", discount: 50, flag: "🇪🇨" },
  DO: { code: "DO", name: "Dominican Republic", discount: 50, flag: "🇩🇴" },
  GT: { code: "GT", name: "Guatemala", discount: 50, flag: "🇬🇹" },
  RS: { code: "RS", name: "Serbia", discount: 50, flag: "🇷🇸" },
  GE: { code: "GE", name: "Georgia", discount: 50, flag: "🇬🇪" },
  AM: { code: "AM", name: "Armenia", discount: 50, flag: "🇦🇲" },
  JO: { code: "JO", name: "Jordan", discount: 50, flag: "🇯🇴" },

  // Tier 3: 40% discount (GDP per capita $10K - $20K)
  MX: { code: "MX", name: "Mexico", discount: 40, flag: "🇲🇽" },
  TR: { code: "TR", name: "Turkey", discount: 40, flag: "🇹🇷" },
  RU: { code: "RU", name: "Russia", discount: 40, flag: "🇷🇺" },
  MY: { code: "MY", name: "Malaysia", discount: 40, flag: "🇲🇾" },
  AR: { code: "AR", name: "Argentina", discount: 40, flag: "🇦🇷" },
  CL: { code: "CL", name: "Chile", discount: 40, flag: "🇨🇱" },
  CN: { code: "CN", name: "China", discount: 40, flag: "🇨🇳" },
  RO: { code: "RO", name: "Romania", discount: 40, flag: "🇷🇴" },
  BG: { code: "BG", name: "Bulgaria", discount: 40, flag: "🇧🇬" },
  CR: { code: "CR", name: "Costa Rica", discount: 40, flag: "🇨🇷" },
  PA: { code: "PA", name: "Panama", discount: 40, flag: "🇵🇦" },
  UY: { code: "UY", name: "Uruguay", discount: 40, flag: "🇺🇾" },

  // Tier 4: 30% discount (GDP per capita $20K - $30K)
  PL: { code: "PL", name: "Poland", discount: 30, flag: "🇵🇱" },
  HU: { code: "HU", name: "Hungary", discount: 30, flag: "🇭🇺" },
  HR: { code: "HR", name: "Croatia", discount: 30, flag: "🇭🇷" },
  CZ: { code: "CZ", name: "Czech Republic", discount: 30, flag: "🇨🇿" },
  PT: { code: "PT", name: "Portugal", discount: 30, flag: "🇵🇹" },
  GR: { code: "GR", name: "Greece", discount: 30, flag: "🇬🇷" },
  SK: { code: "SK", name: "Slovakia", discount: 30, flag: "🇸🇰" },
  EE: { code: "EE", name: "Estonia", discount: 30, flag: "🇪🇪" },
  LT: { code: "LT", name: "Lithuania", discount: 30, flag: "🇱🇹" },
  LV: { code: "LV", name: "Latvia", discount: 30, flag: "🇱🇻" },
  SI: { code: "SI", name: "Slovenia", discount: 30, flag: "🇸🇮" },

  // Tier 5: 20% discount (GDP per capita $30K - $40K)
  // KR: { code: "KR", name: "South Korea", discount: 20, flag: "🇰🇷" },
  // TW: { code: "TW", name: "Taiwan", discount: 20, flag: "🇹🇼" },
  // ES: { code: "ES", name: "Spain", discount: 20, flag: "🇪🇸" },
  // IT: { code: "IT", name: "Italy", discount: 20, flag: "🇮🇹" },
  // JP: { code: "JP", name: "Japan", discount: 20, flag: "🇯🇵" },
  // CY: { code: "CY", name: "Cyprus", discount: 20, flag: "🇨🇾" },
  // MT: { code: "MT", name: "Malta", discount: 20, flag: "🇲🇹" },
};

// Countries with NO PPP discount (GDP per capita > $40K)
// US, CA, UK, AU, DE, CH, LU, SG, NL, FR, BE, AT, IE, SE, DK, NO, FI, AE, HK, NZ, IL

export function getPPPDiscount(countryCode: string | null): PPPCountry | null {
  if (!countryCode) return null;
  return PPP_COUNTRIES[countryCode.toUpperCase()] || null;
}

export function calculatePPPPrice(
  originalPrice: number,
  discountPercent: number
): number {
  return Math.round(originalPrice * (1 - discountPercent / 100));
}

const COUPON_CODES: Record<number, string> = {
  60: "4LE9Y",
  50: "6CT6B",
  40: "C4NML",
  30: "YE61H",
};

export function getPPPCouponCode(discount: number): string | null {
  return COUPON_CODES[discount] || null;
}
