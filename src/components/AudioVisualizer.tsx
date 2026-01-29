import { motion } from "framer-motion";
import { useMemo } from "react";
import { useElevenLabs } from "@/contexts/ElevenLabsContext";

const AudioVisualizer = () => {
  const { status, isSpeaking, isConnecting } = useElevenLabs();
  const isActive = status === "connected";
  const isProcessing = isActive && !isSpeaking;

  const bars = useMemo(() => {
    const leftBars = [];
    const rightBars = [];
    
    // Generate bars for left side - thinner oscilloscope style
    for (let i = 0; i < 30; i++) {
      const distance = i;
      const maxHeight = Math.max(15, 90 - distance * 2.5);
      leftBars.push({
        id: `left-${i}`,
        height: maxHeight,
        delay: i * 0.03,
        x: -45 - i * 6,
      });
    }
    
    // Generate bars for right side
    for (let i = 0; i < 30; i++) {
      const distance = i;
      const maxHeight = Math.max(15, 90 - distance * 2.5);
      rightBars.push({
        id: `right-${i}`,
        height: maxHeight,
        delay: i * 0.03,
        x: 45 + i * 6,
      });
    }
    
    return { leftBars, rightBars };
  }, []);

  // Get animation properties based on state
  const getBarAnimation = (bar: { height: number }) => {
    if (isSpeaking) {
      // Agent speaking - rhythmic waves
      return {
        height: [bar.height * 0.4, bar.height * 1.4, bar.height * 0.6, bar.height * 1.2, bar.height * 0.4],
      };
    }
    if (isActive) {
      // Listening - high frequency, high amplitude
      return {
        height: [bar.height * 0.6, bar.height * 1.5, bar.height * 0.8, bar.height * 1.3, bar.height * 0.6],
      };
    }
    if (isConnecting) {
      // Connecting - building up
      return {
        height: [bar.height * 0.2, bar.height * 0.6, bar.height * 0.3, bar.height * 0.5, bar.height * 0.2],
      };
    }
    // Idle - subtle movement
    return {
      height: [bar.height * 0.2, bar.height * 0.5, bar.height * 0.3, bar.height * 0.4, bar.height * 0.2],
    };
  };

  const getBarDuration = () => {
    if (isSpeaking) return 0.3;
    if (isActive) return 0.25;
    if (isConnecting) return 0.5;
    return 0.9;
  };

  const getBarColor = () => {
    if (isSpeaking) {
      return "linear-gradient(to top, hsl(195 100% 60% / 0.9), hsl(195 100% 40% / 0.5))";
    }
    if (isActive) {
      return "linear-gradient(to top, hsl(120 100% 55% / 0.85), hsl(120 100% 40% / 0.4))";
    }
    if (isConnecting) {
      return "linear-gradient(to top, hsl(45 100% 55% / 0.8), hsl(45 100% 40% / 0.4))";
    }
    return "linear-gradient(to top, hsl(195 100% 50% / 0.6), hsl(195 100% 50% / 0.2))";
  };

  const getGlowEffect = () => {
    if (isSpeaking) return "0 0 8px hsl(195 100% 60% / 0.6)";
    if (isActive) return "0 0 12px hsl(120 100% 50% / 0.7)";
    if (isConnecting) return "0 0 6px hsl(45 100% 50% / 0.5)";
    return "none";
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Left side bars - oscilloscope style */}
      {bars.leftBars.map((bar, index) => (
        <motion.div
          key={bar.id}
          className="absolute"
          style={{
            left: `calc(50% + ${bar.x}px)`,
            width: "2px",
            background: getBarColor(),
            borderRadius: "1px",
            boxShadow: getGlowEffect(),
            opacity: 0.85,
          }}
          initial={{ height: bar.height * 0.2 }}
          animate={getBarAnimation(bar)}
          transition={{
            duration: getBarDuration(),
            repeat: Infinity,
            ease: "easeInOut",
            delay: bar.delay,
          }}
        />
      ))}

      {/* Right side bars - oscilloscope style */}
      {bars.rightBars.map((bar, index) => (
        <motion.div
          key={bar.id}
          className="absolute"
          style={{
            left: `calc(50% + ${bar.x}px)`,
            width: "2px",
            background: getBarColor(),
            borderRadius: "1px",
            boxShadow: getGlowEffect(),
            opacity: 0.85,
          }}
          initial={{ height: bar.height * 0.2 }}
          animate={getBarAnimation(bar)}
          transition={{
            duration: getBarDuration(),
            repeat: Infinity,
            ease: "easeInOut",
            delay: bar.delay,
          }}
        />
      ))}

      {/* Horizontal crosshair lines - fade based on state */}
      <div className="absolute w-full flex items-center justify-center">
        <motion.div
          className="absolute h-px"
          style={{
            left: "calc(50% + 220px)",
            width: "80px",
            background: isActive 
              ? "linear-gradient(to right, hsl(120 100% 50% / 0.6), transparent)"
              : "linear-gradient(to right, hsl(195 100% 50% / 0.4), transparent)",
          }}
          animate={{
            opacity: isActive ? [0.6, 1, 0.6] : [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: isActive ? 0.8 : 2,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute h-px"
          style={{
            right: "calc(50% + 220px)",
            width: "80px",
            background: isActive 
              ? "linear-gradient(to left, hsl(120 100% 50% / 0.6), transparent)"
              : "linear-gradient(to left, hsl(195 100% 50% / 0.4), transparent)",
          }}
          animate={{
            opacity: isActive ? [0.6, 1, 0.6] : [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: isActive ? 0.8 : 2,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
};

export default AudioVisualizer;
