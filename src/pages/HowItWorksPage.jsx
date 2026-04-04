import React from 'react';
import PageTransition from '../components/PageTransition';
import HowItWorks from '../components/HowItWorks';

const HowItWorksPage = () => {
  return (
    <PageTransition>
      <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
        <HowItWorks />
      </div>
    </PageTransition>
  );
};

export default HowItWorksPage;
