import React from "react";

const Cta= () => {
  return (
    <div className="relative bg-white h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="relative">
        <img
          src="src/components/home/CTA-S4B.png"
          alt="Background"
          className="w-[80%] mx-auto"
        />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <p className="uppercase tracking-wider text-sm mb-2">Yes, it's time</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Dream Project Started Today!
          </h1>
          <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-md shadow-md hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
