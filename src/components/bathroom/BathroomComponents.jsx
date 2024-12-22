const Back = () => {
    return (
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('src/components/bathroom/Bathroom-Header.png')`,
        }}
      >
  
        {/* Centered Text */}
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-white text-5xl md:text-7xl font-bold">Bathroom</h1>
        </div>
      </div>
    );
  };
  

  const Modern = () => {
    return (
      <div className="flex w-full h-[600px]">
        {/* Left Image Section with sketch overlay - Fixed width */}
        <div className="w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
          <img
            src="src/components/bathroom/S4Brother-Pages.png"
            alt="Construction visualization"
            className="w-full h-full object-cover"
          />
          {/* Sketch effect overlay */}
        </div>
  
        {/* Right Content Section - Fixed width */}
        <div className="w-1/2 flex items-center p-24">
          <div className="max-w-xl">
            <h1 className="text-6xl font-light mb-8 leading-tight">
            Modern Kitchens -
              <br />
              More Than A
              <br />
              Place To Cook
            </h1>
  
            <p className="text-gray-700 text-lg leading-relaxed mb-12">
            The kitchen is not only a place to cook - it is a spine of a home-life where cooking and chilling out, alone or surrounded by the loved ones is a truly therapeutic experience! Market trends to constantly improvise the living environment has increasingly helped the kitchen designs to mature and evolve.
             To accomplish these standards the kitchens need to be designed to a specific set of practical requirements.
            </p>
  
            <button className="border border-gray-800 text-gray-800 px-12 py-4 uppercase text-sm tracking-wider hover:bg-gray-800 hover:text-white transition-colors duration-300">
             GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    );
  };
  


const Ourspecialist = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-6 grid grid-cols-2">
      {/* Header Section */}
      <div className="max-w-3xl">
        <h2 className="text-4xl font-normal mb-6">
          Our Specialist Team Stands Out
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          One of our distinguished points is that we work with clients from the very beginning to understand their needs and requirements. Our plans are their personalised visions and we never compromise in achieving even the unachievable.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Design Process */}
        <div className="space-y-4">
          <h3 className="text-2xl font-medium">Design Process</h3>
          <p className="text-gray-600 leading-relaxed">
            All clients come to us with some or the other design in mind. At times pictures from magazines and the Internet. Our commitment is to deliver with precision. We only use top speciation and quality materials to give you that extra peace of mind.
          </p>
        </div>

        {/* Craftsmanship */}
        <div className="space-y-4">
          <h3 className="text-2xl font-medium">Craftsmanship</h3>
          <p className="text-gray-600 leading-relaxed">
            Our professional team of kitchen fitters oversees every aspect of the kitchen installation process from start to finish. We aim to get the kitchen function at the earliest to minimise disruption in personal life. Our experienced teams do all the work effectively and on time.
          </p>
        </div>
      </div>
    </section>
  );
};



const Bathroomrenovations = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-6 grid grid-cols-2">
      {/* Header Section */}
      <div className="">
        {/* Right Content Section - Fixed width */}
        <div className="w-1/2">
          <div className="max-w-xl">
            <h1 className="text-5xl font-light mb-8 leading-tight">
              Kitchens
              <br />
              Renovation &
              <br />
              Makeover
              <br />
              Experts
            </h1>
  
            <button className="border border-gray-800 text-gray-800 px-12 py-4 uppercase text-sm tracking-wider hover:bg-gray-800 hover:text-white transition-colors duration-300">
              READ MORE
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Design Process */}
        <div className="space-y-4">
            <img src='src/components/bathroom/Bathroom-2.png' />
          <p className="text-gray-600 leading-relaxed">
          Our strategy not only provides maximum storage space but we prioritise permitting a walk-around space for ease of access to all parts of the kitchen.          </p>
        </div>

        {/* Craftsmanship */}
        <div className="space-y-4">
        <img src='src/components/bathroom/Bathroom-3.png' />
          <p className="text-gray-600 leading-relaxed">
          From modern to contemporary, eccentric to classic, we do it all and for all.          </p>
        </div>
      </div>
    </section>
  );
};

  export  {Back, Modern, Ourspecialist, Bathroomrenovations};
  