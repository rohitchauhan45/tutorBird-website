const DASHES = [
  { x: 430, y: 70, r: 22 },
  { x: 510, y: 118, r: -18 },
  { x: 590, y: 64, r: 8 },
  { x: 670, y: 132, r: 34 },
  { x: 740, y: 88, r: -12 },
  { x: 480, y: 210, r: 16 },
  { x: 620, y: 188, r: -28 },
  { x: 780, y: 176, r: 10 },
  { x: 540, y: 300, r: 40 },
  { x: 710, y: 268, r: -8 },
  { x: 830, y: 240, r: 24 },
  { x: 460, y: 390, r: -22 },
  { x: 640, y: 360, r: 14 },
  { x: 800, y: 340, r: -30 },
  { x: 560, y: 470, r: 6 },
  { x: 730, y: 450, r: 20 },
]

export function HeroBackdrop() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg
        className="absolute -top-32 right-[-22%] md:right-[-10%] w-[150%] md:w-[68%] max-w-none h-auto"
        viewBox="0 0 900 860"
        fill="none"
      >
        <path
          d="M900 0H340C250 28 168 78 148 178c-22 112 86 148 70 268-16 118-148 142-86 262 58 112 248 142 430 86 168-52 278-168 338-320V0Z"
          fill="#37A9BE"
        />
        <path
          d="M900 0H520C430 40 380 110 400 210c24 118 140 130 128 250-10 96-8 150 92 210 92 56 200 40 280-24V0Z"
          fill="#1E8AA0"
          opacity="0.28"
        />
        <path
          d="M430 250c70 28 118-18 188 8 72 28 118 8 190 42"
          stroke="white"
          strokeWidth="3.2"
          strokeLinecap="round"
          opacity="0.38"
        />
        <path
          d="M500 430c54 22 96-10 150 16 58 28 102 6 168 32"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.28"
        />
        {DASHES.map((d, i) => (
          <rect
            key={i}
            x={d.x}
            y={d.y}
            width="16"
            height="3.2"
            rx="1.6"
            fill="white"
            opacity="0.38"
            transform={`rotate(${d.r} ${d.x} ${d.y})`}
          />
        ))}
      </svg>

      <svg
        className="absolute -bottom-28 -right-20 w-[320px] md:w-[420px] h-auto"
        viewBox="0 0 420 420"
        fill="none"
      >
        <ellipse cx="300" cy="300" rx="210" ry="190" fill="#DE7A72" />
        <path
          d="M210 250c40 18 70-8 110 10 38 18 64 4 100 22"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    </div>
  )
}

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
