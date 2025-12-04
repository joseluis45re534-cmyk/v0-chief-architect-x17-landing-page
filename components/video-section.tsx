"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

export function VideoSection() {
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: "#1a3e6e" }}>
              See Chief Architect X17 in Action
            </h2>
            <p className="text-xl text-gray-600 text-pretty leading-relaxed">
              Watch how professionals are transforming their design workflow with X17's powerful new features
            </p>
          </div>

          <div className="animate-on-scroll relative rounded-2xl overflow-hidden shadow-2xl">
            <video className="w-full h-auto" controls poster="/video-thumbnail.jpg">
              <source
                src="https://video-dl.chiefarchitect.com/live/videos/R3pL23xng10qqJ2N86H2mL9gmH/34qgkcsL5J33G0n5vmFL2hv9gm.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="text-center mt-8 animate-on-scroll">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 bg-transparent"
              style={{ borderColor: "#2d5a91", color: "#1a3e6e" }}
            >
              Watch Full Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
