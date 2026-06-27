import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function Education({ timeline }) {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.8', 'end 0.35'],
  });
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
  });

  return (
    <section id="education" data-section className="section-band">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Education"
          title="Academic progress with a strong base in engineering fundamentals"
          description="The learning path combines formal education with project work and day-to-day coding practice."
        />

        <div className="education-layout">
          <div className="timeline" ref={timelineRef}>
            <div className="timeline-track" aria-hidden="true" />
            <motion.div className="timeline-progress-line" style={{ scaleY: progressScale }} aria-hidden="true" />

            {timeline.map((item, index) => (
              <article key={`${item.year}-${item.title}`} className="timeline-item">
                <div className="timeline-marker">
                  <span />
                </div>

                <div className="glass-card timeline-card">
                  <div className="timeline-year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p className="timeline-subtitle">{item.subtitle}</p>

                  {item.image ? (
                    <div className="timeline-image-wrap">
                      <img
                        className="timeline-image"
                        src={item.image}
                        alt={`Photo of ${item.title}`}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          // try external placeholder if local file missing
                          const placeholder = `https://via.placeholder.com/800x450?text=${encodeURIComponent(
                            item.title,
                          )}`;
                          if (e.currentTarget.src === placeholder) {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) parent.classList.add('image-missing');
                          } else {
                            e.currentTarget.src = placeholder;
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <div className="timeline-image-wrap image-missing">
                      <div className="image-fallback">Photo not available</div>
                    </div>
                  )}

                  <p>{item.detail}</p>
                  <strong>{item.meta}</strong>
                </div>
              </article>
            ))}
          </div>

          <motion.aside
            className="glass-card education-summary"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <h3>Academic snapshot</h3>
            <p>
              Rakesh is currently in the second year of a B.Tech program in CSE (Data Science),
              balancing coursework with development projects and problem-solving practice.
            </p>

            <div className="education-stats">
              <div>
                <span>Current CGPA</span>
                <strong>7.8</strong>
              </div>
              <div>
                <span>Class 12</span>
                <strong>75%</strong>
              </div>
              <div>
                <span>Class 10</span>
                <strong>91%</strong>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
