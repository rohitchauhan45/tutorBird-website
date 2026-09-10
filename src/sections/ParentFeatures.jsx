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
    copy: 'Book sessions around your week with an in-built calendar, with no back-and-forth over times.',
    points: ['Pick a time that actually works', 'Upcoming sessions in one view', 'Automatic reminders before lessons'],
    Visual: CalendarVisual,
    flip: true,
  },
  {
    kicker: 'Connect',
    title: 'Message your tutor.',
    copy: 'Reach out directly in-app. Start the conversation, ask about availability, and book when it feels right.',
    points: ['Direct in-app messages', 'Keep every conversation in one place', 'Clear next steps towards booking'],
    Visual: MessageVisual,
    flip: false,
  },
  {
    kicker: 'Nearby',
    title: 'Find tutors close to home.',
    copy: 'See approximate distance on every profile so you can choose nearby tutors, without anyone’s exact address.',
    points: ['Approx. distance on tutor cards', 'Online, in-person, or both', 'No public map of home addresses'],
    Visual: NearbyVisual,
    flip: true,
  },
  {
    kicker: 'Payments',
    title: 'Pay through the app.',
    copy: 'Auto-invoicing and in-app payments keep lessons, invoices, and reminders together.',
    points: ['Professional invoices in a few taps', 'Pay securely in-app', 'Reminders after each session'],
    Visual: PaymentsVisual,
    flip: false,
  },
  {
    kicker: 'Trust & safety',
    title: 'Safety is built in.',
    copy: 'Every feature is designed with student safety at its core. Parents can trust Raven.',
    points: [
      'WWCC checks — tutors 18+ provide a Working With Children Check',
      'Identity verification — strongly recommended for every tutor. Once they verify, a tick shows next to their name — so you can tell who’s done it',
      'Easy reporting — report issues instantly. Reviewed within 24 hours',
    ],
    Visual: SafetyVisual,
    flip: true,
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
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-sheen border border-sheen/40 rounded-full px-3 py-1 mb-5">
                RavenAI
              </span>
              <h3 className="text-3xl md:text-4xl mb-4 text-white">Our premium AI, built for both sides.</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-4">
                Practice questions and flashcards for parents and students. An unlimited virtual classroom assistant for tutors. Premium on both plans — free to trial.
              </p>
              <p className="text-sm font-semibold text-sky">Premium feature · free to trial</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Practice questions', copy: 'Subject and syllabus-specific drills for the parent plan.' },
                { title: 'Flashcards & memory', copy: 'Recall tools that lock in topics between lessons.' },
                { title: 'Classroom assistant', copy: 'Unlimited help for tutors inside the live classroom.' },
                { title: 'Free to trial', copy: 'Try RavenAI on Premium before you commit long-term.' },
              ].map((item) => (
                <div key={item.title} className="reveal rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="font-bold mb-1 text-white">{item.title}</p>
                  <p className="text-sm text-white/55 leading-relaxed">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
