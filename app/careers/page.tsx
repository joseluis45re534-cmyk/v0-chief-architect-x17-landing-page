import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Briefcase, Heart, Rocket, Users } from "lucide-react"

export const metadata = {
  title: "Careers - Chief Architect X17",
  description: "Join the Chief Architect team and help build the future of architectural design software.",
}

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20" style={{ backgroundColor: "#f0f4f8" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: "#1a3e6e" }}>
              Careers at Chief Architect
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Join our team of passionate innovators building the future of architectural design software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="inline-flex p-4 rounded-full mb-4" style={{ backgroundColor: "#f0f4f8" }}>
                <Rocket className="h-8 w-8" style={{ color: "#1a3e6e" }} />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1a3e6e" }}>
                Innovation
              </h3>
              <p className="text-gray-600 text-sm">Work on cutting-edge technology</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="inline-flex p-4 rounded-full mb-4" style={{ backgroundColor: "#f0f4f8" }}>
                <Users className="h-8 w-8" style={{ color: "#1a3e6e" }} />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1a3e6e" }}>
                Great Team
              </h3>
              <p className="text-gray-600 text-sm">Collaborate with talented people</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="inline-flex p-4 rounded-full mb-4" style={{ backgroundColor: "#f0f4f8" }}>
                <Heart className="h-8 w-8" style={{ color: "#1a3e6e" }} />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1a3e6e" }}>
                Great Benefits
              </h3>
              <p className="text-gray-600 text-sm">Competitive compensation & perks</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="inline-flex p-4 rounded-full mb-4" style={{ backgroundColor: "#f0f4f8" }}>
                <Briefcase className="h-8 w-8" style={{ color: "#1a3e6e" }} />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1a3e6e" }}>
                Growth
              </h3>
              <p className="text-gray-600 text-sm">Continuous learning opportunities</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-12 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#1a3e6e" }}>
              Current Openings
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#1a3e6e] pl-6 py-4">
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1a3e6e" }}>
                  Senior Software Engineer
                </h3>
                <p className="text-gray-600 mb-2">Full-time • Remote or Coeur d'Alene, ID</p>
                <p className="text-gray-700 leading-relaxed">
                  We're looking for experienced engineers to help build next-generation 3D rendering and modeling
                  features.
                </p>
              </div>

              <div className="border-l-4 border-[#1a3e6e] pl-6 py-4">
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1a3e6e" }}>
                  Product Designer
                </h3>
                <p className="text-gray-600 mb-2">Full-time • Remote or Coeur d'Alene, ID</p>
                <p className="text-gray-700 leading-relaxed">
                  Join our design team to create intuitive user experiences for professional architects and builders.
                </p>
              </div>

              <div className="border-l-4 border-[#1a3e6e] pl-6 py-4">
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1a3e6e" }}>
                  Customer Success Manager
                </h3>
                <p className="text-gray-600 mb-2">Full-time • Remote or Coeur d'Alene, ID</p>
                <p className="text-gray-700 leading-relaxed">
                  Help our customers succeed by providing exceptional support and training.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a3e6e] to-[#2d5a91] rounded-xl shadow-lg p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
            <p className="text-xl mb-8 text-gray-100">Send your resume and portfolio to join our team.</p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#1a3e6e] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
