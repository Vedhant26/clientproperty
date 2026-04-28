import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { properties } from '../data/properties';
import { useTranslation } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const categoryData = [
  { key: 'sale_residential', icon: '🏠', translationKey: 'cat.sale_houses', gradient: 'linear-gradient(135deg, #ff6b35, #f7931e)' },
  { key: 'rent_residential', icon: '🏘️', translationKey: 'cat.rent_houses', gradient: 'linear-gradient(135deg, #00b4d8, #0077b6)' },
  { key: 'new_projects', icon: '🏗️', translationKey: 'cat.new_projects', gradient: 'linear-gradient(135deg, #8338ec, #5a189a)' },
  { key: 'lands_plots', icon: '🌍', translationKey: 'cat.lands_plots', gradient: 'linear-gradient(135deg, #06d6a0, #059669)' },
  { key: 'rent_commercial', icon: '🏪', translationKey: 'cat.rent_shops', gradient: 'linear-gradient(135deg, #ef476f, #d62828)' },
  { key: 'sale_commercial', icon: '🏢', translationKey: 'cat.sale_shops', gradient: 'linear-gradient(135deg, #ffd166, #f59e0b)' },
  { key: 'pg_guest', icon: '🛏️', translationKey: 'cat.pg_guest', gradient: 'linear-gradient(135deg, #7209b7, #560bad)' },
];

const Categories = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  const getCategoryCount = (key) => {
    return properties.filter(p => p.category === key).length;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cat-card', 
        { opacity: 0, y: 30, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          delay: 0.3,
          ease: 'power3.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCategoryClick = (filterKey) => {
    navigate(`/properties?category=${filterKey}`);
  };

  return (
    <section className="categories-section" ref={sectionRef} id="categories">
      <div className="container">
        <div className="categories-section__header">
          <div className="section-label">{t('cat.properties')}</div>
          <h2 className="section-title">{t('cat.title')}</h2>
          <p className="categories-section__subtitle">{t('cat.subtitle')}</p>
        </div>

        <div className="categories-grid">
          {categoryData.map((cat) => {
            const count = getCategoryCount(cat.key);
            return (
              <div
                className="cat-card"
                key={cat.key}
                onClick={() => handleCategoryClick(cat.key)}
              >
                <div className="cat-card__icon-wrap" style={{ background: cat.gradient }}>
                  <span className="cat-card__icon">{cat.icon}</span>
                </div>
                <div className="cat-card__info">
                  <div className="cat-card__name">{t(cat.translationKey)}</div>
                  {count > 0 && (
                    <div className="cat-card__count">{count} {t('cat.listings')}</div>
                  )}
                </div>
              </div>
            );
          })}

          {/* View All card */}
          <div
            className="cat-card cat-card--view-all"
            onClick={() => navigate('/categories')}
          >
            <div className="cat-card__icon-wrap cat-card__icon-wrap--all">
              <span className="cat-card__icon">→</span>
            </div>
            <div className="cat-card__info">
              <div className="cat-card__name">{t('cat.view_all')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
