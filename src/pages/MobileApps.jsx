import { motion } from 'framer-motion';
import { ThreeCanvas } from '../components/ThreeCanvas';
import { ArrowRight, Smartphone, Compass, Cpu, Zap, Activity } from 'lucide-react';
import './ServicePage.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function MobileApps() {
  return (
    <div className="service-page">
      {/* Hero Header */}
      <header className="service-page__hero">
        <div className="container service-page__hero-grid">
          <motion.div
            className="service-page__hero-text"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.1}
          >
            <span className="section-label">MOBILE APPLICATIONS</span>
            <h1 className="service-page__title">
              Custom Mobile <span className="gradient-text">Apps</span>
            </h1>
            <p className="service-page__lead">
              We design and develop native iOS and Android apps using React Native and Flutter. Get smooth scroll interactions, offline data support, and custom integrations tailored to your mobile workflows.
            </p>
            <a href="/contact" className="btn-primary">
              Build a mobile app <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            className="service-page__hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="visual-wrapper">
              <ThreeCanvas type="sphere" />
            </div>
          </motion.div>
        </div>
      </header>

      {/* Before / After Transformation */}
      <section className="transformation section">
        <div className="container">
          <motion.h2
            className="section-heading text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Native feel, <span className="gradient-text">no compromises</span>
          </motion.h2>

          <div className="transformation__grid">
            <motion.div
              className="transformation__box transformation__box--before"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.1}
            >
              <h3 className="transformation__box-title">Before AMAKLABS</h3>
              <ul className="transformation__list">
                <li><span>❌</span> Laggy web-view shells masquerading as apps, frustrating users.</li>
                <li><span>❌</span> Total loss of functionality as soon as the user goes offline.</li>
                <li><span>❌</span> Dual teams writing separate iOS and Android codebases, doubling development budgets.</li>
              </ul>
            </motion.div>

            <motion.div
              className="transformation__box transformation__box--after"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.2}
            >
              <h3 className="transformation__box-title">After AMAKLABS</h3>
              <ul className="transformation__list">
                <li><span>⚡</span> Flawless, 60fps native list scrolls and micro-animations.</li>
                <li><span>⚡</span> Local SQLite caching keeping the app active even in low-connectivity zones.</li>
                <li><span>⚡</span> Unified Flutter/React Native source code, saving 50% on maintenance and updates.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Details */}
      <section className="features-detail section">
        <div className="container">
          <div className="features-detail__header">
            <span className="section-label">MOBILE EXCELLENCE</span>
            <h2 className="section-heading">Designed for fluid interaction</h2>
          </div>

          <div className="features-detail__grid">
            <motion.div
              className="feature-detail-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.1}
            >
              <Smartphone className="feature-detail-card__icon" />
              <h3>Cross-Platform Efficiency</h3>
              <p>We compile native binaries for App Store and Google Play using single-codebase architectures, reducing time-to-market dramatically.</p>
            </motion.div>

            <motion.div
              className="feature-detail-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.2}
            >
              <Compass className="feature-detail-card__icon" />
              <h3>Offline-First Syncing</h3>
              <p>Let your users input data, inspect details, and read logs without cellular service. The app pushes queued actions as soon as connection returns.</p>
            </motion.div>

            <motion.div
              className="feature-detail-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.3}
            >
              <Activity className="feature-detail-card__icon" />
              <h3>Direct API Integrations</h3>
              <p>Connect your mobile app directly to your custom backend and trigger AI agent workflows instantly from user interactions on the screen.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-final section">
        <div className="container">
          <div className="cta-final__box">
            <h2>Ready to launch your custom mobile app?</h2>
            <p>Tell us about your target users and we'll draft a mobile development proposal for your project.</p>
            <a href="/contact" className="btn-primary">Get Started</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MobileApps;
