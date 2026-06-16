import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';

// ─── Shared illustrated elements ─────────────────────────────────────────────

function Palm({ x, y, h = 220, scale = 1 }: { x: number; y: number; h?: number; scale?: number }) {
  const tx = x;
  const ty = y;
  const s = scale;
  return (
    <g transform={`translate(${tx},${ty}) scale(${s})`}>
      {/* Trunk */}
      <path d={`M 0 0 C -4 ${h*0.3}, -6 ${h*0.6}, -2 ${h}`} stroke="#0E2820" strokeWidth="13" fill="none" strokeLinecap="round" />
      {/* Fronds */}
      <path d={`M 0 0 C -35 -30, -80 -38, -115 -42`} stroke="#0E2820" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d={`M 0 0 C -25 -42, -55 -58, -80 -68`} stroke="#0E2820" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <path d={`M 0 0 C -8 -52, -12 -80, -8 -105`} stroke="#0E2820" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d={`M 0 0 C 18 -50, 42 -68, 62 -78`} stroke="#0E2820" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <path d={`M 0 0 C 30 -36, 68 -45, 100 -50`} stroke="#0E2820" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d={`M 0 0 C 10 -18, 22 -24, 35 -22`} stroke="#0E2820" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    </g>
  );
}

function Dhow({ x, y, w = 130, fillColor = "#5BBCC0", opacity = 0.58 }: { x: number; y: number; w?: number; fillColor?: string; opacity?: number }) {
  const h = w * 1.2;
  return (
    <g transform={`translate(${x},${y})`}>
      {/* Mast */}
      <line x1="0" y1={-h} x2="0" y2="20" stroke="#143030" strokeWidth="2.5" opacity={opacity + 0.1} />
      {/* Main sail */}
      <path d={`M 0 ${-h+14} L ${-w*0.32} 18 L ${w*0.55} 18 Z`} fill={fillColor} opacity={opacity} />
      {/* Sail highlight */}
      <path d={`M 0 ${-h+14} L ${-w*0.32} 18 L 0 18 Z`} fill="white" opacity={0.15} />
      {/* Hull */}
      <path d={`M ${-w*0.38} 20 Q 0 33, ${w*0.62} 20 Q ${w*0.55} 26, 0 28 Q ${-w*0.32} 26, ${-w*0.38} 20 Z`} fill="#143030" opacity={opacity - 0.05} />
      {/* Reflection */}
      <path d={`M 0 33 L ${-w*0.28} ${33 + h*0.55} L ${w*0.5} ${33 + h*0.55} Z`} fill={fillColor} opacity={0.1} />
    </g>
  );
}

function StoneTown({ yBase = 750, opacity = 1 }: { yBase?: number; opacity?: number }) {
  const y = yBase;
  return (
    <g opacity={opacity}>
      {/* Cliff / rocky base */}
      <path d={`M 0 ${y+55} L 42 ${y-60} L 100 ${y-82} L 185 ${y-88} L 270 ${y-82} L 360 ${y-68} L 420 ${y-50} L 420 ${y+300} L 0 ${y+300} Z`}
            fill="#1A5858" opacity={0.55} />
      {/* Building A — sand tower */}
      <rect x="52" y={y-225} width="115" height="168" fill="#EDD8A8" opacity={0.82} />
      <rect x="52" y={y-235} width="115" height="14" fill="#D07848" opacity={0.75} />
      <rect x="70" y={y-200} width="22" height="32" fill="#B87840" opacity={0.7} />
      <rect x="112" y={y-200} width="22" height="32" fill="#B87840" opacity={0.7} />
      {/* Building B — cream, taller */}
      <rect x="142" y={y-262} width="100" height="205" fill="#F2E6CA" opacity={0.78} />
      <rect x="142" y={y-270} width="100" height="12" fill="#E09060" opacity={0.7} />
      <rect x="158" y={y-238} width="20" height="28" fill="#C89058" opacity={0.65} />
      <rect x="196" y={y-238} width="20" height="28" fill="#C89058" opacity={0.65} />
      {/* Building C — warm front block */}
      <rect x="218" y={y-248} width="118" height="192" fill="#E4CC9C" opacity={0.75} />
      <rect x="218" y={y-255} width="118" height="11" fill="#D06845" opacity={0.72} />
      <rect x="238" y={y-222} width="24" height="34" fill="#A87038" opacity={0.62} />
      <rect x="284" y={y-222} width="24" height="34" fill="#A87038" opacity={0.62} />
      {/* Building D — tall left background */}
      <rect x="302" y={y-295} width="82" height="230" fill="#DACAA0" opacity={0.68} />
      <rect x="358" y={y-268} width="58" height="202" fill="#E0D0A4" opacity={0.62} />
      {/* Coral pop accents */}
      <rect x="168" y={y-136} width="36" height="78" fill="#E89870" opacity={0.55} />
      <rect x="96" y={y-112} width="28" height="54" fill="#E09060" opacity={0.5} />
      {/* Cliff reflection in water */}
      <path d={`M 0 ${y+55} L 42 ${y+175} L 420 ${y+192} L 420 ${y+380} L 0 ${y+380} Z`}
            fill="#1A5858" opacity={0.18} />
      {/* Building reflections */}
      <rect x="52" y={y+58} width="115" height="75" fill="#EDD8A8" opacity={0.1} />
      <rect x="142" y={y+58} width="100" height="80" fill="#F2E6CA" opacity={0.1} />
      <rect x="218" y={y+58} width="118" height="78" fill="#E4CC9C" opacity={0.09} />
    </g>
  );
}

