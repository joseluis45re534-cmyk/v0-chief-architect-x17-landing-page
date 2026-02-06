"use client"

import { Star } from "lucide-react"
import { useEffect, useRef } from "react"

interface TestimonialsSectionProps {
  content?: {
    heading?: string
    subheading?: string
    testimonials?: {
      name: string
      role: string
      experience: string
      quote: string
      rating: number
    }[]
  }
}

export function TestimonialsSection({
  content = {
    heading: "Trusted by Design Professionals Worldwide",
    subheading: "Real reviews from architects, designers, builders, and homeowners using Chief Architect",
    testimonials: [
      {
        name: "Beatrice Cannon",
        role: "Contractor",
        experience: "25 years in construction",
        quote:
          "As a contractor with 25 years in construction, I've seen plenty of overcomplicated software. Plan7 gets straight to the point. It lets me show clients floor plans and quick 3D models before starting a project.",
        rating: 5,
      },
      {
        name: "Daniel Santos",
        role: "Homeowner & Designer",
        experience: "Self-designed home",
        quote:
          "I bought Plan7Architect to design my own house, and I am amazed at how easy it is to use. The 3D view helps visualize every detail, and the precision in 2D planning is perfect.",
        rating: 5,
      },
      {
        name: "kids",
        role: "Professional",
        experience: "Garage extension project",
        quote:
          "I'm honestly impressed. Planned a full garage extension and sent the DWG files to my draftsman — he opened everything in AutoCAD with no issues and made the engineering adjustments. Saved me weeks.",
        rating: 5,
      },
      {
        name: "Oscar Kavanagh",
        role: "Carpenter",
        experience: "Customer presentations",
        quote:
          "I am a carpenter and needed something to show customers simple layouts in 3D. Works way better than I expected. It's fast, doesn't crash, and the models look clean. For the price, unbeatable.",
        rating: 5,
      },
      {
        name: "Elvira Gina",
        role: "Design Professional",
        experience: "Professional plans",
        quote:
          "Gives me the same quality of plans I used to pay thousands for. It's intuitive, fast, and looks incredibly professional. I especially love how quickly I can switch between floor plans, sections, and 3D views.",
        rating: 5,
      },
      {
        name: "Stephen Kerata",
        role: "Family Renovation Business",
        experience: "Small business owner",
        quote:
          "We run a small family renovation business, and Plan7Architect became our go-to planning tool. My wife does the interior layouts, I focus on structure, and together we can show customers 3D previews within hours.",
        rating: 5,
      },
    ],
  },
}: TestimonialsSectionProps) {
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
            {content.heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            {content.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {content.testimonials?.map((testimonial, index) => (
            <div
              key={index}
              className="animate-on-scroll p-8 rounded-xl border-2 hover:shadow-xl transition-all duration-300 bg-white"
              style={{
                borderColor: "#f0f4f8",
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" style={{ color: "#2d5a91" }} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="pt-6 border-t-2" style={{ borderColor: "#f0f4f8" }}>
                <div className="font-bold text-lg mb-1" style={{ color: "#1a3e6e" }}>
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600 mb-1">{testimonial.role}</div>
                <div className="text-sm" style={{ color: "#2d5a91" }}>
                  {testimonial.experience}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot badge */}
        <div className="mt-16 text-center animate-on-scroll">
          <a
            href="https://www.trustpilot.com/review/plan7architect.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: "#f0f4f8", color: "#1a3e6e" }}
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" style={{ color: "#00B67A" }} />
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-lg">4.7 out of 5</div>
              <div className="text-sm opacity-80">Based on 141+ Trustpilot reviews</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
