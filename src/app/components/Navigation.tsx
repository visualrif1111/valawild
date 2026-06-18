import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import svgPaths from '../../imports/Frame74/svg-1cztk30jkf';

const linkStyle: React.CSSProperties = { touchAction: 'manipulation' };

export function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* mode="wait" ensures only one nav is in the DOM at a time — the exiting
          variant's pointer-events-auto was intercepting taps on mobile */}
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
              {/* Absolute right icons */}
              <div className="absolute right-0 top-2 flex items-center gap-6 text-white">
                <a
                  href="#"
                  style={linkStyle}
                  className="hover:opacity-70 transition-opacity duration-300 p-3 -m-3"
                >
                  <svg className="block w-4 h-4" fill="none" viewBox="0 0 14 14">
                    <path d={svgPaths.p2a4356c0} fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="#"
                  style={linkStyle}
                  className="hover:opacity-70 transition-opacity duration-300 p-3 -m-3"
                >
                  <svg className="block w-4 h-4" fill="none" viewBox="0 0 15 15">
                    <path d={svgPaths.pf8e4980} fill="currentColor" />
                  </svg>
                </a>
              </div>

              {/* Logo */}
              <Link
                to="/"
                style={linkStyle}
                className="font-['Italiana',sans-serif] text-2xl md:text-3xl lg:text-[42px] text-white tracking-[0.1em] leading-none mb-4 hover:opacity-80 transition-opacity duration-300 py-2"
              >
                VALA WILD
              </Link>

              {/* Divider Line */}
              <div className="w-[300px] md:w-[450px] h-[1px] bg-white/60 mb-6" />

              {/* Links */}
              <div className="flex items-center gap-6 md:gap-12 font-['Kufam',sans-serif] text-xs md:text-sm lg:text-base text-white tracking-widest uppercase">
                <Link
                  to="/"
                  style={linkStyle}
                  className={`py-3 transition-opacity duration-300 ${location.pathname === '/' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                >
                  Safari
                </Link>
                <div className="w-[1px] h-6 bg-white/60" />
                <Link
                  to="/kilimanjaro"
                  style={linkStyle}
                  className={`py-3 transition-opacity duration-300 ${location.pathname === '/kilimanjaro' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                >
                  Mount Kilimanjaro
                </Link>
                <div className="w-[1px] h-6 bg-white/60" />
                <Link
                  to="/zanzibar"
                  style={linkStyle}
                  className={`py-3 transition-opacity duration-300 ${location.pathname === '/zanzibar' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
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
            className="absolute top-0 left-0 w-full pt-10 pb-6 px-8 md:px-16 pointer-events-auto flex items-start justify-between"
          >
            {/* Left Side: Logo and Links */}
            <div className="flex flex-col items-start gap-4">
              <Link
                to="/"
                style={linkStyle}
                className="font-['Italiana',sans-serif] text-2xl md:text-3xl lg:text-[42px] text-white tracking-[0.1em] leading-none m-0 hover:opacity-80 transition-opacity duration-300 py-2"
              >
                VALA WILD
              </Link>

              <div className="flex flex-col items-start font-['Kufam',sans-serif] text-xs md:text-sm lg:text-base text-white tracking-widest uppercase mt-2">
                <Link
                  to="/"
                  style={linkStyle}
                  className={`py-3 pr-8 transition-opacity duration-300 ${location.pathname === '/' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                >
                  Safari
                </Link>
                <Link
                  to="/kilimanjaro"
                  style={linkStyle}
                  className={`py-3 pr-8 transition-opacity duration-300 ${location.pathname === '/kilimanjaro' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                >
                  Mount Kilimanjaro
                </Link>
                <Link
                  to="/zanzibar"
                  style={linkStyle}
                  className={`py-3 pr-8 transition-opacity duration-300 ${location.pathname === '/zanzibar' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                >
                  Zanzibar
                </Link>
              </div>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-6 text-white mt-2">
              <a
                href="#"
                style={linkStyle}
                className="hover:opacity-70 transition-opacity duration-300 p-3 -m-3"
              >
                <svg className="block w-4 h-4" fill="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p2a4356c0} fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                style={linkStyle}
                className="hover:opacity-70 transition-opacity duration-300 p-3 -m-3"
              >
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
