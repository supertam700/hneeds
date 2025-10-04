import React from 'react';
import { Product } from '../../types/product';
import { ProductCard } from './ProductCard';
import { LoadingSpinner } from '../ui/LoadingSpinner';

interface ProductListProps {
  products: Product[];
  loading?: boolean;
  error?: string | null;
}

const ProductSkeleton: React.FC = () => (
  <div className="overflow-hidden rounded-xl border border-celadon/50 bg-white/90 backdrop-blur-sm shadow-lg animate-pulse">
    <div className="bg-gradient-to-br from-nyanza to-celadon/30" style={{ aspectRatio: '1/1' }}>
      <div className="w-full h-full bg-celadon/50"></div>
    </div>
    <div className="p-6 bg-gradient-to-b from-white to-nyanza/20 min-h-[200px] flex flex-col">
      <div className="h-6 bg-celadon/30 rounded mb-2"></div>
      <div className="h-4 bg-celadon/20 rounded w-20 mb-2"></div>
      <div className="h-8 bg-celadon/30 rounded w-24 mb-3"></div>
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-celadon/20 rounded"></div>
        <div className="h-4 bg-celadon/20 rounded w-3/4"></div>
      </div>
      <div className="mt-auto pt-4">
        <div className="h-10 bg-celadon/30 rounded"></div>
      </div>
    </div>
  </div>
);
export const ProductList: React.FC<ProductListProps> = ({
  products,
  loading = false,
  error = null,
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-64 flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl shadow-inner border border-red-200">
        <div className="text-center p-8">
          <p className="text-red-700 mb-2 text-lg font-semibold">Failed to load products</p>
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="min-h-64 flex items-center justify-center bg-gradient-to-br from-nyanza to-celadon/30 rounded-2xl shadow-inner">
        <div className="text-center p-8">
          <p className="text-dartmouth-green text-xl font-medium mb-2">No products found</p>
          <p className="text-dartmouth-green/60 text-sm">Check back later for new arrivals</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};