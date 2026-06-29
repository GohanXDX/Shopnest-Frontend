import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../config/api';

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '', description: '', price: '', category: '', stock: ''
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!user || user.role !== 'admin') {
    navigate('/');
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert('Please select an image');
    
    setLoading(true);
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('category', formData.category);
    data.append('stock', formData.stock);
    data.append('image', image);

    try {
      const res = await apiClient.post('/api/products', data, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      const responseData = res.data;
      
      if (res.status >= 200 && res.status < 300) {
        alert('Product created successfully with Cloudinary Image URL!');
        navigate('/shop');
      } else {
        alert(responseData.message || 'Error creating product');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-10 mb-14 max-w-2xl rounded-[28px] border border-slate-800 bg-slate-950 p-8 shadow-xl shadow-slate-950/40">
      <h2 className="mb-6 text-3xl font-semibold text-yellow-400">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          placeholder="Product Name"
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-orange-500/20"
        />
        <textarea
          placeholder="Description"
          required
          rows="4"
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-orange-500/20"
        />
        <input
          type="number"
          placeholder="Price"
          required
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-orange-500/20"
        />
        <input
          type="text"
          placeholder="Category"
          required
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-orange-500/20"
        />
        <input
          type="number"
          placeholder="Stock Quantity"
          required
          onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
          className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-orange-500/20"
        />

        <div className="rounded-2xl border border-dashed border-orange-500/60 bg-slate-900 p-5">
          <label className="mb-3 block text-sm text-slate-400">Upload Product Image (Cloudinary)</label>
          <input
            type="file"
            accept="image/*"
            required
            onChange={(e) => setImage(e.target.files[0])}
            className="text-slate-100"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-gray-50 px-5 py-3 text-sm font-bold text-yellow-500 transition hover:bg-yellow-400 hover:text-white disabled:cursor-not-allowed disabled:bg-orange-300"
        >
          {loading ? 'Uploading & Creating...' : 'Publish Product'}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;