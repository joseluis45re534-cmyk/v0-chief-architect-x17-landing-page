import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | Chief Architect X17",
  description: "Read the terms and conditions for using Chief Architect X17 software.",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
          <Link href="/" className="text-sm text-gray-600 hover:text-[#1a3e6e] mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
            Terms & Conditions
          </h1>
          <p className="text-gray-600 mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By purchasing, downloading, or using Chief Architect X17 software, you agree to be bound by these Terms
                and Conditions. If you do not agree to these terms, do not use the software.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                2. License Grant
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Chief Architect grants you a non-exclusive, non-transferable license to use Chief Architect X17 software
                subject to these terms:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The software may be installed on devices you own or control</li>
                <li>One license permits use by a single user</li>
                <li>You may not distribute, sublicense, or resell the software</li>
                <li>You may not reverse engineer or decompile the software</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                3. User Obligations
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use the software only for lawful purposes</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use the software to create unlawful or harmful content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                4. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Chief Architect X17 and all associated intellectual property rights remain the property of Chief
                Architect, Inc. Your license does not grant you ownership of the software, only the right to use it
                under these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                5. Updates and Support
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your purchase includes free software updates and technical support for one year from the date of
                purchase. Extended support may be purchased separately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                6. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Chief Architect shall not be liable for any indirect, incidental, special, or consequential damages
                arising from the use or inability to use the software, even if advised of the possibility of such
                damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                7. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This license is effective until terminated. Your rights will terminate automatically without notice if
                you fail to comply with any term of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                8. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For questions about these terms, contact us at{" "}
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
