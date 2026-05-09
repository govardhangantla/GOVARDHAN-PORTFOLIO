import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const MovingBackground = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement
  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Define transformations for parallax
  const gridX = useTransform(smoothX, [0, windowSize.width], [-30, 30]);
  const gridY = useTransform(smoothY, [0, windowSize.height], [-30, 30]);
  
  const iconX = useTransform(smoothX, [0, windowSize.width], [-60, 60]);
  const iconY = useTransform(smoothY, [0, windowSize.height], [-60, 60]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
      {/* 1. Perspective Animated Grid */}
      <motion.div 
        style={{ x: gridX, y: gridY }}
        className="absolute inset-[-10%] z-0 overflow-hidden opacity-20"
      >
        <div 
          className="absolute inset-0"
          style={{
            perspective: "1000px",
            willChange: "transform",
          }}
        >
          <motion.div
            animate={{
              translateY: ["0px", "100px"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[-100%] border-t border-cyan-500/30 bg-[linear-gradient(to_right,#0891b222_1px,transparent_1px),linear-gradient(to_bottom,#0891b222_1px,transparent_1px)] bg-[size:80px_80px]"
            style={{
              transform: "rotateX(70deg)",
              transformOrigin: "center top",
            }}
          />
        </div>
      </motion.div>

      {/* 2. Floating Tech Elements (Parallax) */}
      <motion.div style={{ x: iconX, y: iconY }} className="absolute inset-0 z-0">
        {["{ }", "</>", "[ ]", "01", "10", "=>"].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-500/10 font-mono text-4xl font-bold"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {icon}
          </motion.div>
        ))}
      </motion.div>

      {/* 3. Shooting Stars & Light Streaks */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`streak-${i}`}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{
            width: Math.random() * 300 + 200 + "px",
            top: Math.random() * 100 + "%",
            left: "-50%",
            transform: "rotate(-10deg)",
          }}
          animate={{
            left: ["-50%", "150%"],
          }}
          transition={{
            duration: Math.random() * 3 + 1,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}

      {/* 4. Dense Star Field */}
      <motion.div style={{ x: gridX, y: gridY }} className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full bg-white/30"
            style={{
              width: Math.random() * 2 + "px",
              height: Math.random() * 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -1000],
              opacity: [0, 0.8, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </motion.div>

      {/* 5. Glowing Nebula pulses */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[200px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[200px]"
      />

      {/* 6. Active Scanline */}
      <motion.div
        animate={{ translateY: ["-100vh", "100vh"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[2px] bg-cyan-500/5 z-10"
      />
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20"></div>
    </div>
  );
};

export default MovingBackground;
