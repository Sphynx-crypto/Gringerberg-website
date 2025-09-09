import React from 'react';
import Hero from '../components/sections/Hero';
import ContactForm from '../components/sections/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

const Contact = () => {
  // Scroll to top on page load
  React.useEffect(() => {
    scrollToTop();
  }, []);

  React.useEffect(() => {
    document.title = 'Contact - Nous contacter | L\'écurie du Gringerberg';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contactez L\'écurie du Gringerberg à Woustviller. Téléphone : 07 78 70 81 12 - Email : yannick.faypam@hotmail.fr - 150 rue Brühl, Moselle.');
    }
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: ['150 rue Brühl', '57915 Woustviller', 'Moselle, France']
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: ['07 78 70 81 12'],
      link: 'tel:0778708112'
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['yannick.faypam@hotmail.fr'],
      link: 'mailto:yannick.faypam@hotmail.fr'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: ['Lun-Dim: 9h-18h', 'Sur rendez-vous uniquement']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Contactez-nous"
        description="Une question, une réservation ou besoin d'informations ? Nous sommes là pour vous accompagner dans votre projet équestre."
        primaryCTA={{
          text: 'Appeler maintenant',
          action: '/infos'
        }}
        className="bg-gradient-to-br from-accent/10 to-primary/10"
      />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif font-semibold text-neutral-900 mb-8">
                Informations pratiques
              </h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.content.map((line, lineIndex) => (
                          <div key={lineIndex}>
                            {info.link ? (
                              <a 
                                href={info.link} 
                                className="text-gray-600 hover:text-primary transition-colors duration-200"
                              >
                                {line}
                              </a>
                            ) : (
                              <p className="text-gray-600">{line}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-neutral-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  Informations importantes
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Réservation obligatoire pour les balades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Possibilité de visiter les installations sur rendez-vous</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Devis personnalisé pour les pensions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Réponse rapide à toutes vos demandes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
           {/* Contact "Photo" card — remplace <ContactForm /> par ce bloc */}
<div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
  <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
    Envoyez-nous un message
  </h3>

  {/* Image visible ≥ md, cachée sur mobile */}
  <div className="hidden md:block">
    <div className="relative overflow-hidden rounded-xl">
      <img
        src="/images/contact.jpg"               // ← place ta photo ici
        alt="Votre équipe à l'écoute — La ferme du Gringerberg"
        className="w-full h-[420px] object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
    {/* Légende discrète (optionnelle) */}
    <p className="mt-3 text-sm text-neutral-500">
      Pour toute demande : devis, visites, pensions, balades…
    </p>
  </div>

  {/* Mobile : pas d'image, petit rappel contact (optionnel) */}
  <div className="md:hidden text-sm text-neutral-600">
    {/* Tu peux laisser vide si tu préfères ne rien afficher sur mobile */}
    <p>
      Contact rapide&nbsp;:{" "}
      <a href="tel:0778708112" className="text-primary font-medium underline underline-offset-2">
        07&nbsp;78&nbsp;70&nbsp;81&nbsp;12
      </a>{" "}
      •{" "}
      <a href="mailto:yannick.faypam@hotmail.fr" className="text-primary font-medium underline underline-offset-2">
        yannick.faypam@hotmail.fr
      </a>
    </p>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-neutral-900 mb-4">
              Nous trouver
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Située à Woustviller en Moselle, notre écurie est facilement accessible et bénéficie d'un cadre naturel exceptionnel.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.130020567509!2d7.010126076856386!3d49.08416948479073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47944a3b9ef7acc1%3A0xc99bcd8b691eca59!2s150%20Rue%20Bruhl%2C%2057915%20Woustviller!5e0!3m2!1sfr!2sfr!4v1757392502664!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="L'écurie du Gringerberg - 150 rue Brühl, 57915 Woustviller"
                className="w-full h-full"
              />
            </div>
          </div>

        
        </div>
      </section>
    </div>
  );
};

export default Contact;