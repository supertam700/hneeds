import React from 'react';
import { X, Plus, Minus, Trash2, Trash } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useCustomer } from '../../context/CustomerContext';
import { Button } from '../ui/Button';
import { formatPrice } from '../../utils/formatters';
import { SmartCheckoutButton } from './SmartCheckoutButton';

export const CartDrawer: React.FC = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, clearCart, total } = useCart();
  const { isAuthenticated } = useCustomer();

  if (!isOpen) return null;

  const handleQuantityChange = (variantId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(variantId);
    } else {
      updateQuantity(variantId, newQuantity);
    }
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear all items from your cart?')) {
      clearCart();
    }
  };
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeCart} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
            <h2 className="text-lg font-medium text-gray-900">
              Shopping Cart ({items.length})
            </h2>
            <div className="flex items-center space-x-2">
              {items.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearCart}
                  className="text-red-400 hover:text-red-600 transition-colors p-1"
                  title="Clear all items"
                >
                  <Trash className="h-4 w-4" />
                </button>
              )}
              <button
                type="button"
                onClick={closeCart}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {items.length === 0 ? (
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                  <p className="text-gray-400 text-sm mt-1">Add some products to get started</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.variantId} className="flex items-center space-x-4">
                    {item.image && (
                      <img
                        src={item.image.url}
                        alt={item.image.altText || item.title}
                        className="h-16 w-16 rounded-lg object-cover"
                        width="64"
                        height="64"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 truncate min-h-[1.25rem]">
                        {item.title}
                      </h3>
                      {item.variant.selectedOptions.length > 0 && (
                        <p className="text-xs text-gray-500 min-h-[1rem]">
                          {item.variant.selectedOptions.map(option => option.value).join(', ')}
                        </p>
                      )}
                      <p className="text-sm font-medium text-gray-900 min-h-[1.25rem]">
                        {formatPrice(item.price.amount, item.price.currencyCode)}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(item.variantId, item.quantity - 1)}
                        className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(item.variantId, item.quantity + 1)}
                        className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => removeItem(item.variantId)}
                        className="p-1 text-red-400 hover:text-red-600 transition-colors ml-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 px-4 py-4 space-y-4">
              <div className="flex items-center justify-between text-lg font-medium">
                <span>Total:</span>
                <span>{formatPrice(total.toString(), items[0]?.price.currencyCode || 'USD')}</span>
              </div>
              
              <SmartCheckoutButton />
              
              <Button
                onClick={closeCart}
                variant="outline"
                fullWidth
              >
                Continue Shopping
              </Button>
              
              <Button
                onClick={handleClearCart}
                variant="ghost"
                fullWidth
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <Trash className="w-4 h-4 mr-2" />
                Clear All Items
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};