import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    name: 'AutoFlow AI',
    description:
      'AI-powered workflow engine coordinating APIs, documents, and messaging channels.',
    tags: ['AI Agents', 'Automation'],
    category: 'ai',
    gradient: 'linear-gradient(135deg, #021a10 0%, #030303 100%)',
    borderGlow: 'rgba(0, 223, 137, 0.15)',
  },
  {
    id: 2,
    name: 'NexaShop SaaS',
    description:
      'High-performance headless e-commerce backend built on modern edge frameworks.',
    tags: ['Web App', 'Next.js'],
    category: 'web',
    gradient: 'linear-gradient(135deg, #02141a 0%, #030303 100%)',
    borderGlow: 'rgba(0, 240, 255, 0.12)',
  },
  {
    id: 3,
    name: 'MediBot Agent',
    description:
      'HIPAA-compliant custom medical assistant resolving inquiries and booking schedules.',
    tags: ['AI Agent', 'HealthTech'],
    category: 'ai',
    gradient: 'linear-gradient(135deg, #0e051a 0%, #030303 100%)',
    borderGlow: 'rgba(124, 58, 237, 0.12)',
  },
  {
    id: 4,
    name: 'Trackr Mobile',
    description:
      'Real-time delivery logistics tracker app with live offline-first maps support.',
    tags: ['Mobile App', 'Flutter'],
    category: 'app',
    gradient: 'linear-gradient(135deg, #021a15 0%, #030303 100%)',
    borderGlow: 'rgba(0, 223, 137, 0.15)',
  },
  {
    id: 5,
    name: 'Insight Analytics',
    description:
      'Real-time dashboard visualizing clickstream events and pipeline telemetry.',
    tags: ['Web App', 'SaaS'],
    category: 'web',
    gradient: 'linear-gradient(135deg, #020c1a 0%, #030303 100%)',
    borderGlow: 'rgba(59, 130, 246, 0.12)',
  },
  {
    id: 6,
    name: 'VoiceSupport AI',
    description:
      'Low-latency voice automated agent handling inbound customer support calls.',
    tags: ['AI Voice', 'VoIP'],
    category: 'ai',
    gradient: 'linear-gradient(135deg, #1a0210 0%, #030303 100%)',
    borderGlow: 'rgba(236, 72, 153, 0.12)',
  },
];

const filters = [
  { label: 'All Projects', value: 'all' },
  { label: 'AI & Agents', value: 'ai' },
  { label: 'Web Platforms', value: 'web' },
  { label: 'Mobile Apps', value: 'app' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: {
      duration: 0.3,
    },
  },
};

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="portfolio section" id="portfolio">
      <div className="portfolio__container container">
        {/* Header */}
        <motion.div
          className="portfolio__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">OUR PORTFOLIO</p>
          <h2 className="portfolio__heading">
            Selected products, <span className="gradient-text">built to scale</span>.
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="portfolio__filters"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`portfolio__filter-btn${
                activeFilter === filter.value
                  ? ' portfolio__filter-btn--active'
                  : ''
              }`}
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={activeFilter === filter.value}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          className="portfolio__grid"
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                className="portfolio__card"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                style={{ '--glow-color': project.borderGlow }}
              >
                <div
                  className="portfolio__card-preview"
                  style={{ background: project.gradient }}
                >
                  <div className="portfolio__preview-glow" />
                  <div className="portfolio__preview-grid" />
                </div>

                <div className="portfolio__card-body">
                  <div className="portfolio__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="portfolio__tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="portfolio__card-title">{project.name}</h3>
                  <p className="portfolio__card-description">
                    {project.description}
                  </p>

                  <span className="portfolio__card-link">
                    Case study <ArrowRight size={14} className="portfolio__card-link-arrow" />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;
