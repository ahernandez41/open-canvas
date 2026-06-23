import { useState } from 'react'
import { fetchVibe } from './api/vibe'
import Timer from './components/Timer'
import SoundscapePlayer from './components/SoundscapePlayer'

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
    <div className="min-h-screen bg-blue-50 text-blue-900 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8 text-blue-800 !text-blue-800">Open Canvas</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your vibe..."
          className="px-4 py-3 rounded-lg bg-white border border-blue-300 text-blue-900 placeholder-blue-400"
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
        <p className="mt-6 text-red-600">Error: {error}</p>
      )}

      {result && (
        <div className="mt-6 p-4 rounded-lg bg-white border border-blue-300 w-full max-w-md text-left shadow-sm">
          <p><strong>Soundscape:</strong> {result.soundscape}</p>
          <p><strong>Theme:</strong> {result.theme}</p>
          <p><strong>Timer:</strong> {result.timerMinutes} min</p>
          <p><strong>Check-ins:</strong> {result.checkIns}</p>
          <p className="mt-2 text-blue-700">{result.message}</p>
          <SoundscapePlayer soundscape={result.soundscape} />
        </div>
      )}

      <div className="mt-10 w-full flex justify-center">
        <Timer durationMinutes={timerMinutes} />
      </div>
    </div>
  )
}

export default App