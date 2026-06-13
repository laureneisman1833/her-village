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
    ? 'Bulk Raw Organic Almonds (5lb) for Almond Milk'
    : product.id === 'single-ingredient-skincare'
    ? 'Pure Organic Jojoba Oil | Single-Ingredient Moisturizer'
    : product.id === 'almond-milk-bag'
    ? 'Premium Nut Milk Bag for Homemade Almond Milk'
    : product.name

  const seoDescription = `${product.name} — ${product.tagline}. $${product.price}. Personally tested and recommended — this is a product I actually use in my own home.`

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

              {/* Why I Recommend This */}
              <div style={{ marginTop: 'var(--space-lg)', padding: 'var(--space-md)', background: 'var(--color-cream)', borderRadius: 'var(--radius-sm)' }}>
                <p className="handwriting" style={{ fontSize: '1rem', color: 'var(--color-warm-brown)', marginBottom: 0 }}>
                  "This is something I actually use at home. If I wouldn't buy it for myself, I wouldn't recommend it to you."
                </p>
              </div>

              {/* Features */}
              <div style={{ marginTop: 'var(--space-xl)' }}>
                <h4 style={{ marginBottom: 'var(--space-md)', fontFamily: 'var(--font-body)', fontWeight: 600 }}>Why I Recommend It</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  {product.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--text-medium)', fontSize: '0.9375rem' }}>
                      <span style={{ color: 'var(--color-herb-green)', fontWeight: 600 }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amazon Affiliate Link */}
              <div style={{
                marginTop: 'var(--space-2xl)',
                padding: 'var(--space-lg)',
                background: 'var(--color-cream)',
                borderRadius: 'var(--radius-sm)',
              }}>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-medium)', marginBottom: 'var(--space-md)' }}>
                  <strong>Where to buy:</strong> I source this product from Amazon. The link below is an affiliate link — 
                  if you purchase through it, I may earn a small commission at no extra cost to you. I only recommend 
                  products I genuinely use and trust.
                </p>
                <a
                  href={product.amazonUrl || 'https://amzn.to/4cM9XqK'}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="btn btn-primary"
                  style={{ display: 'block', textAlign: 'center' }}
                >
                  Check Price on Amazon →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <h2 className="section-title">More Products I Use</h2>
          <div className="grid grid-3">
            {products
              .filter(p => p.id !== product.id)
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

      {/* Custom Plan CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2>Want a Personalized 7-Day Reset?</h2>
          <p className="section-subtitle">
            Products are great, but real results come from a plan tailored to you. I create custom 7-day 
            reset detox plans based on your unique needs — no generic programs, just what works for your body.
          </p>
          <Link to="/contact" className="btn btn-terracotta">Tell Me About a Custom Plan</Link>
        </div>
      </section>
    </>
  )
}