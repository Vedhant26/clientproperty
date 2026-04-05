import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslation } from '../context/LanguageContext';

const Owner = () => {
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.owner__card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.owner__photo-wrapper img', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'back.out(1.5)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="owner" ref={sectionRef}>
      <div className="container">
        <div className="owner__card">
          <div className="owner__photo-wrapper">
            <div className="owner__photo-ring"></div>
            <img
              src={`${import.meta.env.BASE_URL}me.jpeg`}
              alt={t('owner.name')}
              className="owner__photo"
            />
          </div>

          <div className="owner__info">
            <h2 className="owner__name">{t('owner.name')}</h2>
            <div className="owner__role">{t('owner.role')}</div>

            <p className="owner__desc">
              {t('owner.desc')}
            </p>

            <div className="owner__contact">
              <a href="tel:+918435523004" className="owner__contact-item">
                <span className="owner__contact-icon">📞</span>
                <div>
                  <div className="owner__contact-label">Phone</div>
                  <div className="owner__contact-value">{t('owner.phone')}</div>
                </div>
              </a>
              <a
                href="https://wa.me/918435523004"
                target="_blank"
                rel="noopener noreferrer"
                className="owner__contact-item owner__contact-item--wa"
              >
                <span className="owner__contact-icon">💬</span>
                <div>
                  <div className="owner__contact-label">WhatsApp</div>
                  <div className="owner__contact-value">{t('prop.whatsapp')}</div>
                </div>
              </a>
              <a href="mailto:info@mahakalproperty.com" className="owner__contact-item">
                <span className="owner__contact-icon">✉️</span>
                <div>
                  <div className="owner__contact-label">Email</div>
                  <div className="owner__contact-value">{t('owner.email')}</div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/mahakal_properties_bhind/"
                target="_blank"
                rel="noopener noreferrer"
                className="owner__contact-item"
              >
                <span className="owner__contact-icon">📸</span>
                <div>
                  <div className="owner__contact-label">Instagram</div>
                  <div className="owner__contact-value">@mahakal_properties_bhind</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owner;
