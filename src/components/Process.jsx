import { motion } from 'framer-motion';
import { Search, Compass, ShieldAlert, Rocket } from 'lucide-react';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Discover',
    icon: Search,
    description:
      'We deep-dive into your workflow, bottleneck processes, and user needs to build a concrete roadmap.',
  },
  {
    number: '02',
    title: 'Strategy & Architecture',
    icon: Compass,
    description:
      'We define the tech stack, API architecture, database structures, and design guidelines before coding.',
  },
  {
    number: '03',
    title: 'Incremental Build',
    icon: ShieldAlert, // Note: ShieldAlert represents secure, tested software cycles, or we can use another icon like Cpu/Wrench
    description:
      'We build, test, and ship in tight, weekly sprints. You see functional features early and often.',
  },
  {
    number: '04',
    title: 'Deploy & Scale',
    icon: Rocket,
    description:
      'We push to highly optimized production environments, monitor logs, and scale as your traffic grows.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stepVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Process() {
  return (
    <section className="process section" id="process">
      <div className="process__container container">
        <div className="process__split">
          {/* Left Column - Sticky Info */}
          <div className="process__left-col">
            <p className="section-label">HOW WE WORK</p>
            <h2 className="section-heading">
              Fast by design.<br />Never by accident.
            </h2>
            <p className="process__left-desc">
              Four strict stages that keep engineering aligned with business value. We focus on quick feedback, clear deliverables, and zero bloat.
            </p>
            <div className="process__left-indicator" aria-hidden="true" />
          </div>

          {/* Right Column - Timeline */}
          <div className="process__right-col">
            <div className="process__connector-line" aria-hidden="true" />

            <motion.div
              className="process__steps"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {steps.map((step) => {
                const StepIcon = step.icon;
                return (
                  <motion.article
                    key={step.number}
                    className="process__step"
                    variants={stepVariants}
                  >
                    <div className="process__step-header">
                      <span className="process__step-number">{step.number}</span>
                      <div className="process__step-icon">
                        <StepIcon size={16} />
                      </div>
                      <h3 className="process__step-title">{step.title}</h3>
                    </div>
                    <p className="process__step-desc">{step.description}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
