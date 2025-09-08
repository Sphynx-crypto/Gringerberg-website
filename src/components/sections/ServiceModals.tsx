import React from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { MapPin, Home, Clock, Users, Shield, Heart, Phone } from 'lucide-react';

interface ServiceModalsProps {
  activeModal: 'balades' | 'pension' | null;
  onClose: () => void;
}

const ServiceModals: React.FC<ServiceModalsProps> = ({ activeModal, onClose }) => {
  const baladesContent = (
    <div className="p-6 space-y-6">
      {/* Hero Image */}
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Balade à cheval en nature"
          className="w-full h-48 object-cover rounded-xl"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
      </div>

      {/* Description */}
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Découvrez la beauté sauvage de la Moselle à dos de cheval dans un cadre naturel préservé. 
          Nos balades sont conçues pour vous offrir une expérience authentique et mémorable, 
          que vous soyez débutant ou cavalier expérimenté.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Accompagné par nos guides passionnés, vous explorerez des sentiers forestiers, 
          des prairies verdoyantes et découvrirez la faune et la flore locales dans le respect 
          de l'environnement.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-start space-x-3">
          <Users className="w-5 h-5 text-primary mt-1" />
          <div>
            <h4 className="font-semibold text-neutral-900">Tous niveaux</h4>
            <p className="text-sm text-gray-600">Débutants et confirmés bienvenus</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Shield className="w-5 h-5 text-primary mt-1" />
          <div>
            <h4 className="font-semibold text-neutral-900">Sécurité</h4>
            <p className="text-sm text-gray-600">Équipement professionnel fourni</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Clock className="w-5 h-5 text-primary mt-1" />
          <div>
            <h4 className="font-semibold text-neutral-900">Durée flexible</h4>
            <p className="text-sm text-gray-600">Adaptée à votre niveau</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-primary mt-1" />
          <div>
            <h4 className="font-semibold text-neutral-900">Nature préservée</h4>
            <p className="text-sm text-gray-600">Forêts et prairies de Moselle</p>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-neutral-50 rounded-xl p-4">
        <h4 className="font-semibold text-neutral-900 mb-3">Tarifs</h4>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Mineur (moins de 18 ans)</span>
          <span className="font-semibold text-primary">12€</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Adulte</span>
          <span className="font-semibold text-primary">15€</span>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          * Réservation obligatoire - Équipement de sécurité inclus
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button to="/infos" icon={Phone} className="flex-1">
          Réserver maintenant
        </Button>
        <Button to="/contact" variant="outline" className="flex-1">
          Plus d'informations
        </Button>
      </div>
    </div>
  );

  const pensionContent = (
    <div className="p-6 space-y-6">
      {/* Hero Image */}
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/1996334/pexels-photo-1996334.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Pension pour chevaux"
          className="w-full h-48 object-cover rounded-xl"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
      </div>

      {/* Description */}
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Offrez à votre cheval un cadre de vie exceptionnel dans notre écurie moderne et 
          respectueuse du bien-être animal. Nos installations ont été conçues pour garantir 
          le confort et la santé de vos compagnons équins.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Chaque pensionnaire bénéficie d'un suivi personnalisé et de soins attentionnés 
          dans un environnement naturel préservé au cœur de la Moselle.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-start space-x-3">
          <Home className="w-5 h-5 text-primary mt-1" />
          <div>
            <h4 className="font-semibold text-neutral-900">Box spacieux</h4>
            <p className="text-sm text-gray-600">Confort et sécurité optimaux</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-primary mt-1" />
          <div>
            <h4 className="font-semibold text-neutral-900">Paddocks & prairies</h4>
            <p className="text-sm text-gray-600">Accès quotidien en liberté</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Heart className="w-5 h-5 text-primary mt-1" />
          <div>
            <h4 className="font-semibold text-neutral-900">Soins quotidiens</h4>
            <p className="text-sm text-gray-600">Surveillance et attention constantes</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Shield className="w-5 h-5 text-primary mt-1" />
          <div>
            <h4 className="font-semibold text-neutral-900">Suivi vétérinaire</h4>
            <p className="text-sm text-gray-600">Coordination des soins médicaux</p>
          </div>
        </div>
      </div>

      {/* Services included */}
      <div className="bg-neutral-50 rounded-xl p-4">
        <h4 className="font-semibold text-neutral-900 mb-3">Services inclus</h4>
        <ul className="space-y-2">
          <li className="flex items-center text-sm text-gray-700">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            Alimentation de qualité adaptée
          </li>
          <li className="flex items-center text-sm text-gray-700">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            Nettoyage quotidien des box
          </li>
          <li className="flex items-center text-sm text-gray-700">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            Sortie en paddock et prairies
          </li>
          <li className="flex items-center text-sm text-gray-700">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            Surveillance quotidienne
          </li>
          <li className="flex items-center text-sm text-gray-700">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            Coordination vétérinaire et maréchalerie
          </li>
        </ul>
      </div>

      {/* Pricing */}
      <div className="bg-accent/10 rounded-xl p-4">
        <h4 className="font-semibold text-neutral-900 mb-2">Tarification</h4>
        <p className="text-gray-700 text-sm mb-3">
          Nos tarifs de pension sont établis selon vos besoins spécifiques et la durée d'engagement. 
          Contactez-nous pour un devis personnalisé et gratuit.
        </p>
        <p className="text-xs text-gray-500">
          * Tarifs dégressifs pour les engagements long terme
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button to="/infos" icon={Phone} className="flex-1">
          Demander un devis
        </Button>
        <Button to="/contact" variant="outline" className="flex-1">
          Visiter l'écurie
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <Modal
        isOpen={activeModal === 'balades'}
        onClose={onClose}
        title="Balades à cheval"
      >
        {baladesContent}
      </Modal>

      <Modal
        isOpen={activeModal === 'pension'}
        onClose={onClose}
        title="Pension pour chevaux"
      >
        {pensionContent}
      </Modal>
    </>
  );
};

export default ServiceModals;