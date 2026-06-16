import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';

// ─── Scene SVG components ─────────────────────────────────────────────────────

function ZanziScene1() {
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="zs1_sky" x1="1200" y1="0" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#040E18" />
          <stop offset="55%" stopColor="#081828" />
          <stop offset="100%" stopColor="#0E2438" />
        </linearGradient>
        <radialGradient id="zs1_starglow" cx="30%" cy="20%" r="22%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#40A8C0" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#40A8C0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="zs1_horizon" x1="1200" y1="820" x2="1200" y2="960" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1B5060" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1B5060" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="zs1_water" x1="1200" y1="900" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0A2838" />
          <stop offset="100%" stopColor="#061424" />
        </linearGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#zs1_sky)" />
      <rect width="2400" height="1500" fill="url(#zs1_starglow)" />
      {/* Stars reflected on pre-dawn ocean */}
      {[[200,90,1.5,0.55],[380,60,1,0.45],[560,105,2,0.35],[740,48,1,0.6],[900,85,1.5,0.5],[1060,50,1,0.65],[1230,95,1,0.4],[1410,42,1.5,0.55],[1590,80,2,0.3],[1760,55,1,0.5],[1930,92,1.5,0.45],[2110,48,1,0.6],[2280,78,1,0.42],[310,185,1,0.32],[520,210,1.5,0.28],[750,195,1,0.38],[980,205,1,0.3],[1200,188,1.5,0.35],[1450,200,1,0.28],[1700,192,1,0.35],[1950,208,1.5,0.3],[2150,185,1,0.38]].map(([cx,cy,r,op],i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#A8D0DC" opacity={op} />
      ))}
      {/* Distant island silhouette */}
      <path d="M 200 800 C 400 775,600 785,700 772 C 750 766,780 760,820 763 C 860 766,900 775,950 780 C 1000 785,1050 778,1100 770 C 1150 762,1180 758,1210 762 C 1240 766,1260 775,1290 778 C 1320 781,1340 775,1360 768 L 1380 800 Z" fill="#163040" opacity="0.7" />
      {/* Horizon glow */}
      <rect x="0" y="820" width="2400" height="140" fill="url(#zs1_horizon)" />
      {/* Dark pre-dawn water */}
      <rect x="0" y="860" width="2400" height="640" fill="url(#zs1_water)" />
      {/* Subtle wave forms */}
      <path d="M 0 920 C 300 910,600 918,900 908 C 1200 898,1500 910,1800 900 C 2100 890,2300 902,2400 895" stroke="#1B4858" strokeWidth="1.5" opacity="0.4" />
      <path d="M 0 975 C 400 962,800 972,1200 958 C 1600 944,2000 958,2400 944" stroke="#1B4858" strokeWidth="1" opacity="0.3" />
      {/* Moon path on water */}
      <path d="M 800 900 C 1000 880,1200 870,1400 880 C 1500 885,1600 895,1700 900 L 1700 1500 L 800 1500 Z" fill="#1E5060" opacity="0.15" />
    </svg>
  );
}

