import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const TalkButton = () => {
  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-3 rounded-full border border-jarvis-cyan/30 bg-background/80 backdrop-blur-sm cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated icon background */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(195 100% 50% / 0.3), transparent)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{
            background: "radial-gradient(circle at 30% 30%, hsl(195 100% 70%), hsl(195 100% 50%))",
          }}
        >
          <div className="w-2 h-2 rounded-full bg-white/60" />
        </motion.div>
      </div>

      {/* Text and phone icon */}
      <div className="flex items-center gap-2 text-jarvis-cyan/90">
        <Phone className="w-4 h-4" />
        <span className="text-sm font-medium tracking-wide">Fale com Jarvis</span>
      </div>
    </motion.button>
  );
};

export default TalkButton;
