import React from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';

// ── Climb waypoints — 10 stops for 9 story beats ─────────────────────────────
// The trail stays within the 45–55 vw band (mountain is centred in the SVG).
// Gentle switchbacks mimic the zigzag traverse of altitude trekking.
const STOPS  = [0, 0.11, 0.22, 0.33, 0.44, 0.55, 0.66, 0.77, 0.88, 1.00];
const X_VW   = [50, 47,  53,   48,   52,   50,   51,   49,   50,   50  ];
const Y_VH   = [90, 76,  62,   50,   38,   26,   16,   10,    6,    4  ];
// Climber shrinks as altitude increases — recedes into the mountain silhouette
const SCALES = [0.92, 0.74, 0.58, 0.45, 0.34, 0.25, 0.19, 0.14, 0.11, 0.09];

// Vertical mountain path — less lateral wander than the safari, more direct ascent
const PATH = [
  'M 50 90',
  'C 48 83, 46 80, 47 76',
  'C 50 70, 54 67, 53 62',
  'C 50 56, 46 53, 48 50',
  'C 52 44, 54 41, 52 38',
  'C 49 32, 48 29, 50 26',
  'C 52 22, 53 19, 51 16',
  'C 50 13, 50 11, 49 10',
  'C 49 8, 50 6, 50 6',
  'L 50 4',
].join(' ');

// ── Beat — fades in, holds, fades out ────────────────────────────────────────
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

// ── Typography — cool, austere mountain register ──────────────────────────────
const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.36em] uppercase text-[#B8D4EE]/55 mb-3">
    {children}
  </p>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <p
    className="font-['Italiana',serif] text-[5.5vw] md:text-[22px] lg:text-[2.2vw] leading-[1.08] text-white tracking-[0.04em]"
    style={{ textShadow: '0 1px 28px rgba(5,8,16,0.7)' }}
  >
    {children}
  </p>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p
    className="font-['Cormorant_Garamond',serif] text-[4vw] md:text-[15px] lg:text-[0.95vw] leading-[1.72] text-white/78 font-light mt-3"
    style={{ textShadow: '0 1px 12px rgba(5,8,16,0.6)' }}
  >
    {children}
  </p>
);

const Quote = ({ children }: { children: React.ReactNode }) => (
  <p
    className="font-['Cormorant_Garamond',serif] italic text-[4vw] md:text-[17px] lg:text-[1.3vw] leading-[1.5] text-[#C8DCEE]/90 font-light mt-3 border-l border-[#7AAACE]/35 pl-4 text-left"
    style={{ textShadow: '0 1px 18px rgba(5,8,16,0.6)' }}
  >
    {children}
  </p>
);

const Attr = ({ children }: { children: React.ReactNode }) => (
  <p className="font-['Kufam',sans-serif] text-[8px] tracking-[0.2em] uppercase text-[#8AAABE]/40 mt-3">
    {children}
  </p>
);

const Elevation = ({ children }: { children: React.ReactNode }) => (
  <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.28em] uppercase text-[#7AAACE]/55 mt-4">
    {children}
  </p>
);

// ── Text block positioned along the trail corridor (45–55 vw) ─────────────────
// Mobile  (<md): full-width, centred — sidebar columns are unreadable at 375px.
// Desktop (md+): left ends at 38 vw; right starts at 58 vw; centre on 50 vw.
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
      ? { position: 'absolute', right: '62vw', top: `${top}vh`, maxWidth: 'min(30vw, 268px)' }
      : side === 'right'
      ? { position: 'absolute', left: '58vw', top: `${top}vh`, maxWidth: 'min(30vw, 268px)' }
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

