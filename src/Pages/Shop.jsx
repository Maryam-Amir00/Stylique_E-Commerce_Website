import React, { useEffect, useState } from 'react'
import axiosInstance from "../api/axiosInstance"
import ProductCard from '../Components/ProductCard'

const Shop = () => {

    const [products , setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState("");

    useEffect(() => {
        axiosInstance.get('/products')
        .then((res) => {
            setProducts(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log('Error', err);
            setError('Something went wrong while fetching products...')
        })
        .finally(() => {
            setLoading(false);
        });
    }, [])

    if(loading) {
        return <p className='text-center mt-10'>Loading Products...</p>
    }

    if(error) {
        return <p className='text-center text-red-500 mt-10'>{Error}</p>
    }
  return (
    <section>
        
    </section>
  )
}

export default Shop
