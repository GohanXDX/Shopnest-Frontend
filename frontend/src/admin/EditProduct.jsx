import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';
import { apiClient } from '../config/api';

const EditProduct = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({ name: '', description: '', price: '', category: '', stock: '' });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await apiClient.get(`/api/products/${id}`);
      const data = res.data;
      setFormData({ name: data.name, description: data.description, price: data.price, category: data.category, stock: data.stock });
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('category', formData.category);
    data.append('stock', formData.stock);
    if (image) data.append('image', image);

    const res = await apiClient.put(`/api/products/${id}`, data, {
      headers: { Authorization: `Bearer ${user.token}` }
    });
    setLoading(false);
    if (res.status >= 200 && res.status < 300) {
      alert('Product updated successfully!');
      navigate('/admin/products');
    }
  };

  return (
    <div className="mx-auto mt-10 mb-14 max-w-2xl rounded-[28px] border border-slate-800 bg-slate-950 p-8 shadow-xl shadow-slate-950/40">
      <h2 className="mb-6 text-3xl font-semibold text-gray-200">Edit Product</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          placeholder="Product Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-orange-500/20"
        />
        <textarea
          placeholder="Description"
          required
          rows="4"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-orange-500/20"
        />
        <input
          type="number"
          placeholder="Price"
          required
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-orange-500/20"
        />
        <input
          type="text"
          placeholder="Category"
          required
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-orange-500/20"
        />
        <input
          type="number"
          placeholder="Stock"
          required
          value={formData.stock}
          onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
          className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-orange-500/20"
        />
        <div className="rounded-2xl border border-dashed border-yellow-500/60 bg-slate-900 p-5">
          <label className="mb-3 block text-sm text-slate-400">Replace Image (Optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="text-slate-100"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-bold text-yellow-500 transition hover:bg-yellow-400 hover:text-white disabled:cursor-not-allowed disabled:bg-orange-300"
        >
          {loading ? 'Updating...' : 'Update Product'}
        </button>
      </form>
    </div>
  );
};
export default EditProduct;