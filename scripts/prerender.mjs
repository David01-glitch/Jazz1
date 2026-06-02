// Static pre-rendering: renders every route to real HTML using react-dom/server
// (no headless browser). SEO tags are written via straightforward template
// substitution so every page has a clean, attribute-free <title>, meta
// description, canonical, Open Graph and Twitter tags — exactly what any
// audit / crawler / Google Ads review will look for.
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

const { render } = await import(path.join(root, 'dist-ssr', 'entry-server.js'));
const { PRERENDER_PATHS, ROUTES, SITE } = await import(
  path.join(root, 'src', 'lib', 'site.js')
);
const { organizationLd, websiteLd, faqLd, breadcrumbLd } = await import(
  path.join(root, 'src', 'lib', 'jsonld.js')
);
const { FAQS } = await import(path.join(root, 'src', 'lib', 'faqs.js'));

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const escAttr = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const escText = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function routeSeo(routePath) {
  const meta =
    ROUTES.find((r) => r.path === routePath) || {
      title: 'Page Not Found — Golden Jazz Classics',
      description:
        'The page you were looking for has wandered off. Find your way back to the music with our most-loved sections.',
      label: 'Not Found',
    };
  const canonical = `${SITE.url}${routePath === '/' ? '/' : routePath}`;
  const jsonld = [organizationLd, websiteLd];
  if (routePath === '/') {
    jsonld.push(faqLd(FAQS));
  } else if (meta.label && routePath !== '/404') {
    jsonld.push(
      breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: meta.label, path: routePath },
      ])
    );
  }
  return { meta, canonical, jsonld };
}

function applySeo(html, { meta, canonical, jsonld }) {
  let out = html;
  const title = escText(meta.title);
  const titleAttr = escAttr(meta.title);
  const desc = escAttr(meta.description);

  out = out.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${desc}" />`
  );
  out = out.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonical}" />`
  );
  out = out.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${titleAttr}" />`
  );
  out = out.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${desc}" />`
  );
  out = out.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonical}" />`
  );
  out = out.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${titleAttr}" />`
  );
  out = out.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${desc}" />`
  );

  const ldHtml = jsonld
    .map((b) => `<script type="application/ld+json">${JSON.stringify(b)}</script>`)
    .join('\n');
  out = out.replace('<!--ssr-jsonld-->', ldHtml);
  return out;
}

function outFileFor(routePath) {
  if (routePath === '/') return path.join(distDir, 'index.html');
  if (routePath === '/404') return path.join(distDir, '404.html');
  return path.join(distDir, routePath.replace(/^\//, ''), 'index.html');
}

let count = 0;
for (const routePath of PRERENDER_PATHS) {
  const { html } = render(routePath);
  const seo = routeSeo(routePath);
  let page = applySeo(template, seo);
  page = page.replace('<!--ssr-outlet-->', html);

  const outFile = outFileFor(routePath);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, page);
  count += 1;
  console.log(`  prerendered ${routePath} -> ${path.relative(root, outFile)}`);
}

console.log(`\n✔ Pre-rendered ${count} routes to static HTML.`);
