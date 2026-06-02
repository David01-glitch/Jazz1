// Google Analytics 4 + Consent Mode v2 helpers.
// GA is loaded in index.html <head>. These helpers are safe to call before
// consent is granted — gtag simply queues events while storage is denied.

const GA_ID = 'G-4J046JXWVC';
const CONSENT_KEY = 'gjc_consent';

function gtag(...args) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

export function hasStoredConsent() {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch (e) {
    return null;
  }
}

// Update Consent Mode v2 signals. accepted=true grants ad + analytics storage.
export function setConsent(accepted) {
  if (typeof window === 'undefined') return;
  const value = accepted ? 'granted' : 'denied';
  gtag('consent', 'update', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch (e) {
    /* storage unavailable — consent still applied for the session */
  }
}

export function trackPageView(path, title) {
  if (typeof window === 'undefined') return;
  gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
    send_to: GA_ID,
  });
}

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return;
  gtag('event', name, { ...params, send_to: GA_ID });
}

export { GA_ID, CONSENT_KEY };
