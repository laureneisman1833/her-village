# Clean Bodies — Image Assets Reference

> All assets have been placed in `/public/images/` for immediate use in the Vite/React site.
> Reference them in code as: `/images/logo/logo-primary.png` (they'll be served from the public directory)

---

## 1. Logo Assets

| File | Path | Usage | Size |
|------|------|-------|------|
| `logo-primary.png` | `/images/logo/logo-primary.png` | **Primary logo** — light backgrounds, headers, footers. Deep forest green text with sage leaf icon. | 1024×1024 |
| `logo-reverse.png` | `/images/logo/logo-reverse.png` | **Reverse logo** — dark backgrounds, deep forest footer. Cream/white text. | 1024×1024 |
| `logo-icon.png` | `/images/logo/logo-icon.png` | **Icon mark** — favicon, nav brand icon, social avatar. Sage green leaf/drop icon. | 1024×1024 |

**Header integration**: Replace the `nav-brand-icon` `C` placeholder with `<img src="/images/logo/logo-icon.png" alt="Clean Bodies" width="36" height="36" />`

**Favicon**: Update `public/favicon.svg` to point to `/images/logo/logo-icon.png` as a PNG favicon, or convert the icon to SVG.

---

## 2. Hero Images

| File | Path | Usage | Size |
|------|------|-------|------|
| `hero-banner.png` | `/images/hero/hero-banner.png` | **Home page hero** (landscape). Warm kitchen scene with almonds, skincare oil, herbs. | 1536×1024 |
| `hero-portrait.png` | `/images/hero/hero-portrait.png` | **Mobile hero / About page** (portrait). Hands holding cream jar with rosemary. | 1024×1536 |

**Home page integration**: Replace the `.hero-image-placeholder` div with `<img src="/images/hero/hero-banner.png" alt="Clean Bodies — Natural wellness" />`

---

## 3. Product Images

| File | Path | Usage | Size |
|------|------|-------|------|
| `skincare.png` | `/images/products/skincare.png` | **Skincare category** — amber glass bottles with droppers, cream jar, lavender | 1024×1024 |
| `raw-almonds.png` | `/images/products/raw-almonds.png` | **Almonds category** — ceramic bowl of almonds, linen bag | 1024×1024 |
| `wellness.png` | `/images/products/wellness.png` | **Wellness category** — tea, salt, chamomile flat lay | 1024×1024 |

**Product data integration**: Update `src/data/products.js` — set the `image` field for each product to the corresponding path, e.g.:
```js
// skincare products → '/images/products/skincare.png'
// almond products → '/images/products/raw-almonds.png'
// wellness products → '/images/products/wellness.png'
```

---

## 4. Recipe Card Images

| File | Path | Usage | Size |
|------|------|-------|------|
| `almond-milk-recipe-card.png` | `/images/recipe-card/almond-milk-recipe-card.png` | **Featured recipe** — completed almond milk recipe card with photo, ingredients, and instructions | 1024×1536 |
| `recipe-card-template.png` | `/images/recipe-card/recipe-card-template.png` | **Blank template** — reusable card layout for future recipes | 1024×1536 |

---

## 5. Social Media Templates

| File | Path | Usage | Size |
|------|------|-------|------|
| `feed-template.png` | `/images/social/feed-template.png` | **Instagram feed post template** — square layout with logo/photo/text areas | 1024×1024 |
| `story-template.png` | `/images/social/story-template.png` | **Instagram story template** — portrait layout with brand elements | 1024×1536 |

---

## 6. Backgrounds & Patterns

| File | Path | Usage | Size |
|------|------|-------|------|
| `brand-pattern.png` | `/images/backgrounds/brand-pattern.png` | **Subtle background pattern** — light sage botanical line art on cream. Use as a CSS background image on sections. | 1024×1024 |

CSS usage: `background: url('/images/backgrounds/brand-pattern.png');`

---

## 7. Brand Style Guide

Full brand guide with colors, typography, spacing tokens, and voice guidelines:
**`/home/team/shared/design/BRAND-STYLE-GUIDE.md`**

The CSS design tokens in `src/index.css` already match this guide exactly.

---

## Design System Summary

| Element | Primary Color | Font |
|---------|--------------|------|
| **Brand** | Sage Green `#8FA88B` / Deep Forest `#3D5A3E` | Playfair Display (headings) |
| **Background** | Cream `#F5F0E8` / Clean White `#FAFAF8` | Inter (body) |
| **Accent** | Terracotta `#C67A5C` / Warm Brown `#8B7355` | Caveat (handwriting accent) |
| **Organic/Badge** | Herb Green `#6B8F5E` | — |