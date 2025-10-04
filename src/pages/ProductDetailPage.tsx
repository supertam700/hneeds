import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, ArrowLeft, ZoomIn } from 'lucide-react';
import { useProduct } from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import { ProductDescription } from '../components/products/ProductDescription';
import { Button } from '../components/ui/Button';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { formatPrice } from '../utils/formatters';
import { ProductVariant } from '../types/product';
import { Lightbox } from '../components/ui/Lightbox';

export const ProductDetailPage: React.FC = () => {
  const { handle } = useParams<{ handle: string }>();
  const navigate = useNavigate();
  const { product, loading, error } = useProduct(handle || '');
  const { addItem, openCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Set default variant when product loads
  React.useEffect(() => {
    if (product && product.variants.length > 0 && !selectedVariant) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product, selectedVariant]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <LoadingSpinner size="lg" text="Loading product..." />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
          <p className="text-gray-600 mb-4">{error || 'The requested product could not be found.'}</p>
          <Button onClick={() => navigate('/products')} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    const primaryImage = product.images[0];
    
    addItem({
      variantId: selectedVariant.id,
      productId: product.id,
      title: product.title,
      handle: product.handle,
      price: selectedVariant.price,
      quantity,
      image: primaryImage,
      variant: selectedVariant,
    });

    openCart();
  };

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const isAddToCartDisabled = !selectedVariant || !selectedVariant.availableForSale || quantity < 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-nyanza via-white to-celadon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate('/products')}
        className="flex items-center text-dartmouth-green hover:text-brunswick-green mb-8 transition-all duration-200 font-medium bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="mb-4 relative group" style={{ aspectRatio: '1/1' }}>
            {product.images[selectedImageIndex] ? (
              <>
                <img
                  src={product.images[selectedImageIndex].url}
                  alt={product.images[selectedImageIndex].altText || product.title}
                  className="w-full h-full object-cover object-center rounded-xl shadow-lg cursor-zoom-in transition-transform duration-300 group-hover:scale-105"
                  width="600"
                  height="600"
                  loading="eager"
                  decoding="sync"
                  onClick={() => openLightbox(selectedImageIndex)}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-celadon-2 to-mint rounded-xl flex items-center justify-center shadow-lg" style={{ aspectRatio: '1/1' }}>
                <span className="text-dartmouth-green font-medium">No image available</span>
              </div>
            )}
          </div>

          {/* Image Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => openLightbox(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all relative ${
                    index === selectedImageIndex
                      ? 'border-sea-green shadow-lg'
                      : 'border-celadon hover:border-mint-2 shadow-md hover:scale-105'
                  }`}
                  style={{ aspectRatio: '1/1' }}
                >
                  <img
                    src={image.url}
                    alt={image.altText || `${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                    width="80"
                    height="80"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Information */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product.title}
          </h1>

          {product.vendor && (
            <p className="text-lg text-gray-600 mb-4">
              by {product.vendor}
            </p>
          )}

          <div className="mb-6">
            <span className="text-3xl font-bold text-gray-900">
              {selectedVariant ? (
                formatPrice(selectedVariant.price.amount, selectedVariant.price.currencyCode)
              ) : product.priceRange?.minVariantPrice ? (
                formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode)
              ) : (
                'Price not available'
              )}
            </span>
          </div>

          {/* Variant Selection */}
          {product.variants.length > 1 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                Variant
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 text-sm border rounded-md transition-all ${
                      selectedVariant?.id === variant.id
                        ? 'border-green-500 bg-green-50 text-green-900'
                        : 'border-gray-300 hover:border-gray-400'
                    } ${!variant.availableForSale ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!variant.availableForSale}
                  >
                    {variant.title} - {formatPrice(variant.price.amount, variant.price.currencyCode)}
                    {!variant.availableForSale && ' (Sold Out)'}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Quantity
            </label>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 px-3 py-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="flex space-x-4 mb-8">
            <Button
              onClick={handleAddToCart}
              disabled={isAddToCartDisabled}
              size="lg"
              fullWidth
              icon={<ShoppingCart className="w-5 h-5" />}
            >
              {selectedVariant?.availableForSale ? 'Add to Cart' : 'Sold Out'}
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="px-6"
              icon={<Heart className="w-5 h-5" />}
            >
              Save
            </Button>
          </div>

          {/* Stock Status */}
          {selectedVariant && (
            <div className="mb-6">
              <span className={`text-sm ${
                selectedVariant.availableForSale ? 'text-green-600' : 'text-red-600'
              }`}>
                {selectedVariant.availableForSale ? '✓ In Stock' : '✗ Out of Stock'}
              </span>
            </div>
          )}

          {/* Product Description */}
          <ProductDescription
            description={product.description}
            descriptionHtml={product.descriptionHtml}
            title="Product Details"
          />

          {/* Product Tags */}
          {product.tags.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Lightbox */}
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={product.images}
        initialIndex={selectedImageIndex}
        productTitle={product.title}
      />
    </div>
    </div>
  );
};