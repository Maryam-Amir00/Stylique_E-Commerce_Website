import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Hero from './Pages/Hero.jsx'
import Shop from './Pages/Shop.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App />}>
      <Route path='' element = {<><Hero /> <Shop /></>} />
      <Route path='home' element = {<><Hero /> <Shop /></>} />
      <Route path='about' element = {<About />} />
      <Route path='contact' element = {<Contact />} />
      <Route path='product/:id' element = {<ProductPage />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
