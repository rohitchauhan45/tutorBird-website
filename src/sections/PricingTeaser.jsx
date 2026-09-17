import { Link } from 'react-router-dom'
import { Sparkles, Video, TrendingUp, Play, Check } from 'lucide-react'

const PREMIUM_FEATURES = [
  {
    title: 'RavenAI',
    copy: 'Practice questions plus flashcards and memory tools, matched to what they are learning.',
    Icon: Sparkles,
    tone: 'bg-[#EDE6FB] text-violet',
    visual: 'ai',
  },
  {
    title: 'Session recordings',
    copy: 'Replay lessons to review tutor explanations whenever you need a refresher.',
    Icon: Video,
    tone: 'bg-[#F8E4E1] text-coral',
    visual: 'recording',
  },
  {
    title: 'Weekly progress reports',
    copy: 'Track changes week to week so you can see what is improving.',
    Icon: TrendingUp,
    tone: 'bg-sky text-iridescence',
    visual: 'progress',
  },
]

function FeatureVisual({ kind }) {
  if (kind === 'ai') {
    return (
      <div className="mt-5 rounded-2xl bg-paper border border-raven/[0.06] p-3 shadow-soft space-y-2">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[10px] font-bold uppercase tracking-wide text-violet">Practice</p>
          <span className="rounded-full bg-sky px-2 py-0.5 text-[10px] font-bold text-iridescence">HSC Chem</span>
        </div>
        <p className="text-[11px] font-semibold text-raven leading-snug">Powerhouse of the cell?</p>
        <div className="rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1.5 text-[11px] text-raven flex items-center justify-between gap-2">
          <span>Mitochondria</span>
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white shrink-0">
            <Check size={10} strokeWidth={3} aria-hidden="true" />
          </span>
        </div>
      </div>
    )
  }

  if (kind === 'recording') {
    return (
      <div className="mt-5 rounded-2xl bg-midnight p-3 shadow-soft text-white">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-coral text-white shrink-0">
            <Play size={14} strokeWidth={2.4} fill="currentColor" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-[11px] font-bold truncate">HSC Maths · Amelia</p>
            <p className="text-[10px] text-white/45">42:18 · Session recording</p>
          </div>
        </div>
        <div className="h-1.5 rounded-full bg-white/15 overflow-hidden">
          <div className="h-full w-[62%] rounded-full bg-coral" />
        </div>
        <p className="text-[10px] text-white/40 mt-2">Replay anytime after class</p>
      </div>
    )
  }

  return (
    <div className="mt-5 rounded-2xl bg-paper border border-raven/[0.06] p-3 shadow-soft">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[10px] font-bold uppercase tracking-wide text-iridescence">This week</p>
        <span className="rounded-full bg-sky px-2 py-0.5 text-[10px] font-bold text-iridescence">+12%</span>
      </div>
      <div className="flex items-end gap-1.5 h-14">
        {[40, 55, 48, 72, 68, 88, 80].map((h, i) => (
          <span
            key={i}
            className={`flex-1 rounded-sm ${i === 5 ? 'bg-iridescence' : 'bg-sky'}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <p className="text-[10px] text-raven/40 mt-2">Progress across the last 7 days</p>
    </div>
  )
}

export default function PricingTeaser() {
  return (
    <section className="pt-8 md:pt-10 pb-20 md:pb-24 px-6 md:px-10 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12 items-start">
          <div className="reveal">
            <p className="eyebrow mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl mb-3">Simple pricing.</h2>
            <p className="text-lg text-raven/55 leading-relaxed">
              <span className="text-4xl md:text-5xl font-extrabold text-raven mr-2">Free for parents</span>
            </p>
            <p className='text-lg text-raven/55 leading-tight mt-2'>Browse, message & book at no cost. Upgrade anytime to Premium when you want more study tools.</p>
          </div>

          <div className="reveal">
            <p className="text-sm font-bold text-violet mb-2">Parents & students</p>
            <h3 className="text-3xl md:text-4xl mb-3">Premium</h3>
            <p className="text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="text-lg md:text-xl font-semibold text-raven/45 mr-2">an additional</span>
              $24.95
              <span className="text-lg font-semibold text-raven/40">/mo</span>
            </p>
            <p className="text-lg text-raven/55 leading-tight mt-2">
              RavenAI, session recordings, and weekly progress reports, on top of free browse, message, and book.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {PREMIUM_FEATURES.map((f) => (
            <div
              key={f.title}
              className="reveal card p-5 h-full flex flex-col transition-transform duration-300 hover:-translate-y-1"
            >
              <div className={`icon-orb mb-4 ${f.tone}`}>
                <f.Icon size={22} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h4 className="text-xl mb-2">{f.title}</h4>
              <p className="text-[0.98rem] text-raven/55 leading-relaxed">{f.copy}</p>
              <div className="mt-auto">
                <FeatureVisual kind={f.visual} />
              </div>
            </div>
          ))}
        </div>

        <div className="reveal">
          <Link to="/pricing" className="btn btn-violet !py-2.5 !px-4 text-sm">View pricing</Link>
        </div>
      </div>
    </section>
  )
}
