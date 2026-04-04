import React from 'react';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import FeaturedCard from '../components/FeaturedCard';
import Properties from '../components/Properties';
import HowItWorks from '../components/HowItWorks';
import PostPropertyCTA from '../components/PostPropertyCTA';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <FeaturedCard />
      <PostPropertyCTA />
    </PageTransition>
  );
};

export default Home;
