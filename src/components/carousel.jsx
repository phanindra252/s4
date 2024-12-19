import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Translate Your\nDreams Into\nReality!",
      subtitle: "CONSTRUCTION & PROPERTY MANAGEMENT",
      description:
        "Welcome to S4Brothers. We provide turnkey solutions catering to both residential and commercial needs.",
      buttonText: "EXPLORE",
      image: "/api/placeholder/1200/600",
    },
    {
      title: "Quality Construction\nServices",
      subtitle: "PROFESSIONAL EXCELLENCE",
      description:
        "Expert builders delivering exceptional results for your construction projects.",
      buttonText: "LEARN MORE",
      image: "/public/images/H2.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Navigation Arrows - Absolute positioned at edges */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative h-full max-w-[1400px] mx-auto">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-4 pointer-events-auto"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <ChevronLeft
                className="w-8 h-8 text-black/40 hover:text-black/60 transition-colors"
                strokeWidth={1}
              />
            </div>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-4 pointer-events-auto"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <ChevronRight
                className="w-8 h-8 text-black/40 hover:text-black/60 transition-colors"
                strokeWidth={1}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center z-20">
              <div className="max-w-[1400px] mx-auto px-24 w-full">
                <div className="max-w-xl">
                  <p className="text-white text-sm tracking-wider mb-6">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-white text-6xl font-light mb-6 whitespace-pre-line leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-white/80 text-lg mb-8">
                    {slide.description}
                  </p>
                  <button className="border border-white text-white px-12 py-4 text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-0.5 transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
