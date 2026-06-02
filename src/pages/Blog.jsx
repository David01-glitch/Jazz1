import Seo from '../components/Seo.jsx';
import Accordion from '../components/Accordion.jsx';
import { PageHeader } from '../components/ui.jsx';
import { routeMeta } from '../lib/site.js';
import { ARTICLES } from '../lib/content.js';
import { breadcrumbLd } from '../lib/jsonld.js';
import { blog as blogImages } from '../lib/images.js';

const meta = routeMeta('/blog');

export default function Blog() {
  const featured = ARTICLES[0];
  const rest = ARTICLES.slice(1);

  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path="/blog"
        image="/og-default.jpg"
        jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Journal', path: '/blog' }])}
      />
      <PageHeader
        kicker="The Journal"
        title="Essays, listening notes & the long story of the music"
        intro="Twelve pieces of original writing on jazz history, collecting, analog sound and the rooms where it all happened. Open any essay to read it in full — right here on the page."
        image={blogImages[2]}
        imageAlt="An open notebook and a stack of jazz records under warm light"
      />

      {/* Featured article */}
      <section className="container-luxe py-16">
        <article className="grid gap-8 overflow-hidden rounded-2xl border border-gold/20 bg-charcoal-800/60 shadow-panel lg:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden lg:aspect-auto">
            <img src={featured.image} alt="" className="h-full w-full object-cover" loading="eager" />
          </div>
          <div className="flex flex-col justify-center p-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold/80">
              Featured · {featured.category} · {featured.readingTime}
            </p>
            <h2 className="mt-3 text-3xl leading-tight">{featured.title}</h2>
            <p className="mt-2 text-sm text-cream/60">By {featured.author}</p>
            <p className="mt-4 text-cream/80">{featured.excerpt}</p>
            <div className="mt-6">
              <Accordion title="Read the full essay" defaultOpen triggerLabel="Read the full essay">
                {featured.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Accordion>
            </div>
          </div>
        </article>
      </section>

      {/* Article grid */}
      <section className="container-luxe pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          {rest.map((a) => (
            <article key={a.id} className="flex flex-col overflow-hidden rounded-2xl border border-gold/20 bg-charcoal-800/50 shadow-panel">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={a.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold/80">
                  {a.category} · {a.readingTime}
                </p>
                <h3 className="mt-2 text-2xl leading-snug">{a.title}</h3>
                <p className="mt-1 text-sm text-cream/60">By {a.author}</p>
                <p className="mt-3 flex-1 text-sm text-cream/80">{a.excerpt}</p>
                <div className="mt-5">
                  <Accordion title="Read more" triggerLabel="Read more">
                    {a.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </Accordion>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
