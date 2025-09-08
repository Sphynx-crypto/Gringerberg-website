import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-neutral-900 pr-8">
              {item.question}
            </span>
            <ChevronDown 
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {openIndex === index && (
            <div className="px-6 pb-4 bg-gray-50 animate-fade-in">
              <p className="text-gray-700 leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;