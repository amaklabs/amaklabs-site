import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ParticleSwirl } from './ParticleSwirl';
import './Hero.css';

const WORDS = [
  'custom AI agents.',
  'next-gen SaaS.',
  'mobile applications.',
  'smart workflows.',
];

const TRUST_STATS = [
  { value: '24+', label: 'products shipped' },
  { value: '2-4 wks', label: 'avg. MVP launch' },
  { value: '100%', label: 'AI-equipped stack' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullWord = WORDS[wordIndex];

    const type = () => {
      setCurrentText((prev) => {
        if (isDeleting) {
          return fullWord.substring(0, prev.length - 1);
        } else {
          return fullWord.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && currentText === fullWord) {
        timer = setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % WORDS.length);
      } else {
        const speed = isDeleting ? 40 : 90;
        timer = setTimeout(type, speed);
      }
    };

    // If fully typed, wait for pause, otherwise run type/delete speed
    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else {
      timer = setTimeout(type, isDeleting && currentText === '' ? 500 : 80);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex]);

  return (
    <section id="home" className="hero">
      {/* 3D Particle Swirl background */}
      <ParticleSwirl />

      {/* Hero Content Overlay */}
      <motion.div
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero__left-col">
          {/* Badge pill */}
          <motion.div className="hero__badge" variants={fadeIn}>
            <span className="hero__badge-dot" aria-hidden="true" />
            AI-equipped automation studio
          </motion.div>

          {/* Typing Headline */}
          <motion.h1 className="hero__heading" variants={fadeUp}>
            We build
            <br />
            <span className="hero__heading-typing">
              {currentText}
              <span className="hero__heading-cursor" aria-hidden="true">|</span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p className="hero__subheading" variants={fadeUp}>
            AMAKLABS is a modern software studio, AI-native from day one.
            We automate repetitive work, build flawless SaaS platforms,
            and design digital products that scale.
          </motion.p>

          {/* CTA Row */}
          <motion.div className="hero__cta-row" variants={fadeUp}>
            <a href="#contact" className="btn-primary">
              Start a project
              <ArrowRight size={16} />
            </a>
            <a href="#portfolio" className="btn-ghost">
              See what we build
            </a>
          </motion.div>

          {/* Trust stats */}
          <motion.div className="hero__trust" variants={fadeUp}>
            {TRUST_STATS.map((stat) => (
              <div className="hero__trust-item" key={stat.label}>
                <span className="hero__trust-value">{stat.value}</span>
                <span className="hero__trust-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
