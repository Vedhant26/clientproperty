import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import Owner from '../components/Owner';
import WhyChooseUs from '../components/WhyChooseUs';

import OfficeMap from '../components/OfficeMap';

const AboutPage = () => {
  const navigate = useNavigate();

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

        {/* Admin Access */}
        <div style={{ textAlign: 'center', padding: '2rem 1rem 3rem' }}>
          <button
            onClick={() => navigate('/admin')}
            style={{
              padding: '0.6rem 1.5rem',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.03)',
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
              letterSpacing: '0.05em',
            }}
            onMouseEnter={(e) => { e.target.style.borderColor = 'rgba(212,168,83,0.3)'; e.target.style.color = 'rgba(212,168,83,0.6)'; }}
            onMouseLeave={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.color = 'rgba(255,255,255,0.3)'; }}
          >
            🔒 Admin Panel
          </button>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
