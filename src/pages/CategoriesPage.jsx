import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { properties } from '../data/properties';
import { useTranslation } from '../context/LanguageContext';

// Main sidebar categories (future-proof: only Properties is populated now)
const sidebarCategories = [
  { id: 'properties', icon: '🏠', translationKey: 'cat.properties' },
  { id: 'vehicles', icon: '🚗', translationKey: 'cat.coming_soon', label: 'Vehicles' },
  { id: 'electronics', icon: '📱', translationKey: 'cat.coming_soon', label: 'Electronics' },
  { id: 'furniture', icon: '🛋️', translationKey: 'cat.coming_soon', label: 'Furniture' },
  { id: 'jobs', icon: '💼', translationKey: 'cat.coming_soon', label: 'Jobs' },
];

// Subcategories for Properties
const propertySubcategories = [
  { key: 'sale_residential', icon: '🏠', translationKey: 'cat.sale_houses', gradient: 'linear-gradient(135deg, #ff6b35, #f7931e)' },
  { key: 'rent_residential', icon: '🏘️', translationKey: 'cat.rent_houses', gradient: 'linear-gradient(135deg, #00b4d8, #0077b6)' },
  { key: 'new_projects', icon: '🏗️', translationKey: 'cat.new_projects', gradient: 'linear-gradient(135deg, #8338ec, #5a189a)' },
  { key: 'lands_plots', icon: '🌍', translationKey: 'cat.lands_plots', gradient: 'linear-gradient(135deg, #06d6a0, #059669)' },
  { key: 'rent_commercial', icon: '🏪', translationKey: 'cat.rent_shops', gradient: 'linear-gradient(135deg, #ef476f, #d62828)' },
  { key: 'sale_commercial', icon: '🏢', translationKey: 'cat.sale_shops', gradient: 'linear-gradient(135deg, #ffd166, #f59e0b)' },
  { key: 'pg_guest', icon: '🛏️', translationKey: 'cat.pg_guest', gradient: 'linear-gradient(135deg, #7209b7, #560bad)' },
];

const CategoriesPage = () => {
  const [activeCategory, setActiveCategory] = useState('properties');
  const navigate = useNavigate();
  const { t, language } = useTranslation();

  const getCategoryCount = (key) => {
    return properties.filter(p => p.category === key).length;
  };

  const handleSubcategoryClick = (filterKey) => {
    navigate(`/properties?category=${filterKey}`);
  };

  return (
    <PageTransition>
      <SEO
        title="Categories | Mahakal Property Dealer"
        description="Browse all property categories — houses, apartments, plots, commercial spaces, and more."
        url="https://mahakalpropertydealer.com/categories"
      />

      <div className="categories-page">
        {/* Header */}
        <div className="catpage-header">
          <button className="catpage-back" onClick={() => navigate(-1)}>
            ←
          </button>
          <h1 className="catpage-title">{t('cat.page_title')}</h1>
        </div>

        <div className="catpage-layout">
          {/* Left Sidebar */}
          <div className="catpage-sidebar">
            {sidebarCategories.map((cat) => (
              <button
                key={cat.id}
                className={`catpage-sidebar-item ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="catpage-sidebar-icon">{cat.icon}</span>
                <span className="catpage-sidebar-label">
                  {cat.id === 'properties' ? t(cat.translationKey) : (cat.label || t(cat.translationKey))}
                </span>
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="catpage-content">
            {activeCategory === 'properties' ? (
              <>
                <div className="catpage-content-title">{t('cat.properties')}</div>
                <div className="catpage-subcategories">
                  {propertySubcategories.map((sub) => {
                    const count = getCategoryCount(sub.key);
                    return (
                      <div
                        key={sub.key}
                        className="catpage-subcat-card"
                        onClick={() => handleSubcategoryClick(sub.key)}
                      >
                        <div className="catpage-subcat-icon" style={{ background: sub.gradient }}>
                          <span>{sub.icon}</span>
                        </div>
                        <div className="catpage-subcat-name">{t(sub.translationKey)}</div>
                        {count > 0 && (
                          <div className="catpage-subcat-count">{count}</div>
                        )}
                      </div>
                    );
                  })}

                  {/* View All */}
                  <div
                    className="catpage-subcat-card"
                    onClick={() => navigate('/properties')}
                  >
                    <div className="catpage-subcat-icon catpage-subcat-icon--all">
                      <span>→</span>
                    </div>
                    <div className="catpage-subcat-name">{t('cat.view_all')}</div>
                  </div>
                </div>
              </>
            ) : (
              <div className="catpage-coming-soon">
                <div className="catpage-coming-soon-icon">🚀</div>
                <div className="catpage-coming-soon-text">{t('cat.coming_soon')}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CategoriesPage;
