import type { PagesFunction } from "@cloudflare/workers-types"

export const onRequest: PagesFunction = async (context) => {
  // @ts-ignore
  const stripe = require("stripe")(context.env.STRIPE_SECRET_KEY)

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Chief Architect X17 Full Version",
              description: "Complete access to all features - One-time purchase with lifetime access",
              images: ["https://chiefarchitect.pro/images/up-683x1024.webp"],
            },
            unit_amount: 8575, // $85.75 in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${context.request.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${context.request.headers.get("origin")}/?canceled=true`,
      automatic_tax: { enabled: true },
    })

    return new Response(JSON.stringify({ url: session.url }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}
