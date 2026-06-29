import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AuthProvider } from './context/AuthContext.jsx'
import store from './redux/store.jsx'
import ErrorBoundary from './ErrorBoundary'

// Global handlers to log uncaught errors and promise rejections
window.addEventListener('error', (e) => {
  console.error('Global error caught:', e.error || e)
})
window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason)
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <AuthProvider><App /></AuthProvider>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
)
