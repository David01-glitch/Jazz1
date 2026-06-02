import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ROUTES, SITE } from '../lib/site.js';

const primary = ROUTES.filter((r) => r.nav === 'primary');
const explore = ROUTES.filter((r) => r.nav === 'explore');

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
      isActive ? 'text-gold' : 'text-cream/80 hover:text-gold-light'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-charcoal-900/85 backdrop-blur-md">
      <div className="container-luxe flex h-[68px] items-center justify-between">
        <Link to="/" className="group flex items-center gap-3" aria-label={`${SITE.name} — home`}>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/50">
            <span className="h-3.5 w-3.5 rounded-full bg-gold transition-transform duration-500 group-hover:scale-110" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg text-cream">Golden Jazz</span>
            <span className="block text-[10px] uppercase tracking-[0.34em] text-gold/80">Classics</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <div
            className="relative"
            onMouseEnter={() => setExploreOpen(true)}
            onMouseLeave={() => setExploreOpen(false)}
          >
            <button
              type="button"
              aria-expanded={exploreOpen}
              onClick={() => setExploreOpen((v) => !v)}
              className="px-3 py-2 text-sm font-medium tracking-wide text-cream/80 transition-colors duration-300 hover:text-gold-light"
            >
              Explore ▾
            </button>
            <div
              className={`absolute left-0 top-full w-60 origin-top rounded-xl border border-gold/20 bg-charcoal-800 p-2 shadow-panel transition-all duration-200 ${
                exploreOpen ? 'visible opacity-100' : 'invisible opacity-0'
              }`}
            >
              {explore.map((r) => (
                <NavLink
                  key={r.path}
                  to={r.path}
                  className="block rounded-lg px-3 py-2 text-sm text-cream/80 transition-colors hover:bg-gold/10 hover:text-gold-light"
                >
                  {r.label}
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink to="/blog" className={linkClass}>
            Journal
          </NavLink>
          <NavLink to="/community" className={linkClass}>
            Community
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <Link to="/contact" className="btn-gold ml-2 px-4 py-2 text-xs">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 text-gold lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${open ? 'block' : 'hidden'} border-t border-gold/15 bg-charcoal-900`}
      >
        <nav className="container-luxe flex flex-col gap-1 py-4" aria-label="Mobile">
          {primary.map((r) => (
            <NavLink
              key={r.path}
              to={r.path}
              end={r.path === '/'}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-cream/85 hover:bg-gold/10 hover:text-gold-light"
            >
              {r.label}
            </NavLink>
          ))}
          <p className="mt-3 px-3 text-[11px] uppercase tracking-[0.24em] text-gold/70">Explore</p>
          {explore.map((r) => (
            <NavLink
              key={r.path}
              to={r.path}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-cream/85 hover:bg-gold/10 hover:text-gold-light"
            >
              {r.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
