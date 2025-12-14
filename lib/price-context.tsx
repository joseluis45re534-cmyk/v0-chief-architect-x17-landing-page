"use client"

import { createContext } from "react"

export interface PricingConfig {
  price: number
  currency: string
  symbol: string
  locale: string
}

export const PriceContext = createContext<PricingConfig>({
  price: 69,
  currency: "USD",
  symbol: "$",
  locale: "en-US",
})
