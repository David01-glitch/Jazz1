import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { ROUTES } from '../lib/site.js';

const explore = ROUTES.filter((r) => r.nav === 'explore' || r.nav === 'primary');

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found — Golden Jazz Classics"
        description="The page you were looking for has wandered off. Find your way back to the music with our most-loved sections."
        path="/404"
      />
      <section className="container-luxe flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="eyebrow">Error 404</span>
        <h1 className="mt-4 text-5xl sm:text-6xl">This track skipped.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-cream/80">
          The page you were looking for has wandered off the bandstand. No matter — the best records are
          always a click away. Let us help you find your way back to the music.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-gold">Return home</Link>
          <Link to="/blog" className="btn-outline">Read the journal</Link>
        </div>
        <nav aria-label="Popular sections" className="mt-12 flex flex-wrap justify-center gap-3">
          {explore.map((r) => (
            <Link key={r.path} to={r.path} className="rounded-lg border border-gold/25 px-4 py-2 text-sm text-cream/80 hover:border-gold hover:text-gold-light">
              {r.label}
            </Link>
          ))}
        </nav>
      </section>
    </>
  );
}
