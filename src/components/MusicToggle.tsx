import { useState, useRef, useCallback } from 'react'

type AudioHandle = {
  ctx: AudioContext
  master: GainNode
  oscs: OscillatorNode[]
}

function buildAmbient(): AudioHandle {
  const ctx = new AudioContext()

  const master = ctx.createGain()
  master.gain.setValueAtTime(0, ctx.currentTime)
  master.gain.linearRampToValueAtTime(0.16, ctx.currentTime + 2.2)
  master.connect(ctx.destination)

  const osc = (type: OscillatorType, freq: number, gain: number) => {
    const o = ctx.createOscillator()
    const g = ctx.createGain()
    o.type = type
    o.frequency.value = freq
    g.gain.value = gain
    o.connect(g).connect(master)
    o.start()
    return o
  }

  // Sub — brand deep (#431A43) → 55 Hz
  const sub = osc('sine', 55, 0.65)
  // Warm mid — brand highlight (#CBDA63) → 220 Hz
  const mid = osc('sine', 220, 0.28)
  // High shimmer — brand light (#9DD3E4) → 880 Hz
  const shimmer = osc('sine', 880, 0.06)
  // Overtone texture — fifth above sub
  const fifth = osc('sine', 82.5, 0.18)

  // Slow LFO breathes the mid frequency (makes it feel alive)
  const lfo = ctx.createOscillator()
  const lfoGain = ctx.createGain()
  lfo.type = 'sine'
  lfo.frequency.value = 0.14
  lfoGain.gain.value = 10
  lfo.connect(lfoGain).connect(mid.frequency)
  lfo.start()

  // Very slow LFO on shimmer gain (fades in and out)
  const lfo2 = ctx.createOscillator()
  const lfo2Gain = ctx.createGain()
  lfo2.type = 'sine'
  lfo2.frequency.value = 0.07
  lfo2Gain.gain.value = 0.04
  lfo2.connect(lfo2Gain).connect(shimmer.frequency)
  lfo2.start()

  return { ctx, master, oscs: [sub, mid, shimmer, fifth, lfo, lfo2] }
}

export function MusicToggle() {
  const [playing, setPlaying] = useState(false)
  const handleRef = useRef<AudioHandle | null>(null)

  const toggle = useCallback(() => {
    if (playing) {
      // Fade out then close
      const h = handleRef.current
      if (h) {
        h.master.gain.linearRampToValueAtTime(0, h.ctx.currentTime + 1.2)
        setTimeout(() => {
          h.oscs.forEach(o => {
            try { o.stop() } catch (_) { /* already stopped */ }
          })
          h.ctx.close()
          handleRef.current = null
        }, 1500)
      }
      setPlaying(false)
    } else {
      handleRef.current = buildAmbient()
      setPlaying(true)
    }
  }, [playing])

  return (
    <button
      className={`music-toggle${playing ? ' music-toggle--playing' : ''}`}
      onClick={toggle}
      aria-label={playing ? 'Pause ambient sound' : 'Play ambient sound'}
      title={playing ? 'pause' : 'ambient'}
    >
      <span className="music-toggle__vinyl" aria-hidden="true">
        <span className="music-toggle__groove" />
        <span className="music-toggle__center" />
      </span>
    </button>
  )
}
