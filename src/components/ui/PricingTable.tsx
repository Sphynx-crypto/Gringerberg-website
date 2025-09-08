import React from 'react';
import Button from './Button';
import { Check } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  duration?: string;
  features: string[];
  popular?: boolean;
  cta?: string;
}

interface PricingTableProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

const PricingTable: React.FC<PricingTableProps> = ({ plans, title, description }) => {
  return (
    <div>
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-semibold text-neutral-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl shadow-sm border ${
              plan.popular ? 'border-primary shadow-lg scale-105' : 'border-gray-200'
            } p-8 hover:shadow-md transition-all duration-300`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                  Populaire
                </span>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                {plan.duration && (
                  <span className="text-gray-600 ml-2">/ {plan.duration}</span>
                )}
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button
              variant={plan.popular ? 'primary' : 'outline'}
              className="w-full"
              to="/infos"
            >
              {plan.cta || 'Réserver'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;