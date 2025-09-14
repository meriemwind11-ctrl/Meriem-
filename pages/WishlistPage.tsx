
import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const WishlistPage: React.FC = () => {
  const { wishlistItems } = useWishlist();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Mes Souhaits</h1>
      {wishlistItems.length === 0 ? (
        <div className="text-center py-16 bg-secondary dark:bg-dark-secondary rounded-xl">
          <p className="text-xl mb-4">Votre liste de souhaits est vide.</p>
          <Link to="/products" className="bg-accent text-white py-3 px-6 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
            Explorer les produits
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {wishlistItems.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
