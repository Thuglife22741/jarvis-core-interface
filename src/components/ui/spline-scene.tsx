'use client'

import { Suspense, lazy, useRef, useEffect, useCallback } from 'react'
import type { Application } from '@splinetool/runtime'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const splineRef = useRef<Application | null>(null)

  const onLoad = useCallback((splineApp: Application) => {
    splineRef.current = splineApp
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!splineRef.current) return

      // Normalize mouse position to -1 to 1 range
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1

      // Emit mouse move event to Spline scene
      splineRef.current.emitEvent('mouseHover', 'Robot')
      
      // Try to find and rotate the head/robot object
      try {
        const robot = splineRef.current.findObjectByName('Robot')
        if (robot) {
          robot.rotation.y = x * 0.5
          robot.rotation.x = y * 0.3
        }
      } catch {
        // Object might not be found, that's okay
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
        onLoad={onLoad}
      />
    </Suspense>
  )
}
