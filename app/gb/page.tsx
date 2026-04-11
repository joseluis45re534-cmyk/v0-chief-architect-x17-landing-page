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
    title: "Chief Architect X17 (UK) – The Most Advanced 3D Architectural Design Software",
    description:
        "Discover the power of Chief Architect X17. Faster rendering, smart building tools, and the industry's most intuitive 3D design workflow. Buy now.",
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
        title: "Chief Architect X17 (UK) – The Most Advanced 3D Architectural Design Software",
        description:
            "Discover the power of Chief Architect X17. Faster rendering, smart building tools, and the industry's most intuitive 3D design workflow.",
        type: "website",
        images: ["/chief-architect-x17-software-interface.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Chief Architect X17 (UK) – The Most Advanced 3D Architectural Design Software",
        description:
            "Discover the power of Chief Architect X17. Faster rendering, smart building tools, and the industry's most intuitive 3D design workflow.",
    },
}

export default function Page() {
    const gbPricing = {
        currencySymbol: "£",
        currencyCode: "GBP",
        price: 59,
        paymentLink: "https://buy.stripe.com/6oU4gBeBP5yl5Jy0pj9sk04",
    }

    const gbContent = {
        badge: "New Release: Chief Architect X17",
        title: (
            <>
                Design Smarter.
                <br />
                Build Faster.
            </>
        ),
        description: "Chief Architect X17 is the fastest, smartest, and most intelligent version ever created — built for architects, interior designers, and builders who want unmatched efficiency.",
        buyButton: "Buy Now",
        watchButton: "See What's New in X17",
        oneTimePurchase: "One-time purchase",
        lifetimeAccess: "Lifetime access",
    }

    const gbPricingContent = {
        heading: "Get Chief Architect X17 Today",
        subheading: "One-time purchase with lifetime access. Includes all premium features and free updates.",
        badge: "ONE TIME PAYMENT - LIFETIME ACTIVATION",
        versionName: "Full Version",
        accessFeature: "Complete access to all features",
        oneTimePurchase: "One-time purchase",
        lifetimeAccess: "Lifetime access",
        features: [
            "Full 3D modeling capabilities",
            "Advanced photorealistic rendering",
            "Construction documentation",
            "Material lists & estimates",
            "BIM integration tools",
            "Advanced CAD tools",
            "30-day money-back guarantee",
        ],
        buyButton: "Buy Now",
    }

    return (
        <main className="min-h-screen">
            <Header region="gb" />
            <HeroSection content={gbContent} pricing={gbPricing} region="gb" />
            <TrustedBySection />
            <WhatsNewSection />
            <VideoSection />
            <FeaturesSection />
            <ComparisonSection />
            <TestimonialsSection />
            <SystemRequirementsSection />
            <PricingSection content={gbPricingContent} pricing={gbPricing} region="gb" />
            <GuaranteeSection region="gb" />
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
                            priceCurrency: "GBP",
                            lowPrice: "59",
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
