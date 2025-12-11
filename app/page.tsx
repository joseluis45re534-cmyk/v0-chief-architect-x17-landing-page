import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { WhatsNewSection } from "@/components/whats-new-section"
import { VideoSection } from "@/components/video-section"
import { FeaturesSection } from "@/components/features-section"
import { ComparisonSection } from "@/components/comparison-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Chief Architect X17 – The Most Advanced 3D Architectural Design Software",
  description:
    "Discover the power of Chief Architect X17. AI-assisted drafting, faster rendering, smart building tools, and the industry's most intuitive 3D design workflow. Buy now for $69.",
  keywords: [
    "Chief Architect X17",
    "architectural design software",
    "3D home design software",
    "BIM drafting tools",
    "interior design software",
    "CAD tools",
    "floor plan software",
    "3D rendering for architects",
  ],
  openGraph: {
    title: "Chief Architect X17 – The Most Advanced 3D Architectural Design Software",
    description:
      "Discover the power of Chief Architect X17. AI-assisted drafting, faster rendering, smart building tools, and the industry's most intuitive 3D design workflow.",
    type: "website",
    images: ["/chief-architect-x17-software-interface.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chief Architect X17 – The Most Advanced 3D Architectural Design Software",
    description:
      "Discover the power of Chief Architect X17. AI-assisted drafting, faster rendering, smart building tools, and the industry's most intuitive 3D design workflow.",
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <WhatsNewSection />
      <VideoSection />
      <FeaturesSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />

      {/* Schema.org Product structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Chief Architect X17",
            applicationCategory: "DesignApplication",
            operatingSystem: "Windows, macOS",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: "69",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "2847",
            },
            description:
              "Chief Architect X17 is the fastest, smartest, and most intelligent version ever created — built for architects, interior designers, and builders who want unmatched efficiency.",
          }),
        }}
      />
    </main>
  )
}
