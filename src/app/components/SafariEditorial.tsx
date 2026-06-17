import React from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';

// ── Trail waypoints ───────────────────────────────────────────────────────────
// Explorer moves from bottom (close, large) to top (distant, tiny) as user scrolls.
const STOPS  = [0, 0.13, 0.26, 0.38, 0.50, 0.62, 0.75, 0.88, 1.00];
const X_VW   = [50, 44,  56,  46,  54,  49,  51,  50,  50  ]; // vw
const Y_VH   = [90, 74,  60,  46,  34,  24,  16,  10,   6  ]; // vh
const SCALES = [0.90, 0.72, 0.57, 0.44, 0.33, 0.25, 0.19, 0.14, 0.12];

// ── Perspective trail path (viewBox 0 0 100 100 matches vw/vh coords above) ─
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

// ── Story beat — fades in, holds, fades out across a scroll window ────────────
function Beat({
  p, start, end, className = '', children,
}: {
  p: MotionValue<number>;
  start: number;
  end: number;
  className?: string;
  children: React.ReactNode;
}) {
  const opacity = useTransform(p, [start, start + 0.022, end - 0.022, end], [0, 1, 1, 0]);
  const y       = useTransform(p, [start, start + 0.05,  end - 0.05,  end], [26, 0, -6, -18]);
  return (
    <motion.div style={{ opacity, y }} className={`absolute inset-0 flex ${className}`}>
      {children}
    </motion.div>
  );
}

// ── Typography atoms ─────────────────────────────────────────────────────────
const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="font-['Kufam',sans-serif] text-[9px] md:text-[11px] tracking-[0.38em] uppercase text-white/50 mb-5">
    {children}
  </p>
);

const Display = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="font-['Italiana',serif] text-[14vw] md:text-[9vw] lg:text-[7.5vw] leading-[0.88] text-white tracking-[0.05em]"
    style={{ textShadow: '0 2px 48px rgba(0,0,0,0.45)' }}
  >
    {children}
  </h2>
);

const Hero = ({ children }: { children: React.ReactNode }) => (
  <p
    className="font-['Cormorant_Garamond',serif] italic text-[7vw] md:text-[4.8vw] lg:text-[3.8vw] leading-[1.1] text-white font-light"
    style={{ textShadow: '0 2px 28px rgba(0,0,0,0.55)' }}
  >
    {children}
  </p>
);

const Body = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p
    className={`font-['Cormorant_Garamond',serif] text-[4.5vw] md:text-[2.2vw] lg:text-[1.3vw] leading-[1.75] text-white/85 font-light ${className}`}
    style={{ textShadow: '0 1px 14px rgba(0,0,0,0.5)' }}
  >
    {children}
  </p>
);

const Pull = ({ children }: { children: React.ReactNode }) => (
  <p
    className="font-['Cormorant_Garamond',serif] italic text-[5.5vw] md:text-[3vw] lg:text-[2.1vw] leading-[1.3] text-white/90 font-light border-l-[1.5px] border-white/35 pl-6"
    style={{ textShadow: '0 1px 20px rgba(0,0,0,0.5)' }}
  >
    {children}
  </p>
);

const Attr = ({ children }: { children: React.ReactNode }) => (
  <p className="font-['Kufam',sans-serif] text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-white/40 mt-4">
    {children}
  </p>
);

const Rule = () => (
  <div className="w-20 h-px bg-white/30 my-7" />
);

