import React, { useEffect, useRef } from 'react';
import { useTranslation } from '../context/LanguageContext';
import gsap from 'gsap';

const LanguageSelector = () => {
  const { changeLanguage } = useTranslation();
  const selectorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.lang-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
      gsap.from('.lang-title', {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, selectorRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="language-selector" ref={selectorRef}>
      <div className="language-selector__bg">
        <div className="language-selector__glow"></div>
      </div>
      
      <div className="container language-selector__content">
        <div className="language-selector__logo">M</div>
        <h2 className="lang-title">Choose your language:</h2>
        
        <div className="lang-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn-primary" onClick={() => changeLanguage('en')} style={{ padding: '1rem 2.5rem', minWidth: '160px' }}>
            <span>A | English</span>
          </button>
          
          <button className="btn-secondary" onClick={() => changeLanguage('hi')} style={{ padding: '1rem 2.5rem', minWidth: '160px' }}>
            <span>अ | हिंदी</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
