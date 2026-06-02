import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './index.css';

// Rendered for each route by scripts/prerender.mjs to produce static HTML.
export function render(url) {
  const helmetContext = {};
  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );

  const { helmet } = helmetContext;
  const head = helmet
    ? [
        // `priority` holds SEO tags hoisted by prioritizeSeoTags
        // (title, description, canonical, Open Graph, JSON-LD, etc.).
        helmet.priority ? helmet.priority.toString() : '',
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ].join('\n')
    : '';

  return { html, head };
}
