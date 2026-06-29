import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useSelector } from 'react-redux';
import shopnest from '../assets/Shopnest.png'

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50  bg-black/95 border-b border-slate-800 shadow-xl shadow-slate-900/30 backdrop-blur-md">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-5 text-white transition hover:opacity-90 px-2.5">
          <img src={shopnest} alt="ShopNest" className="h-11 w-11 rounded-full object-cover " />
          <div>
            <p className="text-lg font-bold">ShopNest</p>
            <p className="text-xs text-slate-400">Online Store</p>
          </div>
        </Link>

        <ul className="flex flex-wrap items-center gap-2 text-md font-medium text-slate-300 sm:gap-3">
          <li>
            <Link to="/shop" className="rounded-full border  border-slate-700 bg-slate-900 px-4 py-2 transition hover:border-yellow-400 hover:bg-yellow-500 hover:text-slate-950">
              Shop
            </Link>
          </li>

          <li className="relative">
            <Link
              to="/cart"
              className="rounded-full px-6 py-2 transition  hover:bg-slate-800 hover:text-white"
            >
              Cart
            </Link>
            {cartItems.length > 0 ?<span className="absolute -top-3  left-12 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
              {cartItems.length}
            </span>: null}
            
          </li>
          {user ? (
            <>
              <li>
                <Link to="/profile" className="rounded-full px-4 py-2 text-slate-200 transition hover:bg-slate-800 hover:text-white">
                  Hi, {user.name}
                </Link>
              </li>
              {user.role === 'admin' && (
                <li>
                  <Link to="/admin" className="rounded-full border border-blue-500 bg-slate-900 px-4 py-2 text-gray-400 transition hover:bg-blue-600 hover:text-slate-950">
                    Admin
                  </Link>
                </li>
              )}
              <li>
                <button
                  onClick={handleLogout}
                  className="rounded-full bg-gray-300 px-4 py-2 text-md  font-bold text-slate-950 transition hover:bg-gray-400"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="rounded-full bg-slate-800 px-5 py-2 text-slate-200 transition hover:bg-slate-700 hover:text-white">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;