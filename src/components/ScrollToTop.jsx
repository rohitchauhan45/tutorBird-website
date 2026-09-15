import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Home sections linked from the navbar. Fill viewport on jump only. */
const ISOLATE_SECTIONS = new Set(['how-it-works', 'find-a-tutor', 'hsc-specialties'])

const FILL_CLASS = 'section-isolate-fill'

/** Ignore intent briefly after instant jump. */
const ARM_MS = 100

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    let filled = null
    let ready = false
    let armTimer = 0
    let frame = 0
    let retryTimer = 0
    let intentBound = false

    const clearFill = () => {
      if (!filled) return
      filled.classList.remove(FILL_CLASS)
      filled = null
    }

    const onIntent = () => {
      if (!ready || !filled) return
      clearFill()
      detachIntent()
    }

    const onKeyIntent = (event) => {
      if (!ready || !filled) return
      const keys = new Set(['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '])
      if (keys.has(event.key)) onIntent()
    }

    const detachIntent = () => {
      if (!intentBound) return
      window.removeEventListener('wheel', onIntent, true)
      window.removeEventListener('touchmove', onIntent, true)
      window.removeEventListener('keydown', onKeyIntent, true)
      intentBound = false
    }

    const attachIntent = () => {
      if (intentBound) return
      window.addEventListener('wheel', onIntent, { capture: true, passive: true })
      window.addEventListener('touchmove', onIntent, { capture: true, passive: true })
      window.addEventListener('keydown', onKeyIntent, { capture: true })
      intentBound = true
    }

    const armIntent = () => {
      ready = true
    }

    const toTop = () => {
      clearFill()
      detachIntent()
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    if (!hash) {
      toTop()
      frame = requestAnimationFrame(toTop)
      return () => {
        cancelAnimationFrame(frame)
        window.clearTimeout(armTimer)
        clearFill()
        detachIntent()
      }
    }

    const id = hash.replace('#', '')

    const tryIsolate = (el) => {
      if (filled) return
      if (pathname !== '/' || !ISOLATE_SECTIONS.has(id)) return

      const marginTop = Number.parseFloat(getComputedStyle(el).scrollMarginTop) || 88
      const targetHeight = Math.ceil(window.innerHeight - marginTop)

      // Only pad when the next section would otherwise peek into view.
      if (el.offsetHeight >= targetHeight) return

      el.classList.add(FILL_CLASS)
      filled = el
      ready = false
      attachIntent()
      window.clearTimeout(armTimer)
      armTimer = window.setTimeout(armIntent, ARM_MS)
      if ('onscrollend' in window) {
        window.addEventListener('scrollend', armIntent, { once: true })
      }
    }

    const isolateAndScroll = () => {
      const el = document.getElementById(id)
      if (!el) return
      tryIsolate(el)
      el.scrollIntoView({ behavior: 'instant', block: 'start' })
    }

    frame = requestAnimationFrame(isolateAndScroll)
    retryTimer = window.setTimeout(isolateAndScroll, 80)

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(retryTimer)
      window.clearTimeout(armTimer)
      clearFill()
      detachIntent()
    }
  }, [pathname, hash])

  return null
}
