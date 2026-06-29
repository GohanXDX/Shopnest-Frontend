import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    report: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Report submitted successfully!');

    setFormData({
      name: '',
      email: '',
      report: '',
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-zinc-400">
            Have a question, issue, or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="mb-6 text-2xl font-semibold">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl border border-zinc-800 bg-black p-5">
                <p className="mb-1 text-sm text-zinc-500">Phone Number</p>
                <p className="text-lg font-medium">
                  +91 98765 43210
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-black p-5">
                <p className="mb-1 text-sm text-zinc-500">Email Address</p>
                <p className="text-lg font-medium">
                  support@shopnest.com
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-black p-5">
                <p className="mb-1 text-sm text-zinc-500">Support Hours</p>
                <p className="text-lg font-medium">
                  Monday - Saturday
                </p>
                <p className="text-zinc-400">
                  9:00 AM - 6:00 PM IST
                </p>
              </div>
            </div>
          </div>

          {/* Report Form */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="mb-6 text-2xl font-semibold">
              Submit a Report
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none focus:border-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none focus:border-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Report / Message
                </label>
                <textarea
                  rows="6"
                  name="report"
                  required
                  value={formData.report}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none focus:border-white"
                  placeholder="Describe your issue..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-white py-3 font-semibold text-black transition hover:bg-zinc-200"
              >
                Submit Report
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;