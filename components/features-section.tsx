"use client"

import { Box, Palette, FileText, ListChecks, Eye, Network } from "lucide-react"
import { useEffect, useRef } from "react"

const features = [
  {
    icon: Box,
    title: "3D Modeling",
    description:
      "Create detailed 3D architectural models with intelligent building tools and parametric objects that automatically adjust to design changes.",
  },
  {
    icon: Palette,
    title: "Interior Design",
    description:
      "Design stunning interiors with extensive libraries of furniture, fixtures, materials, and finishes. Visualize every detail before construction.",
  },
  {
    icon: FileText,
    title: "Construction Documents",
    description:
      "Generate professional construction drawings, elevations, sections, and details automatically from your 3D model with precision accuracy.",
  },
  {
    icon: ListChecks,
    title: "Material Lists",
    description:
      "Automatically generate comprehensive material lists and cost estimates directly from your design with real-time updates as you make changes.",
  },
  {
    icon: Eye,
    title: "Rendering & Visualization",
    description:
      "Create photorealistic renderings and walkthroughs with advanced ray-tracing technology. Present your vision with stunning clarity.",
  },
  {
    icon: Network,
    title: "BIM Integration",
    description:
      "Full BIM support with IFC import/export capabilities. Collaborate seamlessly with engineers and other design professionals.",
  },
]

export function FeaturesSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: "#1a3e6e" }}>
            Complete Architectural Design Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Everything you need to design, document, and present your architectural projects with professional precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="animate-on-scroll group" style={{ animationDelay: `${index * 100}ms` }}>
                <div
                  className="h-full p-8 rounded-xl border-2 border-gray-100 hover:shadow-xl transition-all duration-300"
                  style={{ borderColor: "#f0f4f8" }}
                >
                  <div className="mb-6">
                    <div
                      className="inline-flex p-4 rounded-xl group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "#1a3e6e" }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
