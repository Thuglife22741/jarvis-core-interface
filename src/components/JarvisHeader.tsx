import { motion } from "framer-motion";
import { Wifi } from "lucide-react";

const JarvisHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
      {/* Left - Logo */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo Icon */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-jarvis-cyan/50" />
          <div className="w-4 h-4 rounded-full border-2 border-jarvis-cyan flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-jarvis-cyan" />
          </div>
          {/* Sound waves */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-6 rounded-full border border-jarvis-cyan/30" />
          </motion.div>
        </div>

        {/* Logo Text */}
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-jarvis-cyan jarvis-text-glow tracking-wider">
            JARVIS
          </span>
          <span className="text-xs text-jarvis-cyan/60 tracking-widest">
            VOICE SYSTEM 3.0
          </span>
        </div>
      </motion.div>

      {/* Right - Status */}
      <motion.div
        className="flex items-center gap-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-2 text-xs tracking-widest">
          <span className="text-muted-foreground">STATUS:</span>
          <motion.span
            className="text-jarvis-cyan jarvis-text-glow"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ONLINE
          </motion.span>
        </div>

        <div className="flex items-center gap-2 text-xs tracking-widest text-jarvis-cyan/80">
          <Wifi className="w-4 h-4" />
          <span>Connected</span>
        </div>
      </motion.div>
    </header>
  );
};

export default JarvisHeader;
