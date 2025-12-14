import type React from "react"
export const metadata = {
  title: "Chief Architect X17 – The Most Advanced 3D Architectural Design Software",
  description:
    "Discover the power of Chief Architect X17. Faster rendering, smart building tools, and the industry's most intuitive 3D design workflow. Buy now for $95 CAD.",
  keywords: [
    "Chief Architect X17",
    "architectural design software",
    "3D home design software",
    "BIM drafting tools",
    "interior design software",
    "CAD tools",
    "floor plan software",
    "3D rendering for architects",
  ],
  openGraph: {
    title: "Chief Architect X17 – The Most Advanced 3D Architectural Design Software",
    description:
      "Discover the power of Chief Architect X17. Faster rendering, smart building tools, and the industry's most intuitive 3D design workflow.",
    type: "website",
    images: ["/chief-architect-x17-software-interface.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chief Architect X17 – The Most Advanced 3D Architectural Design Software",
    description:
      "Discover the power of Chief Architect X17. Faster rendering, smart building tools, and the industry's most intuitive 3D design workflow.",
  },
}

export default function CALayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
