import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Payment & Security Policy | Chief Architect X17",
  description: "Learn about our payment methods and security measures for Chief Architect X17.",
}

export default function PaymentPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
          <Link href="/" className="text-sm text-gray-600 hover:text-[#1a3e6e] mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
            Payment & Security Policy
          </h1>
          <p className="text-gray-600 mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Accepted Payment Methods
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We accept the following payment methods for Chief Architect X17:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Credit Cards (Visa, Mastercard, American Express, Discover)</li>
                <li>Debit Cards</li>
                <li>PayPal</li>
                <li>Wire Transfer (for enterprise purchases)</li>
                <li>Purchase Orders (for qualified business customers)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Payment Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We take payment security seriously and implement industry-leading measures:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>SSL Encryption:</strong> All payment data is encrypted using 256-bit SSL technology
                </li>
                <li>
                  <strong>PCI DSS Compliance:</strong> We comply with Payment Card Industry Data Security Standards
                </li>
                <li>
                  <strong>Secure Payment Processors:</strong> We use trusted processors like Stripe and PayPal
                </li>
                <li>
                  <strong>No Storage:</strong> We do not store your complete credit card information on our servers
                </li>
                <li>
                  <strong>Fraud Detection:</strong> Advanced fraud detection systems monitor all transactions
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Pricing and Billing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">All prices are displayed in USD and include:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>One-time purchase price with no recurring fees</li>
                <li>Free software updates for one year</li>
                <li>Technical support for one year</li>
                <li>Immediate license key delivery via email</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Sales tax may be added based on your location and local regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Payment Processing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">When you complete a purchase:</p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Your payment is processed immediately through our secure payment gateway</li>
                <li>You receive an email confirmation with your order details</li>
                <li>Your software license key is delivered within minutes</li>
                <li>You can download and activate Chief Architect X17 immediately</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Failed Payments
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If your payment fails, please check that your payment information is correct and you have sufficient
                funds. Common reasons for payment failures include incorrect card details, insufficient funds, or bank
                security restrictions. Contact your bank or our support team if issues persist.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Data Protection
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your payment and personal information is protected by multiple layers of security. We comply with GDPR,
                CCPA, and other data protection regulations. For more information, see our{" "}
                <Link href="/policies/privacy" className="text-[#2d5a91] hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Refunds
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We offer a 60-day money-back guarantee. Refunds are processed to your original payment method within
                5-10 business days. See our{" "}
                <Link href="/policies/refund" className="text-[#2d5a91] hover:underline">
                  Refund Policy
                </Link>{" "}
                for details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Questions?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For payment or security questions, contact us at{" "}
                <a href="mailto:billing@chiefarchitect.com" className="text-[#2d5a91] hover:underline">
                  billing@chiefarchitect.com
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
