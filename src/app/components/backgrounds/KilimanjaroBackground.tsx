import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';

// ─── Scene SVG components ─────────────────────────────────────────────────────

function KiliScene1() {
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ks1_sky" x1="1200" y1="0" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#020610" />
          <stop offset="55%" stopColor="#081020" />
          <stop offset="100%" stopColor="#0F1A30" />
        </linearGradient>
        <radialGradient id="ks1_moon" cx="72%" cy="18%" r="20%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#C8D4DC" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#C8D4DC" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ks1_mist" x1="0" y1="840" x2="0" y2="960" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#B8C8D4" stopOpacity="0" />
          <stop offset="50%" stopColor="#B8C8D4" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#B8C8D4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#ks1_sky)" />
      <rect width="2400" height="1500" fill="url(#ks1_moon)" />
      {/* Stars */}
      {[[280,95,1.5,0.65],[520,70,1,0.4],[790,130,1.5,0.5],[1030,55,1,0.7],[1260,105,2,0.3],[1460,148,1,0.6],[1700,72,1.5,0.5],[1920,118,1,0.42],[2160,88,1.5,0.6],[420,205,1,0.35],[670,258,1.5,0.4],[900,210,1,0.48],[1130,228,1,0.32],[1580,185,2,0.22],[1840,248,1,0.45],[2090,208,1.5,0.35],[185,315,1,0.28],[1390,282,1,0.38],[2280,162,1,0.5],[760,342,1.5,0.3],[1050,355,1,0.25],[1740,310,1,0.4],[330,385,1,0.3],[2010,330,1.5,0.28]].map(([cx,cy,r,op],i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#C8D4DC" opacity={op} />
      ))}
      {/* Distant mountain range */}
      <path d="M 0 980 C 300 920,500 840,700 890 C 900 940,1000 760,1100 680 C 1200 600,1300 680,1400 750 C 1500 820,1700 900,2000 950 C 2200 980,2350 990,2400 970 L 2400 1500 L 0 1500 Z" fill="#1A2444" opacity="0.32" />
      {/* Mid mountain layer */}
      <path d="M 0 1060 C 250 980,450 900,650 960 C 850 1020,950 840,1050 740 C 1150 640,1200 570,1250 640 C 1300 710,1400 860,1650 930 C 1900 1000,2200 1050,2400 1020 L 2400 1500 L 0 1500 Z" fill="#131D38" opacity="0.58" />
      {/* Snow cap */}
      <path d="M 1195 575 C 1205 540,1215 555,1225 575 C 1218 585,1208 588,1195 575 Z" fill="#D4E0EC" opacity="0.38" />
      <path d="M 1178 620 C 1195 585,1210 595,1228 620 C 1215 630,1200 635,1178 620 Z" fill="#C8D8E8" opacity="0.28" />
      {/* Foreground dark terrain */}
      <path d="M 0 1180 C 350 1110,700 1150,1100 1120 C 1500 1090,1900 1130,2400 1110 L 2400 1500 L 0 1500 Z" fill="#090E1C" opacity="0.92" />
      {/* Mist band */}
      <path d="M 0 850 C 800 820,1600 860,2400 835 L 2400 960 C 1600 985,800 960,0 975 Z" fill="url(#ks1_mist)" />
    </svg>
  );
}

