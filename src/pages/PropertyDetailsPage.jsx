import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { properties } from '../data/properties';
import { useTranslation } from '../context/LanguageContext';

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useTranslation();

  // Safe comparison catering to both string and int IDs
  const property = properties.find((p) => String(p.id) === String(id));
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!property) {
    return (
      <PageTransition>
        <div className="container" style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
          <h2 className="section-title">Property Not Found</h2>
          <button className="btn-primary" onClick={() => navigate('/properties')} style={{ marginTop: '1rem' }}>
            <span>{t('prop.back')}</span>
          </button>
        </div>
      </PageTransition>
    );
  }

  const handleDragEnd = (e, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold && currentSlide < property.images.length - 1) {
      setCurrentSlide(s => s + 1);
    } else if (info.offset.x > swipeThreshold && currentSlide > 0) {
      setCurrentSlide(s => s - 1);
    }
  };

  const propName = property.name[language || 'en'];
  const propDesc = property.description[language || 'en'];
  const propAmenities = property.amenities[language || 'en'];

  const whatsappMsg = encodeURIComponent(
    language === 'hi'
      ? `नमस्ते, मुझे ${property.location} में स्थित "${propName}" (${property.price}) में दिलचस्पी है। कृपया और जानकारी साझा करें।`
      : `Hi, I'm interested in "${propName}" in ${property.location} (${property.price}). Please share more details.`
  );
  const whatsappUrl = `https://wa.me/918435523004?text=${whatsappMsg}`;

  return (
    <PageTransition>
      <SEO 
        title={`${propName} in ${property.location} | Mahakal Property Dealer`}
        description={propDesc}
        url={`https://mahakalpropertydealer.com/property/${id}`}
        image={property.images[0]}
      />
      <div className="property-details-page">
        {/* Gallery Hero */}
        <div className="pd-gallery">
          <button className="pd-back-btn" onClick={() => navigate(-1)}>← {t('prop.back')}</button>
          <motion.div
            className="pd-gallery-slider"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            style={{ cursor: 'grab' }}
          >
            {property.images.map((img, i) => (
              <div className="pd-slide" key={i}>
                <img src={img} alt={`${propName} ${i + 1}`} style={{ pointerEvents: 'none' }} />
              </div>
            ))}
          </motion.div>
          <div className="pd-dots">
            {property.images.map((_, i) => (
              <button
                key={i}
                className={`pd-dot ${i === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(i)}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="container pd-content">
          <div className="pd-header">
            <div className="pd-badges">
              <span className="pd-badge">{t(`prop.filter.${property.status}`)}</span>
            </div>
            <h1 className="pd-title">{propName}</h1>
            <div className="pd-location">📍 {property.location}</div>
          </div>

          <div className="pd-price-card">
            <div className="pd-price">{property.price}</div>
          </div>

          <div className="pd-stats">
            <div className="pd-stat">
              <div className="pd-stat-val">{property.beds || '-'}</div>
              <div className="pd-stat-lbl">Beds</div>
            </div>
            <div className="pd-stat">
              <div className="pd-stat-val">{property.sqft}</div>
              <div className="pd-stat-lbl">{t('prop.sqft')}</div>
            </div>
            <div className="pd-stat">
              <div className="pd-stat-val" style={{ textTransform: 'capitalize' }}>{property.type}</div>
              <div className="pd-stat-lbl">Type</div>
            </div>
          </div>

          <div className="pd-section">
            <h3 className="pd-subtitle">Description</h3>
            <p className="pd-desc">{propDesc}</p>
          </div>

          <div className="pd-section">
            <h3 className="pd-subtitle">{t('prop.amenities')}</h3>
            <div className="pd-amenities">
              {propAmenities.map((a, idx) => (
                <span className="pd-amenity" key={idx}>✓ {a}</span>
              ))}
            </div>
          </div>

          {/* Nearby Facilities */}
          <div className="pd-section">
            <h3 className="pd-subtitle">Nearby Facilities</h3>
            <div className="pd-nearby-grid">
              {(property.nearby?.[language || 'en'] || []).map((item, idx) => (
                <div className="pd-nearby-item" key={idx}>
                  <div className="pd-nearby-info">
                    <span className="pd-nearby-name">{item.name}</span>
                    <span className="pd-nearby-cat">{item.category}</span>
                  </div>
                  <span className="pd-nearby-dist">{item.distance}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="pd-section pd-map-section">
            <h3 className="pd-subtitle">Location on Map</h3>
            <div className="pd-map-container">
              <iframe
                src={property.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Property Location"
              ></iframe>
            </div>
          </div>

          {/* Enhanced Contact Dealer Card */}
          <div className="pd-contact-card">
            <div className="pd-dealer-info">
              <img src={`${import.meta.env.BASE_URL}me.jpeg`} alt="Dealer" className="pd-dealer-img" />
              <h3 className="pd-dealer-name">Shivam Tomar</h3>
              <span className="pd-dealer-tag">Owner & Dealer</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Interested in this property? Contact me directly for a visit or more details.
            </p>
            <div className="pd-contact-actions">
              <a href="tel:+918435523004" className="btn-secondary pd-btn pd-btn-call">
                📞 {t('prop.call')}
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary pd-btn pd-btn-whatsapp">
                💬 {t('prop.whatsapp')}
              </a>
            </div>
            <a
              href="https://www.instagram.com/mahakal_properties_bhind/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.7rem',
                background: 'linear-gradient(135deg, #833AB4, #E1306C, #F77737)',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '0.85rem',
                fontWeight: '600',
                marginTop: '0.75rem',
                transition: 'all 0.3s',
                textDecoration: 'none',
              }}
            >
              📸 Instagram — @mahakal_properties_bhind
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PropertyDetailsPage;
