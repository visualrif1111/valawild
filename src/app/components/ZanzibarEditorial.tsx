import React from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';

// ── Wander waypoints — 10 stops for 9 story beats ───────────────────────────
// The trail wanders wider than Kilimanjaro (42–58 vw) — reflecting the island's
// unhurried, sidewinding drift through ocean, town and shore.
const STOPS  = [0, 0.11, 0.22, 0.33, 0.44, 0.55, 0.66, 0.77, 0.88, 1.00];
const X_VW   = [50, 42,  58,   43,   57,   45,   55,   48,   52,   50  ];
const Y_VH   = [90, 76,  62,   50,   38,   28,   18,   12,    7,    4  ];
// Wanderer recedes slowly — the island swallows you gently
const SCALES = [0.92, 0.74, 0.58, 0.46, 0.35, 0.26, 0.20, 0.15, 0.12, 0.10];

// Wide, unhurried path — more lateral drift than the mountain's direct ascent
const PATH = [
  'M 50 90',
  'C 45 83, 40 80, 42 76',
  'C 54 70, 60 66, 58 62',
  'C 48 56, 41 53, 43 50',
  'C 56 44, 60 41, 57 38',
  'C 49 32, 44 29, 45 28',
  'C 52 23, 57 20, 55 18',
  'C 50 14, 47 11, 48 12',
  'C 49 9, 51 6, 52 7',
  'L 50 4',
].join(' ');

// ── Beat — slower fade rhythm for the island's reflective pace ───────────────
function Beat({
  p, start, end, children,
}: {
  p: MotionValue<number>;
  start: number;
  end: number;
  children: React.ReactNode;
}) {
  const opacity = useTransform(p, [start, start + 0.028, end - 0.028, end], [0, 1, 1, 0]);
  // Gentler drift — island doesn't rush
  const y = useTransform(p, [start, start + 0.06, end - 0.06, end], [10, 0, -3, -10]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0">
      {children}
    </motion.div>
  );
}

// ── Typography — warm, unhurried, literary ────────────────────────────────────
const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.36em] uppercase text-[#7BE8E8]/48 mb-3">
    {children}
  </p>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <p
    className="font-['Italiana',serif] text-[5.5vw] md:text-[22px] lg:text-[2.2vw] leading-[1.1] text-white tracking-[0.05em]"
    style={{ textShadow: '0 1px 30px rgba(6,20,36,0.65)' }}
  >
    {children}
  </p>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p
    className="font-['Cormorant_Garamond',serif] text-[4vw] md:text-[15px] lg:text-[0.95vw] leading-[1.82] text-white/76 font-light mt-3"
    style={{ textShadow: '0 1px 14px rgba(6,20,36,0.55)' }}
  >
    {children}
  </p>
);

// line-height slightly more generous than Safari/Kili — reflects slower pace
const Quote = ({ children }: { children: React.ReactNode }) => (
  <p
    className="font-['Cormorant_Garamond',serif] italic text-[4vw] md:text-[17px] lg:text-[1.3vw] leading-[1.55] text-[#A8E8DC]/88 font-light mt-4 border-l border-[#40C4CC]/32 pl-4 text-left"
    style={{ textShadow: '0 1px 18px rgba(6,20,36,0.55)' }}
  >
    {children}
  </p>
);

const Attr = ({ children }: { children: React.ReactNode }) => (
  <p className="font-['Kufam',sans-serif] text-[8px] tracking-[0.2em] uppercase text-[#7BE8E8]/38 mt-3">
    {children}
  </p>
);

const Whisper = ({ children }: { children: React.ReactNode }) => (
  <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.3em] uppercase text-[#64C8C8]/45 mt-4">
    {children}
  </p>
);

