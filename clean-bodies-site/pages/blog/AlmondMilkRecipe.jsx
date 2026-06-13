import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'How to Make Almond Milk at Home (Easy 3-Ingredient Recipe)',
  author: { '@type': 'Organization', name: 'Clean Bodies' },
  datePublished: '2025-06-01',
  description: 'Learn how to make creamy homemade almond milk with just 3 ingredients. Step-by-step recipe, FAQ, and tips from a certified detoxification specialist.',
  prepTime: 'PT10M',
  totalTime: 'PT8H10M',
  recipeYield: '4 cups',
  recipeIngredient: [
    '1 cup raw organic almonds',
    '4 cups filtered water',
    'Pinch of sea salt',
    'Optional: 1-2 Medjool dates, 1 tsp vanilla extract',
  ],
  recipeInstructions: [
    { '@type': 'HowToStep', name: 'Soak', text: 'Soak almonds in filtered water for 8-12 hours overnight.' },
    { '@type': 'HowToStep', name: 'Rinse', text: 'Drain and rinse almonds thoroughly with fresh filtered water.' },
    { '@type': 'HowToStep', name: 'Blend', text: 'Blend soaked almonds with 4 cups water and salt for 60-90 seconds until smooth.' },
    { '@type': 'HowToStep', name: 'Strain', text: 'Strain through a nut milk bag or fine-mesh strainer into a glass jar.' },
    { '@type': 'HowToStep', name: 'Store', text: 'Refrigerate and enjoy within 3-4 days. Shake well before each use.' },
  ],
  recipeCategory: 'Beverage',
  recipeCuisine: 'American',
  nutrition: { '@type': 'NutritionInformation', calories: '60 calories per cup' },
  image: 'https://yourcleanbody.com/images/recipe-card/almond-milk-recipe-card.png',
}

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does homemade almond milk last?',
      acceptedAnswer: { '@type': 'Answer', text: 'Homemade almond milk lasts 3-4 days in the refrigerator when stored in a sealed glass jar.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need to soak almonds before making almond milk?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes! Soaking almonds for 8-12 hours is essential for the creamiest almond milk. It softens the nuts and releases enzyme inhibitors.' },
    },
    {
      '@type': 'Question',
      name: 'What ratio of almonds to water should I use?',
      acceptedAnswer: { '@type': 'Answer', text: 'The ideal ratio is 1 cup of almonds to 4 cups of water (a 1:4 ratio).' },
    },
    {
      '@type': 'Question',
      name: 'Is homemade almond milk safe for infants?',
      acceptedAnswer: { '@type': 'Answer', text: 'Homemade almond milk can be introduced to babies after 12 months as part of a varied diet, but always consult your pediatrician first.' },
    },
  ],
}

