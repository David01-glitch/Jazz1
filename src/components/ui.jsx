import { Link } from 'react-router-dom';

// ---- Section ----------------------------------------------------------------
export function Section({ children, className = '', as: Tag = 'section', ...rest }) {
  return (
    <Tag className={`py-16 sm:py-20 ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

export function SectionHeading({ kicker, title, intro, align = 'left', id }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {kicker && <span className="eyebrow">{kicker}</span>}
      <h2 id={id} className="mt-3 text-3xl sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-cream/80">{intro}</p>}
      <div className={`mt-6 h-px w-24 bg-gold-divider ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}

// ---- Page header (interior pages) ------------------------------------------
export function PageHeader({ kicker, title, intro, image, imageAlt }) {
  return (
    <header className="relative overflow-hidden border-b border-gold/15">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt={imageAlt || ''} className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/70 via-charcoal-900/85 to-charcoal" />
        </div>
      )}
      <div className="container-luxe relative py-20 sm:py-24">
        {kicker && <span className="eyebrow">{kicker}</span>}
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-cream/80">{intro}</p>}
      </div>
    </header>
  );
}

// ---- Feature / category card -----------------------------------------------
export function FeatureCard({ image, alt, title, children, to, cta = 'Explore', loading }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gold/20 bg-charcoal-800/60 shadow-panel transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-gold/45">
      {image && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={alt}
            loading={loading || 'lazy'}
            className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl text-cream">{title}</h3>
        <div className="mt-3 flex-1 text-sm text-cream/75">{children}</div>
        {to && (
          <Link to={to} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light">
            {cta}
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        )}
      </div>
    </article>
  );
}

// ---- Vinyl-record styled stat / disc ---------------------------------------
export function VinylDisc({ image, alt, label, caption }) {
  return (
    <figure className="group text-center">
      <div className="relative mx-auto aspect-square w-full max-w-[230px]">
        <div className="absolute inset-0 rounded-full bg-charcoal-900 shadow-luxe ring-1 ring-gold/30" />
        <div className="absolute inset-[8%] overflow-hidden rounded-full ring-1 ring-gold/20">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-linear group-hover:rotate-[20deg]"
          />
        </div>
        <div className="absolute inset-[42%] rounded-full bg-gold/90 ring-2 ring-charcoal-900" />
      </div>
      {label && <figcaption className="mt-4 font-display text-lg text-cream">{label}</figcaption>}
      {caption && <p className="mt-1 text-sm text-cream/65">{caption}</p>}
    </figure>
  );
}

// ---- Testimonial ------------------------------------------------------------
export function Testimonial({ quote, name, role, image }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-gold/20 bg-charcoal-800/60 p-6 shadow-panel">
      <div className="text-gold" aria-hidden>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.5 7C5 7 3 9 3 11.5S5 16 7.5 16c.3 0 .6 0 .9-.1C8 17.7 6.6 19 5 19v2c3.5 0 6-3 6-7.5C11 9 9.5 7 7.5 7Zm9 0C14 7 12 9 12 11.5S14 16 16.5 16c.3 0 .6 0 .9-.1C17 17.7 15.6 19 14 19v2c3.5 0 6-3 6-7.5C20 9 18.5 7 16.5 7Z" />
        </svg>
      </div>
      <blockquote className="mt-3 flex-1 text-cream/85">{quote}</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        {image && <img src={image} alt="" loading="lazy" className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40" />}
        <span>
          <span className="block font-semibold text-cream">{name}</span>
          <span className="block text-xs text-cream/60">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

// ---- FAQ list (uses native details for no-JS friendliness via Accordion) ----
export function StatRow({ items }) {
  return (
    <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {items.map((s) => (
        <div key={s.label} className="text-center">
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <span className="block font-display text-3xl text-gold-light sm:text-4xl">{s.value}</span>
            <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-cream/60">{s.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
