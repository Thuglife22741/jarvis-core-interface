import { motion } from "framer-motion";
import { useElevenLabs } from "@/contexts/ElevenLabsContext";

const TechLabels = () => {
  const { status, isSpeaking, isConnecting } = useElevenLabs();
  const isActive = status === "connected";
  const isProcessing = isActive && !isSpeaking;

  const getStatusColor = () => {
    if (isSpeaking) return "hsl(195 100% 60%)";
    if (isActive) return "hsl(120 100% 55%)";
    if (isConnecting) return "hsl(45 100% 55%)";
    return "hsl(195 100% 50%)";
  };

  const getStatusGlow = () => {
    if (isSpeaking) return "0 0 10px hsl(195 100% 60% / 0.8)";
    if (isActive) return "0 0 10px hsl(120 100% 50% / 0.8)";
    if (isConnecting) return "0 0 10px hsl(45 100% 50% / 0.8)";
    return "0 0 8px hsl(195 100% 50% / 0.5)";
  };

  const getAudioStatus = () => {
    if (isSpeaking) return "OUTPUT: TRANSMITTING";
    if (isActive) return "INPUT: RECORDING";
    if (isConnecting) return "AUDIO: INITIALIZING";
    return "AUDIO: STANDBY";
  };

  const getNeuralStatus = () => {
    if (isProcessing) return "NEURAL: PROCESSING...";
    if (isSpeaking) return "NEURAL: GENERATING";
    if (isActive) return "NEURAL: ANALYZING";
    return "NEURAL: READY";
  };

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
        <motion.span 
          style={{ 
            color: getStatusColor(),
            textShadow: getStatusGlow(),
          }}
          animate={{
            opacity: isActive ? [0.8, 1, 0.8] : 1,
          }}
          transition={{
            duration: 0.8,
            repeat: isActive ? Infinity : 0,
          }}
        >
          {getAudioStatus()}
        </motion.span>
      </motion.div>

      {/* Jarvis Voice System Label - bottom left of center */}
      <motion.div
        className="absolute font-mono text-xs tracking-widest"
        style={{ left: "32%", bottom: "32%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <motion.div 
          style={{ 
            color: getStatusColor(),
            textShadow: getStatusGlow(),
          }}
        >
          JARVIS VOICE SYSTEM
        </motion.div>
        <div className="text-muted-foreground text-[10px] mt-1">VER 3.0.1</div>
      </motion.div>

      {/* Small technical text near particles */}
      <motion.div
        className="absolute font-mono text-[8px] tracking-wider"
        style={{ 
          right: "28%", 
          bottom: "38%",
          color: isActive ? "hsl(120 100% 50% / 0.7)" : "hsl(195 100% 50% / 0.5)",
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isProcessing ? [0.5, 1, 0.5] : [0, 0.6, 0.4, 0.6],
        }}
        transition={{ 
          delay: isProcessing ? 0 : 1, 
          duration: isProcessing ? 0.5 : 3, 
          repeat: Infinity,
        }}
      >
        <div>{getAudioStatus()}</div>
        <div className="mt-1">{getNeuralStatus()}</div>
      </motion.div>

      {/* Top center technical label */}
      <motion.div
        className="absolute font-mono text-[8px] tracking-wider"
        style={{ 
          left: "50%", 
          top: "28%", 
          transform: "translateX(-50%)",
          color: isActive ? "hsl(120 100% 50% / 0.6)" : "hsl(195 100% 50% / 0.4)",
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isProcessing ? [0.6, 1, 0.6] : [0.3, 0.6, 0.3],
        }}
        transition={{ 
          duration: isProcessing ? 0.4 : 2, 
          repeat: Infinity,
        }}
      >
        {isConnecting 
          ? "ESTABLISHING CONNECTION..." 
          : isProcessing 
          ? "PROCESSING VOICE DATA..."
          : isSpeaking
          ? "GENERATING RESPONSE..."
          : isActive 
          ? "VOICE PROCESSOR: ACTIVE" 
          : "VOICE PROCESSOR: STANDBY"}
      </motion.div>

      {/* Processing indicator - only shown when processing */}
      {isProcessing && (
        <motion.div
          className="absolute font-mono text-[10px] tracking-wider"
          style={{ 
            left: "50%", 
            top: "22%", 
            transform: "translateX(-50%)",
            color: "hsl(120 100% 55%)",
            textShadow: "0 0 15px hsl(120 100% 50% / 0.8)",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: [0.7, 1, 0.7],
            y: 0,
          }}
          transition={{ 
            opacity: { duration: 0.5, repeat: Infinity },
            y: { duration: 0.3 },
          }}
        >
          ◆ AI COMPUTING ◆
        </motion.div>
      )}
    </div>
  );
};

export default TechLabels;
