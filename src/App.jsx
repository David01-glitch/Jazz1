import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import RouteAnalytics from './components/RouteAnalytics.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Community from './pages/Community.jsx';
import Contact from './pages/Contact.jsx';
import JazzLegends from './pages/JazzLegends.jsx';
import VinylCollections from './pages/VinylCollections.jsx';
import ClassicAlbums from './pages/ClassicAlbums.jsx';
import LiveJazzHistory from './pages/LiveJazzHistory.jsx';
import InstrumentSpotlights from './pages/InstrumentSpotlights.jsx';
import JazzListeningGuides from './pages/JazzListeningGuides.jsx';
import Privacy from './pages/legal/Privacy.jsx';
import Terms from './pages/legal/Terms.jsx';
import Refund from './pages/legal/Refund.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <RouteAnalytics />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jazz-legends" element={<JazzLegends />} />
          <Route path="/vinyl-collections" element={<VinylCollections />} />
          <Route path="/classic-albums" element={<ClassicAlbums />} />
          <Route path="/live-jazz-history" element={<LiveJazzHistory />} />
          <Route path="/instrument-spotlights" element={<InstrumentSpotlights />} />
          <Route path="/jazz-listening-guides" element={<JazzListeningGuides />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/refund" element={<Refund />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
