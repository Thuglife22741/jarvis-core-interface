'use client'

import { SplineScene } from "@/components/ui/spline-scene"

const SplineRobotBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Gradient overlay to blend robot with dark background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/90 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60 z-10" />
      
      {/* Cyan tint overlay for JARVIS aesthetic */}
      <div 
        className="absolute inset-0 z-10 mix-blend-overlay opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(195 100% 50% / 0.2) 0%, transparent 70%)'
        }}
      />
      
      {/* Spline 3D Robot */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default SplineRobotBackground
