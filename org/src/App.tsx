import React from 'react'
import Dashboard from './organization/dashboard.tsx'
import { Route, Routes } from 'react-router-dom'
import LeafRender from './map/LeafRender.tsx'


function App() {
  return (

    <>
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Redirect exact from="/" to="searchDashboard" /> */}
            <Route  path="/dashboard" element={<Dashboard />} />
            <Route path="/eventsMap" element={<LeafRender markerData={''} />} />
        </Routes>

         
    </>
   


    

  )
}

export default App