import { footerLinks } from '../data/portfolioData';

export default function Footer({ owner }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="section-shell footer-layout">
        <div>
          <strong>{owner.name}</strong>
          <p className="footer-copy">
            MERN Stack Developer and Data Science student building practical, polished software.
          </p>
          <span className="footer-copy">&copy; {year} Crafted for a futuristic portfolio experience.</span>
        </div>

        <div className="footer-links">
          {footerLinks.map((item) => {
            const isExternal = item.href.startsWith('http') || item.href.startsWith('mailto');

            return (
              <a key={item.label} href={item.href} target={isExternal && item.href.startsWith('http') ? '_blank' : undefined} rel={isExternal && item.href.startsWith('http') ? 'noreferrer' : undefined}>
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
