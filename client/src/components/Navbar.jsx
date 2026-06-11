import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar({ items, activeSection, ownerName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [activeSection]);

  return (
    <header className="site-header">
      <div className="section-shell site-header-inner">
        <button
          type="button"
          className="brand-mark"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <span>RD</span>
          <div>
            <strong>{ownerName}</strong>
            <small>MERN Developer</small>
          </div>
        </button>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <motion.a
            href="#contact"
            className="button button-secondary nav-cta"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Let&apos;s Talk
          </motion.a>
          <button
            type="button"
            className="icon-button nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
