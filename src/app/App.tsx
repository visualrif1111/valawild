import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import ValaWildSafari from '../imports/ValaWildSafari/index';
import Visualrif2 from '../imports/Visualrif2222221/index';
import Visualrif3 from '../imports/Visualrif333333331/index';
import Frame63 from '../imports/Frame63/index';
import Frame66 from '../imports/Frame66/index';
import Frame65 from '../imports/Frame65/index';
import Frame68 from '../imports/Frame68/index';
import Frame70 from '../imports/Frame70-1/index';
import Frame73 from '../imports/Frame73/index';
import { Navigation } from './components/Navigation';

export default function App() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  });

  // The illustration stack moves up by exactly 800vh to transition from scene 1 to scene 9
  const yStack = useTransform(scrollYProgress, [0, 1], ["0vh", "-800vh"]);
  
  // Gentle parallax scaling for each scene
  const scaleBg1 = useTransform(scrollYProgress, [0, 1/8], [1, 1.15]);
  const scaleBg2 = useTransform(scrollYProgress, [0, 1/8, 2/8], [1.15, 1, 1.15]);
  const scaleBg3 = useTransform(scrollYProgress, [1/8, 2/8, 3/8], [1.15, 1, 1.15]);
  const scaleBg4 = useTransform(scrollYProgress, [2/8, 3/8, 4/8], [1.15, 1, 1.15]);
  const scaleBg5 = useTransform(scrollYProgress, [3/8, 4/8, 5/8], [1.15, 1, 1.15]);
  const scaleBg6 = useTransform(scrollYProgress, [4/8, 5/8, 6/8], [1.15, 1, 1.15]);
  const scaleBg7 = useTransform(scrollYProgress, [5/8, 6/8, 7/8], [1.15, 1, 1.15]);
  const scaleBg8 = useTransform(scrollYProgress, [6/8, 7/8, 1], [1.15, 1, 1.15]);
  const scaleBg9 = useTransform(scrollYProgress, [7/8, 1], [1.15, 1]);

  // OPTIMIZATION: Render culling logic
  // We use display: none for scenes that are definitely outside the viewport to prevent the browser 
  // from painting and calculating layout for the thousands of absolute SVGs off-screen.
  // We keep them active +/- 1/8th of the scroll progress to ensure transitions are smooth.
  const displayBg1 = useTransform(scrollYProgress, v => v <= 1.5/8 ? "flex" : "none");
  const displayBg2 = useTransform(scrollYProgress, v => v <= 2.5/8 ? "flex" : "none");
  const displayBg3 = useTransform(scrollYProgress, v => v >= 0.5/8 && v <= 3.5/8 ? "flex" : "none");
  const displayBg4 = useTransform(scrollYProgress, v => v >= 1.5/8 && v <= 4.5/8 ? "flex" : "none");
  const displayBg5 = useTransform(scrollYProgress, v => v >= 2.5/8 && v <= 5.5/8 ? "flex" : "none");
  const displayBg6 = useTransform(scrollYProgress, v => v >= 3.5/8 && v <= 6.5/8 ? "flex" : "none");
  const displayBg7 = useTransform(scrollYProgress, v => v >= 4.5/8 && v <= 7.5/8 ? "flex" : "none");
  const displayBg8 = useTransform(scrollYProgress, v => v >= 5.5/8 ? "flex" : "none");
  const displayBg9 = useTransform(scrollYProgress, v => v >= 6.5/8 ? "flex" : "none");

  // Mouse Parallax Logic
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

  // Parallax depths
  const parallaxX_bg = useTransform(smoothMouseX, [0, 1], ["-1%", "1%"]);
  const parallaxY_bg = useTransform(smoothMouseY, [0, 1], ["-1%", "1%"]);

  const parallaxX_fg1 = useTransform(smoothMouseX, [0, 1], ["-3%", "3%"]);
  const parallaxY_fg1 = useTransform(smoothMouseY, [0, 1], ["-3%", "3%"]);

  const parallaxX_fg2 = useTransform(smoothMouseX, [0, 1], ["4%", "-4%"]);
  const parallaxY_fg2 = useTransform(smoothMouseY, [0, 1], ["4%", "-4%"]);

  // Atmospheric dark overlay that subtly pulses during transitions for a cinematic blend
  const opacityOverlay = useTransform(
    scrollYProgress, 
    [
      0, 
      1/16, 2/16, 
      3/16, 4/16, 
      5/16, 6/16, 
      7/16, 8/16, 
      9/16, 10/16, 
      11/16, 12/16, 
      13/16, 14/16,
      15/16, 1
    ], 
    [
      0, 
      0.75, 0, 
      0.75, 0, 
      0.75, 0, 
      0.75, 0, 
      0.75, 0, 
      0.75, 0, 
      0.75, 0,
      0.75, 0
    ]
  );
  
  return (
    <div className="relative w-full h-[3600vh] bg-[#2A0F0A]">
      <Navigation />
      
      {/* Fixed viewport container for layers */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        
        {/* Mouse Parallax Wrapper for the whole background */}
        <motion.div style={{ y: parallaxY_bg }} className="absolute inset-0">
        
          {/* Layer 1: The Stacked Hero Illustrations */}
          {/* Added will-change-transform for composite layer hardware acceleration */}
          <motion.div style={{ y: yStack, x: parallaxX_bg }} className="absolute top-0 left-0 w-full h-[900vh] will-change-transform">
          
          {/* Scene 1 (Top) */}
          <motion.div style={{ display: displayBg1 }} className="absolute top-0 left-0 w-full h-[100vh] items-center justify-center overflow-hidden">
            <motion.div 
              style={{ scale: scaleBg1 }} 
              className="absolute inset-0 flex items-center justify-center will-change-transform"
            >
              {/* Maintains ~0.84 aspect ratio */}
              <div className="relative flex-shrink-0 w-[max(100vw,84.1vh)] h-[max(100vh,118.8vw)]">
                <ValaWildSafari />
              </div>
            </motion.div>
            
            {/* Dark atmospheric transition seam at the bottom */}
            <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#2A0F0A] to-transparent z-10" />
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
          </motion.div>

          {/* Scene 2 (Middle) */}
          <motion.div style={{ display: displayBg2 }} className="absolute top-[100vh] left-0 w-full h-[100vh] items-center justify-center overflow-hidden">
            <motion.div 
              style={{ scale: scaleBg2 }} 
              className="absolute inset-0 flex items-center justify-center will-change-transform"
            >
              {/* Maintains ~0.58 aspect ratio (2234/3834) */}
              <div className="relative flex-shrink-0 w-[max(100vw,58.2vh)] h-[max(100vh,171.6vw)]">
                <Visualrif2 />
              </div>
            </motion.div>
            
            {/* Dark atmospheric transition seams */}
            <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-[#2A0F0A] to-transparent z-10" />
            <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#2A0F0A] to-transparent z-10" />
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
          </motion.div>

          {/* Scene 3 (Middle) */}
          <motion.div style={{ display: displayBg3 }} className="absolute top-[200vh] left-0 w-full h-[100vh] items-center justify-center overflow-hidden">
            <motion.div 
              style={{ scale: scaleBg3 }} 
              className="absolute inset-0 flex items-center justify-center will-change-transform"
            >
              {/* Maintains ~0.58 aspect ratio */}
              <div className="relative flex-shrink-0 w-[max(100vw,58.2vh)] h-[max(100vh,171.6vw)]">
                <Visualrif3 />
              </div>
            </motion.div>
            
            {/* Dark atmospheric transition seams */}
            <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-[#2A0F0A] to-transparent z-10" />
            <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#2A0F0A] to-transparent z-10" />
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
          </motion.div>

          {/* Scene 4 (Middle) */}
          <motion.div style={{ display: displayBg4 }} className="absolute top-[300vh] left-0 w-full h-[100vh] items-center justify-center overflow-hidden">
            <motion.div 
              style={{ scale: scaleBg4 }} 
              className="absolute inset-0 flex items-center justify-center will-change-transform"
            >
              {/* Maintains ~1.398 aspect ratio (2316/1656) */}
              <div className="relative flex-shrink-0 w-[max(100vw,139.8vh)] h-[max(100vh,71.5vw)]">
                <Frame63 />
              </div>
            </motion.div>
            
            {/* Dark atmospheric transition seams */}
            <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-[#2A0F0A] to-transparent z-10" />
            <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#2A0F0A] to-transparent z-10" />
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
          </motion.div>

          {/* Scene 5 (Middle) */}
          <motion.div style={{ display: displayBg5 }} className="absolute top-[400vh] left-0 w-full h-[100vh] items-center justify-center overflow-hidden">
            <motion.div 
              style={{ scale: scaleBg5 }} 
              className="absolute inset-0 flex items-center justify-center will-change-transform"
            >
              {/* Maintains ~0.669 aspect ratio for portrait vectors */}
              <div className="relative flex-shrink-0 w-[max(100vw,66.9vh)] h-[max(100vh,149.5vw)]">
                <Frame66 />
              </div>
            </motion.div>
            
            {/* Dark atmospheric transition seams */}
            <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-[#2A0F0A] to-transparent z-10" />
            <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#2A0F0A] to-transparent z-10" />
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
          </motion.div>

          {/* Scene 6 (Middle) */}
          <motion.div style={{ display: displayBg6 }} className="absolute top-[500vh] left-0 w-full h-[100vh] items-center justify-center overflow-hidden">
            <motion.div 
              style={{ scale: scaleBg6 }} 
              className="absolute inset-0 flex items-center justify-center will-change-transform"
            >
              {/* Maintains ~0.669 aspect ratio for portrait vectors */}
              <div className="relative flex-shrink-0 w-[max(100vw,66.9vh)] h-[max(100vh,149.5vw)]">
                <Frame65 />
              </div>
            </motion.div>
            
            {/* Dark atmospheric transition seams */}
            <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-[#2A0F0A] to-transparent z-10" />
            <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#2A0F0A] to-transparent z-10" />
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
          </motion.div>

          {/* Scene 7 (Middle) */}
          <motion.div style={{ display: displayBg7 }} className="absolute top-[600vh] left-0 w-full h-[100vh] items-center justify-center overflow-hidden">
            <motion.div 
              style={{ scale: scaleBg7 }} 
              className="absolute inset-0 flex items-center justify-center will-change-transform"
            >
              {/* Maintains ~0.612 aspect ratio for portrait vectors */}
              <div className="relative flex-shrink-0 w-[max(100vw,61.2vh)] h-[max(100vh,163.4vw)]">
                <Frame68 />
              </div>
            </motion.div>
            
            {/* Dark atmospheric transition seams */}
            <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-[#2A0F0A] to-transparent z-10" />
            <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#2A0F0A] to-transparent z-10" />
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
          </motion.div>

          {/* Scene 8 (Middle) */}
          <motion.div style={{ display: displayBg8 }} className="absolute top-[700vh] left-0 w-full h-[100vh] items-center justify-center overflow-hidden">
            <motion.div 
              style={{ scale: scaleBg8 }} 
              className="absolute inset-0 flex items-center justify-center will-change-transform"
            >
              {/* Maintains ~0.612 aspect ratio for portrait vectors */}
              <div className="relative flex-shrink-0 w-[max(100vw,61.2vh)] h-[max(100vh,163.4vw)]">
                <Frame70 />
              </div>
            </motion.div>
            
            {/* Dark atmospheric transition seams */}
            <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-[#2A0F0A] to-transparent z-10" />
            <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#2A0F0A] to-transparent z-10" />
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
          </motion.div>

          {/* Scene 9 (Bottom) */}
          <motion.div style={{ display: displayBg9 }} className="absolute top-[800vh] left-0 w-full h-[100vh] items-center justify-center overflow-hidden">
            <motion.div 
              style={{ scale: scaleBg9 }} 
              className="absolute inset-0 flex items-center justify-center will-change-transform"
            >
              {/* Maintains ~1.322 aspect ratio (2020/1528) */}
              <div className="relative flex-shrink-0 w-[max(100vw,132.2vh)] h-[max(100vh,75.6vw)]">
                <Frame73 />
              </div>
            </motion.div>
            
            {/* Dark atmospheric transition seam at the top */}
            <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-[#2A0F0A] to-transparent z-10" />
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
          </motion.div>

        </motion.div>
        </motion.div>

        {/* Ambient Overlay Layer: Shadows & atmospheric gradients */}
        <motion.div 
          style={{ opacity: opacityOverlay }}
          className="absolute inset-0 bg-[#2A0F0A] pointer-events-none mix-blend-multiply z-20"
        />

        {/* Layer 2: Abstract Sun / Light Formation */}
        <motion.div 
          style={{ x: parallaxX_fg1, y: parallaxY_fg1 }}
          className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full mix-blend-overlay pointer-events-auto cursor-pointer"
          whileHover={{ scale: 1.05, filter: "brightness(1.5)" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FFFFF0] to-transparent opacity-30 blur-3xl"></div>
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[10%] rounded-full bg-gradient-to-br from-[#FFBF00] to-transparent opacity-40 blur-2xl"
          ></motion.div>
        </motion.div>

        {/* Layer 3: Floating organic glassmorphic shapes layer (Background air currents) */}
        <motion.div style={{ x: parallaxX_fg2, y: parallaxY_fg2 }} className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ x: [0, 50, 0], y: [0, -30, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.15, filter: "brightness(2)" }}
            className="absolute top-[10%] right-[10%] w-[30vw] h-[20vw] bg-[#FFFFF0] opacity-[0.05] blur-3xl rounded-[100%_50%_70%_40%] pointer-events-auto cursor-pointer"
          />
          <motion.div 
            animate={{ x: [0, -40, 0], y: [0, 40, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            whileHover={{ scale: 1.15, filter: "brightness(2)" }}
            className="absolute top-[30%] left-[5%] w-[40vw] h-[25vw] bg-[#FFBF00] opacity-[0.05] blur-3xl rounded-[40%_80%_60%_50%] pointer-events-auto cursor-pointer"
          />
        </motion.div>

        {/* Layer 4: Glass overlay and Light atmosphere layer (Dust particles) */}
        <motion.div style={{ x: parallaxX_fg1, y: parallaxY_fg1 }} className="absolute inset-0 pointer-events-none mix-blend-screen">
          {/* Ambient dust / floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#FFBF00]"
              style={{
                width: Math.random() * 15 + 5 + 'px',
                height: Math.random() * 15 + 5 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                opacity: Math.random() * 0.2 + 0.05,
                filter: `blur(${Math.random() * 4 + 2}px)`
              }}
              animate={{
                y: [0, -Math.random() * 100 - 50, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.05, 0.3, 0.05],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 10
              }}
            />
          ))}
          {/* Large glassmorphic light beam */}
          <motion.div 
            className="absolute top-[-10%] left-[40%] w-[60vw] h-[150vh] bg-gradient-to-b from-[#FFFFF0]/5 to-transparent rotate-[-25deg] transform-origin-top blur-2xl"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
      </div>
    </div>
  );
}