import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Accordion from '../components/Accordion.jsx';
import Newsletter from '../components/Newsletter.jsx';
import { PageHeader, SectionHeading, Testimonial } from '../components/ui.jsx';
import { routeMeta } from '../lib/site.js';
import { TESTIMONIALS } from '../lib/content.js';
import { breadcrumbLd } from '../lib/jsonld.js';
import { community, hero } from '../lib/images.js';

const meta = routeMeta('/community');

export default function Community() {
  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path="/community"
        jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Community', path: '/community' }])}
      />
      <PageHeader
        kicker="The Golden Jazz circle"
        title="A community of listeners, not collectors of likes"
        intro="What began as a Sunday listening room in New Orleans has grown into a far-flung circle of readers who share one belief: that this music is better when it is shared."
        image={hero.club}
        imageAlt="Friends gathered around a turntable in a warmly lit room"
      />

      <section className="container-prose py-16">
        <div className="prose-jazz">
          <h2>What the community is</h2>
          <p>
            We are not a social network and we are not a marketplace. The Golden Jazz Classics community is
            a loose, generous fellowship of people who love jazz and the analog rituals around it — readers
            of our journal, subscribers to the Sunday letter, and the many correspondents who write to us
            with questions, memories and discoveries of their own.
          </p>
          <p>
            Much of the community happens quietly, in letters and replies. Some of it happens in person, when
            readers passing through New Orleans climb the stairs to listen. And a good deal of it lives right
            here, in the stories our readers allow us to share so that others can recognize themselves in them.
          </p>
        </div>
      </section>

      <section className="border-y border-gold/10 bg-charcoal-900/50 py-16">
        <div className="container-luxe">
          <SectionHeading kicker="Listener stories" title="Voices from the circle" />
          <div className="mt-10 grid gap-4">
            <Accordion title="“I inherited a collection and had no idea where to begin”" kicker="Reader letter" triggerLabel="Read the story">
              <p>
                &ldquo;My uncle left me close to a thousand records and a turntable I was terrified to touch.
                I wrote to Golden Jazz Classics half expecting no reply. Instead I got a patient letter that
                started with how to hold a record and ended with which three albums to play first. A year
                later, those records are the center of my home. I think about him every time the needle drops.&rdquo;
              </p>
              <p>— Daniel R., Savannah, GA</p>
            </Accordion>
            <Accordion title="“The Sunday letter changed how I listen”" kicker="Reader letter" triggerLabel="Read the story">
              <p>
                &ldquo;I used to put music on and then do five other things. The Sunday essays gave me
                permission to just sit and listen to one record, start to finish, the way it was meant to be
                heard. It sounds small. It changed my weekends. It might have changed my life.&rdquo;
              </p>
              <p>— Priya M., Seattle, WA</p>
            </Accordion>
            <Accordion title="“A vinyl restoration that felt like a resurrection”" kicker="Reader letter" triggerLabel="Read the story">
              <p>
                &ldquo;I found a water-damaged box of records at an estate sale — beautiful titles, filthy
                jackets, sleeves falling apart. Following the cleaning and care guide here, I brought most of
                them back. A copy of a 1961 session that I thought was ruined now plays almost silently. There
                is no feeling quite like rescuing music everyone else gave up on.&rdquo;
              </p>
              <p>— Frank D., Cleveland, OH</p>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="container-luxe py-16">
        <SectionHeading kicker="In their words" title="What members say" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <Testimonial key={t.name} {...t} image={community[0]} />
          ))}
        </div>
      </section>

      <section className="border-y border-gold/10 bg-charcoal-900/50 py-16">
        <div className="container-prose prose-jazz">
          <h2>How to take part</h2>
          <p>There is no membership fee and no application. To become part of the circle, you simply:</p>
          <ul>
            <li>Subscribe to the Liner Notes Letter and read along on Sunday mornings.</li>
            <li>Write to us with your questions, memories or suggestions — we answer personally.</li>
            <li>Share a story you would like other readers to hear, and tell us if we may publish it.</li>
            <li>If you find yourself in New Orleans, get in touch about visiting the listening room.</li>
          </ul>
          <h2>A few house values</h2>
          <p>
            Because the community is built on generosity, we ask a little of everyone who joins it. Be kind
            to beginners — you were one once. Trade knowledge freely and grade records honestly. Disagree
            about the music as much as you like, but never with cruelty. And remember that the point of all
            of it is the same: to send one another back to the records with fresh ears.
          </p>
        </div>
      </section>

      <section className="container-luxe py-16">
        <Newsletter />
        <p className="mt-8 text-center text-cream/75">
          Prefer to start by reading? <Link to="/blog" className="link-gold">Browse the journal →</Link>
        </p>
      </section>
    </>
  );
}
