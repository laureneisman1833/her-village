# Her Village

A community platform for single mothers — connecting members with financial resources, parenting support, and trusted advice.

## Tech Stack

- **Framework**: Nuxt 4 (Vue 3)
- **Backend**: Supabase
- **Payments**: Staccats
- **Error Tracking**: Sentry
- **Hosting**: Netlify + Cloudflare

## SEO Status

The site uses SSR mode with the following SEO features:
- ✅ Server-side rendering (crawlers see full content)
- ✅ Open Graph tags (proper social share previews)
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (Organization schema)
- ✅ XML sitemap (auto-generated via @nuxtjs/sitemap)
- ✅ robots.txt (properly configured)
- ✅ Canonical URLs
- ✅ Per-page meta via definePageMeta()

## Getting Started

```bash
npm install
npm run dev     # Development server at http://localhost:3000
npm run build   # Production build
npm run generate # Static site generation
```

## Project Structure

```
app/
  app.vue           # Root component with global meta/SEO
  pages/            # Route pages
    index.vue       # Homepage
    about.vue       # About page
    resources.vue   # Resources page
  components/       # Shared components
public/             # Static assets (favicon, og-image, robots.txt)
server/             # API routes
nuxt.config.ts      # Nuxt configuration
```

## Deployment

Deployed via Netlify. The site uses SSR mode — ensure Netlify function support is enabled.
