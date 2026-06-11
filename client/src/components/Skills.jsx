import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function Skills({ skillGroups }) {
  return (
    <section id="skills" data-section className="section-band section-contrast">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A balanced toolkit across frontend, backend, and core programming"
          description="The portfolio is centered on modern web development while continuing to build strength in programming fundamentals, databases, and practical engineering concepts."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              className="glass-card skill-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <div className="skill-card-top">
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.summary}</p>
                </div>
                <span className="skill-score">{group.level}%</span>
              </div>

              <div className="progress-track" aria-hidden="true">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${group.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                />
              </div>

              <div className="skill-pill-grid">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