function KiliScene2() {
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ks2_sky" x1="1200" y1="0" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0D1424" />
          <stop offset="65%" stopColor="#182030" />
          <stop offset="100%" stopColor="#1E2A3C" />
        </linearGradient>
        <radialGradient id="ks2_glow" cx="85%" cy="75%" r="25%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#D0C8A8" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#D0C8A8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ks2_fog" x1="0" y1="780" x2="0" y2="900" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C8D0D8" stopOpacity="0" />
          <stop offset="50%" stopColor="#C8D0D8" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#C8D0D8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#ks2_sky)" />
      <rect width="2400" height="1500" fill="url(#ks2_glow)" />
      {/* Far peak hint */}
      <path d="M 1000 420 C 1080 320,1200 280,1320 380 C 1380 440,1400 520,1350 560 C 1280 520,1240 480,1200 500 C 1160 520,1120 560,1050 530 C 1020 510,1000 470,1000 420 Z" fill="#2A3850" opacity="0.45" />
      {/* Moorland ridges */}
      <path d="M 0 900 C 400 860,700 920,1000 880 C 1300 840,1600 910,2000 870 C 2200 850,2350 880,2400 860 L 2400 1500 L 0 1500 Z" fill="#1E2A3C" opacity="0.5" />
      <path d="M 0 980 C 300 940,600 970,900 940 C 1200 910,1500 960,1800 930 C 2100 900,2300 940,2400 920 L 2400 1500 L 0 1500 Z" fill="#182030" opacity="0.65" />
      {/* Heather forms - dark rounded humps */}
      <path d="M 0 1080 C 100 1050,180 1040,260 1060 C 340 1080,380 1070,430 1060 C 520 1040,600 1055,700 1075 C 820 1095,900 1080,1000 1065 C 1200 1035,1400 1060,1600 1045 C 1800 1030,2000 1060,2200 1040 C 2300 1030,2380 1050,2400 1045 L 2400 1500 L 0 1500 Z" fill="#141C2C" opacity="0.8" />
      {/* Ground */}
      <path d="M 0 1200 C 600 1170,1200 1185,1800 1165 C 2100 1155,2300 1175,2400 1160 L 2400 1500 L 0 1500 Z" fill="#0D1220" opacity="0.95" />
      {/* Fog band */}
      <path d="M 0 790 C 600 762,1200 785,1800 770 C 2100 763,2300 775,2400 768 L 2400 895 C 1800 910,1200 898,600 905 C 300 908,100 900,0 905 Z" fill="url(#ks2_fog)" />
    </svg>
  );
}

function KiliScene3() {
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ks3_sky" x1="1200" y1="0" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#161E2E" />
          <stop offset="100%" stopColor="#2A3648" />
        </linearGradient>
        <linearGradient id="ks3_fog1" x1="0" y1="580" x2="2400" y2="580" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C8D4D8" stopOpacity="0" />
          <stop offset="20%" stopColor="#C8D4D8" stopOpacity="0.12" />
          <stop offset="80%" stopColor="#C8D4D8" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#C8D4D8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ks3_fog2" x1="0" y1="720" x2="2400" y2="720" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C8D4D8" stopOpacity="0" />
          <stop offset="30%" stopColor="#C8D4D8" stopOpacity="0.1" />
          <stop offset="70%" stopColor="#C8D4D8" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#C8D4D8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#ks3_sky)" />
      {/* Forest/heather forms below fog */}
      <path d="M 0 950 C 200 910,400 940,600 920 C 800 900,1000 930,1200 910 C 1400 890,1600 920,1800 900 C 2000 880,2200 910,2400 890 L 2400 1500 L 0 1500 Z" fill="#1E2A3A" opacity="0.6" />
      {/* Heather zone - textured humps */}
      <path d="M 0 1030 C 80 1000,150 990,240 1010 C 380 1040,450 1020,560 1005 C 700 985,800 1010,950 1025 C 1100 1040,1200 1015,1350 1000 C 1500 985,1650 1010,1800 995 C 1950 980,2100 1005,2250 990 C 2340 982,2400 995,2400 995 L 2400 1500 L 0 1500 Z" fill="#1A2436" opacity="0.75" />
      {/* Fog ribbons */}
      <path d="M 0 555 C 400 530,800 560,1200 542 C 1600 524,2000 552,2400 535 L 2400 640 C 2000 655,1600 635,1200 648 C 800 661,400 640,0 655 Z" fill="url(#ks3_fog1)" />
      <path d="M 0 700 C 300 678,600 695,900 682 C 1200 669,1500 688,1800 673 C 2100 658,2300 675,2400 668 L 2400 768 C 2100 780,1700 762,1400 775 C 1100 788,800 770,500 778 C 300 783,100 773,0 778 Z" fill="url(#ks3_fog2)" />
      {/* Foreground dark */}
      <path d="M 0 1150 C 500 1120,1000 1140,1500 1125 C 1900 1112,2200 1128,2400 1118 L 2400 1500 L 0 1500 Z" fill="#111820" opacity="0.9" />
    </svg>
  );
}

