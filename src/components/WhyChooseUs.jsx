import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslation } from '../context/LanguageContext';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  const reasons = [
    { icon: '⚡', title: t('wcu.approval.title'), desc: t('wcu.approval.desc') },
    { icon: '✅', title: t('wcu.verified.title'), desc: t('wcu.verified.desc') },
    { icon: '🧑‍💼', title: t('wcu.assist.title'), desc: t('wcu.assist.desc') },
    { icon: '🛡️', title: t('wcu.trust.title'), desc: t('wcu.trust.desc') },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.wcu-card', 
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
    <section className="why-choose-us" id="why-choose-us" ref={sectionRef}>
      <div className="container">
        <div className="section-label">{t('section.trust')}</div>
        <h2 className="section-title">{t('section.why_choose_us')}</h2>

        <div className="wcu-grid">
          {reasons.map((r, i) => (
            <div className="wcu-card" key={i}>
              <div className="wcu-card__icon">{r.icon}</div>
              <h3 className="wcu-card__title">{r.title}</h3>
              <p className="wcu-card__desc">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="wcu-genuine" style={{
          marginTop: '3.5rem',
          padding: '2.5rem',
          background: 'linear-gradient(135deg, rgba(212, 168, 83, 0.05), transparent)',
          border: '1px solid rgba(212, 168, 83, 0.15)',
          borderRadius: '16px',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.4rem',
            color: 'var(--gold-400)',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            🌟 {t('wcu.genuine.title')}
          </h3>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {t('wcu.genuine.desc')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
