import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { products, featuredProducts } from '../data/products'

export default function Home() {
  const featuredItems = featuredProducts.map(id => products.find(p => p.id === id)).filter(Boolean)

  return (
    <>
      <SEO
        title="YourCleanBody.com | Raw Almonds, Homemade Almond Milk & Custom Detox Plans"
        description="Products I personally use and trust. Raw organic almonds for homemade almond milk, the only almond milk recipe you need, and custom 7-day reset detox plans."
      />
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Clean Living,<br />Naturally Yours</h1>
              <p>
                I only recommend what I actually use. The raw almonds in my pantry. The almond milk 
                recipe I've perfected over years. The simple products that made a real difference 
                in how I feel. Nothing here is sponsored — it's all stuff I bought for myself.
              </p>
              <div className="hero-cta">
                <Link to="/shop" className="btn btn-primary">Shop My Favorites</Link>
                <Link to="/about" className="btn btn-secondary">My Story</Link>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/hero/clean-bodies-hero-banner.png"
                alt="Clean Bodies"
                style={{ width: '100%', maxWidth: '500px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-card)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Almonds */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">The Only Product I Really Recommend</h2>
          <p className="section-subtitle">
            Everything starts with good ingredients. These are the raw almonds I buy for myself — 
            the same ones I use in my almond milk every single week.
          </p>
          <div className="grid grid-2" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {featuredItems.map(product => (
              <div className="card" key={product.id}>
                <div className="card-image">
                  <img
                    src="/images/products/raw-almonds-product.png"
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body">
                  {product.badge && <span className="badge">{product.badge}</span>}
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-text">{product.tagline}</p>
                  <div className="card-footer">
                    <span className="price">{product.price}</span>
                    <Link to={`/shop/${product.id}`} className="btn btn-primary">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Almond Milk Recipe — Flagship */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div className="recipe-card-featured" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="recipe-card-image" style={{ padding: 0 }}>
              <img
                src="/images/recipe-card/almond-milk-recipe-card.png"
                alt="Raw Homemade Almond Milk"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="recipe-card-content">
              <span className="badge">My Signature Recipe</span>
              <h3>Raw Homemade Almond Milk</h3>
              <p>
                Creamier than store-bought, free of hidden additives, and made with just two ingredients. 
                This is the recipe I've perfected over years of making almond milk for my family. 
                It takes 10 minutes of active prep time.
              </p>
              <div className="recipe-details">
                <div className="recipe-detail">
                  <div className="recipe-detail-label">Prep</div>
                  <div className="recipe-detail-value">10 min</div>
                </div>
                <div className="recipe-detail">
                  <div className="recipe-detail-label">Soak</div>
                  <div className="recipe-detail-value">8+ hrs</div>
                </div>
                <div className="recipe-detail">
                  <div className="recipe-detail-label">Yields</div>
                  <div className="recipe-detail-value">4 cups</div>
                </div>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-medium)', marginTop: 'var(--space-md)' }}>
                <strong>Ingredients:</strong> Raw organic almonds, filtered water, pinch of sea salt. That's it.
              </p>
              <Link to="/blog/how-to-make-almond-milk" className="btn btn-primary" style={{ marginTop: 'var(--space-md)' }}>
                Get the Full Recipe →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom 7-Day Reset Detox Plan */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-title">Need Something More Personal?</h2>
          <p className="section-subtitle">
            Everyone's body is different. I create tailored 7-day reset detox plans based on your unique 
            needs and goals. No generic programs — just honest, personalized guidance.
          </p>
          <Link to="/contact" className="btn btn-terracotta" style={{ fontSize: '1.125rem', padding: 'var(--space-md) var(--space-2xl)' }}>
            Get Your Custom Plan →
          </Link>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginTop: 'var(--space-md)' }}>
            A personalized 7-day reset. PDF or guided — your choice.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Start With the Almond Milk</h2>
          <p className="section-subtitle">
            The easiest first step? Make your own almond milk. It's cheaper, creamier, and cleaner than 
            anything you'll find at the store. I'll show you exactly how.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/blog/how-to-make-almond-milk" className="btn btn-primary">Get the Recipe</Link>
            <Link to="/shop" className="btn btn-secondary">Shop the Almonds</Link>
            <Link to="/contact" className="btn btn-terracotta">Ask About a Custom Plan</Link>
          </div>
        </div>
      </section>
    </>
  )
}