import { motion } from 'framer-motion';
import { About } from '../components/About';
import { ShieldCheck, HeartHandshake, Eye, Sparkles } from 'lucide-react';
import './AboutPage.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Uncompromised Reliability',
    desc: 'We treat uptime, security, and logging as critical features. Every pipeline we deploy is rigorously tested so it behaves exactly as expected.',
  },
  {
    icon: HeartHandshake,
    title: 'True Partnership',
    desc: 'We do not engage in standard transactional work. We act as your fractional CTO and AI partner, aligning technology directly with your business goals.',
  },
  {
    icon: Eye,
    title: 'Absolute Transparency',
    desc: 'No black boxes. We communicate progress in clear, weekly sprints, and provide documented architectures and clean, accessible source code.',
  },
  {
    icon: Sparkles,
    title: 'Simplification First',
    desc: 'We do not build complex software for the sake of complexity. We build tools that make operations simple, fast, and easy for your team to navigate.',
  },
];

export function AboutPage() {
  return (
    <div className="about-page">
      {/* Intro Banner */}
      <section className="about-page__hero section">
        <div className="container">
          <motion.div
            className="about-page__hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.1}
          >
            <span className="section-label">OUR MISSION</span>
            <h1 className="about-page__title">
              We build technology that removes <span className="gradient-text">complexity</span>.
            </h1>
            <p className="about-page__desc">
              AMAKLABS was founded by engineers who saw businesses struggling with manual bottlenecks and poorly integrated tools. We set out to change that by designing custom AI workflows, web platforms, and mobile apps that work seamlessly together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Founders Section (reusing About.jsx) */}
      <About />

      {/* Core Values Section */}
      <section className="about-page__values section">
        <div className="container">
          <motion.div
            className="about-page__values-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            custom={0.1}
          >
            <span className="section-label">HOW WE WORK</span>
            <h2 className="section-heading">Our Core Values</h2>
          </motion.div>

          <motion.div
            className="about-page__values-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.article
                  key={val.title}
                  className="value-card"
                  variants={fadeUp}
                  custom={idx * 0.1}
                >
                  <div className="value-card__icon-box">
                    <Icon size={20} />
                  </div>
                  <h3 className="value-card__title">{val.title}</h3>
                  <p className="value-card__desc">{val.desc}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
