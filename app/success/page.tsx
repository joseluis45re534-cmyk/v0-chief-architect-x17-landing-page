import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Purchase Successful - Chief Architect X17",
  description: "Thank you for purchasing Chief Architect X17. Download your software now.",
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
              Thank You for Your Purchase!
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Your payment has been processed successfully. You can now download Chief Architect X17.
            </p>

            <div className="bg-gradient-to-br from-[#1a3e6e] to-[#2d5a91] rounded-xl p-8 mb-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Download Your Software</h2>
              <p className="mb-6 text-white/90">
                Click the button below to access your Chief Architect X17 installation files and license key.
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
                  Download Chief Architect X17
                </a>
              </Button>
            </div>

            <div className="bg-[#f0f4f8] rounded-xl p-6 mb-8 text-left">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Installation Steps
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#2d5a91" }} />
                  <span className="text-gray-700">Download the installation files from the link above</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#2d5a91" }} />
                  <span className="text-gray-700">Run the installer and follow the on-screen instructions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#2d5a91" }} />
                  <span className="text-gray-700">Use the provided license key to activate your software</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#2d5a91" }} />
                  <span className="text-gray-700">Access training videos and documentation to get started</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" style={{ backgroundColor: "#1a3e6e" }} asChild>
                <Link href="/">Return to Homepage</Link>
              </Button>
              <Button size="lg" variant="outline" style={{ borderColor: "#2d5a91", color: "#1a3e6e" }} asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
