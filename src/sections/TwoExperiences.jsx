import { Link } from 'react-router-dom'
import { Search, MessageCircle, Calendar, GraduationCap, Sparkles, Users, Presentation, TrendingUp } from 'lucide-react'

const PARENT_ICONS = [
  { Icon: Search, label: 'Find', tone: 'bg-[#EDE6FB] text-violet' },
  { Icon: MessageCircle, label: 'Message', tone: 'bg-sky text-iridescence' },
  { Icon: Calendar, label: 'Book', tone: 'bg-[#F8E4E1] text-coral' },
  { Icon: GraduationCap, label: 'Learn', tone: 'bg-sky text-iridescence' },
]

const TUTOR_ICONS = [
  { Icon: Sparkles, label: 'Get found', tone: 'bg-[#EDE6FB] text-violet' },
  { Icon: Users, label: 'Manage', tone: 'bg-sky text-iridescence' },
  { Icon: Presentation, label: 'Teach', tone: 'bg-[#F8E4E1] text-coral' },
  { Icon: TrendingUp, label: 'Grow', tone: 'bg-sky text-iridescence' },
]

function IconRow({ items, labelClass }) {
  return (
    <div className="flex gap-3 mb-6">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center gap-1.5">
          <span className={`icon-orb ${item.tone}`}>
            <item.Icon size={22} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className={`text-[10px] font-bold ${labelClass}`}>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export default function TwoExperiences() {
  return (
    <section className="relative overflow-hidden pt-8 md:pt-12 pb-10 md:pb-14 px-6 md:px-10">
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-12 reveal max-w-xl">
          <p className="eyebrow mb-3">Two experiences</p>
          <h2 className="text-3xl md:text-5xl">One platform. Two doors.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="reveal card p-8 md:p-10 bg-gradient-to-br from-white to-sky/50">
            <IconRow items={PARENT_ICONS} labelClass="text-raven/45" />
            <p className="eyebrow mb-2">Parents & students</p>
            <h3 className="text-3xl mb-6">Find, message, and book tutors.</h3>
            <ul className="space-y-3 mb-10">
              <li className="check-row">Find the right tutor</li>
              <li className="check-row">Message and connect</li>
              <li className="check-row">Book with the calendar</li>
              <li className="check-row">Learn online or in person</li>
            </ul>
            <Link to="/signup" className="btn btn-teal">Sign up for free</Link>
          </div>
          <div className="reveal card card-dark p-8 md:p-10">
            <IconRow items={TUTOR_ICONS} labelClass="text-sky" />
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-sheen mb-2">Tutors</p>
            <h3 className="text-3xl mb-6">Grow your practice.</h3>
            <ul className="space-y-3 mb-10">
              <li className="check-row">Get discovered by local families</li>
              <li className="check-row">Manage students and bookings</li>
              <li className="check-row">Teach with classroom tools</li>
              <li className="check-row">Grow your practice</li>
            </ul>
            <Link to="/become-a-tutor" className="btn btn-white">Become a tutor</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
