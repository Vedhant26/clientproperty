import React from 'react';
import PageTransition from '../components/PageTransition';
import Properties from '../components/Properties';

const PropertiesPage = () => {
  return (
    <PageTransition>
      <div style={{ paddingTop: '80px' }}>
        <Properties />
      </div>
    </PageTransition>
  );
};

export default PropertiesPage;
