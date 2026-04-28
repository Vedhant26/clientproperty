import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { properties } from '../data/properties';
import { useTranslation } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const PropertyImageCarousel = ({ images, altText, type }) => {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

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
      <div className="property-watermark">
        <div className="property-watermark__text">Mahakal Properties</div>
      </div>
      <div className="verified-photo-badge">
        <div className="verified-photo-badge__icon">✓</div>
        <div className="verified-photo-badge__text">{t('prop.verified')}</div>
      </div>
      <div className="property-card__badge">{type}</div>
    </div>
  );
};

const Properties = () => {
  const [searchParams] = useSearchParams();
  const urlCategory = searchParams.get('category');
  const [activeFilter, setActiveFilter] = useState(urlCategory || 'all');
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const navigate = useNavigate();
  const { t, language } = useTranslation();

  // Sync filter with URL param when it changes
  useEffect(() => {
    if (urlCategory) {
      setActiveFilter(urlCategory);
    }
  }, [urlCategory]);

  const filterOptions = [
    'all',
    'sale_residential',
    'rent_residential',
    'new_projects',
    'lands_plots',
    'rent_commercial',
    'sale_commercial',
    'pg_guest'
  ];

  const filtered = activeFilter === 'all'
    ? properties
    : properties.filter((p) => p.category === activeFilter);

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
  }, [activeFilter, filtered.length]); // Added filtered.length to trigger animation on length change

  return (
    <section className="properties" id="properties" ref={sectionRef}>
      <div className="container">
        <div className="properties__header">
          <div className="section-label">{t('section.explore') || 'Explore'}</div>
          <h2 className="section-title">{t('section.properties_main')}</h2>

          <div className="properties__filter-bar">
            <select 
              className="property-filter-select"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
            >
              {filterOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {t(`prop.filter.${opt}`)}
                </option>
              ))}
            </select>
            <div className="filter-select-icon">▼</div>
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

                {/* Floating Action Bar */}
                <div className="property-card__actions" onClick={(e) => e.stopPropagation()}>
                  <button 
                    className="property-card-action-btn" 
                    data-tooltip={language === 'hi' ? 'चैट करें' : 'Chat'}
                    onClick={() => window.open('https://wa.me/918435523004', '_blank')}
                  >💬</button>
                  <button 
                    className="property-card-action-btn" 
                    data-tooltip={language === 'hi' ? 'कॉल करें' : 'Call'}
                    onClick={() => window.open('tel:+918435523004')}
                  >📞</button>
                  <button 
                    className="property-card-action-btn" 
                    data-tooltip={language === 'hi' ? 'स्थान देखें' : 'Location'}
                    onClick={() => window.open(property.mapUrl || 'https://maps.google.com/?q=bhind', '_blank')}
                  >📍</button>
                  <button 
                    className="property-card-action-btn" 
                    data-tooltip={language === 'hi' ? 'जरूरत बताएं' : 'Send Requirement'}
                    onClick={() => navigate('/contact')}
                  >📋</button>
                </div>

                {/* Voice Note Audio Player */}
                {property.voiceNote && (
                  <div 
                    className="property-card__voice"
                    onClick={(e) => e.stopPropagation()} // Prevent card click navigation
                    style={{ marginTop: '0.75rem' }}
                  >
                    <div style={{ fontSize: '0.7rem', color: 'var(--gold-400)', marginBottom: '4px', fontWeight: '500' }}>
                      🎤 Voice Details
                    </div>
                    <audio 
                      controls 
                      src={property.voiceNote} 
                      preload="none" 
                      style={{ width: '100%', height: '32px', colorScheme: 'dark' }} 
                    />
                  </div>
                )}

                {/* Video Note Player */}
                {property.videoNote && (
                  <div 
                    className="property-card__video"
                    onClick={(e) => e.stopPropagation()} // Prevent card click navigation
                    style={{ marginTop: '0.75rem' }}
                  >
                    <div style={{ fontSize: '0.7rem', color: 'var(--gold-400)', marginBottom: '4px', fontWeight: '500' }}>
                      🎬 Plot Video
                    </div>
                    <video 
                      controls 
                      src={property.videoNote} 
                      preload="none" 
                      style={{ width: '100%', borderRadius: '8px', background: '#000' }} 
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
