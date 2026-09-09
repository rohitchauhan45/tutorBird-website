import { useMemo, useState } from 'react'
import TutorCard from '../components/TutorCard.jsx'
import { FILTERS, TUTORS } from '../data/site.js'

export default function Discover({ preview = false, showHeader = true }) {
  const [filter, setFilter] = useState('All')
  const list = useMemo(() => {
    const rows = preview ? TUTORS.slice(0, 3) : TUTORS
    if (filter === 'All') return rows
    if (filter === 'HSC') {
      return rows.filter((t) => /HSC|Advanced|Extension|Physics|Chemistry|Biology|English/i.test(`${t.headline} ${t.subjects}`))
    }
    if (filter === 'Online') return rows.filter((t) => t.availability.includes('Online'))
    if (filter === 'In-person') return rows.filter((t) => t.availability.toLowerCase().includes('in-person'))
    return rows.filter((t) => `${t.headline} ${t.subjects}`.includes(filter))
  }, [filter, preview])

  return (
    <section id="find-a-tutor" className="pt-10 md:pt-12 pb-10 md:pb-12 px-6 md:px-10 bg-paper">
      <div className="max-w-7xl mx-auto">
        {showHeader && (
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 reveal">
          <div>
            <p className="eyebrow mb-3">Discover</p>
            <h2 className="text-3xl md:text-5xl">Find your tutor.</h2>
          </div>
          <p className="text-lg text-raven/55 max-w-sm">
          Search subjects from primary to HSC, plus debating 
          and public speaking.
          </p>
        </div>
        )}

        <div className="flex flex-wrap gap-2 mb-10 reveal">
          {FILTERS.map((f) => (
            <button type="button" key={f} className={`pill ${filter === f ? 'is-on' : ''}`} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((tutor) => (
            <div className="reveal" key={tutor.name}>
              <TutorCard tutor={tutor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
