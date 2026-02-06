"use client"

import { Monitor, Cpu, HardDrive, MemoryStick } from "lucide-react"
import { useEffect, useRef } from "react"

interface SystemRequirementsSectionProps {
  content?: {
    heading?: string
    subheading?: string
    minimum?: {
      title: string
      description: string
      specs: {
        label: string
        value: string
      }[]
    }
    recommended?: {
      title: string
      description: string
      badge: string
      specs: {
        label: string
        value: string
      }[]
    }
  }
}

export function SystemRequirementsSection({
  content = {
    heading: "System Requirements",
    subheading: "Ensure optimal performance with the right hardware configuration for Chief Architect X17",
    minimum: {
      title: "Minimum Requirements",
      description: "Basic configuration to run Chief Architect X17",
      specs: [
        { label: "Operating System", value: "Windows 10 (64-bit)" },
        { label: "Processor", value: "Intel Core i5 or AMD Ryzen 5" },
        { label: "RAM", value: "8 GB" },
        { label: "Storage", value: "10 GB available space" },
        { label: "Graphics", value: "DirectX 11 compatible GPU with 2GB VRAM" },
      ],
    },
    recommended: {
      title: "Recommended Requirements",
      description: "Optimal setup for professional workflows",
      badge: "BEST PERFORMANCE",
      specs: [
        { label: "Operating System", value: "Windows 11 (64-bit)" },
        { label: "Processor", value: "Intel Core i7/i9 or AMD Ryzen 7/9" },
        { label: "RAM", value: "16 GB or more" },
        { label: "Storage", value: "50 GB SSD" },
        { label: "Graphics", value: "NVIDIA RTX or AMD RX with 4GB+ VRAM" },
      ],
    },
  },
}: SystemRequirementsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  const iconsMin = [Monitor, Cpu, MemoryStick, HardDrive, Monitor];
  const iconsRec = [Monitor, Cpu, MemoryStick, HardDrive, Monitor];

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
            {content.heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            {content.subheading}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Minimum Requirements */}
          <div className="animate-on-scroll" style={{ animationDelay: "100ms" }}>
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full border-2 border-gray-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#1a3e6e" }}>
                  {content.minimum?.title}
                </h3>
                <p className="text-gray-600">{content.minimum?.description}</p>
              </div>
              <div className="space-y-4">
                {content.minimum?.specs.map((spec, index) => {
                  const Icon = iconsMin[index % iconsMin.length]
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <Icon className="h-5 w-5" style={{ color: "#2d5a91" }} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 mb-1">{spec.label}</div>
                        <div className="text-gray-600 text-sm leading-relaxed">{spec.value}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Recommended Requirements */}
          <div className="animate-on-scroll" style={{ animationDelay: "200ms" }}>
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full border-2" style={{ borderColor: "#1a3e6e" }}>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold" style={{ color: "#1a3e6e" }}>
                    {content.recommended?.title}
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: "#1a3e6e" }}
                  >
                    {content.recommended?.badge}
                  </span>
                </div>
                <p className="text-gray-600">{content.recommended?.description}</p>
              </div>
              <div className="space-y-4">
                {content.recommended?.specs.map((spec, index) => {
                  const Icon = iconsRec[index % iconsRec.length]
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <Icon className="h-5 w-5" style={{ color: "#1a3e6e" }} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 mb-1">{spec.label}</div>
                        <div className="text-gray-600 text-sm leading-relaxed">{spec.value}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
