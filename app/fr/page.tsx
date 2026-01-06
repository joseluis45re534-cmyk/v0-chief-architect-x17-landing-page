import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { WhatsNewSection } from "@/components/whats-new-section"
import { VideoSection } from "@/components/video-section"
import { FeaturesSection } from "@/components/features-section"
import { ComparisonSection } from "@/components/comparison-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { SystemRequirementsSection } from "@/components/system-requirements-section"
import { Footer } from "@/components/footer"

export const metadata = {
    title: "Chief Architect X17 (FR) – Logiciel de conception architecturale 3D le plus avancé",
    description:
        "Découvrez la puissance de Chief Architect X17. Rendu plus rapide, outils de construction intelligents et flux de travail de conception 3D le plus intuitif de l'industrie.",
    keywords: [
        "Chief Architect X17",
        "logiciel de conception architecturale",
        "logiciel de conception de maison 3D",
        "outils de dessin BIM",
        "logiciel de design d'intérieur",
        "outils CAD",
        "logiciel de plan d'étage",
        "rendu 3D pour architectes",
    ],
    openGraph: {
        title: "Chief Architect X17 (FR) – Logiciel de conception architecturale 3D le plus avancé",
        description:
            "Découvrez la puissance de Chief Architect X17. Rendu plus rapide, outils de construction intelligents et flux de travail de conception 3D le plus intuitif de l'industrie.",
        type: "website",
        images: ["/chief-architect-x17-software-interface.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Chief Architect X17 (FR) – Logiciel de conception architecturale 3D le plus avancé",
        description:
            "Découvrez la puissance de Chief Architect X17. Rendu plus rapide, outils de construction intelligents et flux de travail de conception 3D le plus intuitif de l'industrie.",
    },
}

export default function Page() {
    return (
        <main className="min-h-screen">
            {/* TODO: Translating content requires updating components or passing props. Currently using English components. */}
            <Header />
            <HeroSection />
            <TrustedBySection />
            <WhatsNewSection />
            <VideoSection />
            <FeaturesSection />
            <ComparisonSection />
            <TestimonialsSection />
            <SystemRequirementsSection />
            <PricingSection />
            <GuaranteeSection />
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
                            priceCurrency: "EUR",
                            lowPrice: "59",
                        },
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.8",
                            ratingCount: "2847",
                        },
                        description:
                            "Chief Architect X17 est la version la plus rapide, la plus intelligente et la plus performante jamais créée — conçue pour les architectes, les designers d'intérieur et les constructeurs qui recherchent une efficacité inégalée.",
                    }),
                }}
            />
        </main>
    )
}
