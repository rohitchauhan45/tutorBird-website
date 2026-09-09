const APP_STORE_URL = 'https://apps.apple.com/'
const PLAY_STORE_URL = 'https://play.google.com/store/apps'

export default function StoreBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Download on the App Store"
        className="inline-flex rounded-md transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <AppStoreBadge />
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Get it on Google Play"
        className="inline-flex rounded-md transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <GooglePlayBadge />
      </a>
    </div>
  )
}

function AppStoreBadge() {
  return (
    <svg width="135" height="40" viewBox="0 0 135 40" aria-hidden="true">
      <rect width="135" height="40" rx="6" fill="#000" />
      <rect x="0.5" y="0.5" width="134" height="39" rx="5.5" fill="none" stroke="#fff" strokeOpacity="0.25" />
      <g transform="translate(10 8.2) scale(0.92)">
        <path
          fill="#fff"
          d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
        />
      </g>
      <text fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="7" x="38" y="15.5">
        Download on the
      </text>
      <text fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="600" x="38" y="29">
        App Store
      </text>
    </svg>
  )
}

function GooglePlayBadge() {
  return (
    <svg width="135" height="40" viewBox="0 0 135 40" aria-hidden="true">
      <rect width="135" height="40" rx="6" fill="#000" />
      <rect x="0.5" y="0.5" width="134" height="39" rx="5.5" fill="none" stroke="#fff" strokeOpacity="0.25" />
      <g transform="translate(9 8)">
        <path fill="#4285F4" d="M1.2 1.15c-.28.3-.45.78-.45 1.42v18.86c0 .64.17 1.12.46 1.42l.08.07L13.7 12.1v-.2L1.28 1.08l-.08.07z" />
        <path fill="#34A853" d="M17.55 15.95l-3.85-3.85v-.2l3.85-3.85.09.05 4.56 2.59c1.3.74 1.3 1.95 0 2.69l-4.56 2.59-.09-.02z" />
        <path fill="#FBBC04" d="M17.64 15.97L13.7 12 1.2 22.85c.43.45 1.13.5 1.92.06l14.52-6.94z" />
        <path fill="#EA4335" d="M17.64 8.03L3.12 1.09C2.33.64 1.63.7 1.2 1.15L13.7 12l3.94-3.97z" />
      </g>
      <text fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="7" letterSpacing="0.6" x="36" y="15">
        GET IT ON
      </text>
      <text fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="14" fontWeight="500" x="36" y="29">
        Google Play
      </text>
    </svg>
  )
}
