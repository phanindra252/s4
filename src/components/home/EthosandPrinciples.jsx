import React from 'react';

const EthosSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div
      className="relative bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('src/components/04/Sketch-2.svg')", // Replace with your image URL
      }}
    >
      <div className="relative z-10 text-center p-8">
        <h1 className="text-5xl font-bold mb-4 text-black">Our Ethos And Principles:</h1>
        <p className="text-xl max-w-2xl mx-auto text-black">
          Our Ethos And Principles:
        </p>
      </div>
    </div>

        
        {/* Principles */}
        <div className=" md:pt-8 flex space-x-2">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="mr-2">→</span>
              Transparency
            </h3>
            <p className="text-gray-600">
              From inception to completion, we ensure regular and effective
              communication with our clients. Your input is vital in order for our
              team to translate your dreams into reality.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="mr-2">→</span>
              Dependability
            </h3>
            <p className="text-gray-600">
              We can be relied upon to deliver outstanding results for each and
              every project. Our clients feedback and appreciation speak volumes
              for the outstanding quality of workmanship.
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default EthosSection;