function ZanziScene2() {
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="zs2_sky" x1="1200" y1="0" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0D1C2C" />
          <stop offset="50%" stopColor="#163040" />
          <stop offset="100%" stopColor="#1E4050" />
        </linearGradient>
        <radialGradient id="zs2_dawn" cx="75%" cy="62%" r="30%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#E0A060" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#E0A060" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="zs2_water" x1="1200" y1="750" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A3A50" />
          <stop offset="100%" stopColor="#0E2030" />
        </linearGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#zs2_sky)" />
      <rect width="2400" height="1500" fill="url(#zs2_dawn)" />
      {/* Coastal silhouette approaching */}
      <path d="M 0 680 C 200 660,350 650,480 640 C 560 634,620 628,700 632 C 780 636,840 628,920 622 C 1000 616,1080 620,1160 614 C 1300 605,1400 615,1480 608 C 1560 601,1640 610,1720 618 C 1800 626,1900 620,2000 628 C 2100 636,2250 650,2400 640 L 2400 1500 L 0 1500 Z" fill="#163040" opacity="0.65" />
      {/* Dhow forms distant — sail triangles */}
      <path d="M 380 620 L 340 680 L 420 680 Z" fill="#1E4858" opacity="0.5" />
      <path d="M 1850 608 L 1820 665 L 1880 665 Z" fill="#1E4858" opacity="0.45" />
      {/* Water surface first light */}
      <rect x="0" y="745" width="2400" height="755" fill="url(#zs2_water)" />
      <path d="M 0 780 C 400 765,800 778,1200 762 C 1600 746,2000 762,2400 748" stroke="#245868" strokeWidth="1.5" opacity="0.45" />
      <path d="M 0 840 C 300 826,600 838,900 822 C 1200 806,1500 820,1800 806 C 2100 792,2300 808,2400 800" stroke="#245868" strokeWidth="1" opacity="0.35" />
      {/* First light catching water */}
      <path d="M 1600 760 C 1800 742,2000 758,2100 748 L 2100 1500 L 1600 1500 Z" fill="#E8A050" opacity="0.05" />
    </svg>
  );
}

function ZanziScene3() {
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="zs3_sky" x1="1200" y1="0" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F4F0E4" />
          <stop offset="40%" stopColor="#E8DCB8" />
          <stop offset="100%" stopColor="#D4C898" />
        </linearGradient>
        <linearGradient id="zs3_water" x1="1200" y1="800" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#40C4CC" />
          <stop offset="100%" stopColor="#1B8A8F" />
        </linearGradient>
        <radialGradient id="zs3_sun" cx="70%" cy="15%" r="20%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#FFE090" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFE090" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#zs3_sky)" />
      <rect width="2400" height="1500" fill="url(#zs3_sun)" />
      {/* Spice coast vegetation — abstract dark lush forms */}
      <path d="M 0 650 C 150 610,250 620,300 600 C 380 575,420 580,480 565 C 560 548,640 558,720 545 C 800 532,860 540,920 528 C 1000 514,1080 522,1160 512 C 1280 498,1360 508,1440 495 C 1520 482,1600 492,1700 480 C 1800 468,1920 478,2100 488 C 2200 494,2320 485,2400 480 L 2400 1500 L 0 1500 Z" fill="#1A3828" opacity="0.55" />
      {/* Palm abstract forms */}
      <path d="M 280 555 C 260 500,250 450,270 420 C 280 450,300 490,310 530 Z" fill="#143020" opacity="0.5" />
      <path d="M 250 430 C 210 415,180 418,165 428 C 185 432,210 428,250 435 Z" fill="#143020" opacity="0.4" />
      <path d="M 290 425 C 325 410,355 415,368 428 C 345 432,320 428,290 432 Z" fill="#143020" opacity="0.4" />
      <path d="M 1580 465 C 1562 412,1555 362,1572 335 C 1581 362,1600 402,1608 442 Z" fill="#143020" opacity="0.45" />
      <path d="M 1555 342 C 1518 328,1490 332,1476 342 C 1496 346,1520 342,1555 348 Z" fill="#143020" opacity="0.38" />
      <path d="M 1590 340 C 1622 326,1650 330,1663 342 C 1642 346,1618 342,1590 346 Z" fill="#143020" opacity="0.38" />
      {/* Warm sand beach */}
      <path d="M 0 860 C 600 840,1200 855,1800 835 C 2100 825,2300 840,2400 830 L 2400 1500 L 0 1500 Z" fill="#E8D8A8" opacity="0.65" />
      {/* Turquoise water */}
      <rect x="0" y="880" width="2400" height="620" fill="url(#zs3_water)" opacity="0.7" />
      <path d="M 0 900 C 400 885,800 898,1200 882 C 1600 866,2000 882,2400 865" stroke="#7BE8E8" strokeWidth="2" opacity="0.3" />
    </svg>
  );
}

