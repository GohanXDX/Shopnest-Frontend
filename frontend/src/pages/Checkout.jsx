import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { clearCart } from '../redux/cartSlice';
import { apiClient } from '../config/api';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState({
    fullName: '', street: '', city: '', postalCode: '', country: ''
  });

  const totalPrice = cartItems.reduce(
  (acc, item) => acc + Number(item.price) * Number(item.qty),
  0
);

  const handlePayment = async () => {
     setLoading(true);
    try {
      const orderRes = await apiClient.post('/api/payment/order', { amount: totalPrice });
      const orderData = orderRes.data;

      if (orderRes.status >= 400) {
        // Razorpay unconfigured exception handler
        const fallback = window.confirm("Razorpay keys unconfigured on backend. Use Student Bypass Mode to place test order?");
        if (fallback) {
          return bypassPayment();
        } else {
          return alert("Payment failed to initialize");
        }
      }

      const options = {
        key: import.meta.env.RAZORPAY_KEY_ID, // Student dummy fallback
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'ShopNest',
        description: 'Test Transaction',
        order_id: orderData.id,
        handler: async function (response) {
          const verifyRes = await apiClient.post('/api/payment/verify', response);
          if (verifyRes.status < 400) {
            const saveOrderRes = await apiClient.post('/api/orders', {
              items: cartItems,
              totalAmount: totalPrice,
              address,
              paymentId: response.razorpay_payment_id
            }, {
              headers: {
                Authorization: `Bearer ${user?.token}`
              }
            });

            if (saveOrderRes.status < 400) {
              dispatch(clearCart());
              navigate('/ordersuccess');
            } else {
              alert('Order saving failed');
            }
          } else {
            alert('Payment verification failed');
          }
        },
        prefill: {
          name: address.fullName,
          email: user?.email,
          contact: '9999999999'
        },
        theme: {
          color: '#f97316'
        }
      };
      if (!window.Razorpay) {
  alert("Razorpay SDK not loaded");
  return;
}
      
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error(error);
    }finally {
  setLoading(false);
}
  };

  const bypassPayment = async () => {
  setLoading(true);

  try {
    const formattedItems = cartItems.map((item) => ({
      productId: item._id || item.productId,
      qty: item.qty,
      price: item.price,
    }));

    const res = await apiClient.post('/api/orders', {
      items: formattedItems,
      totalAmount: totalPrice,
      address,
      paymentId: 'BYPASS_' + Date.now(),
    }, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const data = res.data;

    console.log(data);

    if (res.status < 400) {
      dispatch(clearCart());
      navigate('/ordersuccess');
    } else {
      alert(data.message || data.error || 'Order save failed');
    }
  } catch (error) {
    console.error(error);
    alert(error.message);
  } finally {
    setLoading(false);
  }
};
  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (!user) {
      alert("Please login first");
      navigate('/login');
      return;
    }
  bypassPayment();
  };

  return (
    <div className="mx-auto my-10 max-w-5xl rounded-[28px] border border-slate-800 bg-slate-950 p-6 shadow-xl shadow-slate-950/40 sm:p-8">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white">Checkout</h2>
          <p className="text-sm text-slate-400">Complete your purchase securely with the details below.</p>
        </div>
        <div className="rounded-2xl bg-slate-900 px-5 py-3 text-sm text-slate-200 shadow-inner shadow-slate-950/40">
          Order total: <span className="font-semibold text-white">₹{totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
        <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/20 sm:p-8">
          <h3 className="text-xl font-semibold text-white">Shipping Address</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={address.fullName}
              onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
              className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
            />
            <input
              type="text"
              placeholder="Street"
              required
              value={address.street}
              onChange={(e) => setAddress({ ...address, street: e.target.value })}
              className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
            />
            <input
              type="text"
              placeholder="City"
              required
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
            />
            <input
              type="text"
              placeholder="Postal Code"
              required
              value={address.postalCode}
              onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
              className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
            />
            <input
              type="text"
              placeholder="Country"
              required
              value={address.country}
              onChange={(e) => setAddress({ ...address, country: e.target.value })}
              className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
            />
          </div>
         <button
  type="submit"
  disabled={loading}
  className="w-full rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400 disabled:opacity-50"
>
  {loading ? "Processing..." : "Pay Now"}
</button>
        </form>

        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/20">
          <h3 className="text-xl font-semibold text-white">Order Summary</h3>
          <div className="space-y-3 text-slate-300">
            <div className="rounded-2xl bg-slate-950 p-4">
              <p className="text-sm text-slate-400">Subtotal</p>
              <p className="text-lg font-semibold text-white">₹{totalPrice.toFixed(2)}</p>
            </div>
            <div className="rounded-2xl bg-slate-950 p-4">
              <p className="text-sm text-slate-400">Items</p>
              <p className="text-lg font-semibold text-white">{cartItems.length} product{cartItems.length !== 1 ? 's' : ''}</p>
            </div>
            <div className="rounded-2xl bg-slate-950 p-4">
              <p className="text-sm text-slate-400">Note</p>
              <p className="text-sm text-slate-300">Shipping will be calculated at checkout.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;