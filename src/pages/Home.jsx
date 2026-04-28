import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Categories from '../components/Categories';
import FeaturedCard from '../components/FeaturedCard';
import Properties from '../components/Properties';
import HowItWorks from '../components/HowItWorks';
import PostPropertyCTA from '../components/PostPropertyCTA';
import Testimonials from '../components/Testimonials';
import { useTranslation } from '../context/LanguageContext';

import OfficeMap from '../components/OfficeMap';

const SearchBar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="home-search" onClick={() => navigate('/properties')}>
      <div className="home-search__inner">
        <span className="home-search__icon">🔍</span>
        <span className="home-search__placeholder">{t('search.placeholder')}</span>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <PageTransition>
      <SEO 
        title="Mahakal Property Dealer — Buy, Sell & Invest with Trust"
        description="Mahakal Property Dealer provides comprehensive real estate services. We ensure 100% genuine properties and transparent deals in Gwalior and beyond."
        url="https://mahakalpropertydealer.com/"
      />
      <Hero />
      <SearchBar />
      <Stats />
      <Categories />
      <FeaturedCard />
      <PostPropertyCTA />
      <OfficeMap />
    </PageTransition>
  );
};

export default Home;
