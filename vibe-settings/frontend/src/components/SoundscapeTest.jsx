import { useState, useRef, useEffect } from 'react'
import { Howl } from 'howler'
import { SOUNDSCAPE_MAP } from '../assets/audio/SoundscapeMap'

const DEFAULT_SOUNDSCAPE = 'soft-rain'

export default function SoundscapeTest({ soundscape = DEFAULT_SOUNDSCAPE }) {
  const [playing, setPlaying] = useState(false)
  const sound = useRef(null)

  const activeKey = SOUNDSCAPE_MAP[soundscape] ? soundscape : DEFAULT_SOUNDSCAPE
  const label = activeKey.replace(/-/g, ' ')

  useEffect(() => {
    sound.current?.unload()

    const src = SOUNDSCAPE_MAP[activeKey]
    sound.current = new Howl({
      src: [src],
      loop: true,
      volume: 0.8,
    })

    return () => {
      sound.current?.unload()
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
  }, [playing, activeKey])

  function toggle() {
    setPlaying((prev) => !prev)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="mt-6 px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium"
    >
      {playing ? 'Pause' : 'Play'} {label}
    </button>
  )
}
