import { motion } from "framer-motion";

const OrbitalRing = () => {
  const particles = [
    { angle: 0, size: 6, label: "INITIALIZING: VOICE PROCESSOR" },
    { angle: 45, size: 4, label: null },
    { angle: 90, size: 5, label: null },
    { angle: 135, size: 4, label: null },
    { angle: 180, size: 6, label: null },
    { angle: 225, size: 4, label: "AUDIO: FREQUENCY SCANNING" },
    { angle: 270, size: 5, label: "NEURAL: TASK COMPLETE" },
    { angle: 315, size: 4, label: null },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Main orbital ring */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full border border-jarvis-cyan/30"
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Particles on the ring */}
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: `rotate(${particle.angle}deg) translateX(200px) rotate(-${particle.angle}deg)`,
            }}
          >
            <motion.div
              className="rounded-full jarvis-glow"
              style={{
                width: particle.size,
                height: particle.size,
                background: "hsl(195 100% 50%)",
                marginLeft: -particle.size / 2,
                marginTop: -particle.size / 2,
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          </div>
        ))}
      </motion.div>

      {/* Secondary smaller ring */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full border border-jarvis-cyan/20"
        animate={{ rotate: -360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[0, 90, 180, 270].map((angle, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: `rotate(${angle}deg) translateX(150px) rotate(-${angle}deg)`,
            }}
          >
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{
                background: "hsl(195 100% 50% / 0.6)",
                marginLeft: -4,
                marginTop: -4,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default OrbitalRing;
