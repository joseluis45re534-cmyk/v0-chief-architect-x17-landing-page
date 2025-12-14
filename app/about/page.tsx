import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, Users, Globe, Target } from "lucide-react"

export const metadata = {
  title: "About Us - Chief Architect X17",
  description:
    "Learn about Chief Architect and our mission to provide the best architectural design software for professionals worldwide.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20" style={{ backgroundColor: "#f0f4f8" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: "#1a3e6e" }}>
              About Chief Architect
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              For over three decades, we've been empowering architects, builders, and designers with the most advanced
              3D architectural design software in the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: "#f0f4f8" }}>
                  <Target className="h-8 w-8" style={{ color: "#1a3e6e" }} />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: "#1a3e6e" }}>
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide architectural professionals with intelligent, powerful, and intuitive design tools that
                transform ideas into reality. We're committed to innovation, precision, and helping our customers build
                their dreams.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: "#f0f4f8" }}>
                  <Award className="h-8 w-8" style={{ color: "#1a3e6e" }} />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: "#1a3e6e" }}>
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the world's leading architectural design platform, setting the standard for innovation,
                performance, and user experience in 3D modeling and construction documentation.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-12 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#1a3e6e" }}>
              Why Choose Chief Architect?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full mb-4" style={{ backgroundColor: "#f0f4f8" }}>
                  <Users className="h-10 w-10" style={{ color: "#1a3e6e" }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1a3e6e" }}>
                  Trusted by Professionals
                </h3>
                <p className="text-gray-600">
                  Over 100,000 architects, builders, and designers rely on Chief Architect for their projects.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex p-4 rounded-full mb-4" style={{ backgroundColor: "#f0f4f8" }}>
                  <Globe className="h-10 w-10" style={{ color: "#1a3e6e" }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1a3e6e" }}>
                  Global Reach
                </h3>
                <p className="text-gray-600">
                  Used in over 50 countries, our software powers architectural design worldwide.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex p-4 rounded-full mb-4" style={{ backgroundColor: "#f0f4f8" }}>
                  <Award className="h-10 w-10" style={{ color: "#1a3e6e" }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1a3e6e" }}>
                  Award-Winning
                </h3>
                <p className="text-gray-600">
                  Recognized for excellence in software innovation and customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a3e6e] to-[#2d5a91] rounded-xl shadow-lg p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Join Thousands of Satisfied Customers</h2>
            <p className="text-xl mb-8 text-gray-100">
              Experience the power of Chief Architect X17 and transform your design workflow today.
            </p>
            <a
              href="https://whop.com/checkout/plan_qLhu17IHFgcUq"
              className="inline-block bg-white text-[#1a3e6e] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Started - $69
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
