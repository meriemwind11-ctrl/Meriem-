import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
    const { categories, featuredProducts } = useProducts();

    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="relative bg-secondary dark:bg-dark-secondary rounded-2xl p-8 md:p-16 text-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-5" style={{backgroundImage: "url('https://picsum.photos/seed/hero/1200/400')"}}></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-accent">Meriem's Market</h1>
                    <p className="mt-4 text-lg md:text-xl text-text-primary dark:text-dark-text-primary max-w-2xl mx-auto">
                        votre marché en ligne , simple et proche de vous ♥ .
                    </p>
                    <Link to="/products">
                        <button className="mt-8 bg-accent text-white py-3 px-8 rounded-full font-semibold hover:bg-opacity-90 transition-transform duration-300 transform hover:scale-105">
                            Découvrir
                        </button>
                    </Link>
                </div>
            </section>

            {/* Categories Section */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-8">Nos Catégories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map(category => (
                        <Link to={`/products?category=${category.name}`} key={category.id} className="group flex flex-col items-center p-6 bg-white dark:bg-dark-secondary rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <span className="text-5xl mb-3">{category.icon}</span>
                            <span className="font-semibold text-lg text-text-primary dark:text-dark-text-primary">{category.name}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Products Section */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-8">Produits en Vedette</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;