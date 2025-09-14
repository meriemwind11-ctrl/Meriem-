
import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();
  const shippingCost = 4.90;
  const totalWithShipping = totalPrice + shippingCost;

  const handleCheckout = () => {
    alert("Merci ! Votre commande sera traitée sous 48h.");
    clearCart();
  };

  const handleClearCart = () => {
    if (window.confirm("Êtes-vous sûr de vouloir vider votre panier ?")) {
      clearCart();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Votre Panier</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-16 bg-secondary dark:bg-dark-secondary rounded-xl">
          <p className="text-xl mb-4">Votre panier est vide.</p>
          <Link to="/products" className="bg-accent text-white py-3 px-6 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
            Continuer vos achats
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center bg-white dark:bg-dark-secondary p-4 rounded-xl shadow-md">
                <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                <div className="ml-4 flex-grow">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">€{item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"><Minus size={16} /></button>
                    <span className="px-4 font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"><Plus size={16} /></button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">€{(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 mt-2">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-secondary dark:bg-dark-secondary p-6 rounded-xl shadow-md h-fit">
            <h2 className="text-xl font-bold mb-4">Résumé</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span>€{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Livraison</span>
                <span>€{shippingCost.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-300 dark:border-gray-600 my-2"></div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total TTC</span>
                <span>€{totalWithShipping.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
              className="w-full mt-6 bg-accent text-white py-3 rounded-full font-semibold hover:bg-opacity-90 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Commander
            </button>
            <button
              onClick={handleClearCart}
              className="w-full mt-3 text-sm text-red-500 hover:underline"
            >
              Vider le panier
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
