"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

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

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#f0f4f8" }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3e6e]/5 via-transparent to-[#2d5a91]/5" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-on-scroll">
            <div
              className="inline-block px-4 py-2 rounded-full text-sm font-medium"
              style={{ backgroundColor: "#2d5a91", color: "white" }}
            >
              New Release: Chief Architect X17
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight"
              style={{ color: "#1a3e6e" }}
            >
              Design Smarter.
              <br />
              Build Faster.
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 text-pretty leading-relaxed">
              Chief Architect X17 is the fastest, smartest, and most intelligent version ever created — built for
              architects, interior designers, and builders who want unmatched efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: "#1a3e6e" }}
              >
                Download Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 transition-all duration-300 bg-transparent"
                style={{ borderColor: "#2d5a91", color: "#1a3e6e" }}
              >
                <Play className="mr-2 h-5 w-5" />
                See What's New in X17
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" style={{ color: "#2d5a91" }} fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Free 30-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" style={{ color: "#2d5a91" }} fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No credit card required</span>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="animate-on-scroll relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UP-683x1024-WUh9cXf8CIy8Kb6KlM4bmJZlUw9YiV.webp"
                alt="Chief Architect X17 architectural design software interface with 3D modeling"
                className="w-full h-auto"
              />

              {/* Floating badge */}
              <div
                className="absolute top-4 right-4 px-4 py-2 rounded-lg backdrop-blur-sm"
                style={{ backgroundColor: "rgba(26, 62, 110, 0.9)", color: "white" }}
              >
                <div className="text-sm font-semibold">AI-Powered</div>
              </div>
            </div>

            {/* Decorative elements */}
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
  )
}
