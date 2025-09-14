import React from 'react';
import { useAuth } from '../context/AuthContext';
// FIX: Replaced useHistory with useNavigate for react-router-dom v6 compatibility.
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
    const { user, logout } = useAuth();
    // FIX: Switched from useHistory to useNavigate.
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        // FIX: Updated navigation method from history.push() to navigate().
        navigate('/');
    };

    if (!user) {
        return null; // Or a loading spinner
    }

    return (
        <div className="max-w-2xl mx-auto py-12">
            <div className="bg-white dark:bg-dark-secondary rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-accent mb-2">Mon Profil</h1>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-8">Bienvenue, {user.name} !</p>
                
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-500">Nom</label>
                        <p className="text-lg p-2 bg-secondary dark:bg-gray-700 rounded-md mt-1">{user.name}</p>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-500">Email</label>
                        <p className="text-lg p-2 bg-secondary dark:bg-gray-700 rounded-md mt-1">{user.email}</p>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="w-full mt-8 py-3 px-4 bg-alert text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                    Déconnexion
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;