// ─── Wave band utilities ──────────────────────────────────────────────────────

function Wave({ y1, y2, a = 20, b = 15, c = 12, fill, opacity }: {
  y1: number; y2: number; a?: number; b?: number; c?: number;
  fill: string; opacity: number;
}) {
  return (
    <path
      d={`M 0 ${y1} C 600 ${y1 - a}, 1200 ${y1 + b}, 1800 ${y1 - c} C 2100 ${y1 + a * 0.6}, 2300 ${y1 - b * 0.5}, 2400 ${y1 + c}
          L 2400 ${y2 + c} C 2100 ${y2 - a * 0.5}, 1800 ${y2 + b * 0.6}, 1200 ${y2 - c}
          C 600 ${y2 + a * 0.8}, 200 ${y2 - b * 0.4}, 0 ${y2 + b}
          Z`}
      fill={fill}
      opacity={opacity}
    />
  );
}

// Fine-line texture pattern — unique ID per scene to avoid SVG namespace collisions
function LineDefs({ id }: { id: string }) {
  return (
    <defs>
      <pattern id={id} x="0" y="0" width="2400" height="4" patternUnits="userSpaceOnUse">
        <path d="M 0 2 C 480 1.2, 960 2.8, 1440 1.8 C 1800 1.2, 2100 2.5, 2400 2"
              stroke="white" strokeWidth="0.55" fill="none" />
      </pattern>
    </defs>
  );
}

function LineOverlay({ patternId }: { patternId: string }) {
  return <rect width="2400" height="1500" fill={`url(#${patternId})`} opacity="0.16" pointerEvents="none" />;
}

// ─── Scene components ─────────────────────────────────────────────────────────

function ZanziScene1() {
  // Pre-dawn ocean — dark indigo-teal wave bands, moon, star reflections
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <LineDefs id="zs1l" />
      <defs>
        <linearGradient id="zs1_sky" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#040C18" />
          <stop offset="50%" stopColor="#061828" />
          <stop offset="100%" stopColor="#0A2438" />
        </linearGradient>
        <radialGradient id="zs1_moon" cx="68%" cy="16%" r="18%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#E8F0D8" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#E8F0D8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="zs1_horiz" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox" x1_="0" y1_="580" x2_="0" y2_="680">
          <stop offset="0%" stopColor="#C8E8E0" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#C8E8E0" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#zs1_sky)" />
      <rect width="2400" height="1500" fill="url(#zs1_moon)" />
      {/* Moon disk */}
      <circle cx="1640" cy="148" r="38" fill="#E8F0D8" opacity="0.45" />
      <circle cx="1640" cy="148" r="55" fill="#E8F0D8" opacity="0.1" />
      {/* Stars */}
      {[[200,80,1.5,0.6],[380,52,1,0.45],[540,98,1.5,0.5],[700,42,1,0.65],[850,82,2,0.32],[980,48,1,0.58],[1100,88,1,0.42],[1250,38,1.5,0.55],[1820,75,1,0.48],[1980,55,1.5,0.52],[2150,85,1,0.44],[2300,48,1,0.6],[320,175,1,0.32],[560,195,1.5,0.28],[800,182,1,0.38],[1040,192,1,0.3],[1300,178,1.5,0.35],[1560,188,1,0.3],[2080,178,1,0.36]].map(([cx,cy,r,op],i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#B8D0CC" opacity={op} />
      ))}
      {/* Dark wave bands — indigo teal palette */}
      <Wave y1={520} y2={630} a={25} b={18} fill="#0C2E3E" opacity={0.55} />
      <Wave y1={605} y2={720} a={22} b={20} fill="#0E3848" opacity={0.6} />
      <Wave y1={690} y2={810} a={28} b={16} fill="#104050" opacity={0.62} />
      <Wave y1={780} y2={910} a={20} b={24} fill="#124858" opacity={0.65} />
      <Wave y1={878} y2={1010} a={26} b={18} fill="#145060" opacity={0.68} />
      <Wave y1={978} y2={1110} a={22} b={22} fill="#165868" opacity={0.7} />
      <Wave y1={1080} y2={1220} a={24} b={20} fill="#186070" opacity={0.72} />
      <Wave y1={1185} y2={1500} a={18} b={15} fill="#1A6878" opacity={0.75} />
      {/* Moon path on water */}
      <path d="M 1500 580 C 1580 560, 1700 555, 1800 565 C 1900 575, 1950 590, 2000 580 L 2000 1500 L 1500 1500 Z"
            fill="#E8F0D8" opacity="0.07" />
      {/* Horizon glow */}
      <path d="M 0 535 C 800 515, 1600 530, 2400 510 L 2400 620 L 0 640 Z" fill="#C8E8E4" opacity="0.08" />
      <LineOverlay patternId="zs1l" />
    </svg>
  );
}

