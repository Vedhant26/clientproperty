import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-icon">M</div>
            <div className="navbar__logo-text">
              Maha<span>kal</span>
            </div>
          </Link>

          <div className="navbar__links">
            <NavLink to="/">{t('nav.home')}</NavLink>
            <NavLink to="/properties">{t('nav.properties')}</NavLink>
            <NavLink to="/services">{t('nav.services')}</NavLink>
            <NavLink to="/how-it-works">{t('nav.process')}</NavLink>
            <NavLink to="/about">{t('nav.about')}</NavLink>
            <NavLink to="/contact">{t('nav.contact')}</NavLink>
          </div>

          <Link to="/contact" className="navbar__cta">
            {t('nav.getInTouch')}
          </Link>

          <button
            className={`navbar__menu-btn ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/">{t('nav.home')}</NavLink>
        <NavLink to="/properties">{t('nav.properties')}</NavLink>
        <NavLink to="/services">{t('nav.services')}</NavLink>
        <NavLink to="/how-it-works">{t('nav.process')}</NavLink>
        <NavLink to="/about">{t('nav.about')}</NavLink>
        <NavLink to="/contact">{t('nav.contact')}</NavLink>
      </div>
    </>
  );
};

export default Navbar;
