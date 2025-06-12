import React, { useMemo, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import { useLoaderData } from 'react-router-dom'

const Shop = () => {
  const products = useLoaderData();
  const [currentPage , setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

  const currentProducts = useMemo(() => {
    if (!products || !Array.isArray(products)) return [];
    return products.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [products, currentPage]);

  const totalPages = useMemo(() => {
    if (!products || !Array.isArray(products)) return 0;
    return Math.ceil(products.length / itemsPerPage);
  }, [products, itemsPerPage]);

  const handlePageChange = (newPage) => {
    if(newPage >= 1 && newPage <= totalPages){
      setCurrentPage(newPage)
    }
  }

  if (!products || products.length === 0) {
    return <p className='text-center mt-10'>No Products Found</p>;
  }

  return (
    <section className='max-w-7xl mx-auto px-4 py-10'>
      <h2 className='text-4xl font-bold mb-6 text-center'>All Products</h2>

      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className='flex justify-center mt-8 space-x-2'>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className='px-3 py-1 border rounded disabled:opacity-50 hover:bg-slate-300'
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-slate-700 text-white' : ''}`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='px-3 py-1 border rounded disabled:opacity-50 hover:bg-slate-300'
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}

export default Shop;
