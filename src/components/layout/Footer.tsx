import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { BlurhashImage, LOGO_IMAGE } from '../ui/BlurhashImage';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brunswick-green text-nyanza">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center mb-4" aria-label="H-NEEDS home">
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
                className="w-full max-w-[200px]"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '200px',
                  aspectRatio: LOGO_IMAGE.aspectRatio,
                }}
                loading="lazy"
                decoding="async"
                fetchpriority="auto"
              />
            </Link>
            <p className="text-celadon mb-4 leading-relaxed">
              Your trusted destination for quality products with exceptional service.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:hneedshospitality@gmail.com"
                className="text-celadon-2 hover:text-mint transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+917708840444"
                className="text-celadon-2 hover:text-mint transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 leading-tight">Quick Links</h4>
            <nav className="space-y-2">
              <Link
                to="/products"
                className="block text-celadon hover:text-mint transition-colors"
              >
                Products
              </Link>
              <Link
                to="/about"
                className="block text-celadon hover:text-mint transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block text-celadon hover:text-mint transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4 leading-tight">Customer Service</h4>
            <nav className="space-y-2">
              <Link
                to="/privacy"
                className="block text-celadon hover:text-mint transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="block text-celadon hover:text-mint transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 leading-tight">Stay Updated</h4>
            <p className="text-celadon text-sm mb-4">
              Subscribe to get special offers and updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-dark-green border border-dartmouth-green rounded-md text-nyanza placeholder-celadon-2 focus:outline-none focus:ring-2 focus:ring-mint focus:border-mint"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-mint-2 text-white rounded-md hover:bg-sea-green transition-colors focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2 focus:ring-offset-brunswick-green"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-dartmouth-green mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-celadon-2 text-sm">
              © {new Date().getFullYear()} HNEEDS. All rights reserved.
            </p>
            <div className="flex items-center mt-4 sm:mt-0">
              <MapPin className="w-4 h-4 text-celadon-2 mr-2" />
              <span className="text-celadon-2 text-sm">
                Kazura Garden, 8th Cross Street, Palavakkam, ECR Chennai - 600 041
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
