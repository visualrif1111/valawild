import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import svgPaths from '../../imports/Frame74/svg-1cztk30jkf';
import { TOP_NAV, ROUTES, BRAND } from '../data/site';
import { PRIMARY_CTA } from '../data/ctas';

/* ─────────────────────────────────────────────────────────────────────────────
   Top navigation — Sitemap V2.

   Five pages, with Live Q&A / Events and Base Camp nested under Kilimanjaro.
   The primary CTA is present in every nav state, at every breakpoint: the
   spec makes "Book a 15 Minute Call" the dominant action site-wide, so it is
   never scrolled past or hidden behind the hamburger alone.
   ───────────────────────────────────────────────────────────────────────── */

export function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    }
  }, []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (typeof window !== 'undefined') {
      setIsScrolled(latest > window.innerHeight * 0.8);
    }
  });

  // Immediate navigation on touch — no 300 ms delay
  const tap = (to: string) => (e: React.PointerEvent) => {
    if (e.pointerType === 'touch') { e.preventDefault(); navigate(to); }
  };
  const openMenu  = (e: React.PointerEvent) => { if (e.pointerType === 'touch') { e.preventDefault(); setMenuOpen(true); } };
  const closeMenu = (e: React.PointerEvent) => { if (e.pointerType === 'touch') { e.preventDefault(); setMenuOpen(false); } };

  const linkBase = 'transition-opacity duration-300 select-none';
  const isActive = (path: string) =>
    location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  const active = (path: string) => (isActive(path) ? 'opacity-100' : 'opacity-60 hover:opacity-100');

  const NavCTA = ({ compact = false }: { compact?: boolean }) =>
    PRIMARY_CTA.external ? (
      <a href={PRIMARY_CTA.href} target="_blank" rel="noreferrer" className={ctaClass(compact)}>
        {compact ? 'Book a Call' : PRIMARY_CTA.label}
      </a>
    ) : (
      <Link to={PRIMARY_CTA.href} className={ctaClass(compact)}>
        {compact ? 'Book a Call' : PRIMARY_CTA.label}
      </Link>
    );

  const Social = ({ className = '' }: { className?: string }) => (
    <div className={`flex items-center gap-6 text-white ${className}`}>
      <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity duration-300 w-4 h-4">
        <svg className="block w-full h-full" fill="none" viewBox="0 0 14 14">
          <path d={svgPaths.p2a4356c0} fill="currentColor" />
        </svg>
      </a>
      <a href="#" aria-label="TikTok" className="hover:opacity-70 transition-opacity duration-300 w-4 h-4">
        <svg className="block w-full h-full" fill="none" viewBox="0 0 15 15">
          <path d={svgPaths.pf8e4980} fill="currentColor" />
        </svg>
      </a>
    </div>
  );

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <AnimatePresence mode="wait">

          {/* ── TOP OF PAGE ─────────────────────────────────────────────── */}
          {!isScrolled ? (
            <motion.nav
              key="nav-initial"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full pt-10 pb-6 px-8 md:px-16 pointer-events-auto"
            >
              {/* MOBILE */}
              <div className="flex md:hidden items-center justify-between w-full">
                <div className="w-10 h-10" />
                <Link to={ROUTES.home} onPointerDown={tap(ROUTES.home)} style={{ touchAction: 'manipulation' }}
                  className="font-['Italiana',sans-serif] text-2xl text-white tracking-[0.1em] leading-none hover:opacity-80 transition-opacity duration-300">
                  VALA WILD
                </Link>
                <button onPointerDown={openMenu} onClick={() => setMenuOpen(true)}
                  style={{ touchAction: 'manipulation' }} aria-label="Open menu"
                  className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] text-white">
                  <span className="block w-5 h-[1.5px] bg-white rounded-full" />
                  <span className="block w-5 h-[1.5px] bg-white rounded-full" />
                  <span className="block w-5 h-[1.5px] bg-white rounded-full" />
                </button>
              </div>

              {/* DESKTOP */}
              <div className="hidden md:flex flex-col items-center w-full max-w-7xl mx-auto relative">
                <div className="absolute right-0 top-1 flex items-center gap-7">
                  <Social />
                  <NavCTA compact />
                </div>

                <Link to={ROUTES.home}
                  className="font-['Italiana',sans-serif] text-3xl lg:text-[42px] text-white tracking-[0.1em] leading-none mb-4 hover:opacity-80 transition-opacity duration-300">
                  VALA WILD
                </Link>
                <div className="w-[450px] h-[1px] bg-white/60 mb-6" />

                <div className="flex items-center gap-9 font-['Kufam',sans-serif] text-[13px] lg:text-sm text-white tracking-widest uppercase">
                  {TOP_NAV.map((item, i) => (
                    <React.Fragment key={item.to}>
                      {i > 0 && <div className="w-[1px] h-5 bg-white/50" />}
                      <div className="relative group">
                        <Link to={item.to} className={`py-2 block ${linkBase} ${active(item.to)}`}>
                          {item.label}
                        </Link>
                        {item.children && (
                          /* Sub-pages reveal on hover — Sitemap V2 nests these under Kilimanjaro */
                          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible
                                          group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <div className="flex flex-col gap-3 bg-ink/95 backdrop-blur-md border border-cream/10 rounded-2xl px-6 py-5 whitespace-nowrap">
                              {item.children.map((child) => (
                                <Link key={child.to} to={child.to}
                                  className={`text-[11px] tracking-[0.2em] ${linkBase} ${active(child.to)}`}>
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </motion.nav>

          ) : (
            /* ── SCROLLED ─────────────────────────────────────────────── */
            <motion.nav
              key="nav-scrolled"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              /* Compact horizontal bar. The tall vertical column this replaced
                 was built for three links floating over full-bleed imagery; it
                 collided with page-level sticky sub-navs once the IA grew. */
              className="absolute top-0 left-0 w-full pointer-events-auto bg-ink/88 backdrop-blur-md border-b border-cream/10"
              style={{ height: 'var(--vw-nav-h)' }}
            >
              <div className="h-full max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between gap-6">

                <Link to={ROUTES.home} onPointerDown={tap(ROUTES.home)} style={{ touchAction: 'manipulation' }}
                  className="font-['Italiana',sans-serif] text-xl md:text-2xl text-white tracking-[0.1em] leading-none hover:opacity-80 transition-opacity duration-300 shrink-0">
                  VALA WILD
                </Link>

                {/* DESKTOP links */}
                <div className="hidden md:flex items-center gap-6 lg:gap-9 font-['Kufam',sans-serif] text-[11px] lg:text-[12px] text-white tracking-[0.14em] uppercase">
                  {TOP_NAV.map((item) => (
                    <div key={item.to} className="relative group">
                      <Link to={item.to} className={`py-2 block whitespace-nowrap ${linkBase} ${active(item.to)}`}>
                        {item.label}
                      </Link>
                      {item.children && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible
                                        group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                          <div className="flex flex-col gap-3 bg-ink/95 backdrop-blur-md border border-cream/10 rounded-2xl px-6 py-5 whitespace-nowrap">
                            {item.children.map((child) => (
                              <Link key={child.to} to={child.to}
                                className={`text-[11px] tracking-[0.2em] ${linkBase} ${active(child.to)}`}>
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="hidden md:flex items-center gap-6 shrink-0">
                  <Social className="hidden lg:flex" />
                  <NavCTA compact />
                </div>

                {/* MOBILE hamburger */}
                <button onPointerDown={openMenu} onClick={() => setMenuOpen(true)}
                  style={{ touchAction: 'manipulation' }} aria-label="Open menu"
                  className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] text-white -mr-2">
                  <span className="block w-5 h-[1.5px] bg-white rounded-full" />
                  <span className="block w-5 h-[1.5px] bg-white rounded-full" />
                  <span className="block w-5 h-[1.5px] bg-white rounded-full" />
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* ── Mobile full-screen menu ──────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] md:hidden flex flex-col items-center justify-center overflow-y-auto py-20"
            style={{ background: 'rgba(16,12,9,0.975)', backdropFilter: 'blur(10px)' }}
          >
            <button onPointerDown={closeMenu} onClick={() => setMenuOpen(false)}
              style={{ touchAction: 'manipulation' }} aria-label="Close menu"
              className="absolute top-10 right-8 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <Link to={ROUTES.home} onPointerDown={tap(ROUTES.home)} style={{ touchAction: 'manipulation' }}
              className="font-['Italiana',sans-serif] text-3xl text-white tracking-[0.1em] mb-8">
              VALA WILD
            </Link>

            <div className="w-16 h-px bg-white/20 mb-6" />

            <nav className="flex flex-col items-center w-full">
              {TOP_NAV.map(({ to, label, children }) => (
                <div key={to} className="w-full flex flex-col items-center">
                  <Link to={to} onPointerDown={tap(to)} style={{ touchAction: 'manipulation' }}
                    className={`w-full text-center py-5 font-['Kufam',sans-serif] text-sm tracking-[0.28em] uppercase transition-all duration-300 ${
                      isActive(to) ? 'text-white' : 'text-white/45 hover:text-white'}`}>
                    {label}
                  </Link>
                  {children?.map((child) => (
                    <Link key={child.to} to={child.to} onPointerDown={tap(child.to)}
                      style={{ touchAction: 'manipulation' }}
                      className={`w-full text-center pb-4 font-['Kufam',sans-serif] text-[10px] tracking-[0.24em] uppercase transition-all duration-300 ${
                        isActive(child.to) ? 'text-ember' : 'text-white/30 hover:text-white/70'}`}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>

            <div className="w-16 h-px bg-white/20 mt-6 mb-8" />

            {/* Primary CTA reachable without closing the menu */}
            <NavCTA />

            <p className="font-['Cormorant_Garamond',serif] italic font-light text-[14px] text-white/30 mt-5 px-10 text-center">
              {BRAND.aside}
            </p>

            <Social className="mt-8 text-white/35" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const ctaClass = (compact: boolean) =>
  "inline-flex items-center justify-center font-['Kufam',sans-serif] uppercase tracking-[0.16em] " +
  `text-[10px] leading-none rounded-full bg-ember text-ink transition-all duration-500 hover:bg-flare ${
    compact ? 'px-5 py-3' : 'px-8 py-4 text-[11px]'}`;
