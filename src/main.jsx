import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutMe from './components/AboutMe.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import Resume from './components/Resume.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/aboutme', element: <AboutMe /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/contact', element: <Contact /> },
  { path: '/resume', element: <Resume /> },
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
