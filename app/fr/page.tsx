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
    const frPricing = {
        currencySymbol: "€",
        currencyCode: "EUR",
        price: 59,
        paymentLink: "https://siroxdev-llcs.myshopify.com/cart/44037766316143:1",
    }

    const frContent = {
        badge: "Nouvelle version : Chief Architect X17",
        title: (
            <>
                Concevez plus intelligemment.
                <br />
                Construisez plus vite.
            </>
        ),
        description: "Chief Architect X17 est la version la plus rapide et la plus intelligente jamais créée — conçue pour les architectes, les designers d'intérieur et les constructeurs qui exigent une efficacité inégalée.",
        buyButton: "Acheter maintenant",
        watchButton: "Voir les nouveautés X17",
        oneTimePurchase: "Achat unique",
        lifetimeAccess: "Accès à vie",
    }

    const frPricingContent = {
        heading: "Obtenez Chief Architect X17 aujourd'hui",
        subheading: "Achat unique avec accès à vie. Inclut toutes les fonctionnalités premium et les mises à jour gratuites.",
        badge: "PAIEMENT UNIQUE - ACTIVATION À VIE",
        versionName: "Version Complète",
        accessFeature: "Accès complet à toutes les fonctionnalités",
        oneTimePurchase: "Achat unique",
        lifetimeAccess: "Accès à vie",
        features: [
            "Capacités de modélisation 3D complètes",
            "Rendu photoréaliste avancé",
            "Documentation de construction",
            "Listes de matériaux et estimations",
            "Outils d'intégration BIM",
            "Outils CAO avancés",
            "Garantie satisfait ou remboursé de 30 jours",
        ],
        buyButton: "Acheter maintenant",
    }

    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection content={frContent} pricing={frPricing} />
            <TrustedBySection />
            <WhatsNewSection />
            <VideoSection />
            <FeaturesSection />
            <ComparisonSection />
            <TestimonialsSection />
            <SystemRequirementsSection />
            <PricingSection content={frPricingContent} pricing={frPricing} />
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