function ZanziScene4() {
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="zs4_sky" x1="1200" y1="0" x2="1200" y2="600" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E8F4F8" />
          <stop offset="100%" stopColor="#C8ECF0" />
        </linearGradient>
        <linearGradient id="zs4_water" x1="1200" y1="450" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7BE8E8" />
          <stop offset="35%" stopColor="#40C4CC" />
          <stop offset="70%" stopColor="#28A8B0" />
          <stop offset="100%" stopColor="#1B8A8F" />
        </linearGradient>
        <radialGradient id="zs4_light" cx="55%" cy="35%" r="40%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="zs4_sand" x1="1200" y1="400" x2="1200" y2="520" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E8D8A8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#E8D8A8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="2400" height="600" fill="url(#zs4_sky)" />
      <rect x="0" y="450" width="2400" height="1050" fill="url(#zs4_water)" />
      <rect width="2400" height="1500" fill="url(#zs4_light)" />
      {/* Sand bottom visible through shallow water */}
      <path d="M 0 430 C 600 410,1200 425,1800 405 C 2100 395,2300 410,2400 400 L 2400 550 L 0 550 Z" fill="url(#zs4_sand)" />
      {/* Water surface layers — translucent depth */}
      <path d="M 0 480 C 400 462,800 476,1200 458 C 1600 440,2000 458,2400 440 L 2400 600 L 0 600 Z" fill="#A8E8DC" opacity="0.3" />
      <path d="M 0 560 C 300 545,600 558,900 542 C 1200 526,1500 542,1800 525 C 2100 508,2300 525,2400 515 L 2400 650 L 0 650 Z" fill="#7BE8E8" opacity="0.2" />
      {/* Light refraction patterns */}
      <path d="M 480 500 C 490 488,510 485,525 495 C 520 505,502 510,480 500 Z" fill="#FFFFFF" opacity="0.35" />
      <path d="M 980 520 C 995 508,1015 505,1030 515 C 1025 525,1005 528,980 520 Z" fill="#FFFFFF" opacity="0.3" />
      <path d="M 1520 485 C 1535 473,1558 470,1572 480 C 1565 492,1545 495,1520 485 Z" fill="#FFFFFF" opacity="0.32" />
      <path d="M 1980 510 C 1994 498,2016 495,2030 505 C 2025 518,2002 520,1980 510 Z" fill="#FFFFFF" opacity="0.28" />
      {/* Deeper tones below */}
      <path d="M 0 900 C 600 880,1200 895,1800 875 C 2100 865,2300 878,2400 868 L 2400 1500 L 0 1500 Z" fill="#1B8A8F" opacity="0.45" />
    </svg>
  );
}

