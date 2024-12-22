const HeroSection = () => {
    return (
      <div className="w-full py-16 px-4 bg-white flex justify-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row  items-start gap-12">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-normal text-gray-900 md:max-w-lg leading-tight">
            We Set The Highest<br/> Standards Of <br/>Quality <br />Construction.
          </h1>
          
          <p className="text-lg text-gray-600 md:max-w-lg leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the majority have 
            suffered alteration in some form, by injected humour, or randomised words which don't 
            look even.
          </p>
        </div>
      </div>
    );
  };


  const AboutUsHero = () => {
    return (
      <div
        className="relative w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url('src/components/aboutus/About-Us-1.png')`,
        }}
      >
  
        {/* Centered Text */}
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-white text-5xl md:text-7xl font-bold">About Us</h1>
        </div>
      </div>
    );
  };
  

const Female = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start bg-white lg:p-16">
      {/* Image Section */}
      <div className="lg:w-1/3 flex justify-center">
        <img
          src="src/components/aboutus/Qaisra-About.png" // Replace with the correct image path
          alt="Peacock Feather"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-16 text-center lg:text-left ">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
          A Female Led <br /> Construction <br /> Company.
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          As a female led construction company, our outlook <br /> and onion on our
          business is entirely unique. We <br /> provide a practical and delicate
          touch to designs<br />which differentiates us from our competitors.
        </p>
        <button className="px-8 py-3 border border-black text-black hover:bg-gray-200 transition duration-300 rounded">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

const Quote = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-white text-center">
      {/* Quote Text */}
      <p className="text-gray-600 text-lg max-w-3xl px-4">
        "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humour and some style."
      </p>
      {/* Author */}
      <p className="mt-6 text-lg font-semibold text-gray-800">
      MAYA ANGELOU
      </p>
    </div>
  );
};


const Feature = ({ number, title, description }) => (
  <div className="flex flex-col items-center text-center px-4 py-8 lg:py-12 space-y-4">
    <div className="text-4xl font-light text-gray-400">{number}</div>
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    <p className="text-gray-600 max-w-sm leading-relaxed">{description}</p>
  </div>
);


const FeaturesGrid = () => {
  const features = [
    {
      number: "1",
      title: "Space Conscious",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"
    },
    {
      number: "2",
      title: "Budget Bound",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in"
    },
    {
      number: "3",
      title: "Efficient Operations",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in"
    }
  ];

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              number={feature.number}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export {HeroSection, AboutUsHero, Female, Quote, FeaturesGrid};