function ZanziScene2() {
  // Dawn coastal approach — medium dark teal, first warm horizon glow, distant Stone Town silhouette
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <LineDefs id="zs2l" />
      <defs>
        <linearGradient id="zs2_sky" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#0E1E2E" />
          <stop offset="40%" stopColor="#162E40" />
          <stop offset="75%" stopColor="#C8A870" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#E8C888" stopOpacity="0.8" />
        </linearGradient>
        <radialGradient id="zs2_dawn" cx="75%" cy="48%" r="30%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#E8C870" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#E8C870" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#zs2_sky)" />
      <rect width="2400" height="1500" fill="url(#zs2_dawn)" />
      {/* Golden horizon band */}
      <path d="M 0 545 C 600 530, 1200 542, 1800 528 C 2100 521, 2300 535, 2400 525 L 2400 588 C 1800 600, 1200 592, 600 600 C 200 604, 60 598, 0 600 Z"
            fill="#F4E8C0" opacity="0.38" />
      {/* Fine golden line at exact horizon */}
      <path d="M 0 558 C 800 546, 1600 555, 2400 540" stroke="#E8C858" strokeWidth="1.2" opacity="0.4" />
      {/* Distant Stone Town silhouette (very subtle) */}
      <path d="M 0 520 L 30 490 L 80 480 L 140 468 L 200 462 L 260 470 L 310 460 L 360 468 L 400 475 L 450 462 L 500 530 L 0 530 Z"
            fill="#163040" opacity="0.55" />
      {/* Wave bands */}
      <Wave y1={580} y2={680} a={22} b={18} fill="#1A5060" opacity={0.5} />
      <Wave y1={658} y2={762} a={25} b={20} fill="#1C5E70" opacity={0.55} />
      <Wave y1={740} y2={848} a={20} b={22} fill="#1E6878" opacity={0.58} />
      <Wave y1={825} y2={938} a={28} b={16} fill="#207080" opacity={0.6} />
      <Wave y1={914} y2={1030} a={22} b={24} fill="#227888" opacity={0.62} />
      <Wave y1={1005} y2={1125} a={26} b={18} fill="#248090" opacity={0.65} />
      <Wave y1={1100} y2={1240} a={20} b={22} fill="#268898" opacity={0.68} />
      <Wave y1={1215} y2={1500} a={18} b={16} fill="#2890A0" opacity={0.72} />
      {/* Warm horizon reflection on water */}
      <path d="M 800 580 C 1200 562, 1600 572, 2000 558 L 2000 680 L 800 690 Z" fill="#E8C858" opacity="0.06" />
      <LineOverlay patternId="zs2l" />
    </svg>
  );
}

function ZanziScene3() {
  // Stone Town morning — architecture + palms, medium teal, warm morning light
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <LineDefs id="zs3l" />
      <defs>
        <linearGradient id="zs3_sky" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#C8E8E4" />
          <stop offset="55%" stopColor="#A0D4D0" />
          <stop offset="100%" stopColor="#80C0BC" />
        </linearGradient>
        <radialGradient id="zs3_sun" cx="82%" cy="14%" r="18%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#F4E0A8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#F4E0A8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#zs3_sky)" />
      <rect width="2400" height="1500" fill="url(#zs3_sun)" />
      {/* Sun disk */}
      <circle cx="1970" cy="138" r="42" fill="#F4E0A0" opacity="0.48" />
      {/* Golden horizon lines */}
      <path d="M 0 542 C 800 528, 1600 540, 2400 524" stroke="#E8C858" strokeWidth="1.5" opacity="0.45" />
      <path d="M 0 558 C 800 544, 1600 556, 2400 540" stroke="#E8D070" strokeWidth="0.8" opacity="0.3" />
      {/* Wave bands */}
      <Wave y1={520} y2={620} a={22} b={16} fill="#88C8C8" opacity={0.42} />
      <Wave y1={600} y2={702} a={25} b={20} fill="#70BCBC" opacity={0.48} />
      <Wave y1={682} y2={788} a={20} b={22} fill="#58B0B0" opacity={0.52} />
      <Wave y1={768} y2={878} a={28} b={18} fill="#40A4A4" opacity={0.55} />
      <Wave y1={856} y2={970} a={22} b={24} fill="#289898" opacity={0.58} />
      <Wave y1={948} y2={1068} a={26} b={18} fill="#148C8C" opacity={0.62} />
      <Wave y1={1045} y2={1180} a={20} b={22} fill="#088080" opacity={0.65} />
      <Wave y1={1155} y2={1500} a={18} b={16} fill="#047474" opacity={0.7} />
      {/* Stone Town */}
      <StoneTown yBase={720} opacity={1} />
      {/* Palms */}
      <Palm x={195} y={510} h={230} scale={1.1} />
      <Palm x={135} y={568} h={200} scale={0.92} />
      <LineOverlay patternId="zs3l" />
    </svg>
  );
}

