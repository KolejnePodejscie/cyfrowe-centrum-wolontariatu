import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'



// console.log(api);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

      <div className='w-screen h-screen flex flex-col'>
        <div className='h-18 z-2 flex flex-row justify-center align-center'>
         {/* <Navbar/> */}
        </div>
        <div className='flex flex-row align-center w-screen h-screen'>
             <App/>
        </div>
    </div>
    </BrowserRouter>  
  </StrictMode>,
)
