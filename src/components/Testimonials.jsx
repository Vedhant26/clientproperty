import React, { useRef } from 'react';
import { useTranslation } from '../context/LanguageContext';

const Testimonials = () => {
  const scrollRef = useRef(null);
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      location: 'Ujjain',
      text: t('test.1.text'),
    },
    {
      id: 2,
      name: 'Amit Patel',
      location: 'Ujjain',
      text: t('test.2.text'),
    },
    {
      id: 3,
      name: 'Vikram Singh',
      location: 'Bhopal',
      text: t('test.3.text'),
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-label">{t('section.client_stories')}</div>
        <h2 className="section-title">{t('section.testimonials')}</h2>

        <div className="testimonials__scroll" ref={scrollRef}>
          {testimonials.map((test) => (
            <div className="testimonial-card" key={test.id}>
              <div className="testimonial-card__stars">★★★★★</div>
              <p className="testimonial-card__text">{test.text}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{test.name.charAt(0)}</div>
                <div>
                  <div className="testimonial-card__name">{test.name}</div>
                  <div className="testimonial-card__location">{test.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