function ZanziScene4() {
  // Shallow lagoon — closest to the reference image: bright turquoise bands, dhow, sun
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <LineDefs id="zs4l" />
      <defs>
        <linearGradient id="zs4_sky" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#DCF2F0" />
          <stop offset="50%" stopColor="#C0E8E6" />
          <stop offset="100%" stopColor="#A8DCDA" />
        </linearGradient>
        <radialGradient id="zs4_sun" cx="88%" cy="12%" r="16%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#F4E8B0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F4E8B0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="zs4_horiz" x1="0" y1="390" x2="0" y2="480" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F4F0E0" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F4F0E0" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#zs4_sky)" />
      <rect width="2400" height="1500" fill="url(#zs4_sun)" />
      {/* Sun disk */}
      <circle cx="2110" cy="115" r="45" fill="#F0E0A8" opacity="0.5" />
      <circle cx="2110" cy="115" r="70" fill="#F4E8B8" opacity="0.12" />
      {/* Horizon luminous band */}
      <rect x="0" y="390" width="2400" height="90" fill="url(#zs4_horiz)" />
      <path d="M 0 408 C 800 392, 1600 405, 2400 390" stroke="#E8C858" strokeWidth="1.4" opacity="0.5" />
      <path d="M 0 420 C 800 405, 1600 418, 2400 402" stroke="#F4E8A0" strokeWidth="0.7" opacity="0.3" />
      {/* Wave bands — the hero palette */}
      <Wave y1={430} y2={532} a={22} b={18} fill="#B0E0E0" opacity={0.38} />
      <Wave y1={510} y2={615} a={25} b={20} fill="#98D4D4" opacity={0.44} />
      <Wave y1={592} y2={700} a={20} b={24} fill="#80C8C8" opacity={0.5} />
      <Wave y1={676} y2={788} a={28} b={18} fill="#68BCBC" opacity={0.54} />
      <Wave y1={762} y2={878} a={22} b={22} fill="#50B0B0" opacity={0.58} />
      <Wave y1={850} y2={970} a={26} b={16} fill="#38A4A4" opacity={0.62} />
      <Wave y1={942} y2={1068} a={20} b={24} fill="#229898" opacity={0.65} />
      <Wave y1={1042} y2={1180} a={24} b={20} fill="#108C8C" opacity={0.68} />
      <Wave y1={1155} y2={1500} a={18} b={16} fill="#048080" opacity={0.72} />
      {/* Dhow */}
      <Dhow x={1800} y={748} w={125} fillColor="#4DBCBC" opacity={0.58} />
      <LineOverlay patternId="zs4l" />
    </svg>
  );
}

function ZanziScene5() {
  // Open ocean midday — pure wave style, no land, bright, dhow centre, closest to reference
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <LineDefs id="zs5l" />
      <defs>
        <linearGradient id="zs5_sky" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#E4F4F2" />
          <stop offset="45%" stopColor="#C4E8E6" />
          <stop offset="100%" stopColor="#A8DCDA" />
        </linearGradient>
        <radialGradient id="zs5_sun" cx="80%" cy="10%" r="20%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#FCEEA8" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#FCEEA8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="zs5_horiz" x1="0" y1="360" x2="0" y2="450" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F8F2E0" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#F8F2E0" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#zs5_sky)" />
      <rect width="2400" height="1500" fill="url(#zs5_sun)" />
      {/* Sun */}
      <circle cx="1940" cy="105" r="48" fill="#F0E09C" opacity="0.52" />
      <circle cx="1940" cy="105" r="72" fill="#F4E8A8" opacity="0.1" />
      {/* Horizon luminous band */}
      <rect x="0" y="360" width="2400" height="90" fill="url(#zs5_horiz)" />
      <path d="M 0 375 C 800 360, 1600 372, 2400 356" stroke="#E8C850" strokeWidth="1.5" opacity="0.52" />
      <path d="M 0 386 C 800 372, 1600 383, 2400 368" stroke="#F0D870" strokeWidth="0.7" opacity="0.32" />
      {/* Wave bands — most luminous */}
      <Wave y1={395} y2={498} a={22} b={18} fill="#C0E4E4" opacity={0.35} />
      <Wave y1={476} y2={582} a={25} b={20} fill="#A8D8D8" opacity={0.42} />
      <Wave y1={558} y2={668} a={20} b={24} fill="#90CCCC" opacity={0.48} />
      <Wave y1={645} y2={758} a={28} b={18} fill="#78C0C0" opacity={0.52} />
      <Wave y1={735} y2={852} a={22} b={22} fill="#60B4B4" opacity={0.56} />
      <Wave y1={828} y2={950} a={26} b={16} fill="#48A8A8" opacity={0.60} />
      <Wave y1={926} y2={1055} a={20} b={24} fill="#309C9C" opacity={0.64} />
      <Wave y1={1030} y2={1168} a={24} b={20} fill="#1C9090" opacity={0.67} />
      <Wave y1={1144} y2={1500} a={18} b={16} fill="#0A8484" opacity={0.72} />
      {/* Distant coast hint */}
      <path d="M 0 372 L 40 358 L 100 346 L 160 352 L 200 360 L 220 372 Z" fill="#163C40" opacity="0.32" />
      {/* Dhow — centre stage */}
      <Dhow x={1820} y={720} w={138} fillColor="#50BCBE" opacity={0.6} />
      <LineOverlay patternId="zs5l" />
    </svg>
  );
}

