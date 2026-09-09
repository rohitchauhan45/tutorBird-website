import { UserRound } from 'lucide-react'

export default function FaceIcon({ size = 36, light = false, className = '' }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border shrink-0 ${
        light ? 'border-white/75 text-white' : 'border-raven/25 text-raven/55'
      } ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <UserRound size={Math.round(size * 0.52)} strokeWidth={1.6} />
    </span>
  )
}
