import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import { NavigationMenuDemo } from './els/navbar.tsx'
import { StrictMode } from 'react'
import App from './views/App.tsx'
import { Route, Routes } from 'react-router'
import Stats from './views/Stats.tsx'
import Verify from './views/Verify.tsx'
import Events from './views/Events.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex min-h-svh mx-auto w-6xl flex-col">
        <NavigationMenuDemo />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/wydarzenia" element={<Events />} />
          <Route path="/organizacje" element={<Verify />} />
          <Route path="/wolontariusze" element={<Stats />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
)
