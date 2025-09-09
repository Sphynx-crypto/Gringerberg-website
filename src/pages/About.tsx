import React from 'react';
import Hero from '../components/sections/Hero';
import { Heart, Award, Users, Leaf } from 'lucide-react';

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

const About = () => {
  // Scroll to top on page load
  React.useEffect(() => {
    scrollToTop();
  }, []);

  React.useEffect(() => {
    document.title = 'À propos - Notre passion pour les chevaux | L\'écurie du Gringerberg';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Découvrez l\'histoire de L\'écurie du Gringerberg, la passion de Yannick Weber et nos valeurs : respect de la nature et bien-être animal.');
    }
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Bien-être animal',
      description: 'Le respect et le soin des chevaux sont au cœur de notre philosophie. Chaque animal bénéficie d\'une attention personnalisée.'
    },
    {
      icon: Leaf,
      title: 'Respect de la nature',
      description: 'Nos activités s\'inscrivent dans une démarche respectueuse de l\'environnement et de préservation des espaces naturels.'
    },
    {
      icon: Users,
      title: 'Transmission',
      description: 'Nous partageons notre passion et nos connaissances pour créer des liens durables entre l\'homme et le cheval.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Notre engagement vers la qualité se traduit par des services irréprochables et une attention constante aux détails.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Notre passion pour les chevaux"
        subtitle="À propos de nous"
        description="Découvrez l'histoire de L'écurie du Gringerberg, née de la passion d'une famille pour les chevaux et l'amour de la nature mosellane."
        primaryCTA={{
          text: 'Nous rencontrer',
          action: '/infos'
        }}
        className="bg-gradient-to-br from-primary/10 to-secondary/20"
      />

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-6">
                Notre mission
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  L'écurie du Gringerberg est née d'une passion familiale pour les chevaux et d'un amour profond de la nature mosellane. Notre mission est simple : partager cette passion en offrant des expériences équestres authentiques et mémorables.
                </p>
                <p>
                  Nous croyons fermement que l'équitation est un art qui unit l'homme à l'animal dans le respect mutuel. C'est pourquoi nous mettons un point d'honneur à proposer des services qui privilégient le bien-être animal et l'harmonie avec la nature.
                </p>
                <p>
                  Que vous veniez pour une première approche du cheval ou que vous nous confiiez votre compagnon en pension, vous trouverez chez nous une équipe dévouée et des installations pensées pour le bonheur de tous.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1996334/pexels-photo-1996334.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ferme du Gringerberg"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-4">
              L'histoire de la Ferme du Gringerberg
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un lieu chargé d'histoire où tradition et modernité se rencontrent pour le bonheur des chevaux et de leurs cavaliers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-serif font-bold text-primary mb-4">1980</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Les débuts</h3>
              <p className="text-gray-600">
                Acquisition de la propriété familiale et premiers aménagements pour accueillir les chevaux dans des conditions optimales.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-serif font-bold text-primary mb-4">2000</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Développement</h3>
              <p className="text-gray-600">
                Modernisation des installations et développement des activités de balades pour partager notre passion avec le public.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-serif font-bold text-primary mb-4">2025</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Aujourd'hui</h3>
              <p className="text-gray-600">
                Une écurie moderne et respectueuse de l'environnement, reconnue pour la qualité de ses services et son approche éthique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-4">
              Rencontrez notre équipe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des professionnels passionnés au service de votre expérience équestre
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <img
                    src="https://images.pexels.com/photos/1996339/pexels-photo-1996339.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Yannick Weber"
                    className="w-64 h-64 mx-auto lg:w-full lg:h-80 object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
                    Yannick Weber
                  </h3>
                  <p className="text-lg text-primary font-medium mb-4">
                    Propriétaire et fondateur
                  </p>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Passionné d'équitation depuis plus de 30 ans, Yannick a fondé L'écurie du Gringerberg avec la vision de créer un lieu où le bien-être animal et le plaisir des cavaliers se rencontrent.
                    </p>
                    <p>
                      Fort de son expérience et de sa connaissance approfondie des chevaux, il encadre personnellement les balades et veille au quotidien au bien-être de tous les pensionnaires de l'écurie.
                    </p>
                    <p>
                      Sa philosophie : "Chaque cheval est unique et mérite respect, attention et soins adaptés à sa personnalité."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-4">
              Nos valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions et définissent notre approche de l'équitation et du soin des chevaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm text-center hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment Section */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Un cadre naturel exceptionnel
              </h2>
              <div className="space-y-4 text-white/90">
                <p>
                  Nichée au cœur de la Moselle, notre écurie bénéficie d'un environnement naturel préservé qui offre des conditions idéales pour le bien-être des chevaux et le plaisir des cavaliers.
                </p>
                <p>
                  Nos prairies verdoyantes, nos sentiers forestiers et nos installations modernes créent un équilibre parfait entre nature sauvage et confort domestique.
                </p>
                <p>
                  C'est dans ce cadre privilégié que nous accueillons nos visiteurs pour des moments d'évasion et de communion avec la nature.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1996331/pexels-photo-1996331.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Paysage de Moselle"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;