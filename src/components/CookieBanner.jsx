import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { hasStoredConsent, setConsent, trackEvent } from '../utils/analytics.js';

// Elegant slide-up consent banner wired to Google Consent Mode v2.
// Choice is persisted in localStorage; analytics/ads storage stays denied
// until the visitor explicitly accepts.
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasStoredConsent()) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const choose = (accepted) => {
    setConsent(accepted);
    trackEvent('consent_choice', { accepted });
    setVisible(false);
  };

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-[60] transition-all duration-500 ease-smooth ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
      }`}
    >
      <div className="container-luxe pb-4">
        <div
          role="dialog"
          aria-label="Cookie and privacy consent"
          aria-modal="false"
          className="panel flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="max-w-2xl">
            <p className="font-display text-lg text-gold-light">A note on cookies</p>
            <p className="mt-1 text-sm text-cream/80">
              We use privacy-respecting analytics to understand which essays resonate. Cookies for
              analytics and advertising stay switched off until you accept. Read our{' '}
              <Link to="/legal/privacy" className="link-gold">privacy policy</Link>.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button type="button" onClick={() => choose(false)} className="btn-outline px-5 py-2.5 text-xs">
              Decline
            </button>
            <button type="button" onClick={() => choose(true)} className="btn-gold px-5 py-2.5 text-xs">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
