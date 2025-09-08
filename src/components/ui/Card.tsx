import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import Button from './Button';

interface CardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  features: string[];
  linkText?: string;
  linkTo?: string;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  linkText,
  linkTo,
  onClick,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 hover:scale-[1.02] ${className}`}>
      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      
      <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
        {title}
      </h3>
      
      {description && (
        <p className="text-gray-600 mb-4">
          {description}
        </p>
      )}
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2 font-bold">•</span>
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      {linkText && linkTo && (
        <Button to={linkTo} variant="outline" size="sm" className="w-full">
          {linkText}
        </Button>
      )}
      
      {linkText && onClick && (
        <Button onClick={onClick} variant="outline" size="sm" className="w-full">
          {linkText}
        </Button>
      )}
    </div>
  );
};

export default Card;