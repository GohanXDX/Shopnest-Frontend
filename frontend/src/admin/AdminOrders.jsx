import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { apiClient } from '../config/api';

const AdminOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user?.token) return;

      const res = await apiClient.get('/api/orders', {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      const data = res.data;
      setOrders(Array.isArray(data.orders) ? data.orders : []);
    };
    fetchOrders();
  }, [user]);

  const updateStatus = async (id, status) => {
    const res = await apiClient.put(`/api/orders/${id}/status`, { status }, {
      headers: { Authorization: `Bearer ${user.token}` }
    });
    const data = res.data;
    if (res.status >= 200 && res.status < 300 && data.order) {
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === id ? { ...order, status: data.order.status } : order
        )
      );
    } else {
      console.error('Order status update failed:', data.message || data.error || res.statusText);
    }
  };

  return (
    <div className="mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-6 rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-xl shadow-slate-950/40">
        <h2 className="text-3xl font-semibold text-pink-300">Manage Orders</h2>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40">
        <table className="min-w-full divide-y divide-slate-800 text-left">
          <thead className="bg-slate-950">
            <tr>
              <th className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-slate-400">ORDER ID</th>
              <th className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-slate-400">USER</th>
              <th className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-slate-400">TOTAL</th>
              <th className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-slate-400">DATE</th>
              <th className="px-6 py-4 text-sm font-medium uppercase tracking-wider text-slate-400">STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {orders.map((order) => (
              <tr key={order._id} className="odd:bg-slate-950 even:bg-slate-900">
                <td className="px-6 py-4 text-sm text-slate-200">{order._id.substring(0, 8)}...</td>
                <td className="px-6 py-4 text-sm text-slate-200">{order.user?.name || order.userId?.name || 'Deleted User'}</td>
                <td className="px-6 py-4 text-sm text-slate-200">₹{Number(order.totalAmount ?? 0).toFixed(2)}</td>
                <td className="px-6 py-4 text-sm text-slate-200">{new Date(order.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order._id, e.target.value)}
                    className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="pending">Pending</option>
                    <option value="paid">Paid</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;