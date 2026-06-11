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
  return (
    <div className="service-page">
      <SEO 
        title="Custom Web Platforms & React SaaS Apps" 
        description="Bespoke SaaS platforms and web portals built on React and Next.js. Deliver lightning-fast performance and clean UI/UX designs. Build a platform."
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
              We design and engineer high-performance web platforms that engage users and convert visitors. From administrative panels to customer portal dashboards, we build clean, lightning-fast interfaces.
            </p>
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
