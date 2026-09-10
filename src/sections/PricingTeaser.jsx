import { Link } from 'react-router-dom'
import { Sparkles, Video, TrendingUp } from 'lucide-react'

const PREMIUM_FEATURES = [
  {
    title: 'RavenAI',
    copy: 'Practice questions plus flashcards and memory tools, matched to what they are learning.',
    Icon: Sparkles,
    tone: 'bg-[#EDE6FB] text-violet',
  },
  {
    title: 'Session recordings',
    copy: 'Replay lessons to review tutor explanations whenever you need a refresher.',
    Icon: Video,
    tone: 'bg-[#F8E4E1] text-coral',
  },
  {
    title: 'Weekly progress reports',
    copy: 'Track changes week to week so you can see what is improving.',
    Icon: TrendingUp,
    tone: 'bg-sky text-iridescence',
  },
]

export default function PricingTeaser() {
  return (
    <section className="pt-8 md:pt-10 pb-20 md:pb-24 px-6 md:px-10 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12 items-start">
          <div className="reveal">
            <p className="eyebrow mb-3">Pricing</p>
            <h2 className="text-3xl md:text-5xl mb-4">Simple pricing.</h2>
            <p className="text-lg text-raven/55 leading-relaxed">
              Free for parents — free to browse, message & book. Upgrade anytime to Premium when you want more study tools.
            </p>
          </div>

          <div className="reveal">
            <p className="text-sm font-bold text-violet mb-2">Parents & students</p>
            <h3 className="text-3xl md:text-4xl mb-3">Premium</h3>
            <p className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              <span className="text-lg md:text-xl font-semibold text-raven/45 mr-2">an additional</span>
              $24.95
              <span className="text-lg font-semibold text-raven/40">/mo</span>
            </p>
            <p className="text-lg text-raven/55 leading-relaxed">
              RavenAI, session recordings, and weekly progress reports — on top of free browse, message, and book.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {PREMIUM_FEATURES.map((f) => (
            <div key={f.title} className="reveal card p-5 h-full">
              <div className={`icon-orb mb-4 ${f.tone}`}>
                <f.Icon size={22} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h4 className="text-xl mb-2">{f.title}</h4>
              <p className="text-[0.98rem] text-raven/55 leading-relaxed">{f.copy}</p>
            </div>
          ))}
        </div>

        <div className="reveal">
          <Link to="/pricing" className="btn btn-outline">View pricing</Link>
        </div>
      </div>
    </section>
  )
}