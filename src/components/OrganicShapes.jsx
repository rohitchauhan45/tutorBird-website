export function PageHeroBlob() {
  return (
    <svg
      className="absolute -top-24 -right-28 w-[340px] md:w-[480px] h-auto pointer-events-none"
      viewBox="0 0 480 480"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M480 0H150C70 36 24 110 48 200c28 108 132 128 148 240 14 92 130 78 284 12V0Z"
        fill="#37A9BE"
      />
      <path
        d="M220 160c48 20 86-12 140 10 52 22 88 6 140 28"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.35"
      />
      <rect x="260" y="70" width="14" height="3" rx="1.5" fill="white" opacity="0.4" transform="rotate(18 260 70)" />
      <rect x="330" y="110" width="14" height="3" rx="1.5" fill="white" opacity="0.4" transform="rotate(-12 330 110)" />
      <rect x="390" y="80" width="14" height="3" rx="1.5" fill="white" opacity="0.4" transform="rotate(28 390 80)" />
    </svg>
  )
}

export function SectionBlob({ tone = 'teal', className = '' }) {
  const fill = tone === 'coral' ? '#DE7A72' : tone === 'violet' ? '#7B5CD6' : '#37A9BE'
  return (
    <svg className={`absolute pointer-events-none ${className}`} viewBox="0 0 400 400" fill="none" aria-hidden="true">
      <path
        d="M340 40c70 40 90 140 50 210-42 74-150 120-230 90C80 308 20 210 48 130 78 46 180-12 260 8c28 8 54 18 80 32Z"
        fill={fill}
        opacity="0.16"
      />
    </svg>
  )
}
