import React from 'react'
import { IoCalendarNumber } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import { MdRadioButtonChecked } from "react-icons/md";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Return Policy
        </h1>

        <p className="mt-4 text-lg text-zinc-300">
          We want you to be completely satisfied with your purchase.
        </p>

        <p className="mt-2 text-sm text-zinc-500">
          Last Updated: May 2024
        </p>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="space-y-8">
          {/* Quick Overview */}
          <div className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 text-center transition hover:border-zinc-600">
              <div className="mb-3 text-4xl ml-23"><IoCalendarNumber /></div>
              <h3 className="text-xl font-semibold text-white">30 Days</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Return window from purchase date
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 text-center transition hover:border-zinc-600">
              <div className="mb-3 text-4xl ml-23"><FaBoxOpen /></div>
              <h3 className="text-xl font-semibold text-white">
                Original Condition
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Item must be unused & sealed
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 text-center transition hover:border-zinc-600">
              <div className="mb-3 text-4xl ml-23"><TbMoneybag /></div>
              <h3 className="text-xl font-semibold text-white">Full Refund</h3>
              <p className="mt-2 text-sm text-zinc-400">
                100% money-back guarantee
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">1. Return Period</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              You have 30 calendar days from the date of purchase to initiate a return. The return period begins on the day you receive your order, not the purchase date.
            </p>
            <p className="text-slate-300 leading-relaxed">
              To be eligible for a return, your item must be received by our warehouse within the 30-day window. Items received after 30 days will not be accepted for return.
            </p>
          </div>

          {/* Section 2 */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility Criteria</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Items are eligible for return if they meet ALL of the following conditions:
            </p>
            <ul className="space-y-3 text-slate-300 ml-4">
              <li className="flex gap-3">
                <span ><FaCheck /></span>
                <span>Product is unused, unopened, and in original condition</span>
              </li>
              <li className="flex gap-3">
                <span ><FaCheck /></span>
                <span>All original packaging, tags, and documentation are intact</span>
              </li>
              <li className="flex gap-3">
                <span ><FaCheck /></span>
                <span>Product is not damaged or altered</span>
              </li>
              <li className="flex gap-3">
                <span ><FaCheck /></span>
                <span>Purchase receipt and Order ID are available</span>
              </li>
              <li className="flex gap-3">
                <span ><FaCheck /></span>
                <span>No signs of wear or use on the product</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">3. Non-Returnable Items</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The following items cannot be returned:
            </p>
            <ul className="space-y-2 text-slate-300 ml-4">
              <li className="flex gap-3">
                <span className="text-red-400">✗</span>
                <span>Used, opened, or damaged products</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">✗</span>
                <span>Items with missing or damaged packaging</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">✗</span>
                <span>Clearance or final sale items</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">✗</span>
                <span>Custom or personalized products</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">✗</span>
                <span>Items without original packaging or accessories</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">✗</span>
                <span>Products showing signs of heavy use</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">4. How to Initiate a Return</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              To initiate a return, follow these steps:
            </p>
            <ol className="space-y-3 text-slate-300 ml-4">
              <li className="flex gap-3">
                <span className="text-emerald-800 font-bold">1.</span>
                <span>Log into your ShopNest account and navigate to "My Orders"</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-800 font-bold">2.</span>
                <span>Select the order containing the item you wish to return</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-800 font-bold">3.</span>
                <span>Click "Return Item" and select your reason for return</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-800 font-bold">4.</span>
                <span>Print the provided return shipping label</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-800 font-bold">5.</span>
                <span>Pack the item securely in its original packaging</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-800 font-bold">6.</span>
                <span>Drop off at the nearest shipping center</span>
              </li>
            </ol>
          </div>

          {/* Section 5 */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">5. Refund Processing</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Once we receive and inspect your returned item:
            </p>
            <ul className="space-y-3 text-slate-300 ml-4">
              <li className="flex gap-3">
                <span ><MdRadioButtonChecked /></span>
                <span><span className="font-semibold">Inspection:</span> We inspect the item within 5-7 business days</span>
              </li>
              <li className="flex gap-3">
                <span ><MdRadioButtonChecked /></span>
                <span><span className="font-semibold">Approval:</span> If approved, we process your refund</span>
              </li>
              <li className="flex gap-3">
                <span ><MdRadioButtonChecked /></span>
                <span><span className="font-semibold">Timeline:</span> Refunds take 5-10 business days to reach your account</span>
              </li>
              <li className="flex gap-3">
                <span ><MdRadioButtonChecked /></span>
                <span><span className="font-semibold">Amount:</span> Full refund including original shipping (if applicable)</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">6. Defective or Damaged Items</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you receive a defective or damaged item:
            </p>
            <ul className="space-y-2 text-slate-300 ml-4">
              <li className="flex gap-3">
                <span ><MdRadioButtonChecked /></span>
                <span>Contact us within 48 hours of receiving the item</span>
              </li>
              <li className="flex gap-3">
                <span ><MdRadioButtonChecked /></span>
                <span>Provide photos of the damage for verification</span>
              </li>
              <li className="flex gap-3">
                <span ><MdRadioButtonChecked /></span>
                <span>We will arrange immediate replacement or refund</span>
              </li>
              <li className="flex gap-3">
                <span ><MdRadioButtonChecked /></span>
                <span>No return shipping fee for defective items</span>
              </li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">7. Exchanges</h2>
            <p className="text-slate-300 leading-relaxed">
              You can exchange an item for the same product in a different size, color, or model within 30 days. Simply select "Exchange" instead of "Return" in the process. Exchanges are free if the new item costs the same or less. If the new item is more expensive, you'll pay the difference.
            </p>
          </div>

          {/* Section 8 */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">8. Shipping Costs</h2>
            <ul className="space-y-2 text-slate-300 ml-4">
              <li className="flex gap-3">
                <span ><MdRadioButtonChecked /></span>
                <span><span className="font-semibold">Free Return Shipping:</span> Provided for defective or wrong items</span>
              </li>
              <li className="flex gap-3">
                <span ><MdRadioButtonChecked /></span>
                <span><span className="font-semibold">Customer-Initiated Returns:</span> Shipping cost may be deducted from refund</span>
              </li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">9. Contact Support</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Have questions about our return policy? Reach out to our support team:
            </p>
            <div className="text-slate-300 space-y-2">
              <p><span className="font-semibold text-red-500">Email:</span> support@shopnest.com</p>
              <p><span className="font-semibold text-gray-400">Phone:</span> +91 98765 43210</p>
              <p><span className="font-semibold text-gray-400">Hours:</span> Monday - Friday, 9 AM - 6 PM IST</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center">
  <h3 className="mb-3 text-2xl font-semibold text-white">
    Need More Help?
  </h3>

  <p className="mb-6 text-zinc-400">
    Our support team is available to answer your questions.
  </p>

  <a
    href="/contact"
    className="inline-flex items-center rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-zinc-200"
  >
    Contact Support
  </a>
</div>
      </section>
    </div>
  )
}

export default ReturnPolicy
