import { GraduationCap, TrendingUp, BookOpen, BadgeCheck, MessagesSquare, Mic } from 'lucide-react'
import { EXAM_FOCUS, SPECIALTIES } from '../data/site.js'
import { PageHeroBlob } from '../components/OrganicShapes.jsx'

const EXAM_ICONS = {
  grad: GraduationCap,
  trend: TrendingUp,
  book: BookOpen,
  badge: BadgeCheck,
}

const SPECIALTY_ICONS = {
  debate: MessagesSquare,
  speak: Mic,
}

const TONE = {
  violet: 'bg-violet/15 text-violet',
  teal: 'bg-sky text-iridescence',
  coral: 'bg-coral/15 text-coral',
  sky: 'bg-sky text-iridescence',
}

export default function HscSpecialtiesPage() {
  return (
    <main className="min-h-screen">
      <header className="page-hero relative overflow-hidden bg-paper">
        <PageHeroBlob />
        <div className="max-w-7xl mx-auto relative">
          <p className="eyebrow mb-4">Specialties</p>
          <h1 className="text-4xl md:text-6xl mb-5 max-w-3xl">The subjects students actually need.</h1>
          <p className="text-xl text-raven/55 max-w-2xl">
            Tutoring runs from K-12. The depth is in OC, Selective, and HSC, and in debating and public speaking.
          </p>
        </div>
      </header>

      <section className="py-20 px-6 md:px-10 bg-paper">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg text-raven/55 max-w-2xl mb-10">
            Specialist tutors cover a range of HSC subjects in one place: Year 12 graduates with Band 6s and strong ATARs, who know what both the Preliminary and HSC years actually demand. The same standard is here for OC and Selective, so students can aim high before Year 11 even starts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EXAM_FOCUS.map((item) => {
              const Icon = EXAM_ICONS[item.icon]
              return (
                <div key={item.label} className="card p-5 h-full">
                  <div className={`icon-orb mb-4 ${TONE[item.tone]}`}>
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h2 className="text-xl mb-2">{item.label}</h2>
                  <p className="text-raven/55 leading-relaxed">{item.copy}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-3">Specialist skills</h2>
          <p className="text-lg text-raven/55 max-w-2xl mb-10">
            Debating and public speaking sit alongside the exams. Find tutors who can teach a range of skills, from building an argument to holding a room, so confidence shows up when it counts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SPECIALTIES.map((s) => {
              const Icon = SPECIALTY_ICONS[s.icon]
              return (
                <div key={s.name} className="card p-10">
                  <span className={`icon-orb mb-5 ${TONE[s.tone]}`}>
                    {Icon ? <Icon size={22} strokeWidth={1.8} aria-hidden="true" /> : null}
                  </span>
                  <h2 className="text-3xl mb-3">{s.name}</h2>
                  <p className="text-lg text-raven/55 leading-relaxed">{s.copy}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
