import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { recipes, blogCategories } from '../data/recipes'

export default function Recipes() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredRecipes = activeCategory === 'All'
    ? recipes
    : recipes.filter(r => r.category === activeCategory)

  const featuredRecipe = recipes.find(r => r.featured)

  return (
    <>
      <SEO
        title="Recipes & Wellness Tips | Non-Toxic Living Blog"
        description="Real-food almond milk recipes, detox tips, and wellness guides from a certified detoxification specialist. Learn how to make almond milk at home and more."
      />
      <section className="page-header">
        <div className="container">
          <h1>Recipes & Wellness</h1>
          <p>
            Real-food recipes, detox tips, and wellness guides from our certified detoxification specialist. 
            Simple, approachable — no judgment, just help.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Featured Recipe */}
          {featuredRecipe && (
            <>
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
                      <div className="recipe-detail-value">{featuredRecipe.details?.prepTime || '10 min'}</div>
                    </div>
                    <div className="recipe-detail">
                      <div className="recipe-detail-label">Soak</div>
                      <div className="recipe-detail-value">{featuredRecipe.details?.soakTime || '8+ hrs'}</div>
                    </div>
                    <div className="recipe-detail">
                      <div className="recipe-detail-label">Yields</div>
                      <div className="recipe-detail-value">{featuredRecipe.details?.yield || '4 cups'}</div>
                    </div>
                  </div>
                  <p style={{ whiteSpace: 'pre-line', marginTop: 'var(--space-md)' }}>
                    <strong>Ingredients:</strong> 1 cup raw organic almonds, 4 cups filtered water, pinch of sea salt...
                  </p>
                  <Link to="/blog/how-to-make-almond-milk" className="btn btn-primary" style={{ marginTop: 'var(--space-md)' }}>
                    Full Recipe →
                  </Link>
                </div>
              </div>
            </>
          )}

          {/* Category Filter */}
          <h2 style={{ marginBottom: 'var(--space-lg)' }}>More Articles</h2>
          <div className="category-tabs">
            {blogCategories.map(cat => (
              <button
                key={cat}
                className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Recipe List */}
          <div className="grid grid-3">
            {filteredRecipes.map(recipe => (
              <div className="card" key={recipe.id}>
                <div className="card-image" style={{
                  background: `linear-gradient(135deg, var(--color-sage-light), var(--color-soft-clay))`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                }}>
                  {recipe.id === 'almond-milk' ? '🥛' : recipe.id === 'detox-morning-routine' ? '🌅' : '📖'}
                </div>
                <div className="card-body">
                  <span className="badge" style={{ marginBottom: 'var(--space-sm)' }}>{recipe.category}</span>
                  <div className="recipe-meta">
                    <span>{recipe.date}</span>
                    <span>·</span>
                    <span>{recipe.readTime}</span>
                  </div>
                  <h3 className="card-title">{recipe.title}</h3>
                  <p className="card-text">{recipe.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
              <p style={{ color: 'var(--text-light)' }}>No articles found in this category. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}