
import type { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'Clothing & Fashion', name: 'Vêtements & Mode', icon: '🛍️' },
  { id: 'Electronics & Computer Science', name: 'Électronique & Informatique', icon: '💻' },
  { id: 'Home & Kitchen', name: 'Maison & Cuisine', icon: '🏡' },
  { id: 'Books & Education', name: 'Livres & Éducation', icon: '📚✏️' },
  { id: 'Beauty & Health', name: 'Beauté & Santé', icon: '💄💊' },
  { id: 'Sports', name: 'Sports', icon: '⚽' },
  { id: 'Automobile & Motorcycle', name: 'Automobile & Moto', icon: '🚗🛵' },
  { id: 'free', name: 'Gratuit', icon: '🤲' },
];

export const products: Product[] = [
  {
    id: 9,
    name: 'Savon Artisanal à la Lavande',
    price: 8.50,
    category: 'Beauté',
    imageUrl: 'https://picsum.photos/seed/lavender/400/400',
    isFeatured: true,
    popularity: 5,
    description: 'Un savon doux et apaisant, fabriqué à la main avec des huiles essentielles de lavande pure.'
  },
  {
    id: 2,
    name: 'Bougie Parfumée au Bois de Santal',
    price: 22.00,
    category: 'Maison',
    imageUrl: 'https://picsum.photos/seed/sandalwood/400/400',
    isFeatured: true,
    popularity: 4,
    description: 'Créez une ambiance chaleureuse avec cette bougie en cire de soja naturelle, parfumée au bois de santal.'
  },
  {
    id: 5,
    name: 'Sac Tote Bag en Coton Bio',
    price: 15.90,
    category: 'Accessoires',
    imageUrl: 'https://picsum.photos/seed/totebag/400/400',
    isFeatured: false,
    popularity: 5,
    description: 'Un sac réutilisable, durable et stylé pour vos courses et vos sorties quotidiennes.'
  },
  {
    id: 9,
    name: 'Huile Sèche Hydratante Corps et Cheveux',
    price: 28.00,
    category: 'Beauté',
    imageUrl: 'https://picsum.photos/seed/dryoil/400/400',
    isFeatured: true,
    popularity: 5,
    description: 'Nourrissez votre peau et vos cheveux avec cette huile sèche multi-usages aux extraits de plantes.'
  },
  {
    id: 5,
    name: 'Diffuseur d\'Huiles Essentielles Ultrasonique',
    price: 45.00,
    category: 'Maison',
    imageUrl: 'https://picsum.photos/seed/diffuser/400/400',
    isFeatured: false,
    popularity: 3,
    description: 'Purifiez l\'air et profitez des bienfaits de l\'aromathérapie avec ce diffuseur au design épuré.'
  },
  {
    id: 6,
    name: 'Gourde Isotherme en Inox',
    price: 25.50,
    category: 'Accessoires',
    imageUrl: 'https://picsum.photos/seed/bottle/400/400',
    isFeatured: false,
    popularity: 4,
    description: 'Gardez vos boissons chaudes pendant 12h ou froides pendant 24h avec cette gourde élégante.'
  },
  {
    id: 7,
    name: 'Sérum Visage à la Vitamine C',
    price: 35.00,
    category: 'Beauté',
    imageUrl: 'https://picsum.photos/seed/serum/400/400',
    isFeatured: false,
    popularity: 5,
    description: 'Un sérum puissant pour un teint éclatant et une peau protégée contre les agressions extérieures.'
  },
  {
    id: 8,
    name: 'Infusion Bio "Douce Nuit"',
    price: 9.90,
    category: 'Bien-être',
    imageUrl: 'https://picsum.photos/seed/infusion/400/400',
    isFeatured: true,
    popularity: 4,
    description: 'Une tisane relaxante à base de camomille, verveine et tilleul pour des nuits paisibles.'
  },
   {
    id: 9,
    name: 'Crème Mains Réparatrice au Karité',
    price: 12.50,
    category: 'Beauté',
    imageUrl: 'https://picsum.photos/seed/handcream/400/400',
    isFeatured: false,
    popularity: 4,
    description: 'Réparez et protégez vos mains sèches avec cette crème riche en beurre de karité bio.'
  },
  {
    id: 10,
    name: 'Parure de Lit en Lin Lavé',
    price: 120.00,
    category: 'Maison',
    imageUrl: 'https://picsum.photos/seed/bedding/400/400',
    isFeatured: false,
    popularity: 3,
    description: 'Dormez dans un confort absolu avec cette parure de lit en lin lavé, douce et thermorégulatrice.'
  },
  {
    id: 11,
    name: 'Foulard en Soie Végétale',
    price: 32.00,
    category: 'Accessoires',
    imageUrl: 'https://picsum.photos/seed/scarf/400/400',
    isFeatured: true,
    popularity: 4,
    description: 'Ajoutez une touche d\'élégance à votre tenue avec ce foulard doux et léger en soie végétale.'
  },
  {
    id: 12,
    name: 'Coffret de Relaxation Aromathérapie',
    price: 49.90,
    category: 'Bien-être',
    imageUrl: 'https://picsum.photos/seed/relaxbox/400/400',
    isFeatured: false,
    popularity: 5,
    description: 'Le coffret parfait pour un moment de détente, incluant une huile de massage, un roll-on et une brume d\'oreiller.'
  },
];
