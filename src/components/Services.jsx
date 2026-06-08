import { motion } from 'framer-motion';
import { Brain, Globe, Smartphone, Mail, MessageSquare, Cpu, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { AnimatedFlow } from './AnimatedFlow';
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
            Services engineered to <span className="gradient-text">simplify operations</span> and scale.
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
              <h3 className="service-card__title">AI Workflows & Custom Agents</h3>
              <p className="service-card__description">
                We build custom AI agents that integrate deep reasoning into your day-to-day tools—automating data entry, document processing, and customer routing.
              </p>
              <ul className="service-card__features">
                <li><span className="service-card__bullet" /> Custom LLM & Database Syncs</li>
                <li><span className="service-card__bullet" /> Slack & Teams Workflow Bots</li>
                <li><span className="service-card__bullet" /> Lead & Invoice Automations</li>
              </ul>
              <a href="#contact" className="service-card__link">
                Build an agent <ArrowRight size={14} />
              </a>
            </div>

            {/* Anime.js Animated Flowchart */}
            <AnimatedFlow />
          </motion.article>

          {/* Card 2: Web Dev (1-col) */}
          <motion.article className="service-card" variants={cardVariants}>
            <div className="service-card__icon">
              <Globe />
            </div>
            <h3 className="service-card__title">SaaS & Web Platforms</h3>
            <p className="service-card__description">
              High-performance, secure web applications built on React and Next.js. We deliver responsive client portals and administrative dashboards optimized for speed.
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
              Native iOS and Android apps built with Flutter or React Native. We ensure offline support, smooth user flows, and direct integration with your business APIs.
            </p>
            <a href="#contact" className="service-card__link">
              Build mobile <ArrowRight size={14} />
            </a>
          </motion.article>

          {/* Card 5: Production Reliability (1-col) */}
          <motion.article className="service-card" variants={cardVariants}>
            <div className="service-card__icon">
              <ShieldCheck />
            </div>
            <h3 className="service-card__title">Production Reliability</h3>
            <p className="service-card__description">
              No messy handoffs. We build with strict testing protocols, secure data environments, and clean code, ensuring your systems run 24/7 without friction.
            </p>
            <a href="#contact" className="service-card__link">
              Work with us <ArrowRight size={14} />
            </a>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
