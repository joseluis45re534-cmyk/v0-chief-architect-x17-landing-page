"use client"

import { Button } from "@/components/ui/button"
import { Check, ShieldCheck, Crown } from "lucide-react"
import { useEffect, useRef } from "react"

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".animate-on-scroll")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  const handleBuyNowClick = () => {
    // Track add_to_cart event for analytics (Google Analytics 4)
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "add_to_cart", {
        currency: "USD",
        value: 69.0,
        items: [
          {
            item_id: "chief-architect-x17",
            item_name: "Chief Architect X17 Full Version",
            price: 69.0,
            quantity: 1,
          },
        ],
      })

      // Also track as begin_checkout
      ;(window as any).gtag("event", "begin_checkout", {
        currency: "USD",
        value: 69.0,
        items: [
          {
            item_id: "chief-architect-x17",
            item_name: "Chief Architect X17 Full Version",
            price: 69.0,
            quantity: 1,
          },
        ],
      })
    }

    // Redirect to Stripe Payment Link
    window.location.href = "https://t.co/rGXStKA1xN"
  }

  const features = [
    "Full 3D modeling capabilities",
    "Advanced photorealistic rendering",
    "Construction documentation",
    "Material lists & estimates",
    "BIM integration tools",
    "Advanced CAD tools",
    "30-day money-back guarantee",
  ]

  return (
    <section ref={sectionRef} id="pricing" className="py-20 md:py-28" style={{ backgroundColor: "#f0f4f8" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: "#1a3e6e" }}>
            Get Chief Architect X17 Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            One-time purchase with lifetime access. Includes all premium features and free updates.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="animate-on-scroll relative rounded-2xl p-10 border-2 shadow-2xl bg-white border-[#2d5a91]">
            <div
              className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-white font-bold text-sm shadow-lg"
              style={{ backgroundColor: "#2d5a91" }}
            >
              ONE TIME PAYMENT - LIFETIME ACTIVATION
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 className="text-3xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Full Version
              </h3>
              <div className="mb-2">
                <span className="text-5xl font-bold" style={{ color: "#2d5a91" }}>
                  $69
                </span>
              </div>
              <p className="text-gray-600 text-lg">Complete access to all features</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div
                className="rounded-xl p-5 text-center shadow-lg border-2 transform hover:scale-105 transition-transform duration-300"
                style={{
                  background: "linear-gradient(135deg, #1a3e6e 0%, #2d5a91 100%)",
                  borderColor: "#2d5a91",
                }}
              >
                <ShieldCheck className="h-10 w-10 mx-auto mb-3 text-white" />
                <p className="text-white font-bold text-lg">One-time purchase</p>
              </div>

              <div
                className="rounded-xl p-5 text-center shadow-lg border-2 transform hover:scale-105 transition-transform duration-300"
                style={{
                  background: "linear-gradient(135deg, #1a3e6e 0%, #2d5a91 100%)",
                  borderColor: "#2d5a91",
                }}
              >
                <Crown className="h-10 w-10 mx-auto mb-3 text-white" />
                <p className="text-white font-bold text-lg">Lifetime access</p>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#2d5a91" }} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full py-6 text-lg font-semibold transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#1a3e6e" }}
              onClick={handleBuyNowClick}
              data-event="add_to_cart"
              data-product="chief-architect-x17"
              data-value="69"
            >
              Buy Now - $69
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
