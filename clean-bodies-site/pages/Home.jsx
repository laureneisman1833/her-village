import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { products, featuredProducts } from '../data/products'

export default function Home() {
  const featuredItems = featuredProducts.map(id => products.find(p => p.id === id)).filter(Boolean)

  return (
    <>
      <SEO
        title="YourCleanBody.com | Non-Toxic Skincare, Raw Organic Almonds & Wellness Products"
        description="Non-toxic skincare, raw organic almonds for homemade almond milk, and the only almond milk recipe you'll ever need. Curated by someone who actually uses every product."
      />
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Clean Living,<br />Naturally Yours</h1>
              <p>
                I only recommend products I personally use and trust. From my favorite raw almonds 
                (perfect for homemade almond milk) to simple, single-ingredient skincare — 
                everything here is something I actually stock in my own home.
              </p>
              <div className="hero-cta">
                <Link to="/shop" className="btn btn-primary">Shop My Favorites</Link>
                <Link to="/about" className="btn btn-secondary">How It Started</Link>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/hero/clean-bodies-hero-banner.png"
                alt="Clean Bodies — Natural wellness products"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-card)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Products I Personally Use</h2>
          <p className="section-subtitle">
            Every product on this site is something I've tested, use regularly, and trust enough to recommend to family. Nothing makes the cut unless it's in my own pantry or bathroom cabinet.
          </p>
          <div className="grid grid-3">
            {featuredItems.map(product => (
              <div className="card" key={product.id}>
                <div className="card-image">
                  <img
                    src={product.category === 'skincare' ? '/images/products/skincare-product.png' : product.category === 'almonds' ? '/images/products/raw-almonds-product.png' : '/images/products/wellness-product.png'}
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
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/shop" className="btn btn-terracotta">See All Products</Link>
          </div>
        </div>
      </section>

      {/* The Signature Recipe — Flagship Content */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div className="recipe-card-featured">
            <div className="recipe-card-image" style={{ padding: 0 }}>
              <img
                src="/images/recipe-card/almond-milk-recipe-card.png"
                alt="Homemade Almond Milk Recipe Card"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="recipe-card-content">
              <span className="badge">Signature Recipe</span>
              <h3>Raw Homemade Almond Milk</h3>
              <p>
                Creamier than store-bought, free of hidden additives, and made with just two ingredients. 
                This is the only recipe you need — and it's the one I make for my family every single week.
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
                <strong>Ingredients:</strong> Raw organic almonds, filtered water, pinch of sea salt.
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
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 className="section-title">Need a Personalized Reset?</h2>
          <p className="section-subtitle">
            Everyone's body is different. I create tailored 7-day reset detox plans based on your 
            unique needs, goals, and lifestyle. No generic meal plans — just honest, personalized 
            guidance that actually works.
          </p>
          <div style={{ marginTop: 'var(--space-xl)' }}>
            <Link to="/contact" className="btn btn-terracotta" style={{ fontSize: '1.125rem', padding: 'var(--space-md) var(--space-2xl)' }}>
              Get Your Custom Plan →
            </Link>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginTop: 'var(--space-md)' }}>
            A 7-day reset tailored to you. PDF or guided — your choice.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Not Sure Where to Start?</h2>
          <p className="section-subtitle">
            I've been where you are. If you're feeling overwhelmed by all the conflicting advice out there, 
            just reach out. I'll help you figure out what makes sense for you — no pressure, no judgment.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/shop" className="btn btn-primary">Browse Products</Link>
            <Link to="/blog/how-to-make-almond-milk" className="btn btn-secondary">Read the Almond Milk Recipe</Link>
            <Link to="/contact" className="btn btn-terracotta">Get a Custom Detox Plan</Link>
          </div>
        </div>
      </section>
    </>
  )
}