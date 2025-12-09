/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: 'pk_live_51ScCjZJ2ODoAACday2ietOYSGx87Ij93FJNEySYL4lKvUjNesIeebvCHKmsF4gHboG9Oo3jKNniAaB7Ql5AnSMrs00iFXpiCZw',
  },
}

export default nextConfig
