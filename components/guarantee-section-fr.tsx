"use client"

import { Button } from "@/components/ui/button"
import { Shield, Clock, CheckCircle, RefreshCcw } from "lucide-react"
import { useEffect, useRef } from "react"
import type { HTMLSection } from "react"

export function GuaranteeSectionFr() {
  const sectionRef = useRef<HTMLSection>(null)

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

    window.location.href = "https://whop.com/checkout/plan_QY2DWc4Y8VEcK"
  }

  const features = [
    {
      icon: Clock,
      title: "60 jours pour essayer",
      description: "Prenez 60 jours complets pour explorer chaque fonctionnalité et capacité",
    },
    {
      icon: RefreshCcw,
      title: "Retours faciles",
      description: "Processus de remboursement simple - envoyez-nous votre numéro de commande par courriel",
    },
    {
      icon: CheckCircle,
      title: "Sans questions",
      description: "Si vous n'êtes pas satisfait, nous traiterons votre remboursement complet",
    },
  ]

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

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-balance">
              Garantie de remboursement de 60 jours
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty leading-relaxed">
              Nous sommes confiants que vous aimerez Chief Architect X17. Essayez-le sans risque pendant 60 jours. Si
              vous n'êtes pas complètement satisfait, nous rembourserons votre achat - sans questions.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-on-scroll text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center mb-4">
                  <div className="bg-white/20 rounded-full p-4">
                    <feature.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA section */}
          <div className="text-center animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                Prêt à transformer votre flux de travail de conception?
              </h3>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                Rejoignez des milliers d'architectes et de designers qui font confiance à Chief Architect X17 pour leurs
                projets.
              </p>
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-[#1a3e6e] font-bold text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                onClick={handleBuyNowClick}
              >
                Obtenir Chief Architect X17 - 95 $ CAD
              </Button>
              <p className="text-white/70 text-sm mt-4">Accès instantané • Licence à vie • Garantie de 60 jours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
