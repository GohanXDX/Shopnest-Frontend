import React from 'react'

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-slate-100">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <h1 className="text-4xl font-extrabold leading-tight text-white">Disclaimer</h1>
        <p className="mt-4 text-lg text-slate-300">Last Updated: May 2024</p>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="rounded-lg bg-slate-900 p-6">
            <h2 className="text-2xl font-bold text-gray-300 mb-4">1. General Information</h2>
            <p className="text-slate-300 leading-relaxed">
              ShopNest ("we," "us," "our," or "Company") operates the website and mobile application. All content, materials, and services provided on our platform are provided on an "as-is" basis without warranties of any kind.
            </p>
          </div>

          {/* Section 2 */}
          <div className="rounded-lg bg-slate-900 p-6">
            <h2 className="text-2xl font-bold text-gray-300 mb-4">2. No Professional Advice</h2>
            <p className="text-slate-300 leading-relaxed">
              The information, products, and services provided on ShopNest are for informational and entertainment purposes only. We do not provide medical, legal, financial, or professional advice. Before making any purchase or decision based on our platform, please consult with a qualified professional.
            </p>
          </div>

          {/* Section 3 */}
          <div className="rounded-lg bg-slate-900 p-6">
            <h2 className="text-2xl font-bold text-gray-300 mb-4">3. Product Accuracy</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We strive to ensure that all product descriptions, prices, and images are accurate and up-to-date. However:
            </p>
            <ul className="space-y-2 text-slate-300 ml-4">
              <li className="flex gap-3">
                <span className="text-emerald-400">•</span>
                <span>We do not guarantee the accuracy of product information</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">•</span>
                <span>Prices may change without notice</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">•</span>
                <span>Product availability may vary</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">•</span>
                <span>Images may not represent exact product specifications</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="rounded-lg bg-slate-900 p-6">
            <h2 className="text-2xl font-bold text-gray-300 mb-4">4. Limitation of Liability</h2>
            <p className="text-slate-300 leading-relaxed">
              To the fullest extent permitted by law, ShopNest shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from or related to your use of the platform, purchases, or services provided. This includes but is not limited to loss of data, business interruption, or financial loss.
            </p>
          </div>

          {/* Section 5 */}
          <div className="rounded-lg bg-slate-900 p-6">
            <h2 className="text-2xl font-bold text-gray-300 mb-4">5. Third-Party Links</h2>
            <p className="text-slate-300 leading-relaxed">
              Our platform may contain links to third-party websites. ShopNest is not responsible for the content, accuracy, or practices of these external sites. Use third-party websites at your own risk.
            </p>
          </div>

          {/* Section 6 */}
          <div className="rounded-lg bg-slate-900 p-6">
            <h2 className="text-2xl font-bold text-gray-300 mb-4">6. User Responsibility</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              You are responsible for:
            </p>
            <ul className="space-y-2 text-slate-300 ml-4">
              <li className="flex gap-3">
                <span className="text-emerald-400">•</span>
                <span>Providing accurate information during registration and checkout</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">•</span>
                <span>Maintaining confidentiality of your account credentials</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">•</span>
                <span>Complying with all applicable laws and regulations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">•</span>
                <span>Not engaging in fraudulent or abusive behavior</span>
              </li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="rounded-lg bg-slate-900 p-6">
            <h2 className="text-2xl font-bold text-gray-300 mb-4">7. Security & Privacy</h2>
            <p className="text-slate-300 leading-relaxed">
              While we implement security measures to protect your information, no method of transmission over the internet is 100% secure. ShopNest does not guarantee absolute security of your data. Please refer to our Privacy Policy for more details on how we handle your information.
            </p>
          </div>

          {/* Section 8 */}
          <div className="rounded-lg bg-slate-900 p-6">
            <h2 className="text-2xl font-bold text-gray-300 mb-4">8. Changes to Disclaimer</h2>
            <p className="text-slate-300 leading-relaxed">
              We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to the website. Your continued use of ShopNest after any changes constitutes your acceptance of the updated disclaimer.
            </p>
          </div>

          {/* Section 9 */}
          <div className="rounded-lg bg-slate-900 p-6">
            <h2 className="text-2xl font-bold text-gray-300 mb-4">9. Governing Law</h2>
            <p className="text-slate-300 leading-relaxed">
              This disclaimer is governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of courts in India.
            </p>
          </div>

          {/* Section 10 */}
          <div className="rounded-lg bg-slate-900 p-6">
            <h2 className="text-2xl font-bold text-gray-300 mb-4">10. Contact Information</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you have any questions or concerns regarding this disclaimer, please contact us:
            </p>
            <div className="text-slate-300 space-y-2">
              <p><span className="font-semibold text-emerald-400">Email:</span> legal@shopnest.com</p>
              <p><span className="font-semibold text-emerald-400">Address:</span> ShopNest HQ, India</p>
              <p><span className="font-semibold text-emerald-400">Phone:</span> +91 98765 43210</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-lg bg-emerald-700/10 border border-gray-400 p-6 text-center">
          <p className="text-slate-300 mb-4">Understood and agreed to the disclaimer?</p>
          <a href="/" className="inline-block rounded-full bg-gray-300 px-8 py-3 font-semibold text-slate-950 hover:bg-gray-400 transition">
            Continue Shopping
          </a>
        </div>
      </section>
    </div>
  )
}

export default Disclaimer
