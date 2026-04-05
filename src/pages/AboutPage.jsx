import React from 'react';
import PageTransition from '../components/PageTransition';
import Owner from '../components/Owner';
import WhyChooseUs from '../components/WhyChooseUs';

import OfficeMap from '../components/OfficeMap';

const AboutPage = () => {
  return (
    <PageTransition>
      <div style={{ paddingTop: '80px' }}>
        <Owner />
        <WhyChooseUs />
        <OfficeMap />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
