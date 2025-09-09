import React from 'react';
import { useParams } from 'react-router-dom';

const Legal = () => {
  const { page } = useParams<{ page: string }>();
  
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  React.useEffect(() => {
    const titles = {
      'mentions': 'Mentions légales | L\'écurie du Gringerberg',
      'cookies': 'Politique de cookies | L\'écurie du Gringerberg'
    };
    
    document.title = titles[page as keyof typeof titles] || 'Informations légales | L\'écurie du Gringerberg';
  }, [page]);

  const renderMentions = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
          Informations légales
        </h2>
        <div className="space-y-4 text-gray-700">
          <p><strong>Raison sociale :</strong> L'écurie du Gringerberg</p>
          <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
          <p><strong>Adresse :</strong> 150 rue Brühl, 57915 Woustviller, France</p>
          <p><strong>Téléphone :</strong> 07 78 70 81 12</p>
          <p><strong>Email :</strong> yannick.faypam@hotmail.fr</p>
          <p><strong>Responsable de publication :</strong> Yannick Weber</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
          Hébergement
        </h2>
        <p className="text-gray-700">
          Ce site est hébergé par un prestataire technique. Les informations d'hébergement 
          peuvent être communiquées sur demande.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
          Propriété intellectuelle
        </h2>
        <p className="text-gray-700">
          L'ensemble du contenu de ce site (textes, images, vidéos, logos) est protégé par 
          les droits d'auteur. Toute reproduction, même partielle, est interdite sans 
          autorisation préalable écrite de L'écurie du Gringerberg.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
          Données personnelles
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), 
            nous nous engageons à protéger vos données personnelles.
          </p>
          <p>
            Les informations recueillies via nos formulaires de contact sont utilisées 
            uniquement pour répondre à vos demandes et ne sont jamais transmises à des tiers.
          </p>
          <p>
            Vous disposez d'un droit d'accès, de rectification et de suppression de vos 
            données personnelles. Pour exercer ces droits, contactez-nous à : 
            yannick.faypam@hotmail.fr
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
          Responsabilité
        </h2>
        <p className="text-gray-700">
          L'écurie du Gringerberg s'efforce de fournir des informations exactes et à jour. 
          Cependant, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité 
          des informations diffusées sur ce site.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
          Conditions générales
        </h2>
        <div className="space-y-4 text-gray-700">
          <h3 className="text-lg font-semibold">Balades à cheval</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Réservation obligatoire</li>
            <li>Âge minimum : 8 ans accompagné d'un adulte</li>
            <li>Équipement de sécurité obligatoire (fourni)</li>
            <li>Annulation possible en cas de météo défavorable</li>
          </ul>
          
          <h3 className="text-lg font-semibold">Pensions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contrat de pension obligatoire</li>
            <li>Assurance responsabilité civile requise</li>
            <li>Vaccinations à jour obligatoires</li>
            <li>Préavis de 30 jours pour résiliation</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderCookies = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
          Qu'est-ce qu'un cookie ?
        </h2>
        <p className="text-gray-700">
          Un cookie est un petit fichier texte déposé sur votre ordinateur lors de la 
          visite d'un site web. Il permet de mémoriser des informations relatives à 
          votre navigation et de vous proposer des services personnalisés.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
          Utilisation des cookies
        </h2>
        <div className="space-y-4 text-gray-700">
          <h3 className="text-lg font-semibold">Cookies techniques</h3>
          <p>
            Ces cookies sont nécessaires au bon fonctionnement du site. Ils permettent 
            notamment de maintenir votre session de navigation et vos préférences.
          </p>
          
          <h3 className="text-lg font-semibold">Cookies analytiques</h3>
          <p>
            Ces cookies nous permettent d'analyser l'utilisation du site pour améliorer 
            votre expérience utilisateur. Ils sont anonymisés et ne permettent pas de 
            vous identifier personnellement.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
          Gestion des cookies
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Vous pouvez à tout moment choisir de désactiver ces cookies dans les paramètres 
            de votre navigateur. Cependant, cela pourrait affecter le bon fonctionnement 
            de certaines fonctionnalités du site.
          </p>
          
          <h3 className="text-lg font-semibold">Configuration par navigateur</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Chrome : Menu &gt; Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
            <li>Firefox : Menu &gt; Préférences &gt; Vie privée et sécurité</li>
            <li>Safari : Préférences &gt; Confidentialité &gt; Gérer les données de sites web</li>
            <li>Edge : Menu &gt; Paramètres &gt; Cookies et autorisations de site</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
          Consentement
        </h2>
        <p className="text-gray-700">
          En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de 
          cookies pour améliorer votre expérience utilisateur et réaliser des statistiques 
          de visites anonymisées.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
          Contact
        </h2>
        <p className="text-gray-700">
          Pour toute question concernant notre politique de cookies, vous pouvez nous 
          contacter à : yannick.faypam@hotmail.fr
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-4">
              {page === 'mentions' ? 'Mentions légales' : 'Politique de cookies'}
            </h1>
            <p className="text-lg text-gray-600">
              {page === 'mentions' 
                ? 'Informations légales concernant L\'écurie du Gringerberg'
                : 'Notre politique concernant l\'utilisation des cookies'
              }
            </p>
          </div>
          
          {page === 'mentions' ? renderMentions() : renderCookies()}
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Dernière mise à jour : Janvier 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;