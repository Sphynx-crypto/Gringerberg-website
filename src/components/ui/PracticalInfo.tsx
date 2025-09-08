import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle } from 'lucide-react';
import Button from './Button';

const PracticalInfo: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Adresse',
      content: ['150 rue Brühl', '57915 Woustviller', 'Moselle, France'],
      multiline: true
    },
    {
      icon: Phone,
      label: 'Téléphone',
      content: ['07 78 70 81 12'],
      link: 'tel:0778708112'
    },
    {
      icon: Mail,
      label: 'Email',
      content: ['yannick.faypam@hotmail.fr'],
      link: 'mailto:yannick.faypam@hotmail.fr'
    },
    {
      icon: Clock,
      label: 'Horaires',
      content: ['Lun–Dim : 9h–18h', 'Sur rendez-vous uniquement'],
      multiline: true
    }
  ];

  const quickActions = [
    {
      icon: Phone,
      text: 'Appeler',
      href: 'tel:0778708112',
      variant: 'primary' as const
    },
    {
      icon: MessageCircle,
      text: 'Écrire un email',
      href: 'mailto:yannick.faypam@hotmail.fr',
      variant: 'outline' as const
    },
    {
      icon: Navigation,
      text: 'Itinéraire',
      href: 'https://maps.google.com/?q=150+rue+Brühl,+57915+Woustviller,+France',
      variant: 'outline' as const,
      target: '_blank'
    }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-fit">
      <h2 className="text-xl font-serif font-semibold text-neutral-900 mb-6">
        Informations pratiques
      </h2>
      
      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg flex-shrink-0 mt-0.5">
              <info.icon className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-neutral-900 mb-1">
                {info.label}
              </h3>
              <div className={info.multiline ? 'space-y-0.5' : ''}>
                {info.content.map((line, lineIndex) => (
                  <div key={lineIndex}>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                      >
                        {line}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-600">{line}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-neutral-900 mb-4">
          Actions rapides
        </h3>
        <div className="space-y-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              href={action.href}
              variant={action.variant}
              size="sm"
              icon={action.icon}
              className="w-full justify-start"
              {...(action.target && { target: action.target, rel: 'noopener noreferrer' })}
            >
              {action.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticalInfo;