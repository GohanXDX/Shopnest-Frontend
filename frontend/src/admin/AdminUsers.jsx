import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { apiClient } from '../config/api';

const AdminUsers = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!user?.token) return;

      const res = await apiClient.get('/api/auth/user', {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      const data = res.data;
      setUsers(Array.isArray(data) ? data : []);
    };
    fetchUsers();
  }, [user]);

  return (
    <div className="mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-6 rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-xl shadow-slate-950/40">
        <h2 className="mb-2 text-3xl font-semibold text-orange-400">User Directory</h2>
        <p className="text-sm text-slate-400">See all registered users and role details in one place.</p>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40">
        <table className="min-w-full divide-y divide-slate-800">
          <thead className="bg-slate-950">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider text-slate-400">ID</th>
              <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider text-slate-400">NAME</th>
              <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider text-slate-400">EMAIL</th>
              <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider text-slate-400">ROLE</th>
              <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider text-slate-400">JOINED</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {users.map((u) => (
              <tr key={u._id} className="odd:bg-slate-950 even:bg-slate-900">
                <td className="px-6 py-4 text-sm text-slate-200">{u._id.substring(0, 8)}...</td>
                <td className="px-6 py-4 text-sm text-slate-200">{u.name}</td>
                <td className="px-6 py-4 text-sm text-slate-200">{u.email}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${u.role === 'admin' ? 'bg-orange-500/15 text-orange-300' : 'bg-emerald-500/15 text-emerald-300'}`}>
                    {u.role.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-200">{new Date(u.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;