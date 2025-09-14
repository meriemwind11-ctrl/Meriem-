import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="bg-white dark:bg-dark-secondary rounded-xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-accent mb-6 text-center">À Propos de Nous</h1>
        <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Bienvenue chez <strong>Meriem's Market</strong>, votre destination pour des produits authentiques et de qualité. 
            Née de la passion pour l'artisanat et le respect de la nature, notre boutique a pour mission de vous proposer 
            une sélection rigoureuse d'articles conçus avec soin et amour.
          </p>
          <p>
            Nous croyons en un mode de consommation plus conscient et durable. C'est pourquoi nous privilégions les 
            créateurs locaux, les ingrédients naturels et les matériaux écologiques. Chaque produit que vous trouvez 
            chez nous raconte une histoire, celle d'un savoir-faire unique et d'un engagement pour un avenir meilleur.
          </p>
          <p>
            Merci de faire partie de notre communauté et de soutenir une économie plus locale et plus humaine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;