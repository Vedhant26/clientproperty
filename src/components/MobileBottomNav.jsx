import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';

const MobileBottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, language } = useTranslation();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (path) => location.pathname === path;

  const handleSell = () => {
    const msg = encodeURIComponent(
      language === 'hi'
        ? "नमस्ते, मैं अपनी प्रॉपर्टी बेचना/किराए पर देना चाहता हूं। कृपया मेरी मदद करें।"
        : "Hi, I want to sell/rent out my property. Please help me post it."
    );
    window.open(`https://wa.me/918435523004?text=${msg}`, '_blank');
  };

  const navItems = [
    { path: '/', icon: '🏠', label: t('nav.bottom.home') },
    { path: '/categories', icon: '📂', label: t('nav.bottom.categories') },
    { action: 'sell', icon: '+', label: t('nav.bottom.sell'), special: true },
    { path: '/contact', icon: '💬', label: t('nav.bottom.contact') },
  ];

  return (
    <nav className={`mobile-bottom-nav ${visible ? 'visible' : 'hidden'}`}>
      {navItems.map((item, idx) => {
        if (item.special) {
          return (
            <button
              key={idx}
              className="mobile-bottom-nav__item mobile-bottom-nav__item--sell"
              onClick={handleSell}
            >
              <div className="mobile-bottom-nav__sell-btn">
                <span>{item.icon}</span>
              </div>
              <span className="mobile-bottom-nav__label">{item.label}</span>
            </button>
          );
        }

        return (
          <button
            key={idx}
            className={`mobile-bottom-nav__item ${isActive(item.path) ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <span className="mobile-bottom-nav__icon">{item.icon}</span>
            <span className="mobile-bottom-nav__label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default MobileBottomNav;
