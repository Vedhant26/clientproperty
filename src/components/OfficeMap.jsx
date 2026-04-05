import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const OfficeMap = () => {
  const sectionRef = useRef(null);
  const { t, language } = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.office-map__card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.office-map__card',
          start: 'top 85%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.613038123906!2d78.8035677!3d26.5646965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39767ac260200c81%3A0x28dcd094277e4a7f!2sMayur+Shiksha+Academy!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';

  const directionsUrl =
    'https://maps.app.goo.gl/JzwhcvtnGcu57a8TA';

  return (
    <section className="office-map" ref={sectionRef}>
      <div className="container">
        <div className="section-label">
          {language === 'hi' ? 'हमारा कार्यालय' : 'Our Office'}
        </div>
        <h2 className="section-title">
          {language === 'hi' ? 'मुख्य कार्यालय स्थान' : 'Main Office Location'}
        </h2>

        <div className="office-map__card">
          <div className="office-map__iframe-wrap">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mahakal Property Dealer — Main Office"
            ></iframe>
          </div>

          <div className="office-map__details">
            <div className="office-map__info-row">
              <span className="office-map__icon">📍</span>
              <div>
                <div className="office-map__label">
                  {language === 'hi' ? 'पता' : 'Address'}
                </div>
                <div className="office-map__value">
                  {language === 'hi'
                    ? 'महाकाल प्रॉपर्टी डीलर, उज्जैन, मध्य प्रदेश'
                    : 'Mahakal Property Dealer, Ujjain, Madhya Pradesh'}
                </div>
              </div>
            </div>

            <div className="office-map__info-row">
              <span className="office-map__icon">🕐</span>
              <div>
                <div className="office-map__label">
                  {language === 'hi' ? 'समय' : 'Working Hours'}
                </div>
                <div className="office-map__value">
                  {language === 'hi'
                    ? 'सोम – शनि: सुबह 10 बजे – शाम 7 बजे'
                    : 'Mon – Sat: 10 AM – 7 PM'}
                </div>
              </div>
            </div>

            <div className="office-map__info-row">
              <span className="office-map__icon">📞</span>
              <div>
                <div className="office-map__label">
                  {language === 'hi' ? 'फ़ोन' : 'Phone'}
                </div>
                <div className="office-map__value">+91 84355 23004</div>
              </div>
            </div>

            <a
              href="https://www.instagram.com/mahakal_properties_bhind/"
              target="_blank"
              rel="noopener noreferrer"
              className="office-map__info-row"
              style={{ textDecoration: 'none' }}
            >
              <span className="office-map__icon">📸</span>
              <div>
                <div className="office-map__label">Instagram</div>
                <div className="office-map__value">@mahakal_properties_bhind</div>
              </div>
            </a>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary office-map__directions-btn"
            >
              <span>
                {language === 'hi' ? '📍 दिशा-निर्देश प्राप्त करें' : '📍 Get Directions'}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeMap;
