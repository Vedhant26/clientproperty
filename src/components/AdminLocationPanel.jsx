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
    <>
      {/* Subtle admin trigger — small lock icon, bottom-right of page */}
      <button
        className="admin-loc-trigger"
        onClick={() => setIsOpen(true)}
        title="Admin Access"
        aria-label="Admin Location Access"
      >
        {isAuth ? '🔓' : '🔒'}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="admin-loc-overlay"
          onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
          <div className={`admin-loc-modal ${shake ? 'shake' : ''}`}>
            {/* Header */}
            <div className="admin-loc-header">
              <div className="admin-loc-title">
                <span className="admin-loc-icon">🛡️</span>
                Admin — Property Location
              </div>
              <button className="admin-loc-close" onClick={() => setIsOpen(false)}>✕</button>
            </div>

            {!isAuth ? (
              /* Password Gate */
              <div className="admin-loc-body">
                <p className="admin-loc-hint">Enter admin password to view private location details.</p>
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
                  Unlock Location 🔓
                </button>
              </div>
            ) : (
              /* Location View */
              <div className="admin-loc-body">
                <div className="admin-loc-address">
                  <div className="admin-loc-address-label">📍 Full Address</div>
                  <div className="admin-loc-address-text">
                    {(property.address || property.location).split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>

                {property.adminMapUrl && (
                  <div className="admin-loc-map">
                    <iframe
                      src={property.adminMapUrl}
                      width="100%"
                      height="260"
                      style={{ border: 0, borderRadius: '10px' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Admin Property Location"
                    />
                  </div>
                )}

                <button className="admin-loc-lock-btn" onClick={handleLock}>
                  🔒 Lock & Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AdminLocationPanel;
