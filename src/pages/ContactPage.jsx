import React from 'react';
import PageTransition from '../components/PageTransition';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <PageTransition>
      <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
        <Contact />
      </div>
    </PageTransition>
  );
};

export default ContactPage;
