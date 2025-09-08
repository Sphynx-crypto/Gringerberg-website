import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import ServicesOverview from '../components/sections/ServicesOverview';
import ServiceModals from '../components/sections/ServiceModals';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';
import { Phone } from 'lucide-react';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeModal, setActiveModal] = useState<'balades' | 'pension' | null>(null);

  // Handle URL parameters for modal state
  useEffect(() => {
    const service = searchParams.get('service');
    if (service === 'a' || service === 'balades') {
      setActiveModal('balades');
    } else if (service === 'b' || service === 'pension') {
      setActiveModal('pension');
    } else {
      setActiveModal(null);
    }
  }, [searchParams]);

  const handleServiceClick = (service: 'balades' | 'pension') => {
    setActiveModal(service);
    const param = service === 'balades' ? 'a' : 'b';
    setSearchParams({ service: param });
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setSearchParams({});
  };

  React.useEffect(() => {
    document.title = 'L\'écurie du Gringerberg - Balades à cheval et pension équestre en Moselle';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Découvrez L\'écurie du Gringerberg à Woustviller. Balades à cheval en pleine nature et pensions de qualité pour vos compagnons équins en Moselle.');
    }
  }, []);

  const faqItems = [
    {
      question: 'Faut-il avoir de l\'expérience pour faire une balade à cheval ?',
      answer: 'Pas du tout ! Nous accueillons les cavaliers de tous niveaux, des débutants aux plus expérimentés. Nos chevaux sont calmes et nos guides vous accompagnent pour une expérience en toute sécurité.'
    },
    {
      question: 'Quels sont les tarifs pour les balades ?',
      answer: 'Nos balades sont à 12€ pour les mineurs et 15€ pour les adultes. La durée varie selon le parcours choisi et votre niveau d\'équitation.'
    },
    {
      question: 'Proposez-vous des pensions pour chevaux ?',
      answer: 'Oui, nous proposons des solutions de pension complètes avec box spacieux, accès aux paddocks et prairies, ainsi que des soins quotidiens assurés par notre équipe.'
    },
    {
      question: 'Où se trouve votre écurie ?',
      answer: 'Nous sommes situés au 150 rue Brühl à Woustviller (57915) en Moselle, dans un cadre naturel exceptionnel propice aux balades.'
    },
    {
      question: 'Comment réserver une balade ?',
      answer: 'Vous pouvez nous contacter par téléphone au 07 78 70 81 12 ou par email à yannick.faypam@hotmail.fr pour réserver votre balade et convenir d\'un horaire.'
    },
    {
      question: 'Les balades ont-elles lieu par tous les temps ?',
      answer: 'Pour la sécurité de tous, les balades peuvent être reportées en cas de conditions météorologiques défavorables. Nous vous contacterons si besoin de reporter votre réservation.'
    },
    {
      question: 'Proposez-vous des cours d\'équitation ?',
      answer: 'Notre focus principal est sur les balades en nature et les pensions. Pour des cours d\'équitation spécifiques, n\'hésitez pas à nous contacter pour discuter de vos besoins particuliers.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="La nature à cheval"
        subtitle="L'écurie du Gringerberg"
        description="Notre écurie vous accueille pour des balades à cheval en pleine nature et propose des pensions de qualité pour le bien-être de vos compagnons équins dans un cadre exceptionnel en Moselle."
        primaryCTA={{
          text: 'Réserver un appel',
          action: 'tel:0778708112'
        }}
        secondaryCTA={{
          text: 'Découvrir nos services',
          action: '/services'
        }}
      />

      {/* Services Overview */}
      <ServicesOverview onServiceClick={handleServiceClick} />

      {/* Service Modals */}
      <ServiceModals activeModal={activeModal} onClose={handleCloseModal} />

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions sur nos services équestres
            </p>
          </div>
          
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6">
            Prêt pour votre prochaine aventure équestre ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour réserver votre balade ou en savoir plus sur nos services de pension.
          </p>
          <Button 
            to="/infos"
            variant="secondary"
            size="lg"
            icon={Phone}
          >
            Nous contacter
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;