// ── Walking explorer figure ───────────────────────────────────────────────────
function Explorer() {
  const C = 'rgba(255,244,200,0.92)';
  return (
    <svg
      viewBox="-22 -68 44 92"
      width="44"
      height="92"
      style={{ overflow: 'visible', filter: 'drop-shadow(0 0 10px rgba(255,190,60,0.45))' }}
    >
      {/* Safari hat brim */}
      <ellipse cx="0" cy="-52" rx="16" ry="4" fill={C} />
      {/* Hat crown */}
      <path d="M -9 -52 L -9 -66 Q 0 -70 9 -66 L 9 -52 Z" fill={C} />
      {/* Hat band */}
      <line x1="-9" y1="-54" x2="9" y2="-54" stroke="rgba(180,130,40,0.6)" strokeWidth="1.5" />
      {/* Head */}
      <circle cx="0" cy="-40" r="8.5" fill={C} />
      {/* Neck */}
      <rect x="-3" y="-32" width="6" height="5" fill={C} />
      {/* Body / shirt */}
      <path d="M -9 -28 Q -10 -12 -8 6 Q 0 8.5 8 6 Q 10 -12 9 -28 Z" fill={C} />
      {/* Backpack */}
      <path d="M 8 -24 Q 16 -20 16 -8 Q 16 2 8 4" fill="rgba(200,160,60,0.75)" />
      <line x1="8" y1="-22" x2="8" y2="2" stroke="rgba(180,140,40,0.4)" strokeWidth="1" />

      {/* Arms (animated) */}
      <motion.line
        x1="-9" y1="-22"
        animate={{ x2: [-18, -6, -18], y2: [-8, -14, -8] }}
        transition={{ duration: 0.88, repeat: Infinity, ease: 'easeInOut', delay: 0.44 }}
        stroke={C} strokeWidth="3.5" strokeLinecap="round"
      />
      <motion.line
        x1="9" y1="-22"
        animate={{ x2: [18, 6, 18], y2: [-8, -14, -8] }}
        transition={{ duration: 0.88, repeat: Infinity, ease: 'easeInOut' }}
        stroke={C} strokeWidth="3.5" strokeLinecap="round"
      />

      {/* Legs (animated) */}
      <motion.line
        x1="-4" y1="6"
        animate={{ x2: [-10, 4, -10], y2: [24, 22, 24] }}
        transition={{ duration: 0.88, repeat: Infinity, ease: 'easeInOut' }}
        stroke={C} strokeWidth="4" strokeLinecap="round"
      />
      <motion.line
        x1="4" y1="6"
        animate={{ x2: [10, -4, 10], y2: [24, 22, 24] }}
        transition={{ duration: 0.88, repeat: Infinity, ease: 'easeInOut', delay: 0.44 }}
        stroke={C} strokeWidth="4" strokeLinecap="round"
      />
    </svg>
  );
}

// ── Dust particles (warm, atmospheric, cluster around trail centre) ───────────
const DUST = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  size:   2 + (i * 1.3) % 5,
  left:   33 + (i * 2.3) % 34,  // 33–67% (centred around trail)
  top:    8  + (i * 7.1) % 82,
  dur:    7  + (i * 1.7) % 11,
  delay:  (i * 1.3) % 9,
  dx:     ((i % 3) - 1) * 12,
  dy:     -(30 + (i * 4.1) % 55),
  r:      170 + (i * 5) % 60,
  g:      110 + (i * 8) % 55,
  b:      20  + (i * 3) % 30,
}));

