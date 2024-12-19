const serviceData = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mx-auto stroke-current fill-none"
      >
        <path
          d="M3 12h18M3 6h18M3 18h18"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Kitchen",
    description:
      "Whether you want to use it as an extension of yourself or simply for cooking, we are here to help!",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mx-auto stroke-current fill-none"
      >
        <path
          d="M21 8V7a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1m18 0v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0H3"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Bathroom",
    description:
      "Tired of your current bathroom? Transform your bathroom into a sanctuary with our luxury bathroom options and let the stresses of everyday life drain away.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mx-auto stroke-current fill-none"
      >
        <path
          d="M3 12h18M3 6h18M3 18h18"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Extension",
    description:
      "A side, rear or any other extension for your property - we'll get any job done promptly with high standards of workmanship.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mx-auto stroke-current fill-none"
      >
        <path d="M4 7V4h16v3M4 7v13h16V7M4 7H2m18 0h2" strokeWidth="2" />
      </svg>
    ),
    title: "Roofing",
    description:
      "We build new roofs, provide roof repairs and carry out full roof inspections – ensuring that the safety of your home.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mx-auto stroke-current fill-none"
      >
        <path
          d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "New Build",
    description:
      "Our staff specialises in both modern and traditional style homes which allows us to provide an all-encompassing service for our clients.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mx-auto stroke-current fill-none"
      >
        <path
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Electrical Works",
    description:
      "We cater to all types of electrical works from re-wiring to maintenance and repairs.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mx-auto stroke-current fill-none"
      >
        <path
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Carpentry",
    description:
      "If in need of carpentry or joinery works, from custom furniture to decking, we have you covered.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mx-auto stroke-current fill-none"
      >
        <path d="M21 3v7h-7m7-7L12 12m9-9H3v18h18V3z" strokeWidth="2" />
      </svg>
    ),
    title: "Heating",
    description:
      "With our vast experience, we handle anything from boiler repairs to full central heating installations.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mx-auto stroke-current fill-none"
      >
        <path
          d="M7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zM7 8h10M7 12h10M7 16h10"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Landscaping",
    description:
      "We undertake both soft and hard landscaping works to transform your outdoor space.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mx-auto stroke-current fill-none"
      >
        <path d="M12 19V5m0 14l-7-7m7 7l7-7" strokeWidth="2" />
      </svg>
    ),
    title: "Plumbing",
    description:
      "Our plumbing division prides itself on providing an excellent service.",
  },
];

const ServicesSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-gray-600 uppercase tracking-wide">
            Our Services
          </h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            What We Do
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {serviceData.map((service, index) => (
            <div key={index} className="pt-6">
              <div className="flow-root rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center rounded-xl bg-blue-100 p-3">
                    {service.icon}
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
