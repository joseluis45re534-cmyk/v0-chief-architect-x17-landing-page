# Stripe Payment Link Setup for Chief Architect X17

## Quick Setup (5 minutes)

Since you're using a static site on Cloudflare Pages, the easiest way to integrate Stripe is using **Stripe Payment Links**.

### Step 1: Create a Product in Stripe Dashboard

1. Go to https://dashboard.stripe.com/products
2. Click "Add product"
3. Fill in:
   - Name: `Chief Architect X17 - Full Version`
   - Price: `$85.75 USD`
   - Set as "One-time payment"
4. Click "Save product"

### Step 2: Create a Payment Link

1. Go to https://dashboard.stripe.com/payment-links
2. Click "New"
3. Select the product you just created
4. Under "After payment":
   - Success URL: `https://chiefarchitect.pro/success`
   - Cancel URL: `https://chiefarchitect.pro` (homepage)
5. Click "Create link"
6. Copy the Payment Link URL (looks like: `https://buy.stripe.com/XXXXXXXX`)

### Step 3: Update Your Code

Replace the placeholder URL in these files with your actual Payment Link:

- `components/hero-section.tsx` - Line ~50
- `components/header.tsx` - Line ~50
- `components/pricing-section.tsx` - Line ~75

Replace:
\`\`\`typescript
window.location.href = "https://buy.stripe.com/test_XXXXXXXX?client_reference_id=chief-architect-x17&prefilled_email="
\`\`\`

With your actual link:
\`\`\`typescript
window.location.href = "https://buy.stripe.com/YOUR_LINK_ID?client_reference_id=chief-architect-x17&prefilled_email="
\`\`\`

### Step 4: Test the Integration

1. Deploy to Cloudflare Pages
2. Click any "Buy Now" button
3. Complete a test purchase using Stripe test cards:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`

### Step 5: Go Live

1. In your Stripe Dashboard, switch from Test mode to Live mode (toggle in top right)
2. Create the product and payment link again in Live mode
3. Update the Payment Link URL in your code with the live version
4. Update `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` in Cloudflare Pages environment variables with your live publishable key

## Success Page Setup

After successful payment, customers are redirected to `/success` where they can download Chief Architect X17 from:
https://drive.google.com/drive/folders/1BbcFg95pvaHQ3F1f-d4fy-VlSIyw0ddE?usp=sharing

## Analytics Tracking

All Buy Now buttons automatically fire Google Analytics 4 events:
- `add_to_cart` - When button is clicked
- `begin_checkout` - Before redirecting to Stripe

These can be configured as key conversion events in Google Analytics.

## Support

If you encounter issues, check:
1. Stripe Dashboard → Developers → Webhooks (optional for advanced features)
2. Stripe Dashboard → Logs to see payment attempts
3. Google Analytics Real-time to verify event tracking
