import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

export default function CodingProfiles({ profiles }) {
  return (
    <section id="coding-profiles" data-section className="section-band section-contrast">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Coding Profiles"
          title="Consistent coding practice across platforms and repositories"
          description="A mix of competitive programming, interview-style problem solving, and portfolio repositories contributes to steady engineering growth."
        />

        <div className="profiles-grid">
          {profiles.map(({ title, value, subtitle, description, icon: Icon, href, cta }, index) => (
            <motion.article
              key={title}
              className="glass-card profile-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <div className="profile-card-top">
                <div className="card-icon">
                  <Icon />
                </div>
                <span className="profile-platform">{title}</span>
              </div>

              <strong>{value}</strong>
              <h3>{subtitle}</h3>
              <p>{description}</p>

              {href ? (
                <a href={href} target="_blank" rel="noreferrer" className="text-link">
                  <FiArrowUpRight />
                  {cta}
                </a>
              ) : (
                <span className="project-meta-text">{cta}</span>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
