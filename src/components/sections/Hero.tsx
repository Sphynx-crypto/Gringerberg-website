import React from 'react';
import Button from '../ui/Button';
import { Phone, ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA?: {
    text: string;
    action: string;
  };
  secondaryCTA?: {
    text: string;
    action: string;
  };
  backgroundImage?: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  className = ''
}) => {
  return (
    <section className={`relative py-20 lg:py-32 overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-secondary/20"></div>
      
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            {subtitle && (
              <p className="text-primary font-medium mb-4 uppercase tracking-wide text-sm">
                {subtitle}
              </p>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              {title}
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCTA && (
                <Button 
                  to="/infos"
                  size="lg"
                  icon={Phone}
                >
                  {primaryCTA.text}
                </Button>
              )}
              
              {secondaryCTA && (
                <Button 
                  to={secondaryCTA.action}
                  variant="outline"
                  size="lg"
                  icon={ArrowRight}
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          </div>
          
          {/* Image */}
          <div className="lg:ml-8 animate-fade-in">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chevaux dans la nature"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;