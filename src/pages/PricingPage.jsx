import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHeroBlob } from '../components/OrganicShapes.jsx'

function Amount({ monthly, yearly }) {
  return (
    <div className="text-5xl font-extrabold tracking-tight mb-1">
      <span className="price-amount" data-period="monthly">{monthly}</span>
      <span className="price-amount" data-period="yearly">{yearly}</span>
      <span className="text-lg font-semibold text-raven/35">
        <span className="price-amount" data-period="monthly">/mo</span>
        <span className="price-amount" data-period="yearly">/yr</span>
      </span>
    </div>
  )
}

function BillingToggle({ billing, setBilling }) {
  return (
    <div className="flex justify-center mb-6">
    <div className="billing-toggle" role="group" aria-label="Billing period">
      <button type="button" className={billing === 'monthly' ? 'is-active' : ''} onClick={() => setBilling('monthly')}>Monthly</button>
      <button type="button" className={billing === 'yearly' ? 'is-active' : ''} onClick={() => setBilling('yearly')}>
        Yearly <span className="text-coral ml-1">−2 mo</span>
      </button>
    </div>
    </div>
  )
}

export default function PricingPage() {
  const [billing, setBilling] = useState('monthly')

  return (
    <main className={`min-h-screen ${billing === 'yearly' ? 'billing-yearly' : ''}`}>
      <header className="page-hero text-center relative overflow-hidden bg-paper">
        <PageHeroBlob />
        <div className="relative">
        <p className="eyebrow mb-4">Pricing</p>
        <h1 className="text-4xl md:text-6xl mb-5">Plans for families and tutors.</h1>
        <p className="text-xl text-raven/55 max-w-xl mx-auto mb-8">
          Parents browse, message, and book for free. Tutors start with a 30-day trial.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/pricing#parent-plans" className="btn btn-outline">Parent plans</Link>
          <Link to="/pricing#tutor-plans" className="btn btn-teal">Start your tutor trial</Link>
        </div>
        </div>
      </header>

      <section className="pb-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 id="parent-plans" className="text-2xl md:text-3xl mb-5 scroll-mt-28">For parents & students</h2>
          <BillingToggle billing={billing} setBilling={setBilling} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
            <div className="card p-8 flex flex-col">
              <p className="text-sm font-bold text-iridescence mb-2">No fee for access</p>
              <h3 className="text-2xl mb-3">Free</h3>
              <Amount monthly="$0" yearly="$0" />
              <p className="text-raven/50 mb-8">Browse, message, and book tutors.</p>
              <ul className="space-y-3 mb-10 flex-1">
                <li className="check-row">Browse tutors</li>
                <li className="check-row">Message tutors</li>
                <li className="check-row">Book sessions</li>
              </ul>
              <Link to="/signup" className="btn btn-outline w-full">Sign up for free</Link>
            </div>
            <div className="card card-dark p-8 flex flex-col relative">
              <span className="absolute top-0 right-0 text-xs font-bold tracking-wide uppercase bg-violet text-white px-3 py-1.5 rounded-bl-2xl rounded-tr-[1.15rem]">Popular</span>
              <p className="text-sm font-bold text-sky mb-2">Parents</p>
              <h3 className="text-2xl mb-3">Premium</h3>
              <div className="text-5xl font-extrabold tracking-tight mb-1 text-white">
                <span className="price-amount" data-period="monthly">$24.95</span>
                <span className="price-amount" data-period="yearly">$249.95</span>
                <span className="text-lg font-semibold text-white/40">
                  <span className="price-amount" data-period="monthly">/mo</span>
                  <span className="price-amount" data-period="yearly">/yr</span>
                </span>
              </div>
              <p className="text-white/55 mb-8">Everything in Free, plus study tools.</p>
              <ul className="space-y-3 mb-10 flex-1">
                <li className="check-row">AI practice</li>
                <li className="check-row">Session recordings</li>
                <li className="check-row">Weekly progress reports</li>
              </ul>
              <Link to="/signup" className="btn btn-teal w-full">Upgrade to Premium</Link>
            </div>
          </div>

          <h2 id="tutor-plans" className="text-2xl md:text-3xl mb-3 scroll-mt-28">For tutors</h2>
          <p className="text-raven/50 mb-6">Tutors start with a 30-day free trial, then choose Basic or Premium. Yearly saves the equivalent of 2 months.</p>
          <div className="card card-dark p-8 md:p-10 mb-5 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-sm font-bold text-sky mb-2">Tutors only</p>
              <h3 className="text-2xl mb-2 text-white">30-day free trial</h3>
              <p className="text-white/55">Get listed, take bookings, and use the in-built calendar before you pick a paid tutor plan.</p>
            </div>
            <Link to="/become-a-tutor" className="btn btn-teal shrink-0">Start your tutor trial</Link>
          </div>
          <BillingToggle billing={billing} setBilling={setBilling} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card p-8 flex flex-col">
              <p className="text-sm font-bold text-iridescence mb-2">After your tutor trial</p>
              <h3 className="text-2xl mb-3">Basic</h3>
              <Amount monthly="$14.95" yearly="$149.95" />
              <p className="text-raven/50 mb-8">Stay listed and keep taking bookings.</p>
              <ul className="space-y-3 mb-10 flex-1">
                <li className="check-row">Get listed on Raven</li>
                <li className="check-row">Take bookings</li>
                <li className="check-row">Tutor profile</li>
                <li className="check-row">In-built calendar</li>
              </ul>
              <Link to="/become-a-tutor" className="btn btn-outline w-full">Start your tutor trial</Link>
            </div>
            <div className="card p-8 flex flex-col">
              <p className="text-sm font-bold text-iridescence mb-2">After your tutor trial</p>
              <h3 className="text-2xl mb-3">Premium</h3>
              <Amount monthly="$29.95" yearly="$299.95" />
              <p className="text-raven/50 mb-8">Your own classroom, plus tools to teach and get found.</p>
              <ul className="space-y-3 mb-10 flex-1">
                <li className="check-row">Online classroom & whiteboard</li>
                <li className="check-row">Auto-invoicing</li>
                <li className="check-row">HSC practice tests</li>
                <li className="check-row">Enhanced profile visibility</li>
              </ul>
              <Link to="/become-a-tutor" className="btn btn-outline w-full">Start your tutor trial</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
