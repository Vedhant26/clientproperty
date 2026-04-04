import React from 'react';
import PageTransition from '../components/PageTransition';
import Services from '../components/Services';
import Locations from '../components/Locations';

const ServicesPage = () => {
  return (
    <PageTransition>
      <div style={{ paddingTop: '80px' }}>
        <Services />
        <Locations />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
