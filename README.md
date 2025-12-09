# Chief Architect X17 Landing Page

This is a high-conversion, SEO-optimized landing page for Chief Architect X17 software with Stripe payment integration.

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

**REQUIRED:** Add the following environment variable in the Cloudflare Pages dashboard:

Settings → Environment Variables → Add variable

- **STRIPE_SECRET_KEY**: Your Stripe secret key (starts with `sk_live_...` or `sk_test_...`)

The Stripe publishable key is already configured in the code: `pk_live_51ScCjZJ2ODoAACday2ietOYSGx87Ij93FJNEySYL4lKvUjNesIeebvCHKmsF4gHboG9Oo3jKNniAaB7Ql5AnSMrs00iFXpiCZw`

## Stripe Integration

The landing page uses Stripe Checkout for payments:

- When users click "Buy Now", a Stripe Checkout session is created via Cloudflare Pages Functions
- Users are redirected to Stripe's secure payment page
- After successful payment, users are redirected to `/success`
- Price: $85.75 for Chief Architect X17 Full Version

## Local Development

\`\`\`bash
npm install
npm run dev
\`\`\`

For local Stripe testing, you'll need to add the `STRIPE_SECRET_KEY` to your local environment.

## Build for Production

\`\`\`bash
npm run build
\`\`\`

This creates a static export in the `out` directory optimized for Cloudflare Pages.
