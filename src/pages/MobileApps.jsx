import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ThreeCanvas } from '../components/ThreeCanvas';
import { ArrowRight, Smartphone, Compass, Cpu, Zap, Activity } from 'lucide-react';
import { SEO } from '../components/SEO';
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
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="service-page">
      <SEO 
        title="Custom Mobile App Development Proposal | Offline-First Sync" 
        description="Get a custom mobile app development proposal. We develop offline-first mobile app sync systems using Flutter and React Native for iOS & Android."
        path="/mobile-apps"
      />
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
              We design and develop cross platform applications using React Native and Flutter. Request a custom mobile app development proposal detailing local SQLite caching, offline-first mobile app sync, and fluid UI interaction.
            </p>
            <blockquote className="service-page__tldr-block" style={{ marginBottom: '32px' }}>
              <strong>TL;DR:</strong> AMAKLABS delivers cross platform app development cost efficiency with single-codebase architectures. We specialize in offline-first mobile database sync and custom API workflow triggers.
            </blockquote>
            <Link to="/contact" className="btn-primary">
              Build a mobile app <ArrowRight size={16} />
            </Link>
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

      {/* Comparison Table Section */}
      <section className="service-page__table-section">
        <h2>Mobile Framework Comparison</h2>
        <div className="service-page__table-wrapper">
          <table className="service-page__table">
            <thead>
              <tr>
                <th>Framework Type</th>
                <th>Performance Threshold</th>
                <th>Offline Reliability</th>
                <th>Development Cost efficiency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hybrid Web Shells</td>
                <td>Poor (Web render lags)</td>
                <td>Zero (Requires connection)</td>
                <td>Low (Wraps existing site)</td>
              </tr>
              <tr>
                <td>Cross-Platform (Flutter/RN)</td>
                <td>Excellent (60fps native UI)</td>
                <td>High (Local database syncing)</td>
                <td>Excellent (Single code repository)</td>
              </tr>
              <tr>
                <td>Native (Swift/Kotlin)</td>
                <td>Maximum (Hardware direct)</td>
                <td>High (Local database syncing)</td>
                <td>Poor (Separate codebase setups)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="service-page__faq-section">
        <h2 className="service-page__faq-heading">Frequently Asked Questions</h2>
        <div className="service-page__faq-list">
          {[
            {
              q: "What are the benefits of cross-platform mobile apps vs native apps?",
              a: "Cross-platform frameworks like Flutter or React Native compile to native machine binaries. This delivers true 60fps native feel while optimizing cross platform app development cost efficiency by using a single codebase."
            },
            {
              q: "How does offline-first database sync work in mobile apps?",
              a: "We store your data locally using encrypted SQLite caches (like Drift or WatermelonDB). When offline, the app enqueues actions and syncs with the server as soon as connection is re-established."
            },
            {
              q: "How do we request a custom mobile app development proposal?",
              a: "You can request a custom mobile app development proposal by contacting us. We draft detailed requirements, pricing structure, milestones, architecture layout, and complete deployment support for stores."
            },
            {
              q: "Can a mobile app trigger AI agents directly?",
              a: "Yes. The mobile app connects securely to your custom backend API endpoints, enabling users to trigger and monitor AI workflows from their mobile screen."
            },
            {
              q: "What is the average timeline to build a mobile app?",
              a: "A functional cross-platform MVP app with core features and API integrations takes roughly 4 to 6 weeks to fully develop, test, and submit."
            }
          ].map((faq, idx) => (
            <div 
              key={idx} 
              className={`service-faq-item${activeFaq === idx ? ' service-faq-item--active' : ''}`}
              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
            >
              <div className="service-faq-item__question">
                <span>{faq.q}</span>
                <span className="service-faq-item__toggle" />
              </div>
              <div className="service-faq-item__answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-final section">
        <div className="container">
          <div className="cta-final__box">
            <h2>Ready to launch your custom mobile app?</h2>
            <p>Tell us about your target users and we'll draft a mobile development proposal for your project.</p>
            <Link to="/contact" className="btn-primary">Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MobileApps;
