import { Link, useLocation } from 'react-router-dom'

export default function SectionLink({ hash, children, className = '', onClick }) {
  const { pathname, hash: currentHash } = useLocation()
  const active = pathname === '/' && currentHash === hash

  return (
    <Link
      to={{ pathname: '/', hash }}
      className={`${className} ${active ? 'is-active' : ''}`.trim()}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
