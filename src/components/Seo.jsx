import { Helmet } from 'react-helmet-async';
import { SITE } from '../lib/site.js';

// Per-route SEO: title, description, canonical, Open Graph, Twitter, JSON-LD.
// Rendered into static <head> by the prerender step (react-helmet-async).
export default function Seo({ title, description, path = '/', image, type = 'website', jsonLd }) {
  const canonical = `${SITE.url}${path === '/' ? '' : path}`;
  const ogImage = image ? `${SITE.url}${image}` : `${SITE.url}/og-default.jpg`;
  const blocks = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow, max-image-preview:large" />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
}
