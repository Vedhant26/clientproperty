import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import Services from '../components/Services';
import Locations from '../components/Locations';

const ServicesPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="Our Services | Mahakal Property Dealer"
        description="We offer property buying, selling, renting, and investment advisory services. Let Mahakal Property Dealer handle your real estate needs professionally."
        url="https://mahakalpropertydealer.com/services"
      />
      <div style={{ paddingTop: '80px' }}>
        <Services />
        <Locations />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
