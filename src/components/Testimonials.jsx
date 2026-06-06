import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Testimonials.css';

/* ── Testimonial Data ── */
const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'AMAKLABS transformed our business with a custom AI automation system. We cut manual work by 80% in the first month.',
    name: 'Ravi Sharma',
    company: 'CEO at NexaTech',
    initials: 'RS',
  },
  {
    id: 2,
    quote:
      'The website they built for us is absolutely stunning and converts like crazy. Best tech partner we have ever worked with.',
    name: 'Ayesha Khan',
    company: 'Founder at Shopline',
    initials: 'AK',
  },
  {
    id: 3,
    quote:
      'Their app development team delivered a flawless product on time. The UI feels premium and our users love it.',
    name: 'Omar Farooq',
    company: 'CPO at TrackrHQ',
    initials: 'OF',
  },
];

/* ── Star Rating ── */
function StarRating() {
  return (
    <div className="testimonial-stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className="testimonial-star"
          fill="#F59E0B"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

/* ── Card Variants ── */
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

/* ── Testimonial Card ── */
function TestimonialCard({ testimonial, index }) {
  return (
    <motion.article
      className="testimonial-card"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <span className="testimonial-quote-mark" aria-hidden="true">
        &ldquo;
      </span>

      <p className="testimonial-text">{testimonial.quote}</p>

      <StarRating />

      <div className="testimonial-client">
        <div className="testimonial-avatar">
          <span className="testimonial-initials">{testimonial.initials}</span>
        </div>
        <div className="testimonial-client-info">
          <span className="testimonial-name">{testimonial.name}</span>
          <span className="testimonial-company">{testimonial.company}</span>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Testimonials Section ── */
export function Testimonials() {
  return (
    <section className="testimonials-section" aria-label="Client testimonials">
      <motion.div
        className="testimonials-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="testimonials-label">What Clients Say</p>
        <h2 className="testimonials-heading">Trusted by Builders and Founders</h2>
      </motion.div>

      <div className="testimonials-carousel">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
