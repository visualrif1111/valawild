import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

// Precomputed dust particle data — deterministic values prevent Math.random()
// in render which caused particles to jump position on every re-render
const DUST_DATA = Array.from({ length: 20 }, (_, i) => ({
  width:   5  + (i * 2.31) % 15,
  height:  5  + (i * 2.31) % 15,
  left:    (i * 5.13) % 100,
  top:     (i * 7.27) % 100,
  opacity: 0.05 + (i % 4) * 0.05,
  blur:    2   + (i % 3),
  dy:      -(50 + (i * 15.7) % 100),
  dx:      ((i % 5) - 2) * 12,
  dur:     15  + (i * 1.73) % 10,
  delay:   (i * 1.41) % 10,
}));
/* ── Scene artwork ──────────────────────────────────────────────────────────
   These nine scenes were Figma exports rendered as inline SVG — ~9.3 MB of
   path data and, for one scene alone, 5,742 <path> elements in the DOM. They
   are now rasterised to WebP (~460 KB total), captured at the exact wrapper
   geometry these layers compose to on a 1920x1080 desktop.

   Trade-off: the source layers were fixed-pixel canvases inside viewport-
   relative wrappers, so their composition shifted with screen size. The
   raster is scaled with object-cover instead — steadier, and ~95% lighter.
   Regenerate via the capture harness in git history if the art changes.
   ────────────────────────────────────────────────────────────────────────── */
import sceneSafari     from '../../../assets/scenes/vala-wild-safari.webp';
import sceneVisualrif2 from '../../../assets/scenes/visualrif2.webp';
import sceneVisualrif3 from '../../../assets/scenes/visualrif3.webp';
import scene63         from '../../../assets/scenes/frame63.webp';
import scene66         from '../../../assets/scenes/frame66.webp';
import scene65         from '../../../assets/scenes/frame65.webp';
import scene68         from '../../../assets/scenes/frame68.webp';
import scene70         from '../../../assets/scenes/frame70.webp';
import scene73         from '../../../assets/scenes/frame73.webp';

/* Scene layer. eager/high for the first, lazy for the rest — only the opening
   scene is on screen at load. */
function Scene({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      // @ts-expect-error fetchpriority is valid HTML, not yet in React 18 types
      fetchpriority={priority ? 'high' : 'low'}
      className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
    />
  );
}

