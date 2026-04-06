import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import FeaturedCard from '../components/FeaturedCard';
import Properties from '../components/Properties';
import HowItWorks from '../components/HowItWorks';
import PostPropertyCTA from '../components/PostPropertyCTA';
import Testimonials from '../components/Testimonials';

import OfficeMap from '../components/OfficeMap';

const Home = () => {
  return (
    <PageTransition>
      <SEO 
        title="Mahakal Property Dealer — Buy, Sell & Invest with Trust"
        description="Mahakal Property Dealer provides comprehensive real estate services. We ensure 100% genuine properties and transparent deals in Gwalior and beyond."
        url="https://mahakalpropertydealer.com/"
      />
      <Hero />
      <Stats />
      <FeaturedCard />
      <PostPropertyCTA />
      <OfficeMap />
    </PageTransition>
  );
};

export default Home;
