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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
                placeholder="+92 300 0000000"
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

            <button type="submit" className="btn-primary contact__submit">
              <Send size={18} />
              Send Message
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
                <span className="contact__info-text">+91 98765 43210</span>
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
