import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMapPin, FiMail } from 'react-icons/fi';
import heroGraphic from '../assets/hero.png';

export default function Hero({ data }) {
  return (
    <section id="home" data-section className="section-band hero-band">
      <div className="section-shell hero-layout">
        <div className="hero-copy">
          <motion.div
            className="hero-badges"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {data.heroBadges.map((badge) => (
              <span key={badge} className="info-chip">
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.p
            className="hero-kicker"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
          >
            <FiMapPin />
            {data.owner.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55 }}
          >
            {data.owner.name}
          </motion.h1>

          <motion.h2
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
          >
            {data.owner.tagline}
          </motion.h2>

          <motion.p
            className="hero-summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
          >
            {data.owner.summary}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <a href={data.owner.resumePath} download className="button button-primary">
              <FiDownload />
              Download Resume
            </a>
            <a href="#projects" className="button button-secondary">
              <FiArrowRight />
              View Projects
            </a>
            <a href="#contact" className="button button-tertiary">
              <FiMail />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="social-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {data.socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="social-button"
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <Icon />
                <span>{label}</span>
              </a>
            ))}
          </motion.div>

          <div className="hero-highlight-grid">
            {data.heroHighlights.map(({ title, text, icon: Icon }, index) => (
              <motion.article
                key={title}
                className="glass-card hero-highlight-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                whileHover={{ y: -4 }}
              >
                <div className="card-icon">
                  <Icon />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65 }}
        >
          <div className="hero-visual-frame glass-card">
            <div className="hero-visual-topline">
              <span className="availability-dot" />
              Available for internships and project collaborations
            </div>

            <div className="portrait-header">
              <div className="portrait-avatar">RD</div>
              <div>
                <h3>{data.owner.name}</h3>
                <p>Second-year CSE (Data Science) student</p>
              </div>
            </div>

            <div className="hero-graphic-wrap">
              <motion.img
                src={heroGraphic}
                alt="Layered developer portfolio illustration"
                className="hero-graphic"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              />
            </div>

            <div className="hero-stats-grid">
              {data.statCards.map((stat) => (
                <div key={stat.label} className="mini-stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
