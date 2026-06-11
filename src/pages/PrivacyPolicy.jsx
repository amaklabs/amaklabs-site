import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

export function PrivacyPolicy() {
  return (
    <div style={{
      backgroundColor: '#030303',
      color: '#ffffff',
      minHeight: '100vh',
      padding: '160px 0 100px',
    }}>
      <SEO 
        title="Privacy Policy" 
        description="Read the privacy policy for AMAKLABS. Learn how we collect, store, protect, and use your personal information and contact details." 
        path="/privacy-policy"
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
            Privacy Policy
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
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff', fontSize: '20px', marginBottom: '12px' }}>1. Introduction</h2>
              <p>
                Welcome to AMAKLABS ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, and share your personal data when you visit our website (https://amaklabs.com) or submit a project query through our contact form.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff', fontSize: '20px', marginBottom: '12px' }}>2. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our services. This includes:
              </p>
              <ul style={{ paddingLeft: '20px', marginTop: '8px', listStyleType: 'disc' }}>
                <li>Name / Full Name</li>
                <li>Email address</li>
                <li>Phone number (optional)</li>
                <li>Subject interest (e.g., AI Automation, Web/Mobile App development)</li>
                <li>Message and details about your project</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff', fontSize: '20px', marginBottom: '12px' }}>3. How We Use Your Data</h2>
              <p>
                We process your personal information for purposes based on legitimate business interests, including:
              </p>
              <ul style={{ paddingLeft: '20px', marginTop: '8px', listStyleType: 'disc' }}>
                <li>To contact you and respond to your quotes, queries, and proposals.</li>
                <li>To send follow-up connection or meeting links to build software solutions.</li>
                <li>To maintain business logging safety records and block webhook misuse.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff', fontSize: '20px', marginBottom: '12px' }}>4. Data Protection & Security</h2>
              <p>
                We execute standard technical security actions to protect the safety of your data. The submissions are transmitted securely via HTTPS and processed securely. However, please remember that no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff', fontSize: '20px', marginBottom: '12px' }}>5. Contact Us</h2>
              <p>
                If you have questions, comments, or requests to delete or update your personal data, please contact us directly at:
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

export default PrivacyPolicy;
