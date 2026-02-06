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
        paymentLink: "https://buy.stripe.com/5kQ5kDamQ66tdLI8oEdAk00",
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

    const frTrustedBy = {
        subHeading: "Recommandé par les leaders de l'industrie",
        heading: "Rejoignez des milliers de professionnels qui construisent avec Chief Architect",
        footerStart: "Plus de",
        footerEnd: "architectes, designers et constructeurs font confiance à Chief Architect",
    }

    const frWhatsNew = {
        badge: "Nouveautés de X17",
        heading: "Fonctionnalités révolutionnaires qui transforment votre flux de travail",
        description: "Chief Architect X17 introduit de nouvelles capacités puissantes conçues pour accélérer votre processus de conception et offrir des résultats exceptionnels.",
        features: [
            {
                title: "Moteur de rendu 3D plus rapide",
                description: "Profitez de temps de rendu jusqu'à 3x plus rapides grâce à l'architecture de rendu entièrement reconstruite.",
            },
            {
                title: "Détection automatique des matériaux",
                description: "La reconnaissance intelligente des matériaux applique automatiquement les textures et spécifications appropriées.",
            },
            {
                title: "Murs et toits intelligents",
                description: "Composants de construction paramétriques qui s'adaptent intelligemment aux changements de conception en temps réel.",
            },
            {
                title: "Outils d'amélioration CAO",
                description: "Outils CAO de qualité professionnelle avec dessin de précision et fonctionnalités d'annotation avancées.",
            },
        ],
    }

    const frVideo = {
        heading: "Voir Chief Architect X17 en action",
        description: "Regardez comment les professionnels transforment leur flux de travail de conception avec les nouvelles fonctionnalités puissantes de X17",
        watchFullDemo: "Regarder la démo complète",
    }

    const frFeatures = {
        heading: "Solution complète de conception architecturale",
        subheading: "Tout ce dont vous avez besoin pour concevoir, documenter et présenter vos projets architecturaux avec une précision professionnelle",
        features: [
            {
                title: "Modélisation 3D",
                description: "Créez des modèles architecturaux 3D détaillés avec des outils de construction intelligents et des objets paramétriques qui s'ajustent automatiquement aux modifications de conception.",
            },
            {
                title: "Design d'intérieur",
                description: "Concevez des intérieurs époustouflants avec de vastes bibliothèques de meubles, d'équipements, de matériaux et de finitions. Visualisez chaque détail avant la construction.",
            },
            {
                title: "Documents de construction",
                description: "Générez automatiquement des dessins de construction professionnels, des élévations, des coupes et des détails à partir de votre modèle 3D avec une précision extrême.",
            },
            {
                title: "Listes de matériaux",
                description: "Générez automatiquement des listes de matériaux complètes et des estimations de coûts directement à partir de votre conception avec des mises à jour en temps réel.",
            },
            {
                title: "Rendu & Visualisation",
                description: "Créez des rendus photoréalistes et des visites virtuelles avec une technologie de ray-tracing avancée. Présentez votre vision avec une clarté époustouflante.",
            },
            {
                title: "Intégration BIM",
                description: "Support BIM complet avec capacités d'import/export IFC. Collaborez sans problème avec les ingénieurs et autres professionnels de la conception.",
            },
        ],
    }

    const frComparison = {
        heading: "Pourquoi choisir Chief Architect X17 ?",
        subheading: "Découvrez comment Chief Architect X17 se compare aux versions précédentes et aux principaux concurrents",
        x17vsx16: {
            heading: "Chief Architect X17 vs X16",
            headers: ["Fonctionnalité", "X17", "X16"] as [string, string, string],
            rows: [
                { feature: "Vitesse de rendu 3D", x17: "3x plus rapide", x16: "Standard" },
                { feature: "Détection auto. des matériaux", x17: true, x16: false },
                { feature: "Murs et toits intelligents", x17: true, x16: "Basique" },
                { feature: "Outils d'amélioration CAO", x17: "Avancé", x16: "Standard" },
                { feature: "Collaboration en temps réel", x17: true, x16: false },
            ],
        },
        competitors: {
            heading: "Chief Architect X17 vs Concurrents",
            headers: ["Fonctionnalité", "Chief Architect X17", "SketchUp Pro", "Revit LT", "Home Designer"] as [string, string, string, string, string],
            rows: [
                { feature: "Docs de construction auto.", ca: true, sketchup: false, revit: true, hd: true },
                { feature: "Rendu 3D avancé", ca: true, sketchup: "Plugin requis", revit: "Limité", hd: "Basique" },
                { feature: "Listes de matériaux & estimations", ca: true, sketchup: false, revit: "Limité", hd: true },
                { feature: "Intégration BIM", ca: true, sketchup: false, revit: true, hd: false },
                { feature: "Facilité d'apprentissage", ca: "Élevée", sketchup: "Élevée", revit: "Faible", hd: "Moyenne" },
            ],
        },
    }

    const frTestimonials = {
        heading: "Recommandé par les professionnels du design du monde entier",
        subheading: "Avis réels d'architectes, de designers, de constructeurs et de propriétaires utilisant Chief Architect",
        testimonials: [
            {
                name: "Beatrice Cannon",
                role: "Entrepreneur",
                experience: "25 ans dans la construction",
                quote: "En tant qu'entrepreneur avec 25 ans d'expérience, j'ai vu beaucoup de logiciels trop compliqués. Plan7 va droit au but. Il me permet de montrer aux clients des plans d'étage et des modèles 3D rapides avant de commencer un projet.",
                rating: 5,
            },
            {
                name: "Daniel Santos",
                role: "Propriétaire & Designer",
                experience: "Maison auto-conçue",
                quote: "J'ai acheté Plan7Architect pour concevoir ma propre maison, et je suis étonné de voir à quel point c'est facile à utiliser. La vue 3D aide à visualiser chaque détail, et la précision de la planification 2D est parfaite.",
                rating: 5,
            },
            {
                name: "kids",
                role: "Professionnel",
                experience: "Projet d'extension de garage",
                quote: "Je suis honnêtement impressionné. J'ai planifié une extension complète de garage et envoyé les fichiers DWG à mon dessinateur — il a tout ouvert dans AutoCAD sans problème et a fait les ajustements techniques. Ça m'a fait gagner des semaines.",
                rating: 5,
            },
            {
                name: "Oscar Kavanagh",
                role: "Charpentier",
                experience: "Présentations clients",
                quote: "Je suis charpentier et j'avais besoin de quelque chose pour montrer aux clients des agencements simples en 3D. Fonctionne bien mieux que prévu. C'est rapide, ça ne plante pas, et les modèles sont propres. Pour le prix, imbattable.",
                rating: 5,
            },
            {
                name: "Elvira Gina",
                role: "Professionnel du design",
                experience: "Plans professionnels",
                quote: "Me donne la même qualité de plans pour lesquels je payais des milliers. C'est intuitif, rapide et ça a l'air incroyablement professionnel. J'aime particulièrement la rapidité avec laquelle je peux passer entre les plans d'étage, les coupes et les vues 3D.",
                rating: 5,
            },
            {
                name: "Stephen Kerata",
                role: "Entreprise familiale de rénovation",
                experience: "Propriétaire de petite entreprise",
                quote: "Nous dirigeons une petite entreprise familiale de rénovation, et Plan7Architect est devenu notre outil de planification incontournable. Ma femme fait les agencements intérieurs, je me concentre sur la structure, et ensemble nous pouvons montrer aux clients des aperçus 3D en quelques heures.",
                rating: 5,
            },
        ],
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

    const frRequirements = {
        heading: "Configuration Requise",
        subheading: "Assurez des performances optimales avec la bonne configuration matérielle pour Chief Architect X17",
        minimum: {
            title: "Configuration Minimale",
            description: "Configuration de base pour exécuter Chief Architect X17",
            specs: [
                { label: "Système d'exploitation", value: "Windows 10 (64-bit)" },
                { label: "Processeur", value: "Intel Core i5 ou AMD Ryzen 5" },
                { label: "RAM", value: "8 Go" },
                { label: "Stockage", value: "10 Go d'espace disponible" },
                { label: "Graphique", value: "GPU compatible DirectX 11 avec 2 Go de VRAM" },
            ],
        },
        recommended: {
            title: "Configuration Recommandée",
            description: "Configuration optimale pour les flux de travail professionnels",
            badge: "MEILLEURE PERFORMANCE",
            specs: [
                { label: "Système d'exploitation", value: "Windows 11 (64-bit)" },
                { label: "Processeur", value: "Intel Core i7/i9 ou AMD Ryzen 7/9" },
                { label: "RAM", value: "16 Go ou plus" },
                { label: "Stockage", value: "SSD de 50 Go" },
                { label: "Graphique", value: "NVIDIA RTX ou AMD RX avec 4 Go+ de VRAM" },
            ],
        },
    }

    const frGuarantee = {
        heading: "Garantie Satisfait ou Remboursé de 60 Jours",
        subheading: "Nous sommes convaincus que vous aimerez Chief Architect X17. Essayez-le sans risque pendant 60 jours. Si vous n'êtes pas entièrement satisfait, nous vous rembourserons votre achat - sans poser de questions.",
        features: [
            {
                title: "60 Jours pour Essayer",
                description: "Prenez 60 jours complets pour explorer chaque fonctionnalité et capacité",
            },
            {
                title: "Retours Faciles",
                description: "Processus de remboursement simple - envoyez-nous simplement votre numéro de commande par e-mail",
            },
            {
                title: "Sans Questions",
                description: "Si vous n'êtes pas satisfait, nous traiterons votre remboursement intégral",
            },
        ],
        cta: {
            heading: "Prêt à transformer votre flux de travail de conception ?",
            description: "Rejoignez des milliers d'architectes et de designers qui font confiance à Chief Architect X17 pour leurs projets.",
            button: "Obtenir Chief Architect X17 - 59€",
            subtext: "Accès instantané • Licence à vie • Garantie de 60 jours",
        },
    }

    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection content={frContent} pricing={frPricing} />
            <TrustedBySection content={frTrustedBy} />
            <WhatsNewSection content={frWhatsNew} />
            <VideoSection content={frVideo} />
            <FeaturesSection content={frFeatures} />
            <ComparisonSection content={frComparison} />
            <TestimonialsSection content={frTestimonials} />
            <SystemRequirementsSection content={frRequirements} />
            <PricingSection content={frPricingContent} pricing={frPricing} />
            <GuaranteeSection content={frGuarantee} />
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
