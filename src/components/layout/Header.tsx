import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { SearchModal } from '../ui/SearchModal';
import { BlurhashImage, LOGO_IMAGE } from '../ui/BlurhashImage';

const Header: React.FC = () => {
  const { items, toggleCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center w-[140px] sm:w-[200px]"
              aria-label="H-NEEDS home"
            >
              <BlurhashImage
                src={LOGO_IMAGE.src}
                srcSet={LOGO_IMAGE.srcSet}
                sizes={LOGO_IMAGE.sizes}
                sources={[
                  {
                    type: 'image/webp',
                    srcSet: LOGO_IMAGE.webpSrcSet,
                    sizes: LOGO_IMAGE.sizes,
                  },
                ]}
                blurhash={LOGO_IMAGE.blurhash}
                alt="H-NEEDS logo"
                width={LOGO_IMAGE.width}
                height={LOGO_IMAGE.height}
                className="w-full"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '100%',
                  aspectRatio: LOGO_IMAGE.aspectRatio,
                }}
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/products"
                className="text-dartmouth-green hover:text-sea-green transition-colors font-medium"
              >
                Products
              </Link>
              <Link
                to="/about"
                className="text-dartmouth-green hover:text-sea-green transition-colors font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-dartmouth-green hover:text-sea-green transition-colors font-medium"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="text-dartmouth-green hover:text-sea-green transition-colors p-2"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={toggleCart}
                className="relative text-dartmouth-green hover:text-sea-green transition-colors p-2 min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center"
                aria-label={`Shopping cart with ${itemCount} items`}
              >
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-sea-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center min-w-[1.25rem]">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden text-dartmouth-green hover:text-sea-green transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <Link
                to="/products"
                className="block px-3 py-2 text-dartmouth-green hover:text-sea-green transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-dartmouth-green hover:text-sea-green transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-dartmouth-green hover:text-sea-green transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="flex items-center justify-end px-3 py-2 border-t border-gray-200 mt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsSearchOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-dartmouth-green hover:text-sea-green transition-colors mr-4"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    toggleCart();
                    setIsMobileMenuOpen(false);
                  }}
                  className="relative text-dartmouth-green hover:text-sea-green transition-colors"
                  aria-label={`Shopping cart with ${itemCount} items`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-sea-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
};

export { Header };
