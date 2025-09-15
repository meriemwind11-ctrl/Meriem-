import React from 'react';
// FIX: Updated react-router-dom imports for v6.
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
// FIX: Replaced unavailable Pinterest icon with Share2 to fix import error.
import { ShoppingCart, Heart, Star, ChevronLeft, Facebook, Twitter, Share2 } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { products } = useProducts();
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const { showToast } = useToast();
    // FIX: Switched from useHistory to useNavigate.
    const navigate = useNavigate();

    const product = products.find(p => p.id === parseInt(id!));

    if (!product) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold mb-4">Produit non trouvé</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Désolé, nous n'avons pas pu trouver le produit que vous cherchez.</p>
                <Link to="/products" className="bg-accent text-white py-3 px-6 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
                    Retourner au catalogue
                </Link>
            </div>
        );
    }
    
    // Social Sharing Logic
    const productUrl = window.location.href;
    const shareText = `Découvrez ce super produit : ${product.name} sur Meriem's Market !`;
    
    const encodedUrl = encodeURIComponent(productUrl);
    const encodedText = encodeURIComponent(shareText);
    const encodedImageUrl = encodeURIComponent(product.imageUrl);

    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
    const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImageUrl}&description=${encodedText}`;

    const handleAddToCart = () => {
        addToCart(product);
        showToast('✅ Ajouté au panier !', 'success');
    };

    const handleToggleWishlist = () => {
        toggleWishlist(product.id);
    };
    
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={20} className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} />
        ));
    };

    return (
        <div className="container mx-auto py-8">
            {/* FIX: Updated navigation method from history.goBack() to navigate(-1). */}
            <button onClick={() => navigate(-1)} className="flex items-center text-accent mb-6 font-semibold hover:underline">
                <ChevronLeft size={20} className="mr-1" />
                Retour
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-white dark:bg-dark-secondary p-8 rounded-xl shadow-lg">
                {/* Image Section */}
                <div className="flex items-center justify-center">
                    <img src={product.imageUrl} alt={product.name} className="w-full max-w-md h-auto object-cover rounded-lg shadow-md" />
                </div>

                {/* Details Section */}
                <div className="flex flex-col justify-center">
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">{product.category}</p>
                    <h1 className="text-3xl lg:text-4xl font-bold my-2 text-text-primary dark:text-dark-text-primary">{product.name}</h1>
                    
                    <div className="flex items-center my-3">
                        {renderStars(product.popularity)}
                        <span className="ml-2 text-gray-600 dark:text-gray-300">({product.popularity}/5)</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed my-4">
                        {product.description}
                    </p>

                    <p className="text-4xl font-extrabold text-accent my-4">€{product.price.toFixed(2)}</p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                        <button
                            onClick={handleAddToCart}
                            className="w-full sm:w-auto bg-accent text-white py-3 px-8 rounded-xl flex items-center justify-center font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                        >
                            <ShoppingCart size={20} className="mr-2" />
                            Ajouter au panier
                        </button>
                        <button
                            onClick={handleToggleWishlist}
                            className="w-full sm:w-auto bg-secondary dark:bg-gray-700 text-text-primary dark:text-dark-text-primary py-3 px-6 rounded-xl flex items-center justify-center font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                            <Heart size={20} fill={isInWishlist(product.id) ? '#DC3545' : 'none'} className={`mr-2 ${isInWishlist(product.id) ? 'text-alert' : ''}`} />
                            {isInWishlist(product.id) ? 'Dans la wishlist' : 'Ajouter à la wishlist'}
                        </button>
                    </div>

                     <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Partager ce produit</h3>
                      <div className="flex items-center gap-3">
                        <a 
                            href={facebookShareUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Partager sur Facebook" 
                            className="flex items-center justify-center w-11 h-11 bg-[#1877F2] text-white rounded-full hover:opacity-90 transition-opacity"
                        >
                          <Facebook size={22} />
                        </a>
                        <a 
                            href={twitterShareUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Partager sur Twitter" 
                            className="flex items-center justify-center w-11 h-11 bg-[#1DA1F2] text-white rounded-full hover:opacity-90 transition-opacity"
                        >
                          <Twitter size={22} />
                        </a>
                        <a 
                            href={pinterestShareUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Partager sur Pinterest" 
                            className="flex items-center justify-center w-11 h-11 bg-[#E60023] text-white rounded-full hover:opacity-90 transition-opacity"
                        >
                           <Share2 size={22} />
                        </a>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
