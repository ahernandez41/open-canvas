import { useState, useRef, useEffect } from 'react'
import softRain from '../assets/audio/soft-rain.mp3'
import { Howl } from 'howler'

export default function SoundscapeTest() {
  const [playing, setPlaying] = useState(false)
  const sound = useRef(null)

  useEffect(() => {
    sound.current = new Howl({
      src: [softRain],
      loop: true,
      volume: 0.8,
    })

    return () => {
      sound.current?.unload()
    }
  }, [])

  function toggle() {
    if (playing) {
      sound.current?.pause()
      setPlaying(false)
    } else {
      sound.current?.play()
      setPlaying(true)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="mt-6 px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium"
    >
      {playing ? 'Pause' : 'Play'} Soft Rain
    </button>
  )
}
