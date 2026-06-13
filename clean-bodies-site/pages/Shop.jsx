import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { products, categories } from '../data/products'

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <>
      <SEO
        title="Shop Products I Personally Use | YourCleanBody.com"
        description="Every product on this page is something I've tested, use regularly, and trust. Non-toxic skincare, raw organic almonds, and simple kitchen tools — all personally recommended."
      />
      <section className="page-header">
        <div className="container">
          <h1>Products I Use & Trust</h1>
          <p>
            No sponsored picks. No paid placements. Every product here is something I've bought for myself, 
            tested at home, and genuinely recommend. If it's not in my pantry or bathroom cabinet, it's not on this page.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="category-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
              <p style={{ color: 'var(--text-light)' }}>No products found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-3">
              {filteredProducts.map(product => (
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
                    {product.badge && <span className="badge" style={{ marginBottom: 'var(--space-sm)' }}>{product.badge}</span>}
                    <h3 className="card-title">{product.name}</h3>
                    <p className="card-text">{product.tagline}</p>
                    <p className="card-text" style={{ fontSize: '0.875rem' }}>{product.description}</p>
                    <div className="card-footer">
                      <span className="price">{product.price}</span>
                      <Link to={`/shop/${product.id}`} className="btn btn-primary">Details</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Custom Plan CTA */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2>Not Sure What You Need?</h2>
          <p className="section-subtitle">
            I offer personalized 7-day reset detox plans tailored to your needs. No generic programs — just 
            honest guidance based on what's actually worked for me and the people I've helped.
          </p>
          <Link to="/contact" className="btn btn-terracotta">Ask About a Custom Plan</Link>
        </div>
      </section>
    </>
  )
}