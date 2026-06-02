import Seo from './Seo.jsx';
import { PageHeader } from './ui.jsx';
import { routeMeta, SITE } from '../lib/site.js';
import { breadcrumbLd } from '../lib/jsonld.js';

export default function LegalPage({ path, title, kicker, intro, updated, sections }) {
  const meta = routeMeta(path);
  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path={path}
        jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: meta.label, path }])}
      />
      <PageHeader kicker={kicker} title={title} intro={intro} />
      <section className="container-prose py-16">
        <p className="text-sm text-cream/55">Last updated: {updated}</p>
        <div className="prose-jazz mt-8">
          {sections.map((s, i) => (
            <section key={i} id={s.id} className="scroll-mt-24">
              <h2>{`${i + 1}. ${s.heading}`}</h2>
              {s.paras?.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
              {s.list && (
                <ul>
                  {s.list.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <hr className="my-10 border-gold/15" />
          <p className="text-sm text-cream/70">
            Questions about this policy? Contact {SITE.name} at{' '}
            <a href={`mailto:${SITE.email}`} className="link-gold">{SITE.email}</a> or {SITE.phone}, or by post
            at {SITE.address.full}.
          </p>
        </div>
      </section>
    </>
  );
}
