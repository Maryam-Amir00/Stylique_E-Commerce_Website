import React, {useState , useEffect} from 'react'
import { HashLink as NavLink } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom';
import Hero1 from '../assets/hero1.jpg'
import Hero2 from '../assets/hero2.jpg'
import Hero3 from '../assets/hero3.jpg'
import Hero4 from '../assets/hero4.jpg'

const Hero = () => {

   const images = [Hero1, Hero2, Hero3, Hero4];

   const [current , setCurrent] = useState(0);

   const location = useLocation();

    useEffect(() => {
    if (location.hash === '#shop') {
        const section = document.getElementById('shop');
        if (section) {
        setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth' });
        }, 300); // delay for smoothness
        }
    }
    }, [location]);


   useEffect( ()=> {
     const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
     }, 5000);

     return () => clearInterval(interval);

   }, [])
   

  return (
   <section className='min-h-[70vh] md:h-screen bg-cover relative bg-center transition-all duration-1000' style={{backgroundImage: `url(${images[current]})`}}>
      <div className='absolute inset-0 bg-black/60 z-10'>
          <div className='relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8 lg:px-16'>
              <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                 Discover Your Signature Style with Stylique
              </h1>
              <p className='text-lg md:text-xl mb-6 max-w-xl'>
                  Explore the latest trends and timeless classics curated just for you.
              </p>
              <NavLink
  smooth
  to="/#shop"
  className="inline-block bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-400 transition duration-300"
>
  Shop Now
</NavLink>

          </div>
      </div>
   </section>
  )
}

export default Hero
