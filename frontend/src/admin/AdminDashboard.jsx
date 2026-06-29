import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import profileImage from  '../assets/profileImage.jpg'
import { apiClient } from '../config/api';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/');
      return;
    }

    const fetchStats = async () => {
      try {
        const res = await apiClient.get('/api/analytics', {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        const data = res.data;
        if (res.status >= 200 && res.status < 300) {
          setStats({
            totalOrders: data.totalOrders ?? 0,
            totalProducts: data.totalProducts ?? 0,
            totalUsers: data.totalUsers ?? 0,
            totalRevenue: data.totalRevenue ?? data.totalRevenueData ?? 0,
          });
        } else {
          if (res.status === 401) {
            navigate('/login');
          }
          setStats({ totalOrders: 0, totalProducts: 0, totalUsers: 0, totalRevenue: 0 });
        }
      } catch (error) {
        console.error(error);
        setStats({ totalOrders: 0, totalProducts: 0, totalUsers: 0, totalRevenue: 0 });
      }
    };
    fetchStats();
  }, [user, navigate]);

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <img src={profileImage} alt="Logo" className="h-10 w-10 rounded-2xl object-cover shadow-[0_0_15px_rgba(249,115,22,0.3)]" />
          <div>
            <h2 className="text-3xl font-semibold text-white">Admin Dashboard</h2>
            <p className="text-sm text-slate-400">Welcome back, <span className="text-white">{user?.name}</span></p>
          </div>
        </div>
      </div>

      {stats ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-xl shadow-slate-950/40">
            <h4 className="text-sm text-slate-400">Total Orders</h4>
            <div className="mt-4 text-4xl font-bold text-gray-200">{stats.totalOrders}</div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-xl shadow-slate-950/40">
            <h4 className="text-sm text-slate-400">Total Products</h4>
            <div className="mt-4 text-4xl font-bold text-gray-200">{stats.totalProducts}</div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-xl shadow-slate-950/40">
            <h4 className="text-sm text-slate-400">Total Users</h4>
            <div className="mt-4 text-4xl font-bold text-gray-200">{stats.totalUsers}</div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-xl shadow-slate-950/40">
            <h4 className="text-sm text-slate-400">Total Revenue</h4>
            <div className="mt-4 text-4xl font-bold text-gray-200">₹{Number(stats.totalRevenue ?? 0).toFixed(2)}</div>
          </div>
        </div>
      ) : (
        <div className="my-16 rounded-3xl border border-orange-500/20 bg-slate-950 p-8 text-center text-orange-400 shadow-xl shadow-orange-500/10">
          Loading metrics...
        </div>
      )}

      <div className="mt-10 rounded-3xl border border-slate-800 bg-gray-950 p-6 shadow-xl shadow-slate-950/40">
        <h3 className="mb-6 text-xl font-bold text-indigo-400">Administrative Controls</h3>
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <button className="inline-flex items-center justify-center rounded-2xl bg-blue-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-500" onClick={() => navigate('/admin/add-product')}>
            + Add Product
          </button>
          <button className="inline-flex items-center justify-center rounded-2xl bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-700" onClick={() => navigate('/admin/products')}>
            📦 Manage Products
          </button>
          <button className="inline-flex items-center justify-center rounded-2xl bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-700" onClick={() => navigate('/admin/orders')}>
            🚚 Manage Orders
          </button>
          <button className="inline-flex items-center justify-center rounded-2xl bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-700" onClick={() => navigate('/admin/users')}>
            👥 Users Directory
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;