import { motion } from 'framer-motion';
import { FiCheckCircle, FiZap } from 'react-icons/fi';
import AnimatedCounter from './AnimatedCounter';
import SectionHeading from './SectionHeading';

export default function Achievements({ metrics, certifications }) {
  return (
    <section id="achievements" data-section className="section-band">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Achievements"
          title="Proof of consistency across coding practice, projects, and competitions"
          description="The strongest progress comes from repetition, shipping, and measurable improvement. These highlights capture that momentum."
        />

        <div className="achievements-layout">
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <motion.article
                key={metric.label}
                className="glass-card metric-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                whileHover={{ y: -6 }}
              >
                <div className="metric-flare" aria-hidden="true" />
                <span className="metric-kicker">Milestone {index + 1}</span>
                <strong>
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </strong>
                <h3>{metric.label}</h3>
                <p>{metric.detail}</p>
              </motion.article>
            ))}
          </div>

          <motion.aside
            className="glass-card achievements-aside"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
          >
            <div className="aside-topline">
              <span className="card-icon">
                <FiZap />
              </span>
              <div>
                <h3>Momentum stack</h3>
                <p>Certifications and competition results that strengthen the portfolio story.</p>
              </div>
            </div>

            <div className="certification-list">
              {certifications.map((item) => (
                <div key={item} className="certification-item">
                  <span className="certification-marker">
                    <FiCheckCircle />
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="achievement-note">
              <span>Recent focus</span>
              <strong>Internship-ready frontend and full-stack execution</strong>
              <p>
                The current direction is to combine faster product building with stronger
                fundamentals so each new project looks sharper and works more reliably.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
