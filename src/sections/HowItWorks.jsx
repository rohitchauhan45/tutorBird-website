import HowItWorksGrid from '../components/HowItWorksGrid.jsx'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden pt-8 md:pt-14 pb-20 md:pb-28 px-6 md:px-10 bg-paper">
      <div
        className="pointer-events-none absolute left-4 md:left-8 top-6 md:top-10 w-56 h-56 md:w-72 md:h-72 rounded-full bg-sheen/[0.16]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-4 md:right-10 bottom-6 md:bottom-10 w-44 h-44 md:w-56 md:h-56 rounded-full bg-coral/[0.16]"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-12 reveal max-w-2xl">
          <p className="eyebrow mb-3">How it works</p>
          <h2 className="text-3xl md:text-5xl mb-4">Find. Connect. Book. Learn.</h2>
          <p className="text-lg text-raven/55">
            The same simple journey, now with an in built calendar so sessions fit around your week.
          </p>
        </div>
        <HowItWorksGrid />
      </div>
    </section>
  )
}
