import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import Owner from '../components/Owner';
import WhyChooseUs from '../components/WhyChooseUs';

import OfficeMap from '../components/OfficeMap';

const AboutPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="About Us | Mahakal Property Dealer"
        description="Learn more about Mahakal Property Dealer. Discover why thousands trust us for their real estate investments and property hunting."
        url="https://mahakalpropertydealer.com/about"
      />
      <div style={{ paddingTop: '80px' }}>
        <Owner />
        <WhyChooseUs />
        <OfficeMap />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
