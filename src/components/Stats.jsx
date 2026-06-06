import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

/* ── useCountUp Hook ── */
function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [target, duration]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [animate]);

  return { ref, count };
}

/* ── Stat Data ── */
const STATS = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 3, suffix: '', label: 'Core Services' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

/* ── StatItem Component ── */
function StatItem({ value, suffix, label }) {
  const { ref, count } = useCountUp(value, 2000);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number">
        {count}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

/* ── Stats Section ── */
export function Stats() {
  return (
    <section className="stats-section" aria-label="Company statistics">
      <motion.div
        className="stats-inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="stats-grid">
          {STATS.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
