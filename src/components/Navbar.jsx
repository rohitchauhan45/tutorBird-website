import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import SectionLink from './SectionLink.jsx'

const SECTIONS = [
  { hash: '#find-a-tutor', label: 'Find a Tutor' },
  { hash: '#how-it-works', label: 'How it Works' },
  { hash: '#hsc-specialties', label: 'Specialties' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const close = () => setOpen(false)

  const goToTutorPricing = () => {
    if (location.pathname !== '/pricing') return
    const section = document.getElementById('tutor-plans')
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-5 md:px-8 py-4 flex items-center gap-6 transition-all duration-300 ${
          scrolled || open
            ? 'bg-paper/90 backdrop-blur-md border-b border-raven/[0.06]'
            : 'bg-paper/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <Logo />

        <div className="hidden lg:flex items-center gap-7 flex-1">
          {SECTIONS.map((item) => (
            <SectionLink key={item.hash} hash={item.hash} className="nav-link">
              {item.label}
            </SectionLink>
          ))}
          <NavLink to="/pricing" onClick={goToTutorPricing} className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>
            Pricing
          </NavLink>
        </div>

        <div className="hidden lg:flex items-center gap-5 ml-auto">
          <NavLink
            to="/become-a-tutor"
            className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
          >
            Become a Tutor
          </NavLink>
          <Link to="/signup" className="btn btn-violet !py-2.5 !px-4 text-sm">
            Sign up
          </Link>
          <Link to="/login" className="btn btn-ghost text-sm font-semibold">
            Log in
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden ml-auto w-11 h-11 rounded-xl border border-raven/10 bg-white flex items-center justify-center text-raven"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} strokeWidth={1.8} aria-hidden="true" />
        </button>
      </nav>

      {open && (
        <div className="mobile-panel lg:hidden" onClick={close}>
          <div className="absolute right-0 top-0 h-full w-[min(100%,22rem)] bg-paper p-6 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <p className="font-extrabold text-lg">Menu</p>
              <button type="button" className="text-raven/40" onClick={close} aria-label="Close">
                <X size={22} strokeWidth={1.8} aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-col gap-5 text-lg font-semibold">
              {SECTIONS.map((item) => (
                <SectionLink
                  key={item.hash}
                  hash={item.hash}
                  onClick={close}
                  className={location.hash === item.hash ? 'text-violet' : ''}
                >
                  {item.label}
                </SectionLink>
              ))}
              <Link to="/pricing#tutor-plans" onClick={() => { goToTutorPricing(); close() }} className={location.pathname === '/pricing' ? 'text-violet' : ''}>
                Pricing
              </Link>
              <Link to="/become-a-tutor" onClick={close} className="text-violet">Become a Tutor</Link>
            </div>
            <div className="mt-auto flex flex-col gap-3">
              <Link to="/signup" onClick={close} className="btn btn-violet w-full">Sign up</Link>
              <Link to="/login" onClick={close} className="btn btn-outline w-full">Log in</Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
