import SEO from '../components/SEO'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for reaching out! We will get back to you within 24 hours.')
  }

  return (
    <>
      <SEO
        title="Contact Us | Get in Touch"
        description="Have a question about our non-toxic skincare, raw almonds, or wellness products? Contact YourCleanBody.com — we respond within 24 hours."
      />
      <section className="page-header">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>
            Have a question about a product? Want to place an order? Interested in a personalized detox consultation? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>Let's Connect</h2>
              <p style={{ color: 'var(--text-medium)' }}>
                Whether you're ready to order, have a question about ingredients, or want to schedule a 
                consultation — we're here for you. Expect a warm, thoughtful response within 24 hours.
              </p>

              <div className="contact-info" style={{ marginTop: 'var(--space-xl)' }}>
                <div className="contact-method">
                  <div className="contact-method-icon">📧</div>
                  <div className="contact-method-text">
                    <h4>Email</h4>
                    <p>hello@cleanbodies.com<br />We respond within 24 hours</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon">📱</div>
                  <div className="contact-method-text">
                    <h4>Social</h4>
                    <p>Follow us for daily wellness tips, new product announcements, and recipes.</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon">📋</div>
                  <div className="contact-method-text">
                    <h4>Consultations</h4>
                    <p>Interested in a personalized detox plan? Reach out and we'll schedule a time to chat.</p>
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: 'var(--space-2xl)',
                padding: 'var(--space-lg)',
                background: 'var(--color-cream)',
                borderRadius: 'var(--radius-sm)',
              }}>
                <p className="handwriting" style={{ fontSize: '1.125rem', marginBottom: 0 }}>
                  "We'd love to help you on your clean living journey. Every message matters to us."
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} style={{
                background: 'white',
                padding: 'var(--space-2xl)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-card)',
              }}>
                <h3 style={{ marginBottom: 'var(--space-lg)' }}>Send Us a Message</h3>

                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input type="text" id="name" className="form-input" required placeholder="Your name" />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input type="email" id="email" className="form-input" required placeholder="your@email.com" />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <select id="subject" className="form-input" required>
                    <option value="">Select a topic...</option>
                    <option value="order">Product Inquiry / Order</option>
                    <option value="consultation">Detox Consultation</option>
                    <option value="wholesale">Wholesale / Bulk Order</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea id="message" className="form-textarea" required placeholder="Tell us what you're looking for..." />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message →
                </button>

                <p style={{ fontSize: '0.8125rem', color: 'var(--text-light)', marginTop: 'var(--space-md)', marginBottom: 0, textAlign: 'center' }}>
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)', textAlign: 'center' }}>
        <div className="container">
          <h2>Ready to Place an Order?</h2>
          <p className="section-subtitle">
            Not sure what to choose? Send us a message and we'll help you find exactly what you need.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/shop" className="btn btn-primary">Browse Products</a>
            <a href="mailto:hello@cleanbodies.com" className="btn btn-secondary">Email Us Directly</a>
          </div>
        </div>
      </section>
    </>
  )
}