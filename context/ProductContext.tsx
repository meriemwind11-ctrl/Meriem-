
import React, { createContext, useContext } from 'react';
import type { Product, Category } from '../types';
import { products, categories } from '../services/productService';

interface ProductContextType {
  products: Product[];
  categories: Category[];
  featuredProducts: Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const featuredProducts = products.filter(p => p.isFeatured);
  
  const value = { products, categories, featuredProducts };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
