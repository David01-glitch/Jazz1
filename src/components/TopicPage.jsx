import { Link } from 'react-router-dom';
import Seo from './Seo.jsx';
import Accordion from './Accordion.jsx';
import { PageHeader, SectionHeading } from './ui.jsx';
import { routeMeta } from '../lib/site.js';
import { breadcrumbLd } from '../lib/jsonld.js';

// Shared template for the six editorial topic pages. Content is passed in as
// data so every page renders fully into static HTML.
export default function TopicPage({
  path,
  header,
  lead,
  sections = [],
  gallery,
  accordions = [],
  accordionTitle = 'Go deeper',
  accordionIntro,
  related = [],
  jsonLd,
}) {
  const meta = routeMeta(path);
  const crumbs = breadcrumbLd([{ name: 'Home', path: '/' }, { name: meta.label, path }]);

  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path={path}
        image="/og-default.jpg"
        jsonLd={jsonLd ? [crumbs, jsonLd] : crumbs}
      />
      <PageHeader {...header} />

      {/* Lead */}
      <section className="container-prose py-16">
        <div className="prose-jazz text-lg">
          {lead.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Optional gallery strip */}
      {gallery && gallery.length > 0 && (
        <section className="border-y border-gold/10 bg-charcoal-900/50 py-12">
          <div className="container-luxe grid grid-cols-2 gap-4 sm:grid-cols-4">
            {gallery.map((g, i) => (
              <figure key={i} className="overflow-hidden rounded-xl border border-gold/20">
                <img src={g.src} alt={g.alt} loading="lazy" className="aspect-square h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Body sections */}
      <section className="container-luxe py-16">
        <div className="mx-auto max-w-3xl space-y-16">
          {sections.map((s) => (
            <article key={s.id} id={s.id} className="prose-jazz scroll-mt-24">
              {s.image && (
                <div className="mb-6 overflow-hidden rounded-2xl border border-gold/20">
                  <img src={s.image} alt={s.imageAlt || ''} loading="lazy" className="aspect-[16/9] w-full object-cover" />
                </div>
              )}
              <h2 className="!mt-0">{s.title}</h2>
              {s.paras.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {s.list && (
                <ul>
                  {s.list.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Expandable deep-dives */}
      {accordions.length > 0 && (
        <section className="border-t border-gold/10 bg-charcoal-900/50 py-16">
          <div className="container-prose">
            <SectionHeading kicker="Read more" title={accordionTitle} intro={accordionIntro} align="center" />
            <div className="mt-10 space-y-3">
              {accordions.map((a) => (
                <Accordion key={a.title} title={a.title} kicker={a.kicker} triggerLabel="Read more">
                  {a.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </Accordion>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related links */}
      {related.length > 0 && (
        <section className="container-luxe py-16">
          <h2 className="text-2xl text-gold-light">Continue exploring</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            {related.map((r) => (
              <Link key={r.to} to={r.to} className="btn-outline">
                {r.label}
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
