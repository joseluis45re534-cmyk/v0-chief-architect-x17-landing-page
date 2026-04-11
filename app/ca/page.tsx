import { HeaderFr } from "@/components/header-fr"
import { HeroSectionFr } from "@/components/hero-section-fr"
import { TrustedBySection } from "@/components/trusted-by-section"
import { WhatsNewSection } from "@/components/whats-new-section"
import { VideoSection } from "@/components/video-section"
import { FeaturesSection } from "@/components/features-section"
import { ComparisonSection } from "@/components/comparison-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSectionFr } from "@/components/pricing-section-fr"
import { GuaranteeSectionFr } from "@/components/guarantee-section-fr"
import { SystemRequirementsSection } from "@/components/system-requirements-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Chief Architect X17 - Logiciel de conception architecturale 3D | 95 $ CAD",
  description:
    "Chief Architect X17 est le logiciel de conception 3D le plus rapide, le plus intelligent et le plus innovant. Conçu pour les architectes, les designers d'intérieur et les entrepreneurs. Achat unique avec accès à vie. Garantie de remboursement de 60 jours.",
  keywords:
    "Chief Architect X17, logiciel de conception architecturale, modélisation 3D, rendu photoréaliste, architecture, design d'intérieur",
  openGraph: {
    title: "Chief Architect X17 - Logiciel de conception architecturale 3D | 95 $ CAD",
    description:
      "Chief Architect X17 est le logiciel de conception 3D le plus rapide, le plus intelligent et le plus innovant. Achat unique avec accès à vie.",
    url: "https://chiefarchitect.pro/ca",
    type: "website",
    images: [
      {
        url: "/images/chief-architect-x17-final-3.png",
        width: 1200,
        height: 630,
        alt: "Chief Architect X17",
      },
    ],
  },
}

export default function CAPage() {
  const caPricing = {
    price: 95,
    currencyCode: "CAD",
    currencySymbol: "$",
    paymentLink: "https://buy.stripe.com/bJe28l6KR8o64YZc6fbII03",
  }

  return (
    <main className="min-h-screen">
      <HeaderFr region="ca" />
      <HeroSectionFr region="ca" pricing={caPricing} />
      <TrustedBySection />
      <WhatsNewSection />
      <VideoSection />
      <FeaturesSection />
      <ComparisonSection />
      <TestimonialsSection />
      <SystemRequirementsSection />
      <PricingSectionFr region="ca" pricing={caPricing} />
      <GuaranteeSectionFr region="ca" pricing={caPricing} />
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
            operatingSystem: "Windows",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "CAD",
              lowPrice: "95",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "2847",
            },
            description:
              "Chief Architect X17 est la version la plus rapide, intelligente et innovante jamais créée — conçue pour les architectes, les designers d'intérieur et les entrepreneurs qui veulent une efficacité incomparable.",
          }),
        }}
      />
    </main>
  )
}
