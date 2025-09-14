import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
// FIX: Replaced useHistory with useNavigate for react-router-dom v6 compatibility.
import { Link, useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  // FIX: Switched from useHistory to useNavigate.
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    // Simulate login
    login({ name: 'Utilisateur', email: email });
    // FIX: Updated navigation method from history.push() to navigate().
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-dark-secondary rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-accent">Connexion</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">Mot de passe</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-transparent"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="text-right">
            <a href="#" className="text-sm text-accent hover:underline">Mot de passe oublié ?</a>
          </div>
          <button type="submit" className="w-full py-3 px-4 bg-accent text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            Se connecter
          </button>
        </form>
        <p className="text-sm text-center">
          Pas de compte ? <Link to="/register" className="font-medium text-accent hover:underline">Inscrivez-vous</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;