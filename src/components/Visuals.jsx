import FaceIcon from './FaceIcon.jsx'
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
} from 'lucide-react'

export function HeroVisual() {
  return (
    <div className="relative h-[460px] md:h-[560px] w-full">
      <div className="absolute right-0 top-6 md:top-10 w-[86%] max-w-[440px] card calendar-window p-4 md:p-5 float-card z-10">
        <div className="flex items-center justify-between mb-4">
          <p className="font-bold text-lg">Calendar</p>
          <span className="text-[11px] font-bold tracking-wide uppercase text-iridescence bg-sky px-2.5 py-1 rounded-full">This week</span>
        </div>
        <div className="grid grid-cols-5 gap-2 text-center text-[11px] font-bold text-raven/35 mb-3">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d) => <span key={d}>{d}</span>)}
        </div>
        <div className="relative h-[220px] md:h-[250px] rounded-2xl bg-paper/80 p-2 overflow-hidden">
          <div className="grid grid-cols-5 gap-2 h-full">
            {[0, 1, 2, 3, 4].map((col) => (
              <div key={col} className="rounded-xl bg-white/70 border border-raven/[0.04]" />
            ))}
          </div>
          <div className="cal-block bg-violet left-[2.5%] top-[12%] w-[17%]">Maths</div>
          <div className="cal-block bg-sheen left-[22.5%] top-[28%] w-[17%]">Physics</div>
          <div className="cal-block bg-iridescence cal-block-tall left-[42.5%] top-[10%] w-[17%]">Debate</div>
          <div className="cal-block bg-violet left-[62.5%] top-[38%] w-[17%]">English</div>
          <div className="cal-block bg-coral left-[82.5%] top-[18%] w-[15%]">Speak</div>
          <div className="cal-block bg-sky text-iridescence left-[2.5%] top-[58%] w-[17%]">Chem</div>
          <div className="cal-block bg-violet/80 left-[42.5%] top-[62%] w-[37%]">HSC clinic</div>
        </div>
      </div>

      <div className="absolute left-0 bottom-4 md:bottom-10 w-[72%] max-w-[250px] card p-4 float-card float-card-delayed z-20">
        <p className="font-bold mb-3">Students</p>
        {[
          { name: 'Amelia Hart', sub: 'Mathematics Advanced', bar: 'bg-violet' },
          { name: 'Sophie Ellis', sub: 'Debating', bar: 'bg-coral' },
          { name: 'Daniel Park', sub: 'Mathematics Extension', bar: 'bg-iridescence' },
        ].map((t) => (
          <div key={t.name} className="flex items-center gap-3 py-2">
            <FaceIcon size={36} />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold leading-tight truncate">{t.name}</p>
              <div className={`h-1.5 mt-1.5 rounded-full w-[70%] ${t.bar} opacity-70`} />
            </div>
          </div>
        ))}
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
          <FaceIcon size={56} />
          <div>
            <h3 className="text-xl">Daniel Park</h3>
            <p className="text-sm text-raven/50">HSC Mathematics Extension</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-raven/55 mb-4 pb-4 border-b border-raven/10">
          <span>4.8 (39)</span>
          <span>Approx. 2 km</span>
          <span className="text-iridescence font-semibold">$70–$100/hr</span>
        </div>
        <div className="flex gap-4 text-xs font-bold tracking-wider uppercase mb-4 border-b border-raven/10">
          <span className="pb-2 border-b-2 border-iridescence">About</span>
          <span className="pb-2 text-raven/30">Experience</span>
          <span className="pb-2 text-raven/30">Reviews</span>
        </div>
        <p className="text-sm text-raven/60 leading-relaxed mb-4">BSc CS, UNSW. Online and in-person. Intro video available before you book.</p>
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
          <FaceIcon size={40} />
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
        { name: 'Sophie Ellis', km: '0.8 km', sub: 'Debating' },
        { name: 'Amelia Hart', km: '1.2 km', sub: 'Mathematics Advanced' },
        { name: 'James Okonkwo', km: '1.6 km', sub: 'English Advanced' },
      ].map((t) => (
        <div key={t.name} className="flex items-center justify-between py-3 border-t border-raven/[0.08] first:border-0">
          <div className="flex items-center gap-3">
            <FaceIcon size={36} />
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
        light
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
      <svg viewBox="0 0 540 300" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <text x="22" y="28" fontSize="15" fill="#232C3A" fontFamily="Fraunces" fontWeight="600">Q4. Angle in a semicircle</text>
        <text x="22" y="46" fontSize="11" fill="#1E8AA0" fontFamily="Outfit" fontWeight="700">HSC Maths Advanced</text>
        <circle cx="198" cy="168" r="92" fill="none" stroke="#7B5CD6" strokeWidth="2.4" />
        <path d="M106 168 H290" stroke="#232C3A" strokeWidth="1.6" opacity="0.7" />
        <path d="M106 168 L228 96 L290 168 Z" fill="rgba(123,92,214,0.08)" stroke="#232C3A" strokeWidth="1.7" />
        <path d="M198 168 L228 96" stroke="#1E8AA0" strokeWidth="1.5" strokeDasharray="4 3" />
        <path d="M290 168 L248 78" stroke="#DE7A72" strokeWidth="1.6" />
        <path d="M248 78 Q278 70 302 92" fill="none" stroke="#DE7A72" strokeWidth="1.6" />
        <path d="M218 108 L228 108 L228 118" fill="none" stroke="#DE7A72" strokeWidth="1.6" />
        <circle cx="198" cy="168" r="3.5" fill="#1E8AA0" />
        <circle cx="106" cy="168" r="4" fill="#232C3A" />
        <circle cx="290" cy="168" r="4" fill="#232C3A" />
        <circle cx="228" cy="96" r="4.5" fill="#7B5CD6" />
        <text x="92" y="186" fontSize="12" fill="#232C3A" fontFamily="Outfit" fontWeight="700">A</text>
        <text x="294" y="186" fontSize="12" fill="#232C3A" fontFamily="Outfit" fontWeight="700">B</text>
        <text x="232" y="88" fontSize="12" fill="#7B5CD6" fontFamily="Outfit" fontWeight="700">C</text>
        <text x="176" y="184" fontSize="11" fill="#1E8AA0" fontFamily="Outfit">O</text>
        <text x="308" y="78" fontSize="11" fill="#DE7A72" fontFamily="Outfit">tangent</text>
        <rect x="328" y="78" width="188" height="22" rx="4" fill="#F6E27A" opacity="0.9" />
        <text x="336" y="93" fontSize="12" fill="#232C3A" fontFamily="Outfit" fontWeight="700">∠ACB = 90°</text>
        <text x="328" y="124" fontSize="13" fill="#232C3A" fontFamily="Outfit">1. AB is the diameter</text>
        <text x="328" y="146" fontSize="13" fill="#232C3A" fontFamily="Outfit">2. OC = radius</text>
        <text x="328" y="168" fontSize="13" fill="#7B5CD6" fontFamily="Outfit" fontWeight="700">3. Angle at C is right</text>
        <text x="328" y="190" fontSize="13" fill="#232C3A" fontFamily="Outfit">4. Tangent ⟂ radius OB</text>
      </svg>
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

export function ClassroomVisual() {
  return (
    <div className="relative rounded-[1.35rem] overflow-hidden bg-[#161b22] shadow-card border border-white/10">
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
          <div className="flex-1 rounded-xl bg-white/5 border border-white/10 p-2.5 min-h-[140px]">
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
        <span className="text-[11px] font-bold uppercase tracking-wide text-violet bg-violet/10 px-2.5 py-1 rounded-full">Pen</span>
      </div>
      <div className="flex min-h-[340px]">
        <ToolBar vertical />
        <div className="relative flex-1 p-3 bg-[#ece8df]">
          <MathBoard tall />
          <div className="absolute right-5 top-5 w-[118px] shadow-lg rounded-xl overflow-hidden border border-white/40">
            <VideoTile name="Amelia Hart" role="Tutor" compact />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-2 border-t border-raven/10 bg-white text-[11px] font-semibold text-raven/45">
        <span>Undo · Redo · Equation editor</span>
        <span className="text-violet">Live for both of you</span>
      </div>
    </div>
  )
}
