import React, { useState, useEffect, useRef } from 'react';

const propertyEmojis = {
  flat: '🏢',
  shop: '🏪',
  plot: '🌳',
  villa: '🏡',
  rental: '🔑',
  office: '💼',
};

const PropertyModal = ({ property, isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Gallery images (emoji placeholders since we don't have real photos)
  const gallerySlides = [
    { emoji: propertyEmojis[property?.badge] || '🏠', label: 'Front View' },
    { emoji: '🛋️', label: 'Interior' },
    { emoji: '🗺️', label: 'Layout' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setCurrentSlide(0);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentSlide < gallerySlides.length - 1) {
        setCurrentSlide((p) => p + 1);
      } else if (diff < 0 && currentSlide > 0) {
        setCurrentSlide((p) => p - 1);
      }
    }
  };

  if (!property) return null;

  const whatsappMsg = encodeURIComponent(
    `Hi, I'm interested in "${property.name}" in ${property.location} (${property.price}). Please share more details.`
  );
  const whatsappUrl = `https://wa.me/918435523004?text=${whatsappMsg}`;
  const phoneNumber = 'tel:+918435523004';

  return (
    <div
      className={`property-modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="property-modal">
        <div className="property-modal__handle">
          <span></span>
        </div>

        {/* Image Gallery */}
        <div
          className="property-modal__image"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="property-modal__gallery"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {gallerySlides.map((slide, i) => (
              <div
                className={`property-modal__gallery-slide property-img-placeholder ${property.badge}`}
                key={i}
              >
                <div className="gallery-slide-content">
                  <span className="gallery-slide-emoji">{slide.emoji}</span>
                  <span className="gallery-slide-label">{slide.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery dots */}
          <div className="property-modal__dots">
            {gallerySlides.map((_, i) => (
              <button
                key={i}
                className={`modal-dot ${i === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(i)}
              />
            ))}
          </div>

          <button className="property-modal__close" onClick={onClose}>✕</button>
        </div>

        <div className="property-modal__body">
          <div className="property-modal__type-badge">{property.type}</div>
          <h2 className="property-modal__title">{property.name}</h2>
          <div className="property-modal__location">📍 {property.location}</div>

          <div className="property-modal__price-row">
            <span className="property-modal__price">{property.price}</span>
            <span className="property-modal__price-label">{property.priceLabel}</span>
          </div>

          {/* Details Grid */}
          <div className="property-modal__details">
            <div className="property-modal__detail">
              <div className="property-modal__detail-value">{property.bhk}</div>
              <div className="property-modal__detail-label">Config</div>
            </div>
            <div className="property-modal__detail">
              <div className="property-modal__detail-value">{property.area}</div>
              <div className="property-modal__detail-label">Area</div>
            </div>
            <div className="property-modal__detail">
              <div className="property-modal__detail-value">{property.type}</div>
              <div className="property-modal__detail-label">Type</div>
            </div>
          </div>

          {/* Description */}
          <p className="property-modal__description">{property.description}</p>

          {/* Amenities */}
          <div className="property-modal__amenities">
            <h4 className="property-modal__amenities-title">Amenities</h4>
            <div className="property-modal__amenities-grid">
              {property.amenities.map((amenity, i) => (
                <span className="amenity-chip" key={i}>
                  ✓ {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="property-modal__actions">
            <a href={phoneNumber} className="btn-primary modal-action-btn">
              <span>📞 Call Now</span>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp modal-action-btn">
              <span>💬 WhatsApp</span>
            </a>
            <button className="btn-secondary modal-action-btn" onClick={() => {
              onClose();
              setTimeout(() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 400);
            }}>
              <span>📅 Schedule Visit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
