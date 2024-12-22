const Team = () => {
    return (
      <div className="flex w-full h-[600px]">
        {/* Left Image Section with sketch overlay - Fixed width */}
        <div className="w-1/2 flex items-center p-24">
          <div className="max-w-xl">
            <h1 className="text-6xl font-light mb-8 leading-tight">
            Team & Craftmanship
            </h1>
  
            <p className="text-gray-700 text-lg leading-relaxed mb-12">
            Our space-conscious approach benefits our clients by using every last inch of any property to make the most of living space and to add value to the real estate. 
            Completion of projects within the given estimated time frame is one of the virtues we take pride in, without compromising on our quality commitment.
            Our highly capable teams are happy to undertake projects varying from bathroom and kitchen transformations, to lofts and extensions, garage conversions and even new builds.
            Whatever your needs and desires, we will deliver, offering well-organised project plans within various budgets.
            </p>
  
            <button className="border border-gray-800 text-gray-800 px-12 py-4 uppercase text-sm tracking-wider hover:bg-gray-800 hover:text-white transition-colors duration-300">
              GET IN TOUCH
            </button>
          </div>
        </div>
  
        {/* Right Content Section - Fixed width */}
        <div className="w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
          <img
            src="src/components/OurServices/p7-img2.jpg"
            alt="Construction visualization"
            className="w-full h-full object-cover"
          />
          {/* Sketch effect overlay */}
        </div>
      </div>
    );
  };
  

  const Wefollow = () => {
    return (
      <div className="flex w-full h-[600px]">
        {/* Left Image Section with sketch overlay - Fixed width */}
        <div className="w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
          <img
            src="src/components/OurServices/p7-img1.jpg"
            alt="Construction visualization"
            className="w-full h-full object-cover"
          />
          {/* Sketch effect overlay */}
        </div>
  
        {/* Right Content Section - Fixed width */}
        <div className="w-1/2 flex items-center p-24">
          <div className="max-w-xl">
            <h1 className="text-6xl font-light mb-8 leading-tight">
             
            We Follow The
              <br />
              Trends of Modern
              <br />
              Living.
            </h1>
  
            <p className="text-gray-700 text-lg leading-relaxed mb-12">
            S4 Brothers is a unique example of women's empowerment in the building and construction industry.
             A family-owned construction company that handles all aspects of property development, big and small.
              Our delicate touch to design paired with our ethos of transparency and dependability allows us to consistently take our client's properties to unseen heights.
            </p>
  
            <button className="border border-gray-800 text-gray-800 px-12 py-4 uppercase text-sm tracking-wider hover:bg-gray-800 hover:text-white transition-colors duration-300">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    );
  };
    

  export {Team, Wefollow};
  