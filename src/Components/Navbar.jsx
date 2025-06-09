import React , {useState} from 'react'
import logo from '../assets/logo.png'
import { FiShoppingCart , FiX , FiMenu } from 'react-icons/fi';

const Navbar = () => {

  const [menuOpen , setMenuOpen] = useState(false);
  const menuItems = [ 'Home', 'Shop', 'Categories', 'About', 'Contact' ];


  return (
    <>
       <nav className='bg-slate-700 text-white shadow-md sticky top-0 z-50'>
          <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
              <div className='flex items-center justify-center '>
                <img src={logo} alt="Stylique Logo" className='h-16 w-auto'/>
                <span className='text-2xl font-medium font-serif italic tracking-wide'>Stylique</span>
              </div>

              <div className='hidden md:flex items-center space-x-4'>
                {menuItems.map((item) => (
                  <a key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-slate-400 transition duration-300">
                    {item}
                  </a>
                ))}

                  <FiShoppingCart className='cursor-pointer hover:text-slate-400 transition duration-300' size={22} />
              </div>

             <div className='md:hidden'>
                <button onClick={() => setMenuOpen(!menuOpen)} className='focus:outline-none'>
                  {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
             </div>
            </div>
          </div>

          {menuOpen && (
        <div className="md:hidden bg-slate-700 px-6 pb-4 space-y-2 transition-all duration-300 ease-in-out">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className='block text-white hover:text-slate-400 transition duration-300'
            >
              {item}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-600 flex justify-start">
            <FiShoppingCart className="hover:text-slate-400" size={22} />
          </div>
        </div>
      )}
       </nav>
    </>
  )
}

export default Navbar

