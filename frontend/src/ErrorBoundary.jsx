import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // Log to console for dev debugging (also visible in browser devtools)
    console.error('Captured error in ErrorBoundary:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100 p-6">
          <div className="max-w-2xl rounded-2xl border border-red-700 bg-slate-950 p-8 text-center shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-red-400">Something went wrong</h2>
            <p className="mb-4 text-sm text-slate-300">An unexpected error occurred while rendering the app. Check the browser console for details.</p>
            <pre className="max-h-48 overflow-auto rounded bg-black/20 p-3 text-left text-xs text-red-200">{String(this.state.error)}</pre>
            <div className="mt-4">
              <button onClick={() => window.location.reload()} className="rounded-2xl bg-emerald-500 px-4 py-2 font-semibold text-slate-900">Reload</button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
