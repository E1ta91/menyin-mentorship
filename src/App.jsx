
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home'
import Profile from './pages/profile'
import Choice from './pages/choice'
import Mentor from './pages/mentor'
import Mentee from './pages/mentee'
import Opportunity from './pages/opportunity'
import Contact from './pages/contact'

function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Home />
    },

    {
      path: 'contact',
      element: <Contact/>
    },
    {
      path: 'profiles',
      element: <Profile />
    },
    {
      path: 'choice',
      element: <Choice/>
    },
    {
      path: 'mentor',
      element: <Mentor/>
    },
    {
      path: 'mentee',
      element: <Mentee/>
    },
    {
      path: 'opportunities',
      element: <Opportunity/>
    }
 ] )



  return (
    <RouterProvider router={router} />

  )
}

export default App
