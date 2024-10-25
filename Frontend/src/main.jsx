import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/component/routs/App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './component/routs/Home.jsx'
import Course from './component/routs/Course.jsx'
import Signup from './component/Signup.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/course",element:<Course/>}
    ]
  },
  {path:"/signup",element:<Signup/>}
  
   
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
)
