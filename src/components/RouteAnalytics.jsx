import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics.js';

// Fires a GA page_view on each client-side route change (consent-aware).
export default function RouteAnalytics() {
  const { pathname } = useLocation();
  const first = useRef(true);
  useEffect(() => {
    // The initial page_view is already sent by gtag config in index.html.
    if (first.current) {
      first.current = false;
      return;
    }
    trackPageView(pathname);
  }, [pathname]);
  return null;
}
