import { motion } from 'framer-motion';
import './About.css';

const teamMembers = [
  {
    initials: 'AK',
    name: 'Amaan Khan',
    role: 'AI Engineer & Founder',
    gradient: 'green-dark',
  },
  {
    initials: 'SK',
    name: 'Sara Kumar',
    role: 'Full Stack Developer',
    gradient: 'green-cyan',
  },
  {
    initials: 'ZR',
    name: 'Zain Rashid',
    role: 'UI/UX Designer',
    gradient: 'green-teal',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function About() {
  return (
    <section id="about" className="about section">
      <div className="about__container container">
        {/* Header */}
        <motion.div
          className="about__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="section-label">WHO WE ARE</p>
          <h2 className="section-heading">
            The Minds Behind <span className="gradient-text">AMAKLABS</span>
          </h2>
        </motion.div>

        <div className="about__grid">
          {/* Left column — Mission */}
          <motion.div
            className="about__mission"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0.2}
          >
            <p>
              AMAKLABS is a team of engineers, designers, and AI specialists
              obsessed with building technology that matters. We don&rsquo;t just
              write code — we architect solutions that drive real results.
            </p>
            <p>
              Founded with a vision to make cutting-edge AI accessible to
              businesses of all sizes, we combine deep technical expertise with
              creative problem-solving to deliver solutions that truly transform
              operations.
            </p>
          </motion.div>

          {/* Right column — Team cards */}
          <div className="about__team">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="about__member-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={index * 0.2 + 0.3}
              >
                <div className={`about__avatar about__avatar--${member.gradient}`}>
                  {member.initials}
                </div>
                <div className="about__member-info">
                  <span className="about__member-name">{member.name}</span>
                  <span className="about__member-role">{member.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
