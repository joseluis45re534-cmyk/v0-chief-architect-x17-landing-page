import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-12-18.acacia",
})

export async function POST(req: Request) {
  try {
    const { amount, currency } = await req.json()

    // Create a PaymentIntent with all payment method types enabled
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "always",
      },
      metadata: {
        product: "Chief Architect X17 Full Version",
      },
      description: "Chief Architect X17 - Full Version License",
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error: any) {
    console.error("[v0] Payment Intent creation error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