function ZanziScene5() {
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="zs5_bg" x1="1200" y1="0" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#164858" />
          <stop offset="35%" stopColor="#1B8A8F" />
          <stop offset="70%" stopColor="#25A0A8" />
          <stop offset="100%" stopColor="#1B8A8F" />
        </linearGradient>
        <radialGradient id="zs5_surface" cx="40%" cy="35%" r="45%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#7BE8E8" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#7BE8E8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="zs5_sky" x1="1200" y1="0" x2="1200" y2="450" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A8DCE4" />
          <stop offset="100%" stopColor="#5CC8D0" />
        </linearGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#zs5_bg)" />
      {/* Sky reflection zone */}
      <rect width="2400" height="450" fill="url(#zs5_sky)" opacity="0.6" />
      <rect width="2400" height="1500" fill="url(#zs5_surface)" />
      {/* Wave systems — layered flowing forms */}
      <path d="M 0 380 C 300 360,600 375,900 358 C 1200 341,1500 358,1800 340 C 2100 322,2300 340,2400 330 L 2400 480 L 0 480 Z" fill="#A8DCE4" opacity="0.25" />
      <path d="M 0 480 C 400 462,800 478,1200 460 C 1600 442,2000 460,2400 442 L 2400 580 L 0 580 Z" fill="#7BE8E8" opacity="0.18" />
      <path d="M 0 580 C 300 562,600 578,900 560 C 1200 542,1500 560,1800 540 C 2100 520,2300 540,2400 525 L 2400 680 L 0 680 Z" fill="#40C4CC" opacity="0.22" />
      <path d="M 0 700 C 400 680,800 698,1200 678 C 1600 658,2000 678,2400 658 L 2400 800 L 0 800 Z" fill="#2AAAB2" opacity="0.2" />
      <path d="M 0 840 C 300 820,600 838,900 818 C 1200 798,1500 818,1800 796 C 2100 774,2300 796,2400 778 L 2400 940 L 0 940 Z" fill="#1B8A8F" opacity="0.3" />
      {/* Wave crests — subtle line accents */}
      <path d="M 0 362 C 200 352,400 360,600 350 C 800 340,1000 350,1200 340 C 1400 330,1600 342,1800 330 C 2000 318,2200 332,2400 320" stroke="#C8F0F0" strokeWidth="1" opacity="0.35" />
      <path d="M 0 578 C 300 565,600 578,900 562 C 1200 546,1500 562,1800 545 C 2100 528,2300 545,2400 530" stroke="#A8E4E8" strokeWidth="1" opacity="0.28" />
      <path d="M 0 840 C 400 825,800 840,1200 822 C 1600 804,2000 822,2400 804" stroke="#5CC8CC" strokeWidth="1.5" opacity="0.22" />
      {/* Deeper ocean below */}
      <path d="M 0 1050 C 600 1030,1200 1046,1800 1025 C 2100 1015,2300 1030,2400 1020 L 2400 1500 L 0 1500 Z" fill="#0E3A48" opacity="0.6" />
    </svg>
  );
}

function ZanziScene6() {
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="zs6_sky" x1="1200" y1="0" x2="1200" y2="700" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A3040" />
          <stop offset="100%" stopColor="#2A5060" />
        </linearGradient>
        <linearGradient id="zs6_water" x1="1200" y1="600" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1B8A8F" />
          <stop offset="100%" stopColor="#0E3040" />
        </linearGradient>
        <radialGradient id="zs6_sunpath" cx="50%" cy="48%" r="35%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#E8B840" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#E8B840" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="2400" height="700" fill="url(#zs6_sky)" />
      <rect x="0" y="600" width="2400" height="900" fill="url(#zs6_water)" />
      <rect width="2400" height="1500" fill="url(#zs6_sunpath)" />
      {/* Coral reef abstract forms */}
      <path d="M 0 1100 C 200 1060,350 1080,480 1055 C 580 1036,660 1048,740 1035 C 820 1022,900 1038,1000 1025 C 1100 1012,1200 1028,1300 1015 C 1400 1002,1500 1018,1620 1008 C 1720 998,1840 1012,1980 1005 C 2100 998,2250 1010,2400 1000 L 2400 1500 L 0 1500 Z" fill="#E89080" opacity="0.18" />
      <path d="M 160 1082 C 168 1062,185 1050,200 1060 C 210 1072,205 1085,185 1090 Z" fill="#E89080" opacity="0.25" />
      <path d="M 820 1055 C 828 1035,845 1024,860 1033 C 870 1044,865 1058,845 1063 Z" fill="#E89080" opacity="0.22" />
      <path d="M 1420 1028 C 1428 1008,1445 997,1460 1006 C 1470 1018,1465 1031,1445 1036 Z" fill="#E89080" opacity="0.2" />
      <path d="M 1980 1018 C 1988 998,2005 987,2020 997 C 2030 1008,2025 1022,2005 1027 Z" fill="#E89080" opacity="0.22" />
      {/* Dhow sail forms */}
      <path d="M 880 380 L 840 640 L 960 640 Z" fill="#C8D8DC" opacity="0.2" />
      <path d="M 870 380 L 835 640 L 955 640 Z" stroke="#D4E4E8" strokeWidth="1" opacity="0.15" />
      <path d="M 1480 360 L 1450 580 L 1540 580 Z" fill="#C8D8DC" opacity="0.18" />
      {/* Sun path on water */}
      <path d="M 900 640 C 1050 620,1200 610,1350 620 C 1500 630,1600 645,1700 640 L 1700 1500 L 900 1500 Z" fill="#E8B840" opacity="0.1" />
      {/* Water ripple lines */}
      <path d="M 0 660 C 400 645,800 658,1200 640 C 1600 622,2000 640,2400 620" stroke="#5CC8CC" strokeWidth="1" opacity="0.3" />
      <path d="M 0 750 C 300 734,600 748,900 730 C 1200 712,1500 730,1800 710 C 2100 690,2300 710,2400 694" stroke="#5CC8CC" strokeWidth="1" opacity="0.22" />
    </svg>
  );
}

