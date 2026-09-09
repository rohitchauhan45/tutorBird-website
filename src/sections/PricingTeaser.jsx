import { Link } from 'react-router-dom'

export default function PricingTeaser() {
  return (
    <section className="pt-8 md:pt-10 pb-20 md:pb-24 px-6 md:px-10 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 reveal">
          <p className="eyebrow mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl">Simple pricing.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="reveal card p-8">
            <p className="text-sm font-bold text-violet mb-2">Parents & students</p>
            <h3 className="text-2xl mb-3">Free to browse, message & book</h3>
            <p className="text-raven/55 mb-6">No fee for access. Upgrade later for AI practice, recordings, and progress reports.</p>
            <ul className="space-y-3 mb-8">
              <li className="check-row">Browse tutors</li>
              <li className="check-row">Message tutors</li>
              <li className="check-row">Book sessions</li>
            </ul>
            <p className="text-4xl font-extrabold tracking-tight">$0</p>
          </div>
          <div className="reveal card card-dark p-8">
            <p className="text-sm font-bold text-sky mb-2">Parents & students</p>
            <h3 className="text-2xl mb-3">Premium</h3>
            <p className="text-white/60 mb-6">AI practice, recordings, and weekly progress reports, on top of free browse, message, and book.</p>
            <ul className="space-y-3 mb-8">
              <li className="check-row">AI practice</li>
              <li className="check-row">Session recordings</li>
              <li className="check-row">Weekly progress reports</li>
            </ul>
            <p className="text-4xl font-extrabold tracking-tight">$24.95<span className="text-lg font-semibold text-white/40">/mo</span></p>
          </div>
        </div>
        <div className="mt-8 reveal">
          <Link to="/pricing" className="btn btn-outline">View pricing</Link>
        </div>
      </div>
    </section>
  )
}
