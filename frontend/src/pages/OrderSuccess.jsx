import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";

const OrderSuccess = () => {
  return (
    <div className="mx-auto my-16 flex max-w-2xl flex-col items-center justify-center rounded-[28px] border border-slate-800 bg-slate-950 p-10 text-center shadow-xl shadow-slate-950/40">
      <div className="mb-8 inline-flex items-center justify-center rounded-full bg-emerald-500/10 px-4 py-3 text-emerald-300">
        <span className="text-xl"><FaCheck /></span>
      </div>
      <h2 className="mb-4 text-4xl font-semibold text-yellow-500">Payment Successful!</h2>
      <p className="mb-8 max-w-xl text-base leading-7 text-slate-400">
        Thank you for your order. We have securely received your payment and will process your shipment shortly.
      </p>
      <Link
        to="/shop"
        className="inline-flex rounded-2xl bg-orange-600 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-500"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccess;