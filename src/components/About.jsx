import { motion } from 'framer-motion';
import './About.css';

const teamMembers = [
  {
    initials: 'AS',
    name: 'Amarpreet Singh Kounsal',
    role: 'AI Engineer & Co-Founder',
    gradient: 'green-dark',
  },
  {
    initials: 'AK',
    name: 'Akashdeep Singh',
    role: 'Marketing Head & Co-Founder',
    gradient: 'green-cyan',
  },
  // {
  //   initials: 'ZR',
  //   name: 'Zain Rashid',
  //   role: 'UI/UX Designer',
  //   gradient: 'green-teal',
  // },
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
              At AMAKLABS, we believe technology should work for you, not the other way around.
              Our vision is to build software that removes friction. We design custom AI workflows and robust applications that fit your business like a glove—making advanced technology feel like second nature.
            </p>
            <p>
              As a reliable engineering partner, we don&rsquo;t just hand over code.
              We build, deploy, and actively support your systems to ensure zero business interruption.
              Whether you are automating spreadsheets into intelligent agents or launching a new mobile app, we deliver quality you can depend on.
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
