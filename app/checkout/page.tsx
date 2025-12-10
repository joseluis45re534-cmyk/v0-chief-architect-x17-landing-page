"use client"

import type React from "react"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { loadStripe } from "@stripe/stripe-js"
import { Elements, PaymentElement, LinkAuthenticationElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Loader2, Shield, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const stripePromise = loadStripe(
  "pk_live_51ScCjZJ2ODoAACday2ietOYSGx87Ij93FJNEySYL4lKvUjNesIeebvCHKmsF4gHboG9Oo3jKNniAaB7Ql5AnSMrs00iFXpiCZw",
)

function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)
    setErrorMessage(null)

    // Track purchase attempt
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "add_payment_info", {
        currency: "USD",
        value: 85.75,
        payment_type: "credit_card",
      })
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
        receipt_email: email,
      },
    })

    if (error) {
      setErrorMessage(error.message || "An error occurred")
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email for receipt */}
      <div>
        <LinkAuthenticationElement
          onChange={(e) => {
            setEmail(e.value.email)
          }}
          options={{
            defaultValues: {
              email: email,
            },
          }}
        />
      </div>

      {/* Payment Element with all payment methods */}
      <div className="rounded-lg border-2 border-gray-200 p-4">
        <PaymentElement
          options={{
            layout: {
              type: "tabs",
              defaultCollapsed: false,
            },
            wallets: {
              applePay: "auto",
              googlePay: "auto",
            },
            fields: {
              billingDetails: {
                address: {
                  country: "auto",
                },
              },
            },
          }}
        />
      </div>

      {errorMessage && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200">
          <p className="text-sm text-red-600">{errorMessage}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={!stripe || isLoading}
        className="w-full py-6 text-lg font-semibold"
        style={{ backgroundColor: "#1a3e6e" }}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Lock className="mr-2 h-5 w-5" />
            Complete Purchase - $85.75
          </>
        )}
      </Button>

      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
        <Shield className="h-4 w-4" />
        <span>Secured by Stripe · 256-bit SSL encryption</span>
      </div>
    </form>
  )
}

function CheckoutContent() {
  const searchParams = useSearchParams()
  const [clientSecret, setClientSecret] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Create PaymentIntent on component mount
    console.log("[v0] Initializing payment intent...")
    fetch("/functions/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: 8575, // $85.75 in cents
        currency: "usd",
      }),
    })
      .then((res) => {
        console.log("[v0] Response status:", res.status)
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`)
        }
        return res.json()
      })
      .then((data) => {
        console.log("[v0] Payment intent response:", data)
        if (data.clientSecret) {
          setClientSecret(data.clientSecret)
          setLoading(false)
        } else if (data.error) {
          setError(`Payment initialization failed: ${data.error}`)
          setLoading(false)
        } else {
          setError("Failed to initialize payment - no client secret received")
          setLoading(false)
        }
      })
      .catch((err) => {
        console.error("[v0] Payment intent error:", err)
        setError(
          `Unable to initialize checkout. Please ensure your Stripe account is configured correctly. Error: ${err.message}`,
        )
        setLoading(false)
      })
  }, [])

  const features = [
    "Full 3D modeling capabilities",
    "AI-assisted drafting",
    "Advanced photorealistic rendering",
    "Cloud project sync",
    "Construction documentation",
    "Material lists & estimates",
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#f0f4f8" }}>
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4" style={{ color: "#1a3e6e" }} />
          <p className="text-lg text-gray-600">Loading secure checkout...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#f0f4f8" }}>
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⚠️</span>
          </div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#1a3e6e" }}>
            Checkout Error
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link href="/">
            <Button style={{ backgroundColor: "#1a3e6e" }}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: "#f0f4f8" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to homepage
          </Link>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Product Summary */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/chief-architect-x17-logo.webp"
                      alt="Chief Architect X17"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold" style={{ color: "#1a3e6e" }}>
                      Chief Architect X17
                    </h1>
                    <p className="text-gray-600">Full Version</p>
                  </div>
                </div>

                <div className="border-t border-b py-6 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">License</span>
                    <span className="font-medium">1 User - Lifetime</span>
                  </div>
                  <div className="flex justify-between items-center text-2xl font-bold">
                    <span style={{ color: "#1a3e6e" }}>Total</span>
                    <span style={{ color: "#2d5a91" }}>$85.75 USD</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold mb-3" style={{ color: "#1a3e6e" }}>
                    What's included:
                  </h3>
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#2d5a91" }} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 text-green-700">
                    <Shield className="h-5 w-5" />
                    <span className="font-medium">30-Day Money-Back Guarantee</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-2" style={{ color: "#1a3e6e" }}>
                  Secure Checkout
                </h2>
                <p className="text-gray-600 mb-8">
                  Complete your purchase with credit card, Apple Pay, Google Pay, Link, or Cash App
                </p>

                {clientSecret && (
                  <Elements
                    stripe={stripePromise}
                    options={{
                      clientSecret,
                      appearance: {
                        theme: "stripe",
                        variables: {
                          colorPrimary: "#1a3e6e",
                          colorBackground: "#ffffff",
                          colorText: "#1f2937",
                          colorDanger: "#ef4444",
                          fontFamily: "system-ui, sans-serif",
                          spacingUnit: "4px",
                          borderRadius: "8px",
                        },
                      },
                    }}
                  >
                    <CheckoutForm />
                  </Elements>
                )}
              </div>

              {/* Trust badges */}
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>Accepted payment methods</p>
                <div className="flex justify-center gap-4 mt-3 flex-wrap">
                  <span className="px-3 py-1 bg-white rounded border text-xs">💳 Visa</span>
                  <span className="px-3 py-1 bg-white rounded border text-xs">💳 Mastercard</span>
                  <span className="px-3 py-1 bg-white rounded border text-xs">💳 Amex</span>
                  <span className="px-3 py-1 bg-white rounded border text-xs"> Apple Pay</span>
                  <span className="px-3 py-1 bg-white rounded border text-xs">G Google Pay</span>
                  <span className="px-3 py-1 bg-white rounded border text-xs">🔗 Link</span>
                  <span className="px-3 py-1 bg-white rounded border text-xs">💵 Cash App</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#f0f4f8" }}>
          <Loader2 className="h-12 w-12 animate-spin" style={{ color: "#1a3e6e" }} />
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  )
}
