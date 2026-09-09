import StoreBadges from '../components/StoreBadges.jsx'

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10 bg-midnight text-white">
      <div className="blob blob-violet w-72 h-72 -right-16 -top-10 !opacity-40" />
      <div className="blob blob-teal w-56 h-56 left-10 bottom-0 !opacity-35" />
      <div className="max-w-3xl mx-auto text-center relative z-10 reveal">
        <p className="logo-mark text-4xl mb-8 text-white">Raven<span>.</span></p>
        <h2 className="text-3xl md:text-5xl mb-5 text-white">Ready to find the right tutor?</h2>
        <p className="text-xl text-white/55 mb-10 leading-relaxed">
          Join Raven for free. Browse HSC tutors, debating coaches, and public speaking specialists. No fee for access.
        </p>
        <StoreBadges />
      </div>
    </section>
  )
}
