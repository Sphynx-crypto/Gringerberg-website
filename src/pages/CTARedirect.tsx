import React from 'react';
import ReviewsCarousel from '../components/ui/ReviewsCarousel';
import PracticalInfo from '../components/ui/PracticalInfo';

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

const CTARedirect = () => {
  // Scroll to top on page load
  React.useEffect(() => {
    scrollToTop();
  }, []);

  React.useEffect(() => {
    document.title = 'Avis & Informations pratiques | L\'écurie du Gringerberg';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Découvrez les avis de nos clients et toutes les informations pratiques pour nous contacter : adresse, téléphone, horaires et services à Woustviller.');
    }
  }, []);

  const reviews = [
    {
      name: 'Camille D.',
      rating: 5,
      date: 'Mai 2025',
      text: 'Balade magnifique, chevaux bien encadrés. Organisation parfaite, je recommande !'
    },
    {
      name: 'Thomas R.',
      rating: 5,
      date: 'Avril 2025',
      text: 'Accueil chaleureux et professionnel. Mes questions ont eu des réponses rapides.'
    },
    {
      name: 'Léa P.',
      rating: 4,
      date: 'Mars 2025',
      text: 'Installations propres et bien tenues. Super pour une première visite.'
    },
    {
      name: 'Julien S.',
      rating: 5,
      date: 'Février 2025',
      text: 'Devis pension clair, visite sur rendez-vous fluide. Top expérience.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-4">
            Merci pour votre intérêt
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos avis récents et toutes les informations pratiques.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-4">
          {/* Reviews Carousel - Left/Wide Column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="mb-4">
              <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-2">
                Avis de nos clients
              </h2>
              <p className="text-gray-600">
                Découvrez les témoignages de ceux qui nous ont fait confiance
              </p>
            </div>
            <ReviewsCarousel reviews={reviews} />
             {/* Photo promo — visible desktop seulement */}
<div className="mt-9 hidden lg:block lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:-mt-3">
  <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
    {/* Zone image : format bannière 3:1 (change l’aspect si besoin) */}
    <div
      className="relative w-full aspect-[3/1] bg-neutral-100 dark:bg-neutral-800"
      // Quand tu auras l’image, remplace l’inline style ci-dessous :
      // style={{ backgroundImage: 'url(/images/ta-photo.jpg)' }}
      // et ajoute ces classes: bg-cover bg-center
    >
      {/* Placeholder / légende (optionnels) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-neutral-500 text-sm">Photo à venir</span>
      </div>

      {/* Si tu veux un texte en overlay quand l’image sera là : */}
      {/* 
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/40 to-transparent text-white">
        <p className="text-sm font-medium">Titre ou accroche</p>
      </div> 
      */}
    </div>
  </div>
</div>
          </div>
        


          {/* Practical Info - Right/Narrow Column */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <PracticalInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTARedirect;