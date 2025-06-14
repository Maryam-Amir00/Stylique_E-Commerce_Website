import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-8 text-slate-800">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-slate-600">
          <p>Your cart is empty.</p>
          <Link
            to="/#shop"
            className="inline-block mt-4 text-sm font-medium text-white bg-slate-700 hover:bg-slate-600 px-6 py-2 rounded-full transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <ul className="space-y-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <Link
                  to={`/product/${item.id}`}
                  className="flex items-center space-x-5"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded-md border border-slate-200"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-slate-800">
                      {item.title}
                    </h2>
                    <p className="text-sm text-slate-600">
                      ${item.price} ×{' '}
                      <span className="font-bold text-slate-800">
                        {item.quantity}
                      </span>{' '}
                      = ${item.price * item.quantity}
                    </p>
                    <span className="inline-block mt-1 text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full">
                      Quantity: {item.quantity}
                    </span>
                  </div>
                </Link>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-medium text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Cart Summary */}
          <div className="mt-10 border-t pt-6 text-right space-y-4">
            <p className="text-2xl font-bold text-slate-800">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <div className="flex flex-col sm:flex-row justify-end items-center gap-4">
              <Link
                to="/#shop"
                className="inline-block text-sm font-medium text-slate-700 border border-slate-700 hover:bg-slate-700 hover:text-white px-6 py-2 rounded-full transition"
              >
                Continue Shopping
              </Link>
              <button
                onClick={clearCart}
                className="inline-block text-sm font-medium text-white bg-red-500 hover:bg-red-600 px-8 py-3 rounded-full transition shadow"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
