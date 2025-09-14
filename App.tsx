import React from 'react';
// FIX: Updated imports for react-router-dom v6 compatibility.
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ToastProvider } from './context/ToastContext';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import ProfilePage from './pages/ProfilePage';

// FIX: Rewrote PrivateRoute for react-router-dom v6.
const PrivateRoute = ({ children }: { children: React.ReactElement }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

// FIX: Rewrote AuthRoute for react-router-dom v6.
const AuthRoute = ({ children }: { children: React.ReactElement }) => {
  const { user } = useAuth();
  return user ? <Navigate to="/" replace /> : children;
};


function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProductProvider>
          <WishlistProvider>
            <CartProvider>
              <ToastProvider>
                <HashRouter>
                  <Layout>
                    {/* FIX: Replaced Switch with Routes and updated Route syntax for v6. */}
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/products" element={<ProductsPage />} />
                      <Route path="/product/:id" element={<ProductDetailPage />} />
                      <Route path="/cart" element={<CartPage />} />
                      <Route path="/wishlist" element={<PrivateRoute><WishlistPage /></PrivateRoute>} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/faq" element={<FAQPage />} />
                      
                      <Route path="/login" element={<AuthRoute><LoginPage /></AuthRoute>} />
                      <Route path="/register" element={<AuthRoute><RegisterPage /></AuthRoute>} />

                      <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
                      
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </Layout>
                </HashRouter>
              </ToastProvider>
            </CartProvider>
          </WishlistProvider>
        </ProductProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
