import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'Buy',
    message: ''
  });
  const { t, language } = useTranslation();

  const handleParamsChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = language === 'hi'
      ? `नमस्ते, मेरा नाम ${formData.name} है, नंबर: ${formData.phone}। मैं ${formData.type} के बारे में पूछताछ करना चाहता हूँ। संदेश: ${formData.message}`
      : `Hi, I am ${formData.name}, Contact: ${formData.phone}. Inquiry: ${formData.type}. Message: ${formData.message}`;

    window.open(`https://wa.me/918435523004?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-label">{t('contact.label')}</div>
        <h2 className="section-title">{t('contact.title')}</h2>

        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t('contact.name')}
                required
                onChange={handleParamsChange}
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder={t('contact.phone')}
                required
                onChange={handleParamsChange}
              />
            </div>
            <div className="form-group">
              <select name="type" onChange={handleParamsChange}>
                <option value={t('contact.inquiry.buy')}>{t('contact.inquiry.buy')}</option>
                <option value={t('contact.inquiry.sell')}>{t('contact.inquiry.sell')}</option>
                <option value={t('contact.inquiry.rent')}>{t('contact.inquiry.rent')}</option>
                <option value={t('contact.inquiry.other')}>{t('contact.inquiry.other')}</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={t('contact.message')}
                rows="4"
                required
                onChange={handleParamsChange}
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">
              {t('contact.submit')}
            </button>
          </form>

          <div className="contact__info">
            <a href="tel:+918435523004" className="contact__info-card">
              <div className="contact__info-icon">📞</div>
              <div>
                <div className="contact__info-label">Phone</div>
                <div className="contact__info-value">+91 84355 23004</div>
              </div>
            </a>
            <a
              href="https://wa.me/918435523004?text=Hi%2C%20I%20want%20to%20inquire%20about%20a%20property."
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-card"
            >
              <div className="contact__info-icon" style={{ color: '#25D366' }}>💬</div>
              <div>
                <div className="contact__info-label">WhatsApp</div>
                <div className="contact__info-value">Chat with us</div>
              </div>
            </a>
            <a href="mailto:vasutomar144@gmail.com" className="contact__info-card">
              <div className="contact__info-icon">✉️</div>
              <div>
                <div className="contact__info-label">Email</div>
                <div className="contact__info-value">vasutomar144@gmail.com</div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/mahakal_properties_bhind/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-card"
            >
              <div className="contact__info-icon" style={{ color: '#E1306C' }}>📸</div>
              <div>
                <div className="contact__info-label">Instagram</div>
                <div className="contact__info-value">@mahakal_properties_bhind</div>
              </div>
            </a>
            <div className="contact__info-card">
              <div className="contact__info-icon">📍</div>
              <div>
                <div className="contact__info-label">Office</div>
                <div className="contact__info-value">Bhind, Madhya Pradesh</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
