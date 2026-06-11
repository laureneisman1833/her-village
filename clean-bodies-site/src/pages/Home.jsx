import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { products, featuredProducts } from '../data/products'
import { recipes } from '../data/recipes'

export default function Home() {
  const featuredItems = featuredProducts.map(id => products.find(p => p.id === id)).filter(Boolean)
  const featuredRecipe = recipes.find(r => r.featured)

  return (
    <>
      <SEO
        title="YourCleanBody.com | Non-Toxic Skincare, Raw Organic Almonds & Wellness Products"
        description="Discover non-toxic skincare, raw organic almonds for homemade almond milk, and detox wellness products. Curated by a certified detoxification specialist."
      />
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Clean Living,<br />Naturally Yours</h1>
              <p>
                Toxin-free wellness products curated and personally endorsed by a certified detoxification specialist. 
                From non-toxic skincare to raw almonds for the creamiest homemade almond milk — everything we sell, we use ourselves.
              </p>
              <div className="hero-cta">
                <Link to="/shop" className="btn btn-primary">Shop Now</Link>
                <Link to="/about" className="btn btn-secondary">Our Story</Link>
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
          <h2 className="section-title">Our Most Loved Products</h2>
          <p className="section-subtitle">
            Every product is personally vetted and approved by our certified detoxification specialist. We only stock what we trust for our own families.
          </p>
          <div className="grid grid-3">
            {featuredItems.map(product => (
              <div className="card" key={product.id}>
                <div className="card-image" style={{
                  background: `linear-gradient(135deg, var(--color-sage-light), var(--color-soft-clay))`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
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
            <Link to="/shop" className="btn btn-terracotta">Browse All Products</Link>
          </div>
        </div>
      </section>

      {/* Features / Values */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <h2 className="section-title">Why Choose Clean Bodies?</h2>
          <div className="features">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h3 className="feature-title">Certified & Curated</h3>
              <p className="feature-text">Every product personally vetted by a certified detoxification specialist. If we wouldn't use it, we don't sell it.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌱</div>
              <h3 className="feature-title">Toxin-Free Promise</h3>
              <p className="feature-text">Zero hidden toxins, synthetic fragrances, or harmful additives. Full ingredient transparency on every product.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">👶</div>
              <h3 className="feature-title">Family-First</h3>
              <p className="feature-text">From safe infant weaning recipes to non-toxic skincare for every age — we support the whole family's wellness journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipe */}
      {featuredRecipe && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">Latest from the Blog</h2>
            <div className="recipe-card-featured">
              <div className="recipe-card-image" style={{ padding: 0 }}>
                <img
                  src="/images/recipe-card/almond-milk-recipe-card.png"
                  alt="Homemade Almond Milk Recipe Card"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="recipe-card-content">
                <span className="badge">{featuredRecipe.category}</span>
                <h3>{featuredRecipe.title}</h3>
                <p>{featuredRecipe.excerpt}</p>
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
                <Link to="/blog/how-to-make-almond-milk" className="btn btn-primary">Read the Full Recipe</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Snippet / CTA */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Ready to Start Your Clean Journey?</h2>
          <p className="section-subtitle">
            Whether you're new to toxin-free living or deepening your practice, we're here to help. 
            Every product, every recipe, every guide — backed by real expertise and real care.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/shop" className="btn btn-primary">Shop Products</Link>
            <Link to="/blog/how-to-make-almond-milk" className="btn btn-secondary">Almond Milk Recipe</Link>
            <Link to="/contact" className="btn btn-terracotta">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}