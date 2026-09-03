import { Link } from 'react-router';
import svgPaths from '../../imports/Frame74/svg-1cztk30jkf';
import { FOOTER_NAV, BRAND, ROUTES } from '../data/site';
import { PRIMARY_CTA, SECONDARY_CTAS } from '../data/ctas';
import CTAButton from './cta/CTAButton';
import CrowMark from './brand/CrowMark';

/* Footer tree mirrors Sitemap V2 exactly, including the nesting:
   Kilimanjaro → Live Q&A / Events, Base Camp   ·   Impact → Create Your Own Journey */

export default function Footer() {
  return (
    <footer className="relative z-[50] w-full bg-cream border-t border-ink/12 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-8 md:px-16 pt-20 pb-10">

        {/* Closing ask — the primary CTA is the last thing on every page */}
        <div className="flex flex-col items-center text-center pb-16 border-b border-ink/12">
          <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.34em] uppercase text-clay mb-5">
            Still deciding?
          </p>
          <h2 className="font-['Italiana',serif] text-[8vw] md:text-[36px] leading-[1.15] text-ink tracking-[0.03em] max-w-lg">
            Fifteen minutes is usually enough to know.
          </h2>
          <div className="mt-8">
            <CTAButton cta={PRIMARY_CTA} variant="primary" />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3">
            <CTAButton cta={SECONDARY_CTAS.contact} variant="quiet" />
            <CTAButton cta={SECONDARY_CTAS.guide} variant="quiet" />
          </div>
        </div>

        {/* Navigation tree */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_2fr_1fr] gap-14 md:gap-10 pt-16 text-center md:text-left">

          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to={ROUTES.home}
              className="font-['Italiana',sans-serif] text-2xl text-ink tracking-[0.1em] hover:opacity-75 transition-opacity duration-300">
              VALA WILD
            </Link>
            <p className="font-['Cormorant_Garamond',serif] font-light italic text-[15px] leading-[1.6] text-smoke/75 max-w-[22rem]">
              {BRAND.positioning}
            </p>
            <p className="font-['Kufam',sans-serif] text-[8px] tracking-[0.3em] uppercase text-clay mt-2">
              {BRAND.creativeLine}
            </p>
          </div>

          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 justify-items-center md:justify-items-start">
            {FOOTER_NAV.map((item) => (
              <div key={item.to} className="flex flex-col gap-3 text-center md:text-left">
                <Link to={item.to}
                  className="font-['Kufam',sans-serif] text-[11px] tracking-[0.16em] uppercase text-smoke hover:text-ink transition-colors duration-300">
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link key={child.to} to={child.to}
                    className="font-['Kufam',sans-serif] text-[10px] tracking-[0.14em] uppercase text-smoke/70 hover:text-clay transition-colors duration-300">
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>

          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.32em] uppercase text-smoke/70">
              Get in Touch
            </p>
            <a href={`mailto:${BRAND.email}`}
              className="font-['Kufam',sans-serif] text-[11px] tracking-[0.14em] uppercase text-smoke/90 border-b border-ink/20 pb-0.5 hover:text-ink hover:border-clay transition-all duration-300">
              {BRAND.email}
            </a>
            <div className="flex items-center gap-6 text-smoke/75 mt-2">
              <a href="#" aria-label="Instagram" className="hover:text-clay transition-colors duration-300 w-4 h-4">
                <svg className="block w-full h-full" fill="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p2a4356c0} fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="TikTok" className="hover:text-clay transition-colors duration-300 w-4 h-4">
                <svg className="block w-full h-full" fill="none" viewBox="0 0 15 15">
                  <path d={svgPaths.pf8e4980} fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-ink/12 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.22em] uppercase text-smoke/60">
            © {new Date().getFullYear()} Vala Wild. All rights reserved.
          </p>
          <p className="font-['Cormorant_Garamond',serif] italic font-light text-[13px] text-smoke/60 flex items-center gap-2.5">
            <CrowMark size={16} className="text-ink/40" />
            {BRAND.aside}
          </p>
        </div>
      </div>
    </footer>
  );
}
