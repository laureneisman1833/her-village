<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <h1>About Her Village</h1>
        <p class="page-subtitle">
          We're building a world where no single mother feels alone — with real resources, real community, and real support.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>Our Story</h2>
            <p>
              Her Village was born from a simple truth: single mothers are strongest when they're connected. 
              But too many feel isolated, overwhelmed, and unsure where to turn for help.
            </p>
            <p>
              We created Her Village to be that place — a community where single mothers can find financial resources, 
              parenting advice, legal guidance, and most importantly, each other.
            </p>
            <p>
              Every resource is vetted, every community member matters, and every voice is heard. 
              Whether you're here for practical help or emotional support — welcome to your village.
            </p>
          </div>
          <div class="about-stats">
            <div class="stat-card">
              <span class="stat-number">500+</span>
              <span class="stat-label">Moms Connected</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">100+</span>
              <span class="stat-label">Resources Shared</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">50+</span>
              <span class="stat-label">Support Groups</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">1</span>
              <span class="stat-label">Village</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'About Her Village',
  description: 'Her Village is a community platform connecting single mothers with resources, support, and each other. Learn our story.',
})
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

.about-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 48px;
  align-items: start;
}

.about-text h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 24px;
}

.about-text p {
  color: #555;
  font-size: 1.0625rem;
  line-height: 1.7;
  margin-bottom: 16px;
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.stat-card {
  padding: 24px;
  background: #faf8f5;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #eee;
}

.stat-number {
  display: block;
  font-size: 1.75rem;
  font-weight: 700;
  color: #c67a5c;
}

.stat-label {
  display: block;
  font-size: 0.875rem;
  color: #888;
  margin-top: 4px;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
}
</style>