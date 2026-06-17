import { useReducer, useEffect } from 'react'


function timerReducer(state, action) {
  switch (action.type) {
    // Reset the timer to the total seconds and stop it
    case 'reset':
      return {
        secondsLeft: action.totalSeconds,
        isRunning: false,
        isCompleted: false,
      }
      // timer starts after the first tick is initialized.
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
    // timer starts. 
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
      // timer pauses.
    case 'pause':
      return {
        ...state,
        isRunning: false,
      }
    default:
      return state
  }
}
// timer component that displays the time left in minutes and seconds, there is a start, pause and reset button. When the timer reaches 0, it displays "Session complete" and the timer stops.
export default function Timer({ durationMinutes = 25 }) {
  const totalSeconds = durationMinutes * 60

  const [state, dispatch] = useReducer(timerReducer, {
    secondsLeft: totalSeconds,
    isRunning: false,
    isCompleted: false,
  })

  const { secondsLeft, isRunning, isCompleted } = state
 
  useEffect(() => {
    dispatch({ type: 'reset', totalSeconds })
  }, [totalSeconds])

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) return

    const interval = setInterval(() => {
      dispatch({ type: 'tick' })
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning, secondsLeft])

  // formatting the time left in minutes and seconds.
  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60
  const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  // handlers for the buttons
  function handleStart() {
    dispatch({ type: 'start', totalSeconds })
  }

  function handlePause() {
    dispatch({ type: 'pause' })
  }

  function handleReset() {
    dispatch({ type: 'reset', totalSeconds })
  }

  // rendering the timer component
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
      <p className={`text-6xl font-mono tabular-nums ${isCompleted ? 'text-violet-400' : 'text-white'}`}>
        {display}
      </p>

      {isCompleted && (
        <p className="text-violet-300 text-lg">Session complete</p>
      )}

      <div className="flex gap-3">
        {!isRunning ? (
          <button
            type="button"
            onClick={handleStart}
            className="px-5 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 font-medium"
          >
            {secondsLeft === 0 && !isCompleted ? 'Restart' : 'Start'}
          </button>
        ) : (
          <button
            type="button"
            onClick={handlePause}
            className="px-5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 font-medium"
          >
            Pause
          </button>
        )}

        <button
          type="button"
          onClick={handleReset}
          className="px-5 py-2 rounded-lg bg-slate-800 border border-slate-600 hover:bg-slate-700 font-medium"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
