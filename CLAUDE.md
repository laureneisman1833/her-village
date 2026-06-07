# Her Village — Development Conventions

## Framework
- Nuxt 4 with SSR enabled (never switch back to CSR — SEO depends on it)
- Vue 3 Composition API with `<script setup lang="ts">`
- TypeScript required for all new files

## Routing
- File-based routing in `app/pages/`
- Always use `definePageMeta()` for per-page SEO (title, description, ogTitle)
- Always include descriptive, keyword-rich meta descriptions

## SEO Requirements (Every Page)
1. `definePageMeta()` with `title` and `description` — descriptive, keyword-rich, under 160 chars
2. All images must have descriptive alt text
3. Internal links use descriptive anchor text (not "click here")
4. Heading structure: exactly one `<h1>` per page, hierarchical `<h2>`+ subsections

## Components
- Single-file components with scoped styles
- Place styles in `<style scoped>` — no global CSS changes without team discussion

## Data
- Supabase for backend data
- Use `server/api/` for Nitro server routes when needed
- Never expose Supabase service key to client

## Deployment
- Build: `npm run build` (SSR build for Netlify functions)
- Verify SEO: `curl -sL https://her-village.org | grep -c "ssr"` should return positive
- Always test OG tags via https://developers.facebook.com/tools/debug/
