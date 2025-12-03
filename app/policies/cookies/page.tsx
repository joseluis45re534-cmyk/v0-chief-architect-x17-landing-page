import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Chief Architect X17",
  description: "Learn about how Chief Architect X17 uses cookies and similar technologies.",
}

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
          <Link href="/" className="text-sm text-gray-600 hover:text-[#1a3e6e] mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
            Cookie Policy
          </h1>
          <p className="text-gray-600 mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                What Are Cookies?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files stored on your device when you visit our website. They help us provide you
                with a better experience by remembering your preferences and understanding how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Types of Cookies We Use
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: "#2d5a91" }}>
                Essential Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies are necessary for the website to function properly. They enable basic features like page
                navigation and access to secure areas.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: "#2d5a91" }}>
                Analytics Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use analytics cookies to understand how visitors interact with our website, helping us improve user
                experience and site performance.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: "#2d5a91" }}>
                Marketing Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies track your browsing habits to show you relevant advertisements and measure the
                effectiveness of our marketing campaigns.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: "#2d5a91" }}>
                Preference Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Preference cookies remember your settings and choices to provide you with a personalized experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Third-Party Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use third-party services that place cookies on your device, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Google Analytics for website analytics</li>
                <li>Payment processors for secure transactions</li>
                <li>Social media platforms for sharing and integration</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Managing Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">You can control and manage cookies in several ways:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use our cookie consent banner to accept or decline cookies</li>
                <li>Adjust your browser settings to block or delete cookies</li>
                <li>Use browser extensions to manage cookie preferences</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Note: Blocking essential cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about our cookie policy, please contact us at{" "}
                <a href="mailto:privacy@chiefarchitect.com" className="text-[#2d5a91] hover:underline">
                  privacy@chiefarchitect.com
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
