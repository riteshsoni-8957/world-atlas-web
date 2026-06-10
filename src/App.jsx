import './App.css';
import {createHashRouter, RouterProvider} from 'react-router-dom'


import AppLayout from './components/Layout/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Country from './pages/Country';
import Contact from './pages/Contact';
import CountryDetails from './pages/CountryDetails';


const router = createHashRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'About',
          element: <About />
        },
        {
          path: 'Country',
          element: <Country />
        },
        {
          path: 'Country/:id',
          element: <CountryDetails />
        },
        {
          path: 'Contact',
          element: <Contact />
        }
      ]
    },
  ], 
  
  // {
  //   basename: "/world-atlas-web",
  // }
)



function App() {
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}
export default App
