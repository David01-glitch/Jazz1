import { Link } from 'react-router-dom';
import { ROUTES, SITE } from '../lib/site.js';

const explore = ROUTES.filter((r) => r.nav === 'explore');

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-gold/15 bg-charcoal-900">
      <div className="container-luxe grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/50">
              <span className="h-3.5 w-3.5 rounded-full bg-gold" />
            </span>
            <span className="font-display text-lg text-cream">Golden Jazz Classics</span>
          </div>
          <p className="mt-4 text-sm text-cream/70">
            A New Orleans journal devoted to legendary jazz artists, classic albums and the
            enduring craft of vinyl collecting.
          </p>
        </div>

        <nav aria-label="Explore" className="text-sm">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-gold">Explore</h2>
          <ul className="space-y-2">
            {explore.map((r) => (
              <li key={r.path}>
                <Link to={r.path} className="text-cream/75 hover:text-gold-light">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Site" className="text-sm">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-gold">Pages</h2>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-cream/75 hover:text-gold-light">About</Link></li>
            <li><Link to="/blog" className="text-cream/75 hover:text-gold-light">Journal</Link></li>
            <li><Link to="/community" className="text-cream/75 hover:text-gold-light">Community</Link></li>
            <li><Link to="/contact" className="text-cream/75 hover:text-gold-light">Contact</Link></li>
            <li><Link to="/legal/privacy" className="text-cream/75 hover:text-gold-light">Privacy</Link></li>
            <li><Link to="/legal/terms" className="text-cream/75 hover:text-gold-light">Terms</Link></li>
            <li><Link to="/legal/refund" className="text-cream/75 hover:text-gold-light">Refund</Link></li>
          </ul>
        </nav>

        <address className="text-sm not-italic">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-gold">Visit & Contact</h2>
          <p className="text-cream/75">{SITE.address.street}</p>
          <p className="text-cream/75">
            {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
          </p>
          <p className="mt-3">
            <a href={`tel:${SITE.phoneHref}`} className="text-cream/75 hover:text-gold-light">
              {SITE.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${SITE.email}`} className="text-cream/75 hover:text-gold-light">
              {SITE.email}
            </a>
          </p>
          <p className="mt-3 text-cream/55">{SITE.hours}</p>
        </address>
      </div>

      <div className="border-t border-gold/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/55 sm:flex-row">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link to="/legal/privacy" className="hover:text-gold-light">Privacy</Link>
            <span aria-hidden>·</span>
            <Link to="/legal/terms" className="hover:text-gold-light">Terms</Link>
            <span aria-hidden>·</span>
            <Link to="/legal/refund" className="hover:text-gold-light">Refund</Link>
            <span aria-hidden>·</span>
            <Link to="/about" className="hover:text-gold-light">About</Link>
            <span aria-hidden>·</span>
            <Link to="/contact" className="hover:text-gold-light">Contact</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
