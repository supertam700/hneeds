import React from 'react';
import { Shield, Lock, Eye, Users, Mail, Phone } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nyanza via-white to-celadon">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sea-green rounded-full mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brunswick-green mb-6">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-mint-2 to-sea-green mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-dartmouth-green max-w-3xl mx-auto leading-relaxed">
            At H-NEEDS, we value and respect your privacy. This Privacy Policy outlines how we collect, use, protect, and disclose personal information when you visit our website and make purchases of cleaning products such as tissues, liquids, dispensers, garbage bags, and air fresheners.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8 border border-celadon/30">
          {/* Section 1 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-mint p-3 rounded-full mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brunswick-green">1. Information We Collect</h2>
            </div>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed space-y-4">
              <p>
                We collect personal information that you provide to us when making a purchase, signing up for our newsletter, or contacting customer service. This may include:
              </p>
              <ul className="space-y-2 ml-6">
                <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and shipping address.</li>
                <li><strong>Payment Information:</strong> Credit card details or other payment methods (we use secure third-party payment processors).</li>
                <li><strong>Order Information:</strong> Products purchased, shipping details, and billing information.</li>
                <li><strong>Usage Information:</strong> Information about how you interact with our website, such as browsing activity and IP address.</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-sea-green p-3 rounded-full mr-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brunswick-green">2. How We Use Your Information</h2>
            </div>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed space-y-4">
              <p>We use the information we collect for the following purposes:</p>
              <ul className="space-y-2 ml-6">
                <li><strong>To Process Orders:</strong> To fulfill your orders and deliver the cleaning products you have purchased, including processing payments and shipping.</li>
                <li><strong>Customer Support:</strong> To respond to inquiries, provide order updates, and resolve any issues with your orders.</li>
                <li><strong>Marketing and Promotions:</strong> With your consent, we may send you promotional emails, newsletters, and special offers related to cleaning products and services we offer.</li>
                <li><strong>Website Improvement:</strong> To analyze usage data and improve our website's functionality and user experience.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-mint-2 p-3 rounded-full mr-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brunswick-green">3. How We Protect Your Information</h2>
            </div>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed space-y-4">
              <p>We take the security of your personal information seriously. We implement a variety of security measures to protect your personal data, including:</p>
              <ul className="space-y-2 ml-6">
                <li><strong>Encryption:</strong> Your payment information is processed through secure third-party payment gateways with encryption.</li>
                <li><strong>Data Storage:</strong> Your personal information is stored in a secure database and is only accessible by authorized personnel.</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-brunswick-green mb-6">4. Cookies and Tracking Technologies</h2>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed space-y-4">
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us remember your preferences, provide personalized content, and improve website performance.
              </p>
              <p>
                You can modify your browser settings to disable cookies, but this may affect some features of our website.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-brunswick-green mb-6">5. Third-Party Service Providers</h2>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed">
              <p>
                We may share your information with third-party service providers to perform services related to order fulfillment, payment processing, and marketing. These service providers are obligated to protect your information and are not allowed to use it for other purposes.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-brunswick-green mb-6">6. Your Rights</h2>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed space-y-4">
              <p>You have the right to:</p>
              <ul className="space-y-2 ml-6">
                <li><strong>Access:</strong> Request a copy of the personal information we have about you.</li>
                <li><strong>Correction:</strong> Update or correct your personal information if it is inaccurate.</li>
                <li><strong>Deletion:</strong> Request the deletion of your personal data (subject to legal requirements).</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time by following the unsubscribe link in our emails.</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-brunswick-green mb-6">7. Links to Third-Party Websites</h2>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed">
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-brunswick-green mb-6">8. Changes to This Privacy Policy</h2>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. Any changes will be posted on this page with an updated date.
              </p>
              <p className="font-semibold text-sea-green">Last Updated: 11.11.2024</p>
            </div>
          </section>

          {/* Section 9 - Contact */}
          <section>
            <div className="flex items-center mb-6">
              <div className="bg-dartmouth-green p-3 rounded-full mr-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brunswick-green">9. Contact Us</h2>
            </div>
            <div className="bg-gradient-to-br from-nyanza to-celadon/20 rounded-xl p-6 border border-celadon/30">
              <p className="text-dartmouth-green leading-relaxed mb-4">
                If you have any questions or concerns about our privacy practices, please contact us at:
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