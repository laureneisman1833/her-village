import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="Our Story | How Clean Bodies Began"
        description="The honest story of how Clean Bodies started — one person's journey to find products she could actually trust for her family."
      />
      <section className="page-header">
        <div className="container">
          <h1>How It Started</h1>
          <p>
            No marketing fluff. Just the honest story of why this site exists — and why I only recommend products I personally use.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div>
              <h2>The Short Version</h2>
              <p style={{ marginTop: 'var(--space-lg)' }}>
                I started Clean Bodies because I couldn't find a single place where someone had already done the homework. 
                I was spending hours reading labels, researching ingredients, and trying products — only to discover most 
                of them weren't what they claimed to be.
              </p>
              <p>
                So I started keeping notes. What worked. What didn't. What was actually clean versus what was just 
                marketed that way. Friends started asking for my recommendations. Then friends of friends.
              </p>
              <p>
                Eventually I realized: instead of texting the same links over and over, I should just put everything 
                in one place. A place where every single product is something I actually use, trust, and stand behind.
              </p>
              <p className="handwriting" style={{ fontSize: '1.375rem', marginTop: 'var(--space-lg)' }}>
                "If it's not in my home, it's not on this site. Simple as that."
              </p>

              <h2 style={{ marginTop: 'var(--space-3xl)' }}>The Longer Version</h2>
              <p>
                The journey started in my kitchen, with a batch of homemade almond milk. I'd been buying store-bought 
                versions for years, assuming they were healthy. Then I actually read the ingredients list. I couldn't 
                pronounce half of them.
              </p>
              <p>
                So I bought raw almonds, a nut milk bag, and figured it out. The first batch was okay. The second was 
                better. By the tenth, I had it down — and I realized I'd never go back to store-bought.
              </p>
              <p>
                That same curiosity led me to skincare. Then to kitchen tools. Then to every other product category 
                where "natural" and "healthy" labels turned out to mean very little.
              </p>
              <p>
                I'm not a doctor, a nutritionist, or a certified anything. I'm just someone who cares deeply about 
                what goes into and onto my body — and I figured if I was doing the research anyway, I might as well 
                share what I found.
              </p>

              <div style={{
                marginTop: 'var(--space-2xl)',
                padding: 'var(--space-xl)',
                background: 'var(--color-cream)',
                borderRadius: 'var(--radius-md)',
              }}>
                <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, marginBottom: 'var(--space-md)' }}>What This Site Is</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-sm)', color: 'var(--text-medium)', fontSize: '0.9375rem' }}>
                    <span style={{ color: 'var(--color-herb-green)', fontWeight: 600, flexShrink: 0 }}>✓</span>
                    Products I personally use and recommend (with honest affiliate links)
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-sm)', color: 'var(--text-medium)', fontSize: '0.9375rem' }}>
                    <span style={{ color: 'var(--color-herb-green)', fontWeight: 600, flexShrink: 0 }}>✓</span>
                    The one almond milk recipe I make every week
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-sm)', color: 'var(--text-medium)', fontSize: '0.9375rem' }}>
                    <span style={{ color: 'var(--color-herb-green)', fontWeight: 600, flexShrink: 0 }}>✓</span>
                    Custom 7-day reset plans for people who want personalized guidance
                  </li>
                </ul>
                <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, margin: 'var(--space-lg) 0 var(--space-md)' }}>What This Site Is Not</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-sm)', color: 'var(--text-medium)', fontSize: '0.9375rem' }}>
                    <span style={{ color: 'var(--color-terracotta)', fontWeight: 600, flexShrink: 0 }}>✗</span>
                    A flood of generic recipes or meal plans
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-sm)', color: 'var(--text-medium)', fontSize: '0.9375rem' }}>
                    <span style={{ color: 'var(--color-terracotta)', fontWeight: 600, flexShrink: 0 }}>✗</span>
                    Medical advice or diagnostic claims
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-sm)', color: 'var(--text-medium)', fontSize: '0.9375rem' }}>
                    <span style={{ color: 'var(--color-terracotta)', fontWeight: 600, flexShrink: 0 }}>✗</span>
                    Products I haven't personally tested
                  </li>
                </ul>
              </div>
            </div>

            <div className="about-image-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
              <img
                src="/images/hero/clean-bodies-hero-portrait.png"
                alt="Clean Bodies"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-cream)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2>Want to Know More?</h2>
          <p style={{ fontSize: '1.125rem', marginTop: 'var(--space-lg)' }}>
            If you have a question about any product on this site — or if you're curious about a personalized 
            detox plan — I'd love to hear from you. No auto-responders, no sales scripts. Just a real conversation.
          </p>
          <div style={{ marginTop: 'var(--space-2xl)' }}>
            <Link to="/contact" className="btn btn-primary">Reach Out →</Link>
          </div>
        </div>
      </section>
    </>
  )
}