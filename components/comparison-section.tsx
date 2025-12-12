"use client"

import { Check, X } from "lucide-react"
import { useEffect, useRef } from "react"

export function ComparisonSection() {
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
            Why Choose Chief Architect X17?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            See how Chief Architect X17 compares to previous versions and leading competitors
          </p>
        </div>

        {/* X17 vs X16 Comparison */}
        <div className="max-w-5xl mx-auto mb-16 animate-on-scroll">
          <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: "#1a3e6e" }}>
            Chief Architect X17 vs X16
          </h3>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2" style={{ borderColor: "#e5e7eb" }}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: "#1a3e6e" }}>
                    <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">X17</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">X16</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "3D Rendering Speed", x17: "3x faster", x16: "Standard" },
                    { feature: "Auto-Materials Detection", x17: true, x16: false },
                    { feature: "Smart Walls & Roofs", x17: true, x16: "Basic" },
                    { feature: "CAD Enhancement Tools", x17: "Advanced", x16: "Standard" },
                    { feature: "Real-time Collaboration", x17: true, x16: false },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.x17 === "boolean" ? (
                          row.x17 ? (
                            <Check className="h-6 w-6 mx-auto" style={{ color: "#2d5a91" }} />
                          ) : (
                            <X className="h-6 w-6 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold" style={{ color: "#1a3e6e" }}>
                            {row.x17}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        {typeof row.x16 === "boolean" ? (
                          row.x16 ? (
                            <Check className="h-6 w-6 text-gray-400 mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span>{row.x16}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Competitor Comparison */}
        <div className="max-w-6xl mx-auto animate-on-scroll">
          <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: "#1a3e6e" }}>
            Chief Architect X17 vs Competitors
          </h3>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2" style={{ borderColor: "#e5e7eb" }}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: "#1a3e6e" }}>
                    <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Chief Architect X17</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">SketchUp Pro</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Revit LT</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Home Designer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Automatic Construction Docs", ca: true, sketchup: false, revit: true, hd: true },
                    {
                      feature: "Advanced 3D Rendering",
                      ca: true,
                      sketchup: "Plugin Required",
                      revit: "Limited",
                      hd: "Basic",
                    },
                    { feature: "Material Lists & Estimates", ca: true, sketchup: false, revit: "Limited", hd: true },
                    { feature: "BIM Integration", ca: true, sketchup: false, revit: true, hd: false },
                    { feature: "Ease of Learning", ca: "High", sketchup: "High", revit: "Low", hd: "Medium" },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.ca === "boolean" ? (
                          row.ca ? (
                            <Check className="h-6 w-6 mx-auto" style={{ color: "#2d5a91" }} />
                          ) : (
                            <X className="h-6 w-6 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold" style={{ color: "#1a3e6e" }}>
                            {row.ca}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600 text-sm">
                        {typeof row.sketchup === "boolean" ? (
                          row.sketchup ? (
                            <Check className="h-5 w-5 text-gray-400 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-400 mx-auto" />
                          )
                        ) : (
                          row.sketchup
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600 text-sm">
                        {typeof row.revit === "boolean" ? (
                          row.revit ? (
                            <Check className="h-5 w-5 text-gray-400 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-400 mx-auto" />
                          )
                        ) : (
                          row.revit
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600 text-sm">
                        {typeof row.hd === "boolean" ? (
                          row.hd ? (
                            <Check className="h-5 w-5 text-gray-400 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-400 mx-auto" />
                          )
                        ) : (
                          row.hd
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
