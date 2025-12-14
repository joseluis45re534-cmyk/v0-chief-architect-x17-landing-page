export const PRICING = {
  usd: {
    price: 69,
    currency: "USD",
    symbol: "$",
    locale: "en-US",
  },
  cad: {
    price: 95,
    currency: "CAD",
    symbol: "$",
    locale: "en-CA",
  },
}

export function getPricing(locale: "usd" | "cad" = "usd") {
  return PRICING[locale]
}
