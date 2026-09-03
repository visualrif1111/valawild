import React from 'react';
import { Navigation } from './Navigation';
import Footer from './Footer';
import SkipLink from './SkipLink';

/** Every page: nav, warm-black ground, footer. Keeps pages to content only. */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink />
      <Navigation />
      <main id="main" className="relative w-full bg-paper min-h-screen overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
}
