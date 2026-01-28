import GridBackground from "@/components/GridBackground";
import JarvisHeader from "@/components/JarvisHeader";
import JarvisCore from "@/components/JarvisCore";
import AudioVisualizer from "@/components/AudioVisualizer";
import OrbitalRing from "@/components/OrbitalRing";
import TechLabels from "@/components/TechLabels";
import { ElevenLabsProvider } from "@/contexts/ElevenLabsContext";

const Index = () => {
  return (
    <ElevenLabsProvider>
      <div className="relative min-h-screen w-full bg-background overflow-hidden">
        {/* Background grid */}
        <GridBackground />

        {/* Header */}
        <JarvisHeader />

        {/* Main content - centered */}
        <main className="relative flex items-center justify-center min-h-screen">
          {/* Orbital rings and particles */}
          <OrbitalRing />

          {/* Audio visualizer */}
          <AudioVisualizer />

          {/* Central core */}
          <JarvisCore />

          {/* Technical labels */}
          <TechLabels />
        </main>
      </div>
    </ElevenLabsProvider>
  );
};

export default Index;
