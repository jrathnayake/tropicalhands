import { useState } from 'react'

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

const galleryImages = [
  {
    title: 'Deep muscle relief',
    description: 'A male therapist uses focused therapeutic techniques to ease tension and restore comfort.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Healing touch therapy',
    description: 'Professional hands-on care from a male therapist helps a female client settle into deep relaxation.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Restorative wellness',
    description: 'Personalized massage supports recovery, muscle release, and complete renewal for women.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80',
  },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Story', href: '#story' },
    { label: 'Rituals', href: '#rituals' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Shop', href: '#shop' },
  ]

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="page-shell">
      <header className="topbar">
        <nav className={`nav ${isMenuOpen ? 'is-open' : ''}`} id="primary-nav" aria-label="Main navigation" aria-expanded={isMenuOpen}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
        </nav>

        <button className="nav-button" type="button">Book now</button>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-controls="primary-nav"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Hand care, reimagined</p>
            <h1>Professional, Therapeutic Massage, for Women.</h1>
            <p className="lede">
              Tropical Hands provides professional, restorative massage therapy exclusively for women, combining expert therapeutic techniques with a calming tropical-inspired experience to help you relax, recover, and feel your best.
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

          <div className="hero-visual" aria-label="Woman receiving massage from a male therapist">
            <div className="photo-visual">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85"
                alt="Female client receiving focused therapeutic massage from a male therapist."
              />
              <div className="floating-badge">
                <span>Women-only care</span>
                <strong>Hotel and Home visits</strong>
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

        <section className="image-gallery" aria-label="Massage therapy gallery">
          <div className="section-heading">
            <p className="eyebrow">A restorative experience</p>
            <h2>Comfort, privacy, and hands-on care.</h2>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((item) => (
              <article key={item.title} className="gallery-card">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
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

        <section id="contact" className="booking-contact" aria-label="Book a massage or contact via WhatsApp">
          <div className="booking-copy">
            <p className="eyebrow">Book your session</p>
            <h2>Reserve a calming massage experience for women.</h2>
            <p>
              Choose a treatment that supports stress relief, muscle recovery, and deep relaxation in a private, welcoming setting.
            </p>
          </div>

          <div className="booking-panel">
            <div className="booking-meta">
              <span>Mon–Sun</span>
              <strong>9:00 AM – 10:00 PM</strong>
            </div>
            <div className="booking-meta">
              <span>Call or WhatsApp</span>
              <strong>+94 72 62 62 000</strong>
            </div>

            <div className="booking-actions">
              <a
                className="primary booking-button"
                href="https://wa.me/94771234567?text=Hi%20Tropical%20Hands%2C%20I%27d%20like%20to%20book%20a%20massage%20session."
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp us
              </a>
              <a className="secondary booking-button" href="tel:+94771234567">
                Call to book
              </a>
            </div>
          </div>
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
