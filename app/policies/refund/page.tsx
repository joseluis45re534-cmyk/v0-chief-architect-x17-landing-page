import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Refund & Return Policy | Chief Architect X17",
  description: "Learn about our refund and return policy for Chief Architect X17.",
}

export default function RefundPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
          <Link href="/" className="text-sm text-gray-600 hover:text-[#1a3e6e] mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
            Refund & Return Policy
          </h1>
          <p className="text-gray-600 mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                60-Day Money-Back Guarantee
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We stand behind Chief Architect X17 with a 60-day money-back guarantee. If you're not completely
                satisfied with your purchase, you may request a full refund within 60 days of your purchase date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Eligibility Requirements
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To be eligible for a refund, you must meet the following conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Request must be made within 60 days of purchase</li>
                <li>You must provide your original order number</li>
                <li>You must uninstall the software from all devices</li>
                <li>License key will be deactivated upon refund</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                How to Request a Refund
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">To request a refund:</p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>
                  Contact our support team at{" "}
                  <a href="mailto:support@chiefarchitectpro.com" className="text-[#2d5a91] hover:underline">
                    support@chiefarchitectpro.com
                  </a>
                </li>
                <li>Include your order number and reason for refund</li>
                <li>Wait for refund approval (typically within 2-3 business days)</li>
                <li>Refunds are processed to the original payment method within 5-10 business days</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Non-Refundable Items
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">The following items are not eligible for refunds:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Purchases made more than 60 days ago</li>
                <li>Licenses purchased through third-party resellers</li>
                <li>Upgrade licenses (contact support for assistance)</li>
                <li>Training materials or add-on content purchased separately</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Exchanges
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We do not offer direct exchanges. If you need a different license type or version, please request a
                refund and place a new order for the desired product.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Questions?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about our refund policy, please contact us at{" "}
                <a href="mailto:support@chiefarchitectpro.com" className="text-[#2d5a91] hover:underline">
                  support@chiefarchitectpro.com
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
