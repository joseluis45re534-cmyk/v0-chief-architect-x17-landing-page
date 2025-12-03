import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclaimer | Chief Architect X17",
  description: "Important disclaimer and limitation of liability for Chief Architect X17.",
}

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
          <Link href="/" className="text-sm text-gray-600 hover:text-[#1a3e6e] mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
            Disclaimer
          </h1>
          <p className="text-gray-600 mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                General Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The information provided on this website and in Chief Architect X17 software is for general
                informational purposes only. While we strive to keep the information accurate and up-to-date, we make no
                representations or warranties of any kind, express or implied, about the completeness, accuracy,
                reliability, or suitability of the software or information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Professional Use
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Chief Architect X17 is a professional design tool intended to assist architects, designers, and builders
                in creating architectural plans and designs. However, the software does not replace professional
                judgment, local building codes, or licensed professional services. Users are responsible for ensuring
                their designs comply with all applicable laws, regulations, and building codes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                No Professional Relationship
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Use of Chief Architect X17 does not create a professional relationship between you and Chief Architect,
                Inc. We do not provide architectural, engineering, or construction advice. Always consult with licensed
                professionals for your specific project requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In no event shall Chief Architect, Inc., its directors, employees, or agents be liable for any:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Direct, indirect, incidental, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or use</li>
                <li>Business interruption or system failures</li>
                <li>Errors or omissions in designs created with the software</li>
                <li>Damages arising from reliance on information or designs produced</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Third-Party Content
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Chief Architect X17 may include content, materials, or integrations from third parties. We are not
                responsible for the accuracy, legality, or appropriateness of third-party content. Your use of
                third-party content is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Changes and Updates
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any aspect of the software or website at any
                time without notice. We may also update this disclaimer periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Acceptance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By using Chief Architect X17 and our website, you acknowledge that you have read, understood, and agree
                to be bound by this disclaimer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For questions about this disclaimer, contact us at{" "}
                <a href="mailto:legal@chiefarchitect.com" className="text-[#2d5a91] hover:underline">
                  legal@chiefarchitect.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
