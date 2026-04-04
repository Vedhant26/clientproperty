import React from 'react';
import { useTranslation } from '../context/LanguageContext';

const PostPropertyCTA = () => {
  const { t, language } = useTranslation();

  const msg = encodeURIComponent(
    language === 'hi'
      ? "नमस्ते, मैं अपनी प्रॉपर्टी बेचना/किराए पर देना चाहता हूं। कृपया मेरी मदद करें।"
      : "Hi, I want to sell/rent out my property. Please help me post it."
  );

  const whatsappUrl = `https://wa.me/918435523004?text=${msg}`;

  return (
    <section className="post-property-cta">
      <div className="container">
        <div className="ppc__inner">
          <div className="ppc__glow"></div>

          <div className="ppc__icon">🏢</div>
          <h2 className="ppc__title">{t('cta.want_to_sell')}</h2>
          <p className="ppc__desc">
            {t('cta.desc')}
          </p>

          <div className="ppc__btn">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <span className="wa-icon">💬</span> {t('cta.btn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostPropertyCTA;
