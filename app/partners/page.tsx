import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Handshake, Building2, Wrench, GraduationCap } from "lucide-react"

export const metadata = {
  title: "Partners - Chief Architect X17",
  description:
    "Explore partnership opportunities with Chief Architect and join our ecosystem of architectural design professionals.",
}

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20" style={{ backgroundColor: "#f0f4f8" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: "#1a3e6e" }}>
              Partnership Opportunities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Join our network of partners and help architects, builders, and designers achieve excellence in their
              projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-full" style={{ backgroundColor: "#f0f4f8" }}>
                  <Building2 className="h-8 w-8" style={{ color: "#1a3e6e" }} />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: "#1a3e6e" }}>
                  Reseller Program
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Become an authorized Chief Architect reseller and offer our industry-leading software to your customers.
                Benefit from competitive margins, marketing support, and dedicated partner resources.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#1a3e6e] font-bold">•</span>
                  <span>Attractive profit margins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1a3e6e] font-bold">•</span>
                  <span>Co-marketing opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1a3e6e] font-bold">•</span>
                  <span>Partner training and certification</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-full" style={{ backgroundColor: "#f0f4f8" }}>
                  <Wrench className="h-8 w-8" style={{ color: "#1a3e6e" }} />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: "#1a3e6e" }}>
                  Integration Partners
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Integrate your products and services with Chief Architect to provide seamless workflows for our shared
                customers. Our API and SDK make integration straightforward.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#1a3e6e] font-bold">•</span>
                  <span>Access to comprehensive APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1a3e6e] font-bold">•</span>
                  <span>Technical documentation and support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1a3e6e] font-bold">•</span>
                  <span>Joint go-to-market initiatives</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-full" style={{ backgroundColor: "#f0f4f8" }}>
                  <GraduationCap className="h-8 w-8" style={{ color: "#1a3e6e" }} />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: "#1a3e6e" }}>
                  Education Partners
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Universities and training institutions can partner with us to provide students with access to
                professional-grade architectural design tools.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#1a3e6e] font-bold">•</span>
                  <span>Academic licensing programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1a3e6e] font-bold">•</span>
                  <span>Curriculum development support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1a3e6e] font-bold">•</span>
                  <span>Instructor training resources</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-full" style={{ backgroundColor: "#f0f4f8" }}>
                  <Handshake className="h-8 w-8" style={{ color: "#1a3e6e" }} />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: "#1a3e6e" }}>
                  Strategic Alliances
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Build strategic partnerships with Chief Architect to create innovative solutions for the architecture,
                engineering, and construction industry.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#1a3e6e] font-bold">•</span>
                  <span>Custom integration opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1a3e6e] font-bold">•</span>
                  <span>Co-innovation projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1a3e6e] font-bold">•</span>
                  <span>Executive sponsorship</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a3e6e] to-[#2d5a91] rounded-xl shadow-lg p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in Partnering?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Let's discuss how we can grow together and deliver value to our customers.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#1a3e6e] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Contact Partnership Team
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
