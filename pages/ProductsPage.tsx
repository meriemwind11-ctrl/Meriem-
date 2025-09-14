
import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import { Search, ChevronDown } from 'lucide-react';
import type { Product } from '../types';

type SortOption = 'new' | 'price_asc' | 'price_desc' | 'popularity';

const ProductsPage: React.FC = () => {
    const { products, categories } = useProducts();
    const location = useLocation();

    const getCategoryFromURL = () => {
        const params = new URLSearchParams(location.search);
        return params.get('category') || 'All';
    }

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(getCategoryFromURL());
    const [sortOption, setSortOption] = useState<SortOption>('new');

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = products;

        if (searchTerm) {
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }

        switch (sortOption) {
            case 'price_asc':
                return [...filtered].sort((a, b) => a.price - b.price);
            case 'price_desc':
                return [...filtered].sort((a, b) => b.price - a.price);
            case 'popularity':
                return [...filtered].sort((a, b) => b.popularity - a.popularity);
            case 'new':
            default:
                return [...filtered].sort((a, b) => b.id - a.id);
        }
    }, [products, searchTerm, selectedCategory, sortOption]);

    return (
        <div className="space-y-8">
            <header className="bg-secondary dark:bg-dark-secondary p-8 rounded-xl">
                <h1 className="text-4xl font-bold text-accent text-center">Notre Catalogue</h1>
                <p className="text-center mt-2 text-gray-600 dark:text-gray-300">Trouvez le produit artisanal parfait pour vous.</p>
            </header>

            {/* Filters */}
            <div className="sticky top-20 bg-background/80 dark:bg-dark-background/80 backdrop-blur-sm z-30 py-4 space-y-4">
                 <div className="relative">
                    <input
                        type="text"
                        placeholder="Rechercher un produit..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-white dark:bg-dark-secondary border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-accent focus:outline-none"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                     <div className="flex items-center gap-2 overflow-x-auto pb-2">
                        <button onClick={() => setSelectedCategory('All')} className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${selectedCategory === 'All' ? 'bg-accent text-white' : 'bg-gray-200 dark:bg-dark-secondary'}`}>Toutes</button>
                        {categories.map(cat => (
                            <button key={cat.id} onClick={() => setSelectedCategory(cat.name)} className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${selectedCategory === cat.name ? 'bg-accent text-white' : 'bg-gray-200 dark:bg-dark-secondary'}`}>
                                {cat.name}
                            </button>
                        ))}
                    </div>
                    <div className="relative">
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value as SortOption)}
                            className="appearance-none w-full md:w-auto bg-white dark:bg-dark-secondary border border-gray-300 dark:border-gray-600 rounded-full py-2 pl-4 pr-10 focus:ring-2 focus:ring-accent focus:outline-none"
                        >
                            <option value="new">Nouveautés</option>
                            <option value="popularity">Popularité</option>
                            <option value="price_asc">Prix croissant</option>
                            <option value="price_desc">Prix décroissant</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20}/>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            {filteredAndSortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredAndSortedProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-xl text-gray-500">Aucun résultat trouvé.</p>
                </div>
            )}
        </div>
    );
};

export default ProductsPage;