function KiliScene4() {
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ks4_sky" x1="1200" y1="0" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A2438" />
          <stop offset="60%" stopColor="#263650" />
          <stop offset="100%" stopColor="#2E4060" />
        </linearGradient>
        <radialGradient id="ks4_peak" cx="50%" cy="22%" r="18%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#4A6080" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#4A6080" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ks4_cloud" x1="0" y1="1050" x2="0" y2="1120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C8D4DC" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#C8D4DC" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#ks4_sky)" />
      {/* Distant peak — small, high, suggesting vast scale */}
      <rect width="2400" height="1500" fill="url(#ks4_peak)" />
      <path d="M 1120 280 C 1160 200,1200 165,1240 200 C 1260 225,1270 255,1258 278 C 1240 295,1215 300,1200 295 C 1185 300,1162 295,1120 280 Z" fill="#3A5070" opacity="0.55" />
      <path d="M 1140 295 C 1165 278,1200 285,1232 295 C 1220 310,1200 315,1140 295 Z" fill="#C8D8E8" opacity="0.22" />
      {/* Wide saddle plateau - austere landscape */}
      <path d="M 0 840 C 600 820,1200 830,1800 815 C 2100 808,2300 820,2400 815 L 2400 1500 L 0 1500 Z" fill="#263040" opacity="0.45" />
      <path d="M 0 920 C 400 900,800 915,1200 905 C 1600 895,2000 910,2400 900 L 2400 1500 L 0 1500 Z" fill="#1C2838" opacity="0.65" />
      {/* Flat volcanic saddle terrain */}
      <path d="M 0 1010 C 800 998,1600 1005,2400 995 L 2400 1500 L 0 1500 Z" fill="#182030" opacity="0.8" />
      {/* Cloud bank far below */}
      <path d="M 0 1055 C 400 1040,800 1052,1200 1043 C 1600 1034,2000 1048,2400 1040 L 2400 1120 L 0 1120 Z" fill="url(#ks4_cloud)" />
      {/* Ground */}
      <path d="M 0 1100 C 600 1088,1200 1096,1800 1084 C 2100 1078,2300 1090,2400 1084 L 2400 1500 L 0 1500 Z" fill="#111820" opacity="0.95" />
    </svg>
  );
}

function KiliScene5() {
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ks5_sky" x1="1200" y1="0" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E2E44" />
          <stop offset="50%" stopColor="#2E4258" />
          <stop offset="100%" stopColor="#3A4E68" />
        </linearGradient>
        <radialGradient id="ks5_light" cx="55%" cy="10%" r="30%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#8AACCC" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#8AACCC" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#ks5_sky)" />
      <rect width="2400" height="1500" fill="url(#ks5_light)" />
      {/* Lava ridge - rough rocky forms */}
      <path d="M 0 800 C 200 760,350 780,480 740 C 580 710,640 690,720 710 C 800 730,860 720,940 700 C 1000 685,1060 660,1120 645 C 1200 625,1280 645,1360 670 C 1440 695,1520 720,1620 700 C 1720 680,1840 710,1980 730 C 2100 748,2250 760,2400 745 L 2400 1500 L 0 1500 Z" fill="#2A3850" opacity="0.55" />
      {/* Snow patches beginning to appear */}
      <path d="M 480 750 C 500 728,530 720,560 738 C 545 755,515 760,480 750 Z" fill="#D8E8F4" opacity="0.5" />
      <path d="M 1100 652 C 1120 632,1145 628,1168 648 C 1155 662,1132 668,1100 652 Z" fill="#D8E8F4" opacity="0.48" />
      <path d="M 1840 718 C 1858 698,1882 695,1905 715 C 1892 728,1868 732,1840 718 Z" fill="#D8E8F4" opacity="0.44" />
      {/* Ridge detail layer */}
      <path d="M 0 910 C 300 870,600 895,900 875 C 1200 855,1500 880,1800 860 C 2100 840,2300 865,2400 850 L 2400 1500 L 0 1500 Z" fill="#1E2C40" opacity="0.7" />
      {/* Foreground rocky terrain */}
      <path d="M 0 1060 C 400 1030,800 1050,1200 1035 C 1600 1020,2000 1045,2400 1028 L 2400 1500 L 0 1500 Z" fill="#151E2C" opacity="0.88" />
      {/* Ground */}
      <path d="M 0 1170 C 600 1148,1200 1162,1800 1145 C 2100 1137,2300 1150,2400 1142 L 2400 1500 L 0 1500 Z" fill="#0E1520" opacity="0.96" />
    </svg>
  );
}

