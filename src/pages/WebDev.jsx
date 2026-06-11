import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ThreeCanvas } from '../components/ThreeCanvas';
import { ArrowRight, Globe, Code2, Gauge, Server, Cpu } from 'lucide-react';
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

export function WebDev() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="service-page">
      <SEO 
        title="Next.js SaaS Development Agency | React SaaS Platforms" 
        description="We are a Next.js SaaS development agency specializing in React SaaS platform development. We engineer high-performance custom SaaS platforms and web portals."
        path="/web-dev"
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
            <span className="section-label">WEB & SAAS</span>
            <h1 className="service-page__title">
              SaaS & Web <span className="gradient-text">Platforms</span>
            </h1>
            <p className="service-page__lead">
              We are a Next.js SaaS development agency designing high-performance custom web systems. From customer portal dashboards to React SaaS platform development, we build clean, lightning-fast interfaces.
            </p>
            <blockquote className="service-page__tldr-block" style={{ marginBottom: '32px' }}>
              <strong>TL;DR:</strong> AMAKLABS is a premier Next.js SaaS development agency. We engineer responsive React SaaS platform development projects with custom API routing, sub-second edge loads, and optimized Core Web Vitals.
            </blockquote>
            <Link to="/contact" className="btn-primary">
              Build a platform <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            className="service-page__hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="visual-wrapper">
              <ThreeCanvas type="torus" />
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
            Speed is a <span className="gradient-text">competitive advantage</span>
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
                <li><span>❌</span> Legacy WordPress systems loading in 6+ seconds, leading to drop-offs.</li>
                <li><span>❌</span> Fragile plugin architectures requiring constant maintenance and security patches.</li>
                <li><span>❌</span> Hard-coded layouts that break on tablets and mobile devices.</li>
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
                <li><span>⚡</span> Jamstack and React apps with sub-second page loads.</li>
                <li><span>⚡</span> Bespoke codebases with clean routing, strict typescript, and zero plugin bloat.</li>
                <li><span>⚡</span> Fully responsive grids ensuring pixel-perfect layout on all viewport widths.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Details */}
      <section className="features-detail section">
        <div className="container">
          <div className="features-detail__header">
            <span className="section-label">OUR WEB SYSTEM DNA</span>
            <h2 className="section-heading">Built to last, styled to impress</h2>
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
              <Code2 className="feature-detail-card__icon" />
              <h3>React & Next.js Mastery</h3>
              <p>We leverage Server Components, API routes, and optimized image loaders to keep bundle sizes lean, making navigation buttery smooth.</p>
            </motion.div>

            <motion.div
              className="feature-detail-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.2}
            >
              <Gauge className="feature-detail-card__icon" />
              <h3>Core Web Vitals Focus</h3>
              <p>We build with performance in mind. High contrast ratios, zero cumulative layout shifts, and rapid first contentful paints are our standards.</p>
            </motion.div>

            <motion.div
              className="feature-detail-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.3}
            >
              <Server className="feature-detail-card__icon" />
              <h3>Secure Cloud Architecture</h3>
              <p>We deploy using edge hosting (Vercel, AWS CloudFront) and configure strict CORS policies and environment management to keep your platforms bulletproof.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="service-page__table-section">
        <h2>Rendering Architecture Comparison</h2>
        <div className="service-page__table-wrapper">
          <table className="service-page__table">
            <thead>
              <tr>
                <th>Rendering Architecture</th>
                <th>SEO Readiness</th>
                <th>First Page Paint</th>
                <th>SaaS Application Suitability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jamstack (Static)</td>
                <td>Excellent</td>
                <td>Instant (CDN-cached)</td>
                <td>Best for marketing / landing pages</td>
              </tr>
              <tr>
                <td>SSR (Server-Side)</td>
                <td>Excellent</td>
                <td>Fast (Server compiled)</td>
                <td>Best for interactive dashboards / portals</td>
              </tr>
              <tr>
                <td>SPA (Client-Side)</td>
                <td>Poor (Delayed JS)</td>
                <td>Slow (JS bundle dependent)</td>
                <td>Best for internal-only web tools</td>
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
              q: "Why is site loading speed critical for SaaS?",
              a: "Customer retention. Users bounce if loading takes longer than 2 seconds. In addition, Core Web Vitals (like LCP and CLS) determine your public domain search ranking."
            },
            {
              q: "What services does a Next.js SaaS development agency provide?",
              a: "We provide complete React SaaS platform development, static site compilation using Astro, API integrations, edge CDN deployments, and database configuration tailored for fast user growth."
            },
            {
              q: "How do you secure SaaS applications?",
              a: "We configure strict Cross-Origin Resource Sharing (CORS) rules, establish robust environment parameter storage, and deploy security headers across edge CDN hosting."
            },
            {
              q: "Are custom platforms mobile responsive?",
              a: "Yes. All platforms use custom responsive grid alignments to render pixel-perfect interfaces across all viewing widths, from mobile phones to high-res displays."
            },
            {
              q: "How is database security handled in SaaS platform development agency projects?",
              a: "We connect to modern databases like PostgreSQL securely using pooled connections, execute raw queries through validated ORMs, and separate configuration parameters using strict environment parameters."
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
            <h2>Ready to build your next custom web platform?</h2>
            <p>Tell us about your requirements and we'll engineer a high-performance solution for your business.</p>
            <Link to="/contact" className="btn-primary">Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WebDev;
