import React from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';

// ── Trail waypoints ───────────────────────────────────────────────────────────
const STOPS  = [0, 0.13, 0.26, 0.38, 0.50, 0.62, 0.75, 0.88, 1.00];
const X_VW   = [50, 44,  56,  46,  54,  49,  51,  50,  50  ];
const Y_VH   = [90, 74,  60,  46,  34,  24,  16,  10,   6  ];
const SCALES = [0.90, 0.72, 0.57, 0.44, 0.33, 0.25, 0.19, 0.14, 0.12];

const PATH = [
  'M 50 90',
  'C 46 84, 43 78, 44 74',
  'C 53 68, 57 64, 56 60',
  'C 49 54, 45 50, 46 46',
  'C 55 40, 57 37, 54 34',
  'C 49 30, 48 27, 49 24',
  'C 52 20, 53 18, 51 16',
  'C 50 13, 50 11, 50 10',
  'L 50 6',
].join(' ');

// ── Beat — fades in, holds, fades out ────────────────────────────────────────
// Children are absolutely positioned inside; no flex layout on the container.
function Beat({
  p, start, end, children,
}: {
  p: MotionValue<number>;
  start: number;
  end: number;
  children: React.ReactNode;
}) {
  const opacity = useTransform(p, [start, start + 0.024, end - 0.024, end], [0, 1, 1, 0]);
  const y       = useTransform(p, [start, start + 0.05,  end - 0.05,  end], [14, 0, -4, -12]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0">
      {children}
    </motion.div>
  );
}

// ── Typography ────────────────────────────────────────────────────────────────
// All sizes are smaller than before — these sit alongside the trail, not as
// full-page headers.

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.34em] uppercase text-white/48 mb-3">
    {children}
  </p>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <p
    className="font-['Italiana',serif] text-[5.5vw] md:text-[22px] lg:text-[2.2vw] leading-[1.1] text-white tracking-[0.04em]"
    style={{ textShadow: '0 1px 24px rgba(0,0,0,0.55)' }}
  >
    {children}
  </p>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p
    className="font-['Cormorant_Garamond',serif] text-[4vw] md:text-[15px] lg:text-[0.95vw] leading-[1.72] text-white/80 font-light mt-3"
    style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}
  >
    {children}
  </p>
);

const Quote = ({ children }: { children: React.ReactNode }) => (
  <p
    className="font-['Cormorant_Garamond',serif] italic text-[4vw] md:text-[17px] lg:text-[1.3vw] leading-[1.5] text-white/88 font-light mt-3 border-l border-white/28 pl-4 text-left"
    style={{ textShadow: '0 1px 16px rgba(0,0,0,0.5)' }}
  >
    {children}
  </p>
);

const Attr = ({ children }: { children: React.ReactNode }) => (
  <p className="font-['Kufam',sans-serif] text-[8px] tracking-[0.2em] uppercase text-white/35 mt-3">
    {children}
  </p>
);

// ── Text block positioned near the trail ─────────────────────────────────────
// Mobile  (<md): full-width, centred — sidebar columns are unreadable at 375px.
// Desktop (md+): trail-adjacent; left ends at 38 vw, right starts at 60 vw.
function Waymark({
  side,
  top,
  children,
}: {
  side: 'left' | 'right' | 'center';
  top: number;
  children: React.ReactNode;
}) {
  const desktopStyle: React.CSSProperties =
    side === 'left'
      ? { position: 'absolute', right: '62vw', top: `${top}vh`, maxWidth: 'min(30vw, 280px)' }
      : side === 'right'
      ? { position: 'absolute', left: '60vw', top: `${top}vh`, maxWidth: 'min(30vw, 280px)' }
      : {
          position: 'absolute',
          left: '50%',
          top: `${top}vh`,
          transform: 'translateX(-50%)',
          maxWidth: 'min(36vw, 360px)',
          textAlign: 'center',
        };

  return (
    <>
      {/* Mobile: full-width centred text */}
      <div
        className="md:hidden"
        style={{ position: 'absolute', left: '6vw', right: '6vw', top: `${top}vh`, textAlign: 'center' }}
      >
        {children}
      </div>
      {/* Desktop: trail-adjacent */}
      <div className="hidden md:block" style={desktopStyle}>
        {children}
      </div>
    </>
  );
}

