import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignupPage() {
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setDone(true)
  }

  return (
    <main className="min-h-screen page-hero flex items-start justify-center px-6">
      <div className="card w-full max-w-md p-8">
        <p className="eyebrow mb-2">Parents & students</p>
        <h1 className="text-3xl mb-2">Sign up for free</h1>
        <p className="text-raven/50 mb-6">Browse, message, and book tutors. No fee for access.</p>
        {done ? (
          <p className="text-violet font-semibold">You’re on the list. We’ll be in touch soon.</p>
        ) : (
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <label htmlFor="su-name" className="block text-sm font-semibold text-raven/50 mb-1.5">Name</label>
              <input id="su-name" name="name" required className="field" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="su-email" className="block text-sm font-semibold text-raven/50 mb-1.5">Email</label>
              <input id="su-email" name="email" type="email" required className="field" placeholder="you@example.com" />
            </div>
            <button type="submit" className="btn btn-teal w-full mt-2">Create free account</button>
          </form>
        )}
        <p className="text-sm text-raven/50 mt-6 text-center">
          Want to teach? <Link to="/become-a-tutor" className="text-violet font-bold">Become a tutor</Link>
        </p>
        <p className="text-sm text-raven/40 mt-3 text-center">
          Already have an account? <Link to="/login" className="font-bold text-raven/70">Log in</Link>
        </p>
      </div>
    </main>
  )
}
