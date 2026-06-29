import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black text-slate-200 border-t-[0.5px] border-gray">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10  ">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold text-white">ShopNest</h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              ShopNest se shopping ab aur bhi aasan. Best deals, fast delivery,
              aur reliable support — sab ek hi jagah.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Policies</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <Link to="/return-policy" className="hover:text-white transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Email: support@shopnest.com
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Phone: +91 98765 43210
            </p>
            <div className="mt-5 flex items-center gap-3 text-slate-300">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-wider">
                Follow
              </span>
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ShopNest. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
