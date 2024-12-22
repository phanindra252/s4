import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2 flex flex-col items-center md:items-start">
            <img
              src="src/components/04/Logo-Footer-1.svg"
              alt="Google Logo"
              className="w-28 mb-4"
            />
            <p className="text-center md:text-left">
              S4Brothers is a family-owned business that’s highly skilled in all aspects of construction and property management.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-300 hover:text-white">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-blue-300 hover:text-white">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Our Projects</a></li>
              <li><a href="#" className="hover:underline">What We Do</a></li>
              <li><a href="#" className="hover:underline">Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Extension</a></li>
              <li><a href="#" className="hover:underline">Roofing</a></li>
              <li><a href="#" className="hover:underline">Kitchen</a></li>
              <li><a href="#" className="hover:underline">Landscape</a></li>
              <li><a href="#" className="hover:underline">New Builds</a></li>
            </ul>
          </div>

          {/* More Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">More Info</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cookies Policy</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Membership */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-4">Membership</h3>
            <img
              src="src/components/07/certificate-excellence-2020.png"
              alt="Membership Badge"
              className="w-20 h-20"
            />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
