import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import HowItWorks from '../components/HowItWorks';

const HowItWorksPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="How It Works | Mahakal Property Dealer"
        description="Understanding our transparent step-by-step process for buying, selling, or investing in real estate with Mahakal Property Dealer."
        url="https://mahakalpropertydealer.com/how-it-works"
      />
      <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
        <HowItWorks />
      </div>
    </PageTransition>
  );
};

export default HowItWorksPage;
