import Bathroom from "../04/Bathroom";
import Carpentry from "../04/Carpentry";
import Electrical from "../04/Electrical-Works";
import Heating from "../04/Heating";
import Kitchen from "../04/Kitchen"
import Landscaping from "../04/Landscaping";
import Newbuild from "../04/New-Build";
import Plumbing from "../04/Plumbing";
import Roofing from "../04/Roofing";

const serviceData = [
  {
    icon: (
    <Kitchen />
    ),
    title: "Kitchen",
    description:
      "Whether you want to use it as an extension of yourself or simply for cooking, we are here to help!",
  },
  {
    icon: (
      <Bathroom />
    ),
    title: "Bathroom",
    description:
      "Tired of your current bathroom? Transform your bathroom into a sanctuary with our luxury bathroom options and let the stresses of everyday life drain away.",
  },
  {
    icon: (
      <Kitchen />
    ),
    title: "Extension",
    description:
      "A side, rear or any other extension for your property - we'll get any job done promptly with high standards of workmanship.",
  },
  {
    icon: (
      <Roofing />
    ),
    title: "Roofing",
    description:
      "We build new roofs, provide roof repairs and carry out full roof inspections – ensuring that the safety of your home.",
  },
  {
    icon: (
      <Newbuild />
    ),
    title: "New Build",
    description:
      "Our staff specialises in both modern and traditional style homes which allows us to provide an all-encompassing service for our clients.",
  },
  {
    icon: (
      <Electrical />
    ),
    title: "Electrical Works",
    description:
      "We cater to all types of electrical works from re-wiring to maintenance and repairs.",
  },
  {
    icon: (
      <Carpentry />
    ),
    title: "Carpentry",
    description:
      "If in need of carpentry or joinery works, from custom furniture to decking, we have you covered.",
  },
  {
    icon: (
      <Heating />
    ),
    title: "Heating",
    description:
      "With our vast experience, we handle anything from boiler repairs to full central heating installations.",
  },
  {
    icon: (
    <Landscaping />
    ),
    title: "Landscaping",
    description:
      "We undertake both soft and hard landscaping works to transform your outdoor space.",
  },
  {
    icon: (
      <Plumbing />
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
