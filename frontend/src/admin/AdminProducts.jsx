import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { apiClient } from '../config/api';

const AdminProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await apiClient.get('/api/products');
const data = res.data;

// console.log(data);

setProducts(Array.isArray(data.product) ? data.product : []);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you strictly sure you want to delete this?')) {
      const res = await apiClient.delete(`/api/products/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      if (res.status >= 200 && res.status < 300) {
        setProducts(products.filter(p => p._id !== id));
      }
    }
  };

  return (
    <div className="mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-semibold text-white">Manage Products</h2>
        <Link
          to="/admin/add-product"
          className="inline-flex items-center justify-center rounded-2xl bg-blue-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-500"
        >
          + Add Product
        </Link>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40">
        <table className="min-w-full divide-y divide-slate-800 text-left">
          <thead className="bg-slate-950">
            <tr>
              <th className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-slate-400">ID</th>
              <th className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-slate-400">NAME</th>
              <th className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-slate-400">PRICE</th>
              <th className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-slate-400">CATEGORY</th>
              <th className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-slate-400">STOCK</th>
              <th className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-slate-400">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {products.map((product) => (
              <tr key={product._id} className="odd:bg-slate-950 even:bg-slate-900">
                <td className="px-6 py-4 text-sm text-slate-200">{product._id.substring(0, 8)}...</td>
                <td className="px-6 py-4 text-sm text-slate-200">{product.name}</td>
                <td className="px-6 py-4 text-sm text-slate-200">₹{Number(product.price ?? 0).toFixed(2)}</td>
                <td className="px-6 py-4 text-sm text-slate-200">{product.category}</td>
                <td className="px-6 py-4 text-sm text-slate-200">{product.stock}</td>
                <td className="px-6 py-4 flex flex-wrap gap-3">
                  <Link
                    to={`/admin/edit-product/${product._id}`}
                    className="rounded-2xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-500"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="rounded-2xl bg-red-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;