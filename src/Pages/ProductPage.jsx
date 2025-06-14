import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';


const ProductPage = () => {
  const product = useLoaderData();
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isInWishlist = wishlist.some(item => item.id === product.id);



  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };


const handleAddToWishlist = () => {
  addToWishlist(product);
};

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
            {/* Quantity */}
            <div className="flex items-center border border-slate-300 rounded-full overflow-hidden">
              <button
                onClick={decreaseQty}
                className="px-4 py-2 text-lg font-bold text-slate-700 hover:bg-slate-100"
              >
                −
              </button>
              <span className="px-4 text-slate-700 font-semibold">
                {quantity}
              </span>
              <button
                onClick={increaseQty}
                className="px-4 py-2 text-lg font-bold text-slate-700 hover:bg-slate-100"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="bg-slate-800 text-white px-7 py-3 rounded-full font-semibold hover:bg-slate-700 transition-all duration-200 shadow"
            >
              🛒 Add to Cart
            </button>

            {/* Wishlist */}
            <button
              onClick={() =>
                isInWishlist
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)
              }
              className="p-3 rounded-full border border-slate-300 hover:bg-slate-100 transition"
              title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            >
              <FiHeart className={`text-xl transition ${isInWishlist ? 'text-red-500' : 'text-slate-700'}`} />
            </button>


          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
