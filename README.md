# Golden Jazz Classics

A jazz music appreciation blog exploring legendary artists and vinyl collections — built as a
**statically pre-rendered** React site so every page is fully readable in the raw HTML source,
even with JavaScript disabled. Designed to pass Google Ads review (no thin content, no JS-only
shells, no broken assets).

- **Stack:** React 18 · Vite 5 · Tailwind CSS 3 · React Router 6 · Express 4 + compression
- **Pre-rendering:** `react-dom/server` static rendering (no headless browser) writes real HTML
  for all 18 routes
- **SEO:** per-route canonical / Open Graph / Twitter tags, Organization + WebSite + FAQ + Article
  JSON-LD, generated `robots.txt` and `sitemap.xml`
- **Privacy:** Google Analytics 4 with **Consent Mode v2** (analytics & ad storage denied by
  default) and an elegant slide-up cookie banner
- **Assets:** all imagery is downloaded and bundled locally under `src/assets/images/` — nothing
  is hotlinked

---

## Project structure

```
.
├── index.html                 # App shell: GA + Consent Mode v2, SSR placeholders
├── server.js                  # Express production server (compression, caching, SPA fallback)
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── scripts/
│   ├── prerender.mjs           # Renders every route to static HTML
│   └── generate-seo.mjs        # Writes robots.txt + sitemap.xml
├── public/                     # favicon, og-default.jpg (copied as-is)
└── src/
    ├── main.jsx                # Client hydration entry
    ├── entry-server.jsx        # SSR render() used by prerender
    ├── App.jsx                 # Routes
    ├── index.css               # Tailwind layers + design system
    ├── assets/images/          # Local images (hero, artists, vinyl, instruments, …)
    ├── components/             # Navbar, Footer, CookieBanner, Accordion, SEO, TopicPage, …
    ├── pages/                  # One file per route (incl. legal/ and 404)
    ├── lib/                    # site config, routes, content, images, JSON-LD
    └── utils/analytics.js      # trackEvent / trackPageView / consent helpers
```

## Requirements

- **Node 20.x** (see `.nvmrc`)
- npm 10+

## Installation

```bash
npm install
```

## npm scripts

| Script                 | What it does                                                        |
| ---------------------- | ------------------------------------------------------------------- |
| `npm run dev`          | Start the Vite dev server at `http://localhost:5173`                |
| `npm run build`        | Full production build: client → SSR → prerender → robots/sitemap    |
| `npm run build:client` | Vite client build into `dist/`                                      |
| `npm run build:server` | Vite SSR build into `dist-ssr/`                                     |
| `npm run prerender`    | Write static HTML for every route into `dist/`                      |
| `npm run build:seo`    | Generate `dist/robots.txt` and `dist/sitemap.xml`                   |
| `npm start`            | Serve the built `dist/` with Express (`server.js`)                  |
| `npm run preview`      | Preview the client build with Vite's static server                  |

## Development

```bash
npm run dev
```

Visit `http://localhost:5173`. Routing, the cookie banner, and accordions all work in dev.
Pre-rendering only runs at build time.

## Production build

```bash
npm run build      # produces ./dist with one index.html per route + 404.html
npm start          # serves ./dist on $PORT (default 3000)
```

### Verifying the "JS-off" requirement

After building, confirm content exists in the raw HTML:

```bash
# Should print real headings/paragraphs, not an empty <div id="root">
grep -o "Golden age of jazz" dist/jazz-legends/index.html
cat dist/legal/terms/index.html | sed -n '1,40p'
```

Or open any file in `dist/**/index.html` in a browser with JavaScript disabled — the full page,
including expandable "Read more" content, remains visible.

---

## Deployment

The build output in `dist/` is fully static (one real HTML file per route), so it can be hosted
on any static host **or** behind the included Express server.

### Heroku (Express server)

`Procfile` and `app.json` are included.

```bash
heroku create golden-jazz-classics
git push heroku main
# Heroku runs `npm install` + `npm run build` (heroku-postbuild not required;
# build runs via the Node buildpack) then `node server.js` from the Procfile.
```

If you prefer an explicit build step, add to `package.json`:
`"heroku-postbuild": "npm run build"`.

### Vercel (static)

`vercel.json` sets `buildCommand` and `outputDirectory`.

```bash
npm i -g vercel
vercel            # preview
vercel --prod     # production
```

`cleanUrls` is enabled so `/about` serves `dist/about/index.html`.

### Netlify (static)

`netlify.toml` sets the build command, publish dir and Node version.

```bash
npm i -g netlify-cli
netlify deploy            # draft
netlify deploy --prod     # production
```

`dist/404.html` is served automatically for unmatched paths.

### AWS Amplify (static)

`amplify.yml` is included. In the Amplify console, connect the repo and Amplify will run
`npm ci` → `npm run build` and publish `dist/`. No extra configuration is required.

---

## Analytics & consent

- GA4 (`G-4J046JXWVC`) is embedded in `index.html`.
- Consent Mode v2 defaults to **denied** for `ad_storage`, `ad_user_data`, `ad_personalization`
  and `analytics_storage`.
- The cookie banner calls `setConsent(true)` on accept, which updates consent to granted and
  persists the choice in `localStorage` (`gjc_consent`).
- Route changes fire `page_view` via `src/utils/analytics.js`.

## Business identity

**Golden Jazz Classics** · 330 Royal Garden St, New Orleans, LA 70130 ·
(504) 739-2814 · goldenjazzclassics@gmail.com

## License

© Golden Jazz Classics. All rights reserved.
