import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import svgPaths from '../../imports/Frame74/svg-1cztk30jkf';

export function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  // Fire navigation on the first touch contact — no 300 ms browser delay.
  // e.preventDefault() cancels the subsequent click so we don't navigate twice.
  // Mouse clicks still reach the Link's own handler unchanged.
  const tap = (to: string) => (e: React.PointerEvent) => {
    if (e.pointerType === 'touch') {
      e.preventDefault();
      navigate(to);
    }
  };

  const linkBase = 'transition-opacity duration-300 select-none';
  const active   = (path: string) =>
    location.pathname === path ? 'opacity-100' : 'opacity-60 hover:opacity-100';

  return (
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <AnimatePresence mode="wait">
        {!isScrolled ? (
          <motion.nav
            key="nav-initial"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full pt-10 pb-6 px-8 md:px-16 pointer-events-auto flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-7xl flex flex-col items-center">

              {/* Right icons — enlarged hit area */}
              <div className="absolute right-0 top-0 flex items-center gap-4 text-white">
                <a href="#" style={{ touchAction: 'manipulation' }}
                  className="flex items-center justify-center p-4 -m-2 hover:opacity-70 transition-opacity duration-300">
                  <svg className="block w-4 h-4" fill="none" viewBox="0 0 14 14">
                    <path d={svgPaths.p2a4356c0} fill="currentColor" />
                  </svg>
                </a>
                <a href="#" style={{ touchAction: 'manipulation' }}
                  className="flex items-center justify-center p-4 -m-2 hover:opacity-70 transition-opacity duration-300">
                  <svg className="block w-4 h-4" fill="none" viewBox="0 0 15 15">
                    <path d={svgPaths.pf8e4980} fill="currentColor" />
                  </svg>
                </a>
              </div>

              {/* Logo */}
              <Link
                to="/"
                onPointerDown={tap('/')}
                style={{ touchAction: 'manipulation' }}
                className="font-['Italiana',sans-serif] text-2xl md:text-3xl lg:text-[42px] text-white tracking-[0.1em] leading-none mb-4 hover:opacity-80 transition-opacity duration-300 py-3 px-4"
              >
                VALA WILD
              </Link>

              {/* Divider */}
              <div className="w-[300px] md:w-[450px] h-[1px] bg-white/60 mb-4" />

              {/* Nav links — py-4 px-3 gives ≥48 px tap target in both axes */}
              <div className="flex items-center font-['Kufam',sans-serif] text-xs md:text-sm lg:text-base text-white tracking-widest uppercase">
                <Link
                  to="/"
                  onPointerDown={tap('/')}
                  style={{ touchAction: 'manipulation' }}
                  className={`py-4 px-3 md:px-5 ${linkBase} ${active('/')}`}
                >
                  Safari
                </Link>
                <div className="w-[1px] h-5 bg-white/50 flex-shrink-0" />
                <Link
                  to="/kilimanjaro"
                  onPointerDown={tap('/kilimanjaro')}
                  style={{ touchAction: 'manipulation' }}
                  className={`py-4 px-3 md:px-5 ${linkBase} ${active('/kilimanjaro')}`}
                >
                  Mount Kilimanjaro
                </Link>
                <div className="w-[1px] h-5 bg-white/50 flex-shrink-0" />
                <Link
                  to="/zanzibar"
                  onPointerDown={tap('/zanzibar')}
                  style={{ touchAction: 'manipulation' }}
                  className={`py-4 px-3 md:px-5 ${linkBase} ${active('/zanzibar')}`}
                >
                  Zanzibar
                </Link>
              </div>
            </div>
          </motion.nav>
        ) : (
          <motion.nav
            key="nav-scrolled"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full pt-8 pb-4 px-8 md:px-16 pointer-events-auto flex items-start justify-between"
          >
            {/* Left: logo + links */}
            <div className="flex flex-col items-start">
              <Link
                to="/"
                onPointerDown={tap('/')}
                style={{ touchAction: 'manipulation' }}
                className="font-['Italiana',sans-serif] text-2xl md:text-3xl lg:text-[42px] text-white tracking-[0.1em] leading-none hover:opacity-80 transition-opacity duration-300 py-3 pr-6"
              >
                VALA WILD
              </Link>

              <div className="flex flex-col items-start font-['Kufam',sans-serif] text-xs md:text-sm lg:text-base text-white tracking-widest uppercase mt-1">
                <Link
                  to="/"
                  onPointerDown={tap('/')}
                  style={{ touchAction: 'manipulation' }}
                  className={`py-4 pr-12 ${linkBase} ${active('/')}`}
                >
                  Safari
                </Link>
                <Link
                  to="/kilimanjaro"
                  onPointerDown={tap('/kilimanjaro')}
                  style={{ touchAction: 'manipulation' }}
                  className={`py-4 pr-12 ${linkBase} ${active('/kilimanjaro')}`}
                >
                  Mount Kilimanjaro
                </Link>
                <Link
                  to="/zanzibar"
                  onPointerDown={tap('/zanzibar')}
                  style={{ touchAction: 'manipulation' }}
                  className={`py-4 pr-12 ${linkBase} ${active('/zanzibar')}`}
                >
                  Zanzibar
                </Link>
              </div>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4 text-white mt-2">
              <a href="#" style={{ touchAction: 'manipulation' }}
                className="flex items-center justify-center p-4 -m-2 hover:opacity-70 transition-opacity duration-300">
                <svg className="block w-4 h-4" fill="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p2a4356c0} fill="currentColor" />
                </svg>
              </a>
              <a href="#" style={{ touchAction: 'manipulation' }}
                className="flex items-center justify-center p-4 -m-2 hover:opacity-70 transition-opacity duration-300">
                <svg className="block w-4 h-4" fill="none" viewBox="0 0 15 15">
                  <path d={svgPaths.pf8e4980} fill="currentColor" />
                </svg>
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
