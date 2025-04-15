import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import Roots from './components/Roots/Roots.jsx'
import Mobile from './components/Roots/Mobile/Mobile.jsx'
import Home from './Home/Home.jsx'
import Laptops from './components/Roots/Header/Laptops/Laptops.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    Component: Roots,
    children:[
      {
        index: true,Component:Home
      },
      {path: 'mobile',Component: Mobile},
      {path: 'laptops',Component: Laptops},
  ]
  },
  {
    path: 'about',
    element:<div>hello react about</div>
},
  {
    path: 'contact',
    element:<div>hello react contact</div>
  },
  {
    path: 'app',
    Component: App,
    
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
