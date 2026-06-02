import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './index.css';

// Signal to CSS that JS is active so accordions start collapsed.
// With JS disabled the `no-js` class remains and all content stays expanded.
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

const root = document.getElementById('root');

const tree = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// Hydrate the pre-rendered static HTML; fall back to a fresh render if empty.
if (root.hasChildNodes()) {
  hydrateRoot(root, tree);
} else {
  createRoot(root).render(tree);
}
