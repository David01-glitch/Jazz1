// Static pre-rendering: renders every route to real HTML using react-dom/server
// (no headless browser). Each route's full content lands in the HTML source, so
// the site is complete and crawlable with JavaScript disabled.
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

const { render } = await import(path.join(root, 'dist-ssr', 'entry-server.js'));
const { PRERENDER_PATHS } = await import(path.join(root, 'src', 'lib', 'site.js'));

// Strip the static SEO defaults from the template so that each prerendered
// page emits exactly one set of route-specific SEO tags from react-helmet-async.
// The defaults remain in the source index.html as a fallback for any tooling
// that inspects the raw template.
const rawTemplate = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const template = rawTemplate.replace(
  /<!--seo-default-start-->[\s\S]*?<!--seo-default-end-->/,
  ''
);

function outFileFor(routePath) {
  if (routePath === '/') return path.join(distDir, 'index.html');
  if (routePath === '/404') return path.join(distDir, '404.html');
  return path.join(distDir, routePath.replace(/^\//, ''), 'index.html');
}

let count = 0;
for (const routePath of PRERENDER_PATHS) {
  const { html, head } = render(routePath);
  const page = template
    .replace('<!--ssr-head-->', head)
    .replace('<!--ssr-outlet-->', html);

  const outFile = outFileFor(routePath);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, page);
  count += 1;
  console.log(`  prerendered ${routePath} -> ${path.relative(root, outFile)}`);
}

console.log(`\n✔ Pre-rendered ${count} routes to static HTML.`);
