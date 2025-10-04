import App from './views/App.tsx'
import { Route, Routes } from 'react-router'
import Stats from './views/Stats.tsx'
import Verify from './views/Verify.tsx'
import Events from './views/Events.tsx'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/wydarzenia" element={<Events />} />
      <Route path="/organizacje" element={<Verify />} />
      <Route path="/wolontariusze" element={<Stats />} />
    </Routes>
  )
}
export default Router
