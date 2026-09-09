import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <main className="min-h-screen page-hero flex items-start justify-center px-6">
      <div className="card w-full max-w-md p-8">
        <p className="eyebrow mb-2">Welcome back</p>
        <h1 className="text-3xl mb-6">Log in</h1>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="login-email" className="block text-sm font-semibold text-raven/50 mb-1.5">Email</label>
            <input id="login-email" type="email" required className="field" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="login-password" className="block text-sm font-semibold text-raven/50 mb-1.5">Password</label>
            <input id="login-password" type="password" required className="field" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn btn-teal w-full mt-2">Log in</button>
        </form>
        <p className="text-sm text-raven/50 mt-6 text-center">
          New to Raven? <Link to="/signup" className="text-violet font-bold">Sign up for free</Link>
        </p>
      </div>
    </main>
  )
}
