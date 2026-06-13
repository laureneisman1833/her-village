import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Clean Bodies</h3>
            <p>
              Toxin-free wellness products curated and personally endorsed by a certified detoxification specialist. Every product is something we use and stand by.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Shop</h4>
            <ul className="footer-links">
              <li><Link to="/shop">All Products</Link></li>
              <li><Link to="/shop">Non-Toxic Skincare</Link></li>
              <li><Link to="/shop">Raw Almonds</Link></li>
              <li><Link to="/shop">Wellness</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Learn</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/recipes">Recipes & Blog</Link></li>
              <li><Link to="/recipes">Wellness Guides</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-links">
              <li><a href="mailto:hello@cleanbodies.com">hello@cleanbodies.com</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#pinterest">Pinterest</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Clean Bodies. All rights reserved. Always consult your healthcare provider before starting any detox program.</p>
          <div className="footer-social">
            <a href="#instagram" aria-label="Instagram">📷</a>
            <a href="#facebook" aria-label="Facebook">📘</a>
            <a href="#pinterest" aria-label="Pinterest">📌</a>
          </div>
        </div>
      </div>
    </footer>
  )
}