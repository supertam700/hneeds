import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your email service here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-nyanza via-white to-celadon">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brunswick-green mb-6">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-mint-2 to-sea-green mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-dartmouth-green max-w-3xl mx-auto leading-relaxed">
            If you have any questions or would like to learn more about our products, feel free to reach out to us. We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Primary Contact */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-celadon/30">
              <div className="flex items-center mb-6">
                <div className="bg-mint-2 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-brunswick-green">Get in Touch</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-dartmouth-green/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-dartmouth-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dartmouth-green mb-1">Visit Us</h3>
                    <p className="text-dartmouth-green/80 leading-relaxed">
                      Kazura Garden, 8<sup>th</sup> Cross Street,<br />
                      Palavakkam, ECR Chennai - 600 041
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-mint/10 p-3 rounded-full mr-4">
                    <Phone className="w-5 h-5 text-mint" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dartmouth-green mb-1">Call Us</h3>
                    <a 
                      href="tel:+917708840444"
                      className="text-mint-2 hover:text-sea-green transition-colors text-lg font-medium"
                    >
                      +91 77088 40444
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-sea-green/10 p-3 rounded-full mr-4">
                    <Mail className="w-5 h-5 text-sea-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dartmouth-green mb-1">Email Us</h3>
                    <a 
                      href="mailto:hneedshospitality@gmail.com"
                      className="text-mint-2 hover:text-sea-green transition-colors text-lg font-medium"
                    >
                      hneedshospitality@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-mint/10 p-3 rounded-full mr-4">
                    <MessageCircle className="w-5 h-5 text-mint" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dartmouth-green mb-1">Response Time</h3>
                    <p className="text-dartmouth-green/80">We typically respond within 24 hours</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Why Contact Us */}
            <div className="bg-gradient-to-br from-mint/20 to-sea-green/20 rounded-2xl shadow-lg p-8 border border-mint/30">
              <h3 className="text-xl font-bold text-brunswick-green mb-4">Why Contact Us?</h3>
              <ul className="space-y-3 text-dartmouth-green">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-mint-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Product recommendations and guidance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-mint-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Bulk order inquiries and custom solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-mint-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Technical support and usage tips</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-mint-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Partnership and wholesale opportunities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-celadon/30">
            <div className="flex items-center mb-6">
              <div className="bg-sea-green p-3 rounded-full mr-4">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brunswick-green">Send us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dartmouth-green mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-celadon rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-2 focus:border-mint-2 transition-colors bg-white/90"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dartmouth-green mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-celadon rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-2 focus:border-mint-2 transition-colors bg-white/90"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dartmouth-green mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-celadon rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-2 focus:border-mint-2 transition-colors bg-white/90"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dartmouth-green mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-celadon rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-2 focus:border-mint-2 transition-colors bg-white/90 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                fullWidth
                icon={<Send className="w-5 h-5" />}
                className="shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Send Message
              </Button>
            </form>

            <div className="mt-6 p-4 bg-gradient-to-r from-nyanza to-celadon/50 rounded-xl border border-celadon/30">
              <p className="text-sm text-dartmouth-green text-center">
                <strong>Quick Response:</strong> For urgent inquiries, email us directly at{' '}
                <a 
                  href="mailto:hneedshospitality@gmail.com" 
                  className="text-mint-2 hover:text-sea-green font-medium transition-colors"
                >
                  hneedshospitality@gmail.com
                </a>{' '}
                or call us at{' '}
                <a 
                  href="tel:+917708840444" 
                  className="text-mint-2 hover:text-sea-green font-medium transition-colors"
                >
                  +91 77088 40444
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-brunswick-green to-dark-green text-white rounded-2xl shadow-xl p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-mint/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-celadon/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-celadon mb-6 max-w-2xl mx-auto">
                Whether you need cleaning supplies for your business or home, we're here to provide the best products and service.
              </p>
              <a
                href="/products"
                className="inline-flex items-center px-8 py-3 bg-mint-2 hover:bg-sea-green text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Browse Our Products
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};