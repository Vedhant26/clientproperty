import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import Properties from '../components/Properties';

const PropertiesPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="Premium Properties | Mahakal Property Dealer"
        description="Explore our curated list of premium residential and commercial properties available for sale and investment. Find your dream home today."
        url="https://mahakalpropertydealer.com/properties"
      />
      <div style={{ paddingTop: '80px' }}>
        <Properties />
      </div>
    </PageTransition>
  );
};

export default PropertiesPage;
