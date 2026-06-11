import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ThreeCanvas } from '../components/ThreeCanvas';
import { ArrowRight, Bot, Database, Zap, ShieldAlert, Cpu } from 'lucide-react';
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

export function AiWorkflows() {
  return (
    <div className="service-page">
      <SEO 
        title="Custom AI Workflows & Autonomous Agents" 
        description="Automate spreadsheets and sync legacy databases with custom AI agents. Connect Slack or Teams bots to streamline operations. Request a proposal."
        path="/ai-workflows"
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
            <span className="section-label">AI & AUTOMATION</span>
            <h1 className="service-page__title">
              Custom AI Workflows <span className="gradient-text">& Agents</span>
            </h1>
            <p className="service-page__lead">
              Connect your legacy spreadsheets, databases, and APIs. We build custom agents that execute business logic, process files, and handle operations automatically.
            </p>
            <Link to="/contact" className="btn-primary">
              Book a workflow consultation <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            className="service-page__hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="visual-wrapper">
              <ThreeCanvas type="neural" />
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
            The Shift to <span className="gradient-text">Autonomous Operations</span>
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
                <li><span>❌</span> Employees manually copying data from emails to spreadsheets.</li>
                <li><span>❌</span> Lead responses delayed by hours, losing potential business.</li>
                <li><span>❌</span> Disconnected SaaS tools causing data entry errors and silos.</li>
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
                <li><span>⚡</span> AI workflows scan files and sync CRM systems in 3 seconds.</li>
                <li><span>⚡</span> Multi-agent systems route and reply to leads instantly.</li>
                <li><span>⚡</span> Automated dashboards highlight active workflow logs and syncs.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Details */}
      <section className="features-detail section">
        <div className="container">
          <div className="features-detail__header">
            <span className="section-label">HOW WE DELIVER VALUE</span>
            <h2 className="section-heading">Engineered for absolute accuracy</h2>
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
              <Bot className="feature-detail-card__icon" />
              <h3>Custom Reasoning Agents</h3>
              <p>We build tools that analyze invoices, categorize files, and draft contextual responses using customized LLM prompts, ensuring low halluncination rates.</p>
            </motion.div>

            <motion.div
              className="feature-detail-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.2}
            >
              <Database className="feature-detail-card__icon" />
              <h3>Database & API Syncs</h3>
              <p>Keep your data in harmony. We sync databases (Postgres, HubSpot, Airtable) instantly on triggering events, ensuring your business record is always uniform.</p>
            </motion.div>

            <motion.div
              className="feature-detail-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.3}
            >
              <Cpu className="feature-detail-card__icon" />
              <h3>Slack & Teams Bots</h3>
              <p>Control your AI workflows directly from your communication apps. Approve invoice generation, ask for support summaries, or trigger syncs with custom chat commands.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-final section">
        <div className="container">
          <div className="cta-final__box">
            <h2>Let's build a simpler business workflow.</h2>
            <p>Tell us about your manual processes and we'll draft a custom workflow proposal for your team.</p>
            <Link to="/contact" className="btn-primary">Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AiWorkflows;
