import { useState } from 'react';
import Seo from '../components/Seo.jsx';
import { PageHeader } from '../components/ui.jsx';
import { SITE, routeMeta } from '../lib/site.js';
import { organizationLd, breadcrumbLd } from '../lib/jsonld.js';
import { trackEvent } from '../utils/analytics.js';

const meta = routeMeta('/contact');

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', topic: 'General', message: '' });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    trackEvent('contact_submit', { topic: form.topic });
    setSent(true);
  };

  // Builds a mailto fallback so the form works without any backend.
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
    `[${form.topic}] Message from ${form.name || 'a reader'}`
  )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;

  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path="/contact"
        jsonLd={[organizationLd, breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])]}
      />
      <PageHeader
        kicker="Contact"
        title="Write to Golden Jazz Classics"
        intro="We are a small editorial team in New Orleans and we read every message. Questions about collecting, story ideas, corrections and partnership inquiries are all welcome."
      />

      <section className="container-luxe py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr,360px]">
          {/* Form */}
          <div className="panel p-8">
            {sent ? (
              <div role="status" className="rounded-xl border border-gold/30 bg-gold/5 p-8 text-center">
                <p className="font-display text-2xl text-gold-light">Thank you — your message is ready to send.</p>
                <p className="mx-auto mt-3 max-w-md text-cream/80">
                  To keep your data private, this site has no third-party form server. Tap the button below
                  to send your note from your own email app, or write to us directly at{' '}
                  <a href={`mailto:${SITE.email}`} className="link-gold">{SITE.email}</a>.
                </p>
                <a href={mailto} className="btn-gold mt-6">Open my email app</a>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-cream/85">Your name</label>
                    <input id="c-name" type="text" required autoComplete="name" value={form.name} onChange={update('name')}
                      className="w-full rounded-xl border border-gold/25 bg-charcoal-900 px-4 py-3 text-cream placeholder:text-cream/40 focus:border-gold focus-visible:outline-none" placeholder="Jane Collector" />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-cream/85">Email address</label>
                    <input id="c-email" type="email" required autoComplete="email" value={form.email} onChange={update('email')}
                      className="w-full rounded-xl border border-gold/25 bg-charcoal-900 px-4 py-3 text-cream placeholder:text-cream/40 focus:border-gold focus-visible:outline-none" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="c-topic" className="mb-1.5 block text-sm font-medium text-cream/85">What is this about?</label>
                  <select id="c-topic" value={form.topic} onChange={update('topic')}
                    className="w-full rounded-xl border border-gold/25 bg-charcoal-900 px-4 py-3 text-cream focus:border-gold focus-visible:outline-none">
                    <option>General</option>
                    <option>A collecting question</option>
                    <option>A story or artist suggestion</option>
                    <option>Newsletter & subscription</option>
                    <option>Partnership or press</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium text-cream/85">Your message</label>
                  <textarea id="c-message" rows={6} required value={form.message} onChange={update('message')}
                    className="w-full rounded-xl border border-gold/25 bg-charcoal-900 px-4 py-3 text-cream placeholder:text-cream/40 focus:border-gold focus-visible:outline-none" placeholder="Tell us what is on your mind…" />
                </div>
                <button type="submit" className="btn-gold w-full sm:w-auto">Send message</button>
                <p className="text-xs text-cream/55">
                  By sending, you agree to our <a href="/legal/privacy" className="link-gold">privacy policy</a>.
                  We will only use your details to reply to you.
                </p>
              </form>
            )}
          </div>

          {/* Business identity */}
          <aside className="space-y-6">
            <div className="panel p-6">
              <h2 className="font-display text-xl text-gold-light">Golden Jazz Classics</h2>
              <address className="mt-4 space-y-4 text-sm not-italic">
                <p>
                  <span className="block text-xs uppercase tracking-[0.2em] text-gold/80">Address</span>
                  {SITE.address.street}<br />
                  {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
                </p>
                <p>
                  <span className="block text-xs uppercase tracking-[0.2em] text-gold/80">Phone</span>
                  <a href={`tel:${SITE.phoneHref}`} className="link-gold">{SITE.phone}</a>
                </p>
                <p>
                  <span className="block text-xs uppercase tracking-[0.2em] text-gold/80">Email</span>
                  <a href={`mailto:${SITE.email}`} className="link-gold break-all">{SITE.email}</a>
                </p>
                <p>
                  <span className="block text-xs uppercase tracking-[0.2em] text-gold/80">Hours</span>
                  {SITE.hours}
                </p>
              </address>
            </div>
            <div className="panel p-6 text-sm text-cream/75">
              <h3 className="font-display text-lg text-cream">A note on response times</h3>
              <p className="mt-2">
                We are a small team and we answer messages personally, usually within two to three business
                days. For collecting questions, the more detail you can give — label, catalog number,
                condition — the more useful our reply will be.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
