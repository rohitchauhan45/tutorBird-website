import { Link } from 'react-router-dom'
import HowItWorksGrid from '../components/HowItWorksGrid.jsx'
import { CalendarVisual } from '../components/Visuals.jsx'
import { PageHeroBlob } from '../components/OrganicShapes.jsx'

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-paper">
      <header className="page-hero relative overflow-hidden">
        <PageHeroBlob />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <p className="eyebrow mb-4">How it works</p>
            <h1 className="text-4xl md:text-6xl mb-5">Find. Connect. Book. Learn. Manage.</h1>
            <p className="text-xl text-raven/55 mb-8 max-w-lg">
              A simple path from discovering a tutor to running every lesson, with an in built calendar at the centre.
            </p>
            <Link to="/signup" className="btn btn-teal">Sign up for free</Link>
          </div>
          <CalendarVisual />
        </div>
      </header>
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <HowItWorksGrid large />
        </div>
      </section>
    </main>
  )
}