function ZanziScene6() {
  // Reef depth — deeper teal, coral colour accents in wave bands
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <LineDefs id="zs6l" />
      <defs>
        <linearGradient id="zs6_sky" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#B8E0DE" />
          <stop offset="50%" stopColor="#88C8C8" />
          <stop offset="100%" stopColor="#60B0B0" />
        </linearGradient>
        <radialGradient id="zs6_sun" cx="78%" cy="12%" r="18%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#F4E0A0" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#F4E0A0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#zs6_sky)" />
      <rect width="2400" height="1500" fill="url(#zs6_sun)" />
      <circle cx="1880" cy="122" r="44" fill="#F0E09C" opacity="0.44" />
      {/* Horizon band */}
      <path d="M 0 412 C 800 396, 1600 408, 2400 392" stroke="#E8C858" strokeWidth="1.2" opacity="0.42" />
      {/* Wave bands — teal deepening */}
      <Wave y1={428} y2={525} a={22} b={18} fill="#98D0D0" opacity={0.42} />
      <Wave y1={505} y2={608} a={25} b={20} fill="#80C4C4" opacity={0.48} />
      <Wave y1={586} y2={692} a={20} b={24} fill="#68B8B8" opacity={0.52} />
      <Wave y1={670} y2={780} a={28} b={18} fill="#50ACAC" opacity={0.56} />
      <Wave y1={758} y2={872} a={22} b={22} fill="#389898" opacity={0.60} />
      {/* Coral-accent wave bands */}
      <Wave y1={850} y2={965} a={26} b={16} fill="#D08870" opacity={0.18} />
      <Wave y1={855} y2={970} a={24} b={18} fill="#288888" opacity={0.52} />
      <Wave y1={948} y2={1068} a={20} b={24} fill="#187878" opacity={0.58} />
      <Wave y1={1052} y2={1185} a={24} b={20} fill="#0C6C6C" opacity={0.65} />
      <Wave y1={1165} y2={1500} a={18} b={16} fill="#086060" opacity={0.72} />
      {/* Coral forms */}
      {[[120,1080,55,22,0.22],[280,1055,40,28,0.18],[480,1092,62,18,0.2],[720,1068,48,24,0.2],[940,1082,52,20,0.18],[1200,1058,44,26,0.2],[1480,1078,58,22,0.18],[1760,1062,46,24,0.2],[2050,1088,52,20,0.18],[2280,1065,42,26,0.2]].map(([cx,cy,rx,ry,op],i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} fill="#D88870" opacity={op} />
      ))}
      {/* Dhow */}
      <Dhow x={1820} y={738} w={120} fillColor="#48B4B8" opacity={0.55} />
      <LineOverlay patternId="zs6l" />
    </svg>
  );
}

function ZanziScene7() {
  // Dhow at sunset — coral/amber wave bands, warm dramatic palette
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <LineDefs id="zs7l" />
      <defs>
        <linearGradient id="zs7_sky" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#1C1830" />
          <stop offset="25%" stopColor="#804028" />
          <stop offset="55%" stopColor="#D06830" />
          <stop offset="78%" stopColor="#E8A040" />
          <stop offset="100%" stopColor="#EEC060" />
        </linearGradient>
        <radialGradient id="zs7_glow" cx="50%" cy="52%" r="28%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#FFE070" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#FFE070" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#zs7_sky)" />
      <rect width="2400" height="1500" fill="url(#zs7_glow)" />
      {/* Setting sun */}
      <circle cx="1200" cy="695" r="62" fill="#FFD858" opacity="0.62" />
      <circle cx="1200" cy="695" r="90" fill="#FFE070" opacity="0.15" />
      {/* Horizon warm glow */}
      <path d="M 0 665 C 800 648, 1600 660, 2400 644 L 2400 730 L 0 748 Z" fill="#F8E898" opacity="0.25" />
      <path d="M 0 682 C 800 665, 1600 678, 2400 662" stroke="#E8C048" strokeWidth="1.5" opacity="0.55" />
      {/* Sunset wave bands — warm amber/coral */}
      <Wave y1={695} y2={798} a={22} b={18} fill="#D07838" opacity={0.45} />
      <Wave y1={778} y2={882} a={25} b={20} fill="#B86830" opacity={0.5} />
      <Wave y1={860} y2={968} a={20} b={24} fill="#A05828" opacity={0.54} />
      <Wave y1={946} y2={1058} a={28} b={18} fill="#884820" opacity={0.58} />
      {/* Deep teal water below sunset surface */}
      <Wave y1={1040} y2={1165} a={22} b={22} fill="#1A5858" opacity={0.62} />
      <Wave y1={1148} y2={1500} a={18} b={16} fill="#104848" opacity={0.72} />
      {/* Sun path on water */}
      <path d="M 900 695 C 1050 672, 1350 672, 1500 695 L 1500 1500 L 900 1500 Z" fill="#FFD850" opacity="0.1" />
      {/* Dhow silhouette at sunset — more dramatic */}
      <Dhow x={1820} y={762} w={145} fillColor="#C85028" opacity={0.55} />
      <LineOverlay patternId="zs7l" />
    </svg>
  );
}

