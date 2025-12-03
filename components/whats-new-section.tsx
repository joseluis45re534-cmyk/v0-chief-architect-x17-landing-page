"use client"

import { Sparkles, Zap, Wand2, Home, Wrench, Cloud } from "lucide-react"
import { useEffect, useRef } from "react"

const features = [
  {
    icon: Sparkles,
    title: "AI-Assisted Drafting",
    description: "Intelligent suggestions and automated design recommendations powered by advanced AI algorithms.",
  },
  {
    icon: Zap,
    title: "Faster 3D Rendering Engine",
    description: "Experience up to 3x faster render times with the completely rebuilt rendering architecture.",
  },
  {
    icon: Wand2,
    title: "Auto-Materials Detection",
    description: "Smart material recognition automatically applies appropriate textures and specifications.",
  },
  {
    icon: Home,
    title: "Smart Walls & Roofs",
    description: "Parametric building components that adapt intelligently to design changes in real-time.",
  },
  {
    icon: Wrench,
    title: "CAD Enhancement Tools",
    description: "Professional-grade CAD tools with precision drafting and advanced annotation features.",
  },
  {
    icon: Cloud,
    title: "Cloud Project Sync",
    description: "Seamlessly sync projects across devices and collaborate with team members in real-time.",
  },
]

export function WhatsNewSection() {
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
    <section ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#f0f4f8", color: "#1a3e6e" }}
          >
            What's New in X17
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: "#1a3e6e" }}>
            Breakthrough Features That Transform Your Workflow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Chief Architect X17 introduces powerful new capabilities designed to accelerate your design process and
            deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="animate-on-scroll p-8 rounded-xl border-2 border-gray-100 hover:border-[#2d5a91] transition-all duration-300 hover:shadow-lg group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="mb-4 inline-flex p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "#f0f4f8" }}
                >
                  <Icon className="h-8 w-8" style={{ color: "#1a3e6e" }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1a3e6e" }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
