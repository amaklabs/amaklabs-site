import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { LogoIcon } from './LogoIcon';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'AI Workflows', href: '/ai-workflows' },
  { label: 'Web Dev', href: '/web-dev' },
  { label: 'Mobile Apps', href: '/mobile-apps' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

const MotionLink = motion(Link);

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={closeMobile}>
          <LogoIcon className="navbar__logo-icon" size={28} />
          <span className="navbar__logo-text">
            amak<span className="navbar__logo-text--light">labs</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link to={item.href} className="navbar__link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link to="/contact" className="navbar__cta" onClick={closeMobile}>
          <span className="navbar__cta-glow" aria-hidden="true" />
          Get a Quote
        </Link>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile-drawer navbar__mobile-drawer--open"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {NAV_ITEMS.map((item, i) => (
              <MotionLink
                key={item.href}
                to={item.href}
                className="navbar__mobile-link"
                onClick={closeMobile}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.25 }}
              >
                {item.label}
              </MotionLink>
            ))}
            <MotionLink
              to="/contact"
              className="navbar__mobile-cta"
              onClick={closeMobile}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.25 }}
            >
              Get a Quote
            </MotionLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
