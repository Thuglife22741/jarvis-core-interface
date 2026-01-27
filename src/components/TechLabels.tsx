import { motion } from "framer-motion";

const TechLabels = () => {
  const labels = [
    { text: "AUDIO ANALYSIS: ACTIVE", x: "60%", y: "35%", align: "left" },
    { text: "JARVIS VOICE SYSTEM", x: "35%", y: "62%", align: "left", subtitle: "VER 3.0.1" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Audio Analysis Label - right side */}
      <motion.div
        className="absolute font-mono text-xs tracking-widest"
        style={{ right: "15%", top: "35%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <span className="text-jarvis-cyan jarvis-text-glow">AUDIO ANALYSIS: ACTIVE</span>
      </motion.div>

      {/* Jarvis Voice System Label - bottom left of center */}
      <motion.div
        className="absolute font-mono text-xs tracking-widest"
        style={{ left: "32%", bottom: "32%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <div className="text-jarvis-cyan jarvis-text-glow">JARVIS VOICE SYSTEM</div>
        <div className="text-jarvis-cyan/60 text-[10px] mt-1">VER 3.0.1</div>
      </motion.div>

      {/* Small technical text near particles */}
      <motion.div
        className="absolute font-mono text-[8px] tracking-wider text-jarvis-cyan/50"
        style={{ right: "28%", bottom: "38%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0.4, 0.6] }}
        transition={{ delay: 1, duration: 3, repeat: Infinity }}
      >
        <div>AUDIO: FREQUENCY SCANNING</div>
        <div className="mt-1">NEURAL: TASK COMPLETE</div>
      </motion.div>

      {/* Top center technical label */}
      <motion.div
        className="absolute font-mono text-[8px] tracking-wider text-jarvis-cyan/40"
        style={{ left: "50%", top: "28%", transform: "translateX(-50%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        INITIALIZING: VOICE PROCESSOR
      </motion.div>
    </div>
  );
};

export default TechLabels;
