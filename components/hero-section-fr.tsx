"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Shield, Crown } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { VideoModal } from "@/components/video-modal"

import { useConfig } from "@/contexts/config-context"

interface HeroSectionFrProps {
  region?: string
  pricing?: {
    currencySymbol: string
    currencyCode: string
    price: number
    paymentLink?: string
  }
}

export function HeroSectionFr({
  region = "ca",
  pricing: propPricing = {
    currencySymbol: "$",
    currencyCode: "CAD",
    price: 95,
    paymentLink: "https://buy.stripe.com/bJe28l6KR8o64YZc6fbII03",
  },
}: HeroSectionFrProps) {
  const { getRegionConfig } = useConfig()
  const { price, currency, paymentLink, currencySymbol } = getRegionConfig(region)

  const pricing = {
    price: price || propPricing.price,
    currencyCode: currency || propPricing.currencyCode,
    currencySymbol: currencySymbol || propPricing.currencySymbol,
    paymentLink: paymentLink || propPricing.paymentLink,
  }

  const heroRef = useRef<HTMLElement>(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

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

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll(".animate-on-scroll")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  const handleBuyNowClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      ; (window as any).gtag("event", "add_to_cart", {
        currency: currency,
        value: price,
        items: [
          {
            item_id: "chief-architect-x17",
            item_name: "Chief Architect X17 Version complète",
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
              item_name: "Chief Architect X17 Version complète",
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
    <>
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#f0f4f8" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3e6e]/5 via-transparent to-[#2d5a91]/5" />

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-on-scroll">
              <div
                className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: "#2d5a91", color: "white" }}
              >
                Nouvelle version : Chief Architect X17
              </div>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight"
                style={{ color: "#1a3e6e" }}
              >
                Concevez mieux.
                <br />
                Construisez plus vite.
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 text-pretty leading-relaxed">
                Chief Architect X17 est la version la plus rapide, intelligente et innovante jamais créée — conçue pour
                les architectes, les designers d'intérieur et les entrepreneurs qui veulent une efficacité incomparable.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: "#1a3e6e" }}
                  onClick={handleBuyNowClick}
                  data-event="add_to_cart"
                  data-product="chief-architect-x17"
                  data-value={price}
                >
                  Acheter maintenant - {price} {currency === "EUR" ? "€" : "$ " + currency}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 transition-all duration-300 bg-transparent"
                  style={{ borderColor: "#2d5a91", color: "#1a3e6e" }}
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Voir les nouveautés de X17
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div
                  className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #1a3e6e 0%, #2d5a91 100%)",
                    color: "white",
                  }}
                >
                  <Shield className="h-6 w-6 flex-shrink-0" />
                  <span className="font-semibold text-base">Achat unique</span>
                </div>
                <div
                  className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #1a3e6e 0%, #2d5a91 100%)",
                    color: "white",
                  }}
                >
                  <Crown className="h-6 w-6 flex-shrink-0" />
                  <span className="font-semibold text-base">Accès à vie</span>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/up-683x1024.webp"
                  alt="Logiciel de conception architecturale Chief Architect X17 avec modélisation 3D"
                  className="w-full h-auto"
                />
              </div>

              <div
                className="absolute -z-10 top-1/4 -right-12 w-64 h-64 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: "#2d5a91" }}
              />
              <div
                className="absolute -z-10 bottom-1/4 -left-12 w-48 h-48 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: "#1a3e6e" }}
              />
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=eC9qpC8XDPM"
      />
    </>
  )
}