function ZanziScene7() {
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="zs7_sky" x1="1200" y1="0" x2="1200" y2="800" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A1828" />
          <stop offset="30%" stopColor="#803028" />
          <stop offset="60%" stopColor="#C84830" />
          <stop offset="80%" stopColor="#E88040" />
          <stop offset="100%" stopColor="#E8B840" />
        </linearGradient>
        <linearGradient id="zs7_water" x1="1200" y1="720" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1B5060" />
          <stop offset="100%" stopColor="#0A2030" />
        </linearGradient>
        <radialGradient id="zs7_sun" cx="50%" cy="52%" r="20%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#FFD060" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FFD060" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="2400" height="800" fill="url(#zs7_sky)" />
      <rect x="0" y="700" width="2400" height="800" fill="url(#zs7_water)" />
      <rect width="2400" height="1500" fill="url(#zs7_sun)" />
      {/* Setting sun disk */}
      <circle cx="1200" cy="760" r="80" fill="#FFD060" opacity="0.55" />
      <circle cx="1200" cy="760" r="50" fill="#FFE890" opacity="0.6" />
      {/* Sun path column on water */}
      <path d="M 1050 760 C 1100 748,1150 740,1200 738 C 1250 740,1300 748,1350 760 C 1360 780,1360 1500,1040 1500 Z" fill="#E8B840" opacity="0.18" />
      {/* Dhow silhouette at sunset */}
      <path d="M 680 720 L 650 760 L 720 760 Z" fill="#0A1820" opacity="0.6" />
      <rect x="685" y="760" width="2" height="30" fill="#0A1820" opacity="0.55" />
      <path d="M 1720 700 L 1695 738 L 1758 738 Z" fill="#0A1820" opacity="0.55" />
      {/* Water catching light */}
      <path d="M 0 740 C 400 725,800 738,1200 720 C 1600 702,2000 720,2400 702 L 2400 820 L 0 820 Z" fill="#E89050" opacity="0.12" />
      <path d="M 0 810 C 300 796,600 808,900 790 C 1200 772,1500 790,1800 770 C 2100 750,2300 770,2400 754" stroke="#E8A050" strokeWidth="1.5" opacity="0.25" />
      <path d="M 0 900 C 400 882,800 898,1200 878 C 1600 858,2000 878,2400 858" stroke="#40808F" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

function ZanziScene8() {
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="zs8_sky" x1="1200" y1="0" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#030810" />
          <stop offset="50%" stopColor="#061420" />
          <stop offset="100%" stopColor="#0A1E2E" />
        </linearGradient>
        <radialGradient id="zs8_moon" cx="62%" cy="18%" r="15%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#F4F0E4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F4F0E4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="zs8_moonpath" x1="1500" y1="600" x2="1500" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F4F0E4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#F4F0E4" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#zs8_sky)" />
      <rect width="2400" height="1500" fill="url(#zs8_moon)" />
      {/* Stars */}
      {[[180,75,1.5,0.6],[340,50,1,0.5],[500,98,2,0.4],[660,45,1,0.65],[820,80,1.5,0.5],[980,52,1,0.7],[1150,90,1,0.42],[1320,42,1.5,0.58],[1500,78,2,0.35],[1670,55,1,0.55],[1840,88,1.5,0.48],[2010,50,1,0.62],[2180,82,1,0.45],[250,170,1,0.32],[460,192,1.5,0.28],[700,178,1,0.38],[940,188,1,0.3],[1200,172,1.5,0.35],[1460,186,1,0.3],[1720,175,1,0.36],[1980,188,1.5,0.32],[2200,170,1,0.4]].map(([cx,cy,r,op],i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#C8D8DC" opacity={op} />
      ))}
      {/* Moon */}
      <circle cx="1490" cy="125" r="28" fill="#F4F0E4" opacity="0.55" />
      <circle cx="1490" cy="125" r="40" fill="#F4F0E4" opacity="0.12" />
      {/* Ocean horizon */}
      <path d="M 0 620 C 800 608,1600 618,2400 605 L 2400 1500 L 0 1500 Z" fill="#061828" opacity="0.85" />
      {/* Moon path column on still water */}
      <path d="M 1380 620 C 1420 612,1490 608,1560 612 C 1600 615,1640 622,1660 620 L 1660 1500 L 1380 1500 Z" fill="url(#zs8_moonpath)" />
      {/* Very calm wave lines */}
      <path d="M 0 642 C 400 630,800 640,1200 625 C 1600 610,2000 625,2400 610" stroke="#1B4858" strokeWidth="1" opacity="0.4" />
      <path d="M 0 700 C 300 688,600 700,900 685 C 1200 670,1500 685,1800 668 C 2100 651,2300 668,2400 655" stroke="#1B4858" strokeWidth="1" opacity="0.3" />
      <path d="M 0 780 C 500 765,1000 778,1500 760 C 2000 742,2300 760,2400 748" stroke="#1B4858" strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
}

function ZanziScene9() {
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="zs9_sky" x1="1200" y1="0" x2="1200" y2="600" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F4F0E8" />
          <stop offset="100%" stopColor="#D8F0EE" />
        </linearGradient>
        <linearGradient id="zs9_water" x1="1200" y1="540" x2="1200" y2="950" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A8E8DC" />
          <stop offset="50%" stopColor="#40C4CC" />
          <stop offset="100%" stopColor="#1B8A8F" />
        </linearGradient>
        <linearGradient id="zs9_sand" x1="1200" y1="920" x2="1200" y2="1100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E8D8A8" />
          <stop offset="100%" stopColor="#D4C490" />
        </linearGradient>
        <radialGradient id="zs9_sun" cx="75%" cy="12%" r="20%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#E8B840" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E8B840" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="zs9_glow" cx="75%" cy="30%" r="30%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#FFE8A0" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FFE8A0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="2400" height="600" fill="url(#zs9_sky)" />
      <rect x="0" y="520" width="2400" height="430" fill="url(#zs9_water)" />
      <rect x="0" y="920" width="2400" height="580" fill="url(#zs9_sand)" />
      <rect width="2400" height="1500" fill="url(#zs9_sun)" />
      <rect width="2400" height="1500" fill="url(#zs9_glow)" />
      {/* Palm abstract forms */}
      <path d="M 180 820 C 165 760,158 700,172 665 C 182 700,195 758,198 800 Z" fill="#143028" opacity="0.5" />
      <path d="M 155 672 C 115 655,88 660,75 672 C 98 676,125 670,155 678 Z" fill="#143028" opacity="0.42" />
      <path d="M 180 670 C 215 653,242 658,255 672 C 232 676,208 670,180 676 Z" fill="#143028" opacity="0.42" />
      <path d="M 2220 800 C 2208 742,2202 682,2215 648 C 2225 682,2236 740,2238 782 Z" fill="#143028" opacity="0.45" />
      <path d="M 2198 656 C 2162 640,2136 644,2124 656 C 2146 660,2170 654,2198 662 Z" fill="#143028" opacity="0.38" />
      <path d="M 2225 654 C 2258 638,2282 642,2294 654 C 2272 660,2248 654,2225 660 Z" fill="#143028" opacity="0.38" />
      {/* Water surface highlights */}
      <path d="M 0 558 C 400 540,800 556,1200 535 C 1600 514,2000 535,2400 514" stroke="#C8F0EC" strokeWidth="2" opacity="0.4" />
      <path d="M 0 640 C 300 622,600 638,900 618 C 1200 598,1500 618,1800 596 C 2100 574,2300 596,2400 578" stroke="#A8E8E0" strokeWidth="1.5" opacity="0.32" />
      <path d="M 0 748 C 400 728,800 745,1200 722 C 1600 699,2000 722,2400 699" stroke="#7BE8E8" strokeWidth="1" opacity="0.25" />
      {/* Sand ripples */}
      <path d="M 0 962 C 600 948,1200 960,1800 942 C 2100 933,2300 946,2400 938" stroke="#D0C088" strokeWidth="1" opacity="0.4" />
      <path d="M 0 1010 C 500 994,1000 1008,1500 988 C 1900 972,2200 988,2400 975" stroke="#D0C088" strokeWidth="0.5" opacity="0.3" />
      {/* Seafoam on shore */}
      <path d="M 0 930 C 300 918,600 928,900 912 C 1200 896,1500 912,1800 895 C 2100 878,2300 895,2400 882 L 2400 965 L 0 965 Z" fill="#C8F0E8" opacity="0.3" />
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

  const sceneClass = "absolute left-0 w-full h-[100vh] items-center justify-center overflow-hidden";
  const sceneInner = "absolute inset-0 flex items-center justify-center will-change-transform";

  return (
    <div className="relative w-full h-[3600vh]" style={{ backgroundColor: BASE_COLOR }}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: parallaxY_bg }} className="absolute inset-0">
          <motion.div style={{ y: yStack, x: parallaxX_bg }} className="absolute top-0 left-0 w-full h-[900vh] will-change-transform">

            {/* Scene 1 — Open Ocean Pre-dawn */}
            <motion.div style={{ display: displayBg1 }} className={`${sceneClass} top-0`}>
              <motion.div style={{ scale: scaleBg1 }} className={sceneInner}>
                <div className="absolute inset-0"><ZanziScene1 /></div>
              </motion.div>
              <div className="absolute bottom-0 w-full h-[50vh] z-10" style={{ backgroundImage: `linear-gradient(to top, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.25)] pointer-events-none z-10" />
            </motion.div>

            {/* Scene 2 — Coastal Approach */}
            <motion.div style={{ display: displayBg2 }} className={`${sceneClass} top-[100vh]`}>
              <motion.div style={{ scale: scaleBg2 }} className={sceneInner}>
                <div className="absolute inset-0"><ZanziScene2 /></div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] z-10" style={{ backgroundImage: `linear-gradient(to bottom, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute bottom-0 w-full h-[50vh] z-10" style={{ backgroundImage: `linear-gradient(to top, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.25)] pointer-events-none z-10" />
            </motion.div>

            {/* Scene 3 — Beach Landing */}
            <motion.div style={{ display: displayBg3 }} className={`${sceneClass} top-[200vh]`}>
              <motion.div style={{ scale: scaleBg3 }} className={sceneInner}>
                <div className="absolute inset-0"><ZanziScene3 /></div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] z-10" style={{ backgroundImage: `linear-gradient(to bottom, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute bottom-0 w-full h-[50vh] z-10" style={{ backgroundImage: `linear-gradient(to top, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
            </motion.div>

            {/* Scene 4 — Shallow Lagoon */}
            <motion.div style={{ display: displayBg4 }} className={`${sceneClass} top-[300vh]`}>
              <motion.div style={{ scale: scaleBg4 }} className={sceneInner}>
                <div className="absolute inset-0"><ZanziScene4 /></div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] z-10" style={{ backgroundImage: `linear-gradient(to bottom, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute bottom-0 w-full h-[50vh] z-10" style={{ backgroundImage: `linear-gradient(to top, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.15)] pointer-events-none z-10" />
            </motion.div>

            {/* Scene 5 — Open Ocean Surface */}
            <motion.div style={{ display: displayBg5 }} className={`${sceneClass} top-[400vh]`}>
              <motion.div style={{ scale: scaleBg5 }} className={sceneInner}>
                <div className="absolute inset-0"><ZanziScene5 /></div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] z-10" style={{ backgroundImage: `linear-gradient(to bottom, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute bottom-0 w-full h-[50vh] z-10" style={{ backgroundImage: `linear-gradient(to top, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
            </motion.div>

            {/* Scene 6 — Coral Reef & Dhow */}
            <motion.div style={{ display: displayBg6 }} className={`${sceneClass} top-[500vh]`}>
              <motion.div style={{ scale: scaleBg6 }} className={sceneInner}>
                <div className="absolute inset-0"><ZanziScene6 /></div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] z-10" style={{ backgroundImage: `linear-gradient(to bottom, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute bottom-0 w-full h-[50vh] z-10" style={{ backgroundImage: `linear-gradient(to top, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.22)] pointer-events-none z-10" />
            </motion.div>

            {/* Scene 7 — Sunset Ocean */}
            <motion.div style={{ display: displayBg7 }} className={`${sceneClass} top-[600vh]`}>
              <motion.div style={{ scale: scaleBg7 }} className={sceneInner}>
                <div className="absolute inset-0"><ZanziScene7 /></div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] z-10" style={{ backgroundImage: `linear-gradient(to bottom, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute bottom-0 w-full h-[50vh] z-10" style={{ backgroundImage: `linear-gradient(to top, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
            </motion.div>

            {/* Scene 8 — Zanzibar Night */}
            <motion.div style={{ display: displayBg8 }} className={`${sceneClass} top-[700vh]`}>
              <motion.div style={{ scale: scaleBg8 }} className={sceneInner}>
                <div className="absolute inset-0"><ZanziScene8 /></div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] z-10" style={{ backgroundImage: `linear-gradient(to bottom, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute bottom-0 w-full h-[50vh] z-10" style={{ backgroundImage: `linear-gradient(to top, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.3)] pointer-events-none z-10" />
            </motion.div>

            {/* Scene 9 — Paradise Morning */}
            <motion.div style={{ display: displayBg9 }} className={`${sceneClass} top-[800vh]`}>
              <motion.div style={{ scale: scaleBg9 }} className={sceneInner}>
                <div className="absolute inset-0"><ZanziScene9 /></div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] z-10" style={{ backgroundImage: `linear-gradient(to bottom, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.15)] pointer-events-none z-10" />
            </motion.div>

          </motion.div>
        </motion.div>

        {/* Atmospheric transition overlay */}
        <motion.div
          style={{ opacity: opacityOverlay, backgroundColor: BASE_COLOR }}
          className="absolute inset-0 pointer-events-none mix-blend-multiply z-20"
        />

        {/* Layer 2: Tropical sun on water formation */}
        <motion.div
          style={{ x: parallaxX_fg1, y: parallaxY_fg1 }}
          className="absolute top-[12%] left-[22%] w-[36vw] h-[36vw] max-w-[560px] max-h-[560px] rounded-full mix-blend-overlay pointer-events-auto cursor-pointer"
          whileHover={{ scale: 1.05, filter: "brightness(1.5)" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E8D8A0] to-transparent opacity-25 blur-3xl" />
          <motion.div
            animate={{ scale: [1, 1.06, 1], opacity: [0.25, 0.4, 0.25] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[12%] rounded-full bg-gradient-to-br from-[#40C4CC] to-transparent opacity-35 blur-2xl"
          />
        </motion.div>

        {/* Layer 3: Floating wave / water shapes */}
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

        {/* Layer 4: Water sparkle particles + golden light beam */}
        <motion.div style={{ x: parallaxX_fg1, y: parallaxY_fg1 }} className="absolute inset-0 pointer-events-none mix-blend-screen">
          {Array.from({ length: 20 }).map((_, i) => (
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
          {/* Golden tropical light beam */}
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
