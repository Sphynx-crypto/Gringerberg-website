import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

const ReviewsCarousel: React.FC<ReviewsCarouselProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isPaused, reviews.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement && carouselRef.current?.contains(document.activeElement)) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          goToPrevious();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          goToNext();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    carouselRef.current?.setAttribute('data-touch-start', touch.clientX.toString());
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    const startX = parseInt(carouselRef.current?.getAttribute('data-touch-start') || '0');
    const endX = touch.clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div
      ref={carouselRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Carrousel d'avis clients"
    >
      {/* Review Cards */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              aria-hidden={index !== currentIndex}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <div className="flex space-x-1">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed line-clamp-4">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={goToPrevious}
          className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Avis précédent"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Aller à l'avis ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Avis suivant"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

   
    </div>
  );
};

export default ReviewsCarousel;