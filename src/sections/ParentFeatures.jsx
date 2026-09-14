import { Check } from 'lucide-react'
import { ProfileVisual, CalendarVisual, MessageVisual, NearbyVisual, PaymentsVisual, SafetyVisual } from '../components/Visuals.jsx'

const FEATURES = [
  {
    kicker: 'Profiles',
    title: 'Know who you’re booking.',
    copy: 'See qualifications, reviews, a tutor description, pricing, and approximate distance before you message.',
    points: ['Education and teaching experience', 'Ratings with individual parent reviews', 'Profile picture and tutor description'],
    Visual: ProfileVisual,
    flip: false,
  },
  {
    kicker: 'Calendar',
    title: 'Easy scheduling.',
    copy: 'Book sessions around your week with an in built calendar, with no back-and-forth over times.',
    points: ['Pick a time that actually works', 'Upcoming sessions in one view', 'Automatic reminders before lessons'],
    Visual: CalendarVisual,
    flip: true,
  },
  {
    kicker: 'Connect',
    title: 'Message your tutor.',
    copy: 'Reach out directly in app. Start the conversation, ask about availability, and book when it feels right.',
    points: ['Direct in app messages', 'Keep every conversation in one place', 'Clear next steps towards booking'],
    Visual: MessageVisual,
    flip: false,
  },
  {
    kicker: 'Nearby',
    title: 'Find tutors close to home.',
    copy: 'See approximate distance on every profile so you can choose nearby tutors, without anyone’s exact address.',
    points: ['Approx. distance on tutor cards', 'Online, in person, or both', 'No public map of home addresses'],
    Visual: NearbyVisual,
    flip: true,
  },
  {
    kicker: 'Payments',
    title: 'Pay through the app.',
    copy: 'Auto invoicing and in-app payments keep lessons, invoices, and reminders together.',
    points: ['Professional invoices in a few taps', 'Pay securely in app', 'Reminders after each session'],
    Visual: PaymentsVisual,
    flip: false,
  },
  {
    kicker: 'Trust & safety',
    title: 'Safety is built in.',
    copy: 'Every feature is designed with student safety at its core. Parents can trust Raven.',
    points: [
      'WWCC checks: tutors 18+ provide a Working With Children Check',
      'Identity verification is strongly recommended for every tutor. Once they verify, a tick shows next to their name, so you can tell who’s done it',
      'Easy reporting: report issues instantly. Reviewed within 24 hours',
    ],
    Visual: SafetyVisual,
    flip: true,
  },
]

function QuestionsMock() {
  return (
    <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3 space-y-2 mb-3">
      <p className="text-[11px] font-semibold text-white/85 leading-snug">What is the powerhouse of the cell?</p>
      <div className="rounded-lg border border-white/15 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-white/50">
        Nucleus
      </div>
      <div className="rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1.5 text-[11px] text-white flex items-center justify-between gap-2">
        <span>Mitochondria</span>
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 text-midnight shrink-0">
          <Check size={10} strokeWidth={3} aria-hidden="true" />
        </span>
      </div>
    </div>
  )
}

function FlashcardsMock() {
  return (
    <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3 space-y-2 mb-3">
      <div className="rounded-lg bg-white/[0.06] border border-white/10 px-3 py-3.5 text-center">
        <p className="text-[11px] font-semibold text-white/85">Define osmosis</p>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        <span className="rounded-md bg-coral/90 text-[10px] font-bold text-white text-center py-1.5">Again</span>
        <span className="rounded-md bg-amber-500/90 text-[10px] font-bold text-white text-center py-1.5">Hard</span>
        <span className="rounded-md bg-emerald-500/90 text-[10px] font-bold text-white text-center py-1.5">Good</span>
      </div>
    </div>
  )
}

function AssistantMock() {
  return (
    <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3 space-y-2 mb-3 flex flex-col">
      <div className="self-end max-w-[88%] rounded-2xl rounded-br-md bg-white/10 px-3 py-2 text-[11px] text-white/80 leading-snug">
        How does mitosis work?
      </div>
      <div className="self-start max-w-[90%] rounded-2xl rounded-bl-md bg-violet px-3 py-2 text-[11px] text-white leading-snug">
        It’s split into 4 phases…
      </div>
    </div>
  )
}

function TrialMock() {
  return (
    <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3 mb-3 flex flex-col items-center justify-center gap-2 text-center min-h-[5.5rem]">
      <span className="inline-flex items-center rounded-full border border-sheen/50 bg-sheen/15 px-3 py-1 text-[10px] font-bold tracking-wide uppercase text-sheen">
        Free trial
      </span>
      <p className="text-[11px] font-semibold text-white/85">Premium · RavenAI</p>
      <p className="text-[10px] text-white/45">No long-term lock-in</p>
    </div>
  )
}

const RAVEN_AI_FEATURES = [
  {
    title: 'Practice questions',
    copy: 'Subject and syllabus-specific drills for the parent plan.',
    Mock: QuestionsMock,
  },
  {
    title: 'Flashcards & memory',
    copy: 'Recall tools that lock in topics between lessons.',
    Mock: FlashcardsMock,
  },
  {
    title: 'Classroom assistant',
    copy: 'Unlimited help for tutors inside the live classroom.',
    Mock: AssistantMock,
  },
  {
    title: 'Free to trial',
    copy: 'Try RavenAI on Premium before you commit long-term.',
    Mock: TrialMock,
  },
]

export default function ParentFeatures() {
  return (
    <section className="pt-20 md:pt-28 pb-10 md:pb-14 px-6 md:px-10 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal max-w-2xl">
          <p className="eyebrow mb-3">Why Raven</p>
          <h2 className="text-3xl md:text-5xl">Built for parents and students.</h2>
        </div>

        <div className="space-y-24">
          {FEATURES.map((f) => (
            <div key={f.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={`reveal ${f.flip ? 'lg:order-2' : ''}`}>
                <p className="eyebrow mb-3">{f.kicker}</p>
                <h3 className="text-3xl md:text-4xl mb-4">{f.title}</h3>
                <p className="text-lg text-raven/55 mb-6 leading-relaxed">{f.copy}</p>
                <ul className="space-y-3">
                  {f.points.map((p) => (
                    <li className="check-row" key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className={`reveal ${f.flip ? 'lg:order-1' : ''}`}>
                <f.Visual />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-28 rounded-[1.6rem] bg-midnight text-white p-8 md:p-12 overflow-hidden relative">
          <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full bg-violet/25 blur-2xl" />
          <div className="absolute left-8 bottom-0 w-40 h-40 rounded-full bg-sheen/15 blur-2xl" />
          <div className="relative">
            <div className="reveal mb-10">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-sheen border border-sheen/40 rounded-full px-3 py-1 mb-5">
                RavenAI
              </span>
              <h3 className="text-3xl md:text-4xl mb-4 text-white">Our premium AI, built for both sides.</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-4 max-w-[910px]">
                Practice questions and flashcards for parents and students. An unlimited virtual classroom assistant for tutors. Premium on both plans, free to trial.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {RAVEN_AI_FEATURES.map(({ title, copy, Mock }) => (
                <div key={title} className="reveal rounded-2xl bg-white/5 border border-white/10 p-4">
                  <Mock />
                  <p className="font-bold mb-1 text-white">{title}</p>
                  <p className="text-sm text-white/55 leading-relaxed">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
