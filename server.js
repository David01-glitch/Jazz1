// Production server for Golden Jazz Classics.
// Express + gzip compression, long-cache static assets, and a pre-rendered
// HTML fallback so every route returns a real, content-filled 200 response.
import express from 'express';
import compression from 'compression';
import path from 'node:path';
import url from 'node:url';
import fs from 'node:fs';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;

const app = express();
app.disable('x-powered-by');
app.use(compression());

// Hashed build assets — safe to cache aggressively and immutably.
app.use(
  '/assets',
  express.static(path.join(distDir, 'assets'), {
    immutable: true,
    maxAge: '1y',
  })
);

// Other static files (favicon, og image, robots, sitemap, root HTML).
// `redirect: false` stops the trailing-slash 301 on directories so that
// interior routes are served as 200 directly by the fallback below.
app.use(
  express.static(distDir, {
    etag: true,
    lastModified: true,
    maxAge: '1h',
    redirect: false,
    extensions: ['html'],
  })
);

// SPA-style fallback that serves the matching PRE-RENDERED HTML for the route.
// Falls back to the 404 page (HTTP 404) for unknown paths.
app.get('*', (req, res) => {
  const safePath = path.normalize(req.path).replace(/^(\.\.[/\\])+/, '');
  const candidate = path.join(distDir, safePath, 'index.html');

  if (candidate.startsWith(distDir) && fs.existsSync(candidate)) {
    return res.sendFile(candidate);
  }

  const notFound = path.join(distDir, '404.html');
  if (fs.existsSync(notFound)) {
    return res.status(404).sendFile(notFound);
  }
  return res.status(404).sendFile(path.join(distDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Golden Jazz Classics running on http://localhost:${PORT}`);
});
