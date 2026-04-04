import React from 'react';
import PageTransition from '../components/PageTransition';
import Owner from '../components/Owner';
import WhyChooseUs from '../components/WhyChooseUs';

const AboutPage = () => {
  return (
    <PageTransition>
      <div style={{ paddingTop: '80px' }}>
        <Owner />
        <WhyChooseUs />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
