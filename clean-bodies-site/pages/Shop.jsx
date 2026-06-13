import { Link } from 'react-router-dom'
import { products } from '../data/products'
import SEO from '../components/SEO'

export default function Shop() {
  return (
    <>
      <SEO
        title="Raw Organic Almonds I Personally Use | YourCleanBody.com"
        description="The only products on this site — raw organic almonds in two sizes. The same almonds I use for my weekly homemade almond milk."
      />
      <section className="page-header">
        <div className="container">
          <h1>What I Use</h1>
          <p>
            This isn't a store. It's a short list of products I actually buy for myself and recommend 
            to anyone who asks. No sponsored picks, no paid placements — just what's in my pantry.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {products.map(product => (
              <div className="card" key={product.id}>
                <div className="card-image" style={{
                  background: `linear-gradient(135deg, var(--color-sage-light), var(--color-soft-clay))`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <img
                    src="/images/products/raw-almonds-product.png"
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body">
                  {product.badge && <span className="badge" style={{ marginBottom: 'var(--space-sm)' }}>{product.badge}</span>}
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-text">{product.tagline}</p>
                  <div className="card-footer">
                    <span className="price">{product.price}</span>
                    <Link to={`/shop/${product.id}`} className="btn btn-primary">Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-cream)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2>Want a Custom 7-Day Reset?</h2>
          <p className="section-subtitle">
            Products are just tools. Real change comes from a plan tailored to you. I create personalized 
            7-day reset detox plans based on your unique needs.
          </p>
          <Link to="/contact" className="btn btn-terracotta">Tell Me About a Custom Plan</Link>
        </div>
      </section>
    </>
  )
}