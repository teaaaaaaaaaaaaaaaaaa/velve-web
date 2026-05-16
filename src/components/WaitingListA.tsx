import { useState, useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'

const START_COUNT = 1_247
const API_URL = resolveApiBaseUrl(import.meta.env.VITE_API_URL as string | undefined)

type Props = {
  logoRef?: React.RefObject<HTMLHeadingElement | null>
  subRef?: React.RefObject<HTMLParagraphElement | null>
}

function resolveApiBaseUrl(rawUrl?: string) {
  const cleaned = rawUrl?.trim().replace(/[;\/]+$/, '')

  if (!cleaned) {
    return 'https://api.velveapp.com'
  }

  try {
    return new URL(cleaned).toString().replace(/\/$/, '')
  } catch {
    return 'https://api.velveapp.com'
  }
}

function FlipNumber({ value }: { value: number }) {
  const prevRef = useRef(value)
  const [flipping, setFlipping] = useState(false)

  useEffect(() => {
    if (value !== prevRef.current) {
      prevRef.current = value
      setFlipping(true)
      const t = setTimeout(() => setFlipping(false), 420)
      return () => clearTimeout(t)
    }
  }, [value])

  return (
    <span className={`wla-num${flipping ? ' wla-num--tick' : ''}`}>
      {value.toLocaleString()}
    </span>
  )
}

export function WaitingListA({ logoRef }: Props) {
  const [email, setEmail] = useState('')
  const [focused, setFocused] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [count, setCount] = useState(START_COUNT)
  const [position, setPosition] = useState(0)

  // ── Simulated live counter ─────────────────────────────────────────
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>
    const tick = () => {
      if (Math.random() > 0.45) setCount(c => c + 1)
      t = setTimeout(tick, 12_000 + Math.random() * 28_000)
    }
    t = setTimeout(tick, 18_000 + Math.random() * 20_000)
    return () => clearTimeout(t)
  }, [])

  // ── Logo shake on keystroke (borrowed from Concept B) ──────────────
  const onKeyStroke = useCallback(() => {
    const logo = logoRef?.current
    if (!logo) return
    gsap.killTweensOf(logo, 'x,y,rotation')
    const x = (Math.random() - 0.5) * 7
    const y = (Math.random() - 0.5) * 2
    const r = (Math.random() - 0.5) * 0.8
    gsap.to(logo, {
      x,
      y,
      rotation: r,
      duration: 0.05,
      ease: 'none',
      onComplete: () =>
        gsap.to(logo, {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.22,
          ease: 'elastic.out(1, 0.42)',
        }),
    })
  }, [logoRef])

  // ── Submit ─────────────────────────────────────────────────────────
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@') || !email.includes('.') || submitting) return

    setError(null)
    setSubmitting(true)

    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 10_000)

    try {
      const res = await fetch(`${API_URL}/api/waitlist/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
        signal: controller.signal,
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Try again.')
      }

      const pos = typeof data.position === 'number' ? data.position : count + 1
      setPosition(pos)
      setCount(Math.max(count + 1, pos))
      setSubmitted(true)
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        setError('Request timed out. Please try again.')
      } else if (err instanceof TypeError) {
        setError('API is unreachable right now. Please check the API URL and try again.')
      } else {
        setError(err instanceof Error ? err.message : 'Network error.')
      }
    } finally {
      window.clearTimeout(timeout)
      setSubmitting(false)
    }
  }

  // ── Success state ──────────────────────────────────────────────────
  if (submitted) {
    return <ConfirmedView position={position} />
  }

  return (
    <div className="wla">
      <form className="wla__form" onSubmit={onSubmit} noValidate>
        <div
          className={`wla__field${focused ? ' wla__field--lit' : ''}${error ? ' wla__field--err' : ''}`}
        >
          <span className="wla__label">email</span>
          <input
            className="wla__input"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => {
              setEmail(e.target.value)
              onKeyStroke()
              if (error) setError(null)
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            autoComplete="email"
            spellCheck={false}
            disabled={submitting}
          />
          <span className="wla__underline" aria-hidden="true" />
        </div>

        <button
          className={`wla__btn${submitting ? ' wla__btn--loading' : ''}`}
          type="submit"
          disabled={submitting || !email}
        >
          <span className="wla__btn-text">
            {submitting ? 'sending…' : 'step inside'}
          </span>
          <span className="wla__btn-arrow" aria-hidden="true">→</span>
          <span className="wla__btn-bar" aria-hidden="true" />
        </button>

        {error && <p className="wla__error" role="alert">{error}</p>}
      </form>

      <p className="wla__tally">
        already <FlipNumber value={count} /> names on the list
      </p>

    </div>
  )
}

// ─── Confirmed view with dramatic number reveal ───────────────────────
function ConfirmedView({ position }: { position: number }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const numRef = useRef<HTMLSpanElement>(null)
  const lineRef = useRef<HTMLSpanElement>(null)
  const labelTopRef = useRef<HTMLSpanElement>(null)
  const labelBotRef = useRef<HTMLSpanElement>(null)
  const byeRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(labelTopRef.current, { opacity: 0, y: 10, duration: 0.5, ease: 'power3.out' })
      .fromTo(
        numRef.current,
        { opacity: 0, scale: 1.6, filter: 'blur(20px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.75, ease: 'power4.out' },
        '-=0.15'
      )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.55, ease: 'power3.out', transformOrigin: 'center' },
        '-=0.35'
      )
      .from(labelBotRef.current, { opacity: 0, y: -8, duration: 0.45, ease: 'power3.out' }, '-=0.25')
      .from(byeRef.current, { opacity: 0, y: 10, duration: 0.55, ease: 'power3.out' }, '-=0.15')
  }, [])

  return (
    <div className="wla wla--done" aria-live="polite" ref={wrapRef}>
      <span className="wla__you-are" ref={labelTopRef}>you are</span>
      <span className="wla__position" ref={numRef}>
        #{String(position).padStart(4, '0')}
      </span>
      <span className="wla__divider" ref={lineRef} aria-hidden="true" />
      <span className="wla__on-list" ref={labelBotRef}>on the list</span>
      <p className="wla__bye" ref={byeRef}>
        Check your inbox. We'll reach out when the doors open.
      </p>
    </div>
  )
}
