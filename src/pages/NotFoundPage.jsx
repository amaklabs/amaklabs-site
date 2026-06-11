import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { SEO } from '../components/SEO';

export function NotFoundPage() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 20px',
      backgroundColor: '#030303',
      color: '#ffffff',
      textAlign: 'center',
    }}>
      <SEO 
        title="404 Page Not Found" 
        description="The page you are looking for does not exist or has been moved. Return to the AMAKLABS homepage." 
        path="/404"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span style={{
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '2px',
          color: '#00DF89',
          border: '1px solid rgba(0, 223, 137, 0.15)',
          background: 'rgba(0, 223, 137, 0.03)',
          padding: '6px 16px',
          borderRadius: '100px',
          textTransform: 'uppercase',
          marginBottom: '24px',
          display: 'inline-block',
        }}>
          Error 404
        </span>

        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(48px, 10vw, 96px)',
          fontWeight: '800',
          lineHeight: '1.1',
          margin: '16px 0 24px',
          color: '#ffffff',
        }}>
          Lost in <span style={{
            background: 'linear-gradient(135deg, #00DF89 0%, #00F0FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>Space</span>
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#a0a0a0',
          maxWidth: '500px',
          margin: '0 auto 40px',
          lineHeight: '1.6',
        }}>
          The page you are looking for has either migrated, expired, or never existed in our codebase directory.
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          <Link to="/" className="btn-primary">
            <Home size={16} style={{ marginRight: '8px' }} />
            Back to Home
          </Link>
          <Link to="/contact" className="btn-ghost">
            Contact Support
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFoundPage;
