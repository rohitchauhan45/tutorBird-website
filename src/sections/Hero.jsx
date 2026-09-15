import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { HeroVisual } from '../components/Visuals.jsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-[4.75rem] md:pt-[8rem] pb-8 md:pb-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-8 items-start relative z-10">
        <div className="reveal">
          <p className="eyebrow mb-5">Find a tutor. Or become one.</p>
          <h1 className="logo-mark text-5xl md:text-7xl lg:text-[5.5rem] mb-4" aria-label="Raven">
            Raven<span>.</span>
          </h1>
          <p className="font-display !font-normal !leading-[1.1] text-2xl md:text-3xl lg:text-[3.3rem] text-raven mb-6">
            <span className="block">Learning that</span>
            <span className="block">
              fits <em className="italic text-violet !font-normal">your</em> life.
            </span>
          </p>
          <p className="text-lg md:text-xl text-raven/60 max-w-md leading-relaxed mb-9">
            Personalised tutoring for every stage of learning. HSC subjects, debating, and public speaking, all in one place.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/signup" className="btn btn-teal btn-lg">
              Sign up <ArrowRight size={16} strokeWidth={1.7} aria-hidden="true" />
            </Link>
            <Link to="/become-a-tutor" className="btn btn-outline btn-lg">Become a Tutor</Link>
          </div>
        </div>
        <div className="reveal">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