// ── Mountain climber figure ───────────────────────────────────────────────────
// Cold ice-white; beanie cap; bulkier puffer jacket; trekking poles.
function Climber() {
  const C  = 'rgba(200,215,235,0.92)';
  const CA = 'rgba(160,185,215,0.78)'; // slightly darker for depth

  return (
    <svg
      viewBox="-22 -68 44 92"
      width="44"
      height="92"
      style={{ overflow: 'visible', filter: 'drop-shadow(0 0 10px rgba(140,180,220,0.5))' }}
    >
      {/* Beanie */}
      <ellipse cx="0" cy="-58" rx="9" ry="5.5" fill={C} />
      <rect x="-9" y="-59" width="18" height="5" fill={C} />
      <ellipse cx="0" cy="-62" rx="9" ry="4" fill={CA} />

      {/* Head */}
      <circle cx="0" cy="-47" r="8.5" fill={C} />

      {/* Puffer jacket body — wider than safari */}
      <rect x="-13" y="-38" width="26" height="22" rx="4" fill={C} />
      {/* Jacket seam lines */}
      <line x1="-13" y1="-30" x2="13" y2="-30" stroke={CA} strokeWidth="1" />
      <line x1="-13" y1="-22" x2="13" y2="-22" stroke={CA} strokeWidth="1" />
      {/* Collar */}
      <rect x="-5" y="-38" width="10" height="5" rx="1" fill={CA} />

      {/* Legs */}
      <rect x="-7" y="-16" width="6" height="20" rx="3" fill={C} />
      <rect x="1"  y="-16" width="6" height="20" rx="3" fill={C} />
      {/* Boots */}
      <ellipse cx="-4" cy="5"  rx="6" ry="3.5" fill={CA} />
      <ellipse cx="4"  cy="5"  rx="6" ry="3.5" fill={CA} />

      {/* Trekking poles — right hand → planted forward */}
      <motion.line
        x1="13" y1="-22"
        animate={{ x2: [20, 16, 20], y2: [8, 14, 8] }}
        transition={{ duration: 0.92, repeat: Infinity, ease: 'easeInOut' }}
        stroke={CA} strokeWidth="2.5" strokeLinecap="round"
      />
      {/* Trekking pole — left hand → planted back */}
      <motion.line
        x1="-13" y1="-22"
        animate={{ x2: [-18, -14, -18], y2: [8, 14, 8] }}
        transition={{ duration: 0.92, repeat: Infinity, ease: 'easeInOut', delay: 0.46 }}
        stroke={CA} strokeWidth="2.5" strokeLinecap="round"
      />

      {/* Arms (follow pole rhythm) */}
      <motion.line x1="13" y1="-28"
        animate={{ x2: [18, 14, 18], y2: [-18, -24, -18] }}
        transition={{ duration: 0.92, repeat: Infinity, ease: 'easeInOut' }}
        stroke={C} strokeWidth="3.5" strokeLinecap="round" />
      <motion.line x1="-13" y1="-28"
        animate={{ x2: [-18, -14, -18], y2: [-18, -24, -18] }}
        transition={{ duration: 0.92, repeat: Infinity, ease: 'easeInOut', delay: 0.46 }}
        stroke={C} strokeWidth="3.5" strokeLinecap="round" />

      {/* Leg animation — uphill stride */}
      <motion.line x1="-4" y1="4"
        animate={{ x2: [-8, 2, -8], y2: [22, 18, 22] }}
        transition={{ duration: 0.92, repeat: Infinity, ease: 'easeInOut' }}
        stroke={C} strokeWidth="4" strokeLinecap="round" />
      <motion.line x1="4" y1="4"
        animate={{ x2: [8, -2, 8], y2: [22, 18, 22] }}
        transition={{ duration: 0.92, repeat: Infinity, ease: 'easeInOut', delay: 0.46 }}
        stroke={C} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

// ── Ice sparkles — cold blue-white, clustered in trail corridor ───────────────
const SPARKLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  size:  1.5 + (i * 1.2) % 3.5,
  left:  40 + (i * 2.1) % 20,  // 40–60 vw — along the trail
  top:   8  + (i * 6.7) % 80,
  dur:   9  + (i * 1.6) % 12,
  delay: (i * 1.3) % 10,
  dx:    ((i % 3) - 1) * 8,
  dy:    -(20 + (i * 4.1) % 40),
  r: 140 + (i * 4) % 50,
  g: 175 + (i * 5) % 40,
  b: 210 + (i * 2) % 30,
}));

