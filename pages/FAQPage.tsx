
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <ChevronDown
          size={24}
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 dark:text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

const faqData = [
    { question: "Combien de temps prend la livraison ?", answer: "Nos livraisons standards prennent généralement entre 3 et 5 jours ouvrés. Vous recevrez un numéro de suivi dès que votre commande sera expédiée." },
    { question: "Puis-je retourner un produit ?", answer: "Oui, vous disposez de 14 jours à compter de la réception de votre commande pour nous retourner un article. Il doit être dans son état d'origine, non utilisé et dans son emballage." },
    { question: "Vos produits sont-ils testés sur les animaux ?", answer: "Absolument pas. Nous sommes engagés contre la cruauté animale et tous nos produits cosmétiques sont certifiés 'cruelty-free'." },
    { question: "Proposez-vous des emballages cadeaux ?", answer: "Oui, nous proposons une option d'emballage cadeau pour un petit supplément. Vous pouvez la sélectionner lors de la validation de votre panier." },
    { question: "Où sont fabriqués vos produits ?", answer: "Nous collaborons principalement avec des artisans et des petites entreprises en France et en Europe pour garantir la qualité et soutenir l'économie locale." },
    { question: "Comment puis-je vous contacter ?", answer: "Le moyen le plus simple est de remplir le formulaire sur notre page Contact. Nous nous engageons à vous répondre sous 48 heures." },
];

const FAQPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Questions Fréquentes</h1>
      <div className="bg-white dark:bg-dark-secondary rounded-xl shadow-lg p-6 md:p-8">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
