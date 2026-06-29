import React, { useState } from 'react'
import { MdSecurityUpdateGood } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FcIdea } from "react-icons/fc";
import AboutImage from '../assets/aboutImage.jpg'
const About = () => {
  const [feedback, setFeedback] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target
    setFeedback({ ...feedback, [name]: value })
  }

  const handleFeedbackSubmit = (e) => {
    e.preventDefault()
    if (feedback.name && feedback.email && feedback.message) {
      setSubmitted(true)
      setFeedback({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-slate-100">
      <div className='w-full'>
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold leading-tight text-white">ShopNest</h1>
          <p className="mt-6 text-xl text-slate-300">Your trusted online destination for premium products at unbeatable prices</p>
        </div>
      </section>

      {/* What is ShopNest */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center ">
          <div >
            <h2 className="text-3xl font-bold text-white">Who is ShopNest?</h2>
            <p className="mt-4 text-lg text-slate-300">
              ShopNest is a cutting-edge e-commerce platform designed to revolutionize your online shopping experience. We believe that quality products and exceptional service should be accessible to everyone.
            </p>
            <p className="mt-4 text-slate-300">
              Our mission is to connect customers with a curated selection of premium products across multiple categories, ensuring every purchase is a delightful experience. Whether you're looking for electronics, audio equipment, or everyday essentials, ShopNest has you covered.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-slate-950 font-semibold">✓</span>
                <span>Authentic & Premium Products</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-slate-950 font-semibold">✓</span>
                <span>Competitive Pricing & Discounts</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-slate-950 font-semibold">✓</span>
                <span>Fast & Secure Checkout</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-slate-950 font-semibold">✓</span>
                <span>24/7 Customer Support</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl bg-slate-800 p-8 shadow-lg ">
            <img src= {AboutImage} alt="ShopNest" className="h-80 w-full mx-auto rounded-lg object-cover" />
          </div>
        </div>
      </section>
      </div>

      {/* History & Journey */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
        <div className="relative">
          <div className="space-y-8">
            {/* Timeline Item 1 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-slate-950 font-bold">2020</div>
                <div className="mt-2 h-16 w-1 bg-gradient-to-b from-emerald-600 to-emerald-800"></div>
              </div>
              <div className="rounded-lg bg-slate-400 p-6 flex-1">
                <h3 className="text-xl font-bold text-emerald-700">The Beginning</h3>
                <p className="mt-2 text-slate-800">ShopNest was founded with a vision to simplify online shopping. We started with a small team dedicated to delivering quality products and exceptional customer service.</p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-slate-950 font-bold">2021</div>
                <div className="mt-2 h-16 w-1 bg-gradient-to-b from-blue-600 to-blue-800"></div>
              </div>
              <div className="rounded-lg bg-slate-400 p-6 flex-1">
                <h3 className="text-xl font-bold text-blue-700">Expansion Phase</h3>
                <p className="mt-2 text-slate-800">We expanded our product catalog to include electronics, audio equipment, and home essentials. Our customer base grew exponentially as word spread about our reliability.</p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 text-slate-950 font-bold">2022</div>
                <div className="mt-2 h-16 w-1 bg-gradient-to-b from-purple-600 to-purple-900"></div>
              </div>
              <div className="rounded-lg bg-slate-400 p-6 flex-1">
                <h3 className="text-xl font-bold text-purple-700">Tech Innovation</h3>
                <p className="mt-2 text-slate-800">We invested heavily in technology, implementing AI-powered recommendations, advanced payment systems, and improved user experience features.</p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-700 text-slate-950 font-bold">2024</div>
                <div className="mt-2 h-16 w-1 bg-gradient-to-b from-pink-600 to-pink-800"></div>
              </div>
              <div className="rounded-lg bg-slate-400 p-6 flex-1">
                <h3 className="text-xl font-bold text-pink-700">Present Day</h3>
                <p className="mt-2 text-slate-800">Today, ShopNest serves thousands of satisfied customers with a comprehensive product range, competitive prices, and industry-leading customer support. We continue to innovate and improve every day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mx-auto max-w-7xl px-6 py-16 mt-5 bg-gray-900 rounded-xl">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Value 1 */}
          <div className="rounded-lg bg-gray-800 p-8 text-center">
            <div className="text-3xl mb-3 ml-35 "><MdSecurityUpdateGood /></div>
            <h3 className="text-xl font-bold text-white">Quality First</h3>
            <p className="mt-3 text-slate-300">We ensure every product meets the highest quality standards before reaching your doorstep.</p>
          </div>

          {/* Value 2 */}
          <div className="rounded-lg bg-gray-800 p-8 text-center">
            <div className="text-3xl mb-3 ml-35 "><FcIdea /></div>
            <h3 className="text-xl font-bold text-white">Innovation</h3>
            <p className="mt-3 text-slate-300">We continuously innovate to provide cutting-edge technology and the best user experience.</p>
          </div>

          {/* Value 3 */}
          <div className="rounded-lg bg-gray-800  p-8 text-center">
            <div className="text-3xl mb-3 ml-35 "><IoCallSharp /></div>
            <h3 className="text-xl font-bold text-white">Customer Care</h3>
            <p className="mt-3 text-slate-300">Your satisfaction is our priority. We're always here to listen and support you.</p>
          </div>
        </div>
      </section>

      {/* Customer Feedback Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-4">What Our Customers Say</h2>
        <p className="text-center text-slate-300 mb-12">We value your feedback and continuously strive to improve our services</p>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {/* Testimonial 1 */}
          <div className="rounded-lg bg-slate-800 p-6 border border-slate-700">
            <div className="flex gap-1 mb-3">
              <span className="text-yellow-400">⭐</span>
              <span className="text-yellow-400">⭐</span>
              <span className="text-yellow-400">⭐</span>
              <span className="text-yellow-400">⭐</span>
            </div>
            <p className="text-slate-300">"ShopNest has become my go-to platform for all my shopping needs. Amazing products at great prices!"</p>
            <p className="mt-4 font-semibold text-emerald-700">- Rahul M.</p>
          </div>

          {/* Testimonial 2 */}
          <div className="rounded-lg bg-slate-800 p-6 border border-slate-700">
            <div className="flex gap-1 mb-3">
              <span className="text-yellow-400">⭐</span>
              <span className="text-yellow-400">⭐</span>
            </div>
            <p className="text-slate-300">"The customer support team is incredibly helpful. They responded to my query within minutes!"</p>
            <p className="mt-4 font-semibold text-blue-700">- Priya S.</p>
          </div>

          {/* Testimonial 3 */}
          <div className="rounded-lg bg-slate-800 p-6 border border-slate-700">
            <div className="flex gap-1 mb-3">
              <span className="text-yellow-400">⭐</span>
              <span className="text-yellow-400">⭐</span>
              <span className="text-yellow-400">⭐</span>
              <span className="text-yellow-400">⭐</span>
              <span className="text-yellow-400">⭐</span>
            </div>
            <p className="text-slate-300">"Fast delivery, genuine products, and secure payment options. Highly recommended!"</p>
            <p className="mt-4 font-semibold text-pink-700">- Akshay k.</p>
          </div>
        </div>

        {/* Feedback Form */}
        {/* 
        <div className="rounded-xl bg-slate-800 p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">Share Your Feedback</h3>
          {submitted && (
            <div className="mb-6 rounded-lg bg-green-500/20 border border-green-500 p-4">
              <p className="text-green-400 font-semibold">✓ Thank you! Your feedback has been submitted.</p>
            </div>
          )}
          <form onSubmit={handleFeedbackSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={feedback.name}
                onChange={handleFeedbackChange}
                placeholder="Your name"
                className="w-full rounded-lg bg-slate-700 px-4 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={feedback.email}
                onChange={handleFeedbackChange}
                placeholder="your@email.com"
                className="w-full rounded-lg bg-slate-700 px-4 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Feedback</label>
              <textarea
                name="message"
                value={feedback.message}
                onChange={handleFeedbackChange}
                placeholder="Tell us what you think about ShopNest..."
                rows="5"
                className="w-full rounded-lg bg-slate-700 px-4 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400 transition"
            >
              Submit Feedback
            </button>
          </form>
        </div>
        */}
      </section> 
      

      {/* CTA Section */}
      <section className="mx-auto max-w-5xl px-6 py-24">
  <div className="rounded-[40px] border border-zinc-800 bg-gray-900 p-12 text-center">
    <h2 className="text-4xl font-bold text-white">
      Ready to Start Shopping?
    </h2>

    <p className="mt-4 text-zinc-400">
      Join thousands of customers enjoying a premium shopping experience.
    </p>

    <a
      href="/shop"
      className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
    >
      Shop Now!
    </a>
  </div>
</section>
    </div>
  )
}

export default About
