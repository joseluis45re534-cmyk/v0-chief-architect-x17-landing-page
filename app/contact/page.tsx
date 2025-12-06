import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata = {
  title: "Contact Us - Chief Architect X17",
  description:
    "Get in touch with Chief Architect support team. We're here to help with your architectural design needs.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20" style={{ backgroundColor: "#f0f4f8" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: "#1a3e6e" }}>
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 text-pretty">
              Have questions? We're here to help you get the most out of Chief Architect X17.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a3e6e" }}>
                Get in Touch
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d5a91] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d5a91] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d5a91] focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button className="w-full py-3 text-lg font-semibold" style={{ backgroundColor: "#1a3e6e" }}>
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: "#f0f4f8" }}>
                    <Mail className="h-6 w-6" style={{ color: "#1a3e6e" }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: "#1a3e6e" }}>
                      Email
                    </h3>
                    <p className="text-gray-600">support@chiefarchitect.pro</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: "#f0f4f8" }}>
                    <Phone className="h-6 w-6" style={{ color: "#1a3e6e" }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: "#1a3e6e" }}>
                      Phone
                    </h3>
                    <p className="text-gray-600">1-800-482-4433</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: "#f0f4f8" }}>
                    <MapPin className="h-6 w-6" style={{ color: "#1a3e6e" }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: "#1a3e6e" }}>
                      Address
                    </h3>
                    <p className="text-gray-600">
                      Chief Architect, Inc.
                      <br />
                      Coeur d'Alene, Idaho
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
