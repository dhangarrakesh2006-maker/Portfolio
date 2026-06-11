import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function About({ data }) {
  return (
    <section id="about" data-section className="section-band">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="A student developer building practical software with momentum"
          description="Rakesh is growing through product-focused projects, competitive programming, and a consistent effort to turn technical learning into usable software."
        />

        <div className="about-layout">
          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p>{data.owner.intro}</p>
            <p>
              Currently pursuing a B.Tech in Computer Science and Engineering (Data Science) at
              R. C. Patel Institute of Technology, he is building a strong foundation across web
              development, backend systems, and computer science fundamentals.
            </p>
            <p>
              The goal is simple: keep shipping better software, strengthen core engineering
              ability, and contribute to products that solve clear real-world problems.
            </p>

            <div className="facts-grid">
              {data.quickFacts.map((fact) => (
                <div key={fact.label} className="glass-card fact-card">
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="about-card-grid">
            {data.aboutCards.map(({ title, text, icon: Icon }, index) => (
              <motion.article
                key={title}
                className="glass-card feature-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                whileHover={{ y: -4 }}
              >
                <div className="card-icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
