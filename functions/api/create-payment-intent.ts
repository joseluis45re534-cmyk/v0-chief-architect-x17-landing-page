import type { PagesFunction } from "@cloudflare/workers-types"

export const onRequest: PagesFunction = async (context) => {
  // @ts-ignore
  const stripe = require("stripe")(context.env.STRIPE_SECRET_KEY)

  try {
    const { amount, currency } = await context.request.json()

    // Create a PaymentIntent with automatic payment methods enabled
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

    return new Response(
      JSON.stringify({
        clientSecret: paymentIntent.client_secret,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    )
  } catch (err: any) {
    console.error("[v0] Payment Intent creation error:", err)
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}
