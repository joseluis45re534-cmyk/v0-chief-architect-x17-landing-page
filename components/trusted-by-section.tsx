"use client"

import { useEffect, useRef } from "react"

const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
  },
  {
    name: "ArchiCAD",
    logo: "https://images.seeklogo.com/logo-png/49/1/archicad-logo-png_seeklogo-492887.png",
  },
  {
    name: "Autodesk Revit",
    logo: "https://images.seeklogo.com/logo-png/48/1/autodesk-revit-logo-png_seeklogo-482393.png",
  },
  {
    name: "Vectorworks",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Vectorworks_Logo.png",
  },
  {
    name: "Stripe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png",
  },
  {
    name: "PayPal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png",
  },
]

export function TrustedBySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-white border-y" style={{ borderColor: "#e5e7eb" }}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4 opacity-0 translate-y-4 transition-all duration-700"
            style={{ color: "#2d5a91" }}
          >
            Trusted by Industry Leaders
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-balance px-4 opacity-0 translate-y-4 transition-all duration-700 delay-100"
            style={{ color: "#1a3e6e" }}
          >
            Join thousands of professionals building with Chief Architect
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="flex items-center justify-center opacity-0 translate-y-6 transition-all duration-700 px-4"
              style={{
                transitionDelay: `${200 + index * 100}ms`,
              }}
            >
              <div className="relative w-full h-16 md:h-20 flex items-center justify-center group">
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  className="max-w-full max-h-full w-auto h-auto object-contain filter grayscale-[80%] opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    maxWidth: "140px",
                    maxHeight: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="text-center opacity-0 translate-y-4 transition-all duration-700 delay-700 px-4">
          <p className="text-base md:text-lg text-pretty" style={{ color: "#2d5a91" }}>
            Over{" "}
            <span className="font-bold text-xl md:text-2xl" style={{ color: "#1a3e6e" }}>
              50,000+
            </span>{" "}
            architects, designers, and builders rely on Chief Architect
          </p>
        </div>
      </div>

      <style jsx>{`
        .in-view p,
        .in-view h2,
        .in-view > div > div > div {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
