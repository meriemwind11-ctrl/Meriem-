
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    showToast('✅ Ajouté au panier !', 'success');
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <Link to={`/product/${product.id}`} className="group bg-white dark:bg-dark-secondary rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-transparent dark:border-gray-700">
      <div className="relative overflow-hidden">
        <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-300" />
        {product.isFeatured && (
          <span className="absolute top-3 left-3 bg-alert text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            🔥 PROMO
          </span>
        )}
        <button
          onClick={handleToggleWishlist}
          className="absolute top-3 right-3 bg-white/80 dark:bg-dark-background/80 p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors duration-300 z-10"
        >
          <Heart size={20} fill={isInWishlist(product.id) ? '#DC3545' : 'none'} className={isInWishlist(product.id) ? 'text-alert' : ''}/>
        </button>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
        <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mt-1 h-14 overflow-hidden">
            {product.name}
        </h3>
        <p className="text-xl font-bold text-accent mt-2 flex-grow">€{product.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className="w-full mt-4 bg-accent text-white py-2.5 px-4 rounded-xl flex items-center justify-center font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 z-10"
        >
          <ShoppingCart size={18} className="mr-2" />
          Ajouter au panier
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
