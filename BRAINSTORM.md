# Velve — Waiting List & Landing Page Brainstorm

> Desktop-first. Alternative fashion exchange. AI-powered. Audience: Gen Z + early-millennial creatives who treat fashion like culture.

---

## Current State

- Full-screen photo background (fashion editorial)
- "Velve" in huge Ballet script + "is coming soon." below
- Logo trail follows the cursor (SVGs × 4 colors)
- Clean, dark, editorial

---

## Concept A — "The Thread" (Minimal, editorial)

**Feel:** A high-fashion brand's private sale page. Understated. Exclusive.

### Layout

```
[full-screen photo bg]

          Velve
     is coming soon.

  ┌─────────────────────────────┐
  │  your@email.com             │
  └─────────────────────────────┘
        [ Join the list ]

     Already 847 people waiting.
```

### Interaction

1. Input field has no border — just a single bottom line (1px white, 60% opacity)
2. On focus: the line extends left-to-right in a 300ms animation, color shifts to `#CBDA63` (brand highlight)
3. On submit:
   - The button dissolves
   - A number spins up like an old airport departure board (flip animation, using `@keyframes` on individual digit divs)
   - Text appears: **"You're #848 on the list."**
   - Below that in Inter light: *"We'll reach out when it's your turn."*
4. Counter updates with slight jitter to feel live (random +1 every 15–45s via JS)

### Typography hierarchy

- **Velve** — Ballet 14rem (current)
- **is coming soon.** — Ballet 2.8rem (current)
- **Email label / count** — Inter 300, 0.85rem, letter-spacing 0.12em, uppercase
- **Confirmation number** — Alte Haas Grotesk Bold, 3.5rem, `#CBDA63`

---

## Concept B — "The Exchange" (Wild, immersive, the main bet)

**Feel:** Entering a secret club. Your email becomes your identity in the Velve world. The page reacts to you.

### Initial state

Same as current — photo bg, Velve logo, cursor trail. But with one difference: **the email input is hidden.** 

A single line of text pulses gently at the bottom:

> *"Enter the exchange →"*

Clicking anywhere (or the arrow) triggers **Phase 1**.

---

### Phase 1 — "The Invitation" (on click)

- Background photo slowly zooms in via `scale(1.04)` CSS transition over 2s
- A spotlight vignette darkens the edges (radial-gradient overlay expanding from center)
- The "Velve / is coming soon" text gently slides up ~80px
- An email input fades in below the logo — styled as a **clothing label tag**:
  - Rectangle with slight shadow
  - Dotted border (like a real hang tag)
  - Font: Alte Haas Grotesk Regular
  - Placeholder: *"your email"* in lowercase

---

### Phase 2 — "Typing" (user types their email)

- Each character typed triggers a tiny vibration on the Velve logo above (±2px random translateX, duration 80ms)
- The label/tag grows slightly in width as text fills it (smooth `width` transition)
- A subtle counter in the corner shows: *"typing..."* then *"ready"* when `@` and `.` are detected

---

### Phase 3 — "The Submit" (user presses Enter or button)

This is the hero moment. Three-beat sequence:

**Beat 1 (0–400ms):**
- The tag "tears off" — CSS clip-path animation splits it horizontally, top half flies up, bottom half drops
- White flash on the entire screen (opacity 0→1→0, total 200ms)

**Beat 2 (400–900ms):**
- The screen goes **solid brand purple** (`#431A43`)
- A large number slams in from blur: **"#0247"** in Alte Haas Grotesk Bold, filling ~60vw
- Simultaneously, the cursor trail spawns a burst of 12 logos radiating from center (all 4 colors)

**Beat 3 (900ms–2000ms):**
- The purple fades back to the photo
- The number shrinks to a small badge in the top-right corner
- Below the logo, the confirmation text types itself character by character (typewriter, no blinking cursor):
  *"You're in. The exchange begins when we open the doors."*

---

### Visual details for Concept B

| Element | Style |
|---|---|
| Email tag background | `#fffdf7` (paper) with `#431A43` dotted border |
| Submit trigger | Enter key OR a `→` button that appears after `@` is typed |
| Beat 2 background | `#431A43` full bleed |
| Confirmation number | Alte Haas Grotesk Bold, `#CBDA63` on purple |
| Typewriter text | Inter 300, white, 18px, 40ms per character |
| Badge (post-submit) | Small rounded rect, `#CBDA63` bg, `#431A43` text, Ballet font |

---

## Music

**Concept: Ambient vinyl**

A small **vinyl record icon** fixed in the top-left corner. 

- Starts paused (browser doesn't allow autoplay with sound)
- On click: record starts rotating (`animation: spin 3s linear infinite`)
- Fade in audio via Web Audio API `GainNode.linearRampToValueAtTime` over 2s (no jarring start)
- On second click: rotation stops, audio fades out over 1s

**Audio style:** Ambient lo-fi, no vocals. Something like:
- Subtle crackle/vinyl noise (adds texture without distraction)
- Slow chord pad — something that feels like editorial fashion, not EDM
- Loop point that's inaudible (crossfade)
- File: host a 60–90s `.mp3` or `.ogg` in `/public/ambient.mp3` (~1.5MB max)

**Alternative — generative audio:**
Use the Web Audio API to generate an ambient drone from scratch:
- Three oscillators at frequencies derived from brand colors (synesthetic mapping)
- `#431A43` → low drone ~55Hz
- `#9DD3E4` → high shimmer ~880Hz at very low gain
- `#CBDA63` → mid warmth ~220Hz
- No external file needed — fully generative, 0KB overhead

---

## Small Details Worth Adding

- **Custom cursor:** Replace browser cursor with a small `×` in Ballet font. The trail makes the regular cursor feel wrong. Size: 20px, color: white at 80%.
- **Background parallax on scroll:** Even though it's a single page, if someone scrolls down to reveal the waiting list, the photo moves at 0.6× speed (CSS `background-attachment: fixed` or JS for more control)
- **OG image:** Create a static `og-image.jpg` — the Velve wordmark in Ballet over one of the photos. Ensures social shares look editorial, not blank.
- **Grain overlay:** A subtle noise texture (SVG filter or a tiled PNG at 3% opacity) over everything gives a film/editorial quality that matches the brand.

---

## Recommended Path

1. **Now:** Background photo ✅ (done)
2. **Next:** Implement Concept B email input (Phase 1 only — no submit animation yet)
3. **Then:** Add music toggle (vinyl icon, ambient audio)
4. **Launch:** Add submit animation (Phase 2 + 3) — this is the "wow" moment for press/social
