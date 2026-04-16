import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import HeroBackground from './HeroBackground';
import { useTranslation } from '../context/LanguageContext';

const Hero = () => {
  const heroRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Apple-style cinematic entrance: elements reveal one by one with precise timing
      tl.from('.hero__overline', {
        opacity: 0,
        y: 12,
        duration: 0.9,
        ease: 'power2.out',
      })
        .from(
          '.hero__title .word',
          {
            opacity: 0,
            y: 80,
            rotateX: 40,
            duration: 1,
            stagger: 0.08,
            ease: 'expo.out',
          },
          '-=0.3'
        )
        .from(
          '.hero__accent-line',
          {
            scaleX: 0,
            duration: 0.8,
            ease: 'expo.out',
          },
          '-=0.4'
        )
        .from(
          '.hero__subtitle',
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.5'
        )
        .from(
          '.hero__actions .hero__btn',
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
          },
          '-=0.3'
        )
        .from(
          '.hero__scroll-indicator',
          {
            opacity: 0,
            duration: 0.8,
          },
          '-=0.2'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef} id="hero">
      <div className="hero__bg">
        <HeroBackground />
      </div>

      <div className="container hero__content">
        <div className="hero__overline">
          <span className="hero__overline-dot"></span>
          <span className="hero__overline-text">{t('hero.badge')}</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">
            <span className="word">{t('hero.find')}</span>
          </span>
          <span className="hero__title-line">
            <span className="word hero__title-highlight">{t('hero.dream')}</span>
          </span>
          <span className="hero__title-line">
            <span className="word">{t('hero.with')}</span>
          </span>
        </h1>

        <div className="hero__accent-line"></div>

        <p className="hero__subtitle">
          {t('hero.subtitle')}
        </p>

        <div className="hero__actions">
          <Link to="/properties" className="hero__btn hero__btn--primary">
            <span className="hero__btn-text">{t('hero.btnBrowse')}</span>
            <span className="hero__btn-arrow">→</span>
          </Link>
          <Link to="/contact" className="hero__btn hero__btn--secondary">
            <span className="hero__btn-text">{t('hero.btnContact')}</span>
          </Link>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
