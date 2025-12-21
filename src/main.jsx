import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { BackgroundProvider } from './context/BackgroundContext.jsx'

createRoot(document.getElementById('root')).render(
  <BackgroundProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </BackgroundProvider>
)