// ── Text block aligned to the wander corridor (42–58 vw) ─────────────────────
// Mobile  (<md): full-width, centred — sidebar columns are unreadable at 375px.
// Desktop (md+): left ends at 36 vw; right starts at 62 vw; centre on 50 vw.
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
      ? { position: 'absolute', right: '64vw', top: `${top}vh`, maxWidth: 'min(28vw, 256px)' }
      : side === 'right'
      ? { position: 'absolute', left: '62vw', top: `${top}vh`, maxWidth: 'min(28vw, 256px)' }
      : {
          position: 'absolute',
          left: '50%',
          top: `${top}vh`,
          transform: 'translateX(-50%)',
          maxWidth: 'min(38vw, 360px)',
          textAlign: 'center',
        };
  return (
    <>
      <div
        className="md:hidden"
        style={{ position: 'absolute', left: '6vw', right: '6vw', top: `${top}vh`, textAlign: 'center' }}
      >
        {children}
      </div>
      <div className="hidden md:block" style={desktopStyle}>
        {children}
      </div>
    </>
  );
}

// ── Wanderer figure — loose linen, wide sun hat, bare-footed ease ─────────────
// Warm ivory tones; animation is slower and more lateral than the climber's
// driven uphill stride. This person is not in a hurry.
function Wanderer() {
  const C  = 'rgba(240,232,210,0.90)';  // warm ivory-cream
  const CA = 'rgba(196,184,148,0.80)';  // warm shadow

  return (
    <svg
      viewBox="-22 -68 44 92"
      width="44"
      height="92"
      style={{ overflow: 'visible', filter: 'drop-shadow(0 0 10px rgba(64,196,204,0.38))' }}
    >
      {/* Wide sun hat — broad brim, island style */}
      <ellipse cx="0" cy="-56" rx="20" ry="4"   fill={C} />
      <ellipse cx="0" cy="-58" rx="11" ry="5.5" fill={CA} />
      <ellipse cx="0" cy="-61" rx="10" ry="4.5" fill={C} />
      {/* Loose hat crown shadow line */}
      <ellipse cx="0" cy="-56" rx="20" ry="1.5" fill="none" stroke={CA} strokeWidth="0.8" />

      {/* Head */}
      <circle cx="0" cy="-46" r="8" fill={C} />

      {/* Loose linen shirt / flowing top */}
      <path
        d="M -11 -38 C -13 -26 -13 -14 -10 -4 Q 0 -1 10 -4 C 13 -14 13 -26 11 -38 Z"
        fill={C}
      />
      {/* Linen drape lines — suggests soft fabric */}
      <path d="M -11 -38 C -14 -28 -13 -18 -11 -8" stroke={CA} strokeWidth="0.9" fill="none" />
      <path d="M  11 -38 C  14 -28  13 -18  11 -8" stroke={CA} strokeWidth="0.9" fill="none" />

      {/* Wide loose trousers */}
      <path d="M -11 -4 C -13 6 -12 16 -9 24 Q -4 26 0 24 Q 4 26 9 24 C 12 16 13 6 11 -4 Z" fill={C} />

      {/* Bare feet */}
      <ellipse cx="-5" cy="26" rx="5.5" ry="2.5" fill={CA} />
      <ellipse cx=" 5" cy="26" rx="5.5" ry="2.5" fill={CA} />

      {/* Arms — wide, relaxed lateral swing (not forward-driving like climber) */}
      <motion.line x1="-11" y1="-24"
        animate={{ x2: [-19, -8, -19], y2: [-12, -16, -12] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        stroke={C} strokeWidth="3.5" strokeLinecap="round"
      />
      <motion.line x1="11" y1="-24"
        animate={{ x2: [19, 8, 19], y2: [-12, -16, -12] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        stroke={C} strokeWidth="3.5" strokeLinecap="round"
      />

      {/* Leg swing — unhurried, wider stride */}
      <motion.line x1="-5" y1="8"
        animate={{ x2: [-10, 3, -10], y2: [26, 22, 26] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        stroke={C} strokeWidth="4" strokeLinecap="round"
      />
      <motion.line x1="5" y1="8"
        animate={{ x2: [10, -3, 10], y2: [26, 22, 26] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        stroke={C} strokeWidth="4" strokeLinecap="round"
      />
    </svg>
  );
}

// ── Water-light shimmer — turquoise and warm gold, drift horizontally ─────────
// Distributed across the 38–62 vw trail corridor; drift is gentler than dust.
const SHIMMER = Array.from({ length: 16 }, (_, i) => {
  const isTeal = i % 3 !== 1;
  return {
    id: i,
    size:  2 + (i * 1.3) % 5,
    left:  36 + (i * 1.7) % 26,    // 36–62 vw
    top:   6  + (i * 5.9) % 82,
    dur:   10 + (i * 2.1) % 14,    // slower drift than Kili
    delay: (i * 1.5) % 12,
    dx:    ((i % 5) - 2) * 14,     // more horizontal drift (water light)
    dy:    -(12 + (i * 3.2) % 28), // gentler upward float
    r: isTeal ? (55 + (i * 4) % 40)  : (210 + (i * 3) % 30),
    g: isTeal ? (180 + (i * 4) % 30) : (195 + (i * 4) % 35),
    b: isTeal ? (195 + (i * 3) % 35) : (100 + (i * 5) % 45),
  };
});

// ── Main component ────────────────────────────────────────────────────────────
export default function ZanzibarEditorial() {
  const { scrollYProgress } = useScroll();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shimmer = isMobile ? SHIMMER.slice(0, 4) : SHIMMER;

  const wandererLeft    = useTransform(scrollYProgress, STOPS, X_VW.map(x => `${x}vw`));
  const wandererTop     = useTransform(scrollYProgress, STOPS, Y_VH.map(y => `${y}vh`));
  const wandererScale   = useTransform(scrollYProgress, STOPS, SCALES);
  const wandererOpacity = useTransform(scrollYProgress, [0, 0.03, 0.94, 1.0], [0, 1, 1, 0]);

  return (
    <div className="fixed inset-0 z-[30] pointer-events-none overflow-hidden">

      {/* ── Island path ──────────────────────────────────────────────────────── */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="zg" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%"   stopColor="#E8C870" stopOpacity="0.45" />
            <stop offset="35%"  stopColor="#40C4CC" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#7BE8E8" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="zglow" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%"   stopColor="#64C8C8" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#A8E8DC" stopOpacity="0.02" />
          </linearGradient>
          <filter id="zblur"><feGaussianBlur stdDeviation="0.7" /></filter>
        </defs>
        {/* Glow halo — wider, softer than mountain trail */}
        <path d={PATH} stroke="url(#zglow)" strokeWidth="12" fill="none" filter="url(#zblur)" />
        {/* Main path — warm gold at base, turquoise at top */}
        <path d={PATH} stroke="url(#zg)"    strokeWidth="1.4" fill="none" />
        {/* Fine shimmer dash */}
        <path d={PATH} stroke="rgba(123,232,232,0.16)" strokeWidth="0.5" fill="none" strokeDasharray="2 5" />
      </svg>

      {/* ── Water shimmer particles ───────────────────────────────────────────── */}
      {shimmer.map(s => (
        <motion.div key={s.id} className="absolute rounded-full"
          style={{
            width: s.size + 'px', height: s.size + 'px',
            left: s.left + '%', top: s.top + '%',
            backgroundColor: `rgba(${s.r},${s.g},${s.b},0.48)`,
            filter: 'blur(1px)',
          }}
          animate={{ y: [0, s.dy, 0], x: [0, s.dx, 0], opacity: [0, 0.52, 0] }}
          transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
        />
      ))}

      {/* ── Wanderer ─────────────────────────────────────────────────────────── */}
      <motion.div style={{
        position: 'absolute',
        left: wandererLeft, top: wandererTop,
        x: '-50%', y: '-88%',
        scale: wandererScale, opacity: wandererOpacity,
      }}>
        {/* Slow, gentle drift — island pace */}
        <motion.div animate={{ y: [0, -2.5, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
          <Wanderer />
        </motion.div>
        {/* Soft shadow on warm sand */}
        <motion.div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 rounded-full"
          style={{ width: '32px', height: '6px', background: 'rgba(40,80,100,0.18)', filter: 'blur(3px)' }}
          animate={{ scaleX: [1, 1.12, 1], opacity: [0.20, 0.35, 0.20] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* ════════════════════════ STORY BEATS ════════════════════════════════ */}
      {/* Trail wanders 42–58 vw. Left Waymarks end at 36 vw; right start at 62 vw.
          Vertical placement follows the wanderer's screen position at each beat's
          scroll midpoint. Late beats (high on screen) drop text to mid-screen. */}

      {/* 1 · ARRIVAL ─────────────────────────────── peak ~0.055 / wanderer y≈83vh */}
      <Beat p={scrollYProgress} start={0} end={0.11}>
        <Waymark side="center" top={20}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 2.2, ease: 'easeOut' }}
          >
            <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.36em] uppercase text-[#7BE8E8]/48 mb-3">
              Indian Ocean · East Africa
            </p>
            <p
              className="font-['Italiana',serif] text-[8vw] md:text-[5vw] lg:text-[3.8vw] leading-[0.92] text-white tracking-[0.05em]"
              style={{ textShadow: '0 2px 40px rgba(6,20,36,0.55)' }}
            >
              Zanzibar
            </p>
            <div className="w-14 h-px bg-[#40C4CC]/28 mx-auto my-5" />
            <Body>
              The island arrives before the plane lands.
              The smell first. Then the light — particular, golden, unhurried.
              Then the heat, which is nothing like the mainland's heat.
              It asks something different of you. It asks you to stop.
            </Body>
          </motion.div>
        </Waymark>
      </Beat>

      {/* 2 · THE OCEAN ──────────────────────────── peak ~0.165 / wanderer y≈69vh */}
      {/* Trail curves hard left (x=42vw) → text sits on the RIGHT */}
      <Beat p={scrollYProgress} start={0.09} end={0.24}>
        <Waymark side="right" top={55}>
          <Label>The Ocean</Label>
          <Title>There is a specific blue that exists only here.</Title>
          <Body>
            At low tide the reef flats extend for half a mile.
            The water is shallow enough to walk through, warm enough to forget you are in it.
            Children collect sea urchins in the shallows. A dhow moves slowly on the horizon.
            Time passes differently from this shore.
          </Body>
          <Whisper>Turquoise waters · Coral reefs · Dhow sailing</Whisper>
        </Waymark>
      </Beat>

      {/* 3 · STONE TOWN ─────────────────────────── peak ~0.275 / wanderer y≈56vh */}
      {/* Trail curves hard right (x=58vw) → text sits on the LEFT */}
      <Beat p={scrollYProgress} start={0.20} end={0.35}>
        <Waymark side="left" top={43}>
          <Label>Stone Town</Label>
          <Title>Seven hundred years of civilisation, carved into every doorway.</Title>
          <Body>
            The streets of Stone Town do not run straight. That is intentional.
            They turn, narrow, open unexpectedly into courtyards.
            Brass-studded doors. Latticed balconies. The scent of cloves drifting
            from the spice market two streets away.
            You will get lost here. That is also intentional.
          </Body>
          <Whisper>UNESCO World Heritage Site</Whisper>
        </Waymark>
      </Beat>

      {/* 4 · THE CULTURE ─────────────────────────── peak ~0.385 / wanderer y≈44vh */}
      {/* Trail curves left (x=43vw) → text sits on the RIGHT */}
      <Beat p={scrollYProgress} start={0.31} end={0.46}>
        <Waymark side="right" top={30}>
          <Label>The Culture</Label>
          <Title>This island has always been a meeting point.</Title>
          <Body>
            Arab traders, Persian merchants, Omani sultans, Indian families —
            the Swahili coast absorbed them all and made something new.
            The food carries it. The music carries it. The language carries it.
            Zanzibar is not one story. It is several, told simultaneously,
            in the same street, at the same hour.
          </Body>
          <Quote>"People come here looking for paradise. But paradise has a history."</Quote>
          <Attr>Fatuma · Stone Town guide · 22 years</Attr>
        </Waymark>
      </Beat>

      {/* 5 · THE WATER ──────────────────────────── peak ~0.495 / wanderer y≈33vh */}
      {/* Trail curves right (x=57vw) → text sits on the LEFT */}
      <Beat p={scrollYProgress} start={0.42} end={0.57}>
        <Waymark side="left" top={22}>
          <Label>Beneath the Surface</Label>
          <Title>Another world, entirely.</Title>
          <Body>
            Hawksbill turtles move through the reef in no particular hurry.
            Parrotfish in electric blue. Moorish idols. A shoal of silversides
            that turns as a single organism, then disappears.
            The reef at Mnemba Atoll is one of the most biodiverse marine environments
            in the Indian Ocean. It is also one of the most fragile.
          </Body>
          <Whisper>Mnemba Atoll · Marine Conservation Area</Whisper>
        </Waymark>
      </Beat>

      {/* 6 · THE PEOPLE ─────────────────────────── peak ~0.605 / wanderer y≈23vh */}
      {/* Explorer moving upper screen — text drops to mid-viewport */}
      <Beat p={scrollYProgress} start={0.53} end={0.68}>
        <Waymark side="right" top={32}>
          <Label>The People</Label>
          <Title>The fishermen set out before dawn. They have always set out before dawn.</Title>
          <Body>
            At first light the women are already at the reef edge,
            harvesting the seaweed they farm in long lines across the shallows.
            The spice farmers in the hills have been tending the same groves
            their grandparents tended. Cloves, cardamom, black pepper.
            The island sustains its people quietly, methodically, season by season.
          </Body>
          <Quote>"I want my children to know the ocean like I know it. To read it. To respect it."</Quote>
          <Attr>Hassan · Fisherman · Nungwi village</Attr>
        </Waymark>
      </Beat>

      {/* 7 · THE IMPACT ─────────────────────────── peak ~0.715 / wanderer y≈15vh */}
      {/* Wanderer near top — text in mid-screen */}
      <Beat p={scrollYProgress} start={0.64} end={0.79}>
        <Waymark side="left" top={34}>
          <Label>The Impact</Label>
          <Title>Every visit, done carefully, is a choice about what survives here.</Title>
          <Body>
            Women's cooperatives turning seaweed into skincare products sold globally.
            Coral restoration projects with local dive operators.
            Community-owned lodges where the proceeds fund the village school.
            The organisations we work with are not doing charity.
            They are doing economics — building the case that the living reef
            is worth infinitely more than the dead one.
          </Body>
        </Waymark>
      </Beat>

      {/* 8 · LUXURY ISLAND EXPERIENCES ──────────── peak ~0.825 / wanderer near top */}
      <Beat p={scrollYProgress} start={0.75} end={0.90}>
        <Waymark side="right" top={36}>
          <Label>Where You Stay</Label>
          <Title>The best accommodation on this island does not compete with the island.</Title>
          <Body>
            Open pavilions above the reef. Private villas set back from the shore
            in groves of casuarina. A restored colonial house in Stone Town
            where every room has a story older than the building.
            Slow mornings. Long lunches that become long afternoons.
            The agenda here is deliberately, unapologetically empty.
          </Body>
          <Whisper>Private villas · Boutique lodges · Stone Town residences</Whisper>
        </Waymark>
      </Beat>

      {/* 9 · PLAN YOUR ESCAPE ────────────────────── peak ~0.94 / wanderer at horizon */}
      <Beat p={scrollYProgress} start={0.88} end={1.0}>
        <Waymark side="center" top={28}>
          <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.36em] uppercase text-[#7BE8E8]/48 mb-3">
            Begin
          </p>
          <p
            className="font-['Italiana',serif] text-[8vw] md:text-[5vw] lg:text-[3.5vw] leading-[0.92] text-white tracking-[0.05em]"
            style={{ textShadow: '0 2px 40px rgba(6,20,36,0.55)' }}
          >
            Your Escape
          </p>
          <div className="w-14 h-px bg-[#40C4CC]/28 mx-auto my-5" />
          <Body>
            Tell us when you need to stop.
            Tell us how long you want the afternoons to last.
          </Body>
          <div className="mt-6">
            <a
              href="mailto:hello@valawild.com"
              className="pointer-events-auto font-['Kufam',sans-serif] text-[2.5vw] md:text-[1.2vw] lg:text-[0.85vw] tracking-[0.18em] uppercase text-[#7BE8E8]/65 border-b border-[#40C4CC]/25 pb-0.5 hover:text-white hover:border-[#40C4CC]/55 transition-all duration-500"
            >
              hello@valawild.com
            </a>
          </div>
        </Waymark>
      </Beat>

    </div>
  );
}
