import { GraduationCap, TrendingUp, BookOpen, BadgeCheck, MessagesSquare, Mic } from 'lucide-react'
import { EXAM_FOCUS, SPECIALTIES } from '../data/site.js'
import { SectionBlob } from '../components/OrganicShapes.jsx'

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

export default function HscSpecialties() {
  return (
    <section id="hsc-specialties" className="pt-8 md:pt-6 pb-16 md:pb-20 px-6 md:px-10 relative overflow-hidden bg-paper">
      <SectionBlob tone="violet" className="w-80 h-80 -right-20 top-0" />
      <SectionBlob tone="coral" className="w-56 h-56 left-10 bottom-0" />
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-12 reveal max-w-2xl">
          <p className="eyebrow mb-3">Specialties</p>
          <h2 className="text-3xl md:text-5xl mb-4">The subjects students actually need.</h2>
          <p className="text-lg text-raven/55">
          Raven specialises in HSC tutoring, plus first-class debating 
          and public speaking coaching
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {EXAM_FOCUS.map((item) => {
            const Icon = EXAM_ICONS[item.icon]
            return (
              <div key={item.label} className="reveal card p-5 h-full">
                <div className={`icon-orb mb-4 ${TONE[item.tone]}`}>
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="text-xl mb-2">{item.label}</h3>
                <p className="text-[0.98rem] text-raven/55 leading-relaxed">{item.copy}</p>
              </div>
            )
          })}
        </div>

        <div className="mb-6 reveal max-w-2xl">
          <h3 className="text-2xl md:text-3xl mb-3">Specialist skills</h3>
          <p className="text-lg text-raven/55">
            Debating and public speaking sit alongside the exams. Find tutors who can teach a range of skills, from building an argument to holding a room, so confidence shows up when it counts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SPECIALTIES.map((s) => {
            const Icon = SPECIALTY_ICONS[s.icon]
            return (
              <div key={s.name} className="reveal card p-8">
                <span className={`icon-orb mb-4 ${TONE[s.tone]}`}>
                  {Icon ? <Icon size={22} strokeWidth={1.8} aria-hidden="true" /> : null}
                </span>
                <h3 className="text-2xl mb-2">{s.name}</h3>
                <p className="text-raven/55 leading-relaxed">{s.copy}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
