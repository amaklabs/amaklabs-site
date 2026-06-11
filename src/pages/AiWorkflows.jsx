import { useState } from 'react';
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
  const [activeFaq, setActiveFaq] = useState(null);

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
            <blockquote className="service-page__tldr-block" style={{ marginBottom: '32px' }}>
              <strong>TL;DR:</strong> AMAKLABS builds custom AI agent systems connecting databases and legacy tools. By automating text analysis, routing, and operations, we remove human overhead with maximum security boundaries.
            </blockquote>
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

      {/* Comparison Table Section */}
      <section className="service-page__table-section">
        <h2>Automation Strategy Comparison</h2>
        <div className="service-page__table-wrapper">
          <table className="service-page__table">
            <thead>
              <tr>
                <th>Metric / Capability</th>
                <th>Standard Scripts</th>
                <th>Visual Workflows</th>
                <th>Autonomous Agents</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Decision Engine</td>
                <td>Static rules</td>
                <td>Hard-coded filters</td>
                <td>Semantic Reasoning</td>
              </tr>
              <tr>
                <td>Data Format support</td>
                <td>Structured only</td>
                <td>Needs pre-parsers</td>
                <td>Handles raw files/mails</td>
              </tr>
              <tr>
                <td>Error Handling</td>
                <td>Halts / Script crash</td>
                <td>Halts execution</td>
                <td>Heuristic recovery</td>
              </tr>
              <tr>
                <td>Maintenance overhead</td>
                <td>High developer effort</td>
                <td>Medium configuration</td>
                <td>Low operational friction</td>
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
              q: "What is the main benefit of custom AI agents?",
              a: "Direct context understanding. Unlike standard static script integrations, AI agents parse natural language instructions, emails, and unstructured PDFs, executing reasoning-based operations automatically."
            },
            {
              q: "Do AI agents connect with existing databases?",
              a: "Yes. We synchronize autonomous agents directly with database engines (like Postgres) and SaaS APIs (like HubSpot and Slack) without modifying your current infrastructure."
            },
            {
              q: "How do you prevent AI model hallucinations?",
              a: "We implement strict boundary rules, anchor generation using secure retrieval (RAG) structures, and add human approvals for actions like payments and notifications."
            },
            {
              q: "How secure are these AI workflow setups?",
              a: "Fully secure. We build integrations using strict CORS rules, encrypt all API tokens securely, and execute models inside isolated serverless container networks."
            },
            {
              q: "What is the average timeline to build an agent?",
              a: "We design, develop, test, and ship custom AI agent MVPs within a rapid 2-to-4 week development window."
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
