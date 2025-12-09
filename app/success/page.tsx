import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Purchase Successful - Chief Architect X17",
  description: "Thank you for purchasing Chief Architect X17. Your download link has been sent to your email.",
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
              Purchase Successful!
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Thank you for purchasing Chief Architect X17. Your payment has been processed successfully.
            </p>

            <div className="bg-[#f0f4f8] rounded-xl p-6 mb-8 text-left">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                What's Next?
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#2d5a91" }} />
                  <span className="text-gray-700">Check your email for download instructions and license key</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#2d5a91" }} />
                  <span className="text-gray-700">Download Chief Architect X17 from the link provided</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#2d5a91" }} />
                  <span className="text-gray-700">Activate your software using your unique license key</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#2d5a91" }} />
                  <span className="text-gray-700">Access our training resources and support documentation</span>
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
