export default function MuteButton({ volume, muted, onToggle }) {
  const showOuter = volume > 0.5 && !muted
  const showInner = volume > 0.3 && !muted
  const showSlash = muted || volume < 0.09

  return (
    <button
      type="button"
      onClick={onToggle}
      className="p-2 rounded-lg text-blue-800 hover:bg-blue-100"
      aria-label={muted ? 'Unmute' : 'Mute'}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 45 24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="transition-opacity duration-300"
          style={{ opacity: showOuter ? 1 : 0 }}
          d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z"
        />
        <path
          className="transition-opacity duration-300"
          style={{ opacity: showInner ? 1 : 0 }}
          d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5z"
        />
        <path d="M4 17h2.697L14 21.868V2.132L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z" />
        <path
          className="transition-opacity duration-300"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          style={{ opacity: showSlash ? 1 : 0 }}
          d="M 1,1 L 45,50"
        />
      </svg>
    </button>
  )
}
