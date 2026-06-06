import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LogoIcon } from './LogoIcon';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

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
        <a href="#home" className="navbar__logo" onClick={closeMobile}>
          <LogoIcon className="navbar__logo-icon" size={28} />
          <span className="navbar__logo-text">
            amak<span className="navbar__logo-text--light">labs</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="navbar__link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#contact" className="navbar__cta">
          <span className="navbar__cta-glow" aria-hidden="true" />
          Get a Quote
        </a>

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
              <motion.a
                key={item.href}
                href={item.href}
                className="navbar__mobile-link"
                onClick={closeMobile}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.25 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="navbar__mobile-cta"
              onClick={closeMobile}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.25 }}
            >
              Get a Quote
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
