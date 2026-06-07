<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>You're Not Alone.<br />We're Your Village.</h1>
            <p class="hero-subtitle">
              Her Village is a community of single mothers supporting each other — with resources, advice, and real connection. Whether you need financial help, parenting tips, or just someone who gets it, you've found your people.
            </p>
            <div class="hero-cta">
              <button class="btn btn-primary" @click="scrollToSignup">Join Free</button>
              <NuxtLink to="/resources" class="btn btn-secondary">Explore Resources</NuxtLink>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-placeholder">
              <span class="hero-emoji">🤝</span>
              <p>Community · Resources · Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">What You'll Find Here</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">💪</div>
            <h3>Financial Resources</h3>
            <p>Grants, scholarships, housing assistance, childcare subsidies — curated and updated for single mothers.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">👩‍👧‍👧</div>
            <h3>Community Support</h3>
            <p>Connect with other single moms who understand. Share wins, ask for help, and build your village.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📚</div>
            <h3>Parenting Guides</h3>
            <p>Expert-backed advice on co-parenting, child development, self-care, and navigating school systems solo.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚖️</div>
            <h3>Legal & Rights</h3>
            <p>Know your rights regarding child support, custody, workplace protections, and accessing legal aid.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💼</div>
            <h3>Career & Education</h3>
            <p>Flexible jobs, scholarships for single moms, online degrees, and skills training that fits your schedule.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🧡</div>
            <h3>Mental Wellness</h3>
            <p>Self-care strategies, therapy resources, support groups, and tools to protect your mental health.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Signup CTA -->
    <section class="cta-section" id="signup">
      <div class="container">
        <h2>Ready to Find Your Village?</h2>
        <p class="cta-text">
          Join hundreds of single mothers who've found community, resources, and real support. It's free to sign up.
        </p>
        <form class="signup-form" @submit.prevent="handleSubmit">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="signup-input"
            required
          />
          <button type="submit" class="btn btn-primary btn-large">
            Join Free →
          </button>
        </form>
        <p class="form-note">No spam. Just community. Unsubscribe anytime.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 🔴 SEO FIX: Per-page meta overrides for better targeting
definePageMeta({
  title: 'Her Village — Community & Resources for Single Mothers',
  description: 'Find your village. Her Village connects single mothers with financial resources, parenting support, community meetups, and trusted advice.',
  ogTitle: 'Her Village — Community & Resources for Single Mothers',
})

const email = ref('')

function scrollToSignup() {
  document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })
}

function handleSubmit() {
  if (email.value) {
    // In production, send to Supabase or email marketing
    alert('Thanks for joining! You\'ll hear from us soon.')
    email.value = ''
  }
}
</script>

<style scoped>
.hero {
  padding: 96px 0 64px;
  background: linear-gradient(135deg, #f8f4f0 0%, #fff 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.hero-text h1 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.15;
  color: #1a1a2e;
  margin-bottom: 24px;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 32px;
}

.hero-cta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-placeholder {
  background: linear-gradient(135deg, #e8d5c4, #f0e6d8);
  border-radius: 16px;
  padding: 64px 32px;
  text-align: center;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-emoji {
  font-size: 4rem;
  margin-bottom: 16px;
}

.hero-placeholder p {
  font-size: 1.25rem;
  color: #6b5b4e;
}

.features-section {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 48px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  padding: 32px;
  background: #faf8f5;
  border-radius: 12px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 8px;
}

.feature-card p {
  color: #666;
  font-size: 0.9375rem;
  line-height: 1.5;
}

.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a1a2e 0%, #2d2d5e 100%);
  color: white;
  text-align: center;
}

.cta-section h2 {
  font-size: 2.25rem;
  color: white;
  margin-bottom: 16px;
}

.cta-text {
  font-size: 1.125rem;
  color: rgba(255,255,255,0.8);
  margin-bottom: 32px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.signup-form {
  display: flex;
  gap: 12px;
  max-width: 480px;
  margin: 0 auto;
}

.signup-input {
  flex: 1;
  padding: 14px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
}

.signup-input:focus {
  box-shadow: 0 0 0 3px rgba(130, 120, 200, 0.3);
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 14px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-primary {
  background: #c67a5c;
  color: white;
}

.btn-primary:hover {
  background: #b56a4c;
  transform: translateY(-1px);
}

.btn-secondary {
  background: transparent;
  border: 2px solid #c67a5c;
  color: #c67a5c;
}

.btn-secondary:hover {
  background: #c67a5c;
  color: white;
}

.btn-large {
  padding: 14px 32px;
}

.form-note {
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.5);
  margin-top: 16px;
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-cta {
    justify-content: center;
  }
  .features-grid {
    grid-template-columns: 1fr 1fr;
  }
  .hero-text h1 {
    font-size: 2.25rem;
  }
  .signup-form {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>