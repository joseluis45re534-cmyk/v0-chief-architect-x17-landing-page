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
        paymentLink: "https://buy.stripe.com/bJe28l6KR8o64YZc6fbII03",
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

    const deTrustedBy = {
        subHeading: "Vertraut von Branchenführern",
        heading: "Schließen Sie sich Tausenden von Fachleuten an, die mit Chief Architect bauen",
        footerStart: "Über",
        footerEnd: "Architekten, Designer und Bauherren vertrauen auf Chief Architect",
    }

    const deWhatsNew = {
        badge: "Was ist neu in X17",
        heading: "Bahnbrechende Funktionen, die Ihren Workflow transformieren",
        description: "Chief Architect X17 führt leistungsstarke neue Funktionen ein, die Ihren Designprozess beschleunigen und außergewöhnliche Ergebnisse liefern.",
        features: [
            {
                title: "Schnellere 3D-Rendering-Engine",
                description: "Erleben Sie bis zu 3x schnellere Renderzeiten mit der komplett neu aufgebauten Rendering-Architektur.",
            },
            {
                title: "Automatische Materialerkennung",
                description: "Intelligente Materialerkennung wendet automatisch passende Texturen und Spezifikationen an.",
            },
            {
                title: "Intelligente Wände & Dächer",
                description: "Parametrische Bauteile, die sich intelligent an Designänderungen in Echtzeit anpassen.",
            },
            {
                title: "CAD-Erweiterungswerkzeuge",
                description: "Professionelle CAD-Werkzeuge mit präzisem Zeichnen und erweiterten Anmerkungsfunktionen.",
            },
        ],
    }

    const deVideo = {
        heading: "Sehen Sie Chief Architect X17 in Aktion",
        description: "Sehen Sie, wie Profis ihren Design-Workflow mit den leistungsstarken neuen Funktionen von X17 transformieren",
        watchFullDemo: "Vollständige Demo ansehen",
    }

    const deFeatures = {
        heading: "Komplette Architektur-Design-Lösung",
        subheading: "Alles, was Sie brauchen, um Ihre Architekturprojekte mit professioneller Präzision zu entwerfen, zu dokumentieren und zu präsentieren",
        features: [
            {
                title: "3D-Modellierung",
                description: "Erstellen Sie detaillierte architektonische 3D-Modelle mit intelligenten Bauwerkzeugen und parametrischen Objekten, die sich automatisch an Designänderungen anpassen.",
            },
            {
                title: "Innenarchitektur",
                description: "Entwerfen Sie atemberaubende Innenräume mit umfangreichen Bibliotheken für Möbel, Einrichtungsgegenstände, Materialien und Oberflächen. Visualisieren Sie jedes Detail vor dem Bau.",
            },
            {
                title: "Konstruktionsdokumente",
                description: "Erstellen Sie automatisch professionelle Bauzeichnungen, Ansichten, Schnitte und Details aus Ihrem 3D-Modell mit höchster Präzision.",
            },
            {
                title: "Materiallisten",
                description: "Erstellen Sie automatisch umfassende Materiallisten und Kostenschätzungen direkt aus Ihrem Entwurf mit Echtzeit-Updates bei Änderungen.",
            },
            {
                title: "Rendering & Visualisierung",
                description: "Erstellen Sie fotorealistische Renderings und Rundgänge mit fortschrittlicher Ray-Tracing-Technologie. Präsentieren Sie Ihre Vision in atemberaubender Klarheit.",
            },
            {
                title: "BIM-Integration",
                description: "Volle BIM-Unterstützung mit IFC-Import/Export-Funktionen. Arbeiten Sie nahtlos mit Ingenieuren und anderen Design-Profis zusammen.",
            },
        ],
    }

    const deComparison = {
        heading: "Warum Chief Architect X17 wählen?",
        subheading: "Sehen Sie, wie Chief Architect X17 im Vergleich zu früheren Versionen und führenden Wettbewerbern abschneidet",
        x17vsx16: {
            heading: "Chief Architect X17 vs X16",
            headers: ["Funktion", "X17", "X16"] as [string, string, string],
            rows: [
                { feature: "3D-Rendering-Geschwindigkeit", x17: "3x schneller", x16: "Standard" },
                { feature: "Auto-Materialerkennung", x17: true, x16: false },
                { feature: "Intelligente Wände & Dächer", x17: true, x16: "Basis" },
                { feature: "CAD-Erweiterungswerkzeuge", x17: "Erweitert", x16: "Standard" },
                { feature: "Echtzeit-Zusammenarbeit", x17: true, x16: false },
            ],
        },
        competitors: {
            heading: "Chief Architect X17 vs Wettbewerber",
            headers: ["Funktion", "Chief Architect X17", "SketchUp Pro", "Revit LT", "Home Designer"] as [string, string, string, string, string],
            rows: [
                { feature: "Autom. Konstruktionsdokumente", ca: true, sketchup: false, revit: true, hd: true },
                { feature: "Erweitertes 3D-Rendering", ca: true, sketchup: "Plugin erforderlich", revit: "Begrenzt", hd: "Basis" },
                { feature: "Materiallisten & Schätzungen", ca: true, sketchup: false, revit: "Begrenzt", hd: true },
                { feature: "BIM-Integration", ca: true, sketchup: false, revit: true, hd: false },
                { feature: "Lernfreundlichkeit", ca: "Hoch", sketchup: "Hoch", revit: "Niedrig", hd: "Mittel" },
            ],
        },
    }

    const deTestimonials = {
        heading: "Vertraut von Design-Profis weltweit",
        subheading: "Echte Bewertungen von Architekten, Designern, Bauherren und Hausbesitzern, die Chief Architect nutzen",
        testimonials: [
            {
                name: "Beatrice Cannon",
                role: "Bauunternehmer",
                experience: "25 Jahre im Bauwesen",
                quote: "Als Bauunternehmer mit 25 Jahren Erfahrung habe ich viele überkomplizierte Software gesehen. Plan7 kommt direkt auf den Punkt. Es ermöglicht mir, Kunden Grundrisse und schnelle 3D-Modelle zu zeigen, bevor ein Projekt beginnt.",
                rating: 5,
            },
            {
                name: "Daniel Santos",
                role: "Hausbesitzer & Designer",
                experience: "Selbst entworfenes Haus",
                quote: "Ich habe Plan7Architect gekauft, um mein eigenes Haus zu entwerfen, und bin erstaunt, wie einfach es zu bedienen ist. Die 3D-Ansicht hilft, jedes Detail zu visualisieren, und die Präzision bei der 2D-Planung ist perfekt.",
                rating: 5,
            },
            {
                name: "kids",
                role: "Profi",
                experience: "Garagen-Erweiterungsprojekt",
                quote: "Ich bin ehrlich beeindruckt. Habe eine komplette Garagenerweiterung geplant und die DWG-Dateien an meinen Zeichner geschickt - er hat alles problemlos in AutoCAD geöffnet und die technischen Anpassungen vorgenommen. Hat mir Wochen gespart.",
                rating: 5,
            },
            {
                name: "Oscar Kavanagh",
                role: "Zimmermann",
                experience: "Kundenpräsentationen",
                quote: "Ich bin Zimmermann und brauchte etwas, um Kunden einfache Layouts in 3D zu zeigen. Funktioniert viel besser als erwartet. Es ist schnell, stürzt nicht ab und die Modelle sehen sauber aus. Für den Preis unschlagbar.",
                rating: 5,
            },
            {
                name: "Elvira Gina",
                role: "Design-Profi",
                experience: "Professionelle Pläne",
                quote: "Gibt mir die gleiche Qualität von Plänen, für die ich früher Tausende bezahlt habe. Es ist intuitiv, schnell und sieht unglaublich professionell aus. Ich liebe besonders, wie schnell ich zwischen Grundrissen, Schnitten und 3D-Ansichten wechseln kann.",
                rating: 5,
            },
            {
                name: "Stephen Kerata",
                role: "Familien-Renovierungsunternehmen",
                experience: "Kleinunternehmer",
                quote: "Wir führen ein kleines Familien-Renovierungsunternehmen, und Plan7Architect ist zu unserem bevorzugten Planungstool geworden. Meine Frau macht die Innenlayouts, ich konzentriere mich auf die Struktur, und zusammen können wir Kunden innerhalb von Stunden 3D-Vorschauen zeigen.",
                rating: 5,
            },
        ],
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

    const deRequirements = {
        heading: "Systemanforderungen",
        subheading: "Sorgen Sie für optimale Leistung mit der richtigen Hardwarekonfiguration für Chief Architect X17",
        minimum: {
            title: "Mindestanforderungen",
            description: "Basiskonfiguration zum Ausführen von Chief Architect X17",
            specs: [
                { label: "Betriebssystem", value: "Windows 10 (64-bit)" },
                { label: "Prozessor", value: "Intel Core i5 oder AMD Ryzen 5" },
                { label: "RAM", value: "8 GB" },
                { label: "Speicher", value: "10 GB verfügbarer Speicherplatz" },
                { label: "Grafik", value: "DirectX 11 kompatible GPU mit 2GB VRAM" },
            ],
        },
        recommended: {
            title: "Empfohlene Anforderungen",
            description: "Optimale Einrichtung für professionelle Workflows",
            badge: "BESTE LEISTUNG",
            specs: [
                { label: "Betriebssystem", value: "Windows 11 (64-bit)" },
                { label: "Prozessor", value: "Intel Core i7/i9 oder AMD Ryzen 7/9" },
                { label: "RAM", value: "16 GB oder mehr" },
                { label: "Speicher", value: "50 GB SSD" },
                { label: "Grafik", value: "NVIDIA RTX oder AMD RX mit 4GB+ VRAM" },
            ],
        },
    }

    const deGuarantee = {
        heading: "60-Tage Geld-zurück-Garantie",
        subheading: "Wir sind zuversichtlich, dass Sie Chief Architect X17 lieben werden. Testen Sie es 60 Tage lang risikofrei. Wenn Sie nicht vollständig zufrieden sind, erstatten wir Ihren Kaufpreis – ohne Fragen.",
        features: [
            {
                title: "60 Tage testen",
                description: "Nehmen Sie sich volle 60 Tage Zeit, um jede Funktion und Fähigkeit zu erkunden",
            },
            {
                title: "Einfache Rückgabe",
                description: "Einfacher Rückerstattungsprozess – senden Sie uns einfach Ihre Bestellnummer per E-Mail",
            },
            {
                title: "Keine Fragen",
                description: "Wenn Sie nicht zufrieden sind, bearbeiten wir Ihre vollständige Rückerstattung",
            },
        ],
        cta: {
            heading: "Bereit, Ihren Design-Workflow zu transformieren?",
            description: "Schließen Sie sich Tausenden von Architekten und Designern an, die bei ihren Projekten auf Chief Architect X17 vertrauen.",
            button: "Chief Architect X17 holen",
            subtext: "Sofortiger Zugang • Lebenslange Lizenz • 60-Tage-Garantie",
        },
    }

    return (
        <main className="min-h-screen">
            <Header region="de" />
            <HeroSection content={deContent} pricing={dePricing} region="de" />
            <TrustedBySection content={deTrustedBy} />
            <WhatsNewSection content={deWhatsNew} />
            <VideoSection content={deVideo} />
            <FeaturesSection content={deFeatures} />
            <ComparisonSection content={deComparison} />
            <TestimonialsSection content={deTestimonials} />
            <SystemRequirementsSection content={deRequirements} />
            <PricingSection content={dePricingContent} pricing={dePricing} region="de" />
            <GuaranteeSection content={deGuarantee} region="de" />
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
