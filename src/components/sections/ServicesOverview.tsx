import React from 'react';
import Card from '../ui/Card';
import { MapPin, Home, Users } from 'lucide-react';

interface ServicesOverviewProps {
  onServiceClick: (service: 'balades' | 'pension') => void;
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onServiceClick }) => {
  const services = [
    {
      icon: MapPin,
      title: 'Balades à cheval',
      description: 'Explorez la beauté de la Moselle à dos de cheval',
      features: [
        'Parcours adaptés à tous niveaux',
        'Encadrement professionnel',
        'Découverte de la nature'
      ],
      linkText: 'En savoir plus'
    },
    {
      icon: Home,
      title: 'Pension chevaux',
      description: 'Un cadre exceptionnel pour le bien-être de vos compagnons',
      features: [
        'Box spacieux et confortables',
        'Paddocks et prairies',
        'Soins quotidiens assurés'
      ],
      linkText: 'En savoir plus'
    },
    {
      icon: Users,
      title: 'Yannick & la Ferme',
      description: 'Une passion familiale au service des chevaux',
      features: [
        'Expertise reconnue',
        'Approche respectueuse',
        'Conseil personnalisé'
      ],
      linkText: 'Notre histoire',
      linkTo: '/a-propos'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-4">
            Nos services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services équestres dans un cadre naturel exceptionnel
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              {...service} 
              className="h-full" 
              onClick={index === 0 ? () => onServiceClick('balades') : 
                      index === 1 ? () => onServiceClick('pension') : 
                      undefined}
              linkTo={index === 2 ? '/a-propos' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;