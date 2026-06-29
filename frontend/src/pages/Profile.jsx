import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { apiClient } from '../config/api';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    const fetchMyOrders = async () => {
      try {
        const res = await apiClient.get('/api/orders/myorders', {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        const data = res.data;
        if (res.status >= 200 && res.status < 300) {
          setOrders(data.orders || []);
        } else {
          // Token obsolete or 401: clear and bounce
          if (res.status === 401) {
             logout();
             navigate('/login');
          }
          setOrders([]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMyOrders();
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  

  if (!user) return null;

  return (
    <div className="mx-auto my-10 max-w-6xl rounded-[28px] border border-slate-800 bg-slate-950 p-6 shadow-xl shadow-slate-950/40 sm:p-8">
      <div className="mb-10 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/20 sm:flex sm:items-center sm:justify-between sm:p-8">
        <div>
          <h2 className="text-3xl font-semibold text-white">My Profile</h2>
          <p className="mt-3 text-sm text-slate-400"><span className="font-semibold text-slate-200">Name:</span> {user.name}</p>
          <p className="mt-2 text-sm text-slate-400"><span className="font-semibold text-slate-200">Email:</span> {user.email}</p>
          <span className="mt-3 inline-flex rounded-2xl bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300">
            Account Type: {user.role.toUpperCase()}
          </span>
        </div>
        <button
          onClick={handleLogout}
          className="mt-4 rounded-2xl bg-gray-100 px-4 py-2 text-md font-bold text-red-600 transition hover:bg-gray-300 sm:mt-0 hover:text-lg"
        >
          Logout
        </button>
      </div>

      <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/20 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-indigo-700">Order History</h3>
          <p className="text-sm text-slate-400">Your recent orders appear below.</p>
        </div>
        <span className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200">{orders.length} order{orders.length !== 1 ? 's' : ''}</span>
      </div>

      {loading ? (
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">
          Fetching your orders...
        </div>
      ) : orders.length === 0 ? (
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center text-slate-300">
          <p className="mb-5 text-base">You haven't placed any orders yet.</p>
          <Link to="/shop" className="inline-flex rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-500">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-5">
          {orders.map((order) => (
            <div key={order._id} className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/20 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p className="text-sm text-slate-400">Order ID: <span className="text-slate-100">{order.items[0]?.productId?.name}</span></p>
                <p className="text-sm text-slate-400">Placed On: <span className="text-slate-100">{new Date(order.createdAt).toLocaleDateString()}</span></p>
                <p className="text-sm text-slate-400">Total: <span className="font-semibold text-emerald-400">₹{order.totalAmount.toFixed(2)}</span></p>
              </div>
              <span className={`rounded-full px-4 py-2 text-sm font-semibold ${order.status === 'Delivered' ? 'bg-emerald-500/10 text-emerald-300' : order.status === 'Shipped' ? 'bg-sky-500/10 text-sky-300' : 'bg-amber-500/10 text-amber-300'}`}>
                {order.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;