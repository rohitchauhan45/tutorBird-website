import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const toTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    if (!hash) {
      toTop()
      const frame = requestAnimationFrame(toTop)
      return () => cancelAnimationFrame(frame)
    }

    const id = hash.replace('#', '')
    const toSection = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const frame = requestAnimationFrame(toSection)
    const timer = setTimeout(toSection, 80)
    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(timer)
    }
  }, [pathname, hash])

  return null
}
