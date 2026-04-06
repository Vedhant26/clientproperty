import React, { useState, useEffect, useRef } from 'react';

const ADMIN_PASSWORD = 'tomarmp30s';
const SESSION_KEY = 'mpd_admin_auth';

const AdminLocationPanel = ({ property }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef(null);

  // Check session auth on mount
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'true') {
      setIsAuth(true);
    }
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && !isAuth && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isAuth]);

  const handleUnlock = () => {
    if (input === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setIsAuth(true);
      setError(false);
      setInput('');
    } else {
      setError(true);
      setShake(true);
      setInput('');
      setTimeout(() => setShake(false), 600);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleUnlock();
    if (e.key === 'Escape') setIsOpen(false);
  };

  const handleLock = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuth(false);
    setIsOpen(false);
  };

  return (
    <div className="pd-section admin-map-section">
      <h3 className="pd-subtitle">🗺️ Map Location</h3>
      
      {/* Blurred Map Placeholder (Locked State) */}
      {!isAuth ? (
        <div className="admin-map-preview" onClick={() => setIsOpen(true)}>
          <div className="admin-map-blur-bg"></div>
          <div className="admin-map-overlay-content">
            <span className="admin-map-lock-icon">🔒</span>
            <span className="admin-map-text">Hidden Location</span>
            <span className="admin-map-subline">Click to unlock map details</span>
          </div>
        </div>
      ) : (
        /* Unlocked Map (Inline) */
        <div className="admin-unlocked-map">
          {property.adminMapUrl ? (
            <iframe
              src={property.adminMapUrl}
              width="100%"
              height="280"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Admin Property Location"
            />
          ) : (
            <div className="admin-no-map">Map link not provided for this property.</div>
          )}
          <button className="admin-loc-lock-btn" onClick={handleLock} style={{ marginTop: '0.75rem' }}>
            🔒 Relock Map
          </button>
        </div>
      )}

      {/* Password Promt Modal */}
      {isOpen && !isAuth && (
        <div
          className="admin-loc-overlay"
          onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
          <div className={`admin-loc-modal ${shake ? 'shake' : ''}`}>
            <div className="admin-loc-header">
              <div className="admin-loc-title">
                <span className="admin-loc-icon">🛡️</span>
                Admin Authorization
              </div>
              <button className="admin-loc-close" onClick={() => setIsOpen(false)}>✕</button>
            </div>

            <div className="admin-loc-body">
              <p className="admin-loc-hint">Enter password to reveal the exact map location.</p>
              <div className="admin-loc-input-wrap">
                <input
                  ref={inputRef}
                  type="password"
                  className={`admin-loc-input ${error ? 'error' : ''}`}
                  placeholder="Enter password…"
                  value={input}
                  onChange={(e) => { setInput(e.target.value); setError(false); }}
                  onKeyDown={handleKeyDown}
                />
                {error && <span className="admin-loc-error">❌ Incorrect password</span>}
              </div>
              <button className="admin-loc-btn" onClick={handleUnlock}>
                Unlock Map 🔓
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLocationPanel;
