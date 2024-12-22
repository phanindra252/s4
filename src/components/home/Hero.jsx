const ConstructionHero = () => {
  return (
    <div className="flex w-full h-[600px]">
      {/* Left Image Section with sketch overlay - Fixed width */}
      <div className="w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
        <img
          src="src/components/home/S4B-About-Image.png"
          alt="Construction visualization"
          className="w-full h-full object-cover"
        />
        {/* Sketch effect overlay */}
      </div>

      {/* Right Content Section - Fixed width */}
      <div className="w-1/2 flex items-center p-24">
        <div className="max-w-xl">
          <h1 className="text-6xl font-light mb-8 leading-tight">
            A Versatile
            <br />
            Construction
            <br />
            Company:
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-12">
            We are a construction company which provides unbeatable services and
            holds extraordinary values. S4 Brothers Ltd. is a family-owned,
            female-found and led business that is well-versed in all aspects of
            property building, renovations and development. Whatever your needs
            and desires are, your property is in safe and capable hands.
          </p>

          <button className="border border-gray-800 text-gray-800 px-12 py-4 uppercase text-sm tracking-wider hover:bg-gray-800 hover:text-white transition-colors duration-300">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConstructionHero;
