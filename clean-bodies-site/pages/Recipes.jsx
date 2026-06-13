import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Recipes() {
  return (
    <>
      <SEO
        title="Raw Homemade Almond Milk Recipe | YourCleanBody.com"
        description="The only almond milk recipe you need. Two ingredients, 10 minutes of prep, and creamy results every time. Made with raw organic almonds."
      />
      <section className="page-header">
        <div className="container">
          <h1>Raw Homemade Almond Milk</h1>
          <p>
            Creamier than store-bought, free of hidden additives, and made with just two ingredients. 
            This is the only recipe you need — and it's the one I make for my family every single week.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="recipe-card-featured" style={{ gridTemplateColumns: '1fr' }}>
            <div className="recipe-card-image" style={{ padding: 0, minHeight: '300px' }}>
              <img
                src="/images/recipe-card/almond-milk-recipe-card.png"
                alt="Raw Homemade Almond Milk"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-2xl)' }}>
            <span className="badge" style={{ marginBottom: 'var(--space-md)' }}>Signature Recipe</span>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--color-deep-forest)', marginBottom: 'var(--space-md)' }}>
              The Only Almond Milk Recipe You'll Ever Need
            </h2>
            <p style={{ color: 'var(--text-medium)', lineHeight: 1.7, marginBottom: 'var(--space-lg)' }}>
              Making your own almond milk is one of the simplest ways to eliminate hidden additives from your diet. 
              Store-bought versions often contain carrageenan, gums, preservatives, and added sugars — none of which 
              belong in a clean kitchen.
            </p>

            <h3 style={{ color: 'var(--color-deep-forest)', marginBottom: 'var(--space-md)' }}>Why This Recipe?</h3>
            <ul style={{ marginBottom: 'var(--space-xl)', paddingLeft: 'var(--space-lg)' }}>
              <li style={{ marginBottom: 'var(--space-sm)', color: 'var(--text-medium)' }}>Creamier texture than any store-bought version</li>
              <li style={{ marginBottom: 'var(--space-sm)', color: 'var(--text-medium)' }}>No additives, preservatives, or hidden sugars</li>
              <li style={{ marginBottom: 'var(--space-sm)', color: 'var(--text-medium)' }}>10 minutes of active prep — the rest is just soaking</li>
              <li style={{ marginBottom: 'var(--space-sm)', color: 'var(--text-medium)' }}>Zero waste when you compost the almond pulp</li>
              <li style={{ marginBottom: 'var(--space-sm)', color: 'var(--text-medium)' }}>Costs less than half of store-bought organic almond milk</li>
            </ul>

            <h3 style={{ color: 'var(--color-deep-forest)', marginBottom: 'var(--space-md)' }}>Ingredients</h3>
            <ul style={{ marginBottom: 'var(--space-xl)', paddingLeft: 'var(--space-lg)' }}>
              <li style={{ marginBottom: 'var(--space-sm)', color: 'var(--text-medium)' }}>1 cup raw organic almonds (<Link to="/shop/raw-almonds" style={{ color: 'var(--color-sage)', fontWeight: 500 }}>the ones I use</Link>)</li>
              <li style={{ marginBottom: 'var(--space-sm)', color: 'var(--text-medium)' }}>4 cups filtered water (plus more for soaking)</li>
              <li style={{ marginBottom: 'var(--space-sm)', color: 'var(--text-medium)' }}>Pinch of sea salt</li>
              <li style={{ marginBottom: 'var(--space-sm)', color: 'var(--text-medium)' }}>Optional: 1-2 Medjool dates for sweetness</li>
            </ul>

            <h3 style={{ color: 'var(--color-deep-forest)', marginBottom: 'var(--space-md)' }}>Instructions</h3>
            <ol style={{ marginBottom: 'var(--space-xl)', paddingLeft: 'var(--space-lg)' }}>
              <li style={{ marginBottom: 'var(--space-md)', color: 'var(--text-medium)', lineHeight: 1.6 }}>
                <strong>Soak</strong> — Place almonds in a bowl and cover with filtered water. Let them soak for 8-12 hours (overnight is perfect).
              </li>
              <li style={{ marginBottom: 'var(--space-md)', color: 'var(--text-medium)', lineHeight: 1.6 }}>
                <strong>Rinse</strong> — Drain and rinse the almonds thoroughly with fresh filtered water.
              </li>
              <li style={{ marginBottom: 'var(--space-md)', color: 'var(--text-medium)', lineHeight: 1.6 }}>
                <strong>Blend</strong> — Add almonds to a blender with 4 cups fresh filtered water and salt. Blend on high for 60-90 seconds until smooth and creamy.
              </li>
              <li style={{ marginBottom: 'var(--space-md)', color: 'var(--text-medium)', lineHeight: 1.6 }}>
                <strong>Strain</strong> — Pour through a nut milk bag or fine-mesh strainer into a glass jar. Squeeze to extract all the liquid.
              </li>
              <li style={{ marginBottom: 'var(--space-md)', color: 'var(--text-medium)', lineHeight: 1.6 }}>
                <strong>Store</strong> — Refrigerate and enjoy within 3-4 days. Shake well before each use.
              </li>
            </ol>

            <div style={{
              background: 'var(--color-cream)',
              borderRadius: 'var(--radius-sm)',
              padding: 'var(--space-lg)',
              marginBottom: 'var(--space-xl)',
            }}>
              <p className="handwriting" style={{ fontSize: '1.125rem', color: 'var(--color-warm-brown)', marginBottom: 0 }}>
                💡 <strong>My pro tip:</strong> Save the almond pulp! Spread it on a baking sheet, dry in a low oven (200°F) for 2-3 hours, then blitz into almond flour for baking.
              </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
              <p style={{ color: 'var(--text-medium)', marginBottom: 'var(--space-lg)' }}>
                <strong>Ready to make it?</strong> Grab the almonds and the nut milk bag I use.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/shop/raw-almonds" className="btn btn-primary">Shop Raw Almonds</Link>
                <Link to="/shop/almond-milk-bag" className="btn btn-secondary">Get a Nut Milk Bag</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Plan CTA */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2>Want a Full 7-Day Reset?</h2>
          <p className="section-subtitle">
            Almond milk is just the beginning. I create personalized 7-day reset detox plans tailored to 
            your body, your goals, and your lifestyle. No generic programs — just honest, straightforward guidance.
          </p>
          <Link to="/contact" className="btn btn-terracotta">Tell Me About a Custom Plan</Link>
        </div>
      </section>
    </>
  )
}