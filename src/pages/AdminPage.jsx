import React, { useState, useEffect } from 'react';
import { properties } from '../data/properties';

const ADMIN_PASSWORD = 'tomarmp40s';

// ─── Utility: localStorage helpers ───
const getInquiries = () => {
  try {
    return JSON.parse(localStorage.getItem('mahakal_inquiries') || '[]');
  } catch { return []; }
};

const saveInquiries = (data) => {
  localStorage.setItem('mahakal_inquiries', JSON.stringify(data));
};

// ─── Login Gate ───
const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('mahakal_admin', 'true');
      onLogin();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login__bg"></div>
      <div className={`admin-login__card ${shake ? 'shake' : ''}`}>
        <div className="admin-login__logo">
          <div className="admin-login__logo-icon">M</div>
          <div className="admin-login__logo-text">Maha<span>kal</span></div>
        </div>
        <div className="admin-login__title">Admin Panel</div>
        <div className="admin-login__subtitle">Enter your password to access the dashboard</div>
        
        <form onSubmit={handleSubmit} className="admin-login__form">
          <div className="admin-login__input-wrap">
            <span className="admin-login__input-icon">🔒</span>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              className={`admin-login__input ${error ? 'error' : ''}`}
              autoFocus
            />
          </div>
          {error && <div className="admin-login__error">❌ Incorrect password. Try again.</div>}
          <button type="submit" className="admin-login__btn">
            Access Dashboard →
          </button>
        </form>

        <div className="admin-login__footer">
          🔱 Mahakal Property Dealer · Bhind, MP
        </div>
      </div>
    </div>
  );
};

