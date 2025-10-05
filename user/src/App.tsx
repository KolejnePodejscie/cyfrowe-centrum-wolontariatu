import React from 'react'
// import Dashboard from './organization/dashboard.tsx'
import { Route, Routes } from 'react-router-dom'
import LeafRender from './map/LeafRender.tsx'
import Events from './organization/Events.tsx'
import MainLayout from "./layouts/MainLayout.tsx"
import Profile from './userComponents/Profile.tsx'

function App() {
  return (
    <>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Events />} />
              {/* <Redirect exact from="/" to="searchDashboard" /> */}
              <Route  path="/mapa" element={<LeafRender />} />
              <Route  path="/mojeWydarzenia" element={<Events />} />
              <Route path='/profil' element={<Profile/>} />
          </Route>      
        </Routes>     
    </>
  )
}

export default App
