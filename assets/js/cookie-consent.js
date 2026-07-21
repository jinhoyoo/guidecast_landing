// GDPR / EDPB cookie consent banner + Google Consent Mode v2.
// Consent defaults to "denied" and gtag.js itself is never requested from
// Google until the visitor explicitly accepts analytics cookies.
(function () {
  const CONSENT_KEY = 'gc_cookie_consent';
  const GA_ID = window.GUIDECAST_GA_ID || '';

  // The Consent Mode v2 defaults and the gtag() stub are already set up in
  // _includes/head.html, at the very top of <head>, before this script loads.
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  function loadGoogleAnalytics() {
    if (!GA_ID || document.getElementById('ga-script')) return;
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  function getStoredConsent() {
    try {
      const raw = localStorage.getItem(CONSENT_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function storeConsent(granted) {
    try {
      localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({ granted: granted, timestamp: new Date().toISOString() })
      );
    } catch (e) {
      // localStorage unavailable (private mode etc.) — consent still applies for this page view
    }
  }

  function applyConsent(granted) {
    gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });
    if (granted) loadGoogleAnalytics();
  }

  function showBanner() {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) banner.classList.add('visible');
  }

  function hideBanner() {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) banner.classList.remove('visible');
  }

  // Exposed so the footer's "Cookie Settings" link can reopen the banner at any time.
  window.reopenCookieConsent = function () {
    showBanner();
  };

  document.addEventListener('DOMContentLoaded', function () {
    const acceptBtn = document.getElementById('cookie-accept');
    const rejectBtn = document.getElementById('cookie-reject');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        storeConsent(true);
        applyConsent(true);
        hideBanner();
      });
    }

    if (rejectBtn) {
      rejectBtn.addEventListener('click', function () {
        storeConsent(false);
        applyConsent(false);
        hideBanner();
      });
    }

    const stored = getStoredConsent();
    if (stored) {
      applyConsent(stored.granted);
    } else {
      showBanner();
    }
  });
})();
