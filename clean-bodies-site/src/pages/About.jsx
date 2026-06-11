import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="About | Certified Detoxification Specialist"
        description="Learn the story behind YourCleanBody.com — a certified detoxification specialist curating non-toxic skincare, raw almonds, and wellness products for health-conscious families."
      />
      <section className="page-header">
        <div className="container">
          <h1>Our Story</h1>
          <p>
            A trusted source for toxin-free wellness — born from personal experience, backed by professional expertise.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div>
              <h2>Meet Your Certified Detoxification Specialist</h2>
              <p style={{ marginTop: 'var(--space-lg)' }}>
                Clean Bodies was founded from a simple belief: what you put on and in your body matters deeply. 
                After years of working with clients on their detox journeys — helping them navigate confusing labels,
                hidden toxins, and empty marketing claims — I realized there was a gap.
              </p>
              <p>
                There was no single trusted source for products I could confidently recommend. So I created one.
              </p>
              <p>
                Every product on Clean Bodies is something I personally use, test, and stand behind. 
                From the raw almonds I blend into milk for my family, to the skincare I trust on my own skin — 
                nothing makes it onto these shelves without passing my standards.
              </p>
              <p className="handwriting" style={{ fontSize: '1.375rem', marginTop: 'var(--space-lg)' }}>
                \"We only stock what we personally trust for our own families.\"
              </p>

              <div className="credentials">
                <div className="credential-item">
                  <div className="credential-icon">🎓</div>
                  <div className="credential-text">
                    <h4>Certified Detox Specialist</h4>
                    <p>Advanced certification in nutritional detoxification and holistic wellness</p>
                  </div>
                </div>
                <div className="credential-item">
                  <div className="credential-icon">🔬</div>
                  <div className="credential-text">
                    <h4>Ingredient Expert</h4>
                    <p>Years of experience analyzing product formulations for hidden toxins</p>
                  </div>
                </div>
                <div className="credential-item">
                  <div className="credential-icon">👨‍👩‍👧‍👦</div>
                  <div className="credential-text">
                    <h4>Parent & Advocate</h4>
                    <p>Personally committed to creating a safer world for the next generation</p>
                  </div>
                </div>
                <div className="credential-item">
                  <div className="credential-icon">📚</div>
                  <div className="credential-text">
                    <h4>Educator</h4>
                    <p>Passionate about teaching others how to read labels and make informed choices</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
              <img
                src="/images/hero/clean-bodies-hero-portrait.png"
                alt="Clean Bodies — Certified Detoxification Specialist"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <h2>Our Mission</h2>
          <p style={{ fontSize: '1.125rem', marginTop: 'var(--space-lg)' }}>
            Empower health-conscious families to live cleaner, toxin-free lives with products we personally trust and use. 
            We believe in a world where every home has access to safe, non-toxic essentials that nourish body and planet.
          </p>
          <div style={{ marginTop: 'var(--space-2xl)' }}>
            <Link to="/shop" className="btn btn-primary">Shop Our Products</Link>
          </div>
        </div>
      </section>
    </>
  )
}