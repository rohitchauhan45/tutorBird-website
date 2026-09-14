import { Link } from 'react-router-dom'
import { Users, MapPin, Calendar, CreditCard, Video, Sparkles, Eye, UserPlus, ShieldCheck, BadgeCheck, Search, CalendarCheck } from 'lucide-react'
import { ClassroomVisual, WhiteboardVisual, LiveLessonPreview, CalendarVisual, PaymentsVisual, ProfileVisual } from '../components/Visuals.jsx'
import FaceIcon from '../components/FaceIcon.jsx'

const BASICS = [
  { title: 'Get listed', copy: 'Create a tutor profile families can actually find.', Visual: ProfileVisual, icon: Users, tone: 'bg-violet/15 text-violet' },
  { title: 'Find students near you', copy: 'Match with students by suburb radius. Approximate distance only.', Visual: null, icon: MapPin, tone: 'bg-coral/15 text-coral' },
  { title: 'Calendar & bookings', copy: 'An in built calendar for availability, sessions, and reminders.', Visual: CalendarVisual, icon: Calendar, tone: 'bg-sky text-iridescence' },
  { title: 'Payments & reminders', copy: 'Invoice through the app and nudge families automatically.', Visual: PaymentsVisual, icon: CreditCard, tone: 'bg-violet/15 text-violet' },
]

const NEARBY = [
  { name: 'Amelia Hart', sub: 'Mathematics Advanced', place: 'Parramatta', km: '1.4 km', tag: 'HSC', color: 'violet' },
  { name: 'Sophie Ellis', sub: 'Debating', place: 'Strathfield', km: '2.1 km', tag: 'Speaking', color: 'coral' },
  { name: 'James Okonkwo', sub: 'English Advanced', place: 'Burwood', km: '2.8 km', tag: 'HSC', color: 'teal' },
]

const PREMIUM = [
  { title: 'Auto-invoicing', copy: 'Send parents a bill from a template, automatically after each lesson.', icon: CreditCard, tone: 'bg-[#F8E4E1] text-coral', visual: 'invoice' },
  { title: 'RavenAI', copy: 'Unlimited virtual classroom assistant. Help while you teach, right beside the whiteboard.', icon: Sparkles, tone: 'bg-[#EDE6FB] text-violet', visual: 'ai' },
  { title: 'Enhanced visibility', copy: 'Your profile can get more views when families search for a tutor.', icon: Eye, tone: 'bg-sky text-iridescence', visual: 'visibility' },
]

function PremiumVisual({ kind }) {
  if (kind === 'ai') {
    return (
      <div className="mt-5 rounded-xl bg-midnight p-3 text-white">
        <p className="text-[10px] font-bold uppercase tracking-wide text-sky mb-1.5">RavenAI</p>
        <p className="text-xs text-white/70 leading-snug">Classroom assistant on · unlimited</p>
      </div>
    )
  }
  if (kind === 'invoice') {
    return (
      <div className="mt-5 rounded-xl bg-paper p-2.5 flex items-center justify-between">
        <span className="text-[10px] font-bold text-raven/45">Lesson bill</span>
        <span className="text-[10px] font-extrabold text-coral">Sent</span>
      </div>
    )
  }
  return (
    <div className="mt-5 flex items-end gap-1 h-10">
      {[35, 62, 48, 80, 55].map((h, i) => (
        <span key={i} className="flex-1 rounded-sm bg-iridescence/70" style={{ height: `${h}%` }} />
      ))}
    </div>
  )
}