function ZanziScene8() {
  // Night ocean — dark wave bands, pearl moon path, stars
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <LineDefs id="zs8l" />
      <defs>
        <linearGradient id="zs8_sky" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#030810" />
          <stop offset="50%" stopColor="#061420" />
          <stop offset="100%" stopColor="#0A2030" />
        </linearGradient>
        <radialGradient id="zs8_moon" cx="62%" cy="16%" r="16%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#F0ECD8" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#F0ECD8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#zs8_sky)" />
      <rect width="2400" height="1500" fill="url(#zs8_moon)" />
      {/* Moon */}
      <circle cx="1485" cy="138" r="40" fill="#F0ECD8" opacity="0.52" />
      <circle cx="1485" cy="138" r="62" fill="#F0ECD8" opacity="0.1" />
      {/* Stars */}
      {[[160,70,1.5,0.62],[340,48,1,0.48],[508,92,1.5,0.52],[668,40,1,0.68],[818,78,2,0.34],[968,46,1,0.58],[1102,86,1,0.44],[1255,36,1.5,0.56],[1720,72,1,0.5],[1888,52,1.5,0.54],[2058,82,1,0.46],[2218,46,1,0.62],[318,172,1,0.34],[555,192,1.5,0.29],[795,180,1,0.40],[1038,190,1,0.32],[1298,176,1.5,0.36],[1558,186,1,0.31],[2078,176,1,0.37]].map(([cx,cy,r,op],i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#B8CCc8" opacity={op} />
      ))}
      {/* Dark wave bands */}
      <Wave y1={518} y2={618} a={25} b={18} fill="#0C2838" opacity={0.55} />
      <Wave y1={598} y2={702} a={22} b={20} fill="#0E3040" opacity={0.6} />
      <Wave y1={680} y2={790} a={20} b={22} fill="#103848" opacity={0.62} />
      <Wave y1={768} y2={882} a={28} b={16} fill="#124050" opacity={0.65} />
      <Wave y1={860} y2={978} a={22} b={24} fill="#144858" opacity={0.68} />
      <Wave y1={956} y2={1080} a={26} b={18} fill="#165060" opacity={0.70} />
      <Wave y1={1058} y2={1200} a={20} b={22} fill="#185868" opacity={0.72} />
      <Wave y1={1178} y2={1500} a={18} b={16} fill="#1A6070" opacity={0.75} />
      {/* Moon path on glassy water */}
      <path d="M 1350 520 C 1430 502, 1550 498, 1650 510 C 1720 518, 1780 530, 1820 518 L 1820 1500 L 1350 1500 Z"
            fill="#F0ECD8" opacity="0.06" />
      <path d="M 1350 525 C 1480 510, 1640 514, 1820 522" stroke="#F0ECD8" strokeWidth="1" opacity="0.22" />
      <LineOverlay patternId="zs8l" />
    </svg>
  );
}

