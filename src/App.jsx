import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy load page components to optimize bundle size and eliminate loading bottlenecks
const Home = lazy(() => import('./pages/Home'));
const AiWorkflows = lazy(() => import('./pages/AiWorkflows'));
const WebDev = lazy(() => import('./pages/WebDev'));
const MobileApps = lazy(() => import('./pages/MobileApps'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));
const BlogDashboard = lazy(() => import('./pages/BlogDashboard'));

// Minimal fallback spinner
function PageLoader() {
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#030303', 
      color: '#00DF89'
    }}>
      <div style={{ 
        border: '3px solid rgba(0, 223, 137, 0.1)', 
        borderTop: '3px solid #00DF89', 
        borderRadius: '50%', 
        width: '40px', 
        height: '40px', 
        animation: 'spin 0.8s linear infinite' 
      }} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-workflows" element={<AiWorkflows />} />
          <Route path="/web-dev" element={<WebDev />} />
          <Route path="/mobile-apps" element={<MobileApps />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/dashboard" element={<BlogDashboard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
