import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout-form"
import { Check, Shield, Crown, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Checkout - Chief Architect X17",
  description: "Complete your purchase of Chief Architect X17 - Professional architectural design software.",
}

const features = [
  "Full 3D modeling capabilities",
  "Advanced photorealistic rendering",
  "Construction documentation",
  "Material lists & estimates",
  "BIM integration tools",
  "Advanced CAD tools",
  "60-day money-back guarantee",
]

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ backgroundColor: "#f0f4f8" }}>
        <div className="container mx-auto px-4 py-12 md:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#1a3e6e] mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Order Summary */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a3e6e" }}>
                  Order Summary
                </h2>

                {/* Product Card */}
                <div className="flex gap-4 pb-6 border-b border-gray-200">
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#1a3e6e] to-[#2d5a91] flex items-center justify-center">
                    <img
                      src="/images/up-683x1024.webp"
                      alt="Chief Architect X17"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg" style={{ color: "#1a3e6e" }}>
                      Chief Architect X17
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">Full Version - Lifetime License</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold" style={{ color: "#2d5a91" }}>
                        $69
                      </span>
                      <span className="text-sm text-gray-500 line-through">$299</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                        77% OFF
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="py-6 border-b border-gray-200">
                  <h4 className="font-semibold mb-4" style={{ color: "#1a3e6e" }}>
                    What's Included:
                  </h4>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#2d5a91" }} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Badges */}
                <div className="grid grid-cols-2 gap-4 py-6">
                  <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "#f0f4f8" }}>
                    <Shield className="h-8 w-8 mx-auto mb-2" style={{ color: "#2d5a91" }} />
                    <p className="text-sm font-medium" style={{ color: "#1a3e6e" }}>
                      One-time Payment
                    </p>
                  </div>
                  <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "#f0f4f8" }}>
                    <Crown className="h-8 w-8 mx-auto mb-2" style={{ color: "#2d5a91" }} />
                    <p className="text-sm font-medium" style={{ color: "#1a3e6e" }}>
                      Lifetime Access
                    </p>
                  </div>
                </div>

                {/* Total */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">$69.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-bold" style={{ color: "#1a3e6e" }}>
                    <span>Total</span>
                    <span>$69.00</span>
                  </div>
                </div>

                {/* Guarantee */}
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-[#1a3e6e] to-[#2d5a91] text-white">
                  <div className="flex items-center gap-3">
                    <Shield className="h-10 w-10 flex-shrink-0" />
                    <div>
                      <p className="font-bold">60-Day Money-Back Guarantee</p>
                      <p className="text-sm text-white/80">Not satisfied? Get a full refund, no questions asked.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="order-1 lg:order-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#1a3e6e" }}>
                Complete Your Purchase
              </h1>
              <p className="text-gray-600 mb-8">
                Enter your payment details to get instant access to Chief Architect X17.
              </p>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <CheckoutForm />
              </div>

              {/* Security Badges */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>256-bit SSL Encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>PCI DSS Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