function KiliScene6() {
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ks6_sky" x1="1200" y1="0" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8AACCC" />
          <stop offset="40%" stopColor="#A8C4DC" />
          <stop offset="100%" stopColor="#C8DDF0" />
        </linearGradient>
        <linearGradient id="ks6_glacier" x1="1200" y1="600" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D4E8F4" />
          <stop offset="100%" stopColor="#E8F0F8" />
        </linearGradient>
        <radialGradient id="ks6_highlight" cx="60%" cy="40%" r="35%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#F0F6FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F0F6FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#ks6_sky)" />
      <rect width="2400" height="1500" fill="url(#ks6_highlight)" />
      {/* Glacier surface — sweeping ice forms */}
      <path d="M 0 680 C 400 640,800 680,1200 650 C 1600 620,2000 660,2400 635 L 2400 1500 L 0 1500 Z" fill="url(#ks6_glacier)" />
      {/* Ice ridges and crevasse forms */}
      <path d="M 0 720 C 200 700,350 715,480 700 C 600 686,700 695,820 705 C 950 716,1050 700,1150 688 C 1250 676,1350 690,1500 680 C 1700 668,1900 682,2100 670 C 2250 660,2350 672,2400 665" stroke="#B8D0E8" strokeWidth="1.5" opacity="0.4" />
      <path d="M 0 790 C 300 775,600 788,900 775 C 1200 762,1500 778,1800 765 C 2100 752,2300 768,2400 760" stroke="#B8D0E8" strokeWidth="1" opacity="0.3" />
      <path d="M 0 880 C 400 865,800 878,1200 863 C 1600 848,2000 865,2400 850" stroke="#C8DCEC" strokeWidth="1" opacity="0.25" />
      {/* Snow surface forms */}
      <path d="M 0 970 C 600 950,1200 965,1800 948 C 2100 940,2300 952,2400 945 L 2400 1500 L 0 1500 Z" fill="#DCF0FA" opacity="0.5" />
      <path d="M 0 1060 C 500 1040,1000 1056,1500 1040 C 1900 1027,2200 1042,2400 1035 L 2400 1500 L 0 1500 Z" fill="#E8F4FC" opacity="0.6" />
    </svg>
  );
}

