import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';



const ProductCard = ({ product }) => {

  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    addToCart(product); 
  };

  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isInWishlist = wishlist.some(item => item.id === product.id);

  const toggleWishlist = (e) => {
    e.preventDefault();
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };


  
  return (
    <Link to={`/product/${product.id}`} className="h-full">
      <div className="h-full bg-white shadow-md rounded-xl overflow-hidden p-4 flex flex-col justify-between hover:scale-[1.05] transition-all duration-300 ease-in-out">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain mx-auto mb-4"
        />

        <div className="flex-1 flex flex-col">
          <h3 className="text-md font-semibold mb-2 line-clamp-2">{product.title}</h3>
          
          
          {product.rating?.rate && (
            <div className="flex items-center text-sm text-yellow-500 mb-1">
              ⭐ {product.rating.rate}
              <span className="ml-2 text-slate-500 text-xs">
                ({product.rating.count})
              </span>
            </div>
          )}

          
          <p className="text-gray-600 font-medium mb-3">${product.price}</p>
        </div>

       
        <div className="flex items-center justify-between mt-4">
          <button onClick={handleAddToCart} className="flex-1 bg-slate-700 text-white py-2 rounded-full text-sm font-semibold hover:bg-slate-600 transition">
            Add to Cart
          </button>
          <button
            onClick={toggleWishlist}
            className="ml-3 transition text-xl"
            title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          >
            <FiHeart className={isInWishlist ? "text-red-500" : "text-gray-400 hover:text-red-500"} />
          </button>

        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
