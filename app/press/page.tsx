import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Download, Mail, FileText, ImageIcon } from "lucide-react"

export const metadata = {
  title: "Press Kit - Chief Architect X17",
  description:
    "Download Chief Architect press materials, logos, and media resources for journalists and content creators.",
}

export default function PressPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20" style={{ backgroundColor: "#f0f4f8" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: "#1a3e6e" }}>
              Press Kit
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Download our press materials, logos, product images, and company information for media coverage.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a3e6e" }}>
              Company Overview
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed mb-4">
                Chief Architect is the leading provider of 3D architectural design software for residential and light
                commercial professionals. Since our founding, we've been committed to delivering powerful, intelligent,
                and user-friendly tools that enable architects, builders, and interior designers to bring their visions
                to life.
              </p>
              <p className="leading-relaxed">
                Chief Architect X17 represents our most advanced release to date, featuring breakthrough innovations in
                rendering speed, intelligent automation, and precision modeling capabilities. Trusted by over 100,000
                professionals worldwide, Chief Architect continues to set the standard for architectural design
                software.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full" style={{ backgroundColor: "#f0f4f8" }}>
                  <ImageIcon className="h-8 w-8" style={{ color: "#1a3e6e" }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: "#1a3e6e" }}>
                  Brand Assets
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Download official Chief Architect logos, product images, and screenshots.
              </p>
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: "#1a3e6e" }}
              >
                <Download className="h-5 w-5" />
                Download Logos (ZIP)
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full" style={{ backgroundColor: "#f0f4f8" }}>
                  <FileText className="h-8 w-8" style={{ color: "#1a3e6e" }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: "#1a3e6e" }}>
                  Product Fact Sheet
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Key features, specifications, and product information for Chief Architect X17.
              </p>
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: "#1a3e6e" }}
              >
                <Download className="h-5 w-5" />
                Download Fact Sheet (PDF)
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a3e6e" }}>
              Media Contact
            </h2>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: "#f0f4f8" }}>
                <Mail className="h-6 w-6" style={{ color: "#1a3e6e" }} />
              </div>
              <div>
                <p className="text-gray-700 mb-2">
                  For press inquiries, interview requests, or additional information, please contact our media relations
                  team:
                </p>
                <p className="font-semibold" style={{ color: "#1a3e6e" }}>
                  press@chiefarchitect.pro
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a3e6e" }}>
              Recent Press Releases
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#1a3e6e] pl-6 py-3">
                <p className="text-sm text-gray-500 mb-1">December 2024</p>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1a3e6e" }}>
                  Chief Architect X17 Launches with Breakthrough Rendering Performance
                </h3>
                <p className="text-gray-600">
                  New release delivers 3x faster rendering speeds and enhanced automation features for architectural
                  professionals.
                </p>
              </div>

              <div className="border-l-4 border-[#1a3e6e] pl-6 py-3">
                <p className="text-sm text-gray-500 mb-1">November 2024</p>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1a3e6e" }}>
                  Chief Architect Surpasses 100,000 Active Users Worldwide
                </h3>
                <p className="text-gray-600">
                  Milestone reflects growing adoption of intelligent 3D architectural design software across the AEC
                  industry.
                </p>
              </div>

              <div className="border-l-4 border-[#1a3e6e] pl-6 py-3">
                <p className="text-sm text-gray-500 mb-1">October 2024</p>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1a3e6e" }}>
                  Chief Architect Wins Innovation Award for Advanced Modeling Technology
                </h3>
                <p className="text-gray-600">
                  Recognition highlights company's commitment to pushing boundaries in architectural design software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
