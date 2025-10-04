import React from 'react';
import { ShoppingCart, Check, Loader2 } from 'lucide-react';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatters';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const [isAddingToCart, setIsAddingToCart] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  
  const firstVariant = product.variants[0];
  const isAvailable = firstVariant?.availableForSale;
  const featuredImage = product.images && product.images.length > 0 ? product.images[0] : null;
  
  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (firstVariant && isAvailable) {
      setIsAddingToCart(true);
      
      // Add a brief delay for visual feedback
      await new Promise(resolve => setTimeout(resolve, 500));
      
      addItem({
        variantId: firstVariant.id,
        productId: product.id,
        handle: product.handle,
        title: product.title,
        variant: firstVariant,
        quantity: 1,
        price: firstVariant.price,
        image: featuredImage
      });
      
      setIsAddingToCart(false);
      setShowSuccess(true);
      
      // Show success state briefly
      setTimeout(() => {
        setShowSuccess(false);
      }, 1500);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fadeIn">
      <a href={`/products/${product.handle}`} className="block">
        <div className="aspect-square overflow-hidden bg-gray-100">
          {featuredImage ? (
            <img
              src={featuredImage.url}
              alt={featuredImage.altText || product.title}
              width="300"
              height="300"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover image-hover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-sm">No Image</span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          {product.vendor && (
            <p className="text-sm text-gray-500 mb-1 min-h-[1.25rem]">{product.vendor}</p>
          )}
          
          <h3 className="font-semibold text-gray-900 mb-2 min-h-[3rem] line-clamp-2">
            {product.title}
          </h3>
          
          {product.description && (
            <p className="text-gray-600 text-sm mb-3 min-h-[2.5rem] line-clamp-2">
              {product.description}
            </p>
          )}
          
          <div className="flex items-center justify-between min-h-[1.5rem]">
            <div>
              {firstVariant && (
                <span className="text-lg font-bold text-gray-900">
                  {formatPrice(firstVariant.price.amount, firstVariant.price.currencyCode)}
                </span>
              )}
            </div>
            
            {!isAvailable && (
              <span className="text-sm text-red-500 font-medium">Out of Stock</span>
            )}
          </div>
        </div>
      </a>
      
      <div className="p-4 pt-0 border-t border-gray-100">
        <button
          onClick={handleAddToCart}
          disabled={!isAvailable || isAddingToCart}
          className={`w-full flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 min-h-[2.5rem] ${
            showSuccess
              ? 'bg-green-500 text-white'
              : isAvailable && !isAddingToCart
              ? 'bg-green-600 hover:bg-green-700 text-white btn-hover'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isAddingToCart ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Adding...
            </>
          ) : showSuccess ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Added to Cart!
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4 mr-2" />
              {isAvailable ? 'Add to Cart' : 'Out of Stock'}
            </>
          )}
        </button>
      </div>
    </div>
  );
};