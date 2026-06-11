import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, ogTitle, ogDescription, ogImage }) {
  const siteName = 'YourCleanBody.com'
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const metaDescription = description || 'Non-toxic skincare, raw organic almonds, and wellness products curated by a certified detoxification specialist.'
  const metaOgTitle = ogTitle || fullTitle
  const metaOgDescription = ogDescription || metaDescription
  const metaOgImage = ogImage || 'https://yourcleanbody.com/og-image.jpg'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content="non-toxic skincare, raw organic almonds, homemade almond milk, detox wellness, clean beauty, natural products" />

      {/* Open Graph */}
      <meta property="og:title" content={metaOgTitle} />
      <meta property="og:description" content={metaOgDescription} />
      <meta property="og:image" content={metaOgImage} />
      <meta property="og:url" content={`https://yourcleanbody.com${window.location.pathname}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaOgTitle} />
      <meta name="twitter:description" content={metaOgDescription} />
      <meta name="twitter:image" content={metaOgImage} />
    </Helmet>
  )
}