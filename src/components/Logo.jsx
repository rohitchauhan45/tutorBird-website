import { Link } from 'react-router-dom'
// import logo1 from '../public/logo1.png'

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`inline-flex items-center shrink-0 ${className}`} aria-label="Raven home">
      {/* <img
        src={logo1}
        alt="Raven"
        className="h-[4.5rem] md:h-[5.5rem] w-auto object-contain object-left"
      /> */}
      <span className="logo-mark text-2xl text-raven">
        Raven<span>.</span>
      </span>
    </Link>
  )
}
