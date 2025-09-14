import React from 'react';
// FIX: react-router-dom imports are correct, usage updated for v6.
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { X, Info, HelpCircle, Mail, LogOut, Sun, Moon } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { to: '/about', text: 'À propos', icon: Info },
    { to: '/faq', text: 'FAQ', icon: HelpCircle },
    { to: '/contact', text: 'Contact', icon: Mail },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-dark-secondary shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-lg font-semibold text-accent">Menu</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <X size={24} />
          </button>
        </div>
        <nav className="p-4 flex flex-col h-full">
            <ul className="space-y-2">
                {navLinks.map((link) => (
                    <li key={link.to}>
                        <NavLink
                            to={link.to}
                            onClick={onClose}
                            // FIX: Updated NavLink to use v6 syntax with a className function.
                            className={({ isActive }) => `flex items-center p-3 rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:bg-secondary dark:hover:bg-gray-700 ${isActive ? 'bg-secondary dark:bg-gray-700 font-semibold' : ''}`}
                        >
                            <link.icon className="mr-3" size={20} />
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className="mt-auto pt-4 border-t dark:border-gray-700">
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary dark:hover:bg-gray-700">
                    <span className="flex items-center text-gray-700 dark:text-gray-300">
                        {theme === 'light' ? <Sun className="mr-3" size={20} /> : <Moon className="mr-3" size={20} />}
                        Mode {theme === 'light' ? 'Clair' : 'Sombre'}
                    </span>
                    <button onClick={toggleTheme} className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${theme === 'dark' ? 'bg-accent' : 'bg-gray-300'}`}>
                        <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'}`}/>
                    </button>
                </div>
                {user && (
                    <button
                        onClick={() => {
                            logout();
                            onClose();
                        }}
                        className="w-full flex items-center p-3 mt-2 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                        <LogOut className="mr-3" size={20} />
                        Déconnexion
                    </button>
                )}
            </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;