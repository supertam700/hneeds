import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { shopifyRequest } from '../../lib/shopify';
import { SEARCH_PRODUCTS } from '../../lib/graphql/products';
import { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatters';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResponse {
  products: {
    edges: Array<{
      node: Product;
    }>;
  };
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus the input when modal opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
      // Reset search when modal closes
      setQuery('');
      setResults([]);
      setHasSearched(false);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    setLoading(true);
    setHasSearched(true);

    try {
      const response = await shopifyRequest<SearchResponse>(SEARCH_PRODUCTS, {
        query: searchQuery,
        first: 20,
      });

      const searchResults = response.products.edges.map(edge => ({
        ...edge.node,
        images: edge.node.images?.edges?.map(imgEdge => imgEdge.node) || [],
        variants: edge.node.variants?.edges?.map(varEdge => varEdge.node) || [],
      }));

      setResults(searchResults);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length > 0) {
        performSearch(query);
      } else {
        setResults([]);
        setHasSearched(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
          onClick={onClose}
        />

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          {/* Header */}
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Search Products
              </h3>
              <button
                type="button"
                className="bg-white rounded-md text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sea-green"
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-sea-green focus:border-sea-green"
              />
            </div>
          </div>

          {/* Results */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 max-h-96 overflow-y-auto">
            {loading && (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="w-6 h-6 animate-spin text-sea-green mr-2" />
                <span className="text-gray-600">Searching...</span>
              </div>
            )}

            {!loading && hasSearched && results.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No products found for "{query}"</p>
                <p className="text-gray-400 text-sm mt-1">Try different keywords</p>
              </div>
            )}

            {!loading && !hasSearched && query.length === 0 && (
              <div className="text-center py-8">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                <p className="text-gray-500">Start typing to search products</p>
              </div>
            )}

            {results.length > 0 && (
              <div className="space-y-2">
                {results.map((product) => {
                  const firstVariant = product.variants?.[0];
                  const featuredImage = product.images?.[0];

                  return (
                    <Link
                      key={product.id}
                      to={`/products/${product.handle}`}
                      onClick={onClose}
                      className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 hover:border-gray-300"
                    >
                      {featuredImage ? (
                        <img
                          src={featuredImage.url}
                          alt={featuredImage.altText || product.title}
                          className="w-16 h-16 rounded-md object-cover flex-shrink-0"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-400 text-xs">No Image</span>
                        </div>
                      )}

                      <div className="ml-4 flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {product.title}
                        </h4>
                        {product.description && (
                          <p className="text-sm text-gray-500 truncate">
                            {product.description}
                          </p>
                        )}
                        {firstVariant && (
                          <p className="text-sm font-semibold text-sea-green">
                            {formatPrice(firstVariant.price.amount, firstVariant.price.currencyCode)}
                          </p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {results.length > 0 && (
            <div className="bg-white px-4 py-3 sm:px-6 border-t border-gray-200">
              <Link
                to={`/products?search=${encodeURIComponent(query)}`}
                onClick={onClose}
                className="text-sea-green hover:text-dartmouth-green font-medium text-sm"
              >
                View all results for "{query}" →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};