import React from 'react';
import { Scale, ShoppingBag, Truck, RefreshCcw, Shield, User, Copyright, Lock, Gavel, FileText, Mail, Phone } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nyanza via-white to-celadon">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sea-green rounded-full mb-6">
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brunswick-green mb-6">
            Terms and Conditions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-mint-2 to-sea-green mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-dartmouth-green max-w-3xl mx-auto leading-relaxed">
            Welcome to H-NEEDS, your trusted online store for premium cleaning products including tissues, cleaning liquids, dispensers, garbage bags, air fresheners, and more. By accessing and using our website, you agree to comply with the following terms and conditions. If you do not agree with these terms, please do not use our website or services.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8 border border-celadon/30">
          {/* Section 1 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-mint p-3 rounded-full mr-4">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brunswick-green">1. Product Information</h2>
            </div>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed">
              <p>
                We strive to ensure that all the products listed on our website are accurately described. However, we do not guarantee the accuracy, completeness, or reliability of any product descriptions, images, pricing, or availability. We reserve the right to modify or discontinue products without prior notice.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-sea-green p-3 rounded-full mr-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brunswick-green">2. Orders and Payments</h2>
            </div>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed space-y-4">
              <p><strong>Order Acceptance:</strong> When you place an order on our website, you will receive an order confirmation email. This does not mean that your order has been accepted, as all orders are subject to availability.</p>
              <p><strong>Pricing:</strong> Prices listed on our website are in your local currency and may change without notice. Taxes, shipping, and handling fees may apply depending on your location.</p>
              <p><strong>Payment Methods:</strong> We accept payments through various methods, including credit/debit cards, PayPal, and other secure payment gateways. By placing an order, you authorize us to process your payment as per your chosen method.</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-mint-2 p-3 rounded-full mr-4">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brunswick-green">3. Shipping and Delivery</h2>
            </div>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed space-y-4">
              <p><strong>Shipping Fees:</strong> Shipping fees are calculated based on the weight, dimensions, and destination of your order. Delivery charges will be displayed at checkout.</p>
              <p><strong>Delivery Time:</strong> Delivery times vary depending on your location. We aim to dispatch orders within 1–3 business days, but cannot guarantee specific delivery times.</p>
              <p><strong>Risk of Loss:</strong> Once your order is dispatched, the risk of loss or damage to the products passes to you. We are not responsible for any delays or losses caused by third-party couriers.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-dartmouth-green p-3 rounded-full mr-4">
                <RefreshCcw className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brunswick-green">4. Returns and Refunds</h2>
            </div>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed space-y-4">
              <p><strong>Return Policy:</strong> You may return products within 14 days of receiving your order if the product is unused and in its original condition. Certain products, such as opened cleaning liquids, may not be eligible for return due to hygiene reasons.</p>
              <p><strong>Refunds:</strong> Refunds will be issued in the original payment method once the return has been processed and approved. Please note that shipping fees are non-refundable.</p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-mint p-3 rounded-full mr-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brunswick-green">5. Product Warranties</h2>
            </div>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed">
              <p>
                Some of our products may come with a manufacturer's warranty. These warranties are subject to the terms and conditions specified by the manufacturer. Please refer to the product packaging or manufacturer's website for further information.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-sea-green p-3 rounded-full mr-4">
                <User className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brunswick-green">6. User Conduct</h2>
            </div>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed space-y-4">
              <p>By using our website, you agree to:</p>
              <ul className="space-y-2 ml-6">
                <li>Not use our site for any illegal activities.</li>
                <li>Not post or transmit any harmful, offensive, or defamatory content.</li>
                <li>Comply with all applicable laws, including those regarding the import or export of goods.</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-mint-2 p-3 rounded-full mr-4">
                <Copyright className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brunswick-green">7. Intellectual Property</h2>
            </div>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed">
              <p>
                All content on this website, including logos, images, product descriptions, and trademarks, is the property of H-NEEDS and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content without prior written consent from us.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-dartmouth-green p-3 rounded-full mr-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brunswick-green">8. Privacy Policy</h2>
            </div>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed">
              <p>
                We value your privacy and are committed to protecting your personal information. By using our website, you agree to the collection, use, and sharing of your information as outlined in our Privacy Policy. Please refer to our <a href="/privacy" className="text-mint-2 hover:text-sea-green font-medium underline">Privacy Policy</a> for more details.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-mint p-3 rounded-full mr-4">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brunswick-green">9. Limitation of Liability</h2>
            </div>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed">
              <p>
                To the extent permitted by law, H-NEEDS is not liable for any damages resulting from the use of our website, including but not limited to direct, indirect, incidental, punitive, or consequential damages.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-sea-green p-3 rounded-full mr-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brunswick-green">10. Modification of Terms</h2>
            </div>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed">
              <p>
                We reserve the right to update or change these terms at any time. Any changes will be posted on this page with an updated date. Your continued use of the website after any such changes constitutes your acceptance of the new terms.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-mint-2 p-3 rounded-full mr-4">
                <Gavel className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brunswick-green">11. Governing Law</h2>
            </div>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed">
              <p>
                These terms and conditions are governed by the laws of India, and any disputes shall be subject to the jurisdiction of the courts located in Chennai.
              </p>
            </div>
          </section>

          {/* Section 12 - Contact */}
          <section>
            <div className="flex items-center mb-6">
              <div className="bg-dartmouth-green p-3 rounded-full mr-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brunswick-green">12. Contact Us</h2>
            </div>
            <div className="bg-gradient-to-br from-nyanza to-celadon/20 rounded-xl p-6 border border-celadon/30">
              <p className="text-dartmouth-green leading-relaxed mb-4">
                If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-brunswick-green text-xl">H-NEEDS</p>
                <div className="flex items-center text-dartmouth-green">
                  <Mail className="w-4 h-4 mr-2 text-mint-2" />
                  <a 
                    href="mailto:hneedshospitality@gmail.com"
                    className="text-mint-2 hover:text-sea-green transition-colors font-medium"
                  >
                    hneedshospitality@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};