export default function SafariBackground() {
  const { scrollYProgress } = useScroll({ offset: ["start start", "end end"] });

  // ── Spring-smoothed scroll — cinematic inertia on desktop, tight on mobile ──
  // Mobile spring settles in ~150 ms (near-critically damped); desktop drifts ~1 s.
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  // Decorative motion only — scroll-driven scene visibility must keep working,
  // or the story beats would all render on top of each other.
  const reduce = useReducedMotion();
  const dustParticles = reduce ? [] : isMobile ? DUST_DATA.slice(0, 6) : DUST_DATA;
  const scrollYSpring = useSpring(scrollYProgress,
    isMobile
      ? { damping: 30, stiffness: 400, mass: 0.6 }
      : { damping: 20, stiffness: 65,  mass: 0.8 }
  );
  const scrollYSmooth = reduce ? scrollYProgress : scrollYSpring;

  // ── Scene stack scrolls through via spring (smooth momentum) ────────────────
  const yStack = useTransform(scrollYSmooth, [0, 1], ["0vh", "-800vh"]);

  // ── Per-scene scale on smooth scroll ────────────────────────────────────────
  const scaleBg1 = useTransform(scrollYSmooth, [0, 1/8],           [1, 1.15]);
  const scaleBg2 = useTransform(scrollYSmooth, [0, 1/8, 2/8],      [1.15, 1, 1.15]);
  const scaleBg3 = useTransform(scrollYSmooth, [1/8, 2/8, 3/8],    [1.15, 1, 1.15]);
  const scaleBg4 = useTransform(scrollYSmooth, [2/8, 3/8, 4/8],    [1.15, 1, 1.15]);
  const scaleBg5 = useTransform(scrollYSmooth, [3/8, 4/8, 5/8],    [1.15, 1, 1.15]);
  const scaleBg6 = useTransform(scrollYSmooth, [4/8, 5/8, 6/8],    [1.15, 1, 1.15]);
  const scaleBg7 = useTransform(scrollYSmooth, [5/8, 6/8, 7/8],    [1.15, 1, 1.15]);
  const scaleBg8 = useTransform(scrollYSmooth, [6/8, 7/8, 1],      [1.15, 1, 1.15]);
  const scaleBg9 = useTransform(scrollYSmooth, [7/8, 1],           [1.15, 1]);

  // ── Scene visibility — raw scroll keeps show/hide crisp ─────────────────────
  const displayBg1 = useTransform(scrollYProgress, v => v <= 1.5/8 ? "flex" : "none");
  const displayBg2 = useTransform(scrollYProgress, v => v <= 2.5/8 ? "flex" : "none");
  const displayBg3 = useTransform(scrollYProgress, v => v >= 0.5/8 && v <= 3.5/8 ? "flex" : "none");
  const displayBg4 = useTransform(scrollYProgress, v => v >= 1.5/8 && v <= 4.5/8 ? "flex" : "none");
  const displayBg5 = useTransform(scrollYProgress, v => v >= 2.5/8 && v <= 5.5/8 ? "flex" : "none");
  const displayBg6 = useTransform(scrollYProgress, v => v >= 3.5/8 && v <= 6.5/8 ? "flex" : "none");
  const displayBg7 = useTransform(scrollYProgress, v => v >= 4.5/8 && v <= 7.5/8 ? "flex" : "none");
  const displayBg8 = useTransform(scrollYProgress, v => v >= 5.5/8 ? "flex" : "none");
  const displayBg9 = useTransform(scrollYProgress, v => v >= 6.5/8 ? "flex" : "none");

  // ── Parallax depth offsets (raw — layers separate crisply from bg) ──────────
  const yMid  = useTransform(scrollYProgress, [0, 1], ['0vh',  '-80vh']);
  const yFore = useTransform(scrollYProgress, [0, 1], ['0vh', '-160vh']);

  // ── Mouse parallax ─────────────────────────────────────────────────────────
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    if (reduce) return;
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, reduce]);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });
  const parallaxX_bg  = useTransform(smoothMouseX, [0, 1], ["-1%",  "1%"]);
  const parallaxY_bg  = useTransform(smoothMouseY, [0, 1], ["-1%",  "1%"]);
  const parallaxX_fg1 = useTransform(smoothMouseX, [0, 1], ["-3%",  "3%"]);
  const parallaxY_fg1 = useTransform(smoothMouseY, [0, 1], ["-3%",  "3%"]);
  const parallaxX_fg2 = useTransform(smoothMouseX, [0, 1], ["4%",  "-4%"]);
  const parallaxY_fg2 = useTransform(smoothMouseY, [0, 1], ["4%",  "-4%"]);

  // ── Flash overlay — raw scroll, crisp cuts ───────────────────────────────────
  const opacityOverlay = useTransform(
    scrollYProgress,
    [0, 1/16, 2/16, 3/16, 4/16, 5/16, 6/16, 7/16, 8/16, 9/16, 10/16, 11/16, 12/16, 13/16, 14/16, 15/16, 1],
    [0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0]
  );

  return (
    // 2000vh — faster scene traversal (~1.8× vs 3600vh)
    <div className="relative w-full h-[600vh] md:h-[2000vh] bg-[#2A0F0A]">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        {/* ── LAYER 1 — Scene stack (spring scroll + mouse parallax) ─────────── */}
        <motion.div style={{ y: parallaxY_bg }} className="absolute inset-0">
          <motion.div style={{ y: yStack, x: parallaxX_bg }} className="absolute top-0 left-0 w-full h-[900vh] will-change-transform">

            <motion.div style={{ display: displayBg1 }} className="absolute top-0 left-0 w-full h-[100vh] items-center justify-center overflow-hidden">
              <motion.div style={{ scale: scaleBg1 }} className="absolute inset-0 flex items-center justify-center will-change-transform">
                <div className="relative flex-shrink-0 w-[max(100vw,84.1vh)] h-[max(100vh,118.8vw)]">
                  <Scene src={sceneSafari} alt="Kilimanjaro rising over the savannah at dawn" priority />
                </div>
              </motion.div>
              <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#2A0F0A] to-transparent z-10" />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
            </motion.div>

            <motion.div style={{ display: displayBg2 }} className="absolute top-[100vh] left-0 w-full h-[100vh] items-center justify-center overflow-hidden">
              <motion.div style={{ scale: scaleBg2 }} className="absolute inset-0 flex items-center justify-center will-change-transform">
                <div className="relative flex-shrink-0 w-[max(100vw,58.2vh)] h-[max(100vh,171.6vw)]">
                  <Scene src={sceneVisualrif2} alt="Open plains under a wide sky" />
                </div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-[#2A0F0A] to-transparent z-10" />
              <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#2A0F0A] to-transparent z-10" />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
            </motion.div>

            <motion.div style={{ display: displayBg3 }} className="absolute top-[200vh] left-0 w-full h-[100vh] items-center justify-center overflow-hidden">
              <motion.div style={{ scale: scaleBg3 }} className="absolute inset-0 flex items-center justify-center will-change-transform">
                <div className="relative flex-shrink-0 w-[max(100vw,58.2vh)] h-[max(100vh,171.6vw)]">
                  <Scene src={sceneVisualrif3} alt="Grassland at golden hour" />
                </div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-[#2A0F0A] to-transparent z-10" />
              <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#2A0F0A] to-transparent z-10" />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
            </motion.div>

            <motion.div style={{ display: displayBg4 }} className="absolute top-[300vh] left-0 w-full h-[100vh] items-center justify-center overflow-hidden">
              <motion.div style={{ scale: scaleBg4 }} className="absolute inset-0 flex items-center justify-center will-change-transform">
                <div className="relative flex-shrink-0 w-[max(100vw,139.8vh)] h-[max(100vh,71.5vw)]">
                  <Scene src={scene63} alt="Acacia silhouettes on the horizon" />
                </div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-[#2A0F0A] to-transparent z-10" />
              <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#2A0F0A] to-transparent z-10" />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
            </motion.div>

            <motion.div style={{ display: displayBg5 }} className="absolute top-[400vh] left-0 w-full h-[100vh] items-center justify-center overflow-hidden">
              <motion.div style={{ scale: scaleBg5 }} className="absolute inset-0 flex items-center justify-center will-change-transform">
                <div className="relative flex-shrink-0 w-[max(100vw,66.9vh)] h-[max(100vh,149.5vw)]">
                  <Scene src={scene66} alt="Herd moving across the plain" />
                </div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-[#2A0F0A] to-transparent z-10" />
              <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#2A0F0A] to-transparent z-10" />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
            </motion.div>

            <motion.div style={{ display: displayBg6 }} className="absolute top-[500vh] left-0 w-full h-[100vh] items-center justify-center overflow-hidden">
              <motion.div style={{ scale: scaleBg6 }} className="absolute inset-0 flex items-center justify-center will-change-transform">
                <div className="relative flex-shrink-0 w-[max(100vw,66.9vh)] h-[max(100vh,149.5vw)]">
                  <Scene src={scene65} alt="Dusk settling over the escarpment" />
                </div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-[#2A0F0A] to-transparent z-10" />
              <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#2A0F0A] to-transparent z-10" />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
            </motion.div>

            <motion.div style={{ display: displayBg7 }} className="absolute top-[600vh] left-0 w-full h-[100vh] items-center justify-center overflow-hidden">
              <motion.div style={{ scale: scaleBg7 }} className="absolute inset-0 flex items-center justify-center will-change-transform">
                <div className="relative flex-shrink-0 w-[max(100vw,61.2vh)] h-[max(100vh,163.4vw)]">
                  <Scene src={scene68} alt="Nightfall on the savannah" />
                </div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-[#2A0F0A] to-transparent z-10" />
              <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#2A0F0A] to-transparent z-10" />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
            </motion.div>

            <motion.div style={{ display: displayBg8 }} className="absolute top-[700vh] left-0 w-full h-[100vh] items-center justify-center overflow-hidden">
              <motion.div style={{ scale: scaleBg8 }} className="absolute inset-0 flex items-center justify-center will-change-transform">
                <div className="relative flex-shrink-0 w-[max(100vw,61.2vh)] h-[max(100vh,163.4vw)]">
                  <Scene src={scene70} alt="Starlight over the plains" />
                </div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-[#2A0F0A] to-transparent z-10" />
              <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#2A0F0A] to-transparent z-10" />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
            </motion.div>

            <motion.div style={{ display: displayBg9 }} className="absolute top-[800vh] left-0 w-full h-[100vh] items-center justify-center overflow-hidden">
              <motion.div style={{ scale: scaleBg9 }} className="absolute inset-0 flex items-center justify-center will-change-transform">
                <div className="relative flex-shrink-0 w-[max(100vw,132.2vh)] h-[max(100vh,75.6vw)]">
                  <Scene src={scene73} alt="Elephants beneath an acacia at night" />
                </div>
              </motion.div>
              <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-[#2A0F0A] to-transparent z-10" />
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
            </motion.div>

          </motion.div>
        </motion.div>

        {/* ── Flash overlay — raw scroll, crisp cuts ───────────────────────────── */}
        <motion.div
          style={{ opacity: opacityOverlay }}
          className="absolute inset-0 bg-[#2A0F0A] pointer-events-none mix-blend-multiply z-20"
        />

        {/* ── LAYER 2 — Midground organic shapes (scroll parallax: -80vh) ──────── */}
        <motion.div style={{ y: yMid }} className="absolute inset-0 pointer-events-none z-10">
          <motion.div style={{ x: parallaxX_fg2, y: parallaxY_fg2 }} className="absolute inset-0">
            <motion.div
              animate={{ x: [0, 50, 0], y: [0, -30, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] right-[10%] w-[30vw] h-[20vw] bg-[#FFFFF0] opacity-[0.05] blur-3xl rounded-[100%_50%_70%_40%]"
            />
            <motion.div
              animate={{ x: [0, -40, 0], y: [0, 40, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-[30%] left-[5%] w-[40vw] h-[25vw] bg-[#FFBF00] opacity-[0.05] blur-3xl rounded-[40%_80%_60%_50%]"
            />
          </motion.div>
        </motion.div>

        {/* ── LAYER 3 — Foreground warm light + dust particles (-160vh) ────────── */}
        <motion.div style={{ y: yFore }} className="absolute inset-0 pointer-events-none z-10">
          {/* Warm light formation */}
          <motion.div
            style={{ x: parallaxX_fg1, y: parallaxY_fg1 }}
            className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full mix-blend-overlay pointer-events-auto cursor-pointer"
            whileHover={{ scale: 1.05, filter: "brightness(1.5)" }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FFFFF0] to-transparent opacity-30 blur-3xl" />
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[10%] rounded-full bg-gradient-to-br from-[#FFBF00] to-transparent opacity-40 blur-2xl"
            />
          </motion.div>

          {/* Dust particles + light beam */}
          <motion.div style={{ x: parallaxX_fg1, y: parallaxY_fg1 }} className="absolute inset-0 mix-blend-screen">
            {dustParticles.map((d, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-[#FFBF00]"
                style={{
                  width:   d.width  + 'px',
                  height:  d.height + 'px',
                  left:    d.left   + '%',
                  top:     d.top    + '%',
                  opacity: d.opacity,
                  filter:  `blur(${d.blur}px)`,
                }}
                animate={{ y: [0, d.dy, 0], x: [0, d.dx, 0], opacity: [0.05, 0.3, 0.05] }}
                transition={{ duration: d.dur, repeat: Infinity, ease: "easeInOut", delay: d.delay }}
              />
            ))}
            <motion.div
              className="absolute top-[-10%] left-[40%] w-[60vw] h-[150vh] bg-gradient-to-b from-[#FFFFF0]/5 to-transparent rotate-[-25deg] transform-origin-top blur-2xl"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
