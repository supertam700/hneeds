import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useCustomer } from '../../context/CustomerContext';
import { Button } from '../ui/Button';
import { shopifyRequest } from '../../lib/shopify';
import { CREATE_CART, CART_BUYER_IDENTITY_UPDATE } from '../../lib/graphql/checkout';
import { getStoredToken } from '../../lib/customerAuth';

export const SmartCheckoutButton: React.FC = () => {
  const { items, clearCart } = useCart();
  const { isAuthenticated } = useCustomer();
  const [isLoading, setIsLoading] = useState(false);

  const createCheckout = async () => {
    try {
      setIsLoading(true);

      // Create cart with line items
      const lines = items.map(item => ({
        merchandiseId: item.variantId,
        quantity: item.quantity,
      }));

      const cartResponse = await shopifyRequest<{
        cartCreate: {
          cart: {
            id: string;
            checkoutUrl: string;
          };
          userErrors: Array<{ field: string[]; message: string }>;
        };
      }>(CREATE_CART, {
        input: {
          lines,
        },
      });

      const { cart, userErrors } = cartResponse.cartCreate;

      if (userErrors.length > 0) {
        throw new Error(userErrors[0].message);
      }

      // Associate customer if authenticated
      if (isAuthenticated) {
        const token = getStoredToken();
        if (token) {
          await shopifyRequest(CART_BUYER_IDENTITY_UPDATE, {
            cartId: cart.id,
            buyerIdentity: {
              customerAccessToken: token,
            },
          });
        }
      }

      // Clear cart and redirect to checkout
      clearCart();
      
      // Open cart checkout in same window to maintain domain consistency
      window.location.href = cart.checkoutUrl;

    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to create checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckout = () => {    
    createCheckout();
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div>
      <Button
        onClick={handleCheckout}
        loading={isLoading}
        fullWidth
        variant="primary"
      >
        Checkout
      </Button>
    </div>
  );
};