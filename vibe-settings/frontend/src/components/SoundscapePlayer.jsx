import { useState, useRef, useEffect } from 'react'
import { Howl } from 'howler'
import { SOUNDSCAPE_MAP } from '../assets/audio/SoundscapeMap'
import MuteButton from './MuteButton'

const DEFAULT_SOUNDSCAPE = 'soft-rain'

function resolveSoundscape(soundscape) {
  const isKnown = Boolean(soundscape && SOUNDSCAPE_MAP[soundscape])
  return {
    isKnown,
    activeKey: isKnown ? soundscape : DEFAULT_SOUNDSCAPE,
  }
}

export default function SoundscapePlayer({ soundscape }) {
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [muted, setMuted] = useState(false)
  const sound = useRef(null)

  const { isKnown, activeKey } = resolveSoundscape(soundscape)
  const label = activeKey.replace(/-/g, ' ')
  const effectiveVolume = muted ? 0 : volume

  useEffect(() => {
    sound.current?.unload()

    const howl = new Howl({
      src: [SOUNDSCAPE_MAP[activeKey]],
      loop: true,
      volume: effectiveVolume,
    })
    sound.current = howl

    if (playing) {
      howl.play()
    }

    return () => {
      howl.unload()
      sound.current = null
    }
  }, [activeKey])

  useEffect(() => {
    if (!sound.current) return

    if (playing) {
      sound.current.play()
    } else {
      sound.current.pause()
    }
  }, [playing])

  useEffect(() => {
    sound.current?.volume(effectiveVolume)
  }, [effectiveVolume])

  return (
    <div className="mt-4 pt-4 border-t border-blue-200 flex flex-col items-center gap-3 w-full">
      {!isKnown && soundscape && (
        <p className="text-sm text-amber-600 text-center">
          Unknown soundscape &quot;{soundscape}&quot; — playing soft rain instead.
        </p>
      )}

      <p className="text-blue-800 font-medium capitalize">{label}</p>

      <div className="flex gap-3">
        {!playing ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium"
          >
            Play
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(false)}
            className="px-5 py-2 rounded-lg bg-blue-200 hover:bg-blue-300 text-blue-900 font-medium"
          >
            Pause
          </button>
        )}
      </div>

      <div className="flex items-center gap-3 w-full text-blue-900">
        <MuteButton volume={volume} muted={muted} onToggle={() => setMuted((prev) => !prev)} />
        <label className="flex flex-1 items-center gap-3">
          <span className="text-sm font-medium">Volume</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="flex-1 accent-blue-500"
          />
        </label>
      </div>
    </div>
  )
}
