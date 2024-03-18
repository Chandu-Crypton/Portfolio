import {React } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'

const appRouter = createBrowserRouter([{
  path : '/home',
  element:<Navbar/>
},
{
  path : '/skills',
  element:<Skills/>
},
{
  path : '/contactme',
  element:<ContactMe/>
}
])

function App() {
  

  return (
    <>
     <RouterProvider
     router={appRouter}
     />
      
   
      
    </>
  )
}

export default App
