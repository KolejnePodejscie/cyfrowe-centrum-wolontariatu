import { createRoot } from 'react-dom/client'
import './index.css'
import App from './views/App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Stats from './views/Stats.tsx'
import Verify from './views/Verify.tsx'
import Events from './views/Events.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/wydarzenia" element={<Events />} />
      <Route path="/organizacje" element={<Verify />} />
      <Route path="/wolontariusze" element={<Stats />} />
    </Routes>
  </BrowserRouter>
)