const FLOW = [
  {
    n: '01',
    t: 'Sign up',
    copy: 'Create a tutor account and start the 30-day trial.',
    icon: UserPlus,
    tone: 'bg-violet/15 text-violet',
  },
  {
    n: '02',
    t: 'Get verified',
    copy: 'WWCC for tutors 18+, so families can trust who they book.',
    icon: ShieldCheck,
    tone: 'bg-sky text-iridescence',
  },
  {
    n: '03',
    t: 'Create your profile',
    copy: 'Subjects, rates, availability, and a profile families can read.',
    icon: BadgeCheck,
    tone: 'bg-coral/15 text-coral',
  },
  {
    n: '04',
    t: 'Get listed',
    copy: 'Show up when families search HSC, debating, or public speaking.',
    icon: Search,
    tone: 'bg-sky text-iridescence',
  },
  {
    n: '05',
    t: 'Get booked',
    copy: 'Take sessions on the in built calendar, online or in person.',
    icon: CalendarCheck,
    tone: 'bg-violet/15 text-violet',
  },
]

export default function BecomeTutorPage() {
  return (
    <main>
      <header className="page-hero overflow-hidden relative bg-paper">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <p className="eyebrow mb-4">Become a tutor</p>
            <h1 className="text-4xl md:text-6xl mb-5">Build your practice with Raven.</h1>
            <p className="text-xl text-raven/55 mb-8 max-w-lg">
              Get discovered by families looking for HSC, debating, and public speaking tutors. Run bookings, payments, and lessons in one place.
            </p>
            <Link to="/signup?role=tutor" className="btn btn-teal">Join now</Link>
          </div>
          <ClassroomVisual />
        </div>
      </header>

      <section className="py-20 px-6 md:px-10 bg-paper">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-3">Basic</p>
          <h2 className="text-3xl md:text-5xl mb-12">Everything you need to start teaching.</h2>
          <div className="space-y-20">
            {BASICS.map((item, i) => (
              <div key={item.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={i % 2 ? 'lg:order-2' : ''}>
                  <div className={`icon-orb mb-5 ${item.tone}`}>
                    <item.icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="text-3xl mb-3">{item.title}</h3>
                  <p className="text-lg text-raven/55">{item.copy}</p>
                </div>
                <div className={i % 2 ? 'lg:order-1' : ''}>
                  {item.Visual ? <item.Visual /> : (
                    <div className="card p-6 relative overflow-hidden">
                      <div className="flex items-center justify-between mb-4">
                        <p className="font-bold">Nearby students</p>
                        <span className="text-[10px] font-bold uppercase tracking-wide text-coral bg-coral/10 px-2.5 py-1 rounded-full">3 km radius</span>
                      </div>
                      {NEARBY.map((student) => (
                        <div key={student.name} className="flex items-center gap-3 py-3 border-t border-raven/10 first:border-0">
                          <FaceIcon size={40} name={student.name} color={student.color} />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-bold leading-tight">{student.name}</p>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky text-iridescence">{student.tag}</span>
                            </div>
                            <p className="text-xs text-raven/45 mt-0.5">{student.sub}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-xs font-bold text-iridescence">{student.km}</p>
                            <p className="text-[10px] text-raven/40">{student.place}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-28 px-6 md:px-10 bg-midnight text-center text-white">
        <div className="blob blob-violet w-72 h-72 -right-16 -top-12 !opacity-45" />
        <div className="blob blob-teal w-56 h-56 -left-10 bottom-0 !opacity-40" />
        <div className="blob blob-coral w-40 h-40 right-1/4 -bottom-10 !opacity-30" />
        <div className="max-w-2xl mx-auto relative z-10">
          <p className="logo-mark text-4xl mb-6 text-white">Raven<span>.</span></p>
          <h2 className="text-3xl md:text-5xl mb-4 text-white">Ready to get started?</h2>
          <p className="text-xl text-white/55 mb-8">30-day free trial. No classroom commitment until you upgrade.</p>
          <Link to="/signup?role=tutor" className="btn btn-teal">Join now</Link>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-3">Premium</p>
          <h2 className="text-3xl md:text-5xl mb-4">Unlock the classroom.</h2>
          <p className="text-lg text-raven/55 max-w-2xl mb-10">Your own lesson space, plus invoicing, RavenAI in the classroom, and a profile families are more likely to see.</p>
          <div className="card p-6 md:p-8 mb-5 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div>
              <div className="icon-orb bg-violet/15 text-violet mb-5">
                <Video size={22} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <p className="text-sm font-bold text-violet mb-2">The big one</p>
              <h3 className="text-3xl mb-3">Your own classroom and whiteboard.</h3>
              <p className="text-raven/55 text-lg leading-relaxed">This is basically your own Zoom, inside Raven. Run the lesson on video, then draw and write on a shared whiteboard. Both of you stay in the same place.</p>
            </div>
            <LiveLessonPreview />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {PREMIUM.map((p) => (
              <div key={p.title} className="card p-6 flex flex-col">
                <div className={`icon-orb mb-4 ${p.tone}`}>
                  <p.icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="text-xl mb-2">{p.title}</h3>
                <p className="text-raven/55">{p.copy}</p>
                <div className="mt-auto">
                  <PremiumVisual kind={p.visual} />
                </div>
              </div>
            ))}
          </div>
          <WhiteboardVisual />
        </div>
      </section>

      <section className="relative overflow-hidden py-20 px-6 md:px-10 bg-paper">
        <div className="max-w-7xl mx-auto relative">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-3">How it works</p>
            <h2 className="text-3xl md:text-5xl mb-4">Sign up. Verify. Get booked.</h2>
            <p className="text-lg text-raven/55">The same simple path families already use, built for tutors who want to get listed and take bookings.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {FLOW.map((s) => (
              <div key={s.n} className="card p-5 h-full relative">
                <p className="absolute top-4 right-4 text-sm font-bold text-violet">{s.n}</p>
                <div className={`icon-orb mb-4 ${s.tone}`}>
                  <s.icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="text-xl mb-2 pr-10">{s.t}</h3>
                <p className="text-[0.98rem] text-raven/55 leading-relaxed">{s.copy}</p>
                {s.n === '01' && (
                  <div className="mt-5 space-y-1.5">
                    <div className="h-2 w-20 rounded-full bg-sky" />
                    <div className="h-2 w-14 rounded-full bg-violet/25" />
                  </div>
                )}
                {s.n === '02' && (
                  <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-sky px-2.5 py-1 text-[10px] font-bold text-iridescence">WWCC</div>
                )}
                {s.n === '03' && (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {['HSC', 'Debate'].map((tag) => (
                      <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded-full bg-sky text-iridescence">{tag}</span>
                    ))}
                  </div>
                )}
                {s.n === '04' && (
                  <div className="mt-5 flex gap-2">
                    <span className="w-8 h-8 rounded-lg bg-violet/15" />
                    <span className="w-8 h-8 rounded-lg bg-sky" />
                    <span className="w-8 h-8 rounded-lg bg-coral/20" />
                  </div>
                )}
                {s.n === '05' && (
                  <div className="mt-5 rounded-xl bg-paper p-2.5 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-raven/45">Session</span>
                    <span className="text-[10px] font-extrabold text-iridescence">Booked</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto relative overflow-hidden card card-dark p-10 md:p-14 text-center">
          <div className="blob blob-violet w-64 h-64 -right-12 -top-16 !opacity-50" />
          <div className="blob blob-teal w-52 h-52 -left-10 -bottom-12 !opacity-45" />
          <div className="blob blob-coral w-36 h-36 right-1/3 -bottom-8 !opacity-35" />
          <div className="relative z-10">
            <p className="logo-mark text-3xl mb-5 text-white">Raven<span>.</span></p>
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Join Raven as a tutor.</h2>
            <p className="text-white/55 mb-8">Start with a 30-day free trial, then pick Basic or Premium.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/signup?role=tutor" className="btn btn-teal">Join now</Link>
              <Link to="/pricing#tutor-plans" className="btn btn-white">View tutor pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
