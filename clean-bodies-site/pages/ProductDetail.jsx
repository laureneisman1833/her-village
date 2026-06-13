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
            Back to What I Use
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <SEO
        title={product.id === 'raw-almonds' ? 'Raw Organic Almonds for Homemade Almond Milk | YourCleanBody.com' : 'Bulk Raw Organic Almonds (5lb) | YourCleanBody.com'}
        description={`${product.name} — ${product.tagline}. The almonds I personally buy and use for my weekly homemade almond milk.`}
      />
      <section className="section" style={{ paddingTop: 'var(--space-2xl)' }}>
        <div className="container">
          <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-xl)', color: 'var(--text-medium)', fontSize: '0.9375rem' }}>
            ← Back
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3xl)', alignItems: 'start' }}>
            <div style={{
              background: `linear-gradient(135deg, var(--color-sage-light), var(--color-soft-clay))`,
              borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', minHeight: '400px',
            }}>
              <img
                src="/images/products/raw-almonds-product.png"
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div>
              {product.badge && <span className="badge" style={{ marginBottom: 'var(--space-md)' }}>{product.badge}</span>}
              <h1>{product.name}</h1>
              <p style={{ color: 'var(--text-medium)', fontSize: '1.125rem', marginTop: 'var(--space-sm)' }}>{product.tagline}</p>
              <div style={{ margin: 'var(--space-lg) 0' }}><span className="price">{product.price}</span></div>
              <p style={{ color: 'var(--text-dark)', lineHeight: 1.7 }}>{product.description}</p>

              <div style={{ marginTop: 'var(--space-lg)', padding: 'var(--space-md)', background: 'var(--color-cream)', borderRadius: 'var(--radius-sm)' }}>
                <p className="handwriting" style={{ fontSize: '1rem', color: 'var(--color-warm-brown)', marginBottom: 0 }}>
                  "These are the almonds in my pantry right now. If I wouldn't buy them for myself, I wouldn't recommend them to you."
                </p>
              </div>

              <div style={{ marginTop: 'var(--space-xl)' }}>
                <h4 style={{ marginBottom: 'var(--space-md)', fontFamily: 'var(--font-body)', fontWeight: 600 }}>Why I Recommend These</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  {product.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--text-medium)', fontSize: '0.9375rem' }}>
                      <span style={{ color: 'var(--color-herb-green)', fontWeight: 600 }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: 'var(--space-2xl)', padding: 'var(--space-lg)', background: 'var(--color-cream)', borderRadius: 'var(--radius-sm)' }}>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-medium)', marginBottom: 'var(--space-md)' }}>
                  <strong>Where I buy them:</strong> I get these on Amazon. The link below is an affiliate link — 
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

      <section className="section" style={{ backgroundColor: 'var(--color-cream)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2>Not Sure Which Size?</h2>
          <p className="section-subtitle">
            The 2lb bag is perfect for trying the recipe. If you know you'll be making almond milk every week, 
            the 5lb bulk bag saves you money. Both are the same almonds I use.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            {products.filter(p => p.id !== product.id).map(p => (
              <Link key={p.id} to={`/shop/${p.id}`} className="btn btn-secondary">{p.name}</Link>
            ))}
            <Link to="/contact" className="btn btn-terracotta">Ask About a Custom Plan</Link>
          </div>
        </div>
      </section>
    </>
  )
}