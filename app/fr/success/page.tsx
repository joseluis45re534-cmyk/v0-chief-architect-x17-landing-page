import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
    title: "Achat Réussi - Chief Architect X17",
    description: "Merci pour votre achat de Chief Architect X17. Téléchargez votre logiciel maintenant.",
}

export default function SuccessPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen flex items-center justify-center py-20" style={{ backgroundColor: "#f0f4f8" }}>
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
                        <div
                            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                            style={{ backgroundColor: "#2d5a91" }}
                        >
                            <Check className="h-10 w-10 text-white" />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                            Merci pour votre achat !
                        </h1>

                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            Votre paiement a été traité avec succès. Vous pouvez maintenant télécharger Chief Architect X17.
                        </p>

                        <div className="bg-gradient-to-br from-[#1a3e6e] to-[#2d5a91] rounded-xl p-8 mb-8 text-white">
                            <h2 className="text-2xl font-bold mb-4">Téléchargez votre logiciel</h2>
                            <p className="mb-6 text-white/90">
                                Cliquez sur le bouton ci-dessous pour accéder à vos fichiers d'installation Chief Architect X17 et à votre clé de licence.
                            </p>
                            <Button
                                size="lg"
                                className="bg-white hover:bg-gray-100 text-[#1a3e6e] font-bold text-lg px-8 py-6 h-auto"
                                asChild
                            >
                                <a
                                    href="https://drive.google.com/drive/folders/1BbcFg95pvaHQ3F1f-d4fy-VlSIyw0ddE?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3"
                                >
                                    <Download className="h-6 w-6" />
                                    Télécharger Chief Architect X17
                                </a>
                            </Button>
                        </div>

                        <div className="bg-[#f0f4f8] rounded-xl p-6 mb-8 text-left">
                            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                                Étapes d'installation
                            </h2>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#2d5a91" }} />
                                    <span className="text-gray-700">Téléchargez les fichiers d'installation à partir du lien ci-dessus</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#2d5a91" }} />
                                    <span className="text-gray-700">Lancez l'installateur et suivez les instructions à l'écran</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#2d5a91" }} />
                                    <span className="text-gray-700">Utilisez la clé de licence fournie pour activer votre logiciel</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#2d5a91" }} />
                                    <span className="text-gray-700">Accédez aux vidéos de formation et à la documentation pour commencer</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" style={{ backgroundColor: "#1a3e6e" }} asChild>
                                <Link href="/fr">Retour à l'accueil</Link>
                            </Button>
                            <Button size="lg" variant="outline" style={{ borderColor: "#2d5a91", color: "#1a3e6e" }} asChild>
                                <Link href="/fr/contact">Contactez le support</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
