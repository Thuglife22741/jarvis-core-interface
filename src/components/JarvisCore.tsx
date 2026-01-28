import { motion } from "framer-motion";
import { useElevenLabs } from "@/contexts/ElevenLabsContext";

const JarvisCore = () => {
  const { status, isSpeaking, isConnecting, toggleConversation } = useElevenLabs();
  const isActive = status === "connected";

  return (
    <button
      onClick={toggleConversation}
      className="relative flex items-center justify-center focus:outline-none cursor-pointer group"
      aria-label={isActive ? "End conversation" : "Start conversation"}
    >
      {/* Outer glow ring - enhanced when active */}
      <motion.div
        className="absolute w-40 h-40 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(195 100% 50% / 0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: isActive ? [1, 1.3, 1] : [1, 1.2, 1],
          opacity: isActive ? [0.6, 1, 0.6] : [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: isActive ? 1 : 2,
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
          scale: isActive ? [1, 1.2, 1] : [1, 1.1, 1],
          opacity: isActive ? [0.8, 1, 0.8] : [0.6, 1, 0.6],
        }}
        transition={{
          duration: isActive ? 1 : 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Speaking indicator ring */}
      {isSpeaking && (
        <motion.div
          className="absolute w-24 h-24 rounded-full border-2 border-primary"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      )}

      {/* Core */}
      <motion.div
        className="relative w-20 h-20 rounded-full jarvis-glow-strong transition-all duration-300 group-hover:scale-105"
        style={{
          background: isConnecting
            ? "radial-gradient(circle at 30% 30%, hsl(45 100% 70%), hsl(45 100% 50%) 50%, hsl(45 100% 40%) 100%)"
            : isActive
            ? "radial-gradient(circle at 30% 30%, hsl(120 100% 70%), hsl(120 100% 50%) 50%, hsl(120 100% 40%) 100%)"
            : "radial-gradient(circle at 30% 30%, hsl(195 100% 70%), hsl(195 100% 50%) 50%, hsl(195 100% 40%) 100%)",
        }}
        animate={{
          scale: isActive ? [1, 1.08, 1] : [1, 1.05, 1],
        }}
        transition={{
          duration: isActive ? 1 : 2,
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

      {/* Status text */}
      <motion.div
        className="absolute -bottom-8 text-xs font-mono text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {isConnecting ? "CONNECTING..." : isActive ? "LISTENING" : "CLICK TO TALK"}
      </motion.div>
    </button>
  );
};

export default JarvisCore;
