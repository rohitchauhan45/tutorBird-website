import FaceIcon from './FaceIcon.jsx'
import logoMark from '../assets/logo.png'
import {
  MousePointer2,
  Pencil,
  Highlighter,
  Type,
  Minus,
  Circle,
  Eraser,
  Undo2,
  Redo2,
  Sigma,
  Mic,
  Video,
  MonitorUp,
  CircleDot,
  PhoneOff,
  MessageSquare,
  FileText,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CreditCard,
  BadgeCheck,
  Search,
} from 'lucide-react'

export function HeroVisual() {
  return (
    <div className="relative h-[460px] md:h-[560px] w-full">
      <div className="absolute left-0 top-0 z-30 float-card">
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-3xl bg-white border border-raven/[0.06] shadow-soft flex items-center justify-center overflow-hidden p-0.5">
          <img src={logoMark} alt="Raven" className="w-full h-full object-contain scale-110" />
        </div>
      </div>

      {/* Main: Find a tutor */}
      <div className="absolute right-0 top-14 md:top-16 w-[88%] max-w-[440px] card p-4 md:p-5 float-card z-10">
        <div className="flex items-center justify-between mb-3">
          <p className="font-bold text-lg">Find a tutor</p>
          <span className="text-[11px] font-bold tracking-wide uppercase text-violet bg-violet/10 px-2.5 py-1 rounded-full">
            Near you
          </span>
        </div>

        <div className="rounded-xl bg-paper border border-raven/[0.06] px-3 py-2.5 mb-3 flex items-center gap-2">
          <Search size={14} className="text-raven/30 shrink-0" strokeWidth={2} aria-hidden="true" />
          <p className="text-sm text-raven/40 truncate">HSC Maths, debating, public speaking…</p>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {['HSC', 'Debating', 'Online', 'Verified'].map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                tag === 'HSC' ? 'bg-violet text-white' : 'bg-paper text-raven/55 border border-raven/[0.06]'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-2.5">
          {[
            { name: 'Amelia Hart', sub: 'Mathematics Advanced', meta: '4.9 · 1.2 km', color: 'violet', rate: '$70/hr' },
            { name: 'Sophie Ellis', sub: 'Debating & Speaking', meta: '4.8 · Online', color: 'coral', rate: '$65/hr' },
          ].map((t) => (
            <div key={t.name} className="rounded-xl bg-paper/80 border border-raven/[0.04] p-3 flex items-center gap-3">
              <FaceIcon size={40} name={t.name} color={t.color} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-bold leading-tight truncate">{t.name}</p>
                  <BadgeCheck size={14} className="text-violet shrink-0" strokeWidth={2} aria-hidden="true" />
                </div>
                <p className="text-[11px] text-raven/45 truncate">{t.sub}</p>
                <p className="text-[11px] text-raven/40 mt-0.5">{t.meta}</p>
              </div>
              <p className="text-xs font-bold text-iridescence shrink-0">{t.rate}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Float: in-app message */}
      <div className="absolute left-0 bottom-2 md:bottom-6 w-[78%] max-w-[270px] card p-4 float-card float-card-delayed z-20">
        <div className="flex items-center gap-2 mb-3">
          <MessageSquare size={14} className="text-violet" strokeWidth={2} aria-hidden="true" />
          <p className="font-bold text-sm">Message</p>
          <span className="ml-auto text-[10px] font-bold text-sheen bg-sky px-2 py-0.5 rounded-full">New</span>
        </div>
        <div className="space-y-2">
          <div className="rounded-2xl rounded-bl-md bg-paper px-3 py-2 text-[11px] text-raven/70 leading-snug max-w-[95%]">
            Hi Amelia, are you free Thu 4pm for Maths Ext?
          </div>
          <div className="rounded-2xl rounded-br-md bg-violet text-white px-3 py-2 text-[11px] leading-snug ml-auto max-w-[90%]">
            Yes! I’ve got a slot. Booked for Thursday.
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProfileVisual() {
  return (
    <div className="relative">
      <div className="blob blob-sky w-48 h-48 -left-6 -top-6" />
      <div className="card p-6 relative z-10">
        <div className="flex items-center gap-4 mb-5">
          <FaceIcon size={56} name="Daniel Park" color="teal" className="rounded-2xl" />
          <div>
            <h3 className="text-xl">Daniel Park</h3>
            <p className="text-sm text-raven/50">HSC Mathematics Extension</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-raven/55 mb-4 pb-4 border-b border-raven/10">
          <span>4.8 (39)</span>
          <span>Approx. 2 km</span>
          <span className="text-iridescence font-semibold">$70-$100/hr</span>
        </div>
        <div className="flex gap-4 text-xs font-bold tracking-wider uppercase mb-4 border-b border-raven/10">
          <span className="pb-2 border-b-2 border-iridescence">About</span>
          <span className="pb-2 text-raven/30">Experience</span>
          <span className="pb-2 text-raven/30">Reviews</span>
        </div>
        <p className="text-sm text-raven/60 leading-relaxed mb-4">BSc CS, UNSW. Extension maths specialist with Band 6 results. Online and in-person across the Inner West.</p>
        <div className="bg-paper rounded-xl p-3">
          <p className="text-xs text-raven/40 mb-1">Kevin W. · ★★★★★</p>
          <p className="text-sm italic text-raven/70">“Best maths tutor.”</p>
        </div>
      </div>
    </div>
  )
}

export function CalendarVisual() {
  return (
    <div className="relative">
      <div className="blob blob-teal w-40 h-40 -right-4 top-4" />
      <div className="card p-5 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <p className="font-bold">Session calendar</p>
          <span className="text-xs font-bold bg-iridescence text-white px-2.5 py-1 rounded-full">Booked</span>
        </div>
        <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] font-bold text-raven/35 mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <span key={`${d}${i}`}>{d}</span>)}
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {Array.from({ length: 28 }, (_, i) => {
            const on = [4, 9, 16, 22].includes(i)
            const tone = i === 9 ? 'bg-violet text-white' : i === 16 ? 'bg-iridescence text-white' : i === 22 ? 'bg-coral text-white' : 'bg-sky/80 text-raven'
            return (
              <div key={i} className={`h-8 rounded-lg text-xs font-bold flex items-center justify-center ${on ? tone : 'text-raven/30'}`}>
                {i + 1}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function MessageVisual() {
  return (
    <div className="relative">
      <div className="blob blob-violet w-36 h-36 -right-6 -top-4 opacity-50" />
      <div className="card p-5 max-w-sm ml-auto relative z-10">
        <div className="flex items-center gap-3 mb-5 pb-3 border-b border-raven/10">
          <FaceIcon size={40} name="Jonathan" color="teal" />
          <div>
            <p className="font-bold">Jonathan</p>
            <p className="text-xs text-raven/40 uppercase tracking-wider">Messages</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-paper w-[86%] p-3 rounded-2xl rounded-tl-sm text-sm text-raven/70">Hi Amelia, looking for HSC Maths Advanced support this term. Are you free Thursday?</div>
          <div className="bg-iridescence text-white w-[72%] p-3 rounded-2xl rounded-tr-sm ml-auto text-sm">Yes! I have 4:30pm open. Happy to chat.</div>
        </div>
      </div>
    </div>
  )
}

export function NearbyVisual() {
  return (
    <div className="card p-5">
      <p className="font-bold mb-4">Tutors close to home</p>
      {[
        { name: 'Sophie Ellis', km: '0.8 km', sub: 'Debating', color: 'coral' },
        { name: 'Amelia Hart', km: '1.2 km', sub: 'Mathematics Advanced', color: 'violet' },
        { name: 'James Okonkwo', km: '1.6 km', sub: 'English Advanced', color: 'teal' },
      ].map((t) => (
        <div key={t.name} className="flex items-center justify-between py-3 border-t border-raven/[0.08] first:border-0">
          <div className="flex items-center gap-3">
            <FaceIcon size={36} name={t.name} color={t.color} />
            <div>
              <p className="text-sm font-bold">{t.name}</p>
              <p className="text-xs text-raven/45">{t.sub}</p>
            </div>
          </div>
          <span className="text-sm font-bold text-iridescence">Approx. {t.km}</span>
        </div>
      ))}
    </div>
  )
}

export function PaymentsVisual() {
  return (
    <div className="relative">
      <div className="blob blob-coral w-32 h-32 -left-4 bottom-0" />
      <div className="card p-5 relative z-10 space-y-3">
        <div className="flex items-center justify-between">
          <p className="font-bold">Invoice</p>
          <span className="text-xs font-bold bg-sheen/20 text-iridescence px-2 py-1 rounded-full">Paid</span>
        </div>
        <p className="text-sm text-raven/50">HSC Physics · 1 hour with Amelia</p>
        <p className="text-3xl font-extrabold tracking-tight">$70.00</p>
        <div className="h-2 rounded-full bg-paper overflow-hidden">
          <div className="h-full w-full bg-iridescence rounded-full" />
        </div>
        <p className="text-xs text-raven/40">Paid in-app · reminder sent automatically</p>
      </div>
    </div>
  )
}

export function SafetyVisual() {
  const tutors = [
    { name: 'Amelia Hart', sub: 'Mathematics Advanced', verified: true, color: 'violet' },
    { name: 'Sophie Ellis', sub: 'Debating', verified: true, color: 'coral' },
    { name: 'James Okonkwo', sub: 'English Advanced', verified: false, color: 'teal' },
  ]
  return (
    <div className="relative">
      <div className="blob blob-violet w-36 h-36 -right-4 top-0 opacity-50" />
      <div className="card p-5 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <p className="font-bold">Tutor checks</p>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-violet bg-violet/10 px-2 py-1 rounded-full">
            <BadgeCheck size={12} strokeWidth={2.2} aria-hidden="true" /> Verified
          </span>
        </div>
        <div className="space-y-1">
          {tutors.map((t) => (
            <div key={t.name} className="flex items-center gap-3 py-3 border-t border-raven/[0.08] first:border-0">
              <FaceIcon size={40} name={t.name} color={t.color} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-bold leading-tight truncate">{t.name}</p>
                  {t.verified ? (
                    <BadgeCheck size={16} className="text-violet shrink-0" strokeWidth={2.2} aria-label="Identity verified" />
                  ) : null}
                </div>
                <p className="text-xs text-raven/45 mt-0.5">{t.sub}</p>
              </div>
              <span className={`text-[10px] font-bold shrink-0 ${t.verified ? 'text-violet' : 'text-raven/35'}`}>
                {t.verified ? 'ID verified' : 'Pending'}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-raven/40 mt-3 pt-3 border-t border-raven/10">
          Purple tick = identity verified, so you can tell who’s done it.
        </p>
      </div>
    </div>
  )
}

const BOARD_TOOLS = [
  { Icon: MousePointer2, label: 'Select' },
  { Icon: Pencil, label: 'Pen', on: true },
  { Icon: Highlighter, label: 'Highlight' },
  { Icon: Type, label: 'Text' },
  { Icon: Minus, label: 'Line' },
  { Icon: Circle, label: 'Shape' },
  { Icon: Sigma, label: 'Equation' },
  { Icon: Eraser, label: 'Eraser' },
]

function VideoTile({ name, role, tone = 'violet', compact = false }) {
  const bg = tone === 'violet'
    ? 'from-violet/70 to-[#3d2a78]'
    : 'from-iridescence/70 to-[#0f5a6a]'
  return (
    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${bg} ${compact ? 'h-[88px]' : 'h-[118px] md:h-[132px]'} w-full`}>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 30% 28%, rgba(255,255,255,0.35), transparent 42%)' }} />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/55 to-transparent" />
      <FaceIcon
        size={compact ? 40 : 48}
        name={name}
        color={tone === 'violet' ? 'violet' : 'teal'}
        className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2"
      />
      <div className="absolute left-2 bottom-1.5 right-2 flex items-end justify-between gap-1">
        <div className="min-w-0">
          <p className="text-[10px] font-bold text-white leading-tight truncate">{name}</p>
          <p className="text-[9px] text-white/70 uppercase tracking-wide">{role}</p>
        </div>
        <span className="flex items-center gap-1 shrink-0">
          <Mic size={10} className="text-white/80" strokeWidth={2.2} />
          <Video size={10} className="text-white/80" strokeWidth={2.2} />
        </span>
      </div>
    </div>
  )
}

function MathBoard({ tall = false }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-raven/10 ${tall ? 'min-h-[280px] h-[320px] md:h-[360px]' : 'min-h-[210px] h-[230px] md:h-[250px]'}`}
      style={{
        backgroundColor: '#f4f0e6',
        backgroundImage: 'linear-gradient(#e4ddd0 1px, transparent 1px), linear-gradient(90deg, #e4ddd0 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
      aria-hidden="true"
    >
      <div className="absolute left-3 top-2.5 right-3 z-10">
        <p className="text-[13px] font-semibold text-raven leading-tight truncate" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
          Q4. Angle in a semicircle
        </p>
        <p className="text-[10px] font-bold text-iridescence mt-0.5">HSC Maths Advanced</p>
      </div>

      <div className="absolute inset-0 pt-11 pb-9 px-1">
        <svg
          viewBox="0 0 520 260"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
        {/* Circle + diameter AB + point C: clean semicircle theorem */}
        <circle cx="155" cy="145" r="78" fill="rgba(123,92,214,0.06)" stroke="#7B5CD6" strokeWidth="2.2" />
        <line x1="77" y1="145" x2="233" y2="145" stroke="#232C3A" strokeWidth="1.7" />
        <path d="M77 145 L155 67 L233 145 Z" fill="rgba(123,92,214,0.1)" stroke="#232C3A" strokeWidth="1.7" />
        <line x1="155" y1="145" x2="155" y2="67" stroke="#1E8AA0" strokeWidth="1.4" strokeDasharray="4 3" />
        {/* Right-angle mark at C */}
        <path d="M145 77 L145 87 L155 87" fill="none" stroke="#DE7A72" strokeWidth="1.8" />
        <circle cx="155" cy="145" r="3.2" fill="#1E8AA0" />
        <circle cx="77" cy="145" r="3.8" fill="#232C3A" />
        <circle cx="233" cy="145" r="3.8" fill="#232C3A" />
        <circle cx="155" cy="67" r="4.2" fill="#7B5CD6" />
        <text x="64" y="164" fontSize="12" fill="#232C3A" fontFamily="Outfit, sans-serif" fontWeight="700">A</text>
        <text x="238" y="164" fontSize="12" fill="#232C3A" fontFamily="Outfit, sans-serif" fontWeight="700">B</text>
        <text x="160" y="60" fontSize="12" fill="#7B5CD6" fontFamily="Outfit, sans-serif" fontWeight="700">C</text>
        <text x="160" y="160" fontSize="11" fill="#1E8AA0" fontFamily="Outfit, sans-serif" fontWeight="600">O</text>

        {/* Notes: fully inside viewBox */}
        <rect x="290" y="52" width="200" height="26" rx="5" fill="#F6E27A" opacity="0.95" />
        <text x="302" y="70" fontSize="13" fill="#232C3A" fontFamily="Outfit, sans-serif" fontWeight="700">∠ACB = 90°</text>
        <text x="290" y="108" fontSize="13" fill="#232C3A" fontFamily="Outfit, sans-serif">1. AB is the diameter</text>
        <text x="290" y="130" fontSize="13" fill="#232C3A" fontFamily="Outfit, sans-serif">2. C is on the circle</text>
        <text x="290" y="152" fontSize="13" fill="#7B5CD6" fontFamily="Outfit, sans-serif" fontWeight="700">3. Angle at C is right</text>
        <text x="290" y="174" fontSize="13" fill="#232C3A" fontFamily="Outfit, sans-serif">4. Semicircle theorem</text>
        </svg>
      </div>

      <div className="absolute left-3 bottom-3 flex items-center gap-1.5 bg-white/90 rounded-full px-2 py-1 shadow-sm">
        <button type="button" className="w-6 h-6 rounded-full flex items-center justify-center text-raven/50" tabIndex={-1} aria-hidden="true">
          <ChevronLeft size={14} />
        </button>
        <span className="text-[10px] font-bold text-raven/60">Board 1 / 3</span>
        <button type="button" className="w-6 h-6 rounded-full flex items-center justify-center text-raven/50" tabIndex={-1} aria-hidden="true">
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  )
}

function ToolBar({ vertical = false }) {
  return (
    <div className={vertical
      ? 'flex flex-col items-center gap-1.5 p-2 bg-white border-r border-raven/10'
      : 'flex items-center gap-1 px-2 py-1.5 bg-white border-b border-raven/10 overflow-x-auto'
    }>
      {BOARD_TOOLS.map(({ Icon, label, on }) => (
        <span
          key={label}
          title={label}
          className={`w-8 h-8 rounded-lg flex items-center justify-center ${on ? 'bg-violet text-white' : 'text-raven/55 hover:bg-paper'}`}
        >
          <Icon size={15} strokeWidth={1.9} aria-hidden="true" />
        </span>
      ))}
      {!vertical && (
        <>
          <span className="w-px h-5 bg-raven/10 mx-1" />
          <span className="w-8 h-8 rounded-lg flex items-center justify-center text-raven/45">
            <Undo2 size={15} strokeWidth={1.9} aria-hidden="true" />
          </span>
          <span className="w-8 h-8 rounded-lg flex items-center justify-center text-raven/45">
            <Redo2 size={15} strokeWidth={1.9} aria-hidden="true" />
          </span>
          <span className="ml-auto hidden sm:flex items-center gap-1.5 pr-1">
            {['#232C3A', '#7B5CD6', '#1E8AA0', '#DE7A72', '#E6C15A'].map((c, i) => (
              <span
                key={c}
                className={`w-4 h-4 rounded-full border ${i === 1 ? 'border-raven scale-110' : 'border-white'}`}
                style={{ background: c }}
              />
            ))}
          </span>
        </>
      )}
      {vertical && (
        <div className="mt-auto flex flex-col gap-1.5 pb-1">
          {['#232C3A', '#7B5CD6', '#1E8AA0', '#DE7A72'].map((c, i) => (
            <span
              key={c}
              className={`w-4 h-4 rounded-full mx-auto ${i === 1 ? 'ring-2 ring-offset-1 ring-violet' : ''}`}
              style={{ background: c }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function AiPracticeCard() {
  return (
    <div className="card card-dark p-4 shadow-card">
      <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-sky mb-2">
        <Sparkles size={12} strokeWidth={2} aria-hidden="true" /> RavenAI
      </p>
      <p className="text-sm font-bold text-white mb-3 leading-snug">Unlimited classroom assistant.</p>
      <div className="grid grid-cols-2 gap-1.5">
        {['Explain step', 'Hint', 'Example', 'Check'].map((tag) => (
          <span key={tag} className="text-[10px] font-bold px-2 py-1.5 rounded-lg bg-white/10 text-white/85 text-center">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function AutoInvoiceCard() {
  return (
    <div className="card p-4 shadow-card">
      <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-coral mb-2">
        <CreditCard size={12} strokeWidth={2} aria-hidden="true" /> Auto-invoicing
      </p>
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-bold">Lesson bill</p>
        <span className="text-[10px] font-bold bg-sheen/20 text-iridescence px-2 py-0.5 rounded-full">Sent</span>
      </div>
      <p className="text-xs text-raven/50 mb-2">HSC Maths · Amelia Hart</p>
      <p className="text-2xl font-extrabold tracking-tight">$70.00</p>
      <p className="text-[10px] text-raven/40 mt-1.5">Sent automatically after the lesson</p>
    </div>
  )
}

export function ClassroomVisual() {
  return (
    <div className="relative w-full pb-14 md:pb-16">
      <div className="relative z-10 rounded-[1.35rem] overflow-hidden bg-[#161b22] shadow-card border border-white/10">
        <div className="flex items-center justify-between px-3.5 py-2 bg-[#12161c] border-b border-white/10">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-coral" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#e6c15a]" />
            <span className="w-2.5 h-2.5 rounded-full bg-sheen" />
            <p className="ml-1.5 text-xs font-bold text-white/85 truncate">Raven Classroom · HSC Maths Advanced</p>
          </div>
          <span className="flex items-center gap-1.5 shrink-0 text-[10px] font-bold uppercase tracking-wide text-sheen">
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
            Live 32:14
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[132px_1fr_118px] lg:grid-cols-[148px_1fr_132px]">
          <div className="p-2.5 flex flex-row md:flex-col gap-2 bg-[#1a2028]">
            <VideoTile name="Amelia Hart" role="Tutor" tone="violet" />
            <VideoTile name="Lina Chen" role="Student" tone="teal" />
          </div>

          <div className="flex flex-col min-w-0 bg-[#ece8df]">
            <ToolBar />
            <div className="p-2.5 flex-1">
              <MathBoard />
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-2 p-2.5 bg-[#1a2028] border-l border-white/5">
            <div className="rounded-xl bg-violet/20 border border-violet/30 p-2.5">
              <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-sky mb-1.5">
                <Sparkles size={11} /> RavenAI
              </p>
              <p className="text-[11px] text-white/75 leading-snug">Suggest a clearer mark for ∠ACB?</p>
            </div>
            <div className="flex-1 rounded-xl bg-white/5 border border-white/10 p-2.5 min-h-[100px]">
              <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-white/50 mb-2">
                <MessageSquare size={11} /> Chat
              </p>
              <p className="text-[11px] text-white/70 leading-snug mb-2">Can we mark the right angle first?</p>
              <p className="text-[11px] text-sky leading-snug">Yes. Highlighting it now.</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-2.5">
              <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-white/50 mb-2">
                <FileText size={11} /> Files
              </p>
              <p className="text-[11px] text-white/80 font-semibold">Q4 circle theorems.pdf</p>
              <p className="text-[10px] text-white/40 mt-0.5">Shared · 2 pages</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 py-2.5 bg-[#12161c] border-t border-white/10">
          {[
            { Icon: Mic, on: true },
            { Icon: Video, on: true },
            { Icon: MonitorUp, on: false },
            { Icon: CircleDot, on: false },
          ].map(({ Icon, on }, i) => (
            <span
              key={i}
              className={`w-9 h-9 rounded-full flex items-center justify-center ${on ? 'bg-white/10 text-white' : 'bg-white/5 text-white/50'}`}
            >
              <Icon size={15} strokeWidth={1.9} aria-hidden="true" />
            </span>
          ))}
          <span className="w-9 h-9 rounded-full flex items-center justify-center bg-coral text-white">
            <PhoneOff size={15} strokeWidth={1.9} aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-20 w-[56%] max-w-[230px] float-card">
        <AiPracticeCard />
      </div>
      <div className="absolute right-0 sm:right-2 bottom-2 z-30 w-[52%] max-w-[210px] float-card float-card-delayed">
        <AutoInvoiceCard />
      </div>
    </div>
  )
}

export function LiveLessonPreview() {
  return (
    <div className="rounded-2xl bg-midnight p-4 text-white overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-bold uppercase tracking-wide text-white/50">Live lesson</p>
        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-sky">
          <Sparkles size={11} strokeWidth={2} aria-hidden="true" />
          RavenAI
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-2">
        <VideoTile name="Amelia Hart" role="Tutor" tone="violet" compact />
        <VideoTile name="Lina Chen" role="Student" tone="teal" compact />
      </div>
      <div
        className="rounded-xl h-[118px] relative overflow-hidden border border-white/10"
        style={{
          backgroundColor: '#f4f0e6',
          backgroundImage: 'linear-gradient(#e4ddd0 1px, transparent 1px), linear-gradient(90deg, #e4ddd0 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
        aria-hidden="true"
      >
        <div className="absolute left-2.5 top-2 right-2.5">
          <p className="text-[11px] font-semibold text-raven leading-tight" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            Angle in a semicircle
          </p>
          <p className="text-[9px] font-bold text-iridescence">∠ACB = 90°</p>
        </div>
        <svg viewBox="0 0 280 90" className="absolute left-0 right-0 bottom-0 w-full h-[72px]" preserveAspectRatio="xMidYMid meet">
          <circle cx="78" cy="48" r="34" fill="rgba(123,92,214,0.08)" stroke="#7B5CD6" strokeWidth="2" />
          <line x1="44" y1="48" x2="112" y2="48" stroke="#232C3A" strokeWidth="1.5" />
          <path d="M44 48 L78 14 L112 48 Z" fill="rgba(123,92,214,0.12)" stroke="#232C3A" strokeWidth="1.5" />
          <path d="M72 22 L72 28 L78 28" fill="none" stroke="#DE7A72" strokeWidth="1.6" />
          <circle cx="44" cy="48" r="2.8" fill="#232C3A" />
          <circle cx="112" cy="48" r="2.8" fill="#232C3A" />
          <circle cx="78" cy="14" r="3" fill="#7B5CD6" />
          <text x="36" y="62" fontSize="10" fill="#232C3A" fontFamily="Outfit, sans-serif" fontWeight="700">A</text>
          <text x="114" y="62" fontSize="10" fill="#232C3A" fontFamily="Outfit, sans-serif" fontWeight="700">B</text>
          <text x="82" y="12" fontSize="10" fill="#7B5CD6" fontFamily="Outfit, sans-serif" fontWeight="700">C</text>
          <text x="140" y="30" fontSize="11" fill="#232C3A" fontFamily="Outfit, sans-serif">AB diameter</text>
          <text x="140" y="48" fontSize="11" fill="#7B5CD6" fontFamily="Outfit, sans-serif" fontWeight="700">C on circle → 90°</text>
          <text x="140" y="66" fontSize="11" fill="#232C3A" fontFamily="Outfit, sans-serif">Shared board · live</text>
        </svg>
      </div>
    </div>
  )
}

export function WhiteboardVisual() {
  return (
    <div className="relative rounded-[1.35rem] overflow-hidden bg-white shadow-card border border-raven/10">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-raven/10 bg-paper">
        <div>
          <p className="text-sm font-bold">Shared whiteboard</p>
          <p className="text-[11px] text-raven/45">Live drawing · both can write</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-violet bg-violet/10 px-2.5 py-1 rounded-full">
          <Sparkles size={12} strokeWidth={2} aria-hidden="true" />
          RavenAI
        </span>
      </div>
      <div className="flex min-h-[340px]">
        <ToolBar vertical />
        <div className="relative flex-1 p-3 bg-[#ece8df]">
          <MathBoard tall />
          <div className="absolute right-5 top-5 w-[118px] shadow-lg rounded-xl overflow-hidden border border-white/40">
            <VideoTile name="Amelia Hart" role="Tutor" compact />
          </div>
          <div className="absolute left-5 bottom-5 max-w-[200px] rounded-xl bg-midnight/95 text-white p-2.5 shadow-card border border-white/10">
            <p className="text-[10px] font-bold uppercase tracking-wide text-sky mb-1">RavenAI</p>
            <p className="text-[11px] text-white/75 leading-snug">Want a step-by-step for the right angle?</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-2 border-t border-raven/10 bg-white text-[11px] font-semibold text-raven/45">
        <span>Undo · Redo · Equation editor</span>
        <span className="text-violet">RavenAI classroom assistant on</span>
      </div>
    </div>
  )
}
