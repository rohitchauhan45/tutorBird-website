import { Link } from 'react-router-dom'
import Discover from '../sections/Discover.jsx'
import { PageHeroBlob } from '../components/OrganicShapes.jsx'

export default function FindTutorPage() {
  return (
    <main className="min-h-screen">
      <header className="page-hero bg-paper border-b border-raven/[0.06] relative overflow-hidden">
        <PageHeroBlob />
        <div className="max-w-7xl mx-auto relative">
          <p className="eyebrow mb-4">Find a tutor</p>
          <h1 className="text-4xl md:text-6xl mb-5 max-w-3xl">The right tutor for HSC, debating, and public speaking.</h1>
          <p className="text-xl text-raven/55 max-w-xl mb-8">
            Browse full profiles, approximate distance, and availability, then sign up free to message and book.
          </p>
          <Link to="/signup" className="btn btn-teal">Sign up for free</Link>
        </div>
      </header>
      <Discover preview={false} showHeader={false} />
    </main>
  )
}
