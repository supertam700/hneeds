import React from 'react';
import { Button } from '../ui/Button';

export const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-brunswick-green to-dark-green text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-green/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-mint/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-celadon/10 rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4 relative z-10">
          Stay in the Loop
        </h2>
        <p className="text-xl mb-8 text-celadon relative z-10">
          Get the latest updates on new products and exclusive offers
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg text-brunswick-green placeholder-dartmouth-green bg-nyanza focus:outline-none focus:ring-2 focus:ring-mint focus:ring-opacity-50 shadow-lg"
            required
          />
          <Button variant="secondary" type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};
