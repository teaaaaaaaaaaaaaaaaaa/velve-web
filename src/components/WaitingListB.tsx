import { useState, useRef, useCallback, useEffect } from 'react'
import { gsap } from 'gsap'

type Phase = 'idle' | 'input' | 'submitting' | 'done'

type Props = {
  logoRef?: React.RefObject<HTMLHeadingElement | null>
  subRef?: React.RefObject<HTMLParagraphElement | null>
}

// Simulated queue position
const POSITION = 1_248

export function WaitingListB({ logoRef, subRef }: Props) {
  const [phase, setPhase] = useState<Phase>('idle')
  const [email, setEmail] = useState('')

  const tagRef = useRef<HTMLDivElement>(null)
  const flashRef = useRef<HTMLDivElement>(null)
  const purpleRef = useRef<HTMLDivElement>(null)
  const numRef = useRef<HTMLSpanElement>(null)
  const confirmRef = useRef<HTMLParagraphElement>(null)

  // Phase: idle → input
  const enterInput = useCallback(() => {
    setPhase('input')

    const logo = logoRef?.current
    const sub = subRef?.current

    if (logo) {
      gsap.to(logo, {
        y: -44,
        scale: 0.82,
        duration: 0.78,
        ease: 'power3.inOut',
      })
    }
    if (sub) {
      gsap.to(sub, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: 'power2.in',
      })
    }

    // Spotlight the center
    document.querySelector('.landing-shell')?.classList.add('shell--focused')
  }, [logoRef, subRef])

  // Micro-shake the logo on each keystroke
  const onKeyStroke = useCallback(() => {
    const logo = logoRef?.current
    if (!logo) return
    gsap.killTweensOf(logo, 'x')
    const x = (Math.random() - 0.5) * 8
    gsap.to(logo, {
      x,
      duration: 0.045,
      ease: 'none',
      onComplete: () =>
        gsap.to(logo, { x: 0, duration: 0.18, ease: 'elastic.out(1, 0.45)' }),
    })
  }, [logoRef])

  // Phase: input → submitting → done
  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (!email.includes('@')) return

      const tag = tagRef.current
      const flash = flashRef.current
      const purple = purpleRef.current
      const num = numRef.current
      if (!tag || !flash || !purple || !num) return

      setPhase('submitting')

      const tl = gsap.timeline()

      // Beat 1 — tag crushes + white flash
      tl.to(tag, {
        scaleY: 0,
        opacity: 0,
        duration: 0.24,
        ease: 'power4.in',
        transformOrigin: 'center 50%',
      })
        .to(flash, { opacity: 1, duration: 0.065 }, '-=0.04')
        .to(flash, { opacity: 0, duration: 0.14 })

      // Beat 2 — purple slam + number materialises
      tl.to(purple, { opacity: 1, duration: 0.18 }).fromTo(
        num,
        { scale: 2, opacity: 0, filter: 'blur(32px)' },
        { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.52, ease: 'power4.out' }
      )

      // Beat 3 — purple dissolves, typewriter begins
      tl.to(purple, { opacity: 0, duration: 0.9, delay: 0.8 }).call(() => {
        setPhase('done')
      })
    },
    [email]
  )

  // Start typewriter after phase becomes 'done'
  useEffect(() => {
    if (phase === 'done' && confirmRef.current) {
      typewriter(
        confirmRef.current,
        "You're in. The exchange begins when we open the doors."
      )
    }
  }, [phase])

  return (
    <>
      {/* ── Fixed-position full-screen overlays ── */}
      <div ref={flashRef} className="wlb-flash" aria-hidden="true" />
      <div ref={purpleRef} className="wlb-purple" aria-hidden="true">
        <span ref={numRef} className="wlb-purple__num">
          #{String(POSITION).padStart(4, '0')}
        </span>
      </div>

      {/* ── Idle: pulsing entry trigger ── */}
      {phase === 'idle' && (
        <button
          className="wlb-trigger"
          onClick={enterInput}
          aria-label="Enter the waiting list"
        >
          enter the exchange
          <span className="wlb-trigger__arr" aria-hidden="true">
            →
          </span>
        </button>
      )}

      {/* ── Input + Submitting: clothing tag form ── */}
      {(phase === 'input' || phase === 'submitting') && (
        <form onSubmit={onSubmit} noValidate>
          <div ref={tagRef} className="wlb-tag">
            <span className="wlb-tag__hole" aria-hidden="true" />
            <span className="wlb-tag__brand">velve</span>
            <div className="wlb-tag__row">
              <input
                className="wlb-tag__input"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                  onKeyStroke()
                }}
                autoFocus
                autoComplete="email"
                spellCheck={false}
              />
              <button
                type="submit"
                className={`wlb-tag__go${email.includes('@') ? ' wlb-tag__go--ready' : ''}`}
                aria-label="Submit email"
              >
                →
              </button>
            </div>
          </div>
        </form>
      )}

      {/* ── Done: typewriter confirmation ── */}
      {phase === 'done' && (
        <p ref={confirmRef} className="wlb-confirm" aria-live="polite" />
      )}
    </>
  )
}

function typewriter(el: HTMLElement, text: string) {
  el.textContent = ''
  let i = 0
  const tick = () => {
    if (i < text.length) {
      el.textContent += text[i++]
      setTimeout(tick, 32 + Math.random() * 28)
    }
  }
  tick()
}
