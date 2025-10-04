import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomerProvider } from './context/CustomerContext';
import { CartProvider } from './context/CartContext';
import { Header } from './components/layout/Header';
import { CartDrawer } from './components/cart/CartDrawer';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { ScrollToTop } from './components/utils/ScrollToTop';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then(m => ({ default: m.ProductsPage })));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage').then(m => ({ default: m.ProductDetailPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));

function App() {
  return (
    <CustomerProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-white flex flex-col">
            <Header />
            
            <main className="flex-1 pt-16">
              <ScrollToTop>
              <Suspense fallback={
                <div className="min-h-64 flex items-center justify-center">
                  <LoadingSpinner size="lg" />
                </div>
              }>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/products/:handle" element={<ProductDetailPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  
                  {/* 404 Route */}
                  <Route path="*" element={
                    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                      <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
                      <p className="text-gray-600">The page you're looking for doesn't exist.</p>
                    </div>
                  } />
                </Routes>
              </Suspense>
              </ScrollToTop>
            </main>
            
           
            <CartDrawer />
          </div>
        </Router>
      </CartProvider>
    </CustomerProvider>
  );
}

export default App;