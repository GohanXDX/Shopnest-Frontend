import React, { useEffect, useState } from 'react';
import ProductCart from '../components/ProductCart';
import { apiClient } from '../config/api';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await apiClient.get('/api/products');
        const data = res.data;
        const items = Array.isArray(data)
          ? data
          : Array.isArray(data.product)
          ? data.product
          : [];
        setProducts(items);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="mx-auto my-10 max-w-6xl px-4 sm:px-6">
      <div className="mb-8 flex flex-col gap-4 rounded-[28px] border border-slate-800 bg-slate-950 p-6 shadow-xl shadow-slate-950/40 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h2 className="text-3xl font-bold text-white">All Products</h2>
          <p className="mt-2 text-sm text-slate-400">Browse and search all available products.</p>
        </div>
        <div className="flex w-full max-w-xl items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 shadow-inner shadow-slate-950/20 sm:w-auto">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-slate-100 outline-none placeholder:text-slate-500"
          />
        </div>
      </div>
      {loading ? (
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center text-slate-400 shadow-xl shadow-slate-950/20">
          Loading products...
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center text-slate-400 shadow-xl shadow-slate-950/20">
          No products match your search.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCart key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;