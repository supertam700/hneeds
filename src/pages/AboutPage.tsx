import React from 'react';
import { CheckCircle, Heart, Leaf, Shield, Star, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nyanza via-white to-celadon">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brunswick-green mb-6">
            Welcome to H-NEEDS!
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-mint-2 to-sea-green mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-dartmouth-green max-w-3xl mx-auto leading-relaxed">
            At H-NEEDS, we believe that a clean and healthy environment is the foundation for a better life. Founded with a passion for providing high-quality cleaning solutions, we offer a wide range of premium cleaning products designed to make your life easier, more efficient, and more enjoyable.
          </p>
        </div>

        {/* Product Overview */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-12 border border-celadon/30">
          <p className="text-lg text-dartmouth-green leading-relaxed">
            Our product lineup includes essential items like tissues, cleaning liquids, dispensers, garbage bags, and air fresheners – everything you need to maintain a clean, fresh, and hygienic space. Whether you're a business looking for reliable cleaning supplies or a homeowner seeking everyday cleaning essentials, we have you covered.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-mint/20 to-sea-green/20 rounded-2xl shadow-lg p-8 border border-mint/30">
            <div className="flex items-center mb-6">
              <div className="bg-mint-2 p-3 rounded-full mr-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-brunswick-green">Our Mission</h2>
            </div>
            <p className="text-lg text-dartmouth-green leading-relaxed">
              Our mission is to offer our customers top-notch cleaning products that combine effectiveness, convenience, and sustainability. We are committed to providing products that not only keep your environment spotless but also contribute to a healthier, more sustainable world. At H-NEEDS, we prioritize quality, safety, and customer satisfaction in everything we do.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brunswick-green text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-celadon/30 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-mint p-3 rounded-full mr-4 flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brunswick-green mb-2">High-Quality Products</h3>
                  <p className="text-dartmouth-green">We source our products from trusted brands and manufacturers to ensure you receive only the best.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-celadon/30 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-sea-green p-3 rounded-full mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brunswick-green mb-2">Customer-Centric Service</h3>
                  <p className="text-dartmouth-green">Our customers are at the heart of everything we do. We are dedicated to delivering exceptional service, from easy ordering to fast delivery and hassle-free returns.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-celadon/30 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-mint-2 p-3 rounded-full mr-4 flex-shrink-0">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brunswick-green mb-2">Eco-Friendly Focus</h3>
                  <p className="text-dartmouth-green">We care about the environment. Many of our products are designed to be eco-friendly, helping you maintain a clean space while minimizing your carbon footprint.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-celadon/30 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-dartmouth-green p-3 rounded-full mr-4 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brunswick-green mb-2">Affordable Pricing</h3>
                  <p className="text-dartmouth-green">We believe that cleaning products should be accessible to everyone. That's why we offer competitive pricing without compromising on quality.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-celadon/30 to-mint/20 rounded-2xl shadow-lg p-8 border border-celadon/30">
            <h2 className="text-3xl font-bold text-brunswick-green text-center mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-sea-green p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brunswick-green mb-2">Integrity</h3>
                <p className="text-dartmouth-green">We operate with honesty and transparency, ensuring our customers can trust us every step of the way.</p>
              </div>

              <div className="text-center">
                <div className="bg-mint-2 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brunswick-green mb-2">Innovation</h3>
                <p className="text-dartmouth-green">We are constantly exploring new ways to improve our products and services to meet the evolving needs of our customers.</p>
              </div>

              <div className="text-center">
                <div className="bg-mint p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brunswick-green mb-2">Sustainability</h3>
                <p className="text-dartmouth-green">We strive to reduce our environmental impact by offering eco-conscious products and promoting responsible consumption.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-celadon/30">
            <h2 className="text-3xl font-bold text-brunswick-green mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-dartmouth-green leading-relaxed space-y-4">
              <p>
                H-NEEDS started with a simple idea – to provide affordable, reliable, and high-quality cleaning products to households and businesses alike. Over the years, we've grown into a trusted name in the cleaning industry, known for our dedication to quality, service, and sustainability.
              </p>
              <p>
                Today, we continue to evolve and expand our product offerings to meet the diverse needs of our customers. Our goal is to remain your go-to provider for all your cleaning essentials, helping you keep your home, office, or business clean and fresh.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-brunswick-green to-dark-green text-white rounded-2xl shadow-xl p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-mint/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-celadon/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Join Us in Creating a Cleaner Future</h2>
              <p className="text-xl text-celadon mb-6 max-w-2xl mx-auto">
                At H-NEEDS, we're more than just a cleaning supply store – we're a community dedicated to making the world a cleaner, healthier place. Whether you're stocking up on cleaning supplies for your business or simply looking for everyday essentials, we're here to make your life easier.
              </p>
              <p className="text-lg text-mint mb-8">
                Thank you for choosing H-NEEDS. We look forward to helping you maintain a clean, hygienic, and sustainable environment.
              </p>
              <a
                href="/products"
                className="inline-flex items-center px-8 py-3 bg-mint-2 hover:bg-sea-green text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Shop Our Products
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};