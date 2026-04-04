import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const defaultLocations = [
  'Ujjain',
  'Bhopal',
  'Indore',
  'Dewas',
  'Ratlam',
  'Mandsaur',
];

const locationsHi = [
  'उज्जैन',
  'भोपाल',
  'इंदौर',
  'देवास',
  'रतलाम',
  'मंदसौर',
];

const Locations = () => {
  const sectionRef = useRef(null);
  const { t, language } = useTranslation();

  const locationsList = language === 'hi' ? locationsHi : defaultLocations;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.location-chip', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        x: 20,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="locations" ref={sectionRef}>
      <div className="container">
        <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          {t('loc.cover')}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          {t('loc.desc')}
        </p>

        <div className="locations__scroll">
          {locationsList.map((loc, i) => (
            <div className="location-chip" key={i}>
              {loc}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
