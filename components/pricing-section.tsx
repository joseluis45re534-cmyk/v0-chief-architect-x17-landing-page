"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
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

  const features = [
    "Full 3D modeling capabilities",
    "AI-assisted drafting",
    "Advanced photorealistic rendering",
    "Cloud project sync",
    "Construction documentation",
    "Material lists & estimates",
    "BIM integration tools",
    "Advanced CAD tools",
    "Real-time collaboration",
    "Priority phone & email support",
    "Free updates and support",
    "30-day money-back guarantee",
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-28" style={{ backgroundColor: "#f0f4f8" }}>
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
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Full Version
              </h3>
              <div className="mb-2">
                <span className="text-5xl font-bold" style={{ color: "#2d5a91" }}>
                  $85.75
                </span>
              </div>
              <p className="text-gray-600 text-lg">Complete access to all features</p>
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
            >
              Buy Now - $85.75
            </Button>
          </div>
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-gray-600 mb-4">Not ready to buy? Try Chief Architect X17 free for 30 days.</p>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 bg-transparent hover:bg-[#2d5a91] hover:text-white transition-all"
            style={{ borderColor: "#2d5a91", color: "#1a3e6e" }}
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  )
}
