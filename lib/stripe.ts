import { loadStripe } from "@stripe/stripe-js"

// Initialize Stripe with your publishable key
export const stripePromise = loadStripe(
  "pk_live_51ScCjZJ2ODoAACday2ietOYSGx87Ij93FJNEySYL4lKvUjNesIeebvCHKmsF4gHboG9Oo3jKNniAaB7Ql5AnSMrs00iFXpiCZw",
)

// Product configuration
export const STRIPE_PRODUCT = {
  name: "Chief Architect X17 - Full Version",
  price: 69.0,
  currency: "USD",
  paymentLink: "https://buy.stripe.com/14A28qfPw0B0cte59TcEw01",
}
