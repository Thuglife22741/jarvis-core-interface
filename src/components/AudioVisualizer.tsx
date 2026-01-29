import { motion } from "framer-motion";
import { useMemo } from "react";
import { useElevenLabs } from "@/contexts/ElevenLabsContext";

const AudioVisualizer = () => {
  const { status, isSpeaking } = useElevenLabs();
  const isActive = status === "connected";
  const bars = useMemo(() => {
    const leftBars = [];
    const rightBars = [];
    
    // Generate bars for left side
    for (let i = 0; i < 25; i++) {
      const distance = i;
      const maxHeight = Math.max(20, 80 - distance * 2);
      leftBars.push({
        id: `left-${i}`,
        height: maxHeight,
        delay: i * 0.05,
        x: -50 - i * 8,
      });
    }
    
    // Generate bars for right side
    for (let i = 0; i < 25; i++) {
      const distance = i;
      const maxHeight = Math.max(20, 80 - distance * 2);
      rightBars.push({
        id: `right-${i}`,
        height: maxHeight,
        delay: i * 0.05,
        x: 50 + i * 8,
      });
    }
    
    return { leftBars, rightBars };
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Left side bars */}
      {bars.leftBars.map((bar) => (
        <motion.div
          key={bar.id}
          className="absolute w-1"
          style={{
            left: `calc(50% + ${bar.x}px)`,
            background: isActive 
              ? "linear-gradient(to top, hsl(120 100% 50% / 0.9), hsl(120 100% 50% / 0.4))"
              : "linear-gradient(to top, hsl(195 100% 50% / 0.8), hsl(195 100% 50% / 0.3))",
            borderRadius: "2px",
            boxShadow: isActive ? "0 0 10px hsl(120 100% 50% / 0.5)" : undefined,
          }}
          animate={{
            height: isActive 
              ? [bar.height * 0.5, bar.height * 1.3, bar.height * 0.7, bar.height * 1.1, bar.height * 0.5]
              : [bar.height * 0.3, bar.height, bar.height * 0.5, bar.height * 0.8, bar.height * 0.3],
            opacity: isSpeaking ? [0.8, 1, 0.9, 1, 0.8] : 1,
          }}
          transition={{
            duration: isActive ? 0.4 + Math.random() * 0.2 : 0.8 + Math.random() * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bar.delay,
          }}
        />
      ))}

      {/* Right side bars */}
      {bars.rightBars.map((bar) => (
        <motion.div
          key={bar.id}
          className="absolute w-1"
          style={{
            left: `calc(50% + ${bar.x}px)`,
            background: isActive 
              ? "linear-gradient(to top, hsl(120 100% 50% / 0.9), hsl(120 100% 50% / 0.4))"
              : "linear-gradient(to top, hsl(195 100% 50% / 0.8), hsl(195 100% 50% / 0.3))",
            borderRadius: "2px",
            boxShadow: isActive ? "0 0 10px hsl(120 100% 50% / 0.5)" : undefined,
          }}
          animate={{
            height: isActive 
              ? [bar.height * 0.5, bar.height * 1.3, bar.height * 0.7, bar.height * 1.1, bar.height * 0.5]
              : [bar.height * 0.3, bar.height, bar.height * 0.5, bar.height * 0.8, bar.height * 0.3],
            opacity: isSpeaking ? [0.8, 1, 0.9, 1, 0.8] : 1,
          }}
          transition={{
            duration: isActive ? 0.4 + Math.random() * 0.2 : 0.8 + Math.random() * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bar.delay,
          }}
        />
      ))}

      {/* Horizontal crosshair lines */}
      <div className="absolute w-full flex items-center justify-center">
        <motion.div
          className="absolute h-px w-16"
          style={{
            left: "calc(50% + 250px)",
            background: "linear-gradient(to right, hsl(195 100% 50% / 0.5), transparent)",
          }}
        />
        <motion.div
          className="absolute h-px w-16"
          style={{
            right: "calc(50% + 250px)",
            background: "linear-gradient(to left, hsl(195 100% 50% / 0.5), transparent)",
          }}
        />
      </div>
    </div>
  );
};

export default AudioVisualizer;
