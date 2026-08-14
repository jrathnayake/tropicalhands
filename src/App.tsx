const features = [
  {
    title: 'Botanical blends',
    text: 'Cold-pressed oils and plant butters chosen to nourish, soften, and protect daily wear.',
    icon: '✦',
  },
  {
    title: 'Daily rituals',
    text: 'Simple routines for work, travel, and recovery—designed for hands that never stop moving.',
    icon: '❋',
  },
  {
    title: 'Clean ingredients',
    text: 'No harsh fillers, no synthetic shortcuts—just intentional care with a tropical sensibility.',
    icon: '✧',
  },
]

const highlights = [
  { value: '98%', label: 'natural-origin ingredients' },
  { value: '4.9/5', label: 'average customer rating' },
  { value: '12k+', label: 'hands cared for this year' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">TH</div>
          <span className="brand-name">Tropical Hands</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#story">Story</a>
          <a href="#rituals">Rituals</a>
          <a href="#reviews">Reviews</a>
          <a href="#shop">Shop</a>
        </nav>

        <button className="nav-button" type="button">Shop now</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Hand care, reimagined</p>
            <h1>Soft, strong, and beautifully restored.</h1>
            <p className="lede">
              Tropical Hands brings together island-inspired botanicals and restorative rituals to give your hands the daily care they deserve.
            </p>

            <div className="cta-row">
              <button className="primary" type="button">Shop essentials</button>
              <button className="secondary" type="button">Learn our story</button>
            </div>

            <div className="mini-trust">
              <span>Trusted by wellness lovers</span>
              <div className="avatars" aria-label="Customer community">
                <span>J</span>
                <span>A</span>
                <span>M</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Tropical hand care product display">
            <div className="product-card">
              <div className="product-glow" />
              <div className="jar">
                <div className="lid" />
                <div className="cream" />
              </div>
              <div className="product-details">
                <p>Signature ritual</p>
                <h2>Coconut Renewal</h2>
                <span>$28</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats" aria-label="Brand metrics">
          {highlights.map((item) => (
            <div key={item.label} className="stat-item">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section id="rituals" className="features">
          <div className="section-heading">
            <p className="eyebrow">Why it works</p>
            <h2>Simple ingredients. Deep hydration.</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="story" className="story">
          <div className="story-panel">
            <p className="eyebrow">Our philosophy</p>
            <h2>Nature-led care for every touchpoint.</h2>
            <p>
              We blend cocoa butter, aloe, and calming botanicals to create formulas that leave your hands soft, resilient, and genuinely cared for—without the sticky finish.
            </p>
            <ul>
              <li>Vegan, cruelty-free and thoughtfully sourced</li>
              <li>Designed for dry, overworked, and sensitive skin</li>
              <li>Made to fit seamlessly into your everyday ritual</li>
            </ul>
          </div>

          <div className="story-tiles">
            <div className="tile tile-main">
              <span>Daily hydration</span>
              <strong>24-hour comfort</strong>
            </div>
            <div className="tile">
              <span>Glow + repair</span>
              <strong>Natural barrier support</strong>
            </div>
          </div>
        </section>

        <section id="reviews" className="testimonial-wrap">
          <div className="section-heading narrow">
            <p className="eyebrow">Loved by customers</p>
            <h2>“The softest hands I’ve had in years.”</h2>
          </div>

          <div className="testimonial-grid">
            <article className="quote-card">
              <p>
                “I keep one in my desk, one in my bag, and one by the sink. My skin feels calmer and more hydrated than it has in months.”
              </p>
              <div className="reviewer">
                <strong>Elena M.</strong>
                <span>Wellness editor</span>
              </div>
            </article>

            <article className="quote-card">
              <p>
                “The texture is beautiful and the fragrance is subtle and tropical without being overpowering. It feels like a mini retreat.”
              </p>
              <div className="reviewer">
                <strong>Marcus T.</strong>
                <span>Creative director</span>
              </div>
            </article>
          </div>
        </section>

        <section id="shop" className="cta-banner">
          <div>
            <p className="eyebrow">Ready to begin?</p>
            <h2>Bring the tropical ritual home.</h2>
          </div>
          <button className="primary" type="button">Browse the collection</button>
        </section>
      </main>

      <footer className="footer">
        <span>Tropical Hands</span>
        <span>Handmade rituals for happier daily care.</span>
      </footer>
    </div>
  )
}

export default App
