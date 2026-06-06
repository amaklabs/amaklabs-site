import { motion } from 'framer-motion';
import { Brain, Globe, Smartphone, Mail, MessageSquare, Cpu, Zap, Sparkles, ArrowRight } from 'lucide-react';
import './Services.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Services() {
  return (
    <section id="services" className="services section">
      <div className="services__container container">
        {/* Header */}
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">WHAT WE BUILD</p>
          <h2 className="section-heading">
            Services designed to <span className="gradient-text">ship</span>, not just to spec.
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Card 1: AI Automation (Wide, 2-cols) */}
          <motion.article className="service-card service-card--wide" variants={cardVariants}>
            <div className="service-card__main">
              <div className="service-card__icon">
                <Brain />
              </div>
              <h3 className="service-card__title">AI Automation & Custom Agents</h3>
              <p className="service-card__description">
                We build autonomous agents and cognitive workflows that integrate deep reasoning into your operations, connecting APIs, databases, and LLM pipelines.
              </p>
              <ul className="service-card__features">
                <li><span className="service-card__bullet" /> Custom LLM & RAG Systems</li>
                <li><span className="service-card__bullet" /> Slack & Teams Agent Integrations</li>
                <li><span className="service-card__bullet" /> Automated Data Pipeline Syncs</li>
              </ul>
              <a href="#contact" className="service-card__link">
                Build an agent <ArrowRight size={14} />
              </a>
            </div>

            {/* Visual Flow Representation (react-flow-architect inspired) */}
            <div className="service-card__visual" aria-hidden="true">
              <div className="flow-node flow-node--trigger">
                <Mail size={16} className="flow-node__icon" />
                <span className="flow-node__label">Trigger</span>
                <span className="flow-node__desc">Customer Email</span>
              </div>
              <div className="flow-line">
                <div className="flow-line__pulse" />
              </div>
              <div className="flow-node flow-node--agent">
                <Cpu size={16} className="flow-node__icon" />
                <span className="flow-node__label">AI Agent</span>
                <span className="flow-node__desc">Reasoning & Tool Call</span>
              </div>
              <div className="flow-line">
                <div className="flow-line__pulse flow-line__pulse--delayed" />
              </div>
              <div className="flow-node flow-node--action">
                <MessageSquare size={16} className="flow-node__icon" />
                <span className="flow-node__label">Action</span>
                <span className="flow-node__desc">Slack Notification</span>
              </div>
            </div>
          </motion.article>

          {/* Card 2: Web Dev (1-col) */}
          <motion.article className="service-card" variants={cardVariants}>
            <div className="service-card__icon">
              <Globe />
            </div>
            <h3 className="service-card__title">SaaS & Web Apps</h3>
            <p className="service-card__description">
              Blazing-fast, responsive web platforms built on React, Next.js, or Vite, optimized for high conversion and premium feel.
            </p>
            <a href="#contact" className="service-card__link">
              Explore web dev <ArrowRight size={14} />
            </a>
          </motion.article>

          {/* Card 3: 2-4 Weeks MVP (1-col) */}
          <motion.article className="service-card" variants={cardVariants}>
            <div className="service-card__icon">
              <Zap />
            </div>
            <h3 className="service-card__title">2-4 Week MVP Cycle</h3>
            <p className="service-card__description">
              Fast shipping is inside our culture. We scope, design, and ship functional MVPs in weeks, letting you iterate on real data.
            </p>
            <a href="#contact" className="service-card__link">
              Launch fast <ArrowRight size={14} />
            </a>
          </motion.article>

          {/* Card 4: Mobile Applications (1-col) */}
          <motion.article className="service-card" variants={cardVariants}>
            <div className="service-card__icon">
              <Smartphone />
            </div>
            <h3 className="service-card__title">Custom Mobile Apps</h3>
            <p className="service-card__description">
              Native iOS and Android applications built using React Native or Flutter, featuring seamless user experiences.
            </p>
            <a href="#contact" className="service-card__link">
              Build mobile <ArrowRight size={14} />
            </a>
          </motion.article>

          {/* Card 5: Aesthetic Craft (1-col) */}
          <motion.article className="service-card" variants={cardVariants}>
            <div className="service-card__icon">
              <Sparkles />
            </div>
            <h3 className="service-card__title">Obsessive Design Quality</h3>
            <p className="service-card__description">
              Every transition, shadow, and interaction is designed to feel buttery smooth and premium. Design speaks first.
            </p>
            <a href="#contact" className="service-card__link">
              See guidelines <ArrowRight size={14} />
            </a>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