export default function AlmondMilkRecipe() {
  return (
    <div className="blog-article">
      <SEO
        title="How to Make Almond Milk at Home (Easy 3-Ingredient Recipe)"
        description="Learn how to make creamy homemade almond milk with just 3 ingredients. Step-by-step recipe, FAQ, and tips from a certified detoxification specialist."
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <section className="page-header" style={{ padding: '48px 0 40px', background: '#f8f4f0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ fontSize: '0.875rem', color: '#888', marginBottom: '16px' }}>
            <Link to="/" style={{ color: '#8FA88B' }}>Home</Link> / <Link to="/recipes" style={{ color: '#8FA88B' }}>Recipes</Link> / <span style={{ color: '#666' }}>How to Make Almond Milk</span>
          </p>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#1a1a2e', maxWidth: '800px', margin: '0 auto 16px' }}>
            How to Make Almond Milk at Home (Easy 3-Ingredient Recipe)
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
            Creamier than dairy, safer for little ones, and free from hidden additives. This simple homemade almond milk recipe takes just 10 minutes of active prep time.
          </p>
          <div style={{ marginTop: '16px', fontSize: '0.9375rem', color: '#999', display: 'flex', gap: '8px', justifyContent: 'center' }}>
            <span>By Clean Bodies Team</span>
            <span>·</span>
            <span>June 2025</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '48px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '40px' }}>
            <div style={{ maxWidth: '780px' }}>
              <img
                src="/images/recipe-card/almond-milk-recipe-card.png"
                alt="Homemade Almond Milk Recipe — creamy, dairy-free, and made with organic almonds"
                style={{ width: '100%', borderRadius: '12px', marginBottom: '32px' }}
              />

              <h2 style={{ fontSize: '1.5rem', margin: '32px 0 16px', color: '#3D5A3E' }}>Why Make Your Own Almond Milk?</h2>
              <p style={{ color: '#444', lineHeight: 1.7, marginBottom: '16px' }}>
                Store-bought almond milk often contains carrageenan, gums, preservatives, and added sugars — 
                none of which belong in a clean kitchen. Making your own almond milk at home is surprisingly simple, 
                more affordable, and gives you complete control over what goes into your body.
              </p>
              <p style={{ color: '#444', lineHeight: 1.7, marginBottom: '16px' }}>
                Our <Link to="/shop/raw-almonds" style={{ color: '#8FA88B', fontWeight: 500 }}>Raw Organic Almonds</Link> are the perfect starting point. 
                Sourced from trusted organic farms, they're non-GMO and unpasteurized — ideal for making the creamiest homemade almond milk.
              </p>

              <h2 style={{ fontSize: '1.5rem', margin: '32px 0 16px', color: '#3D5A3E' }}>Ingredients</h2>
              <ul style={{ listStyle: 'disc', paddingLeft: '24px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '8px', color: '#444', lineHeight: 1.6 }}>1 cup <strong>raw organic almonds</strong> (we recommend our <Link to="/shop/raw-almonds" style={{ color: '#8FA88B' }}>Clean Bodies Raw Organic Almonds</Link>)</li>
                <li style={{ marginBottom: '8px', color: '#444', lineHeight: 1.6 }}>4 cups filtered water (plus more for soaking)</li>
                <li style={{ marginBottom: '8px', color: '#444', lineHeight: 1.6 }}>Pinch of sea salt</li>
                <li style={{ marginBottom: '8px', color: '#444', lineHeight: 1.6 }}><em>Optional:</em> 1–2 Medjool dates for sweetness, 1 tsp vanilla extract, or a drizzle of maple syrup</li>
              </ul>

              <h2 style={{ fontSize: '1.5rem', margin: '32px 0 16px', color: '#3D5A3E' }}>Step-by-Step Instructions</h2>

              {[
                { title: 'Step 1: Soak the Almonds', text: 'Place almonds in a bowl and cover with filtered water. Let them soak for <strong>8–12 hours</strong> (overnight is perfect). Soaking softens the almonds and makes them easier to blend, plus it releases enzyme inhibitors for easier digestion.' },
                { title: 'Step 2: Rinse Thoroughly', text: 'Drain the soaking water and rinse the almonds well with fresh filtered water. This removes any residue and ensures a clean, fresh taste.' },
                { title: 'Step 3: Blend', text: 'Add the soaked almonds to a high-speed blender with 4 cups of fresh filtered water and a pinch of sea salt. If using dates or vanilla, add them now. Blend on high for <strong>60–90 seconds</strong> until smooth and creamy.' },
                { title: 'Step 4: Strain', text: 'Pour the blended mixture through a nut milk bag, cheesecloth, or fine-mesh strainer into a large glass jar or bowl. Squeeze or press to extract all the liquid. The leftover pulp can be used in baking!' },
                { title: 'Step 5: Store & Enjoy', text: 'Transfer your almond milk to a sealed glass jar and refrigerate. It will keep for <strong>3–4 days</strong>. Shake well before each use, as natural separation occurs.' },
              ].map((step, i) => (
                <div key={i} style={{ marginBottom: '24px', padding: '20px', background: '#FAFAF8', borderRadius: '8px', borderLeft: '4px solid #8FA88B' }}>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '8px', color: '#3D5A3E', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>{step.title}</h3>
                  <p style={{ color: '#444', lineHeight: 1.7, marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: step.text }} />
                </div>
              ))}

              <div style={{ background: '#F5F0E8', borderRadius: '8px', padding: '24px', margin: '24px 0' }}>
                <p style={{ fontFamily: "'Caveat', cursive", fontSize: '1.125rem', color: '#8B7355', marginBottom: 0 }}>
                  💡 <strong>Pro tip:</strong> Save the pulp! Spread it on a baking sheet, dry in a low oven (200°F) for 2–3 hours, then blitz into almond flour for gluten-free baking.
                </p>
              </div>

              <h2 style={{ fontSize: '1.5rem', margin: '32px 0 16px', color: '#3D5A3E' }}>When to Introduce Almond Milk to Infants</h2>
              <p style={{ color: '#444', lineHeight: 1.7, marginBottom: '16px' }}>
                Homemade almond milk can be a wonderful alternative for babies weaning off breast milk or formula — 
                but always with pediatrician guidance. Because homemade almond milk is lower in protein and fat than 
                dairy milk or formula, it should not replace these as a primary nutrition source for infants under 12 months. 
                However, once your little one is eating a varied diet, unsweetened homemade almond milk is a clean, 
                additive-free option for smoothies, oatmeal, and cooking.
              </p>

              {/* FAQ Section */}
              <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #E8DCD1' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: '#3D5A3E' }}>Frequently Asked Questions</h2>

                {[
                  { q: 'How long does homemade almond milk last?', a: 'Homemade almond milk lasts <strong>3–4 days</strong> in the refrigerator when stored in a sealed glass jar. Because it contains no preservatives, it won\'t keep as long as store-bought versions. Always give it a sniff test before using.' },
                  { q: 'Do I need to soak almonds before making almond milk?', a: 'Yes! Soaking almonds for <strong>8–12 hours</strong> is essential for the creamiest almond milk. Soaking softens the nuts, makes blending easier, and helps your body digest the almonds more easily by releasing naturally occurring enzyme inhibitors.' },
                  { q: 'What ratio of almonds to water should I use?', a: 'The ideal ratio is <strong>1 cup of almonds to 4 cups of water</strong> (a 1:4 ratio). This produces perfectly creamy milk. For richer milk, use a 1:3 ratio. For lighter milk, try 1:5.' },
                  { q: 'Can I make almond milk without a blender?', a: 'A high-speed blender gives the best results, but you can use a food processor. The key is breaking down the soaked almonds thoroughly before straining.' },
                  { q: 'Is homemade almond milk safe for infants?', a: 'Homemade almond milk can be introduced to babies <strong>after 12 months</strong> as part of a varied diet, but always consult your pediatrician first. It should never replace breast milk or formula as a primary nutrition source.' },
                ].map((faq, i) => (
                  <div key={i} style={{ marginBottom: '24px', padding: '20px', background: '#FAFAF8', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1.0625rem', color: '#3D5A3E', marginBottom: '8px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>{faq.q}</h3>
                    <p style={{ color: '#555', marginBottom: 0, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: faq.a }} />
                  </div>
                ))}
              </section>
            </div>

            {/* Sidebar */}
            <aside>
              <div style={{ background: '#F5F0E8', borderRadius: '12px', padding: '24px', position: 'sticky', top: '96px' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '16px', color: '#3D5A3E' }}>Shop Ingredients</h3>
                <Link to="/shop/raw-almonds">
                  <img src="/images/products/raw-almonds-product.png" alt="Raw Organic Almonds" style={{ width: '100%', borderRadius: '8px', marginBottom: '12px' }} />
                </Link>
                <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Raw Organic Almonds</h4>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.125rem', fontWeight: 600, color: '#3D5A3E' }}>$16.00 (2lb) / $34.00 (5lb)</p>
                <Link to="/shop/raw-almonds" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '12px' }}>
                  Shop Now
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}