import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import svgPaths from '../../imports/Frame74/svg-1cztk30jkf';

export function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close overlay whenever the route changes
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    }
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (typeof window !== 'undefined') {
      setIsScrolled(latest > window.innerHeight * 0.8);
    }
  });

  // Immediate navigation on touch — no 300 ms delay
  const tap = (to: string) => (e: React.PointerEvent) => {
    if (e.pointerType === 'touch') {
      e.preventDefault();
      navigate(to);
    }
  };

  const openMenu = (e: React.PointerEvent) => {
    if (e.pointerType === 'touch') { e.preventDefault(); setMenuOpen(true); }
  };
  const closeMenu = (e: React.PointerEvent) => {
    if (e.pointerType === 'touch') { e.preventDefault(); setMenuOpen(false); }
  };

  const linkBase = 'transition-opacity duration-300 select-none';
  const active   = (path: string) =>
    location.pathname === path ? 'opacity-100' : 'opacity-60 hover:opacity-100';

  return (
    <>
      {/* ── Fixed nav bar ──────────────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <AnimatePresence mode="wait">

          {/* ── TOP OF PAGE ─────────────────────────────────────────────────── */}
          {!isScrolled ? (
            <motion.nav
              key="nav-initial"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full pt-10 pb-6 px-8 md:px-16 pointer-events-auto"
            >
              {/* ── MOBILE: logo centred + hamburger ─── */}
              <div className="flex md:hidden items-center justify-between w-full">
                <div className="w-10 h-10" />
                <Link
                  to="/"
                  onPointerDown={tap('/')}
                  style={{ touchAction: 'manipulation' }}
                  className="font-['Italiana',sans-serif] text-2xl text-white tracking-[0.1em] leading-none hover:opacity-80 transition-opacity duration-300"
                >
                  VALA WILD
                </Link>
                <button
                  onPointerDown={openMenu}
                  onClick={() => setMenuOpen(true)}
                  style={{ touchAction: 'manipulation' }}
                  aria-label="Open menu"
                  className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] text-white"
                >
                  <span className="block w-5 h-[1.5px] bg-white rounded-full" />
                  <span className="block w-5 h-[1.5px] bg-white rounded-full" />
                  <span className="block w-5 h-[1.5px] bg-white rounded-full" />
                </button>
              </div>

              {/* ── DESKTOP: logo + links centred ─────── */}
              <div className="hidden md:flex flex-col items-center w-full max-w-7xl mx-auto relative">
                <div className="absolute right-0 top-2 flex items-center gap-6 text-white">
                  <a href="#" style={{ touchAction: 'manipulation' }}
                    className="hover:opacity-70 transition-opacity duration-300 w-4 h-4">
                    <svg className="block w-full h-full" fill="none" viewBox="0 0 14 14">
                      <path d={svgPaths.p2a4356c0} fill="currentColor" />
                    </svg>
                  </a>
                  <a href="#" style={{ touchAction: 'manipulation' }}
                    className="hover:opacity-70 transition-opacity duration-300 w-4 h-4">
                    <svg className="block w-full h-full" fill="none" viewBox="0 0 15 15">
                      <path d={svgPaths.pf8e4980} fill="currentColor" />
                    </svg>
                  </a>
                </div>

                <Link to="/"
                  className="font-['Italiana',sans-serif] text-3xl lg:text-[42px] text-white tracking-[0.1em] leading-none mb-4 hover:opacity-80 transition-opacity duration-300">
                  VALA WILD
                </Link>
                <div className="w-[450px] h-[1px] bg-white/60 mb-6" />
                <div className="flex items-center gap-12 font-['Kufam',sans-serif] text-sm lg:text-base text-white tracking-widest uppercase">
                  <Link to="/" className={`py-2 ${linkBase} ${active('/')}`}>Safari</Link>
                  <div className="w-[1px] h-6 bg-white/60" />
                  <Link to="/kilimanjaro" className={`py-2 ${linkBase} ${active('/kilimanjaro')}`}>Mount Kilimanjaro</Link>
                  <div className="w-[1px] h-6 bg-white/60" />
                  <Link to="/zanzibar" className={`py-2 ${linkBase} ${active('/zanzibar')}`}>Zanzibar</Link>
                </div>
              </div>
            </motion.nav>

          ) : (
            /* ── SCROLLED ─────────────────────────────────────────────────── */
            <motion.nav
              key="nav-scrolled"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-0 left-0 w-full pt-8 pb-4 px-8 md:px-16 pointer-events-auto flex items-start justify-between"
            >
              {/* ── MOBILE: logo left + hamburger right ── */}
              <div className="flex md:hidden w-full items-center justify-between">
                <Link
                  to="/"
                  onPointerDown={tap('/')}
                  style={{ touchAction: 'manipulation' }}
                  className="font-['Italiana',sans-serif] text-2xl text-white tracking-[0.1em] leading-none hover:opacity-80 transition-opacity duration-300 py-2"
                >
                  VALA WILD
                </Link>
                <button
                  onPointerDown={openMenu}
                  onClick={() => setMenuOpen(true)}
                  style={{ touchAction: 'manipulation' }}
                  aria-label="Open menu"
                  className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] text-white"
                >
                  <span className="block w-5 h-[1.5px] bg-white rounded-full" />
                  <span className="block w-5 h-[1.5px] bg-white rounded-full" />
                  <span className="block w-5 h-[1.5px] bg-white rounded-full" />
                </button>
              </div>

              {/* ── DESKTOP: logo + vertical links left, icons right ── */}
              <div className="hidden md:flex flex-col items-start gap-4">
                <Link to="/"
                  className="font-['Italiana',sans-serif] text-3xl lg:text-[42px] text-white tracking-[0.1em] leading-none hover:opacity-80 transition-opacity duration-300">
                  VALA WILD
                </Link>
                <div className="flex flex-col items-start font-['Kufam',sans-serif] text-sm lg:text-base text-white tracking-widest uppercase mt-2">
                  <Link to="/" className={`py-3 pr-8 ${linkBase} ${active('/')}`}>Safari</Link>
                  <Link to="/kilimanjaro" className={`py-3 pr-8 ${linkBase} ${active('/kilimanjaro')}`}>Mount Kilimanjaro</Link>
                  <Link to="/zanzibar" className={`py-3 pr-8 ${linkBase} ${active('/zanzibar')}`}>Zanzibar</Link>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-6 text-white mt-2">
                <a href="#" className="hover:opacity-70 transition-opacity duration-300 w-4 h-4">
                  <svg className="block w-full h-full" fill="none" viewBox="0 0 14 14">
                    <path d={svgPaths.p2a4356c0} fill="currentColor" />
                  </svg>
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity duration-300 w-4 h-4">
                  <svg className="block w-full h-full" fill="none" viewBox="0 0 15 15">
                    <path d={svgPaths.pf8e4980} fill="currentColor" />
                  </svg>
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* ── Mobile full-screen menu overlay ────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] md:hidden flex flex-col items-center justify-center"
            style={{ background: 'rgba(4,4,4,0.97)', backdropFilter: 'blur(10px)' }}
          >
            {/* Close button */}
            <button
              onPointerDown={closeMenu}
              onClick={() => setMenuOpen(false)}
              style={{ touchAction: 'manipulation' }}
              aria-label="Close menu"
              className="absolute top-10 right-8 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {/* Logo */}
            <Link
              to="/"
              onPointerDown={tap('/')}
              style={{ touchAction: 'manipulation' }}
              className="font-['Italiana',sans-serif] text-3xl text-white tracking-[0.1em] mb-10"
            >
              VALA WILD
            </Link>

            <div className="w-16 h-px bg-white/20 mb-8" />

            {/* Nav links — full-width, large touch targets */}
            <nav className="flex flex-col items-center w-full">
              {[
                { to: '/',            label: 'Safari'           },
                { to: '/kilimanjaro', label: 'Mount Kilimanjaro' },
                { to: '/zanzibar',    label: 'Zanzibar'          },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onPointerDown={tap(to)}
                  style={{ touchAction: 'manipulation' }}
                  className={`w-full text-center py-6 font-['Kufam',sans-serif] text-sm tracking-[0.28em] uppercase transition-all duration-300 ${
                    location.pathname === to ? 'text-white' : 'text-white/45 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="w-16 h-px bg-white/20 mt-8 mb-10" />

            {/* Social icons */}
            <div className="flex items-center gap-10 text-white/35">
              <a href="#" style={{ touchAction: 'manipulation' }}
                className="p-4 hover:text-white transition-colors duration-300">
                <svg className="block w-4 h-4" fill="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p2a4356c0} fill="currentColor" />
                </svg>
              </a>
              <a href="#" style={{ touchAction: 'manipulation' }}
                className="p-4 hover:text-white transition-colors duration-300">
                <svg className="block w-4 h-4" fill="none" viewBox="0 0 15 15">
                  <path d={svgPaths.pf8e4980} fill="currentColor" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
