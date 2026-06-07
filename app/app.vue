<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// 🔴 SEO FIX: Global meta tags — title, description, Open Graph, Twitter Card
useHead({
  titleTemplate: '%s | Her Village',
  title: 'Community & Resources for Single Mothers',
  meta: [
    // Primary meta
    { name: 'description', content: 'Find your village. Her Village connects single mothers with financial resources, parenting support, community meetups, and trusted advice — because no one should parent alone.' },
    { name: 'keywords', content: 'single mothers support, single mom community, resources for single mothers, financial help for single moms, single parent support group' },

    // Open Graph
    { property: 'og:title', content: 'Her Village — Community & Resources for Single Mothers' },
    { property: 'og:description', content: 'Find your village. Her Village connects single mothers with financial resources, parenting support, community meetups, and trusted advice.' },
    { property: 'og:url', content: 'https://her-village.org' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Her Village' },
    { property: 'og:image', content: 'https://her-village.org/og-image.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:locale', content: 'en_US' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Her Village — Community & Resources for Single Mothers' },
    { name: 'twitter:description', content: 'Find your village. Her Village connects single mothers with financial resources, parenting support, and trusted advice.' },
    { name: 'twitter:image', content: 'https://her-village.org/og-image.jpg' },

    // Robots
    { name: 'robots', content: 'index, follow' },

    // Canonical
    { rel: 'canonical', href: 'https://her-village.org' },
  ],
  link: [
    { rel: 'canonical', href: 'https://her-village.org' },
  ],
  script: [
    {
      // 🔴 SEO FIX: JSON-LD structured data
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Her Village',
        url: 'https://her-village.org',
        description: 'A community platform connecting single mothers with resources, support, and each other.',
        foundingDate: '2025',
        sameAs: [
          'https://facebook.com/hervillage',
          'https://instagram.com/her.village',
        ],
      }),
    },
  ],
})

// 🔴 SEO FIX: Provide canonical URL at app level
useSeoMeta({
  ogUrl: 'https://her-village.org',
})
</script>