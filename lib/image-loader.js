export default function cloudflareLoader({ src, width, quality }) {
  // Return the source URL as-is for Cloudflare Pages
  // Cloudflare will handle image optimization automatically
  return src
}
