import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { PageHeader, SectionHeading, StatRow } from '../components/ui.jsx';
import { SITE, routeMeta } from '../lib/site.js';
import { breadcrumbLd, organizationLd } from '../lib/jsonld.js';
import { hero, community, artists } from '../lib/images.js';

const meta = routeMeta('/about');

export default function About() {
  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path="/about"
        jsonLd={[organizationLd, breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])]}
      />
      <PageHeader
        kicker="Our story"
        title="A listening room that became a journal"
        intro="Golden Jazz Classics began the way most worthwhile things do — with a small room, a stack of records and people who could not stop talking about them."
        image={hero.club}
        imageAlt="The warm, dim interior of a New Orleans jazz listening room"
      />

      <section className="container-prose py-16">
        <div className="prose-jazz">
          <h2>How it began</h2>
          <p>
            In {SITE.founded}, in a narrow second-floor room above a quiet stretch of the French Quarter,
            a handful of friends started meeting on Sunday evenings to play records for one another. The
            rule was simple: you brought one record, you said a few words about why it mattered to you,
            and then everyone listened — really listened, all the way through, no talking over the music.
          </p>
          <p>
            What surprised us was not that the evenings were lovely. It was how starved people were for
            exactly this. Friends brought friends. Strangers wrote asking if they could come. Visitors to
            New Orleans heard about the room and climbed the stairs with a record under their arm. We were
            never a business, never a club with a velvet rope. We were simply people who believed that a
            great jazz record deserves your full attention, and that listening together is one of the
            oldest and best human pleasures.
          </p>

          <h2>Why we write</h2>
          <p>
            Golden Jazz Classics grew out of those Sunday evenings. We started writing down the things we
            found ourselves saying again and again — how to start a collection without going broke, why a
            particular 1959 session still sounds like a miracle, what actually makes one pressing worth more
            than another. The writing was for the people who could not make it up the stairs, and then it was
            for people across the country, and now it is for you.
          </p>
          <p>
            We write for adults who have lived a little — people who came to jazz through a parent&apos;s
            collection, or a film, or a late-night radio show, and who want to go deeper without being
            condescended to or sold to. We assume intelligence and curiosity. We explain our terms. And we
            never pretend that loving this music requires expensive equipment or insider knowledge. It
            requires only attention, and attention is free.
          </p>

          <h2>Our mission</h2>
          <p>
            Our mission is to keep the golden age of jazz alive as a living practice rather than a museum
            exhibit — to help a new generation of listeners fall in love with the records, the artists and
            the analog rituals that made this music the great American art form. We do that through honest,
            carefully written essays, listening guides that respect both the beginner and the connoisseur,
            and a community built on generosity rather than gatekeeping.
          </p>
          <blockquote>
            We measure our success not in page views but in needles lowered onto records that would
            otherwise have stayed in their sleeves.
          </blockquote>

          <h2>What we believe</h2>
          <ul>
            <li>That an album is a complete artistic statement meant to be heard in order, in full.</li>
            <li>That the best collection is not the most valuable one, but the most listened-to one.</li>
            <li>That good writing about music should send you back to the music, not replace it.</li>
            <li>That newcomers deserve warmth, not snobbery, and that everyone was once a beginner.</li>
            <li>That New Orleans, where jazz found its first voice, is the right place to keep its memory.</li>
          </ul>
        </div>
      </section>

      <section className="border-y border-gold/10 bg-charcoal-900/50 py-16">
        <div className="container-luxe">
          <SectionHeading kicker="The people behind it" title="A small, devoted editorial team" />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { name: 'Marcus Devereaux', role: 'Founding editor · Jazz history', img: artists[0], bio: 'A New Orleans native who grew up in his grandmother\'s record shop and has been writing about the music for over two decades.' },
              { name: 'Eleanor Hargrove', role: 'Collecting & vinyl culture', img: community[0], bio: 'A lifelong collector and former auction-house specialist who can read a record\'s history from its runout groove.' },
              { name: 'Theodore Lin', role: 'Hi-fi & analog sound', img: community[1], bio: 'An audio engineer turned writer who is on a mission to rescue beginners from the cruelty of audiophile snobbery.' },
            ].map((p) => (
              <figure key={p.name} className="rounded-2xl border border-gold/20 bg-charcoal-800/60 p-6 text-center shadow-panel">
                <img src={p.img} alt={`Portrait representing ${p.name}`} loading="lazy" className="mx-auto h-24 w-24 rounded-full object-cover ring-1 ring-gold/40" />
                <figcaption className="mt-4">
                  <span className="block font-display text-xl text-cream">{p.name}</span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-gold/80">{p.role}</span>
                  <p className="mt-3 text-sm text-cream/75">{p.bio}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-14 border-t border-gold/15 pt-10">
            <StatRow
              items={[
                { value: SITE.founded, label: 'Founded' },
                { value: '120+', label: 'Essays published' },
                { value: '12k', label: 'Sunday readers' },
                { value: 'NOLA', label: 'Our home' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="container-luxe py-16 text-center">
        <h2 className="text-3xl">Come listen with us</h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/80">
          Read the journal, join the Sunday letter, or simply write to tell us what the music has meant
          to you. The door at the top of the stairs is always open.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <Link to="/blog" className="btn-gold">Read the journal</Link>
          <Link to="/contact" className="btn-outline">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
