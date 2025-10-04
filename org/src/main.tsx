import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Configuration,DefaultApi} from '../generated/'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './organization/Navbar.tsx'

const config = new Configuration();
const api = new DefaultApi(config);

console.log(api);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

      <div className='w-screen h-screen flex flex-col'>
        <div className='h-1/10 z-2 flex flex-row justify-center align-center'>
         <Navbar/>
        </div>
        <div className='h-9/10 z-1 flex flex-row justify-center absolute align-center'>
             <App/>
        </div>
    </div>
    </BrowserRouter>  
  </StrictMode>,
)
