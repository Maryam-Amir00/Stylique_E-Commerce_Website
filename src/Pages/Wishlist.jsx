import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-slate-800">Your Wishlist</h1>

       
        <Link to="/#shop" className="bg-slate-700 text-white px-5 py-2 rounded-full text-sm hover:bg-slate-600 transition">
          Go Shopping
        </Link>
      </div>

     
      {wishlist.length === 0 ? (
        <div className="text-center text-slate-500 py-12">
          <p>Your wishlist is empty.</p>
        </div>
      ) : (
        <ul className="grid md:grid-cols-2 gap-6">
          {wishlist.map((item) => (
            <li key={item.id} className="bg-white p-4 shadow rounded-xl hover:shadow-lg transition">

              {/* ✅ Wrap image/title in Link */}
              <Link to={`/product/${item.id}`} className="block cursor-pointer">
                <img src={item.image} alt={item.title} className="h-32 object-contain mb-4 mx-auto" />
                <h2 className="text-lg font-semibold text-center">{item.title}</h2>
                <p className="text-sm text-slate-600 text-center">${item.price}</p>
              </Link>

              
              <div className="text-center mt-3">
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Wishlist;