function ZanziScene9() {
  // Paradise morning — brightest, fullest palette, palms + Stone Town + dhow, warm light
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <LineDefs id="zs9l" />
      <defs>
        <linearGradient id="zs9_sky" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#EAF8F6" />
          <stop offset="42%" stopColor="#C8ECEC" />
          <stop offset="100%" stopColor="#A8E0E0" />
        </linearGradient>
        <radialGradient id="zs9_sun" cx="85%" cy="11%" r="20%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#FDE8A0" stopOpacity="0.52" />
          <stop offset="100%" stopColor="#FDE8A0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="zs9_horiz" x1="0" y1="380" x2="0" y2="468" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F8F2E0" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#F8F2E0" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#zs9_sky)" />
      <rect width="2400" height="1500" fill="url(#zs9_sun)" />
      {/* Sun disk — brightest */}
      <circle cx="2050" cy="108" r="50" fill="#F2E098" opacity="0.56" />
      <circle cx="2050" cy="108" r="80" fill="#F8E8A8" opacity="0.12" />
      {/* Luminous horizon */}
      <rect x="0" y="380" width="2400" height="88" fill="url(#zs9_horiz)" />
      <path d="M 0 395 C 800 380, 1600 392, 2400 376" stroke="#E8C050" strokeWidth="1.5" opacity="0.55" />
      <path d="M 0 408 C 800 393, 1600 405, 2400 389" stroke="#F0D068" strokeWidth="0.7" opacity="0.32" />
      {/* Wave bands — the full paradise palette */}
      <Wave y1={420} y2={522} a={22} b={18} fill="#C4E8E8" opacity={0.36} />
      <Wave y1={500} y2={605} a={25} b={20} fill="#ACDCDC" opacity={0.44} />
      <Wave y1={582} y2={688} a={20} b={24} fill="#94D0D0" opacity={0.5} />
      <Wave y1={665} y2={775} a={28} b={18} fill="#7CC4C4" opacity={0.54} />
      <Wave y1={752} y2={865} a={22} b={22} fill="#64B8B8" opacity={0.58} />
      <Wave y1={842} y2={960} a={26} b={16} fill="#4CACAC" opacity={0.62} />
      <Wave y1={938} y2={1062} a={20} b={24} fill="#34A0A0" opacity={0.65} />
      <Wave y1={1040} y2={1178} a={24} b={20} fill="#1E9494" opacity={0.68} />
      <Wave y1={1158} y2={1500} a={18} b={16} fill="#0C8888" opacity={0.72} />
      {/* Stone Town */}
      <StoneTown yBase={710} opacity={0.92} />
      {/* Palms — the definitive paradise palms */}
      <Palm x={200} y={498} h={240} scale={1.15} />
      <Palm x={138} y={558} h={210} scale={0.96} />
      {/* Dhow */}
      <Dhow x={1820} y={728} w={132} fillColor="#4BBCBC" opacity={0.6} />
      <LineOverlay patternId="zs9l" />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const BASE_COLOR = '#061424';

export default function ZanzibarBackground() {
  const { scrollYProgress } = useScroll({ offset: ["start start", "end end"] });

  const yStack = useTransform(scrollYProgress, [0, 1], ["0vh", "-800vh"]);

  const scaleBg1 = useTransform(scrollYProgress, [0, 1/8], [1, 1.15]);
  const scaleBg2 = useTransform(scrollYProgress, [0, 1/8, 2/8], [1.15, 1, 1.15]);
  const scaleBg3 = useTransform(scrollYProgress, [1/8, 2/8, 3/8], [1.15, 1, 1.15]);
  const scaleBg4 = useTransform(scrollYProgress, [2/8, 3/8, 4/8], [1.15, 1, 1.15]);
  const scaleBg5 = useTransform(scrollYProgress, [3/8, 4/8, 5/8], [1.15, 1, 1.15]);
  const scaleBg6 = useTransform(scrollYProgress, [4/8, 5/8, 6/8], [1.15, 1, 1.15]);
  const scaleBg7 = useTransform(scrollYProgress, [5/8, 6/8, 7/8], [1.15, 1, 1.15]);
  const scaleBg8 = useTransform(scrollYProgress, [6/8, 7/8, 1], [1.15, 1, 1.15]);
  const scaleBg9 = useTransform(scrollYProgress, [7/8, 1], [1.15, 1]);

  const displayBg1 = useTransform(scrollYProgress, v => v <= 1.5/8 ? "flex" : "none");
  const displayBg2 = useTransform(scrollYProgress, v => v <= 2.5/8 ? "flex" : "none");
  const displayBg3 = useTransform(scrollYProgress, v => v >= 0.5/8 && v <= 3.5/8 ? "flex" : "none");
  const displayBg4 = useTransform(scrollYProgress, v => v >= 1.5/8 && v <= 4.5/8 ? "flex" : "none");
  const displayBg5 = useTransform(scrollYProgress, v => v >= 2.5/8 && v <= 5.5/8 ? "flex" : "none");
  const displayBg6 = useTransform(scrollYProgress, v => v >= 3.5/8 && v <= 6.5/8 ? "flex" : "none");
  const displayBg7 = useTransform(scrollYProgress, v => v >= 4.5/8 && v <= 7.5/8 ? "flex" : "none");
  const displayBg8 = useTransform(scrollYProgress, v => v >= 5.5/8 ? "flex" : "none");
  const displayBg9 = useTransform(scrollYProgress, v => v >= 6.5/8 ? "flex" : "none");

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const parallaxX_bg = useTransform(smoothMouseX, [0, 1], ["-1%", "1%"]);
  const parallaxY_bg = useTransform(smoothMouseY, [0, 1], ["-1%", "1%"]);
  const parallaxX_fg1 = useTransform(smoothMouseX, [0, 1], ["-3%", "3%"]);
  const parallaxY_fg1 = useTransform(smoothMouseY, [0, 1], ["-3%", "3%"]);
  const parallaxX_fg2 = useTransform(smoothMouseX, [0, 1], ["4%", "-4%"]);
  const parallaxY_fg2 = useTransform(smoothMouseY, [0, 1], ["4%", "-4%"]);

  const opacityOverlay = useTransform(
    scrollYProgress,
    [0, 1/16, 2/16, 3/16, 4/16, 5/16, 6/16, 7/16, 8/16, 9/16, 10/16, 11/16, 12/16, 13/16, 14/16, 15/16, 1],
    [0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0]
  );

  const sc = "absolute left-0 w-full h-[100vh] items-center justify-center overflow-hidden";
  const si = "absolute inset-0 flex items-center justify-center will-change-transform";
  const seam = (dir: 'top' | 'bottom') =>
    `absolute ${dir}-0 w-full h-[50vh] z-10` as const;

  const gradTop = `linear-gradient(to bottom, ${BASE_COLOR}, transparent)`;
  const gradBot = `linear-gradient(to top, ${BASE_COLOR}, transparent)`;

  const scenes: [typeof ZanziScene1, string][] = [
    [ZanziScene1, "top-0"],
    [ZanziScene2, "top-[100vh]"],
    [ZanziScene3, "top-[200vh]"],
    [ZanziScene4, "top-[300vh]"],
    [ZanziScene5, "top-[400vh]"],
    [ZanziScene6, "top-[500vh]"],
    [ZanziScene7, "top-[600vh]"],
    [ZanziScene8, "top-[700vh]"],
    [ZanziScene9, "top-[800vh]"],
  ];
  const scales = [scaleBg1, scaleBg2, scaleBg3, scaleBg4, scaleBg5, scaleBg6, scaleBg7, scaleBg8, scaleBg9];
  const displays = [displayBg1, displayBg2, displayBg3, displayBg4, displayBg5, displayBg6, displayBg7, displayBg8, displayBg9];

  return (
    <div className="relative w-full h-[3600vh]" style={{ backgroundColor: BASE_COLOR }}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: parallaxY_bg }} className="absolute inset-0">
          <motion.div style={{ y: yStack, x: parallaxX_bg }} className="absolute top-0 left-0 w-full h-[900vh] will-change-transform">
            {scenes.map(([SceneComp, topClass], i) => (
              <motion.div key={i} style={{ display: displays[i] }} className={`${sc} ${topClass}`}>
                <motion.div style={{ scale: scales[i] }} className={si}>
                  <div className="absolute inset-0"><SceneComp /></div>
                </motion.div>
                {i > 0 && (
                  <div className={seam('top')} style={{ backgroundImage: gradTop }} />
                )}
                {i < 8 && (
                  <div className={seam('bottom')} style={{ backgroundImage: gradBot }} />
                )}
                <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.18)] pointer-events-none z-10" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Atmospheric overlay */}
        <motion.div
          style={{ opacity: opacityOverlay, backgroundColor: BASE_COLOR }}
          className="absolute inset-0 pointer-events-none mix-blend-multiply z-20"
        />

        {/* Layer 2: Tropical sun-on-water formation */}
        <motion.div
          style={{ x: parallaxX_fg1, y: parallaxY_fg1 }}
          className="absolute top-[12%] left-[22%] w-[36vw] h-[36vw] max-w-[560px] max-h-[560px] rounded-full mix-blend-overlay pointer-events-auto cursor-pointer"
          whileHover={{ scale: 1.05, filter: "brightness(1.5)" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E8D8A0] to-transparent opacity-25 blur-3xl" />
          <motion.div
            animate={{ scale: [1, 1.06, 1], opacity: [0.22, 0.38, 0.22] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[12%] rounded-full bg-gradient-to-br from-[#7BE8E8] to-transparent opacity-30 blur-2xl"
          />
        </motion.div>

        {/* Layer 3: Floating wave shapes */}
        <motion.div style={{ x: parallaxX_fg2, y: parallaxY_fg2 }} className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ x: [0, 70, 0], y: [0, 15, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[8%] w-[42vw] h-[16vw] bg-[#40C4CC] opacity-[0.04] blur-3xl rounded-[50%_80%_40%_65%] pointer-events-auto cursor-pointer"
            whileHover={{ scale: 1.12, filter: "brightness(1.8)" }}
          />
          <motion.div
            animate={{ x: [0, -55, 0], y: [0, -20, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-[55%] left-[6%] w-[38vw] h-[20vw] bg-[#7BE8E8] opacity-[0.04] blur-3xl rounded-[65%_45%_70%_40%] pointer-events-auto cursor-pointer"
            whileHover={{ scale: 1.12, filter: "brightness(1.8)" }}
          />
        </motion.div>

        {/* Layer 4: Water sparkles + golden light beam */}
        <motion.div style={{ x: parallaxX_fg1, y: parallaxY_fg1 }} className="absolute inset-0 pointer-events-none mix-blend-screen">
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#A8E8DC]"
              style={{
                width: Math.random() * 10 + 4 + 'px',
                height: Math.random() * 10 + 4 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                opacity: Math.random() * 0.18 + 0.04,
                filter: `blur(${Math.random() * 3 + 1}px)`
              }}
              animate={{
                y: [0, -Math.random() * 90 - 40, 0],
                x: [0, Math.random() * 60 - 30, 0],
                opacity: [0.04, 0.28, 0.04],
              }}
              transition={{
                duration: Math.random() * 10 + 14,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 10
              }}
            />
          ))}
          <motion.div
            className="absolute top-[-8%] left-[35%] w-[55vw] h-[145vh] bg-gradient-to-b from-[#E8D8A0]/4 to-transparent rotate-[-20deg] blur-3xl"
            animate={{ opacity: [0.08, 0.25, 0.08] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </div>
  );
}
