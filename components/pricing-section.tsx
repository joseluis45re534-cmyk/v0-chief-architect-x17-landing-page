"use client"

import { Button } from "@/components/ui/button"
import { Check, Crown } from "lucide-react"
import { useEffect, useRef } from "react"

const pricingTiers = [
  {
    name: "Essentials",
    price: "$3,495",
    description: "Perfect for individual professionals and small firms",
    features: [
      "Full 3D modeling capabilities",
      "Construction documentation",
      "Basic rendering engine",
      "Material lists & estimates",
      "Email support",
      "1 user license",
    ],
    cta: "Buy Essentials",
    highlighted: false,
  },
  {
    name: "Premier",
    price: "$4,995",
    description: "Most popular for growing design firms",
    features: [
      "Everything in Essentials",
      "AI-assisted drafting",
      "Advanced photorealistic rendering",
      "Cloud project sync",
      "BIM integration tools",
      "Priority phone & email support",
      "3 user licenses",
      "Advanced CAD tools",
      "Real-time collaboration",
    ],
    cta: "Buy Premier",
    highlighted: true,
    badge: "Best Value",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large firms with advanced needs",
    features: [
      "Everything in Premier",
      "Unlimited user licenses",
      "Dedicated account manager",
      "24/7 priority support",
      "Custom training sessions",
      "Advanced API access",
      "Custom integrations",
      "Volume licensing discounts",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

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

  return (
    <section ref={sectionRef} className="py-20 md:py-28" style={{ backgroundColor: "#f0f4f8" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: "#1a3e6e" }}>
            Choose the Perfect Plan for Your Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            One-time purchase with free updates and support. All plans include a 30-day money-back guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`animate-on-scroll relative rounded-2xl p-8 border-2 transition-all duration-300 ${
                tier.highlighted ? "shadow-2xl scale-105 border-[#2d5a91]" : "bg-white border-gray-200 hover:shadow-lg"
              }`}
              style={{
                backgroundColor: tier.highlighted ? "white" : undefined,
                animationDelay: `${index * 100}ms`,
              }}
            >
              {tier.badge && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold text-white flex items-center gap-1"
                  style={{ backgroundColor: "#2d5a91" }}
                >
                  <Crown className="h-4 w-4" />
                  {tier.badge}
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#1a3e6e" }}>
                  {tier.name}
                </h3>
                <div className="text-4xl font-bold mb-2" style={{ color: tier.highlighted ? "#2d5a91" : "#1a3e6e" }}>
                  {tier.price}
                </div>
                <p className="text-gray-600">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#2d5a91" }} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full py-6 text-lg font-semibold transition-all duration-300"
                style={
                  tier.highlighted
                    ? { backgroundColor: "#1a3e6e" }
                    : { backgroundColor: "white", color: "#1a3e6e", border: "2px solid #1a3e6e" }
                }
                variant={tier.highlighted ? "default" : "outline"}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-gray-600 mb-4">Not ready to buy? Try Chief Architect X17 free for 30 days.</p>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 bg-transparent"
            style={{ borderColor: "#2d5a91", color: "#1a3e6e" }}
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  )
}
