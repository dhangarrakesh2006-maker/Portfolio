import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiMail, FiSend } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function getApiBaseUrl() {
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL.replace(/\/$/, '');
  }

  return import.meta.env.DEV ? 'http://localhost:5000' : '';
}

export default function Contact({ owner, contactCards }) {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({ tone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ tone: '', message: '' });

    try {
      const response = await fetch(`${getApiBaseUrl()}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.message || 'Unable to send your message right now.');
      }

      setFormData(initialFormData);
      setStatus({
        tone: 'success',
        message: payload.message || 'Your message was sent successfully.',
      });
    } catch (error) {
      setStatus({
        tone: 'error',
        message: error.message || 'Something went wrong while sending the message.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" data-section className="section-band">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something clear, modern, and genuinely useful"
          description="Open to internships, collaborations, and practical product work. Reach out directly or send a message through the form."
        />

        <div className="contact-layout">
          <div className="contact-info">
            <motion.article
              className="glass-card contact-intro-card"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
            >
              <div className="hero-badges">
                <span className="info-chip availability-chip">
                  <span className="availability-dot" />
                  Available for internships
                </span>
                <span className="info-chip">Fast learner</span>
                <span className="info-chip">Open to remote work</span>
              </div>

              <h3>Direct contact works great too.</h3>
              <p>
                If you have an internship, freelance task, or project idea, send a quick note and
                I'll get back as soon as possible.
              </p>

              <a href={`mailto:${owner.email}`} className="text-link contact-note">
                <FiMail />
                {owner.email}
              </a>
            </motion.article>

            <div className="contact-card-grid">
              {contactCards.map(({ title, value, href, icon: Icon }, index) => {
                const isExternal = href.startsWith('http');

                return (
                  <motion.article
                    key={title}
                    className="glass-card contact-detail-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: index * 0.08, duration: 0.45 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="card-icon">
                      <Icon />
                    </div>
                    <span>{title}</span>
                    {href ? (
                      <a href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined}>
                        {value}
                        <FiArrowUpRight />
                      </a>
                    ) : (
                      <strong>{value}</strong>
                    )}
                  </motion.article>
                );
              })}
            </div>
          </div>

          <motion.form
            className="glass-card contact-form"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            onSubmit={handleSubmit}
          >
            <div className="contact-form-header">
              <h3>Send a message</h3>
              <p>Share a little context so I can reply in a more useful way.</p>
            </div>

            <div className="form-grid">
              <label>
                <span>Your name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                <span>Email address</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                />
              </label>
            </div>

            <label>
              <span>Subject</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Internship, collaboration, project idea..."
                required
              />
            </label>

            <label>
              <span>Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me what you would like to build or discuss."
                required
              />
            </label>

            {status.message ? (
              <p className={`form-status ${status.tone === 'success' ? 'is-success' : 'is-error'}`}>
                {status.message}
              </p>
            ) : null}

            <button type="submit" className="button button-primary submit-button" disabled={isSubmitting}>
              <FiSend />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
