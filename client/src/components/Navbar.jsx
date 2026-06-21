import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import CustomCursor from './CustomCursor';
import './portfolioTheme.css';

export default function Navbar({ items, activeSection, ownerName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <CustomCursor />
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
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
              <small>Future-ready product builder</small>
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
            <span className="nav-status">
              <span className="availability-dot" />
              Available now
            </span>
            <motion.a
              href="#contact"
              className="button button-secondary nav-cta"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Talk
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
    </>
  );
}