function KiliScene7() {
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ks7_sky" x1="1200" y1="0" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#B8D0E8" />
          <stop offset="50%" stopColor="#D4E8F8" />
          <stop offset="100%" stopColor="#EAF2FC" />
        </linearGradient>
        <linearGradient id="ks7_snow" x1="1200" y1="900" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E8F2FC" />
          <stop offset="100%" stopColor="#F4F8FF" />
        </linearGradient>
        <radialGradient id="ks7_sun" cx="65%" cy="15%" r="25%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#ks7_sky)" />
      <rect width="2400" height="1500" fill="url(#ks7_sun)" />
      {/* Vast empty sky — altitude suggestion */}
      {/* Snow plateau, minimal */}
      <path d="M 0 1000 C 600 975,1200 990,1800 970 C 2100 960,2300 975,2400 965 L 2400 1500 L 0 1500 Z" fill="url(#ks7_snow)" />
      {/* Subtle surface variation */}
      <path d="M 0 1040 C 400 1022,800 1038,1200 1020 C 1600 1002,2000 1020,2400 1005 L 2400 1200 L 0 1200 Z" fill="#F0F6FF" opacity="0.4" />
      <path d="M 0 1100 C 800 1080,1600 1096,2400 1075 L 2400 1500 L 0 1500 Z" fill="#F4F8FF" opacity="0.55" />
      {/* Ice surface highlight */}
      <path d="M 0 1025 C 200 1010,350 1022,500 1012 C 700 1000,900 1015,1100 1005 C 1300 995,1500 1008,1700 998 C 1900 988,2150 1002,2400 992" stroke="#FFFFFF" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

function KiliScene8() {
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ks8_sky" x1="1200" y1="0" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#020508" />
          <stop offset="50%" stopColor="#070D18" />
          <stop offset="100%" stopColor="#0D1528" />
        </linearGradient>
        <radialGradient id="ks8_venus" cx="68%" cy="12%" r="3%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#D4E8F8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D4E8F8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ks8_iceglow" x1="1200" y1="750" x2="1200" y2="900" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#B8D4E8" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#B8D4E8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#ks8_sky)" />
      <rect width="2400" height="1500" fill="url(#ks8_venus)" />
      {/* Stars — denser, pre-dawn */}
      {[[150,80,1.5,0.7],[320,55,1,0.5],[480,110,2,0.4],[620,70,1,0.6],[750,40,1.5,0.55],[880,95,1,0.45],[1000,60,1,0.7],[1120,35,1.5,0.5],[1240,85,1,0.4],[1380,50,2,0.35],[1500,90,1,0.6],[1640,45,1.5,0.5],[1780,80,1,0.55],[1920,55,2,0.4],[2060,90,1,0.5],[2200,40,1.5,0.65],[2340,70,1,0.45],[220,165,1,0.35],[420,190,1.5,0.3],[680,175,1,0.4],[900,200,1,0.28],[1150,180,1.5,0.35],[1420,195,1,0.4],[1680,170,1,0.3],[1940,185,1.5,0.35],[2180,165,1,0.4],[380,280,1,0.25],[760,260,1.5,0.28],[1060,275,1,0.3],[1380,265,1,0.25],[1700,258,1.5,0.3],[2020,272,1,0.28]].map(([cx,cy,r,op],i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#C8D8E8" opacity={op} />
      ))}
      {/* Bright Venus/planet */}
      <circle cx="1630" cy="108" r="3.5" fill="#D4E8F8" opacity="0.85" />
      <circle cx="1630" cy="108" r="8" fill="#B8D0E8" opacity="0.2" />
      {/* Glacial ridge silhouette in pre-dawn darkness */}
      <path d="M 0 850 C 300 810,500 830,700 800 C 900 770,1050 720,1200 700 C 1350 720,1500 770,1700 800 C 1900 830,2100 840,2400 820 L 2400 1500 L 0 1500 Z" fill="#0A1220" opacity="0.85" />
      {/* Ice glow on ridge edge */}
      <path d="M 0 850 C 300 810,500 830,700 800 C 900 770,1050 720,1200 700 C 1350 720,1500 770,1700 800 C 1900 830,2100 840,2400 820 L 2400 900 L 0 900 Z" fill="url(#ks8_iceglow)" />
      {/* Ground — deep dark */}
      <path d="M 0 1000 C 800 985,1600 998,2400 980 L 2400 1500 L 0 1500 Z" fill="#050A10" opacity="0.98" />
    </svg>
  );
}

