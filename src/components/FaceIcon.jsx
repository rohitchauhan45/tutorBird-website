const TONES = {
  violet: 'bg-[#EDE6FB] text-violet',
  teal: 'bg-sky text-iridescence',
  coral: 'bg-[#F8E4E1] text-coral',
  sky: 'bg-sky text-iridescence',
}

const FALLBACK = ['violet', 'teal', 'coral', 'sky']

function toneFor(color, seed = '') {
  if (color && TONES[color]) return TONES[color]
  const code = seed.charCodeAt(0) || 0
  return TONES[FALLBACK[code % FALLBACK.length]]
}

export default function FaceIcon({
  size = 36,
  className = '',
  initial,
  color,
  name = '',
}) {
  const letter = (initial || name.trim().charAt(0) || '?').toUpperCase()
  const tone = toneFor(color, letter)

  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl font-bold shrink-0 ${tone} ${className}`}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.42) }}
      aria-hidden="true"
    >
      {letter}
    </span>
  )
}
