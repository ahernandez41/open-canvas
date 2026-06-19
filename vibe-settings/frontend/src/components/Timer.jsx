import { useReducer, useEffect } from 'react'

// NOTE: useReducer groups related timer state into one object and updates it
// through named actions (reset, tick, start, pause) instead of many useState calls.
function timerReducer(state, action) {
  switch (action.type) {
    // NOTE: reset puts the timer back to the full duration and stops it.
    case 'reset':
      return {
        secondsLeft: action.totalSeconds,
        isRunning: false,
        isCompleted: false,
      }

    // NOTE: tick runs once per second while the timer is running.
    // If we're at 1 second or less, hit 0 and mark the session complete.
    case 'tick':
      if (state.secondsLeft <= 1) {
        return {
          secondsLeft: 0,
          isRunning: false,
          isCompleted: true,
        }
      }
      return {
        ...state,
        secondsLeft: state.secondsLeft - 1,
      }

    // NOTE: start resumes counting. If we were at 0:00, restart from full duration.
    case 'start':
      if (state.secondsLeft === 0) {
        return {
          secondsLeft: action.totalSeconds,
          isRunning: true,
          isCompleted: false,
        }
      }
      return {
        ...state,
        isRunning: true,
      }

    // NOTE: pause stops the interval but keeps the current time left.
    case 'pause':
      return {
        ...state,
        isRunning: false,
      }

    default:
      return state
  }
}

// NOTE: Timer shows mm:ss, with Start / Pause / Reset controls.
// durationMinutes comes from App.jsx — default 25, or from Set Vibe (e.g. 50).
export default function Timer({ durationMinutes = 25 }) {
  const totalSeconds = durationMinutes * 60

  // NOTE: state holds everything the timer needs in one place.
  const [state, dispatch] = useReducer(timerReducer, {
    secondsLeft: totalSeconds,
    isRunning: false,
    isCompleted: false,
  })

  const { secondsLeft, isRunning, isCompleted } = state

  // NOTE: when duration changes (e.g. user clicks Set Vibe), reset to the new length.
  useEffect(() => {
    dispatch({ type: 'reset', totalSeconds })
  }, [totalSeconds])

  // NOTE: countdown engine — only runs while isRunning is true.
  // setInterval fires every 1000ms (1 second) and dispatches 'tick'.
  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) return

    const interval = setInterval(() => {
      dispatch({ type: 'tick' })
    }, 1000)

    // NOTE: cleanup is critical — without clearInterval, timers stack up
    // and the countdown speeds up or keeps running after pause.
    return () => clearInterval(interval)
  }, [isRunning, secondsLeft])

  // NOTE: convert raw seconds to display format — 90 → "01:30"
  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60
  const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  // NOTE: handlers don't change state directly — they dispatch actions to the reducer.
  function handleStart() {
    dispatch({ type: 'start', totalSeconds })
  }

  function handlePause() {
    dispatch({ type: 'pause' })
  }

  function handleReset() {
    dispatch({ type: 'reset', totalSeconds })
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
      {/* NOTE: tabular-nums keeps digits from jumping as the time changes */}
      <p className={`text-6xl font-mono tabular-nums ${isCompleted ? 'text-blue-600' : 'text-blue-800'}`}>
        {display}
      </p>

      {isCompleted && (
        <p className="text-blue-600 text-lg">Session complete</p>
      )}

      <div className="flex gap-3">
        {/* NOTE: show Start when paused/stopped, Pause when running */}
        {!isRunning ? (
          <button
            type="button"
            onClick={handleStart}
            className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium"
          >
            {secondsLeft === 0 && !isCompleted ? 'Restart' : 'Start'}
          </button>
        ) : (
          <button
            type="button"
            onClick={handlePause}
            className="px-5 py-2 rounded-lg bg-blue-200 hover:bg-blue-300 text-blue-900 font-medium"
          >
            Pause
          </button>
        )}

        <button
          type="button"
          onClick={handleReset}
          className="px-5 py-2 rounded-lg bg-white border border-blue-300 hover:bg-blue-100 text-blue-900 font-medium"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