// ── Walking explorer ──────────────────────────────────────────────────────────
function Explorer() {
  const C = 'rgba(255,244,200,0.92)';
  return (
    <svg
      viewBox="-22 -68 44 92"
      width="44"
      height="92"
      style={{ overflow: 'visible', filter: 'drop-shadow(0 0 10px rgba(255,190,60,0.45))' }}
    >
      <ellipse cx="0" cy="-52" rx="16" ry="4" fill={C} />
      <path d="M -9 -52 L -9 -66 Q 0 -70 9 -66 L 9 -52 Z" fill={C} />
      <line x1="-9" y1="-54" x2="9" y2="-54" stroke="rgba(180,130,40,0.55)" strokeWidth="1.5" />
      <circle cx="0" cy="-40" r="8.5" fill={C} />
      <rect x="-3" y="-32" width="6" height="5" fill={C} />
      <path d="M -9 -28 Q -10 -12 -8 6 Q 0 8.5 8 6 Q 10 -12 9 -28 Z" fill={C} />
      <path d="M 8 -24 Q 16 -20 16 -8 Q 16 2 8 4" fill="rgba(200,160,60,0.72)" />

      <motion.line x1="-9" y1="-22"
        animate={{ x2: [-18, -6, -18], y2: [-8, -14, -8] }}
        transition={{ duration: 0.88, repeat: Infinity, ease: 'easeInOut', delay: 0.44 }}
        stroke={C} strokeWidth="3.5" strokeLinecap="round" />
      <motion.line x1="9" y1="-22"
        animate={{ x2: [18, 6, 18], y2: [-8, -14, -8] }}
        transition={{ duration: 0.88, repeat: Infinity, ease: 'easeInOut' }}
        stroke={C} strokeWidth="3.5" strokeLinecap="round" />
      <motion.line x1="-4" y1="6"
        animate={{ x2: [-10, 4, -10], y2: [24, 22, 24] }}
        transition={{ duration: 0.88, repeat: Infinity, ease: 'easeInOut' }}
        stroke={C} strokeWidth="4" strokeLinecap="round" />
      <motion.line x1="4" y1="6"
        animate={{ x2: [10, -4, 10], y2: [24, 22, 24] }}
        transition={{ duration: 0.88, repeat: Infinity, ease: 'easeInOut', delay: 0.44 }}
        stroke={C} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

// ── Dust particles clustered in the trail corridor ────────────────────────────
const DUST = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size:  2 + (i * 1.4) % 4,
  left:  38 + (i * 2.4) % 24,   // 38–62 vw — right along the trail
  top:   10 + (i * 7.3) % 78,
  dur:   7  + (i * 1.8) % 10,
  delay: (i * 1.4) % 8,
  dx:    ((i % 3) - 1) * 10,
  dy:    -(25 + (i * 4.3) % 50),
  r: 185 + (i * 5) % 50, g: 125 + (i * 8) % 45, b: 25 + (i * 3) % 25,
}));

