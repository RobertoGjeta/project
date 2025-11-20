import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    const newUser = { username, email, password }
    localStorage.setItem('user', JSON.stringify(newUser))

    alert('Account created successfully. You can now log in.')
    navigate('/login')
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-rose-50">
      <div className="bg-white p-10 rounded-xl shadow-md border border-rose-100 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-rose-700 mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full p-3 border border-rose-200 rounded-md bg-white focus:ring-2 focus:ring-rose-300 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-3 border border-rose-200 rounded-md bg-white focus:ring-2 focus:ring-rose-300 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-3 border border-rose-200 rounded-md bg-white focus:ring-2 focus:ring-rose-300 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-rose-600 text-white font-semibold rounded-md hover:bg-rose-700 transition-colors"
          >
            Create Account
          </button>

           <p className="text-sm text-center text-gray-600 mt-2">
            Already have an account? <Link to ="/login"><span className="font-semibold">Click here.</span></Link> 
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
