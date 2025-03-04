import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AboutMe from './components/AboutMe.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Resume from './components/Resume.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { path: '/aboutme', element: <AboutMe /> },
    { path: '/portfolio', element: <Portfolio /> },
    { path: '/contact', element: <Contact /> },
    { path: '/resume', element: <Resume /> },
  ]},
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);