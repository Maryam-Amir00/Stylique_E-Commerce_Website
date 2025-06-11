import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='bg-white shadow-md rounded-xl overflow-hidden p-4 flex flex-col justify-between hover:scale-[1.05] transition-all duration-300 ease-in-out'>
      <img src={product.image} alt={product.title} className='h-48 object-contain mx-auto mb-4' />
      <h3 className='text-md font-semibold mb-2 line-clamp-2'>{product.title}</h3>
      <p className='text-gray-600 font-medium mb-3'>${product.price}</p>
      <button className='bg-slate-700 text-white py-2 rounded hover:bg-slate-600'>View Details</button>
    </div>
  )
}

export default ProductCard
