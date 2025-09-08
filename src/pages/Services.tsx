import React from 'react';
import Hero from '../components/sections/Hero';
import PricingTable from '../components/ui/PricingTable';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { MapPin, Home, Users, Phone } from 'lucide-react';

const Services = () => {
  React.useEffect(() => {
    document.title = 'Services - Balades à cheval et pension équestre | L\'écurie du Gringerberg';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Découvrez nos services : balades à cheval adaptées à tous niveaux et pensions de qualité pour vos chevaux en Moselle. Tarifs compétitifs.');
    }
  }, []);

  const services = [
    {
      icon: MapPin,
      title: 'Balades à cheval',
      description: 'Explorez les magnifiques paysages de la Moselle à dos de cheval dans un cadre naturel préservé.',
      features: [
        'Parcours adaptés débutants et confirmés',
        'Encadrement par des professionnels',
        'Chevaux dociles et bien dressés',
        'Découverte de la faune et flore locale',
        'Groupes de 2 à 8 personnes maximum',
        'Équipement de sécurité fourni'
      ]
    },
    {
      icon: Home,
      title: 'Pension pour chevaux',
      description: 'Offrez à votre cheval un cadre de vie exceptionnel avec des soins attentionnés et professionnels.',
      features: [
        'Box spacieux et aérés',
        'Accès quotidien aux paddocks',
        'Prairies en rotation',
        'Alimentation de qualité',
        'Soins vétérinaires coordonnés',
        'Surveillance quotidienne'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Balade Mineur',
      price: '12€',
      duration: 'balade',
      features: [
        'Encadrement professionnel',
        'Équipement de sécurité inclus',
        'Durée adaptée à l\'âge',
        'Chevaux dociles sélectionnés',
        'Accompagnement personnalisé'
      ],
      cta: 'Réserver'
    },
    {
      name: 'Balade Adulte',
      price: '15€',
      duration: 'balade',
      popular: true,
      features: [
        'Parcours découverte en nature',
        'Guide expérimenté',
        'Tous niveaux acceptés',
        'Équipement professionnel',
        'Photos souvenirs possibles'
      ],
      cta: 'Réserver'
    },
    {
      name: 'Pension Cheval',
      price: 'Sur devis',
      features: [
        'Box individuel spacieux',
        'Sortie quotidienne en paddock',
        'Alimentation premium',
        'Soins quotidiens inclus',
        'Suivi vétérinaire',
        'Tarifs dégressifs long terme'
      ],
      cta: 'Demander un devis'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Nos services équestres"
        description="Découvrez notre gamme complète de services : des balades inoubliables en pleine nature aux pensions de qualité pour le bien-être de vos chevaux."
        primaryCTA={{
          text: 'Réserver maintenant',
          action: '/infos'
        }}
        className="bg-gradient-to-br from-secondary/30 to-neutral-50"
      />

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-4">
              Une offre complète et adaptée
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Que vous soyez passionné d'équitation ou propriétaire de chevaux, nous proposons des services sur-mesure pour répondre à tous vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {services.map((service, index) => (
              <Card key={index} {...service} className="h-full" />
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-neutral-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
                  Pourquoi choisir L'écurie du Gringerberg ?
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-primary mr-3 mt-0.5" />
                    <span>Équipe passionnée et expérimentée</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                    <span>Cadre naturel exceptionnel en Moselle</span>
                  </li>
                  <li className="flex items-start">
                    <Home className="w-5 h-5 text-primary mr-3 mt-0.5" />
                    <span>Installations modernes et sécurisées</span>
                  </li>
                </ul>
              </div>
              <div className="lg:text-right">
                <img
                  src="https://images.pexels.com/photos/1996338/pexels-photo-1996338.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Chevaux en liberté"
                  className="w-full h-64 object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingTable
            title="Nos tarifs"
            description="Des prix transparents et compétitifs pour tous nos services équestres"
            plans={pricingPlans}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Prêt à vivre l'expérience ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant votre balade ou contactez-nous pour en savoir plus sur nos services de pension.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              to="/infos"
              variant="secondary"
              size="lg"
              icon={Phone}
            >
              Nous contacter
            </Button>
            <Button 
              to="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-accent"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;