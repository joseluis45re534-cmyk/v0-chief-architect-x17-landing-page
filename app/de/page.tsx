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
    title: "Chief Architect X17 (DE) – Die fortschrittlichste 3D-Architekturdesign-Software",
    description:
        "Entdecken Sie die Leistungsfähigkeit von Chief Architect X17. Schnelleres Rendering, intelligente Bauwerkzeuge und der intuitivste 3D-Design-Workflow der Branche.",
    keywords: [
        "Chief Architect X17",
        "Architekturdesign-Software",
        "3D-Hausdesign-Software",
        "BIM-Zeichenwerkzeuge",
        "Innenarchitektur-Software",
        "CAD-Werkzeuge",
        "Grundriss-Software",
        "3D-Rendering für Architekten",
    ],
    openGraph: {
        title: "Chief Architect X17 (DE) – Die fortschrittlichste 3D-Architekturdesign-Software",
        description:
            "Entdecken Sie die Leistungsfähigkeit von Chief Architect X17. Schnelleres Rendering, intelligente Bauwerkzeuge und der intuitivste 3D-Design-Workflow der Branche.",
        type: "website",
        images: ["/chief-architect-x17-software-interface.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Chief Architect X17 (DE) – Die fortschrittlichste 3D-Architekturdesign-Software",
        description:
            "Entdecken Sie die Leistungsfähigkeit von Chief Architect X17. Schnelleres Rendering, intelligente Bauwerkzeuge und der intuitivste 3D-Design-Workflow der Branche.",
    },
}

export default function Page() {
    const dePricing = {
        currencySymbol: "€",
        currencyCode: "EUR",
        price: 59,
        paymentLink: "https://buy.stripe.com/5kQ5kDamQ66tdLI8oEdAk00",
    }

    const deContent = {
        badge: "Neue Veröffentlichung: Chief Architect X17",
        title: (
            <>
                Intelligenter entwerfen.
                <br />
                Schneller bauen.
            </>
        ),
        description: "Chief Architect X17 ist die schnellste, intelligenteste und leistungsfähigste Version, die je erstellt wurde – entwickelt für Architekten, Innenarchitekten und Bauunternehmer, die unübertroffene Effizienz wünschen.",
        buyButton: "Jetzt kaufen",
        watchButton: "Was ist neu in X17",
        oneTimePurchase: "Einmaliger Kauf",
        lifetimeAccess: "Lebenslanger Zugriff",
    }

    const dePricingContent = {
        heading: "Holen Sie sich Chief Architect X17 noch heute",
        subheading: "Einmaliger Kauf mit lebenslangem Zugriff. Beinhaltet alle Premium-Funktionen und kostenlose Updates.",
        badge: "EINMALIGE ZAHLUNG - LEBENSLANGE AKTIVIERUNG",
        versionName: "Vollversion",
        accessFeature: "Vollständiger Zugriff auf alle Funktionen",
        oneTimePurchase: "Einmaliger Kauf",
        lifetimeAccess: "Lebenslanger Zugriff",
        features: [
            "Umfassende 3D-Modellierungsfunktionen",
            "Fortschrittliches fotorealistisches Rendering",
            "Baudokumentation",
            "Materiallisten & Kostenschätzungen",
            "BIM-Integrationswerkzeuge",
            "Erweiterte CAD-Werkzeuge",
            "30 Tage Geld-zurück-Garantie",
        ],
        buyButton: "Jetzt kaufen",
    }

    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection content={deContent} pricing={dePricing} />
            <TrustedBySection />
            <WhatsNewSection />
            <VideoSection />
            <FeaturesSection />
            <ComparisonSection />
            <TestimonialsSection />
            <SystemRequirementsSection />
            <PricingSection content={dePricingContent} pricing={dePricing} />
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
                            "Chief Architect X17 ist die schnellste, intelligenteste und leistungsfähigste Version, die je erstellt wurde – entwickelt für Architekten, Innenarchitekten und Bauunternehmer, die unübertroffene Effizienz wünschen.",
                    }),
                }}
            />
        </main>
    )
}
