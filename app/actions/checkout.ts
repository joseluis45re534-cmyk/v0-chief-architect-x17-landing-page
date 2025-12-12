"use server"

import { stripe } from "@/lib/stripe-server"
import { headers } from "next/headers"

export async function createPaymentIntent() {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 6900, // $69.00 in cents
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
    metadata: {
      product: "Chief Architect X17 - Full Version",
    },
  })

  return {
    clientSecret: paymentIntent.client_secret,
  }
}

export async function confirmPayment(paymentIntentId: string) {
  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)
  return {
    status: paymentIntent.status,
    amount: paymentIntent.amount,
  }
}

// Create Checkout Session function is retained for reference or potential use
export async function createCheckoutSession() {
  const headersList = await headers()
  const host = headersList.get("host") || "localhost:3000"
  const protocol = headersList.get("x-forwarded-proto") || "https"

  let baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  // If NEXT_PUBLIC_BASE_URL is not set or doesn't have a scheme, construct it
  if (!baseUrl || (!baseUrl.startsWith("http://") && !baseUrl.startsWith("https://"))) {
    baseUrl = `${protocol}://${host}`
  }

  // Fallback: ensure we always have https if nothing else works
  if (!baseUrl.startsWith("http://") && !baseUrl.startsWith("https://")) {
    baseUrl = `https://${baseUrl}`
  }

  console.log("[v0] Creating checkout session with baseUrl:", baseUrl)

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Chief Architect X17 - Full Version",
            description: "Complete access to all features - One-time purchase with lifetime access",
            images: ["https://chiefarchitect.pro/images/up-683x1024.webp"],
          },
          unit_amount: 6900, // $69.00 in cents
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    return_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
  })

  return session.client_secret
}
