import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { HeroVisual } from '../components/Visuals.jsx'
import { useTypewriter } from '../hooks/useTypewriter.js'

const WORDS = ['HSC tutoring', 'debating', 'public speaking']

export default function Hero() {
  const typed = useTypewriter(WORDS)

  return (
    <section className="relative overflow-hidden bg-paper pt-[4.75rem] md:pt-[8rem] pb-8 md:pb-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-8 items-start relative z-10">
        <div className="reveal">
          <p className="eyebrow mb-5">Raven · Learning that fits your life.</p>
          <p className="text-xl md:text-2xl font-medium text-raven/55 mb-2">Find the right tutor for</p>
          <h1 className="text-4xl md:text-6xl lg:text-[4.15rem] mb-6 min-h-[1.2em]" aria-label="Find the right tutor for HSC tutoring, debating, and public speaking">
            {typed}
            <span className="typed-caret" aria-hidden="true" />
          </h1>
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
