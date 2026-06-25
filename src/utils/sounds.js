// src/utils/sounds.js
// 5-second custom timer alert using Web Audio API — no audio files needed

export const playTimerDone = () => {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)()

        // ── Helper: play one tone ──────────────────────────────────────
        const playTone = (freq, type, startAt, duration, volume = 0.45) => {
            const osc  = ctx.createOscillator()
            const gain = ctx.createGain()
            osc.connect(gain)
            gain.connect(ctx.destination)

            osc.type = type
            osc.frequency.setValueAtTime(freq, startAt)

            gain.gain.setValueAtTime(0, startAt)
            gain.gain.linearRampToValueAtTime(volume, startAt + 0.04)
            gain.gain.exponentialRampToValueAtTime(0.001, startAt + duration)

            osc.start(startAt)
            osc.stop(startAt + duration)
        }

        const t = ctx.currentTime

        // ── Section 1 (0.0s – 1.2s): Rising chime x3 ─────────────────
        // C5 → E5 → G5  (major chord arpeggio)
        playTone(523.25, "sine", t + 0.0,  0.55, 0.5)   // C5
        playTone(659.25, "sine", t + 0.28, 0.55, 0.5)   // E5
        playTone(783.99, "sine", t + 0.56, 0.65, 0.5)   // G5

        // ── Section 2 (1.2s – 2.4s): Warm bell repeat ─────────────────
        // Same chord, softer, adds warmth
        playTone(523.25, "sine", t + 1.2,  0.5,  0.3)
        playTone(659.25, "sine", t + 1.45, 0.5,  0.3)
        playTone(783.99, "sine", t + 1.70, 0.6,  0.35)

        // ── Section 3 (2.4s – 3.5s): High shimmer ─────────────────────
        // C6 sparkle
        playTone(1046.5, "sine",     t + 2.4,  0.4,  0.2)   // C6
        playTone(1318.5, "sine",     t + 2.65, 0.4,  0.2)   // E6
        playTone(1046.5, "triangle", t + 2.9,  0.5,  0.15)  // C6 triangle

        // ── Section 4 (3.5s – 4.3s): Deep resonant pulse ─────────────
        // C4 low boom — satisfying "done" feeling
        playTone(261.63, "sine", t + 3.5, 0.7, 0.45)   // C4
        playTone(329.63, "sine", t + 3.6, 0.6, 0.25)   // E4 harmony

        // ── Section 5 (4.3s – 5.0s): Gentle fade-out chord ───────────
        // Full C major chord together, fades out
        playTone(523.25, "sine", t + 4.3, 0.65, 0.2)   // C5
        playTone(659.25, "sine", t + 4.3, 0.65, 0.15)  // E5
        playTone(783.99, "sine", t + 4.3, 0.65, 0.1)   // G5

    } catch (err) {
        console.warn("Audio playback failed:", err)
    }
}