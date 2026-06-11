import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import SectionHeading from './SectionHeading';

export default function Achievements({ metrics, certifications }) {
  return (
    <section id="achievements" data-section className="section-band">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Achievements"
          title="Competitive programming consistency backed by certifications and results"
          description="This section captures performance highlights, coding discipline, and recognitions earned while building technical depth."
        />

        <div className="achievements-layout">
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <motion.article
                key={metric.label}
                className="glass-card metric-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
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
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <h3>Certifications and recognition</h3>
            <p>
              Academic progress is supported by consistent coding practice, certification-backed
              learning, and competitive participation.
            </p>

            <div className="certification-list">
              {certifications.map((certificate) => (
                <div key={certificate} className="certification-item">
                  <span className="certification-marker" />
                  <p>{certificate}</p>
                </div>
              ))}
            </div>

            <div className="achievement-note">
              <span>Buildathon highlight</span>
              <strong>2nd Runner-Up at AI Buildathon, Jalgaon</strong>
              <p>Strong proof of collaborative execution and applied problem solving.</p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
