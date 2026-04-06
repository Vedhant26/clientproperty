import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="Contact Us | Mahakal Property Dealer"
        description="Get in touch with Mahakal Property Dealer. We are here to answer your real estate queries and help you make the best investment decisions."
        url="https://mahakalpropertydealer.com/contact"
      />
      <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
        <Contact />
      </div>
    </PageTransition>
  );
};

export default ContactPage;
