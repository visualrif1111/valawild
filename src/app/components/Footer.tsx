import { Link } from 'react-router';
import svgPaths from '../../imports/Frame74/svg-1cztk30jkf';

export default function Footer() {
  return (
    <footer className="relative z-[50] w-full bg-[#080808] border-t border-white/[0.06] pointer-events-auto">
      <div className="max-w-7xl mx-auto px-8 md:px-16 pt-16 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">

          {/* Column 1: Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link
              to="/"
              className="font-['Italiana',sans-serif] text-2xl text-white tracking-[0.1em] hover:opacity-75 transition-opacity duration-300"
            >
              VALA WILD
            </Link>
            <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.3em] uppercase text-white/30">
              Curated Journeys · East Africa
            </p>
          </div>

          {/* Column 2: Destinations */}
          <div className="flex flex-col items-center gap-4">
            <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.32em] uppercase text-white/28 mb-1">
              Destinations
            </p>
            <Link
              to="/"
              className="font-['Kufam',sans-serif] text-[11px] tracking-widest uppercase text-white/55 hover:text-white transition-colors duration-300"
            >
              Safari
            </Link>
            <Link
              to="/kilimanjaro"
              className="font-['Kufam',sans-serif] text-[11px] tracking-widest uppercase text-white/55 hover:text-white transition-colors duration-300"
            >
              Mount Kilimanjaro
            </Link>
            <Link
              to="/zanzibar"
              className="font-['Kufam',sans-serif] text-[11px] tracking-widest uppercase text-white/55 hover:text-white transition-colors duration-300"
            >
              Zanzibar
            </Link>
          </div>

          {/* Column 3: Contact + social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.32em] uppercase text-white/28 mb-1">
              Get in Touch
            </p>
            <a
              href="mailto:hello@valawild.com"
              className="font-['Kufam',sans-serif] text-[11px] tracking-[0.18em] uppercase text-white/55 border-b border-white/18 pb-0.5 hover:text-white hover:border-white/45 transition-all duration-300"
            >
              hello@valawild.com
            </a>
            <div className="flex items-center gap-6 text-white/40 mt-1">
              <a href="#" className="hover:text-white transition-colors duration-300 w-4 h-4">
                <svg className="block w-full h-full" fill="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p2a4356c0} fill="currentColor" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300 w-4 h-4">
                <svg className="block w-full h-full" fill="none" viewBox="0 0 15 15">
                  <path d={svgPaths.pf8e4980} fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.06] my-10" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.25em] uppercase text-white/22">
            © {new Date().getFullYear()} Vala Wild. All rights reserved.
          </p>
          <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.25em] uppercase text-white/22">
            Crafted with care for the wild
          </p>
        </div>

      </div>
    </footer>
  );
}
