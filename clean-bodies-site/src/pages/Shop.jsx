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
        title="Shop Clean Beauty & Wellness Products"
        description="Shop non-toxic skincare, raw organic almonds, and detox wellness products at YourCleanBody.com. Every product is personally vetted by a certified detoxification specialist."
      />
      <section className="page-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>
            Every product is personally vetted and approved by our certified detoxification specialist. 
            We only stock what we trust for our own families.
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
    </>
  )
}