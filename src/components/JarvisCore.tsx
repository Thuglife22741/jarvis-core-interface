import { motion } from "framer-motion";

const JarvisCore = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow ring */}
      <motion.div
        className="absolute w-40 h-40 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(195 100% 50% / 0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Middle glow ring */}
      <motion.div
        className="absolute w-28 h-28 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(195 100% 50% / 0.2) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Core */}
      <motion.div
        className="relative w-20 h-20 rounded-full jarvis-glow-strong"
        style={{
          background: "radial-gradient(circle at 30% 30%, hsl(195 100% 70%), hsl(195 100% 50%) 50%, hsl(195 100% 40%) 100%)",
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Inner highlight */}
        <div
          className="absolute top-2 left-3 w-6 h-4 rounded-full opacity-60"
          style={{
            background: "radial-gradient(ellipse, hsl(195 100% 90%), transparent)",
          }}
        />
      </motion.div>
    </div>
  );
};

export default JarvisCore;
