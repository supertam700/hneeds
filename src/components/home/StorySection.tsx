import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const StorySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-nyanza to-celadon/30 rounded-2xl shadow-lg p-12 border border-celadon/30">
          <h2 className="text-3xl md:text-4xl font-bold text-brunswick-green mb-8 leading-tight">
            Trusted Cleaning Solutions for Every Need
          </h2>
          <p className="text-xl text-dartmouth-green leading-relaxed mb-8 max-w-3xl mx-auto">
            Founded with a passion for quality cleaning, H-NEEDS offers tissues, cleaning liquids, dispensers, and more — everything you need for a clean, hygienic lifestyle.
          </p>
          <Link to="/about">
            <Button
              variant="primary"
              size="lg"
              className="px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              Discover Our Story
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
