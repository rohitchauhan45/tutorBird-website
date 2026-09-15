import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <main className="relative overflow-hidden min-h-screen flex items-start justify-center px-6 pt-20 md:pt-[5.5rem] pb-8">
      <div className="blob blob-teal w-64 h-64 -right-16 -top-10 !opacity-40" />
      <div className="blob blob-violet w-52 h-52 -left-14 bottom-0 !opacity-35" />
      <div className="blob blob-coral w-36 h-36 right-1/4 -bottom-8 !opacity-30" />
      <div className="card w-full max-w-md p-8 relative z-10">
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
