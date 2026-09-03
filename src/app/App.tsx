import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import Home from './pages/Home';
import Kilimanjaro from './pages/Kilimanjaro';
import CreateYourOwnJourney from './pages/CreateYourOwnJourney';
import About from './pages/About';
import Impact from './pages/Impact';
import Journal from './pages/Journal';
import JournalArticle from './pages/JournalArticle';
import LiveQA from './pages/LiveQA';
import BaseCamp from './pages/BaseCamp';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import { ROUTES } from './data/site';
import { useDocumentMeta } from './useDocumentMeta';

/* ─────────────────────────────────────────────────────────────────────────────
   Routing — Sitemap V2.

   Live Q&A / Events and Base Camp are nested under /kilimanjaro to mirror the
   sub-page tier of the diagram. Contact is a CTA destination rather than a nav
   item; FAQ is reachable from the footer.
   ───────────────────────────────────────────────────────────────────────── */

/** Scroll to top on navigation — unless the link carried a hash anchor. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Let the target page paint before seeking the anchor
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
          return;
        }
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}

/* Cinematic fade-from-black between routes. Skipped entirely for anyone who
   has asked for reduced motion — a full-screen flash is exactly the kind of
   thing that setting exists to prevent. */
function PageTransitionOverlay() {
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="fixed inset-0 bg-ink z-[150] pointer-events-none"
      />
    </AnimatePresence>
  );
}

export default function App() {
  const location = useLocation();
  useDocumentMeta();
  return (
    <>
      <ScrollManager />
      <PageTransitionOverlay />
      <Routes location={location}>
        <Route path={ROUTES.home}        element={<Home />} />

        <Route path={ROUTES.kilimanjaro} element={<Kilimanjaro />} />
        <Route path={ROUTES.liveQA}      element={<LiveQA />} />
        <Route path={ROUTES.baseCamp}    element={<BaseCamp />} />

        <Route path={ROUTES.ownJourney}  element={<CreateYourOwnJourney />} />
        <Route path={ROUTES.about}       element={<About />} />
        <Route path={ROUTES.impact}      element={<Impact />} />

        <Route path={ROUTES.journal}     element={<Journal />} />
        <Route path={`${ROUTES.journal}/:slug`} element={<JournalArticle />} />

        <Route path={ROUTES.contact}     element={<Contact />} />
        <Route path={ROUTES.faq}         element={<FAQ />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
