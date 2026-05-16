import { useEffect, useRef, useState } from 'react'

import { ImageTrailEffect } from './components/ImageTrailEffect'

// ── Switch concept by swapping the import ──────────────────────────
import { WaitingListA as WaitingList } from './components/WaitingListA'
// import { WaitingListB as WaitingList } from './components/WaitingListB'
// ──────────────────────────────────────────────────────────────────

const TRAIL_COLORS = ['#431A43', '#9DD3E4', '#CBDA63', '#2B2A2B']

function tintSvg(svg: string, color: string) {
  return svg
    .replace(/fill="black"/gi, `fill="${color}"`)
    .replace(/fill="#000000"/gi, `fill="${color}"`)
    .replace(/fill="#000"/gi, `fill="${color}"`)
}

export default function App() {
  const logoRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const [trailImages, setTrailImages] = useState<string[]>([])

  useEffect(() => {
    let cancelled = false
    let timeoutId = 0
    let idleId = 0

    const loadTrailImages = async () => {
      const [logo1, logo2, logo4, logo6] = await Promise.all([
        import('./logos/logo1.svg?raw'),
        import('./logos/logo2.svg?raw'),
        import('./logos/logo4.svg?raw'),
        import('./logos/logo6.svg?raw'),
      ])

      if (cancelled) return

      setTrailImages(
        [logo1.default, logo2.default, logo4.default, logo6.default].flatMap((svg) =>
          TRAIL_COLORS.map((color) => tintSvg(svg, color))
        )
      )
    }

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(() => {
        void loadTrailImages()
      })
    } else {
      timeoutId = window.setTimeout(() => {
        void loadTrailImages()
      }, 180)
    }

    return () => {
      cancelled = true

      if (idleId && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId)
      }

      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [])

  return (
    <>
      <ImageTrailEffect
        images={trailImages}
        config={{
          mouseThreshold: 96,
          imageLifespan: 420,
          minImageSize: 120,
          maxImageSize: 210,
          minMovementForImage: 14,
        }}
        className="landing-shell"
      >
        <div className="landing-halo landing-halo-left" />
        <div className="landing-halo landing-halo-right" />

        <section className="landing-card" aria-label="Velve coming soon">
          <div className="copy-wrap">
            <h1 ref={logoRef} className="logo-h1">Velve</h1>
            <p className="support-copy">
              Join the waitlist for Velve, an upcoming mobile app for fashion exchange.
            </p>
          </div>
          <WaitingList logoRef={logoRef} subRef={subRef} />
        </section>
      </ImageTrailEffect>
    </>
  )
}
