"use client"

import { Button } from "@/components/ui/button"
import { Shield, Clock, CheckCircle, RefreshCcw } from "lucide-react"
import { useEffect, useRef } from "react"

import { useConfig } from "@/contexts/config-context"

const icons = [Clock, RefreshCcw, CheckCircle]

interface GuaranteeSectionProps {
  content?: {
    heading?: string
    subheading?: string
    features?: {
      title: string
      description: string
    }[]
    cta?: {
      heading: string
      description: string
      button: string
      subtext: string
    }
  }
  region?: string
}

export function GuaranteeSection({
  content = {
    heading: "60-Day Money-Back Guarantee",
    subheading:
      "We're confident you'll love Chief Architect X17. Try it risk-free for 60 days. If you're not completely satisfied, we'll refund your purchase - no questions asked.",
    features: [
      {
        title: "60 Days to Try",
        description: "Take a full 60 days to explore every feature and capability",
      },
      {
        title: "Easy Returns",
        description: "Simple refund process - just email us your order number",
      },
      {
        title: "No Questions Asked",
        description: "If you're not satisfied, we'll process your full refund",
      },
    ],
    cta: {
      heading: "Ready to Transform Your Design Workflow?",
      description: "Join thousands of architects and designers who trust Chief Architect X17 for their projects.",
      button: "Get Chief Architect X17",
      subtext: "Instant access • Lifetime license • 60-day guarantee",
    },
  },
  region = "default",
}: GuaranteeSectionProps) {
  const { getRegionConfig } = useConfig()
  const { price, currency, paymentLink, currencySymbol } = getRegionConfig(region)
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
    // Track add_to_cart event for analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      ; (window as any).gtag("event", "add_to_cart", {
        currency: currency,
        value: price,
        items: [
          {
            item_id: "chief-architect-x17",
            item_name: "Chief Architect X17 Full Version",
            price: price,
            quantity: 1,
          },
        ],
      })
        ; (window as any).gtag("event", "begin_checkout", {
          currency: currency,
          value: price,
          items: [
            {
              item_id: "chief-architect-x17",
              item_name: "Chief Architect X17 Full Version",
              price: price,
              quantity: 1,
            },
          ],
        })
    }

    if (paymentLink) {
      window.location.href = paymentLink
    }
  }

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3e6e] to-[#2d5a91]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main guarantee badge */}
          <div className="text-center mb-12 animate-on-scroll">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-6 border-2 border-white/30">
                  <Shield className="w-16 h-16 text-white" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-balance">{content.heading}</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty leading-relaxed">
              {content.subheading}
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {content.features?.map((feature, index) => {
              const Icon = icons[index % icons.length]
              return (
                <div
                  key={index}
                  className="animate-on-scroll text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center mb-4">
                    <div className="bg-white/20 rounded-full p-4">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>

          {/* CTA section */}
          <div className="text-center animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                {content.cta?.heading}
              </h3>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                {content.cta?.description}
              </p>
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-[#1a3e6e] font-bold text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                onClick={handleBuyNowClick}
              >
                {content.cta?.button} - {currency === "EUR" ? `${price}€` : `${currencySymbol}${price}`}
              </Button>
              <p className="text-white/70 text-sm mt-4">{content.cta?.subtext}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
