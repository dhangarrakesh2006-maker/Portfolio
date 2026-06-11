import { footerLinks } from '../data/portfolioData';

export default function Footer({ owner }) {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-layout">
        <div>
          <strong>{owner.name}</strong>
          <p>{owner.tagline}</p>
        </div>

        <nav className="footer-links" aria-label="Footer links">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <span className="footer-copy">© {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  );
}
