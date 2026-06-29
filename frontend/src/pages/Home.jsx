import React, { useEffect, useState } from 'react'
import ProductCart from '../components/ProductCart' 
import productImage from '../assets/productImage.jpg'
import { apiClient } from '../config/api'

const Home = () => {
  const [products, SetProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await apiClient.get('/api/products')
        const data = res.data
        SetProducts(Array.isArray(data.product) ? data.product.slice(0, 4) : []) // Featured / first products
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="min-h-screen bg-gray -950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <section className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:items-start">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-extrabold leading-tight">Welcome to ShopNest</h1>
            <p className="mt-4 text-lg text-slate-300">Discover the best products at unbeatable prices. Curated picks just for you.</p>
            <div className="mt-6 flex gap-3">
              <a href="/shop" className="rounded-full bg-yellow-500 px-4 py-2  text-white text-lg font-bold shadow hover:bg-emerald-400">Shop Now</a>
  
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={productImage} alt="Shop hero" className="mx-auto max-h-72 object-cover rounded-xl shadow-lg" />
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-bold">Featured Products</h2>

          {loading ? (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-56 animate-pulse rounded-lg bg-slate-800" />
              ))}
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCart key={product._id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Home
  