import React from 'react';
import { Navigation } from './Navigation';
import Footer from './Footer';
import SkipLink from './SkipLink';

/** Every page: nav, warm-black ground, footer. Keeps pages to content only. */
export default function PageShell({
  children,
  navTone = 'light',
}: {
  children: React.ReactNode;
  /** 'dark' = cream nav, for pages whose hero is a poster block. */
  navTone?: 'light' | 'dark';
}) {
  return (
    <>
      <SkipLink />
      <Navigation tone={navTone} />
      <main id="main" className="relative w-full bg-paper min-h-screen overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
}
