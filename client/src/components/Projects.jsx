import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

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
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`glass-card project-card accent-${project.accent}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              whileHover={{ y: -6 }}
            >
              <div className="project-header">
                <span className="project-index">0{index + 1}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
