import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { properties } from '../data/properties';
import { useTranslation } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const PropertyImageCarousel = ({ images, altText, type }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="property-card__image">
      {images.map((img, i) => (
        <img 
          key={i}
          src={img} 
          alt={altText} 
          className={`property-card__carousel-img ${i === index ? 'active' : ''}`} 
        />
      ))}
      <div className="property-card__badge">{type}</div>
    </div>
  );
};

const Properties = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const navigate = useNavigate();
  const { t, language } = useTranslation();

  const filterOptions = ['all', 'buy', 'rent'];

  const filtered = activeFilter === 'all'
    ? properties
    : properties.filter((p) => p.status === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.property-card', 
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.2, // ensure it doesn't crash with route transition
          ease: 'power3.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.querySelectorAll('.property-card'),
        { opacity: 0, y: 20, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.06, ease: 'power3.out' }
      );
    }
  }, [activeFilter]);

  return (
    <section className="properties" id="properties" ref={sectionRef}>
      <div className="container">
        <div className="properties__header">
          <div className="section-label">{t('section.explore')}</div>
          <h2 className="section-title">{t('section.featured')}</h2>

          <div className="properties__filters">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                className={`filter-btn ${activeFilter === opt ? 'active' : ''}`}
                onClick={() => setActiveFilter(opt)}
              >
                {t(`prop.filter.${opt}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="properties__grid" ref={gridRef}>
          {filtered.map((property) => (
            <div
              className="property-card"
              key={property.id}
              onClick={() => navigate(`/property/${property.id}`)}
            >
              <PropertyImageCarousel 
                images={property.images} 
                altText={property.name[language || 'en']} 
                type={property.type} 
              />
              <div className="property-card__info">
                <h3 className="property-card__name">{property.name[language || 'en']}</h3>
                <div className="property-card__location">📍 {property.location}</div>
                
                <div className="property-card__stats">
                  <div className="property-card__stat">
                    <span>🛏️</span> {property.beds || '-'}
                  </div>
                  <div className="property-card__stat">
                    <span>🛁</span> {property.baths || '-'}
                  </div>
                  <div className="property-card__stat">
                    <span>📏</span> {property.sqft} sqft
                  </div>
                </div>

                <div className="property-card__price">
                  {property.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
