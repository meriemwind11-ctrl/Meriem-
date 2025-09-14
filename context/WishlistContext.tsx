
import React, { createContext, useContext } from 'react';
import type { Product } from '../types';
import { useProducts } from './ProductContext';
import useLocalStorage from '../hooks/useLocalStorage';

interface WishlistContextType {
  wishlistIds: number[];
  wishlistItems: Product[];
  toggleWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlistIds, setWishlistIds] = useLocalStorage<number[]>('wishlist_ids', []);
  const { products } = useProducts();

  const toggleWishlist = (productId: number) => {
    setWishlistIds(prevIds =>
      prevIds.includes(productId)
        ? prevIds.filter(id => id !== productId)
        : [...prevIds, productId]
    );
  };

  const isInWishlist = (productId: number) => {
    return wishlistIds.includes(productId);
  };

  const wishlistItems = products.filter(product => wishlistIds.includes(product.id));

  return (
    <WishlistContext.Provider value={{ wishlistIds, wishlistItems, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
