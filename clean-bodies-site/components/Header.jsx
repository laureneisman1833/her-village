import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const linkClass = ({ isActive }) => isActive ? 'active' : ''

  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="nav-brand" onClick={closeMenu}>
            <img
              src="/images/logo/clean-bodies-icon.png"
              alt="Clean Bodies"
              width="36"
              height="36"
              style={{ borderRadius: '50%' }}
            />
            <span className="nav-brand-text">Clean Bodies</span>
          </Link>

          <button
            className="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <NavLink to="/" className={linkClass} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/shop" className={linkClass} onClick={closeMenu}>Shop</NavLink>
            <NavLink to="/recipes" className={linkClass} onClick={closeMenu}>Almond Milk Recipe</NavLink>
            <NavLink to="/about" className={linkClass} onClick={closeMenu}>About</NavLink>
            <NavLink to="/contact" className={linkClass} onClick={closeMenu}>Contact</NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}