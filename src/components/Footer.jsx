import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import SectionLink from './SectionLink.jsx'

export default function Footer() {
  return (
    <footer className="bg-paper pt-20 pb-10 px-6 md:px-10 border-t border-raven/[0.06]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2 md:col-span-1">
          {/* <Logo className="mb-4" /> */}
      <span className="logo-mark text-2xl text-raven">
        RAVEN<span>.</span>
      </span>
          <p className="text-base text-raven/50 leading-relaxed max-w-[16rem]">Learning that fits your life.</p>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-raven/40 mb-5">Platform</p>
          <ul className="space-y-3 text-base text-raven/60">
            <li><SectionLink hash="#find-a-tutor">Find a Tutor</SectionLink></li>
            <li><SectionLink hash="#how-it-works">How it Works</SectionLink></li>
            <li><SectionLink hash="#hsc-specialties">Specialties</SectionLink></li>
            <li><Link to="/become-a-tutor">Become a Tutor</Link></li>
            <li><Link to="/pricing#tutor-plans">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-raven/40 mb-5">Support</p>
          <ul className="space-y-3 text-base text-raven/60">
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact us</a></li>
            <li><a href="#help">Help</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-raven/40 mb-5">Legal</p>
          <ul className="space-y-3 text-base text-raven/60">
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#terms">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-raven/15 to-transparent mb-8" />
      <div className="text-center text-sm text-raven/35">© 2026 Raven. All rights reserved.</div>
    </footer>
  )
}
