import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './context/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*add context provider at the root level */}
    <ContextProvider>
    <App />
    </ContextProvider>
  </StrictMode>,
)
