import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Accordion from '../components/Accordion.jsx';
import Newsletter from '../components/Newsletter.jsx';
import { Section, SectionHeading, FeatureCard, VinylDisc, Testimonial, StatRow } from '../components/ui.jsx';
import { SITE, routeMeta } from '../lib/site.js';
import { ARTICLES, FAQS, TESTIMONIALS } from '../lib/content.js';
import { organizationLd, websiteLd, faqLd } from '../lib/jsonld.js';
import { hero, artists, vinyl, instruments, albums } from '../lib/images.js';

const meta = routeMeta('/');

const categories = [
  { to: '/jazz-legends', title: 'Jazz Legends', image: artists[0], alt: 'A jazz saxophonist performing under warm stage light', text: 'Portraits of the artists who invented a language — from New Orleans pioneers to the bebop revolutionaries.' },
  { to: '/vinyl-collections', title: 'Vinyl Collections', image: vinyl[0], alt: 'A collection of vinyl records on a wooden shelf', text: 'How to start, grade, restore and care for a jazz record library that lasts a lifetime.' },
  { to: '/classic-albums', title: 'Classic Albums', image: albums[0], alt: 'A classic jazz album resting beside a turntable', text: 'The essential records every listener should own, with notes on the sessions that made them immortal.' },
  { to: '/instrument-spotlights', title: 'Instrument Spotlights', image: instruments[0], alt: 'A brass trumpet resting on a dark surface', text: 'The saxophone, trumpet, piano and drums — the history and tone of the voices of jazz.' },
  { to: '/live-jazz-history', title: 'Live Jazz History', image: hero.club, alt: 'The dim interior of a New Orleans jazz club', text: 'The legendary New Orleans rooms and concert halls where the music found its home.' },
  { to: '/jazz-listening-guides', title: 'Listening Guides', image: vinyl[2], alt: 'A turntable stylus tracing a vinyl groove', text: 'Hi-fi for beginners, analog sound explained, and the patient art of attentive listening.' },
];

const trending = ARTICLES.slice(0, 4);

