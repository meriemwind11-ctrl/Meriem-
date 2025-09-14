import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
// FIX: Replaced useHistory with useNavigate for react-router-dom v6 compatibility.
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  // FIX: Switched from useHistory to useNavigate.
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    if (password.length < 6) {
        setError('Le mot de passe doit contenir au moins 6 caractères.');
        return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(email)) {
        setError('Veuillez entrer une adresse email valide.');
        return;
    }
    
    // Simulate registration and login
    login({ name, email });
    // FIX: Updated navigation method from history.push() to navigate().
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-dark-secondary rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-accent">Inscription</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nom complet</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-transparent" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-transparent" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Mot de passe</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-transparent" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Confirmer le mot de passe</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-3 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-transparent" required />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full py-3 px-4 bg-accent text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            S'inscrire
          </button>
        </form>
        <p className="text-sm text-center">
          Déjà un compte ? <Link to="/login" className="font-medium text-accent hover:underline">Connectez-vous</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;