// ─── Dashboard Tab ───
const DashboardTab = ({ inquiries }) => {
  const totalProperties = properties.length;
  const houses = properties.filter(p => p.type === 'house').length;
  const plots = properties.filter(p => p.type === 'plot').length;
  const unreadInquiries = inquiries.filter(i => !i.read).length;

  // Calculate total portfolio value
  const totalValue = properties.reduce((sum, p) => {
    const numMatch = p.price.match(/[\d.]+/);
    if (numMatch) return sum + parseFloat(numMatch[0]);
    return sum;
  }, 0);

  const categories = {};
  properties.forEach(p => {
    categories[p.category] = (categories[p.category] || 0) + 1;
  });

  const categoryLabels = {
    sale_residential: 'Houses for Sale',
    lands_plots: 'Lands & Plots',
    rent_residential: 'Rentals',
    new_projects: 'New Projects',
    rent_commercial: 'Commercial Rent',
    sale_commercial: 'Commercial Sale',
    pg_guest: 'PG & Guest',
  };

  return (
    <div className="admin-dashboard">
      {/* Stats row */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-icon">🏠</div>
          <div className="admin-stat-number">{totalProperties}</div>
          <div className="admin-stat-label">Total Properties</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon">🏡</div>
          <div className="admin-stat-number">{houses}</div>
          <div className="admin-stat-label">Houses</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon">🌍</div>
          <div className="admin-stat-number">{plots}</div>
          <div className="admin-stat-label">Plots / Land</div>
        </div>
        <div className="admin-stat-card admin-stat-card--gold">
          <div className="admin-stat-icon">📩</div>
          <div className="admin-stat-number">{unreadInquiries}</div>
          <div className="admin-stat-label">New Inquiries</div>
        </div>
      </div>

      {/* Portfolio Value */}
      <div className="admin-value-card">
        <div className="admin-value-card__label">Total Portfolio Value</div>
        <div className="admin-value-card__amount">₹ {totalValue.toFixed(0)} Lakh+</div>
        <div className="admin-value-card__sub">Across {totalProperties} active listings</div>
      </div>

      {/* Category breakdown */}
      <div className="admin-section">
        <div className="admin-section-title">📊 Properties by Category</div>
        <div className="admin-category-bars">
          {Object.entries(categories).map(([key, count]) => (
            <div key={key} className="admin-cat-bar">
              <div className="admin-cat-bar__label">{categoryLabels[key] || key}</div>
              <div className="admin-cat-bar__track">
                <div
                  className="admin-cat-bar__fill"
                  style={{ width: `${(count / totalProperties) * 100}%` }}
                ></div>
              </div>
              <div className="admin-cat-bar__count">{count}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Inquiries preview */}
      <div className="admin-section">
        <div className="admin-section-title">📩 Recent Inquiries</div>
        {inquiries.length === 0 ? (
          <div className="admin-empty">No inquiries yet. They'll appear here when customers submit the contact form.</div>
        ) : (
          <div className="admin-inquiry-preview">
            {inquiries.slice(0, 3).map((inq, i) => (
              <div key={i} className={`admin-inquiry-item ${!inq.read ? 'unread' : ''}`}>
                <div className="admin-inquiry-item__name">{inq.name}</div>
                <div className="admin-inquiry-item__type">{inq.type}</div>
                <div className="admin-inquiry-item__time">{new Date(inq.timestamp).toLocaleDateString()}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="admin-section">
        <div className="admin-section-title">⚡ Quick Actions</div>
        <div className="admin-quick-actions">
          <a href="tel:+918435523004" className="admin-action-btn">📞 Call Owner</a>
          <a href="https://wa.me/918435523004" target="_blank" rel="noopener noreferrer" className="admin-action-btn">💬 WhatsApp</a>
          <a href="/" target="_blank" className="admin-action-btn">🌐 View Website</a>
          <a href="https://www.instagram.com/mahakal_properties_bhind/" target="_blank" rel="noopener noreferrer" className="admin-action-btn">📸 Instagram</a>
        </div>
      </div>
    </div>
  );
};

// ─── Properties Tab ───
const PropertiesTab = () => {
  const [filter, setFilter] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const filtered = filter === 'all' ? properties : properties.filter(p => p.category === filter);

  const categoryLabels = {
    all: 'All Properties',
    sale_residential: 'Houses for Sale',
    lands_plots: 'Lands & Plots',
    rent_residential: 'Rentals',
    new_projects: 'New Projects',
    rent_commercial: 'Commercial Rent',
    sale_commercial: 'Commercial Sale',
    pg_guest: 'PG & Guest',
  };

  return (
    <div className="admin-properties">
      <div className="admin-properties-header">
        <div className="admin-properties-count">{filtered.length} Properties</div>
        <select
          className="admin-filter-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {Object.entries(categoryLabels).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
      </div>

      <div className="admin-property-list">
        {filtered.map((property) => (
          <div key={property.id} className="admin-property-row">
            <div
              className="admin-property-row__main"
              onClick={() => setExpandedId(expandedId === property.id ? null : property.id)}
            >
              <div className="admin-property-row__thumb">
                <img src={property.image} alt={property.name.en} loading="lazy" />
              </div>
              <div className="admin-property-row__info">
                <div className="admin-property-row__name">{property.name.en}</div>
                <div className="admin-property-row__location">📍 {property.location}</div>
                <div className="admin-property-row__meta">
                  <span className="admin-property-row__price">{property.price}</span>
                  <span className="admin-property-row__type">{property.type}</span>
                </div>
              </div>
              <div className="admin-property-row__expand">
                {expandedId === property.id ? '▲' : '▼'}
              </div>
            </div>

            {expandedId === property.id && (
              <div className="admin-property-row__details">
                {/* Images */}
                <div className="admin-detail-section">
                  <div className="admin-detail-label">📷 Photos ({property.images.length})</div>
                  <div className="admin-detail-images">
                    {property.images.map((img, i) => (
                      <img key={i} src={img} alt={`Photo ${i + 1}`} loading="lazy" />
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="admin-detail-section">
                  <div className="admin-detail-label">📝 Description</div>
                  <div className="admin-detail-text">{property.description.en}</div>
                </div>

                {/* Stats */}
                <div className="admin-detail-section">
                  <div className="admin-detail-label">📐 Details</div>
                  <div className="admin-detail-stats">
                    <div><strong>ID:</strong> {property.id}</div>
                    <div><strong>Category:</strong> {property.category}</div>
                    <div><strong>Size:</strong> {property.sqft} sqft</div>
                    <div><strong>Beds:</strong> {property.beds || 'N/A'}</div>
                    <div><strong>Baths:</strong> {property.baths || 'N/A'}</div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="admin-detail-section">
                  <div className="admin-detail-label">✨ Amenities</div>
                  <div className="admin-detail-tags">
                    {property.amenities.en.map((am, i) => (
                      <span key={i} className="admin-detail-tag">{am}</span>
                    ))}
                  </div>
                </div>

                {/* Address */}
                {property.address && (
                  <div className="admin-detail-section">
                    <div className="admin-detail-label">📮 Full Address</div>
                    <div className="admin-detail-text" style={{ whiteSpace: 'pre-line' }}>{property.address}</div>
                  </div>
                )}

                {/* Map link */}
                {property.mapUrl && (
                  <div className="admin-detail-section">
                    <a href={property.mapUrl.replace('&output=embed', '')} target="_blank" rel="noopener noreferrer" className="admin-map-link">
                      📍 Open in Google Maps
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Inquiries Tab ───
const InquiriesTab = ({ inquiries, setInquiries }) => {
  const markAsRead = (index) => {
    const updated = [...inquiries];
    updated[index].read = !updated[index].read;
    setInquiries(updated);
    saveInquiries(updated);
  };

  const deleteInquiry = (index) => {
    const updated = inquiries.filter((_, i) => i !== index);
    setInquiries(updated);
    saveInquiries(updated);
  };

  const clearAll = () => {
    if (window.confirm('Are you sure you want to clear all inquiries?')) {
      setInquiries([]);
      saveInquiries([]);
    }
  };

  const unreadCount = inquiries.filter(i => !i.read).length;

  return (
    <div className="admin-inquiries">
      <div className="admin-inquiries-header">
        <div className="admin-inquiries-stats">
          <span>{inquiries.length} Total</span>
          <span className="admin-inquiries-unread">{unreadCount} Unread</span>
        </div>
        {inquiries.length > 0 && (
          <button className="admin-clear-btn" onClick={clearAll}>🗑️ Clear All</button>
        )}
      </div>

      {inquiries.length === 0 ? (
        <div className="admin-empty">
          <div className="admin-empty__icon">📭</div>
          <div className="admin-empty__text">No inquiries yet</div>
          <div className="admin-empty__sub">When customers submit the contact form, their inquiries will appear here.</div>
        </div>
      ) : (
        <div className="admin-inquiry-list">
          {inquiries.map((inq, i) => (
            <div key={i} className={`admin-inq-card ${!inq.read ? 'unread' : ''}`}>
              <div className="admin-inq-card__header">
                <div className="admin-inq-card__name">
                  {!inq.read && <span className="admin-inq-dot"></span>}
                  {inq.name}
                </div>
                <div className="admin-inq-card__time">
                  {new Date(inq.timestamp).toLocaleString()}
                </div>
              </div>
              <div className="admin-inq-card__phone">📞 {inq.phone}</div>
              <div className="admin-inq-card__type">
                <span className="admin-inq-type-badge">{inq.type}</span>
              </div>
              <div className="admin-inq-card__message">{inq.message}</div>
              <div className="admin-inq-card__actions">
                <button onClick={() => markAsRead(i)} className="admin-inq-action">
                  {inq.read ? '📫 Mark Unread' : '📬 Mark Read'}
                </button>
                <a href={`tel:${inq.phone}`} className="admin-inq-action">📞 Call</a>
                <a
                  href={`https://wa.me/91${inq.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ${inq.name}, thanks for your inquiry about "${inq.type}". This is Mahakal Property Dealer.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="admin-inq-action admin-inq-action--wa"
                >💬 WhatsApp</a>
                <button onClick={() => deleteInquiry(i)} className="admin-inq-action admin-inq-action--delete">🗑️</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Analytics Tab ───
const AnalyticsTab = () => {
  const categoryLabels = {
    sale_residential: 'Houses for Sale',
    lands_plots: 'Lands & Plots',
    rent_residential: 'Rentals',
    new_projects: 'New Projects',
    rent_commercial: 'Commercial Rent',
    sale_commercial: 'Commercial Sale',
    pg_guest: 'PG & Guest',
  };

  // Category counts
  const categories = {};
  properties.forEach(p => {
    categories[p.category] = (categories[p.category] || 0) + 1;
  });

  // Price distribution
  const priceRanges = { 'Under ₹15L': 0, '₹15L - ₹25L': 0, '₹25L - ₹35L': 0, 'Above ₹35L': 0 };
  properties.forEach(p => {
    const numMatch = p.price.match(/[\d.]+/);
    if (numMatch) {
      const val = parseFloat(numMatch[0]);
      if (val < 15) priceRanges['Under ₹15L']++;
      else if (val < 25) priceRanges['₹15L - ₹25L']++;
      else if (val < 35) priceRanges['₹25L - ₹35L']++;
      else priceRanges['Above ₹35L']++;
    }
  });

  // Type distribution
  const types = {};
  properties.forEach(p => {
    types[p.type] = (types[p.type] || 0) + 1;
  });

  // Location analysis
  const locations = {};
  properties.forEach(p => {
    const loc = p.location.split(',')[0].trim();
    locations[loc] = (locations[loc] || 0) + 1;
  });

  const maxCat = Math.max(...Object.values(categories));
  const maxPrice = Math.max(...Object.values(priceRanges));

  return (
    <div className="admin-analytics">
      {/* Category Distribution */}
      <div className="admin-section">
        <div className="admin-section-title">📊 Category Distribution</div>
        <div className="admin-chart-bars">
          {Object.entries(categories).map(([key, count]) => (
            <div key={key} className="admin-chart-bar">
              <div className="admin-chart-bar__label">{categoryLabels[key] || key}</div>
              <div className="admin-chart-bar__track">
                <div
                  className="admin-chart-bar__fill"
                  style={{ width: `${(count / maxCat) * 100}%` }}
                >
                  <span>{count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Distribution */}
      <div className="admin-section">
        <div className="admin-section-title">💰 Price Range Distribution</div>
        <div className="admin-chart-bars">
          {Object.entries(priceRanges).map(([range, count]) => (
            <div key={range} className="admin-chart-bar">
              <div className="admin-chart-bar__label">{range}</div>
              <div className="admin-chart-bar__track">
                <div
                  className="admin-chart-bar__fill admin-chart-bar__fill--alt"
                  style={{ width: `${maxPrice > 0 ? (count / maxPrice) * 100 : 0}%` }}
                >
                  <span>{count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Type Breakdown */}
      <div className="admin-section">
        <div className="admin-section-title">🏷️ Property Types</div>
        <div className="admin-type-grid">
          {Object.entries(types).map(([type, count]) => (
            <div key={type} className="admin-type-card">
              <div className="admin-type-card__icon">{type === 'house' ? '🏠' : '🌍'}</div>
              <div className="admin-type-card__count">{count}</div>
              <div className="admin-type-card__label">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Location Heatmap */}
      <div className="admin-section">
        <div className="admin-section-title">📍 Locations</div>
        <div className="admin-location-list">
          {Object.entries(locations).sort((a, b) => b[1] - a[1]).map(([loc, count]) => (
            <div key={loc} className="admin-location-item">
              <span className="admin-location-name">{loc}</span>
              <span className="admin-location-count">{count} {count === 1 ? 'property' : 'properties'}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Property Details Summary */}
      <div className="admin-section">
        <div className="admin-section-title">📋 All Properties Summary</div>
        <div className="admin-summary-table">
          <div className="admin-summary-row admin-summary-row--header">
            <div>#</div>
            <div>Name</div>
            <div>Price</div>
            <div>Type</div>
          </div>
          {properties.map((p) => (
            <div key={p.id} className="admin-summary-row">
              <div>{p.id}</div>
              <div>{p.name.en}</div>
              <div>{p.price}</div>
              <div className="admin-summary-type">{p.type}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// ─── Main Admin Page ───
const AdminPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem('mahakal_admin') === 'true') {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    setInquiries(getInquiries());
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('mahakal_admin');
    setAuthenticated(false);
  };

  if (!authenticated) {
    return <AdminLogin onLogin={() => setAuthenticated(true)} />;
  }

  const tabs = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'properties', icon: '🏠', label: 'Properties' },
    { id: 'inquiries', icon: '📩', label: 'Inquiries', badge: inquiries.filter(i => !i.read).length },
    { id: 'analytics', icon: '📈', label: 'Analytics' },
  ];

  return (
    <div className="admin-page">
      {/* Admin Header */}
      <div className="admin-header">
        <div className="admin-header__left">
          <div className="admin-header__logo">M</div>
          <div>
            <div className="admin-header__title">Mahakal Admin</div>
            <div className="admin-header__subtitle">Property Dashboard</div>
          </div>
        </div>
        <button className="admin-logout-btn" onClick={handleLogout}>
          Logout ↗
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="admin-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`admin-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="admin-tab__icon">{tab.icon}</span>
            <span className="admin-tab__label">{tab.label}</span>
            {tab.badge > 0 && <span className="admin-tab__badge">{tab.badge}</span>}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="admin-content">
        {activeTab === 'dashboard' && <DashboardTab inquiries={inquiries} />}
        {activeTab === 'properties' && <PropertiesTab />}
        {activeTab === 'inquiries' && <InquiriesTab inquiries={inquiries} setInquiries={setInquiries} />}
        {activeTab === 'analytics' && <AnalyticsTab />}
      </div>
    </div>
  );
};

export default AdminPage;
