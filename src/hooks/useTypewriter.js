import { useEffect, useState } from 'react'

export function useTypewriter(words, { typeMs = 70, deleteMs = 40, holdMs = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const list = words.join('\u0001')

  useEffect(() => {
    const items = list.split('\u0001')
    if (typeof window === 'undefined') return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(items[0] || '')
      return undefined
    }

    const word = items[index % items.length] || ''

    if (!deleting && text === word) {
      const hold = setTimeout(() => setDeleting(true), holdMs)
      return () => clearTimeout(hold)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % items.length)
      return undefined
    }

    const delay = deleting ? deleteMs : typeMs
    const tick = setTimeout(() => {
      setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)

    return () => clearTimeout(tick)
  }, [text, deleting, index, list, typeMs, deleteMs, holdMs])

  return text
}
