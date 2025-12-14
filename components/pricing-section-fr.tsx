"use client"

import { Button } from "@/components/ui/button"
import { Check, ShieldCheck, Crown } from "lucide-react"
import { useEffect, useRef } from "react"

export function PricingSectionFr() {
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
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "add_to_cart", {
        currency: "CAD",
        value: 95.0,
        items: [
          {
            item_id: "chief-architect-x17",
            item_name: "Chief Architect X17 Version complète",
            price: 95.0,
            quantity: 1,
          },
        ],
      })
      ;(window as any).gtag("event", "begin_checkout", {
        currency: "CAD",
        value: 95.0,
        items: [
          {
            item_id: "chief-architect-x17",
            item_name: "Chief Architect X17 Version complète",
            price: 95.0,
            quantity: 1,
          },
        ],
      })
    }

    window.location.href = "https://t.co/rGXStKA1xN"
  }

  const features = [
    "Capacités complètes de modélisation 3D",
    "Rendu photoréaliste avancé",
    "Documentation de construction",
    "Listes de matériaux et estimations",
    "Outils d'intégration BIM",
    "Outils CAO avancés",
    "Garantie de remboursement de 60 jours",
  ]

  return (
    <section ref={sectionRef} id="pricing" className="py-20 md:py-28" style={{ backgroundColor: "#f0f4f8" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: "#1a3e6e" }}>
            Obtenez Chief Architect X17 aujourd'hui
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Achat unique avec accès à vie. Inclut toutes les fonctionnalités premium et les mises à jour gratuites.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="animate-on-scroll relative rounded-2xl p-10 border-2 shadow-2xl bg-white border-[#2d5a91]">
            <div className="flex justify-center mb-8">
              <div
                className="px-6 py-3 rounded-full text-white font-bold text-base shadow-lg text-center whitespace-nowrap"
                style={{ backgroundColor: "#2d5a91" }}
              >
                PAIEMENT UNIQUE - ACTIVATION À VIE
              </div>
            </div>

            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-6" style={{ color: "#1a3e6e" }}>
                Version complète
              </h3>
              <div className="mb-3 flex items-baseline justify-center gap-2">
                <span className="text-6xl font-bold" style={{ color: "#2d5a91" }}>
                  95
                </span>
                <span className="text-2xl font-semibold text-gray-600">$ CAD</span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">Accès complet à toutes les fonctionnalités</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div
                className="rounded-xl p-5 text-center shadow-lg border-2 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #1a3e6e 0%, #2d5a91 100%)",
                  borderColor: "#2d5a91",
                }}
              >
                <ShieldCheck className="h-10 w-10 mx-auto mb-3 text-white" />
                <p className="text-white font-bold text-lg">Achat unique</p>
              </div>

              <div
                className="rounded-xl p-5 text-center shadow-lg border-2 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #1a3e6e 0%, #2d5a91 100%)",
                  borderColor: "#2d5a91",
                }}
              >
                <Crown className="h-10 w-10 mx-auto mb-3 text-white" />
                <p className="text-white font-bold text-lg">Accès à vie</p>
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
              data-value="95"
            >
              Acheter maintenant - 95 $ CAD
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
