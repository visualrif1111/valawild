import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import Safari from './pages/Safari';
import Kilimanjaro from './pages/Kilimanjaro';
import Zanzibar from './pages/Zanzibar';

// Scroll to the top of the page instantly on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

// Black overlay that fades out after each navigation — cinematic fade-from-black
function PageTransitionOverlay() {
  const { pathname } = useLocation();
  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="fixed inset-0 bg-black z-[150] pointer-events-none"
      />
    </AnimatePresence>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <PageTransitionOverlay />
      <Routes location={location}>
        <Route path="/" element={<Safari />} />
        <Route path="/kilimanjaro" element={<Kilimanjaro />} />
        <Route path="/zanzibar" element={<Zanzibar />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