// ── Main component ────────────────────────────────────────────────────────────
export default function SafariEditorial() {
  const { scrollYProgress } = useScroll();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const dust = isMobile ? DUST.slice(0, 4) : DUST;

  const explorerLeft    = useTransform(scrollYProgress, STOPS, X_VW.map(x => `${x}vw`));
  const explorerTop     = useTransform(scrollYProgress, STOPS, Y_VH.map(y => `${y}vh`));
  const explorerScale   = useTransform(scrollYProgress, STOPS, SCALES);
  const explorerOpacity = useTransform(scrollYProgress, [0, 0.03, 0.94, 1.0], [0, 1, 1, 0]);

  return (
    <div className="fixed inset-0 z-[30] pointer-events-none overflow-hidden">

      {/* ── Earth trail ──────────────────────────────────────────────────────── */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="tg" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%"   stopColor="#C48B30" stopOpacity="0.58" />
            <stop offset="65%"  stopColor="#C48B30" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#C48B30" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="tglow" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%"   stopColor="#FFBF00" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#FFBF00" stopOpacity="0.02" />
          </linearGradient>
          <filter id="blur-sm"><feGaussianBlur stdDeviation="0.5" /></filter>
        </defs>
        <path d={PATH} stroke="url(#tglow)" strokeWidth="10" fill="none" filter="url(#blur-sm)" />
        <path d={PATH} stroke="url(#tg)"    strokeWidth="1.6" fill="none" />
        <path d={PATH} stroke="rgba(210,155,50,0.20)" strokeWidth="0.5" fill="none" strokeDasharray="1.8 3.5" />
      </svg>

      {/* ── Dust ─────────────────────────────────────────────────────────────── */}
      {dust.map(d => (
        <motion.div key={d.id} className="absolute rounded-full"
          style={{
            width: d.size + 'px', height: d.size + 'px',
            left: d.left + '%', top: d.top + '%',
            backgroundColor: `rgba(${d.r},${d.g},${d.b},0.42)`,
            filter: 'blur(1px)',
          }}
          animate={{ y: [0, d.dy, 0], x: [0, d.dx, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: d.dur, repeat: Infinity, ease: 'easeInOut', delay: d.delay }}
        />
      ))}

      {/* ── Explorer ─────────────────────────────────────────────────────────── */}
      <motion.div style={{
        position: 'absolute',
        left: explorerLeft, top: explorerTop,
        x: '-50%', y: '-88%',
        scale: explorerScale, opacity: explorerOpacity,
      }}>
        <motion.div animate={{ y: [0, -2.5, 0] }} transition={{ duration: 0.44, repeat: Infinity, ease: 'easeInOut' }}>
          <Explorer />
        </motion.div>
        <motion.div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 rounded-full"
          style={{ width: '28px', height: '6px', background: 'rgba(180,100,20,0.2)', filter: 'blur(3px)' }}
          animate={{ scaleX: [1, 1.15, 1], opacity: [0.28, 0.45, 0.28] }}
          transition={{ duration: 0.88, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* ════════════════════════ STORY BEATS ════════════════════════════════ */}
      {/* Text positions are relative to the trail corridor (40–60 vw).
          Left text ends at ~38 vw; right text starts at ~60 vw.
          Vertical placement is set so copy sits near the explorer's y-position
          when that beat peaks (scroll midpoint), keeping text and figure together. */}

      {/* 1 · ARRIVAL ─────────────────────────────── peak ~0.065 / explorer y≈82vh */}
      <Beat p={scrollYProgress} start={0} end={0.13}>
        <Waymark side="center" top={22}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 1.8, ease: 'easeOut' }}
          >
            <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.34em] uppercase text-white/48 mb-3">
              Tanzania · East Africa
            </p>
            <p
              className="font-['Italiana',serif] text-[8vw] md:text-[5vw] lg:text-[3.8vw] leading-[0.92] text-white tracking-[0.05em]"
              style={{ textShadow: '0 2px 40px rgba(0,0,0,0.45)' }}
            >
              Earth &amp; Salt
            </p>
            <div className="w-14 h-px bg-white/28 mx-auto my-5" />
            <Body>
              There is a moment when the city leaves your body.
              The air does it. The silence does the rest.
            </Body>
          </motion.div>
        </Waymark>
      </Beat>

      {/* 2 · THE WILD ──────────────────────────────── peak ~0.19 / explorer y≈67vh */}
      {/* Trail curves LEFT here (x=44vw) → text sits on the RIGHT */}
      <Beat p={scrollYProgress} start={0.11} end={0.27}>
        <Waymark side="right" top={54}>
          <Label>The Wild</Label>
          <Title>A lioness crosses at dawn. She does not look at you.</Title>
          <Body>
            Elephants emerge from the acacia as the light turns amber.
            A leopard sleeps draped across a branch, unconcerned.
            You will spend an afternoon watching a cheetah watch the plains.
            Nothing will happen. It will be the best afternoon of your trip.
          </Body>
        </Waymark>
      </Beat>

      {/* 3 · WILDLIFE ──────────────────────────────── peak ~0.32 / explorer y≈53vh */}
      {/* Trail curves RIGHT (x=56vw) → text sits on the LEFT */}
      <Beat p={scrollYProgress} start={0.24} end={0.40}>
        <Waymark side="left" top={40}>
          <Label>Wildlife Encounters</Label>
          <Title>The wildebeest move in their hundreds of thousands.</Title>
          <Body>
            The dust rises in columns. The sound arrives before the sight does.
            You feel something shift — a scale you didn't know you had,
            recalibrating to the size of things here.
          </Body>
        </Waymark>
      </Beat>

      {/* 4 · THE GUIDES ────────────────────────────── peak ~0.445 / explorer y≈40vh */}
      {/* Trail curves LEFT (x=46vw) → text sits on the RIGHT */}
      <Beat p={scrollYProgress} start={0.37} end={0.52}>
        <Waymark side="right" top={28}>
          <Label>The Guides</Label>
          <Title>He has been reading this landscape his entire life.</Title>
          <Body>
            He stops the vehicle without speaking and points to the acacia.
            You see nothing. Then — movement.
            The gap between what he sees and what you see is not a gap.
            It is the whole journey.
          </Body>
          <Attr>Abdulrahman · Northern Serengeti</Attr>
        </Waymark>
      </Beat>

      {/* 5 · COMMUNITIES ───────────────────────────── peak ~0.565 / explorer y≈29vh */}
      {/* Trail curves RIGHT (x=54vw) → text sits on the LEFT */}
      <Beat p={scrollYProgress} start={0.49} end={0.64}>
        <Waymark side="left" top={20}>
          <Label>The Communities</Label>
          <Title>This is not a museum. These are neighbours.</Title>
          <Body>
            When travel is done carefully it shifts from extraction to exchange.
            You come to witness. You leave having been witnessed in return.
          </Body>
        </Waymark>
      </Beat>

      {/* 6 · IMPACT ────────────────────────────────── peak ~0.685 / explorer y≈20vh */}
      {/* Explorer near top — text drops into the mid-screen so it's readable */}
      <Beat p={scrollYProgress} start={0.61} end={0.76}>
        <Waymark side="right" top={36}>
          <Label>The Impact</Label>
          <Title>Behind every extraordinary journey, women are building something permanent.</Title>
          <Body>
            From beadwork cooperatives that have put daughters through university
            to camp managers who began as kitchen staff and now run operations
            for international guests.
          </Body>
          <Quote>"I want my daughter to see that I built something here."</Quote>
          <Attr>Amina · Ngorongoro</Attr>
        </Waymark>
      </Beat>

      {/* 7 · LUXURY EXPERIENCES ────────────────────── peak ~0.80 / explorer y≈13vh */}
      {/* Explorer near horizon — text sits in mid-screen */}
      <Beat p={scrollYProgress} start={0.73} end={0.87}>
        <Waymark side="left" top={33}>
          <Label>Where You Sleep</Label>
          <Title>The place you sleep is part of what you are here for.</Title>
          <Body>
            Canvas under the stars on the rim of Ngorongoro Crater.
            A tent at Sayari Camp, close enough to the Mara River to hear
            the migration at night. A private concession that stretches
            further than you can see.
          </Body>
        </Waymark>
      </Beat>

      {/* 8 · BEGIN YOUR JOURNEY ─────────────────────── peak ~0.925 / explorer ≈8vh */}
      {/* Explorer at the horizon — text centred in mid-screen, soft CTA */}
      <Beat p={scrollYProgress} start={0.85} end={1.0}>
        <Waymark side="center" top={30}>
          <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.34em] uppercase text-white/48 mb-3">
            Begin
          </p>
          <p
            className="font-['Italiana',serif] text-[7.5vw] md:text-[4.5vw] lg:text-[3.2vw] leading-[0.92] text-white tracking-[0.05em]"
            style={{ textShadow: '0 2px 40px rgba(0,0,0,0.45)' }}
          >
            Your Journey
          </p>
          <div className="w-14 h-px bg-white/28 mx-auto my-5" />
          <Body>
            Tell us when you'd like to come.
            Tell us what you're hoping to feel.
          </Body>
          <div className="mt-6">
            <a
              href="mailto:hello@valawild.com"
              className="pointer-events-auto font-['Kufam',sans-serif] text-[2.5vw] md:text-[1.2vw] lg:text-[0.85vw] tracking-[0.18em] uppercase text-white/72 border-b border-white/25 pb-0.5 hover:text-white hover:border-white/55 transition-all duration-400"
            >
              hello@valawild.com
            </a>
          </div>
        </Waymark>
      </Beat>

    </div>
  );
}
