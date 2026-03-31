import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './Route/router.jsx'
import { RouterProvider } from 'react-router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthProviders from './context/AuthProviders.jsx'

AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='urbanist-regular'>
<AuthProviders>
  <RouterProvider router={router} />
</AuthProviders>
    </div>
  </StrictMode>,
)
