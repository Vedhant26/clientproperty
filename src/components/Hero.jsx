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
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from('.hero__badge', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out',
      })
        .from(
          '.hero__title .line',
          {
            opacity: 0,
            y: 60,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .from(
          '.hero__subtitle',
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .from(
          '.hero__actions',
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .from(
          '.hero__scroll-indicator',
          {
            opacity: 0,
            duration: 0.5,
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
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          {t('hero.badge')}
        </div>

        <h1 className="hero__title">
          <span className="line">{t('hero.find')}</span>
          <span className="line">
            <span className="gold">{t('hero.dream')}</span>
          </span>
          <span className="line">{t('hero.with')}</span>
        </h1>

        <p className="hero__subtitle">
          {t('hero.subtitle')}
        </p>

        <div className="hero__actions">
          <Link to="/properties" className="btn-primary">
            <span>{t('hero.btnBrowse')}</span>
          </Link>
          <Link to="/contact" className="btn-secondary">
            {t('hero.btnContact')}
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
