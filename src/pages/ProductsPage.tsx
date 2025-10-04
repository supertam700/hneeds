import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductList } from '../components/products/ProductList';
import { Button } from '../components/ui/Button';

export const ProductsPage: React.FC = () => {
  const { products, loading, error, hasNextPage, loadMore } = useProducts(20);

  return (
    <div className="min-h-screen bg-gradient-to-br from-nyanza via-white to-celadon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-brunswick-green mb-6">
          All Products
        </h1>
        <p className="text-xl text-dartmouth-green max-w-2xl mx-auto">
          Discover our complete collection of quality products
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-mint-2 to-sea-green mx-auto mt-4 rounded-full"></div>
      </div>

      <ProductList products={products} loading={loading} error={error} />

      {hasNextPage && !loading && (
        <div className="text-center mt-16">
          <Button
            onClick={loadMore}
            variant="outline"
            size="lg"
            className="shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Load More Products
          </Button>
        </div>
      )}
      </div>
    </div>
  );
};