// ── Main component ────────────────────────────────────────────────────────────
export default function SafariEditorial() {
  const { scrollYProgress } = useScroll();

  const explorerLeft    = useTransform(scrollYProgress, STOPS, X_VW.map(x => `${x}vw`));
  const explorerTop     = useTransform(scrollYProgress, STOPS, Y_VH.map(y => `${y}vh`));
  const explorerScale   = useTransform(scrollYProgress, STOPS, SCALES);
  const explorerOpacity = useTransform(scrollYProgress, [0, 0.03, 0.94, 1.0], [0, 1, 1, 0]);

  return (
    <div className="fixed inset-0 z-[30] pointer-events-none overflow-hidden">

      {/* ── Perspective earth trail ──────────────────────────────────────────── */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="tg" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%"   stopColor="#C48B30" stopOpacity="0.60" />
            <stop offset="65%"  stopColor="#C48B30" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#C48B30" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="tglow" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%"   stopColor="#FFBF00" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#FFBF00" stopOpacity="0.03" />
          </linearGradient>
          <filter id="blur-sm">
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>
        {/* Outer amber glow */}
        <path d={PATH} stroke="url(#tglow)"  strokeWidth="10" fill="none" filter="url(#blur-sm)" />
        {/* Main trail */}
        <path d={PATH} stroke="url(#tg)"     strokeWidth="1.6" fill="none" />
        {/* Earth texture — dashes */}
        <path d={PATH} stroke="rgba(210,155,50,0.22)" strokeWidth="0.5" fill="none" strokeDasharray="1.8 3.5" />
      </svg>

      {/* ── Warm dust particles ───────────────────────────────────────────────── */}
      {DUST.map(d => (
        <motion.div
          key={d.id}
          className="absolute rounded-full"
          style={{
            width:  d.size + 'px',
            height: d.size + 'px',
            left:   d.left + '%',
            top:    d.top  + '%',
            backgroundColor: `rgba(${d.r},${d.g},${d.b},0.45)`,
            filter: 'blur(1px)',
          }}
          animate={{ y: [0, d.dy, 0], x: [0, d.dx, 0], opacity: [0, 0.55, 0] }}
          transition={{ duration: d.dur, repeat: Infinity, ease: 'easeInOut', delay: d.delay }}
        />
      ))}

      {/* ── Walking explorer ─────────────────────────────────────────────────── */}
      <motion.div
        style={{
          position: 'absolute',
          left:    explorerLeft,
          top:     explorerTop,
          x:       '-50%',
          y:       '-88%',   // feet sit on the trail point
          scale:   explorerScale,
          opacity: explorerOpacity,
        }}
      >
        {/* Gentle body bob */}
        <motion.div
          animate={{ y: [0, -2.5, 0] }}
          transition={{ duration: 0.44, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Explorer />
        </motion.div>
        {/* Footstep dust shadow */}
        <motion.div
          className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 rounded-full"
          style={{ width: '28px', height: '6px', background: 'rgba(180,100,20,0.22)', filter: 'blur(3px)' }}
          animate={{ scaleX: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 0.88, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* ════════════════════════ STORY BEATS ════════════════════════════════ */}

      {/* 1 · EARTH & SALT — Arrival ─────────────────────────── 0 → 0.13 */}
      <Beat p={scrollYProgress} start={0} end={0.13}
        className="flex-col items-center justify-center"
      >
        <motion.div
          className="text-center px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 2.0, ease: 'easeOut' }}
        >
          <Label>Tanzania · East Africa</Label>
          <Display>Earth &amp; Salt</Display>
          <Rule />
          <Body className="max-w-[34ch] mx-auto text-center">
            There is a moment, somewhere between the tarmac and the red dust road,
            when the city begins to leave your body.
            The air does it. Then the silence.
            Then the horizon — impossibly wide — does the rest.
          </Body>
        </motion.div>
      </Beat>

      {/* 2 · THE WILD — Animal encounters ──────────────────── 0.11 → 0.27 */}
      <Beat p={scrollYProgress} start={0.11} end={0.27}
        className="flex-col justify-end items-start px-8 md:px-14 pb-16 md:pb-20"
      >
        <div className="max-w-md">
          <Label>The Wild</Label>
          <Hero>
            A lioness crosses the track at dawn.<br />
            Unhurried. She does not look at you.
          </Hero>
          <Rule />
          <Body>
            Elephants emerge from the acacia as the light turns amber —
            a matriarch steadying her calf, the herd moving as one quiet mass.
            A leopard sleeps draped across a branch, entirely unconcerned.
            You will spend an afternoon watching a cheetah watch the plains.
            Nothing will happen. It will be the best afternoon of your trip.
          </Body>
        </div>
      </Beat>

      {/* 3 · WILDLIFE — Migration, wonder ──────────────────── 0.24 → 0.40 */}
      <Beat p={scrollYProgress} start={0.24} end={0.40}
        className="flex-col justify-center items-end px-8 md:px-14"
      >
        <div className="max-w-sm text-right">
          <Label>Wildlife Encounters</Label>
          <Hero>
            The wildebeest move in their hundreds of thousands.
          </Hero>
          <Rule />
          <Body>
            There is no narration for this.
            There is only witnessing. The dust rises in columns.
            The sound arrives before the sight does.
            You feel something shift in you — a scale you didn't know you had —
            recalibrating to the size of things here.
          </Body>
        </div>
      </Beat>

      {/* 4 · THE GUIDES ────────────────────────────────────── 0.37 → 0.52 */}
      <Beat p={scrollYProgress} start={0.37} end={0.52}
        className="flex-col justify-center items-start px-8 md:px-14"
      >
        <div className="max-w-md">
          <Label>The Guides</Label>
          <Hero>
            Your guide has been reading this landscape his entire life.
          </Hero>
          <Rule />
          <Body>
            He knows every kopje, every seasonal waterhole, every lion family by their
            behaviour rather than their markings. He stops the vehicle without speaking
            and points to the acacia. You see nothing. Then — movement. He has already
            started the engine before you've understood what you're looking at.
            The gap between what he sees and what you see is not a gap.
            It is the whole journey.
          </Body>
          <Attr>Abdulrahman · Northern Serengeti · Twenty-one years in the field</Attr>
        </div>
      </Beat>

      {/* 5 · THE COMMUNITIES ───────────────────────────────── 0.49 → 0.64 */}
      <Beat p={scrollYProgress} start={0.49} end={0.64}
        className="flex-col justify-end items-end px-8 md:px-14 pb-16 md:pb-20"
      >
        <div className="max-w-sm text-right">
          <Label>The Communities</Label>
          <Hero>
            This is not a museum.<br />These are neighbours.
          </Hero>
          <Rule />
          <Body>
            The Maasai communities bordering Ngorongoro are navigating a relationship
            with conservation — and with global tourism — that is decades old
            and still evolving. When travel is done carefully, it shifts from
            extraction to exchange. You come to witness.
            You leave having been witnessed in return.
          </Body>
        </div>
      </Beat>

      {/* 6 · THE IMPACT ─────────────────────────────────────── 0.61 → 0.76 */}
      <Beat p={scrollYProgress} start={0.61} end={0.76}
        className="flex-col justify-center items-start px-8 md:px-14"
      >
        <div className="max-w-xl">
          <Label>The Impact</Label>
          <div className="space-y-8">
            <Hero>
              Behind every extraordinary journey, women are building something permanent.
            </Hero>
            <Body>
              Vala Wild works with women-led enterprises across Tanzania — from beadwork
              cooperatives whose income has put daughters through university, to camp
              managers who began as kitchen staff and now run operations for international
              guests. This is not charity tourism. This is what happens when the money
              from travel is pointed in the right direction.
            </Body>
            <Pull>
              "I want my daughter to see<br />that I built something here."
            </Pull>
            <Attr>Amina · Ngorongoro</Attr>
          </div>
        </div>
      </Beat>

      {/* 7 · LUXURY SAFARI EXPERIENCES ─────────────────────── 0.73 → 0.87 */}
      <Beat p={scrollYProgress} start={0.73} end={0.87}
        className="flex-col items-center justify-start pt-20 md:pt-24 px-8"
      >
        <div className="max-w-lg text-center">
          <Label>Where You Sleep</Label>
          <Hero>
            The place you sleep is part of what you are here for.
          </Hero>
          <Rule />
          <Body>
            Canvas under the stars on the rim of Ngorongoro Crater.
            A tent at Sayari Camp, close enough to the Mara River to hear
            the migration at night. A private concession that stretches
            further than you can see. Every property we recommend has been chosen
            for one reason: it is in honest relationship with the land and
            the people who live near it.
          </Body>
        </div>
      </Beat>

      {/* 8 · BEGIN YOUR JOURNEY ─────────────────────────────── 0.85 → 1.00 */}
      <Beat p={scrollYProgress} start={0.85} end={1.0}
        className="flex-col items-center justify-center px-8"
      >
        <div className="text-center">
          <Label>Begin</Label>
          <Display>Your Journey</Display>
          <Rule />
          <Body className="max-w-[32ch] mx-auto text-center mb-10">
            Tell us when you'd like to come.
            Tell us what you're hoping to feel.
            We'll take it from there.
          </Body>
          <a
            href="mailto:hello@valawild.com"
            className="pointer-events-auto font-['Italiana',serif] text-[5.5vw] md:text-[2.8vw] lg:text-[2vw] text-white/88 tracking-[0.1em] border-b border-white/28 pb-1 hover:text-white hover:border-white/65 transition-all duration-500"
            style={{ textShadow: '0 1px 28px rgba(0,0,0,0.5)' }}
          >
            hello@valawild.com
          </a>
          <p className="font-['Kufam',sans-serif] text-[9px] md:text-[10px] tracking-[0.26em] uppercase text-white/32 mt-7">
            We respond to every enquiry personally
          </p>
        </div>
      </Beat>

    </div>
  );
}
