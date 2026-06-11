import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LinkedinIcon as Linkedin, InstagramIcon as Instagram, GithubIcon as Github, TwitterIcon as Twitter } from './SocialIcons';
import { LogoIcon } from './LogoIcon';
import './Footer.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'AI Workflows', href: '/ai-workflows' },
  { label: 'Web Dev', href: '/web-dev' },
  { label: 'Mobile Apps', href: '/mobile-apps' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/amaklabs', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/amaklabs', label: 'Instagram' },
  { icon: Github, href: 'https://github.com/amaklabs', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/amaklabs', label: 'Twitter' },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="footer__grid"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <LogoIcon className="footer__logo-icon" size={24} />
            <span className="footer__logo-text">
              amak<span className="footer__logo-text--light">labs</span>
            </span>
          </Link>
          <p className="footer__tagline">
            AI AUTOMATION SOLUTIONS
          </p>
        </div>

        {/* Navigation */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <ul className="footer__nav-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link className="footer__nav-link" to={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social */}
        <div className="footer__social">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              className="footer__social-link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copy">
          &copy; 2026 AMAKLABS. All rights reserved.
        </p>
        <div className="footer__legal">
          <Link to="/privacy-policy" className="footer__legal-link">Privacy Policy</Link>
          <span className="footer__legal-divider">|</span>
          <Link to="/terms-of-service" className="footer__legal-link">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
