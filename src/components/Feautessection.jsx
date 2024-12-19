const FeaturesSection = () => {
  const features = [
    {
      number: "1",
      title: "Space Conscious",
      description:
        "We will use every last inch of the property to make the most of the living space and add value to the real estate.",
    },
    {
      number: "2",
      title: "Budget Bound",
      description:
        "We are happy to offer well organised project plans within various budgets. Simply contact us for a free estimate!",
    },
    {
      number: "3",
      title: "Efficient Operations",
      description:
        "Our services are completed in apt manner and time so you can get the much awaited revamped property at the earliest!",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Approval Section */}
      <div className="mb-24">
        <h3 className="text-gray-600 mb-8 text-lg">Approved By:</h3>
        <div className="flex justify-between items-center gap-8">
          <img
            src="/images/Sutton-Council.svg"
            alt="Sutton"
            className="h-12 object-contain"
          />
          <img
            src="/images/Group-8260.svg"
            alt="Croydon"
            className="h-16 object-contain"
          />
          <img
            src="/images/Bromley-Approved.svg"
            alt="Bromley"
            className="h-16 object-contain"
          />
          <img
            src="/images/home-Build.webp"
            alt="Home & Build"
            className="h-12 object-contain"
          />
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="relative mb-8">
              <div className="text-[180px] font-light text-gray-100 leading-none">
                {feature.number}
              </div>
            </div>
            <h3 className="text-2xl font-medium text-gray-800 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
