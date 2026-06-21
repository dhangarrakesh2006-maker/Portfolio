import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const previewThemes = {
  cyan: {
    labels: ['Tracking', 'Insights', 'Budget'],
    bars: [84, 56, 72, 91],
  },
  purple: {
    labels: ['Banking', 'Transfer', 'Security'],
    bars: [64, 88, 58, 74],
  },
  slate: {
    labels: ['Attendance', 'Reports', 'Records'],
    bars: [92, 61, 77, 56],
  },
};

export default function Projects({ projects }) {
  return (
    <section id="projects" data-section className="section-band section-contrast">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected builds across finance, academics, and workflow-focused interfaces"
          description="These featured projects show a mix of React, JavaScript, Python, and Flask work aimed at useful dashboards, calculators, and management tools."
        />

        <div className="projects-grid">
          {projects.map((project, index) => {
            const theme = previewThemes[project.accent] || previewThemes.cyan;

            return (
              <motion.article
                key={project.title}
                className={`glass-card project-card accent-${project.accent}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                whileHover={{ y: -6 }}
              >
                <div className="project-topline">
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-status">Featured build</span>
                </div>

                <div className="project-visual" data-cursor="highlight">
                  <div className="project-visual-stage">
                    <div className="project-browser-chrome">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="project-screen">
                      <div className="project-screen-main">
                        <span className="project-screen-badge">{project.tech[0]}</span>
                        <div className="project-screen-wave" />
                        <div className="project-screen-bars">
                          {theme.bars.map((bar, barIndex) => (
                            <span key={`${project.title}-${barIndex}`} style={{ height: `${bar}%` }} />
                          ))}
                        </div>
                      </div>

                      <div className="project-screen-side">
                        {theme.labels.map((label) => (
                          <span key={label} className="project-side-chip">
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="tech-badges">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-link">
                      <FiGithub />
                      GitHub
                    </a>
                  ) : (
                    <span className="project-meta-text">Repository details available on request</span>
                  )}

                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-link">
                      <FiArrowUpRight />
                      Live Demo
                    </a>
                  ) : (
                    <span className="project-meta-text">Live demo not published</span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
