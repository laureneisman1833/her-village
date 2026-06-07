<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <h1>Resources for Single Mothers</h1>
        <p class="page-subtitle">
          Curated guides, financial assistance programs, and community resources — all in one place.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="resources-grid">
          <article v-for="resource in resources" :key="resource.id" class="resource-card">
            <div class="resource-icon">{{ resource.icon }}</div>
            <h3>{{ resource.title }}</h3>
            <p>{{ resource.description }}</p>
            <span class="resource-tag">{{ resource.tag }}</span>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Resources for Single Mothers',
  description: 'Discover financial assistance, housing help, childcare subsidies, scholarships, and legal aid resources for single mothers.',
})

const resources = [
  {
    id: 1,
    icon: '💰',
    title: 'Financial Assistance Programs',
    description: 'A complete guide to federal and state programs including SNAP, WIC, TANF, and emergency grants for single mothers.',
    tag: 'Finance',
  },
  {
    id: 2,
    icon: '🏠',
    title: 'Housing Assistance',
    description: 'Section 8, public housing, and emergency rental assistance programs available to single-parent families.',
    tag: 'Housing',
  },
  {
    id: 3,
    icon: '🎓',
    title: 'Scholarships & Education',
    description: 'Scholarships specifically for single mothers, Pell Grants, and flexible online degree programs.',
    tag: 'Education',
  },
  {
    id: 4,
    icon: '👶',
    title: 'Childcare Assistance',
    description: 'CCDF subsidies, Head Start programs, and cooperative childcare options for working single moms.',
    tag: 'Childcare',
  },
  {
    id: 5,
    icon: '⚖️',
    title: 'Legal Aid & Rights',
    description: 'Free and low-cost legal resources for custody, child support, and workplace discrimination issues.',
    tag: 'Legal',
  },
  {
    id: 6,
    icon: '💼',
    title: 'Work-from-Home Jobs',
    description: 'Legitimate remote job opportunities that offer the flexibility single mothers need.',
    tag: 'Career',
  },
  {
    id: 7,
    icon: '🧠',
    title: 'Mental Health Support',
    description: 'Free and affordable therapy options, support groups, and crisis resources for single moms.',
    tag: 'Wellness',
  },
  {
    id: 8,
    icon: '🤝',
    title: 'Local Support Groups',
    description: 'Find in-person and online single mother support groups in your area or state.',
    tag: 'Community',
  },
  {
    id: 9,
    icon: '📋',
    title: 'Government Benefits Checklist',
    description: 'An interactive checklist to see which government benefits you qualify for as a single mother.',
    tag: 'Guide',
  },
]
</script>

<style scoped>
.page-hero {
  padding: 64px 0 48px;
  background: #f8f4f0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.page-hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 16px;
}

.page-subtitle {
  font-size: 1.125rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.content-section {
  padding: 64px 0;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.resource-card {
  padding: 28px;
  background: #faf8f5;
  border-radius: 12px;
  border: 1px solid #eee;
  transition: transform 0.2s, box-shadow 0.2s;
}

.resource-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}

.resource-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.resource-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 8px;
}

.resource-card p {
  color: #666;
  font-size: 0.9375rem;
  line-height: 1.5;
  margin-bottom: 16px;
}

.resource-tag {
  display: inline-block;
  padding: 4px 12px;
  background: #e8d5c4;
  color: #6b5b4e;
  border-radius: 20px;
  font-size: 0.8125rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .resources-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .resources-grid {
    grid-template-columns: 1fr;
  }
}
</style>