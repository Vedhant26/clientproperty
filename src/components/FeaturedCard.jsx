import React from 'react';
import { useTranslation } from '../context/LanguageContext';

const FeaturedCard = () => {
  const { t } = useTranslation();

  return (
    <section className="featured-card">
      <div className="container">
        <div className="featured-card__wrapper">
          <div className="section-label">Featured</div>
          <h2 className="section-title">Special Announcement</h2>
          <div className="featured-card__image-container">
            <img src={`${import.meta.env.BASE_URL}card.jpeg`} alt="Featured card" className="featured-card__img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCard;
