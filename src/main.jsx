import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AboutMe from 'src/components/aboutMe.jsx';
import Portfolio from 'src/components/portfolio.jsx';
import Contact from 'src/components/contact.jsx';
import Resume from 'src/components/resume.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { path: '/aboutme', element: <AboutMe /> },
    { path: '/portfolio', element: <Portfolio /> },
    { path: '/contact', element: <Contact /> },
    { path: '/resume', element: <Resume /> },
  ]},
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />   
);