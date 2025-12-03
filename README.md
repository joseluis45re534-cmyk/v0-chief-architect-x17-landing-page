# Chief Architect X17 Landing Page

This is a high-conversion, SEO-optimized landing page for Chief Architect X17 software.

## Deploying to Cloudflare Pages

### Method 1: Git Integration (Recommended)

1. Push your code to GitHub/GitLab
2. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/pages)
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** `20`
6. Click "Save and Deploy"

### Method 2: Direct Upload

\`\`\`bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy out --project-name=chief-architect-x17
\`\`\`

## Environment Variables

If you need environment variables, add them in the Cloudflare Pages dashboard under:
Settings → Environment Variables

## Local Development

\`\`\`bash
npm install
npm run dev
\`\`\`

## Build for Production

\`\`\`bash
npm run build
\`\`\`

This creates a static export in the `out` directory optimized for Cloudflare Pages.
