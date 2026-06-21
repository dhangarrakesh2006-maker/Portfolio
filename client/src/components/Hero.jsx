import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMail, FiMapPin, FiStar } from 'react-icons/fi';
import heroGraphic from '../assets/hero.png';
import profilePhoto from '../../../IMG-20250824-WA0022 (1).jpg';
import HeroParticles from './HeroParticles';
import SplitText from './SplitText';

const stackSignals = ['React', 'Node.js', 'MongoDB'];

export default function Hero({ data }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.45,
  });

  const copyY = useTransform(smoothProgress, [0, 1], ['0%', '16%']);
  const copyOpacity = useTransform(smoothProgress, [0, 0.75, 1], [1, 0.5, 0.15]);
  const visualY = useTransform(smoothProgress, [0, 1], ['0%', '-10%']);
  const visualScale = useTransform(smoothProgress, [0, 1], [1, 0.94]);
  const visualRotate = useTransform(smoothProgress, [0, 1], [0, 3.5]);
  const orbScale = useTransform(smoothProgress, [0, 1], [1, 1.35]);

  return (
    <section ref={sectionRef} id="home" data-section className="section-band hero-band hero-pinned-section">
      <div className="hero-pin-shell">
        <HeroParticles />
        <motion.div className="hero-orb hero-orb-one" style={{ scale: orbScale }} aria-hidden="true" />
        <motion.div className="hero-orb hero-orb-two" style={{ y: visualY }} aria-hidden="true" />
        <div className="hero-backdrop-lines" aria-hidden="true" />

        <div className="section-shell hero-layout">
          <motion.div className="hero-copy" style={{ y: copyY, opacity: copyOpacity }}>
            <motion.div
              className="hero-badges"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="info-chip availability-chip">
                <span className="availability-dot" />
                Available for internships
              </span>
              {data.heroBadges
                .filter((badge) => badge !== 'Open to internships')
                .map((badge) => (
                  <span key={badge} className="info-chip">
                    {badge}
                  </span>
                ))}
            </motion.div>

            <motion.p
              className="hero-kicker"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04, duration: 0.5 }}
            >
              <FiStar />
              Neon-crafted developer portfolio
            </motion.p>

            <motion.p
              className="hero-location"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.5 }}
            >
              <FiMapPin />
              {data.owner.location}
            </motion.p>

            <SplitText as="h1" className="hero-display" text={data.owner.name} delay={0.16} />
            <SplitText as="h2" className="hero-tagline" text={data.owner.tagline} delay={0.44} />

            <motion.p
              className="hero-summary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.55 }}
            >
              {data.owner.summary}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.5 }}
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
              transition={{ delay: 0.4, duration: 0.5 }}
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
          </motion.div>

          <motion.div className="hero-visual" style={{ y: visualY, scale: visualScale }}>
            <motion.div className="hero-visual-frame glass-card" style={{ rotate: visualRotate }}>
              <div className="hero-visual-topline">
                <span className="availability-dot" />
                Available now for internships and collaborations
              </div>

              <div className="portrait-header">
                <div className="portrait-avatar">RD</div>
                <div>
                  <h3>{data.owner.name}</h3>
                  <p>Second-year CSE (Data Science) student</p>
                </div>
              </div>

              <div className="hero-graphic-wrap" data-cursor="highlight">
                <div className="hero-graphic-glow" aria-hidden="true" />
                <motion.img
                  src={profilePhoto}
                  alt={`${data.owner.name} portrait`}
                  className="hero-graphic"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = heroGraphic;
                  }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.06 }}
                />
              </div>

              <div className="hero-visual-footer">
                <span className="hero-visual-label">Build. Iterate. Ship.</span>
                <div className="hero-signal-row">
                  {stackSignals.map((signal) => (
                    <span key={signal} className="hero-signal-chip">
                      {signal}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hero-stats-grid">
                {data.statCards.map((stat) => (
                  <div key={stat.label} className="mini-stat-card">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
