import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';

const ProductPage = () => {
  const product = useLoaderData();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Back to Shop Button */}
      <div className="mb-8">
        <Link
          to="/#shop"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 px-5 py-2 rounded-full shadow-sm transition"
        >
          ← Back to Shop
        </Link>
      </div>

      {/* Product Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-3xl shadow-2xl">
        {/* Image */}
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[420px] w-full object-contain"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {product.title}
            </h1>

            <p className="text-slate-600 text-base leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-lg font-semibold">
                ⭐ {product.rating?.rate}
              </span>
              <span className="ml-2 text-sm text-slate-500">
                ({product.rating?.count} reviews)
              </span>
            </div>

            <p className="text-3xl font-semibold text-slate-900">
              ${product.price}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex items-center space-x-4">
            {/* Add to Cart */}
            <button className="bg-slate-800 text-white px-7 py-3 rounded-full font-semibold hover:bg-slate-700 transition-all duration-200 shadow">
              🛒 Add to Cart
            </button>

            {/* Wishlist */}
            <button className="p-3 rounded-full border border-slate-300 hover:bg-slate-100 transition">
              <FiHeart className="text-xl text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