function KiliScene9() {
  return (
    <svg viewBox="0 0 2400 1500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ks9_sky" x1="1200" y1="0" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0D1830" />
          <stop offset="30%" stopColor="#3A4870" />
          <stop offset="60%" stopColor="#C8A870" />
          <stop offset="80%" stopColor="#E8C888" />
          <stop offset="100%" stopColor="#F0E0B0" />
        </linearGradient>
        <linearGradient id="ks9_snow" x1="1200" y1="700" x2="1200" y2="1500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F0F4FF" />
          <stop offset="50%" stopColor="#EDE8D8" />
          <stop offset="100%" stopColor="#E8DEC8" />
        </linearGradient>
        <radialGradient id="ks9_dawn" cx="50%" cy="58%" r="40%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#FFE0A0" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#FFE0A0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ks9_clouds" x1="0" y1="900" x2="0" y2="980" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F0ECDC" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F0ECDC" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="2400" height="1500" fill="url(#ks9_sky)" />
      <rect width="2400" height="1500" fill="url(#ks9_dawn)" />
      {/* Summit crater rim */}
      <path d="M 0 780 C 400 760,700 748,900 762 C 1050 772,1130 768,1200 755 C 1270 768,1350 772,1500 762 C 1700 748,2000 760,2400 750 L 2400 1500 L 0 1500 Z" fill="url(#ks9_snow)" />
      {/* Dawn light catching snow surface */}
      <path d="M 0 810 C 600 790,1200 805,1800 788 C 2100 780,2300 792,2400 785 L 2400 1000 L 0 1000 Z" fill="#FFE8C0" opacity="0.12" />
      {/* Cloud sea far below */}
      <path d="M 0 892 C 300 878,600 888,900 875 C 1200 862,1500 875,1800 862 C 2100 849,2300 862,2400 855 L 2400 980 L 0 980 Z" fill="url(#ks9_clouds)" />
      <path d="M 0 930 C 400 916,800 926,1200 912 C 1600 898,2000 912,2400 898 L 2400 980 L 0 980 Z" fill="#F4F0E0" opacity="0.3" />
      {/* Snow surface detail */}
      <path d="M 0 860 C 300 845,600 856,900 842 C 1200 828,1500 842,1800 828 C 2100 814,2300 828,2400 820" stroke="#F0E8D0" strokeWidth="1.5" opacity="0.3" />
      <path d="M 0 1050 C 600 1030,1200 1046,1800 1028 C 2100 1019,2300 1032,2400 1024 L 2400 1500 L 0 1500 Z" fill="#E8DEC8" opacity="0.7" />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const BASE_COLOR = '#050810';

export default function KilimanjaroBackground() {
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

            {/* Scene 1 — Night Forest Approach */}
            <motion.div style={{ display: displayBg1 }} className={`${sceneClass} top-0`}>
              <motion.div style={{ scale: scaleBg1 }} className={sceneInner}>
                <div className={sceneFill}><KiliScene1 /></div>
              </motion.div>
              <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t to-transparent z-10" style={{ backgroundImage: `linear-gradient(to top, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.25)] pointer-events-none z-10" />
            </motion.div>

            {/* Scene 2 — Moorland Ascent */}
            <motion.div style={{ display: displayBg2 }} className={`${sceneClass} top-[100vh]`}>
              <motion.div style={{ scale: scaleBg2 }} className={sceneInner}>
                <div className={sceneFill}><KiliScene2 /></div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b to-transparent z-10" style={{ backgroundImage: `linear-gradient(to bottom, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t to-transparent z-10" style={{ backgroundImage: `linear-gradient(to top, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.25)] pointer-events-none z-10" />
            </motion.div>

            {/* Scene 3 — Heather & Cloud Forest */}
            <motion.div style={{ display: displayBg3 }} className={`${sceneClass} top-[200vh]`}>
              <motion.div style={{ scale: scaleBg3 }} className={sceneInner}>
                <div className={sceneFill}><KiliScene3 /></div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b to-transparent z-10" style={{ backgroundImage: `linear-gradient(to bottom, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t to-transparent z-10" style={{ backgroundImage: `linear-gradient(to top, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.25)] pointer-events-none z-10" />
            </motion.div>

            {/* Scene 4 — Alpine Desert Saddle */}
            <motion.div style={{ display: displayBg4 }} className={`${sceneClass} top-[300vh]`}>
              <motion.div style={{ scale: scaleBg4 }} className={sceneInner}>
                <div className={sceneFill}><KiliScene4 /></div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b to-transparent z-10" style={{ backgroundImage: `linear-gradient(to bottom, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t to-transparent z-10" style={{ backgroundImage: `linear-gradient(to top, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.25)] pointer-events-none z-10" />
            </motion.div>

            {/* Scene 5 — Lava Ridge, First Snow */}
            <motion.div style={{ display: displayBg5 }} className={`${sceneClass} top-[400vh]`}>
              <motion.div style={{ scale: scaleBg5 }} className={sceneInner}>
                <div className={sceneFill}><KiliScene5 /></div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b to-transparent z-10" style={{ backgroundImage: `linear-gradient(to bottom, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t to-transparent z-10" style={{ backgroundImage: `linear-gradient(to top, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.25)] pointer-events-none z-10" />
            </motion.div>

            {/* Scene 6 — Glacier Field */}
            <motion.div style={{ display: displayBg6 }} className={`${sceneClass} top-[500vh]`}>
              <motion.div style={{ scale: scaleBg6 }} className={sceneInner}>
                <div className={sceneFill}><KiliScene6 /></div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b to-transparent z-10" style={{ backgroundImage: `linear-gradient(to bottom, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t to-transparent z-10" style={{ backgroundImage: `linear-gradient(to top, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
            </motion.div>

            {/* Scene 7 — High Altitude Traverse */}
            <motion.div style={{ display: displayBg7 }} className={`${sceneClass} top-[600vh]`}>
              <motion.div style={{ scale: scaleBg7 }} className={sceneInner}>
                <div className={sceneFill}><KiliScene7 /></div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b to-transparent z-10" style={{ backgroundImage: `linear-gradient(to bottom, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t to-transparent z-10" style={{ backgroundImage: `linear-gradient(to top, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.15)] pointer-events-none z-10" />
            </motion.div>

            {/* Scene 8 — Pre-dawn Summit Push */}
            <motion.div style={{ display: displayBg8 }} className={`${sceneClass} top-[700vh]`}>
              <motion.div style={{ scale: scaleBg8 }} className={sceneInner}>
                <div className={sceneFill}><KiliScene8 /></div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b to-transparent z-10" style={{ backgroundImage: `linear-gradient(to bottom, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t to-transparent z-10" style={{ backgroundImage: `linear-gradient(to top, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.3)] pointer-events-none z-10" />
            </motion.div>

            {/* Scene 9 — Uhuru Peak at Dawn */}
            <motion.div style={{ display: displayBg9 }} className={`${sceneClass} top-[800vh]`}>
              <motion.div style={{ scale: scaleBg9 }} className={sceneInner}>
                <div className={sceneFill}><KiliScene9 /></div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b to-transparent z-10" style={{ backgroundImage: `linear-gradient(to bottom, ${BASE_COLOR}, transparent)` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.18)] pointer-events-none z-10" />
            </motion.div>

          </motion.div>
        </motion.div>

        {/* Atmospheric transition overlay */}
        <motion.div
          style={{ opacity: opacityOverlay, backgroundColor: BASE_COLOR }}
          className="absolute inset-0 pointer-events-none mix-blend-multiply z-20"
        />

        {/* Layer 2: Moon / cold light formation */}
        <motion.div
          style={{ x: parallaxX_fg1, y: parallaxY_fg1 }}
          className="absolute top-[8%] right-[18%] w-[32vw] h-[32vw] max-w-[520px] max-h-[520px] rounded-full mix-blend-overlay pointer-events-auto cursor-pointer"
          whileHover={{ scale: 1.05, filter: "brightness(1.4)" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-[#D4E8F8] to-transparent opacity-20 blur-3xl" />
          <motion.div
            animate={{ scale: [1, 1.04, 1], opacity: [0.18, 0.28, 0.18] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[15%] rounded-full bg-gradient-to-tr from-[#B8D0E8] to-transparent opacity-30 blur-2xl"
          />
        </motion.div>

        {/* Layer 3: Floating cloud/mist shapes */}
        <motion.div style={{ x: parallaxX_fg2, y: parallaxY_fg2 }} className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ x: [0, 60, 0], y: [0, -20, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-[5%] w-[45vw] h-[18vw] bg-[#C8D8E8] opacity-[0.04] blur-3xl rounded-[60%_40%_50%_70%] pointer-events-auto cursor-pointer"
            whileHover={{ scale: 1.12, filter: "brightness(1.8)" }}
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 25, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute top-[45%] right-[8%] w-[38vw] h-[22vw] bg-[#D4E8F0] opacity-[0.04] blur-3xl rounded-[50%_70%_40%_60%] pointer-events-auto cursor-pointer"
            whileHover={{ scale: 1.12, filter: "brightness(1.8)" }}
          />
        </motion.div>

        {/* Layer 4: Snow/ice particles + cold light beam */}
        <motion.div style={{ x: parallaxX_fg1, y: parallaxY_fg1 }} className="absolute inset-0 pointer-events-none mix-blend-screen">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#C8D8E8]"
              style={{
                width: Math.random() * 8 + 3 + 'px',
                height: Math.random() * 8 + 3 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                opacity: Math.random() * 0.15 + 0.03,
                filter: `blur(${Math.random() * 3 + 1}px)`
              }}
              animate={{
                y: [0, Math.random() * 80 + 40, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0.03, 0.22, 0.03],
              }}
              transition={{
                duration: Math.random() * 12 + 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 12
              }}
            />
          ))}
          {/* Cold light beam */}
          <motion.div
            className="absolute top-[-5%] right-[25%] w-[50vw] h-[140vh] bg-gradient-to-b from-[#C8E0F0]/4 to-transparent rotate-[20deg] blur-3xl"
            animate={{ opacity: [0.08, 0.22, 0.08] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </div>
  );
}
