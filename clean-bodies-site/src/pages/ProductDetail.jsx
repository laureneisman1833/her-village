import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { products } from '../data/products'

export default function ProductDetail() {
  const { productId } = useParams()
  const product = products.find(p => p.id === productId)

  if (!product) {
    return (
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <SEO title="Product Not Found" />
          <h2>Product Not Found</h2>
          <p style={{ color: 'var(--text-medium)', marginTop: 'var(--space-md)' }}>
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/shop" className="btn btn-primary" style={{ marginTop: 'var(--space-lg)' }}>
            Back to Shop
          </Link>
        </div>
      </section>
    )
  }

  const seoTitle = product.id === 'raw-almonds'
    ? 'Raw Organic Almonds for Homemade Almond Milk'
    : product.id === 'raw-almonds-bulk'
    ? 'Bulk Raw Organic Almonds (5lb) for Almond Milk & Snacking'
    : product.id === 'wellness-detox-kit'
    ? '7-Day Gentle Detox Kit | Natural Cleanse Products'
    : product.id === 'nontoxic-skincare'
    ? 'Daily Detox Face Serum | Non-Toxic Skincare'
    : product.id === 'nontoxic-skincare-2'
    ? 'Purifying Clay Mask | Non-Toxic Face Mask'
    : product.id === 'nontoxic-skincare-3'
    ? 'Clean Body Butter | Non-Toxic Moisturizer'
    : product.id === 'wellness-tea'
    ? 'Detox Support Tea Blend | Organic Herbal Tea'
    : product.name

  const seoDescription = `${product.name} — ${product.tagline}. $${product.price}. Non-toxic, toxin-free, and personally vetted by a certified detoxification specialist.`

  return (
    <>
      <SEO
        title={`${seoTitle} | YourCleanBody.com`}
        description={seoDescription}
      />
      <section className="section" style={{ paddingTop: 'var(--space-2xl)' }}>
        <div className="container">
          <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-xl)', color: 'var(--text-medium)', fontSize: '0.9375rem' }}>
            ← Back to All Products
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3xl)', alignItems: 'start' }}>
            {/* Product Image */}
            <div style={{
              background: `linear-gradient(135deg, var(--color-sage-light), var(--color-soft-clay))`,
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              minHeight: '400px',
            }}>
              <img
                src={product.category === 'skincare' ? '/images/products/skincare-product.png' : product.category === 'almonds' ? '/images/products/raw-almonds-product.png' : '/images/products/wellness-product.png'}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Product Info */}
            <div>
              {product.badge && <span className="badge" style={{ marginBottom: 'var(--space-md)' }}>{product.badge}</span>}
              <h1>{product.name}</h1>
              <p style={{ color: 'var(--text-medium)', fontSize: '1.125rem', marginTop: 'var(--space-sm)' }}>
                {product.tagline}
              </p>
              <div style={{ margin: 'var(--space-lg) 0' }}>
                <span className="price">{product.price}</span>
              </div>
              <p style={{ color: 'var(--text-dark)', lineHeight: 1.7 }}>{product.description}</p>

              {/* Features */}
              <div style={{ marginTop: 'var(--space-xl)' }}>
                <h4 style={{ marginBottom: 'var(--space-md)', fontFamily: 'var(--font-body)', fontWeight: 600 }}>Product Highlights</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  {product.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--text-medium)', fontSize: '0.9375rem' }}>
                      <span style={{ color: 'var(--color-herb-green)', fontWeight: 600 }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Section */}
              <div style={{
                marginTop: 'var(--space-2xl)',
                padding: 'var(--space-lg)',
                background: 'var(--color-cream)',
                borderRadius: 'var(--radius-sm)',
              }}>
                <p style={{ fontFamily: 'var(--font-accent)', fontSize: '1.125rem', color: 'var(--color-warm-brown)', marginBottom: 'var(--space-md)' }}>
                  Ready to order? Reach out and we'll help you get started.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                  <Link to="/contact" className="btn btn-primary">Order Now — Get in Touch</Link>
                  <a href="#paypal" className="btn btn-secondary" style={{ fontSize: '0.875rem' }}>
                    <span>💳</span> Pay with PayPal
                  </a>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-light)', marginTop: 'var(--space-md)', marginBottom: 0 }}>
                  Contact us for bulk orders, subscription options, and shipping details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <h2 className="section-title">More from This Category</h2>
          <div className="grid grid-3">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map(related => (
                <div className="card" key={related.id}>
                  <div className="card-image" style={{
                    background: `linear-gradient(135deg, var(--color-sage-light), var(--color-soft-clay))`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <img
                      src={related.category === 'skincare' ? '/images/products/skincare-product.png' : related.category === 'almonds' ? '/images/products/raw-almonds-product.png' : '/images/products/wellness-product.png'}
                      alt={related.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="card-body">
                    {related.badge && <span className="badge">{related.badge}</span>}
                    <h3 className="card-title">{related.name}</h3>
                    <p className="card-text">{related.tagline}</p>
                    <div className="card-footer">
                      <span className="price">{related.price}</span>
                      <Link to={`/shop/${related.id}`} className="btn btn-primary">Details</Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}