// ── Main component ────────────────────────────────────────────────────────────
export default function KilimanjaroEditorial() {
  const { scrollYProgress } = useScroll();

  const climberLeft    = useTransform(scrollYProgress, STOPS, X_VW.map(x => `${x}vw`));
  const climberTop     = useTransform(scrollYProgress, STOPS, Y_VH.map(y => `${y}vh`));
  const climberScale   = useTransform(scrollYProgress, STOPS, SCALES);
  const climberOpacity = useTransform(scrollYProgress, [0, 0.03, 0.94, 1.0], [0, 1, 1, 0]);

  return (
    <div className="fixed inset-0 z-[30] pointer-events-none overflow-hidden">

      {/* ── Mountain trail ───────────────────────────────────────────────────── */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="kg" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%"   stopColor="#6A9FC0" stopOpacity="0.52" />
            <stop offset="50%"  stopColor="#7AAACE" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#9EC4E0" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="kglow" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%"   stopColor="#A8CCE8" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#A8CCE8" stopOpacity="0.02" />
          </linearGradient>
          <filter id="kblur"><feGaussianBlur stdDeviation="0.6" /></filter>
        </defs>
        {/* Glow halo */}
        <path d={PATH} stroke="url(#kglow)" strokeWidth="10" fill="none" filter="url(#kblur)" />
        {/* Main trail line */}
        <path d={PATH} stroke="url(#kg)"    strokeWidth="1.4" fill="none" />
        {/* Dash — altitude marker ticks */}
        <path d={PATH} stroke="rgba(160,200,230,0.18)" strokeWidth="0.5" fill="none" strokeDasharray="1.5 4" />
      </svg>

      {/* ── Ice sparkles ─────────────────────────────────────────────────────── */}
      {SPARKLES.map(s => (
        <motion.div key={s.id} className="absolute rounded-full"
          style={{
            width: s.size + 'px', height: s.size + 'px',
            left: s.left + '%', top: s.top + '%',
            backgroundColor: `rgba(${s.r},${s.g},${s.b},0.5)`,
            filter: 'blur(0.8px)',
          }}
          animate={{ y: [0, s.dy, 0], x: [0, s.dx, 0], opacity: [0, 0.55, 0] }}
          transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
        />
      ))}

      {/* ── Climber ──────────────────────────────────────────────────────────── */}
      <motion.div style={{
        position: 'absolute',
        left: climberLeft, top: climberTop,
        x: '-50%', y: '-88%',
        scale: climberScale, opacity: climberOpacity,
      }}>
        {/* Subtle breath-bob — slower than safari walk, heavier with altitude */}
        <motion.div animate={{ y: [0, -2, 0] }} transition={{ duration: 0.92, repeat: Infinity, ease: 'easeInOut' }}>
          <Climber />
        </motion.div>
        {/* Boot shadow */}
        <motion.div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 rounded-full"
          style={{ width: '30px', height: '6px', background: 'rgba(80,110,145,0.18)', filter: 'blur(3px)' }}
          animate={{ scaleX: [1, 1.1, 1], opacity: [0.22, 0.38, 0.22] }}
          transition={{ duration: 0.92, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* ════════════════════════ STORY BEATS ════════════════════════════════ */}
      {/* Each Waymark is positioned so text appears beside the climber's screen
          location when that beat is at peak scroll. Left text ends at ~38 vw;
          right text starts at ~58 vw; trail lives at 45–55 vw. */}

      {/* 1 · THE MOUNTAIN ─────────────── peak ~0.055 / climber y ≈ 83 vh ───── */}
      <Beat p={scrollYProgress} start={0} end={0.11}>
        <Waymark side="center" top={20}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 1.8, ease: 'easeOut' }}
          >
            <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.34em] uppercase text-[#B8D4EE]/50 mb-3">
              Tanzania · 5,895 m
            </p>
            <p
              className="font-['Italiana',serif] text-[8vw] md:text-[5vw] lg:text-[3.8vw] leading-[0.9] text-white tracking-[0.05em]"
              style={{ textShadow: '0 2px 40px rgba(5,8,16,0.6)' }}
            >
              Mount<br />Kilimanjaro
            </p>
            <div className="w-14 h-px bg-[#8AAABE]/28 mx-auto my-5" />
            <Body>
              There is a mountain that stands alone on the plains of East Africa.
              No range holds it. No neighbouring peak shares its sky.
              It is simply there — and it has been there for three million years.
            </Body>
          </motion.div>
        </Waymark>
      </Beat>

      {/* 2 · THE RAINFOREST ──────────── peak ~0.165 / climber y ≈ 69 vh ─────── */}
      {/* Trail curves left (x=47vw) → text sits on the RIGHT */}
      <Beat p={scrollYProgress} start={0.09} end={0.24}>
        <Waymark side="right" top={58}>
          <Label>Zone I · 1,800–2,800 m</Label>
          <Title>The forest closes around you first.</Title>
          <Body>
            Colobus monkeys watch from the canopy. The air is wet — warm, heavy, alive.
            Your boots sink into red volcanic soil. Ferns stand taller than men.
            The mountain is not yet visible. You climb by feel.
          </Body>
          <Elevation>Entering the Montane Rainforest</Elevation>
        </Waymark>
      </Beat>

      {/* 3 · THE MOORLANDS ───────────── peak ~0.275 / climber y ≈ 56 vh ─────── */}
      {/* Trail curves right (x=53vw) → text sits on the LEFT */}
      <Beat p={scrollYProgress} start={0.20} end={0.35}>
        <Waymark side="left" top={42}>
          <Label>Zone II · 2,800–4,000 m</Label>
          <Title>The trees give way. The sky opens.</Title>
          <Body>
            Giant heathers rise from the moorland like sculptures. Lobelia tower at eye level,
            their silver spikes catching the afternoon light.
            The summit appears for the first time — impossibly far above the clouds.
          </Body>
          <Elevation>The Heath & Moorland Zone</Elevation>
        </Waymark>
      </Beat>

      {/* 4 · THE ALPINE DESERT ─────────── peak ~0.385 / climber y ≈ 44 vh ───── */}
      {/* Trail curves left (x=48vw) → text sits on the RIGHT */}
      <Beat p={scrollYProgress} start={0.31} end={0.46}>
        <Waymark side="right" top={30}>
          <Label>Zone III · 4,000–5,000 m</Label>
          <Title>The world empties.</Title>
          <Body>
            Nothing grows here. Volcanic scree and frozen ground.
            You walk in darkness before dawn — headlamp casting a single cone of light
            across a landscape that could be another planet.
            Every step costs something. That is the point.
          </Body>
          <Elevation>The Alpine Desert</Elevation>
        </Waymark>
      </Beat>

      {/* 5 · THE SUMMIT ───────────────── peak ~0.495 / climber y ≈ 32 vh ─────── */}
      {/* Trail near centre (x=50vw) — centre-aligned moment of arrival */}
      <Beat p={scrollYProgress} start={0.42} end={0.57}>
        <Waymark side="left" top={18}>
          <Label>Uhuru Peak · 5,895 m</Label>
          <Title>Freedom.</Title>
          <Body>
            The Swahili word for the summit is uhuru. Freedom.
            At 5,895 metres, the glaciers that have stood here for 11,000 years
            are still visible on the crater rim — though not for much longer.
            The air at this altitude contains a third of the oxygen at sea level.
            What you feel at the top is real. It was earned.
          </Body>
          <Quote>"People ask me what it feels like. I tell them: it feels like arriving somewhere you were always meant to be."</Quote>
          <Attr>Goodluck · Summit Guide · Marangu Route</Attr>
        </Waymark>
      </Beat>

      {/* 6 · THE GUIDES ─────────────── peak ~0.605 / climber y ≈ 21 vh ─────── */}
      {/* Explorer near top — text drops to mid-screen */}
      <Beat p={scrollYProgress} start={0.53} end={0.68}>
        <Waymark side="right" top={32}>
          <Label>The Guides</Label>
          <Title>He has summited three hundred times. This one matters as much as the first.</Title>
          <Body>
            The guides who lead climbers up Kilimanjaro carry everything:
            the weight of the equipment, the oxygen, the pace, the morale.
            They know which step to slow down at. They know when to tell a story.
            They know what silence means at 5,000 metres.
          </Body>
          <Quote>"When I reach the top with someone who has never seen it before, I see it for the first time again too."</Quote>
          <Attr>Emmanuel · 17 years on the mountain</Attr>
        </Waymark>
      </Beat>

      {/* 7 · THE IMPACT ─────────────── peak ~0.715 / climber y ≈ 13 vh ─────── */}
      {/* Explorer near horizon — text stays in mid-screen, readable alongside */}
      <Beat p={scrollYProgress} start={0.64} end={0.79}>
        <Waymark side="left" top={34}>
          <Label>The Impact</Label>
          <Title>The mountain sustains more than climbers.</Title>
          <Body>
            The communities that live at Kilimanjaro's base have shaped every route on it.
            Porter welfare, guide training, reforestation programmes, women-led cooperatives
            in the villages below — every journey on this mountain, when done well,
            is an economic lifeline for the people who call it home.
          </Body>
          <Quote>"We plant trees every season. We want the mountain to be here for our grandchildren."</Quote>
          <Attr>Amina · Reforestation Programme · Moshi</Attr>
        </Waymark>
      </Beat>

      {/* 8 · PREPARING FOR THE JOURNEY ─ peak ~0.825 / climber near summit ───── */}
      <Beat p={scrollYProgress} start={0.75} end={0.90}>
        <Waymark side="right" top={36}>
          <Label>Before You Climb</Label>
          <Title>The preparation is part of the journey.</Title>
          <Body>
            Seven days is the standard. We recommend eight — the extra day at altitude
            transforms the experience from endurance to exploration.
            The Lemosho route enters from the western slopes, offers the widest views,
            and carries the highest success rates on the mountain.
            We handle every detail: acclimatisation schedule, porter welfare, equipment,
            medical support on every ascent.
          </Body>
          <Elevation>Lemosho Route · 8 Days</Elevation>
        </Waymark>
      </Beat>

      {/* 9 · BEGIN YOUR CLIMB ─────────── peak ~0.94 / climber at summit ──────── */}
      <Beat p={scrollYProgress} start={0.88} end={1.0}>
        <Waymark side="center" top={28}>
          <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.34em] uppercase text-[#B8D4EE]/50 mb-3">
            Begin
          </p>
          <p
            className="font-['Italiana',serif] text-[8vw] md:text-[5vw] lg:text-[3.5vw] leading-[0.9] text-white tracking-[0.05em]"
            style={{ textShadow: '0 2px 40px rgba(5,8,16,0.6)' }}
          >
            Your Climb
          </p>
          <div className="w-14 h-px bg-[#8AAABE]/28 mx-auto my-5" />
          <Body>
            Tell us when you want to leave the plains behind.
            Tell us how high you want to go.
          </Body>
          <div className="mt-6">
            <a
              href="mailto:hello@valawild.com"
              className="pointer-events-auto font-['Kufam',sans-serif] text-[2.5vw] md:text-[1.2vw] lg:text-[0.85vw] tracking-[0.18em] uppercase text-[#A8C8E0]/72 border-b border-[#7AAACE]/25 pb-0.5 hover:text-white hover:border-[#7AAACE]/55 transition-all duration-400"
            >
              hello@valawild.com
            </a>
          </div>
        </Waymark>
      </Beat>

    </div>
  );
}
