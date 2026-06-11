import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { Portfolio } from '../components/Portfolio';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
import { SEO } from '../components/SEO';

export function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AMAKLABS",
    "url": "https://amaklabs.com",
    "logo": "https://amaklabs.com/favicon.svg",
    "description": "AMAKLABS designs and engineers custom AI workflows, SaaS web platforms, and native mobile applications that automate business processes.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-79866-69482",
      "contactType": "customer service",
      "email": "support@amaklabs.com",
      "areaServed": "IN",
      "availableLanguage": ["en"]
    },
    "sameAs": [
      "https://linkedin.com/company/amaklabs",
      "https://github.com/amaklabs",
      "https://twitter.com/amaklabs",
      "https://instagram.com/amaklabs"
    ]
  };

  return (
    <>
      <SEO 
        title="AI Automation Agency & Custom Software" 
        description="AI Automation Agency & custom software. Scale operations with intelligent workflows, web platforms, and mobile apps. Book a free consultation."
        path="/"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Portfolio />
      <Stats />
      <Testimonials />
    </>
  );
}

export default Home;
