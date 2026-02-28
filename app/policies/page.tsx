import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Policies - Chief Architect X17",
  description: "Review our privacy policy, terms of service, and refund policy for Chief Architect X17.",
}

export default function PoliciesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20" style={{ backgroundColor: "#f0f4f8" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-balance" style={{ color: "#1a3e6e" }}>
            Policies
          </h1>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Privacy Policy
              </h2>
              <div className="text-gray-700 space-y-4 leading-relaxed">
                <p>
                  At Chief Architect, we respect your privacy and are committed to protecting your personal information.
                  This privacy policy outlines how we collect, use, and safeguard your data.
                </p>
                <p>
                  <strong>Information We Collect:</strong> We collect information you provide directly to us, such as
                  when you create an account, make a purchase, or contact our support team.
                </p>
                <p>
                  <strong>How We Use Your Information:</strong> We use your information to provide, maintain, and
                  improve our services, process transactions, and communicate with you about products and updates.
                </p>
                <p>
                  <strong>Data Security:</strong> We implement appropriate security measures to protect your personal
                  information from unauthorized access or disclosure.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Terms of Service
              </h2>
              <div className="text-gray-700 space-y-4 leading-relaxed">
                <p>By purchasing and using Chief Architect X17, you agree to be bound by these terms and conditions.</p>
                <p>
                  <strong>License Grant:</strong> Chief Architect grants you a non-exclusive, non-transferable license
                  to use the software in accordance with the terms specified in your purchase.
                </p>
                <p>
                  <strong>Permitted Use:</strong> You may install and use the software on devices you own or control.
                  The number of installations may be limited based on your license type.
                </p>
                <p>
                  <strong>Prohibited Activities:</strong> You may not reverse engineer, decompile, or redistribute the
                  software without explicit permission from Chief Architect.
                </p>
                <p>
                  <strong>Updates and Support:</strong> Your purchase includes free software updates and access to our
                  support team for technical assistance.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Refund Policy
              </h2>
              <div className="text-gray-700 space-y-4 leading-relaxed">
                <p>We stand behind the quality of Chief Architect X17 and offer a 30-day money-back guarantee.</p>
                <p>
                  <strong>30-Day Guarantee:</strong> If you're not satisfied with your purchase for any reason, you may
                  request a full refund within 30 days of your purchase date.
                </p>
                <p>
                  <strong>How to Request a Refund:</strong> Contact our support team at support@chiefarchitectpro.com with
                  your order number and reason for the refund request.
                </p>
                <p>
                  <strong>Processing Time:</strong> Refunds are typically processed within 5-7 business days and will be
                  credited back to your original payment method.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a3e6e" }}>
                Contact Information
              </h2>
              <div className="text-gray-700 space-y-2 leading-relaxed">
                <p>If you have any questions about these policies, please contact us:</p>
                <p>
                  <strong>Email:</strong> support@chiefarchitectpro.com
                </p>
                <p>
                  <strong>Phone:</strong> 1-800-482-4433
                </p>
                <p>
                  <strong>Address:</strong> Chief Architect, Inc., Coeur d'Alene, Idaho
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
