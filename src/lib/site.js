// Central business identity + site configuration.
// Used across components, SEO/JSON-LD, sitemap and the prerender pipeline.

export const SITE = {
  name: 'Golden Jazz Classics',
  shortName: 'Golden Jazz Classics',
  tagline: 'A jazz appreciation journal of legendary artists & vinyl treasures',
  description:
    'Golden Jazz Classics is a jazz music appreciation blog exploring legendary artists, classic albums, and the craft of vinyl collecting — written for listeners who love the golden age of jazz.',
  url: 'https://goldenjazzclassics.com',
  email: 'goldenjazzclassics@gmail.com',
  phone: '(504) 739-2814',
  phoneHref: '+15047392814',
  address: {
    street: '330 Royal Garden St',
    city: 'New Orleans',
    region: 'LA',
    postalCode: '70130',
    country: 'US',
    full: '330 Royal Garden St, New Orleans, LA 70130',
  },
  founded: '2014',
  hours: 'Monday–Saturday, 10:00 AM – 7:00 PM CT',
};

// SEO + sitemap source of truth. `priority` and `changefreq` feed sitemap.xml.
export const ROUTES = [
  {
    path: '/',
    title: 'Golden Jazz Classics — Legendary Artists & Vinyl Collections',
    description:
      'A jazz appreciation journal celebrating legendary artists, classic albums, analog sound and the art of vinyl collecting from the heart of New Orleans.',
    priority: '1.0',
    changefreq: 'weekly',
    nav: 'primary',
    label: 'Home',
  },
  {
    path: '/about',
    title: 'About Golden Jazz Classics — Our Story & Mission',
    description:
      'How a New Orleans listening room became Golden Jazz Classics — our founder story, editorial mission, and devotion to jazz history and vinyl culture.',
    priority: '0.8',
    changefreq: 'monthly',
    nav: 'primary',
    label: 'About',
  },
  {
    path: '/blog',
    title: 'The Golden Jazz Classics Journal — Essays & Listening Notes',
    description:
      'Long-form essays on jazz legends, album histories, vinyl restoration and analog listening — curated reading for the devoted jazz collector.',
    priority: '0.9',
    changefreq: 'weekly',
    nav: 'primary',
    label: 'Journal',
  },
  {
    path: '/jazz-legends',
    title: 'Jazz Legends — Portraits of the Artists Who Shaped the Music',
    description:
      'In-depth portraits of the jazz legends — from New Orleans pioneers to bebop revolutionaries and the women who shaped jazz history.',
    priority: '0.8',
    changefreq: 'monthly',
    nav: 'explore',
    label: 'Jazz Legends',
  },
  {
    path: '/vinyl-collections',
    title: 'Vinyl Collections — Building & Caring for a Jazz Record Library',
    description:
      'A complete guide to starting a jazz vinyl collection, grading records, restoration, storage and the pressings worth seeking out.',
    priority: '0.8',
    changefreq: 'monthly',
    nav: 'explore',
    label: 'Vinyl Collections',
  },
  {
    path: '/classic-albums',
    title: 'Classic Albums — Essential Jazz Records Every Listener Should Own',
    description:
      'The essential jazz albums every listener should own, with listening notes on the sessions, players and pressings that made them immortal.',
    priority: '0.8',
    changefreq: 'monthly',
    nav: 'explore',
    label: 'Classic Albums',
  },
  {
    path: '/live-jazz-history',
    title: 'Live Jazz History — Legendary New Orleans Clubs & Concert Halls',
    description:
      'The rooms where jazz was born and reborn — Storyville, Preservation Hall and the legendary New Orleans clubs and concert halls of the golden age.',
    priority: '0.8',
    changefreq: 'monthly',
    nav: 'explore',
    label: 'Live Jazz History',
  },
  {
    path: '/instrument-spotlights',
    title: 'Instrument Spotlights — The Voices of Jazz & Their History',
    description:
      'The saxophone, trumpet, piano, double bass and drums — the history, craft and tone of the instruments that give jazz its voice.',
    priority: '0.8',
    changefreq: 'monthly',
    nav: 'explore',
    label: 'Instrument Spotlights',
  },
  {
    path: '/jazz-listening-guides',
    title: 'Jazz Listening Guides — Hi-Fi, Analog Sound & How to Listen',
    description:
      'Beginner-to-connoisseur guides to hi-fi audio, analog sound, turntable setup and the art of attentive jazz listening.',
    priority: '0.8',
    changefreq: 'monthly',
    nav: 'explore',
    label: 'Listening Guides',
  },
  {
    path: '/community',
    title: 'Community — Collector Stories & the Golden Jazz Circle',
    description:
      'Listener stories, collector profiles and the shared rituals of the Golden Jazz Classics community of vinyl lovers and jazz devotees.',
    priority: '0.7',
    changefreq: 'monthly',
    nav: 'primary',
    label: 'Community',
  },
  {
    path: '/contact',
    title: 'Contact Golden Jazz Classics — New Orleans',
    description:
      'Reach Golden Jazz Classics in New Orleans by phone, email or post. Questions on collecting, submissions and partnership inquiries welcome.',
    priority: '0.7',
    changefreq: 'monthly',
    nav: 'primary',
    label: 'Contact',
  },
  {
    path: '/legal/privacy',
    title: 'Privacy Policy — Golden Jazz Classics',
    description:
      'How Golden Jazz Classics collects, uses and protects your information, including analytics, cookies and Google Consent Mode practices.',
    priority: '0.4',
    changefreq: 'yearly',
    nav: 'legal',
    label: 'Privacy',
  },
  {
    path: '/legal/terms',
    title: 'Terms of Service — Golden Jazz Classics',
    description:
      'The terms governing your use of the Golden Jazz Classics website, content, newsletter and community features.',
    priority: '0.4',
    changefreq: 'yearly',
    nav: 'legal',
    label: 'Terms',
  },
  {
    path: '/legal/refund',
    title: 'Refund & Cancellation Policy — Golden Jazz Classics',
    description:
      'Our refund, cancellation and subscription policy for newsletter memberships and any paid Golden Jazz Classics offerings.',
    priority: '0.4',
    changefreq: 'yearly',
    nav: 'legal',
    label: 'Refund',
  },
];

export const PRERENDER_PATHS = ROUTES.map((r) => r.path).concat(['/404']);

export function routeMeta(path) {
  return ROUTES.find((r) => r.path === path);
}
