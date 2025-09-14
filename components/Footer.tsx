import React from 'react';
// FIX: react-router-dom imports are correct, usage updated for v6.
import { NavLink } from 'react-router-dom';
import { Home, ShoppingBag, Heart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Footer: React.FC = () => {
    const { cartCount } = useCart();
    
    const navItems = [
        { path: '/', icon: Home, label: 'Accueil' },
        { path: '/products', icon: ShoppingBag, label: 'Produits' },
        { path: '/wishlist', icon: Heart, label: 'Souhaits' },
        { path: '/profile', icon: User, label: 'Profil' }
    ];

    return (
        <>
            {/* Bottom navigation for mobile */}
            <footer className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-secondary border-t border-gray-200 dark:border-gray-700 z-40">
                <nav className="flex justify-around items-center h-16">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            // FIX: Updated NavLink to use v6 syntax with a className function and `end` prop.
                            className={({ isActive }) => `flex flex-col items-center justify-center w-full text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-gray-500 dark:text-gray-400'}`}
                            end={item.path === '/'}
                        >
                             <div className="relative">
                                <item.icon size={24} />
                                {item.path === '/cart' && cartCount > 0 && (
                                     <span className="absolute -top-1 -right-2 block h-4 w-4 rounded-full bg-alert text-white text-xs flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                             </div>
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </nav>
            </footer>
             {/* Standard footer for desktop */}
            <footer className="hidden lg:block bg-secondary dark:bg-dark-secondary text-gray-600 dark:text-gray-300">
                 <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                         <div>
                             <h2 className="text-xl font-semibold text-accent mb-4">Meriem's Market</h2>
                             <p className="text-sm">Produits authentiques, livrés chez vous.</p>
                         </div>
                         <div>
                             <h3 className="font-semibold mb-3">Navigation</h3>
                             <ul className="space-y-2 text-sm">
                                 <li><NavLink to="/about" className="hover:text-accent">À propos</NavLink></li>
                                 <li><NavLink to="/faq" className="hover:text-accent">FAQ</NavLink></li>
                                 <li><NavLink to="/contact" className="hover:text-accent">Contact</NavLink></li>
                             </ul>
                         </div>
                         <div>
                            <h3 className="font-semibold mb-3">Légal</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-accent">Termes & Conditions</a></li>
                                <li><a href="#" className="hover:text-accent">Politique de confidentialité</a></li>
                            </ul>
                         </div>
                         <div>
                            <h3 className="font-semibold mb-3">Suivez-nous</h3>
                            <p className="text-sm">Restez connectés pour nos dernières nouveautés.</p>
                         </div>
                     </div>
                     <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm">
                         © {new Date().getFullYear()} Meriem's Market. Tous droits réservés.
                     </div>
                 </div>
             </footer>
             <div className="lg:hidden h-16"></div> {/* Spacer for mobile bottom nav */}
        </>
    );
};

export default Footer;