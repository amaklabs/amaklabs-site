import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  MessageCircle,
  MapPin,
} from 'lucide-react';
import {
  LinkedinIcon as Linkedin,
  InstagramIcon as Instagram,
  GithubIcon as Github,
  TwitterIcon as Twitter,
} from './SocialIcons';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('https://n8n.amaklabs.com/webhook/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="contact__container container">
        {/* Header */}
        <motion.div
          className="contact__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="section-label">LET&rsquo;S BUILD TOGETHER</p>
          <h2 className="section-heading">
            Start Your Project <span className="gradient-text">Today</span>
          </h2>
          <p className="contact__subtext">
            Tell us about your idea and we&rsquo;ll get back to you within 24
            hours.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Left — Form */}
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0.2}
          >
            <label className="contact__label">
              <span className="contact__label-text">Name</span>
              <input
                type="text"
                name="name"
                className="contact__input"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className="contact__label">
              <span className="contact__label-text">Email</span>
              <input
                type="email"
                name="email"
                className="contact__input"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="contact__label">
              <span className="contact__label-text">
                Phone
                <span className="contact__label-optional">(optional)</span>
              </span>
              <input
                type="tel"
                name="phone"
                className="contact__input"
                placeholder="+91 79866 69482"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>

            <label className="contact__label">
              <span className="contact__label-text">What do you need?</span>
              <select
                name="service"
                className="contact__select"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="ai-automation">AI Automation</option>
                <option value="web-development">Web Development</option>
                <option value="app-development">App Development</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label className="contact__label">
              <span className="contact__label-text">Message</span>
              <textarea
                name="message"
                className="contact__textarea"
                placeholder="Tell us about your project..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            {status === 'success' && (
              <motion.div
                className="contact__success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you! Your message has been sent successfully. We will get back to you and send you a follow-up link to connect soon.
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                className="contact__error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Oops! Something went wrong. Please try again or reach out to us directly.
              </motion.div>
            )}

            <button
              type="submit"
              className="btn-primary contact__submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>

          {/* Right — Info cards */}
          <div className="contact__info">
            <motion.div
              className="contact__info-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0.3}
            >
              <Mail size={24} className="contact__info-icon" />
              <div>
                <span className="contact__info-label">Email</span>
                <span className="contact__info-text">support@amaklabs.com</span>
              </div>
            </motion.div>

            <motion.div
              className="contact__info-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0.5}
            >
              <MessageCircle size={24} className="contact__info-icon" />
              <div>
                <span className="contact__info-label">WhatsApp</span>
                <span className="contact__info-text">+91 79866 69482</span>
              </div>
            </motion.div>

            <motion.div
              className="contact__info-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0.7}
            >
              <MapPin size={24} className="contact__info-icon" />
              <div>
                <span className="contact__info-label">Location</span>
                <span className="contact__info-text">India</span>
              </div>
            </motion.div>

            <motion.div
              className="contact__socials-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0.9}
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
