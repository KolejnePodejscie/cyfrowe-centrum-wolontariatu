import React from 'react'
// import Dashboard from './organization/dashboard.tsx'
import { Route, Routes } from 'react-router-dom'
import LeafRender from './map/LeafRender.tsx'
import Users from './organization/Users.tsx'
import Events from './organization/Events.tsx'
import AddEvent from './organization/AddEvent.tsx'
import MainLayout from "./layouts/MainLayout.tsx"
import SearchLayout from './layouts/SearchLayout.tsx'


function App() {
  return (
    <>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Events />} />
              {/* <Redirect exact from="/" to="searchDashboard" /> */}
              <Route  path="/mapa" element={<LeafRender markerData={''} />} />
              <Route path="/uzytkownicy" element={<Users />} />
              <Route path="/wydarzenia" element={<Events />} />
          </Route>
          <Route element={<SearchLayout/>}>
            <Route path="/dodajWydarzenie" element={<AddEvent />} />
          </Route>
           
        </Routes>     
    </>
  )
}

export default App
