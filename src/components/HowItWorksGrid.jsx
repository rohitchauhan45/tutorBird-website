import { Search, MessageCircle, Calendar, GraduationCap, LayoutGrid } from 'lucide-react'
import { HOW_IT_WORKS } from '../data/site.js'

const STEP_ICONS = {
  search: Search,
  chat: MessageCircle,
  calendar: Calendar,
  learn: GraduationCap,
  manage: LayoutGrid,
}

const ORB = ['bg-violet/15 text-violet', 'bg-sky text-iridescence', 'bg-coral/15 text-coral', 'bg-sky text-iridescence', 'bg-sky text-iridescence']

function MiniFind() {
  return (
    <div className="mt-5 flex flex-wrap gap-1.5">
      {['HSC', 'Maths Adv', 'Debate'].map((t) => (
        <span key={t} className="text-[10px] font-bold px-2 py-1 rounded-full bg-sky text-iridescence">{t}</span>
      ))}
    </div>
  )
}

function MiniConnect() {
  return (
    <div className="mt-5 space-y-1.5">
      <div className="h-2 w-16 rounded-full bg-sky" />
      <div className="h-2 w-24 rounded-full bg-iridescence/30 ml-auto" />
    </div>
  )
}

function MiniBook() {
  return (
    <div className="mt-5 grid grid-cols-5 gap-1">
      {Array.from({ length: 10 }, (_, i) => (
        <span
          key={i}
          className={`h-5 rounded-md ${i === 2 ? 'bg-iridescence' : i === 6 ? 'bg-sheen' : 'bg-sky/80'}`}
        />
      ))}
    </div>
  )
}

function MiniLearn() {
  return (
    <div className="mt-5 flex gap-2">
      <span className="w-8 h-8 rounded-lg bg-violet/15" />
      <span className="w-8 h-8 rounded-lg bg-sky" />
      <span className="w-8 h-8 rounded-lg bg-coral/20" />
    </div>
  )
}

function MiniManage() {
  return (
    <div className="mt-5 rounded-xl bg-paper p-2.5 flex items-center justify-between">
      <span className="text-[10px] font-bold text-raven/45">Invoice</span>
      <span className="text-[10px] font-extrabold text-iridescence">Paid</span>
    </div>
  )
}

const MINIS = [MiniFind, MiniConnect, MiniBook, MiniLearn, MiniManage]

export default function HowItWorksGrid({ large = false }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
      {HOW_IT_WORKS.map((step, i) => {
        const Mini = MINIS[i]
        const Icon = STEP_ICONS[step.icon] || Search
        return (
          <div className="relative reveal" key={step.num}>
            <div className={`card p-5 h-full relative ${large ? 'min-h-[220px]' : ''}`}>
              <p className="absolute top-4 right-4 text-sm font-bold text-violet">{step.num}</p>
              <div className={`icon-orb mb-4 ${ORB[i]}`}>
                <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className="text-xl mb-2 pr-10">{step.title}</h3>
              <p className="text-[0.98rem] text-raven/55 leading-relaxed">{step.copy}</p>
              <Mini />
            </div>
          </div>
        )
      })}
    </div>
  )
}
