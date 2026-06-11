import { Contact } from '../components/Contact';
import { SEO } from '../components/SEO';
import './ContactPage.css';

export function ContactPage() {
  return (
    <div className="contact-page">
      <SEO 
        title="Start a Project & Get a Software Quote" 
        description="Ready to engineer intelligent software or automate workflows? Contact our engineering team today to receive a custom proposal. Send a message."
        path="/contact"
      />
      <Contact />
    </div>
  );
}

export default ContactPage;