export default function Home() {
  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path="/"
        jsonLd={[organizationLd, websiteLd, faqLd(FAQS)]}
      />

      {/* 2. Cinematic hero */}
      <section className="relative overflow-hidden border-b border-gold/15">
        <div className="absolute inset-0">
          <img
            src={hero.club}
            alt="A candlelit New Orleans jazz lounge at night, brass instruments catching the golden light"
            className="h-full w-full object-cover"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 via-charcoal-900/75 to-charcoal" />
          <div className="absolute inset-0 bg-noise opacity-60 mix-blend-overlay" aria-hidden />
        </div>
        <div className="container-luxe relative py-28 sm:py-36">
          <span className="eyebrow">New Orleans · Since {SITE.founded}</span>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] sm:text-6xl">
            The golden age of jazz, remembered one record at a time.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/85 sm:text-xl">
            Golden Jazz Classics is a quiet, devoted journal of legendary artists, classic albums and
            the enduring craft of vinyl collecting — written for listeners who believe a great record
            deserves your full attention.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/blog" className="btn-gold">Read the journal</Link>
            <Link to="/classic-albums" className="btn-outline">Where to begin</Link>
          </div>
          <div className="mt-14 max-w-3xl border-t border-gold/15 pt-8">
            <StatRow
              items={[
                { value: '120+', label: 'Essays & guides' },
                { value: '1950s', label: 'Roots in New Orleans' },
                { value: '12k', label: 'Sunday readers' },
                { value: '∞', label: 'Records to discover' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 3. Featured categories */}
      <Section className="container-luxe">
        <SectionHeading
          kicker="Explore the archive"
          title="Six ways into the music"
          intro="Whether you have collected for decades or are lowering a needle for the first time, there is a door here with your name on it."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <FeatureCard key={c.to} to={c.to} title={c.title} image={c.image} alt={c.alt} loading={i < 3 ? 'eager' : 'lazy'}>
              {c.text}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* 4. Trending articles */}
      <Section className="border-y border-gold/10 bg-charcoal-900/50">
        <div className="container-luxe">
          <SectionHeading kicker="From the journal" title="What collectors are reading now" />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {trending.map((a) => (
              <article key={a.id} className="group grid gap-5 sm:grid-cols-[160px,1fr]">
                <div className="overflow-hidden rounded-xl border border-gold/20">
                  <img src={a.image} alt="" loading="lazy" className="aspect-square h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold/80">{a.category} · {a.readingTime}</p>
                  <h3 className="mt-2 text-xl leading-snug text-cream">{a.title}</h3>
                  <p className="mt-2 text-sm text-cream/75">{a.excerpt}</p>
                  <Link to="/blog" className="mt-3 inline-block text-sm font-semibold text-gold hover:text-gold-light">
                    Read in the journal →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. Legendary artist spotlight */}
      <Section className="container-luxe">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="eyebrow">Artist spotlight</span>
            <h2 className="mt-3 text-3xl sm:text-4xl">The soloist as author</h2>
            <div className="prose-jazz mt-5">
              <p>
                There is a moment in every great solo when technique falls away and something more
                personal takes its place — a voice, unmistakable, telling you who it is. The legends we
                celebrate here earned that voice through thousands of hours in rooms like the ones along
                our own street in New Orleans.
              </p>
              <p>
                In our Jazz Legends archive we trace those lives in full: the apprenticeships, the rivalries,
                the breakthroughs that changed how everyone after them would play. These are not trivia
                pages. They are portraits, written with the care the music deserves.
              </p>
            </div>
            <Link to="/jazz-legends" className="btn-outline mt-7">Meet the legends</Link>
          </div>
          <div className="order-1 grid grid-cols-3 gap-6 lg:order-2">
            <VinylDisc image={artists[1]} alt="A jazz trumpeter mid-performance" label="The Horns" caption="Trumpet & sax" />
            <VinylDisc image={artists[2]} alt="A pianist at a grand piano in a dim club" label="The Keys" caption="Piano & organ" />
            <VinylDisc image={instruments[2]} alt="A double bass standing in a recording studio" label="The Pulse" caption="Bass & drums" />
          </div>
        </div>
      </Section>

      {/* 6. Vinyl collection showcase */}
      <Section className="border-y border-gold/10 bg-charcoal-900/50">
        <div className="container-luxe">
          <SectionHeading
            kicker="The vinyl life"
            title="A collection is a kind of autobiography"
            intro="Every shelf tells the story of the listener who built it. Here is how to begin yours — and how to care for it well."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FeatureCard to="/vinyl-collections" title="Starting out" image={vinyl[1]} alt="Hands flipping through records in a crate">
              The patient, unhurried approach to a first collection that reflects you rather than the marketplace.
            </FeatureCard>
            <FeatureCard to="/vinyl-collections" title="Grading & value" image={vinyl[3]} alt="A close view of a vinyl record surface">
              Read a record before you buy it, and understand what truly makes a pressing precious.
            </FeatureCard>
            <FeatureCard to="/jazz-listening-guides" title="Analog sound" image={vinyl[4]} alt="A vintage turntable with tonearm lowered">
              Why a needle tracing a continuous groove still moves us in an age of infinite streams.
            </FeatureCard>
          </div>
        </div>
      </Section>

      {/* 7. Community stories */}
      <Section className="container-luxe">
        <SectionHeading
          kicker="The Golden Jazz circle"
          title="Stories from the listening room"
          intro="Our readers are the heart of this place. A few of the voices who make the community what it is."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Accordion title="“The records my father left me”" kicker="Listener story" triggerLabel="Read the story">
            <p>
              When Ruth wrote to us, her late husband&apos;s records had sat untouched for three years. She
              had never run the turntable herself and was afraid of damaging something irreplaceable. Over
              a few letters we walked through the basics — handling, cleaning, lowering the needle — and
              the records began to play again.
            </p>
            <p>
              &ldquo;The first thing I put on was the album from our wedding year,&rdquo; she wrote. &ldquo;I
              had forgotten how the room fills up. It was like he was sitting in his chair again.&rdquo; It
              is the kind of letter that reminds us why we do this. Jazz is memory you can hold.
            </p>
          </Accordion>
          <Accordion title="“From one record to four hundred”" kicker="Collector profile" triggerLabel="Read the story">
            <p>
              Diane found a copy of Kind of Blue at an estate sale and, by her own account, &ldquo;fell down
              a beautiful hole.&rdquo; Within two years she had four hundred records and a turntable she
              describes as &ldquo;the best money I never planned to spend.&rdquo;
            </p>
            <p>
              What changed her collecting, she says, was our guide on starting slowly. &ldquo;I stopped buying
              everything and started buying carefully. Now I actually listen to what I own.&rdquo; Her shelf,
              she tells us, is organized not alphabetically but by mood — a system only its owner could love.
            </p>
          </Accordion>
          <Accordion title="“The shop that sends us beginners”" kicker="From the trade" triggerLabel="Read the story">
            <p>
              Sam runs a small hi-fi shop in Houston and has, by his estimate, sent &ldquo;hundreds&rdquo; of
              nervous first-time buyers to our listening guides. &ldquo;The hi-fi world can be cruel to
              beginners,&rdquo; he says. &ldquo;There&apos;s so much snobbery. You write like you actually want
              people to fall in love with the music.&rdquo;
            </p>
            <p>
              We take that as the highest compliment. The point was never the equipment. It was always the
              moment the music arrives in the room.
            </p>
          </Accordion>
        </div>
        <div className="mt-8">
          <Link to="/community" className="link-gold font-semibold">Visit the community →</Link>
        </div>
      </Section>

      {/* 8. Collector testimonials */}
      <Section className="border-y border-gold/10 bg-charcoal-900/50">
        <div className="container-luxe">
          <SectionHeading kicker="In their words" title="Why collectors trust us" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t) => (
              <Testimonial key={t.name} {...t} />
            ))}
          </div>
        </div>
      </Section>

      {/* 9. Newsletter */}
      <Section className="container-luxe">
        <Newsletter />
      </Section>

      {/* 10. FAQ */}
      <Section className="border-t border-gold/10 bg-charcoal-900/50">
        <div className="container-prose">
          <SectionHeading kicker="Questions" title="Frequently asked" align="center" />
          <div className="mt-10 space-y-3">
            {FAQS.map((f) => (
              <Accordion key={f.q} title={f.q} triggerLabel="Read answer">
                <p>{f.a}</p>
              </Accordion>
            ))}
          </div>
        </div>
      </Section>

      {/* 11. Contact strip */}
      <Section className="container-luxe">
        <div className="panel grid gap-8 p-8 sm:p-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="eyebrow">Say hello</span>
            <h2 className="mt-3 text-3xl">We read every letter</h2>
            <p className="mt-4 text-cream/80">
              Whether you have a question about collecting, a record you want us to write about, or a story
              of your own to share, we would love to hear from you. We are a small operation in New Orleans,
              and correspondence is one of our favorite parts of the work.
            </p>
          </div>
          <address className="not-italic">
            <ul className="space-y-4 text-cream/85">
              <li>
                <span className="block text-xs uppercase tracking-[0.2em] text-gold/80">Visit</span>
                {SITE.address.full}
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.2em] text-gold/80">Call</span>
                <a href={`tel:${SITE.phoneHref}`} className="link-gold">{SITE.phone}</a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.2em] text-gold/80">Write</span>
                <a href={`mailto:${SITE.email}`} className="link-gold">{SITE.email}</a>
              </li>
            </ul>
            <Link to="/contact" className="btn-gold mt-7">Go to contact page</Link>
          </address>
        </div>
      </Section>
    </>
  );
}
