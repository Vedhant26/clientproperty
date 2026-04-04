import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          
          <div className="footer__col" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
            <div className="footer__brand">Mahakal <span>Property</span> Dealer</div>
            <p className="footer__text">
              {t('footer.desc')}
            </p>
          </div>

          <div className="footer__col" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
             <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{t('footer.quick_links')}</h4>
             <Link to="/properties" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{t('nav.properties')}</Link>
             <Link to="/services" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{t('nav.services')}</Link>
             <Link to="/about" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{t('nav.about')}</Link>
             <Link to="/contact" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{t('nav.contact')}</Link>
          </div>
          
          <div className="footer__col" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
             <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{t('footer.contact')}</h4>
             <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{t('owner.phone')}</p>
             <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{t('owner.email')}</p>
             <div className="footer__social">
                <a href="#" aria-label="Facebook">FB</a>
                <a href="#" aria-label="Instagram">IG</a>
                <a href="#" aria-label="Twitter">TW</a>
              </div>
          </div>
          
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem'}}>
          <p className="footer__copy">{t('footer.rights')}</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            {t('footer.dev')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
