const Back = () => {
    return (
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('src/components/portfolio-3/Portfolio-3-1.png')`,
        }}
      >
  
        {/* Centered Text */}
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-white text-5xl md:text-7xl font-bold">Portfolio-3</h1>
        </div>
      </div>
    );
  };
  
  

  const RenovationHeader = () => {
    return (
      <div className="w-full min-h-[400px] bg-neutral-50 flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-8">
          House Renovation
        </h1>
        
        <p className="text-center max-w-2xl text-neutral-700 text-lg leading-relaxed mb-16">
          Fiona & Wilson purchased this well-located property for their growing
          family. They managed to find a perfect location but lot needs to be
          done to the property.
        </p>
        
        <div className="relative w-full max-w-4xl text-center">
          <div className="text-[120px] md:text-[180px] lg:text-[220px] font-bold text-white tracking-widest">
            BEFORE
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-800 text-lg tracking-widest">
            BEFORE
          </div>
        </div>
      </div>
    );
  };
  
  

  const RenovationFooter = () => {
    return (
      <div className="w-full min-h-[400px] bg-neutral-50 flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-8">
        S4Brothers Onboard </h1>
        
        <p className="text-center max-w-2xl text-neutral-700 text-lg leading-relaxed mb-16">
        A construction company to accept the challenge and fulfil the dreams of Fiona & Wilson, for themselves and for their beautiful kids!
        </p>
        
        <div className="relative w-full max-w-4xl text-center">
          <div className="text-[120px] md:text-[180px] lg:text-[220px] font-bold text-white tracking-widest">
            AFTER
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-800 text-lg tracking-widest">
            AFTER
          </div>
        </div>
      </div>
    );
  };
  
  

const Photos = () => {
  const images = [
    "src/components/portfolio-3/IMG-20230129-WA0000.jpg",
    "src/components/portfolio-3/IMG-20230129-WA0001.jpg",
    "src/components/portfolio-3/IMG-20230129-WA0002.jpg",
    "src/components/portfolio-3/IMG-20230131-WA0001.jpg",
  ];

  return (
    <div className="flex justify-center bg-white">
      <div className="w-full max-w-6xl text-center">

        {/* Image Grid */}
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-200"
            >
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="w-full h-32 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

const SyncedSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  // Settings for the main slider
  const mainSettings = {
    asNavFor: nav2,
    ref: slider => (sliderRef1 = slider),
    arrows: true,
    fade: true,
    className: "mb-4"
  };

  // Settings for the thumbnail slider
  const thumbSettings = {
    asNavFor: nav1,
    ref: slider => (sliderRef2 = slider),
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    className: "thumbnail-slider",
    centerMode: true,
    centerPadding: '0px'
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Main Slider */}
      <Slider {...mainSettings}>
        <div className="p-2">
          <img 
            src="src/components/portfolio-3/IMG-20230225-WA0001.jpg" 
            alt="Slide 1"
            className="w-full h-[400px] object-cover rounded-lg" 
          />
        </div>
        <div className="p-2">
          <img 
            src="src/components/portfolio-3/IMG-20230225-WA0002.jpg" 
            alt="Slide 2"
            className="w-full h-[400px] object-cover rounded-lg" 
          />
        </div>
        <div className="p-2">
          <img 
            src="src/components/portfolio-3/IMG-20230225-WA0003.jpg" 
            alt="Slide 3"
            className="w-full h-[400px] object-cover rounded-lg" 
          />
        </div>
        <div className="p-2">
          <img 
            src="src/components/portfolio-3/IMG-20230225-WA0005.jpg" 
            alt="Slide 4"
            className="w-full h-[400px] object-cover rounded-lg" 
          />
        </div>
        <div className="p-2">
          <img 
            src="src/components/portfolio-3/IMG-20230225-WA0013.jpg" 
            alt="Slide 5"
            className="w-full h-[400px] object-cover rounded-lg" 
          />
        </div>
      </Slider>

      {/* Thumbnail Slider */}
      <Slider {...thumbSettings}>
      <div className="p-2">
          <img 
            src="src/components/portfolio-3/IMG-20230225-WA0002.jpg"
            alt="Thumbnail 2"
            className="w-full h-24 object-cover rounded-lg cursor-pointer" 
          />
        </div>
        <div className="p-2">
          <img 
          src="src/components/portfolio-3/IMG-20230225-WA0003.jpg" 
            alt="Thumbnail 3"
            className="w-full h-24 object-cover rounded-lg cursor-pointer" 
          />
        </div>
        <div className="p-2">
          <img 
            src="src/components/portfolio-3/IMG-20230225-WA0005.jpg" 
            alt="Thumbnail 4"
            className="w-full h-24 object-cover rounded-lg cursor-pointer" 
          />
        </div>
        <div className="p-2">
          <img 
            src="src/components/portfolio-3/IMG-20230225-WA0013.jpg" 
            alt="Thumbnail 5"
            className="w-full h-24 object-cover rounded-lg cursor-pointer" 
          />
        </div>
        <div className="p-2">
          <img 
            src="src/components/portfolio-3/IMG-20230225-WA0001.jpg" 
            alt="Thumbnail 1"
            className="w-full h-24 object-cover rounded-lg cursor-pointer" 
          />
        </div>
      </Slider>
    </div>
  );
};



const SuccessStory = () => {
  return (
    <div className="w-full bg-neutral-50 px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Key For Our Success
            </h2>
            <p className="text-lg text-neutral-800">
              "The smile on the faces of this family makes S4 Brothers Ltd. very proud and happy!!"
            </p>
          </div>
          
          <button className="border border-neutral-800 px-8 py-3 text-sm tracking-widest uppercase hover:bg-neutral-800 hover:text-white transition-colors duration-300">
            Get in Touch
          </button>
        </div>

        {/* Middle Column */}
        <div className="space-y-4">
          <h3 className="text-2xl font-light text-neutral-800">
            Communication
          </h3>
          <p className="text-neutral-600 leading-relaxed">
            Effective communication and a lot of TLC was the key to making this property from a run-down house to a family home, using each and every available inch to use.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <h3 className="text-2xl font-light text-neutral-800">
            A New Look
          </h3>
          <p className="text-neutral-600 leading-relaxed">
            A new kitchen attached to a perfect utility room, a brand new family bathroom and a whole new look to the rest of the house has made this purchase worthwhile.
          </p>
        </div>
      </div>
    </div>
  );
};

export {Back, RenovationHeader, RenovationFooter, Photos, SyncedSlider, SuccessStory};
  
