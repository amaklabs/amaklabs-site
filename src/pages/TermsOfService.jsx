import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

export function TermsOfService() {
  return (
    <div style={{
      backgroundColor: '#030303',
      color: '#ffffff',
      minHeight: '100vh',
      padding: '160px 0 100px',
    }}>
      <SEO 
        title="Terms of Service" 
        description="Review the terms of service for using the AMAKLABS website and engaging our software engineering and AI automation services." 
        path="/terms-of-service"
      />

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span style={{
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '2px',
            color: '#00DF89',
            textTransform: 'uppercase',
            marginBottom: '16px',
            display: 'inline-block',
          }}>
            Legal Compliance
          </span>
          
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(32px, 6vw, 48px)',
            fontWeight: '700',
            marginBottom: '12px',
            color: '#ffffff',
          }}>
            Terms of Service
          </h1>
          
          <p style={{ color: '#808080', fontSize: '14px', marginBottom: '40px' }}>
            Last Updated: June 12, 2026
          </p>

          <div style={{
            lineHeight: '1.7',
            color: '#d0d0d0',
            fontSize: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}>
            <section>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff', fontSize: '20px', marginBottom: '12px' }}>1. Terms</h2>
              <p>
                By accessing this website at https://amaklabs.com, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff', fontSize: '20px', marginBottom: '12px' }}>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on AMAKLABS' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff', fontSize: '20px', marginBottom: '12px' }}>3. Service Agreements</h2>
              <p>
                Any engagement for our AI automation, custom software, SaaS web development, or mobile application engineering services is governed by a separate, signed service level agreement and statement of work. The information on this website does not constitute a binding contract or guaranteed pricing.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff', fontSize: '20px', marginBottom: '12px' }}>4. Disclaimer</h2>
              <p>
                The materials on AMAKLABS' website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff', fontSize: '20px', marginBottom: '12px' }}>5. Revisions and Errata</h2>
              <p>
                The materials appearing on the website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff', fontSize: '20px', marginBottom: '12px' }}>6. Contact Us</h2>
              <p>
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <p style={{ marginTop: '8px', color: '#00DF89' }}>
                Email: support@amaklabs.com<br />
                WhatsApp: +91 79866 69482
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TermsOfService;
