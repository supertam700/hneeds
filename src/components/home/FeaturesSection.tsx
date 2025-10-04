import React from 'react';
import { ShieldCheck, Leaf, Heart, DollarSign } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-nyanza to-celadon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-mint rounded-full mb-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-brunswick-green mb-2">
              High-Quality Products
            </h3>
            <p className="text-dartmouth-green">
              Sourced from trusted brands to ensure superior cleaning performance.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-mint rounded-full mb-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-brunswick-green mb-2">
              Eco-Friendly Focus
            </h3>
            <p className="text-dartmouth-green">
              Designed with sustainability in mind to reduce environmental impact.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-mint rounded-full mb-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-brunswick-green mb-2">
              Customer-Centric Service
            </h3>
            <p className="text-dartmouth-green">
              Easy ordering, fast delivery, and hassle-free returns.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-mint rounded-full mb-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-brunswick-green mb-2">
              Affordable Pricing
            </h3>
            <p className="text-dartmouth-green">
              Premium cleaning essentials at competitive prices for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
