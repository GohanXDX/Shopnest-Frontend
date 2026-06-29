import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCart, addToCart } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQty = (item, qty) => {
    if (qty > 0) {
      dispatch(addToCart({ ...item, qty }));
    }
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="mx-auto  pt-5 max-w-6xl rounded-[28px] border-2 border-slate-800 bg-gray-950 p-6 shadow-xl shadow-slate-950/40 sm:p-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white">Shopping Cart</h2>
          <p className="text-sm text-slate-400">Review your items before checkout.</p>
        </div>
        <span className="rounded-2xl bg-orange-500/15 px-4 py-2 text-sm font-semibold text-orange-300">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''}</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900 p-10 text-center text-slate-300">
          <p className="mb-4 text-lg">Your cart is empty.</p>
          <Link to="/shop" className="inline-flex items-center justify-center rounded-2xl bg-gray-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-500">
            Go Shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.6fr_0.9fr]">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.productId} className="overflow-hidden rounded-3xl border border-slate-800 bg-gray-900 p-5 shadow-lg shadow-slate-950/30 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <img src={item.imageUrl} alt={item.name} className="h-36 w-full rounded-3xl object-cover sm:h-28 sm:w-28" />
                  <div className="flex-1 space-y-3">
                    <div>
                      <h4 className="text-xl font-semibold text-white">{item.name}</h4>
                      <p className="text-sm text-slate-400">₹{item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="inline-flex items-center rounded-2xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-200">
                        <button
                          onClick={() => handleUpdateQty(item, item.qty - 1)}
                          className="h-8 w-8 rounded-full bg-slate-800 text-base font-semibold text-slate-100 transition hover:bg-slate-700"
                        >
                          -
                        </button>
                        <span className="mx-3 min-w-8 text-center text-sm font-semibold text-white">{item.qty}</span>
                        <button
                          onClick={() => handleUpdateQty(item, item.qty + 1)}
                          className="h-8 w-8 rounded-full bg-slate-800 text-base font-semibold text-slate-100 transition hover:bg-slate-700"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemove(item.productId)}
                        className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/20"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-800 bg-gray-900 p-6 shadow-xl shadow-slate-950/30">
            <h3 className="mb-6 text-2xl font-semibold text-white">Order Summary</h3>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center justify-between rounded-2xl bg-slate-950 p-4">
                <span>Items total</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-950 p-4">
                <span>Shipping</span>
                <span className="text-slate-400">Calculated at checkout</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-950 p-4 text-white">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">₹{totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              className="mt-8 w-full rounded-2xl bg-gray-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-gray-400"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;