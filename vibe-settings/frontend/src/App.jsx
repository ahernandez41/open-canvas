import { useState } from 'react'
import { fetchVibe } from './api/vibe'
import Timer from './components/Timer'
import SoundscapePlayer from './components/SoundscapePlayer'
import forestBackground from './assets/images/forest-canopy.gif'

function App() {
  const [message, setMessage] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [timerMinutes, setTimerMinutes] = useState(25)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const vibe = await fetchVibe(message)
      setResult(vibe)
      setTimerMinutes(vibe.timerMinutes)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen text-white flex flex-col items-center justify-center p-8 overflow-hidden">
      <img
        src={forestBackground}
        alt=""
        aria-hidden="true"
        className="fixed inset-0 -z-20 h-full w-full object-cover scale-105 pointer-events-none select-none"
      />
      <div className="fixed inset-0 -z-10 bg-black/45" aria-hidden="true" />

      <div className="relative z-10 w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8 text-white drop-shadow-md">Open Canvas</h1>

        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your vibe..."
            className="px-4 py-3 rounded-lg bg-white/90 border border-white/30 text-slate-900 placeholder-slate-500 backdrop-blur-sm"
          />
          <button
            type="submit"
            disabled={loading || !message.trim()}
            className="px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50 font-medium"
          >
            {loading ? 'Loading...' : 'Set Vibe'}
          </button>
        </form>

        {error && (
          <p className="mt-6 text-red-200 drop-shadow">Error: {error}</p>
        )}

        {result && (
          <div className="mt-6 p-4 rounded-lg bg-white/90 border border-white/30 w-full max-w-md text-left shadow-lg backdrop-blur-sm text-slate-900">
            <p><strong>Soundscape:</strong> {result.soundscape}</p>
            <p><strong>Theme:</strong> {result.theme}</p>
            <p><strong>Timer:</strong> {result.timerMinutes} min</p>
            <p><strong>Check-ins:</strong> {result.checkIns}</p>
            <p className="mt-2 text-blue-800">{result.message}</p>
            <SoundscapePlayer soundscape={result.soundscape} />
          </div>
        )}

        <div className="mt-10 w-full flex justify-center">
          <div className="p-6 rounded-xl bg-white/85 border border-white/30 backdrop-blur-sm shadow-lg">
            <Timer durationMinutes={timerMinutes} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App