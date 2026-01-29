import { motion } from "framer-motion";
import { useElevenLabs } from "@/contexts/ElevenLabsContext";

const OrbitalRing = () => {
  const { status, isSpeaking } = useElevenLabs();
  const isActive = status === "connected";
  const isProcessing = isActive && !isSpeaking;

  const particles = [
    { angle: 0, size: 6 },
    { angle: 45, size: 4 },
    { angle: 90, size: 5 },
    { angle: 135, size: 4 },
    { angle: 180, size: 6 },
    { angle: 225, size: 4 },
    { angle: 270, size: 5 },
    { angle: 315, size: 4 },
  ];

  const getParticleColor = () => {
    if (isActive) return "hsl(120 100% 50%)";
    return "hsl(195 100% 50%)";
  };

  const getParticleGlow = () => {
    if (isActive) {
      return "0 0 10px hsl(120 100% 50% / 0.8), 0 0 20px hsl(120 100% 50% / 0.4)";
    }
    return "0 0 8px hsl(195 100% 50% / 0.6), 0 0 15px hsl(195 100% 50% / 0.3)";
  };

  // Orbital speed based on state
  const getOrbitDuration = (base: number) => {
    if (isProcessing) return base * 0.4; // Much faster when processing
    if (isSpeaking) return base * 0.6; // Faster when speaking
    if (isActive) return base * 0.7; // Faster when listening
    return base;
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Main orbital ring */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          border: `1px solid ${isActive ? 'hsl(120 100% 50% / 0.3)' : 'hsl(195 100% 50% / 0.25)'}`,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: getOrbitDuration(30),
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
              className="rounded-full"
              style={{
                width: isActive ? particle.size * 1.3 : particle.size,
                height: isActive ? particle.size * 1.3 : particle.size,
                background: getParticleColor(),
                marginLeft: -(isActive ? particle.size * 1.3 : particle.size) / 2,
                marginTop: -(isActive ? particle.size * 1.3 : particle.size) / 2,
                boxShadow: getParticleGlow(),
              }}
              animate={{
                opacity: isProcessing ? [0.6, 1, 0.6] : [0.5, 1, 0.5],
                scale: isProcessing ? [1, 1.5, 1] : [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: isProcessing ? 0.4 : 2,
                repeat: Infinity,
                delay: index * (isProcessing ? 0.05 : 0.2),
              }}
            />
          </div>
        ))}
      </motion.div>

      {/* Secondary smaller ring */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          border: `1px solid ${isActive ? 'hsl(120 100% 50% / 0.2)' : 'hsl(195 100% 50% / 0.15)'}`,
        }}
        animate={{ rotate: -360 }}
        transition={{
          duration: getOrbitDuration(25),
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
              className="rounded-full"
              style={{
                width: isActive ? 10 : 8,
                height: isActive ? 10 : 8,
                background: isActive ? "hsl(120 100% 50% / 0.7)" : "hsl(195 100% 50% / 0.6)",
                marginLeft: isActive ? -5 : -4,
                marginTop: isActive ? -5 : -4,
                boxShadow: isActive 
                  ? "0 0 8px hsl(120 100% 50% / 0.5)" 
                  : "0 0 5px hsl(195 100% 50% / 0.3)",
              }}
              animate={{
                opacity: isProcessing ? [0.5, 1, 0.5] : [0.3, 0.8, 0.3],
                scale: isProcessing ? [1, 1.4, 1] : [1, 1.1, 1],
              }}
              transition={{
                duration: isProcessing ? 0.3 : 1.5,
                repeat: Infinity,
                delay: index * (isProcessing ? 0.08 : 0.3),
              }}
            />
          </div>
        ))}
      </motion.div>

      {/* Innermost ring - only visible when active */}
      {isActive && (
        <motion.div
          className="absolute w-[180px] h-[180px] rounded-full"
          style={{
            border: "1px dashed hsl(120 100% 50% / 0.25)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: 360,
          }}
          transition={{
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            rotate: {
              duration: isProcessing ? 8 : 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {[0, 120, 240].map((angle, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: `rotate(${angle}deg) translateX(90px) rotate(-${angle}deg)`,
              }}
            >
              <motion.div
                className="rounded-full"
                style={{
                  width: 5,
                  height: 5,
                  background: "hsl(120 100% 60%)",
                  marginLeft: -2.5,
                  marginTop: -2.5,
                  boxShadow: "0 0 10px hsl(120 100% 50% / 0.8)",
                }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: index * 0.15,
                }}
              />
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default OrbitalRing;
