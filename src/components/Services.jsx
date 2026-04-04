import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  const services = [
    { icon: '🏠', title: t('srv.buy.title'), desc: t('srv.buy.desc') },
    { icon: '💰', title: t('srv.sell.title'), desc: t('srv.sell.desc') },
    { icon: '🔑', title: t('srv.rent.title'), desc: t('srv.rent.desc') },
    { icon: '⚖️', title: t('srv.legal.title'), desc: t('srv.legal.desc') },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card', 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.3,
          ease: 'power3.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="container">
        <div className="section-label">{t('section.what_we_offer')}</div>
        <h2 className="section-title">{t('section.our_services')}</h2>

        <div className="services__grid">
          {services.map((srv, i) => (
            <div className="service-card" key={i}>
              <div className="service-card__glow"></div>
              <div className="service-card__icon">{srv.icon}</div>
              <h3 className="service-card__title">{srv.title}</h3>
              <p className="service-card__desc">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
