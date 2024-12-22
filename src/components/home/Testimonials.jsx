import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "I would not hesitate to recommend this company. Not only are they competitive in their pricing but the standard of work produced is outstanding...",
    author: "Karen"
  },
  {
    text: "It has been the best decision to get my house renovated by Mrs Dhillon. She has been fantastic from planning to execution...",
    author: "Lekha"
  },
  {
    text: "Done the plumbing job at our place. Very thorough and professional job in the team. HIGHLY recommended...",
    author: "Trij"
  },
  {
    text: "Excellent service from start to finish. The team was professional and efficient.",
    author: "Alex"
  },
  {
    text: "Outstanding craftsmanship and attention to detail. Would definitely use again.",
    author: "Sam"
  },
  {
    text: "Great communication throughout the project. Delivered exactly what was promised.",
    author: "Jordan"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const totalSlides = testimonials.length;
  const transitionDuration = 1500;
  const autoplayDelay = 5000;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getWrappedIndex = (index) => {
    return ((index % testimonials.length) + testimonials.length) % testimonials.length;
  };

  const getCurrentTestimonials = (slidePosition) => {
    if (isMobile) {
      return [testimonials[getWrappedIndex(slidePosition)]];
    }
    return [
      testimonials[getWrappedIndex(slidePosition)],
      testimonials[getWrappedIndex(slidePosition + 1)],
      testimonials[getWrappedIndex(slidePosition + 2)]
    ];
  };

  const handleSlideChange = useCallback((newSlide) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(typeof newSlide === 'function' ? newSlide(currentSlide) : newSlide);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, transitionDuration);
  }, [currentSlide, isTransitioning]);

  useEffect(() => {
    let autoplayTimer;

    if (!autoplayPaused) {
      autoplayTimer = setInterval(() => {
        handleSlideChange((prev) => (prev + 1) % totalSlides);
      }, autoplayDelay);
    }

    return () => {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
      }
    };
  }, [handleSlideChange, autoplayPaused, totalSlides]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setAutoplayPaused(true);
      handleSlideChange((prev) => (prev + 1) % totalSlides);
      setTimeout(() => setAutoplayPaused(false), autoplayDelay);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setAutoplayPaused(true);
      handleSlideChange((prev) => (prev - 1 + totalSlides) % totalSlides);
      setTimeout(() => setAutoplayPaused(false), autoplayDelay);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning) {
      setAutoplayPaused(true);
      handleSlideChange(index);
      setTimeout(() => setAutoplayPaused(false), autoplayDelay);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Our Clients Say</h2>
      
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-1500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div 
                key={slideIndex} 
                className={`w-full flex-shrink-0 grid gap-6 ${
                  isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'
                }`}
              >
                {getCurrentTestimonials(slideIndex).map((testimonial, index) => (
                  <div 
                    key={`${slideIndex}-${index}`} 
                    className="bg-white p-6 rounded-lg shadow-lg"
                  >
                    <div className="text-center">
                      <p className="text-lg text-gray-700 mb-4">
                        {testimonial.text}
                      </p>
                      <p className="text-sm text-gray-500 uppercase tracking-wider">
                        By {testimonial.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute -left-4 top-1/2 -translate-y-1/2 p-2 bg-white shadow-lg hover:bg-gray-100 rounded-full transition-opacity duration-300 hover:opacity-80 disabled:opacity-50"
          disabled={isTransitioning}
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 bg-white shadow-lg hover:bg-gray-100 rounded-full transition-opacity duration-300 hover:opacity-80 disabled:opacity-50"
          disabled={isTransitioning}
          aria-label="Next testimonials"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'bg-gray-800 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;