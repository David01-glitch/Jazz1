import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import CookieBanner from './CookieBanner.jsx';

export default function Layout({ children }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-charcoal-900"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <CookieBanner />
    </>
  );
}
