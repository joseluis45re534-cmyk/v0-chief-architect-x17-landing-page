"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements, PaymentElement, useStripe, useElements, LinkAuthenticationElement } from "@stripe/react-stripe-js"
import { createPaymentIntent } from "@/app/actions/checkout"
import { Button } from "@/components/ui/button"
import { Loader2, Lock, CreditCard } from "lucide-react"
import { useRouter } from "next/navigation"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

function CheckoutFormContent() {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
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

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
        receipt_email: email,
      },
    })

    if (error) {
      setErrorMessage(error.message || "An unexpected error occurred.")
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 md:p-8">
      {/* Product Summary */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1a3e6e] to-[#2d5a91] flex items-center justify-center">
            <CreditCard className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-[#1a3e6e]">Chief Architect X17 - Full Version</h3>
            <p className="text-sm text-gray-500">
              Complete access to all features - One-time purchase with lifetime access
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 p-3 bg-gray-50 rounded-lg">
          <span className="text-gray-600">Total</span>
          <span className="text-xl font-bold text-[#1a3e6e]">US$69.00</span>
        </div>
      </div>

      {/* Email */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <LinkAuthenticationElement
          onChange={(e) => setEmail(e.value.email)}
          options={{
            defaultValues: {
              email: "",
            },
          }}
        />
      </div>

      {/* Payment Element */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Payment method</label>
        <PaymentElement
          options={{
            layout: "tabs",
            paymentMethodOrder: ["card", "link", "amazon_pay"],
          }}
        />
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{errorMessage}</div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={!stripe || isLoading}
        className="w-full h-12 text-base font-semibold bg-[#1a3e6e] hover:bg-[#2d5a91] text-white"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Lock className="mr-2 h-4 w-4" />
            Pay $69.00
          </>
        )}
      </Button>

      {/* Security Note */}
      <p className="mt-4 text-center text-xs text-gray-500">Your payment is secured with 256-bit SSL encryption</p>
    </form>
  )
}

export function CheckoutForm() {
  const [clientSecret, setClientSecret] = useState<string | null>(null)

  useEffect(() => {
    createPaymentIntent().then((data) => {
      if (data.clientSecret) {
        setClientSecret(data.clientSecret)
      }
    })
  }, [])

  if (!clientSecret) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-[#1a3e6e]" />
          <p className="text-gray-500">Loading checkout...</p>
        </div>
      </div>
    )
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: "stripe",
          variables: {
            colorPrimary: "#1a3e6e",
            colorBackground: "#ffffff",
            colorText: "#1a3e6e",
            colorDanger: "#df1b41",
            fontFamily: "system-ui, sans-serif",
            borderRadius: "8px",
            spacingUnit: "4px",
          },
          rules: {
            ".Input": {
              border: "1px solid #e2e8f0",
              boxShadow: "none",
              padding: "12px",
            },
            ".Input:focus": {
              border: "1px solid #1a3e6e",
              boxShadow: "0 0 0 1px #1a3e6e",
            },
            ".Label": {
              fontWeight: "500",
              color: "#374151",
            },
            ".Tab": {
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
            },
            ".Tab--selected": {
              borderColor: "#1a3e6e",
              backgroundColor: "#f0f4f8",
            },
          },
        },
      }}
    >
      <CheckoutFormContent />
    </Elements>
  )
}
