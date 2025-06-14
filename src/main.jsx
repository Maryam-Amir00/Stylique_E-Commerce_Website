import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Hero from './Pages/Hero.jsx'
import Shop from './Pages/Shop.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import ProductPage from './Pages/ProductPage.jsx'
import { shopLoader } from './utils/shopLoader.js'
import { productLoader } from './utils/ProductLoader.js'
import { CartProvider } from './context/CartContext.jsx'
import { WishlistProvider } from './context/WishlistContext.jsx'
import Wishlist from './Pages/Wishlist.jsx'
import Cart from './Pages/Cart.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App />}>
      <Route index element = {<><Hero /> <Shop /></>} loader = {shopLoader}/>
      <Route path='home' element = {<><Hero /> <Shop /></>} loader = {shopLoader} />
      <Route path='about' element = {<About />} />
      <Route path='contact' element = {<Contact />} />
      <Route path='product/:id' element = {<ProductPage />} loader={productLoader}/>
      <Route path='cart' element={<Cart />} />
      <Route path='wishlist' element={<Wishlist />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <WishlistProvider>
        <RouterProvider router={router} />
    </WishlistProvider>
    </CartProvider>
  </StrictMode>
)
