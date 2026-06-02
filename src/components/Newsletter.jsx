import { useState } from 'react';
import { SITE } from '../lib/site.js';
import { trackEvent } from '../utils/analytics.js';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    trackEvent('newsletter_signup', { method: 'inline_form' });
    setDone(true);
  };

  return (
    <section aria-labelledby="newsletter-heading" className="panel overflow-hidden">
      <div className="grid items-center gap-8 p-8 sm:p-10 md:grid-cols-2">
        <div>
          <span className="eyebrow">The Liner Notes Letter</span>
          <h2 id="newsletter-heading" className="mt-3 text-3xl">
            One thoughtful jazz letter, every Sunday morning
          </h2>
          <p className="mt-4 text-cream/80">
            Join thousands of collectors who start the week with a single, carefully written essay —
            an artist remembered, an album reconsidered, or a pressing worth hunting down. No noise,
            no selling, just the music we love.
          </p>
        </div>

        {done ? (
          <div className="rounded-xl border border-gold/30 bg-gold/5 p-6 text-center" role="status">
            <p className="font-display text-2xl text-gold-light">Welcome to the circle.</p>
            <p className="mt-2 text-sm text-cream/80">
              Look for a confirmation soon. In the meantime, you can always reach us at{' '}
              <a href={`mailto:${SITE.email}`} className="link-gold">{SITE.email}</a>.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-3" noValidate>
            <label htmlFor="nl-email" className="text-sm font-medium text-cream/85">
              Your email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="nl-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gold/25 bg-charcoal-900 px-4 py-3 text-cream placeholder:text-cream/40 focus:border-gold focus-visible:outline-none"
              />
              <button type="submit" className="btn-gold shrink-0">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-cream/55">
              We respect your inbox. Unsubscribe anytime — see our{' '}
              <a href="/legal/privacy" className="link-gold">privacy policy</a>.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
