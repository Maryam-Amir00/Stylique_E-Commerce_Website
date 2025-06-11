import React, { useEffect, useMemo, useState } from 'react'
import axiosInstance from "../api/axiosInstance"
import ProductCard from '../Components/ProductCard'

const Shop = () => {

    const [products , setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState("");
    const [currentPage , setCurrentPage] = useState(1);
    const itemsPerPage = 8 ;

    useEffect(() => {

        let isMounted = true;

        axiosInstance.get('/products')
        .then((res) => {
            if (isMounted) {
            setProducts(res.data);
            console.log(res.data);
        }
        })
        .catch((err) => {
            if (isMounted) {
            console.log('Error', err);
            setError('Something went wrong while fetching products...')
            }
        })
        .finally(() => {
            if (isMounted){
            setLoading(false);
            }
        });

        return () => {
            isMounted = false;
        }
    }, [])

    const indexOfLastProduct = currentPage * itemsPerPage
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
     const currentProducts = useMemo(() => {
        return products.slice(indexOfFirstProduct, indexOfLastProduct);
     }, [products , currentPage])

     const totalPages = Math.ceil(products.length / itemsPerPage);

     const handlePageChange = (newPage) => {
            if(newPage >= 1 && newPage <= totalPages){
                setCurrentPage(newPage)
            }
     }


    if(loading) {
        return <p className='text-center mt-10'>Loading Products...</p>
    }

    if(error) {
        return <p className='text-center text-red-500 mt-10'>{Error}</p>
    }
  return (
    <section className='max-w-7xl mx-auto px-4 py-10 '>
        <h2 className='text-4xl font-bold mb-6 text-center'>All Products</h2>
        { products.length === 0 ? (<p className='text-center'>No Products Found</p>) : (
            <>
            <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {totalPages > 1 && (
                <div className='flex justify-center mt-8 space-x-2'>
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled = {currentPage === 1} className='px-3 py-1 border rounded disabled:opacity-50 hover:bg-slate-300'>
                        Prev
                    </button>

                    {[...Array(totalPages)].map((_,i) => (
                        <button key={i + 1} onClick={() => handlePageChange(i + 1)} className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-slate-700 text-white' : ''}`}>
                            {i + 1}
                        </button>
                    ))}

                    <button onClick={() => handlePageChange(currentPage + 1)} disabled = {currentPage === totalPages} className='px-3 py-1 border rounded disabled:opacity-50 hover:bg-slate-300'>
                        Next
                    </button>
                </div>
            )}
            </>
        )}
        
    </section>
  )
}

export default Shop
