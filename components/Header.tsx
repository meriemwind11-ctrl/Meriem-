import React from 'react';
// FIX: react-router-dom imports are correct, usage updated for v6.
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Menu, Search, ShoppingCart, Heart, User } from 'lucide-react';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    const { cartCount } = useCart();
    const { user } = useAuth();

    return (
        <header className="bg-background dark:bg-dark-background/80 backdrop-blur-sm sticky top-0 z-40 shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <button
                            onClick={onMenuClick}
                            className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-white lg:hidden"
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
                        </button>
                        <Link to="/" className="ml-4 lg:ml-0">
                            <h1 className="text-2xl font-medium text-accent">Meriem's Market</h1>
                        </Link>
                    </div>

                    <nav className="hidden lg:flex items-center space-x-8">
                        {/* FIX: Updated NavLink to use v6 syntax with a className function and `end` prop. */}
                        <NavLink end to="/" className={({isActive}) => `text-base font-medium hover:text-accent transition-colors ${isActive ? 'text-accent' : 'text-gray-600 dark:text-gray-300'}`}>Accueil</NavLink>
                        {/* FIX: Updated NavLink to use v6 syntax with a className function. */}
                        <NavLink to="/products" className={({isActive}) => `text-base font-medium hover:text-accent transition-colors ${isActive ? 'text-accent' : 'text-gray-600 dark:text-gray-300'}`}>Produits</NavLink>
                        {/* FIX: Updated NavLink to use v6 syntax with a className function. */}
                        <NavLink to="/contact" className={({isActive}) => `text-base font-medium hover:text-accent transition-colors ${isActive ? 'text-accent' : 'text-gray-600 dark:text-gray-300'}`}>Contact</NavLink>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <Link to="/products" className="p-2 text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-white transition-colors">
                            <Search size={22} />
                        </Link>
                        <Link to="/wishlist" className="p-2 text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-white transition-colors">
                            <Heart size={22} />
                        </Link>
                        <Link to="/cart" className="relative p-2 text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-white transition-colors">
                            <ShoppingCart size={22} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-alert text-white text-xs flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                         <Link to={user ? "/profile" : "/login"} className="p-2 text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-white transition-colors">
                            <User size={22} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;