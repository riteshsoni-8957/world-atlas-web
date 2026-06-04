import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


import AppLayout from './components/Layout/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Country from './pages/Country';
import Contact from './pages/Contact';


const router = createBrowserRouter([
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
        path: 'Contact',
        element: <Contact />
      }
    ]
  }
])



function App() {
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}
export default App
