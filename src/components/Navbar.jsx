import { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-lg font-bold text-gray-800">
        <a href="/" className="flex items-center">
          <img src="/images/S4Brothers-Main-Logo.svg" className="h-8 mr-2" />
        </a>
      </div>

      {/* Navigation links */}
      <div className="hidden md:flex space-x-8 text-gray-600">
        <a href="#home" className="hover:text-gray-800">
          Home
        </a>
        <a href="#about" className="hover:text-gray-800">
          About Us
        </a>
        <a href="#services" className="hover:text-gray-800">
          Our Services
        </a>
        <a href="#projects" className="hover:text-gray-800">
          Projects
        </a>
        <a href="#contact" className="hover:text-gray-800">
          Get in Touch
        </a>
      </div>

      {/* Social Icons */}
      <div className="hidden md:flex items-center space-x-4 text-gray-600">
        <a href="https://facebook.com" className="hover:text-gray-800">
          <FaFacebookF />
        </a>
        <a href="https://linkedin.com" className="hover:text-gray-800">
          <FaLinkedinIn />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col space-y-4 py-4 px-6 text-gray-600">
            <a href="#home" className="hover:text-gray-800">
              Home
            </a>
            <a href="#about" className="hover:text-gray-800">
              About Us
            </a>
            <a href="#services" className="hover:text-gray-800">
              Our Services
            </a>
            <a href="#projects" className="hover:text-gray-800">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-800">
              Get in Touch
            </a>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-800">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-800">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
