import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.jsx'
import { apiClient } from '../config/api'


const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.email || !form.password) return setError('Please enter email and password')

    try {
      setLoading(true)
      const res = await apiClient.post('/api/auth/login', {
        email: form.email,
        password: form.password,
      })
      const data = res.data
      if (res.status >= 400) {
        setError(data.message || 'Login failed')
      } else {
        if (data.token) localStorage.setItem('token', data.token)
        login({ _id: data._id, name: data.name, email: data.email, role: data.role, token: data.token })
        navigate('/')
      }
    } catch (err) {
      setError(`Network error. Please try again.${err}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-12">
      
      <div className="w-full max-w-xl rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">
        
        <h2 className="text-center text-3xl font-bold text-white">
          Welcome to <span className="text-yellow-500">ShopNest</span>
        </h2>
        <p className="mt-2 text-center text-slate-400">
          Login to continue shopping
        </p>

        {error && <div className="mt-4 rounded bg-red-600/20 p-3 text-red-300">{error}</div>}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-400 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
              placeholder="enter email address"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-400 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
              placeholder="enter password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-yellow-500 py-3 font-semibold text-slate-950 transition hover:bg-yellow-400 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Don't have an account?
          <Link
            to="/register"
            className="ml-1 font-medium text-yellow-500 hover:text-yellow-400"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
