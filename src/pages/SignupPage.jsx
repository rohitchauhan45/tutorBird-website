import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const ROLES = {
  student: {
    label: 'Student',
    eyebrow: 'Parents & students',
    title: 'Sign up for free',
    copy: 'Browse, message, and book tutors. No fee for access.',
    cta: 'Create free account',
  },
  tutor: {
    label: 'Tutor',
    eyebrow: 'Tutors',
    title: 'Create tutor account',
    copy: 'Get listed, take bookings, and start your 30-day free trial.',
    cta: 'Join as a tutor',
  },
}

export default function SignupPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const paramRole = searchParams.get('role') === 'tutor' ? 'tutor' : 'student'
  const [role, setRole] = useState(paramRole)
  const [done, setDone] = useState(false)

  useEffect(() => {
    setRole(paramRole)
    setDone(false)
  }, [paramRole])

  const selectRole = (next) => {
    setRole(next)
    setDone(false)
    setSearchParams(next === 'tutor' ? { role: 'tutor' } : {}, { replace: true })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setDone(true)
  }

  const copy = ROLES[role]

  return (
    <main className="min-h-screen page-hero flex items-start justify-center px-6">
      <div className="card w-full max-w-md p-8">
        <p className="eyebrow mb-2">{copy.eyebrow}</p>
        <h1 className="text-3xl mb-2">{copy.title}</h1>
        <p className="text-raven/50 mb-5">{copy.copy}</p>

        <div className="billing-toggle w-full mb-6" role="group" aria-label="Account type">
          <button
            type="button"
            className={`flex-1 ${role === 'student' ? 'is-active' : ''}`}
            onClick={() => selectRole('student')}
          >
            Student
          </button>
          <button
            type="button"
            className={`flex-1 ${role === 'tutor' ? 'is-active' : ''}`}
            onClick={() => selectRole('tutor')}
          >
            Tutor
          </button>
        </div>

        {done ? (
          <p className="text-violet font-semibold">
            {role === 'tutor'
              ? 'You’re on the tutor list. We’ll be in touch soon.'
              : 'You’re on the list. We’ll be in touch soon.'}
          </p>
        ) : (
          <form className="space-y-4" onSubmit={onSubmit}>
            <input type="hidden" name="role" value={role} />
            <div>
              <label htmlFor="su-name" className="block text-sm font-semibold text-raven/50 mb-1.5">Full name</label>
              <input id="su-name" name="name" required className="field" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="su-email" className="block text-sm font-semibold text-raven/50 mb-1.5">Email</label>
              <input id="su-email" name="email" type="email" required className="field" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="su-password" className="block text-sm font-semibold text-raven/50 mb-1.5">Password</label>
              <input id="su-password" name="password" type="password" required minLength={6} className="field" placeholder="At least 6 characters" />
            </div>
            <button type="submit" className="btn btn-teal w-full mt-2">{copy.cta}</button>
          </form>
        )}

        <p className="text-sm text-raven/50 mt-6 text-center">
          {role === 'student' ? (
            <>
              Want to teach?{' '}
              <button type="button" className="text-violet font-bold" onClick={() => selectRole('tutor')}>
                Sign up as a tutor
              </button>
            </>
          ) : (
            <>
              Looking for a tutor?{' '}
              <button type="button" className="text-violet font-bold" onClick={() => selectRole('student')}>
                Sign up as a student
              </button>
            </>
          )}
        </p>
        {role === 'tutor' && (
          <p className="text-sm text-raven/40 mt-2 text-center">
            Learn more on the{' '}
            <Link to="/become-a-tutor" className="font-bold text-raven/70">Become a tutor</Link>
            {' '}page.
          </p>
        )}
        <p className="text-sm text-raven/40 mt-3 text-center">
          Already have an account? <Link to="/login" className="font-bold text-raven/70">Log in</Link>
        </p>
      </div>
    </main>
  )
}
