import HowItWorksGrid from '../components/HowItWorksGrid.jsx'
import { SectionBlob } from '../components/OrganicShapes.jsx'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden pt-16 md:pt-20 pb-10 md:pb-12 px-6 md:px-10 bg-paper">
      <SectionBlob tone="teal" className="w-72 h-72 -left-16 top-10" />
      <SectionBlob tone="coral" className="w-56 h-56 right-0 bottom-0" />
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-12 reveal max-w-2xl">
          <p className="eyebrow mb-3">How it works</p>
          <h2 className="text-3xl md:text-5xl mb-4">Find. Connect. Book. Learn.</h2>
          <p className="text-lg text-raven/55">
            The same simple journey, now with an in-built calendar so sessions fit around your week.
          </p>
        </div>
        <HowItWorksGrid />
      </div>
    </section>
  )
}