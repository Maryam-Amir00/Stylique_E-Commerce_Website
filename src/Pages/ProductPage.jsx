import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {

    const {id} = useParams();

  return (
    <div>
      <h1 className='text-center font-extrabold text-2xl'>Product Page: {id}</h1>
    </div>
  )
}

export default ProductPage
